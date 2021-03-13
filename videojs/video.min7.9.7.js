/**
 * @license
 * Video.js 7.9.7 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("global/window"), require("global/document")) : "function" == typeof define && define.amd ? define(["global/window", "global/document"], t) : (e = e || self).videojs = t(e.window, e.document)
} (this,
function(y, h) {
    "use strict";
    y = y && Object.prototype.hasOwnProperty.call(y, "default") ? y.
default:
    y,
    h = h && Object.prototype.hasOwnProperty.call(h, "default") ? h.
default:
    h;
    var d = "7.9.7",
    l = [],
    e = function(o, u) {
        return function(e, t, i) {
            var n = u.levels[t],
            r = new RegExp("^(" + n + ")$");
            if ("log" !== e && i.unshift(e.toUpperCase() + ":"), i.unshift(o + ":"), l) {
                l.push([].concat(i));
                var s = l.length - 1e3;
                l.splice(0, 0 < s ? s: 0)
            }
            if (y.console) {
                var a = y.console[e];
                a || "debug" !== e || (a = y.console.info || y.console.log),
                a && n && r.test(e) && a[Array.isArray(i) ? "apply": "call"](y.console, i)
            }
        }
    };
    var p = function t(i) {
        function n() {
            for (var e = arguments.length,
            t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            r("log", s, t)
        }
        var r, s = "info";
        return r = e(i, n),
        n.createLogger = function(e) {
            return t(i + ": " + e)
        },
        n.levels = {
            all: "debug|log|warn|error",
            off: "",
            debug: "debug|log|warn|error",
            info: "log|warn|error",
            warn: "warn|error",
            error: "error",
            DEFAULT: s
        },
        n.level = function(e) {
            if ("string" == typeof e) {
                if (!n.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
                s = e
            }
            return s
        },
        (n.history = function() {
            return l ? [].concat(l) : []
        }).filter = function(t) {
            return (l || []).filter(function(e) {
                return new RegExp(".*" + t + ".*").test(e[0])
            })
        },
        n.history.clear = function() {
            l && (l.length = 0)
        },
        n.history.disable = function() {
            null !== l && (l.length = 0, l = null)
        },
        n.history.enable = function() {
            null === l && (l = [])
        },
        n.error = function() {
            for (var e = arguments.length,
            t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return r("error", s, t)
        },
        n.warn = function() {
            for (var e = arguments.length,
            t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return r("warn", s, t)
        },
        n.debug = function() {
            for (var e = arguments.length,
            t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return r("debug", s, t)
        },
        n
    } ("VIDEOJS"),
    f = p.createLogger;
    function t(e, t) {
        return e(t = {
            exports: {}
        },
        t.exports),
        t.exports
    }
    var r = t(function(e) {
        function t() {
            return e.exports = t = Object.assign ||
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            },
            t.apply(this, arguments)
        }
        e.exports = t
    }),
    i = Object.prototype.toString,
    s = function(e) {
        return o(e) ? Object.keys(e) : []
    };
    function a(t, i) {
        s(t).forEach(function(e) {
            return i(t[e], e)
        })
    }
    function m(i) {
        for (var e = arguments.length,
        t = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
        return Object.assign ? r.apply(void 0, [i].concat(t)) : (t.forEach(function(e) {
            e && a(e,
            function(e, t) {
                i[t] = e
            })
        }), i)
    }
    function o(e) {
        return !! e && "object" == typeof e
    }
    function u(e) {
        return o(e) && "[object Object]" === i.call(e) && e.constructor === Object
    }
    function n(e, t) {
        if (!e || !t) return "";
        if ("function" != typeof y.getComputedStyle) return "";
        var i = y.getComputedStyle(e);
        return i ? i.getPropertyValue(t) || i[t] : ""
    }
    function c(e) {
        return "string" == typeof e && Boolean(e.trim())
    }
    function g(e) {
        if (0 <= e.indexOf(" ")) throw new Error("class has illegal whitespace characters")
    }
    function v() {
        return h === y.document
    }
    function _(e) {
        return o(e) && 1 === e.nodeType
    }
    function b() {
        try {
            return y.parent !== y.self
        } catch(e) {
            return ! 0
        }
    }
    function T(n) {
        return function(e, t) {
            if (!c(e)) return h[n](null);
            c(t) && (t = h.querySelector(t));
            var i = _(t) ? t: h;
            return i[n] && i[n](e)
        }
    }
    function S(e, i, t, n) {
        void 0 === e && (e = "div"),
        void 0 === i && (i = {}),
        void 0 === t && (t = {});
        var r = h.createElement(e);
        return Object.getOwnPropertyNames(i).forEach(function(e) {
            var t = i[e]; - 1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (p.warn("Setting attributes in the second argument of createEl()\nhas been deprecated. Use the third argument instead.\ncreateEl(type, properties, attributes). Attempting to set " + e + " to " + t + "."), r.setAttribute(e, t)) : "textContent" === e ? k(r, t) : r[e] !== t && (r[e] = t)
        }),
        Object.getOwnPropertyNames(t).forEach(function(e) {
            r.setAttribute(e, t[e])
        }),
        n && V(r, n),
        r
    }
    function k(e, t) {
        return "undefined" == typeof e.textContent ? e.innerText = t: e.textContent = t,
        e
    }
    function C(e, t) {
        t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
    }
    function E(e, t) {
        return g(t),
        e.classList ? e.classList.contains(t) : function(e) {
            return new RegExp("(^|\\s)" + e + "($|\\s)")
        } (t).test(e.className)
    }
    function w(e, t) {
        return e.classList ? e.classList.add(t) : E(e, t) || (e.className = (e.className + " " + t).trim()),
        e
    }
    function x(e, t) {
        return e.classList ? e.classList.remove(t) : (g(t), e.className = e.className.split(/\s+/).filter(function(e) {
            return e !== t
        }).join(" ")),
        e
    }
    function A(e, t, i) {
        var n = E(e, t);
        if ("function" == typeof i && (i = i(e, t)), "boolean" != typeof i && (i = !n), i !== n) return i ? w(e, t) : x(e, t),
        e
    }
    function I(i, n) {
        Object.getOwnPropertyNames(n).forEach(function(e) {
            var t = n[e];
            null === t || "undefined" == typeof t || !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "": t)
        })
    }
    function P(e) {
        var t = {},
        i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
        if (e && e.attributes && 0 < e.attributes.length) for (var n = e.attributes,
        r = n.length - 1; 0 <= r; r--) {
            var s = n[r].name,
            a = n[r].value;
            "boolean" != typeof e[s] && -1 === i.indexOf("," + s + ",") || (a = null !== a),
            t[s] = a
        }
        return t
    }
    function L(e, t) {
        return e.getAttribute(t)
    }
    function O(e, t, i) {
        e.setAttribute(t, i)
    }
    function D(e, t) {
        e.removeAttribute(t)
    }
    function N() {
        h.body.focus(),
        h.onselectstart = function() {
            return ! 1
        }
    }
    function R() {
        h.onselectstart = function() {
            return ! 0
        }
    }
    function U(e) {
        if (e && e.getBoundingClientRect && e.parentNode) {
            var t = e.getBoundingClientRect(),
            i = {};
            return ["bottom", "height", "left", "right", "top", "width"].forEach(function(e) {
                void 0 !== t[e] && (i[e] = t[e])
            }),
            i.height || (i.height = parseFloat(n(e, "height"))),
            i.width || (i.width = parseFloat(n(e, "width"))),
            i
        }
    }
    function M(e) {
        if (!e || e && !e.offsetParent) return {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        for (var t = e.offsetWidth,
        i = e.offsetHeight,
        n = 0,
        r = 0; n += e.offsetLeft, r += e.offsetTop, e = e.offsetParent;);
        return {
            left: n,
            top: r,
            width: t,
            height: i
        }
    }
    function B(e, t) {
        var i = {},
        n = M(t.target),
        r = M(e),
        s = r.width,
        a = r.height,
        o = t.offsetY - (r.top - n.top),
        u = t.offsetX - (r.left - n.left);
        return t.changedTouches && (u = t.changedTouches[0].pageX - r.left, o = t.changedTouches[0].pageY + r.top),
        i.y = 1 - Math.max(0, Math.min(1, o / a)),
        i.x = Math.max(0, Math.min(1, u / s)),
        i
    }
    function j(e) {
        return o(e) && 3 === e.nodeType
    }
    function F(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild);
        return e
    }
    function H(e) {
        return "function" == typeof e && (e = e()),
        (Array.isArray(e) ? e: [e]).map(function(e) {
            return "function" == typeof e && (e = e()),
            _(e) || j(e) ? e: "string" == typeof e && /\S/.test(e) ? h.createTextNode(e) : void 0
        }).filter(function(e) {
            return e
        })
    }
    function V(t, e) {
        return H(e).forEach(function(e) {
            return t.appendChild(e)
        }),
        t
    }
    function q(e, t) {
        return V(F(e), t)
    }
    function W(e) {
        return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || ("mouseup" === e.type && 0 === e.button && 0 === e.buttons || 0 === e.button && 1 === e.buttons))
    }
    var z, G = T("querySelector"),
    X = T("querySelectorAll"),
    K = Object.freeze({
        __proto__: null,
        isReal: v,
        isEl: _,
        isInFrame: b,
        createEl: S,
        textContent: k,
        prependTo: C,
        hasClass: E,
        addClass: w,
        removeClass: x,
        toggleClass: A,
        setAttributes: I,
        getAttributes: P,
        getAttribute: L,
        setAttribute: O,
        removeAttribute: D,
        blockTextSelection: N,
        unblockTextSelection: R,
        getBoundingClientRect: U,
        findPosition: M,
        getPointerPosition: B,
        isTextNode: j,
        emptyEl: F,
        normalizeContent: H,
        appendContent: V,
        insertContent: q,
        isSingleLeftClick: W,
        $: G,
        $$: X
    }),
    Y = !1,
    $ = function() {
        if (v() && !1 !== z.options.autoSetup) {
            var e = Array.prototype.slice.call(h.getElementsByTagName("video")),
            t = Array.prototype.slice.call(h.getElementsByTagName("audio")),
            i = Array.prototype.slice.call(h.getElementsByTagName("video-js")),
            n = e.concat(t, i);
            if (n && 0 < n.length) for (var r = 0,
            s = n.length; r < s; r++) {
                var a = n[r];
                if (!a || !a.getAttribute) {
                    Q(1);
                    break
                }
                void 0 === a.player && null !== a.getAttribute("data-setup") && z(a)
            } else Y || Q(1)
        }
    };
    function Q(e, t) {
        t && (z = t),
        y.setTimeout($, e)
    }
    function J() {
        Y = !0,
        y.removeEventListener("load", J)
    }
    v() && ("complete" === h.readyState ? J() : y.addEventListener("load", J));
    function Z(e) {
        var t = h.createElement("style");
        return t.className = e,
        t
    }
    function ee(e, t) {
        e.styleSheet ? e.styleSheet.cssText = t: e.textContent = t
    }
    var te, ie = 3;
    function ne() {
        return ie++
    }
    y.WeakMap || (te = function() {
        function e() {
            this.vdata = "vdata" + Math.floor(y.performance && y.performance.now() || Date.now()),
            this.data = {}
        }
        var t = e.prototype;
        return t.set = function(e, t) {
            var i = e[this.vdata] || ne();
            return e[this.vdata] || (e[this.vdata] = i),
            this.data[i] = t,
            this
        },
        t.get = function(e) {
            var t = e[this.vdata];
            if (t) return this.data[t];
            p("We have no data for this element", e)
        },
        t.has = function(e) {
            return e[this.vdata] in this.data
        },
        t.delete = function(e) {
            var t = e[this.vdata];
            t && (delete this.data[t], delete e[this.vdata])
        },
        e
    } ());
    var re, se = y.WeakMap ? new WeakMap: new te;
    function ae(e, t) {
        if (se.has(e)) {
            var i = se.get(e);
            0 === i.handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)),
            Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled),
            0 === Object.getOwnPropertyNames(i).length && se.delete(e)
        }
    }
    function oe(t, i, e, n) {
        e.forEach(function(e) {
            t(i, e, n)
        })
    }
    function ue(e) {
        if (e.fixed_) return e;
        function t() {
            return ! 0
        }
        function i() {
            return ! 1
        }
        if (!e || !e.isPropagationStopped) {
            var n = e || y.event;
            for (var r in e = {},
            n)"layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && n.preventDefault || (e[r] = n[r]));
            if (e.target || (e.target = e.srcElement || h), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement: e.fromElement), e.preventDefault = function() {
                n.preventDefault && n.preventDefault(),
                e.returnValue = !1,
                n.returnValue = !1,
                e.defaultPrevented = !0
            },
            e.defaultPrevented = !1, e.stopPropagation = function() {
                n.stopPropagation && n.stopPropagation(),
                e.cancelBubble = !0,
                n.cancelBubble = !0,
                e.isPropagationStopped = t
            },
            e.isPropagationStopped = i, e.stopImmediatePropagation = function() {
                n.stopImmediatePropagation && n.stopImmediatePropagation(),
                e.isImmediatePropagationStopped = t,
                e.stopPropagation()
            },
            e.isImmediatePropagationStopped = i, null !== e.clientX && void 0 !== e.clientX) {
                var s = h.documentElement,
                a = h.body;
                e.pageX = e.clientX + (s && s.scrollLeft || a && a.scrollLeft || 0) - (s && s.clientLeft || a && a.clientLeft || 0),
                e.pageY = e.clientY + (s && s.scrollTop || a && a.scrollTop || 0) - (s && s.clientTop || a && a.clientTop || 0)
            }
            e.which = e.charCode || e.keyCode,
            null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
        }
        return e.fixed_ = !0,
        e
    }
    var le = function() {
        if ("boolean" != typeof re) {
            re = !1;
            try {
                var e = Object.defineProperty({},
                "passive", {
                    get: function() {
                        re = !0
                    }
                });
                y.addEventListener("test", null, e),
                y.removeEventListener("test", null, e)
            } catch(e) {}
        }
        return re
    },
    ce = ["touchstart", "touchmove"];
    function he(a, e, t) {
        if (Array.isArray(e)) return oe(he, a, e, t);
        se.has(a) || se.set(a, {});
        var o = se.get(a);
        if (o.handlers || (o.handlers = {}), o.handlers[e] || (o.handlers[e] = []), t.guid || (t.guid = ne()), o.handlers[e].push(t), o.dispatcher || (o.disabled = !1, o.dispatcher = function(e, t) {
            if (!o.disabled) {
                e = ue(e);
                var i = o.handlers[e.type];
                if (i) for (var n = i.slice(0), r = 0, s = n.length; r < s && !e.isImmediatePropagationStopped(); r++) try {
                    n[r].call(a, e, t)
                } catch(e) {
                    p.error(e)
                }
            }
        }), 1 === o.handlers[e].length) if (a.addEventListener) {
            var i = !1;
            le() && -1 < ce.indexOf(e) && (i = {
                passive: !0
            }),
            a.addEventListener(e, o.dispatcher, i)
        } else a.attachEvent && a.attachEvent("on" + e, o.dispatcher)
    }
    function de(e, t, i) {
        if (se.has(e)) {
            var n = se.get(e);
            if (n.handlers) {
                if (Array.isArray(t)) return oe(de, e, t, i);
                var r = function(e, t) {
                    n.handlers[t] = [],
                    ae(e, t)
                };
                if (void 0 !== t) {
                    var s = n.handlers[t];
                    if (s) if (i) {
                        if (i.guid) for (var a = 0; a < s.length; a++) s[a].guid === i.guid && s.splice(a--, 1);
                        ae(e, t)
                    } else r(e, t)
                } else for (var o in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {},
                o) && r(e, o)
            }
        }
    }
    function pe(e, t, i) {
        var n = se.has(e) ? se.get(e) : {},
        r = e.parentNode || e.ownerDocument;
        if ("string" == typeof t ? t = {
            type: t,
            target: e
        }: t.target || (t.target = e), t = ue(t), n.dispatcher && n.dispatcher.call(e, t, i), r && !t.isPropagationStopped() && !0 === t.bubbles) pe.call(null, r, t, i);
        else if (!r && !t.defaultPrevented && t.target && t.target[t.type]) {
            se.has(t.target) || se.set(t.target, {});
            var s = se.get(t.target);
            t.target[t.type] && (s.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), s.disabled = !1)
        }
        return ! t.defaultPrevented
    }
    function fe(e, t, i) {
        if (Array.isArray(t)) return oe(fe, e, t, i);
        function n() {
            de(e, t, n),
            i.apply(this, arguments)
        }
        n.guid = i.guid = i.guid || ne(),
        he(e, t, n)
    }
    function me(e, t, i) {
        function n() {
            de(e, t, n),
            i.apply(this, arguments)
        }
        n.guid = i.guid = i.guid || ne(),
        he(e, t, n)
    }
    function ge(e, t, i) {
        t.guid || (t.guid = ne());
        var n = t.bind(e);
        return n.guid = i ? i + "_" + t.guid: t.guid,
        n
    }
    function ve(t, i) {
        var n = y.performance.now();
        return function() {
            var e = y.performance.now();
            i <= e - n && (t.apply(void 0, arguments), n = e)
        }
    }
    function ye() {}
    var _e, be = Object.freeze({
        __proto__: null,
        fixEvent: ue,
        on: he,
        off: de,
        trigger: pe,
        one: fe,
        any: me
    });
    ye.prototype.allowedEvents_ = {},
    ye.prototype.addEventListener = ye.prototype.on = function(e, t) {
        var i = this.addEventListener;
        this.addEventListener = function() {},
        he(this, e, t),
        this.addEventListener = i
    },
    ye.prototype.removeEventListener = ye.prototype.off = function(e, t) {
        de(this, e, t)
    },
    ye.prototype.one = function(e, t) {
        var i = this.addEventListener;
        this.addEventListener = function() {},
        fe(this, e, t),
        this.addEventListener = i
    },
    ye.prototype.any = function(e, t) {
        var i = this.addEventListener;
        this.addEventListener = function() {},
        me(this, e, t),
        this.addEventListener = i
    },
    ye.prototype.dispatchEvent = ye.prototype.trigger = function(e) {
        var t = e.type || e;
        "string" == typeof e && (e = {
            type: t
        }),
        e = ue(e),
        this.allowedEvents_[t] && this["on" + t] && this["on" + t](e),
        pe(this, e)
    },
    ye.prototype.queueTrigger = function(e) {
        var t = this;
        _e = _e || new Map;
        var i = e.type || e,
        n = _e.get(this);
        n || (n = new Map, _e.set(this, n));
        var r = n.get(i);
        n.delete(i),
        y.clearTimeout(r);
        var s = y.setTimeout(function() {
            0 === n.size && (n = null, _e.delete(t)),
            t.trigger(e)
        },
        0);
        n.set(i, s)
    };
    function Te(e) {
        return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length
    }
    function Se(e) {
        if (!e.nodeName && !xe(e)) throw new Error("Invalid target; must be a DOM node or evented object.")
    }
    function ke(e) {
        if (!Te(e)) throw new Error("Invalid event type; must be a non-empty string or array.")
    }
    function Ce(e) {
        if ("function" != typeof e) throw new Error("Invalid listener; must be a function.")
    }
    function Ee(e, t) {
        var i, n, r, s = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
        return r = s ? (i = e.eventBusEl_, 3 <= t.length && t.shift(), n = t[0], t[1]) : (i = t[0], n = t[1], t[2]),
        Se(i),
        ke(n),
        Ce(r),
        {
            isTargetingSelf: s,
            target: i,
            type: n,
            listener: r = ge(e, r)
        }
    }
    function we(e, t, i, n) {
        Se(e),
        e.nodeName ? be[t](e, i, n) : e[t](i, n)
    }
    var xe = function(t) {
        return t instanceof ye || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function(e) {
            return "function" == typeof t[e]
        })
    },
    Ae = {
        on: function() {
            for (var e = this,
            t = arguments.length,
            i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
            var r = Ee(this, i),
            s = r.isTargetingSelf,
            a = r.target,
            o = r.type,
            u = r.listener;
            if (we(a, "on", o, u), !s) {
                var l = function() {
                    return e.off(a, o, u)
                };
                l.guid = u.guid;
                var c = function() {
                    return e.off("dispose", l)
                };
                c.guid = u.guid,
                we(this, "on", "dispose", l),
                we(a, "on", "dispose", c)
            }
        },
        one: function() {
            for (var r = this,
            e = arguments.length,
            t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var n = Ee(this, t),
            s = n.isTargetingSelf,
            a = n.target,
            o = n.type,
            u = n.listener;
            if (s) we(a, "one", o, u);
            else {
                var l = function e() {
                    r.off(a, o, e);
                    for (var t = arguments.length,
                    i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                    u.apply(null, i)
                };
                l.guid = u.guid,
                we(a, "one", o, l)
            }
        },
        any: function() {
            for (var r = this,
            e = arguments.length,
            t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var n = Ee(this, t),
            s = n.isTargetingSelf,
            a = n.target,
            o = n.type,
            u = n.listener;
            if (s) we(a, "any", o, u);
            else {
                var l = function e() {
                    r.off(a, o, e);
                    for (var t = arguments.length,
                    i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                    u.apply(null, i)
                };
                l.guid = u.guid,
                we(a, "any", o, l)
            }
        },
        off: function(e, t, i) {
            if (!e || Te(e)) de(this.eventBusEl_, e, t);
            else {
                var n = e,
                r = t;
                Se(n),
                ke(r),
                Ce(i),
                i = ge(this, i),
                this.off("dispose", i),
                n.nodeName ? (de(n, r, i), de(n, "dispose", i)) : xe(n) && (n.off(r, i), n.off("dispose", i))
            }
        },
        trigger: function(e, t) {
            return pe(this.eventBusEl_, e, t)
        }
    };
    function Ie(e, t) {
        void 0 === t && (t = {});
        var i = t.eventBusKey;
        if (i) {
            if (!e[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
            e.eventBusEl_ = e[i]
        } else e.eventBusEl_ = S("span", {
            className: "vjs-event-bus"
        });
        return m(e, Ae),
        e.eventedCallbacks && e.eventedCallbacks.forEach(function(e) {
            e()
        }),
        e.on("dispose",
        function() {
            e.off(),
            y.setTimeout(function() {
                e.eventBusEl_ = null
            },
            0)
        }),
        e
    }
    var Pe = {
        state: {},
        setState: function(e) {
            var i, n = this;
            return "function" == typeof e && (e = e()),
            a(e,
            function(e, t) {
                n.state[t] !== e && ((i = i || {})[t] = {
                    from: n.state[t],
                    to: e
                }),
                n.state[t] = e
            }),
            i && xe(this) && this.trigger({
                changes: i,
                type: "statechanged"
            }),
            i
        }
    };
    function Le(e, t) {
        return m(e, Pe),
        e.state = m({},
        e.state, t),
        "function" == typeof e.handleStateChanged && xe(e) && e.on("statechanged", e.handleStateChanged),
        e
    }
    function Oe(e) {
        return "string" != typeof e ? e: e.replace(/./,
        function(e) {
            return e.toLowerCase()
        })
    }
    function De(e) {
        return "string" != typeof e ? e: e.replace(/./,
        function(e) {
            return e.toUpperCase()
        })
    }
    function Ne() {
        for (var i = {},
        e = arguments.length,
        t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.forEach(function(e) {
            e && a(e,
            function(e, t) {
                u(e) ? (u(i[t]) || (i[t] = {}), i[t] = Ne(i[t], e)) : i[t] = e
            })
        }),
        i
    }
    var Re = function() {
        function e() {
            this.map_ = {}
        }
        var t = e.prototype;
        return t.has = function(e) {
            return e in this.map_
        },
        t.delete = function(e) {
            var t = this.has(e);
            return delete this.map_[e],
            t
        },
        t.set = function(e, t) {
            return this.set_[e] = t,
            this
        },
        t.forEach = function(e, t) {
            for (var i in this.map_) e.call(t, this.map_[i], i, this)
        },
        e
    } (),
    Ue = y.Map ? y.Map: Re,
    Me = function() {
        function e() {
            this.set_ = {}
        }
        var t = e.prototype;
        return t.has = function(e) {
            return e in this.set_
        },
        t.delete = function(e) {
            var t = this.has(e);
            return delete this.set_[e],
            t
        },
        t.add = function(e) {
            return this.set_[e] = 1,
            this
        },
        t.forEach = function(e, t) {
            for (var i in this.set_) e.call(t, i, i, this)
        },
        e
    } (),
    Be = y.Set ? y.Set: Me,
    je = function() {
        function l(e, t, i) {
            if (!e && this.play ? this.player_ = e = this: this.player_ = e, this.isDisposed_ = !1, this.parentComponent_ = null, this.options_ = Ne({},
            this.options_), t = this.options_ = Ne(this.options_, t), this.id_ = t.id || t.el && t.el.id, !this.id_) {
                var n = e && e.id && e.id() || "no_player";
                this.id_ = n + "_component_" + ne()
            }
            this.name_ = t.name || null,
            t.el ? this.el_ = t.el: !1 !== t.createEl && (this.el_ = this.createEl()),
            !1 !== t.evented && Ie(this, {
                eventBusKey: this.el_ ? "el_": null
            }),
            Le(this, this.constructor.defaultState),
            this.children_ = [],
            this.childIndex_ = {},
            this.childNameIndex_ = {},
            this.setTimeoutIds_ = new Be,
            this.setIntervalIds_ = new Be,
            this.rafIds_ = new Be,
            this.namedRafs_ = new Ue,
            (this.clearingTimersOnDispose_ = !1) !== t.initChildren && this.initChildren(),
            this.ready(i),
            !1 !== t.reportTouchActivity && this.enableTouchActivity()
        }
        var e = l.prototype;
        return e.dispose = function() {
            if (!this.isDisposed_) {
                if (this.trigger({
                    type: "dispose",
                    bubbles: !1
                }), this.isDisposed_ = !0, this.children_) for (var e = this.children_.length - 1; 0 <= e; e--) this.children_[e].dispose && this.children_[e].dispose();
                this.children_ = null,
                this.childIndex_ = null,
                this.childNameIndex_ = null,
                this.parentComponent_ = null,
                this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), se.has(this.el_) && se.delete(this.el_), this.el_ = null),
                this.player_ = null
            }
        },
        e.isDisposed = function() {
            return Boolean(this.isDisposed_)
        },
        e.player = function() {
            return this.player_
        },
        e.options = function(e) {
            return e && (this.options_ = Ne(this.options_, e)),
            this.options_
        },
        e.el = function() {
            return this.el_
        },
        e.createEl = function(e, t, i) {
            return S(e, t, i)
        },
        e.localize = function(e, r, t) {
            void 0 === t && (t = e);
            var i = this.player_.language && this.player_.language(),
            n = this.player_.languages && this.player_.languages(),
            s = n && n[i],
            a = i && i.split("-")[0],
            o = n && n[a],
            u = t;
            return s && s[e] ? u = s[e] : o && o[e] && (u = o[e]),
            r && (u = u.replace(/\{(\d+)\}/g,
            function(e, t) {
                var i = r[t - 1],
                n = i;
                return "undefined" == typeof i && (n = e),
                n
            })),
            u
        },
        e.contentEl = function() {
            return this.contentEl_ || this.el_
        },
        e.id = function() {
            return this.id_
        },
        e.name = function() {
            return this.name_
        },
        e.children = function() {
            return this.children_
        },
        e.getChildById = function(e) {
            return this.childIndex_[e]
        },
        e.getChild = function(e) {
            if (e) return this.childNameIndex_[e]
        },
        e.getDescendant = function() {
            for (var e = arguments.length,
            t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            t = t.reduce(function(e, t) {
                return e.concat(t)
            },
            []);
            for (var n = this,
            r = 0; r < t.length; r++) if (! (n = n.getChild(t[r])) || !n.getChild) return;
            return n
        },
        e.addChild = function(e, t, i) {
            var n, r;
            if (void 0 === t && (t = {}), void 0 === i && (i = this.children_.length), "string" == typeof e) {
                r = De(e);
                var s = t.componentClass || r;
                t.name = r;
                var a = l.getComponent(s);
                if (!a) throw new Error("Component " + s + " does not exist");
                if ("function" != typeof a) return null;
                n = new a(this.player_ || this, t)
            } else n = e;
            if (n.parentComponent_ && n.parentComponent_.removeChild(n), this.children_.splice(i, 0, n), n.parentComponent_ = this, "function" == typeof n.id && (this.childIndex_[n.id()] = n), (r = r || n.name && De(n.name())) && (this.childNameIndex_[r] = n, this.childNameIndex_[Oe(r)] = n), "function" == typeof n.el && n.el()) {
                var o = null;
                this.children_[i + 1] && (this.children_[i + 1].el_ ? o = this.children_[i + 1].el_: _(this.children_[i + 1]) && (o = this.children_[i + 1])),
                this.contentEl().insertBefore(n.el(), o)
            }
            return n
        },
        e.removeChild = function(e) {
            if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) {
                for (var t = !1,
                i = this.children_.length - 1; 0 <= i; i--) if (this.children_[i] === e) {
                    t = !0,
                    this.children_.splice(i, 1);
                    break
                }
                if (t) {
                    e.parentComponent_ = null,
                    this.childIndex_[e.id()] = null,
                    this.childNameIndex_[De(e.name())] = null,
                    this.childNameIndex_[Oe(e.name())] = null;
                    var n = e.el();
                    n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                }
            }
        },
        e.initChildren = function() {
            var r = this,
            n = this.options_.children;
            if (n) {
                var e, s = this.options_,
                i = l.getComponent("Tech"); (e = Array.isArray(n) ? n: Object.keys(n)).concat(Object.keys(this.options_).filter(function(t) {
                    return ! e.some(function(e) {
                        return "string" == typeof e ? t === e: t === e.name
                    })
                })).map(function(e) {
                    var t, i;
                    return i = "string" == typeof e ? n[t = e] || r.options_[t] || {}: (t = e.name, e),
                    {
                        name: t,
                        opts: i
                    }
                }).filter(function(e) {
                    var t = l.getComponent(e.opts.componentClass || De(e.name));
                    return t && !i.isTech(t)
                }).forEach(function(e) {
                    var t = e.name,
                    i = e.opts;
                    if (void 0 !== s[t] && (i = s[t]), !1 !== i) { ! 0 === i && (i = {}),
                        i.playerOptions = r.options_.playerOptions;
                        var n = r.addChild(t, i);
                        n && (r[t] = n)
                    }
                })
            }
        },
        e.buildCSSClass = function() {
            return ""
        },
        e.ready = function(e, t) {
            if (void 0 === t && (t = !1), e) return this.isReady_ ? void(t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(e))
        },
        e.triggerReady = function() {
            this.isReady_ = !0,
            this.setTimeout(function() {
                var e = this.readyQueue_;
                this.readyQueue_ = [],
                e && 0 < e.length && e.forEach(function(e) {
                    e.call(this)
                },
                this),
                this.trigger("ready")
            },
            1)
        },
        e.$ = function(e, t) {
            return G(e, t || this.contentEl())
        },
        e.$$ = function(e, t) {
            return X(e, t || this.contentEl())
        },
        e.hasClass = function(e) {
            return E(this.el_, e)
        },
        e.addClass = function(e) {
            w(this.el_, e)
        },
        e.removeClass = function(e) {
            x(this.el_, e)
        },
        e.toggleClass = function(e, t) {
            A(this.el_, e, t)
        },
        e.show = function() {
            this.removeClass("vjs-hidden")
        },
        e.hide = function() {
            this.addClass("vjs-hidden")
        },
        e.lockShowing = function() {
            this.addClass("vjs-lock-showing")
        },
        e.unlockShowing = function() {
            this.removeClass("vjs-lock-showing")
        },
        e.getAttribute = function(e) {
            return L(this.el_, e)
        },
        e.setAttribute = function(e, t) {
            O(this.el_, e, t)
        },
        e.removeAttribute = function(e) {
            D(this.el_, e)
        },
        e.width = function(e, t) {
            return this.dimension("width", e, t)
        },
        e.height = function(e, t) {
            return this.dimension("height", e, t)
        },
        e.dimensions = function(e, t) {
            this.width(e, !0),
            this.height(t)
        },
        e.dimension = function(e, t, i) {
            if (void 0 !== t) return null !== t && t == t || (t = 0),
            -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t: this.el_.style[e] = "auto" === t ? "": t + "px",
            void(i || this.trigger("componentresize"));
            if (!this.el_) return 0;
            var n = this.el_.style[e],
            r = n.indexOf("px");
            return - 1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + De(e)], 10)
        },
        e.currentDimension = function(e) {
            var t = 0;
            if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value");
            if (t = n(this.el_, e), 0 === (t = parseFloat(t)) || isNaN(t)) {
                var i = "offset" + De(e);
                t = this.el_[i]
            }
            return t
        },
        e.currentDimensions = function() {
            return {
                width: this.currentDimension("width"),
                height: this.currentDimension("height")
            }
        },
        e.currentWidth = function() {
            return this.currentDimension("width")
        },
        e.currentHeight = function() {
            return this.currentDimension("height")
        },
        e.focus = function() {
            this.el_.focus()
        },
        e.blur = function() {
            this.el_.blur()
        },
        e.handleKeyDown = function(e) {
            this.player_ && (e.stopPropagation(), this.player_.handleKeyDown(e))
        },
        e.handleKeyPress = function(e) {
            this.handleKeyDown(e)
        },
        e.emitTapEvents = function() {
            var n, t = 0,
            r = null;
            this.on("touchstart",
            function(e) {
                1 === e.touches.length && (r = {
                    pageX: e.touches[0].pageX,
                    pageY: e.touches[0].pageY
                },
                t = y.performance.now(), n = !0)
            }),
            this.on("touchmove",
            function(e) {
                if (1 < e.touches.length) n = !1;
                else if (r) {
                    var t = e.touches[0].pageX - r.pageX,
                    i = e.touches[0].pageY - r.pageY;
                    10 < Math.sqrt(t * t + i * i) && (n = !1)
                }
            });
            function e() {
                n = !1
            }
            this.on("touchleave", e),
            this.on("touchcancel", e),
            this.on("touchend",
            function(e) { ! (r = null) === n && y.performance.now() - t < 200 && (e.preventDefault(), this.trigger("tap"))
            })
        },
        e.enableTouchActivity = function() {
            if (this.player() && this.player().reportUserActivity) {
                var t, i = ge(this.player(), this.player().reportUserActivity);
                this.on("touchstart",
                function() {
                    i(),
                    this.clearInterval(t),
                    t = this.setInterval(i, 250)
                });
                var e = function(e) {
                    i(),
                    this.clearInterval(t)
                };
                this.on("touchmove", i),
                this.on("touchend", e),
                this.on("touchcancel", e)
            }
        },
        e.setTimeout = function(e, t) {
            var i, n = this;
            return e = ge(this, e),
            this.clearTimersOnDispose_(),
            i = y.setTimeout(function() {
                n.setTimeoutIds_.has(i) && n.setTimeoutIds_.delete(i),
                e()
            },
            t),
            this.setTimeoutIds_.add(i),
            i
        },
        e.clearTimeout = function(e) {
            return this.setTimeoutIds_.has(e) && (this.setTimeoutIds_.delete(e), y.clearTimeout(e)),
            e
        },
        e.setInterval = function(e, t) {
            e = ge(this, e),
            this.clearTimersOnDispose_();
            var i = y.setInterval(e, t);
            return this.setIntervalIds_.add(i),
            i
        },
        e.clearInterval = function(e) {
            return this.setIntervalIds_.has(e) && (this.setIntervalIds_.delete(e), y.clearInterval(e)),
            e
        },
        e.requestAnimationFrame = function(e) {
            var t, i = this;
            return this.supportsRaf_ ? (this.clearTimersOnDispose_(), e = ge(this, e), t = y.requestAnimationFrame(function() {
                i.rafIds_.has(t) && i.rafIds_.delete(t),
                e()
            }), this.rafIds_.add(t), t) : this.setTimeout(e, 1e3 / 60)
        },
        e.requestNamedAnimationFrame = function(e, t) {
            var i = this;
            if (!this.namedRafs_.has(e)) {
                this.clearTimersOnDispose_(),
                t = ge(this, t);
                var n = this.requestAnimationFrame(function() {
                    t(),
                    i.namedRafs_.has(e) && i.namedRafs_.delete(e)
                });
                return this.namedRafs_.set(e, n),
                e
            }
        },
        e.cancelNamedAnimationFrame = function(e) {
            this.namedRafs_.has(e) && (this.cancelAnimationFrame(this.namedRafs_.get(e)), this.namedRafs_.delete(e))
        },
        e.cancelAnimationFrame = function(e) {
            return this.supportsRaf_ ? (this.rafIds_.has(e) && (this.rafIds_.delete(e), y.cancelAnimationFrame(e)), e) : this.clearTimeout(e)
        },
        e.clearTimersOnDispose_ = function() {
            var n = this;
            this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = !0, this.one("dispose",
            function() { [["namedRafs_", "cancelNamedAnimationFrame"], ["rafIds_", "cancelAnimationFrame"], ["setTimeoutIds_", "clearTimeout"], ["setIntervalIds_", "clearInterval"]].forEach(function(e) {
                    var t = e[0],
                    i = e[1];
                    n[t].forEach(function(e, t) {
                        return n[i](t)
                    })
                }),
                n.clearingTimersOnDispose_ = !1
            }))
        },
        l.registerComponent = function(e, t) {
            if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
            var i, n = l.getComponent("Tech"),
            r = n && n.isTech(t),
            s = l === t || l.prototype.isPrototypeOf(t.prototype);
            if (r || !s) throw i = r ? "techs must be registered using Tech.registerTech()": "must be a Component subclass",
            new Error('Illegal component, "' + e + '"; ' + i + ".");
            e = De(e),
            l.components_ || (l.components_ = {});
            var a = l.getComponent("Player");
            if ("Player" === e && a && a.players) {
                var o = a.players,
                u = Object.keys(o);
                if (o && 0 < u.length && u.map(function(e) {
                    return o[e]
                }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
            }
            return l.components_[e] = t,
            l.components_[Oe(e)] = t
        },
        l.getComponent = function(e) {
            if (e && l.components_) return l.components_[e]
        },
        l
    } ();
    je.prototype.supportsRaf_ = "function" == typeof y.requestAnimationFrame && "function" == typeof y.cancelAnimationFrame,
    je.registerComponent("Component", je);
    var Fe = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    };
    t(function(t) {
        function i(e) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = i = function(e) {
                return typeof e
            }: t.exports = i = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
            },
            i(e)
        }
        t.exports = i
    }),
    t(function(t) {
        function i(e) {
            return t.exports = i = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            },
            i(e)
        }
        t.exports = i
    });
    var He, Ve, qe, We, ze = function(e, t) {
        e.prototype = Object.create(t.prototype),
        (e.prototype.constructor = e).__proto__ = t
    },
    Ge = y.navigator && y.navigator.userAgent || "",
    Xe = /AppleWebKit\/([\d.]+)/i.exec(Ge),
    Ke = Xe ? parseFloat(Xe.pop()) : null,
    Ye = /iPod/i.test(Ge),
    $e = (He = Ge.match(/OS (\d+)_/i)) && He[1] ? He[1] : null,
    Qe = /Android/i.test(Ge),
    Je = function() {
        var e = Ge.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
        if (!e) return null;
        var t = e[1] && parseFloat(e[1]),
        i = e[2] && parseFloat(e[2]);
        return t && i ? parseFloat(e[1] + "." + e[2]) : t || null
    } (),
    Ze = Qe && Je < 5 && Ke < 537,
    et = /Firefox/i.test(Ge),
    tt = /Edg/i.test(Ge),
    it = !tt && (/Chrome/i.test(Ge) || /CriOS/i.test(Ge)),
    nt = (Ve = Ge.match(/(Chrome|CriOS)\/(\d+)/)) && Ve[2] ? parseFloat(Ve[2]) : null,
    rt = (qe = /MSIE\s(\d+)\.\d/.exec(Ge), !(We = qe && parseFloat(qe[1])) && /Trident\/7.0/i.test(Ge) && /rv:11.0/.test(Ge) && (We = 11), We),
    st = /Safari/i.test(Ge) && !it && !Qe && !tt,
    at = /Windows/i.test(Ge),
    ot = v() && ("ontouchstart" in y || y.navigator.maxTouchPoints || y.DocumentTouch && y.document instanceof y.DocumentTouch),
    ut = /iPad/i.test(Ge) || st && ot && !/iPhone/i.test(Ge),
    lt = /iPhone/i.test(Ge) && !ut,
    ct = lt || ut || Ye,
    ht = (st || ct) && !it,
    dt = Object.freeze({
        __proto__: null,
        IS_IPOD: Ye,
        IOS_VERSION: $e,
        IS_ANDROID: Qe,
        ANDROID_VERSION: Je,
        IS_NATIVE_ANDROID: Ze,
        IS_FIREFOX: et,
        IS_EDGE: tt,
        IS_CHROME: it,
        CHROME_VERSION: nt,
        IE_VERSION: rt,
        IS_SAFARI: st,
        IS_WINDOWS: at,
        TOUCH_ENABLED: ot,
        IS_IPAD: ut,
        IS_IPHONE: lt,
        IS_IOS: ct,
        IS_ANY_SAFARI: ht
    });
    function pt(e, t, i, n) {
        return function(e, t, i) {
            if ("number" != typeof t || t < 0 || i < t) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + i + ").")
        } (e, n, i.length - 1),
        i[n][t]
    }
    function ft(e) {
        return void 0 === e || 0 === e.length ? {
            length: 0,
            start: function() {
                throw new Error("This TimeRanges object is empty")
            },
            end: function() {
                throw new Error("This TimeRanges object is empty")
            }
        }: {
            length: e.length,
            start: pt.bind(null, "start", 0, e),
            end: pt.bind(null, "end", 1, e)
        }
    }
    function mt(e, t) {
        return Array.isArray(e) ? ft(e) : void 0 === e || void 0 === t ? ft() : ft([[e, t]])
    }
    function gt(e, t) {
        var i, n, r = 0;
        if (!t) return 0;
        e && e.length || (e = mt(0, 0));
        for (var s = 0; s < e.length; s++) i = e.start(s),
        t < (n = e.end(s)) && (n = t),
        r += n - i;
        return r / t
    }
    for (var vt, yt = {
        prefixed: !0
    },
    _t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]], bt = _t[0], Tt = 0; Tt < _t.length; Tt++) if (_t[Tt][1] in h) {
        vt = _t[Tt];
        break
    }
    if (vt) {
        for (var St = 0; St < vt.length; St++) yt[bt[St]] = vt[St];
        yt.prefixed = vt[0] !== bt[0]
    }
    function kt(e) {
        if (e instanceof kt) return e;
        "number" == typeof e ? this.code = e: "string" == typeof e ? this.message = e: o(e) && ("number" == typeof e.code && (this.code = e.code), m(this, e)),
        this.message || (this.message = kt.defaultMessages[this.code] || "")
    }
    kt.prototype.code = 0,
    kt.prototype.message = "",
    kt.prototype.status = null,
    kt.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"],
    kt.defaultMessages = {
        1 : "You aborted the media playback",
        2 : "A network error caused the media download to fail part-way.",
        3 : "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
        4 : "The media could not be loaded, either because the server or network failed or because the format is not supported.",
        5 : "The media is encrypted and we do not have the keys to decrypt it."
    };
    for (var Ct = 0; Ct < kt.errorTypes.length; Ct++) kt[kt.errorTypes[Ct]] = Ct,
    kt.prototype[kt.errorTypes[Ct]] = Ct;
    var Et = function(e, t) {
        var i, n = null;
        try {
            i = JSON.parse(e, t)
        } catch(e) {
            n = e
        }
        return [n, i]
    };
    function wt(e) {
        return null != e && "function" == typeof e.then
    }
    function xt(e) {
        wt(e) && e.then(null,
        function(e) {})
    }
    function At(n) {
        return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(e, t, i) {
            return n[t] && (e[t] = n[t]),
            e
        },
        {
            cues: n.cues && Array.prototype.map.call(n.cues,
            function(e) {
                return {
                    startTime: e.startTime,
                    endTime: e.endTime,
                    text: e.text,
                    id: e.id
                }
            })
        })
    }
    var It = function(e) {
        var t = e.$$("track"),
        i = Array.prototype.map.call(t,
        function(e) {
            return e.track
        });
        return Array.prototype.map.call(t,
        function(e) {
            var t = At(e.track);
            return e.src && (t.src = e.src),
            t
        }).concat(Array.prototype.filter.call(e.textTracks(),
        function(e) {
            return - 1 === i.indexOf(e)
        }).map(At))
    },
    Pt = function(e, i) {
        return e.forEach(function(e) {
            var t = i.addRemoteTextTrack(e).track; ! e.src && e.cues && e.cues.forEach(function(e) {
                return t.addCue(e)
            })
        }),
        i.textTracks()
    },
    Lt = t(function(e, t) {
        function i(e) {
            if (e && "object" == typeof e) {
                var t = e.which || e.keyCode || e.charCode;
                t && (e = t)
            }
            if ("number" == typeof e) return a[e];
            var i, n = String(e);
            return (i = r[n.toLowerCase()]) ? i: (i = s[n.toLowerCase()]) || (1 === n.length ? n.charCodeAt(0) : void 0)
        }
        i.isEventKey = function(e, t) {
            if (e && "object" == typeof e) {
                var i = e.which || e.keyCode || e.charCode;
                if (null == i) return ! 1;
                if ("string" == typeof t) {
                    var n;
                    if (n = r[t.toLowerCase()]) return n === i;
                    if (n = s[t.toLowerCase()]) return n === i
                } else if ("number" == typeof t) return t === i;
                return ! 1
            }
        };
        var r = (t = e.exports = i).code = t.codes = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            ctrl: 17,
            alt: 18,
            "pause/break": 19,
            "caps lock": 20,
            esc: 27,
            space: 32,
            "page up": 33,
            "page down": 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            insert: 45,
            delete: 46,
            command: 91,
            "left command": 91,
            "right command": 93,
            "numpad *": 106,
            "numpad +": 107,
            "numpad -": 109,
            "numpad .": 110,
            "numpad /": 111,
            "num lock": 144,
            "scroll lock": 145,
            "my computer": 182,
            "my calculator": 183,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222
        },
        s = t.aliases = {
            windows: 91,
            "⇧": 16,
            "⌥": 18,
            "⌃": 17,
            "⌘": 91,
            ctl: 17,
            control: 17,
            option: 18,
            pause: 19,
            break: 19,
            caps: 20,
            return: 13,
            escape: 27,
            spc: 32,
            spacebar: 32,
            pgup: 33,
            pgdn: 34,
            ins: 45,
            del: 46,
            cmd: 91
        };
        for (n = 97; n < 123; n++) r[String.fromCharCode(n)] = n - 32;
        for (var n = 48; n < 58; n++) r[n - 48] = n;
        for (n = 1; n < 13; n++) r["f" + n] = n + 111;
        for (n = 0; n < 10; n++) r["numpad " + n] = n + 96;
        var a = t.names = t.title = {};
        for (n in r) a[r[n]] = n;
        for (var o in s) r[o] = s[o]
    }),
    Ot = (Lt.code, Lt.codes, Lt.aliases, Lt.names, Lt.title, "vjs-modal-dialog"),
    Dt = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).opened_ = i.hasBeenOpened_ = i.hasBeenFilled_ = !1,
            i.closeable(!i.options_.uncloseable),
            i.content(i.options_.content),
            i.contentEl_ = S("div", {
                className: Ot + "-content"
            },
            {
                role: "document"
            }),
            i.descEl_ = S("p", {
                className: Ot + "-description vjs-control-text",
                id: i.el().getAttribute("aria-describedby")
            }),
            k(i.descEl_, i.description()),
            i.el_.appendChild(i.descEl_),
            i.el_.appendChild(i.contentEl_),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass(),
                tabIndex: -1
            },
            {
                "aria-describedby": this.id() + "_description",
                "aria-hidden": "true",
                "aria-label": this.label(),
                role: "dialog"
            })
        },
        t.dispose = function() {
            this.contentEl_ = null,
            this.descEl_ = null,
            this.previouslyActiveEl_ = null,
            n.prototype.dispose.call(this)
        },
        t.buildCSSClass = function() {
            return Ot + " vjs-hidden " + n.prototype.buildCSSClass.call(this)
        },
        t.label = function() {
            return this.localize(this.options_.label || "Modal Window")
        },
        t.description = function() {
            var e = this.options_.description || this.localize("This is a modal window.");
            return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),
            e
        },
        t.open = function() {
            if (!this.opened_) {
                var e = this.player();
                this.trigger("beforemodalopen"),
                this.opened_ = !0,
                !this.options_.fillAlways && (this.hasBeenOpened_ || this.hasBeenFilled_) || this.fill(),
                this.wasPlaying_ = !e.paused(),
                this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(),
                this.on("keydown", this.handleKeyDown),
                this.hadControls_ = e.controls(),
                e.controls(!1),
                this.show(),
                this.conditionalFocus_(),
                this.el().setAttribute("aria-hidden", "false"),
                this.trigger("modalopen"),
                this.hasBeenOpened_ = !0
            }
        },
        t.opened = function(e) {
            return "boolean" == typeof e && this[e ? "open": "close"](),
            this.opened_
        },
        t.close = function() {
            if (this.opened_) {
                var e = this.player();
                this.trigger("beforemodalclose"),
                this.opened_ = !1,
                this.wasPlaying_ && this.options_.pauseOnOpen && e.play(),
                this.off("keydown", this.handleKeyDown),
                this.hadControls_ && e.controls(!0),
                this.hide(),
                this.el().setAttribute("aria-hidden", "true"),
                this.trigger("modalclose"),
                this.conditionalBlur_(),
                this.options_.temporary && this.dispose()
            }
        },
        t.closeable = function(e) {
            if ("boolean" == typeof e) {
                var t = this.closeable_ = !!e,
                i = this.getChild("closeButton");
                if (t && !i) {
                    var n = this.contentEl_;
                    this.contentEl_ = this.el_,
                    i = this.addChild("closeButton", {
                        controlText: "Close Modal Dialog"
                    }),
                    this.contentEl_ = n,
                    this.on(i, "close", this.close)
                } ! t && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
            }
            return this.closeable_
        },
        t.fill = function() {
            this.fillWith(this.content())
        },
        t.fillWith = function(e) {
            var t = this.contentEl(),
            i = t.parentNode,
            n = t.nextSibling;
            this.trigger("beforemodalfill"),
            this.hasBeenFilled_ = !0,
            i.removeChild(t),
            this.empty(),
            q(t, e),
            this.trigger("modalfill"),
            n ? i.insertBefore(t, n) : i.appendChild(t);
            var r = this.getChild("closeButton");
            r && i.appendChild(r.el_)
        },
        t.empty = function() {
            this.trigger("beforemodalempty"),
            F(this.contentEl()),
            this.trigger("modalempty")
        },
        t.content = function(e) {
            return "undefined" != typeof e && (this.content_ = e),
            this.content_
        },
        t.conditionalFocus_ = function() {
            var e = h.activeElement,
            t = this.player_.el_;
            this.previouslyActiveEl_ = null,
            !t.contains(e) && t !== e || (this.previouslyActiveEl_ = e, this.focus())
        },
        t.conditionalBlur_ = function() {
            this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null)
        },
        t.handleKeyDown = function(e) {
            if (e.stopPropagation(), Lt.isEventKey(e, "Escape") && this.closeable()) return e.preventDefault(),
            void this.close();
            if (Lt.isEventKey(e, "Tab")) {
                for (var t, i = this.focusableEls_(), n = this.el_.querySelector(":focus"), r = 0; r < i.length; r++) if (n === i[r]) {
                    t = r;
                    break
                }
                h.activeElement === this.el_ && (t = 0),
                e.shiftKey && 0 === t ? (i[i.length - 1].focus(), e.preventDefault()) : e.shiftKey || t !== i.length - 1 || (i[0].focus(), e.preventDefault())
            }
        },
        t.focusableEls_ = function() {
            var e = this.el_.querySelectorAll("*");
            return Array.prototype.filter.call(e,
            function(e) {
                return (e instanceof y.HTMLAnchorElement || e instanceof y.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof y.HTMLInputElement || e instanceof y.HTMLSelectElement || e instanceof y.HTMLTextAreaElement || e instanceof y.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof y.HTMLIFrameElement || e instanceof y.HTMLObjectElement || e instanceof y.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable")
            })
        },
        e
    } (je);
    Dt.prototype.options_ = {
        pauseOnOpen: !0,
        temporary: !0
    },
    je.registerComponent("ModalDialog", Dt);
    var Nt = function(n) {
        function e(e) {
            var t;
            void 0 === e && (e = []),
            (t = n.call(this) || this).tracks_ = [],
            Object.defineProperty(Fe(t), "length", {
                get: function() {
                    return this.tracks_.length
                }
            });
            for (var i = 0; i < e.length; i++) t.addTrack(e[i]);
            return t
        }
        ze(e, n);
        var t = e.prototype;
        return t.addTrack = function(e) {
            var t = this.tracks_.length;
            "" + t in this || Object.defineProperty(this, t, {
                get: function() {
                    return this.tracks_[t]
                }
            }),
            -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({
                track: e,
                type: "addtrack",
                target: this
            }))
        },
        t.removeTrack = function(e) {
            for (var t, i = 0,
            n = this.length; i < n; i++) if (this[i] === e) { (t = this[i]).off && t.off(),
                this.tracks_.splice(i, 1);
                break
            }
            t && this.trigger({
                track: t,
                type: "removetrack",
                target: this
            })
        },
        t.getTrackById = function(e) {
            for (var t = null,
            i = 0,
            n = this.length; i < n; i++) {
                var r = this[i];
                if (r.id === e) {
                    t = r;
                    break
                }
            }
            return t
        },
        e
    } (ye);
    for (var Rt in Nt.prototype.allowedEvents_ = {
        change: "change",
        addtrack: "addtrack",
        removetrack: "removetrack"
    },
    Nt.prototype.allowedEvents_) Nt.prototype["on" + Rt] = null;
    function Ut(e, t) {
        for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1)
    }
    function Mt(e, t) {
        for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1)
    }
    function Bt(e) {
        var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
        i = h.createElement("a");
        i.href = e;
        var n, r = "" === i.host && "file:" !== i.protocol;
        r && ((n = h.createElement("div")).innerHTML = '<a href="' + e + '"></a>', i = n.firstChild, n.setAttribute("style", "display:none; position:absolute;"), h.body.appendChild(n));
        for (var s = {},
        a = 0; a < t.length; a++) s[t[a]] = i[t[a]];
        return "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")),
        "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")),
        s.protocol || (s.protocol = y.location.protocol),
        r && h.body.removeChild(n),
        s
    }
    function jt(e) {
        if (!e.match(/^https?:\/\//)) {
            var t = h.createElement("div");
            t.innerHTML = '<a href="' + e + '">x</a>',
            e = t.firstChild.href
        }
        return e
    }
    function Ft(e) {
        if ("string" == typeof e) {
            var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e);
            if (t) return t.pop().toLowerCase()
        }
        return ""
    }
    function Ht(e, t) {
        void 0 === t && (t = y.location);
        var i = Bt(e);
        return (":" === i.protocol ? t.protocol: i.protocol) + i.host !== t.protocol + t.host
    }
    var Vt = function(n) {
        function e(e) {
            var t;
            void 0 === e && (e = []);
            for (var i = e.length - 1; 0 <= i; i--) if (e[i].enabled) {
                Ut(e, e[i]);
                break
            }
            return (t = n.call(this, e) || this).changing_ = !1,
            t
        }
        ze(e, n);
        var t = e.prototype;
        return t.addTrack = function(e) {
            var t = this;
            e.enabled && Ut(this, e),
            n.prototype.addTrack.call(this, e),
            e.addEventListener && (e.enabledChange_ = function() {
                t.changing_ || (t.changing_ = !0, Ut(t, e), t.changing_ = !1, t.trigger("change"))
            },
            e.addEventListener("enabledchange", e.enabledChange_))
        },
        t.removeTrack = function(e) {
            n.prototype.removeTrack.call(this, e),
            e.removeEventListener && e.enabledChange_ && (e.removeEventListener("enabledchange", e.enabledChange_), e.enabledChange_ = null)
        },
        e
    } (Nt),
    qt = function(n) {
        function e(e) {
            var t;
            void 0 === e && (e = []);
            for (var i = e.length - 1; 0 <= i; i--) if (e[i].selected) {
                Mt(e, e[i]);
                break
            }
            return (t = n.call(this, e) || this).changing_ = !1,
            Object.defineProperty(Fe(t), "selectedIndex", {
                get: function() {
                    for (var e = 0; e < this.length; e++) if (this[e].selected) return e;
                    return - 1
                },
                set: function() {}
            }),
            t
        }
        ze(e, n);
        var t = e.prototype;
        return t.addTrack = function(e) {
            var t = this;
            e.selected && Mt(this, e),
            n.prototype.addTrack.call(this, e),
            e.addEventListener && (e.selectedChange_ = function() {
                t.changing_ || (t.changing_ = !0, Mt(t, e), t.changing_ = !1, t.trigger("change"))
            },
            e.addEventListener("selectedchange", e.selectedChange_))
        },
        t.removeTrack = function(e) {
            n.prototype.removeTrack.call(this, e),
            e.removeEventListener && e.selectedChange_ && (e.removeEventListener("selectedchange", e.selectedChange_), e.selectedChange_ = null)
        },
        e
    } (Nt),
    Wt = function(i) {
        function e() {
            return i.apply(this, arguments) || this
        }
        ze(e, i);
        var t = e.prototype;
        return t.addTrack = function(e) {
            var t = this;
            i.prototype.addTrack.call(this, e),
            this.queueChange_ || (this.queueChange_ = function() {
                return t.queueTrigger("change")
            }),
            this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = function() {
                return t.trigger("selectedlanguagechange")
            }),
            e.addEventListener("modechange", this.queueChange_); - 1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", this.triggerSelectedlanguagechange_)
        },
        t.removeTrack = function(e) {
            i.prototype.removeTrack.call(this, e),
            e.removeEventListener && (this.queueChange_ && e.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_ && e.removeEventListener("modechange", this.triggerSelectedlanguagechange_))
        },
        e
    } (Nt),
    zt = function() {
        function e(e) {
            void 0 === e && (e = []),
            this.trackElements_ = [],
            Object.defineProperty(this, "length", {
                get: function() {
                    return this.trackElements_.length
                }
            });
            for (var t = 0,
            i = e.length; t < i; t++) this.addTrackElement_(e[t])
        }
        var t = e.prototype;
        return t.addTrackElement_ = function(e) {
            var t = this.trackElements_.length;
            "" + t in this || Object.defineProperty(this, t, {
                get: function() {
                    return this.trackElements_[t]
                }
            }),
            -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
        },
        t.getTrackElementByTrack_ = function(e) {
            for (var t, i = 0,
            n = this.trackElements_.length; i < n; i++) if (e === this.trackElements_[i].track) {
                t = this.trackElements_[i];
                break
            }
            return t
        },
        t.removeTrackElement_ = function(e) {
            for (var t = 0,
            i = this.trackElements_.length; t < i; t++) if (e === this.trackElements_[t]) {
                this.trackElements_[t].track && "function" == typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off(),
                "function" == typeof this.trackElements_[t].off && this.trackElements_[t].off(),
                this.trackElements_.splice(t, 1);
                break
            }
        },
        e
    } (),
    Gt = function() {
        function t(e) {
            t.prototype.setCues_.call(this, e),
            Object.defineProperty(this, "length", {
                get: function() {
                    return this.length_
                }
            })
        }
        var e = t.prototype;
        return e.setCues_ = function(e) {
            var t = this.length || 0,
            i = 0,
            n = e.length;
            this.cues_ = e,
            this.length_ = e.length;
            function r(e) {
                "" + e in this || Object.defineProperty(this, "" + e, {
                    get: function() {
                        return this.cues_[e]
                    }
                })
            }
            if (t < n) for (i = t; i < n; i++) r.call(this, i)
        },
        e.getCueById = function(e) {
            for (var t = null,
            i = 0,
            n = this.length; i < n; i++) {
                var r = this[i];
                if (r.id === e) {
                    t = r;
                    break
                }
            }
            return t
        },
        t
    } (),
    Xt = {
        alternative: "alternative",
        captions: "captions",
        main: "main",
        sign: "sign",
        subtitles: "subtitles",
        commentary: "commentary"
    },
    Kt = {
        alternative: "alternative",
        descriptions: "descriptions",
        main: "main",
        "main-desc": "main-desc",
        translation: "translation",
        commentary: "commentary"
    },
    Yt = {
        subtitles: "subtitles",
        captions: "captions",
        descriptions: "descriptions",
        chapters: "chapters",
        metadata: "metadata"
    },
    $t = {
        disabled: "disabled",
        hidden: "hidden",
        showing: "showing"
    },
    Qt = function(s) {
        function e(e) {
            var t;
            void 0 === e && (e = {}),
            t = s.call(this) || this;
            function i(e) {
                Object.defineProperty(Fe(t), e, {
                    get: function() {
                        return n[e]
                    },
                    set: function() {}
                })
            }
            var n = {
                id: e.id || "vjs_track_" + ne(),
                kind: e.kind || "",
                label: e.label || "",
                language: e.language || ""
            };
            for (var r in n) i(r);
            return t
        }
        return ze(e, s),
        e
    } (ye),
    Jt = Object.freeze({
        __proto__: null,
        parseUrl: Bt,
        getAbsoluteURL: jt,
        getFileExtension: Ft,
        isCrossOrigin: Ht
    }),
    Zt = function(e) {
        var t = ei.call(e);
        return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
    }
    /**
   * @license
   * slighly modified parse-headers 2.0.2 <https://github.com/kesla/parse-headers/>
   * Copyright (c) 2014 David Björklund
   * Available under the MIT license
   * <https://github.com/kesla/parse-headers/blob/master/LICENCE>
   */
    ,
    ei = Object.prototype.toString;
    var ti = function(e) {
        var r = {};
        return e && e.trim().split("\n").forEach(function(e) {
            var t = e.indexOf(":"),
            i = e.slice(0, t).trim().toLowerCase(),
            n = e.slice(t + 1).trim();
            "undefined" == typeof r[i] ? r[i] = n: Array.isArray(r[i]) ? r[i].push(n) : r[i] = [r[i], n]
        }),
        r
    },
    ii = si,
    ni = si;
    function ri(e, t, i) {
        var n = e;
        return Zt(t) ? (i = t, "string" == typeof e && (n = {
            uri: e
        })) : n = r({},
        t, {
            uri: e
        }),
        n.callback = i,
        n
    }
    function si(e, t, i) {
        return ai(t = ri(e, t, i))
    }
    function ai(n) {
        if ("undefined" == typeof n.callback) throw new Error("callback argument missing");
        var r = !1,
        s = function(e, t, i) {
            r || (r = !0, n.callback(e, t, i))
        };
        function t(e) {
            return clearTimeout(o),
            e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))),
            e.statusCode = 0,
            s(e, m)
        }
        function e() {
            if (!a) {
                var e;
                clearTimeout(o),
                e = n.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
                var t = m,
                i = null;
                return 0 !== e ? (t = {
                    body: function() {
                        var e = void 0;
                        if (e = u.response ? u.response: u.responseText ||
                        function(e) {
                            try {
                                if ("document" === e.responseType) return e.responseXML;
                                var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                                if ("" === e.responseType && !t) return e.responseXML
                            } catch(e) {}
                            return null
                        } (u), f) try {
                            e = JSON.parse(e)
                        } catch(e) {}
                        return e
                    } (),
                    statusCode: e,
                    method: c,
                    headers: {},
                    url: l,
                    rawRequest: u
                },
                u.getAllResponseHeaders && (t.headers = ti(u.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"),
                s(i, t, t.body)
            }
        }
        var i, a, o, u = n.xhr || null,
        l = (u = u || (n.cors || n.useXDR ? new si.XDomainRequest: new si.XMLHttpRequest)).url = n.uri || n.url,
        c = u.method = n.method || "GET",
        h = n.body || n.data,
        d = u.headers = n.headers || {},
        p = !!n.sync,
        f = !1,
        m = {
            body: void 0,
            headers: {},
            statusCode: 0,
            method: c,
            url: l,
            rawRequest: u
        };
        if ("json" in n && !1 !== n.json && (f = !0, d.accept || d.Accept || (d.Accept = "application/json"), "GET" !== c && "HEAD" !== c && (d["content-type"] || d["Content-Type"] || (d["Content-Type"] = "application/json"), h = JSON.stringify(!0 === n.json ? h: n.json))), u.onreadystatechange = function() {
            4 === u.readyState && setTimeout(e, 0)
        },
        u.onload = e, u.onerror = t, u.onprogress = function() {},
        u.onabort = function() {
            a = !0
        },
        u.ontimeout = t, u.open(c, l, !p, n.username, n.password), p || (u.withCredentials = !!n.withCredentials), !p && 0 < n.timeout && (o = setTimeout(function() {
            if (!a) {
                a = !0,
                u.abort("timeout");
                var e = new Error("XMLHttpRequest timeout");
                e.code = "ETIMEDOUT",
                t(e)
            }
        },
        n.timeout)), u.setRequestHeader) for (i in d) d.hasOwnProperty(i) && u.setRequestHeader(i, d[i]);
        else if (n.headers && !
        function(e) {
            for (var t in e) if (e.hasOwnProperty(t)) return ! 1;
            return ! 0
        } (n.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in n && (u.responseType = n.responseType),
        "beforeSend" in n && "function" == typeof n.beforeSend && n.beforeSend(u),
        u.send(h || null),
        u
    }
    si.XMLHttpRequest = y.XMLHttpRequest ||
    function() {},
    si.XDomainRequest = "withCredentials" in new si.XMLHttpRequest ? si.XMLHttpRequest: y.XDomainRequest,
    function(e, t) {
        for (var i = 0; i < e.length; i++) t(e[i])
    } (["get", "put", "post", "patch", "head", "delete"],
    function(n) {
        si["delete" === n ? "del": n] = function(e, t, i) {
            return (t = ri(e, t, i)).method = n.toUpperCase(),
            ai(t)
        }
    }),
    ii.
default = ni;
    function oi(e, t) {
        var i = new y.WebVTT.Parser(y, y.vttjs, y.WebVTT.StringDecoder()),
        n = [];
        i.oncue = function(e) {
            t.addCue(e)
        },
        i.onparsingerror = function(e) {
            n.push(e)
        },
        i.onflush = function() {
            t.trigger({
                type: "loadeddata",
                target: t
            })
        },
        i.parse(e),
        0 < n.length && (y.console && y.console.groupCollapsed && y.console.groupCollapsed("Text Track parsing errors for " + t.src), n.forEach(function(e) {
            return p.error(e)
        }), y.console && y.console.groupEnd && y.console.groupEnd()),
        i.flush()
    }
    function ui(e, n) {
        var t = {
            uri: e
        },
        i = Ht(e);
        i && (t.cors = i);
        var r = "use-credentials" === n.tech_.crossOrigin();
        r && (t.withCredentials = r),
        ii(t, ge(this,
        function(e, t, i) {
            if (e) return p.error(e, t);
            n.loaded_ = !0,
            "function" != typeof y.WebVTT ? n.tech_ && n.tech_.any(["vttjsloaded", "vttjserror"],
            function(e) {
                if ("vttjserror" !== e.type) return oi(i, n);
                p.error("vttjs failed to load, stopping trying to process " + n.src)
            }) : oi(i, n)
        }))
    }
    var li = function(l) {
        function e(e) {
            var t;
            if (void 0 === e && (e = {}), !e.tech) throw new Error("A tech was not provided.");
            var i = Ne(e, {
                kind: Yt[e.kind] || "subtitles",
                language: e.language || e.srclang || ""
            }),
            n = $t[i.mode] || "disabled",
            r = i.
        default;
            "metadata" !== i.kind && "chapters" !== i.kind || (n = "hidden"),
            (t = l.call(this, i) || this).tech_ = i.tech,
            t.cues_ = [],
            t.activeCues_ = [],
            t.preload_ = !1 !== t.tech_.preloadTextTracks;
            var s = new Gt(t.cues_),
            a = new Gt(t.activeCues_),
            o = !1,
            u = ge(Fe(t),
            function() {
                this.activeCues = this.activeCues,
                o && (this.trigger("cuechange"), o = !1)
            });
            return "disabled" !== n && t.tech_.ready(function() {
                t.tech_.on("timeupdate", u)
            },
            !0),
            Object.defineProperties(Fe(t), {
            default:
                {
                    get:
                    function() {
                        return r
                    },
                    set: function() {}
                },
                mode: {
                    get: function() {
                        return n
                    },
                    set: function(e) {
                        var t = this;
                        $t[e] && (n = e, this.preload_ || "disabled" === n || 0 !== this.cues.length || ui(this.src, this), "disabled" !== n ? this.tech_.ready(function() {
                            t.tech_.on("timeupdate", u)
                        },
                        !0) : this.tech_.off("timeupdate", u), this.trigger("modechange"))
                    }
                },
                cues: {
                    get: function() {
                        return this.loaded_ ? s: null
                    },
                    set: function() {}
                },
                activeCues: {
                    get: function() {
                        if (!this.loaded_) return null;
                        if (0 === this.cues.length) return a;
                        for (var e = this.tech_.currentTime(), t = [], i = 0, n = this.cues.length; i < n; i++) {
                            var r = this.cues[i];
                            r.startTime <= e && r.endTime >= e ? t.push(r) : r.startTime === r.endTime && r.startTime <= e && r.startTime + .5 >= e && t.push(r)
                        }
                        if (o = !1, t.length !== this.activeCues_.length) o = !0;
                        else for (var s = 0; s < t.length; s++) - 1 === this.activeCues_.indexOf(t[s]) && (o = !0);
                        return this.activeCues_ = t,
                        a.setCues_(this.activeCues_),
                        a
                    },
                    set: function() {}
                }
            }),
            i.src ? (t.src = i.src, t.preload_ || (t.loaded_ = !0), (t.preload_ || r || "subtitles" !== i.kind && "captions" !== i.kind) && ui(t.src, Fe(t))) : t.loaded_ = !0,
            t
        }
        ze(e, l);
        var t = e.prototype;
        return t.addCue = function(e) {
            var t = e;
            if (y.vttjs && !(e instanceof y.vttjs.VTTCue)) {
                for (var i in t = new y.vttjs.VTTCue(e.startTime, e.endTime, e.text), e) i in t || (t[i] = e[i]);
                t.id = e.id,
                t.originalCue_ = e
            }
            for (var n = this.tech_.textTracks(), r = 0; r < n.length; r++) n[r] !== this && n[r].removeCue(t);
            this.cues_.push(t),
            this.cues.setCues_(this.cues_)
        },
        t.removeCue = function(e) {
            for (var t = this.cues_.length; t--;) {
                var i = this.cues_[t];
                if (i === e || i.originalCue_ && i.originalCue_ === e) {
                    this.cues_.splice(t, 1),
                    this.cues.setCues_(this.cues_);
                    break
                }
            }
        },
        e
    } (Qt);
    li.prototype.allowedEvents_ = {
        cuechange: "cuechange"
    };
    var ci = function(r) {
        function e(e) {
            var t;
            void 0 === e && (e = {});
            var i = Ne(e, {
                kind: Kt[e.kind] || ""
            });
            t = r.call(this, i) || this;
            var n = !1;
            return Object.defineProperty(Fe(t), "enabled", {
                get: function() {
                    return n
                },
                set: function(e) {
                    "boolean" == typeof e && e !== n && (n = e, this.trigger("enabledchange"))
                }
            }),
            i.enabled && (t.enabled = i.enabled),
            t.loaded_ = !0,
            t
        }
        return ze(e, r),
        e
    } (Qt),
    hi = function(r) {
        function e(e) {
            var t;
            void 0 === e && (e = {});
            var i = Ne(e, {
                kind: Xt[e.kind] || ""
            });
            t = r.call(this, i) || this;
            var n = !1;
            return Object.defineProperty(Fe(t), "selected", {
                get: function() {
                    return n
                },
                set: function(e) {
                    "boolean" == typeof e && e !== n && (n = e, this.trigger("selectedchange"))
                }
            }),
            i.selected && (t.selected = i.selected),
            t
        }
        return ze(e, r),
        e
    } (Qt),
    di = function(r) {
        function e(e) {
            var t, i;
            void 0 === e && (e = {}),
            t = r.call(this) || this;
            var n = new li(e);
            return t.kind = n.kind,
            t.src = n.src,
            t.srclang = n.language,
            t.label = n.label,
            t.
        default = n.
        default,
            Object.defineProperties(Fe(t), {
                readyState: {
                    get: function() {
                        return i
                    }
                },
                track: {
                    get: function() {
                        return n
                    }
                }
            }),
            i = 0,
            n.addEventListener("loadeddata",
            function() {
                i = 2,
                t.trigger({
                    type: "load",
                    target: Fe(t)
                })
            }),
            t
        }
        return ze(e, r),
        e
    } (ye);
    di.prototype.allowedEvents_ = {
        load: "load"
    },
    di.NONE = 0,
    di.LOADING = 1,
    di.LOADED = 2,
    di.ERROR = 3;
    var pi = {
        audio: {
            ListClass: Vt,
            TrackClass: ci,
            capitalName: "Audio"
        },
        video: {
            ListClass: qt,
            TrackClass: hi,
            capitalName: "Video"
        },
        text: {
            ListClass: Wt,
            TrackClass: li,
            capitalName: "Text"
        }
    };
    Object.keys(pi).forEach(function(e) {
        pi[e].getterName = e + "Tracks",
        pi[e].privateName = e + "Tracks_"
    });
    var fi = {
        remoteText: {
            ListClass: Wt,
            TrackClass: li,
            capitalName: "RemoteText",
            getterName: "remoteTextTracks",
            privateName: "remoteTextTracks_"
        },
        remoteTextEl: {
            ListClass: zt,
            TrackClass: di,
            capitalName: "RemoteTextTrackEls",
            getterName: "remoteTextTrackEls",
            privateName: "remoteTextTrackEls_"
        }
    },
    mi = r({},
    pi, fi);
    fi.names = Object.keys(fi),
    pi.names = Object.keys(pi),
    mi.names = [].concat(fi.names).concat(pi.names);
    var gi = Object.create ||
    function(e) {
        if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
        return vi.prototype = e,
        new vi
    };
    function vi() {}
    function yi(e, t) {
        this.name = "ParsingError",
        this.code = e.code,
        this.message = t || e.message
    }
    function _i(e) {
        function t(e, t, i, n) {
            return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | n) / 1e3
        }
        var i = e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
        return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : 59 < i[1] ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
    }
    function bi() {
        this.values = gi(null)
    }
    function Ti(e, t, i, n) {
        var r = n ? e.split(n) : [e];
        for (var s in r) if ("string" == typeof r[s]) {
            var a = r[s].split(i);
            if (2 === a.length) t(a[0], a[1])
        }
    }
    function Si(t, e, a) {
        var i = t;
        function n() {
            var e = _i(t);
            if (null === e) throw new yi(yi.Errors.BadTimeStamp, "Malformed timestamp: " + i);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ""),
            e
        }
        function r() {
            t = t.replace(/^\s+/, "")
        }
        if (r(), e.startTime = n(), r(), "--\x3e" !== t.substr(0, 3)) throw new yi(yi.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
        t = t.substr(3),
        r(),
        e.endTime = n(),
        r(),
        function(e, t) {
            var s = new bi;
            Ti(e,
            function(e, t) {
                switch (e) {
                case "region":
                    for (var i = a.length - 1; 0 <= i; i--) if (a[i].id === t) {
                        s.set(e, a[i].region);
                        break
                    }
                    break;
                case "vertical":
                    s.alt(e, t, ["rl", "lr"]);
                    break;
                case "line":
                    var n = t.split(","),
                    r = n[0];
                    s.integer(e, r),
                    s.percent(e, r) && s.set("snapToLines", !1),
                    s.alt(e, r, ["auto"]),
                    2 === n.length && s.alt("lineAlign", n[1], ["start", "center", "end"]);
                    break;
                case "position":
                    n = t.split(","),
                    s.percent(e, n[0]),
                    2 === n.length && s.alt("positionAlign", n[1], ["start", "center", "end"]);
                    break;
                case "size":
                    s.percent(e, t);
                    break;
                case "align":
                    s.alt(e, t, ["start", "center", "end", "left", "right"])
                }
            },
            /:/, /\s/),
            t.region = s.get("region", null),
            t.vertical = s.get("vertical", "");
            try {
                t.line = s.get("line", "auto")
            } catch(e) {}
            t.lineAlign = s.get("lineAlign", "start"),
            t.snapToLines = s.get("snapToLines", !0),
            t.size = s.get("size", 100);
            try {
                t.align = s.get("align", "center")
            } catch(e) {
                t.align = s.get("align", "middle")
            }
            try {
                t.position = s.get("position", "auto")
            } catch(e) {
                t.position = s.get("position", {
                    start: 0,
                    left: 0,
                    center: 50,
                    middle: 50,
                    end: 100,
                    right: 100
                },
                t.align)
            }
            t.positionAlign = s.get("positionAlign", {
                start: "start",
                left: "start",
                center: "center",
                middle: "center",
                end: "end",
                right: "end"
            },
            t.align)
        } (t, e)
    } ((yi.prototype = gi(Error.prototype)).constructor = yi).Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    },
    bi.prototype = {
        set: function(e, t) {
            this.get(e) || "" === t || (this.values[e] = t)
        },
        get: function(e, t, i) {
            return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
        },
        has: function(e) {
            return e in this.values
        },
        alt: function(e, t, i) {
            for (var n = 0; n < i.length; ++n) if (t === i[n]) {
                this.set(e, t);
                break
            }
        },
        integer: function(e, t) { / ^-?\d + $ / .test(t) && this.set(e, parseInt(t, 10))
        },
        percent: function(e, t) {
            return !! (t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (t = parseFloat(t)) && t <= 100) && (this.set(e, t), !0)
        }
    };
    var ki = h.createElement("textarea"),
    Ci = {
        c: "span",
        i: "i",
        b: "b",
        u: "u",
        ruby: "ruby",
        rt: "rt",
        v: "span",
        lang: "span"
    },
    Ei = {
        white: "rgba(255,255,255,1)",
        lime: "rgba(0,255,0,1)",
        cyan: "rgba(0,255,255,1)",
        red: "rgba(255,0,0,1)",
        yellow: "rgba(255,255,0,1)",
        magenta: "rgba(255,0,255,1)",
        blue: "rgba(0,0,255,1)",
        black: "rgba(0,0,0,1)"
    },
    wi = {
        v: "title",
        lang: "lang"
    },
    xi = {
        rt: "ruby"
    };
    function Ai(s, i) {
        function e() {
            if (!i) return null;
            var e, t = i.match(/^([^<]*)(<[^>]*>?)?/);
            return e = t[1] ? t[1] : t[2],
            i = i.substr(e.length),
            e
        }
        function t(e, t) {
            var i = Ci[e];
            if (!i) return null;
            var n = s.document.createElement(i),
            r = wi[e];
            return r && t && (n[r] = t.trim()),
            n
        }
        for (var n, r, a, o, u = s.document.createElement("div"), l = u, c = []; null !== (n = e());) if ("<" !== n[0]) l.appendChild(s.document.createTextNode((r = n, ki.innerHTML = r, r = ki.textContent, ki.textContent = "", r)));
        else {
            if ("/" === n[1]) {
                c.length && c[c.length - 1] === n.substr(2).replace(">", "") && (c.pop(), l = l.parentNode);
                continue
            }
            var h, d = _i(n.substr(1, n.length - 2));
            if (d) {
                h = s.document.createProcessingInstruction("timestamp", d),
                l.appendChild(h);
                continue
            }
            var p = n.match(/^<([^.\s/0 - 9 > ] + )(\. [ ^ \s\\ > ] + ) ? ([ ^ >\\] + ) ? (\\ ? ) > ?$ / );
            if (!p) continue;
            if (! (h = t(p[1], p[3]))) continue;
            if (a = l, xi[(o = h).localName] && xi[o.localName] !== a.localName) continue;
            if (p[2]) {
                var f = p[2].split(".");
                f.forEach(function(e) {
                    var t = /^bg_/.test(e),
                    i = t ? e.slice(3) : e;
                    if (Ei.hasOwnProperty(i)) {
                        var n = t ? "background-color": "color",
                        r = Ei[i];
                        h.style[n] = r
                    }
                }),
                h.className = f.join(" ")
            }
            c.push(p[1]),
            l.appendChild(h),
            l = h
        }
        return u
    }
    var Ii = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
    function Pi(e) {
        for (var t = 0; t < Ii.length; t++) {
            var i = Ii[t];
            if (e >= i[0] && e <= i[1]) return ! 0
        }
        return ! 1
    }
    function Li() {}
    function Oi(e, t, i) {
        Li.call(this),
        this.cue = t,
        this.cueDiv = Ai(e, t.text);
        var n = {
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline",
            writingMode: "" === t.vertical ? "horizontal-tb": "lr" === t.vertical ? "vertical-lr": "vertical-rl",
            unicodeBidi: "plaintext"
        };
        this.applyStyles(n, this.cueDiv),
        this.div = e.document.createElement("div"),
        n = {
            direction: function(e) {
                var t = [],
                i = "";
                if (!e || !e.childNodes) return "ltr";
                function r(e, t) {
                    for (var i = t.childNodes.length - 1; 0 <= i; i--) e.push(t.childNodes[i])
                }
                function s(e) {
                    if (!e || !e.length) return null;
                    var t = e.pop(),
                    i = t.textContent || t.innerText;
                    if (i) {
                        var n = i.match(/^.*(\n|\r)/);
                        return n ? n[e.length = 0] : i
                    }
                    return "ruby" === t.tagName ? s(e) : t.childNodes ? (r(e, t), s(e)) : void 0
                }
                for (r(t, e); i = s(t);) for (var n = 0; n < i.length; n++) if (Pi(i.charCodeAt(n))) return "rtl";
                return "ltr"
            } (this.cueDiv),
            writingMode: "" === t.vertical ? "horizontal-tb": "lr" === t.vertical ? "vertical-lr": "vertical-rl",
            unicodeBidi: "plaintext",
            textAlign: "middle" === t.align ? "center": t.align,
            font: i.font,
            whiteSpace: "pre-line",
            position: "absolute"
        },
        this.applyStyles(n),
        this.div.appendChild(this.cueDiv);
        var r = 0;
        switch (t.positionAlign) {
        case "start":
            r = t.position;
            break;
        case "center":
            r = t.position - t.size / 2;
            break;
        case "end":
            r = t.position - t.size
        }
        "" === t.vertical ? this.applyStyles({
            left: this.formatStyle(r, "%"),
            width: this.formatStyle(t.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(r, "%"),
            height: this.formatStyle(t.size, "%")
        }),
        this.move = function(e) {
            this.applyStyles({
                top: this.formatStyle(e.top, "px"),
                bottom: this.formatStyle(e.bottom, "px"),
                left: this.formatStyle(e.left, "px"),
                right: this.formatStyle(e.right, "px"),
                height: this.formatStyle(e.height, "px"),
                width: this.formatStyle(e.width, "px")
            })
        }
    }
    function Di(e) {
        var t, i, n, r;
        if (e.div) {
            i = e.div.offsetHeight,
            n = e.div.offsetWidth,
            r = e.div.offsetTop;
            var s = (s = e.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
            e = e.div.getBoundingClientRect(),
            t = s ? Math.max(s[0] && s[0].height || 0, e.height / s.length) : 0
        }
        this.left = e.left,
        this.right = e.right,
        this.top = e.top || r,
        this.height = e.height || i,
        this.bottom = e.bottom || r + (e.height || i),
        this.width = e.width || n,
        this.lineHeight = void 0 !== t ? t: e.lineHeight
    }
    function Ni(e, t, o, u) {
        var i = new Di(t),
        n = t.cue,
        r = function(e) {
            if ("number" == typeof e.line && (e.snapToLines || 0 <= e.line && e.line <= 100)) return e.line;
            if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return - 1;
            for (var t = e.track,
            i = t.textTrackList,
            n = 0,
            r = 0; r < i.length && i[r] !== t; r++)"showing" === i[r].mode && n++;
            return - 1 * ++n
        } (n),
        s = [];
        if (n.snapToLines) {
            var a;
            switch (n.vertical) {
            case "":
                s = ["+y", "-y"],
                a = "height";
                break;
            case "rl":
                s = ["+x", "-x"],
                a = "width";
                break;
            case "lr":
                s = ["-x", "+x"],
                a = "width"
            }
            var l = i.lineHeight,
            c = l * Math.round(r),
            h = o[a] + l,
            d = s[0];
            Math.abs(c) > h && (c = c < 0 ? -1 : 1, c *= Math.ceil(h / l) * l),
            r < 0 && (c += "" === n.vertical ? o.height: o.width, s = s.reverse()),
            i.move(d, c)
        } else {
            var p = i.lineHeight / o.height * 100;
            switch (n.lineAlign) {
            case "center":
                r -= p / 2;
                break;
            case "end":
                r -= p
            }
            switch (n.vertical) {
            case "":
                t.applyStyles({
                    top:
                    t.formatStyle(r, "%")
                });
                break;
            case "rl":
                t.applyStyles({
                    left:
                    t.formatStyle(r, "%")
                });
                break;
            case "lr":
                t.applyStyles({
                    right:
                    t.formatStyle(r, "%")
                })
            }
            s = ["+y", "-x", "+x", "-y"],
            i = new Di(t)
        }
        var f = function(e, t) {
            for (var i, n = new Di(e), r = 1, s = 0; s < t.length; s++) {
                for (; e.overlapsOppositeAxis(o, t[s]) || e.within(o) && e.overlapsAny(u);) e.move(t[s]);
                if (e.within(o)) return e;
                var a = e.intersectPercentage(o);
                a < r && (i = new Di(e), r = a),
                e = new Di(n)
            }
            return i || n
        } (i, s);
        t.move(f.toCSSCompatValues(o))
    }
    function Ri() {}
    Li.prototype.applyStyles = function(e, t) {
        for (var i in t = t || this.div,
        e) e.hasOwnProperty(i) && (t.style[i] = e[i])
    },
    Li.prototype.formatStyle = function(e, t) {
        return 0 === e ? 0 : e + t
    },
    (Oi.prototype = gi(Li.prototype)).constructor = Oi,
    Di.prototype.move = function(e, t) {
        switch (t = void 0 !== t ? t: this.lineHeight, e) {
        case "+x":
            this.left += t,
            this.right += t;
            break;
        case "-x":
            this.left -= t,
            this.right -= t;
            break;
        case "+y":
            this.top += t,
            this.bottom += t;
            break;
        case "-y":
            this.top -= t,
            this.bottom -= t
        }
    },
    Di.prototype.overlaps = function(e) {
        return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
    },
    Di.prototype.overlapsAny = function(e) {
        for (var t = 0; t < e.length; t++) if (this.overlaps(e[t])) return ! 0;
        return ! 1
    },
    Di.prototype.within = function(e) {
        return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
    },
    Di.prototype.overlapsOppositeAxis = function(e, t) {
        switch (t) {
        case "+x":
            return this.left < e.left;
        case "-x":
            return this.right > e.right;
        case "+y":
            return this.top < e.top;
        case "-y":
            return this.bottom > e.bottom
        }
    },
    Di.prototype.intersectPercentage = function(e) {
        return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width)
    },
    Di.prototype.toCSSCompatValues = function(e) {
        return {
            top: this.top - e.top,
            bottom: e.bottom - this.bottom,
            left: this.left - e.left,
            right: e.right - this.right,
            height: this.height,
            width: this.width
        }
    },
    Di.getSimpleBoxPosition = function(e) {
        var t = e.div ? e.div.offsetHeight: e.tagName ? e.offsetHeight: 0,
        i = e.div ? e.div.offsetWidth: e.tagName ? e.offsetWidth: 0,
        n = e.div ? e.div.offsetTop: e.tagName ? e.offsetTop: 0;
        return {
            left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left,
            right: e.right,
            top: e.top || n,
            height: e.height || t,
            bottom: e.bottom || n + (e.height || t),
            width: e.width || i
        }
    },
    Ri.StringDecoder = function() {
        return {
            decode: function(e) {
                if (!e) return "";
                if ("string" != typeof e) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(e))
            }
        }
    },
    Ri.convertCueToDOMTree = function(e, t) {
        return e && t ? Ai(e, t) : null
    };
    Ri.processCues = function(n, r, e) {
        if (!n || !r || !e) return null;
        for (; e.firstChild;) e.removeChild(e.firstChild);
        var s = n.document.createElement("div");
        if (s.style.position = "absolute", s.style.left = "0", s.style.right = "0", s.style.top = "0", s.style.bottom = "0", s.style.margin = "1.5%", e.appendChild(s),
        function(e) {
            for (var t = 0; t < e.length; t++) if (e[t].hasBeenReset || !e[t].displayState) return ! 0;
            return ! 1
        } (r)) {
            var a = [],
            o = Di.getSimpleBoxPosition(s),
            u = {
                font: Math.round(.05 * o.height * 100) / 100 + "px sans-serif"
            }; !
            function() {
                for (var e, t, i = 0; i < r.length; i++) t = r[i],
                e = new Oi(n, t, u),
                s.appendChild(e.div),
                Ni(0, e, o, a),
                t.displayState = e.div,
                a.push(Di.getSimpleBoxPosition(e))
            } ()
        } else for (var t = 0; t < r.length; t++) s.appendChild(r[t].displayState)
    },
    (Ri.Parser = function(e, t, i) {
        i || (i = t, t = {}),
        t = t || {},
        this.window = e,
        this.vttjs = t,
        this.state = "INITIAL",
        this.buffer = "",
        this.decoder = i || new TextDecoder("utf8"),
        this.regionList = []
    }).prototype = {
        reportOrThrowError: function(e) {
            if (! (e instanceof yi)) throw e;
            this.onparsingerror && this.onparsingerror(e)
        },
        parse: function(e) {
            var n = this;
            function t() {
                for (var e = n.buffer,
                t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t];)++t;
                var i = e.substr(0, t);
                return "\r" === e[t] && ++t,
                "\n" === e[t] && ++t,
                n.buffer = e.substr(t),
                i
            }
            function i(e) {
                e.match(/X-TIMESTAMP-MAP/) ? Ti(e,
                function(e, t) {
                    switch (e) {
                    case "X-TIMESTAMP-MAP":
                        !
                        function(e) {
                            var i = new bi;
                            Ti(e,
                            function(e, t) {
                                switch (e) {
                                case "MPEGT":
                                    i.integer(e + "S", t);
                                    break;
                                case "LOCA":
                                    i.set(e + "L", _i(t))
                                }
                            },
                            /[^\d]:/, /,/),
                            n.ontimestampmap && n.ontimestampmap({
                                MPEGTS: i.get("MPEGTS"),
                                LOCAL: i.get("LOCAL")
                            })
                        } (t)
                    }
                },
                /=/) : Ti(e,
                function(e, t) {
                    switch (e) {
                    case "Region":
                        !
                        function(e) {
                            var r = new bi;
                            if (Ti(e,
                            function(e, t) {
                                switch (e) {
                                case "id":
                                    r.set(e, t);
                                    break;
                                case "width":
                                    r.percent(e, t);
                                    break;
                                case "lines":
                                    r.integer(e, t);
                                    break;
                                case "regionanchor":
                                case "viewportanchor":
                                    var i = t.split(",");
                                    if (2 !== i.length) break;
                                    var n = new bi;
                                    if (n.percent("x", i[0]), n.percent("y", i[1]), !n.has("x") || !n.has("y")) break;
                                    r.set(e + "X", n.get("x")),
                                    r.set(e + "Y", n.get("y"));
                                    break;
                                case "scroll":
                                    r.alt(e, t, ["up"])
                                }
                            },
                            /=/, /\s/), r.has("id")) {
                                var t = new(n.vttjs.VTTRegion || n.window.VTTRegion);
                                t.width = r.get("width", 100),
                                t.lines = r.get("lines", 3),
                                t.regionAnchorX = r.get("regionanchorX", 0),
                                t.regionAnchorY = r.get("regionanchorY", 100),
                                t.viewportAnchorX = r.get("viewportanchorX", 0),
                                t.viewportAnchorY = r.get("viewportanchorY", 100),
                                t.scroll = r.get("scroll", ""),
                                n.onregion && n.onregion(t),
                                n.regionList.push({
                                    id: r.get("id"),
                                    region: t
                                })
                            }
                        } (t)
                    }
                },
                /:/)
            }
            e && (n.buffer += n.decoder.decode(e, {
                stream: !0
            }));
            try {
                var r;
                if ("INITIAL" === n.state) {
                    if (!/\r\n|\n/.test(n.buffer)) return this;
                    var s = (r = t()).match(/^WEBVTT([ \t].*)?$/);
                    if (!s || !s[0]) throw new yi(yi.Errors.BadSignature);
                    n.state = "HEADER"
                }
                for (var a = !1; n.buffer;) {
                    if (!/\r\n|\n/.test(n.buffer)) return this;
                    switch (a ? a = !1 : r = t(), n.state) {
                    case "HEADER":
                        /:/.test(r) ? i(r) : r || (n.state = "ID");
                        continue;
                    case "NOTE":
                        r || (n.state = "ID");
                        continue;
                    case "ID":
                        if (/^NOTE($|[ \t])/.test(r)) {
                            n.state = "NOTE";
                            break
                        }
                        if (!r) continue;
                        n.cue = new(n.vttjs.VTTCue || n.window.VTTCue)(0, 0, "");
                        try {
                            n.cue.align = "center"
                        } catch(e) {
                            n.cue.align = "middle"
                        }
                        if (n.state = "CUE", -1 === r.indexOf("--\x3e")) {
                            n.cue.id = r;
                            continue
                        }
                    case "CUE":
                        try {
                            Si(r, n.cue, n.regionList)
                        } catch(e) {
                            n.reportOrThrowError(e),
                            n.cue = null,
                            n.state = "BADCUE";
                            continue
                        }
                        n.state = "CUETEXT";
                        continue;
                    case "CUETEXT":
                        var o = -1 !== r.indexOf("--\x3e");
                        if (!r || o && (a = !0)) {
                            n.oncue && n.oncue(n.cue),
                            n.cue = null,
                            n.state = "ID";
                            continue
                        }
                        n.cue.text && (n.cue.text += "\n"),
                        n.cue.text += r.replace(/\u2028/g, "\n").replace(/u2029/g, "\n");
                        continue;
                    case "BADCUE":
                        r || (n.state = "ID");
                        continue
                    }
                }
            } catch(e) {
                n.reportOrThrowError(e),
                "CUETEXT" === n.state && n.cue && n.oncue && n.oncue(n.cue),
                n.cue = null,
                n.state = "INITIAL" === n.state ? "BADWEBVTT": "BADCUE"
            }
            return this
        },
        flush: function() {
            var t = this;
            try {
                if (t.buffer += t.decoder.decode(), !t.cue && "HEADER" !== t.state || (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new yi(yi.Errors.BadSignature)
            } catch(e) {
                t.reportOrThrowError(e)
            }
            return t.onflush && t.onflush(),
            this
        }
    };
    var Ui = Ri,
    Mi = {
        "": 1,
        lr: 1,
        rl: 1
    },
    Bi = {
        start: 1,
        center: 1,
        end: 1,
        left: 1,
        right: 1,
        auto: 1,
        "line-left": 1,
        "line-right": 1
    };
    function ji(e) {
        return "string" == typeof e && ( !! Bi[e.toLowerCase()] && e.toLowerCase())
    }
    function Fi(e, t, i) {
        this.hasBeenReset = !1;
        var n = "",
        r = !1,
        s = e,
        a = t,
        o = i,
        u = null,
        l = "",
        c = !0,
        h = "auto",
        d = "start",
        p = "auto",
        f = "auto",
        m = 100,
        g = "center";
        Object.defineProperties(this, {
            id: {
                enumerable: !0,
                get: function() {
                    return n
                },
                set: function(e) {
                    n = "" + e
                }
            },
            pauseOnExit: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(e) {
                    r = !!e
                }
            },
            startTime: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(e) {
                    if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                    s = e,
                    this.hasBeenReset = !0
                }
            },
            endTime: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(e) {
                    if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                    a = e,
                    this.hasBeenReset = !0
                }
            },
            text: {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(e) {
                    o = "" + e,
                    this.hasBeenReset = !0
                }
            },
            region: {
                enumerable: !0,
                get: function() {
                    return u
                },
                set: function(e) {
                    u = e,
                    this.hasBeenReset = !0
                }
            },
            vertical: {
                enumerable: !0,
                get: function() {
                    return l
                },
                set: function(e) {
                    var t = function(e) {
                        return "string" == typeof e && ( !! Mi[e.toLowerCase()] && e.toLowerCase())
                    } (e);
                    if (!1 === t) throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
                    l = t,
                    this.hasBeenReset = !0
                }
            },
            snapToLines: {
                enumerable: !0,
                get: function() {
                    return c
                },
                set: function(e) {
                    c = !!e,
                    this.hasBeenReset = !0
                }
            },
            line: {
                enumerable: !0,
                get: function() {
                    return h
                },
                set: function(e) {
                    if ("number" != typeof e && "auto" !== e) throw new SyntaxError("Line: an invalid number or illegal string was specified.");
                    h = e,
                    this.hasBeenReset = !0
                }
            },
            lineAlign: {
                enumerable: !0,
                get: function() {
                    return d
                },
                set: function(e) {
                    var t = ji(e);
                    t && (d = t, this.hasBeenReset = !0)
                }
            },
            position: {
                enumerable: !0,
                get: function() {
                    return p
                },
                set: function(e) {
                    if (e < 0 || 100 < e) throw new Error("Position must be between 0 and 100.");
                    p = e,
                    this.hasBeenReset = !0
                }
            },
            positionAlign: {
                enumerable: !0,
                get: function() {
                    return f
                },
                set: function(e) {
                    var t = ji(e);
                    t && (f = t, this.hasBeenReset = !0)
                }
            },
            size: {
                enumerable: !0,
                get: function() {
                    return m
                },
                set: function(e) {
                    if (e < 0 || 100 < e) throw new Error("Size must be between 0 and 100.");
                    m = e,
                    this.hasBeenReset = !0
                }
            },
            align: {
                enumerable: !0,
                get: function() {
                    return g
                },
                set: function(e) {
                    var t = ji(e);
                    if (!t) throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
                    g = t,
                    this.hasBeenReset = !0
                }
            }
        }),
        this.displayState = void 0
    }
    Fi.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text)
    };
    var Hi = Fi,
    Vi = {
        "": !0,
        up: !0
    };
    function qi(e) {
        return "number" == typeof e && 0 <= e && e <= 100
    }
    function Wi() {
        var t = 100,
        i = 3,
        n = 0,
        r = 100,
        s = 0,
        a = 100,
        o = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    if (!qi(e)) throw new Error("Width must be between 0 and 100.");
                    t = e
                }
            },
            lines: {
                enumerable: !0,
                get: function() {
                    return i
                },
                set: function(e) {
                    if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
                    i = e
                }
            },
            regionAnchorY: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(e) {
                    if (!qi(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    r = e
                }
            },
            regionAnchorX: {
                enumerable: !0,
                get: function() {
                    return n
                },
                set: function(e) {
                    if (!qi(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    n = e
                }
            },
            viewportAnchorY: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(e) {
                    if (!qi(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    a = e
                }
            },
            viewportAnchorX: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(e) {
                    if (!qi(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    s = e
                }
            },
            scroll: {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(e) {
                    var t = function(e) {
                        return "string" == typeof e && ( !! Vi[e.toLowerCase()] && e.toLowerCase())
                    } (e); ! 1 === t || (o = t)
                }
            }
        })
    }
    var zi = t(function(e) {
        var t = e.exports = {
            WebVTT: Ui,
            VTTCue: Hi,
            VTTRegion: Wi
        };
        y.vttjs = t,
        y.WebVTT = t.WebVTT;
        var i = t.VTTCue,
        n = t.VTTRegion,
        r = y.VTTCue,
        s = y.VTTRegion;
        t.shim = function() {
            y.VTTCue = i,
            y.VTTRegion = n
        },
        t.restore = function() {
            y.VTTCue = r,
            y.VTTRegion = s
        },
        y.VTTCue || t.shim()
    });
    zi.WebVTT,
    zi.VTTCue,
    zi.VTTRegion;
    var Gi = function(t) {
        function i(i, e) {
            var n;
            return void 0 === i && (i = {}),
            void 0 === e && (e = function() {}),
            i.reportTouchActivity = !1,
            (n = t.call(this, null, i, e) || this).hasStarted_ = !1,
            n.on("playing",
            function() {
                this.hasStarted_ = !0
            }),
            n.on("loadstart",
            function() {
                this.hasStarted_ = !1
            }),
            mi.names.forEach(function(e) {
                var t = mi[e];
                i && i[t.getterName] && (n[t.privateName] = i[t.getterName])
            }),
            n.featuresProgressEvents || n.manualProgressOn(),
            n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(),
            ["Text", "Audio", "Video"].forEach(function(e) { ! 1 === i["native" + e + "Tracks"] && (n["featuresNative" + e + "Tracks"] = !1)
            }),
            !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? n.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (n.featuresNativeTextTracks = !0),
            n.featuresNativeTextTracks || n.emulateTextTracks(),
            n.preloadTextTracks = !1 !== i.preloadTextTracks,
            n.autoRemoteTextTracks_ = new mi.text.ListClass,
            n.initTrackListeners(),
            i.nativeControlsForTouch || n.emitTapEvents(),
            n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"),
            n
        }
        ze(i, t);
        var e = i.prototype;
        return e.triggerSourceset = function(e) {
            var t = this;
            this.isReady_ || this.one("ready",
            function() {
                return t.setTimeout(function() {
                    return t.triggerSourceset(e)
                },
                1)
            }),
            this.trigger({
                src: e,
                type: "sourceset"
            })
        },
        e.manualProgressOn = function() {
            this.on("durationchange", this.onDurationChange),
            this.manualProgress = !0,
            this.one("ready", this.trackProgress)
        },
        e.manualProgressOff = function() {
            this.manualProgress = !1,
            this.stopTrackingProgress(),
            this.off("durationchange", this.onDurationChange)
        },
        e.trackProgress = function(e) {
            this.stopTrackingProgress(),
            this.progressInterval = this.setInterval(ge(this,
            function() {
                var e = this.bufferedPercent();
                this.bufferedPercent_ !== e && this.trigger("progress"),
                1 === (this.bufferedPercent_ = e) && this.stopTrackingProgress()
            }), 500)
        },
        e.onDurationChange = function(e) {
            this.duration_ = this.duration()
        },
        e.buffered = function() {
            return mt(0, 0)
        },
        e.bufferedPercent = function() {
            return gt(this.buffered(), this.duration_)
        },
        e.stopTrackingProgress = function() {
            this.clearInterval(this.progressInterval)
        },
        e.manualTimeUpdatesOn = function() {
            this.manualTimeUpdates = !0,
            this.on("play", this.trackCurrentTime),
            this.on("pause", this.stopTrackingCurrentTime)
        },
        e.manualTimeUpdatesOff = function() {
            this.manualTimeUpdates = !1,
            this.stopTrackingCurrentTime(),
            this.off("play", this.trackCurrentTime),
            this.off("pause", this.stopTrackingCurrentTime)
        },
        e.trackCurrentTime = function() {
            this.currentTimeInterval && this.stopTrackingCurrentTime(),
            this.currentTimeInterval = this.setInterval(function() {
                this.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                })
            },
            250)
        },
        e.stopTrackingCurrentTime = function() {
            this.clearInterval(this.currentTimeInterval),
            this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        },
        e.dispose = function() {
            this.clearTracks(pi.names),
            this.manualProgress && this.manualProgressOff(),
            this.manualTimeUpdates && this.manualTimeUpdatesOff(),
            t.prototype.dispose.call(this)
        },
        e.clearTracks = function(e) {
            var r = this; (e = [].concat(e)).forEach(function(e) {
                for (var t = r[e + "Tracks"]() || [], i = t.length; i--;) {
                    var n = t[i];
                    "text" === e && r.removeRemoteTextTrack(n),
                    t.removeTrack(n)
                }
            })
        },
        e.cleanupAutoTextTracks = function() {
            for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--;) {
                var i = e[t];
                this.removeRemoteTextTrack(i)
            }
        },
        e.reset = function() {},
        e.crossOrigin = function() {},
        e.setCrossOrigin = function() {},
        e.error = function(e) {
            return void 0 !== e && (this.error_ = new kt(e), this.trigger("error")),
            this.error_
        },
        e.played = function() {
            return this.hasStarted_ ? mt(0, 0) : mt()
        },
        e.setScrubbing = function() {},
        e.setCurrentTime = function() {
            this.manualTimeUpdates && this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        },
        e.initTrackListeners = function() {
            var r = this;
            pi.names.forEach(function(e) {
                function t() {
                    r.trigger(e + "trackchange")
                }
                var i = pi[e],
                n = r[i.getterName]();
                n.addEventListener("removetrack", t),
                n.addEventListener("addtrack", t),
                r.on("dispose",
                function() {
                    n.removeEventListener("removetrack", t),
                    n.removeEventListener("addtrack", t)
                })
            })
        },
        e.addWebVttScript_ = function() {
            var e = this;
            if (!y.WebVTT) if (h.body.contains(this.el())) {
                if (!this.options_["vtt.js"] && u(zi) && 0 < Object.keys(zi).length) return void this.trigger("vttjsloaded");
                var t = h.createElement("script");
                t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",
                t.onload = function() {
                    e.trigger("vttjsloaded")
                },
                t.onerror = function() {
                    e.trigger("vttjserror")
                },
                this.on("dispose",
                function() {
                    t.onload = null,
                    t.onerror = null
                }),
                y.WebVTT = !0,
                this.el().parentNode.appendChild(t)
            } else this.ready(this.addWebVttScript_)
        },
        e.emulateTextTracks = function() {
            function t(e) {
                return n.addTrack(e.track)
            }
            function i(e) {
                return n.removeTrack(e.track)
            }
            var e = this,
            n = this.textTracks(),
            r = this.remoteTextTracks();
            r.on("addtrack", t),
            r.on("removetrack", i),
            this.addWebVttScript_();
            function s() {
                return e.trigger("texttrackchange")
            }
            function a() {
                s();
                for (var e = 0; e < n.length; e++) {
                    var t = n[e];
                    t.removeEventListener("cuechange", s),
                    "showing" === t.mode && t.addEventListener("cuechange", s)
                }
            }
            a(),
            n.addEventListener("change", a),
            n.addEventListener("addtrack", a),
            n.addEventListener("removetrack", a),
            this.on("dispose",
            function() {
                r.off("addtrack", t),
                r.off("removetrack", i),
                n.removeEventListener("change", a),
                n.removeEventListener("addtrack", a),
                n.removeEventListener("removetrack", a);
                for (var e = 0; e < n.length; e++) {
                    n[e].removeEventListener("cuechange", s)
                }
            })
        },
        e.addTextTrack = function(e, t, i) {
            if (!e) throw new Error("TextTrack kind is required but was not provided");
            return function(e, t, i, n, r) {
                void 0 === r && (r = {});
                var s = e.textTracks();
                r.kind = t,
                i && (r.label = i),
                n && (r.language = n),
                r.tech = e;
                var a = new mi.text.TrackClass(r);
                return s.addTrack(a),
                a
            } (this, e, t, i)
        },
        e.createRemoteTextTrack = function(e) {
            var t = Ne(e, {
                tech: this
            });
            return new fi.remoteTextEl.TrackClass(t)
        },
        e.addRemoteTextTrack = function(e, t) {
            var i = this;
            void 0 === e && (e = {});
            var n = this.createRemoteTextTrack(e);
            return ! 0 !== t && !1 !== t && (p.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), t = !0),
            this.remoteTextTrackEls().addTrackElement_(n),
            this.remoteTextTracks().addTrack(n.track),
            !0 !== t && this.ready(function() {
                return i.autoRemoteTextTracks_.addTrack(n.track)
            }),
            n
        },
        e.removeRemoteTextTrack = function(e) {
            var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
            this.remoteTextTrackEls().removeTrackElement_(t),
            this.remoteTextTracks().removeTrack(e),
            this.autoRemoteTextTracks_.removeTrack(e)
        },
        e.getVideoPlaybackQuality = function() {
            return {}
        },
        e.requestPictureInPicture = function() {
            var e = this.options_.Promise || y.Promise;
            if (e) return e.reject()
        },
        e.disablePictureInPicture = function() {
            return ! 0
        },
        e.setDisablePictureInPicture = function() {},
        e.setPoster = function() {},
        e.playsinline = function() {},
        e.setPlaysinline = function() {},
        e.overrideNativeAudioTracks = function() {},
        e.overrideNativeVideoTracks = function() {},
        e.canPlayType = function() {
            return ""
        },
        i.canPlayType = function() {
            return ""
        },
        i.canPlaySource = function(e, t) {
            return i.canPlayType(e.type)
        },
        i.isTech = function(e) {
            return e.prototype instanceof i || e instanceof i || e === i
        },
        i.registerTech = function(e, t) {
            if (i.techs_ || (i.techs_ = {}), !i.isTech(t)) throw new Error("Tech " + e + " must be a Tech");
            if (!i.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
            if (!i.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
            return e = De(e),
            i.techs_[e] = t,
            i.techs_[Oe(e)] = t,
            "Tech" !== e && i.defaultTechOrder_.push(e),
            t
        },
        i.getTech = function(e) {
            if (e) return i.techs_ && i.techs_[e] ? i.techs_[e] : (e = De(e), y && y.videojs && y.videojs[e] ? (p.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), y.videojs[e]) : void 0)
        },
        i
    } (je);
    mi.names.forEach(function(e) {
        var t = mi[e];
        Gi.prototype[t.getterName] = function() {
            return this[t.privateName] = this[t.privateName] || new t.ListClass,
            this[t.privateName]
        }
    }),
    Gi.prototype.featuresVolumeControl = !0,
    Gi.prototype.featuresMuteControl = !0,
    Gi.prototype.featuresFullscreenResize = !1,
    Gi.prototype.featuresPlaybackRate = !1,
    Gi.prototype.featuresProgressEvents = !1,
    Gi.prototype.featuresSourceset = !1,
    Gi.prototype.featuresTimeupdateEvents = !1,
    Gi.prototype.featuresNativeTextTracks = !1,
    Gi.withSourceHandlers = function(r) {
        r.registerSourceHandler = function(e, t) {
            var i = r.sourceHandlers;
            i = i || (r.sourceHandlers = []),
            void 0 === t && (t = i.length),
            i.splice(t, 0, e)
        },
        r.canPlayType = function(e) {
            for (var t, i = r.sourceHandlers || [], n = 0; n < i.length; n++) if (t = i[n].canPlayType(e)) return t;
            return ""
        },
        r.selectSourceHandler = function(e, t) {
            for (var i = r.sourceHandlers || [], n = 0; n < i.length; n++) if (i[n].canHandleSource(e, t)) return i[n];
            return null
        },
        r.canPlaySource = function(e, t) {
            var i = r.selectSourceHandler(e, t);
            return i ? i.canHandleSource(e, t) : ""
        }; ["seekable", "seeking", "duration"].forEach(function(e) {
            var t = this[e];
            "function" == typeof t && (this[e] = function() {
                return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
            })
        },
        r.prototype),
        r.prototype.setSource = function(e) {
            var t = r.selectSourceHandler(e, this.options_);
            t || (r.nativeSourceHandler ? t = r.nativeSourceHandler: p.error("No source handler found for the current source.")),
            this.disposeSourceHandler(),
            this.off("dispose", this.disposeSourceHandler),
            t !== r.nativeSourceHandler && (this.currentSource_ = e),
            this.sourceHandler_ = t.handleSource(e, this, this.options_),
            this.one("dispose", this.disposeSourceHandler)
        },
        r.prototype.disposeSourceHandler = function() {
            this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null),
            this.cleanupAutoTextTracks(),
            this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
        }
    },
    je.registerComponent("Tech", Gi),
    Gi.registerTech("Tech", Gi),
    Gi.defaultTechOrder_ = [];
    var Xi = {},
    Ki = {},
    Yi = {};
    function $i(e, t, i) {
        e.setTimeout(function() {
            return function i(n, e, r, s, a, o) {
                void 0 === n && (n = {});
                void 0 === e && (e = []);
                void 0 === a && (a = []);
                void 0 === o && (o = !1);
                var t = e,
                u = t[0],
                l = t.slice(1);
                if ("string" == typeof u) i(n, Xi[u], r, s, a, o);
                else if (u) {
                    var c = nn(s, u);
                    if (!c.setSource) return a.push(c),
                    i(n, l, r, s, a, o);
                    c.setSource(m({},
                    n),
                    function(e, t) {
                        if (e) return i(n, l, r, s, a, o);
                        a.push(c),
                        i(t, n.type === t.type ? l: Xi[t.type], r, s, a, o)
                    })
                } else l.length ? i(n, l, r, s, a, o) : o ? r(n, a) : i(n, Xi["*"], r, s, a, !0)
            } (t, Xi[t.type], i, e)
        },
        1)
    }
    function Qi(e, t, i, n) {
        void 0 === n && (n = null);
        var r = "call" + De(i),
        s = e.reduce(tn(r), n),
        a = s === Yi,
        o = a ? null: t[i](s);
        return function(e, t, i, n) {
            for (var r = e.length - 1; 0 <= r; r--) {
                var s = e[r];
                s[t] && s[t](n, i)
            }
        } (e, i, o, a),
        o
    }
    var Ji = {
        buffered: 1,
        currentTime: 1,
        duration: 1,
        muted: 1,
        played: 1,
        paused: 1,
        seekable: 1,
        volume: 1
    },
    Zi = {
        setCurrentTime: 1,
        setMuted: 1,
        setVolume: 1
    },
    en = {
        play: 1,
        pause: 1
    };
    function tn(i) {
        return function(e, t) {
            return e === Yi ? Yi: t[i] ? t[i](e) : e
        }
    }
    function nn(e, t) {
        var i = Ki[e.id()],
        n = null;
        if (null == i) return n = t(e),
        Ki[e.id()] = [[t, n]],
        n;
        for (var r = 0; r < i.length; r++) {
            var s = i[r],
            a = s[0],
            o = s[1];
            a === t && (n = o)
        }
        return null === n && (n = t(e), i.push([t, n])),
        n
    }
    function rn(e) {
        void 0 === e && (e = "");
        var t = Ft(e);
        return sn[t.toLowerCase()] || ""
    }
    var sn = {
        opus: "video/ogg",
        ogv: "video/ogg",
        mp4: "video/mp4",
        mov: "video/mp4",
        m4v: "video/mp4",
        mkv: "video/x-matroska",
        m4a: "audio/mp4",
        mp3: "audio/mpeg",
        aac: "audio/aac",
        caf: "audio/x-caf",
        flac: "audio/flac",
        oga: "audio/ogg",
        wav: "audio/wav",
        m3u8: "application/x-mpegURL",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        gif: "image/gif",
        png: "image/png",
        svg: "image/svg+xml",
        webp: "image/webp"
    };
    function an(e) {
        if (!e.type) {
            var t = rn(e.src);
            t && (e.type = t)
        }
        return e
    }
    var on = function(l) {
        function e(e, t, i) {
            var n, r = Ne({
                createEl: !1
            },
            t);
            if (n = l.call(this, e, r, i) || this, t.playerOptions.sources && 0 !== t.playerOptions.sources.length) e.src(t.playerOptions.sources);
            else for (var s = 0,
            a = t.playerOptions.techOrder; s < a.length; s++) {
                var o = De(a[s]),
                u = Gi.getTech(o);
                if (o || (u = je.getComponent(o)), u && u.isSupported()) {
                    e.loadTech_(o);
                    break
                }
            }
            return n
        }
        return ze(e, l),
        e
    } (je);
    je.registerComponent("MediaLoader", on);
    var un = function(r) {
        function e(e, t) {
            var i;
            return (i = r.call(this, e, t) || this).emitTapEvents(),
            i.enable(),
            i
        }
        ze(e, r);
        var t = e.prototype;
        return t.createEl = function(e, t, i) {
            void 0 === e && (e = "div"),
            void 0 === t && (t = {}),
            void 0 === i && (i = {}),
            t = m({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass(),
                tabIndex: 0
            },
            t),
            "button" === e && p.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."),
            i = m({
                role: "button"
            },
            i),
            this.tabIndex_ = t.tabIndex;
            var n = r.prototype.createEl.call(this, e, t, i);
            return this.createControlTextEl(n),
            n
        },
        t.dispose = function() {
            this.controlTextEl_ = null,
            r.prototype.dispose.call(this)
        },
        t.createControlTextEl = function(e) {
            return this.controlTextEl_ = S("span", {
                className: "vjs-control-text"
            },
            {
                "aria-live": "polite"
            }),
            e && e.appendChild(this.controlTextEl_),
            this.controlText(this.controlText_, e),
            this.controlTextEl_
        },
        t.controlText = function(e, t) {
            if (void 0 === t && (t = this.el()), void 0 === e) return this.controlText_ || "Need Text";
            var i = this.localize(e);
            this.controlText_ = e,
            k(this.controlTextEl_, i),
            this.nonIconControl || t.setAttribute("title", i)
        },
        t.buildCSSClass = function() {
            return "vjs-control vjs-button " + r.prototype.buildCSSClass.call(this)
        },
        t.enable = function() {
            this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("keydown", this.handleKeyDown))
        },
        t.disable = function() {
            this.enabled_ = !1,
            this.addClass("vjs-disabled"),
            this.el_.setAttribute("aria-disabled", "true"),
            "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"),
            this.off("mouseover", this.handleMouseOver),
            this.off("mouseout", this.handleMouseOut),
            this.off(["tap", "click"], this.handleClick),
            this.off("keydown", this.handleKeyDown)
        },
        t.handleClick = function(e) {
            this.options_.clickHandler && this.options_.clickHandler.call(this, arguments)
        },
        t.handleKeyDown = function(e) {
            Lt.isEventKey(e, "Space") || Lt.isEventKey(e, "Enter") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : r.prototype.handleKeyDown.call(this, e)
        },
        e
    } (je);
    je.registerComponent("ClickableComponent", un);
    var ln = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).update(),
            e.on("posterchange", ge(Fe(i), i.update)),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.dispose = function() {
            this.player().off("posterchange", this.update),
            n.prototype.dispose.call(this)
        },
        t.createEl = function() {
            return S("div", {
                className: "vjs-poster",
                tabIndex: -1
            })
        },
        t.update = function(e) {
            var t = this.player().poster();
            this.setSrc(t),
            t ? this.show() : this.hide()
        },
        t.setSrc = function(e) {
            var t = "";
            e && (t = 'url("' + e + '")'),
            this.el_.style.backgroundImage = t
        },
        t.handleClick = function(e) {
            if (this.player_.controls()) {
                var t = this.player_.usingPlugin("eme") && this.player_.eme.sessions && 0 < this.player_.eme.sessions.length; ! this.player_.tech(!0) || (rt || tt) && t || this.player_.tech(!0).focus(),
                this.player_.paused() ? xt(this.player_.play()) : this.player_.pause()
            }
        },
        e
    } (un);
    je.registerComponent("PosterImage", ln);
    var cn = "#222",
    hn = {
        monospace: "monospace",
        sansSerif: "sans-serif",
        serif: "serif",
        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
        monospaceSerif: '"Courier New", monospace',
        proportionalSansSerif: "sans-serif",
        proportionalSerif: "serif",
        casual: '"Comic Sans MS", Impact, fantasy',
        script: '"Monotype Corsiva", cursive',
        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };
    function dn(e, t) {
        var i;
        if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
        else {
            if (7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
            i = e.slice(1)
        }
        return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")"
    }
    function pn(e, t, i) {
        try {
            e.style[t] = i
        } catch(e) {
            return
        }
    }
    var fn = function(s) {
        function e(i, e, t) {
            var n;
            n = s.call(this, i, e, t) || this;
            var r = ge(Fe(n), n.updateDisplay);
            return i.on("loadstart", ge(Fe(n), n.toggleDisplay)),
            i.on("texttrackchange", r),
            i.on("loadedmetadata", ge(Fe(n), n.preselectTrack)),
            i.ready(ge(Fe(n),
            function() {
                if (i.tech_ && i.tech_.featuresNativeTextTracks) this.hide();
                else {
                    i.on("fullscreenchange", r),
                    i.on("playerresize", r),
                    y.addEventListener("orientationchange", r),
                    i.on("dispose",
                    function() {
                        return y.removeEventListener("orientationchange", r)
                    });
                    for (var e = this.options_.playerOptions.tracks || [], t = 0; t < e.length; t++) this.player_.addRemoteTextTrack(e[t], !0);
                    this.preselectTrack()
                }
            })),
            n
        }
        ze(e, s);
        var t = e.prototype;
        return t.preselectTrack = function() {
            for (var e, t, i, n = {
                captions: 1,
                subtitles: 1
            },
            r = this.player_.textTracks(), s = this.player_.cache_.selectedLanguage, a = 0; a < r.length; a++) {
                var o = r[a];
                s && s.enabled && s.language && s.language === o.language && o.kind in n ? i = o.kind === s.kind ? o: i || o: s && !s.enabled ? t = e = i = null: o.
            default && ("descriptions" !== o.kind || e ? o.kind in n && !t && (t = o) : e = o)
            }
            i ? i.mode = "showing": t ? t.mode = "showing": e && (e.mode = "showing")
        },
        t.toggleDisplay = function() {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
        },
        t.createEl = function() {
            return s.prototype.createEl.call(this, "div", {
                className: "vjs-text-track-display"
            },
            {
                "aria-live": "off",
                "aria-atomic": "true"
            })
        },
        t.clearDisplay = function() {
            "function" == typeof y.WebVTT && y.WebVTT.processCues(y, [], this.el_)
        },
        t.updateDisplay = function() {
            var e = this.player_.textTracks(),
            t = this.options_.allowMultipleShowingTracks;
            if (this.clearDisplay(), t) {
                for (var i = [], n = 0; n < e.length; ++n) {
                    var r = e[n];
                    "showing" === r.mode && i.push(r)
                }
                this.updateForTrack(i)
            } else {
                for (var s = null,
                a = null,
                o = e.length; o--;) {
                    var u = e[o];
                    "showing" === u.mode && ("descriptions" === u.kind ? s = u: a = u)
                }
                a ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(a)) : s && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(s))
            }
        },
        t.updateDisplayState = function(e) {
            for (var t = this.player_.textTrackSettings.getValues(), i = e.activeCues, n = i.length; n--;) {
                var r = i[n];
                if (r) {
                    var s = r.displayState;
                    if (t.color && (s.firstChild.style.color = t.color), t.textOpacity && pn(s.firstChild, "color", dn(t.color || "#fff", t.textOpacity)), t.backgroundColor && (s.firstChild.style.backgroundColor = t.backgroundColor), t.backgroundOpacity && pn(s.firstChild, "backgroundColor", dn(t.backgroundColor || "#000", t.backgroundOpacity)), t.windowColor && (t.windowOpacity ? pn(s, "backgroundColor", dn(t.windowColor, t.windowOpacity)) : s.style.backgroundColor = t.windowColor), t.edgeStyle && ("dropshadow" === t.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px " + cn: "raised" === t.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px " + cn: "depressed" === t.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px " + cn: "uniform" === t.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px " + cn)), t.fontPercent && 1 !== t.fontPercent) {
                        var a = y.parseFloat(s.style.fontSize);
                        s.style.fontSize = a * t.fontPercent + "px",
                        s.style.height = "auto",
                        s.style.top = "auto"
                    }
                    t.fontFamily && "default" !== t.fontFamily && ("small-caps" === t.fontFamily ? s.firstChild.style.fontVariant = "small-caps": s.firstChild.style.fontFamily = hn[t.fontFamily])
                }
            }
        },
        t.updateForTrack = function(e) {
            if (Array.isArray(e) || (e = [e]), "function" == typeof y.WebVTT && !e.every(function(e) {
                return ! e.activeCues
            })) {
                for (var t = [], i = 0; i < e.length; ++i) for (var n = e[i], r = 0; r < n.activeCues.length; ++r) t.push(n.activeCues[r]);
                y.WebVTT.processCues(y, t, this.el_);
                for (var s = 0; s < e.length; ++s) {
                    for (var a = e[s], o = 0; o < a.activeCues.length; ++o) {
                        var u = a.activeCues[o].displayState;
                        w(u, "vjs-text-track-cue"),
                        w(u, "vjs-text-track-cue-" + (a.language ? a.language: s))
                    }
                    this.player_.textTrackSettings && this.updateDisplayState(a)
                }
            }
        },
        e
    } (je);
    je.registerComponent("TextTrackDisplay", fn);
    var mn = function(r) {
        function e() {
            return r.apply(this, arguments) || this
        }
        return ze(e, r),
        e.prototype.createEl = function() {
            var e = this.player_.isAudio(),
            t = this.localize(e ? "Audio Player": "Video Player"),
            i = S("span", {
                className: "vjs-control-text",
                innerHTML: this.localize("{1} is loading.", [t])
            }),
            n = r.prototype.createEl.call(this, "div", {
                className: "vjs-loading-spinner",
                dir: "ltr"
            });
            return n.appendChild(i),
            n
        },
        e
    } (je);
    je.registerComponent("LoadingSpinner", mn);
    var gn = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        ze(e, t);
        var i = e.prototype;
        return i.createEl = function(e, t, i) {
            void 0 === t && (t = {}),
            void 0 === i && (i = {}),
            t = m({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass()
            },
            t),
            i = m({
                type: "button"
            },
            i);
            var n = je.prototype.createEl.call(this, "button", t, i);
            return this.createControlTextEl(n),
            n
        },
        i.addChild = function(e, t) {
            void 0 === t && (t = {});
            var i = this.constructor.name;
            return p.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."),
            je.prototype.addChild.call(this, e, t)
        },
        i.enable = function() {
            t.prototype.enable.call(this),
            this.el_.removeAttribute("disabled")
        },
        i.disable = function() {
            t.prototype.disable.call(this),
            this.el_.setAttribute("disabled", "disabled")
        },
        i.handleKeyDown = function(e) {
            Lt.isEventKey(e, "Space") || Lt.isEventKey(e, "Enter") ? e.stopPropagation() : t.prototype.handleKeyDown.call(this, e)
        },
        e
    } (un);
    je.registerComponent("Button", gn);
    var vn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).mouseused_ = !1,
            i.on("mousedown", i.handleMouseDown),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-big-play-button"
        },
        t.handleClick = function(e) {
            var t = this.player_.play();
            if (this.mouseused_ && e.clientX && e.clientY) {
                var i = this.player_.usingPlugin("eme") && this.player_.eme.sessions && 0 < this.player_.eme.sessions.length;
                return xt(t),
                void(!this.player_.tech(!0) || (rt || tt) && i || this.player_.tech(!0).focus())
            }
            var n = this.player_.getChild("controlBar"),
            r = n && n.getChild("playToggle");
            if (r) {
                var s = function() {
                    return r.focus()
                };
                wt(t) ? t.then(s,
                function() {}) : this.setTimeout(s, 1)
            } else this.player_.tech(!0).focus()
        },
        t.handleKeyDown = function(e) {
            this.mouseused_ = !1,
            n.prototype.handleKeyDown.call(this, e)
        },
        t.handleMouseDown = function(e) {
            this.mouseused_ = !0
        },
        e
    } (gn);
    vn.prototype.controlText_ = "Play Video",
    je.registerComponent("BigPlayButton", vn);
    var yn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).controlText(t && t.controlText || i.localize("Close")),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-close-button " + n.prototype.buildCSSClass.call(this)
        },
        t.handleClick = function(e) {
            this.trigger({
                type: "close",
                bubbles: !1
            })
        },
        t.handleKeyDown = function(e) {
            Lt.isEventKey(e, "Esc") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : n.prototype.handleKeyDown.call(this, e)
        },
        e
    } (gn);
    je.registerComponent("CloseButton", yn);
    var _n = function(n) {
        function e(e, t) {
            var i;
            return void 0 === t && (t = {}),
            i = n.call(this, e, t) || this,
            t.replay = void 0 === t.replay || t.replay,
            i.on(e, "play", i.handlePlay),
            i.on(e, "pause", i.handlePause),
            t.replay && i.on(e, "ended", i.handleEnded),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-play-control " + n.prototype.buildCSSClass.call(this)
        },
        t.handleClick = function(e) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        },
        t.handleSeeked = function(e) {
            this.removeClass("vjs-ended"),
            this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
        },
        t.handlePlay = function(e) {
            this.removeClass("vjs-ended"),
            this.removeClass("vjs-paused"),
            this.addClass("vjs-playing"),
            this.controlText("Pause")
        },
        t.handlePause = function(e) {
            this.removeClass("vjs-playing"),
            this.addClass("vjs-paused"),
            this.controlText("Play")
        },
        t.handleEnded = function(e) {
            this.removeClass("vjs-playing"),
            this.addClass("vjs-ended"),
            this.controlText("Replay"),
            this.one(this.player_, "seeked", this.handleSeeked)
        },
        e
    } (gn);
    _n.prototype.controlText_ = "Play",
    je.registerComponent("PlayToggle", _n);
    function bn(e, t) {
        e = e < 0 ? 0 : e;
        var i = Math.floor(e % 60),
        n = Math.floor(e / 60 % 60),
        r = Math.floor(e / 3600),
        s = Math.floor(t / 60 % 60),
        a = Math.floor(t / 3600);
        return ! isNaN(e) && e !== 1 / 0 || (r = n = i = "-"),
        (r = 0 < r || 0 < a ? r + ":": "") + (n = ((r || 10 <= s) && n < 10 ? "0" + n: n) + ":") + (i = i < 10 ? "0" + i: i)
    }
    var Tn = bn;
    function Sn(e, t) {
        return void 0 === t && (t = e),
        Tn(e, t)
    }
    var kn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, ["timeupdate", "ended"], i.updateContent),
            i.updateTextNode_(),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            var e = this.buildCSSClass(),
            t = n.prototype.createEl.call(this, "div", {
                className: e + " vjs-time-control vjs-control",
                innerHTML: '<span class="vjs-control-text" role="presentation">' + this.localize(this.labelText_) + " </span>"
            });
            return this.contentEl_ = S("span", {
                className: e + "-display"
            },
            {
                "aria-live": "off",
                role: "presentation"
            }),
            t.appendChild(this.contentEl_),
            t
        },
        t.dispose = function() {
            this.contentEl_ = null,
            this.textNode_ = null,
            n.prototype.dispose.call(this)
        },
        t.updateTextNode_ = function(e) {
            var t = this;
            void 0 === e && (e = 0),
            e = Sn(e),
            this.formattedTime_ !== e && (this.formattedTime_ = e, this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_",
            function() {
                if (t.contentEl_) {
                    var e = t.textNode_;
                    t.textNode_ = h.createTextNode(t.formattedTime_),
                    t.textNode_ && (e ? t.contentEl_.replaceChild(t.textNode_, e) : t.contentEl_.appendChild(t.textNode_))
                }
            }))
        },
        t.updateContent = function(e) {},
        e
    } (je);
    kn.prototype.labelText_ = "Time",
    kn.prototype.controlText_ = "Time",
    je.registerComponent("TimeDisplay", kn);
    var Cn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        ze(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-current-time"
        },
        i.updateContent = function(e) {
            var t;
            t = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime: this.player_.currentTime(),
            this.updateTextNode_(t)
        },
        t
    } (kn);
    Cn.prototype.labelText_ = "Current Time",
    Cn.prototype.controlText_ = "Current Time",
    je.registerComponent("CurrentTimeDisplay", Cn);
    var En = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, "durationchange", i.updateContent),
            i.on(e, "loadstart", i.updateContent),
            i.on(e, "loadedmetadata", i.updateContent),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-duration"
        },
        t.updateContent = function(e) {
            var t = this.player_.duration();
            this.updateTextNode_(t)
        },
        e
    } (kn);
    En.prototype.labelText_ = "Duration",
    En.prototype.controlText_ = "Duration",
    je.registerComponent("DurationDisplay", En);
    var wn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return ze(t, e),
        t.prototype.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-time-control vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            },
            {
                "aria-hidden": !0
            })
        },
        t
    } (je);
    je.registerComponent("TimeDivider", wn);
    var xn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, "durationchange", i.updateContent),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-remaining-time"
        },
        t.createEl = function() {
            var e = n.prototype.createEl.call(this);
            return e.insertBefore(S("span", {},
            {
                "aria-hidden": !0
            },
            "-"), this.contentEl_),
            e
        },
        t.updateContent = function(e) {
            var t;
            "number" == typeof this.player_.duration() && (t = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime(), this.updateTextNode_(t))
        },
        e
    } (kn);
    xn.prototype.labelText_ = "Remaining Time",
    xn.prototype.controlText_ = "Remaining Time",
    je.registerComponent("RemainingTimeDisplay", xn);
    var An = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).updateShowing(),
            i.on(i.player(), "durationchange", i.updateShowing),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            var e = n.prototype.createEl.call(this, "div", {
                className: "vjs-live-control vjs-control"
            });
            return this.contentEl_ = S("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
            },
            {
                "aria-live": "off"
            }),
            e.appendChild(this.contentEl_),
            e
        },
        t.dispose = function() {
            this.contentEl_ = null,
            n.prototype.dispose.call(this)
        },
        t.updateShowing = function(e) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide()
        },
        e
    } (je);
    je.registerComponent("LiveDisplay", An);
    var In = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).updateLiveEdgeStatus(),
            i.player_.liveTracker && i.on(i.player_.liveTracker, "liveedgechange", i.updateLiveEdgeStatus),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            var e = n.prototype.createEl.call(this, "button", {
                className: "vjs-seek-to-live-control vjs-control"
            });
            return this.textEl_ = S("span", {
                className: "vjs-seek-to-live-text",
                innerHTML: this.localize("LIVE")
            },
            {
                "aria-hidden": "true"
            }),
            e.appendChild(this.textEl_),
            e
        },
        t.updateLiveEdgeStatus = function() { ! this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"))
        },
        t.handleClick = function() {
            this.player_.liveTracker.seekToLiveEdge()
        },
        t.dispose = function() {
            this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatus),
            this.textEl_ = null,
            n.prototype.dispose.call(this)
        },
        e
    } (gn);
    In.prototype.controlText_ = "Seek to live, currently playing live",
    je.registerComponent("SeekToLive", In);
    function Pn(e, t, i) {
        return e = Number(e),
        Math.min(i, Math.max(t, isNaN(e) ? t: e))
    }
    var Ln = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).bar = i.getChild(i.options_.barName),
            i.vertical( !! i.options_.vertical),
            i.enable(),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.enabled = function() {
            return this.enabled_
        },
        t.enable = function() {
            this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("keydown", this.handleKeyDown), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
        },
        t.disable = function() {
            if (this.enabled()) {
                var e = this.bar.el_.ownerDocument;
                this.off("mousedown", this.handleMouseDown),
                this.off("touchstart", this.handleMouseDown),
                this.off("keydown", this.handleKeyDown),
                this.off("click", this.handleClick),
                this.off(this.player_, "controlsvisible", this.update),
                this.off(e, "mousemove", this.handleMouseMove),
                this.off(e, "mouseup", this.handleMouseUp),
                this.off(e, "touchmove", this.handleMouseMove),
                this.off(e, "touchend", this.handleMouseUp),
                this.removeAttribute("tabindex"),
                this.addClass("disabled"),
                this.playerEvent && this.off(this.player_, this.playerEvent, this.update),
                this.enabled_ = !1
            }
        },
        t.createEl = function(e, t, i) {
            return void 0 === t && (t = {}),
            void 0 === i && (i = {}),
            t.className = t.className + " vjs-slider",
            t = m({
                tabIndex: 0
            },
            t),
            i = m({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            },
            i),
            n.prototype.createEl.call(this, e, t, i)
        },
        t.handleMouseDown = function(e) {
            var t = this.bar.el_.ownerDocument;
            "mousedown" === e.type && e.preventDefault(),
            "touchstart" !== e.type || it || e.preventDefault(),
            N(),
            this.addClass("vjs-sliding"),
            this.trigger("slideractive"),
            this.on(t, "mousemove", this.handleMouseMove),
            this.on(t, "mouseup", this.handleMouseUp),
            this.on(t, "touchmove", this.handleMouseMove),
            this.on(t, "touchend", this.handleMouseUp),
            this.handleMouseMove(e)
        },
        t.handleMouseMove = function(e) {},
        t.handleMouseUp = function() {
            var e = this.bar.el_.ownerDocument;
            R(),
            this.removeClass("vjs-sliding"),
            this.trigger("sliderinactive"),
            this.off(e, "mousemove", this.handleMouseMove),
            this.off(e, "mouseup", this.handleMouseUp),
            this.off(e, "touchmove", this.handleMouseMove),
            this.off(e, "touchend", this.handleMouseUp),
            this.update()
        },
        t.update = function() {
            var t = this;
            if (this.el_ && this.bar) {
                var i = this.getProgress();
                return i === this.progress_ || (this.progress_ = i, this.requestNamedAnimationFrame("Slider#update",
                function() {
                    var e = t.vertical() ? "height": "width";
                    t.bar.el().style[e] = (100 * i).toFixed(2) + "%"
                })),
                i
            }
        },
        t.getProgress = function() {
            return Number(Pn(this.getPercent(), 0, 1).toFixed(4))
        },
        t.calculateDistance = function(e) {
            var t = B(this.el_, e);
            return this.vertical() ? t.y: t.x
        },
        t.handleKeyDown = function(e) {
            Lt.isEventKey(e, "Left") || Lt.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepBack()) : Lt.isEventKey(e, "Right") || Lt.isEventKey(e, "Up") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : n.prototype.handleKeyDown.call(this, e)
        },
        t.handleClick = function(e) {
            e.stopPropagation(),
            e.preventDefault()
        },
        t.vertical = function(e) {
            if (void 0 === e) return this.vertical_ || !1;
            this.vertical_ = !!e,
            this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
        },
        e
    } (je);
    je.registerComponent("Slider", Ln);
    function On(e, t) {
        return Pn(e / t * 100, 0, 100).toFixed(2) + "%"
    }
    var Dn = function(r) {
        function e(e, t) {
            var i;
            return (i = r.call(this, e, t) || this).partEls_ = [],
            i.on(e, "progress", i.update),
            i
        }
        ze(e, r);
        var t = e.prototype;
        return t.createEl = function() {
            var e = r.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress"
            }),
            t = S("span", {
                className: "vjs-control-text"
            }),
            i = S("span", {
                textContent: this.localize("Loaded")
            }),
            n = h.createTextNode(": ");
            return this.percentageEl_ = S("span", {
                className: "vjs-control-text-loaded-percentage",
                textContent: "0%"
            }),
            e.appendChild(t),
            t.appendChild(i),
            t.appendChild(n),
            t.appendChild(this.percentageEl_),
            e
        },
        t.dispose = function() {
            this.partEls_ = null,
            this.percentageEl_ = null,
            r.prototype.dispose.call(this)
        },
        t.update = function(e) {
            var h = this;
            this.requestNamedAnimationFrame("LoadProgressBar#update",
            function() {
                var e = h.player_.liveTracker,
                t = h.player_.buffered(),
                i = e && e.isLive() ? e.seekableEnd() : h.player_.duration(),
                n = h.player_.bufferedEnd(),
                r = h.partEls_,
                s = On(n, i);
                h.percent_ !== s && (h.el_.style.width = s, k(h.percentageEl_, s), h.percent_ = s);
                for (var a = 0; a < t.length; a++) {
                    var o = t.start(a),
                    u = t.end(a),
                    l = r[a];
                    l || (l = h.el_.appendChild(S()), r[a] = l),
                    l.dataset.start === o && l.dataset.end === u || (l.dataset.start = o, l.dataset.end = u, l.style.left = On(o, n), l.style.width = On(u - o, n))
                }
                for (var c = r.length; c > t.length; c--) h.el_.removeChild(r[c - 1]);
                r.length = t.length
            })
        },
        e
    } (je);
    je.registerComponent("LoadProgressBar", Dn);
    var Nn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).update = ve(ge(Fe(i), i.update), 30),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-time-tooltip"
            },
            {
                "aria-hidden": "true"
            })
        },
        t.update = function(e, t, i) {
            var n = M(this.el_),
            r = U(this.player_.el()),
            s = e.width * t;
            if (r && n) {
                var a = e.left - r.left + s,
                o = e.width - s + (r.right - e.right),
                u = n.width / 2;
                a < u ? u += u - a: o < u && (u = o),
                u < 0 ? u = 0 : u > n.width && (u = n.width),
                this.el_.style.right = "-" + u + "px",
                this.write(i)
            }
        },
        t.write = function(e) {
            k(this.el_, e)
        },
        t.updateTime = function(r, s, a, o) {
            var u = this;
            this.requestNamedAnimationFrame("TimeTooltip#updateTime",
            function() {
                var e, t = u.player_.duration();
                if (u.player_.liveTracker && u.player_.liveTracker.isLive()) {
                    var i = u.player_.liveTracker.liveWindow(),
                    n = i - s * i;
                    e = (n < 1 ? "": "-") + Sn(n, i)
                } else e = Sn(a, t);
                u.update(r, s, e),
                o && o()
            })
        },
        e
    } (je);
    je.registerComponent("TimeTooltip", Nn);
    var Rn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).update = ve(ge(Fe(i), i.update), 30),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress vjs-slider-bar"
            },
            {
                "aria-hidden": "true"
            })
        },
        t.update = function(e, t) {
            var i = this.getChild("timeTooltip");
            if (i) {
                var n = this.player_.scrubbing() ? this.player_.getCache().currentTime: this.player_.currentTime();
                i.updateTime(e, t, n)
            }
        },
        e
    } (je);
    Rn.prototype.options_ = {
        children: []
    },
    ct || Qe || Rn.prototype.options_.children.push("timeTooltip"),
    je.registerComponent("PlayProgressBar", Rn);
    var Un = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).update = ve(ge(Fe(i), i.update), 30),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-mouse-display"
            })
        },
        t.update = function(e, t) {
            var i = this,
            n = t * this.player_.duration();
            this.getChild("timeTooltip").updateTime(e, t, n,
            function() {
                i.el_.style.left = e.width * t + "px"
            })
        },
        e
    } (je);
    Un.prototype.options_ = {
        children: ["timeTooltip"]
    },
    je.registerComponent("MouseTimeDisplay", Un);
    var Mn = function(s) {
        function e(e, t) {
            var i;
            return (i = s.call(this, e, t) || this).setEventHandlers_(),
            i
        }
        ze(e, s);
        var t = e.prototype;
        return t.setEventHandlers_ = function() {
            this.update_ = ge(this, this.update),
            this.update = ve(this.update_, 30),
            this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update),
            this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update),
            this.updateInterval = null,
            this.on(this.player_, ["playing"], this.enableInterval_),
            this.on(this.player_, ["ended", "pause", "waiting"], this.disableInterval_),
            "hidden" in h && "visibilityState" in h && this.on(h, "visibilitychange", this.toggleVisibility_)
        },
        t.toggleVisibility_ = function(e) {
            h.hidden ? this.disableInterval_(e) : (this.enableInterval_(), this.update())
        },
        t.enableInterval_ = function() {
            this.updateInterval || (this.updateInterval = this.setInterval(this.update, 30))
        },
        t.disableInterval_ = function(e) {
            this.player_.liveTracker && this.player_.liveTracker.isLive() && e && "ended" !== e.type || this.updateInterval && (this.clearInterval(this.updateInterval), this.updateInterval = null)
        },
        t.createEl = function() {
            return s.prototype.createEl.call(this, "div", {
                className: "vjs-progress-holder"
            },
            {
                "aria-label": this.localize("Progress Bar")
            })
        },
        t.update = function(e) {
            var n = this,
            r = s.prototype.update.call(this);
            return this.requestNamedAnimationFrame("SeekBar#update",
            function() {
                var e = n.player_.ended() ? n.player_.duration() : n.getCurrentTime_(),
                t = n.player_.liveTracker,
                i = n.player_.duration();
                t && t.isLive() && (i = n.player_.liveTracker.liveCurrentTime()),
                n.percent_ !== r && (n.el_.setAttribute("aria-valuenow", (100 * r).toFixed(2)), n.percent_ = r),
                n.currentTime_ === e && n.duration_ === i || (n.el_.setAttribute("aria-valuetext", n.localize("progress bar timing: currentTime={1} duration={2}", [Sn(e, i), Sn(i, i)], "{1} of {2}")), n.currentTime_ = e, n.duration_ = i),
                n.bar && n.bar.update(U(n.el()), n.getProgress())
            }),
            r
        },
        t.getCurrentTime_ = function() {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime: this.player_.currentTime()
        },
        t.getPercent = function() {
            var e, t = this.getCurrentTime_(),
            i = this.player_.liveTracker;
            return i && i.isLive() ? (e = (t - i.seekableStart()) / i.liveWindow(), i.atLiveEdge() && (e = 1)) : e = t / this.player_.duration(),
            e
        },
        t.handleMouseDown = function(e) {
            W(e) && (e.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), s.prototype.handleMouseDown.call(this, e))
        },
        t.handleMouseMove = function(e) {
            if (W(e)) {
                var t, i = this.calculateDistance(e),
                n = this.player_.liveTracker;
                if (n && n.isLive()) {
                    if (.99 <= i) return void n.seekToLiveEdge();
                    var r = n.seekableStart(),
                    s = n.liveCurrentTime();
                    if (s <= (t = r + i * n.liveWindow()) && (t = s), t <= r && (t = r + .1), t === 1 / 0) return
                } else(t = i * this.player_.duration()) === this.player_.duration() && (t -= .1);
                this.player_.currentTime(t)
            }
        },
        t.enable = function() {
            s.prototype.enable.call(this);
            var e = this.getChild("mouseTimeDisplay");
            e && e.show()
        },
        t.disable = function() {
            s.prototype.disable.call(this);
            var e = this.getChild("mouseTimeDisplay");
            e && e.hide()
        },
        t.handleMouseUp = function(e) {
            s.prototype.handleMouseUp.call(this, e),
            e && e.stopPropagation(),
            this.player_.scrubbing(!1),
            this.player_.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            }),
            this.videoWasPlaying ? xt(this.player_.play()) : this.update_()
        },
        t.stepForward = function() {
            this.player_.currentTime(this.player_.currentTime() + 5)
        },
        t.stepBack = function() {
            this.player_.currentTime(this.player_.currentTime() - 5)
        },
        t.handleAction = function(e) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        },
        t.handleKeyDown = function(e) {
            if (Lt.isEventKey(e, "Space") || Lt.isEventKey(e, "Enter")) e.preventDefault(),
            e.stopPropagation(),
            this.handleAction(e);
            else if (Lt.isEventKey(e, "Home")) e.preventDefault(),
            e.stopPropagation(),
            this.player_.currentTime(0);
            else if (Lt.isEventKey(e, "End")) e.preventDefault(),
            e.stopPropagation(),
            this.player_.currentTime(this.player_.duration());
            else if (/^[0-9]$/.test(Lt(e))) {
                e.preventDefault(),
                e.stopPropagation();
                var t = 10 * (Lt.codes[Lt(e)] - Lt.codes[0]) / 100;
                this.player_.currentTime(this.player_.duration() * t)
            } else Lt.isEventKey(e, "PgDn") ? (e.preventDefault(), e.stopPropagation(), this.player_.currentTime(this.player_.currentTime() - 60)) : Lt.isEventKey(e, "PgUp") ? (e.preventDefault(), e.stopPropagation(), this.player_.currentTime(this.player_.currentTime() + 60)) : s.prototype.handleKeyDown.call(this, e)
        },
        t.dispose = function() {
            this.disableInterval_(),
            this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update),
            this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update),
            this.off(this.player_, ["playing"], this.enableInterval_),
            this.off(this.player_, ["ended", "pause", "waiting"], this.disableInterval_),
            "hidden" in h && "visibilityState" in h && this.off(h, "visibilitychange", this.toggleVisibility_),
            s.prototype.dispose.call(this)
        },
        e
    } (Ln);
    Mn.prototype.options_ = {
        children: ["loadProgressBar", "playProgressBar"],
        barName: "playProgressBar"
    },
    ct || Qe || Mn.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"),
    je.registerComponent("SeekBar", Mn);
    var Bn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).handleMouseMove = ve(ge(Fe(i), i.handleMouseMove), 30),
            i.throttledHandleMouseSeek = ve(ge(Fe(i), i.handleMouseSeek), 30),
            i.enable(),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        },
        t.handleMouseMove = function(e) {
            var t = this.getChild("seekBar");
            if (t) {
                var i = t.getChild("playProgressBar"),
                n = t.getChild("mouseTimeDisplay");
                if (i || n) {
                    var r = t.el(),
                    s = M(r),
                    a = B(r, e).x;
                    a = Pn(a, 0, 1),
                    n && n.update(s, a),
                    i && i.update(s, t.getProgress())
                }
            }
        },
        t.handleMouseSeek = function(e) {
            var t = this.getChild("seekBar");
            t && t.handleMouseMove(e)
        },
        t.enabled = function() {
            return this.enabled_
        },
        t.disable = function() {
            this.children().forEach(function(e) {
                return e.disable && e.disable()
            }),
            this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
        },
        t.enable = function() {
            this.children().forEach(function(e) {
                return e.enable && e.enable()
            }),
            this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
        },
        t.handleMouseDown = function(e) {
            var t = this.el_.ownerDocument,
            i = this.getChild("seekBar");
            i && i.handleMouseDown(e),
            this.on(t, "mousemove", this.throttledHandleMouseSeek),
            this.on(t, "touchmove", this.throttledHandleMouseSeek),
            this.on(t, "mouseup", this.handleMouseUp),
            this.on(t, "touchend", this.handleMouseUp)
        },
        t.handleMouseUp = function(e) {
            var t = this.el_.ownerDocument,
            i = this.getChild("seekBar");
            i && i.handleMouseUp(e),
            this.off(t, "mousemove", this.throttledHandleMouseSeek),
            this.off(t, "touchmove", this.throttledHandleMouseSeek),
            this.off(t, "mouseup", this.handleMouseUp),
            this.off(t, "touchend", this.handleMouseUp)
        },
        e
    } (je);
    Bn.prototype.options_ = {
        children: ["seekBar"]
    },
    je.registerComponent("ProgressControl", Bn);
    var jn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, ["enterpictureinpicture", "leavepictureinpicture"], i.handlePictureInPictureChange),
            i.on(e, ["disablepictureinpicturechanged", "loadedmetadata"], i.handlePictureInPictureEnabledChange),
            i.disable(),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-picture-in-picture-control " + n.prototype.buildCSSClass.call(this)
        },
        t.handlePictureInPictureEnabledChange = function() {
            h.pictureInPictureEnabled && !1 === this.player_.disablePictureInPicture() ? this.enable() : this.disable()
        },
        t.handlePictureInPictureChange = function(e) {
            this.player_.isInPictureInPicture() ? this.controlText("Exit Picture-in-Picture") : this.controlText("Picture-in-Picture"),
            this.handlePictureInPictureEnabledChange()
        },
        t.handleClick = function(e) {
            this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture()
        },
        e
    } (gn);
    jn.prototype.controlText_ = "Picture-in-Picture",
    je.registerComponent("PictureInPictureToggle", jn);
    var Fn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, "fullscreenchange", i.handleFullscreenChange),
            !1 === h[e.fsApi_.fullscreenEnabled] && i.disable(),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-fullscreen-control " + n.prototype.buildCSSClass.call(this)
        },
        t.handleFullscreenChange = function(e) {
            this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
        },
        t.handleClick = function(e) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
        },
        e
    } (gn);
    Fn.prototype.controlText_ = "Fullscreen",
    je.registerComponent("FullscreenToggle", Fn);
    var Hn = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return ze(t, e),
        t.prototype.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        },
        t
    } (je);
    je.registerComponent("VolumeLevel", Hn);
    var Vn = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on("slideractive", i.updateLastVolume_),
            i.on(e, "volumechange", i.updateARIAAttributes),
            e.ready(function() {
                return i.updateARIAAttributes()
            }),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            return n.prototype.createEl.call(this, "div", {
                className: "vjs-volume-bar vjs-slider-bar"
            },
            {
                "aria-label": this.localize("Volume Level"),
                "aria-live": "polite"
            })
        },
        t.handleMouseDown = function(e) {
            W(e) && n.prototype.handleMouseDown.call(this, e)
        },
        t.handleMouseMove = function(e) {
            W(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
        },
        t.checkMuted = function() {
            this.player_.muted() && this.player_.muted(!1)
        },
        t.getPercent = function() {
            return this.player_.muted() ? 0 : this.player_.volume()
        },
        t.stepForward = function() {
            this.checkMuted(),
            this.player_.volume(this.player_.volume() + .1)
        },
        t.stepBack = function() {
            this.checkMuted(),
            this.player_.volume(this.player_.volume() - .1)
        },
        t.updateARIAAttributes = function(e) {
            var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
            this.el_.setAttribute("aria-valuenow", t),
            this.el_.setAttribute("aria-valuetext", t + "%")
        },
        t.volumeAsPercentage_ = function() {
            return Math.round(100 * this.player_.volume())
        },
        t.updateLastVolume_ = function() {
            var e = this,
            t = this.player_.volume();
            this.one("sliderinactive",
            function() {
                0 === e.player_.volume() && e.player_.lastVolume_(t)
            })
        },
        e
    } (Ln);
    Vn.prototype.options_ = {
        children: ["volumeLevel"],
        barName: "volumeLevel"
    },
    Vn.prototype.playerEvent = "volumechange",
    je.registerComponent("VolumeBar", Vn);
    var qn = function(n) {
        function e(e, t) {
            var i;
            return void 0 === t && (t = {}),
            t.vertical = t.vertical || !1,
            "undefined" != typeof t.volumeBar && !u(t.volumeBar) || (t.volumeBar = t.volumeBar || {},
            t.volumeBar.vertical = t.vertical),
            i = n.call(this, e, t) || this,
            function(e, t) {
                t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"),
                e.on(t, "loadstart",
                function() {
                    t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
                })
            } (Fe(i), e),
            i.throttledHandleMouseMove = ve(ge(Fe(i), i.handleMouseMove), 30),
            i.on("mousedown", i.handleMouseDown),
            i.on("touchstart", i.handleMouseDown),
            i.on(i.volumeBar, ["focus", "slideractive"],
            function() {
                i.volumeBar.addClass("vjs-slider-active"),
                i.addClass("vjs-slider-active"),
                i.trigger("slideractive")
            }),
            i.on(i.volumeBar, ["blur", "sliderinactive"],
            function() {
                i.volumeBar.removeClass("vjs-slider-active"),
                i.removeClass("vjs-slider-active"),
                i.trigger("sliderinactive")
            }),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            var e = "vjs-volume-horizontal";
            return this.options_.vertical && (e = "vjs-volume-vertical"),
            n.prototype.createEl.call(this, "div", {
                className: "vjs-volume-control vjs-control " + e
            })
        },
        t.handleMouseDown = function(e) {
            var t = this.el_.ownerDocument;
            this.on(t, "mousemove", this.throttledHandleMouseMove),
            this.on(t, "touchmove", this.throttledHandleMouseMove),
            this.on(t, "mouseup", this.handleMouseUp),
            this.on(t, "touchend", this.handleMouseUp)
        },
        t.handleMouseUp = function(e) {
            var t = this.el_.ownerDocument;
            this.off(t, "mousemove", this.throttledHandleMouseMove),
            this.off(t, "touchmove", this.throttledHandleMouseMove),
            this.off(t, "mouseup", this.handleMouseUp),
            this.off(t, "touchend", this.handleMouseUp)
        },
        t.handleMouseMove = function(e) {
            this.volumeBar.handleMouseMove(e)
        },
        e
    } (je);
    qn.prototype.options_ = {
        children: ["volumeBar"]
    },
    je.registerComponent("VolumeControl", qn);
    var Wn = function(n) {
        function e(e, t) {
            var i;
            return i = n.call(this, e, t) || this,
            function(e, t) {
                t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"),
                e.on(t, "loadstart",
                function() {
                    t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
                })
            } (Fe(i), e),
            i.on(e, ["loadstart", "volumechange"], i.update),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-mute-control " + n.prototype.buildCSSClass.call(this)
        },
        t.handleClick = function(e) {
            var t = this.player_.volume(),
            i = this.player_.lastVolume_();
            if (0 === t) {
                var n = i < .1 ? .1 : i;
                this.player_.volume(n),
                this.player_.muted(!1)
            } else this.player_.muted(!this.player_.muted())
        },
        t.update = function(e) {
            this.updateIcon_(),
            this.updateControlText_()
        },
        t.updateIcon_ = function() {
            var e = this.player_.volume(),
            t = 3;
            ct && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted),
            0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2);
            for (var i = 0; i < 4; i++) x(this.el_, "vjs-vol-" + i);
            w(this.el_, "vjs-vol-" + t)
        },
        t.updateControlText_ = function() {
            var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute": "Mute";
            this.controlText() !== e && this.controlText(e)
        },
        e
    } (gn);
    Wn.prototype.controlText_ = "Mute",
    je.registerComponent("MuteToggle", Wn);
    var zn = function(n) {
        function e(e, t) {
            var i;
            return void 0 === t && (t = {}),
            "undefined" != typeof t.inline ? t.inline = t.inline: t.inline = !0,
            "undefined" != typeof t.volumeControl && !u(t.volumeControl) || (t.volumeControl = t.volumeControl || {},
            t.volumeControl.vertical = !t.inline),
            (i = n.call(this, e, t) || this).on(e, ["loadstart"], i.volumePanelState_),
            i.on(i.muteToggle, "keyup", i.handleKeyPress),
            i.on(i.volumeControl, "keyup", i.handleVolumeControlKeyUp),
            i.on("keydown", i.handleKeyPress),
            i.on("mouseover", i.handleMouseOver),
            i.on("mouseout", i.handleMouseOut),
            i.on(i.volumeControl, ["slideractive"], i.sliderActive_),
            i.on(i.volumeControl, ["sliderinactive"], i.sliderInactive_),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.sliderActive_ = function() {
            this.addClass("vjs-slider-active")
        },
        t.sliderInactive_ = function() {
            this.removeClass("vjs-slider-active")
        },
        t.volumePanelState_ = function() {
            this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"),
            this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
        },
        t.createEl = function() {
            var e = "vjs-volume-panel-horizontal";
            return this.options_.inline || (e = "vjs-volume-panel-vertical"),
            n.prototype.createEl.call(this, "div", {
                className: "vjs-volume-panel vjs-control " + e
            })
        },
        t.dispose = function() {
            this.handleMouseOut(),
            n.prototype.dispose.call(this)
        },
        t.handleVolumeControlKeyUp = function(e) {
            Lt.isEventKey(e, "Esc") && this.muteToggle.focus()
        },
        t.handleMouseOver = function(e) {
            this.addClass("vjs-hover"),
            he(h, "keyup", ge(this, this.handleKeyPress))
        },
        t.handleMouseOut = function(e) {
            this.removeClass("vjs-hover"),
            de(h, "keyup", ge(this, this.handleKeyPress))
        },
        t.handleKeyPress = function(e) {
            Lt.isEventKey(e, "Esc") && this.handleMouseOut()
        },
        e
    } (je);
    zn.prototype.options_ = {
        children: ["muteToggle", "volumeControl"]
    },
    je.registerComponent("VolumePanel", zn);
    var Gn = function(n) {
        function e(e, t) {
            var i;
            return i = n.call(this, e, t) || this,
            t && (i.menuButton_ = t.menuButton),
            i.focusedChild_ = -1,
            i.on("keydown", i.handleKeyDown),
            i.boundHandleBlur_ = ge(Fe(i), i.handleBlur),
            i.boundHandleTapClick_ = ge(Fe(i), i.handleTapClick),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.addEventListenerForItem = function(e) {
            e instanceof je && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_))
        },
        t.removeEventListenerForItem = function(e) {
            e instanceof je && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_))
        },
        t.removeChild = function(e) {
            "string" == typeof e && (e = this.getChild(e)),
            this.removeEventListenerForItem(e),
            n.prototype.removeChild.call(this, e)
        },
        t.addItem = function(e) {
            var t = this.addChild(e);
            t && this.addEventListenerForItem(t)
        },
        t.createEl = function() {
            var e = this.options_.contentElType || "ul";
            this.contentEl_ = S(e, {
                className: "vjs-menu-content"
            }),
            this.contentEl_.setAttribute("role", "menu");
            var t = n.prototype.createEl.call(this, "div", {
                append: this.contentEl_,
                className: "vjs-menu"
            });
            return t.appendChild(this.contentEl_),
            he(t, "click",
            function(e) {
                e.preventDefault(),
                e.stopImmediatePropagation()
            }),
            t
        },
        t.dispose = function() {
            this.contentEl_ = null,
            this.boundHandleBlur_ = null,
            this.boundHandleTapClick_ = null,
            n.prototype.dispose.call(this)
        },
        t.handleBlur = function(e) {
            var t = e.relatedTarget || h.activeElement;
            if (!this.children().some(function(e) {
                return e.el() === t
            })) {
                var i = this.menuButton_;
                i && i.buttonPressed_ && t !== i.el().firstChild && i.unpressButton()
            }
        },
        t.handleTapClick = function(t) {
            if (this.menuButton_) {
                this.menuButton_.unpressButton();
                var e = this.children();
                if (!Array.isArray(e)) return;
                var i = e.filter(function(e) {
                    return e.el() === t.target
                })[0];
                if (!i) return;
                "CaptionSettingsMenuItem" !== i.name() && this.menuButton_.focus()
            }
        },
        t.handleKeyDown = function(e) {
            Lt.isEventKey(e, "Left") || Lt.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : (Lt.isEventKey(e, "Right") || Lt.isEventKey(e, "Up")) && (e.preventDefault(), e.stopPropagation(), this.stepBack())
        },
        t.stepForward = function() {
            var e = 0;
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1),
            this.focus(e)
        },
        t.stepBack = function() {
            var e = 0;
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1),
            this.focus(e)
        },
        t.focus = function(e) {
            void 0 === e && (e = 0);
            var t = this.children().slice();
            t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(),
            0 < t.length && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), t[this.focusedChild_ = e].el_.focus())
        },
        e
    } (je);
    je.registerComponent("Menu", Gn);
    var Xn = function(r) {
        function e(e, t) {
            var i;
            void 0 === t && (t = {}),
            (i = r.call(this, e, t) || this).menuButton_ = new gn(e, t),
            i.menuButton_.controlText(i.controlText_),
            i.menuButton_.el_.setAttribute("aria-haspopup", "true");
            var n = gn.prototype.buildCSSClass();
            return i.menuButton_.el_.className = i.buildCSSClass() + " " + n,
            i.menuButton_.removeClass("vjs-control"),
            i.addChild(i.menuButton_),
            i.update(),
            i.enabled_ = !0,
            i.on(i.menuButton_, "tap", i.handleClick),
            i.on(i.menuButton_, "click", i.handleClick),
            i.on(i.menuButton_, "keydown", i.handleKeyDown),
            i.on(i.menuButton_, "mouseenter",
            function() {
                i.addClass("vjs-hover"),
                i.menu.show(),
                he(h, "keyup", ge(Fe(i), i.handleMenuKeyUp))
            }),
            i.on("mouseleave", i.handleMouseLeave),
            i.on("keydown", i.handleSubmenuKeyDown),
            i
        }
        ze(e, r);
        var t = e.prototype;
        return t.update = function() {
            var e = this.createMenu();
            this.menu && (this.menu.dispose(), this.removeChild(this.menu)),
            this.menu = e,
            this.addChild(e),
            this.buttonPressed_ = !1,
            this.menuButton_.el_.setAttribute("aria-expanded", "false"),
            this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
        },
        t.createMenu = function() {
            var e = new Gn(this.player_, {
                menuButton: this
            });
            if (this.hideThreshold_ = 0, this.options_.title) {
                var t = S("li", {
                    className: "vjs-menu-title",
                    innerHTML: De(this.options_.title),
                    tabIndex: -1
                });
                this.hideThreshold_ += 1;
                var i = new je(this.player_, {
                    el: t
                });
                e.addItem(i)
            }
            if (this.items = this.createItems(), this.items) for (var n = 0; n < this.items.length; n++) e.addItem(this.items[n]);
            return e
        },
        t.createItems = function() {},
        t.createEl = function() {
            return r.prototype.createEl.call(this, "div", {
                className: this.buildWrapperCSSClass()
            },
            {})
        },
        t.buildWrapperCSSClass = function() {
            var e = "vjs-menu-button";
            return ! 0 === this.options_.inline ? e += "-inline": e += "-popup",
            "vjs-menu-button " + e + " " + gn.prototype.buildCSSClass() + " " + r.prototype.buildCSSClass.call(this)
        },
        t.buildCSSClass = function() {
            var e = "vjs-menu-button";
            return ! 0 === this.options_.inline ? e += "-inline": e += "-popup",
            "vjs-menu-button " + e + " " + r.prototype.buildCSSClass.call(this)
        },
        t.controlText = function(e, t) {
            return void 0 === t && (t = this.menuButton_.el()),
            this.menuButton_.controlText(e, t)
        },
        t.dispose = function() {
            this.handleMouseLeave(),
            r.prototype.dispose.call(this)
        },
        t.handleClick = function(e) {
            this.buttonPressed_ ? this.unpressButton() : this.pressButton()
        },
        t.handleMouseLeave = function(e) {
            this.removeClass("vjs-hover"),
            de(h, "keyup", ge(this, this.handleMenuKeyUp))
        },
        t.focus = function() {
            this.menuButton_.focus()
        },
        t.blur = function() {
            this.menuButton_.blur()
        },
        t.handleKeyDown = function(e) {
            Lt.isEventKey(e, "Esc") || Lt.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(), Lt.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) : (Lt.isEventKey(e, "Up") || Lt.isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(), this.pressButton()))
        },
        t.handleMenuKeyUp = function(e) { (Lt.isEventKey(e, "Esc") || Lt.isEventKey(e, "Tab")) && this.removeClass("vjs-hover")
        },
        t.handleSubmenuKeyPress = function(e) {
            this.handleSubmenuKeyDown(e)
        },
        t.handleSubmenuKeyDown = function(e) { (Lt.isEventKey(e, "Esc") || Lt.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), Lt.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()))
        },
        t.pressButton = function() {
            if (this.enabled_) {
                if (this.buttonPressed_ = !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), ct && b()) return;
                this.menu.focus()
            }
        },
        t.unpressButton = function() {
            this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
        },
        t.disable = function() {
            this.unpressButton(),
            this.enabled_ = !1,
            this.addClass("vjs-disabled"),
            this.menuButton_.disable()
        },
        t.enable = function() {
            this.enabled_ = !0,
            this.removeClass("vjs-disabled"),
            this.menuButton_.enable()
        },
        e
    } (je);
    je.registerComponent("MenuButton", Xn);
    var Kn = function(s) {
        function e(e, t) {
            var i, n = t.tracks;
            if ((i = s.call(this, e, t) || this).items.length <= 1 && i.hide(), !n) return Fe(i);
            var r = ge(Fe(i), i.update);
            return n.addEventListener("removetrack", r),
            n.addEventListener("addtrack", r),
            i.player_.on("ready", r),
            i.player_.on("dispose",
            function() {
                n.removeEventListener("removetrack", r),
                n.removeEventListener("addtrack", r)
            }),
            i
        }
        return ze(e, s),
        e
    } (Xn);
    je.registerComponent("TrackButton", Kn);
    var Yn = ["Tab", "Esc", "Up", "Down", "Right", "Left"],
    $n = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).selectable = t.selectable,
            i.isSelected_ = t.selected || !1,
            i.multiSelectable = t.multiSelectable,
            i.selected(i.isSelected_),
            i.selectable ? i.multiSelectable ? i.el_.setAttribute("role", "menuitemcheckbox") : i.el_.setAttribute("role", "menuitemradio") : i.el_.setAttribute("role", "menuitem"),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function(e, t, i) {
            return this.nonIconControl = !0,
            n.prototype.createEl.call(this, "li", m({
                className: "vjs-menu-item",
                innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                tabIndex: -1
            },
            t), i)
        },
        t.handleKeyDown = function(t) {
            Yn.some(function(e) {
                return Lt.isEventKey(t, e)
            }) || n.prototype.handleKeyDown.call(this, t)
        },
        t.handleClick = function(e) {
            this.selected(!0)
        },
        t.selected = function(e) {
            this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
        },
        e
    } (un);
    je.registerComponent("MenuItem", $n);
    var Qn = function(u) {
        function e(e, t) {
            var n, i = t.track,
            r = e.textTracks();
            t.label = i.label || i.language || "Unknown",
            t.selected = "showing" === i.mode,
            (n = u.call(this, e, t) || this).track = i,
            n.kinds = (t.kinds || [t.kind || n.track.kind]).filter(Boolean);
            function s() {
                for (var e = arguments.length,
                t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                n.handleTracksChange.apply(Fe(n), t)
            }
            function a() {
                for (var e = arguments.length,
                t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                n.handleSelectedLanguageChange.apply(Fe(n), t)
            }
            var o;
            e.on(["loadstart", "texttrackchange"], s),
            r.addEventListener("change", s),
            r.addEventListener("selectedlanguagechange", a),
            n.on("dispose",
            function() {
                e.off(["loadstart", "texttrackchange"], s),
                r.removeEventListener("change", s),
                r.removeEventListener("selectedlanguagechange", a)
            }),
            void 0 === r.onchange && n.on(["tap", "click"],
            function() {
                if ("object" != typeof y.Event) try {
                    o = new y.Event("change")
                } catch(e) {}
                o || (o = h.createEvent("Event")).initEvent("change", !0, !0),
                r.dispatchEvent(o)
            });
            return n.handleTracksChange(),
            n
        }
        ze(e, u);
        var t = e.prototype;
        return t.handleClick = function(e) {
            var t = this.track,
            i = this.player_.textTracks();
            if (u.prototype.handleClick.call(this, e), i) for (var n = 0; n < i.length; n++) {
                var r = i[n]; - 1 !== this.kinds.indexOf(r.kind) && (r === t ? "showing" !== r.mode && (r.mode = "showing") : "disabled" !== r.mode && (r.mode = "disabled"))
            }
        },
        t.handleTracksChange = function(e) {
            var t = "showing" === this.track.mode;
            t !== this.isSelected_ && this.selected(t)
        },
        t.handleSelectedLanguageChange = function(e) {
            if ("showing" === this.track.mode) {
                var t = this.player_.cache_.selectedLanguage;
                if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
                this.player_.cache_.selectedLanguage = {
                    enabled: !0,
                    language: this.track.language,
                    kind: this.track.kind
                }
            }
        },
        t.dispose = function() {
            this.track = null,
            u.prototype.dispose.call(this)
        },
        e
    } ($n);
    je.registerComponent("TextTrackMenuItem", Qn);
    var Jn = function(i) {
        function e(e, t) {
            return t.track = {
                player: e,
                kind: t.kind,
                kinds: t.kinds,
            default:
                !1,
                mode: "disabled"
            },
            t.kinds || (t.kinds = [t.kind]),
            t.label ? t.track.label = t.label: t.track.label = t.kinds.join(" and ") + " off",
            t.selectable = !0,
            t.multiSelectable = !1,
            i.call(this, e, t) || this
        }
        ze(e, i);
        var t = e.prototype;
        return t.handleTracksChange = function(e) {
            for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                var s = t[n];
                if ( - 1 < this.options_.kinds.indexOf(s.kind) && "showing" === s.mode) {
                    i = !1;
                    break
                }
            }
            i !== this.isSelected_ && this.selected(i)
        },
        t.handleSelectedLanguageChange = function(e) {
            for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
                var s = t[n];
                if ( - 1 < ["captions", "descriptions", "subtitles"].indexOf(s.kind) && "showing" === s.mode) {
                    i = !1;
                    break
                }
            }
            i && (this.player_.cache_.selectedLanguage = {
                enabled: !1
            })
        },
        e
    } (Qn);
    je.registerComponent("OffTextTrackMenuItem", Jn);
    var Zn = function(i) {
        function e(e, t) {
            return void 0 === t && (t = {}),
            t.tracks = e.textTracks(),
            i.call(this, e, t) || this
        }
        return ze(e, i),
        e.prototype.createItems = function(e, t) {
            var i;
            void 0 === e && (e = []),
            void 0 === t && (t = Qn),
            this.label_ && (i = this.label_ + " off"),
            e.push(new Jn(this.player_, {
                kinds: this.kinds_,
                kind: this.kind_,
                label: i
            })),
            this.hideThreshold_ += 1;
            var n = this.player_.textTracks();
            Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
            for (var r = 0; r < n.length; r++) {
                var s = n[r];
                if ( - 1 < this.kinds_.indexOf(s.kind)) {
                    var a = new t(this.player_, {
                        track: s,
                        kinds: this.kinds_,
                        kind: this.kind_,
                        selectable: !0,
                        multiSelectable: !1
                    });
                    a.addClass("vjs-" + s.kind + "-menu-item"),
                    e.push(a)
                }
            }
            return e
        },
        e
    } (Kn);
    je.registerComponent("TextTrackButton", Zn);
    var er = function(a) {
        function e(e, t) {
            var i, n = t.track,
            r = t.cue,
            s = e.currentTime();
            return t.selectable = !0,
            t.multiSelectable = !1,
            t.label = r.text,
            t.selected = r.startTime <= s && s < r.endTime,
            (i = a.call(this, e, t) || this).track = n,
            i.cue = r,
            n.addEventListener("cuechange", ge(Fe(i), i.update)),
            i
        }
        ze(e, a);
        var t = e.prototype;
        return t.handleClick = function(e) {
            a.prototype.handleClick.call(this),
            this.player_.currentTime(this.cue.startTime),
            this.update(this.cue.startTime)
        },
        t.update = function(e) {
            var t = this.cue,
            i = this.player_.currentTime();
            this.selected(t.startTime <= i && i < t.endTime)
        },
        e
    } ($n);
    je.registerComponent("ChaptersTrackMenuItem", er);
    var tr = function(n) {
        function e(e, t, i) {
            return n.call(this, e, t, i) || this
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-chapters-button " + n.prototype.buildCSSClass.call(this)
        },
        t.buildWrapperCSSClass = function() {
            return "vjs-chapters-button " + n.prototype.buildWrapperCSSClass.call(this)
        },
        t.update = function(e) {
            this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()),
            n.prototype.update.call(this)
        },
        t.setTrack = function(e) {
            if (this.track_ !== e) {
                if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                    var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    t && t.removeEventListener("load", this.updateHandler_),
                    this.track_ = null
                }
                if (this.track_ = e, this.track_) {
                    this.track_.mode = "hidden";
                    var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    i && i.addEventListener("load", this.updateHandler_)
                }
            }
        },
        t.findChaptersTrack = function() {
            for (var e = this.player_.textTracks() || [], t = e.length - 1; 0 <= t; t--) {
                var i = e[t];
                if (i.kind === this.kind_) return i
            }
        },
        t.getMenuCaption = function() {
            return this.track_ && this.track_.label ? this.track_.label: this.localize(De(this.kind_))
        },
        t.createMenu = function() {
            return this.options_.title = this.getMenuCaption(),
            n.prototype.createMenu.call(this)
        },
        t.createItems = function() {
            var e = [];
            if (!this.track_) return e;
            var t = this.track_.cues;
            if (!t) return e;
            for (var i = 0,
            n = t.length; i < n; i++) {
                var r = t[i],
                s = new er(this.player_, {
                    track: this.track_,
                    cue: r
                });
                e.push(s)
            }
            return e
        },
        e
    } (Zn);
    tr.prototype.kind_ = "chapters",
    tr.prototype.controlText_ = "Chapters",
    je.registerComponent("ChaptersButton", tr);
    var ir = function(a) {
        function e(e, t, i) {
            var n;
            n = a.call(this, e, t, i) || this;
            var r = e.textTracks(),
            s = ge(Fe(n), n.handleTracksChange);
            return r.addEventListener("change", s),
            n.on("dispose",
            function() {
                r.removeEventListener("change", s)
            }),
            n
        }
        ze(e, a);
        var t = e.prototype;
        return t.handleTracksChange = function(e) {
            for (var t = this.player().textTracks(), i = !1, n = 0, r = t.length; n < r; n++) {
                var s = t[n];
                if (s.kind !== this.kind_ && "showing" === s.mode) {
                    i = !0;
                    break
                }
            }
            i ? this.disable() : this.enable()
        },
        t.buildCSSClass = function() {
            return "vjs-descriptions-button " + a.prototype.buildCSSClass.call(this)
        },
        t.buildWrapperCSSClass = function() {
            return "vjs-descriptions-button " + a.prototype.buildWrapperCSSClass.call(this)
        },
        e
    } (Zn);
    ir.prototype.kind_ = "descriptions",
    ir.prototype.controlText_ = "Descriptions",
    je.registerComponent("DescriptionsButton", ir);
    var nr = function(n) {
        function e(e, t, i) {
            return n.call(this, e, t, i) || this
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-subtitles-button " + n.prototype.buildCSSClass.call(this)
        },
        t.buildWrapperCSSClass = function() {
            return "vjs-subtitles-button " + n.prototype.buildWrapperCSSClass.call(this)
        },
        e
    } (Zn);
    nr.prototype.kind_ = "subtitles",
    nr.prototype.controlText_ = "Subtitles",
    je.registerComponent("SubtitlesButton", nr);
    var rr = function(n) {
        function e(e, t) {
            var i;
            return t.track = {
                player: e,
                kind: t.kind,
                label: t.kind + " settings",
                selectable: !1,
            default:
                !1,
                mode: "disabled"
            },
            t.selectable = !1,
            t.name = "CaptionSettingsMenuItem",
            (i = n.call(this, e, t) || this).addClass("vjs-texttrack-settings"),
            i.controlText(", opens " + t.kind + " settings dialog"),
            i
        }
        return ze(e, n),
        e.prototype.handleClick = function(e) {
            this.player().getChild("textTrackSettings").open()
        },
        e
    } (Qn);
    je.registerComponent("CaptionSettingsMenuItem", rr);
    var sr = function(n) {
        function e(e, t, i) {
            return n.call(this, e, t, i) || this
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-captions-button " + n.prototype.buildCSSClass.call(this)
        },
        t.buildWrapperCSSClass = function() {
            return "vjs-captions-button " + n.prototype.buildWrapperCSSClass.call(this)
        },
        t.createItems = function() {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new rr(this.player_, {
                kind: this.kind_
            })), this.hideThreshold_ += 1),
            n.prototype.createItems.call(this, e)
        },
        e
    } (Zn);
    sr.prototype.kind_ = "captions",
    sr.prototype.controlText_ = "Captions",
    je.registerComponent("CaptionsButton", sr);
    var ar = function(r) {
        function e() {
            return r.apply(this, arguments) || this
        }
        return ze(e, r),
        e.prototype.createEl = function(e, t, i) {
            var n = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "captions" === this.options_.track.kind && (n += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "),
            n += "</span>",
            r.prototype.createEl.call(this, e, m({
                innerHTML: n
            },
            t), i)
        },
        e
    } (Qn);
    je.registerComponent("SubsCapsMenuItem", ar);
    var or = function(n) {
        function e(e, t) {
            var i;
            return void 0 === t && (t = {}),
            (i = n.call(this, e, t) || this).label_ = "subtitles",
            -1 < ["en", "en-us", "en-ca", "fr-ca"].indexOf(i.player_.language_) && (i.label_ = "captions"),
            i.menuButton_.controlText(De(i.label_)),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-subs-caps-button " + n.prototype.buildCSSClass.call(this)
        },
        t.buildWrapperCSSClass = function() {
            return "vjs-subs-caps-button " + n.prototype.buildWrapperCSSClass.call(this)
        },
        t.createItems = function() {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new rr(this.player_, {
                kind: this.label_
            })), this.hideThreshold_ += 1),
            e = n.prototype.createItems.call(this, e, ar)
        },
        e
    } (Zn);
    or.prototype.kinds_ = ["captions", "subtitles"],
    or.prototype.controlText_ = "Subtitles",
    je.registerComponent("SubsCapsButton", or);
    var ur = function(a) {
        function e(e, t) {
            var n, i = t.track,
            r = e.audioTracks();
            t.label = i.label || i.language || "Unknown",
            t.selected = i.enabled,
            (n = a.call(this, e, t) || this).track = i,
            n.addClass("vjs-" + i.kind + "-menu-item");
            function s() {
                for (var e = arguments.length,
                t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                n.handleTracksChange.apply(Fe(n), t)
            }
            return r.addEventListener("change", s),
            n.on("dispose",
            function() {
                r.removeEventListener("change", s)
            }),
            n
        }
        ze(e, a);
        var t = e.prototype;
        return t.createEl = function(e, t, i) {
            var n = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "main-desc" === this.options_.track.kind && (n += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "),
            n += "</span>",
            a.prototype.createEl.call(this, e, m({
                innerHTML: n
            },
            t), i)
        },
        t.handleClick = function(e) {
            var t = this.player_.audioTracks();
            a.prototype.handleClick.call(this, e);
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enabled = n === this.track
            }
        },
        t.handleTracksChange = function(e) {
            this.selected(this.track.enabled)
        },
        e
    } ($n);
    je.registerComponent("AudioTrackMenuItem", ur);
    var lr = function(i) {
        function e(e, t) {
            return void 0 === t && (t = {}),
            t.tracks = e.audioTracks(),
            i.call(this, e, t) || this
        }
        ze(e, i);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-audio-button " + i.prototype.buildCSSClass.call(this)
        },
        t.buildWrapperCSSClass = function() {
            return "vjs-audio-button " + i.prototype.buildWrapperCSSClass.call(this)
        },
        t.createItems = function(e) {
            void 0 === e && (e = []),
            this.hideThreshold_ = 1;
            for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
                var n = t[i];
                e.push(new ur(this.player_, {
                    track: n,
                    selectable: !0,
                    multiSelectable: !1
                }))
            }
            return e
        },
        e
    } (Kn);
    lr.prototype.controlText_ = "Audio Track",
    je.registerComponent("AudioTrackButton", lr);
    var cr = function(s) {
        function e(e, t) {
            var i, n = t.rate,
            r = parseFloat(n, 10);
            return t.label = n,
            t.selected = 1 === r,
            t.selectable = !0,
            t.multiSelectable = !1,
            (i = s.call(this, e, t) || this).label = n,
            i.rate = r,
            i.on(e, "ratechange", i.update),
            i
        }
        ze(e, s);
        var t = e.prototype;
        return t.handleClick = function(e) {
            s.prototype.handleClick.call(this),
            this.player().playbackRate(this.rate)
        },
        t.update = function(e) {
            this.selected(this.player().playbackRate() === this.rate)
        },
        e
    } ($n);
    cr.prototype.contentElType = "button",
    je.registerComponent("PlaybackRateMenuItem", cr);
    var hr = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).updateVisibility(),
            i.updateLabel(),
            i.on(e, "loadstart", i.updateVisibility),
            i.on(e, "ratechange", i.updateLabel),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.createEl = function() {
            var e = n.prototype.createEl.call(this);
            return this.labelEl_ = S("div", {
                className: "vjs-playback-rate-value",
                innerHTML: "1x"
            }),
            e.appendChild(this.labelEl_),
            e
        },
        t.dispose = function() {
            this.labelEl_ = null,
            n.prototype.dispose.call(this)
        },
        t.buildCSSClass = function() {
            return "vjs-playback-rate " + n.prototype.buildCSSClass.call(this)
        },
        t.buildWrapperCSSClass = function() {
            return "vjs-playback-rate " + n.prototype.buildWrapperCSSClass.call(this)
        },
        t.createMenu = function() {
            var e = new Gn(this.player()),
            t = this.playbackRates();
            if (t) for (var i = t.length - 1; 0 <= i; i--) e.addChild(new cr(this.player(), {
                rate: t[i] + "x"
            }));
            return e
        },
        t.updateARIAAttributes = function() {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
        },
        t.handleClick = function(e) {
            for (var t = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++) if (i[r] > t) {
                n = i[r];
                break
            }
            this.player().playbackRate(n)
        },
        t.playbackRates = function() {
            return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
        },
        t.playbackRateSupported = function() {
            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && 0 < this.playbackRates().length
        },
        t.updateVisibility = function(e) {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        },
        t.updateLabel = function(e) {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
        },
        e
    } (Xn);
    hr.prototype.controlText_ = "Playback Rate",
    je.registerComponent("PlaybackRateMenuButton", hr);
    var dr = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        ze(t, e);
        var i = t.prototype;
        return i.buildCSSClass = function() {
            return "vjs-spacer " + e.prototype.buildCSSClass.call(this)
        },
        i.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass()
            })
        },
        t
    } (je);
    je.registerComponent("Spacer", dr);
    var pr = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        ze(e, t);
        var i = e.prototype;
        return i.buildCSSClass = function() {
            return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
        },
        i.createEl = function() {
            var e = t.prototype.createEl.call(this, {
                className: this.buildCSSClass()
            });
            return e.innerHTML = " ",
            e
        },
        e
    } (dr);
    je.registerComponent("CustomControlSpacer", pr);
    var fr = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return ze(t, e),
        t.prototype.createEl = function() {
            return e.prototype.createEl.call(this, "div", {
                className: "vjs-control-bar",
                dir: "ltr"
            })
        },
        t
    } (je);
    fr.prototype.options_ = {
        children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
    },
    "exitPictureInPicture" in h && fr.prototype.options_.children.splice(fr.prototype.options_.children.length - 1, 0, "pictureInPictureToggle"),
    je.registerComponent("ControlBar", fr);
    var mr = function(n) {
        function e(e, t) {
            var i;
            return (i = n.call(this, e, t) || this).on(e, "error", i.open),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.buildCSSClass = function() {
            return "vjs-error-display " + n.prototype.buildCSSClass.call(this)
        },
        t.content = function() {
            var e = this.player().error();
            return e ? this.localize(e.message) : ""
        },
        e
    } (Dt);
    mr.prototype.options_ = r({},
    Dt.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0
    }),
    je.registerComponent("ErrorDisplay", mr);
    var gr = "vjs-text-track-settings",
    vr = ["#000", "Black"],
    yr = ["#00F", "Blue"],
    _r = ["#0FF", "Cyan"],
    br = ["#0F0", "Green"],
    Tr = ["#F0F", "Magenta"],
    Sr = ["#F00", "Red"],
    kr = ["#FFF", "White"],
    Cr = ["#FF0", "Yellow"],
    Er = ["1", "Opaque"],
    wr = ["0.5", "Semi-Transparent"],
    xr = ["0", "Transparent"],
    Ar = {
        backgroundColor: {
            selector: ".vjs-bg-color > select",
            id: "captions-background-color-%s",
            label: "Color",
            options: [vr, kr, Sr, br, yr, Cr, Tr, _r]
        },
        backgroundOpacity: {
            selector: ".vjs-bg-opacity > select",
            id: "captions-background-opacity-%s",
            label: "Transparency",
            options: [Er, wr, xr]
        },
        color: {
            selector: ".vjs-fg-color > select",
            id: "captions-foreground-color-%s",
            label: "Color",
            options: [kr, vr, Sr, br, yr, Cr, Tr, _r]
        },
        edgeStyle: {
            selector: ".vjs-edge-style > select",
            id: "%s",
            label: "Text Edge Style",
            options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
        },
        fontFamily: {
            selector: ".vjs-font-family > select",
            id: "captions-font-family-%s",
            label: "Font Family",
            options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
        },
        fontPercent: {
            selector: ".vjs-font-percent > select",
            id: "captions-font-size-%s",
            label: "Font Size",
            options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
        default:
            2,
            parser: function(e) {
                return "1.00" === e ? null: Number(e)
            }
        },
        textOpacity: {
            selector: ".vjs-text-opacity > select",
            id: "captions-foreground-opacity-%s",
            label: "Transparency",
            options: [Er, wr]
        },
        windowColor: {
            selector: ".vjs-window-color > select",
            id: "captions-window-color-%s",
            label: "Color"
        },
        windowOpacity: {
            selector: ".vjs-window-opacity > select",
            id: "captions-window-opacity-%s",
            label: "Transparency",
            options: [xr, wr, Er]
        }
    };
    function Ir(e, t) {
        if (t && (e = t(e)), e && "none" !== e) return e
    }
    Ar.windowColor.options = Ar.backgroundColor.options;
    var Pr = function(n) {
        function e(e, t) {
            var i;
            return t.temporary = !1,
            (i = n.call(this, e, t) || this).updateDisplay = ge(Fe(i), i.updateDisplay),
            i.fill(),
            i.hasBeenOpened_ = i.hasBeenFilled_ = !0,
            i.endDialog = S("p", {
                className: "vjs-control-text",
                textContent: i.localize("End of dialog window.")
            }),
            i.el().appendChild(i.endDialog),
            i.setDefaults(),
            void 0 === t.persistTextTrackSettings && (i.options_.persistTextTrackSettings = i.options_.playerOptions.persistTextTrackSettings),
            i.on(i.$(".vjs-done-button"), "click",
            function() {
                i.saveSettings(),
                i.close()
            }),
            i.on(i.$(".vjs-default-button"), "click",
            function() {
                i.setDefaults(),
                i.updateDisplay()
            }),
            a(Ar,
            function(e) {
                i.on(i.$(e.selector), "change", i.updateDisplay)
            }),
            i.options_.persistTextTrackSettings && i.restoreSettings(),
            i
        }
        ze(e, n);
        var t = e.prototype;
        return t.dispose = function() {
            this.endDialog = null,
            n.prototype.dispose.call(this)
        },
        t.createElSelect_ = function(e, t, i) {
            var n = this;
            void 0 === t && (t = ""),
            void 0 === i && (i = "label");
            var r = Ar[e],
            s = r.id.replace("%s", this.id_),
            a = [t, s].join(" ").trim();
            return ["<" + i + ' id="' + s + '" class="' + ("label" === i ? "vjs-label": "") + '">', this.localize(r.label), "</" + i + ">", '<select aria-labelledby="' + a + '">'].concat(r.options.map(function(e) {
                var t = s + "-" + e[1].replace(/\W+/g, "");
                return ['<option id="' + t + '" value="' + e[0] + '" ', 'aria-labelledby="' + a + " " + t + '">', n.localize(e[1]), "</option>"].join("")
            })).concat("</select>").join("")
        },
        t.createElFgColor_ = function() {
            var e = "captions-text-legend-" + this.id_;
            return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
        },
        t.createElBgColor_ = function() {
            var e = "captions-background-" + this.id_;
            return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
        },
        t.createElWinColor_ = function() {
            var e = "captions-window-" + this.id_;
            return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
        },
        t.createElColors_ = function() {
            return S("div", {
                className: "vjs-track-settings-colors",
                innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
            })
        },
        t.createElFont_ = function() {
            return S("div", {
                className: "vjs-track-settings-font",
                innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
            })
        },
        t.createElControls_ = function() {
            var e = this.localize("restore all settings to the default values");
            return S("div", {
                className: "vjs-track-settings-controls",
                innerHTML: ['<button type="button" class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
            })
        },
        t.content = function() {
            return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
        },
        t.label = function() {
            return this.localize("Caption Settings Dialog")
        },
        t.description = function() {
            return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
        },
        t.buildCSSClass = function() {
            return n.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
        },
        t.getValues = function() {
            var r = this;
            return function(i, n, e) {
                return void 0 === e && (e = 0),
                s(i).reduce(function(e, t) {
                    return n(e, i[t], t)
                },
                e)
            } (Ar,
            function(e, t, i) {
                var n = function(e, t) {
                    return Ir(e.options[e.options.selectedIndex].value, t)
                } (r.$(t.selector), t.parser);
                return void 0 !== n && (e[i] = n),
                e
            },
            {})
        },
        t.setValues = function(i) {
            var n = this;
            a(Ar,
            function(e, t) { !
                function(e, t, i) {
                    if (t) for (var n = 0; n < e.options.length; n++) if (Ir(e.options[n].value, i) === t) {
                        e.selectedIndex = n;
                        break
                    }
                } (n.$(e.selector), i[t], e.parser)
            })
        },
        t.setDefaults = function() {
            var i = this;
            a(Ar,
            function(e) {
                var t = e.hasOwnProperty("default") ? e.
            default:
                0;
                i.$(e.selector).selectedIndex = t
            })
        },
        t.restoreSettings = function() {
            var e;
            try {
                e = JSON.parse(y.localStorage.getItem(gr))
            } catch(e) {
                p.warn(e)
            }
            e && this.setValues(e)
        },
        t.saveSettings = function() {
            if (this.options_.persistTextTrackSettings) {
                var e = this.getValues();
                try {
                    Object.keys(e).length ? y.localStorage.setItem(gr, JSON.stringify(e)) : y.localStorage.removeItem(gr)
                } catch(e) {
                    p.warn(e)
                }
            }
        },
        t.updateDisplay = function() {
            var e = this.player_.getChild("textTrackDisplay");
            e && e.updateDisplay()
        },
        t.conditionalBlur_ = function() {
            this.previouslyActiveEl_ = null;
            var e = this.player_.controlBar,
            t = e && e.subsCapsButton,
            i = e && e.captionsButton;
            t ? t.focus() : i && i.focus()
        },
        e
    } (Dt);
    je.registerComponent("TextTrackSettings", Pr);
    var Lr = function(s) {
        function e(e, t) {
            var i, n = t.ResizeObserver || y.ResizeObserver;
            null === t.ResizeObserver && (n = !1);
            var r = Ne({
                createEl: !n,
                reportTouchActivity: !1
            },
            t);
            return (i = s.call(this, e, r) || this).ResizeObserver = t.ResizeObserver || y.ResizeObserver,
            i.loadListener_ = null,
            i.resizeObserver_ = null,
            i.debouncedHandler_ = function(n, r, s, a) {
                var o;
                void 0 === a && (a = y);
                function e() {
                    var e = this,
                    t = arguments,
                    i = function() {
                        i = o = null,
                        s || n.apply(e, t)
                    }; ! o && s && n.apply(e, t),
                    a.clearTimeout(o),
                    o = a.setTimeout(i, r)
                }
                return e.cancel = function() {
                    a.clearTimeout(o),
                    o = null
                },
                e
            } (function() {
                i.resizeHandler()
            },
            100, !1, Fe(i)),
            n ? (i.resizeObserver_ = new i.ResizeObserver(i.debouncedHandler_), i.resizeObserver_.observe(e.el())) : (i.loadListener_ = function() {
                if (i.el_ && i.el_.contentWindow) {
                    var e = i.debouncedHandler_,
                    t = i.unloadListener_ = function() {
                        de(this, "resize", e),
                        de(this, "unload", t),
                        t = null
                    };
                    he(i.el_.contentWindow, "unload", t),
                    he(i.el_.contentWindow, "resize", e)
                }
            },
            i.one("load", i.loadListener_)),
            i
        }
        ze(e, s);
        var t = e.prototype;
        return t.createEl = function() {
            return s.prototype.createEl.call(this, "iframe", {
                className: "vjs-resize-manager",
                tabIndex: -1
            },
            {
                "aria-hidden": "true"
            })
        },
        t.resizeHandler = function() {
            this.player_ && this.player_.trigger && this.player_.trigger("playerresize")
        },
        t.dispose = function() {
            this.debouncedHandler_ && this.debouncedHandler_.cancel(),
            this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()),
            this.loadListener_ && this.off("load", this.loadListener_),
            this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow),
            this.ResizeObserver = null,
            this.resizeObserver = null,
            this.debouncedHandler_ = null,
            this.loadListener_ = null,
            s.prototype.dispose.call(this)
        },
        e
    } (je);
    je.registerComponent("ResizeManager", Lr);
    var Or = {
        trackingThreshold: 30,
        liveTolerance: 15
    },
    Dr = function(r) {
        function e(e, t) {
            var i, n = Ne(Or, t, {
                createEl: !1
            });
            return (i = r.call(this, e, n) || this).reset_(),
            i.on(i.player_, "durationchange", i.handleDurationchange),
            rt && "hidden" in h && "visibilityState" in h && i.on(h, "visibilitychange", i.handleVisibilityChange),
            i
        }
        ze(e, r);
        var t = e.prototype;
        return t.handleVisibilityChange = function() {
            this.player_.duration() === 1 / 0 && (h.hidden ? this.stopTracking() : this.startTracking())
        },
        t.trackLive_ = function() {
            var e = this.player_.seekable();
            if (e && e.length) {
                var t = Number(y.performance.now().toFixed(4)),
                i = -1 === this.lastTime_ ? 0 : (t - this.lastTime_) / 1e3;
                this.lastTime_ = t,
                this.pastSeekEnd_ = this.pastSeekEnd() + i;
                var n = this.liveCurrentTime(),
                r = this.player_.currentTime(),
                s = this.player_.paused() || this.seekedBehindLive_ || Math.abs(n - r) > this.options_.liveTolerance;
                this.timeupdateSeen_ && n !== 1 / 0 || (s = !1),
                s !== this.behindLiveEdge_ && (this.behindLiveEdge_ = s, this.trigger("liveedgechange"))
            }
        },
        t.handleDurationchange = function() {
            this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"), this.startTracking()) : (this.player_.removeClass("vjs-liveui"), this.stopTracking())
        },
        t.startTracking = function() {
            this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), this.trackingInterval_ = this.setInterval(this.trackLive_, 30), this.trackLive_(), this.on(this.player_, ["play", "pause"], this.trackLive_), this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked) : (this.one(this.player_, "play", this.handlePlay), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate)))
        },
        t.handleFirstTimeupdate = function() {
            this.timeupdateSeen_ = !0,
            this.on(this.player_, "seeked", this.handleSeeked)
        },
        t.handleSeeked = function() {
            var e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
            this.seekedBehindLive_ = !this.skipNextSeeked_ && 2 < e,
            this.skipNextSeeked_ = !1,
            this.trackLive_()
        },
        t.handlePlay = function() {
            this.one(this.player_, "timeupdate", this.seekToLiveEdge)
        },
        t.reset_ = function() {
            this.lastTime_ = -1,
            this.pastSeekEnd_ = 0,
            this.lastSeekEnd_ = -1,
            this.behindLiveEdge_ = !0,
            this.timeupdateSeen_ = !1,
            this.seekedBehindLive_ = !1,
            this.skipNextSeeked_ = !1,
            this.clearInterval(this.trackingInterval_),
            this.trackingInterval_ = null,
            this.off(this.player_, ["play", "pause"], this.trackLive_),
            this.off(this.player_, "seeked", this.handleSeeked),
            this.off(this.player_, "play", this.handlePlay),
            this.off(this.player_, "timeupdate", this.handleFirstTimeupdate),
            this.off(this.player_, "timeupdate", this.seekToLiveEdge)
        },
        t.stopTracking = function() {
            this.isTracking() && (this.reset_(), this.trigger("liveedgechange"))
        },
        t.seekableEnd = function() {
            for (var e = this.player_.seekable(), t = [], i = e ? e.length: 0; i--;) t.push(e.end(i));
            return t.length ? t.sort()[t.length - 1] : 1 / 0
        },
        t.seekableStart = function() {
            for (var e = this.player_.seekable(), t = [], i = e ? e.length: 0; i--;) t.push(e.start(i));
            return t.length ? t.sort()[0] : 0
        },
        t.liveWindow = function() {
            var e = this.liveCurrentTime();
            return e === 1 / 0 ? 1 / 0 : e - this.seekableStart()
        },
        t.isLive = function() {
            return this.isTracking()
        },
        t.atLiveEdge = function() {
            return ! this.behindLiveEdge()
        },
        t.liveCurrentTime = function() {
            return this.pastSeekEnd() + this.seekableEnd()
        },
        t.pastSeekEnd = function() {
            var e = this.seekableEnd();
            return - 1 !== this.lastSeekEnd_ && e !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0),
            this.lastSeekEnd_ = e,
            this.pastSeekEnd_
        },
        t.behindLiveEdge = function() {
            return this.behindLiveEdge_
        },
        t.isTracking = function() {
            return "number" == typeof this.trackingInterval_
        },
        t.seekToLiveEdge = function() {
            this.seekedBehindLive_ = !1,
            this.atLiveEdge() || (this.skipNextSeeked_ = !0, this.player_.currentTime(this.liveCurrentTime()))
        },
        t.dispose = function() {
            this.off(h, "visibilitychange", this.handleVisibilityChange),
            this.stopTracking(),
            r.prototype.dispose.call(this)
        },
        e
    } (je);
    je.registerComponent("LiveTracker", Dr);
    function Nr(e) {
        var t = e.el();
        if (t.hasAttribute("src")) return e.triggerSourceset(t.src),
        !0;
        var i = e.$$("source"),
        n = [],
        r = "";
        if (!i.length) return ! 1;
        for (var s = 0; s < i.length; s++) {
            var a = i[s].src;
            a && -1 === n.indexOf(a) && n.push(a)
        }
        return !! n.length && (1 === n.length && (r = n[0]), e.triggerSourceset(r), !0)
    }
    function Rr(e, t) {
        for (var i = {},
        n = 0; n < e.length && !((i = Object.getOwnPropertyDescriptor(e[n], t)) && i.set && i.get); n++);
        return i.enumerable = !0,
        i.configurable = !0,
        i
    }
    function Ur(s) {
        var a = s.el();
        if (!a.resetSourceWatch_) {
            var t = {},
            e = function(e) {
                return Rr([e.el(), y.HTMLMediaElement.prototype, y.Element.prototype, Fr], "innerHTML")
            } (s),
            i = function(r) {
                return function() {
                    for (var e = arguments.length,
                    t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    var n = r.apply(a, t);
                    return Nr(s),
                    n
                }
            }; ["append", "appendChild", "insertAdjacentHTML"].forEach(function(e) {
                a[e] && (t[e] = a[e], a[e] = i(t[e]))
            }),
            Object.defineProperty(a, "innerHTML", Ne(e, {
                set: i(e.set)
            })),
            a.resetSourceWatch_ = function() {
                a.resetSourceWatch_ = null,
                Object.keys(t).forEach(function(e) {
                    a[e] = t[e]
                }),
                Object.defineProperty(a, "innerHTML", e)
            },
            s.one("sourceset", a.resetSourceWatch_)
        }
    }
    function Mr(n) {
        if (n.featuresSourceset) {
            var r = n.el();
            if (!r.resetSourceset_) {
                var i = function(e) {
                    return Rr([e.el(), y.HTMLMediaElement.prototype, Hr], "src")
                } (n),
                s = r.setAttribute,
                t = r.load;
                Object.defineProperty(r, "src", Ne(i, {
                    set: function(e) {
                        var t = i.set.call(r, e);
                        return n.triggerSourceset(r.src),
                        t
                    }
                })),
                r.setAttribute = function(e, t) {
                    var i = s.call(r, e, t);
                    return /src/i.test(e) && n.triggerSourceset(r.src),
                    i
                },
                r.load = function() {
                    var e = t.call(r);
                    return Nr(n) || (n.triggerSourceset(""), Ur(n)),
                    e
                },
                r.currentSrc ? n.triggerSourceset(r.currentSrc) : Nr(n) || Ur(n),
                r.resetSourceset_ = function() {
                    r.resetSourceset_ = null,
                    r.load = t,
                    r.setAttribute = s,
                    Object.defineProperty(r, "src", i),
                    r.resetSourceWatch_ && r.resetSourceWatch_()
                }
            }
        }
    }
    function Br(t, i, n, e) {
        function r(e) {
            return Object.defineProperty(t, i, {
                value: e,
                enumerable: !0,
                writable: !0
            })
        }
        void 0 === e && (e = !0);
        var s = {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var e = n();
                return r(e),
                e
            }
        };
        return e && (s.set = r),
        Object.defineProperty(t, i, s)
    }
    var jr, Fr = Object.defineProperty({},
    "innerHTML", {
        get: function() {
            return this.cloneNode(!0).innerHTML
        },
        set: function(e) {
            var t = h.createElement(this.nodeName.toLowerCase());
            t.innerHTML = e;
            for (var i = h.createDocumentFragment(); t.childNodes.length;) i.appendChild(t.childNodes[0]);
            return this.innerText = "",
            y.Element.prototype.appendChild.call(this, i),
            this.innerHTML
        }
    }),
    Hr = Object.defineProperty({},
    "src", {
        get: function() {
            return this.hasAttribute("src") ? jt(y.Element.prototype.getAttribute.call(this, "src")) : ""
        },
        set: function(e) {
            return y.Element.prototype.setAttribute.call(this, "src", e),
            e
        }
    }),
    Vr = function(c) {
        function o(e, t) {
            var i;
            i = c.call(this, e, t) || this;
            var n = e.source,
            r = !1;
            if (n && (i.el_.currentSrc !== n.src || e.tag && 3 === e.tag.initNetworkState_) ? i.setSource(n) : i.handleLateInit_(i.el_), e.enableSourceset && i.setupSourcesetHandling_(), i.el_.hasChildNodes()) {
                for (var s = i.el_.childNodes,
                a = s.length,
                o = []; a--;) {
                    var u = s[a];
                    "track" === u.nodeName.toLowerCase() && (i.featuresNativeTextTracks ? (i.remoteTextTrackEls().addTrackElement_(u), i.remoteTextTracks().addTrack(u.track), i.textTracks().addTrack(u.track), r || i.el_.hasAttribute("crossorigin") || !Ht(u.src) || (r = !0)) : o.push(u))
                }
                for (var l = 0; l < o.length; l++) i.el_.removeChild(o[l])
            }
            return i.proxyNativeTracks_(),
            i.featuresNativeTextTracks && r && p.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."),
            i.restoreMetadataTracksInIOSNativePlayer_(),
            (ot || lt || Ze) && !0 === e.nativeControlsForTouch && i.setControls(!0),
            i.proxyWebkitFullscreen_(),
            i.triggerReady(),
            i
        }
        ze(o, c);
        var e = o.prototype;
        return e.dispose = function() {
            this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(),
            o.disposeMediaElement(this.el_),
            this.options_ = null,
            c.prototype.dispose.call(this)
        },
        e.setupSourcesetHandling_ = function() {
            Mr(this)
        },
        e.restoreMetadataTracksInIOSNativePlayer_ = function() {
            function e() {
                i = [];
                for (var e = 0; e < n.length; e++) {
                    var t = n[e];
                    "metadata" === t.kind && i.push({
                        track: t,
                        storedMode: t.mode
                    })
                }
            }
            var i, n = this.textTracks();
            e(),
            n.addEventListener("change", e),
            this.on("dispose",
            function() {
                return n.removeEventListener("change", e)
            });
            function r() {
                for (var e = 0; e < i.length; e++) {
                    var t = i[e];
                    "disabled" === t.track.mode && t.track.mode !== t.storedMode && (t.track.mode = t.storedMode)
                }
                n.removeEventListener("change", r)
            }
            this.on("webkitbeginfullscreen",
            function() {
                n.removeEventListener("change", e),
                n.removeEventListener("change", r),
                n.addEventListener("change", r)
            }),
            this.on("webkitendfullscreen",
            function() {
                n.removeEventListener("change", e),
                n.addEventListener("change", e),
                n.removeEventListener("change", r)
            })
        },
        e.overrideNative_ = function(e, t) {
            var i = this;
            if (t === this["featuresNative" + e + "Tracks"]) {
                var n = e.toLowerCase();
                this[n + "TracksListeners_"] && Object.keys(this[n + "TracksListeners_"]).forEach(function(e) {
                    i.el()[n + "Tracks"].removeEventListener(e, i[n + "TracksListeners_"][e])
                }),
                this["featuresNative" + e + "Tracks"] = !t,
                this[n + "TracksListeners_"] = null,
                this.proxyNativeTracksForType_(n)
            }
        },
        e.overrideNativeAudioTracks = function(e) {
            this.overrideNative_("Audio", e)
        },
        e.overrideNativeVideoTracks = function(e) {
            this.overrideNative_("Video", e)
        },
        e.proxyNativeTracksForType_ = function(i) {
            var n = this,
            e = pi[i],
            r = this.el()[e.getterName],
            s = this[e.getterName]();
            if (this["featuresNative" + e.capitalName + "Tracks"] && r && r.addEventListener) {
                var a = {
                    change: function(e) {
                        var t = {
                            type: "change",
                            target: s,
                            currentTarget: s,
                            srcElement: s
                        };
                        s.trigger(t),
                        "text" === i && n[fi.remoteText.getterName]().trigger(t)
                    },
                    addtrack: function(e) {
                        s.addTrack(e.track)
                    },
                    removetrack: function(e) {
                        s.removeTrack(e.track)
                    }
                },
                t = function() {
                    for (var e = [], t = 0; t < s.length; t++) {
                        for (var i = !1,
                        n = 0; n < r.length; n++) if (r[n] === s[t]) {
                            i = !0;
                            break
                        }
                        i || e.push(s[t])
                    }
                    for (; e.length;) s.removeTrack(e.shift())
                };
                this[e.getterName + "Listeners_"] = a,
                Object.keys(a).forEach(function(t) {
                    var i = a[t];
                    r.addEventListener(t, i),
                    n.on("dispose",
                    function(e) {
                        return r.removeEventListener(t, i)
                    })
                }),
                this.on("loadstart", t),
                this.on("dispose",
                function(e) {
                    return n.off("loadstart", t)
                })
            }
        },
        e.proxyNativeTracks_ = function() {
            var t = this;
            pi.names.forEach(function(e) {
                t.proxyNativeTracksForType_(e)
            })
        },
        e.createEl = function() {
            var e = this.options_.tag;
            if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                if (e) {
                    var t = e.cloneNode(!0);
                    e.parentNode && e.parentNode.insertBefore(t, e),
                    o.disposeMediaElement(e),
                    e = t
                } else {
                    e = h.createElement("video");
                    var i = Ne({},
                    this.options_.tag && P(this.options_.tag));
                    ot && !0 === this.options_.nativeControlsForTouch || delete i.controls,
                    I(e, m(i, {
                        id: this.options_.techId,
                        class: "vjs-tech"
                    }))
                }
                e.playerId = this.options_.playerId
            }
            "undefined" != typeof this.options_.preload && O(e, "preload", this.options_.preload),
            void 0 !== this.options_.disablePictureInPicture && (e.disablePictureInPicture = this.options_.disablePictureInPicture);
            for (var n = ["loop", "muted", "playsinline", "autoplay"], r = 0; r < n.length; r++) {
                var s = n[r],
                a = this.options_[s];
                "undefined" != typeof a && (a ? O(e, s, s) : D(e, s), e[s] = a)
            }
            return e
        },
        e.handleLateInit_ = function(e) {
            if (0 !== e.networkState && 3 !== e.networkState) {
                if (0 === e.readyState) {
                    var t = !1,
                    i = function() {
                        t = !0
                    };
                    this.on("loadstart", i);
                    var n = function() {
                        t || this.trigger("loadstart")
                    };
                    return this.on("loadedmetadata", n),
                    void this.ready(function() {
                        this.off("loadstart", i),
                        this.off("loadedmetadata", n),
                        t || this.trigger("loadstart")
                    })
                }
                var r = ["loadstart"];
                r.push("loadedmetadata"),
                2 <= e.readyState && r.push("loadeddata"),
                3 <= e.readyState && r.push("canplay"),
                4 <= e.readyState && r.push("canplaythrough"),
                this.ready(function() {
                    r.forEach(function(e) {
                        this.trigger(e)
                    },
                    this)
                })
            }
        },
        e.setScrubbing = function(e) {
            this.isScrubbing_ = e
        },
        e.setCurrentTime = function(e) {
            try {
                this.isScrubbing_ && this.el_.fastSeek && ht ? this.el_.fastSeek(e) : this.el_.currentTime = e
            } catch(e) {
                p(e, "Video is not ready. (Video.js)")
            }
        },
        e.duration = function() {
            var t = this;
            if (this.el_.duration === 1 / 0 && Qe && it && 0 === this.el_.currentTime) {
                return this.on("timeupdate",
                function e() {
                    0 < t.el_.currentTime && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
                }),
                NaN
            }
            return this.el_.duration || NaN
        },
        e.width = function() {
            return this.el_.offsetWidth
        },
        e.height = function() {
            return this.el_.offsetHeight
        },
        e.proxyWebkitFullscreen_ = function() {
            var e = this;
            if ("webkitDisplayingFullscreen" in this.el_) {
                var t = function() {
                    this.trigger("fullscreenchange", {
                        isFullscreen: !1
                    })
                },
                i = function() {
                    "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", {
                        isFullscreen: !0,
                        nativeIOSFullscreen: !0
                    }))
                };
                this.on("webkitbeginfullscreen", i),
                this.on("dispose",
                function() {
                    e.off("webkitbeginfullscreen", i),
                    e.off("webkitendfullscreen", t)
                })
            }
        },
        e.supportsFullScreen = function() {
            if ("function" == typeof this.el_.webkitEnterFullScreen) {
                var e = y.navigator && y.navigator.userAgent || "";
                if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return ! 0
            }
            return ! 1
        },
        e.enterFullScreen = function() {
            var e = this.el_;
            if (e.paused && e.networkState <= e.HAVE_METADATA) xt(this.el_.play()),
            this.setTimeout(function() {
                e.pause();
                try {
                    e.webkitEnterFullScreen()
                } catch(e) {
                    this.trigger("fullscreenerror", e)
                }
            },
            0);
            else try {
                e.webkitEnterFullScreen()
            } catch(e) {
                this.trigger("fullscreenerror", e)
            }
        },
        e.exitFullScreen = function() {
            this.el_.webkitDisplayingFullscreen ? this.el_.webkitExitFullScreen() : this.trigger("fullscreenerror", new Error("The video is not fullscreen"))
        },
        e.requestPictureInPicture = function() {
            return this.el_.requestPictureInPicture()
        },
        e.src = function(e) {
            if (void 0 === e) return this.el_.src;
            this.setSrc(e)
        },
        e.reset = function() {
            o.resetMediaElement(this.el_)
        },
        e.currentSrc = function() {
            return this.currentSource_ ? this.currentSource_.src: this.el_.currentSrc
        },
        e.setControls = function(e) {
            this.el_.controls = !!e
        },
        e.addTextTrack = function(e, t, i) {
            return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, i) : c.prototype.addTextTrack.call(this, e, t, i)
        },
        e.createRemoteTextTrack = function(e) {
            if (!this.featuresNativeTextTracks) return c.prototype.createRemoteTextTrack.call(this, e);
            var t = h.createElement("track");
            return e.kind && (t.kind = e.kind),
            e.label && (t.label = e.label),
            (e.language || e.srclang) && (t.srclang = e.language || e.srclang),
            e.
        default && (t.
        default = e.
        default),
            e.id && (t.id = e.id),
            e.src && (t.src = e.src),
            t
        },
        e.addRemoteTextTrack = function(e, t) {
            var i = c.prototype.addRemoteTextTrack.call(this, e, t);
            return this.featuresNativeTextTracks && this.el().appendChild(i),
            i
        },
        e.removeRemoteTextTrack = function(e) {
            if (c.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks) for (var t = this.$$("track"), i = t.length; i--;) e !== t[i] && e !== t[i].track || this.el().removeChild(t[i])
        },
        e.getVideoPlaybackQuality = function() {
            if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
            var e = {};
            return "undefined" != typeof this.el().webkitDroppedFrameCount && "undefined" != typeof this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount),
            y.performance && "function" == typeof y.performance.now ? e.creationTime = y.performance.now() : y.performance && y.performance.timing && "number" == typeof y.performance.timing.navigationStart && (e.creationTime = y.Date.now() - y.performance.timing.navigationStart),
            e
        },
        o
    } (Gi);
    Br(Vr, "TEST_VID",
    function() {
        if (v()) {
            var e = h.createElement("video"),
            t = h.createElement("track");
            return t.kind = "captions",
            t.srclang = "en",
            t.label = "English",
            e.appendChild(t),
            e
        }
    }),
    Vr.isSupported = function() {
        try {
            Vr.TEST_VID.volume = .5
        } catch(e) {
            return ! 1
        }
        return ! (!Vr.TEST_VID || !Vr.TEST_VID.canPlayType)
    },
    Vr.canPlayType = function(e) {
        return Vr.TEST_VID.canPlayType(e)
    },
    Vr.canPlaySource = function(e, t) {
        return Vr.canPlayType(e.type)
    },
    Vr.canControlVolume = function() {
        try {
            var e = Vr.TEST_VID.volume;
            return Vr.TEST_VID.volume = e / 2 + .1,
            e !== Vr.TEST_VID.volume
        } catch(e) {
            return ! 1
        }
    },
    Vr.canMuteVolume = function() {
        try {
            var e = Vr.TEST_VID.muted;
            return Vr.TEST_VID.muted = !e,
            Vr.TEST_VID.muted ? O(Vr.TEST_VID, "muted", "muted") : D(Vr.TEST_VID, "muted"),
            e !== Vr.TEST_VID.muted
        } catch(e) {
            return ! 1
        }
    },
    Vr.canControlPlaybackRate = function() {
        if (Qe && it && nt < 58) return ! 1;
        try {
            var e = Vr.TEST_VID.playbackRate;
            return Vr.TEST_VID.playbackRate = e / 2 + .1,
            e !== Vr.TEST_VID.playbackRate
        } catch(e) {
            return ! 1
        }
    },
    Vr.canOverrideAttributes = function() {
        try {
            var e = function() {};
            Object.defineProperty(h.createElement("video"), "src", {
                get: e,
                set: e
            }),
            Object.defineProperty(h.createElement("audio"), "src", {
                get: e,
                set: e
            }),
            Object.defineProperty(h.createElement("video"), "innerHTML", {
                get: e,
                set: e
            }),
            Object.defineProperty(h.createElement("audio"), "innerHTML", {
                get: e,
                set: e
            })
        } catch(e) {
            return ! 1
        }
        return ! 0
    },
    Vr.supportsNativeTextTracks = function() {
        return ht || ct && it
    },
    Vr.supportsNativeVideoTracks = function() {
        return ! (!Vr.TEST_VID || !Vr.TEST_VID.videoTracks)
    },
    Vr.supportsNativeAudioTracks = function() {
        return ! (!Vr.TEST_VID || !Vr.TEST_VID.audioTracks)
    },
    Vr.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"],
    [["featuresVolumeControl", "canControlVolume"], ["featuresMuteControl", "canMuteVolume"], ["featuresPlaybackRate", "canControlPlaybackRate"], ["featuresSourceset", "canOverrideAttributes"], ["featuresNativeTextTracks", "supportsNativeTextTracks"], ["featuresNativeVideoTracks", "supportsNativeVideoTracks"], ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]].forEach(function(e) {
        var t = e[0],
        i = e[1];
        Br(Vr.prototype, t,
        function() {
            return Vr[i]()
        },
        !0)
    }),
    Vr.prototype.movingMediaElementInDOM = !ct,
    Vr.prototype.featuresFullscreenResize = !0,
    Vr.prototype.featuresProgressEvents = !0,
    Vr.prototype.featuresTimeupdateEvents = !0,
    Vr.patchCanPlayType = function() {
        4 <= Je && !et && !it && (jr = Vr.TEST_VID && Vr.TEST_VID.constructor.prototype.canPlayType, Vr.TEST_VID.constructor.prototype.canPlayType = function(e) {
            return e && /^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(e) ? "maybe": jr.call(this, e)
        })
    },
    Vr.unpatchCanPlayType = function() {
        var e = Vr.TEST_VID.constructor.prototype.canPlayType;
        return jr && (Vr.TEST_VID.constructor.prototype.canPlayType = jr),
        e
    },
    Vr.patchCanPlayType(),
    Vr.disposeMediaElement = function(e) {
        if (e) {
            for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
            e.removeAttribute("src"),
            "function" == typeof e.load &&
            function() {
                try {
                    e.load()
                } catch(e) {}
            } ()
        }
    },
    Vr.resetMediaElement = function(e) {
        if (e) {
            for (var t = e.querySelectorAll("source"), i = t.length; i--;) e.removeChild(t[i]);
            e.removeAttribute("src"),
            "function" == typeof e.load &&
            function() {
                try {
                    e.load()
                } catch(e) {}
            } ()
        }
    },
    ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(e) {
        Vr.prototype[e] = function() {
            return this.el_[e] || this.el_.hasAttribute(e)
        }
    }),
    ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(t) {
        Vr.prototype["set" + De(t)] = function(e) { (this.el_[t] = e) ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
        }
    }),
    ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin"].forEach(function(e) {
        Vr.prototype[e] = function() {
            return this.el_[e]
        }
    }),
    ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach(function(t) {
        Vr.prototype["set" + De(t)] = function(e) {
            this.el_[t] = e
        }
    }),
    ["pause", "load", "play"].forEach(function(e) {
        Vr.prototype[e] = function() {
            return this.el_[e]()
        }
    }),
    Gi.withSourceHandlers(Vr),
    Vr.nativeSourceHandler = {},
    Vr.nativeSourceHandler.canPlayType = function(e) {
        try {
            return Vr.TEST_VID.canPlayType(e)
        } catch(e) {
            return ""
        }
    },
    Vr.nativeSourceHandler.canHandleSource = function(e, t) {
        if (e.type) return Vr.nativeSourceHandler.canPlayType(e.type);
        if (e.src) {
            var i = Ft(e.src);
            return Vr.nativeSourceHandler.canPlayType("video/" + i)
        }
        return ""
    },
    Vr.nativeSourceHandler.handleSource = function(e, t, i) {
        t.setSrc(e.src)
    },
    Vr.nativeSourceHandler.dispose = function() {},
    Vr.registerSourceHandler(Vr.nativeSourceHandler),
    Gi.registerTech("Html5", Vr);
    var qr = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
    Wr = {
        canplay: "CanPlay",
        canplaythrough: "CanPlayThrough",
        playing: "Playing",
        seeked: "Seeked"
    },
    zr = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"],
    Gr = {};
    zr.forEach(function(e) {
        var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e;
        Gr[e] = "vjs-layout-" + t
    });
    var Xr = {
        tiny: 210,
        xsmall: 320,
        small: 425,
        medium: 768,
        large: 1440,
        xlarge: 2560,
        huge: 1 / 0
    },
    Kr = function(c) {
        function l(e, t, i) {
            var n;
            if (e.id = e.id || t.id || "vjs_video_" + ne(), (t = m(l.getTagSettings(e), t)).initChildren = !1, t.createEl = !1, t.evented = !1, t.reportTouchActivity = !1, !t.language) if ("function" == typeof e.closest) {
                var r = e.closest("[lang]");
                r && r.getAttribute && (t.language = r.getAttribute("lang"))
            } else for (var s = e; s && 1 === s.nodeType;) {
                if (P(s).hasOwnProperty("lang")) {
                    t.language = s.getAttribute("lang");
                    break
                }
                s = s.parentNode
            }
            if ((n = c.call(this, null, t, i) || this).boundDocumentFullscreenChange_ = ge(Fe(n), n.documentFullscreenChange_), n.boundFullWindowOnEscKey_ = ge(Fe(n), n.fullWindowOnEscKey), n.isFullscreen_ = !1, n.log = f(n.id_), n.fsApi_ = yt, n.isPosterFromTech_ = !1, n.queuedCallbacks_ = [], n.isReady_ = !1, n.hasStarted_ = !1, n.userActive_ = !1, n.debugEnabled_ = !1, !n.options_ || !n.options_.techOrder || !n.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
            if (n.tag = e, n.tagAttributes = e && P(e), n.language(n.options_.language), t.languages) {
                var a = {};
                Object.getOwnPropertyNames(t.languages).forEach(function(e) {
                    a[e.toLowerCase()] = t.languages[e]
                }),
                n.languages_ = a
            } else n.languages_ = l.prototype.options_.languages;
            n.resetCache_(),
            n.poster_ = t.poster || "",
            n.controls_ = !!t.controls,
            e.controls = !1,
            e.removeAttribute("controls"),
            n.changingSrc_ = !1,
            n.playCallbacks_ = [],
            n.playTerminatedQueue_ = [],
            e.hasAttribute("autoplay") ? n.autoplay(!0) : n.autoplay(n.options_.autoplay),
            t.plugins && Object.keys(t.plugins).forEach(function(e) {
                if ("function" != typeof n[e]) throw new Error('plugin "' + e + '" does not exist')
            }),
            n.scrubbing_ = !1,
            n.el_ = n.createEl(),
            Ie(Fe(n), {
                eventBusKey: "el_"
            }),
            n.fsApi_.requestFullscreen && (he(h, n.fsApi_.fullscreenchange, n.boundDocumentFullscreenChange_), n.on(n.fsApi_.fullscreenchange, n.boundDocumentFullscreenChange_)),
            n.fluid_ && n.on("playerreset", n.updateStyleEl_);
            var o = Ne(n.options_);
            t.plugins && Object.keys(t.plugins).forEach(function(e) {
                n[e](t.plugins[e])
            }),
            t.debug && n.debug(!0),
            n.options_.playerOptions = o,
            n.middleware_ = [],
            n.initChildren(),
            n.isAudio("audio" === e.nodeName.toLowerCase()),
            n.controls() ? n.addClass("vjs-controls-enabled") : n.addClass("vjs-controls-disabled"),
            n.el_.setAttribute("role", "region"),
            n.isAudio() ? n.el_.setAttribute("aria-label", n.localize("Audio Player")) : n.el_.setAttribute("aria-label", n.localize("Video Player")),
            n.isAudio() && n.addClass("vjs-audio"),
            n.flexNotSupported_() && n.addClass("vjs-no-flex"),
            ot && n.addClass("vjs-touch-enabled"),
            ct || n.addClass("vjs-workinghover"),
            l.players[n.id_] = Fe(n);
            var u = d.split(".")[0];
            return n.addClass("vjs-v" + u),
            n.userActive(!0),
            n.reportUserActivity(),
            n.one("play", n.listenForUserActivity_),
            n.on("stageclick", n.handleStageClick_),
            n.on("keydown", n.handleKeyDown),
            n.breakpoints(n.options_.breakpoints),
            n.responsive(n.options_.responsive),
            n
        }
        ze(l, c);
        var e = l.prototype;
        return e.dispose = function() {
            var n = this;
            this.trigger("dispose"),
            this.off("dispose"),
            de(h, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_),
            de(h, "keydown", this.boundFullWindowOnEscKey_),
            this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null),
            l.players[this.id_] = null,
            this.tag && this.tag.player && (this.tag.player = null),
            this.el_ && this.el_.player && (this.el_.player = null),
            this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""),
            this.playerElIngest_ && (this.playerElIngest_ = null),
            this.tag && (this.tag = null),
            function(e) {
                Ki[e.id()] = null
            } (this),
            mi.names.forEach(function(e) {
                var t = mi[e],
                i = n[t.getterName]();
                i && i.off && i.off()
            }),
            c.prototype.dispose.call(this)
        },
        e.createEl = function() {
            var t, i = this.tag,
            e = this.playerElIngest_ = i.parentNode && i.parentNode.hasAttribute && i.parentNode.hasAttribute("data-vjs-player"),
            n = "video-js" === this.tag.tagName.toLowerCase();
            e ? t = this.el_ = i.parentNode: n || (t = this.el_ = c.prototype.createEl.call(this, "div"));
            var r = P(i);
            if (n) {
                for (t = this.el_ = i, i = this.tag = h.createElement("video"); t.children.length;) i.appendChild(t.firstChild);
                E(t, "video-js") || w(t, "video-js"),
                t.appendChild(i),
                e = this.playerElIngest_ = t,
                Object.keys(t).forEach(function(e) {
                    try {
                        i[e] = t[e]
                    } catch(e) {}
                })
            }
            if (i.setAttribute("tabindex", "-1"), r.tabindex = "-1", (rt || it && at) && (i.setAttribute("role", "application"), r.role = "application"), i.removeAttribute("width"), i.removeAttribute("height"), "width" in r && delete r.width, "height" in r && delete r.height, Object.getOwnPropertyNames(r).forEach(function(e) {
                n && "class" === e || t.setAttribute(e, r[e]),
                n && i.setAttribute(e, r[e])
            }), i.playerId = i.id, i.id += "_html5_api", i.className = "vjs-tech", i.player = t.player = this, this.addClass("vjs-paused"), !0 !== y.VIDEOJS_NO_DYNAMIC_STYLE) {
                this.styleEl_ = Z("vjs-styles-dimensions");
                var s = G(".vjs-styles-defaults"),
                a = G("head");
                a.insertBefore(this.styleEl_, s ? s.nextSibling: a.firstChild)
            }
            this.fill_ = !1,
            this.fluid_ = !1,
            this.width(this.options_.width),
            this.height(this.options_.height),
            this.fill(this.options_.fill),
            this.fluid(this.options_.fluid),
            this.aspectRatio(this.options_.aspectRatio),
            this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
            for (var o = i.getElementsByTagName("a"), u = 0; u < o.length; u++) {
                var l = o.item(u);
                w(l, "vjs-hidden"),
                l.setAttribute("hidden", "hidden")
            }
            return i.initNetworkState_ = i.networkState,
            i.parentNode && !e && i.parentNode.insertBefore(t, i),
            C(i, t),
            this.children_.unshift(i),
            this.el_.setAttribute("lang", this.language_),
            this.el_ = t
        },
        e.crossOrigin = function(e) {
            if (!e) return this.techGet_("crossOrigin");
            "anonymous" === e || "use-credentials" === e ? this.techCall_("setCrossOrigin", e) : p.warn('crossOrigin must be "anonymous" or "use-credentials", given "' + e + '"')
        },
        e.width = function(e) {
            return this.dimension("width", e)
        },
        e.height = function(e) {
            return this.dimension("height", e)
        },
        e.dimension = function(e, t) {
            var i = e + "_";
            if (void 0 === t) return this[i] || 0;
            if ("" === t || "auto" === t) return this[i] = void 0,
            void this.updateStyleEl_();
            var n = parseFloat(t);
            isNaN(n) ? p.error('Improper value "' + t + '" supplied for for ' + e) : (this[i] = n, this.updateStyleEl_())
        },
        e.fluid = function(e) {
            if (void 0 === e) return !! this.fluid_;
            this.fluid_ = !!e,
            xe(this) && this.off("playerreset", this.updateStyleEl_),
            e ? (this.addClass("vjs-fluid"), this.fill(!1),
            function(e, t) {
                xe(e) ? t() : (e.eventedCallbacks || (e.eventedCallbacks = []), e.eventedCallbacks.push(t))
            } (function() {
                this.on("playerreset", this.updateStyleEl_)
            })) : this.removeClass("vjs-fluid"),
            this.updateStyleEl_()
        },
        e.fill = function(e) {
            if (void 0 === e) return !! this.fill_;
            this.fill_ = !!e,
            e ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill")
        },
        e.aspectRatio = function(e) {
            if (void 0 === e) return this.aspectRatio_;
            if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
            this.aspectRatio_ = e,
            this.fluid(!0),
            this.updateStyleEl_()
        },
        e.updateStyleEl_ = function() {
            if (!0 !== y.VIDEOJS_NO_DYNAMIC_STYLE) {
                var e, t, i, n = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_: 0 < this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                r = n[1] / n[0];
                e = void 0 !== this.width_ ? this.width_: void 0 !== this.height_ ? this.height_ / r: this.videoWidth() || 300,
                t = void 0 !== this.height_ ? this.height_: e * r,
                i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions",
                this.addClass(i),
                ee(this.styleEl_, "\n      ." + i + " {\n        width: " + e + "px;\n        height: " + t + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * r + "%;\n      }\n    ")
            } else {
                var s = "number" == typeof this.width_ ? this.width_: this.options_.width,
                a = "number" == typeof this.height_ ? this.height_: this.options_.height,
                o = this.tech_ && this.tech_.el();
                o && (0 <= s && (o.width = s), 0 <= a && (o.height = a))
            }
        },
        e.loadTech_ = function(e, t) {
            var i = this;
            this.tech_ && this.unloadTech_();
            var n = De(e),
            r = e.charAt(0).toLowerCase() + e.slice(1);
            "Html5" !== n && this.tag && (Gi.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null),
            this.techName_ = n,
            this.isReady_ = !1;
            var s = {
                source: t,
                autoplay: "string" != typeof this.autoplay() && this.autoplay(),
                nativeControlsForTouch: this.options_.nativeControlsForTouch,
                playerId: this.id(),
                techId: this.id() + "_" + r + "_api",
                playsinline: this.options_.playsinline,
                preload: this.options_.preload,
                loop: this.options_.loop,
                disablePictureInPicture: this.options_.disablePictureInPicture,
                muted: this.options_.muted,
                poster: this.poster(),
                language: this.language(),
                playerElIngest: this.playerElIngest_ || !1,
                "vtt.js": this.options_["vtt.js"],
                canOverridePoster: !!this.options_.techCanOverridePoster,
                enableSourceset: this.options_.enableSourceset,
                Promise: this.options_.Promise
            };
            mi.names.forEach(function(e) {
                var t = mi[e];
                s[t.getterName] = i[t.privateName]
            }),
            m(s, this.options_[n]),
            m(s, this.options_[r]),
            m(s, this.options_[e.toLowerCase()]),
            this.tag && (s.tag = this.tag),
            t && t.src === this.cache_.src && 0 < this.cache_.currentTime && (s.startTime = this.cache_.currentTime);
            var a = Gi.getTech(e);
            if (!a) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'");
            this.tech_ = new a(s),
            this.tech_.ready(ge(this, this.handleTechReady_), !0),
            Pt(this.textTracksJson_ || [], this.tech_),
            qr.forEach(function(e) {
                i.on(i.tech_, e, i["handleTech" + De(e) + "_"])
            }),
            Object.keys(Wr).forEach(function(t) {
                i.on(i.tech_, t,
                function(e) {
                    0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({
                        callback: i["handleTech" + Wr[t] + "_"].bind(i),
                        event: e
                    }) : i["handleTech" + Wr[t] + "_"](e)
                })
            }),
            this.on(this.tech_, "loadstart", this.handleTechLoadStart_),
            this.on(this.tech_, "sourceset", this.handleTechSourceset_),
            this.on(this.tech_, "waiting", this.handleTechWaiting_),
            this.on(this.tech_, "ended", this.handleTechEnded_),
            this.on(this.tech_, "seeking", this.handleTechSeeking_),
            this.on(this.tech_, "play", this.handleTechPlay_),
            this.on(this.tech_, "firstplay", this.handleTechFirstPlay_),
            this.on(this.tech_, "pause", this.handleTechPause_),
            this.on(this.tech_, "durationchange", this.handleTechDurationChange_),
            this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_),
            this.on(this.tech_, "fullscreenerror", this.handleTechFullscreenError_),
            this.on(this.tech_, "enterpictureinpicture", this.handleTechEnterPictureInPicture_),
            this.on(this.tech_, "leavepictureinpicture", this.handleTechLeavePictureInPicture_),
            this.on(this.tech_, "error", this.handleTechError_),
            this.on(this.tech_, "loadedmetadata", this.updateStyleEl_),
            this.on(this.tech_, "posterchange", this.handleTechPosterChange_),
            this.on(this.tech_, "textdata", this.handleTechTextData_),
            this.on(this.tech_, "ratechange", this.handleTechRateChange_),
            this.usingNativeControls(this.techGet_("controls")),
            this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(),
            this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || C(this.tech_.el(), this.el()),
            this.tag && (this.tag.player = null, this.tag = null)
        },
        e.unloadTech_ = function() {
            var i = this;
            mi.names.forEach(function(e) {
                var t = mi[e];
                i[t.privateName] = i[t.getterName]()
            }),
            this.textTracksJson_ = It(this.tech_),
            this.isReady_ = !1,
            this.tech_.dispose(),
            this.tech_ = !1,
            this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")),
            this.isPosterFromTech_ = !1
        },
        e.tech = function(e) {
            return void 0 === e && p.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"),
            this.tech_
        },
        e.addTechControlsListeners_ = function() {
            this.removeTechControlsListeners_(),
            this.on(this.tech_, "mouseup", this.handleTechClick_),
            this.on(this.tech_, "dblclick", this.handleTechDoubleClick_),
            this.on(this.tech_, "touchstart", this.handleTechTouchStart_),
            this.on(this.tech_, "touchmove", this.handleTechTouchMove_),
            this.on(this.tech_, "touchend", this.handleTechTouchEnd_),
            this.on(this.tech_, "tap", this.handleTechTap_)
        },
        e.removeTechControlsListeners_ = function() {
            this.off(this.tech_, "tap", this.handleTechTap_),
            this.off(this.tech_, "touchstart", this.handleTechTouchStart_),
            this.off(this.tech_, "touchmove", this.handleTechTouchMove_),
            this.off(this.tech_, "touchend", this.handleTechTouchEnd_),
            this.off(this.tech_, "mouseup", this.handleTechClick_),
            this.off(this.tech_, "dblclick", this.handleTechDoubleClick_)
        },
        e.handleTechReady_ = function() {
            this.triggerReady(),
            this.cache_.volume && this.techCall_("setVolume", this.cache_.volume),
            this.handleTechPosterChange_(),
            this.handleTechDurationChange_()
        },
        e.handleTechLoadStart_ = function() {
            this.removeClass("vjs-ended"),
            this.removeClass("vjs-seeking"),
            this.error(null),
            this.handleTechDurationChange_(),
            this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")),
            this.manualAutoplay_(this.autoplay())
        },
        e.manualAutoplay_ = function(t) {
            var n = this;
            if (this.tech_ && "string" == typeof t) {
                var e, i = function() {
                    var e = n.muted();
                    n.muted(!0);
                    function t() {
                        n.muted(e)
                    }
                    n.playTerminatedQueue_.push(t);
                    var i = n.play();
                    if (wt(i)) return i.
                    catch(t)
                };
                if ("any" === t && !0 !== this.muted() ? wt(e = this.play()) && (e = e.
                catch(i)) : e = "muted" === t && !0 !== this.muted() ? i() : this.play(), wt(e)) return e.then(function() {
                    n.trigger({
                        type: "autoplay-success",
                        autoplay: t
                    })
                }).
                catch(function(e) {
                    n.trigger({
                        type: "autoplay-failure",
                        autoplay: t
                    })
                })
            }
        },
        e.updateSourceCaches_ = function(e) {
            void 0 === e && (e = "");
            var t = e,
            i = "";
            "string" != typeof t && (t = e.src, i = e.type),
            this.cache_.source = this.cache_.source || {},
            this.cache_.sources = this.cache_.sources || [],
            t && !i && (i = function(e, t) {
                if (!t) return "";
                if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
                var i = e.cache_.sources.filter(function(e) {
                    return e.src === t
                });
                if (i.length) return i[0].type;
                for (var n = e.$$("source"), r = 0; r < n.length; r++) {
                    var s = n[r];
                    if (s.type && s.src && s.src === t) return s.type
                }
                return rn(t)
            } (this, t)),
            this.cache_.source = Ne({},
            e, {
                src: t,
                type: i
            });
            for (var n = this.cache_.sources.filter(function(e) {
                return e.src && e.src === t
            }), r = [], s = this.$$("source"), a = [], o = 0; o < s.length; o++) {
                var u = P(s[o]);
                r.push(u),
                u.src && u.src === t && a.push(u.src)
            }
            a.length && !n.length ? this.cache_.sources = r: n.length || (this.cache_.sources = [this.cache_.source]),
            this.cache_.src = t
        },
        e.handleTechSourceset_ = function(e) {
            var i = this;
            if (!this.changingSrc_) {
                var t = function(e) {
                    return i.updateSourceCaches_(e)
                },
                n = this.currentSource().src,
                r = e.src;
                n && !/^blob:/.test(n) && /^blob:/.test(r) && (this.lastSource_ && (this.lastSource_.tech === r || this.lastSource_.player === n) || (t = function() {})),
                t(r),
                e.src || this.tech_.any(["sourceset", "loadstart"],
                function(e) {
                    if ("sourceset" !== e.type) {
                        var t = i.techGet("currentSrc");
                        i.lastSource_.tech = t,
                        i.updateSourceCaches_(t)
                    }
                })
            }
            this.lastSource_ = {
                player: this.currentSource().src,
                tech: e.src
            },
            this.trigger({
                src: e.src,
                type: "sourceset"
            })
        },
        e.hasStarted = function(e) {
            if (void 0 === e) return this.hasStarted_;
            e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
        },
        e.handleTechPlay_ = function() {
            this.removeClass("vjs-ended"),
            this.removeClass("vjs-paused"),
            this.addClass("vjs-playing"),
            this.hasStarted(!0),
            this.trigger("play")
        },
        e.handleTechRateChange_ = function() {
            0 < this.tech_.playbackRate() && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function(e) {
                return e.callback(e.event)
            }), this.queuedCallbacks_ = []),
            this.cache_.lastPlaybackRate = this.tech_.playbackRate(),
            this.trigger("ratechange")
        },
        e.handleTechWaiting_ = function() {
            var t = this;
            this.addClass("vjs-waiting"),
            this.trigger("waiting");
            var i = this.currentTime();
            this.on("timeupdate",
            function e() {
                i !== t.currentTime() && (t.removeClass("vjs-waiting"), t.off("timeupdate", e))
            })
        },
        e.handleTechCanPlay_ = function() {
            this.removeClass("vjs-waiting"),
            this.trigger("canplay")
        },
        e.handleTechCanPlayThrough_ = function() {
            this.removeClass("vjs-waiting"),
            this.trigger("canplaythrough")
        },
        e.handleTechPlaying_ = function() {
            this.removeClass("vjs-waiting"),
            this.trigger("playing")
        },
        e.handleTechSeeking_ = function() {
            this.addClass("vjs-seeking"),
            this.trigger("seeking")
        },
        e.handleTechSeeked_ = function() {
            this.removeClass("vjs-seeking"),
            this.removeClass("vjs-ended"),
            this.trigger("seeked")
        },
        e.handleTechFirstPlay_ = function() {
            this.options_.starttime && (p.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)),
            this.addClass("vjs-has-started"),
            this.trigger("firstplay")
        },
        e.handleTechPause_ = function() {
            this.removeClass("vjs-playing"),
            this.addClass("vjs-paused"),
            this.trigger("pause")
        },
        e.handleTechEnded_ = function() {
            this.addClass("vjs-ended"),
            this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(),
            this.trigger("ended")
        },
        e.handleTechDurationChange_ = function() {
            this.duration(this.techGet_("duration"))
        },
        e.handleTechClick_ = function(e) {
            W(e) && this.controls_ && (this.paused() ? xt(this.play()) : this.pause())
        },
        e.handleTechDoubleClick_ = function(t) {
            this.controls_ && (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"),
            function(e) {
                return e.contains(t.target)
            }) || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, t) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()))
        },
        e.handleTechTap_ = function() {
            this.userActive(!this.userActive())
        },
        e.handleTechTouchStart_ = function() {
            this.userWasActive = this.userActive()
        },
        e.handleTechTouchMove_ = function() {
            this.userWasActive && this.reportUserActivity()
        },
        e.handleTechTouchEnd_ = function(e) {
            e.preventDefault()
        },
        e.handleStageClick_ = function() {
            this.reportUserActivity()
        },
        e.toggleFullscreenClass_ = function() {
            this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
        },
        e.documentFullscreenChange_ = function(e) {
            var t = e.target.player;
            if (!t || t === this) {
                var i = this.el(),
                n = h[this.fsApi_.fullscreenElement] === i; ! n && i.matches ? n = i.matches(":" + this.fsApi_.fullscreen) : !n && i.msMatchesSelector && (n = i.msMatchesSelector(":" + this.fsApi_.fullscreen)),
                this.isFullscreen(n)
            }
        },
        e.handleTechFullscreenChange_ = function(e, t) {
            t && (t.nativeIOSFullscreen && this.toggleClass("vjs-ios-native-fs"), this.isFullscreen(t.isFullscreen))
        },
        e.handleTechFullscreenError_ = function(e, t) {
            this.trigger("fullscreenerror", t)
        },
        e.togglePictureInPictureClass_ = function() {
            this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture")
        },
        e.handleTechEnterPictureInPicture_ = function(e) {
            this.isInPictureInPicture(!0)
        },
        e.handleTechLeavePictureInPicture_ = function(e) {
            this.isInPictureInPicture(!1)
        },
        e.handleTechError_ = function() {
            var e = this.tech_.error();
            this.error(e)
        },
        e.handleTechTextData_ = function(e, t) {
            var i = null;
            1 < arguments.length && (i = t),
            this.trigger("textdata", i)
        },
        e.getCache = function() {
            return this.cache_
        },
        e.resetCache_ = function() {
            this.cache_ = {
                currentTime: 0,
                initTime: 0,
                inactivityTimeout: this.options_.inactivityTimeout,
                duration: NaN,
                lastVolume: 1,
                lastPlaybackRate: this.defaultPlaybackRate(),
                media: null,
                src: "",
                source: {},
                sources: [],
                volume: 1
            }
        },
        e.techCall_ = function(e, t) {
            this.ready(function() {
                if (e in Zi) return function(e, t, i, n) {
                    return t[i](e.reduce(tn(i), n))
                } (this.middleware_, this.tech_, e, t);
                if (e in en) return Qi(this.middleware_, this.tech_, e, t);
                try {
                    this.tech_ && this.tech_[e](t)
                } catch(e) {
                    throw p(e),
                    e
                }
            },
            !0)
        },
        e.techGet_ = function(t) {
            if (this.tech_ && this.tech_.isReady_) {
                if (t in Ji) return function(e, t, i) {
                    return e.reduceRight(tn(i), t[i]())
                } (this.middleware_, this.tech_, t);
                if (t in en) return Qi(this.middleware_, this.tech_, t);
                try {
                    return this.tech_[t]()
                } catch(e) {
                    if (void 0 === this.tech_[t]) throw p("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e),
                    e;
                    if ("TypeError" === e.name) throw p("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e),
                    this.tech_.isReady_ = !1,
                    e;
                    throw p(e),
                    e
                }
            }
        },
        e.play = function() {
            var t = this,
            e = this.options_.Promise || y.Promise;
            return e ? new e(function(e) {
                t.play_(e)
            }) : this.play_()
        },
        e.play_ = function(e) {
            var t = this;
            void 0 === e && (e = xt),
            this.playCallbacks_.push(e);
            var i = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()));
            if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_ = null), !this.isReady_ || !i) return this.waitToPlay_ = function(e) {
                t.play_()
            },
            this.one(["ready", "loadstart"], this.waitToPlay_),
            void(i || !ht && !ct || this.load());
            var n = this.techGet_("play");
            null === n ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(n)
        },
        e.runPlayTerminatedQueue_ = function() {
            var e = this.playTerminatedQueue_.slice(0);
            this.playTerminatedQueue_ = [],
            e.forEach(function(e) {
                e()
            })
        },
        e.runPlayCallbacks_ = function(t) {
            var e = this.playCallbacks_.slice(0);
            this.playCallbacks_ = [],
            this.playTerminatedQueue_ = [],
            e.forEach(function(e) {
                e(t)
            })
        },
        e.pause = function() {
            this.techCall_("pause")
        },
        e.paused = function() {
            return ! 1 !== this.techGet_("paused")
        },
        e.played = function() {
            return this.techGet_("played") || mt(0, 0)
        },
        e.scrubbing = function(e) {
            if ("undefined" == typeof e) return this.scrubbing_;
            this.scrubbing_ = !!e,
            this.techCall_("setScrubbing", this.scrubbing_),
            e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
        },
        e.currentTime = function(e) {
            return "undefined" != typeof e ? (e < 0 && (e = 0), this.isReady_ && !this.changingSrc_ && this.tech_ && this.tech_.isReady_ ? (this.techCall_("setCurrentTime", e), void(this.cache_.initTime = 0)) : (this.cache_.initTime = e, this.off("canplay", this.applyInitTime_), void this.one("canplay", this.applyInitTime_))) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
        },
        e.applyInitTime_ = function() {
            this.currentTime(this.cache_.initTime)
        },
        e.duration = function(e) {
            if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration: NaN; (e = parseFloat(e)) < 0 && (e = 1 / 0),
            e !== this.cache_.duration && ((this.cache_.duration = e) === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), isNaN(e) || this.trigger("durationchange"))
        },
        e.remainingTime = function() {
            return this.duration() - this.currentTime()
        },
        e.remainingTimeDisplay = function() {
            return Math.floor(this.duration()) - Math.floor(this.currentTime())
        },
        e.buffered = function() {
            var e = this.techGet_("buffered");
            return e && e.length || (e = mt(0, 0)),
            e
        },
        e.bufferedPercent = function() {
            return gt(this.buffered(), this.duration())
        },
        e.bufferedEnd = function() {
            var e = this.buffered(),
            t = this.duration(),
            i = e.end(e.length - 1);
            return t < i && (i = t),
            i
        },
        e.volume = function(e) {
            var t;
            return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), void(0 < t && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t)
        },
        e.muted = function(e) {
            if (void 0 === e) return this.techGet_("muted") || !1;
            this.techCall_("setMuted", e)
        },
        e.defaultMuted = function(e) {
            return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1
        },
        e.lastVolume_ = function(e) {
            if (void 0 === e || 0 === e) return this.cache_.lastVolume;
            this.cache_.lastVolume = e
        },
        e.supportsFullScreen = function() {
            return this.techGet_("supportsFullScreen") || !1
        },
        e.isFullscreen = function(e) {
            if (void 0 === e) return this.isFullscreen_;
            var t = this.isFullscreen_;
            return this.isFullscreen_ = Boolean(e),
            this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger("fullscreenchange"),
            void this.toggleFullscreenClass_()
        },
        e.requestFullscreen = function(a) {
            var e = this.options_.Promise || y.Promise;
            if (e) {
                var o = this;
                return new e(function(e, i) {
                    function n() {
                        o.off("fullscreenerror", r),
                        o.off("fullscreenchange", t)
                    }
                    function t() {
                        n(),
                        e()
                    }
                    function r(e, t) {
                        n(),
                        i(t)
                    }
                    o.one("fullscreenchange", t),
                    o.one("fullscreenerror", r);
                    var s = o.requestFullscreenHelper_(a);
                    if (s) return s.then(n, n),
                    s
                })
            }
            return this.requestFullscreenHelper_()
        },
        e.requestFullscreenHelper_ = function(e) {
            var t, i = this;
            if (this.fsApi_.prefixed || (t = this.options_.fullscreen && this.options_.fullscreen.options || {},
            void 0 !== e && (t = e)), this.fsApi_.requestFullscreen) {
                var n = this.el_[this.fsApi_.requestFullscreen](t);
                return n && n.then(function() {
                    return i.isFullscreen(!0)
                },
                function() {
                    return i.isFullscreen(!1)
                }),
                n
            }
            this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : this.enterFullWindow()
        },
        e.exitFullscreen = function() {
            var e = this.options_.Promise || y.Promise;
            if (e) {
                var a = this;
                return new e(function(e, i) {
                    function n() {
                        a.off("fullscreenerror", r),
                        a.off("fullscreenchange", t)
                    }
                    function t() {
                        n(),
                        e()
                    }
                    function r(e, t) {
                        n(),
                        i(t)
                    }
                    a.one("fullscreenchange", t),
                    a.one("fullscreenerror", r);
                    var s = a.exitFullscreenHelper_();
                    if (s) return s.then(n, n),
                    s
                })
            }
            return this.exitFullscreenHelper_()
        },
        e.exitFullscreenHelper_ = function() {
            var e = this;
            if (this.fsApi_.requestFullscreen) {
                var t = h[this.fsApi_.exitFullscreen]();
                return t && t.then(function() {
                    return e.isFullscreen(!1)
                }),
                t
            }
            this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : this.exitFullWindow()
        },
        e.enterFullWindow = function() {
            this.isFullscreen(!0),
            this.isFullWindow = !0,
            this.docOrigOverflow = h.documentElement.style.overflow,
            he(h, "keydown", this.boundFullWindowOnEscKey_),
            h.documentElement.style.overflow = "hidden",
            w(h.body, "vjs-full-window"),
            this.trigger("enterFullWindow")
        },
        e.fullWindowOnEscKey = function(e) {
            Lt.isEventKey(e, "Esc") && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
        },
        e.exitFullWindow = function() {
            this.isFullscreen(!1),
            this.isFullWindow = !1,
            de(h, "keydown", this.boundFullWindowOnEscKey_),
            h.documentElement.style.overflow = this.docOrigOverflow,
            x(h.body, "vjs-full-window"),
            this.trigger("exitFullWindow")
        },
        e.disablePictureInPicture = function(e) {
            if (void 0 === e) return this.techGet_("disablePictureInPicture");
            this.techCall_("setDisablePictureInPicture", e),
            this.options_.disablePictureInPicture = e,
            this.trigger("disablepictureinpicturechanged")
        },
        e.isInPictureInPicture = function(e) {
            return void 0 !== e ? (this.isInPictureInPicture_ = !!e, void this.togglePictureInPictureClass_()) : !!this.isInPictureInPicture_
        },
        e.requestPictureInPicture = function() {
            if ("pictureInPictureEnabled" in h && !1 === this.disablePictureInPicture()) return this.techGet_("requestPictureInPicture")
        },
        e.exitPictureInPicture = function() {
            if ("pictureInPictureEnabled" in h) return h.exitPictureInPicture()
        },
        e.handleKeyDown = function(e) {
            var t = this.options_.userActions;
            if (t && t.hotkeys) { !
                function(e) {
                    var t = e.tagName.toLowerCase();
                    if (e.isContentEditable) return ! 0;
                    if ("input" === t) return - 1 === ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(e.type);
                    return - 1 !== ["textarea"].indexOf(t)
                } (this.el_.ownerDocument.activeElement) && ("function" == typeof t.hotkeys ? t.hotkeys.call(this, e) : this.handleHotkeys(e))
            }
        },
        e.handleHotkeys = function(e) {
            var t = this.options_.userActions ? this.options_.userActions.hotkeys: {},
            i = t.fullscreenKey,
            n = void 0 === i ?
            function(e) {
                return Lt.isEventKey(e, "f")
            }: i,
            r = t.muteKey,
            s = void 0 === r ?
            function(e) {
                return Lt.isEventKey(e, "m")
            }: r,
            a = t.playPauseKey,
            o = void 0 === a ?
            function(e) {
                return Lt.isEventKey(e, "k") || Lt.isEventKey(e, "Space")
            }: a;
            if (n.call(this, e)) {
                e.preventDefault(),
                e.stopPropagation();
                var u = je.getComponent("FullscreenToggle"); ! 1 !== h[this.fsApi_.fullscreenEnabled] && u.prototype.handleClick.call(this, e)
            } else if (s.call(this, e)) {
                e.preventDefault(),
                e.stopPropagation(),
                je.getComponent("MuteToggle").prototype.handleClick.call(this, e)
            } else if (o.call(this, e)) {
                e.preventDefault(),
                e.stopPropagation(),
                je.getComponent("PlayToggle").prototype.handleClick.call(this, e)
            }
        },
        e.canPlayType = function(e) {
            for (var t, i = 0,
            n = this.options_.techOrder; i < n.length; i++) {
                var r = n[i],
                s = Gi.getTech(r);
                if (s = s || je.getComponent(r)) {
                    if (s.isSupported() && (t = s.canPlayType(e))) return t
                } else p.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
            }
            return ""
        },
        e.selectSource = function(e) {
            function t(e, i, n) {
                var r;
                return e.some(function(t) {
                    return i.some(function(e) {
                        if (r = n(t, e)) return ! 0
                    })
                }),
                r
            }
            function i(e, t) {
                var i = e[0];
                if (e[1].canPlaySource(t, r.options_[i.toLowerCase()])) return {
                    source: t,
                    tech: i
                }
            }
            var n, r = this,
            s = this.options_.techOrder.map(function(e) {
                return [e, Gi.getTech(e)]
            }).filter(function(e) {
                var t = e[0],
                i = e[1];
                return i ? i.isSupported() : (p.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
            });
            return (this.options_.sourceOrder ? t(e, s, (n = i,
            function(e, t) {
                return n(t, e)
            })) : t(s, e, i)) || !1
        },
        e.src = function(e) {
            var i = this;
            if ("undefined" == typeof e) return this.cache_.src || "";
            var n = function t(e) {
                if (Array.isArray(e)) {
                    var i = [];
                    e.forEach(function(e) {
                        e = t(e),
                        Array.isArray(e) ? i = i.concat(e) : o(e) && i.push(e)
                    }),
                    e = i
                } else e = "string" == typeof e && e.trim() ? [an({
                    src: e
                })] : o(e) && "string" == typeof e.src && e.src && e.src.trim() ? [an(e)] : [];
                return e
            } (e);
            n.length ? (this.changingSrc_ = !0, this.cache_.sources = n, this.updateSourceCaches_(n[0]), $i(this, n[0],
            function(e, t) {
                if (i.middleware_ = t, i.cache_.sources = n, i.updateSourceCaches_(e), i.src_(e)) return 1 < n.length ? i.src(n.slice(1)) : (i.changingSrc_ = !1, i.setTimeout(function() {
                    this.error({
                        code: 4,
                        message: this.localize(this.options_.notSupportedMessage)
                    })
                },
                0), void i.triggerReady()); !
                function(e, t) {
                    e.forEach(function(e) {
                        return e.setTech && e.setTech(t)
                    })
                } (t, i.tech_)
            })) : this.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.localize(this.options_.notSupportedMessage)
                })
            },
            0)
        },
        e.src_ = function(e) {
            var t = this,
            i = this.selectSource([e]);
            return ! i || (function(e, t) {
                return De(e) === De(t)
            } (i.tech, this.techName_) ? this.ready(function() {
                this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src),
                this.changingSrc_ = !1
            },
            !0) : (this.changingSrc_ = !0, this.loadTech_(i.tech, i.source), this.tech_.ready(function() {
                t.changingSrc_ = !1
            })), !1)
        },
        e.load = function() {
            this.techCall_("load")
        },
        e.reset = function() {
            var e = this,
            t = this.options_.Promise || y.Promise;
            this.paused() || !t ? this.doReset_() : xt(this.play().then(function() {
                return e.doReset_()
            }))
        },
        e.doReset_ = function() {
            this.tech_ && this.tech_.clearTracks("text"),
            this.resetCache_(),
            this.poster(""),
            this.loadTech_(this.options_.techOrder[0], null),
            this.techCall_("reset"),
            this.resetControlBarUI_(),
            xe(this) && this.trigger("playerreset")
        },
        e.resetControlBarUI_ = function() {
            this.resetProgressBar_(),
            this.resetPlaybackRate_(),
            this.resetVolumeBar_()
        },
        e.resetProgressBar_ = function() {
            this.currentTime(0);
            var e = this.controlBar,
            t = e.durationDisplay,
            i = e.remainingTimeDisplay;
            t && t.updateContent(),
            i && i.updateContent()
        },
        e.resetPlaybackRate_ = function() {
            this.playbackRate(this.defaultPlaybackRate()),
            this.handleTechRateChange_()
        },
        e.resetVolumeBar_ = function() {
            this.volume(1),
            this.trigger("volumechange")
        },
        e.currentSources = function() {
            var e = this.currentSource(),
            t = [];
            return 0 !== Object.keys(e).length && t.push(e),
            this.cache_.sources || t
        },
        e.currentSource = function() {
            return this.cache_.source || {}
        },
        e.currentSrc = function() {
            return this.currentSource() && this.currentSource().src || ""
        },
        e.currentType = function() {
            return this.currentSource() && this.currentSource().type || ""
        },
        e.preload = function(e) {
            return void 0 !== e ? (this.techCall_("setPreload", e), void(this.options_.preload = e)) : this.techGet_("preload")
        },
        e.autoplay = function(e) {
            if (void 0 === e) return this.options_.autoplay || !1;
            var t;
            "string" == typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e, this.manualAutoplay_(e), t = !1) : this.options_.autoplay = !!e,
            t = "undefined" == typeof t ? this.options_.autoplay: t,
            this.tech_ && this.techCall_("setAutoplay", t)
        },
        e.playsinline = function(e) {
            return void 0 !== e ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, this) : this.techGet_("playsinline")
        },
        e.loop = function(e) {
            return void 0 !== e ? (this.techCall_("setLoop", e), void(this.options_.loop = e)) : this.techGet_("loop")
        },
        e.poster = function(e) {
            if (void 0 === e) return this.poster_; (e = e || "") !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
        },
        e.handleTechPosterChange_ = function() {
            if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                var e = this.tech_.poster() || "";
                e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
            }
        },
        e.controls = function(e) {
            if (void 0 === e) return !! this.controls_;
            e = !!e,
            this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
        },
        e.usingNativeControls = function(e) {
            if (void 0 === e) return !! this.usingNativeControls_;
            e = !!e,
            this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
        },
        e.error = function(e) {
            if (void 0 === e) return this.error_ || null;
            if (this.options_.suppressNotSupportedError && e && 4 === e.code) {
                var t = function() {
                    this.error(e)
                };
                return this.options_.suppressNotSupportedError = !1,
                this.any(["click", "touchstart"], t),
                void this.one("loadstart",
                function() {
                    this.off(["click", "touchstart"], t)
                })
            }
            if (null === e) return this.error_ = e,
            this.removeClass("vjs-error"),
            void(this.errorDisplay && this.errorDisplay.close());
            this.error_ = new kt(e),
            this.addClass("vjs-error"),
            p.error("(CODE:" + this.error_.code + " " + kt.errorTypes[this.error_.code] + ")", this.error_.message, this.error_),
            this.trigger("error")
        },
        e.reportUserActivity = function(e) {
            this.userActivity_ = !0
        },
        e.userActive = function(e) {
            if (void 0 === e) return this.userActive_;
            if ((e = !!e) !== this.userActive_) {
                if (this.userActive_ = e, this.userActive_) return this.userActivity_ = !0,
                this.removeClass("vjs-user-inactive"),
                this.addClass("vjs-user-active"),
                void this.trigger("useractive");
                this.tech_ && this.tech_.one("mousemove",
                function(e) {
                    e.stopPropagation(),
                    e.preventDefault()
                }),
                this.userActivity_ = !1,
                this.removeClass("vjs-user-active"),
                this.addClass("vjs-user-inactive"),
                this.trigger("userinactive")
            }
        },
        e.listenForUserActivity_ = function() {
            function e(e) {
                r(),
                this.clearInterval(t)
            }
            var t, i, n, r = ge(this, this.reportUserActivity);
            this.on("mousedown",
            function() {
                r(),
                this.clearInterval(t),
                t = this.setInterval(r, 250)
            }),
            this.on("mousemove",
            function(e) {
                e.screenX === i && e.screenY === n || (i = e.screenX, n = e.screenY, r())
            }),
            this.on("mouseup", e),
            this.on("mouseleave", e);
            var s, a = this.getChild("controlBar"); ! a || ct || Qe || (a.on("mouseenter",
            function(e) {
                this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout,
                this.player().options_.inactivityTimeout = 0
            }), a.on("mouseleave",
            function(e) {
                this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout
            })),
            this.on("keydown", r),
            this.on("keyup", r),
            this.setInterval(function() {
                if (this.userActivity_) {
                    this.userActivity_ = !1,
                    this.userActive(!0),
                    this.clearTimeout(s);
                    var e = this.options_.inactivityTimeout;
                    e <= 0 || (s = this.setTimeout(function() {
                        this.userActivity_ || this.userActive(!1)
                    },
                    e))
                }
            },
            250)
        },
        e.playbackRate = function(e) {
            if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
            this.techCall_("setPlaybackRate", e)
        },
        e.defaultPlaybackRate = function(e) {
            return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
        },
        e.isAudio = function(e) {
            if (void 0 === e) return !! this.isAudio_;
            this.isAudio_ = !!e
        },
        e.addTextTrack = function(e, t, i) {
            if (this.tech_) return this.tech_.addTextTrack(e, t, i)
        },
        e.addRemoteTextTrack = function(e, t) {
            if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
        },
        e.removeRemoteTextTrack = function(e) {
            void 0 === e && (e = {});
            var t = e.track;
            if (t = t || e, this.tech_) return this.tech_.removeRemoteTextTrack(t)
        },
        e.getVideoPlaybackQuality = function() {
            return this.techGet_("getVideoPlaybackQuality")
        },
        e.videoWidth = function() {
            return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
        },
        e.videoHeight = function() {
            return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
        },
        e.language = function(e) {
            if (void 0 === e) return this.language_;
            this.language_ = String(e).toLowerCase()
        },
        e.languages = function() {
            return Ne(l.prototype.options_.languages, this.languages_)
        },
        e.toJSON = function() {
            var e = Ne(this.options_),
            t = e.tracks;
            e.tracks = [];
            for (var i = 0; i < t.length; i++) {
                var n = t[i]; (n = Ne(n)).player = void 0,
                e.tracks[i] = n
            }
            return e
        },
        e.createModal = function(e, t) {
            var i = this; (t = t || {}).content = e || "";
            var n = new Dt(this, t);
            return this.addChild(n),
            n.on("dispose",
            function() {
                i.removeChild(n)
            }),
            n.open(),
            n
        },
        e.updateCurrentBreakpoint_ = function() {
            if (this.responsive()) for (var e = this.currentBreakpoint(), t = this.currentWidth(), i = 0; i < zr.length; i++) {
                var n = zr[i];
                if (t <= this.breakpoints_[n]) {
                    if (e === n) return;
                    e && this.removeClass(Gr[e]),
                    this.addClass(Gr[n]),
                    this.breakpoint_ = n;
                    break
                }
            }
        },
        e.removeCurrentBreakpoint_ = function() {
            var e = this.currentBreakpointClass();
            this.breakpoint_ = "",
            e && this.removeClass(e)
        },
        e.breakpoints = function(e) {
            return void 0 === e || (this.breakpoint_ = "", this.breakpoints_ = m({},
            Xr, e), this.updateCurrentBreakpoint_()),
            m(this.breakpoints_)
        },
        e.responsive = function(e) {
            return void 0 === e ? this.responsive_: (e = Boolean(e)) !== this.responsive_ ? ((this.responsive_ = e) ? (this.on("playerresize", this.updateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.updateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e) : void 0
        },
        e.currentBreakpoint = function() {
            return this.breakpoint_
        },
        e.currentBreakpointClass = function() {
            return Gr[this.breakpoint_] || ""
        },
        e.loadMedia = function(e, t) {
            var i = this;
            if (e && "object" == typeof e) {
                this.reset(),
                this.cache_.media = Ne(e);
                var n = this.cache_.media,
                r = n.artwork,
                s = n.poster,
                a = n.src,
                o = n.textTracks; ! r && s && (this.cache_.media.artwork = [{
                    src: s,
                    type: rn(s)
                }]),
                a && this.src(a),
                s && this.poster(s),
                Array.isArray(o) && o.forEach(function(e) {
                    return i.addRemoteTextTrack(e, !1)
                }),
                this.ready(t)
            }
        },
        e.getMedia = function() {
            if (this.cache_.media) return Ne(this.cache_.media);
            var e = this.poster(),
            t = {
                src: this.currentSources(),
                textTracks: Array.prototype.map.call(this.remoteTextTracks(),
                function(e) {
                    return {
                        kind: e.kind,
                        label: e.label,
                        language: e.language,
                        src: e.src
                    }
                })
            };
            return e && (t.poster = e, t.artwork = [{
                src: t.poster,
                type: rn(t.poster)
            }]),
            t
        },
        l.getTagSettings = function(e) {
            var t = {
                sources: [],
                tracks: []
            },
            i = P(e),
            n = i["data-setup"];
            if (E(e, "vjs-fill") && (i.fill = !0), E(e, "vjs-fluid") && (i.fluid = !0), null !== n) {
                var r = Et(n || "{}"),
                s = r[0],
                a = r[1];
                s && p.error(s),
                m(i, a)
            }
            if (m(t, i), e.hasChildNodes()) for (var o = e.childNodes,
            u = 0,
            l = o.length; u < l; u++) {
                var c = o[u],
                h = c.nodeName.toLowerCase();
                "source" === h ? t.sources.push(P(c)) : "track" === h && t.tracks.push(P(c))
            }
            return t
        },
        e.flexNotSupported_ = function() {
            var e = h.createElement("i");
            return ! ("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style)
        },
        e.debug = function(e) {
            if (void 0 === e) return this.debugEnabled_;
            e ? (this.trigger("debugon"), this.previousLogLevel_ = this.log.level, this.log.level("debug"), this.debugEnabled_ = !0) : (this.trigger("debugoff"), this.log.level(this.previousLogLevel_), this.previousLogLevel_ = void 0, this.debugEnabled_ = !1)
        },
        l
    } (je);
    mi.names.forEach(function(e) {
        var t = mi[e];
        Kr.prototype[t.getterName] = function() {
            return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName])
        }
    }),
    Kr.prototype.crossorigin = Kr.prototype.crossOrigin,
    Kr.players = {};
    var Yr = y.navigator;
    Kr.prototype.options_ = {
        techOrder: Gi.defaultTechOrder_,
        html5: {},
        flash: {},
        inactivityTimeout: 2e3,
        playbackRates: [],
        liveui: !1,
        children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
        language: Yr && (Yr.languages && Yr.languages[0] || Yr.userLanguage || Yr.language) || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this media.",
        fullscreen: {
            options: {
                navigationUI: "hide"
            }
        },
        breakpoints: {},
        responsive: !1
    },
    ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(e) {
        Kr.prototype[e] = function() {
            return this.techGet_(e)
        }
    }),
    qr.forEach(function(e) {
        Kr.prototype["handleTech" + De(e) + "_"] = function() {
            return this.trigger(e)
        }
    }),
    je.registerComponent("Player", Kr);
    var $r = t(function(i) {
        function n(e, t) {
            return i.exports = n = Object.setPrototypeOf ||
            function(e, t) {
                return e.__proto__ = t,
                e
            },
            n(e, t)
        }
        i.exports = n
    });
    function Qr(e) {
        return as.hasOwnProperty(e)
    }
    function Jr(e) {
        return Qr(e) ? as[e] : void 0
    }
    function Zr(e, t) {
        e[ss] = e[ss] || {},
        e[ss][t] = !0
    }
    function es(e, t, i) {
        var n = (i ? "before": "") + "pluginsetup";
        e.trigger(n, t),
        e.trigger(n + ":" + t.name, t)
    }
    function ts(r, s) {
        return s.prototype.name = r,
        function() {
            es(this, {
                name: r,
                plugin: s,
                instance: null
            },
            !0);
            for (var e = arguments.length,
            t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var n = ns(s, [this].concat(t));
            return this[r] = function() {
                return n
            },
            es(this, n.getEventHash()),
            n
        }
    }
    var is = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return ! 1;
        if (Reflect.construct.sham) return ! 1;
        if ("function" == typeof Proxy) return ! 0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [],
            function() {})),
            !0
        } catch(e) {
            return ! 1
        }
    },
    ns = t(function(n) {
        function r(e, t, i) {
            return is() ? n.exports = r = Reflect.construct: n.exports = r = function(e, t, i) {
                var n = [null];
                n.push.apply(n, t);
                var r = new(Function.bind.apply(e, n));
                return i && $r(r, i.prototype),
                r
            },
            r.apply(null, arguments)
        }
        n.exports = r
    }),
    rs = "plugin",
    ss = "activePlugins_",
    as = {},
    os = function() {
        function i(e) {
            if (this.constructor === i) throw new Error("Plugin must be sub-classed; not directly instantiated.");
            this.player = e,
            this.log || (this.log = this.player.log.createLogger(this.name)),
            Ie(this),
            delete this.trigger,
            Le(this, this.constructor.defaultState),
            Zr(e, this.name),
            this.dispose = ge(this, this.dispose),
            e.on("dispose", this.dispose)
        }
        var e = i.prototype;
        return e.version = function() {
            return this.constructor.VERSION
        },
        e.getEventHash = function(e) {
            return void 0 === e && (e = {}),
            e.name = this.name,
            e.plugin = this.constructor,
            e.instance = this,
            e
        },
        e.trigger = function(e, t) {
            return void 0 === t && (t = {}),
            pe(this.eventBusEl_, e, this.getEventHash(t))
        },
        e.handleStateChanged = function(e) {},
        e.dispose = function() {
            var e = this.name,
            t = this.player;
            this.trigger("dispose"),
            this.off(),
            t.off("dispose", this.dispose),
            t[ss][e] = !1,
            this.player = this.state = null,
            t[e] = ts(e, as[e])
        },
        i.isBasic = function(e) {
            var t = "string" == typeof e ? Jr(e) : e;
            return "function" == typeof t && !i.prototype.isPrototypeOf(t.prototype)
        },
        i.registerPlugin = function(e, t) {
            if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + typeof e + ".");
            if (Qr(e)) p.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!');
            else if (Kr.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
            if ("function" != typeof t) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + typeof t + ".");
            return as[e] = t,
            e !== rs && (i.isBasic(t) ? Kr.prototype[e] = function(t, i) {
                function n() {
                    es(this, {
                        name: t,
                        plugin: i,
                        instance: null
                    },
                    !0);
                    var e = i.apply(this, arguments);
                    return Zr(this, t),
                    es(this, {
                        name: t,
                        plugin: i,
                        instance: e
                    }),
                    e
                }
                return Object.keys(i).forEach(function(e) {
                    n[e] = i[e]
                }),
                n
            } (e, t) : Kr.prototype[e] = ts(e, t)),
            t
        },
        i.deregisterPlugin = function(e) {
            if (e === rs) throw new Error("Cannot de-register base plugin.");
            Qr(e) && (delete as[e], delete Kr.prototype[e])
        },
        i.getPlugins = function(e) {
            var i;
            return void 0 === e && (e = Object.keys(as)),
            e.forEach(function(e) {
                var t = Jr(e);
                t && ((i = i || {})[e] = t)
            }),
            i
        },
        i.getPluginVersion = function(e) {
            var t = Jr(e);
            return t && t.VERSION || ""
        },
        i
    } ();
    os.getPlugin = Jr,
    os.BASE_PLUGIN_NAME = rs,
    os.registerPlugin(rs, os),
    Kr.prototype.usingPlugin = function(e) {
        return !! this[ss] && !0 === this[ss][e]
    },
    Kr.prototype.hasPlugin = function(e) {
        return !! Qr(e)
    };
    var us = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && $r(e, t)
    },
    ls = function(e) {
        return 0 === e.indexOf("#") ? e.slice(1) : e
    };
    function cs(e, i, t) {
        var n = cs.getPlayer(e);
        if (n) return i && p.warn('Player "' + e + '" is already initialised. Options will not be applied.'),
        t && n.ready(t),
        n;
        var r = "string" == typeof e ? G("#" + ls(e)) : e;
        if (!_(r)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        r.ownerDocument.defaultView && r.ownerDocument.body.contains(r) || p.warn("The element supplied is not included in the DOM"),
        i = i || {},
        cs.hooks("beforesetup").forEach(function(e) {
            var t = e(r, Ne(i));
            o(t) && !Array.isArray(t) ? i = Ne(i, t) : p.error("please return an object in beforesetup hooks")
        });
        var s = je.getComponent("Player");
        return n = new s(r, i, t),
        cs.hooks("setup").forEach(function(e) {
            return e(n)
        }),
        n
    }
    if (cs.hooks_ = {},
    cs.hooks = function(e, t) {
        return cs.hooks_[e] = cs.hooks_[e] || [],
        t && (cs.hooks_[e] = cs.hooks_[e].concat(t)),
        cs.hooks_[e]
    },
    cs.hook = function(e, t) {
        cs.hooks(e, t)
    },
    cs.hookOnce = function(i, e) {
        cs.hooks(i, [].concat(e).map(function(t) {
            return function e() {
                return cs.removeHook(i, e),
                t.apply(void 0, arguments)
            }
        }))
    },
    cs.removeHook = function(e, t) {
        var i = cs.hooks(e).indexOf(t);
        return ! (i <= -1) && (cs.hooks_[e] = cs.hooks_[e].slice(), cs.hooks_[e].splice(i, 1), !0)
    },
    !0 !== y.VIDEOJS_NO_DYNAMIC_STYLE && v()) {
        var hs = G(".vjs-styles-defaults");
        if (!hs) {
            hs = Z("vjs-styles-defaults");
            var ds = G("head");
            ds && ds.insertBefore(hs, ds.firstChild),
            ee(hs, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
        }
    }
    Q(1, cs),
    cs.VERSION = d,
    cs.options = Kr.prototype.options_,
    cs.getPlayers = function() {
        return Kr.players
    },
    cs.getPlayer = function(e) {
        var t, i = Kr.players;
        if ("string" == typeof e) {
            var n = ls(e),
            r = i[n];
            if (r) return r;
            t = G("#" + n)
        } else t = e;
        if (_(t)) {
            var s = t,
            a = s.player,
            o = s.playerId;
            if (a || i[o]) return a || i[o]
        }
    },
    cs.getAllPlayers = function() {
        return Object.keys(Kr.players).map(function(e) {
            return Kr.players[e]
        }).filter(Boolean)
    },
    cs.players = Kr.players,
    cs.getComponent = je.getComponent,
    cs.registerComponent = function(e, t) {
        Gi.isTech(t) && p.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),
        je.registerComponent.call(je, e, t)
    },
    cs.getTech = Gi.getTech,
    cs.registerTech = Gi.registerTech,
    cs.use = function(e, t) {
        Xi[e] = Xi[e] || [],
        Xi[e].push(t)
    },
    Object.defineProperty(cs, "middleware", {
        value: {},
        writeable: !1,
        enumerable: !0
    }),
    Object.defineProperty(cs.middleware, "TERMINATOR", {
        value: Yi,
        writeable: !1,
        enumerable: !0
    }),
    cs.browser = dt,
    cs.TOUCH_ENABLED = ot,
    cs.extend = function(e, t) {
        void 0 === t && (t = {});
        var i = function() {
            e.apply(this, arguments)
        },
        n = {};
        for (var r in "object" == typeof t ? (t.constructor !== Object.prototype.constructor && (i = t.constructor), n = t) : "function" == typeof t && (i = t), us(i, e), e && (i.super_ = e), n) n.hasOwnProperty(r) && (i.prototype[r] = n[r]);
        return i
    },
    cs.mergeOptions = Ne,
    cs.bind = ge,
    cs.registerPlugin = os.registerPlugin,
    cs.deregisterPlugin = os.deregisterPlugin,
    cs.plugin = function(e, t) {
        return p.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),
        os.registerPlugin(e, t)
    },
    cs.getPlugins = os.getPlugins,
    cs.getPlugin = os.getPlugin,
    cs.getPluginVersion = os.getPluginVersion,
    cs.addLanguage = function(e, t) {
        var i;
        return e = ("" + e).toLowerCase(),
        cs.options.languages = Ne(cs.options.languages, ((i = {})[e] = t, i)),
        cs.options.languages[e]
    },
    cs.log = p,
    cs.createLogger = f,
    cs.createTimeRange = cs.createTimeRanges = mt,
    cs.formatTime = Sn,
    cs.setFormatTime = function(e) {
        Tn = e
    },
    cs.resetFormatTime = function() {
        Tn = bn
    },
    cs.parseUrl = Bt,
    cs.isCrossOrigin = Ht,
    cs.EventTarget = ye,
    cs.on = he,
    cs.one = fe,
    cs.off = de,
    cs.trigger = pe,
    cs.xhr = ii,
    cs.TextTrack = li,
    cs.AudioTrack = ci,
    cs.VideoTrack = hi,
    ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function(e) {
        cs[e] = function() {
            return p.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"),
            K[e].apply(null, arguments)
        }
    }),
    cs.computedStyle = n,
    cs.dom = K,
    cs.url = Jt,
    cs.defineLazyProperty = Br;
    var ps = t(function(e, t) {
        var i, c, n, r, h;
        i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
        c = /^([^\/?#]*)(.*)$/,
        n = /(?:\/|^)\.(?=\/)/g,
        r = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
        h = {
            buildAbsoluteURL: function(e, t, i) {
                if (i = i || {},
                e = e.trim(), !(t = t.trim())) {
                    if (!i.alwaysNormalize) return e;
                    var n = h.parseURL(e);
                    if (!n) throw new Error("Error trying to parse base URL.");
                    return n.path = h.normalizePath(n.path),
                    h.buildURLFromParts(n)
                }
                var r = h.parseURL(t);
                if (!r) throw new Error("Error trying to parse relative URL.");
                if (r.scheme) return i.alwaysNormalize ? (r.path = h.normalizePath(r.path), h.buildURLFromParts(r)) : t;
                var s = h.parseURL(e);
                if (!s) throw new Error("Error trying to parse base URL.");
                if (!s.netLoc && s.path && "/" !== s.path[0]) {
                    var a = c.exec(s.path);
                    s.netLoc = a[1],
                    s.path = a[2]
                }
                s.netLoc && !s.path && (s.path = "/");
                var o = {
                    scheme: s.scheme,
                    netLoc: r.netLoc,
                    path: null,
                    params: r.params,
                    query: r.query,
                    fragment: r.fragment
                };
                if (!r.netLoc && (o.netLoc = s.netLoc, "/" !== r.path[0])) if (r.path) {
                    var u = s.path,
                    l = u.substring(0, u.lastIndexOf("/") + 1) + r.path;
                    o.path = h.normalizePath(l)
                } else o.path = s.path,
                r.params || (o.params = s.params, r.query || (o.query = s.query));
                return null === o.path && (o.path = i.alwaysNormalize ? h.normalizePath(r.path) : r.path),
                h.buildURLFromParts(o)
            },
            parseURL: function(e) {
                var t = i.exec(e);
                return t ? {
                    scheme: t[1] || "",
                    netLoc: t[2] || "",
                    path: t[3] || "",
                    params: t[4] || "",
                    query: t[5] || "",
                    fragment: t[6] || ""
                }: null
            },
            normalizePath: function(e) {
                for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(r, "")).length;);
                return e.split("").reverse().join("")
            },
            buildURLFromParts: function(e) {
                return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
            }
        },
        e.exports = h
    });
    /*! @name m3u8-parser @version 4.4.0 @license Apache-2.0 */
    function fs() {
        return (fs = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }
    function ms(e, t) {
        e.prototype = Object.create(t.prototype),
        (e.prototype.constructor = e).__proto__ = t
    }
    function gs(e) {
        for (var t, i = e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), n = {},
        r = i.length; r--;)"" !== i[r] && ((t = /([^=]*)=(.*)/.exec(i[r]).slice(1))[0] = t[0].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^['"](.*)['"]$/g, "$1"), n[t[0]] = t[1]);
        return n
    }
    var vs = function() {
        function e() {
            this.listeners = {}
        }
        var t = e.prototype;
        return t.on = function(e, t) {
            this.listeners[e] || (this.listeners[e] = []),
            this.listeners[e].push(t)
        },
        t.off = function(e, t) {
            if (!this.listeners[e]) return ! 1;
            var i = this.listeners[e].indexOf(t);
            return this.listeners[e].splice(i, 1),
            -1 < i
        },
        t.trigger = function(e, t) {
            var i, n, r, s = this.listeners[e];
            if (s) if (2 === arguments.length) for (n = s.length, i = 0; i < n; ++i) s[i].call(this, t);
            else for (r = Array.prototype.slice.call(arguments, 1), n = s.length, i = 0; i < n; ++i) s[i].apply(this, r)
        },
        t.dispose = function() {
            this.listeners = {}
        },
        t.pipe = function(t) {
            this.on("data",
            function(e) {
                t.push(e)
            })
        },
        e
    } (),
    ys = function(t) {
        function e() {
            var e;
            return (e = t.call(this) || this).buffer = "",
            e
        }
        return ms(e, t),
        e.prototype.push = function(e) {
            var t;
            for (this.buffer += e, t = this.buffer.indexOf("\n"); - 1 < t; t = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, t)),
            this.buffer = this.buffer.substring(t + 1)
        },
        e
    } (vs),
    _s = function(t) {
        function e() {
            var e;
            return (e = t.call(this) || this).customParsers = [],
            e.tagMappers = [],
            e
        }
        ms(e, t);
        var i = e.prototype;
        return i.push = function(n) {
            var u, l, c = this;
            0 !== (n = n.trim()).length && ("#" === n[0] ? this.tagMappers.reduce(function(e, t) {
                var i = t(n);
                return i === n ? e: e.concat([i])
            },
            [n]).forEach(function(e) {
                for (var t = 0; t < c.customParsers.length; t++) if (c.customParsers[t].call(c, e)) return;
                if (0 === e.indexOf("#EXT")) if (e = e.replace("\r", ""), u = /^#EXTM3U/.exec(e)) c.trigger("data", {
                    type: "tag",
                    tagType: "m3u"
                });
                else {
                    if (u = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e)) return l = {
                        type: "tag",
                        tagType: "inf"
                    },
                    u[1] && (l.duration = parseFloat(u[1])),
                    u[2] && (l.title = u[2]),
                    void c.trigger("data", l);
                    if (u = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e)) return l = {
                        type: "tag",
                        tagType: "targetduration"
                    },
                    u[1] && (l.duration = parseInt(u[1], 10)),
                    void c.trigger("data", l);
                    if (u = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e)) return l = {
                        type: "tag",
                        tagType: "totalduration"
                    },
                    u[1] && (l.duration = parseInt(u[1], 10)),
                    void c.trigger("data", l);
                    if (u = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e)) return l = {
                        type: "tag",
                        tagType: "version"
                    },
                    u[1] && (l.version = parseInt(u[1], 10)),
                    void c.trigger("data", l);
                    if (u = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return l = {
                        type: "tag",
                        tagType: "media-sequence"
                    },
                    u[1] && (l.number = parseInt(u[1], 10)),
                    void c.trigger("data", l);
                    if (u = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return l = {
                        type: "tag",
                        tagType: "discontinuity-sequence"
                    },
                    u[1] && (l.number = parseInt(u[1], 10)),
                    void c.trigger("data", l);
                    if (u = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e)) return l = {
                        type: "tag",
                        tagType: "playlist-type"
                    },
                    u[1] && (l.playlistType = u[1]),
                    void c.trigger("data", l);
                    if (u = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)) return l = {
                        type: "tag",
                        tagType: "byterange"
                    },
                    u[1] && (l.length = parseInt(u[1], 10)),
                    u[2] && (l.offset = parseInt(u[2], 10)),
                    void c.trigger("data", l);
                    if (u = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e)) return l = {
                        type: "tag",
                        tagType: "allow-cache"
                    },
                    u[1] && (l.allowed = !/NO/.test(u[1])),
                    void c.trigger("data", l);
                    if (u = /^#EXT-X-MAP:?(.*)$/.exec(e)) {
                        if (l = {
                            type: "tag",
                            tagType: "map"
                        },
                        u[1]) {
                            var i = gs(u[1]);
                            if (i.URI && (l.uri = i.URI), i.BYTERANGE) {
                                var n = i.BYTERANGE.split("@"),
                                r = n[0],
                                s = n[1];
                                l.byterange = {},
                                r && (l.byterange.length = parseInt(r, 10)),
                                s && (l.byterange.offset = parseInt(s, 10))
                            }
                        }
                        c.trigger("data", l)
                    } else if (u = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) {
                        if (l = {
                            type: "tag",
                            tagType: "stream-inf"
                        },
                        u[1]) {
                            if (l.attributes = gs(u[1]), l.attributes.RESOLUTION) {
                                var a = l.attributes.RESOLUTION.split("x"),
                                o = {};
                                a[0] && (o.width = parseInt(a[0], 10)),
                                a[1] && (o.height = parseInt(a[1], 10)),
                                l.attributes.RESOLUTION = o
                            }
                            l.attributes.BANDWIDTH && (l.attributes.BANDWIDTH = parseInt(l.attributes.BANDWIDTH, 10)),
                            l.attributes["PROGRAM-ID"] && (l.attributes["PROGRAM-ID"] = parseInt(l.attributes["PROGRAM-ID"], 10))
                        }
                        c.trigger("data", l)
                    } else {
                        if (u = /^#EXT-X-MEDIA:?(.*)$/.exec(e)) return l = {
                            type: "tag",
                            tagType: "media"
                        },
                        u[1] && (l.attributes = gs(u[1])),
                        void c.trigger("data", l);
                        if (u = /^#EXT-X-ENDLIST/.exec(e)) c.trigger("data", {
                            type: "tag",
                            tagType: "endlist"
                        });
                        else if (u = /^#EXT-X-DISCONTINUITY/.exec(e)) c.trigger("data", {
                            type: "tag",
                            tagType: "discontinuity"
                        });
                        else {
                            if (u = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e)) return l = {
                                type: "tag",
                                tagType: "program-date-time"
                            },
                            u[1] && (l.dateTimeString = u[1], l.dateTimeObject = new Date(u[1])),
                            void c.trigger("data", l);
                            if (u = /^#EXT-X-KEY:?(.*)$/.exec(e)) return l = {
                                type: "tag",
                                tagType: "key"
                            },
                            u[1] && (l.attributes = gs(u[1]), l.attributes.IV && ("0x" === l.attributes.IV.substring(0, 2).toLowerCase() && (l.attributes.IV = l.attributes.IV.substring(2)), l.attributes.IV = l.attributes.IV.match(/.{8}/g), l.attributes.IV[0] = parseInt(l.attributes.IV[0], 16), l.attributes.IV[1] = parseInt(l.attributes.IV[1], 16), l.attributes.IV[2] = parseInt(l.attributes.IV[2], 16), l.attributes.IV[3] = parseInt(l.attributes.IV[3], 16), l.attributes.IV = new Uint32Array(l.attributes.IV))),
                            void c.trigger("data", l);
                            if (u = /^#EXT-X-START:?(.*)$/.exec(e)) return l = {
                                type: "tag",
                                tagType: "start"
                            },
                            u[1] && (l.attributes = gs(u[1]), l.attributes["TIME-OFFSET"] = parseFloat(l.attributes["TIME-OFFSET"]), l.attributes.PRECISE = /YES/.test(l.attributes.PRECISE)),
                            void c.trigger("data", l);
                            if (u = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e)) return l = {
                                type: "tag",
                                tagType: "cue-out-cont"
                            },
                            u[1] ? l.data = u[1] : l.data = "",
                            void c.trigger("data", l);
                            if (u = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e)) return l = {
                                type: "tag",
                                tagType: "cue-out"
                            },
                            u[1] ? l.data = u[1] : l.data = "",
                            void c.trigger("data", l);
                            if (u = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e)) return l = {
                                type: "tag",
                                tagType: "cue-in"
                            },
                            u[1] ? l.data = u[1] : l.data = "",
                            void c.trigger("data", l);
                            c.trigger("data", {
                                type: "tag",
                                data: e.slice(4)
                            })
                        }
                    }
                } else c.trigger("data", {
                    type: "comment",
                    text: e.slice(1)
                })
            }) : this.trigger("data", {
                type: "uri",
                uri: n
            }))
        },
        i.addParser = function(e) {
            var t = this,
            i = e.expression,
            n = e.customType,
            r = e.dataParser,
            s = e.segment;
            "function" != typeof r && (r = function(e) {
                return e
            }),
            this.customParsers.push(function(e) {
                if (i.exec(e)) return t.trigger("data", {
                    type: "custom",
                    data: r(e),
                    customType: n,
                    segment: s
                }),
                !0
            })
        },
        i.addTagMapper = function(e) {
            var t = e.expression,
            i = e.map;
            this.tagMappers.push(function(e) {
                return t.test(e) ? i(e) : e
            })
        },
        e
    } (vs);
    var bs = function(t) {
        function e() {
            var e; (e = t.call(this) || this).lineStream = new ys,
            e.parseStream = new _s,
            e.lineStream.pipe(e.parseStream);
            var r, s, a = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            } (e),
            o = [],
            u = {},
            l = {
                AUDIO: {},
                VIDEO: {},
                "CLOSED-CAPTIONS": {},
                SUBTITLES: {}
            },
            c = 0;
            return e.manifest = {
                allowCache: !0,
                discontinuityStarts: [],
                segments: []
            },
            e.parseStream.on("data",
            function(t) {
                var i, n; ({
                    tag: function() { ({
                            "allow-cache": function() {
                                this.manifest.allowCache = t.allowed,
                                "allowed" in t || (this.trigger("info", {
                                    message: "defaulting allowCache to YES"
                                }), this.manifest.allowCache = !0)
                            },
                            byterange: function() {
                                var e = {};
                                "length" in t && ((u.byterange = e).length = t.length, "offset" in t || (this.trigger("info", {
                                    message: "defaulting offset to zero"
                                }), t.offset = 0)),
                                "offset" in t && ((u.byterange = e).offset = t.offset)
                            },
                            endlist: function() {
                                this.manifest.endList = !0
                            },
                            inf: function() {
                                "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                                    message: "defaulting media sequence to zero"
                                })),
                                "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                                    message: "defaulting discontinuity sequence to zero"
                                })),
                                0 < t.duration && (u.duration = t.duration),
                                0 === t.duration && (u.duration = .01, this.trigger("info", {
                                    message: "updating zero segment duration to a small value"
                                })),
                                this.manifest.segments = o
                            },
                            key: function() {
                                if (t.attributes) if ("NONE" !== t.attributes.METHOD) if (t.attributes.URI) {
                                    if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === t.attributes.KEYFORMAT) {
                                        return - 1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(t.attributes.METHOD) ? void this.trigger("warn", {
                                            message: "invalid key method provided for Widevine"
                                        }) : ("SAMPLE-AES-CENC" === t.attributes.METHOD && this.trigger("warn", {
                                            message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
                                        }), "data:text/plain;base64," !== t.attributes.URI.substring(0, 23) ? void this.trigger("warn", {
                                            message: "invalid key URI provided for Widevine"
                                        }) : t.attributes.KEYID && "0x" === t.attributes.KEYID.substring(0, 2) ? void(this.manifest.contentProtection = {
                                            "com.widevine.alpha": {
                                                attributes: {
                                                    schemeIdUri: t.attributes.KEYFORMAT,
                                                    keyId: t.attributes.KEYID.substring(2)
                                                },
                                                pssh: function(e) {
                                                    for (var t = y.atob(e || ""), i = new Uint8Array(t.length), n = 0; n < t.length; n++) i[n] = t.charCodeAt(n);
                                                    return i
                                                } (t.attributes.URI.split(",")[1])
                                            }
                                        }) : void this.trigger("warn", {
                                            message: "invalid key ID provided for Widevine"
                                        }))
                                    }
                                    t.attributes.METHOD || this.trigger("warn", {
                                        message: "defaulting key method to AES-128"
                                    }),
                                    s = {
                                        method: t.attributes.METHOD || "AES-128",
                                        uri: t.attributes.URI
                                    },
                                    "undefined" != typeof t.attributes.IV && (s.iv = t.attributes.IV)
                                } else this.trigger("warn", {
                                    message: "ignoring key declaration without URI"
                                });
                                else s = null;
                                else this.trigger("warn", {
                                    message: "ignoring key declaration without attribute list"
                                })
                            },
                            "media-sequence": function() {
                                isFinite(t.number) ? this.manifest.mediaSequence = t.number: this.trigger("warn", {
                                    message: "ignoring invalid media sequence: " + t.number
                                })
                            },
                            "discontinuity-sequence": function() {
                                isFinite(t.number) ? (this.manifest.discontinuitySequence = t.number, c = t.number) : this.trigger("warn", {
                                    message: "ignoring invalid discontinuity sequence: " + t.number
                                })
                            },
                            "playlist-type": function() { / VOD | EVENT / .test(t.playlistType) ? this.manifest.playlistType = t.playlistType: this.trigger("warn", {
                                    message: "ignoring unknown playlist type: " + t.playlist
                                })
                            },
                            map: function() {
                                r = {},
                                t.uri && (r.uri = t.uri),
                                t.byterange && (r.byterange = t.byterange)
                            },
                            "stream-inf": function() {
                                this.manifest.playlists = o,
                                this.manifest.mediaGroups = this.manifest.mediaGroups || l,
                                t.attributes ? (u.attributes || (u.attributes = {}), fs(u.attributes, t.attributes)) : this.trigger("warn", {
                                    message: "ignoring empty stream-inf attributes"
                                })
                            },
                            media: function() {
                                if (this.manifest.mediaGroups = this.manifest.mediaGroups || l, t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME) {
                                    var e = this.manifest.mediaGroups[t.attributes.TYPE];
                                    e[t.attributes["GROUP-ID"]] = e[t.attributes["GROUP-ID"]] || {},
                                    i = e[t.attributes["GROUP-ID"]],
                                    (n = {
                                    default:
                                        /yes/i.test(t.attributes.DEFAULT)
                                    }).
                                default ? n.autoselect = !0 : n.autoselect = /yes/i.test(t.attributes.AUTOSELECT),
                                    t.attributes.LANGUAGE && (n.language = t.attributes.LANGUAGE),
                                    t.attributes.URI && (n.uri = t.attributes.URI),
                                    t.attributes["INSTREAM-ID"] && (n.instreamId = t.attributes["INSTREAM-ID"]),
                                    t.attributes.CHARACTERISTICS && (n.characteristics = t.attributes.CHARACTERISTICS),
                                    t.attributes.FORCED && (n.forced = /yes/i.test(t.attributes.FORCED)),
                                    i[t.attributes.NAME] = n
                                } else this.trigger("warn", {
                                    message: "ignoring incomplete or missing media group"
                                })
                            },
                            discontinuity: function() {
                                c += 1,
                                u.discontinuity = !0,
                                this.manifest.discontinuityStarts.push(o.length)
                            },
                            "program-date-time": function() {
                                "undefined" == typeof this.manifest.dateTimeString && (this.manifest.dateTimeString = t.dateTimeString, this.manifest.dateTimeObject = t.dateTimeObject),
                                u.dateTimeString = t.dateTimeString,
                                u.dateTimeObject = t.dateTimeObject
                            },
                            targetduration: function() { ! isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {
                                    message: "ignoring invalid target duration: " + t.duration
                                }) : this.manifest.targetDuration = t.duration
                            },
                            totalduration: function() { ! isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {
                                    message: "ignoring invalid total duration: " + t.duration
                                }) : this.manifest.totalDuration = t.duration
                            },
                            start: function() {
                                t.attributes && !isNaN(t.attributes["TIME-OFFSET"]) ? this.manifest.start = {
                                    timeOffset: t.attributes["TIME-OFFSET"],
                                    precise: t.attributes.PRECISE
                                }: this.trigger("warn", {
                                    message: "ignoring start declaration without appropriate attribute list"
                                })
                            },
                            "cue-out": function() {
                                u.cueOut = t.data
                            },
                            "cue-out-cont": function() {
                                u.cueOutCont = t.data
                            },
                            "cue-in": function() {
                                u.cueIn = t.data
                            }
                        } [t.tagType] ||
                        function() {}).call(a)
                    },
                    uri: function() {
                        u.uri = t.uri,
                        o.push(u),
                        !this.manifest.targetDuration || "duration" in u || (this.trigger("warn", {
                            message: "defaulting segment duration to the target duration"
                        }), u.duration = this.manifest.targetDuration),
                        s && (u.key = s),
                        u.timeline = c,
                        r && (u.map = r),
                        u = {}
                    },
                    comment: function() {},
                    custom: function() {
                        t.segment ? (u.custom = u.custom || {},
                        u.custom[t.customType] = t.data) : (this.manifest.custom = this.manifest.custom || {},
                        this.manifest.custom[t.customType] = t.data)
                    }
                })[t.type].call(a)
            }),
            e
        }
        ms(e, t);
        var i = e.prototype;
        return i.push = function(e) {
            this.lineStream.push(e)
        },
        i.end = function() {
            this.lineStream.push("\n")
        },
        i.addParser = function(e) {
            this.parseStream.addParser(e)
        },
        i.addTagMapper = function(e) {
            this.parseStream.addTagMapper(e)
        },
        e
    } (vs);
    function Ts(e) {
        return e && "object" == typeof e && "default" in e ? e.
    default:
        e
    }
    var Ss = Ts(ps),
    ks = Ts(y),
    Cs = function(e, t) {
        return /^[a-z]+:/i.test(t) ? t: (/\/\//i.test(e) || (e = Ss.buildAbsoluteURL(ks.location && ks.location.href || "", e)), Ss.buildAbsoluteURL(e, t))
    };
    var Es, ws = (Es = y) && "object" == typeof Es && "default" in Es ? Es.
default:
    Es;
    var xs = function(e) {
        for (var t = function(e) {
            return ws.atob ? ws.atob(e) : Buffer.from(e, "base64").toString("binary")
        } (e), i = new Uint8Array(t.length), n = 0; n < t.length; n++) i[n] = t.charCodeAt(n);
        return i
    },
    As = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Is = new RegExp("[\\-\\.0-9" + As.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
    Ps = new RegExp("^" + As.source + Is.source + "*(?::" + As.source + Is.source + "*)?$"),
    Ls = 0,
    Os = 1,
    Ds = 2,
    Ns = 3,
    Rs = 4,
    Us = 5,
    Ms = 6,
    Bs = 7;
    function js() {}
    function Fs(e, t) {
        return t.lineNumber = e.lineNumber,
        t.columnNumber = e.columnNumber,
        t
    }
    function Hs(e, t, i, n, r, s) {
        for (var a, o = ++t,
        u = Ls;;) {
            var l = e.charAt(o);
            switch (l) {
            case "=":
                if (u === Os) a = e.slice(t, o),
                u = Ns;
                else {
                    if (u !== Ds) throw new Error("attribute equal must after attrName");
                    u = Ns
                }
                break;
            case "'":
            case '"':
                if (u === Ns || u === Os) {
                    if (u === Os && (s.warning('attribute value must after "="'), a = e.slice(t, o)), t = o + 1, !(0 < (o = e.indexOf(l, t)))) throw new Error("attribute value no end '" + l + "' match");
                    c = e.slice(t, o).replace(/&#?\w+;/g, r),
                    i.add(a, c, t - 1),
                    u = Us
                } else {
                    if (u != Rs) throw new Error('attribute value must after "="');
                    c = e.slice(t, o).replace(/&#?\w+;/g, r),
                    i.add(a, c, t),
                    s.warning('attribute "' + a + '" missed start quot(' + l + ")!!"),
                    t = o + 1,
                    u = Us
                }
                break;
            case "/":
                switch (u) {
                case Ls:
                    i.setTagName(e.slice(t, o));
                case Us:
                case Ms:
                case Bs:
                    u = Bs,
                    i.closed = !0;
                case Rs:
                case Os:
                case Ds:
                    break;
                default:
                    throw new Error("attribute invalid close char('/')")
                }
                break;
            case "":
                return s.error("unexpected end of input"),
                u == Ls && i.setTagName(e.slice(t, o)),
                o;
            case ">":
                switch (u) {
                case Ls:
                    i.setTagName(e.slice(t, o));
                case Us:
                case Ms:
                case Bs:
                    break;
                case Rs:
                case Os:
                    "/" === (c = e.slice(t, o)).slice( - 1) && (i.closed = !0, c = c.slice(0, -1));
                case Ds:
                    u === Ds && (c = a),
                    u == Rs ? (s.warning('attribute "' + c + '" missed quot(")!!'), i.add(a, c.replace(/&#?\w+;/g, r), t)) : ("http://www.w3.org/1999/xhtml" === n[""] && c.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + c + '" missed value!! "' + c + '" instead!!'), i.add(c, c, t));
                    break;
                case Ns:
                    throw new Error("attribute value missed!!")
                }
                return o;
            case "":
                l = " ";
            default:
                if (l <= " ") switch (u) {
                case Ls:
                    i.setTagName(e.slice(t, o)),
                    u = Ms;
                    break;
                case Os:
                    a = e.slice(t, o),
                    u = Ds;
                    break;
                case Rs:
                    var c = e.slice(t, o).replace(/&#?\w+;/g, r);
                    s.warning('attribute "' + c + '" missed quot(")!!'),
                    i.add(a, c, t);
                case Us:
                    u = Ms
                } else switch (u) {
                case Ds:
                    i.tagName;
                    "http://www.w3.org/1999/xhtml" === n[""] && a.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'),
                    i.add(a, a, t),
                    t = o,
                    u = Os;
                    break;
                case Us:
                    s.warning('attribute space is required"' + a + '"!!');
                case Ms:
                    u = Os,
                    t = o;
                    break;
                case Ns:
                    u = Rs,
                    t = o;
                    break;
                case Bs:
                    throw new Error("elements closed character '/' and '>' must be connected to")
                }
            }
            o++
        }
    }
    function Vs(e, t, i) {
        for (var n = e.tagName,
        r = null,
        s = e.length; s--;) {
            var a = e[s],
            o = a.qName,
            u = a.value;
            if (0 < (d = o.indexOf(":"))) var l = a.prefix = o.slice(0, d),
            c = o.slice(d + 1),
            h = "xmlns" === l && c;
            else l = null,
            h = "xmlns" === (c = o) && "";
            a.localName = c,
            !1 !== h && (null == r && (r = {},
            zs(i, i = {})), i[h] = r[h] = u, a.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(h, u))
        }
        for (s = e.length; s--;) { (l = (a = e[s]).prefix) && ("xml" === l && (a.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== l && (a.uri = i[l || ""]))
        }
        var d;
        c = 0 < (d = n.indexOf(":")) ? (l = e.prefix = n.slice(0, d), e.localName = n.slice(d + 1)) : (l = null, e.localName = n);
        var p = e.uri = i[l || ""];
        if (t.startElement(p, c, n, e), !e.closed) return e.currentNSMap = i,
        e.localNSMap = r,
        !0;
        if (t.endElement(p, c, n), r) for (l in r) t.endPrefixMapping(l)
    }
    function qs(e, t, i, n, r) {
        if (/^(?:script|textarea)$/i.test(i)) {
            var s = e.indexOf("</" + i + ">", t),
            a = e.substring(t + 1, s);
            if (/[&<]/.test(a)) return /^script$/i.test(i) || (a = a.replace(/&#?\w+;/g, n)),
            r.characters(a, 0, a.length),
            s
        }
        return t + 1
    }
    function Ws(e, t, i, n) {
        var r = n[i];
        return null == r && ((r = e.lastIndexOf("</" + i + ">")) < t && (r = e.lastIndexOf("</" + i)), n[i] = r),
        r < t
    }
    function zs(e, t) {
        for (var i in e) t[i] = e[i]
    }
    function Gs(e, t, i, n) {
        switch (e.charAt(t + 2)) {
        case "-":
            return "-" !== e.charAt(t + 3) ? -1 : t < (r = e.indexOf("--\x3e", t + 4)) ? (i.comment(e, t + 4, r - t - 4), r + 3) : (n.error("Unclosed comment"), -1);
        default:
            if ("CDATA[" == e.substr(t + 3, 6)) {
                var r = e.indexOf("]]>", t + 9);
                return i.startCDATA(),
                i.characters(e, t + 9, r - t - 9),
                i.endCDATA(),
                r + 3
            }
            var s = function(e, t) {
                var i, n = [],
                r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                r.lastIndex = t,
                r.exec(e);
                for (; i = r.exec(e);) if (n.push(i), i[1]) return n
            } (e, t),
            a = s.length;
            if (1 < a && /!doctype/i.test(s[0][0])) {
                var o = s[1][0],
                u = 3 < a && /^public$/i.test(s[2][0]) && s[3][0],
                l = 4 < a && s[4][0],
                c = s[a - 1];
                return i.startDTD(o, u && u.replace(/^(['"])(.*?)\1$/, "$2"), l && l.replace(/^(['"])(.*?)\1$/, "$2")),
                i.endDTD(),
                c.index + c[0].length
            }
        }
        return - 1
    }
    function Xs(e, t, i) {
        var n = e.indexOf("?>", t);
        if (n) {
            var r = e.substring(t, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
            if (r) {
                r[0].length;
                return i.processingInstruction(r[1], r[2]),
                n + 2
            }
            return - 1
        }
        return - 1
    }
    function Ks(e) {}
    function Ys(e, t) {
        return e.__proto__ = t,
        e
    }
    js.prototype = {
        parse: function(e, t, i) {
            var n = this.domBuilder;
            n.startDocument(),
            zs(t, t = {}),
            function(i, e, n, r, s) {
                function a(e) {
                    var t = e.slice(1, -1);
                    return t in n ? n[t] : "#" === t.charAt(0) ?
                    function(e) {
                        if (65535 < e) {
                            var t = 55296 + ((e -= 65536) >> 10),
                            i = 56320 + (1023 & e);
                            return String.fromCharCode(t, i)
                        }
                        return String.fromCharCode(e)
                    } (parseInt(t.substr(1).replace("x", "0x"))) : (s.error("entity not found:" + e), e)
                }
                function t(e) {
                    if (f < e) {
                        var t = i.substring(f, e).replace(/&#?\w+;/g, a);
                        h && o(f),
                        r.characters(t, 0, e - f),
                        f = e
                    }
                }
                function o(e, t) {
                    for (; l <= e && (t = c.exec(i));) u = t.index,
                    l = u + t[0].length,
                    h.lineNumber++;
                    h.columnNumber = e - u + 1
                }
                var u = 0,
                l = 0,
                c = /.*(?:\r\n?|\n)|.*$/g,
                h = r.locator,
                d = [{
                    currentNSMap: e
                }],
                p = {},
                f = 0;
                for (;;) {
                    try {
                        var m = i.indexOf("<", f);
                        if (m < 0) {
                            if (!i.substr(f).match(/^\s*$/)) {
                                var g = r.doc,
                                v = g.createTextNode(i.substr(f));
                                g.appendChild(v),
                                r.currentElement = v
                            }
                            return
                        }
                        switch (f < m && t(m), i.charAt(m + 1)) {
                        case "/":
                            var y = i.indexOf(">", m + 3),
                            _ = i.substring(m + 2, y),
                            b = d.pop();
                            y < 0 ? (_ = i.substring(m + 2).replace(/[\s<].*/, ""), s.error("end tag name: " + _ + " is not complete:" + b.tagName), y = m + 1 + _.length) : _.match(/\s</) && (_ = _.replace(/[\s<].*/, ""), s.error("end tag name: " + _ + " maybe not complete"), y = m + 1 + _.length);
                            var T = b.localNSMap,
                            S = b.tagName == _;
                            if (S || b.tagName && b.tagName.toLowerCase() == _.toLowerCase()) {
                                if (r.endElement(b.uri, b.localName, _), T) for (var k in T) r.endPrefixMapping(k);
                                S || s.fatalError("end tag name: " + _ + " is not match the current start tagName:" + b.tagName)
                            } else d.push(b);
                            y++;
                            break;
                        case "?":
                            h && o(m),
                            y = Xs(i, m, r);
                            break;
                        case "!":
                            h && o(m),
                            y = Gs(i, m, r, s);
                            break;
                        default:
                            h && o(m);
                            var C = new Ks,
                            E = d[d.length - 1].currentNSMap,
                            w = (y = Hs(i, m, C, E, a, s), C.length);
                            if (!C.closed && Ws(i, y, C.tagName, p) && (C.closed = !0, n.nbsp || s.warning("unclosed xml attribute")), h && w) {
                                for (var x = Fs(h, {}), A = 0; A < w; A++) {
                                    var I = C[A];
                                    o(I.offset),
                                    I.locator = Fs(h, {})
                                }
                                r.locator = x,
                                Vs(C, r, E) && d.push(C),
                                r.locator = h
                            } else Vs(C, r, E) && d.push(C);
                            "http://www.w3.org/1999/xhtml" !== C.uri || C.closed ? y++:y = qs(i, y, C.tagName, a, r)
                        }
                    } catch(e) {
                        s.error("element parse error: " + e),
                        y = -1
                    }
                    f < y ? f = y: t(Math.max(m, f) + 1)
                }
            } (e, t, i, n, this.errorHandler),
            n.endDocument()
        }
    },
    Ks.prototype = {
        setTagName: function(e) {
            if (!Ps.test(e)) throw new Error("invalid tagName:" + e);
            this.tagName = e
        },
        add: function(e, t, i) {
            if (!Ps.test(e)) throw new Error("invalid attribute:" + e);
            this[this.length++] = {
                qName: e,
                value: t,
                offset: i
            }
        },
        length: 0,
        getLocalName: function(e) {
            return this[e].localName
        },
        getLocator: function(e) {
            return this[e].locator
        },
        getQName: function(e) {
            return this[e].qName
        },
        getURI: function(e) {
            return this[e].uri
        },
        getValue: function(e) {
            return this[e].value
        }
    },
    Ys({},
    Ys.prototype) instanceof Ys || (Ys = function(e, t) {
        function i() {}
        for (t in i.prototype = t, i = new i, e) i[t] = e[t];
        return i
    });
    var $s = {
        XMLReader: js
    };
    function Qs(e, t) {
        for (var i in e) t[i] = e[i]
    }
    function Js(e, t) {
        var i = e.prototype;
        if (Object.create) {
            var n = Object.create(t.prototype);
            i.__proto__ = n
        }
        if (! (i instanceof t)) {
            var r = function() {};
            r.prototype = t.prototype,
            Qs(i, r = new r),
            e.prototype = i = r
        }
        i.constructor != e && (i.constructor = e)
    }
    var Zs = "http://www.w3.org/1999/xhtml",
    ea = {},
    ta = ea.ELEMENT_NODE = 1,
    ia = ea.ATTRIBUTE_NODE = 2,
    na = ea.TEXT_NODE = 3,
    ra = ea.CDATA_SECTION_NODE = 4,
    sa = ea.ENTITY_REFERENCE_NODE = 5,
    aa = ea.ENTITY_NODE = 6,
    oa = ea.PROCESSING_INSTRUCTION_NODE = 7,
    ua = ea.COMMENT_NODE = 8,
    la = ea.DOCUMENT_NODE = 9,
    ca = ea.DOCUMENT_TYPE_NODE = 10,
    ha = ea.DOCUMENT_FRAGMENT_NODE = 11,
    da = ea.NOTATION_NODE = 12,
    pa = {},
    fa = {},
    ma = (pa.INDEX_SIZE_ERR = (fa[1] = "Index size error", 1), pa.DOMSTRING_SIZE_ERR = (fa[2] = "DOMString size error", 2), pa.HIERARCHY_REQUEST_ERR = (fa[3] = "Hierarchy request error", 3)),
    ga = (pa.WRONG_DOCUMENT_ERR = (fa[4] = "Wrong document", 4), pa.INVALID_CHARACTER_ERR = (fa[5] = "Invalid character", 5), pa.NO_DATA_ALLOWED_ERR = (fa[6] = "No data allowed", 6), pa.NO_MODIFICATION_ALLOWED_ERR = (fa[7] = "No modification allowed", 7), pa.NOT_FOUND_ERR = (fa[8] = "Not found", 8)),
    va = (pa.NOT_SUPPORTED_ERR = (fa[9] = "Not supported", 9), pa.INUSE_ATTRIBUTE_ERR = (fa[10] = "Attribute in use", 10));
    pa.INVALID_STATE_ERR = (fa[11] = "Invalid state", 11),
    pa.SYNTAX_ERR = (fa[12] = "Syntax error", 12),
    pa.INVALID_MODIFICATION_ERR = (fa[13] = "Invalid modification", 13),
    pa.NAMESPACE_ERR = (fa[14] = "Invalid namespace", 14),
    pa.INVALID_ACCESS_ERR = (fa[15] = "Invalid access", 15);
    function ya(e, t) {
        if (t instanceof Error) var i = t;
        else i = this,
        Error.call(this, fa[e]),
        this.message = fa[e],
        Error.captureStackTrace && Error.captureStackTrace(this, ya);
        return i.code = e,
        t && (this.message = this.message + ": " + t),
        i
    }
    function _a() {}
    function ba(e, t) {
        this._node = e,
        this._refresh = t,
        Ta(this)
    }
    function Ta(e) {
        var t = e._node._inc || e._node.ownerDocument._inc;
        if (e._inc != t) {
            var i = e._refresh(e._node);
            Qa(e, "length", i.length),
            Qs(i, e),
            e._inc = t
        }
    }
    function Sa() {}
    function ka(e, t) {
        for (var i = e.length; i--;) if (e[i] === t) return i
    }
    function Ca(e, t, i, n) {
        if (n ? t[ka(t, n)] = i: t[t.length++] = i, e) {
            var r = (i.ownerElement = e).ownerDocument;
            r && (n && La(r, e, n),
            function(e, t, i) {
                e && e._inc++,
                "http://www.w3.org/2000/xmlns/" == i.namespaceURI && (t._nsMap[i.prefix ? i.localName: ""] = i.value)
            } (r, e, i))
        }
    }
    function Ea(e, t, i) {
        var n = ka(t, i);
        if (! (0 <= n)) throw ya(ga, new Error(e.tagName + "@" + i));
        for (var r = t.length - 1; n < r;) t[n] = t[++n];
        if (t.length = r, e) {
            var s = e.ownerDocument;
            s && (La(s, e, i), i.ownerElement = null)
        }
    }
    function wa(e) {
        if (this._features = {},
        e) for (var t in e) this._features = e[t]
    }
    function xa() {}
    function Aa(e) {
        return ("<" == e ? "&lt;": ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";"
    }
    function Ia(e, t) {
        if (t(e)) return ! 0;
        if (e = e.firstChild) do {
            if (Ia(e, t)) return ! 0
        } while ( e = e . nextSibling )
    }
    function Pa() {}
    function La(e, t, i) {
        e && e._inc++,
        "http://www.w3.org/2000/xmlns/" == i.namespaceURI && delete t._nsMap[i.prefix ? i.localName: ""]
    }
    function Oa(e, t, i) {
        if (e && e._inc) {
            e._inc++;
            var n = t.childNodes;
            if (i) n[n.length++] = i;
            else {
                for (var r = t.firstChild,
                s = 0; r;) r = (n[s++] = r).nextSibling;
                n.length = s
            }
        }
    }
    function Da(e, t) {
        var i = t.previousSibling,
        n = t.nextSibling;
        return i ? i.nextSibling = n: e.firstChild = n,
        n ? n.previousSibling = i: e.lastChild = i,
        Oa(e.ownerDocument, e),
        t
    }
    function Na(e, t, i) {
        var n = t.parentNode;
        if (n && n.removeChild(t), t.nodeType === ha) {
            var r = t.firstChild;
            if (null == r) return t;
            var s = t.lastChild
        } else r = s = t;
        var a = i ? i.previousSibling: e.lastChild;
        for (r.previousSibling = a, s.nextSibling = i, a ? a.nextSibling = r: e.firstChild = r, null == i ? e.lastChild = s: i.previousSibling = s; r.parentNode = e, r !== s && (r = r.nextSibling););
        return Oa(e.ownerDocument || e, e),
        t.nodeType == ha && (t.firstChild = t.lastChild = null),
        t
    }
    function Ra() {
        this._nsMap = {}
    }
    function Ua() {}
    function Ma() {}
    function Ba() {}
    function ja() {}
    function Fa() {}
    function Ha() {}
    function Va() {}
    function qa() {}
    function Wa() {}
    function za() {}
    function Ga() {}
    function Xa() {}
    function Ka(e, t) {
        var i = [],
        n = 9 == this.nodeType ? this.documentElement: this,
        r = n.prefix,
        s = n.namespaceURI;
        if (s && null == r && null == (r = n.lookupPrefix(s))) var a = [{
            namespace: s,
            prefix: null
        }];
        return $a(this, i, e, t, a),
        i.join("")
    }
    function Ya(e, t, i) {
        var n = e.prefix || "",
        r = e.namespaceURI;
        if (!n && !r) return ! 1;
        if ("xml" === n && "http://www.w3.org/XML/1998/namespace" === r || "http://www.w3.org/2000/xmlns/" == r) return ! 1;
        for (var s = i.length; s--;) {
            var a = i[s];
            if (a.prefix == n) return a.namespace != r
        }
        return ! 0
    }
    function $a(e, t, i, n, r) {
        if (n) {
            if (! (e = n(e))) return;
            if ("string" == typeof e) return void t.push(e)
        }
        switch (e.nodeType) {
        case ta:
            r = r || [];
            var s = e.attributes,
            a = s.length,
            o = e.firstChild,
            u = e.tagName;
            i = Zs === e.namespaceURI || i,
            t.push("<", u);
            for (var l = 0; l < a; l++) {
                "xmlns" == (c = s.item(l)).prefix ? r.push({
                    prefix: c.localName,
                    namespace: c.value
                }) : "xmlns" == c.nodeName && r.push({
                    prefix: "",
                    namespace: c.value
                })
            }
            for (l = 0; l < a; l++) {
                var c;
                if (Ya(c = s.item(l), 0, r)) {
                    var h = c.prefix || "",
                    d = c.namespaceURI,
                    p = h ? " xmlns:" + h: " xmlns";
                    t.push(p, '="', d, '"'),
                    r.push({
                        prefix: h,
                        namespace: d
                    })
                }
                $a(c, t, i, n, r)
            }
            if (Ya(e, 0, r)) {
                h = e.prefix || "",
                d = e.namespaceURI,
                p = h ? " xmlns:" + h: " xmlns";
                t.push(p, '="', d, '"'),
                r.push({
                    prefix: h,
                    namespace: d
                })
            }
            if (o || i && !/^(?:meta|link|img|br|hr|input)$/i.test(u)) {
                if (t.push(">"), i && /^script$/i.test(u)) for (; o;) o.data ? t.push(o.data) : $a(o, t, i, n, r),
                o = o.nextSibling;
                else for (; o;) $a(o, t, i, n, r),
                o = o.nextSibling;
                t.push("</", u, ">")
            } else t.push("/>");
            return;
        case la:
        case ha:
            for (o = e.firstChild; o;) $a(o, t, i, n, r),
            o = o.nextSibling;
            return;
        case ia:
            return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, Aa), '"');
        case na:
            return t.push(e.data.replace(/[<&]/g, Aa));
        case ra:
            return t.push("<![CDATA[", e.data, "]]>");
        case ua:
            return t.push("\x3c!--", e.data, "--\x3e");
        case ca:
            var f = e.publicId,
            m = e.systemId;
            if (t.push("<!DOCTYPE ", e.name), f) t.push(' PUBLIC "', f),
            m && "." != m && t.push('" "', m),
            t.push('">');
            else if (m && "." != m) t.push(' SYSTEM "', m, '">');
            else {
                var g = e.internalSubset;
                g && t.push(" [", g, "]"),
                t.push(">")
            }
            return;
        case oa:
            return t.push("<?", e.target, " ", e.data, "?>");
        case sa:
            return t.push("&", e.nodeName, ";");
        default:
            t.push("??", e.nodeName)
        }
    }
    function Qa(e, t, i) {
        e[t] = i
    }
    ya.prototype = Error.prototype,
    Qs(pa, ya),
    _a.prototype = {
        length: 0,
        item: function(e) {
            return this[e] || null
        },
        toString: function(e, t) {
            for (var i = [], n = 0; n < this.length; n++) $a(this[n], i, e, t);
            return i.join("")
        }
    },
    ba.prototype.item = function(e) {
        return Ta(this),
        this[e]
    },
    Js(ba, _a),
    Sa.prototype = {
        length: 0,
        item: _a.prototype.item,
        getNamedItem: function(e) {
            for (var t = this.length; t--;) {
                var i = this[t];
                if (i.nodeName == e) return i
            }
        },
        setNamedItem: function(e) {
            var t = e.ownerElement;
            if (t && t != this._ownerElement) throw new ya(va);
            var i = this.getNamedItem(e.nodeName);
            return Ca(this._ownerElement, this, e, i),
            i
        },
        setNamedItemNS: function(e) {
            var t, i = e.ownerElement;
            if (i && i != this._ownerElement) throw new ya(va);
            return t = this.getNamedItemNS(e.namespaceURI, e.localName),
            Ca(this._ownerElement, this, e, t),
            t
        },
        removeNamedItem: function(e) {
            var t = this.getNamedItem(e);
            return Ea(this._ownerElement, this, t),
            t
        },
        removeNamedItemNS: function(e, t) {
            var i = this.getNamedItemNS(e, t);
            return Ea(this._ownerElement, this, i),
            i
        },
        getNamedItemNS: function(e, t) {
            for (var i = this.length; i--;) {
                var n = this[i];
                if (n.localName == t && n.namespaceURI == e) return n
            }
            return null
        }
    },
    wa.prototype = {
        hasFeature: function(e, t) {
            var i = this._features[e.toLowerCase()];
            return ! (!i || t && !(t in i))
        },
        createDocument: function(e, t, i) {
            var n = new Pa;
            if (n.implementation = this, n.childNodes = new _a, (n.doctype = i) && n.appendChild(i), t) {
                var r = n.createElementNS(e, t);
                n.appendChild(r)
            }
            return n
        },
        createDocumentType: function(e, t, i) {
            var n = new Ha;
            return n.name = e,
            n.nodeName = e,
            n.publicId = t,
            n.systemId = i,
            n
        }
    },
    xa.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        insertBefore: function(e, t) {
            return Na(this, e, t)
        },
        replaceChild: function(e, t) {
            this.insertBefore(e, t),
            t && this.removeChild(t)
        },
        removeChild: function(e) {
            return Da(this, e)
        },
        appendChild: function(e) {
            return this.insertBefore(e, null)
        },
        hasChildNodes: function() {
            return null != this.firstChild
        },
        cloneNode: function(e) {
            return function e(t, i, n) {
                var r = new i.constructor;
                for (var s in i) {
                    var a = i[s];
                    "object" != typeof a && a != r[s] && (r[s] = a)
                }
                i.childNodes && (r.childNodes = new _a);
                r.ownerDocument = t;
                switch (r.nodeType) {
                case ta:
                    var o = i.attributes,
                    u = r.attributes = new Sa,
                    l = o.length;
                    u._ownerElement = r;
                    for (var c = 0; c < l; c++) r.setAttributeNode(e(t, o.item(c), !0));
                    break;
                case ia:
                    n = !0
                }
                if (n) for (var h = i.firstChild; h;) r.appendChild(e(t, h, n)),
                h = h.nextSibling;
                return r
            } (this.ownerDocument || this, this, e)
        },
        normalize: function() {
            for (var e = this.firstChild; e;) {
                var t = e.nextSibling;
                t && t.nodeType == na && e.nodeType == na ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t)
            }
        },
        isSupported: function(e, t) {
            return this.ownerDocument.implementation.hasFeature(e, t)
        },
        hasAttributes: function() {
            return 0 < this.attributes.length
        },
        lookupPrefix: function(e) {
            for (var t = this; t;) {
                var i = t._nsMap;
                if (i) for (var n in i) if (i[n] == e) return n;
                t = t.nodeType == ia ? t.ownerDocument: t.parentNode
            }
            return null
        },
        lookupNamespaceURI: function(e) {
            for (var t = this; t;) {
                var i = t._nsMap;
                if (i && e in i) return i[e];
                t = t.nodeType == ia ? t.ownerDocument: t.parentNode
            }
            return null
        },
        isDefaultNamespace: function(e) {
            return null == this.lookupPrefix(e)
        }
    },
    Qs(ea, xa),
    Qs(ea, xa.prototype),
    Pa.prototype = {
        nodeName: "#document",
        nodeType: la,
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function(e, t) {
            if (e.nodeType != ha) return null == this.documentElement && e.nodeType == ta && (this.documentElement = e),
            Na(this, e, t),
            e.ownerDocument = this,
            e;
            for (var i = e.firstChild; i;) {
                var n = i.nextSibling;
                this.insertBefore(i, t),
                i = n
            }
            return e
        },
        removeChild: function(e) {
            return this.documentElement == e && (this.documentElement = null),
            Da(this, e)
        },
        importNode: function(e, t) {
            return function e(t, i, n) {
                var r;
                switch (i.nodeType) {
                case ta:
                    (r = i.cloneNode(!1)).ownerDocument = t;
                case ha:
                    break;
                case ia:
                    n = !0
                }
                r = r || i.cloneNode(!1);
                r.ownerDocument = t;
                r.parentNode = null;
                if (n) for (var s = i.firstChild; s;) r.appendChild(e(t, s, n)),
                s = s.nextSibling;
                return r
            } (this, e, t)
        },
        getElementById: function(t) {
            var i = null;
            return Ia(this.documentElement,
            function(e) {
                if (e.nodeType == ta && e.getAttribute("id") == t) return i = e,
                !0
            }),
            i
        },
        createElement: function(e) {
            var t = new Ra;
            return t.ownerDocument = this,
            t.nodeName = e,
            t.tagName = e,
            t.childNodes = new _a,
            (t.attributes = new Sa)._ownerElement = t
        },
        createDocumentFragment: function() {
            var e = new za;
            return e.ownerDocument = this,
            e.childNodes = new _a,
            e
        },
        createTextNode: function(e) {
            var t = new Ba;
            return t.ownerDocument = this,
            t.appendData(e),
            t
        },
        createComment: function(e) {
            var t = new ja;
            return t.ownerDocument = this,
            t.appendData(e),
            t
        },
        createCDATASection: function(e) {
            var t = new Fa;
            return t.ownerDocument = this,
            t.appendData(e),
            t
        },
        createProcessingInstruction: function(e, t) {
            var i = new Ga;
            return i.ownerDocument = this,
            i.tagName = i.target = e,
            i.nodeValue = i.data = t,
            i
        },
        createAttribute: function(e) {
            var t = new Ua;
            return t.ownerDocument = this,
            t.name = e,
            t.nodeName = e,
            t.localName = e,
            t.specified = !0,
            t
        },
        createEntityReference: function(e) {
            var t = new Wa;
            return t.ownerDocument = this,
            t.nodeName = e,
            t
        },
        createElementNS: function(e, t) {
            var i = new Ra,
            n = t.split(":"),
            r = i.attributes = new Sa;
            return i.childNodes = new _a,
            i.ownerDocument = this,
            i.nodeName = t,
            i.tagName = t,
            i.namespaceURI = e,
            2 == n.length ? (i.prefix = n[0], i.localName = n[1]) : i.localName = t,
            r._ownerElement = i
        },
        createAttributeNS: function(e, t) {
            var i = new Ua,
            n = t.split(":");
            return i.ownerDocument = this,
            i.nodeName = t,
            i.name = t,
            i.namespaceURI = e,
            i.specified = !0,
            2 == n.length ? (i.prefix = n[0], i.localName = n[1]) : i.localName = t,
            i
        }
    },
    Js(Pa, xa),
    Pa.prototype.getElementsByTagName = (Ra.prototype = {
        nodeType: ta,
        hasAttribute: function(e) {
            return null != this.getAttributeNode(e)
        },
        getAttribute: function(e) {
            var t = this.getAttributeNode(e);
            return t && t.value || ""
        },
        getAttributeNode: function(e) {
            return this.attributes.getNamedItem(e)
        },
        setAttribute: function(e, t) {
            var i = this.ownerDocument.createAttribute(e);
            i.value = i.nodeValue = "" + t,
            this.setAttributeNode(i)
        },
        removeAttribute: function(e) {
            var t = this.getAttributeNode(e);
            t && this.removeAttributeNode(t)
        },
        appendChild: function(e) {
            return e.nodeType === ha ? this.insertBefore(e, null) : function(e, t) {
                var i = t.parentNode;
                if (i) {
                    var n = e.lastChild;
                    i.removeChild(t);
                    n = e.lastChild
                }
                return n = e.lastChild,
                t.parentNode = e,
                t.previousSibling = n,
                t.nextSibling = null,
                n ? n.nextSibling = t: e.firstChild = t,
                e.lastChild = t,
                Oa(e.ownerDocument, e, t),
                t
            } (this, e)
        },
        setAttributeNode: function(e) {
            return this.attributes.setNamedItem(e)
        },
        setAttributeNodeNS: function(e) {
            return this.attributes.setNamedItemNS(e)
        },
        removeAttributeNode: function(e) {
            return this.attributes.removeNamedItem(e.nodeName)
        },
        removeAttributeNS: function(e, t) {
            var i = this.getAttributeNodeNS(e, t);
            i && this.removeAttributeNode(i)
        },
        hasAttributeNS: function(e, t) {
            return null != this.getAttributeNodeNS(e, t)
        },
        getAttributeNS: function(e, t) {
            var i = this.getAttributeNodeNS(e, t);
            return i && i.value || ""
        },
        setAttributeNS: function(e, t, i) {
            var n = this.ownerDocument.createAttributeNS(e, t);
            n.value = n.nodeValue = "" + i,
            this.setAttributeNode(n)
        },
        getAttributeNodeNS: function(e, t) {
            return this.attributes.getNamedItemNS(e, t)
        },
        getElementsByTagName: function(n) {
            return new ba(this,
            function(t) {
                var i = [];
                return Ia(t,
                function(e) {
                    e === t || e.nodeType != ta || "*" !== n && e.tagName != n || i.push(e)
                }),
                i
            })
        },
        getElementsByTagNameNS: function(n, r) {
            return new ba(this,
            function(t) {
                var i = [];
                return Ia(t,
                function(e) {
                    e === t || e.nodeType !== ta || "*" !== n && e.namespaceURI !== n || "*" !== r && e.localName != r || i.push(e)
                }),
                i
            })
        }
    }).getElementsByTagName,
    Pa.prototype.getElementsByTagNameNS = Ra.prototype.getElementsByTagNameNS,
    Js(Ra, xa),
    Ua.prototype.nodeType = ia,
    Js(Ua, xa),
    Ma.prototype = {
        data: "",
        substringData: function(e, t) {
            return this.data.substring(e, e + t)
        },
        appendData: function(e) {
            e = this.data + e,
            this.nodeValue = this.data = e,
            this.length = e.length
        },
        insertData: function(e, t) {
            this.replaceData(e, 0, t)
        },
        appendChild: function(e) {
            throw new Error(fa[ma])
        },
        deleteData: function(e, t) {
            this.replaceData(e, t, "")
        },
        replaceData: function(e, t, i) {
            i = this.data.substring(0, e) + i + this.data.substring(e + t),
            this.nodeValue = this.data = i,
            this.length = i.length
        }
    },
    Js(Ma, xa),
    Ba.prototype = {
        nodeName: "#text",
        nodeType: na,
        splitText: function(e) {
            var t = this.data,
            i = t.substring(e);
            t = t.substring(0, e),
            this.data = this.nodeValue = t,
            this.length = t.length;
            var n = this.ownerDocument.createTextNode(i);
            return this.parentNode && this.parentNode.insertBefore(n, this.nextSibling),
            n
        }
    },
    Js(Ba, Ma),
    ja.prototype = {
        nodeName: "#comment",
        nodeType: ua
    },
    Js(ja, Ma),
    Fa.prototype = {
        nodeName: "#cdata-section",
        nodeType: ra
    },
    Js(Fa, Ma),
    Ha.prototype.nodeType = ca,
    Js(Ha, xa),
    Va.prototype.nodeType = da,
    Js(Va, xa),
    qa.prototype.nodeType = aa,
    Js(qa, xa),
    Wa.prototype.nodeType = sa,
    Js(Wa, xa),
    za.prototype.nodeName = "#document-fragment",
    za.prototype.nodeType = ha,
    Js(za, xa),
    Ga.prototype.nodeType = oa,
    Js(Ga, xa),
    Xa.prototype.serializeToString = function(e, t, i) {
        return Ka.call(e, t, i)
    },
    xa.prototype.toString = Ka;
    try {
        if (Object.defineProperty) {
            Object.defineProperty(ba.prototype, "length", {
                get: function() {
                    return Ta(this),
                    this.$$length
                }
            }),
            Object.defineProperty(xa.prototype, "textContent", {
                get: function() {
                    return function e(t) {
                        switch (t.nodeType) {
                        case ta:
                        case ha:
                            var i = [];
                            for (t = t.firstChild; t;) 7 !== t.nodeType && 8 !== t.nodeType && i.push(e(t)),
                            t = t.nextSibling;
                            return i.join("");
                        default:
                            return t.nodeValue
                        }
                    } (this)
                },
                set: function(e) {
                    switch (this.nodeType) {
                    case ta:
                    case ha:
                        for (; this.firstChild;) this.removeChild(this.firstChild); (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                        break;
                    default:
                        this.data = e,
                        this.value = e,
                        this.nodeValue = e
                    }
                }
            }),
            Qa = function(e, t, i) {
                e["$$" + t] = i
            }
        }
    } catch(e) {}
    function Ja(e) {
        return !! e && "object" == typeof e
    }
    function Za() {
        for (var e = arguments.length,
        t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return t.reduce(function(t, i) {
            return Object.keys(i).forEach(function(e) {
                Array.isArray(t[e]) && Array.isArray(i[e]) ? t[e] = t[e].concat(i[e]) : Ja(t[e]) && Ja(i[e]) ? t[e] = Za(t[e], i[e]) : t[e] = i[e]
            }),
            t
        },
        {})
    }
    function eo(e) {
        return e.reduce(function(e, t) {
            return e.concat(t)
        },
        [])
    }
    function to(e) {
        if (!e.length) return [];
        for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
        return t
    }
    function io(e) {
        var t = e.baseUrl,
        i = void 0 === t ? "": t,
        n = e.source,
        r = void 0 === n ? "": n,
        s = e.range,
        a = void 0 === s ? "": s,
        o = e.indexRange,
        u = void 0 === o ? "": o,
        l = {
            uri: r,
            resolvedUri: Cs(i || "", r)
        };
        if (a || u) {
            var c = (a || u).split("-"),
            h = parseInt(c[0], 10),
            d = parseInt(c[1], 10);
            l.byterange = {
                length: d - h + 1,
                offset: h
            }
        }
        return l
    }
    function no(e) {
        var t = e.type,
        i = void 0 === t ? "static": t,
        n = e.duration,
        r = e.timescale,
        s = void 0 === r ? 1 : r,
        a = e.sourceDuration,
        o = Go[i](e),
        u = function(e, t) {
            for (var i = [], n = e; n < t; n++) i.push(n);
            return i
        } (o.start, o.end).map(function(o) {
            return function(e, t) {
                var i = o.duration,
                n = o.timescale,
                r = void 0 === n ? 1 : n,
                s = o.periodIndex,
                a = o.startNumber;
                return {
                    number: (void 0 === a ? 1 : a) + e,
                    duration: i / r,
                    timeline: s,
                    time: t * i
                }
            }
        } (e));
        if ("static" === i) {
            var l = u.length - 1;
            u[l].duration = a - n / s * l
        }
        return u
    }
    function ro(e) {
        var t = e.baseUrl,
        i = e.initialization,
        n = void 0 === i ? {}: i,
        r = e.sourceDuration,
        s = e.timescale,
        a = void 0 === s ? 1 : s,
        o = e.indexRange,
        u = void 0 === o ? "": o,
        l = e.duration;
        if (!t) throw new Error(qo);
        var c = io({
            baseUrl: t,
            source: n.sourceURL,
            range: n.range
        }),
        h = io({
            baseUrl: t,
            source: t,
            indexRange: u
        });
        if (h.map = c, l) {
            var d = no(e);
            d.length && (h.duration = d[0].duration, h.timeline = d[0].timeline)
        } else r && (h.duration = r / a, h.timeline = 0);
        return h.number = 0,
        [h]
    }
    function so(e, t, i) {
        for (var n = e.sidx.map ? e.sidx.map: null, r = e.sidx.duration, s = e.timeline || 0, a = e.sidx.byterange, o = a.offset + a.length, u = t.timescale, l = t.references.filter(function(e) {
            return 1 !== e.referenceType
        }), c = [], h = o + t.firstOffset, d = 0; d < l.length; d++) {
            var p = t.references[d],
            f = p.referencedSize,
            m = p.subsegmentDuration,
            g = ro({
                baseUrl: i,
                timescale: u,
                timeline: s,
                periodIndex: s,
                duration: m,
                sourceDuration: r,
                indexRange: h + "-" + (h + f - 1)
            })[0];
            n && (g.map = n),
            c.push(g),
            h += f
        }
        return e.segments = c,
        e
    }
    function ao(e) {
        return function(t) {
            return Object.keys(t).map(function(e) {
                return t[e]
            })
        } (e.reduce(function(e, t) {
            var i, n = t.attributes.id + (t.attributes.lang || "");
            e[n] ? (t.segments[0] && (t.segments[0].discontinuity = !0), (i = e[n].segments).push.apply(i, t.segments), t.attributes.contentProtection && (e[n].attributes.contentProtection = t.attributes.contentProtection)) : e[n] = t;
            return e
        },
        {})).map(function(e) {
            return e.discontinuityStarts = function(e, n) {
                return e.reduce(function(e, t, i) {
                    return t[n] && e.push(i),
                    e
                },
                [])
            } (e.segments, "discontinuity"),
            e
        })
    }
    function oo(e, t) {
        if (void 0 === t && (t = {}), !Object.keys(t).length) return e;
        for (var i in e) {
            var n = e[i];
            if (n.sidx) {
                var r = n.sidx.uri + "-" + (a = n.sidx.byterange, void 0, o = a.offset + a.length - 1, a.offset + "-" + o),
                s = t[r] && t[r].sidx;
                n.sidx && s && so(n, s, n.sidx.resolvedUri)
            }
        }
        var a, o;
        return e
    }
    function uo(e) {
        var t, i = e.attributes,
        n = e.segments,
        r = e.sidx,
        s = {
            attributes: (t = {
                NAME: i.id,
                AUDIO: "audio",
                SUBTITLES: "subs",
                RESOLUTION: {
                    width: i.width,
                    height: i.height
                },
                CODECS: i.codecs,
                BANDWIDTH: i.bandwidth
            },
            t["PROGRAM-ID"] = 1, t),
            uri: "",
            endList: "static" === (i.type || "static"),
            timeline: i.periodIndex,
            resolvedUri: "",
            targetDuration: i.duration,
            segments: n,
            mediaSequence: n.length ? n[0].number: 1
        };
        return i.contentProtection && (s.contentProtection = i.contentProtection),
        r && (s.sidx = r),
        s
    }
    function lo(e, t) {
        var i;
        if (void 0 === t && (t = {}), !e.length) return {};
        var n = e[0].attributes,
        r = n.sourceDuration,
        s = n.type,
        a = void 0 === s ? "static": s,
        o = n.suggestedPresentationDelay,
        u = n.minimumUpdatePeriod,
        l = void 0 === u ? 0 : u,
        c = ao(e.filter(function(e) {
            var t = e.attributes;
            return "video/mp4" === t.mimeType || "video" === t.contentType
        })).map(uo),
        h = ao(e.filter(function(e) {
            var t = e.attributes;
            return "audio/mp4" === t.mimeType || "audio" === t.contentType
        })),
        d = e.filter(function(e) {
            var t = e.attributes;
            return "text/vtt" === t.mimeType || "text" === t.contentType
        }),
        p = {
            allowCache: !0,
            discontinuityStarts: [],
            segments: [],
            endList: !0,
            mediaGroups: (i = {
                AUDIO: {},
                VIDEO: {}
            },
            i["CLOSED-CAPTIONS"] = {},
            i.SUBTITLES = {},
            i),
            uri: "",
            duration: r,
            playlists: oo(c, t),
            minimumUpdatePeriod: 1e3 * l
        };
        return "dynamic" === a && (p.suggestedPresentationDelay = o),
        h.length && (p.mediaGroups.AUDIO.audio = function(e, a) {
            var o;
            void 0 === a && (a = {});
            var t = e.reduce(function(e, t) {
                var i = t.attributes.role && t.attributes.role.value || "",
                n = t.attributes.lang || "",
                r = "main";
                if (n) {
                    var s = i ? " (" + i + ")": "";
                    r = t.attributes.lang + s
                }
                return e[r] && e[r].playlists[0].attributes.BANDWIDTH > t.attributes.bandwidth || (e[r] = {
                    language: n,
                    autoselect: !0,
                default:
                    "main" === i,
                    playlists: oo([function(e) {
                        var t, i = e.attributes,
                        n = e.segments,
                        r = e.sidx,
                        s = {
                            attributes: (t = {
                                NAME: i.id,
                                BANDWIDTH: i.bandwidth,
                                CODECS: i.codecs
                            },
                            t["PROGRAM-ID"] = 1, t),
                            uri: "",
                            endList: "static" === (i.type || "static"),
                            timeline: i.periodIndex,
                            resolvedUri: "",
                            targetDuration: i.duration,
                            segments: n,
                            mediaSequence: n.length ? n[0].number: 1
                        };
                        return i.contentProtection && (s.contentProtection = i.contentProtection),
                        r && (s.sidx = r),
                        s
                    } (t)], a),
                    uri: ""
                },
                "undefined" == typeof o && "main" === i && ((o = t).
            default = !0)),
                e
            },
            {});
            o || (t[Object.keys(t)[0]].
        default = !0);
            return t
        } (h, t)),
        d.length && (p.mediaGroups.SUBTITLES.subs = function(e, n) {
            return void 0 === n && (n = {}),
            e.reduce(function(e, t) {
                var i = t.attributes.lang || "text";
                return e[i] || (e[i] = {
                    language: i,
                default:
                    !1,
                    autoselect: !1,
                    playlists: oo([function(e) {
                        var t, i = e.attributes,
                        n = e.segments;
                        return "undefined" == typeof n && (n = [{
                            uri: i.baseUrl,
                            timeline: i.periodIndex,
                            resolvedUri: i.baseUrl || "",
                            duration: i.sourceDuration,
                            number: 0
                        }], i.duration = i.sourceDuration),
                        {
                            attributes: (t = {
                                NAME: i.id,
                                BANDWIDTH: i.bandwidth
                            },
                            t["PROGRAM-ID"] = 1, t),
                            uri: "",
                            endList: "static" === (i.type || "static"),
                            timeline: i.periodIndex,
                            resolvedUri: i.baseUrl || "",
                            targetDuration: i.duration,
                            segments: n,
                            mediaSequence: n.length ? n[0].number: 1
                        }
                    } (t)], n),
                    uri: ""
                }),
                e
            },
            {})
        } (d, t)),
        p
    }
    function co(e, t) {
        for (var i, n, r, s, a, o, u, l, c, h, d, p, f = e.type,
        m = void 0 === f ? "static": f, g = e.minimumUpdatePeriod, v = void 0 === g ? 0 : g, y = e.media, _ = void 0 === y ? "": y, b = e.sourceDuration, T = e.timescale, S = void 0 === T ? 1 : T, k = e.startNumber, C = void 0 === k ? 1 : k, E = e.periodIndex, w = [], x = -1, A = 0; A < t.length; A++) {
            var I = t[A],
            P = I.d,
            L = I.r || 0,
            O = I.t || 0;
            x < 0 && (x = O),
            O && x < O && (x = O);
            var D = void 0;
            if (L < 0) {
                var N = A + 1;
                D = N === t.length ? "dynamic" === m && 0 < v && 0 < _.indexOf("$Number$") ? (n = x, r = P, void 0, s = (i = e).NOW, a = i.clientOffset, o = i.availabilityStartTime, u = i.timescale, l = void 0 === u ? 1 : u, c = i.start, h = void 0 === c ? 0 : c, d = i.minimumUpdatePeriod, p = (s + a) / 1e3 + (void 0 === d ? 0 : d) - (o + h), Math.ceil((p * l - n) / r)) : (b * S - x) / P: (t[N].t - x) / P
            } else D = L + 1;
            for (var R = C + w.length + D,
            U = C + w.length; U < R;) w.push({
                number: U,
                duration: P / S,
                time: x,
                timeline: E
            }),
            x += P,
            U++
        }
        return w
    }
    function ho(e, t) {
        return e.replace(Xo,
        function(s) {
            return function(e, t, i, n) {
                if ("$$" === e) return "$";
                if ("undefined" == typeof s[t]) return e;
                var r = "" + s[t];
                return "RepresentationID" === t ? r: (n = i ? parseInt(n, 10) : 1) <= r.length ? r: new Array(n - r.length + 1).join("0") + r
            }
        } (t))
    }
    function po(i, e) {
        var n = {
            RepresentationID: i.id,
            Bandwidth: i.bandwidth || 0
        },
        t = i.initialization,
        r = void 0 === t ? {
            sourceURL: "",
            range: ""
        }: t,
        s = io({
            baseUrl: i.baseUrl,
            source: ho(r.sourceURL, n),
            range: r.range
        });
        return function(e, t) {
            return e.duration || t ? e.duration ? no(e) : co(e, t) : [{
                number: e.startNumber || 1,
                duration: e.sourceDuration,
                time: 0,
                timeline: e.periodIndex
            }]
        } (i, e).map(function(e) {
            n.Number = e.number,
            n.Time = e.time;
            var t = ho(i.media || "", n);
            return {
                uri: t,
                timeline: e.timeline,
                duration: e.duration,
                resolvedUri: Cs(i.baseUrl || "", t),
                map: s,
                number: e.number
            }
        })
    }
    function fo(t, e) {
        var i = t.duration,
        n = t.segmentUrls,
        r = void 0 === n ? [] : n;
        if (!i && !e || i && e) throw new Error(Wo);
        var s, a = r.map(function(e) {
            return function(e, t) {
                var i = e.baseUrl,
                n = e.initialization,
                r = void 0 === n ? {}: n,
                s = io({
                    baseUrl: i,
                    source: r.sourceURL,
                    range: r.range
                }),
                a = io({
                    baseUrl: i,
                    source: t.media,
                    range: t.mediaRange
                });
                return a.map = s,
                a
            } (t, e)
        });
        return i && (s = no(t)),
        e && (s = co(t, e)),
        s.map(function(e, t) {
            if (a[t]) {
                var i = a[t];
                return i.timeline = e.timeline,
                i.duration = e.duration,
                i.number = e.number,
                i
            }
        }).filter(function(e) {
            return e
        })
    }
    function mo(e) {
        var t, i, n = e.attributes,
        r = e.segmentInfo;
        r.template ? (i = po, t = Za(n, r.template)) : r.base ? (i = ro, t = Za(n, r.base)) : r.list && (i = fo, t = Za(n, r.list));
        var s = {
            attributes: n
        };
        if (!i) return s;
        var a = i(t, r.timeline);
        if (t.duration) {
            var o = t,
            u = o.duration,
            l = o.timescale,
            c = void 0 === l ? 1 : l;
            t.duration = u / c
        } else a.length ? t.duration = a.reduce(function(e, t) {
            return Math.max(e, Math.ceil(t.duration))
        },
        0) : t.duration = 0;
        return s.attributes = t,
        s.segments = a,
        r.base && t.indexRange && (s.sidx = a[0], s.segments = []),
        s
    }
    function go(e, t) {
        return to(e.childNodes).filter(function(e) {
            return e.tagName === t
        })
    }
    function vo(e) {
        return e.textContent.trim()
    }
    function yo(e) {
        var t = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);
        if (!t) return 0;
        var i = t.slice(1),
        n = i[0],
        r = i[1],
        s = i[2],
        a = i[3],
        o = i[4],
        u = i[5];
        return 31536e3 * parseFloat(n || 0) + 2592e3 * parseFloat(r || 0) + 86400 * parseFloat(s || 0) + 3600 * parseFloat(a || 0) + 60 * parseFloat(o || 0) + parseFloat(u || 0)
    }
    function _o(e) {
        return e && e.attributes ? to(e.attributes).reduce(function(e, t) {
            var i = Ko[t.name] || Ko.DEFAULT;
            return e[t.name] = i(t.value),
            e
        },
        {}) : {}
    }
    function bo(e, i) {
        return i.length ? eo(e.map(function(t) {
            return i.map(function(e) {
                return Cs(t, vo(e))
            })
        })) : e
    }
    function To(e) {
        var t = go(e, "SegmentTemplate")[0],
        i = go(e, "SegmentList")[0],
        n = i && go(i, "SegmentURL").map(function(e) {
            return Za({
                tag: "SegmentURL"
            },
            _o(e))
        }),
        r = go(e, "SegmentBase")[0],
        s = i || t,
        a = s && go(s, "SegmentTimeline")[0],
        o = i || r || t,
        u = o && go(o, "Initialization")[0],
        l = t && _o(t);
        l && u ? l.initialization = u && _o(u) : l && l.initialization && (l.initialization = {
            sourceURL: l.initialization
        });
        var c = {
            template: l,
            timeline: a && go(a, "S").map(function(e) {
                return _o(e)
            }),
            list: i && Za(_o(i), {
                segmentUrls: n,
                initialization: _o(u)
            }),
            base: r && Za(_o(r), {
                initialization: _o(u)
            })
        };
        return Object.keys(c).forEach(function(e) {
            c[e] || delete c[e]
        }),
        c
    }
    function So(c, h, d) {
        return function(e) {
            var t = _o(e),
            i = bo(h, go(e, "BaseURL")),
            n = go(e, "Role")[0],
            r = {
                role: _o(n)
            },
            s = Za(c, t, r),
            a = function(e) {
                return e.reduce(function(e, t) {
                    var i = _o(t),
                    n = Yo[i.schemeIdUri];
                    if (n) {
                        e[n] = {
                            attributes: i
                        };
                        var r = go(t, "cenc:pssh")[0];
                        if (r) {
                            var s = vo(r),
                            a = s && xs(s);
                            e[n].pssh = a
                        }
                    }
                    return e
                },
                {})
            } (go(e, "ContentProtection"));
            Object.keys(a).length && (s = Za(s, {
                contentProtection: a
            }));
            var o = To(e),
            u = go(e, "Representation"),
            l = Za(d, o);
            return eo(u.map(function(s, a, o) {
                return function(e) {
                    var t = go(e, "BaseURL"),
                    i = bo(a, t),
                    n = Za(s, _o(e)),
                    r = To(e);
                    return i.map(function(e) {
                        return {
                            segmentInfo: Za(o, r),
                            attributes: Za(n, {
                                baseUrl: e
                            })
                        }
                    })
                }
            } (s, i, l)))
        }
    }
    function ko(e, t) {
        void 0 === t && (t = {});
        var i = t,
        n = i.manifestUri,
        r = void 0 === n ? "": n,
        s = i.NOW,
        a = void 0 === s ? Date.now() : s,
        o = i.clientOffset,
        u = void 0 === o ? 0 : o,
        l = go(e, "Period");
        if (!l.length) throw new Error(Fo);
        var c = _o(e),
        h = bo([r], go(e, "BaseURL"));
        return c.sourceDuration = c.mediaPresentationDuration || 0,
        c.NOW = a,
        c.clientOffset = u,
        eo(l.map(function(l, c) {
            return function(e, t) {
                var i = bo(c, go(e, "BaseURL")),
                n = _o(e),
                r = parseInt(n.id, 10),
                s = y.isNaN(r) ? t: r,
                a = Za(l, {
                    periodIndex: s
                }),
                o = go(e, "AdaptationSet"),
                u = To(e);
                return eo(o.map(So(a, i, u)))
            }
        } (c, h)))
    }
    function Co(e) {
        if ("" === e) throw new Error(Ho);
        var t = (new jo).parseFromString(e, "application/xml"),
        i = t && "MPD" === t.documentElement.tagName ? t.documentElement: null;
        if (!i || i && 0 < i.getElementsByTagName("parsererror").length) throw new Error(Vo);
        return i
    }
    function Eo(e, t) {
        return void 0 === t && (t = {}),
        lo(function(e) {
            return e.map(mo)
        } (ko(Co(e), t)), t.sidxMapping)
    }
    function wo(e) {
        return function(e) {
            var t = go(e, "UTCTiming")[0];
            if (!t) return null;
            var i = _o(t);
            switch (i.schemeIdUri) {
            case "urn:mpeg:dash:utc:http-head:2014":
            case "urn:mpeg:dash:utc:http-head:2012":
                i.method = "HEAD";
                break;
            case "urn:mpeg:dash:utc:http-xsdate:2014":
            case "urn:mpeg:dash:utc:http-iso:2014":
            case "urn:mpeg:dash:utc:http-xsdate:2012":
            case "urn:mpeg:dash:utc:http-iso:2012":
                i.method = "GET";
                break;
            case "urn:mpeg:dash:utc:direct:2014":
            case "urn:mpeg:dash:utc:direct:2012":
                i.method = "DIRECT",
                i.value = Date.parse(i.value);
                break;
            case "urn:mpeg:dash:utc:http-ntp:2014":
            case "urn:mpeg:dash:utc:ntp:2014":
            case "urn:mpeg:dash:utc:sntp:2014":
            default:
                throw new Error(zo)
            }
            return i
        } (Co(e))
    }
    function xo(e) {
        return new Date(1e3 * e - 20828448e5)
    }
    function Ao(e) {
        return {
            isLeading: (12 & e[0]) >>> 2,
            dependsOn: 3 & e[0],
            isDependedOn: (192 & e[1]) >>> 6,
            hasRedundancy: (48 & e[1]) >>> 4,
            paddingValue: (14 & e[1]) >>> 1,
            isNonSyncSample: 1 & e[1],
            degradationPriority: e[2] << 8 | e[3]
        }
    }
    function Io(e) {
        var t = "";
        return t += String.fromCharCode(e[0]),
        t += String.fromCharCode(e[1]),
        t += String.fromCharCode(e[2]),
        t += String.fromCharCode(e[3])
    }
    var Po, Lo, Oo, Do, No, Ro, Uo, Mo = {
        DOMImplementation: wa,
        XMLSerializer: Xa
    },
    Bo = t(function(e, t) {
        function i(e) {
            this.options = e || {
                locator: {}
            }
        }
        function l() {
            this.cdata = !1
        }
        function c(e, t) {
            t.lineNumber = e.lineNumber,
            t.columnNumber = e.columnNumber
        }
        function h(e) {
            if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]"
        }
        function r(e, t, i) {
            return "string" == typeof e ? e.substr(t, i) : e.length >= t + i || t ? new java.lang.String(e, t, i) + "": e
        }
        function d(e, t) {
            e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t)
        }
        i.prototype.parseFromString = function(e, t) {
            var i = this.options,
            n = new p,
            r = i.domBuilder || new l,
            s = i.errorHandler,
            a = i.locator,
            o = i.xmlns || {},
            u = {
                lt: "<",
                gt: ">",
                amp: "&",
                quot: '"',
                apos: "'"
            };
            return a && r.setDocumentLocator(a),
            n.errorHandler = function(n, e, r) {
                if (!n) {
                    if (e instanceof l) return e;
                    n = e
                }
                var s = {},
                a = n instanceof Function;
                function t(t) {
                    var i = n[t]; ! i && a && (i = 2 == n.length ?
                    function(e) {
                        n(t, e)
                    }: n),
                    s[t] = i &&
                    function(e) {
                        i("[xmldom " + t + "]\t" + e + h(r))
                    } ||
                    function() {}
                }
                return r = r || {},
                t("warning"),
                t("error"),
                t("fatalError"),
                s
            } (s, r, a),
            n.domBuilder = i.domBuilder || r,
            /\/x?html?$/.test(t) && (u.nbsp = " ", u.copy = "©", o[""] = "http://www.w3.org/1999/xhtml"),
            o.xml = o.xml || "http://www.w3.org/XML/1998/namespace",
            e ? n.parse(e, o, u) : n.errorHandler.error("invalid doc source"),
            r.doc
        },
        l.prototype = {
            startDocument: function() {
                this.doc = (new n).createDocument(null, null, null),
                this.locator && (this.doc.documentURI = this.locator.systemId)
            },
            startElement: function(e, t, i, n) {
                var r = this.doc,
                s = r.createElementNS(e, i || t),
                a = n.length;
                d(this, s),
                this.currentElement = s,
                this.locator && c(this.locator, s);
                for (var o = 0; o < a; o++) {
                    e = n.getURI(o);
                    var u = n.getValue(o),
                    l = (i = n.getQName(o), r.createAttributeNS(e, i));
                    this.locator && c(n.getLocator(o), l),
                    l.value = l.nodeValue = u,
                    s.setAttributeNode(l)
                }
            },
            endElement: function(e, t, i) {
                var n = this.currentElement;
                n.tagName;
                this.currentElement = n.parentNode
            },
            startPrefixMapping: function(e, t) {},
            endPrefixMapping: function(e) {},
            processingInstruction: function(e, t) {
                var i = this.doc.createProcessingInstruction(e, t);
                this.locator && c(this.locator, i),
                d(this, i)
            },
            ignorableWhitespace: function(e, t, i) {},
            characters: function(e, t, i) {
                if (e = r.apply(this, arguments)) {
                    if (this.cdata) var n = this.doc.createCDATASection(e);
                    else n = this.doc.createTextNode(e);
                    this.currentElement ? this.currentElement.appendChild(n) : /^\s*$/.test(e) && this.doc.appendChild(n),
                    this.locator && c(this.locator, n)
                }
            },
            skippedEntity: function(e) {},
            endDocument: function() {
                this.doc.normalize()
            },
            setDocumentLocator: function(e) { (this.locator = e) && (e.lineNumber = 0)
            },
            comment: function(e, t, i) {
                e = r.apply(this, arguments);
                var n = this.doc.createComment(e);
                this.locator && c(this.locator, n),
                d(this, n)
            },
            startCDATA: function() {
                this.cdata = !0
            },
            endCDATA: function() {
                this.cdata = !1
            },
            startDTD: function(e, t, i) {
                var n = this.doc.implementation;
                if (n && n.createDocumentType) {
                    var r = n.createDocumentType(e, t, i);
                    this.locator && c(this.locator, r),
                    d(this, r)
                }
            },
            warning: function(e) {},
            error: function(e) {},
            fatalError: function(e) {
                throw e
            }
        },
        "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,
        function(e) {
            l.prototype[e] = function() {
                return null
            }
        });
        var p = $s.XMLReader,
        n = t.DOMImplementation = Mo.DOMImplementation;
        t.XMLSerializer = Mo.XMLSerializer,
        t.DOMParser = i
    }),
    jo = (Bo.DOMImplementation, Bo.XMLSerializer, Bo.DOMParser),
    Fo = "INVALID_NUMBER_OF_PERIOD",
    Ho = "DASH_EMPTY_MANIFEST",
    Vo = "DASH_INVALID_XML",
    qo = "NO_BASE_URL",
    Wo = "SEGMENT_TIME_UNSPECIFIED",
    zo = "UNSUPPORTED_UTC_TIMING_SCHEME",
    Go = {
        static: function(e) {
            var t = e.duration,
            i = e.timescale,
            n = void 0 === i ? 1 : i,
            r = e.sourceDuration;
            return {
                start: 0,
                end: Math.ceil(r / (t / n))
            }
        },
        dynamic: function(e) {
            var t = e.NOW,
            i = e.clientOffset,
            n = e.availabilityStartTime,
            r = e.timescale,
            s = void 0 === r ? 1 : r,
            a = e.duration,
            o = e.start,
            u = void 0 === o ? 0 : o,
            l = e.minimumUpdatePeriod,
            c = void 0 === l ? 0 : l,
            h = e.timeShiftBufferDepth,
            d = void 0 === h ? 1 / 0 : h,
            p = (t + i) / 1e3,
            f = n + u,
            m = p + c - f,
            g = Math.ceil(m * s / a),
            v = Math.floor((p - f - d) * s / a),
            y = Math.floor((p - f) * s / a);
            return {
                start: Math.max(0, v),
                end: Math.min(g, y)
            }
        }
    },
    Xo = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
    Ko = {
        mediaPresentationDuration: function(e) {
            return yo(e)
        },
        availabilityStartTime: function(e) {
            return function(e) {
                return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e) && (e += "Z"),
                Date.parse(e)
            } (e) / 1e3
        },
        minimumUpdatePeriod: function(e) {
            return yo(e)
        },
        suggestedPresentationDelay: function(e) {
            return yo(e)
        },
        type: function(e) {
            return e
        },
        timeShiftBufferDepth: function(e) {
            return yo(e)
        },
        start: function(e) {
            return yo(e)
        },
        width: function(e) {
            return parseInt(e, 10)
        },
        height: function(e) {
            return parseInt(e, 10)
        },
        bandwidth: function(e) {
            return parseInt(e, 10)
        },
        startNumber: function(e) {
            return parseInt(e, 10)
        },
        timescale: function(e) {
            return parseInt(e, 10)
        },
        duration: function(e) {
            var t = parseInt(e, 10);
            return isNaN(t) ? yo(e) : t
        },
        d: function(e) {
            return parseInt(e, 10)
        },
        t: function(e) {
            return parseInt(e, 10)
        },
        r: function(e) {
            return parseInt(e, 10)
        },
        DEFAULT: function(e) {
            return e
        }
    },
    Yo = {
        "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
        "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
        "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
        "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
    },
    $o = function(e) {
        return e >>> 0
    },
    Qo = function(e) {
        return ("00" + e.toString(16)).slice( - 2)
    },
    Jo = $o,
    Zo = {
        avc1: function(e) {
            var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
            return {
                dataReferenceIndex: t.getUint16(6),
                width: t.getUint16(24),
                height: t.getUint16(26),
                horizresolution: t.getUint16(28) + t.getUint16(30) / 16,
                vertresolution: t.getUint16(32) + t.getUint16(34) / 16,
                frameCount: t.getUint16(40),
                depth: t.getUint16(74),
                config: Po(e.subarray(78, e.byteLength))
            }
        },
        avcC: function(e) {
            var t, i, n, r, s = new DataView(e.buffer, e.byteOffset, e.byteLength),
            a = {
                configurationVersion: e[0],
                avcProfileIndication: e[1],
                profileCompatibility: e[2],
                avcLevelIndication: e[3],
                lengthSizeMinusOne: 3 & e[4],
                sps: [],
                pps: []
            },
            o = 31 & e[5];
            for (n = 6, r = 0; r < o; r++) i = s.getUint16(n),
            n += 2,
            a.sps.push(new Uint8Array(e.subarray(n, n + i))),
            n += i;
            for (t = e[n], n++, r = 0; r < t; r++) i = s.getUint16(n),
            n += 2,
            a.pps.push(new Uint8Array(e.subarray(n, n + i))),
            n += i;
            return a
        },
        btrt: function(e) {
            var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
            return {
                bufferSizeDB: t.getUint32(0),
                maxBitrate: t.getUint32(4),
                avgBitrate: t.getUint32(8)
            }
        },
        esds: function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                esId: e[6] << 8 | e[7],
                streamPriority: 31 & e[8],
                decoderConfig: {
                    objectProfileIndication: e[11],
                    streamType: e[12] >>> 2 & 63,
                    bufferSize: e[13] << 16 | e[14] << 8 | e[15],
                    maxBitrate: e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19],
                    avgBitrate: e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23],
                    decoderConfigDescriptor: {
                        tag: e[24],
                        length: e[25],
                        audioObjectType: e[26] >>> 3 & 31,
                        samplingFrequencyIndex: (7 & e[26]) << 1 | e[27] >>> 7 & 1,
                        channelConfiguration: e[27] >>> 3 & 15
                    }
                }
            }
        },
        ftyp: function(e) {
            for (var t = new DataView(e.buffer, e.byteOffset, e.byteLength), i = {
                majorBrand: Io(e.subarray(0, 4)),
                minorVersion: t.getUint32(4),
                compatibleBrands: []
            },
            n = 8; n < e.byteLength;) i.compatibleBrands.push(Io(e.subarray(n, n + 4))),
            n += 4;
            return i
        },
        dinf: function(e) {
            return {
                boxes: Po(e)
            }
        },
        dref: function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                dataReferences: Po(e.subarray(8))
            }
        },
        hdlr: function(e) {
            var t = {
                version: new DataView(e.buffer, e.byteOffset, e.byteLength).getUint8(0),
                flags: new Uint8Array(e.subarray(1, 4)),
                handlerType: Io(e.subarray(8, 12)),
                name: ""
            },
            i = 8;
            for (i = 24; i < e.byteLength; i++) {
                if (0 === e[i]) {
                    i++;
                    break
                }
                t.name += String.fromCharCode(e[i])
            }
            return t.name = decodeURIComponent(escape(t.name)),
            t
        },
        mdat: function(e) {
            return {
                byteLength: e.byteLength,
                nals: function(e) {
                    var t, i, n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    r = [];
                    for (t = 0; t + 4 < e.length; t += i) if (i = n.getUint32(t), t += 4, i <= 0) r.push("<span style='color:red;'>MALFORMED DATA</span>");
                    else switch (31 & e[t]) {
                    case 1:
                        r.push("slice_layer_without_partitioning_rbsp");
                        break;
                    case 5:
                        r.push("slice_layer_without_partitioning_rbsp_idr");
                        break;
                    case 6:
                        r.push("sei_rbsp");
                        break;
                    case 7:
                        r.push("seq_parameter_set_rbsp");
                        break;
                    case 8:
                        r.push("pic_parameter_set_rbsp");
                        break;
                    case 9:
                        r.push("access_unit_delimiter_rbsp");
                        break;
                    default:
                        r.push("UNKNOWN NAL - " + e[t] & 31)
                    }
                    return r
                } (e)
            }
        },
        mdhd: function(e) {
            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
            n = 4,
            r = {
                version: i.getUint8(0),
                flags: new Uint8Array(e.subarray(1, 4)),
                language: ""
            };
            return 1 === r.version ? (n += 4, r.creationTime = xo(i.getUint32(n)), n += 8, r.modificationTime = xo(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 8) : (r.creationTime = xo(i.getUint32(n)), n += 4, r.modificationTime = xo(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 4),
            r.duration = i.getUint32(n),
            n += 4,
            t = i.getUint16(n),
            r.language += String.fromCharCode(96 + (t >> 10)),
            r.language += String.fromCharCode(96 + ((992 & t) >> 5)),
            r.language += String.fromCharCode(96 + (31 & t)),
            r
        },
        mdia: function(e) {
            return {
                boxes: Po(e)
            }
        },
        mfhd: function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                sequenceNumber: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
            }
        },
        minf: function(e) {
            return {
                boxes: Po(e)
            }
        },
        mp4a: function(e) {
            var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
            i = {
                dataReferenceIndex: t.getUint16(6),
                channelcount: t.getUint16(16),
                samplesize: t.getUint16(18),
                samplerate: t.getUint16(24) + t.getUint16(26) / 65536
            };
            return 28 < e.byteLength && (i.streamDescriptor = Po(e.subarray(28))[0]),
            i
        },
        moof: function(e) {
            return {
                boxes: Po(e)
            }
        },
        moov: function(e) {
            return {
                boxes: Po(e)
            }
        },
        mvex: function(e) {
            return {
                boxes: Po(e)
            }
        },
        mvhd: function(e) {
            var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
            i = 4,
            n = {
                version: t.getUint8(0),
                flags: new Uint8Array(e.subarray(1, 4))
            };
            return 1 === n.version ? (i += 4, n.creationTime = xo(t.getUint32(i)), i += 8, n.modificationTime = xo(t.getUint32(i)), i += 4, n.timescale = t.getUint32(i), i += 8) : (n.creationTime = xo(t.getUint32(i)), i += 4, n.modificationTime = xo(t.getUint32(i)), i += 4, n.timescale = t.getUint32(i), i += 4),
            n.duration = t.getUint32(i),
            i += 4,
            n.rate = t.getUint16(i) + t.getUint16(i + 2) / 16,
            i += 4,
            n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8,
            i += 2,
            i += 2,
            i += 8,
            n.matrix = new Uint32Array(e.subarray(i, i + 36)),
            i += 36,
            i += 24,
            n.nextTrackId = t.getUint32(i),
            n
        },
        pdin: function(e) {
            var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
            return {
                version: t.getUint8(0),
                flags: new Uint8Array(e.subarray(1, 4)),
                rate: t.getUint32(4),
                initialDelay: t.getUint32(8)
            }
        },
        sdtp: function(e) {
            var t, i = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                samples: []
            };
            for (t = 4; t < e.byteLength; t++) i.samples.push({
                dependsOn: (48 & e[t]) >> 4,
                isDependedOn: (12 & e[t]) >> 2,
                hasRedundancy: 3 & e[t]
            });
            return i
        },
        sidx: function(e) {
            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
            n = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                references: [],
                referenceId: i.getUint32(4),
                timescale: i.getUint32(8),
                earliestPresentationTime: i.getUint32(12),
                firstOffset: i.getUint32(16)
            },
            r = i.getUint16(22);
            for (t = 24; r; t += 12, r--) n.references.push({
                referenceType: (128 & e[t]) >>> 7,
                referencedSize: 2147483647 & i.getUint32(t),
                subsegmentDuration: i.getUint32(t + 4),
                startsWithSap: !!(128 & e[t + 8]),
                sapType: (112 & e[t + 8]) >>> 4,
                sapDeltaTime: 268435455 & i.getUint32(t + 8)
            });
            return n
        },
        smhd: function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                balance: e[4] + e[5] / 256
            }
        },
        stbl: function(e) {
            return {
                boxes: Po(e)
            }
        },
        stco: function(e) {
            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
            n = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                chunkOffsets: []
            },
            r = i.getUint32(4);
            for (t = 8; r; t += 4, r--) n.chunkOffsets.push(i.getUint32(t));
            return n
        },
        stsc: function(e) {
            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
            n = i.getUint32(4),
            r = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                sampleToChunks: []
            };
            for (t = 8; n; t += 12, n--) r.sampleToChunks.push({
                firstChunk: i.getUint32(t),
                samplesPerChunk: i.getUint32(t + 4),
                sampleDescriptionIndex: i.getUint32(t + 8)
            });
            return r
        },
        stsd: function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                sampleDescriptions: Po(e.subarray(8))
            }
        },
        stsz: function(e) {
            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
            n = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                sampleSize: i.getUint32(4),
                entries: []
            };
            for (t = 12; t < e.byteLength; t += 4) n.entries.push(i.getUint32(t));
            return n
        },
        stts: function(e) {
            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
            n = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                timeToSamples: []
            },
            r = i.getUint32(4);
            for (t = 8; r; t += 8, r--) n.timeToSamples.push({
                sampleCount: i.getUint32(t),
                sampleDelta: i.getUint32(t + 4)
            });
            return n
        },
        styp: function(e) {
            return Zo.ftyp(e)
        },
        tfdt: function(e) {
            var t = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                baseMediaDecodeTime: Jo(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7])
            };
            return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32), t.baseMediaDecodeTime += Jo(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])),
            t
        },
        tfhd: function(e) {
            var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
            n = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                trackId: i.getUint32(4)
            },
            r = 1 & n.flags[2],
            s = 2 & n.flags[2],
            a = 8 & n.flags[2],
            o = 16 & n.flags[2],
            u = 32 & n.flags[2],
            l = 65536 & n.flags[0],
            c = 131072 & n.flags[0];
            return t = 8,
            r && (t += 4, n.baseDataOffset = i.getUint32(12), t += 4),
            s && (n.sampleDescriptionIndex = i.getUint32(t), t += 4),
            a && (n.defaultSampleDuration = i.getUint32(t), t += 4),
            o && (n.defaultSampleSize = i.getUint32(t), t += 4),
            u && (n.defaultSampleFlags = i.getUint32(t)),
            l && (n.durationIsEmpty = !0),
            !r && c && (n.baseDataOffsetIsMoof = !0),
            n
        },
        tkhd: function(e) {
            var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
            i = 4,
            n = {
                version: t.getUint8(0),
                flags: new Uint8Array(e.subarray(1, 4))
            };
            return 1 === n.version ? (i += 4, n.creationTime = xo(t.getUint32(i)), i += 8, n.modificationTime = xo(t.getUint32(i)), i += 4, n.trackId = t.getUint32(i), i += 4, i += 8) : (n.creationTime = xo(t.getUint32(i)), i += 4, n.modificationTime = xo(t.getUint32(i)), i += 4, n.trackId = t.getUint32(i), i += 4, i += 4),
            n.duration = t.getUint32(i),
            i += 4,
            i += 8,
            n.layer = t.getUint16(i),
            i += 2,
            n.alternateGroup = t.getUint16(i),
            i += 2,
            n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8,
            i += 2,
            i += 2,
            n.matrix = new Uint32Array(e.subarray(i, i + 36)),
            i += 36,
            n.width = t.getUint16(i) + t.getUint16(i + 2) / 65536,
            i += 4,
            n.height = t.getUint16(i) + t.getUint16(i + 2) / 65536,
            n
        },
        traf: function(e) {
            return {
                boxes: Po(e)
            }
        },
        trak: function(e) {
            return {
                boxes: Po(e)
            }
        },
        trex: function(e) {
            var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                trackId: t.getUint32(4),
                defaultSampleDescriptionIndex: t.getUint32(8),
                defaultSampleDuration: t.getUint32(12),
                defaultSampleSize: t.getUint32(16),
                sampleDependsOn: 3 & e[20],
                sampleIsDependedOn: (192 & e[21]) >> 6,
                sampleHasRedundancy: (48 & e[21]) >> 4,
                samplePaddingValue: (14 & e[21]) >> 1,
                sampleIsDifferenceSample: !!(1 & e[21]),
                sampleDegradationPriority: t.getUint16(22)
            }
        },
        trun: function(e) {
            var t, i = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                samples: []
            },
            n = new DataView(e.buffer, e.byteOffset, e.byteLength),
            r = 1 & i.flags[2],
            s = 4 & i.flags[2],
            a = 1 & i.flags[1],
            o = 2 & i.flags[1],
            u = 4 & i.flags[1],
            l = 8 & i.flags[1],
            c = n.getUint32(4),
            h = 8;
            for (r && (i.dataOffset = n.getInt32(h), h += 4), s && c && (t = {
                flags: Ao(e.subarray(h, h + 4))
            },
            h += 4, a && (t.duration = n.getUint32(h), h += 4), o && (t.size = n.getUint32(h), h += 4), l && (t.compositionTimeOffset = n.getUint32(h), h += 4), i.samples.push(t), c--); c--;) t = {},
            a && (t.duration = n.getUint32(h), h += 4),
            o && (t.size = n.getUint32(h), h += 4),
            u && (t.flags = Ao(e.subarray(h, h + 4)), h += 4),
            l && (t.compositionTimeOffset = n.getUint32(h), h += 4),
            i.samples.push(t);
            return i
        },
        "url ": function(e) {
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4))
            }
        },
        vmhd: function(e) {
            var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
            return {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                graphicsmode: t.getUint16(4),
                opcolor: new Uint16Array([t.getUint16(6), t.getUint16(8), t.getUint16(10)])
            }
        }
    },
    eu = {
        inspect: Po = function(e) {
            for (var t, i, n, r, s, a = 0,
            o = [], u = new ArrayBuffer(e.length), l = new Uint8Array(u), c = 0; c < e.length; ++c) l[c] = e[c];
            for (t = new DataView(u); a < e.byteLength;) i = t.getUint32(a),
            n = Io(e.subarray(a + 4, a + 8)),
            r = 1 < i ? a + i: e.byteLength,
            (s = (Zo[n] ||
            function(e) {
                return {
                    data: e
                }
            })(e.subarray(a + 8, r))).size = i,
            s.type = n,
            o.push(s),
            a = r;
            return o
        },
        textify: Lo = function(e, t) {
            var s;
            return t = t || 0,
            s = new Array(2 * t + 1).join(" "),
            e.map(function(r, e) {
                return s + r.type + "\n" + Object.keys(r).filter(function(e) {
                    return "type" !== e && "boxes" !== e
                }).map(function(e) {
                    var t = s + "  " + e + ": ",
                    i = r[e];
                    if (i instanceof Uint8Array || i instanceof Uint32Array) {
                        var n = Array.prototype.slice.call(new Uint8Array(i.buffer, i.byteOffset, i.byteLength)).map(function(e) {
                            return " " + ("00" + e.toString(16)).slice( - 2)
                        }).join("").match(/.{1,24}/g);
                        return n ? 1 === n.length ? t + "<" + n.join("").slice(1) + ">": t + "<\n" + n.map(function(e) {
                            return s + "  " + e
                        }).join("\n") + "\n" + s + "  >": t + "<>"
                    }
                    return t + JSON.stringify(i, null, 2).split("\n").map(function(e, t) {
                        return 0 === t ? e: s + "  " + e
                    }).join("\n")
                }).join("\n") + (r.boxes ? "\n" + Lo(r.boxes, t + 1) : "")
            }).join("\n")
        },
        parseType: Io,
        findBox: function e(t, i) {
            var n, r, s, a, o, u = [];
            if (!i.length) return null;
            for (n = 0; n < t.byteLength;) r = Jo(t[n] << 24 | t[n + 1] << 16 | t[n + 2] << 8 | t[n + 3]),
            s = Io(t.subarray(n + 4, n + 8)),
            a = 1 < r ? n + r: t.byteLength,
            s === i[0] && (1 === i.length ? u.push(t.subarray(n + 8, a)) : (o = e(t.subarray(n + 8, a), i.slice(1))).length && (u = u.concat(o))),
            n = a;
            return u
        },
        parseTraf: Zo.traf,
        parseTfdt: Zo.tfdt,
        parseHdlr: Zo.hdlr,
        parseTfhd: Zo.tfhd,
        parseTrun: Zo.trun,
        parseSidx: Zo.sidx
    },
    tu = $o,
    iu = Qo;
    Oo = function(e) {
        return eu.findBox(e, ["moov", "trak"]).reduce(function(e, t) {
            var i, n, r, s, a;
            return (i = eu.findBox(t, ["tkhd"])[0]) ? (n = i[0], s = tu(i[r = 0 === n ? 12 : 20] << 24 | i[r + 1] << 16 | i[r + 2] << 8 | i[r + 3]), (a = eu.findBox(t, ["mdia", "mdhd"])[0]) ? (r = 0 === (n = a[0]) ? 12 : 20, e[s] = tu(a[r] << 24 | a[r + 1] << 16 | a[r + 2] << 8 | a[r + 3]), e) : null) : null
        },
        {})
    },
    Do = function(r, e) {
        var t, i, n;
        return t = eu.findBox(e, ["moof", "traf"]),
        i = [].concat.apply([], t.map(function(n) {
            return eu.findBox(n, ["tfhd"]).map(function(e) {
                var t, i;
                return t = tu(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]),
                i = r[t] || 9e4,
                (eu.findBox(n, ["tfdt"]).map(function(e) {
                    var t, i;
                    return t = e[0],
                    i = tu(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]),
                    1 === t && (i *= Math.pow(2, 32), i += tu(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])),
                    i
                })[0] || 1 / 0) / i
            })
        })),
        n = Math.min.apply(null, i),
        isFinite(n) ? n: 0
    },
    No = function(e, t) {
        var i, n = eu.findBox(t, ["moof", "traf"]),
        r = 0,
        s = 0;
        if (n && n.length) for (var a = eu.parseTraf(n[0]), o = 0; o < a.boxes.length; o++)"tfhd" === a.boxes[o].type ? i = a.boxes[o].trackId: "tfdt" === a.boxes[o].type ? r = a.boxes[o].baseMediaDecodeTime: "trun" === a.boxes[o].type && a.boxes[o].samples.length && (s = a.boxes[o].samples[0].compositionTimeOffset || 0);
        return (r + s) / (e[i] || 9e4)
    },
    Ro = function(e) {
        var t = eu.findBox(e, ["moov", "trak"]),
        o = [];
        return t.forEach(function(e) {
            var t = eu.findBox(e, ["mdia", "hdlr"]),
            a = eu.findBox(e, ["tkhd"]);
            t.forEach(function(e, t) {
                var i, n, r = eu.parseType(e.subarray(8, 12)),
                s = a[t];
                "vide" === r && (n = 0 === (i = new DataView(s.buffer, s.byteOffset, s.byteLength)).getUint8(0) ? i.getUint32(12) : i.getUint32(20), o.push(n))
            })
        }),
        o
    },
    Uo = function(e) {
        var t = eu.findBox(e, ["moov", "trak"]),
        p = [];
        return t.forEach(function(e) {
            var t, i, n = {},
            r = eu.findBox(e, ["tkhd"])[0];
            r && (i = (t = new DataView(r.buffer, r.byteOffset, r.byteLength)).getUint8(0), n.id = 0 === i ? t.getUint32(12) : t.getUint32(20));
            var s = eu.findBox(e, ["mdia", "hdlr"])[0];
            if (s) {
                var a = eu.parseType(s.subarray(8, 12));
                n.type = "vide" === a ? "video": "soun" === a ? "audio": a
            }
            var o = eu.findBox(e, ["mdia", "minf", "stbl", "stsd"])[0];
            if (o) {
                var u = o.subarray(8);
                n.codec = eu.parseType(u.subarray(4, 8));
                var l, c = eu.findBox(u, [n.codec])[0];
                c && (/^[a-z]vc[1-9]$/i.test(n.codec) ? (l = c.subarray(78), "avcC" === eu.parseType(l.subarray(4, 8)) && 11 < l.length ? (n.codec += ".", n.codec += iu(l[9]), n.codec += iu(l[10]), n.codec += iu(l[11])) : n.codec = "avc1.4d400d") : /^mp4[a,v]$/i.test(n.codec) && (l = c.subarray(28), "esds" === eu.parseType(l.subarray(4, 8)) && 20 < l.length && 0 !== l[19] ? (n.codec += "." + iu(l[19]), n.codec += "." + iu(l[20] >>> 2 & 63).replace(/^0/, "")) : n.codec = "mp4a.40.2"))
            }
            var h = eu.findBox(e, ["mdia", "mdhd"])[0];
            if (h && r) {
                var d = 0 === i ? 12 : 20;
                n.timescale = tu(h[d] << 24 | h[1 + d] << 16 | h[2 + d] << 8 | h[3 + d])
            }
            p.push(n)
        }),
        p
    };
    function nu() {
        this.init = function() {
            var s = {};
            this.on = function(e, t) {
                s[e] || (s[e] = []),
                s[e] = s[e].concat(t)
            },
            this.off = function(e, t) {
                var i;
                return !! s[e] && (i = s[e].indexOf(t), s[e] = s[e].slice(), s[e].splice(i, 1), -1 < i)
            },
            this.trigger = function(e) {
                var t, i, n, r;
                if (t = s[e]) if (2 === arguments.length) for (n = t.length, i = 0; i < n; ++i) t[i].call(this, arguments[1]);
                else {
                    for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i) r.push(arguments[i]);
                    for (n = t.length, i = 0; i < n; ++i) t[i].apply(this, r)
                }
            },
            this.dispose = function() {
                s = {}
            }
        }
    }
    var ru = {
        findBox: eu.findBox,
        parseType: eu.parseType,
        timescale: Oo,
        startTime: Do,
        compositionStartTime: No,
        videoTrackIds: Ro,
        tracks: Uo
    },
    su = function(e) {
        for (var t = 0,
        i = {
            payloadType: -1,
            payloadSize: 0
        },
        n = 0, r = 0; t < e.byteLength && 128 !== e[t];) {
            for (; 255 === e[t];) n += 255,
            t++;
            for (n += e[t++]; 255 === e[t];) r += 255,
            t++;
            if (r += e[t++], !i.payload && 4 === n) {
                if ("GA94" === String.fromCharCode(e[t + 3], e[t + 4], e[t + 5], e[t + 6])) {
                    i.payloadType = n,
                    i.payloadSize = r,
                    i.payload = e.subarray(t, t + r);
                    break
                }
                i.payload = void 0
            }
            t += r,
            r = n = 0
        }
        return i
    },
    au = function(e) {
        return 181 !== e.payload[0] ? null: 49 != (e.payload[1] << 8 | e.payload[2]) ? null: "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null: 3 !== e.payload[7] ? null: e.payload.subarray(8, e.payload.length - 1)
    },
    ou = function(e, t) {
        var i, n, r, s, a = [];
        if (! (64 & t[0])) return a;
        for (n = 31 & t[0], i = 0; i < n; i++) s = {
            type: 3 & t[2 + (r = 3 * i)],
            pts: e
        },
        4 & t[2 + r] && (s.ccData = t[3 + r] << 8 | t[4 + r], a.push(s));
        return a
    },
    uu = function(e) {
        for (var t, i, n = e.byteLength,
        r = [], s = 1; s < n - 2;) 0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (r.push(s + 2), s += 2) : s++;
        if (0 === r.length) return e;
        t = n - r.length,
        i = new Uint8Array(t);
        var a = 0;
        for (s = 0; s < t; a++, s++) a === r[0] && (a++, r.shift()),
        i[s] = e[a];
        return i
    },
    lu = 4;
    nu.prototype.pipe = function(t) {
        return this.on("data",
        function(e) {
            t.push(e)
        }),
        this.on("done",
        function(e) {
            t.flush(e)
        }),
        this.on("partialdone",
        function(e) {
            t.partialFlush(e)
        }),
        this.on("endedtimeline",
        function(e) {
            t.endTimeline(e)
        }),
        this.on("reset",
        function(e) {
            t.reset(e)
        }),
        t
    },
    nu.prototype.push = function(e) {
        this.trigger("data", e)
    },
    nu.prototype.flush = function(e) {
        this.trigger("done", e)
    },
    nu.prototype.partialFlush = function(e) {
        this.trigger("partialdone", e)
    },
    nu.prototype.endTimeline = function(e) {
        this.trigger("endedtimeline", e)
    },
    nu.prototype.reset = function(e) {
        this.trigger("reset", e)
    };
    function cu() {
        cu.prototype.init.call(this),
        this.captionPackets_ = [],
        this.ccStreams_ = [new gu(0, 0), new gu(0, 1), new gu(1, 0), new gu(1, 1)],
        this.reset(),
        this.ccStreams_.forEach(function(e) {
            e.on("data", this.trigger.bind(this, "data")),
            e.on("partialdone", this.trigger.bind(this, "partialdone")),
            e.on("done", this.trigger.bind(this, "done"))
        },
        this)
    }
    var hu = nu; (cu.prototype = new hu).push = function(e) {
        var t, i, n;
        if ("sei_rbsp" === e.nalUnitType && (t = su(e.escapedRBSP)).payloadType === lu && (i = au(t))) if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
        else {
            if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--,
            void(this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
            n = ou(e.pts, i),
            this.captionPackets_ = this.captionPackets_.concat(n),
            this.latestDts_ !== e.dts && (this.numSameDts_ = 0),
            this.numSameDts_++,
            this.latestDts_ = e.dts
        }
    },
    cu.prototype.flushCCStreams = function(t) {
        this.ccStreams_.forEach(function(e) {
            return "flush" === t ? e.flush() : e.partialFlush()
        },
        this)
    },
    cu.prototype.flushStream = function(e) {
        this.captionPackets_.length && (this.captionPackets_.forEach(function(e, t) {
            e.presortIndex = t
        }), this.captionPackets_.sort(function(e, t) {
            return e.pts === t.pts ? e.presortIndex - t.presortIndex: e.pts - t.pts
        }), this.captionPackets_.forEach(function(e) {
            e.type < 2 && this.dispatchCea608Packet(e)
        },
        this), this.captionPackets_.length = 0),
        this.flushCCStreams(e)
    },
    cu.prototype.flush = function() {
        return this.flushStream("flush")
    },
    cu.prototype.partialFlush = function() {
        return this.flushStream("partialFlush")
    },
    cu.prototype.reset = function() {
        this.latestDts_ = null,
        this.ignoreNextEqualDts_ = !1,
        this.numSameDts_ = 0,
        this.activeCea608Channel_ = [null, null],
        this.ccStreams_.forEach(function(e) {
            e.reset()
        })
    },
    cu.prototype.dispatchCea608Packet = function(e) {
        this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] = null: this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1),
        null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
    },
    cu.prototype.setsChannel1Active = function(e) {
        return 4096 == (30720 & e.ccData)
    },
    cu.prototype.setsChannel2Active = function(e) {
        return 6144 == (30720 & e.ccData)
    },
    cu.prototype.setsTextOrXDSActive = function(e) {
        return 256 == (28928 & e.ccData) || 4138 == (30974 & e.ccData) || 6186 == (30974 & e.ccData)
    };
    function du(e) {
        return null === e ? "": (e = fu[e] || e, String.fromCharCode(e))
    }
    function pu() {
        for (var e = [], t = 15; t--;) e.push("");
        return e
    }
    var fu = {
        42 : 225,
        92 : 233,
        94 : 237,
        95 : 243,
        96 : 250,
        123 : 231,
        124 : 247,
        125 : 209,
        126 : 241,
        127 : 9608,
        304 : 174,
        305 : 176,
        306 : 189,
        307 : 191,
        308 : 8482,
        309 : 162,
        310 : 163,
        311 : 9834,
        312 : 224,
        313 : 160,
        314 : 232,
        315 : 226,
        316 : 234,
        317 : 238,
        318 : 244,
        319 : 251,
        544 : 193,
        545 : 201,
        546 : 211,
        547 : 218,
        548 : 220,
        549 : 252,
        550 : 8216,
        551 : 161,
        552 : 42,
        553 : 39,
        554 : 8212,
        555 : 169,
        556 : 8480,
        557 : 8226,
        558 : 8220,
        559 : 8221,
        560 : 192,
        561 : 194,
        562 : 199,
        563 : 200,
        564 : 202,
        565 : 203,
        566 : 235,
        567 : 206,
        568 : 207,
        569 : 239,
        570 : 212,
        571 : 217,
        572 : 249,
        573 : 219,
        574 : 171,
        575 : 187,
        800 : 195,
        801 : 227,
        802 : 205,
        803 : 204,
        804 : 236,
        805 : 210,
        806 : 242,
        807 : 213,
        808 : 245,
        809 : 123,
        810 : 125,
        811 : 92,
        812 : 94,
        813 : 95,
        814 : 124,
        815 : 126,
        816 : 196,
        817 : 228,
        818 : 214,
        819 : 246,
        820 : 223,
        821 : 165,
        822 : 164,
        823 : 9474,
        824 : 197,
        825 : 229,
        826 : 216,
        827 : 248,
        828 : 9484,
        829 : 9488,
        830 : 9492,
        831 : 9496
    },
    mu = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
    gu = function e(t, i) {
        e.prototype.init.call(this),
        this.field_ = t || 0,
        this.dataChannel_ = i || 0,
        this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)),
        this.setConstants(),
        this.reset(),
        this.push = function(e) {
            var t, i, n, r, s;
            if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                if (4096 == (61440 & t) ? this.lastControlCode_ = t: t !== this.PADDING_ && (this.lastControlCode_ = null), n = t >>> 8, r = 255 & t, t !== this.PADDING_) if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                else if (t === this.END_OF_CAPTION_) this.mode_ = "popOn",
                this.clearFormatting(e.pts),
                this.flushDisplayed(e.pts),
                i = this.displayed_,
                this.displayed_ = this.nonDisplayed_,
                this.nonDisplayed_ = i,
                this.startPts_ = e.pts;
                else if (t === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2,
                this.setRollUp(e.pts);
                else if (t === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3,
                this.setRollUp(e.pts);
                else if (t === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4,
                this.setRollUp(e.pts);
                else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts),
                this.flushDisplayed(e.pts),
                this.shiftRowsUp_(),
                this.startPts_ = e.pts;
                else if (t === this.BACKSPACE_)"popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts),
                this.displayed_ = pu();
                else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = pu();
                else if (t === this.RESUME_DIRECT_CAPTIONING_)"paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = pu()),
                this.mode_ = "paintOn",
                this.startPts_ = e.pts;
                else if (this.isSpecialCharacter(n, r)) s = du((n = (3 & n) << 8) | r),
                this[this.mode_](e.pts, s),
                this.column_++;
                else if (this.isExtCharacter(n, r))"popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1),
                s = du((n = (3 & n) << 8) | r),
                this[this.mode_](e.pts, s),
                this.column_++;
                else if (this.isMidRowCode(n, r)) this.clearFormatting(e.pts),
                this[this.mode_](e.pts, " "),
                this.column_++,
                14 == (14 & r) && this.addFormatting(e.pts, ["i"]),
                1 == (1 & r) && this.addFormatting(e.pts, ["u"]);
                else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r;
                else if (this.isPAC(n, r)) {
                    var a = mu.indexOf(7968 & t);
                    "rollUp" === this.mode_ && (a - this.rollUpRows_ + 1 < 0 && (a = this.rollUpRows_ - 1), this.setRollUp(e.pts, a)),
                    a !== this.row_ && (this.clearFormatting(e.pts), this.row_ = a),
                    1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]),
                    16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)),
                    this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"])
                } else this.isNormalChar(n) && (0 === r && (r = null), s = du(n), s += du(r), this[this.mode_](e.pts, s), this.column_ += s.length)
            } else this.lastControlCode_ = null
        }
    };
    gu.prototype = new hu,
    gu.prototype.flushDisplayed = function(e) {
        var t = this.displayed_.map(function(e) {
            try {
                return e.trim()
            } catch(e) {
                return ""
            }
        }).join("\n").replace(/^\n+|\n+$/g, "");
        t.length && this.trigger("data", {
            startPts: this.startPts_,
            endPts: e,
            text: t,
            stream: this.name_
        })
    },
    gu.prototype.reset = function() {
        this.mode_ = "popOn",
        this.topRow_ = 0,
        this.startPts_ = 0,
        this.displayed_ = pu(),
        this.nonDisplayed_ = pu(),
        this.lastControlCode_ = null,
        this.column_ = 0,
        this.row_ = 14,
        this.rollUpRows_ = 2,
        this.formatting_ = []
    },
    gu.prototype.setConstants = function() {
        0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31),
        this.PADDING_ = 0,
        this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_,
        this.END_OF_CAPTION_ = 47 | this.CONTROL_,
        this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_,
        this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_,
        this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_,
        this.CARRIAGE_RETURN_ = 45 | this.CONTROL_,
        this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_,
        this.BACKSPACE_ = 33 | this.CONTROL_,
        this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_,
        this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
    },
    gu.prototype.isSpecialCharacter = function(e, t) {
        return e === this.EXT_ && 48 <= t && t <= 63
    },
    gu.prototype.isExtCharacter = function(e, t) {
        return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63
    },
    gu.prototype.isMidRowCode = function(e, t) {
        return e === this.EXT_ && 32 <= t && t <= 47
    },
    gu.prototype.isOffsetControlCode = function(e, t) {
        return e === this.OFFSET_ && 33 <= t && t <= 35
    },
    gu.prototype.isPAC = function(e, t) {
        return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127
    },
    gu.prototype.isColorPAC = function(e) {
        return 64 <= e && e <= 79 || 96 <= e && e <= 127
    },
    gu.prototype.isNormalChar = function(e) {
        return 32 <= e && e <= 127
    },
    gu.prototype.setRollUp = function(e, t) {
        if ("rollUp" !== this.mode_ && (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = pu(), this.displayed_ = pu()), void 0 !== t && t !== this.row_) for (var i = 0; i < this.rollUpRows_; i++) this.displayed_[t - i] = this.displayed_[this.row_ - i],
        this.displayed_[this.row_ - i] = "";
        void 0 === t && (t = this.row_),
        this.topRow_ = t - this.rollUpRows_ + 1
    },
    gu.prototype.addFormatting = function(e, t) {
        this.formatting_ = this.formatting_.concat(t);
        var i = t.reduce(function(e, t) {
            return e + "<" + t + ">"
        },
        "");
        this[this.mode_](e, i)
    },
    gu.prototype.clearFormatting = function(e) {
        if (this.formatting_.length) {
            var t = this.formatting_.reverse().reduce(function(e, t) {
                return e + "</" + t + ">"
            },
            "");
            this.formatting_ = [],
            this[this.mode_](e, t)
        }
    },
    gu.prototype.popOn = function(e, t) {
        var i = this.nonDisplayed_[this.row_];
        i += t,
        this.nonDisplayed_[this.row_] = i
    },
    gu.prototype.rollUp = function(e, t) {
        var i = this.displayed_[this.row_];
        i += t,
        this.displayed_[this.row_] = i
    },
    gu.prototype.shiftRowsUp_ = function() {
        var e;
        for (e = 0; e < this.topRow_; e++) this.displayed_[e] = "";
        for (e = this.row_ + 1; e < 15; e++) this.displayed_[e] = "";
        for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
        this.displayed_[this.row_] = ""
    },
    gu.prototype.paintOn = function(e, t) {
        var i = this.displayed_[this.row_];
        i += t,
        this.displayed_[this.row_] = i
    };
    function vu(e, t) {
        for (var i = e,
        n = 0; n < t.length; n++) {
            var r = t[n];
            if (i < r.size) return r;
            i -= r.size
        }
        return null
    }
    function yu(e, c) {
        var n = ru.findBox(e, ["moof", "traf"]),
        t = ru.findBox(e, ["mdat"]),
        h = {},
        r = [];
        return t.forEach(function(e, t) {
            var i = n[t];
            r.push({
                mdat: e,
                traf: i
            })
        }),
        r.forEach(function(e) {
            var t, i = e.mdat,
            n = e.traf,
            r = ru.findBox(n, ["tfhd"]),
            s = eu.parseTfhd(r[0]),
            a = s.trackId,
            o = ru.findBox(n, ["tfdt"]),
            u = 0 < o.length ? eu.parseTfdt(o[0]).baseMediaDecodeTime: 0,
            l = ru.findBox(n, ["trun"]);
            c === a && 0 < l.length && (t = function(e, t, i) {
                var n, r, s, a, o = new DataView(e.buffer, e.byteOffset, e.byteLength),
                u = [];
                for (r = 0; r + 4 < e.length; r += s) if (s = o.getUint32(r), r += 4, !(s <= 0)) switch (31 & e[r]) {
                case 6:
                    var l = e.subarray(r + 1, r + 1 + s),
                    c = vu(r, t);
                    if (n = {
                        nalUnitType: "sei_rbsp",
                        size: s,
                        data: l,
                        escapedRBSP: bu(l),
                        trackId: i
                    },
                    c) n.pts = c.pts,
                    n.dts = c.dts,
                    a = c;
                    else {
                        if (!a) break;
                        n.pts = a.pts,
                        n.dts = a.dts
                    }
                    u.push(n)
                }
                return u
            } (i,
            function(e, t, i) {
                var n = t,
                r = i.defaultSampleDuration || 0,
                s = i.defaultSampleSize || 0,
                a = i.trackId,
                o = [];
                return e.forEach(function(e) {
                    var t = eu.parseTrun(e).samples;
                    t.forEach(function(e) {
                        void 0 === e.duration && (e.duration = r),
                        void 0 === e.size && (e.size = s),
                        e.trackId = a,
                        e.dts = n,
                        void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0),
                        e.pts = n + e.compositionTimeOffset,
                        n += e.duration
                    }),
                    o = o.concat(t)
                }),
                o
            } (l, u, s), a), h[a] || (h[a] = []), h[a] = h[a].concat(t))
        }),
        h
    }
    function _u(e, t) {
        var i = 1;
        for (t < e && (i = -1); 4294967296 < Math.abs(t - e);) e += 8589934592 * i;
        return e
    }
    var bu = uu,
    Tu = cu,
    Su = function() {
        var t, s, a, o, u, i, n = !1;
        this.isInitialized = function() {
            return n
        },
        this.init = function(e) {
            t = new Tu,
            n = !0,
            i = !!e && e.isPartial,
            t.on("data",
            function(e) {
                e.startTime = e.startPts / o,
                e.endTime = e.endPts / o,
                u.captions.push(e),
                u.captionStreams[e.stream] = !0
            })
        },
        this.isNewInit = function(e, t) {
            return ! (e && 0 === e.length || t && "object" == typeof t && 0 === Object.keys(t).length) && (a !== e[0] || o !== t[a])
        },
        this.parse = function(e, t, i) {
            var n;
            if (!this.isInitialized()) return null;
            if (!t || !i) return null;
            if (this.isNewInit(t, i)) a = t[0],
            o = i[a];
            else if (null === a || !o) return s.push(e),
            null;
            for (; 0 < s.length;) {
                var r = s.shift();
                this.parse(r, t, i)
            }
            return null !== (n = function(e, t, i) {
                return null === t ? null: {
                    seiNals: yu(e, t)[t],
                    timescale: i
                }
            } (e, a, o)) && n.seiNals ? (this.pushNals(n.seiNals), this.flushStream(), u) : null
        },
        this.pushNals = function(e) {
            if (!this.isInitialized() || !e || 0 === e.length) return null;
            e.forEach(function(e) {
                t.push(e)
            })
        },
        this.flushStream = function() {
            if (!this.isInitialized()) return null;
            i ? t.partialFlush() : t.flush()
        },
        this.clearParsedCaptions = function() {
            u.captions = [],
            u.captionStreams = {}
        },
        this.resetCaptionStream = function() {
            if (!this.isInitialized()) return null;
            t.reset()
        },
        this.clearAllCaptions = function() {
            this.clearParsedCaptions(),
            this.resetCaptionStream()
        },
        this.reset = function() {
            s = [],
            o = a = null,
            u ? this.clearParsedCaptions() : u = {
                captions: [],
                captionStreams: {}
            },
            this.resetCaptionStream()
        },
        this.reset()
    },
    ku = 27,
    Cu = 15,
    Eu = 21;
    new hu;
    function wu(e) {
        var t = 31 & e[1];
        return t <<= 8,
        t |= e[2]
    }
    function xu(e) {
        return !! (64 & e[1])
    }
    function Au(e) {
        var t = 0;
        return 1 < (48 & e[3]) >>> 4 && (t += e[4] + 1),
        t
    }
    function Iu(e) {
        switch (e) {
        case 5:
            return "slice_layer_without_partitioning_rbsp_idr";
        case 6:
            return "sei_rbsp";
        case 7:
            return "seq_parameter_set_rbsp";
        case 8:
            return "pic_parameter_set_rbsp";
        case 9:
            return "access_unit_delimiter_rbsp";
        default:
            return null
        }
    }
    function Pu(e) {
        return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
    }
    var Lu, Ou, Du, Nu, Ru = {
        parseType: function(e, t) {
            var i = wu(e);
            return 0 === i ? "pat": i === t ? "pmt": t ? "pes": null
        },
        parsePat: function(e) {
            var t = xu(e),
            i = 4 + Au(e);
            return t && (i += e[i] + 1),
            (31 & e[i + 10]) << 8 | e[i + 11]
        },
        parsePmt: function(e) {
            var t = {},
            i = xu(e),
            n = 4 + Au(e);
            if (i && (n += e[n] + 1), 1 & e[n + 5]) {
                var r;
                r = 3 + ((15 & e[n + 1]) << 8 | e[n + 2]) - 4;
                for (var s = 12 + ((15 & e[n + 10]) << 8 | e[n + 11]); s < r;) {
                    var a = n + s;
                    t[(31 & e[a + 1]) << 8 | e[a + 2]] = e[a],
                    s += 5 + ((15 & e[a + 3]) << 8 | e[a + 4])
                }
                return t
            }
        },
        parsePayloadUnitStartIndicator: xu,
        parsePesType: function(e, t) {
            switch (t[wu(e)]) {
            case ku:
                return "video";
            case Cu:
                return "audio";
            case Eu:
                return "timed-metadata";
            default:
                return null
            }
        },
        parsePesTime: function(e) {
            if (!xu(e)) return null;
            var t = 4 + Au(e);
            if (t >= e.byteLength) return null;
            var i, n = null;
            return 192 & (i = e[t + 7]) && ((n = {}).pts = (14 & e[t + 9]) << 27 | (255 & e[t + 10]) << 20 | (254 & e[t + 11]) << 12 | (255 & e[t + 12]) << 5 | (254 & e[t + 13]) >>> 3, n.pts *= 4, n.pts += (6 & e[t + 13]) >>> 1, n.dts = n.pts, 64 & i && (n.dts = (14 & e[t + 14]) << 27 | (255 & e[t + 15]) << 20 | (254 & e[t + 16]) << 12 | (255 & e[t + 17]) << 5 | (254 & e[t + 18]) >>> 3, n.dts *= 4, n.dts += (6 & e[t + 18]) >>> 1)),
            n
        },
        videoPacketContainsKeyFrame: function(e) {
            for (var t = 4 + Au(e), i = e.subarray(t), n = 0, r = 0, s = !1; r < i.byteLength - 3; r++) if (1 === i[r + 2]) {
                n = r + 5;
                break
            }
            for (; n < i.byteLength;) switch (i[n]) {
            case 0:
                if (0 !== i[n - 1]) {
                    n += 2;
                    break
                }
                if (0 !== i[n - 2]) {
                    n++;
                    break
                }
                for (r + 3 !== n - 2 && "slice_layer_without_partitioning_rbsp_idr" === Iu(31 & i[r + 3]) && (s = !0); 1 !== i[++n] && n < i.length;);
                r = n - 2,
                n += 3;
                break;
            case 1:
                if (0 !== i[n - 1] || 0 !== i[n - 2]) {
                    n += 3;
                    break
                }
                "slice_layer_without_partitioning_rbsp_idr" === Iu(31 & i[r + 3]) && (s = !0),
                r = n - 2,
                n += 3;
                break;
            default:
                n += 3
            }
            return i = i.subarray(r),
            n -= r,
            r = 0,
            i && 3 < i.byteLength && "slice_layer_without_partitioning_rbsp_idr" === Iu(31 & i[r + 3]) && (s = !0),
            s
        }
    },
    Uu = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
    Mu = {
        isLikelyAacData: function(e) {
            return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0)
        },
        parseId3TagSize: function(e, t) {
            var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
            return (16 & e[t + 5]) >> 4 ? 20 + i: 10 + i
        },
        parseAdtsSize: function(e, t) {
            var i = (224 & e[t + 5]) >> 5,
            n = e[t + 4] << 3;
            return 6144 & e[t + 3] | n | i
        },
        parseType: function(e, t) {
            return e[t] === "I".charCodeAt(0) && e[t + 1] === "D".charCodeAt(0) && e[t + 2] === "3".charCodeAt(0) ? "timed-metadata": !0 & e[t] && 240 == (240 & e[t + 1]) ? "audio": null
        },
        parseSampleRate: function(e) {
            for (var t = 0; t + 5 < e.length;) {
                if (255 === e[t] && 240 == (246 & e[t + 1])) return Uu[(60 & e[t + 2]) >>> 2];
                t++
            }
            return null
        },
        parseAacTimestamp: function(e) {
            var t, i, n;
            t = 10,
            64 & e[5] && (t += 4, t += Pu(e.subarray(10, 14)));
            do {
                if ((i = Pu(e.subarray(t + 4, t + 8))) < 1) return null;
                if ("PRIV" === String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3])) {
                    n = e.subarray(t + 10, t + i + 10);
                    for (var r = 0; r < n.byteLength; r++) if (0 === n[r]) {
                        if ("com.apple.streaming.transportStreamTimestamp" !== unescape(function(e, t, i) {
                            var n, r = "";
                            for (n = t; n < i; n++) r += "%" + ("00" + e[n].toString(16)).slice( - 2);
                            return r
                        } (n, 0, r))) break;
                        var s = n.subarray(r + 1),
                        a = (1 & s[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2;
                        return a *= 4,
                        a += 3 & s[7]
                    }
                }
                t += 10, t += i
            } while ( t < e . byteLength );
            return null
        }
    },
    Bu = 9e4,
    ju = (Lu = function(e) {
        return 9e4 * e
    },
    Ou = function(e, t) {
        return e * t
    },
    Du = function(e) {
        return e / 9e4
    },
    Nu = function(e, t) {
        return e / t
    },
    _u),
    Fu = {};
    Fu.ts = Ru,
    Fu.aac = Mu;
    function Hu(e, t, i) {
        for (var n, r, s, a, o = 0,
        u = zu,
        l = !1; u <= e.byteLength;) if (71 !== e[o] || 71 !== e[u] && u !== e.byteLength) o++,
        u++;
        else {
            switch (n = e.subarray(o, u), Fu.ts.parseType(n, t.pid)) {
            case "pes":
                r = Fu.ts.parsePesType(n, t.table),
                s = Fu.ts.parsePayloadUnitStartIndicator(n),
                "audio" === r && s && (a = Fu.ts.parsePesTime(n)) && (a.type = "audio", i.audio.push(a), l = !0)
            }
            if (l) break;
            o += zu,
            u += zu
        }
        for (o = (u = e.byteLength) - zu, l = !1; 0 <= o;) if (71 !== e[o] || 71 !== e[u] && u !== e.byteLength) o--,
        u--;
        else {
            switch (n = e.subarray(o, u), Fu.ts.parseType(n, t.pid)) {
            case "pes":
                r = Fu.ts.parsePesType(n, t.table),
                s = Fu.ts.parsePayloadUnitStartIndicator(n),
                "audio" === r && s && (a = Fu.ts.parsePesTime(n)) && (a.type = "audio", i.audio.push(a), l = !0)
            }
            if (l) break;
            o -= zu,
            u -= zu
        }
    }
    function Vu(e, t, i) {
        for (var n, r, s, a, o, u, l, c = 0,
        h = zu,
        d = !1,
        p = {
            data: [],
            size: 0
        }; h < e.byteLength;) if (71 !== e[c] || 71 !== e[h]) c++,
        h++;
        else {
            switch (n = e.subarray(c, h), Fu.ts.parseType(n, t.pid)) {
            case "pes":
                if (r = Fu.ts.parsePesType(n, t.table), s = Fu.ts.parsePayloadUnitStartIndicator(n), "video" === r && (s && !d && (a = Fu.ts.parsePesTime(n)) && (a.type = "video", i.video.push(a), d = !0), !i.firstKeyFrame)) {
                    if (s && 0 !== p.size) {
                        for (o = new Uint8Array(p.size), u = 0; p.data.length;) l = p.data.shift(),
                        o.set(l, u),
                        u += l.byteLength;
                        if (Fu.ts.videoPacketContainsKeyFrame(o)) {
                            var f = Fu.ts.parsePesTime(o);
                            f && (i.firstKeyFrame = f, i.firstKeyFrame.type = "video")
                        }
                        p.size = 0
                    }
                    p.data.push(n),
                    p.size += n.byteLength
                }
            }
            if (d && i.firstKeyFrame) break;
            c += zu,
            h += zu
        }
        for (c = (h = e.byteLength) - zu, d = !1; 0 <= c;) if (71 !== e[c] || 71 !== e[h]) c--,
        h--;
        else {
            switch (n = e.subarray(c, h), Fu.ts.parseType(n, t.pid)) {
            case "pes":
                r = Fu.ts.parsePesType(n, t.table),
                s = Fu.ts.parsePayloadUnitStartIndicator(n),
                "video" === r && s && (a = Fu.ts.parsePesTime(n)) && (a.type = "video", i.video.push(a), d = !0)
            }
            if (d) break;
            c -= zu,
            h -= zu
        }
    }
    function qu(e) {
        var t = {
            pid: null,
            table: null
        },
        i = {};
        for (var n in
        function(e, t) {
            for (var i, n = 0,
            r = zu; r < e.byteLength;) if (71 !== e[n] || 71 !== e[r]) n++,
            r++;
            else {
                switch (i = e.subarray(n, r), Fu.ts.parseType(i, t.pid)) {
                case "pat":
                    t.pid || (t.pid = Fu.ts.parsePat(i));
                    break;
                case "pmt":
                    t.table || (t.table = Fu.ts.parsePmt(i))
                }
                if (t.pid && t.table) return;
                n += zu,
                r += zu
            }
        } (e, t), t.table) {
            if (t.table.hasOwnProperty(n)) switch (t.table[n]) {
            case ku:
                i.video = [],
                Vu(e, t, i),
                0 === i.video.length && delete i.video;
                break;
            case Cu:
                i.audio = [],
                Hu(e, t, i),
                0 === i.audio.length && delete i.audio
            }
        }
        return i
    }
    var Wu = Bu,
    zu = 188,
    Gu = function(e, t) {
        var i;
        return (i = Fu.aac.isLikelyAacData(e) ?
        function(e) {
            for (var t, i = !1,
            n = 0,
            r = null,
            s = null,
            a = 0,
            o = 0; 3 <= e.length - o;) {
                switch (Fu.aac.parseType(e, o)) {
                case "timed-metadata":
                    if (e.length - o < 10) {
                        i = !0;
                        break
                    }
                    if ((a = Fu.aac.parseId3TagSize(e, o)) > e.length) {
                        i = !0;
                        break
                    }
                    null === s && (t = e.subarray(o, o + a), s = Fu.aac.parseAacTimestamp(t)),
                    o += a;
                    break;
                case "audio":
                    if (e.length - o < 7) {
                        i = !0;
                        break
                    }
                    if ((a = Fu.aac.parseAdtsSize(e, o)) > e.length) {
                        i = !0;
                        break
                    }
                    null === r && (t = e.subarray(o, o + a), r = Fu.aac.parseSampleRate(t)),
                    n++,
                    o += a;
                    break;
                default:
                    o++
                }
                if (i) return null
            }
            if (null === r || null === s) return null;
            var u = Wu / r;
            return {
                audio: [{
                    type: "audio",
                    dts: s,
                    pts: s
                },
                {
                    type: "audio",
                    dts: s + 1024 * n * u,
                    pts: s + 1024 * n * u
                }]
            }
        } (e) : qu(e)) && (i.audio || i.video) ? (function(e, t) {
            if (e.audio && e.audio.length) {
                var i = t;
                "undefined" == typeof i && (i = e.audio[0].dts),
                e.audio.forEach(function(e) {
                    e.dts = ju(e.dts, i),
                    e.pts = ju(e.pts, i),
                    e.dtsTime = e.dts / Wu,
                    e.ptsTime = e.pts / Wu
                })
            }
            if (e.video && e.video.length) {
                var n = t;
                if ("undefined" == typeof n && (n = e.video[0].dts), e.video.forEach(function(e) {
                    e.dts = ju(e.dts, n),
                    e.pts = ju(e.pts, n),
                    e.dtsTime = e.dts / Wu,
                    e.ptsTime = e.pts / Wu
                }), e.firstKeyFrame) {
                    var r = e.firstKeyFrame;
                    r.dts = ju(r.dts, n),
                    r.pts = ju(r.pts, n),
                    r.dtsTime = r.dts / Wu,
                    r.ptsTime = r.dts / Wu
                }
            }
        } (i, t), i) : null
    };
    function Xu(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var Ku = function(e, t, i) {
        return t && Xu(e.prototype, t),
        i && Xu(e, i),
        e
    },
    Yu = function() {
        function e() {
            this.listeners = {}
        }
        var t = e.prototype;
        return t.on = function(e, t) {
            this.listeners[e] || (this.listeners[e] = []),
            this.listeners[e].push(t)
        },
        t.off = function(e, t) {
            if (!this.listeners[e]) return ! 1;
            var i = this.listeners[e].indexOf(t);
            return this.listeners[e] = this.listeners[e].slice(0),
            this.listeners[e].splice(i, 1),
            -1 < i
        },
        t.trigger = function(e, t) {
            var i = this.listeners[e];
            if (i) if (2 === arguments.length) for (var n = i.length,
            r = 0; r < n; ++r) i[r].call(this, t);
            else for (var s = Array.prototype.slice.call(arguments, 1), a = i.length, o = 0; o < a; ++o) i[o].apply(this, s)
        },
        t.dispose = function() {
            this.listeners = {}
        },
        t.pipe = function(t) {
            this.on("data",
            function(e) {
                t.push(e)
            })
        },
        e
    } ();
    /*! @name @videojs/vhs-utils @version 1.3.0 @license MIT */
    function $u(e) {
        return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
    }
    function Qu(e, t, i) {
        var n, r, s, a, o, u, l, c, h, d = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
        p = new il(Array.prototype.slice.call(t)),
        f = new Uint8Array(e.byteLength),
        m = new Int32Array(f.buffer);
        for (n = i[0], r = i[1], s = i[2], a = i[3], h = 0; h < d.length; h += 4) o = $u(d[h]),
        u = $u(d[h + 1]),
        l = $u(d[h + 2]),
        c = $u(d[h + 3]),
        p.decrypt(o, u, l, c, m, h),
        m[h] = $u(m[h] ^ n),
        m[h + 1] = $u(m[h + 1] ^ r),
        m[h + 2] = $u(m[h + 2] ^ s),
        m[h + 3] = $u(m[h + 3] ^ a),
        n = o,
        r = u,
        s = l,
        a = c;
        return f
    }
    function Ju(e, t) {
        return /^[a-z]+:/i.test(t) ? t: (/\/\//i.test(e) || (e = ps.buildAbsoluteURL(y.location.href, e)), ps.buildAbsoluteURL(e, t))
    }
    function Zu(e, t, i) {
        return e && i.responseURL && t !== i.responseURL ? i.responseURL: t
    }
    function el(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    /*! @name aes-decrypter @version 3.0.2 @license Apache-2.0 */
    var tl = null,
    il = function() {
        function e(e) {
            var t, i, n;
            tl = tl ||
            function() {
                var e, t, i, n, r, s, a, o, u = [[[], [], [], [], []], [[], [], [], [], []]],
                l = u[0],
                c = u[1],
                h = l[4],
                d = c[4],
                p = [],
                f = [];
                for (e = 0; e < 256; e++) f[(p[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
                for (t = i = 0; ! h[t]; t ^= n || 1, i = f[i] || 1) for (s = (s = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4) >> 8 ^ 255 & s ^ 99, o = 16843009 * p[r = p[n = p[d[h[t] = s] = t]]] ^ 65537 * r ^ 257 * n ^ 16843008 * t, a = 257 * p[s] ^ 16843008 * s, e = 0; e < 4; e++) l[e][t] = a = a << 24 ^ a >>> 8,
                c[e][s] = o = o << 24 ^ o >>> 8;
                for (e = 0; e < 5; e++) l[e] = l[e].slice(0),
                c[e] = c[e].slice(0);
                return u
            } (),
            this._tables = [[tl[0][0].slice(), tl[0][1].slice(), tl[0][2].slice(), tl[0][3].slice(), tl[0][4].slice()], [tl[1][0].slice(), tl[1][1].slice(), tl[1][2].slice(), tl[1][3].slice(), tl[1][4].slice()]];
            var r = this._tables[0][4],
            s = this._tables[1],
            a = e.length,
            o = 1;
            if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size");
            var u = e.slice(0),
            l = [];
            for (this._key = [u, l], t = a; t < 4 * a + 28; t++) n = u[t - 1],
            (t % a == 0 || 8 === a && t % a == 4) && (n = r[n >>> 24] << 24 ^ r[n >> 16 & 255] << 16 ^ r[n >> 8 & 255] << 8 ^ r[255 & n], t % a == 0 && (n = n << 8 ^ n >>> 24 ^ o << 24, o = o << 1 ^ 283 * (o >> 7))),
            u[t] = u[t - a] ^ n;
            for (i = 0; t; i++, t--) n = u[3 & i ? t: t - 4],
            l[i] = t <= 4 || i < 4 ? n: s[0][r[n >>> 24]] ^ s[1][r[n >> 16 & 255]] ^ s[2][r[n >> 8 & 255]] ^ s[3][r[255 & n]]
        }
        return e.prototype.decrypt = function(e, t, i, n, r, s) {
            var a, o, u, l, c = this._key[1],
            h = e ^ c[0],
            d = n ^ c[1],
            p = i ^ c[2],
            f = t ^ c[3],
            m = c.length / 4 - 2,
            g = 4,
            v = this._tables[1],
            y = v[0],
            _ = v[1],
            b = v[2],
            T = v[3],
            S = v[4];
            for (l = 0; l < m; l++) a = y[h >>> 24] ^ _[d >> 16 & 255] ^ b[p >> 8 & 255] ^ T[255 & f] ^ c[g],
            o = y[d >>> 24] ^ _[p >> 16 & 255] ^ b[f >> 8 & 255] ^ T[255 & h] ^ c[g + 1],
            u = y[p >>> 24] ^ _[f >> 16 & 255] ^ b[h >> 8 & 255] ^ T[255 & d] ^ c[g + 2],
            f = y[f >>> 24] ^ _[h >> 16 & 255] ^ b[d >> 8 & 255] ^ T[255 & p] ^ c[g + 3],
            g += 4,
            h = a,
            d = o,
            p = u;
            for (l = 0; l < 4; l++) r[(3 & -l) + s] = S[h >>> 24] << 24 ^ S[d >> 16 & 255] << 16 ^ S[p >> 8 & 255] << 8 ^ S[255 & f] ^ c[g++],
            a = h,
            h = d,
            d = p,
            p = f,
            f = a
        },
        e
    } (),
    nl = function(t) {
        function e() {
            var e;
            return (e = t.call(this, Yu) || this).jobs = [],
            e.delay = 1,
            e.timeout_ = null,
            e
        }
        ze(e, t);
        var i = e.prototype;
        return i.processJob_ = function() {
            this.jobs.shift()(),
            this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
        },
        i.push = function(e) {
            this.jobs.push(e),
            this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
        },
        e
    } (Yu),
    rl = function() {
        function u(e, t, i, n) {
            var r = u.STEP,
            s = new Int32Array(e.buffer),
            a = new Uint8Array(e.byteLength),
            o = 0;
            for (this.asyncStream_ = new nl, this.asyncStream_.push(this.decryptChunk_(s.subarray(o, o + r), t, i, a)), o = r; o < s.length; o += r) i = new Uint32Array([$u(s[o - 4]), $u(s[o - 3]), $u(s[o - 2]), $u(s[o - 1])]),
            this.asyncStream_.push(this.decryptChunk_(s.subarray(o, o + r), t, i, a));
            this.asyncStream_.push(function() {
                n(null,
                /*! @name pkcs7 @version 1.0.4 @license Apache-2.0 */
                function(e) {
                    return e.subarray(0, e.byteLength - e[e.byteLength - 1])
                } (a))
            })
        }
        return u.prototype.decryptChunk_ = function(t, i, n, r) {
            return function() {
                var e = Qu(t, i, n);
                r.set(e, t.byteOffset)
            }
        },
        Ku(u, null, [{
            key: "STEP",
            get: function() {
                return 32e3
            }
        }]),
        u
    } (),
    sl = function(e, t, i) {
        return t && al(e.prototype, t),
        i && al(e, i),
        e
    };
    function al(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function ol(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function ul(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function ll(r, s) { ["AUDIO", "SUBTITLES"].forEach(function(e) {
            for (var t in r.mediaGroups[e]) for (var i in r.mediaGroups[e][t]) {
                var n = r.mediaGroups[e][t][i];
                s(n, e, t, i)
            }
        })
    }
    function cl(e, t) {
        var i = gl(e, {}),
        n = i.playlists[t.id];
        if (!n) return null;
        if (n.segments && t.segments && n.segments.length === t.segments.length && n.endList === t.endList && n.mediaSequence === t.mediaSequence) return null;
        var r = gl(n, t);
        n.segments && (r.segments = function(e, t, i) {
            var n = t.slice();
            i = i || 0;
            for (var r = Math.min(e.length, t.length + i), s = i; s < r; s++) n[s - i] = gl(e[s], n[s - i]);
            return n
        } (n.segments, t.segments, t.mediaSequence - n.mediaSequence)),
        r.segments.forEach(function(e) { !
            function(e, t) {
                e.resolvedUri || (e.resolvedUri = Ju(t, e.uri)),
                e.key && !e.key.resolvedUri && (e.key.resolvedUri = Ju(t, e.key.uri)),
                e.map && !e.map.resolvedUri && (e.map.resolvedUri = Ju(t, e.map.uri))
            } (e, r.resolvedUri)
        });
        for (var s = 0; s < i.playlists.length; s++) i.playlists[s].id === t.id && (i.playlists[s] = r);
        return i.playlists[t.id] = r,
        i.playlists[t.uri] = r,
        i
    }
    function hl(e, t) {
        return e + "-" + t
    }
    function dl(e) {
        for (var t = e.playlists.length; t--;) {
            var i = e.playlists[t];
            i.resolvedUri = Ju(e.uri, i.uri),
            i.id = hl(t, i.uri),
            e.playlists[i.id] = i,
            (e.playlists[i.uri] = i).attributes || (i.attributes = {},
            vl.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
        }
    }
    function pl(t) {
        ll(t,
        function(e) {
            e.uri && (e.resolvedUri = Ju(t.uri, e.uri))
        })
    }
    function fl(e, t) {
        var i = e.segments[e.segments.length - 1];
        return t && i && i.duration ? 1e3 * i.duration: 500 * (e.targetDuration || 10)
    }
    var ml = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
            var i = [],
            n = !0,
            r = !1,
            s = void 0;
            try {
                for (var a, o = e[Symbol.iterator](); ! (n = (a = o.next()).done) && (i.push(a.value), !t || i.length !== t); n = !0);
            } catch(e) {
                r = !0,
                s = e
            } finally {
                try { ! n && o.
                    return && o.
                    return ()
                } finally {
                    if (r) throw s
                }
            }
            return i
        } (e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    gl = cs.mergeOptions,
    vl = cs.log,
    yl = (ol(_l, cs.EventTarget), sl(_l, [{
        key: "playlistRequestError",
        value: function(e, t, i) {
            var n = t.uri,
            r = t.id;
            this.request = null,
            i && (this.state = i),
            this.error = {
                playlist: this.master.playlists[r],
                status: e.status,
                message: "HLS playlist request error at URL: " + n + ".",
                responseText: e.responseText,
                code: 500 <= e.status ? 4 : 2
            },
            this.trigger("error")
        }
    },
    {
        key: "haveMetadata",
        value: function(e, t, i) {
            var n = this;
            this.request = null,
            this.state = "HAVE_METADATA";
            var r = new bs;
            this.customTagParsers.forEach(function(e) {
                return r.addParser(e)
            }),
            this.customTagMappers.forEach(function(e) {
                return r.addTagMapper(e)
            }),
            r.push(e.responseText),
            r.end(),
            r.manifest.uri = t,
            r.manifest.id = i,
            r.manifest.attributes = r.manifest.attributes || {};
            var s = cl(this.master, r.manifest);
            this.targetDuration = r.manifest.targetDuration,
            s ? (this.master = s, this.media_ = this.master.playlists[i]) : this.trigger("playlistunchanged"),
            this.media().endList || (y.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = y.setTimeout(function() {
                n.trigger("mediaupdatetimeout")
            },
            fl(this.media(), !!s))),
            this.trigger("loadedplaylist")
        }
    },
    {
        key: "dispose",
        value: function() {
            this.trigger("dispose"),
            this.stopRequest(),
            y.clearTimeout(this.mediaUpdateTimeout),
            y.clearTimeout(this.finalRenditionTimeout),
            this.off()
        }
    },
    {
        key: "stopRequest",
        value: function() {
            if (this.request) {
                var e = this.request;
                this.request = null,
                e.onreadystatechange = null,
                e.abort()
            }
        }
    },
    {
        key: "media",
        value: function(i, e) {
            var n = this;
            if (!i) return this.media_;
            if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
            if ("string" == typeof i) {
                if (!this.master.playlists[i]) throw new Error("Unknown playlist URI: " + i);
                i = this.master.playlists[i]
            }
            if (y.clearTimeout(this.finalRenditionTimeout), e) {
                var t = i.targetDuration / 2 * 1e3 || 5e3;
                this.finalRenditionTimeout = y.setTimeout(this.media.bind(this, i, !1), t)
            } else {
                var r = this.state,
                s = !this.media_ || i.id !== this.media_.id;
                if (this.master.playlists[i.id].endList) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null),
                this.state = "HAVE_METADATA",
                this.media_ = i,
                void(s && (this.trigger("mediachanging"), this.trigger("mediachange")));
                if (s) {
                    if (this.state = "SWITCHING_MEDIA", this.request) {
                        if (i.resolvedUri === this.request.url) return;
                        this.request.onreadystatechange = null,
                        this.request.abort(),
                        this.request = null
                    }
                    this.media_ && this.trigger("mediachanging"),
                    this.request = this.hls_.xhr({
                        uri: i.resolvedUri,
                        withCredentials: this.withCredentials
                    },
                    function(e, t) {
                        if (n.request) {
                            if (i.resolvedUri = Zu(n.handleManifestRedirects, i.resolvedUri, t), e) return n.playlistRequestError(n.request, i, r);
                            n.haveMetadata(t, i.uri, i.id),
                            "HAVE_MASTER" === r ? n.trigger("loadedmetadata") : n.trigger("mediachange")
                        }
                    })
                }
            }
        }
    },
    {
        key: "pause",
        value: function() {
            this.stopRequest(),
            y.clearTimeout(this.mediaUpdateTimeout),
            "HAVE_NOTHING" === this.state && (this.started = !1),
            "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA": this.state = "HAVE_MASTER": "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
        }
    },
    {
        key: "load",
        value: function(e) {
            var t = this;
            y.clearTimeout(this.mediaUpdateTimeout);
            var i = this.media();
            if (e) {
                var n = i ? i.targetDuration / 2 * 1e3: 5e3;
                this.mediaUpdateTimeout = y.setTimeout(function() {
                    return t.load()
                },
                n)
            } else this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
        }
    },
    {
        key: "start",
        value: function() {
            var r = this;
            this.started = !0,
            this.request = this.hls_.xhr({
                uri: this.srcUrl,
                withCredentials: this.withCredentials
            },
            function(e, t) {
                if (r.request) {
                    if (r.request = null, e) return r.error = {
                        status: t.status,
                        message: "HLS playlist request error at URL: " + r.srcUrl + ".",
                        responseText: t.responseText,
                        code: 2
                    },
                    "HAVE_NOTHING" === r.state && (r.started = !1),
                    r.trigger("error");
                    var i = new bs;
                    if (r.customTagParsers.forEach(function(e) {
                        return i.addParser(e)
                    }), r.customTagMappers.forEach(function(e) {
                        return i.addTagMapper(e)
                    }), i.push(t.responseText), i.end(), r.state = "HAVE_MASTER", r.srcUrl = Zu(r.handleManifestRedirects, r.srcUrl, t), i.manifest.uri = r.srcUrl, i.manifest.playlists) return r.master = i.manifest,
                    dl(r.master),
                    pl(r.master),
                    r.trigger("loadedplaylist"),
                    void(r.request || r.media(i.manifest.playlists[0]));
                    var n = hl(0, r.srcUrl);
                    return r.master = {
                        mediaGroups: {
                            AUDIO: {},
                            VIDEO: {},
                            "CLOSED-CAPTIONS": {},
                            SUBTITLES: {}
                        },
                        uri: y.location.href,
                        playlists: [{
                            uri: r.srcUrl,
                            id: n,
                            resolvedUri: r.srcUrl,
                            attributes: {}
                        }]
                    },
                    r.master.playlists[n] = r.master.playlists[0],
                    r.master.playlists[r.srcUrl] = r.master.playlists[0],
                    r.haveMetadata(t, r.srcUrl, n),
                    r.trigger("loadedmetadata")
                }
            })
        }
    }]), _l);
    function _l(e, t) {
        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        el(this, _l);
        var n = ul(this, (_l.__proto__ || Object.getPrototypeOf(_l)).call(this)),
        r = i.withCredentials,
        s = void 0 !== r && r,
        a = i.handleManifestRedirects,
        o = void 0 !== a && a;
        n.srcUrl = e,
        n.hls_ = t,
        n.withCredentials = s,
        n.handleManifestRedirects = o;
        var u = t.options_;
        if (n.customTagParsers = u && u.customTagParsers || [], n.customTagMappers = u && u.customTagMappers || [], !n.srcUrl) throw new Error("A non-empty playlist URL is required");
        return n.state = "HAVE_NOTHING",
        n.on("mediaupdatetimeout",
        function() {
            "HAVE_METADATA" === n.state && (n.state = "HAVE_CURRENT_METADATA", n.request = n.hls_.xhr({
                uri: Ju(n.master.uri, n.media().uri),
                withCredentials: n.withCredentials
            },
            function(e, t) {
                if (n.request) return e ? n.playlistRequestError(n.request, n.media(), "HAVE_METADATA") : void n.haveMetadata(n.request, n.media().uri, n.media().id)
            }))
        }),
        n
    }
    function bl(e, t, i) {
        var n, r;
        return "undefined" == typeof t && (t = e.mediaSequence + e.segments.length),
        t < e.mediaSequence ? 0 : (n = function(e, t) {
            var i = 0,
            n = t - e.mediaSequence,
            r = e.segments[n];
            if (r) {
                if ("undefined" != typeof r.start) return {
                    result: r.start,
                    precise: !0
                };
                if ("undefined" != typeof r.end) return {
                    result: r.end - r.duration,
                    precise: !0
                }
            }
            for (; n--;) {
                if ("undefined" != typeof(r = e.segments[n]).end) return {
                    result: i + r.end,
                    precise: !0
                };
                if (i += r.duration, "undefined" != typeof r.start) return {
                    result: i + r.start,
                    precise: !0
                }
            }
            return {
                result: i,
                precise: !1
            }
        } (e, t)).precise ? n.result: (r = function(e, t) {
            for (var i = 0,
            n = void 0,
            r = t - e.mediaSequence; r < e.segments.length; r++) {
                if ("undefined" != typeof(n = e.segments[r]).start) return {
                    result: n.start - i,
                    precise: !0
                };
                if (i += n.duration, "undefined" != typeof n.end) return {
                    result: n.end - i,
                    precise: !0
                }
            }
            return {
                result: -1,
                precise: !1
            }
        } (e, t)).precise ? r.result: n.result + i
    }
    function Tl(e, t, i) {
        if (!e) return 0;
        if ("number" != typeof i && (i = 0), "undefined" == typeof t) {
            if (e.totalDuration) return e.totalDuration;
            if (!e.endList) return y.Infinity
        }
        return bl(e, t, i)
    }
    function Sl(e, t, i) {
        var n = 0;
        if (i < t) {
            var r = [i, t];
            t = r[0],
            i = r[1]
        }
        if (t < 0) {
            for (var s = t; s < Math.min(0, i); s++) n += e.targetDuration;
            t = 0
        }
        for (var a = t; a < i; a++) n += e.segments[a].duration;
        return n
    }
    function kl(e, t) {
        if (!e.segments.length) return 0;
        var i = e.segments.length,
        n = e.segments[i - 1].duration || e.targetDuration,
        r = "number" == typeof t ? t: n + 2 * e.targetDuration;
        if (0 === r) return i;
        for (var s = 0; i--&&!(r <= (s += e.segments[i].duration)););
        return Math.max(0, i)
    }
    function Cl(e, t, i, n) {
        if (!e || !e.segments) return null;
        if (e.endList) return Tl(e);
        if (null === t) return null;
        t = t || 0;
        var r = i ? kl(e, n) : e.segments.length;
        return bl(e, e.mediaSequence + r, t)
    }
    function El(e) {
        return e - Math.floor(e) == 0
    }
    function wl(e, t) {
        if (El(t)) return t + .1 * e;
        for (var i = t.toString().split(".")[1].length, n = 1; n <= i; n++) {
            var r = Math.pow(10, n),
            s = t * r;
            if (El(s) || n === i) return (s + e) / r
        }
    }
    function xl(e) {
        return e.excludeUntil && e.excludeUntil > Date.now()
    }
    function Al(e) {
        return e.excludeUntil && e.excludeUntil === 1 / 0
    }
    function Il(e) {
        var t = xl(e);
        return ! e.disabled && !t
    }
    function Pl(e, t) {
        return t.attributes && t.attributes[e]
    }
    function Ll(e, t) {
        if (1 === e.playlists.length) return ! 0;
        var i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
        return 0 === e.playlists.filter(function(e) {
            return !! Il(e) && (e.attributes.BANDWIDTH || 0) < i
        }).length
    }
    function Ol() {
        return function e(t, n) {
            t = tc({
                timeout: 45e3
            },
            t);
            var i = e.beforeRequest || cs.Hls.xhr.beforeRequest;
            if (i && "function" == typeof i) {
                var r = i(t);
                r && (t = r)
            }
            var s = ec(t,
            function(e, t) {
                var i = s.response; ! e && i && (s.responseTime = Date.now(), s.roundTripTime = s.responseTime - s.requestTime, s.bytesReceived = i.byteLength || i.length, s.bandwidth || (s.bandwidth = Math.floor(s.bytesReceived / s.roundTripTime * 8 * 1e3))),
                t.headers && (s.responseHeaders = t.headers),
                e && "ETIMEDOUT" === e.code && (s.timedout = !0),
                e || s.aborted || 200 === t.statusCode || 206 === t.statusCode || 0 === t.statusCode || (e = new Error("XHR Failed with a response of: " + (s && (i || s.responseText)))),
                n(e, s)
            }),
            a = s.abort;
            return s.abort = function() {
                return s.aborted = !0,
                a.apply(s, arguments)
            },
            s.uri = t.uri,
            s.requestTime = Date.now(),
            s
        }
    }
    function Dl(e) {
        var t = {};
        return e.byterange && (t.Range = function(e) {
            var t;
            return t = e.offset + e.length - 1,
            "bytes=" + e.offset + "-" + t
        } (e.byterange)),
        t
    }
    function Nl(e, t) {
        var i = e.toString(16);
        return "00".substring(0, 2 - i.length) + i + (t % 2 ? " ": "")
    }
    function Rl(e) {
        return 32 <= e && e < 126 ? String.fromCharCode(e) : "."
    }
    function Ul(i) {
        var n = {};
        return Object.keys(i).forEach(function(e) {
            var t = i[e];
            ArrayBuffer.isView(t) ? n[e] = {
                bytes: t.buffer,
                byteOffset: t.byteOffset,
                byteLength: t.byteLength
            }: n[e] = t
        }),
        n
    }
    function Ml(e) {
        var t = e.byterange || {
            length: 1 / 0,
            offset: 0
        };
        return [t.length, t.offset, e.resolvedUri].join(",")
    }
    function Bl(e) {
        return e.resolvedUri
    }
    function jl(e) {
        for (var t = Array.prototype.slice.call(e), i = "", n = 0; n < t.length / 16; n++) i += t.slice(16 * n, 16 * n + 16).map(Nl).join("") + " " + t.slice(16 * n, 16 * n + 16).map(Rl).join("") + "\n";
        return i
    }
    function Fl(e) {
        var t = e.playlist,
        i = e.time,
        n = void 0 === i ? void 0 : i,
        r = e.callback;
        if (!r) throw new Error("getProgramTime: callback must be provided");
        if (!t || void 0 === n) return r({
            message: "getProgramTime: playlist and time must be provided"
        });
        var s = function(e, t) {
            if (!t || !t.segments || 0 === t.segments.length) return null;
            for (var i = 0,
            n = void 0,
            r = 0; r < t.segments.length && !(e <= (i = (n = t.segments[r]).videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationEnd: i + n.duration)); r++);
            var s = t.segments[t.segments.length - 1];
            if (s.videoTimingInfo && s.videoTimingInfo.transmuxedPresentationEnd < e) return null;
            if (i < e) {
                if (e > i + .25 * s.duration) return null;
                n = s
            }
            return {
                segment: n,
                estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart: i - n.duration,
                type: n.videoTimingInfo ? "accurate": "estimate"
            }
        } (n, t);
        if (!s) return r({
            message: "valid programTime was not found"
        });
        if ("estimate" === s.type) return r({
            message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
            seekTime: s.estimatedStart
        });
        var a = {
            mediaSeconds: n
        },
        o = function(e, t) {
            if (!t.dateTimeObject) return null;
            var i = t.videoTimingInfo.transmuxerPrependedSeconds,
            n = e - (t.videoTimingInfo.transmuxedPresentationStart + i);
            return new Date(t.dateTimeObject.getTime() + 1e3 * n)
        } (n, s.segment);
        return o && (a.programDateTime = o.toISOString()),
        r(null, a)
    }
    function Hl(e) {
        var t = e.programTime,
        i = e.playlist,
        n = e.retryCount,
        r = void 0 === n ? 2 : n,
        s = e.seekTo,
        a = e.pauseAfterSeek,
        o = void 0 === a || a,
        u = e.tech,
        l = e.callback;
        if (!l) throw new Error("seekToProgramTime: callback must be provided");
        if ("undefined" == typeof t || !i || !s) return l({
            message: "seekToProgramTime: programTime, seekTo and playlist must be provided"
        });
        if (!i.endList && !u.hasStarted_) return l({
            message: "player must be playing a live stream to start buffering"
        });
        if (!
        function(e) {
            if (!e.segments || 0 === e.segments.length) return ! 1;
            for (var t = 0; t < e.segments.length; t++) {
                if (!e.segments[t].dateTimeObject) return ! 1
            }
            return ! 0
        } (i)) return l({
            message: "programDateTime tags must be provided in the manifest " + i.resolvedUri
        });
        var c = function(e, t) {
            var i = void 0;
            try {
                i = new Date(e)
            } catch(e) {
                return null
            }
            if (!t || !t.segments || 0 === t.segments.length) return null;
            var n = t.segments[0];
            if (i < n.dateTimeObject) return null;
            for (var r = 0; r < t.segments.length - 1; r++) {
                if (n = t.segments[r], i < t.segments[r + 1].dateTimeObject) break
            }
            var s = t.segments[t.segments.length - 1],
            a = s.dateTimeObject,
            o = s.videoTimingInfo ?
            function(e) {
                return e.transmuxedPresentationEnd - e.transmuxedPresentationStart - e.transmuxerPrependedSeconds
            } (s.videoTimingInfo) : s.duration + .25 * s.duration;
            return new Date(a.getTime() + 1e3 * o) < i ? null: (a < i && (n = s), {
                segment: n,
                estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart: Zl.duration(t, t.mediaSequence + t.segments.indexOf(n)),
                type: n.videoTimingInfo ? "accurate": "estimate"
            })
        } (t, i);
        if (!c) return l({
            message: t + " was not found in the stream"
        });
        var h = c.segment,
        d = function(e, t) {
            var i = void 0,
            n = void 0;
            try {
                i = new Date(e),
                n = new Date(t)
            } catch(e) {}
            var r = i.getTime();
            return (n.getTime() - r) / 1e3
        } (h.dateTimeObject, t);
        if ("estimate" === c.type) return 0 === r ? l({
            message: t + " is not buffered yet. Try again"
        }) : (s(c.estimatedStart + d), void u.one("seeked",
        function() {
            Hl({
                programTime: t,
                playlist: i,
                retryCount: r - 1,
                seekTo: s,
                pauseAfterSeek: o,
                tech: u,
                callback: l
            })
        }));
        var p = h.start + d;
        u.one("seeked",
        function() {
            return l(null, u.currentTime())
        }),
        o && u.pause(),
        s(p)
    }
    function Vl(e, t) {
        var i = [],
        n = void 0;
        if (e && e.length) for (n = 0; n < e.length; n++) t(e.start(n), e.end(n)) && i.push([e.start(n), e.end(n)]);
        return cs.createTimeRanges(i)
    }
    function ql(e, i) {
        return Vl(e,
        function(e, t) {
            return e - .1 <= i && i <= t + .1
        })
    }
    function Wl(e, t) {
        return Vl(e,
        function(e) {
            return t <= e - 1 / 30
        })
    }
    function zl(e) {
        var t = [];
        if (!e || !e.length) return "";
        for (var i = 0; i < e.length; i++) t.push(e.start(i) + " => " + e.end(i));
        return t.join(", ")
    }
    function Gl(e) {
        for (var t = [], i = 0; i < e.length; i++) t.push({
            start: e.start(i),
            end: e.end(i)
        });
        return t
    }
    function Xl(e, t, i) {
        var n = void 0,
        r = void 0;
        if (i && i.cues) for (n = i.cues.length; n--;)(r = i.cues[n]).startTime <= t && r.endTime >= e && i.removeCue(r)
    }
    function Kl(e) {
        return isNaN(e) || Math.abs(e) === 1 / 0 ? Number.MAX_VALUE: e
    }
    function Yl(e, t, i) {
        var n = y.WebKitDataCue || y.VTTCue;
        if (t && t.forEach(function(e) {
            var t = e.stream;
            this.inbandTextTracks_[t].addCue(new n(e.startTime + this.timestampOffset, e.endTime + this.timestampOffset, e.text))
        },
        e), i) {
            var r = Kl(e.mediaSource_.duration);
            if (i.forEach(function(e) {
                var i = e.cueTime + this.timestampOffset; ! ("number" != typeof i || y.isNaN(i) || i < 0) && i < 1 / 0 && e.frames.forEach(function(e) {
                    var t = new n(i, i, e.value || e.url || e.data || "");
                    t.frame = e,
                    t.value = e,
                    function(e) {
                        Object.defineProperties(e.frame, {
                            id: {
                                get: function() {
                                    return cs.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),
                                    e.value.key
                                }
                            },
                            value: {
                                get: function() {
                                    return cs.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),
                                    e.value.data
                                }
                            },
                            privateData: {
                                get: function() {
                                    return cs.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),
                                    e.value.data
                                }
                            }
                        })
                    } (t),
                    this.metadataTrack_.addCue(t)
                },
                this)
            },
            e), e.metadataTrack_ && e.metadataTrack_.cues && e.metadataTrack_.cues.length) {
                for (var s = e.metadataTrack_.cues,
                a = [], o = 0; o < s.length; o++) s[o] && a.push(s[o]);
                var u = a.reduce(function(e, t) {
                    var i = e[t.startTime] || [];
                    return i.push(t),
                    e[t.startTime] = i,
                    e
                },
                {}),
                l = Object.keys(u).sort(function(e, t) {
                    return Number(e) - Number(t)
                });
                l.forEach(function(e, t) {
                    var i = u[e],
                    n = Number(l[t + 1]) || r;
                    i.forEach(function(e) {
                        e.endTime = n
                    })
                })
            }
        }
    }
    var $l = cs.createTimeRange,
    Ql = wl.bind(null, 1),
    Jl = wl.bind(null, -1),
    Zl = {
        duration: Tl,
        seekable: function(e, t, i) {
            var n = t || 0,
            r = Cl(e, t, !0, i);
            return null === r ? $l() : $l(n, r)
        },
        safeLiveIndex: kl,
        getMediaInfoForTime: function(e, t, i, n) {
            var r = void 0,
            s = void 0,
            a = e.segments.length,
            o = t - n;
            if (o < 0) {
                if (0 < i) for (r = i - 1; 0 <= r; r--) if (s = e.segments[r], 0 < (o += Jl(s.duration))) return {
                    mediaIndex: r,
                    startTime: n - Sl(e, i, r)
                };
                return {
                    mediaIndex: 0,
                    startTime: t
                }
            }
            if (i < 0) {
                for (r = i; r < 0; r++) if ((o -= e.targetDuration) < 0) return {
                    mediaIndex: 0,
                    startTime: t
                };
                i = 0
            }
            for (r = i; r < a; r++) if (s = e.segments[r], (o -= Ql(s.duration)) < 0) return {
                mediaIndex: r,
                startTime: n + Sl(e, i, r)
            };
            return {
                mediaIndex: a - 1,
                startTime: t
            }
        },
        isEnabled: Il,
        isDisabled: function(e) {
            return e.disabled
        },
        isBlacklisted: xl,
        isIncompatible: Al,
        playlistEnd: Cl,
        isAes: function(e) {
            for (var t = 0; t < e.segments.length; t++) if (e.segments[t].key) return ! 0;
            return ! 1
        },
        isFmp4: function(e) {
            for (var t = 0; t < e.segments.length; t++) if (e.segments[t].map) return ! 0;
            return ! 1
        },
        hasAttribute: Pl,
        estimateSegmentRequestTime: function(e, t, i, n) {
            var r = 3 < arguments.length && void 0 !== n ? n: 0;
            return Pl("BANDWIDTH", i) ? (e * i.attributes.BANDWIDTH - 8 * r) / t: NaN
        },
        isLowestEnabledRendition: Ll
    },
    ec = cs.xhr,
    tc = cs.mergeOptions,
    ic = Object.freeze({
        createTransferableMessage: Ul,
        initSegmentId: Ml,
        segmentKeyId: Bl,
        hexDump: jl,
        tagDump: function(e) {
            var t = e.bytes;
            return jl(t)
        },
        textRanges: function(e) {
            var t, i, n = "",
            r = void 0;
            for (r = 0; r < e.length; r++) n += (i = r, (t = e).start(i) + "-" + t.end(i) + " ");
            return n
        }
    }),
    nc = "undefined" != typeof window ? window: {},
    rc = "undefined" == typeof Symbol ? "__target": Symbol(),
    sc = "application/javascript",
    ac = nc.BlobBuilder || nc.WebKitBlobBuilder || nc.MozBlobBuilder || nc.MSBlobBuilder,
    oc = nc.URL || nc.webkitURL || oc && oc.msURL,
    uc = nc.Worker;
    function lc(r, s) {
        return function(e) {
            var t = this;
            if (!s) return new uc(r);
            if (uc && !e) {
                var i = pc(s.toString().replace(/^function.+?{/, "").slice(0, -1));
                return this[rc] = new uc(i),
                function(e, t) {
                    if (!e || !t) return;
                    var i = e.terminate;
                    e.objURL = t,
                    e.terminate = function() {
                        e.objURL && oc.revokeObjectURL(e.objURL),
                        i.call(e)
                    }
                } (this[rc], i),
                this[rc]
            }
            var n = {
                postMessage: function(e) {
                    t.onmessage && setTimeout(function() {
                        t.onmessage({
                            data: e,
                            target: n
                        })
                    })
                }
            };
            s.call(n),
            this.postMessage = function(e) {
                setTimeout(function() {
                    n.onmessage({
                        data: e,
                        target: t
                    })
                })
            },
            this.isThisThread = !0
        }
    }
    if (uc) {
        var cc, hc = pc("self.onmessage = function () {}"),
        dc = new Uint8Array(1);
        try { (cc = new uc(hc)).postMessage(dc, [dc.buffer])
        } catch(e) {
            uc = null
        } finally {
            oc.revokeObjectURL(hc),
            cc && cc.terminate()
        }
    }
    function pc(t) {
        try {
            return oc.createObjectURL(new Blob([t], {
                type: sc
            }))
        } catch(e) {
            var i = new ac;
            return i.append(t),
            oc.createObjectURL(i.getBlob(type))
        }
    }
    function fc(e) {
        return e.map(function(e) {
            return e.replace(/avc1\.(\d+)\.(\d+)/i,
            function(e, t, i) {
                return "avc1." + ("00" + Number(t).toString(16)).slice( - 2) + "00" + ("00" + Number(i).toString(16)).slice( - 2)
            })
        })
    }
    function mc(e) {
        var t, i = 0 < arguments.length && void 0 !== e ? e: "",
        n = {
            codecCount: 0
        };
        return n.codecCount = i.split(",").length,
        n.codecCount = n.codecCount || 2,
        (t = /(^|\s|,)+(avc[13])([^ ,]*)/i.exec(i)) && (n.videoCodec = t[2], n.videoObjectTypeIndicator = t[3]),
        n.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(i),
        n.audioProfile = n.audioProfile && n.audioProfile[2],
        n
    }
    function gc(e, t, i) {
        return e + "/" + t + '; codecs="' + i.filter(function(e) {
            return !! e
        }).join(", ") + '"'
    }
    function vc(e, t) {
        var i = function(e) {
            return e.segments && e.segments.length && e.segments[0].map ? "mp4": "mp2t"
        } (t),
        n = function(e) {
            var t = e.attributes || {};
            return t.CODECS ? mc(t.CODECS) : Sc
        } (t),
        r = t.attributes || {},
        s = !0,
        a = !1;
        if (!t) return [];
        if (e.mediaGroups.AUDIO && r.AUDIO) {
            var o = e.mediaGroups.AUDIO[r.AUDIO];
            if (o) for (var u in s = !(a = !0), o) if (!o[u].uri && !o[u].playlists) {
                s = !0;
                break
            }
        }
        a && !n.audioProfile && (s || (n.audioProfile = function(e, t) {
            if (!e.mediaGroups.AUDIO || !t) return null;
            var i = e.mediaGroups.AUDIO[t];
            if (!i) return null;
            for (var n in i) {
                var r = i[n];
                if (r.
            default && r.playlists) return mc(r.playlists[0].attributes.CODECS).audioProfile
            }
            return null
        } (e, r.AUDIO)), n.audioProfile || (cs.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"), n.audioProfile = Sc.audioProfile));
        var l = {};
        n.videoCodec && (l.video = "" + n.videoCodec + n.videoObjectTypeIndicator),
        n.audioProfile && (l.audio = "mp4a.40." + n.audioProfile);
        var c = gc("audio", i, [l.audio]),
        h = gc("video", i, [l.video]),
        d = gc("video", i, [l.video, l.audio]);
        return a ? !s && l.video ? [h, c] : s || l.video ? [d, c] : [c, c] : l.video ? [d] : [c]
    }
    function yc(e) {
        var r = {
            type: "",
            parameters: {}
        },
        t = e.trim().split(";");
        return r.type = t.shift().trim(),
        t.forEach(function(e) {
            var t = e.trim().split("=");
            if (1 < t.length) {
                var i = t[0].replace(/"/g, "").trim(),
                n = t[1].replace(/"/g, "").trim();
                r.parameters[i] = n
            }
        }),
        r
    }
    function _c(e) {
        return /mp4a\.\d+.\d+/i.test(e)
    }
    function bc(e) {
        return /avc1\.[\da-f]+/i.test(e)
    }
    var Tc = new lc("./transmuxer-worker.worker.js",
    function(e, t) {
        var St = this; !
        function() {
            function e() {
                this.init = function() {
                    var s = {};
                    this.on = function(e, t) {
                        s[e] || (s[e] = []),
                        s[e] = s[e].concat(t)
                    },
                    this.off = function(e, t) {
                        var i;
                        return !! s[e] && (i = s[e].indexOf(t), s[e] = s[e].slice(), s[e].splice(i, 1), -1 < i)
                    },
                    this.trigger = function(e) {
                        var t, i, n, r;
                        if (t = s[e]) if (2 === arguments.length) for (n = t.length, i = 0; i < n; ++i) t[i].call(this, arguments[1]);
                        else {
                            for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i) r.push(arguments[i]);
                            for (n = t.length, i = 0; i < n; ++i) t[i].apply(this, r)
                        }
                    },
                    this.dispose = function() {
                        s = {}
                    }
                }
            }
            e.prototype.pipe = function(t) {
                return this.on("data",
                function(e) {
                    t.push(e)
                }),
                this.on("done",
                function(e) {
                    t.flush(e)
                }),
                this.on("partialdone",
                function(e) {
                    t.partialFlush(e)
                }),
                this.on("endedtimeline",
                function(e) {
                    t.endTimeline(e)
                }),
                this.on("reset",
                function(e) {
                    t.reset(e)
                }),
                t
            },
            e.prototype.push = function(e) {
                this.trigger("data", e)
            },
            e.prototype.flush = function(e) {
                this.trigger("done", e)
            },
            e.prototype.partialFlush = function(e) {
                this.trigger("partialdone", e)
            },
            e.prototype.endTimeline = function(e) {
                this.trigger("endedtimeline", e)
            },
            e.prototype.reset = function(e) {
                this.trigger("reset", e)
            };
            var l, t, i, r, s, n, a, o, u, c, h, d, p, f, m, g, v, y, _, b, T, S, k, C, E, w, x, A, I, P, L, O, D, N, R, U, M, B, j, F, H = e,
            V = Math.pow(2, 32) - 1; !
            function() {
                var e;
                if (S = {
                    avc1: [],
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    mvex: [],
                    mvhd: [],
                    pasp: [],
                    sdtp: [],
                    smhd: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    styp: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: []
                },
                "undefined" != typeof Uint8Array) {
                    for (e in S) S.hasOwnProperty(e) && (S[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                    k = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]),
                    E = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]),
                    C = new Uint8Array([0, 0, 0, 1]),
                    w = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                    x = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
                    A = {
                        video: w,
                        audio: x
                    },
                    L = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                    P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                    O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                    D = O,
                    N = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    R = O,
                    I = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                }
            } (),
            l = function(e) {
                var t, i, n = [],
                r = 0;
                for (t = 1; t < arguments.length; t++) n.push(arguments[t]);
                for (t = n.length; t--;) r += n[t].byteLength;
                for (i = new Uint8Array(r + 8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(e, 4), t = 0, r = 8; t < n.length; t++) i.set(n[t], r),
                r += n[t].byteLength;
                return i
            },
            t = function() {
                return l(S.dinf, l(S.dref, L))
            },
            i = function(e) {
                return l(S.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]))
            },
            m = function(e) {
                return l(S.hdlr, A[e])
            },
            f = function(e) {
                var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
                return e.samplerate && (t[12] = e.samplerate >>> 24 & 255, t[13] = e.samplerate >>> 16 & 255, t[14] = e.samplerate >>> 8 & 255, t[15] = 255 & e.samplerate),
                l(S.mdhd, t)
            },
            p = function(e) {
                return l(S.mdia, f(e), m(e.type), n(e))
            },
            s = function(e) {
                return l(S.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]))
            },
            n = function(e) {
                return l(S.minf, "video" === e.type ? l(S.vmhd, I) : l(S.smhd, P), t(), v(e))
            },
            a = function(e, t) {
                for (var i = [], n = t.length; n--;) i[n] = _(t[n]);
                return l.apply(null, [S.moof, s(e)].concat(i))
            },
            o = function(e) {
                for (var t = e.length,
                i = []; t--;) i[t] = h(e[t]);
                return l.apply(null, [S.moov, c(4294967295)].concat(i).concat(u(e)))
            },
            u = function(e) {
                for (var t = e.length,
                i = []; t--;) i[t] = b(e[t]);
                return l.apply(null, [S.mvex].concat(i))
            },
            c = function(e) {
                var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                return l(S.mvhd, t)
            },
            g = function(e) {
                var t, i, n = e.samples || [],
                r = new Uint8Array(4 + n.length);
                for (i = 0; i < n.length; i++) t = n[i].flags,
                r[i + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
                return l(S.sdtp, r)
            },
            v = function(e) {
                return l(S.stbl, y(e), l(S.stts, R), l(S.stsc, D), l(S.stsz, N), l(S.stco, O))
            },
            y = function(e) {
                return l(S.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === e.type ? U(e) : M(e))
            },
            U = function(e) {
                var t, i, n = e.sps || [],
                r = e.pps || [],
                s = [],
                a = [];
                for (t = 0; t < n.length; t++) s.push((65280 & n[t].byteLength) >>> 8),
                s.push(255 & n[t].byteLength),
                s = s.concat(Array.prototype.slice.call(n[t]));
                for (t = 0; t < r.length; t++) a.push((65280 & r[t].byteLength) >>> 8),
                a.push(255 & r[t].byteLength),
                a = a.concat(Array.prototype.slice.call(r[t]));
                if (i = [S.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), l(S.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([n.length], s, [r.length], a))), l(S.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))], e.sarRatio) {
                    var o = e.sarRatio[0],
                    u = e.sarRatio[1];
                    i.push(l(S.pasp, new Uint8Array([(4278190080 & o) >> 24, (16711680 & o) >> 16, (65280 & o) >> 8, 255 & o, (4278190080 & u) >> 24, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u])))
                }
                return l.apply(null, i)
            },
            M = function(e) {
                return l(S.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), i(e))
            },
            d = function(e) {
                var t = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
                return l(S.tkhd, t)
            },
            _ = function(e) {
                var t, i, n, r, s, a;
                return t = l(S.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                s = Math.floor(e.baseMediaDecodeTime / (1 + V)),
                a = Math.floor(e.baseMediaDecodeTime % (1 + V)),
                i = l(S.tfdt, new Uint8Array([1, 0, 0, 0, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a])),
                92,
                "audio" === e.type ? (n = T(e, 92), l(S.traf, t, i, n)) : (r = g(e), n = T(e, r.length + 92), l(S.traf, t, i, n, r))
            },
            h = function(e) {
                return e.duration = e.duration || 4294967295,
                l(S.trak, d(e), p(e))
            },
            b = function(e) {
                var t = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                return "video" !== e.type && (t[t.length - 1] = 0),
                l(S.trex, t)
            },
            F = function(e, t) {
                var i = 0,
                n = 0,
                r = 0,
                s = 0;
                return e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (n = 2), void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset && (s = 8)),
                [0, 0, i | n | r | s, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
            },
            j = function(e, t) {
                var i, n, r, s, a, o;
                for (t += 20 + 16 * (s = e.samples || []).length, r = F(s, t), (n = new Uint8Array(r.length + 16 * s.length)).set(r), i = r.length, o = 0; o < s.length; o++) a = s[o],
                n[i++] = (4278190080 & a.duration) >>> 24,
                n[i++] = (16711680 & a.duration) >>> 16,
                n[i++] = (65280 & a.duration) >>> 8,
                n[i++] = 255 & a.duration,
                n[i++] = (4278190080 & a.size) >>> 24,
                n[i++] = (16711680 & a.size) >>> 16,
                n[i++] = (65280 & a.size) >>> 8,
                n[i++] = 255 & a.size,
                n[i++] = a.flags.isLeading << 2 | a.flags.dependsOn,
                n[i++] = a.flags.isDependedOn << 6 | a.flags.hasRedundancy << 4 | a.flags.paddingValue << 1 | a.flags.isNonSyncSample,
                n[i++] = 61440 & a.flags.degradationPriority,
                n[i++] = 15 & a.flags.degradationPriority,
                n[i++] = (4278190080 & a.compositionTimeOffset) >>> 24,
                n[i++] = (16711680 & a.compositionTimeOffset) >>> 16,
                n[i++] = (65280 & a.compositionTimeOffset) >>> 8,
                n[i++] = 255 & a.compositionTimeOffset;
                return l(S.trun, n)
            },
            B = function(e, t) {
                var i, n, r, s, a, o;
                for (t += 20 + 8 * (s = e.samples || []).length, r = F(s, t), (i = new Uint8Array(r.length + 8 * s.length)).set(r), n = r.length, o = 0; o < s.length; o++) a = s[o],
                i[n++] = (4278190080 & a.duration) >>> 24,
                i[n++] = (16711680 & a.duration) >>> 16,
                i[n++] = (65280 & a.duration) >>> 8,
                i[n++] = 255 & a.duration,
                i[n++] = (4278190080 & a.size) >>> 24,
                i[n++] = (16711680 & a.size) >>> 16,
                i[n++] = (65280 & a.size) >>> 8,
                i[n++] = 255 & a.size;
                return l(S.trun, i)
            },
            T = function(e, t) {
                return "audio" === e.type ? B(e, t) : j(e, t)
            };
            r = function() {
                return l(S.ftyp, k, C, k, E)
            };
            function q(e, t) {
                var i = {
                    size: 0,
                    flags: {
                        isLeading: 0,
                        dependsOn: 1,
                        isDependedOn: 0,
                        hasRedundancy: 0,
                        degradationPriority: 0,
                        isNonSyncSample: 1
                    }
                };
                return i.dataOffset = t,
                i.compositionTimeOffset = e.pts - e.dts,
                i.duration = e.duration,
                i.size = 4 * e.length,
                i.size += e.byteLength,
                e.keyFrame && (i.flags.dependsOn = 2, i.flags.isNonSyncSample = 0),
                i
            }
            function W(e) {
                for (var t = []; e--;) t.push(0);
                return t
            }
            function z() {
                if (!X) {
                    var e = {
                        96e3: [ae, [227, 64], W(154), [56]],
                        88200 : [ae, [231], W(170), [56]],
                        64e3: [ae, [248, 192], W(240), [56]],
                        48e3: [ae, [255, 192], W(268), [55, 148, 128], W(54), [112]],
                        44100 : [ae, [255, 192], W(268), [55, 163, 128], W(84), [112]],
                        32e3: [ae, [255, 192], W(268), [55, 234], W(226), [112]],
                        24e3: [ae, [255, 192], W(268), [55, 255, 128], W(268), [111, 112], W(126), [224]],
                        16e3: [ae, [255, 192], W(268), [55, 255, 128], W(268), [111, 255], W(269), [223, 108], W(195), [1, 192]],
                        12e3: [oe, W(268), [3, 127, 248], W(268), [6, 255, 240], W(268), [13, 255, 224], W(268), [27, 253, 128], W(259), [56]],
                        11025 : [oe, W(268), [3, 127, 248], W(268), [6, 255, 240], W(268), [13, 255, 224], W(268), [27, 255, 192], W(268), [55, 175, 128], W(108), [112]],
                        8e3: [oe, W(268), [3, 121, 16], W(47), [7]]
                    };
                    X = function(i) {
                        return Object.keys(i).reduce(function(e, t) {
                            return e[t] = new Uint8Array(i[t].reduce(function(e, t) {
                                return e.concat(t)
                            },
                            [])),
                            e
                        },
                        {})
                    } (e)
                }
                return X
            }
            function G() {
                G.prototype.init.call(this),
                this.captionPackets_ = [],
                this.ccStreams_ = [new Ae(0, 0), new Ae(0, 1), new Ae(1, 0), new Ae(1, 1)],
                this.reset(),
                this.ccStreams_.forEach(function(e) {
                    e.on("data", this.trigger.bind(this, "data")),
                    e.on("partialdone", this.trigger.bind(this, "partialdone")),
                    e.on("done", this.trigger.bind(this, "done"))
                },
                this)
            }
            var X, K, Y, $, Q, J = function(e) {
                return l(S.mdat, e)
            },
            Z = a,
            ee = function(e) {
                var t, i = r(),
                n = o(e);
                return (t = new Uint8Array(i.byteLength + n.byteLength)).set(i),
                t.set(n, i.byteLength),
                t
            },
            te = function(e) {
                var t, i, n = [],
                r = [];
                for (r.byteLength = 0, r.nalCount = 0, r.duration = 0, t = n.byteLength = 0; t < e.length; t++)"access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts, r.byteLength += n.byteLength, r.nalCount += n.length, r.duration += n.duration, r.push(n)), (n = [i]).byteLength = i.data.byteLength, n.pts = i.pts, n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), n.duration = i.dts - n.dts, n.byteLength += i.data.byteLength, n.push(i));
                return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration),
                r.byteLength += n.byteLength,
                r.nalCount += n.length,
                r.duration += n.duration,
                r.push(n),
                r
            },
            ie = function(e) {
                var t, i, n = [],
                r = [];
                for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = e[0].pts, n.dts = e[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, t = 0; t < e.length; t++)(i = e[t]).keyFrame ? (n.length && (r.push(n), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration), (n = [i]).nalCount = i.length, n.byteLength = i.byteLength, n.pts = i.pts, n.dts = i.dts, n.duration = i.duration) : (n.duration += i.duration, n.nalCount += i.length, n.byteLength += i.byteLength, n.push(i));
                return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration),
                r.byteLength += n.byteLength,
                r.nalCount += n.nalCount,
                r.duration += n.duration,
                r.push(n),
                r
            },
            ne = function(e) {
                var t;
                return ! e[0][0].keyFrame && 1 < e.length && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration),
                e
            },
            re = function(e, t) {
                var i, n, r, s, a, o = t || 0,
                u = [];
                for (i = 0; i < e.length; i++) for (s = e[i], n = 0; n < s.length; n++) a = s[n],
                o += (r = q(a, o)).size,
                u.push(r);
                return u
            },
            se = function(e) {
                var t, i, n, r, s, a, o = 0,
                u = e.byteLength,
                l = e.nalCount,
                c = new Uint8Array(u + 4 * l),
                h = new DataView(c.buffer);
                for (t = 0; t < e.length; t++) for (r = e[t], i = 0; i < r.length; i++) for (s = r[i], n = 0; n < s.length; n++) a = s[n],
                h.setUint32(o, a.data.byteLength),
                o += 4,
                c.set(a.data, o),
                o += a.data.byteLength;
                return c
            },
            ae = [33, 16, 5, 32, 164, 27],
            oe = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
            ue = 9e4,
            le = (K = function(e) {
                return 9e4 * e
            },
            Y = function(e, t) {
                return e * t
            },
            $ = function(e) {
                return e / 9e4
            },
            Q = function(e, t) {
                return e / t
            },
            function(e, t) {
                return K(Q(e, t))
            }),
            ce = function(e, t) {
                return Y($(e), t)
            },
            he = function(e, t, i) {
                return $(i ? e: e - t)
            },
            de = function(e, t, i, n) {
                var r, s, a, o, u, l = 0,
                c = 0,
                h = 0;
                if (t.length && (r = le(e.baseMediaDecodeTime, e.samplerate), s = Math.ceil(ue / (e.samplerate / 1024)), i && n && (l = r - Math.max(i, n), h = (c = Math.floor(l / s)) * s), !(c < 1 || ue / 2 < h))) {
                    for (a = (a = z()[e.samplerate]) || t[0].data, o = 0; o < c; o++) u = t[0],
                    t.splice(0, 0, {
                        data: a,
                        dts: u.dts - s,
                        pts: u.pts - s
                    });
                    e.baseMediaDecodeTime -= Math.floor(ce(h, e.samplerate))
                }
            },
            pe = function(e, t, i) {
                return t.minSegmentDts >= i ? e: (t.minSegmentDts = 1 / 0, e.filter(function(e) {
                    return e.dts >= i && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0)
                }))
            },
            fe = function(e) {
                var t, i, n = [];
                for (t = 0; t < e.length; t++) i = e[t],
                n.push({
                    size: i.data.byteLength,
                    duration: 1024
                });
                return n
            },
            me = function(e) {
                var t, i, n = 0,
                r = new Uint8Array(function(e) {
                    var t, i = 0;
                    for (t = 0; t < e.length; t++) i += e[t].data.byteLength;
                    return i
                } (e));
                for (t = 0; t < e.length; t++) i = e[t],
                r.set(i.data, n),
                n += i.data.byteLength;
                return r
            },
            ge = ue,
            ve = function(e) {
                delete e.minSegmentDts,
                delete e.maxSegmentDts,
                delete e.minSegmentPts,
                delete e.maxSegmentPts
            },
            ye = function(e, t) {
                var i, n = e.minSegmentDts;
                return t || (n -= e.timelineStartInfo.dts),
                i = e.timelineStartInfo.baseMediaDecodeTime,
                i += n,
                i = Math.max(0, i),
                "audio" === e.type && (i *= e.samplerate / ge, i = Math.floor(i)),
                i
            },
            _e = function(e, t) {
                "number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts: e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts: e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)),
                "number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts: e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts: e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
            },
            be = function(e) {
                for (var t = 0,
                i = {
                    payloadType: -1,
                    payloadSize: 0
                },
                n = 0, r = 0; t < e.byteLength && 128 !== e[t];) {
                    for (; 255 === e[t];) n += 255,
                    t++;
                    for (n += e[t++]; 255 === e[t];) r += 255,
                    t++;
                    if (r += e[t++], !i.payload && 4 === n) {
                        i.payloadType = n,
                        i.payloadSize = r,
                        i.payload = e.subarray(t, t + r);
                        break
                    }
                    t += r,
                    r = n = 0
                }
                return i
            },
            Te = function(e) {
                return 181 !== e.payload[0] ? null: 49 != (e.payload[1] << 8 | e.payload[2]) ? null: "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null: 3 !== e.payload[7] ? null: e.payload.subarray(8, e.payload.length - 1)
            },
            Se = function(e, t) {
                var i, n, r, s, a = [];
                if (! (64 & t[0])) return a;
                for (n = 31 & t[0], i = 0; i < n; i++) s = {
                    type: 3 & t[2 + (r = 3 * i)],
                    pts: e
                },
                4 & t[2 + r] && (s.ccData = t[3 + r] << 8 | t[4 + r], a.push(s));
                return a
            },
            ke = 4; (G.prototype = new H).push = function(e) {
                var t, i, n;
                if ("sei_rbsp" === e.nalUnitType && (t = be(e.escapedRBSP)).payloadType === ke && (i = Te(t))) if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
                else {
                    if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--,
                    void(this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                    n = Se(e.pts, i),
                    this.captionPackets_ = this.captionPackets_.concat(n),
                    this.latestDts_ !== e.dts && (this.numSameDts_ = 0),
                    this.numSameDts_++,
                    this.latestDts_ = e.dts
                }
            },
            G.prototype.flushCCStreams = function(t) {
                this.ccStreams_.forEach(function(e) {
                    return "flush" === t ? e.flush() : e.partialFlush()
                },
                this)
            },
            G.prototype.flushStream = function(e) {
                this.captionPackets_.length && (this.captionPackets_.forEach(function(e, t) {
                    e.presortIndex = t
                }), this.captionPackets_.sort(function(e, t) {
                    return e.pts === t.pts ? e.presortIndex - t.presortIndex: e.pts - t.pts
                }), this.captionPackets_.forEach(function(e) {
                    e.type < 2 && this.dispatchCea608Packet(e)
                },
                this), this.captionPackets_.length = 0),
                this.flushCCStreams(e)
            },
            G.prototype.flush = function() {
                return this.flushStream("flush")
            },
            G.prototype.partialFlush = function() {
                return this.flushStream("partialFlush")
            },
            G.prototype.reset = function() {
                this.latestDts_ = null,
                this.ignoreNextEqualDts_ = !1,
                this.numSameDts_ = 0,
                this.activeCea608Channel_ = [null, null],
                this.ccStreams_.forEach(function(e) {
                    e.reset()
                })
            },
            G.prototype.dispatchCea608Packet = function(e) {
                this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] = null: this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1),
                null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
            },
            G.prototype.setsChannel1Active = function(e) {
                return 4096 == (30720 & e.ccData)
            },
            G.prototype.setsChannel2Active = function(e) {
                return 6144 == (30720 & e.ccData)
            },
            G.prototype.setsTextOrXDSActive = function(e) {
                return 256 == (28928 & e.ccData) || 4138 == (30974 & e.ccData) || 6186 == (30974 & e.ccData)
            };
            function Ce(e) {
                return null === e ? "": (e = we[e] || e, String.fromCharCode(e))
            }
            function Ee() {
                for (var e = [], t = 15; t--;) e.push("");
                return e
            }
            var we = {
                42 : 225,
                92 : 233,
                94 : 237,
                95 : 243,
                96 : 250,
                123 : 231,
                124 : 247,
                125 : 209,
                126 : 241,
                127 : 9608,
                304 : 174,
                305 : 176,
                306 : 189,
                307 : 191,
                308 : 8482,
                309 : 162,
                310 : 163,
                311 : 9834,
                312 : 224,
                313 : 160,
                314 : 232,
                315 : 226,
                316 : 234,
                317 : 238,
                318 : 244,
                319 : 251,
                544 : 193,
                545 : 201,
                546 : 211,
                547 : 218,
                548 : 220,
                549 : 252,
                550 : 8216,
                551 : 161,
                552 : 42,
                553 : 39,
                554 : 8212,
                555 : 169,
                556 : 8480,
                557 : 8226,
                558 : 8220,
                559 : 8221,
                560 : 192,
                561 : 194,
                562 : 199,
                563 : 200,
                564 : 202,
                565 : 203,
                566 : 235,
                567 : 206,
                568 : 207,
                569 : 239,
                570 : 212,
                571 : 217,
                572 : 249,
                573 : 219,
                574 : 171,
                575 : 187,
                800 : 195,
                801 : 227,
                802 : 205,
                803 : 204,
                804 : 236,
                805 : 210,
                806 : 242,
                807 : 213,
                808 : 245,
                809 : 123,
                810 : 125,
                811 : 92,
                812 : 94,
                813 : 95,
                814 : 124,
                815 : 126,
                816 : 196,
                817 : 228,
                818 : 214,
                819 : 246,
                820 : 223,
                821 : 165,
                822 : 164,
                823 : 9474,
                824 : 197,
                825 : 229,
                826 : 216,
                827 : 248,
                828 : 9484,
                829 : 9488,
                830 : 9492,
                831 : 9496
            },
            xe = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
            Ae = function e(t, i) {
                e.prototype.init.call(this),
                this.field_ = t || 0,
                this.dataChannel_ = i || 0,
                this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)),
                this.setConstants(),
                this.reset(),
                this.push = function(e) {
                    var t, i, n, r, s;
                    if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                        if (4096 == (61440 & t) ? this.lastControlCode_ = t: t !== this.PADDING_ && (this.lastControlCode_ = null), n = t >>> 8, r = 255 & t, t !== this.PADDING_) if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                        else if (t === this.END_OF_CAPTION_) this.mode_ = "popOn",
                        this.clearFormatting(e.pts),
                        this.flushDisplayed(e.pts),
                        i = this.displayed_,
                        this.displayed_ = this.nonDisplayed_,
                        this.nonDisplayed_ = i,
                        this.startPts_ = e.pts;
                        else if (t === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2,
                        this.setRollUp(e.pts);
                        else if (t === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3,
                        this.setRollUp(e.pts);
                        else if (t === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4,
                        this.setRollUp(e.pts);
                        else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts),
                        this.flushDisplayed(e.pts),
                        this.shiftRowsUp_(),
                        this.startPts_ = e.pts;
                        else if (t === this.BACKSPACE_)"popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                        else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts),
                        this.displayed_ = Ee();
                        else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = Ee();
                        else if (t === this.RESUME_DIRECT_CAPTIONING_)"paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = Ee()),
                        this.mode_ = "paintOn",
                        this.startPts_ = e.pts;
                        else if (this.isSpecialCharacter(n, r)) s = Ce((n = (3 & n) << 8) | r),
                        this[this.mode_](e.pts, s),
                        this.column_++;
                        else if (this.isExtCharacter(n, r))"popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1),
                        s = Ce((n = (3 & n) << 8) | r),
                        this[this.mode_](e.pts, s),
                        this.column_++;
                        else if (this.isMidRowCode(n, r)) this.clearFormatting(e.pts),
                        this[this.mode_](e.pts, " "),
                        this.column_++,
                        14 == (14 & r) && this.addFormatting(e.pts, ["i"]),
                        1 == (1 & r) && this.addFormatting(e.pts, ["u"]);
                        else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r;
                        else if (this.isPAC(n, r)) {
                            var a = xe.indexOf(7968 & t);
                            "rollUp" === this.mode_ && (a - this.rollUpRows_ + 1 < 0 && (a = this.rollUpRows_ - 1), this.setRollUp(e.pts, a)),
                            a !== this.row_ && (this.clearFormatting(e.pts), this.row_ = a),
                            1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]),
                            16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)),
                            this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"])
                        } else this.isNormalChar(n) && (0 === r && (r = null), s = Ce(n), s += Ce(r), this[this.mode_](e.pts, s), this.column_ += s.length)
                    } else this.lastControlCode_ = null
                }
            };
            Ae.prototype = new H,
            Ae.prototype.flushDisplayed = function(e) {
                var t = this.displayed_.map(function(e) {
                    try {
                        return e.trim()
                    } catch(e) {
                        return ""
                    }
                }).join("\n").replace(/^\n+|\n+$/g, "");
                t.length && this.trigger("data", {
                    startPts: this.startPts_,
                    endPts: e,
                    text: t,
                    stream: this.name_
                })
            },
            Ae.prototype.reset = function() {
                this.mode_ = "popOn",
                this.topRow_ = 0,
                this.startPts_ = 0,
                this.displayed_ = Ee(),
                this.nonDisplayed_ = Ee(),
                this.lastControlCode_ = null,
                this.column_ = 0,
                this.row_ = 14,
                this.rollUpRows_ = 2,
                this.formatting_ = []
            },
            Ae.prototype.setConstants = function() {
                0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31),
                this.PADDING_ = 0,
                this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_,
                this.END_OF_CAPTION_ = 47 | this.CONTROL_,
                this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_,
                this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_,
                this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_,
                this.CARRIAGE_RETURN_ = 45 | this.CONTROL_,
                this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_,
                this.BACKSPACE_ = 33 | this.CONTROL_,
                this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_,
                this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
            },
            Ae.prototype.isSpecialCharacter = function(e, t) {
                return e === this.EXT_ && 48 <= t && t <= 63
            },
            Ae.prototype.isExtCharacter = function(e, t) {
                return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63
            },
            Ae.prototype.isMidRowCode = function(e, t) {
                return e === this.EXT_ && 32 <= t && t <= 47
            },
            Ae.prototype.isOffsetControlCode = function(e, t) {
                return e === this.OFFSET_ && 33 <= t && t <= 35
            },
            Ae.prototype.isPAC = function(e, t) {
                return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127
            },
            Ae.prototype.isColorPAC = function(e) {
                return 64 <= e && e <= 79 || 96 <= e && e <= 127
            },
            Ae.prototype.isNormalChar = function(e) {
                return 32 <= e && e <= 127
            },
            Ae.prototype.setRollUp = function(e, t) {
                if ("rollUp" !== this.mode_ && (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = Ee(), this.displayed_ = Ee()), void 0 !== t && t !== this.row_) for (var i = 0; i < this.rollUpRows_; i++) this.displayed_[t - i] = this.displayed_[this.row_ - i],
                this.displayed_[this.row_ - i] = "";
                void 0 === t && (t = this.row_),
                this.topRow_ = t - this.rollUpRows_ + 1
            },
            Ae.prototype.addFormatting = function(e, t) {
                this.formatting_ = this.formatting_.concat(t);
                var i = t.reduce(function(e, t) {
                    return e + "<" + t + ">"
                },
                "");
                this[this.mode_](e, i)
            },
            Ae.prototype.clearFormatting = function(e) {
                if (this.formatting_.length) {
                    var t = this.formatting_.reverse().reduce(function(e, t) {
                        return e + "</" + t + ">"
                    },
                    "");
                    this.formatting_ = [],
                    this[this.mode_](e, t)
                }
            },
            Ae.prototype.popOn = function(e, t) {
                var i = this.nonDisplayed_[this.row_];
                i += t,
                this.nonDisplayed_[this.row_] = i
            },
            Ae.prototype.rollUp = function(e, t) {
                var i = this.displayed_[this.row_];
                i += t,
                this.displayed_[this.row_] = i
            },
            Ae.prototype.shiftRowsUp_ = function() {
                var e;
                for (e = 0; e < this.topRow_; e++) this.displayed_[e] = "";
                for (e = this.row_ + 1; e < 15; e++) this.displayed_[e] = "";
                for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
                this.displayed_[this.row_] = ""
            },
            Ae.prototype.paintOn = function(e, t) {
                var i = this.displayed_[this.row_];
                i += t,
                this.displayed_[this.row_] = i
            };
            function Ie(e, t) {
                var i = 1;
                for (t < e && (i = -1); 4294967296 < Math.abs(t - e);) e += 8589934592 * i;
                return e
            }
            function Pe(e) {
                var t, i;
                Pe.prototype.init.call(this),
                this.type_ = e || "shared",
                this.push = function(e) {
                    "shared" !== this.type_ && e.type !== this.type_ || (void 0 === i && (i = e.dts), e.dts = Ie(e.dts, i), e.pts = Ie(e.pts, i), t = e.dts, this.trigger("data", e))
                },
                this.flush = function() {
                    i = t,
                    this.trigger("done")
                },
                this.endTimeline = function() {
                    this.flush(),
                    this.trigger("endedtimeline")
                },
                this.discontinuity = function() {
                    t = i = void 0
                },
                this.reset = function() {
                    this.discontinuity(),
                    this.trigger("reset")
                }
            }
            var Le = {
                CaptionStream: G,
                Cea608Stream: Ae
            },
            Oe = {
                H264_STREAM_TYPE: 27,
                ADTS_STREAM_TYPE: 15,
                METADATA_STREAM_TYPE: 21
            };
            Pe.prototype = new H;
            function De(e, t, i) {
                var n, r = "";
                for (n = t; n < i; n++) r += "%" + ("00" + e[n].toString(16)).slice( - 2);
                return r
            }
            function Ne(e, t, i) {
                return decodeURIComponent(De(e, t, i))
            }
            function Re(e) {
                return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
            }
            var Ue, Me = Pe,
            Be = {
                TXXX: function(e) {
                    var t;
                    if (3 === e.data[0]) {
                        for (t = 1; t < e.data.length; t++) if (0 === e.data[t]) {
                            e.description = Ne(e.data, 1, t),
                            e.value = Ne(e.data, t + 1, e.data.length).replace(/\0*$/, "");
                            break
                        }
                        e.data = e.value
                    }
                },
                WXXX: function(e) {
                    var t;
                    if (3 === e.data[0]) for (t = 1; t < e.data.length; t++) if (0 === e.data[t]) {
                        e.description = Ne(e.data, 1, t),
                        e.url = Ne(e.data, t + 1, e.data.length);
                        break
                    }
                },
                PRIV: function(e) {
                    var t, i;
                    for (t = 0; t < e.data.length; t++) if (0 === e.data[t]) {
                        e.owner = (i = e.data, unescape(De(i, 0, t)));
                        break
                    }
                    e.privateData = e.data.subarray(t + 1),
                    e.data = e.privateData
                }
            }; (Ue = function(e) {
                var t, u = {
                    debug: !(!e || !e.debug),
                    descriptor: e && e.descriptor
                },
                l = 0,
                c = [],
                h = 0;
                if (Ue.prototype.init.call(this), this.dispatchType = Oe.METADATA_STREAM_TYPE.toString(16), u.descriptor) for (t = 0; t < u.descriptor.length; t++) this.dispatchType += ("00" + u.descriptor[t].toString(16)).slice( - 2);
                this.push = function(e) {
                    var t, i, n, r, s;
                    if ("timed-metadata" === e.type) if (e.dataAlignmentIndicator && (h = 0, c.length = 0), 0 === c.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))) u.debug;
                    else if (c.push(e), h += e.data.byteLength, 1 === c.length && (l = Re(e.data.subarray(6, 10)), l += 10), !(h < l)) {
                        for (t = {
                            data: new Uint8Array(l),
                            frames: [],
                            pts: c[0].pts,
                            dts: c[0].dts
                        },
                        s = 0; s < l;) t.data.set(c[0].data.subarray(0, l - s), s),
                        s += c[0].data.byteLength,
                        h -= c[0].data.byteLength,
                        c.shift();
                        i = 10,
                        64 & t.data[5] && (i += 4, i += Re(t.data.subarray(10, 14)), l -= Re(t.data.subarray(16, 20)));
                        do {
                            if ((n = Re(t.data.subarray(i + 4, i + 8))) < 1) return;
                            if ((r = {
                                id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]),
                                data: t.data.subarray(i + 10, i + n + 10)
                            }).key = r.id, Be[r.id] && (Be[r.id](r), "com.apple.streaming.transportStreamTimestamp" === r.owner)) {
                                var a = r.data,
                                o = (1 & a[3]) << 30 | a[4] << 22 | a[5] << 14 | a[6] << 6 | a[7] >>> 2;
                                o *= 4,
                                o += 3 & a[7],
                                r.timeStamp = o,
                                void 0 === t.pts && void 0 === t.dts && (t.pts = r.timeStamp, t.dts = r.timeStamp),
                                this.trigger("timestamp", r)
                            }
                            t.frames.push(r), i += 10, i += n
                        } while ( i < l );
                        this.trigger("data", t)
                    }
                }
            }).prototype = new H;
            var je, Fe, He, Ve = Ue,
            qe = Me; (je = function() {
                var r = new Uint8Array(188),
                s = 0;
                je.prototype.init.call(this),
                this.push = function(e) {
                    var t, i = 0,
                    n = 188;
                    for (s ? ((t = new Uint8Array(e.byteLength + s)).set(r.subarray(0, s)), t.set(e, s), s = 0) : t = e; n < t.byteLength;) 71 !== t[i] || 71 !== t[n] ? (i++, n++) : (this.trigger("data", t.subarray(i, n)), i += 188, n += 188);
                    i < t.byteLength && (r.set(t.subarray(i), 0), s = t.byteLength - i)
                },
                this.flush = function() {
                    188 === s && 71 === r[0] && (this.trigger("data", r), s = 0),
                    this.trigger("done")
                },
                this.endTimeline = function() {
                    this.flush(),
                    this.trigger("endedtimeline")
                },
                this.reset = function() {
                    s = 0,
                    this.trigger("reset")
                }
            }).prototype = new H,
            (Fe = function() {
                var n, r, s, a;
                Fe.prototype.init.call(this),
                (a = this).packetsWaitingForPmt = [],
                this.programMapTable = void 0,
                n = function(e, t) {
                    var i = 0;
                    t.payloadUnitStartIndicator && (i += e[i] + 1),
                    "pat" === t.type ? r(e.subarray(i), t) : s(e.subarray(i), t)
                },
                r = function(e, t) {
                    t.section_number = e[7],
                    t.last_section_number = e[8],
                    a.pmtPid = (31 & e[10]) << 8 | e[11],
                    t.pmtPid = a.pmtPid
                },
                s = function(e, t) {
                    var i, n;
                    if (1 & e[5]) {
                        for (a.programMapTable = {
                            video: null,
                            audio: null,
                            "timed-metadata": {}
                        },
                        i = 3 + ((15 & e[1]) << 8 | e[2]) - 4, n = 12 + ((15 & e[10]) << 8 | e[11]); n < i;) {
                            var r = e[n],
                            s = (31 & e[n + 1]) << 8 | e[n + 2];
                            r === Oe.H264_STREAM_TYPE && null === a.programMapTable.video ? a.programMapTable.video = s: r === Oe.ADTS_STREAM_TYPE && null === a.programMapTable.audio ? a.programMapTable.audio = s: r === Oe.METADATA_STREAM_TYPE && (a.programMapTable["timed-metadata"][s] = r),
                            n += 5 + ((15 & e[n + 3]) << 8 | e[n + 4])
                        }
                        t.programMapTable = a.programMapTable
                    }
                },
                this.push = function(e) {
                    var t = {},
                    i = 4;
                    if (t.payloadUnitStartIndicator = !!(64 & e[1]), t.pid = 31 & e[1], t.pid <<= 8, t.pid |= e[2], 1 < (48 & e[3]) >>> 4 && (i += e[i] + 1), 0 === t.pid) t.type = "pat",
                    n(e.subarray(i), t),
                    this.trigger("data", t);
                    else if (t.pid === this.pmtPid) for (t.type = "pmt", n(e.subarray(i), t), this.trigger("data", t); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
                    else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, i, t]) : this.processPes_(e, i, t)
                },
                this.processPes_ = function(e, t, i) {
                    i.pid === this.programMapTable.video ? i.streamType = Oe.H264_STREAM_TYPE: i.pid === this.programMapTable.audio ? i.streamType = Oe.ADTS_STREAM_TYPE: i.streamType = this.programMapTable["timed-metadata"][i.pid],
                    i.type = "pes",
                    i.data = e.subarray(t),
                    this.trigger("data", i)
                }
            }).prototype = new H,
            Fe.STREAM_TYPES = {
                h264: 27,
                adts: 15
            },
            (He = function() {
                function n(e, t, i) {
                    var n, r, s = new Uint8Array(e.size),
                    a = {
                        type: t
                    },
                    o = 0,
                    u = 0;
                    if (e.data.length && !(e.size < 9)) {
                        for (a.trackId = e.data[0].pid, o = 0; o < e.data.length; o++) r = e.data[o],
                        s.set(r.data, u),
                        u += r.data.byteLength; !
                        function(e, t) {
                            var i;
                            t.packetLength = 6 + (e[4] << 8 | e[5]),
                            t.dataAlignmentIndicator = 0 != (4 & e[6]),
                            192 & (i = e[7]) && (t.pts = (14 & e[9]) << 27 | (255 & e[10]) << 20 | (254 & e[11]) << 12 | (255 & e[12]) << 5 | (254 & e[13]) >>> 3, t.pts *= 4, t.pts += (6 & e[13]) >>> 1, t.dts = t.pts, 64 & i && (t.dts = (14 & e[14]) << 27 | (255 & e[15]) << 20 | (254 & e[16]) << 12 | (255 & e[17]) << 5 | (254 & e[18]) >>> 3, t.dts *= 4, t.dts += (6 & e[18]) >>> 1)),
                            t.data = e.subarray(9 + e[8])
                        } (s, a),
                        n = "video" === t || a.packetLength <= e.size,
                        (i || n) && (e.size = 0, e.data.length = 0),
                        n && l.trigger("data", a)
                    }
                }
                var t, l = this,
                r = {
                    data: [],
                    size: 0
                },
                s = {
                    data: [],
                    size: 0
                },
                a = {
                    data: [],
                    size: 0
                };
                He.prototype.init.call(this),
                this.push = function(i) { ({
                        pat: function() {},
                        pes: function() {
                            var e, t;
                            switch (i.streamType) {
                            case Oe.H264_STREAM_TYPE:
                                e = r,
                                t = "video";
                                break;
                            case Oe.ADTS_STREAM_TYPE:
                                e = s,
                                t = "audio";
                                break;
                            case Oe.METADATA_STREAM_TYPE:
                                e = a,
                                t = "timed-metadata";
                                break;
                            default:
                                return
                            }
                            i.payloadUnitStartIndicator && n(e, t, !0),
                            e.data.push(i),
                            e.size += i.data.byteLength
                        },
                        pmt: function() {
                            var e = {
                                type: "metadata",
                                tracks: []
                            };
                            null !== (t = i.programMapTable).video && e.tracks.push({
                                timelineStartInfo: {
                                    baseMediaDecodeTime: 0
                                },
                                id: +t.video,
                                codec: "avc",
                                type: "video"
                            }),
                            null !== t.audio && e.tracks.push({
                                timelineStartInfo: {
                                    baseMediaDecodeTime: 0
                                },
                                id: +t.audio,
                                codec: "adts",
                                type: "audio"
                            }),
                            l.trigger("data", e)
                        }
                    })[i.type]()
                },
                this.reset = function() {
                    r.size = 0,
                    r.data.length = 0,
                    s.size = 0,
                    s.data.length = 0,
                    this.trigger("reset")
                },
                this.flushStreams_ = function() {
                    n(r, "video"),
                    n(s, "audio"),
                    n(a, "timed-metadata")
                },
                this.flush = function() {
                    this.flushStreams_(),
                    this.trigger("done")
                }
            }).prototype = new H;
            var We = {
                PAT_PID: 0,
                MP2T_PACKET_LENGTH: 188,
                TransportPacketStream: je,
                TransportParseStream: Fe,
                ElementaryStream: He,
                TimestampRolloverStream: qe,
                CaptionStream: Le.CaptionStream,
                Cea608Stream: Le.Cea608Stream,
                MetadataStream: Ve
            };
            for (var ze in Oe) Oe.hasOwnProperty(ze) && (We[ze] = Oe[ze]);
            var Ge, Xe = We,
            Ke = ue,
            Ye = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]; (Ge = function(u) {
                var l, c = 0;
                Ge.prototype.init.call(this),
                this.push = function(e) {
                    var t, i, n, r, s, a, o = 0;
                    if (u || (c = 0), "audio" === e.type) for (l ? (r = l, (l = new Uint8Array(r.byteLength + e.data.byteLength)).set(r), l.set(e.data, r.byteLength)) : l = e.data; o + 5 < l.length;) if (255 === l[o] && 240 == (246 & l[o + 1])) {
                        if (i = 2 * (1 & ~l[o + 1]), t = (3 & l[o + 3]) << 11 | l[o + 4] << 3 | (224 & l[o + 5]) >> 5, a = (s = 1024 * (1 + (3 & l[o + 6]))) * Ke / Ye[(60 & l[o + 2]) >>> 2], n = o + t, l.byteLength < n) return;
                        if (this.trigger("data", {
                            pts: e.pts + c * a,
                            dts: e.dts + c * a,
                            sampleCount: s,
                            audioobjecttype: 1 + (l[o + 2] >>> 6 & 3),
                            channelcount: (1 & l[o + 2]) << 2 | (192 & l[o + 3]) >>> 6,
                            samplerate: Ye[(60 & l[o + 2]) >>> 2],
                            samplingfrequencyindex: (60 & l[o + 2]) >>> 2,
                            samplesize: 16,
                            data: l.subarray(o + 7 + i, n)
                        }), c++, l.byteLength === n) return void(l = void 0);
                        l = l.subarray(n)
                    } else o++
                },
                this.flush = function() {
                    c = 0,
                    this.trigger("done")
                },
                this.reset = function() {
                    l = void 0,
                    this.trigger("reset")
                },
                this.endTimeline = function() {
                    l = void 0,
                    this.trigger("endedtimeline")
                }
            }).prototype = new H;
            var $e, Qe, Je, Ze = Ge,
            et = function(n) {
                var r = n.byteLength,
                s = 0,
                a = 0;
                this.length = function() {
                    return 8 * r
                },
                this.bitsAvailable = function() {
                    return 8 * r + a
                },
                this.loadWord = function() {
                    var e = n.byteLength - r,
                    t = new Uint8Array(4),
                    i = Math.min(4, r);
                    if (0 === i) throw new Error("no bytes available");
                    t.set(n.subarray(e, e + i)),
                    s = new DataView(t.buffer).getUint32(0),
                    a = 8 * i,
                    r -= i
                },
                this.skipBits = function(e) {
                    var t;
                    e < a || (e -= a, e -= 8 * (t = Math.floor(e / 8)), r -= t, this.loadWord()),
                    s <<= e,
                    a -= e
                },
                this.readBits = function(e) {
                    var t = Math.min(a, e),
                    i = s >>> 32 - t;
                    return 0 < (a -= t) ? s <<= t: 0 < r && this.loadWord(),
                    0 < (t = e - t) ? i << t | this.readBits(t) : i
                },
                this.skipLeadingZeros = function() {
                    var e;
                    for (e = 0; e < a; ++e) if (0 != (s & 2147483648 >>> e)) return s <<= e,
                    a -= e,
                    e;
                    return this.loadWord(),
                    e + this.skipLeadingZeros()
                },
                this.skipUnsignedExpGolomb = function() {
                    this.skipBits(1 + this.skipLeadingZeros())
                },
                this.skipExpGolomb = function() {
                    this.skipBits(1 + this.skipLeadingZeros())
                },
                this.readUnsignedExpGolomb = function() {
                    var e = this.skipLeadingZeros();
                    return this.readBits(e + 1) - 1
                },
                this.readExpGolomb = function() {
                    var e = this.readUnsignedExpGolomb();
                    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                },
                this.readBoolean = function() {
                    return 1 === this.readBits(1)
                },
                this.readUnsignedByte = function() {
                    return this.readBits(8)
                },
                this.loadWord()
            }; (Qe = function() {
                var n, r, s = 0;
                Qe.prototype.init.call(this),
                this.push = function(e) {
                    for (var t, i = (r = r ? ((t = new Uint8Array(r.byteLength + e.data.byteLength)).set(r), t.set(e.data, r.byteLength), t) : e.data).byteLength; s < i - 3; s++) if (1 === r[s + 2]) {
                        n = s + 5;
                        break
                    }
                    for (; n < i;) switch (r[n]) {
                    case 0:
                        if (0 !== r[n - 1]) {
                            n += 2;
                            break
                        }
                        if (0 !== r[n - 2]) {
                            n++;
                            break
                        }
                        for (s + 3 !== n - 2 && this.trigger("data", r.subarray(s + 3, n - 2)); 1 !== r[++n] && n < i;);
                        s = n - 2,
                        n += 3;
                        break;
                    case 1:
                        if (0 !== r[n - 1] || 0 !== r[n - 2]) {
                            n += 3;
                            break
                        }
                        this.trigger("data", r.subarray(s + 3, n - 2)),
                        s = n - 2,
                        n += 3;
                        break;
                    default:
                        n += 3
                    }
                    r = r.subarray(s),
                    n -= s,
                    s = 0
                },
                this.reset = function() {
                    r = null,
                    s = 0,
                    this.trigger("reset")
                },
                this.flush = function() {
                    r && 3 < r.byteLength && this.trigger("data", r.subarray(s + 3)),
                    r = null,
                    s = 0,
                    this.trigger("done")
                },
                this.endTimeline = function() {
                    this.flush(),
                    this.trigger("endedtimeline")
                }
            }).prototype = new H,
            Je = {
                100 : !0,
                110 : !0,
                122 : !0,
                244 : !0,
                44 : !0,
                83 : !0,
                86 : !0,
                118 : !0,
                128 : !0,
                138 : !0,
                139 : !0,
                134 : !0
            },
            ($e = function() {
                var i, n, r, s, a, o, _, t = new Qe;
                $e.prototype.init.call(this),
                (i = this).push = function(e) {
                    "video" === e.type && (n = e.trackId, r = e.pts, s = e.dts, t.push(e))
                },
                t.on("data",
                function(e) {
                    var t = {
                        trackId: n,
                        pts: r,
                        dts: s,
                        data: e
                    };
                    switch (31 & e[0]) {
                    case 5:
                        t.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                        break;
                    case 6:
                        t.nalUnitType = "sei_rbsp",
                        t.escapedRBSP = a(e.subarray(1));
                        break;
                    case 7:
                        t.nalUnitType = "seq_parameter_set_rbsp",
                        t.escapedRBSP = a(e.subarray(1)),
                        t.config = o(t.escapedRBSP);
                        break;
                    case 8:
                        t.nalUnitType = "pic_parameter_set_rbsp";
                        break;
                    case 9:
                        t.nalUnitType = "access_unit_delimiter_rbsp"
                    }
                    i.trigger("data", t)
                }),
                t.on("done",
                function() {
                    i.trigger("done")
                }),
                t.on("partialdone",
                function() {
                    i.trigger("partialdone")
                }),
                t.on("reset",
                function() {
                    i.trigger("reset")
                }),
                t.on("endedtimeline",
                function() {
                    i.trigger("endedtimeline")
                }),
                this.flush = function() {
                    t.flush()
                },
                this.partialFlush = function() {
                    t.partialFlush()
                },
                this.reset = function() {
                    t.reset()
                },
                this.endTimeline = function() {
                    t.endTimeline()
                },
                _ = function(e, t) {
                    var i, n = 8,
                    r = 8;
                    for (i = 0; i < e; i++) 0 !== r && (r = (n + t.readExpGolomb() + 256) % 256),
                    n = 0 === r ? n: r
                },
                a = function(e) {
                    for (var t, i, n = e.byteLength,
                    r = [], s = 1; s < n - 2;) 0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (r.push(s + 2), s += 2) : s++;
                    if (0 === r.length) return e;
                    t = n - r.length,
                    i = new Uint8Array(t);
                    var a = 0;
                    for (s = 0; s < t; a++, s++) a === r[0] && (a++, r.shift()),
                    i[s] = e[a];
                    return i
                },
                o = function(e) {
                    var t, i, n, r, s, a, o, u, l, c, h, d, p, f = 0,
                    m = 0,
                    g = 0,
                    v = 0,
                    y = 1;
                    if (i = (t = new et(e)).readUnsignedByte(), r = t.readUnsignedByte(), n = t.readUnsignedByte(), t.skipUnsignedExpGolomb(), Je[i] && (3 === (s = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean())) for (h = 3 !== s ? 8 : 12, p = 0; p < h; p++) t.readBoolean() && _(p < 6 ? 16 : 64, t);
                    if (t.skipUnsignedExpGolomb(), 0 === (a = t.readUnsignedExpGolomb())) t.readUnsignedExpGolomb();
                    else if (1 === a) for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), o = t.readUnsignedExpGolomb(), p = 0; p < o; p++) t.skipExpGolomb();
                    if (t.skipUnsignedExpGolomb(), t.skipBits(1), u = t.readUnsignedExpGolomb(), l = t.readUnsignedExpGolomb(), 0 === (c = t.readBits(1)) && t.skipBits(1), t.skipBits(1), t.readBoolean() && (f = t.readUnsignedExpGolomb(), m = t.readUnsignedExpGolomb(), g = t.readUnsignedExpGolomb(), v = t.readUnsignedExpGolomb()), t.readBoolean() && t.readBoolean()) {
                        switch (t.readUnsignedByte()) {
                        case 1:
                            d = [1, 1];
                            break;
                        case 2:
                            d = [12, 11];
                            break;
                        case 3:
                            d = [10, 11];
                            break;
                        case 4:
                            d = [16, 11];
                            break;
                        case 5:
                            d = [40, 33];
                            break;
                        case 6:
                            d = [24, 11];
                            break;
                        case 7:
                            d = [20, 11];
                            break;
                        case 8:
                            d = [32, 11];
                            break;
                        case 9:
                            d = [80, 33];
                            break;
                        case 10:
                            d = [18, 11];
                            break;
                        case 11:
                            d = [15, 11];
                            break;
                        case 12:
                            d = [64, 33];
                            break;
                        case 13:
                            d = [160, 99];
                            break;
                        case 14:
                            d = [4, 3];
                            break;
                        case 15:
                            d = [3, 2];
                            break;
                        case 16:
                            d = [2, 1];
                            break;
                        case 255:
                            d = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
                        }
                        d && (y = d[0] / d[1])
                    }
                    return {
                        profileIdc: i,
                        levelIdc: n,
                        profileCompatibility: r,
                        width: Math.ceil((16 * (u + 1) - 2 * f - 2 * m) * y),
                        height: (2 - c) * (l + 1) * 16 - 2 * g - 2 * v,
                        sarRatio: d
                    }
                }
            }).prototype = new H;
            var tt, it = {
                H264Stream: $e,
                NalByteStream: Qe
            },
            nt = function(e) {
                return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0)
            },
            rt = function(e, t) {
                var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
                return (16 & e[t + 5]) >> 4 ? 20 + i: 10 + i
            },
            st = function(e, t) {
                var i = (224 & e[t + 5]) >> 5,
                n = e[t + 4] << 3;
                return 6144 & e[t + 3] | n | i
            }; (tt = function() {
                var o = new Uint8Array,
                u = 0;
                tt.prototype.init.call(this),
                this.setTimestamp = function(e) {
                    u = e
                },
                this.push = function(e) {
                    var t, i, n, r, s = 0,
                    a = 0;
                    for (o.length ? (r = o.length, (o = new Uint8Array(e.byteLength + r)).set(o.subarray(0, r)), o.set(e, r)) : o = e; 3 <= o.length - a;) if (o[a] !== "I".charCodeAt(0) || o[a + 1] !== "D".charCodeAt(0) || o[a + 2] !== "3".charCodeAt(0)) if (255 != (255 & o[a]) || 240 != (240 & o[a + 1])) a++;
                    else {
                        if (o.length - a < 7) break;
                        if (a + (s = st(o, a)) > o.length) break;
                        n = {
                            type: "audio",
                            data: o.subarray(a, a + s),
                            pts: u,
                            dts: u
                        },
                        this.trigger("data", n),
                        a += s
                    } else {
                        if (o.length - a < 10) break;
                        if (a + (s = rt(o, a)) > o.length) break;
                        i = {
                            type: "timed-metadata",
                            data: o.subarray(a, a + s)
                        },
                        this.trigger("data", i),
                        a += s
                    }
                    t = o.length - a,
                    o = 0 < t ? o.subarray(a) : new Uint8Array
                },
                this.reset = function() {
                    o = new Uint8Array,
                    this.trigger("reset")
                },
                this.endTimeline = function() {
                    o = new Uint8Array,
                    this.trigger("endedtimeline")
                }
            }).prototype = new H;
            function at(e, t) {
                var i;
                if (e.length !== t.length) return ! 1;
                for (i = 0; i < e.length; i++) if (e[i] !== t[i]) return ! 1;
                return ! 0
            }
            function ot(e, t, i, n, r, s) {
                return {
                    start: {
                        dts: e,
                        pts: e + (i - t)
                    },
                    end: {
                        dts: e + (n - t),
                        pts: e + (r - i)
                    },
                    prependedContentDuration: s,
                    baseMediaDecodeTime: e
                }
            }
            var ut, lt, ct, ht, dt = tt,
            pt = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
            ft = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"],
            mt = it.H264Stream,
            gt = nt,
            vt = ue; (lt = function(s, a) {
                var o = [],
                u = 0,
                l = 0,
                c = 0,
                h = 1 / 0;
                a = a || {},
                lt.prototype.init.call(this),
                this.push = function(t) {
                    _e(s, t),
                    s && pt.forEach(function(e) {
                        s[e] = t[e]
                    }),
                    o.push(t)
                },
                this.setEarliestDts = function(e) {
                    l = e
                },
                this.setVideoBaseMediaDecodeTime = function(e) {
                    h = e
                },
                this.setAudioAppendStart = function(e) {
                    c = e
                },
                this.flush = function() {
                    var e, t, i, n, r;
                    0 !== o.length && (e = pe(o, s, l), s.baseMediaDecodeTime = ye(s, a.keepOriginalTimestamps), de(s, e, c, h), s.samples = fe(e), i = J(me(e)), o = [], t = Z(u, [s]), n = new Uint8Array(t.byteLength + i.byteLength), u++, n.set(t), n.set(i, t.byteLength), ve(s), r = Math.ceil(1024 * vt / s.samplerate), e.length && this.trigger("timingInfo", {
                        start: e[0].pts,
                        end: e[0].pts + e.length * r
                    }), this.trigger("data", {
                        track: s,
                        boxes: n
                    })),
                    this.trigger("done", "AudioSegmentStream")
                },
                this.reset = function() {
                    ve(s),
                    o = [],
                    this.trigger("reset")
                }
            }).prototype = new H,
            (ut = function(c, h) {
                var t, i, d = 0,
                p = [],
                f = [];
                h = h || {},
                ut.prototype.init.call(this),
                delete c.minPTS,
                this.gopCache_ = [],
                this.push = function(e) {
                    _e(c, e),
                    "seq_parameter_set_rbsp" !== e.nalUnitType || t || (t = e.config, c.sps = [e.data], ft.forEach(function(e) {
                        c[e] = t[e]
                    },
                    this)),
                    "pic_parameter_set_rbsp" !== e.nalUnitType || i || (i = e.data, c.pps = [e.data]),
                    p.push(e)
                },
                this.flush = function() {
                    for (var e, t, i, n, r, s, a, o, u = 0; p.length && "access_unit_delimiter_rbsp" !== p[0].nalUnitType;) p.shift();
                    if (0 === p.length) return this.resetStream_(),
                    void this.trigger("done", "VideoSegmentStream");
                    if (e = te(p), (i = ie(e))[0][0].keyFrame || ((t = this.getGopForFusion_(p[0], c)) ? (u = t.duration, i.unshift(t), i.byteLength += t.byteLength, i.nalCount += t.nalCount, i.pts = t.pts, i.dts = t.dts, i.duration += t.duration) : i = ne(i)), f.length) {
                        var l;
                        if (! (l = h.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i))) return this.gopCache_.unshift({
                            gop: i.pop(),
                            pps: c.pps,
                            sps: c.sps
                        }),
                        this.gopCache_.length = Math.min(6, this.gopCache_.length),
                        p = [],
                        this.resetStream_(),
                        void this.trigger("done", "VideoSegmentStream");
                        ve(c),
                        i = l
                    }
                    _e(c, i),
                    c.samples = re(i),
                    r = J(se(i)),
                    c.baseMediaDecodeTime = ye(c, h.keepOriginalTimestamps),
                    this.trigger("processedGopsInfo", i.map(function(e) {
                        return {
                            pts: e.pts,
                            dts: e.dts,
                            byteLength: e.byteLength
                        }
                    })),
                    a = i[0],
                    o = i[i.length - 1],
                    this.trigger("segmentTimingInfo", ot(c.baseMediaDecodeTime, a.dts, a.pts, o.dts + o.duration, o.pts + o.duration, u)),
                    this.trigger("timingInfo", {
                        start: i[0].pts,
                        end: i[i.length - 1].pts + i[i.length - 1].duration
                    }),
                    this.gopCache_.unshift({
                        gop: i.pop(),
                        pps: c.pps,
                        sps: c.sps
                    }),
                    this.gopCache_.length = Math.min(6, this.gopCache_.length),
                    p = [],
                    this.trigger("baseMediaDecodeTime", c.baseMediaDecodeTime),
                    this.trigger("timelineStartInfo", c.timelineStartInfo),
                    n = Z(d, [c]),
                    s = new Uint8Array(n.byteLength + r.byteLength),
                    d++,
                    s.set(n),
                    s.set(r, n.byteLength),
                    this.trigger("data", {
                        track: c,
                        boxes: s
                    }),
                    this.resetStream_(),
                    this.trigger("done", "VideoSegmentStream")
                },
                this.reset = function() {
                    this.resetStream_(),
                    p = [],
                    this.gopCache_.length = 0,
                    f.length = 0,
                    this.trigger("reset")
                },
                this.resetStream_ = function() {
                    ve(c),
                    i = t = void 0
                },
                this.getGopForFusion_ = function(e) {
                    var t, i, n, r, s, a = 1 / 0;
                    for (s = 0; s < this.gopCache_.length; s++) n = (r = this.gopCache_[s]).gop,
                    c.pps && at(c.pps[0], r.pps[0]) && c.sps && at(c.sps[0], r.sps[0]) && (n.dts < c.timelineStartInfo.dts || -1e4 <= (t = e.dts - n.dts - n.duration) && t <= 45e3 && (!i || t < a) && (i = r, a = t));
                    return i ? i.gop: null
                },
                this.alignGopsAtStart_ = function(e) {
                    var t, i, n, r, s, a, o, u;
                    for (s = e.byteLength, a = e.nalCount, o = e.duration, t = i = 0; t < f.length && i < e.length && (n = f[t], r = e[i], n.pts !== r.pts);) r.pts > n.pts ? t++:(i++, s -= r.byteLength, a -= r.nalCount, o -= r.duration);
                    return 0 === i ? e: i === e.length ? null: ((u = e.slice(i)).byteLength = s, u.duration = o, u.nalCount = a, u.pts = u[0].pts, u.dts = u[0].dts, u)
                },
                this.alignGopsAtEnd_ = function(e) {
                    var t, i, n, r, s, a, o;
                    for (t = f.length - 1, i = e.length - 1, s = null, a = !1; 0 <= t && 0 <= i;) {
                        if (n = f[t], r = e[i], n.pts === r.pts) {
                            a = !0;
                            break
                        }
                        n.pts > r.pts ? t--:(t === f.length - 1 && (s = i), i--)
                    }
                    if (!a && null === s) return null;
                    if (0 === (o = a ? i: s)) return e;
                    var u = e.slice(o),
                    l = u.reduce(function(e, t) {
                        return e.byteLength += t.byteLength,
                        e.duration += t.duration,
                        e.nalCount += t.nalCount,
                        e
                    },
                    {
                        byteLength: 0,
                        duration: 0,
                        nalCount: 0
                    });
                    return u.byteLength = l.byteLength,
                    u.duration = l.duration,
                    u.nalCount = l.nalCount,
                    u.pts = u[0].pts,
                    u.dts = u[0].dts,
                    u
                },
                this.alignGopsWith = function(e) {
                    f = e
                }
            }).prototype = new H,
            (ht = function(e, t) {
                this.numberOfTracks = 0,
                this.metadataStream = t,
                "undefined" != typeof(e = e || {}).remux ? this.remuxTracks = !!e.remux: this.remuxTracks = !0,
                "boolean" == typeof e.keepOriginalTimestamps ? this.keepOriginalTimestamps = e.keepOriginalTimestamps: this.keepOriginalTimestamps = !1,
                this.pendingTracks = [],
                this.videoTrack = null,
                this.pendingBoxes = [],
                this.pendingCaptions = [],
                this.pendingMetadata = [],
                this.pendingBytes = 0,
                this.emittedTracks = 0,
                ht.prototype.init.call(this),
                this.push = function(e) {
                    return e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track), this.pendingBytes += e.boxes.byteLength, "video" === e.track.type && (this.videoTrack = e.track, this.pendingBoxes.push(e.boxes)), void("audio" === e.track.type && (this.audioTrack = e.track, this.pendingBoxes.unshift(e.boxes))))
                }
            }).prototype = new H,
            ht.prototype.flush = function(e) {
                var t, i, n, r, s = 0,
                a = {
                    captions: [],
                    captionStreams: {},
                    metadata: [],
                    info: {}
                },
                o = 0;
                if (this.pendingTracks.length < this.numberOfTracks) {
                    if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e) return;
                    if (this.remuxTracks) return;
                    if (0 === this.pendingTracks.length) return this.emittedTracks++,
                    void(this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
                }
                if (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, ft.forEach(function(e) {
                    a.info[e] = this.videoTrack[e]
                },
                this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, pt.forEach(function(e) {
                    a.info[e] = this.audioTrack[e]
                },
                this)), this.videoTrack || this.audioTrack) {
                    for (1 === this.pendingTracks.length ? a.type = this.pendingTracks[0].type: a.type = "combined", this.emittedTracks += this.pendingTracks.length, n = ee(this.pendingTracks), a.initSegment = new Uint8Array(n.byteLength), a.initSegment.set(n), a.data = new Uint8Array(this.pendingBytes), r = 0; r < this.pendingBoxes.length; r++) a.data.set(this.pendingBoxes[r], s),
                    s += this.pendingBoxes[r].byteLength;
                    for (r = 0; r < this.pendingCaptions.length; r++)(t = this.pendingCaptions[r]).startTime = he(t.startPts, o, this.keepOriginalTimestamps),
                    t.endTime = he(t.endPts, o, this.keepOriginalTimestamps),
                    a.captionStreams[t.stream] = !0,
                    a.captions.push(t);
                    for (r = 0; r < this.pendingMetadata.length; r++)(i = this.pendingMetadata[r]).cueTime = he(i.pts, o, this.keepOriginalTimestamps),
                    a.metadata.push(i);
                    for (a.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", a), r = 0; r < a.captions.length; r++) t = a.captions[r],
                    this.trigger("caption", t);
                    for (r = 0; r < a.metadata.length; r++) i = a.metadata[r],
                    this.trigger("id3Frame", i)
                }
                this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
            },
            ht.prototype.setRemux = function(e) {
                this.remuxTracks = e
            },
            (ct = function(r) {
                var s, a, o = this,
                i = !0;
                ct.prototype.init.call(this),
                r = r || {},
                this.baseMediaDecodeTime = r.baseMediaDecodeTime || 0,
                this.transmuxPipeline_ = {},
                this.setupAacPipeline = function() {
                    var t = {}; (this.transmuxPipeline_ = t).type = "aac",
                    t.metadataStream = new Xe.MetadataStream,
                    t.aacStream = new dt,
                    t.audioTimestampRolloverStream = new Xe.TimestampRolloverStream("audio"),
                    t.timedMetadataTimestampRolloverStream = new Xe.TimestampRolloverStream("timed-metadata"),
                    t.adtsStream = new Ze,
                    t.coalesceStream = new ht(r, t.metadataStream),
                    t.headOfPipeline = t.aacStream,
                    t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream),
                    t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream),
                    t.metadataStream.on("timestamp",
                    function(e) {
                        t.aacStream.setTimestamp(e.timeStamp)
                    }),
                    t.aacStream.on("data",
                    function(e) {
                        "timed-metadata" !== e.type || t.audioSegmentStream || (a = a || {
                            timelineStartInfo: {
                                baseMediaDecodeTime: o.baseMediaDecodeTime
                            },
                            codec: "adts",
                            type: "audio"
                        },
                        t.coalesceStream.numberOfTracks++, t.audioSegmentStream = new lt(a, r), t.audioSegmentStream.on("timingInfo", o.trigger.bind(o, "audioTimingInfo")), t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream)),
                        o.trigger("trackinfo", {
                            hasAudio: !!a,
                            hasVideo: !!s
                        })
                    }),
                    t.coalesceStream.on("data", this.trigger.bind(this, "data")),
                    t.coalesceStream.on("done", this.trigger.bind(this, "done"))
                },
                this.setupTsPipeline = function() {
                    var n = {}; (this.transmuxPipeline_ = n).type = "ts",
                    n.metadataStream = new Xe.MetadataStream,
                    n.packetStream = new Xe.TransportPacketStream,
                    n.parseStream = new Xe.TransportParseStream,
                    n.elementaryStream = new Xe.ElementaryStream,
                    n.timestampRolloverStream = new Xe.TimestampRolloverStream,
                    n.adtsStream = new Ze,
                    n.h264Stream = new mt,
                    n.captionStream = new Xe.CaptionStream,
                    n.coalesceStream = new ht(r, n.metadataStream),
                    n.headOfPipeline = n.packetStream,
                    n.packetStream.pipe(n.parseStream).pipe(n.elementaryStream).pipe(n.timestampRolloverStream),
                    n.timestampRolloverStream.pipe(n.h264Stream),
                    n.timestampRolloverStream.pipe(n.adtsStream),
                    n.timestampRolloverStream.pipe(n.metadataStream).pipe(n.coalesceStream),
                    n.h264Stream.pipe(n.captionStream).pipe(n.coalesceStream),
                    n.elementaryStream.on("data",
                    function(e) {
                        var t, i = r.keepOriginalTimestamps ? 0 : o.baseMediaDecodeTime;
                        if ("metadata" === e.type) {
                            for (t = e.tracks.length; t--;) s || "video" !== e.tracks[t].type ? a || "audio" !== e.tracks[t].type || ((a = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = i) : (s = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = i;
                            s && !n.videoSegmentStream && (n.coalesceStream.numberOfTracks++, n.videoSegmentStream = new ut(s, r), n.videoSegmentStream.on("timelineStartInfo",
                            function(e) {
                                a && !r.keepOriginalTimestamps && (a.timelineStartInfo = e, n.audioSegmentStream.setEarliestDts(e.dts - o.baseMediaDecodeTime))
                            }), n.videoSegmentStream.on("processedGopsInfo", o.trigger.bind(o, "gopInfo")), n.videoSegmentStream.on("segmentTimingInfo", o.trigger.bind(o, "videoSegmentTimingInfo")), n.videoSegmentStream.on("baseMediaDecodeTime",
                            function(e) {
                                a && n.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                            }), n.videoSegmentStream.on("timingInfo", o.trigger.bind(o, "videoTimingInfo")), n.h264Stream.pipe(n.videoSegmentStream).pipe(n.coalesceStream)),
                            a && !n.audioSegmentStream && (n.coalesceStream.numberOfTracks++, n.audioSegmentStream = new lt(a, r), n.audioSegmentStream.on("timingInfo", o.trigger.bind(o, "audioTimingInfo")), n.adtsStream.pipe(n.audioSegmentStream).pipe(n.coalesceStream)),
                            o.trigger("trackinfo", {
                                hasAudio: !!a,
                                hasVideo: !!s
                            })
                        }
                    }),
                    n.coalesceStream.on("data", this.trigger.bind(this, "data")),
                    n.coalesceStream.on("id3Frame",
                    function(e) {
                        e.dispatchType = n.metadataStream.dispatchType,
                        o.trigger("id3Frame", e)
                    }),
                    n.coalesceStream.on("caption", this.trigger.bind(this, "caption")),
                    n.coalesceStream.on("done", this.trigger.bind(this, "done"))
                },
                this.setBaseMediaDecodeTime = function(e) {
                    var t = this.transmuxPipeline_;
                    this.baseMediaDecodeTime = e,
                    a && (a.timelineStartInfo.dts = void 0, a.timelineStartInfo.pts = void 0, ve(a), t.audioTimestampRolloverStream && t.audioTimestampRolloverStream.discontinuity()),
                    s && (t.videoSegmentStream && (t.videoSegmentStream.gopCache_ = []), s.timelineStartInfo.dts = void 0, s.timelineStartInfo.pts = void 0, ve(s), t.captionStream.reset()),
                    t.timestampRolloverStream && t.timestampRolloverStream.discontinuity()
                },
                this.setAudioAppendStart = function(e) {
                    a && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
                },
                this.setRemux = function(e) {
                    var t = this.transmuxPipeline_;
                    r.remux = e,
                    t && t.coalesceStream && t.coalesceStream.setRemux(e)
                },
                this.alignGopsWith = function(e) {
                    s && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
                },
                this.push = function(e) {
                    if (i) {
                        var t = gt(e);
                        t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(),
                        i = !1
                    }
                    this.transmuxPipeline_.headOfPipeline.push(e)
                },
                this.flush = function() {
                    i = !0,
                    this.transmuxPipeline_.headOfPipeline.flush()
                },
                this.endTimeline = function() {
                    this.transmuxPipeline_.headOfPipeline.endTimeline()
                },
                this.reset = function() {
                    this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset()
                },
                this.resetCaptions = function() {
                    this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
                }
            }).prototype = new H;
            var yt = {
                Transmuxer: ct,
                VideoSegmentStream: ut,
                AudioSegmentStream: lt,
                AUDIO_PROPERTIES: pt,
                VIDEO_PROPERTIES: ft,
                generateVideoSegmentTimingInfo: ot
            };
            function _t(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            var bt = (function(e, t, i) {
                return t && _t(e.prototype, t),
                i && _t(e, i),
                e
            } (Tt, [{
                key: "init",
                value: function() {
                    this.transmuxer && this.transmuxer.dispose(),
                    this.transmuxer = new yt.Transmuxer(this.options),
                    function(n, e) {
                        e.on("data",
                        function(e) {
                            var t = e.initSegment;
                            e.initSegment = {
                                data: t.buffer,
                                byteOffset: t.byteOffset,
                                byteLength: t.byteLength
                            };
                            var i = e.data;
                            e.data = i.buffer,
                            n.postMessage({
                                action: "data",
                                segment: e,
                                byteOffset: i.byteOffset,
                                byteLength: i.byteLength
                            },
                            [e.data])
                        }),
                        e.captionStream && e.captionStream.on("data",
                        function(e) {
                            n.postMessage({
                                action: "caption",
                                data: e
                            })
                        }),
                        e.on("done",
                        function(e) {
                            n.postMessage({
                                action: "done"
                            })
                        }),
                        e.on("gopInfo",
                        function(e) {
                            n.postMessage({
                                action: "gopInfo",
                                gopInfo: e
                            })
                        }),
                        e.on("videoSegmentTimingInfo",
                        function(e) {
                            n.postMessage({
                                action: "videoSegmentTimingInfo",
                                videoSegmentTimingInfo: e
                            })
                        })
                    } (this.self, this.transmuxer)
                }
            },
            {
                key: "push",
                value: function(e) {
                    var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
                    this.transmuxer.push(t)
                }
            },
            {
                key: "reset",
                value: function() {
                    this.init()
                }
            },
            {
                key: "setTimestampOffset",
                value: function(e) {
                    var t = e.timestampOffset || 0;
                    this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * t))
                }
            },
            {
                key: "setAudioAppendStart",
                value: function(e) {
                    this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * e.appendStart))
                }
            },
            {
                key: "flush",
                value: function(e) {
                    this.transmuxer.flush()
                }
            },
            {
                key: "resetCaptions",
                value: function() {
                    this.transmuxer.resetCaptions()
                }
            },
            {
                key: "alignGopsWith",
                value: function(e) {
                    this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
                }
            }]), Tt);
            function Tt(e, t) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, Tt),
                this.options = t || {},
                this.self = e,
                this.init()
            }
            new
            function(t) {
                t.onmessage = function(e) {
                    "init" === e.data.action && e.data.options ? this.messageHandlers = new bt(t, e.data.options) : (this.messageHandlers || (this.messageHandlers = new bt(t)), e.data && e.data.action && "init" !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data))
                }
            } (St)
        } ()
    }),
    Sc = {
        videoCodec: "avc1",
        videoObjectTypeIndicator: ".4d400d",
        audioProfile: "2"
    },
    kc = (ol(Cc, cs.EventTarget), sl(Cc, [{
        key: "data_",
        value: function(e) {
            var t = e.data.segment;
            t.data = new Uint8Array(t.data, e.data.byteOffset, e.data.byteLength),
            t.initSegment = new Uint8Array(t.initSegment.data, t.initSegment.byteOffset, t.initSegment.byteLength),
            function(e, t, i) {
                var n = t.player_;
                if (i.captions && i.captions.length) for (var r in e.inbandTextTracks_ || (e.inbandTextTracks_ = {}), i.captionStreams) if (!e.inbandTextTracks_[r]) {
                    n.tech_.trigger({
                        type: "usage",
                        name: "hls-608"
                    });
                    var s = n.textTracks().getTrackById(r);
                    e.inbandTextTracks_[r] = s || n.addRemoteTextTrack({
                        kind: "captions",
                        id: r,
                        label: r
                    },
                    !1).track
                }
                i.metadata && i.metadata.length && !e.metadataTrack_ && (e.metadataTrack_ = n.addRemoteTextTrack({
                    kind: "metadata",
                    label: "Timed Metadata"
                },
                !1).track, e.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
            } (this, this.mediaSource_, t),
            this.pendingBuffers_.push(t)
        }
    },
    {
        key: "done_",
        value: function(e) {
            "closed" !== this.mediaSource_.readyState ? this.processPendingSegments_() : this.pendingBuffers_.length = 0
        }
    },
    {
        key: "videoSegmentTimingInfo_",
        value: function(e) {
            var t = {
                start: {
                    decode: e.start.dts / 9e4,
                    presentation: e.start.pts / 9e4
                },
                end: {
                    decode: e.end.dts / 9e4,
                    presentation: e.end.pts / 9e4
                },
                baseMediaDecodeTime: e.baseMediaDecodeTime / 9e4
            };
            e.prependedContentDuration && (t.prependedContentDuration = e.prependedContentDuration / 9e4),
            this.trigger({
                type: "videoSegmentTimingInfo",
                videoSegmentTimingInfo: t
            })
        }
    },
    {
        key: "createRealSourceBuffers_",
        value: function() {
            var n = this,
            r = ["audio", "video"];
            r.forEach(function(t) {
                if (n[t + "Codec_"] && !n[t + "Buffer_"]) {
                    var i = null;
                    if (n.mediaSource_[t + "Buffer_"])(i = n.mediaSource_[t + "Buffer_"]).updating = !1;
                    else {
                        var e = t + '/mp4;codecs="' + n[t + "Codec_"] + '"';
                        i = function(e, t) {
                            var i = e.addSourceBuffer(t),
                            n = Object.create(null);
                            function r(t) {
                                "function" == typeof i[t] ? n[t] = function() {
                                    return i[t].apply(i, arguments)
                                }: "undefined" == typeof n[t] && Object.defineProperty(n, t, {
                                    get: function() {
                                        return i[t]
                                    },
                                    set: function(e) {
                                        return i[t] = e
                                    }
                                })
                            }
                            for (var s in n.updating = !1,
                            n.realBuffer_ = i) r(s);
                            return n
                        } (n.mediaSource_.nativeMediaSource_, e),
                        n.mediaSource_[t + "Buffer_"] = i
                    }
                    n[t + "Buffer_"] = i,
                    ["update", "updatestart", "updateend"].forEach(function(e) {
                        i.addEventListener(e,
                        function() {
                            if ("audio" !== t || !n.audioDisabled_) return "updateend" === e && (n[t + "Buffer_"].updating = !1),
                            r.every(function(e) {
                                return ! ("audio" !== e || !n.audioDisabled_) || t === e || !n[e + "Buffer_"] || !n[e + "Buffer_"].updating
                            }) ? n.trigger(e) : void 0
                        })
                    })
                }
            })
        }
    },
    {
        key: "appendBuffer",
        value: function(e) {
            if (this.bufferUpdating_ = !0, this.audioBuffer_ && this.audioBuffer_.buffered.length) {
                var t = this.audioBuffer_.buffered;
                this.transmuxer_.postMessage({
                    action: "setAudioAppendStart",
                    appendStart: t.end(t.length - 1)
                })
            }
            this.videoBuffer_ && this.transmuxer_.postMessage({
                action: "alignGopsWith",
                gopsToAlignWith: function(e, t, i) {
                    if ("undefined" == typeof t || null === t || !e.length) return [];
                    var n = Math.ceil(9e4 * (t - i + 3)),
                    r = void 0;
                    for (r = 0; r < e.length && !(e[r].pts > n); r++);
                    return e.slice(r)
                } (this.gopBuffer_, this.mediaSource_.player_ ? this.mediaSource_.player_.currentTime() : null, this.timeMapping_)
            }),
            this.transmuxer_.postMessage({
                action: "push",
                data: e.buffer,
                byteOffset: e.byteOffset,
                byteLength: e.byteLength
            },
            [e.buffer]),
            this.transmuxer_.postMessage({
                action: "flush"
            })
        }
    },
    {
        key: "appendGopInfo_",
        value: function(e) {
            this.gopBuffer_ = function(e, t, i) {
                if (!t.length) return e;
                if (i) return t.slice();
                for (var n = t[0].pts, r = 0; r < e.length && !(e[r].pts >= n); r++);
                return e.slice(0, r).concat(t)
            } (this.gopBuffer_, e.data.gopInfo, this.safeAppend_)
        }
    },
    {
        key: "remove",
        value: function(e, t) {
            if (this.videoBuffer_ && (this.videoBuffer_.updating = !0, this.videoBuffer_.remove(e, t), this.gopBuffer_ = function(e, t, i, n) {
                for (var r = Math.ceil(9e4 * (t - n)), s = Math.ceil(9e4 * (i - n)), a = e.slice(), o = e.length; o--&&!(e[o].pts <= s););
                if ( - 1 === o) return a;
                for (var u = o + 1; u--&&!(e[u].pts <= r););
                return u = Math.max(u, 0),
                a.splice(u, o - u + 1),
                a
            } (this.gopBuffer_, e, t, this.timeMapping_)), !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0, this.audioBuffer_.remove(e, t)), Xl(e, t, this.metadataTrack_), this.inbandTextTracks_) for (var i in this.inbandTextTracks_) Xl(e, t, this.inbandTextTracks_[i])
        }
    },
    {
        key: "processPendingSegments_",
        value: function() {
            var e = {
                video: {
                    segments: [],
                    bytes: 0
                },
                audio: {
                    segments: [],
                    bytes: 0
                },
                captions: [],
                metadata: []
            };
            if (!this.pendingBuffers_.length) return this.trigger("updateend"),
            void(this.bufferUpdating_ = !1);
            e = this.pendingBuffers_.reduce(function(e, t) {
                var i = t.type,
                n = t.data,
                r = t.initSegment;
                return e[i].segments.push(n),
                e[i].bytes += n.byteLength,
                e[i].initSegment = r,
                t.captions && (e.captions = e.captions.concat(t.captions)),
                t.info && (e[i].info = t.info),
                t.metadata && (e.metadata = e.metadata.concat(t.metadata)),
                e
            },
            e),
            this.videoBuffer_ || this.audioBuffer_ || (0 === e.video.bytes && (this.videoCodec_ = null), 0 === e.audio.bytes && (this.audioCodec_ = null), this.createRealSourceBuffers_()),
            e.audio.info && this.mediaSource_.trigger({
                type: "audioinfo",
                info: e.audio.info
            }),
            e.video.info && this.mediaSource_.trigger({
                type: "videoinfo",
                info: e.video.info
            }),
            this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (e.audio.segments.unshift(e.audio.initSegment), e.audio.bytes += e.audio.initSegment.byteLength), this.appendAudioInitSegment_ = !1);
            var t = !1;
            this.videoBuffer_ && e.video.bytes ? (e.video.segments.unshift(e.video.initSegment), e.video.bytes += e.video.initSegment.byteLength, this.concatAndAppendSegments_(e.video, this.videoBuffer_)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (t = !0),
            Yl(this, e.captions, e.metadata),
            !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(e.audio, this.audioBuffer_),
            this.pendingBuffers_.length = 0,
            t && this.trigger("updateend"),
            this.bufferUpdating_ = !1
        }
    },
    {
        key: "concatAndAppendSegments_",
        value: function(e, t) {
            var i = 0,
            n = void 0;
            if (e.bytes) {
                n = new Uint8Array(e.bytes),
                e.segments.forEach(function(e) {
                    n.set(e, i),
                    i += e.byteLength
                });
                try {
                    t.updating = !0,
                    t.appendBuffer(n)
                } catch(e) {
                    this.mediaSource_.player_ && this.mediaSource_.player_.error({
                        code: -3,
                        type: "APPEND_BUFFER_ERR",
                        message: e.message,
                        originalError: e
                    })
                }
            }
        }
    },
    {
        key: "abort",
        value: function() {
            this.videoBuffer_ && this.videoBuffer_.abort(),
            !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(),
            this.transmuxer_ && this.transmuxer_.postMessage({
                action: "reset"
            }),
            this.pendingBuffers_.length = 0,
            this.bufferUpdating_ = !1
        }
    },
    {
        key: "dispose",
        value: function() {
            this.transmuxer_ && this.transmuxer_.terminate(),
            this.trigger("dispose"),
            this.off()
        }
    }]), Cc);
    function Cc(e, t) {
        el(this, Cc);
        var i = ul(this, (Cc.__proto__ || Object.getPrototypeOf(Cc)).call(this, cs.EventTarget));
        i.timestampOffset_ = 0,
        i.pendingBuffers_ = [],
        i.bufferUpdating_ = !1,
        i.mediaSource_ = e,
        i.codecs_ = t,
        i.audioCodec_ = null,
        i.videoCodec_ = null,
        i.audioDisabled_ = !1,
        i.appendAudioInitSegment_ = !0,
        i.gopBuffer_ = [],
        i.timeMapping_ = 0,
        i.safeAppend_ = 11 <= cs.browser.IE_VERSION;
        var n = {
            remux: !1,
            alignGopsAtEnd: i.safeAppend_
        };
        return i.codecs_.forEach(function(e) {
            _c(e) ? i.audioCodec_ = e: bc(e) && (i.videoCodec_ = e)
        }),
        i.transmuxer_ = new Tc,
        i.transmuxer_.postMessage({
            action: "init",
            options: n
        }),
        i.transmuxer_.onmessage = function(e) {
            return "data" === e.data.action ? i.data_(e) : "done" === e.data.action ? i.done_(e) : "gopInfo" === e.data.action ? i.appendGopInfo_(e) : "videoSegmentTimingInfo" === e.data.action ? i.videoSegmentTimingInfo_(e.data.videoSegmentTimingInfo) : void 0
        },
        Object.defineProperty(i, "timestampOffset", {
            get: function() {
                return this.timestampOffset_
            },
            set: function(e) {
                "number" == typeof e && 0 <= e && (this.timestampOffset_ = e, this.appendAudioInitSegment_ = !0, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({
                    action: "setTimestampOffset",
                    timestampOffset: e
                }))
            }
        }),
        Object.defineProperty(i, "appendWindowStart", {
            get: function() {
                return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
            },
            set: function(e) {
                this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = e),
                this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = e)
            }
        }),
        Object.defineProperty(i, "updating", {
            get: function() {
                return !! (this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
            }
        }),
        Object.defineProperty(i, "buffered", {
            get: function() {
                return function(e, t, i) {
                    var n = null,
                    r = null,
                    s = 0,
                    a = [],
                    o = [];
                    if (!e && !t) return cs.createTimeRange();
                    if (!e) return t.buffered;
                    if (!t) return e.buffered;
                    if (i) return e.buffered;
                    if (0 === e.buffered.length && 0 === t.buffered.length) return cs.createTimeRange();
                    for (var u = e.buffered,
                    l = t.buffered,
                    c = u.length; c--;) a.push({
                        time: u.start(c),
                        type: "start"
                    }),
                    a.push({
                        time: u.end(c),
                        type: "end"
                    });
                    for (c = l.length; c--;) a.push({
                        time: l.start(c),
                        type: "start"
                    }),
                    a.push({
                        time: l.end(c),
                        type: "end"
                    });
                    for (a.sort(function(e, t) {
                        return e.time - t.time
                    }), c = 0; c < a.length; c++)"start" === a[c].type ? 2 === ++s && (n = a[c].time) : "end" === a[c].type && 1 === --s && (r = a[c].time),
                    null !== n && null !== r && (o.push([n, r]), r = n = null);
                    return cs.createTimeRanges(o)
                } (this.videoBuffer_, this.audioBuffer_, this.audioDisabled_)
            }
        }),
        i
    }
    var Ec = (ol(wc, cs.EventTarget), sl(wc, [{
        key: "addSeekableRange_",
        value: function(e, t) {
            var i = void 0;
            if (this.duration !== 1 / 0) throw (i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name = "InvalidStateError",
            i.code = 11,
            i; (t > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = t)
        }
    },
    {
        key: "addSourceBuffer",
        value: function(e) {
            var t = void 0,
            i = yc(e);
            if (/^(video|audio)\/mp2t$/i.test(i.type)) {
                var n = [];
                i.parameters && i.parameters.codecs && (n = i.parameters.codecs.split(","), n = (n = fc(n)).filter(function(e) {
                    return _c(e) || bc(e)
                })),
                0 === n.length && (n = ["avc1.4d400d", "mp4a.40.2"]),
                t = new kc(this, n),
                0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(), t.createRealSourceBuffers_(), this.sourceBuffers[0].audioDisabled_ = !0)
            } else t = this.nativeMediaSource_.addSourceBuffer(e);
            return this.sourceBuffers.push(t),
            t
        }
    },
    {
        key: "dispose",
        value: function() {
            this.trigger("dispose"),
            this.off(),
            this.sourceBuffers.forEach(function(e) {
                e.dispose && e.dispose()
            }),
            this.sourceBuffers.length = 0
        }
    }]), wc);
    function wc() {
        el(this, wc);
        var s = ul(this, (wc.__proto__ || Object.getPrototypeOf(wc)).call(this)),
        e = void 0;
        for (e in s.nativeMediaSource_ = new y.MediaSource, s.nativeMediaSource_) e in wc.prototype || "function" != typeof s.nativeMediaSource_[e] || (s[e] = s.nativeMediaSource_[e].bind(s.nativeMediaSource_));
        return s.duration_ = NaN,
        Object.defineProperty(s, "duration", {
            get: function() {
                return this.duration_ === 1 / 0 ? this.duration_: this.nativeMediaSource_.duration
            },
            set: function(e) { (this.duration_ = e) === 1 / 0 || (this.nativeMediaSource_.duration = e)
            }
        }),
        Object.defineProperty(s, "seekable", {
            get: function() {
                return this.duration_ === 1 / 0 ? cs.createTimeRanges([[0, this.nativeMediaSource_.duration]]) : this.nativeMediaSource_.seekable
            }
        }),
        Object.defineProperty(s, "readyState", {
            get: function() {
                return this.nativeMediaSource_.readyState
            }
        }),
        Object.defineProperty(s, "activeSourceBuffers", {
            get: function() {
                return this.activeSourceBuffers_
            }
        }),
        s.sourceBuffers = [],
        s.activeSourceBuffers_ = [],
        s.updateActiveSourceBuffers_ = function() {
            if (s.activeSourceBuffers_.length = 0, 1 === s.sourceBuffers.length) {
                var e = s.sourceBuffers[0];
                return e.appendAudioInitSegment_ = !0,
                e.audioDisabled_ = !e.audioCodec_,
                void s.activeSourceBuffers_.push(e)
            }
            for (var i = !1,
            n = !0,
            t = 0; t < s.player_.audioTracks().length; t++) {
                var r = s.player_.audioTracks()[t];
                if (r.enabled && "main" !== r.kind) {
                    n = !(i = !0);
                    break
                }
            }
            s.sourceBuffers.forEach(function(e, t) {
                if (e.appendAudioInitSegment_ = !0, e.videoCodec_ && e.audioCodec_) e.audioDisabled_ = i;
                else if (e.videoCodec_ && !e.audioCodec_) e.audioDisabled_ = !0,
                n = !1;
                else if (!e.videoCodec_ && e.audioCodec_ && (e.audioDisabled_ = t ? n: !n, e.audioDisabled_)) return;
                s.activeSourceBuffers_.push(e)
            })
        },
        s.onPlayerMediachange_ = function() {
            s.sourceBuffers.forEach(function(e) {
                e.appendAudioInitSegment_ = !0
            })
        },
        s.onHlsReset_ = function() {
            s.sourceBuffers.forEach(function(e) {
                e.transmuxer_ && e.transmuxer_.postMessage({
                    action: "resetCaptions"
                })
            })
        },
        s.onHlsSegmentTimeMapping_ = function(t) {
            s.sourceBuffers.forEach(function(e) {
                return e.timeMapping_ = t.mapping
            })
        },
        ["sourceopen", "sourceclose", "sourceended"].forEach(function(e) {
            this.nativeMediaSource_.addEventListener(e, this.trigger.bind(this))
        },
        s),
        s.on("sourceopen",
        function(e) {
            var t = h.querySelector('[src="' + s.url_ + '"]');
            t && (s.player_ = cs(t.parentNode), s.player_ && (s.player_.tech_.on("hls-reset", s.onHlsReset_), s.player_.tech_.on("hls-segment-time-mapping", s.onHlsSegmentTimeMapping_), s.player_.audioTracks && s.player_.audioTracks() && (s.player_.audioTracks().on("change", s.updateActiveSourceBuffers_), s.player_.audioTracks().on("addtrack", s.updateActiveSourceBuffers_), s.player_.audioTracks().on("removetrack", s.updateActiveSourceBuffers_)), s.player_.on("mediachange", s.onPlayerMediachange_)))
        }),
        s.on("sourceended",
        function(e) {
            for (var t = Kl(s.duration), i = 0; i < s.sourceBuffers.length; i++) {
                var n = s.sourceBuffers[i],
                r = n.metadataTrack_ && n.metadataTrack_.cues;
                r && r.length && (r[r.length - 1].endTime = t)
            }
        }),
        s.on("sourceclose",
        function(e) {
            this.sourceBuffers.forEach(function(e) {
                e.transmuxer_ && e.transmuxer_.terminate()
            }),
            this.sourceBuffers.length = 0,
            this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)), this.player_.el_ && this.player_.off("mediachange", this.onPlayerMediachange_), this.player_.tech_ && this.player_.tech_.el_ && (this.player_.tech_.off("hls-reset", this.onHlsReset_), this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
        }),
        s
    }
    var xc = 0;
    cs.mediaSources = {};
    function Ac(e, t) {
        var i = cs.mediaSources[e];
        if (!i) throw new Error("Media Source not found (Video.js)");
        i.trigger({
            type: "sourceopen",
            swfId: t
        })
    }
    function Ic() {
        return !! y.MediaSource && !!y.MediaSource.isTypeSupported && y.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
    }
    function Pc() {
        if (this.MediaSource = {
            open: Ac,
            supportsNativeMediaSources: Ic
        },
        Ic()) return new Ec;
        throw new Error("Cannot use create a virtual MediaSource for this video")
    }
    Pc.open = Ac,
    Pc.supportsNativeMediaSources = Ic;
    var Lc = {
        createObjectURL: function(e) {
            var t = void 0;
            return e instanceof Ec ? (t = y.URL.createObjectURL(e.nativeMediaSource_), e.url_ = t) : e instanceof Ec ? (t = "blob:vjs-media-source/" + xc, xc++, cs.mediaSources[t] = e, t) : (t = y.URL.createObjectURL(e), e.url_ = t)
        }
    };
    cs.MediaSource = Pc,
    cs.URL = Lc;
    function Oc(e, t) {
        for (var a = void 0,
        o = Uc(e, {
            duration: t.duration,
            minimumUpdatePeriod: t.minimumUpdatePeriod
        }), i = 0; i < t.playlists.length; i++) {
            var n = cl(o, t.playlists[i]);
            n ? o = n: a = !0
        }
        return ll(t,
        function(e, t, i, n) {
            if (e.playlists && e.playlists.length) {
                var r = e.playlists[0].id,
                s = cl(o, e.playlists[0]);
                s && ((o = s).mediaGroups[t][i][n].playlists[0] = o.playlists[r], a = !1)
            }
        }),
        a ? null: o
    }
    function Dc(e) {
        var t = e.byterange.offset + e.byterange.length - 1;
        return e.uri + "-" + e.byterange.offset + "-" + t
    }
    function Nc(e, t) {
        var i, n, r = {};
        for (var s in e) {
            var a = e[s].sidx;
            if (a) {
                var o = Dc(a);
                if (!t[o]) break;
                var u = t[o].sidxInfo;
                i = u,
                n = a,
                (Boolean(!i.map && !n.map) || Boolean(i.map && n.map && i.map.byterange.offset === n.map.byterange.offset && i.map.byterange.length === n.map.byterange.length)) && i.uri === n.uri && i.byterange.offset === n.byterange.offset && i.byterange.length === n.byterange.length && (r[o] = t[o])
            }
        }
        return r
    }
    function Rc(e, t, i, n, r) {
        var s = {
            uri: Zu(n.handleManifestRedirects, e.resolvedUri),
            byterange: e.byterange,
            playlist: t
        };
        return i(cs.mergeOptions(s, {
            responseType: "arraybuffer",
            headers: Dl(s)
        }), r)
    }
    var Uc = cs.mergeOptions,
    Mc = (ol(Bc, cs.EventTarget), sl(Bc, [{
        key: "setupChildLoader",
        value: function(e, t) {
            this.masterPlaylistLoader_ = e,
            this.childPlaylist_ = t
        }
    },
    {
        key: "dispose",
        value: function() {
            this.trigger("dispose"),
            this.stopRequest(),
            this.loadedPlaylists_ = {},
            y.clearTimeout(this.minimumUpdatePeriodTimeout_),
            y.clearTimeout(this.mediaRequest_),
            y.clearTimeout(this.mediaUpdateTimeout),
            this.off()
        }
    },
    {
        key: "hasPendingRequest",
        value: function() {
            return this.request || this.mediaRequest_
        }
    },
    {
        key: "stopRequest",
        value: function() {
            if (this.request) {
                var e = this.request;
                this.request = null,
                e.onreadystatechange = null,
                e.abort()
            }
        }
    },
    {
        key: "sidxRequestFinished_",
        value: function(r, s, a, o) {
            var u = this;
            return function(e, t) {
                if (u.request) {
                    if (u.request = null, e) return u.error = {
                        status: t.status,
                        message: "DASH playlist request error at URL: " + r.uri,
                        response: t.response,
                        code: 2
                    },
                    a && (u.state = a),
                    u.trigger("error"),
                    o(s, null);
                    var i = new Uint8Array(t.response),
                    n = eu.parseSidx(i.subarray(8));
                    return o(s, n)
                }
            }
        }
    },
    {
        key: "media",
        value: function(i) {
            var n = this;
            if (!i) return this.media_;
            if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
            var r = this.state;
            if ("string" == typeof i) {
                if (!this.master.playlists[i]) throw new Error("Unknown playlist URI: " + i);
                i = this.master.playlists[i]
            }
            var e = !this.media_ || i.id !== this.media_.id;
            if (e && this.loadedPlaylists_[i.id] && this.loadedPlaylists_[i.id].endList) return this.state = "HAVE_METADATA",
            this.media_ = i,
            void(e && (this.trigger("mediachanging"), this.trigger("mediachange")));
            if (e) if (this.media_ && this.trigger("mediachanging"), i.sidx) {
                var t = void 0,
                s = void 0;
                s = this.masterPlaylistLoader_ ? (t = this.masterPlaylistLoader_.master, this.masterPlaylistLoader_.sidxMapping_) : (t = this.master, this.sidxMapping_);
                var a = Dc(i.sidx);
                s[a] = {
                    sidxInfo: i.sidx
                },
                this.request = Rc(i.sidx, i, this.hls_.xhr, {
                    handleManifestRedirects: this.handleManifestRedirects
                },
                this.sidxRequestFinished_(i, t, r,
                function(e, t) {
                    if (!e || !t) throw new Error("failed to request sidx");
                    s[a].sidx = t,
                    n.haveMetadata({
                        startingState: r,
                        playlist: e.playlists[i.id]
                    })
                }))
            } else this.mediaRequest_ = y.setTimeout(this.haveMetadata.bind(this, {
                startingState: r,
                playlist: i
            }), 0)
        }
    },
    {
        key: "haveMetadata",
        value: function(e) {
            var t = e.startingState,
            i = e.playlist;
            this.state = "HAVE_METADATA",
            this.loadedPlaylists_[i.id] = i,
            this.mediaRequest_ = null,
            this.refreshMedia_(i.id),
            "HAVE_MASTER" === t ? this.trigger("loadedmetadata") : this.trigger("mediachange")
        }
    },
    {
        key: "pause",
        value: function() {
            this.stopRequest(),
            y.clearTimeout(this.mediaUpdateTimeout),
            y.clearTimeout(this.minimumUpdatePeriodTimeout_),
            "HAVE_NOTHING" === this.state && (this.started = !1)
        }
    },
    {
        key: "load",
        value: function(e) {
            var t = this;
            y.clearTimeout(this.mediaUpdateTimeout),
            y.clearTimeout(this.minimumUpdatePeriodTimeout_);
            var i = this.media();
            if (e) {
                var n = i ? i.targetDuration / 2 * 1e3: 5e3;
                this.mediaUpdateTimeout = y.setTimeout(function() {
                    return t.load()
                },
                n)
            } else this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
        }
    },
    {
        key: "parseMasterXml",
        value: function() {
            var a = Eo(this.masterXml_, {
                manifestUri: this.srcUrl,
                clientOffset: this.clientOffset_,
                sidxMapping: this.sidxMapping_
            });
            a.uri = this.srcUrl;
            for (var e = 0; e < a.playlists.length; e++) {
                var t = "placeholder-uri-" + e;
                a.playlists[e].uri = t
            }
            return ll(a,
            function(e, t, i, n) {
                if (e.playlists && e.playlists.length) {
                    var r = "placeholder-uri-" + t + "-" + i + "-" + n,
                    s = hl(0, r);
                    e.playlists[0].uri = r,
                    e.playlists[0].id = s,
                    a.playlists[s] = e.playlists[0],
                    a.playlists[r] = e.playlists[0]
                }
            }),
            dl(a),
            pl(a),
            a
        }
    },
    {
        key: "start",
        value: function() {
            var i = this;
            this.started = !0,
            this.masterPlaylistLoader_ ? this.mediaRequest_ = y.setTimeout(this.haveMaster_.bind(this), 0) : this.request = this.hls_.xhr({
                uri: this.srcUrl,
                withCredentials: this.withCredentials
            },
            function(e, t) {
                if (i.request) {
                    if (i.request = null, e) return i.error = {
                        status: t.status,
                        message: "DASH playlist request error at URL: " + i.srcUrl,
                        responseText: t.responseText,
                        code: 2
                    },
                    "HAVE_NOTHING" === i.state && (i.started = !1),
                    i.trigger("error");
                    i.masterXml_ = t.responseText,
                    t.responseHeaders && t.responseHeaders.date ? i.masterLoaded_ = Date.parse(t.responseHeaders.date) : i.masterLoaded_ = Date.now(),
                    i.srcUrl = Zu(i.handleManifestRedirects, i.srcUrl, t),
                    i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))
                }
            })
        }
    },
    {
        key: "syncClientServerClock_",
        value: function(n) {
            var r = this,
            s = wo(this.masterXml_);
            return null === s ? (this.clientOffset_ = this.masterLoaded_ - Date.now(), n()) : "DIRECT" === s.method ? (this.clientOffset_ = s.value - Date.now(), n()) : void(this.request = this.hls_.xhr({
                uri: Ju(this.srcUrl, s.value),
                method: s.method,
                withCredentials: this.withCredentials
            },
            function(e, t) {
                if (r.request) {
                    if (e) return r.clientOffset_ = r.masterLoaded_ - Date.now(),
                    n();
                    var i = void 0;
                    i = "HEAD" === s.method ? t.responseHeaders && t.responseHeaders.date ? Date.parse(t.responseHeaders.date) : r.masterLoaded_: Date.parse(t.responseText),
                    r.clientOffset_ = i - Date.now(),
                    n()
                }
            }))
        }
    },
    {
        key: "haveMaster_",
        value: function() {
            this.state = "HAVE_MASTER",
            this.mediaRequest_ = null,
            this.masterPlaylistLoader_ ? this.media_ || this.media(this.childPlaylist_) : (this.master = this.parseMasterXml(), this.trigger("loadedplaylist"))
        }
    },
    {
        key: "onClientServerClockSync_",
        value: function() {
            var e = this;
            this.haveMaster_(),
            this.hasPendingRequest() || this.media_ || this.media(this.master.playlists[0]),
            this.master && this.master.minimumUpdatePeriod && (this.minimumUpdatePeriodTimeout_ = y.setTimeout(function() {
                e.trigger("minimumUpdatePeriod")
            },
            this.master.minimumUpdatePeriod))
        }
    },
    {
        key: "refreshXml_",
        value: function() {
            var o = this;
            this.request = this.hls_.xhr({
                uri: this.srcUrl,
                withCredentials: this.withCredentials
            },
            function(e, t) {
                if (o.request) {
                    if (o.request = null, e) return o.error = {
                        status: t.status,
                        message: "DASH playlist request error at URL: " + o.srcUrl,
                        responseText: t.responseText,
                        code: 2
                    },
                    "HAVE_NOTHING" === o.state && (o.started = !1),
                    o.trigger("error");
                    o.masterXml_ = t.responseText,
                    o.sidxMapping_ = function(e, t, i, s) {
                        var n = Eo(e, {
                            manifestUri: t,
                            clientOffset: i
                        }),
                        a = Nc(n.playlists, s);
                        return ll(n,
                        function(e, t, i, n) {
                            if (e.playlists && e.playlists.length) {
                                var r = e.playlists;
                                a = Uc(a, Nc(r, s))
                            }
                        }),
                        a
                    } (o.masterXml_, o.srcUrl, o.clientOffset_, o.sidxMapping_);
                    var i = o.parseMasterXml(),
                    n = Oc(o.master, i),
                    r = o.media().sidx;
                    if (n) if (r) {
                        var s = Dc(r);
                        if (!o.sidxMapping_[s]) {
                            var a = o.media();
                            o.request = Rc(a.sidx, a, o.hls_.xhr, {
                                handleManifestRedirects: o.handleManifestRedirects
                            },
                            o.sidxRequestFinished_(a, i, o.state,
                            function(e, t) {
                                if (!e || !t) throw new Error("failed to request sidx on minimumUpdatePeriod");
                                o.sidxMapping_[s].sidx = t,
                                o.minimumUpdatePeriodTimeout_ = y.setTimeout(function() {
                                    o.trigger("minimumUpdatePeriod")
                                },
                                o.master.minimumUpdatePeriod),
                                o.refreshMedia_(o.media().id)
                            }))
                        }
                    } else o.master = n;
                    o.minimumUpdatePeriodTimeout_ = y.setTimeout(function() {
                        o.trigger("minimumUpdatePeriod")
                    },
                    o.master.minimumUpdatePeriod)
                }
            })
        }
    },
    {
        key: "refreshMedia_",
        value: function(e) {
            var t = this;
            if (!e) throw new Error("refreshMedia_ must take a media id");
            var i = void 0,
            n = void 0;
            n = this.masterPlaylistLoader_ ? (i = this.masterPlaylistLoader_.master, this.masterPlaylistLoader_.parseMasterXml()) : (i = this.master, this.parseMasterXml());
            var r = Oc(i, n);
            r ? (this.masterPlaylistLoader_ ? this.masterPlaylistLoader_.master = r: this.master = r, this.media_ = r.playlists[e]) : (this.media_ = n.playlists[e], this.trigger("playlistunchanged")),
            this.media().endList || (this.mediaUpdateTimeout = y.setTimeout(function() {
                t.trigger("mediaupdatetimeout")
            },
            fl(this.media(), !!r))),
            this.trigger("loadedplaylist")
        }
    }]), Bc);
    function Bc(e, t) {
        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
        n = arguments[3];
        el(this, Bc);
        var r = ul(this, (Bc.__proto__ || Object.getPrototypeOf(Bc)).call(this)),
        s = i.withCredentials,
        a = void 0 !== s && s,
        o = i.handleManifestRedirects,
        u = void 0 !== o && o;
        if (r.hls_ = t, r.withCredentials = a, r.handleManifestRedirects = u, !e) throw new Error("A non-empty playlist URL or playlist is required");
        return r.on("minimumUpdatePeriod",
        function() {
            r.refreshXml_()
        }),
        r.on("mediaupdatetimeout",
        function() {
            r.refreshMedia_(r.media().id)
        }),
        r.state = "HAVE_NOTHING",
        r.loadedPlaylists_ = {},
        "string" == typeof e ? (r.srcUrl = e, r.sidxMapping_ = {},
        ul(r)) : (r.setupChildLoader(n, e), r)
    }
    function jc(e) {
        return cs.log.debug ? cs.log.debug.bind(cs, "VHS:", e + " >") : function() {}
    }
    function Fc() {}
    var Hc = (sl(Vc, [{
        key: "createSourceBuffer_",
        value: function(e, t) {
            var i = this;
            this.sourceBuffer_ = this.mediaSource.addSourceBuffer(e),
            this.logger_("created SourceBuffer"),
            t && (t.trigger("sourcebufferadded"), this.mediaSource.sourceBuffers.length < 2) ? t.on("sourcebufferadded",
            function() {
                i.start_()
            }) : this.start_()
        }
    },
    {
        key: "start_",
        value: function() {
            var t = this;
            this.started_ = !0,
            this.onUpdateendCallback_ = function() {
                var e = t.pendingCallback_;
                t.pendingCallback_ = null,
                t.sourceBuffer_.removing = !1,
                t.logger_("buffered [" + zl(t.buffered()) + "]"),
                e && e(),
                t.runCallback_()
            },
            this.sourceBuffer_.addEventListener("updateend", this.onUpdateendCallback_),
            this.runCallback_()
        }
    },
    {
        key: "abort",
        value: function(e) {
            var t = this;
            this.processedAppend_ && this.queueCallback_(function() {
                t.sourceBuffer_.abort()
            },
            e)
        }
    },
    {
        key: "appendBuffer",
        value: function(e, t) {
            var i = this;
            this.processedAppend_ = !0,
            this.queueCallback_(function() {
                e.videoSegmentTimingInfoCallback && i.sourceBuffer_.addEventListener("videoSegmentTimingInfo", e.videoSegmentTimingInfoCallback),
                i.sourceBuffer_.appendBuffer(e.bytes)
            },
            function() {
                e.videoSegmentTimingInfoCallback && i.sourceBuffer_.removeEventListener("videoSegmentTimingInfo", e.videoSegmentTimingInfoCallback),
                t()
            })
        }
    },
    {
        key: "buffered",
        value: function() {
            return this.sourceBuffer_ ? this.sourceBuffer_.buffered: cs.createTimeRanges()
        }
    },
    {
        key: "remove",
        value: function(e, t, i) {
            var n = this,
            r = 2 < arguments.length && void 0 !== i ? i: Fc;
            this.processedAppend_ && this.queueCallback_(function() {
                n.logger_("remove [" + e + " => " + t + "]"),
                n.sourceBuffer_.removing = !0,
                n.sourceBuffer_.remove(e, t)
            },
            r)
        }
    },
    {
        key: "updating",
        value: function() {
            return ! this.sourceBuffer_ || this.sourceBuffer_.updating || !!this.pendingCallback_ && this.pendingCallback_ !== Fc
        }
    },
    {
        key: "timestampOffset",
        value: function(e) {
            var t = this;
            return "undefined" != typeof e && (this.queueCallback_(function() {
                t.sourceBuffer_.timestampOffset = e,
                t.runCallback_()
            }), this.timestampOffset_ = e),
            this.timestampOffset_
        }
    },
    {
        key: "queueCallback_",
        value: function(e, t) {
            this.callbacks_.push([e.bind(this), t]),
            this.runCallback_()
        }
    },
    {
        key: "runCallback_",
        value: function() {
            var e = void 0; ! this.updating() && this.callbacks_.length && this.started_ && (e = this.callbacks_.shift(), this.pendingCallback_ = e[1], e[0]())
        }
    },
    {
        key: "dispose",
        value: function() {
            function e() {
                t.sourceBuffer_ && "open" === t.mediaSource.readyState && t.sourceBuffer_.abort(),
                t.sourceBuffer_.removeEventListener("updateend", e)
            }
            var t = this;
            this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_),
            this.sourceBuffer_.removing ? this.sourceBuffer_.addEventListener("updateend", e) : e()
        }
    }]), Vc);
    function Vc(e, t, i, n) {
        el(this, Vc),
        this.callbacks_ = [],
        this.pendingCallback_ = null,
        this.timestampOffset_ = 0,
        this.mediaSource = e,
        this.processedAppend_ = !1,
        this.type_ = i,
        this.mimeType_ = t,
        this.logger_ = jc("SourceUpdater[" + i + "][" + t + "]"),
        "closed" === e.readyState ? e.addEventListener("sourceopen", this.createSourceBuffer_.bind(this, t, n)) : this.createSourceBuffer_(t, n)
    }
    function qc(e) {
        e.forEach(function(e) {
            e.abort()
        })
    }
    function Wc(e, t) {
        return t.timedout ? {
            status: t.status,
            message: "HLS request timed-out at URL: " + t.uri,
            code: eh,
            xhr: t
        }: t.aborted ? {
            status: t.status,
            message: "HLS request aborted at URL: " + t.uri,
            code: th,
            xhr: t
        }: e ? {
            status: t.status,
            message: "HLS request errored at URL: " + t.uri,
            code: Zc,
            xhr: t
        }: null
    }
    function zc(i, n, r) {
        var s = 0,
        a = !1;
        return function(e, t) {
            if (!a) return e ? (a = !0, qc(i), r(e, t)) : (s += 1) === i.length ? (t.endOfAllRequests = Date.now(), t.encryptedBytes ?
            function(n, r, s) {
                n.addEventListener("message",
                function e(t) {
                    if (t.data.source === r.requestId) {
                        n.removeEventListener("message", e);
                        var i = t.data.decrypted;
                        return r.bytes = new Uint8Array(i.bytes, i.byteOffset, i.byteLength),
                        s(null, r)
                    }
                });
                var e = void 0;
                e = r.key.bytes.slice ? r.key.bytes.slice() : new Uint32Array(Array.prototype.slice.call(r.key.bytes)),
                n.postMessage(Ul({
                    source: r.requestId,
                    encrypted: r.encryptedBytes,
                    key: e,
                    iv: r.key.iv
                }), [r.encryptedBytes.buffer, e.buffer])
            } (n, t, r) : r(null, t)) : void 0
        }
    }
    function Gc(t, i) {
        return function(e) {
            return t.stats = cs.mergeOptions(t.stats,
            function(e) {
                var t = e.target,
                i = {
                    bandwidth: 1 / 0,
                    bytesReceived: 0,
                    roundTripTime: Date.now() - t.requestTime || 0
                };
                return i.bytesReceived = e.loaded,
                i.bandwidth = Math.floor(i.bytesReceived / i.roundTripTime * 8 * 1e3),
                i
            } (e)),
            !t.stats.firstBytesReceivedAt && t.stats.bytesReceived && (t.stats.firstBytesReceivedAt = Date.now()),
            i(e, t)
        }
    }
    function Xc(e, t, i, n, r, s, a) {
        var o = [],
        u = zc(o, i, a);
        if (r.key && !r.key.bytes) {
            var l = e(cs.mergeOptions(t, {
                uri: r.key.resolvedUri,
                responseType: "arraybuffer"
            }),
            function(s, a) {
                return function(e, t) {
                    var i = t.response,
                    n = Wc(e, t);
                    if (n) return a(n, s);
                    if (16 !== i.byteLength) return a({
                        status: t.status,
                        message: "Invalid HLS key at URL: " + t.uri,
                        code: Zc,
                        xhr: t
                    },
                    s);
                    var r = new DataView(i);
                    return s.key.bytes = new Uint32Array([r.getUint32(0), r.getUint32(4), r.getUint32(8), r.getUint32(12)]),
                    a(null, s)
                }
            } (r, u));
            o.push(l)
        }
        if (r.map && !r.map.bytes) {
            var c = e(cs.mergeOptions(t, {
                uri: r.map.resolvedUri,
                responseType: "arraybuffer",
                headers: Dl(r.map)
            }),
            function(r, s, a) {
                return function(e, t) {
                    var i = t.response,
                    n = Wc(e, t);
                    return n ? a(n, r) : 0 === i.byteLength ? a({
                        status: t.status,
                        message: "Empty HLS segment content at URL: " + t.uri,
                        code: Zc,
                        xhr: t
                    },
                    r) : (r.map.bytes = new Uint8Array(t.response), s && !s.isInitialized() && s.init(), r.map.timescales = ru.timescale(r.map.bytes), r.map.videoTrackIds = ru.videoTrackIds(r.map.bytes), a(null, r))
                }
            } (r, n, u));
            o.push(c)
        }
        var h = e(cs.mergeOptions(t, {
            uri: r.resolvedUri,
            responseType: "arraybuffer",
            headers: Dl(r)
        }),
        function(s, a, o) {
            return function(e, t) {
                var i = t.response,
                n = Wc(e, t),
                r = void 0;
                return n ? o(n, s) : 0 === i.byteLength ? o({
                    status: t.status,
                    message: "Empty HLS segment content at URL: " + t.uri,
                    code: Zc,
                    xhr: t
                },
                s) : (s.stats = function(e) {
                    return {
                        bandwidth: e.bandwidth,
                        bytesReceived: e.bytesReceived || 0,
                        roundTripTime: e.roundTripTime || 0
                    }
                } (t), s.key ? s.encryptedBytes = new Uint8Array(t.response) : s.bytes = new Uint8Array(t.response), a && s.map && s.map.bytes && (a.isInitialized() || a.init(), (r = a.parse(s.bytes, s.map.videoTrackIds, s.map.timescales)) && r.captions && (s.captionStreams = r.captionStreams, s.fmp4Captions = r.captions)), o(null, s))
            }
        } (r, n, u));
        return h.addEventListener("progress", Gc(r, s)),
        o.push(h),
        function() {
            return qc(o)
        }
    }
    function Kc(e, t) {
        var i;
        return e && (i = y.getComputedStyle(e)) ? i[t] : ""
    }
    function Yc(e, n) {
        var r = e.slice();
        e.sort(function(e, t) {
            var i = n(e, t);
            return 0 === i ? r.indexOf(e) - r.indexOf(t) : i
        })
    }
    function $c(e, t) {
        var i = void 0,
        n = void 0;
        return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH),
        i = i || y.Number.MAX_VALUE,
        t.attributes.BANDWIDTH && (n = t.attributes.BANDWIDTH),
        i - (n = n || y.Number.MAX_VALUE)
    }
    function Qc(e) {
        return "number" == typeof e && isFinite(e)
    }
    var Jc = {
        GOAL_BUFFER_LENGTH: 30,
        MAX_GOAL_BUFFER_LENGTH: 60,
        GOAL_BUFFER_LENGTH_RATE: 1,
        INITIAL_BANDWIDTH: 4194304,
        BANDWIDTH_VARIANCE: 1.2,
        BUFFER_LOW_WATER_LINE: 0,
        MAX_BUFFER_LOW_WATER_LINE: 30,
        BUFFER_LOW_WATER_LINE_RATE: 1
    },
    Zc = 2,
    eh = -101,
    th = -102,
    ih = (ol(nh, cs.EventTarget), sl(nh, [{
        key: "resetStats_",
        value: function() {
            this.mediaBytesTransferred = 0,
            this.mediaRequests = 0,
            this.mediaRequestsAborted = 0,
            this.mediaRequestsTimedout = 0,
            this.mediaRequestsErrored = 0,
            this.mediaTransferDuration = 0,
            this.mediaSecondsLoaded = 0
        }
    },
    {
        key: "dispose",
        value: function() {
            this.trigger("dispose"),
            this.state = "DISPOSED",
            this.pause(),
            this.abort_(),
            this.sourceUpdater_ && this.sourceUpdater_.dispose(),
            this.resetStats_(),
            this.captionParser_ && this.captionParser_.reset(),
            this.checkBufferTimeout_ && y.clearTimeout(this.checkBufferTimeout_),
            this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_),
            this.off()
        }
    },
    {
        key: "abort",
        value: function() {
            "WAITING" === this.state ? (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null)
        }
    },
    {
        key: "abort_",
        value: function() {
            this.pendingSegment_ && this.pendingSegment_.abortRequests(),
            this.pendingSegment_ = null
        }
    },
    {
        key: "error",
        value: function(e) {
            return "undefined" != typeof e && (this.error_ = e),
            this.pendingSegment_ = null,
            this.error_
        }
    },
    {
        key: "endOfStream",
        value: function() {
            this.ended_ = !0,
            this.pause(),
            this.trigger("ended")
        }
    },
    {
        key: "buffered_",
        value: function() {
            return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : cs.createTimeRanges()
        }
    },
    {
        key: "initSegment",
        value: function(e, t) {
            var i = 1 < arguments.length && void 0 !== t && t;
            if (!e) return null;
            var n = Ml(e),
            r = this.initSegments_[n];
            return i && !r && e.bytes && (this.initSegments_[n] = r = {
                resolvedUri: e.resolvedUri,
                byterange: e.byterange,
                bytes: e.bytes,
                timescales: e.timescales,
                videoTrackIds: e.videoTrackIds
            }),
            r || e
        }
    },
    {
        key: "segmentKey",
        value: function(e, t) {
            var i = 1 < arguments.length && void 0 !== t && t;
            if (!e) return null;
            var n = Bl(e),
            r = this.keyCache_[n];
            this.cacheEncryptionKeys_ && i && !r && e.bytes && (this.keyCache_[n] = r = {
                resolvedUri: e.resolvedUri,
                bytes: e.bytes
            });
            var s = {
                resolvedUri: (r || e).resolvedUri
            };
            return r && (s.bytes = r.bytes),
            s
        }
    },
    {
        key: "couldBeginLoading_",
        value: function() {
            return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
        }
    },
    {
        key: "load",
        value: function() {
            if (this.monitorBuffer_(), this.playlist_) {
                if (this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_()) return this.init_(); ! this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
            }
        }
    },
    {
        key: "init_",
        value: function() {
            return this.state = "READY",
            this.sourceUpdater_ = new Hc(this.mediaSource_, this.mimeType_, this.loaderType_, this.sourceBufferEmitter_),
            this.resetEverything(),
            this.monitorBuffer_()
        }
    },
    {
        key: "playlist",
        value: function(e, t) {
            var i = 1 < arguments.length && void 0 !== t ? t: {};
            if (e) {
                var n = this.playlist_,
                r = this.pendingSegment_;
                this.playlist_ = e,
                this.xhrOptions_ = i,
                "INIT" === this.state && (e.syncInfo = {
                    mediaSequence: e.mediaSequence,
                    time: 0
                });
                var s = null;
                if (n && (n.id ? s = n.id: n.uri && (s = n.uri)), this.logger_("playlist update [" + s + " => " + (e.id || e.uri) + "]"), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                if (n && n.uri === e.uri) {
                    var a = e.mediaSequence - n.mediaSequence;
                    this.logger_("live window shift [" + a + "]"),
                    null !== this.mediaIndex && (this.mediaIndex -= a),
                    r && (r.mediaIndex -= a, 0 <= r.mediaIndex && (r.segment = e.segments[r.mediaIndex])),
                    this.syncController_.saveExpiredSegmentInfo(n, e)
                } else null !== this.mediaIndex && this.resyncLoader()
            }
        }
    },
    {
        key: "pause",
        value: function() {
            this.checkBufferTimeout_ && (y.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
        }
    },
    {
        key: "paused",
        value: function() {
            return null === this.checkBufferTimeout_
        }
    },
    {
        key: "mimeType",
        value: function(e, t) {
            this.mimeType_ || (this.mimeType_ = e, this.sourceBufferEmitter_ = t, "INIT" === this.state && this.couldBeginLoading_() && this.init_())
        }
    },
    {
        key: "resetEverything",
        value: function(e) {
            this.ended_ = !1,
            this.resetLoader(),
            this.remove(0, 1 / 0, e),
            this.captionParser_ && this.captionParser_.clearAllCaptions(),
            this.trigger("reseteverything")
        }
    },
    {
        key: "resetLoader",
        value: function() {
            this.fetchAtBuffer_ = !1,
            this.resyncLoader()
        }
    },
    {
        key: "resyncLoader",
        value: function() {
            this.mediaIndex = null,
            this.syncPoint_ = null,
            this.abort()
        }
    },
    {
        key: "remove",
        value: function(e, t, i) {
            if (t === 1 / 0 && (t = this.duration_()), this.sourceUpdater_ && this.sourceUpdater_.remove(e, t, i), Xl(e, t, this.segmentMetadataTrack_), this.inbandTextTracks_) for (var n in this.inbandTextTracks_) Xl(e, t, this.inbandTextTracks_[n])
        }
    },
    {
        key: "monitorBuffer_",
        value: function() {
            this.checkBufferTimeout_ && y.clearTimeout(this.checkBufferTimeout_),
            this.checkBufferTimeout_ = y.setTimeout(this.monitorBufferTick_.bind(this), 1)
        }
    },
    {
        key: "monitorBufferTick_",
        value: function() {
            "READY" === this.state && this.fillBuffer_(),
            this.checkBufferTimeout_ && y.clearTimeout(this.checkBufferTimeout_),
            this.checkBufferTimeout_ = y.setTimeout(this.monitorBufferTick_.bind(this), 500)
        }
    },
    {
        key: "fillBuffer_",
        value: function() {
            if (!this.sourceUpdater_.updating()) {
                this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                e && (this.isEndOfStream_(e.mediaIndex) ? this.endOfStream() : e.mediaIndex === this.playlist_.segments.length - 1 && "ended" === this.mediaSource_.readyState && !this.seeking_() || (e.timeline !== this.currentTimeline_ && (this.syncController_.reset(), e.timestampOffset = e.startOfSegment, this.captionParser_ && this.captionParser_.clearAllCaptions()), this.loadSegment_(e)))
            }
        }
    },
    {
        key: "isEndOfStream_",
        value: function(e, t) {
            return function(e, t, i) {
                if (!e || !t) return ! 1;
                var n = i === e.segments.length;
                return e.endList && "open" === t.readyState && n
            } (1 < arguments.length && void 0 !== t ? t: this.playlist_, this.mediaSource_, e) && !this.sourceUpdater_.updating()
        }
    },
    {
        key: "checkBuffer_",
        value: function(e, t, i, n, r, s) {
            var a = 0,
            o = void 0;
            e.length && (a = e.end(e.length - 1));
            var u = Math.max(0, a - r);
            if (!t.segments.length) return null;
            if (u >= this.goalBufferLength_()) return null;
            if (!n && 1 <= u) return null;
            if (null === s) return i = this.getSyncSegmentCandidate_(t),
            this.generateSegmentInfo_(t, i, null, !0);
            if (null !== i) return t.segments[i],
            o = a,
            this.generateSegmentInfo_(t, i + 1, o, !1);
            if (this.fetchAtBuffer_) {
                var l = Zl.getMediaInfoForTime(t, a, s.segmentIndex, s.time);
                i = l.mediaIndex,
                o = l.startTime
            } else {
                var c = Zl.getMediaInfoForTime(t, r, s.segmentIndex, s.time);
                i = c.mediaIndex,
                o = c.startTime
            }
            return this.generateSegmentInfo_(t, i, o, !1)
        }
    },
    {
        key: "getSyncSegmentCandidate_",
        value: function(e) {
            var t = this;
            if ( - 1 === this.currentTimeline_) return 0;
            var i = e.segments.map(function(e, t) {
                return {
                    timeline: e.timeline,
                    segmentIndex: t
                }
            }).filter(function(e) {
                return e.timeline === t.currentTimeline_
            });
            return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex: Math.max(e.segments.length - 1, 0)
        }
    },
    {
        key: "generateSegmentInfo_",
        value: function(e, t, i, n) {
            if (t < 0 || t >= e.segments.length) return null;
            var r = e.segments[t];
            return {
                requestId: "segment-loader-" + Math.random(),
                uri: r.resolvedUri,
                mediaIndex: t,
                isSyncRequest: n,
                startOfSegment: i,
                playlist: e,
                bytes: null,
                encryptedBytes: null,
                timestampOffset: null,
                timeline: r.timeline,
                duration: r.duration,
                segment: r
            }
        }
    },
    {
        key: "abortRequestEarly_",
        value: function(e) {
            if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return ! 1;
            if (Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3) return ! 1;
            var t = this.currentTime_(),
            i = e.bandwidth,
            n = this.pendingSegment_.duration,
            r = Zl.estimateSegmentRequestTime(n, i, this.playlist_, e.bytesReceived),
            s = function(e, t, i) {
                var n = 2 < arguments.length && void 0 !== i ? i: 1;
                return ((e.length ? e.end(e.length - 1) : 0) - t) / n
            } (this.buffered_(), t, this.hls_.tech_.playbackRate()) - 1;
            if (r <= s) return ! 1;
            var a = function(e) {
                var t = e.master,
                i = e.currentTime,
                n = e.bandwidth,
                r = e.duration,
                s = e.segmentDuration,
                a = e.timeUntilRebuffer,
                o = e.currentTimeline,
                u = e.syncController,
                l = t.playlists.filter(function(e) {
                    return ! Zl.isIncompatible(e)
                }),
                c = l.filter(Zl.isEnabled);
                c.length || (c = l.filter(function(e) {
                    return ! Zl.isDisabled(e)
                }));
                var h = c.filter(Zl.hasAttribute.bind(null, "BANDWIDTH")).map(function(e) {
                    var t = u.getSyncPoint(e, r, o, i) ? 1 : 2;
                    return {
                        playlist: e,
                        rebufferingImpact: Zl.estimateSegmentRequestTime(s, n, e) * t - a
                    }
                }),
                d = h.filter(function(e) {
                    return e.rebufferingImpact <= 0
                });
                return Yc(d,
                function(e, t) {
                    return $c(t.playlist, e.playlist)
                }),
                d.length ? d[0] : (Yc(h,
                function(e, t) {
                    return e.rebufferingImpact - t.rebufferingImpact
                }), h[0] || null)
            } ({
                master: this.hls_.playlists.master,
                currentTime: t,
                bandwidth: i,
                duration: this.duration_(),
                segmentDuration: n,
                timeUntilRebuffer: s,
                currentTimeline: this.currentTimeline_,
                syncController: this.syncController_
            });
            if (a) {
                var o = r - s - a.rebufferingImpact,
                u = .5;
                return s <= 1 / 30 && (u = 1),
                !(!a.playlist || a.playlist.uri === this.playlist_.uri || o < u) && (this.bandwidth = a.playlist.attributes.BANDWIDTH * Jc.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger("earlyabort"), !0)
            }
        }
    },
    {
        key: "handleProgress_",
        value: function(e, t) {
            this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(t.stats) && this.trigger("progress")
        }
    },
    {
        key: "loadSegment_",
        value: function(e) {
            this.state = "WAITING",
            this.pendingSegment_ = e,
            this.trimBackBuffer_(e),
            e.abortRequests = Xc(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.captionParser_, this.createSimplifiedSegmentObj_(e), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
        }
    },
    {
        key: "trimBackBuffer_",
        value: function(e) {
            var t = function(e, t, i) {
                var n = t - 30;
                e.length && (n = Math.max(n, e.start(0)));
                var r = t - i;
                return Math.min(r, n)
            } (this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
            0 < t && this.remove(0, t)
        }
    },
    {
        key: "createSimplifiedSegmentObj_",
        value: function(e) {
            var t = e.segment,
            i = {
                resolvedUri: t.resolvedUri,
                byterange: t.byterange,
                requestId: e.requestId
            };
            if (t.key) {
                var n = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
                i.key = this.segmentKey(t.key),
                i.key.iv = n
            }
            return t.map && (i.map = this.initSegment(t.map)),
            i
        }
    },
    {
        key: "segmentRequestFinished_",
        value: function(e, t) {
            if (this.mediaRequests += 1, t.stats && (this.mediaBytesTransferred += t.stats.bytesReceived, this.mediaTransferDuration += t.stats.roundTripTime), this.pendingSegment_) {
                if (t.requestId === this.pendingSegment_.requestId) {
                    if (e) return this.pendingSegment_ = null,
                    this.state = "READY",
                    e.code === th ? void(this.mediaRequestsAborted += 1) : (this.pause(), e.code === eh ? (this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1, this.error(e), void this.trigger("error")));
                    this.bandwidth = t.stats.bandwidth,
                    this.roundTrip = t.stats.roundTripTime,
                    t.map && (t.map = this.initSegment(t.map, !0)),
                    t.key && this.segmentKey(t.key, !0),
                    this.processSegmentResponse_(t)
                }
            } else this.mediaRequestsAborted += 1
        }
    },
    {
        key: "processSegmentResponse_",
        value: function(e) {
            var t = this.pendingSegment_;
            t.bytes = e.bytes,
            e.map && (t.segment.map.bytes = e.map.bytes),
            t.endOfAllRequests = e.endOfAllRequests,
            e.fmp4Captions && (function(e, t, i) {
                for (var n in i) if (!e[n]) {
                    t.trigger({
                        type: "usage",
                        name: "hls-608"
                    });
                    var r = t.textTracks().getTrackById(n);
                    e[n] = r || t.addRemoteTextTrack({
                        kind: "captions",
                        id: n,
                        label: n
                    },
                    !1).track
                }
            } (this.inbandTextTracks_, this.hls_.tech_, e.captionStreams),
            function(e) {
                var r = e.inbandTextTracks,
                t = e.captionArray,
                s = e.timestampOffset;
                if (t) {
                    var a = window.WebKitDataCue || window.VTTCue;
                    t.forEach(function(e) {
                        var t = e.stream,
                        i = e.startTime,
                        n = e.endTime;
                        r[t] && (i += s, n += s, r[t].addCue(new a(i, n, e.text)))
                    })
                }
            } ({
                inbandTextTracks: this.inbandTextTracks_,
                captionArray: e.fmp4Captions,
                timestampOffset: 0
            }), this.captionParser_ && this.captionParser_.clearParsedCaptions()),
            this.handleSegment_()
        }
    },
    {
        key: "handleSegment_",
        value: function() {
            var e = this;
            if (this.pendingSegment_) {
                var t = this.pendingSegment_,
                i = t.segment,
                n = this.syncController_.probeSegmentInfo(t);
                "undefined" == typeof this.startingMedia_ && n && (n.containsAudio || n.containsVideo) && (this.startingMedia_ = {
                    containsAudio: n.containsAudio,
                    containsVideo: n.containsVideo
                });
                var r = function(e, t, i) {
                    return "main" === e && t && i ? i.containsAudio || i.containsVideo ? t.containsVideo && !i.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.": !t.containsVideo && i.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.": null: "Neither audio nor video found in segment.": null
                } (this.loaderType_, this.startingMedia_, n);
                if (r) return this.error({
                    message: r,
                    blacklistDuration: 1 / 0
                }),
                void this.trigger("error");
                if (t.isSyncRequest) return this.trigger("syncinfoupdate"),
                this.pendingSegment_ = null,
                void(this.state = "READY");
                if (null !== t.timestampOffset && t.timestampOffset !== this.sourceUpdater_.timestampOffset()) {
                    if (n && n.segmentTimestampInfo) {
                        var s = n.segmentTimestampInfo[0].ptsTime,
                        a = n.segmentTimestampInfo[0].dtsTime;
                        t.timestampOffset -= s - a
                    }
                    this.sourceUpdater_.timestampOffset(t.timestampOffset),
                    this.trigger("timestampoffset")
                }
                var o = this.syncController_.mappingForTimeline(t.timeline);
                if (null !== o && this.trigger({
                    type: "segmenttimemapping",
                    mapping: o
                }), this.state = "APPENDING", i.map) {
                    var u = Ml(i.map);
                    if (!this.activeInitSegmentId_ || this.activeInitSegmentId_ !== u) {
                        var l = this.initSegment(i.map);
                        this.sourceUpdater_.appendBuffer({
                            bytes: l.bytes
                        },
                        function() {
                            e.activeInitSegmentId_ = u
                        })
                    }
                }
                t.byteLength = t.bytes.byteLength,
                "number" == typeof i.start && "number" == typeof i.end ? this.mediaSecondsLoaded += i.end - i.start: this.mediaSecondsLoaded += i.duration,
                this.logger_(function(e) {
                    var t = e.segment,
                    i = t.start,
                    n = t.end,
                    r = e.playlist,
                    s = r.mediaSequence,
                    a = r.id,
                    o = r.segments,
                    u = void 0 === o ? [] : o,
                    l = e.mediaIndex,
                    c = e.timeline;
                    return ["appending [" + l + "] of [" + s + ", " + (s + u.length) + "] from playlist [" + a + "]", "[" + i + " => " + n + "] in timeline [" + c + "]"].join(" ")
                } (t)),
                this.sourceUpdater_.appendBuffer({
                    bytes: t.bytes,
                    videoSegmentTimingInfoCallback: this.handleVideoSegmentTimingInfo_.bind(this, t.requestId)
                },
                this.handleUpdateEnd_.bind(this))
            } else this.state = "READY"
        }
    },
    {
        key: "handleVideoSegmentTimingInfo_",
        value: function(e, t) {
            if (this.pendingSegment_ && e === this.pendingSegment_.requestId) {
                var i = this.pendingSegment_.segment;
                i.videoTimingInfo || (i.videoTimingInfo = {}),
                i.videoTimingInfo.transmuxerPrependedSeconds = t.videoSegmentTimingInfo.prependedContentDuration || 0,
                i.videoTimingInfo.transmuxedPresentationStart = t.videoSegmentTimingInfo.start.presentation,
                i.videoTimingInfo.transmuxedPresentationEnd = t.videoSegmentTimingInfo.end.presentation,
                i.videoTimingInfo.baseMediaDecodeTime = t.videoSegmentTimingInfo.baseMediaDecodeTime
            }
        }
    },
    {
        key: "handleUpdateEnd_",
        value: function() {
            if (!this.pendingSegment_) return this.state = "READY",
            void(this.paused() || this.monitorBuffer_());
            var e = this.pendingSegment_,
            t = e.segment,
            i = null !== this.mediaIndex;
            this.pendingSegment_ = null,
            this.recordThroughput_(e),
            this.addSegmentMetadataCue_(e),
            this.state = "READY",
            this.mediaIndex = e.mediaIndex,
            this.fetchAtBuffer_ = !0,
            this.currentTimeline_ = e.timeline,
            this.trigger("syncinfoupdate"),
            t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration ? this.resetEverything() : (i && this.trigger("bandwidthupdate"), this.trigger("progress"), this.isEndOfStream_(e.mediaIndex + 1, e.playlist) && this.endOfStream(), this.paused() || this.monitorBuffer_())
        }
    },
    {
        key: "recordThroughput_",
        value: function(e) {
            var t = this.throughput.rate,
            i = Date.now() - e.endOfAllRequests + 1,
            n = Math.floor(e.byteLength / i * 8 * 1e3);
            this.throughput.rate += (n - t) / ++this.throughput.count
        }
    },
    {
        key: "addSegmentMetadataCue_",
        value: function(e) {
            if (this.segmentMetadataTrack_) {
                var t = e.segment,
                i = t.start,
                n = t.end;
                if (Qc(i) && Qc(n)) {
                    Xl(i, n, this.segmentMetadataTrack_);
                    var r = y.WebKitDataCue || y.VTTCue,
                    s = {
                        custom: t.custom,
                        dateTimeObject: t.dateTimeObject,
                        dateTimeString: t.dateTimeString,
                        bandwidth: e.playlist.attributes.BANDWIDTH,
                        resolution: e.playlist.attributes.RESOLUTION,
                        codecs: e.playlist.attributes.CODECS,
                        byteLength: e.byteLength,
                        uri: e.uri,
                        timeline: e.timeline,
                        playlist: e.playlist.id,
                        start: i,
                        end: n
                    },
                    a = new r(i, n, JSON.stringify(s));
                    a.value = s,
                    this.segmentMetadataTrack_.addCue(a)
                }
            }
        }
    }]), nh);
    function nh(e) {
        el(this, nh);
        var t = ul(this, (nh.__proto__ || Object.getPrototypeOf(nh)).call(this));
        if (!e) throw new TypeError("Initialization settings are required");
        if ("function" != typeof e.currentTime) throw new TypeError("No currentTime getter specified");
        if (!e.mediaSource) throw new TypeError("No MediaSource specified");
        return t.bandwidth = e.bandwidth,
        t.throughput = {
            rate: 0,
            count: 0
        },
        t.roundTrip = NaN,
        t.resetStats_(),
        t.mediaIndex = null,
        t.hasPlayed_ = e.hasPlayed,
        t.currentTime_ = e.currentTime,
        t.seekable_ = e.seekable,
        t.seeking_ = e.seeking,
        t.duration_ = e.duration,
        t.mediaSource_ = e.mediaSource,
        t.hls_ = e.hls,
        t.loaderType_ = e.loaderType,
        t.startingMedia_ = void 0,
        t.segmentMetadataTrack_ = e.segmentMetadataTrack,
        t.goalBufferLength_ = e.goalBufferLength,
        t.sourceType_ = e.sourceType,
        t.inbandTextTracks_ = e.inbandTextTracks,
        t.state_ = "INIT",
        t.checkBufferTimeout_ = null,
        t.error_ = void 0,
        t.currentTimeline_ = -1,
        t.pendingSegment_ = null,
        t.mimeType_ = null,
        t.sourceUpdater_ = null,
        t.xhrOptions_ = null,
        t.activeInitSegmentId_ = null,
        t.initSegments_ = {},
        t.cacheEncryptionKeys_ = e.cacheEncryptionKeys,
        t.keyCache_ = {},
        "main" === t.loaderType_ ? t.captionParser_ = new Su: t.captionParser_ = null,
        t.decrypter_ = e.decrypter,
        t.syncController_ = e.syncController,
        t.syncPoint_ = {
            segmentIndex: 0,
            time: 0
        },
        t.triggerSyncInfoUpdate_ = function() {
            return t.trigger("syncinfoupdate")
        },
        t.syncController_.on("syncinfoupdate", t.triggerSyncInfoUpdate_),
        t.mediaSource_.addEventListener("sourceopen",
        function() {
            return t.ended_ = !1
        }),
        t.fetchAtBuffer_ = !1,
        t.logger_ = jc("SegmentLoader[" + t.loaderType_ + "]"),
        Object.defineProperty(t, "state", {
            get: function() {
                return this.state_
            },
            set: function(e) {
                e !== this.state_ && (this.logger_(this.state_ + " -> " + e), this.state_ = e)
            }
        }),
        t
    }
    function rh(e) {
        return decodeURIComponent(escape(String.fromCharCode.apply(null, e)))
    }
    var sh = new Uint8Array("\n\n".split("").map(function(e) {
        return e.charCodeAt(0)
    })),
    ah = (ol(oh, ih), sl(oh, [{
        key: "buffered_",
        value: function() {
            if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return cs.createTimeRanges();
            var e = this.subtitlesTrack_.cues,
            t = e[0].startTime,
            i = e[e.length - 1].startTime;
            return cs.createTimeRanges([[t, i]])
        }
    },
    {
        key: "initSegment",
        value: function(e, t) {
            var i = 1 < arguments.length && void 0 !== t && t;
            if (!e) return null;
            var n = Ml(e),
            r = this.initSegments_[n];
            if (i && !r && e.bytes) {
                var s = sh.byteLength + e.bytes.byteLength,
                a = new Uint8Array(s);
                a.set(e.bytes),
                a.set(sh, e.bytes.byteLength),
                this.initSegments_[n] = r = {
                    resolvedUri: e.resolvedUri,
                    byterange: e.byterange,
                    bytes: a
                }
            }
            return r || e
        }
    },
    {
        key: "couldBeginLoading_",
        value: function() {
            return this.playlist_ && this.subtitlesTrack_ && !this.paused()
        }
    },
    {
        key: "init_",
        value: function() {
            return this.state = "READY",
            this.resetEverything(),
            this.monitorBuffer_()
        }
    },
    {
        key: "track",
        value: function(e) {
            return "undefined" == typeof e || (this.subtitlesTrack_ = e, "INIT" === this.state && this.couldBeginLoading_() && this.init_()),
            this.subtitlesTrack_
        }
    },
    {
        key: "remove",
        value: function(e, t) {
            Xl(e, t, this.subtitlesTrack_)
        }
    },
    {
        key: "fillBuffer_",
        value: function() {
            var e = this;
            this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
            var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
            if (t = this.skipEmptySegments_(t)) {
                if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) return this.syncController_.one("timestampoffset",
                function() {
                    e.state = "READY",
                    e.paused() || e.monitorBuffer_()
                }),
                void(this.state = "WAITING_ON_TIMELINE");
                this.loadSegment_(t)
            }
        }
    },
    {
        key: "skipEmptySegments_",
        value: function(e) {
            for (; e && e.segment.empty;) e = this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest);
            return e
        }
    },
    {
        key: "handleSegment_",
        value: function() {
            var t = this;
            if (this.pendingSegment_ && this.subtitlesTrack_) {
                this.state = "APPENDING";
                var e = this.pendingSegment_,
                i = e.segment;
                if ("function" != typeof y.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
                    var n = void 0,
                    r = function() {
                        t.subtitlesTrack_.tech_.off("vttjsloaded", n),
                        t.error({
                            message: "Error loading vtt.js"
                        }),
                        t.state = "READY",
                        t.pause(),
                        t.trigger("error")
                    };
                    return n = function() {
                        t.subtitlesTrack_.tech_.off("vttjserror", r),
                        t.handleSegment_()
                    },
                    this.state = "WAITING_ON_VTTJS",
                    this.subtitlesTrack_.tech_.one("vttjsloaded", n),
                    void this.subtitlesTrack_.tech_.one("vttjserror", r)
                }
                i.requested = !0;
                try {
                    this.parseVTTCues_(e)
                } catch(e) {
                    return this.error({
                        message: e.message
                    }),
                    this.state = "READY",
                    this.pause(),
                    this.trigger("error")
                }
                if (this.updateTimeMapping_(e, this.syncController_.timelines[e.timeline], this.playlist_), e.isSyncRequest) return this.trigger("syncinfoupdate"),
                this.pendingSegment_ = null,
                void(this.state = "READY");
                e.byteLength = e.bytes.byteLength,
                this.mediaSecondsLoaded += i.duration,
                e.cues.length && this.remove(e.cues[0].endTime, e.cues[e.cues.length - 1].endTime),
                e.cues.forEach(function(e) {
                    t.subtitlesTrack_.addCue(t.featuresNativeTextTracks_ ? new y.VTTCue(e.startTime, e.endTime, e.text) : e)
                }),
                this.handleUpdateEnd_()
            } else this.state = "READY"
        }
    },
    {
        key: "parseVTTCues_",
        value: function(t) {
            var e = void 0,
            i = !1;
            "function" == typeof y.TextDecoder ? e = new y.TextDecoder("utf8") : (e = y.WebVTT.StringDecoder(), i = !0);
            var n = new y.WebVTT.Parser(y, y.vttjs, e);
            if (t.cues = [], t.timestampmap = {
                MPEGTS: 0,
                LOCAL: 0
            },
            n.oncue = t.cues.push.bind(t.cues), n.ontimestampmap = function(e) {
                return t.timestampmap = e
            },
            n.onparsingerror = function(e) {
                cs.log.warn("Error encountered when parsing cues: " + e.message)
            },
            t.segment.map) {
                var r = t.segment.map.bytes;
                i && (r = rh(r)),
                n.parse(r)
            }
            var s = t.bytes;
            i && (s = rh(s)),
            n.parse(s),
            n.flush()
        }
    },
    {
        key: "updateTimeMapping_",
        value: function(e, t, i) {
            var n = e.segment;
            if (t) if (e.cues.length) {
                var r = e.timestampmap,
                s = r.MPEGTS / 9e4 - r.LOCAL + t.mapping;
                if (e.cues.forEach(function(e) {
                    e.startTime += s,
                    e.endTime += s
                }), !i.syncInfo) {
                    var a = e.cues[0].startTime,
                    o = e.cues[e.cues.length - 1].startTime;
                    i.syncInfo = {
                        mediaSequence: i.mediaSequence + e.mediaIndex,
                        time: Math.min(a, o - n.duration)
                    }
                }
            } else n.empty = !0
        }
    }]), oh);
    function oh(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        el(this, oh);
        var i = ul(this, (oh.__proto__ || Object.getPrototypeOf(oh)).call(this, e, t));
        return i.mediaSource_ = null,
        i.subtitlesTrack_ = null,
        i.featuresNativeTextTracks_ = e.featuresNativeTextTracks,
        i
    }
    function uh(e, t) {
        for (var i = e.cues,
        n = 0; n < i.length; n++) {
            var r = i[n];
            if (t >= r.adStartTime && t <= r.adEndTime) return r
        }
        return null
    }
    var lh = Gu,
    ch = [{
        name: "VOD",
        run: function(e, t, i, n, r) {
            if (i === 1 / 0) return null;
            return {
                time: 0,
                segmentIndex: 0
            }
        }
    },
    {
        name: "ProgramDateTime",
        run: function(e, t, i, n, r) {
            if (!e.datetimeToDisplayTime) return null;
            var s = t.segments || [],
            a = null,
            o = null;
            r = r || 0;
            for (var u = 0; u < s.length; u++) {
                var l = s[u];
                if (l.dateTimeObject) {
                    var c = l.dateTimeObject.getTime() / 1e3 + e.datetimeToDisplayTime,
                    h = Math.abs(r - c);
                    if (null !== o && (0 === h || o < h)) break;
                    o = h,
                    a = {
                        time: c,
                        segmentIndex: u
                    }
                }
            }
            return a
        }
    },
    {
        name: "Segment",
        run: function(e, t, i, n, r) {
            var s = t.segments || [],
            a = null,
            o = null;
            r = r || 0;
            for (var u = 0; u < s.length; u++) {
                var l = s[u];
                if (l.timeline === n && "undefined" != typeof l.start) {
                    var c = Math.abs(r - l.start);
                    if (null !== o && o < c) break; (!a || null === o || c <= o) && (o = c, a = {
                        time: l.start,
                        segmentIndex: u
                    })
                }
            }
            return a
        }
    },
    {
        name: "Discontinuity",
        run: function(e, t, i, n, r) {
            var s = null;
            if (r = r || 0, t.discontinuityStarts && t.discontinuityStarts.length) for (var a = null,
            o = 0; o < t.discontinuityStarts.length; o++) {
                var u = t.discontinuityStarts[o],
                l = t.discontinuitySequence + o + 1,
                c = e.discontinuities[l];
                if (c) {
                    var h = Math.abs(r - c.time);
                    if (null !== a && a < h) break; (!s || null === a || h <= a) && (a = h, s = {
                        time: c.time,
                        segmentIndex: u
                    })
                }
            }
            return s
        }
    },
    {
        name: "Playlist",
        run: function(e, t, i, n, r) {
            return t.syncInfo ? {
                time: t.syncInfo.time,
                segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence
            }: null
        }
    }],
    hh = (ol(dh, cs.EventTarget), sl(dh, [{
        key: "getSyncPoint",
        value: function(e, t, i, n) {
            var r = this.runStrategies_(e, t, i, n);
            return r.length ? this.selectSyncPoint_(r, {
                key: "time",
                value: n
            }) : null
        }
    },
    {
        key: "getExpiredTime",
        value: function(e, t) {
            if (!e || !e.segments) return null;
            var i = this.runStrategies_(e, t, e.discontinuitySequence, 0);
            if (!i.length) return null;
            var n = this.selectSyncPoint_(i, {
                key: "segmentIndex",
                value: 0
            });
            return 0 < n.segmentIndex && (n.time *= -1),
            Math.abs(n.time + Sl(e, n.segmentIndex, 0))
        }
    },
    {
        key: "runStrategies_",
        value: function(e, t, i, n) {
            for (var r = [], s = 0; s < ch.length; s++) {
                var a = ch[s],
                o = a.run(this, e, t, i, n);
                o && (o.strategy = a.name, r.push({
                    strategy: a.name,
                    syncPoint: o
                }))
            }
            return r
        }
    },
    {
        key: "selectSyncPoint_",
        value: function(e, t) {
            for (var i = e[0].syncPoint, n = Math.abs(e[0].syncPoint[t.key] - t.value), r = e[0].strategy, s = 1; s < e.length; s++) {
                var a = Math.abs(e[s].syncPoint[t.key] - t.value);
                a < n && (n = a, i = e[s].syncPoint, r = e[s].strategy)
            }
            return this.logger_("syncPoint for [" + t.key + ": " + t.value + "] chosen with strategy [" + r + "]: [time:" + i.time + ", segmentIndex:" + i.segmentIndex + "]"),
            i
        }
    },
    {
        key: "saveExpiredSegmentInfo",
        value: function(e, t) {
            for (var i = t.mediaSequence - e.mediaSequence - 1; 0 <= i; i--) {
                var n = e.segments[i];
                if (n && "undefined" != typeof n.start) {
                    t.syncInfo = {
                        mediaSequence: e.mediaSequence + i,
                        time: n.start
                    },
                    this.logger_("playlist refresh sync: [time:" + t.syncInfo.time + ", mediaSequence: " + t.syncInfo.mediaSequence + "]"),
                    this.trigger("syncinfoupdate");
                    break
                }
            }
        }
    },
    {
        key: "setDateTimeMapping",
        value: function(e) {
            if (!this.datetimeToDisplayTime && e.segments && e.segments.length && e.segments[0].dateTimeObject) {
                var t = e.segments[0].dateTimeObject.getTime() / 1e3;
                this.datetimeToDisplayTime = -t
            }
        }
    },
    {
        key: "reset",
        value: function() {
            this.inspectCache_ = void 0
        }
    },
    {
        key: "probeSegmentInfo",
        value: function(e) {
            var t = e.segment,
            i = e.playlist,
            n = void 0;
            return (n = t.map ? this.probeMp4Segment_(e) : this.probeTsSegment_(e)) && this.calculateSegmentTimeMapping_(e, n) && (this.saveDiscontinuitySyncInfo_(e), i.syncInfo || (i.syncInfo = {
                mediaSequence: i.mediaSequence + e.mediaIndex,
                time: t.start
            })),
            n
        }
    },
    {
        key: "probeMp4Segment_",
        value: function(e) {
            var t = e.segment,
            i = ru.timescale(t.map.bytes),
            n = ru.compositionStartTime(i, e.bytes);
            return null !== e.timestampOffset && (e.timestampOffset -= n),
            {
                start: n,
                end: n + t.duration
            }
        }
    },
    {
        key: "probeTsSegment_",
        value: function(e) {
            var t = lh(e.bytes, this.inspectCache_),
            i = void 0,
            n = void 0,
            r = void 0;
            return t ? (t.video && 2 === t.video.length ? (this.inspectCache_ = t.video[1].dts, i = t.video[0].dtsTime, n = t.video[1].dtsTime, r = t.video) : t.audio && 2 === t.audio.length && (this.inspectCache_ = t.audio[1].dts, i = t.audio[0].dtsTime, n = t.audio[1].dtsTime, r = t.audio), {
                segmentTimestampInfo: r,
                start: i,
                end: n,
                containsVideo: t.video && 2 === t.video.length,
                containsAudio: t.audio && 2 === t.audio.length
            }) : null
        }
    },
    {
        key: "timestampOffsetForTimeline",
        value: function(e) {
            return "undefined" == typeof this.timelines[e] ? null: this.timelines[e].time
        }
    },
    {
        key: "mappingForTimeline",
        value: function(e) {
            return "undefined" == typeof this.timelines[e] ? null: this.timelines[e].mapping
        }
    },
    {
        key: "calculateSegmentTimeMapping_",
        value: function(e, t) {
            var i = e.segment,
            n = this.timelines[e.timeline];
            if (null !== e.timestampOffset) n = {
                time: e.startOfSegment,
                mapping: e.startOfSegment - t.start
            },
            this.timelines[e.timeline] = n,
            this.trigger("timestampoffset"),
            this.logger_("time mapping for timeline " + e.timeline + ": [time: " + n.time + "] [mapping: " + n.mapping + "]"),
            i.start = e.startOfSegment,
            i.end = t.end + n.mapping;
            else {
                if (!n) return ! 1;
                i.start = t.start + n.mapping,
                i.end = t.end + n.mapping
            }
            return ! 0
        }
    },
    {
        key: "saveDiscontinuitySyncInfo_",
        value: function(e) {
            var t = e.playlist,
            i = e.segment;
            if (i.discontinuity) this.discontinuities[i.timeline] = {
                time: i.start,
                accuracy: 0
            };
            else if (t.discontinuityStarts && t.discontinuityStarts.length) for (var n = 0; n < t.discontinuityStarts.length; n++) {
                var r = t.discontinuityStarts[n],
                s = t.discontinuitySequence + n + 1,
                a = r - e.mediaIndex,
                o = Math.abs(a);
                if (!this.discontinuities[s] || this.discontinuities[s].accuracy > o) {
                    var u = void 0;
                    u = a < 0 ? i.start - Sl(t, e.mediaIndex, r) : i.end + Sl(t, e.mediaIndex + 1, r),
                    this.discontinuities[s] = {
                        time: u,
                        accuracy: o
                    }
                }
            }
        }
    },
    {
        key: "dispose",
        value: function() {
            this.trigger("dispose"),
            this.off()
        }
    }]), dh);
    function dh() {
        el(this, dh);
        var e = ul(this, (dh.__proto__ || Object.getPrototypeOf(dh)).call(this));
        return e.inspectCache_ = void 0,
        e.timelines = [],
        e.discontinuities = [],
        e.datetimeToDisplayTime = null,
        e.logger_ = jc("SyncController"),
        e
    }
    function ph(e, t) {
        e.abort(),
        e.pause(),
        t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null)
    }
    function fh(e, t) { (t.activePlaylistLoader = e).load()
    }
    function mh(t) { ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(e) {
            _h[e](e, t)
        });
        var i = t.mediaTypes,
        e = t.masterPlaylistLoader,
        n = t.tech,
        r = t.hls; ["AUDIO", "SUBTITLES"].forEach(function(e) {
            i[e].activeGroup = function(s, a) {
                return function(t) {
                    var e = a.masterPlaylistLoader,
                    i = a.mediaTypes[s].groups,
                    n = e.media();
                    if (!n) return null;
                    var r = null;
                    return n.attributes[s] && (r = i[n.attributes[s]]),
                    r = r || i.main,
                    "undefined" == typeof t ? r: null === t ? null: r.filter(function(e) {
                        return e.id === t.id
                    })[0] || null
                }
            } (e, t),
            i[e].activeTrack = bh[e](e, t),
            i[e].onGroupChanged = function(o, u) {
                return function() {
                    var e = u.segmentLoaders,
                    t = e[o],
                    i = e.main,
                    n = u.mediaTypes[o],
                    r = n.activeTrack(),
                    s = n.activeGroup(r),
                    a = n.activePlaylistLoader;
                    ph(t, n),
                    s && (s.playlistLoader ? (t.resyncLoader(), fh(s.playlistLoader, n)) : a && i.resetEverything())
                }
            } (e, t),
            i[e].onTrackChanged = function(o, u) {
                return function() {
                    var e = u.segmentLoaders,
                    t = e[o],
                    i = e.main,
                    n = u.mediaTypes[o],
                    r = n.activeTrack(),
                    s = n.activeGroup(r),
                    a = n.activePlaylistLoader;
                    ph(t, n),
                    s && (s.playlistLoader ? (a !== s.playlistLoader && (t.track && t.track(r), t.resetEverything()), fh(s.playlistLoader, n)) : i.resetEverything())
                }
            } (e, t)
        });
        var s = i.AUDIO.activeGroup(),
        a = (s.filter(function(e) {
            return e.
        default
        })[0] || s[0]).id;
        function o() {
            i.AUDIO.onTrackChanged(),
            n.trigger({
                type: "usage",
                name: "hls-audio-change"
            })
        }
        for (var u in i.AUDIO.tracks[a].enabled = !0, i.AUDIO.onTrackChanged(), e.on("mediachange",
        function() { ["AUDIO", "SUBTITLES"].forEach(function(e) {
                return i[e].onGroupChanged()
            })
        }), n.audioTracks().addEventListener("change", o), n.remoteTextTracks().addEventListener("change", i.SUBTITLES.onTrackChanged), r.on("dispose",
        function() {
            n.audioTracks().removeEventListener("change", o),
            n.remoteTextTracks().removeEventListener("change", i.SUBTITLES.onTrackChanged)
        }), n.clearTracks("audio"), i.AUDIO.tracks) n.audioTracks().addTrack(i.AUDIO.tracks[u])
    }
    var gh = new lc("./decrypter-worker.worker.js",
    function(e, t) {
        var i, c, g, n, r, u, a, s = this;
        i = function(e, t, i) {
            return t && o(e.prototype, t),
            i && o(e, i),
            e
        },
        c = null,
        d.prototype.decrypt = function(e, t, i, n, r, s) {
            var a = this._key[1],
            o = e ^ a[0],
            u = n ^ a[1],
            l = i ^ a[2],
            c = t ^ a[3],
            h = void 0,
            d = void 0,
            p = void 0,
            f = a.length / 4 - 2,
            m = void 0,
            g = 4,
            v = this._tables[1],
            y = v[0],
            _ = v[1],
            b = v[2],
            T = v[3],
            S = v[4];
            for (m = 0; m < f; m++) h = y[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ a[g],
            d = y[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ a[g + 1],
            p = y[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ a[g + 2],
            c = y[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ a[g + 3],
            g += 4,
            o = h,
            u = d,
            l = p;
            for (m = 0; m < 4; m++) r[(3 & -m) + s] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ a[g++],
            h = o,
            o = u,
            u = l,
            l = c,
            c = h
        },
        g = d,
        l.prototype.on = function(e, t) {
            this.listeners[e] || (this.listeners[e] = []),
            this.listeners[e].push(t)
        },
        l.prototype.off = function(e, t) {
            if (!this.listeners[e]) return ! 1;
            var i = this.listeners[e].indexOf(t);
            return this.listeners[e].splice(i, 1),
            -1 < i
        },
        l.prototype.trigger = function(e, t) {
            var i = this.listeners[e];
            if (i) if (2 === arguments.length) for (var n = i.length,
            r = 0; r < n; ++r) i[r].call(this, t);
            else for (var s = Array.prototype.slice.call(arguments, 1), a = i.length, o = 0; o < a; ++o) i[o].apply(this, s)
        },
        l.prototype.dispose = function() {
            this.listeners = {}
        },
        l.prototype.pipe = function(t) {
            this.on("data",
            function(e) {
                t.push(e)
            })
        },
        function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        } (p, r = n = l),
        p.prototype.processJob_ = function() {
            this.jobs.shift()(),
            this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
        },
        p.prototype.push = function(e) {
            this.jobs.push(e),
            this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
        },
        u = p,
        f.prototype.decryptChunk_ = function(t, i, n, r) {
            return function() {
                var e = function(e, t, i) {
                    var n = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                    r = new g(Array.prototype.slice.call(t)),
                    s = new Uint8Array(e.byteLength),
                    a = new Int32Array(s.buffer),
                    o = void 0,
                    u = void 0,
                    l = void 0,
                    c = void 0,
                    h = void 0,
                    d = void 0,
                    p = void 0,
                    f = void 0,
                    m = void 0;
                    for (o = i[0], u = i[1], l = i[2], c = i[3], m = 0; m < n.length; m += 4) h = v(n[m]),
                    d = v(n[m + 1]),
                    p = v(n[m + 2]),
                    f = v(n[m + 3]),
                    r.decrypt(h, d, p, f, a, m),
                    a[m] = v(a[m] ^ o),
                    a[m + 1] = v(a[m + 1] ^ u),
                    a[m + 2] = v(a[m + 2] ^ l),
                    a[m + 3] = v(a[m + 3] ^ c),
                    o = h,
                    u = d,
                    l = p,
                    c = f;
                    return s
                } (t, i, n);
                r.set(e, t.byteOffset)
            }
        },
        i(f, null, [{
            key: "STEP",
            get: function() {
                return 32e3
            }
        }]),
        a = f,
        new
        function(s) {
            s.onmessage = function(e) {
                var i = e.data,
                t = new Uint8Array(i.encrypted.bytes, i.encrypted.byteOffset, i.encrypted.byteLength),
                n = new Uint32Array(i.key.bytes, i.key.byteOffset, i.key.byteLength / 4),
                r = new Uint32Array(i.iv.bytes, i.iv.byteOffset, i.iv.byteLength / 4);
                new a(t, n, r,
                function(e, t) {
                    s.postMessage(function(i) {
                        var n = {};
                        return Object.keys(i).forEach(function(e) {
                            var t = i[e];
                            ArrayBuffer.isView(t) ? n[e] = {
                                bytes: t.buffer,
                                byteOffset: t.byteOffset,
                                byteLength: t.byteLength
                            }: n[e] = t
                        }),
                        n
                    } ({
                        source: i.source,
                        decrypted: t
                    }), [t.buffer])
                })
            }
        } (s);
        function h(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function d(e) {
            h(this, d),
            c = c ||
            function() {
                var e = [[[], [], [], [], []], [[], [], [], [], []]],
                t = e[0],
                i = e[1],
                n = t[4],
                r = i[4],
                s = void 0,
                a = void 0,
                o = void 0,
                u = [],
                l = [],
                c = void 0,
                h = void 0,
                d = void 0,
                p = void 0,
                f = void 0;
                for (s = 0; s < 256; s++) l[(u[s] = s << 1 ^ 283 * (s >> 7)) ^ s] = s;
                for (a = o = 0; ! n[a]; a ^= c || 1, o = l[o] || 1) for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99, f = 16843009 * u[h = u[c = u[r[n[a] = d] = a]]] ^ 65537 * h ^ 257 * c ^ 16843008 * a, p = 257 * u[d] ^ 16843008 * d, s = 0; s < 4; s++) t[s][a] = p = p << 24 ^ p >>> 8,
                i[s][d] = f = f << 24 ^ f >>> 8;
                for (s = 0; s < 5; s++) t[s] = t[s].slice(0),
                i[s] = i[s].slice(0);
                return e
            } (),
            this._tables = [[c[0][0].slice(), c[0][1].slice(), c[0][2].slice(), c[0][3].slice(), c[0][4].slice()], [c[1][0].slice(), c[1][1].slice(), c[1][2].slice(), c[1][3].slice(), c[1][4].slice()]];
            var t = void 0,
            i = void 0,
            n = void 0,
            r = void 0,
            s = void 0,
            a = this._tables[0][4],
            o = this._tables[1],
            u = e.length,
            l = 1;
            if (4 !== u && 6 !== u && 8 !== u) throw new Error("Invalid aes key size");
            for (r = e.slice(0), s = [], this._key = [r, s], t = u; t < 4 * u + 28; t++) n = r[t - 1],
            (t % u == 0 || 8 === u && t % u == 4) && (n = a[n >>> 24] << 24 ^ a[n >> 16 & 255] << 16 ^ a[n >> 8 & 255] << 8 ^ a[255 & n], t % u == 0 && (n = n << 8 ^ n >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))),
            r[t] = r[t - u] ^ n;
            for (i = 0; t; i++, t--) n = r[3 & i ? t: t - 4],
            s[i] = t <= 4 || i < 4 ? n: o[0][a[n >>> 24]] ^ o[1][a[n >> 16 & 255]] ^ o[2][a[n >> 8 & 255]] ^ o[3][a[255 & n]]
        }
        function l() {
            h(this, l),
            this.listeners = {}
        }
        function p() {
            h(this, p);
            var e = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return ! t || "object" != typeof t && "function" != typeof t ? e: t
            } (this, r.call(this, n));
            return e.jobs = [],
            e.delay = 1,
            e.timeout_ = null,
            e
        }
        function v(e) {
            return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
        }
        function f(e, t, i, n) {
            h(this, f);
            var r = f.STEP,
            s = new Int32Array(e.buffer),
            a = new Uint8Array(e.byteLength),
            o = 0;
            for (this.asyncStream_ = new u, this.asyncStream_.push(this.decryptChunk_(s.subarray(o, o + r), t, i, a)), o = r; o < s.length; o += r) i = new Uint32Array([v(s[o - 4]), v(s[o - 3]), v(s[o - 2]), v(s[o - 1])]),
            this.asyncStream_.push(this.decryptChunk_(s.subarray(o, o + r), t, i, a));
            this.asyncStream_.push(function() {
                n(null,
                function(e) {
                    return e.subarray(0, e.byteLength - e[e.byteLength - 1])
                } (a))
            })
        }
    }),
    vh = {
        AUDIO: function(u, l) {
            return function() {
                var e = l.segmentLoaders[u],
                t = l.mediaTypes[u],
                i = l.blacklistCurrentPlaylist;
                ph(e, t);
                var n = t.activeTrack(),
                r = t.activeGroup(),
                s = (r.filter(function(e) {
                    return e.
                default
                })[0] || r[0]).id,
                a = t.tracks[s];
                if (n !== a) {
                    for (var o in cs.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), t.tracks) t.tracks[o].enabled = t.tracks[o] === a;
                    t.onTrackChanged()
                } else i({
                    message: "Problem encountered loading the default audio track."
                })
            }
        },
        SUBTITLES: function(n, r) {
            return function() {
                var e = r.segmentLoaders[n],
                t = r.mediaTypes[n];
                cs.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),
                ph(e, t);
                var i = t.activeTrack();
                i && (i.mode = "disabled"),
                t.onTrackChanged()
            }
        }
    },
    yh = {
        AUDIO: function(e, t, i) {
            if (t) {
                var n = i.tech,
                r = i.requestOptions,
                s = i.segmentLoaders[e];
                t.on("loadedmetadata",
                function() {
                    var e = t.media();
                    s.playlist(e, r),
                    (!n.paused() || e.endList && "none" !== n.preload()) && s.load()
                }),
                t.on("loadedplaylist",
                function() {
                    s.playlist(t.media(), r),
                    n.paused() || s.load()
                }),
                t.on("error", vh[e](e, i))
            }
        },
        SUBTITLES: function(e, t, i) {
            var n = i.tech,
            r = i.requestOptions,
            s = i.segmentLoaders[e],
            a = i.mediaTypes[e];
            t.on("loadedmetadata",
            function() {
                var e = t.media();
                s.playlist(e, r),
                s.track(a.activeTrack()),
                (!n.paused() || e.endList && "none" !== n.preload()) && s.load()
            }),
            t.on("loadedplaylist",
            function() {
                s.playlist(t.media(), r),
                n.paused() || s.load()
            }),
            t.on("error", vh[e](e, i))
        }
    },
    _h = {
        AUDIO: function(e, t) {
            var i, n, r = t.hls,
            s = t.sourceType,
            a = t.segmentLoaders[e],
            o = t.requestOptions,
            u = t.master.mediaGroups,
            l = t.mediaTypes[e],
            c = l.groups,
            h = l.tracks,
            d = t.masterPlaylistLoader;
            for (var p in u[e] && 0 !== Object.keys(u[e]).length || (u[e] = {
                main: {
                default:
                    {
                    default:
                        !0
                    }
                }
            }), u[e]) for (var f in c[p] || (c[p] = []), u[e][p]) {
                var m = u[e][p][f],
                g = void 0;
                if (g = m.resolvedUri ? new yl(m.resolvedUri, r, o) : m.playlists && "dash" === s ? new Mc(m.playlists[0], r, o, d) : null, m = cs.mergeOptions({
                    id: f,
                    playlistLoader: g
                },
                m), yh[e](e, m.playlistLoader, t), c[p].push(m), "undefined" == typeof h[f]) {
                    var v = new cs.AudioTrack({
                        id: f,
                        kind: (i = m, n = void 0, n = i.
                    default ? "main": "alternative", i.characteristics && 0 <= i.characteristics.indexOf("public.accessibility.describes-video") && (n = "main-desc"), n),
                        enabled: !1,
                        language: m.language,
                    default:
                        m.
                    default,
                        label: f
                    });
                    h[f] = v
                }
            }
            a.on("error", vh[e](e, t))
        },
        SUBTITLES: function(e, t) {
            var i = t.tech,
            n = t.hls,
            r = t.sourceType,
            s = t.segmentLoaders[e],
            a = t.requestOptions,
            o = t.master.mediaGroups,
            u = t.mediaTypes[e],
            l = u.groups,
            c = u.tracks,
            h = t.masterPlaylistLoader;
            for (var d in o[e]) for (var p in l[d] || (l[d] = []), o[e][d]) if (!o[e][d][p].forced) {
                var f = o[e][d][p],
                m = void 0;
                if ("hls" === r ? m = new yl(f.resolvedUri, n, a) : "dash" === r && (m = new Mc(f.playlists[0], n, a, h)), f = cs.mergeOptions({
                    id: p,
                    playlistLoader: m
                },
                f), yh[e](e, f.playlistLoader, t), l[d].push(f), "undefined" == typeof c[p]) {
                    var g = i.addRemoteTextTrack({
                        id: p,
                        kind: "subtitles",
                    default:
                        f.
                    default && f.autoselect,
                        language: f.language,
                        label: p
                    },
                    !1).track;
                    c[p] = g
                }
            }
            s.on("error", vh[e](e, t))
        },
        "CLOSED-CAPTIONS": function(e, t) {
            var i = t.tech,
            n = t.master.mediaGroups,
            r = t.mediaTypes[e],
            s = r.groups,
            a = r.tracks;
            for (var o in n[e]) for (var u in s[o] || (s[o] = []), n[e][o]) {
                var l = n[e][o][u];
                if (l.instreamId.match(/CC\d/) && (s[o].push(cs.mergeOptions({
                    id: u
                },
                l)), "undefined" == typeof a[u])) {
                    var c = i.addRemoteTextTrack({
                        id: l.instreamId,
                        kind: "captions",
                    default:
                        l.
                    default && l.autoselect,
                        language: l.language,
                        label: u
                    },
                    !1).track;
                    a[u] = c
                }
            }
        }
    },
    bh = {
        AUDIO: function(i, n) {
            return function() {
                var e = n.mediaTypes[i].tracks;
                for (var t in e) if (e[t].enabled) return e[t];
                return null
            }
        },
        SUBTITLES: function(i, n) {
            return function() {
                var e = n.mediaTypes[i].tracks;
                for (var t in e) if ("showing" === e[t].mode || "hidden" === e[t].mode) return e[t];
                return null
            }
        }
    },
    Th = void 0,
    Sh = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"],
    kh = (ol(Ch, cs.EventTarget), sl(Ch, [{
        key: "setupMasterPlaylistLoaderListeners_",
        value: function() {
            var n = this;
            this.masterPlaylistLoader_.on("loadedmetadata",
            function() {
                var e = n.masterPlaylistLoader_.media(),
                t = 1.5 * e.targetDuration * 1e3;
                Ll(n.masterPlaylistLoader_.master, n.masterPlaylistLoader_.media()) ? n.requestOptions_.timeout = 0 : n.requestOptions_.timeout = t,
                e.endList && "none" !== n.tech_.preload() && (n.mainSegmentLoader_.playlist(e, n.requestOptions_), n.mainSegmentLoader_.load()),
                mh({
                    sourceType: n.sourceType_,
                    segmentLoaders: {
                        AUDIO: n.audioSegmentLoader_,
                        SUBTITLES: n.subtitleSegmentLoader_,
                        main: n.mainSegmentLoader_
                    },
                    tech: n.tech_,
                    requestOptions: n.requestOptions_,
                    masterPlaylistLoader: n.masterPlaylistLoader_,
                    hls: n.hls_,
                    master: n.master(),
                    mediaTypes: n.mediaTypes_,
                    blacklistCurrentPlaylist: n.blacklistCurrentPlaylist.bind(n)
                }),
                n.triggerPresenceUsage_(n.master(), e);
                try {
                    n.setupSourceBuffers_()
                } catch(e) {
                    return cs.log.warn("Failed to create SourceBuffers", e),
                    n.mediaSource.endOfStream("decode")
                }
                n.setupFirstPlay(),
                !n.mediaTypes_.AUDIO.activePlaylistLoader || n.mediaTypes_.AUDIO.activePlaylistLoader.media() ? n.trigger("selectedinitialmedia") : n.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata",
                function() {
                    n.trigger("selectedinitialmedia")
                })
            }),
            this.masterPlaylistLoader_.on("loadedplaylist",
            function() {
                var e = n.masterPlaylistLoader_.media();
                if (!e) {
                    n.excludeUnsupportedVariants_();
                    var t = void 0;
                    return n.enableLowInitialPlaylist && (t = n.selectInitialPlaylist()),
                    t = t || n.selectPlaylist(),
                    n.initialMedia_ = t,
                    void n.masterPlaylistLoader_.media(n.initialMedia_)
                }
                if (n.useCueTags_ && n.updateAdCues_(e), n.mainSegmentLoader_.playlist(e, n.requestOptions_), n.updateDuration(), n.tech_.paused() || (n.mainSegmentLoader_.load(), n.audioSegmentLoader_ && n.audioSegmentLoader_.load()), !e.endList) {
                    var i = function() {
                        var e = n.seekable();
                        0 !== e.length && n.mediaSource.addSeekableRange_(e.start(0), e.end(0))
                    };
                    n.duration() !== 1 / 0 ? n.tech_.one("durationchange",
                    function e() {
                        n.duration() === 1 / 0 ? i() : n.tech_.one("durationchange", e)
                    }) : i()
                }
            }),
            this.masterPlaylistLoader_.on("error",
            function() {
                n.blacklistCurrentPlaylist(n.masterPlaylistLoader_.error)
            }),
            this.masterPlaylistLoader_.on("mediachanging",
            function() {
                n.mainSegmentLoader_.abort(),
                n.mainSegmentLoader_.pause()
            }),
            this.masterPlaylistLoader_.on("mediachange",
            function() {
                var e = n.masterPlaylistLoader_.media(),
                t = 1.5 * e.targetDuration * 1e3;
                Ll(n.masterPlaylistLoader_.master, n.masterPlaylistLoader_.media()) ? n.requestOptions_.timeout = 0 : n.requestOptions_.timeout = t,
                n.mainSegmentLoader_.playlist(e, n.requestOptions_),
                n.mainSegmentLoader_.load(),
                n.tech_.trigger({
                    type: "mediachange",
                    bubbles: !0
                })
            }),
            this.masterPlaylistLoader_.on("playlistunchanged",
            function() {
                var e = n.masterPlaylistLoader_.media();
                n.stuckAtPlaylistEnd_(e) && (n.blacklistCurrentPlaylist({
                    message: "Playlist no longer updating."
                }), n.tech_.trigger("playliststuck"))
            }),
            this.masterPlaylistLoader_.on("renditiondisabled",
            function() {
                n.tech_.trigger({
                    type: "usage",
                    name: "hls-rendition-disabled"
                })
            }),
            this.masterPlaylistLoader_.on("renditionenabled",
            function() {
                n.tech_.trigger({
                    type: "usage",
                    name: "hls-rendition-enabled"
                })
            })
        }
    },
    {
        key: "triggerPresenceUsage_",
        value: function(e, t) {
            var i = e.mediaGroups || {},
            n = !0,
            r = Object.keys(i.AUDIO);
            for (var s in i.AUDIO) for (var a in i.AUDIO[s]) i.AUDIO[s][a].uri || (n = !1);
            n && this.tech_.trigger({
                type: "usage",
                name: "hls-demuxed"
            }),
            Object.keys(i.SUBTITLES).length && this.tech_.trigger({
                type: "usage",
                name: "hls-webvtt"
            }),
            Th.Playlist.isAes(t) && this.tech_.trigger({
                type: "usage",
                name: "hls-aes"
            }),
            Th.Playlist.isFmp4(t) && this.tech_.trigger({
                type: "usage",
                name: "hls-fmp4"
            }),
            r.length && 1 < Object.keys(i.AUDIO[r[0]]).length && this.tech_.trigger({
                type: "usage",
                name: "hls-alternate-audio"
            }),
            this.useCueTags_ && this.tech_.trigger({
                type: "usage",
                name: "hls-playlist-cue-tags"
            })
        }
    },
    {
        key: "setupSegmentLoaderListeners_",
        value: function() {
            var n = this;
            this.mainSegmentLoader_.on("bandwidthupdate",
            function() {
                var e = n.selectPlaylist(),
                t = n.masterPlaylistLoader_.media(),
                i = n.tech_.buffered(); !
                function(e) {
                    var t = e.currentPlaylist,
                    i = e.nextPlaylist,
                    n = e.forwardBuffer,
                    r = e.bufferLowWaterLine,
                    s = e.duration;
                    return e.log,
                    i ? !t.endList || s < Jc.MAX_BUFFER_LOW_WATER_LINE || i.attributes.BANDWIDTH < t.attributes.BANDWIDTH || r <= n: (cs.log.warn("We received no playlist to switch to. Please check your stream."), !1)
                } ({
                    currentPlaylist: t,
                    nextPlaylist: e,
                    forwardBuffer: i.length ? i.end(i.length - 1) - n.tech_.currentTime() : 0,
                    bufferLowWaterLine: n.bufferLowWaterLine(),
                    duration: n.duration(),
                    log: n.logger_
                }) || n.masterPlaylistLoader_.media(e),
                n.tech_.trigger("bandwidthupdate")
            }),
            this.mainSegmentLoader_.on("progress",
            function() {
                n.trigger("progress")
            }),
            this.mainSegmentLoader_.on("error",
            function() {
                n.blacklistCurrentPlaylist(n.mainSegmentLoader_.error())
            }),
            this.mainSegmentLoader_.on("syncinfoupdate",
            function() {
                n.onSyncInfoUpdate_()
            }),
            this.mainSegmentLoader_.on("timestampoffset",
            function() {
                n.tech_.trigger({
                    type: "usage",
                    name: "hls-timestamp-offset"
                })
            }),
            this.audioSegmentLoader_.on("syncinfoupdate",
            function() {
                n.onSyncInfoUpdate_()
            }),
            this.mainSegmentLoader_.on("ended",
            function() {
                n.onEndOfStream()
            }),
            this.mainSegmentLoader_.on("earlyabort",
            function() {
                n.blacklistCurrentPlaylist({
                    message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
                },
                120)
            }),
            this.mainSegmentLoader_.on("reseteverything",
            function() {
                n.tech_.trigger("hls-reset")
            }),
            this.mainSegmentLoader_.on("segmenttimemapping",
            function(e) {
                n.tech_.trigger({
                    type: "hls-segment-time-mapping",
                    mapping: e.mapping
                })
            }),
            this.audioSegmentLoader_.on("ended",
            function() {
                n.onEndOfStream()
            })
        }
    },
    {
        key: "mediaSecondsLoaded_",
        value: function() {
            return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
        }
    },
    {
        key: "load",
        value: function() {
            this.mainSegmentLoader_.load(),
            this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(),
            this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
        }
    },
    {
        key: "smoothQualityChange_",
        value: function() {
            var e = this.selectPlaylist();
            e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), this.mainSegmentLoader_.resetLoader())
        }
    },
    {
        key: "fastQualityChange_",
        value: function() {
            var e = this,
            t = this.selectPlaylist();
            t !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(t), this.mainSegmentLoader_.resetEverything(function() {
                cs.browser.IE_VERSION || cs.browser.IS_EDGE ? e.tech_.setCurrentTime(e.tech_.currentTime() + .04) : e.tech_.setCurrentTime(e.tech_.currentTime())
            }))
        }
    },
    {
        key: "play",
        value: function() {
            if (!this.setupFirstPlay()) {
                this.tech_.ended() && this.tech_.setCurrentTime(0),
                this.hasPlayed_ && this.load();
                var e = this.tech_.seekable();
                return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.tech_.setCurrentTime(e.end(e.length - 1)) : void 0
            }
        }
    },
    {
        key: "setupFirstPlay",
        value: function() {
            var e = this,
            t = this.masterPlaylistLoader_.media();
            if (!t || this.tech_.paused() || this.hasPlayed_) return ! 1;
            if (!t.endList) {
                var i = this.seekable();
                if (!i.length) return ! 1;
                if (cs.browser.IE_VERSION && 0 === this.tech_.readyState()) return this.tech_.one("loadedmetadata",
                function() {
                    e.trigger("firstplay"),
                    e.tech_.setCurrentTime(i.end(0)),
                    e.hasPlayed_ = !0
                }),
                !1;
                this.trigger("firstplay"),
                this.tech_.setCurrentTime(i.end(0))
            }
            return this.hasPlayed_ = !0,
            this.load(),
            !0
        }
    },
    {
        key: "handleSourceOpen_",
        value: function() {
            try {
                this.setupSourceBuffers_()
            } catch(e) {
                return cs.log.warn("Failed to create Source Buffers", e),
                this.mediaSource.endOfStream("decode")
            }
            if (this.tech_.autoplay()) {
                var e = this.tech_.play();
                "undefined" != typeof e && "function" == typeof e.then && e.then(null,
                function(e) {})
            }
            this.trigger("sourceopen")
        }
    },
    {
        key: "onEndOfStream",
        value: function() {
            var e = this.mainSegmentLoader_.ended_;
            if (this.mediaTypes_.AUDIO.activePlaylistLoader && (e = !this.mainSegmentLoader_.startingMedia_ || this.mainSegmentLoader_.startingMedia_.containsVideo ? e && this.audioSegmentLoader_.ended_: this.audioSegmentLoader_.ended_), e) {
                this.logger_("calling mediaSource.endOfStream()");
                try {
                    this.mediaSource.endOfStream()
                } catch(e) {
                    cs.log.warn("Failed to call media source endOfStream", e)
                }
            }
        }
    },
    {
        key: "stuckAtPlaylistEnd_",
        value: function(e) {
            if (!this.seekable().length) return ! 1;
            var t = this.syncController_.getExpiredTime(e, this.mediaSource.duration);
            if (null === t) return ! 1;
            var i = Th.Playlist.playlistEnd(e, t),
            n = this.tech_.currentTime(),
            r = this.tech_.buffered();
            if (!r.length) return i - n <= .1;
            var s = r.end(r.length - 1);
            return s - n <= .1 && i - s <= .1
        }
    },
    {
        key: "blacklistCurrentPlaylist",
        value: function(e, t) {
            var i, n = 0 < arguments.length && void 0 !== e ? e: {},
            r = t,
            s = void 0;
            if (s = n.playlist || this.masterPlaylistLoader_.media(), r = r || n.blacklistDuration || this.blacklistDuration, !s) {
                this.error = n;
                try {
                    return this.mediaSource.endOfStream("network")
                } catch(e) {
                    return this.trigger("error")
                }
            }
            var a = 1 === this.masterPlaylistLoader_.master.playlists.filter(Il).length,
            o = this.masterPlaylistLoader_.master.playlists;
            return 1 === o.length ? (cs.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the only playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(a)) : (a && (cs.log.warn("Removing all playlists from the blacklist because the last rendition is about to be blacklisted."), o.forEach(function(e) {
                e.excludeUntil !== 1 / 0 && delete e.excludeUntil
            }), this.tech_.trigger("retryplaylist")), s.excludeUntil = Date.now() + 1e3 * r, this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({
                type: "usage",
                name: "hls-rendition-blacklisted"
            }), i = this.selectPlaylist(), cs.log.warn("Problem encountered with the current HLS playlist." + (n.message ? " " + n.message: "") + " Switching to another playlist."), this.masterPlaylistLoader_.media(i, a))
        }
    },
    {
        key: "pauseLoading",
        value: function() {
            this.mainSegmentLoader_.pause(),
            this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(),
            this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
        }
    },
    {
        key: "setCurrentTime",
        value: function(e) {
            var t = ql(this.tech_.buffered(), e);
            return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? t && t.length ? e: (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load()) : 0
        }
    },
    {
        key: "duration",
        value: function() {
            return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration: Th.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
        }
    },
    {
        key: "seekable",
        value: function() {
            return this.seekable_
        }
    },
    {
        key: "onSyncInfoUpdate_",
        value: function() {
            var e = void 0;
            if (this.masterPlaylistLoader_) {
                var t = this.masterPlaylistLoader_.media();
                if (t) {
                    var i = this.syncController_.getExpiredTime(t, this.mediaSource.duration);
                    if (null !== i) {
                        var n = this.masterPlaylistLoader_.master.suggestedPresentationDelay,
                        r = Th.Playlist.seekable(t, i, n);
                        if (0 !== r.length) {
                            if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                if (t = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (i = this.syncController_.getExpiredTime(t, this.mediaSource.duration))) return;
                                if (0 === (e = Th.Playlist.seekable(t, i, n)).length) return
                            }
                            var s = void 0,
                            a = void 0;
                            this.seekable_ && this.seekable_.length && (s = this.seekable_.end(0), a = this.seekable_.start(0)),
                            e ? e.start(0) > r.end(0) || r.start(0) > e.end(0) ? this.seekable_ = r: this.seekable_ = cs.createTimeRanges([[e.start(0) > r.start(0) ? e.start(0) : r.start(0), e.end(0) < r.end(0) ? e.end(0) : r.end(0)]]) : this.seekable_ = r,
                            this.seekable_ && this.seekable_.length && this.seekable_.end(0) === s && this.seekable_.start(0) === a || (this.logger_("seekable updated [" + zl(this.seekable_) + "]"), this.tech_.trigger("seekablechanged"))
                        }
                    }
                }
            }
        }
    },
    {
        key: "updateDuration",
        value: function() {
            function e() {
                t.logger_("Setting duration from " + t.mediaSource.duration + " => " + n);
                try {
                    t.mediaSource.duration = n
                } catch(e) {
                    cs.log.warn("Failed to set media source duration", e)
                }
                t.tech_.trigger("durationchange"),
                t.mediaSource.removeEventListener("sourceopen", e)
            }
            var t = this,
            i = this.mediaSource.duration,
            n = Th.Playlist.duration(this.masterPlaylistLoader_.media()),
            r = this.tech_.buffered();
            0 < r.length && (n = Math.max(n, r.end(r.length - 1))),
            i !== n && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", e) : e())
        }
    },
    {
        key: "dispose",
        value: function() {
            var n = this;
            this.trigger("dispose"),
            this.decrypter_ && this.decrypter_.terminate(),
            this.masterPlaylistLoader_.dispose(),
            this.mainSegmentLoader_.dispose(),
            ["AUDIO", "SUBTITLES"].forEach(function(e) {
                var t = n.mediaTypes_[e].groups;
                for (var i in t) t[i].forEach(function(e) {
                    e.playlistLoader && e.playlistLoader.dispose()
                })
            }),
            this.audioSegmentLoader_.dispose(),
            this.subtitleSegmentLoader_.dispose(),
            this.off(),
            this.mediaSource.dispose && this.mediaSource.dispose()
        }
    },
    {
        key: "master",
        value: function() {
            return this.masterPlaylistLoader_.master
        }
    },
    {
        key: "media",
        value: function() {
            return this.masterPlaylistLoader_.media() || this.initialMedia_
        }
    },
    {
        key: "setupSourceBuffers_",
        value: function() {
            var e, t = this.masterPlaylistLoader_.media();
            if (t && "open" === this.mediaSource.readyState) {
                if ((e = vc(this.masterPlaylistLoader_.master, t)).length < 1) return this.error = "No compatible SourceBuffer configuration for the variant stream:" + t.resolvedUri,
                this.mediaSource.endOfStream("decode");
                this.configureLoaderMimeTypes_(e),
                this.excludeIncompatibleVariants_(t)
            }
        }
    },
    {
        key: "configureLoaderMimeTypes_",
        value: function(e) {
            var t = 1 < e.length && -1 === e[0].indexOf(",") && e[0] !== e[1] ? new cs.EventTarget: null;
            this.mainSegmentLoader_.mimeType(e[0], t),
            e[1] && this.audioSegmentLoader_.mimeType(e[1], t)
        }
    },
    {
        key: "excludeUnsupportedVariants_",
        value: function() {
            this.master().playlists.forEach(function(e) {
                e.attributes.CODECS && y.MediaSource && y.MediaSource.isTypeSupported && !y.MediaSource.isTypeSupported('video/mp4; codecs="' +
                function(e) {
                    return e.replace(/avc1\.(\d+)\.(\d+)/i,
                    function(e) {
                        return fc([e])[0]
                    })
                } (e.attributes.CODECS) + '"') && (e.excludeUntil = 1 / 0)
            })
        }
    },
    {
        key: "excludeIncompatibleVariants_",
        value: function(e) {
            var i = 2,
            n = null,
            t = void 0;
            e.attributes.CODECS && (t = mc(e.attributes.CODECS), n = t.videoCodec, i = t.codecCount),
            this.master().playlists.forEach(function(e) {
                var t = {
                    codecCount: 2,
                    videoCodec: null
                };
                e.attributes.CODECS && (t = mc(e.attributes.CODECS)),
                t.codecCount !== i && (e.excludeUntil = 1 / 0),
                t.videoCodec !== n && (e.excludeUntil = 1 / 0)
            })
        }
    },
    {
        key: "updateAdCues_",
        value: function(e) {
            var t = 0,
            i = this.seekable();
            i.length && (t = i.start(0)),
            function(e, t, i) {
                var n = 2 < arguments.length && void 0 !== i ? i: 0;
                if (e.segments) for (var r = n,
                s = void 0,
                a = 0; a < e.segments.length; a++) {
                    var o = e.segments[a];
                    if (s = s || uh(t, r + o.duration / 2)) {
                        if ("cueIn" in o) {
                            s.endTime = r,
                            s.adEndTime = r,
                            r += o.duration,
                            s = null;
                            continue
                        }
                        if (r < s.endTime) {
                            r += o.duration;
                            continue
                        }
                        s.endTime += o.duration
                    } else if ("cueOut" in o && ((s = new y.VTTCue(r, r + o.duration, o.cueOut)).adStartTime = r, s.adEndTime = r + parseFloat(o.cueOut), t.addCue(s)), "cueOutCont" in o) {
                        var u, l, c = o.cueOutCont.split("/").map(parseFloat),
                        h = ml(c, 2);
                        u = h[0],
                        l = h[1],
                        (s = new y.VTTCue(r, r + o.duration, "")).adStartTime = r - u,
                        s.adEndTime = s.adStartTime + l,
                        t.addCue(s)
                    }
                    r += o.duration
                }
            } (e, this.cueTagsTrack_, t)
        }
    },
    {
        key: "goalBufferLength",
        value: function() {
            var e = this.tech_.currentTime(),
            t = Jc.GOAL_BUFFER_LENGTH,
            i = Jc.GOAL_BUFFER_LENGTH_RATE,
            n = Math.max(t, Jc.MAX_GOAL_BUFFER_LENGTH);
            return Math.min(t + e * i, n)
        }
    },
    {
        key: "bufferLowWaterLine",
        value: function() {
            var e = this.tech_.currentTime(),
            t = Jc.BUFFER_LOW_WATER_LINE,
            i = Jc.BUFFER_LOW_WATER_LINE_RATE,
            n = Math.max(t, Jc.MAX_BUFFER_LOW_WATER_LINE);
            return Math.min(t + e * i, n)
        }
    }]), Ch);
    function Ch(e) {
        el(this, Ch);
        var t = ul(this, (Ch.__proto__ || Object.getPrototypeOf(Ch)).call(this)),
        i = e.url,
        n = e.handleManifestRedirects,
        r = e.withCredentials,
        s = e.tech,
        a = e.bandwidth,
        o = e.externHls,
        u = e.useCueTags,
        l = e.blacklistDuration,
        c = e.enableLowInitialPlaylist,
        h = e.cacheEncryptionKeys,
        d = e.sourceType;
        if (!i) throw new Error("A non-empty playlist URL is required");
        Th = o,
        t.withCredentials = r,
        t.tech_ = s,
        t.hls_ = s.hls,
        t.sourceType_ = d,
        t.useCueTags_ = u,
        t.blacklistDuration = l,
        t.enableLowInitialPlaylist = c,
        t.useCueTags_ && (t.cueTagsTrack_ = t.tech_.addTextTrack("metadata", "ad-cues"), t.cueTagsTrack_.inBandMetadataTrackDispatchType = ""),
        t.requestOptions_ = {
            withCredentials: r,
            handleManifestRedirects: n,
            timeout: null
        },
        t.mediaTypes_ = function() {
            var t = {};
            return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(e) {
                t[e] = {
                    groups: {},
                    tracks: {},
                    activePlaylistLoader: null,
                    activeGroup: Fc,
                    activeTrack: Fc,
                    onGroupChanged: Fc,
                    onTrackChanged: Fc
                }
            }),
            t
        } (),
        t.mediaSource = new cs.MediaSource,
        t.mediaSource.addEventListener("sourceopen", t.handleSourceOpen_.bind(t)),
        t.seekable_ = cs.createTimeRanges(),
        t.hasPlayed_ = !1,
        t.syncController_ = new hh(e),
        t.segmentMetadataTrack_ = s.addRemoteTextTrack({
            kind: "metadata",
            label: "segment-metadata"
        },
        !1).track,
        t.decrypter_ = new gh,
        t.inbandTextTracks_ = {};
        var p = {
            hls: t.hls_,
            mediaSource: t.mediaSource,
            currentTime: t.tech_.currentTime.bind(t.tech_),
            seekable: function() {
                return t.seekable()
            },
            seeking: function() {
                return t.tech_.seeking()
            },
            duration: function() {
                return t.mediaSource.duration
            },
            hasPlayed: function() {
                return t.hasPlayed_
            },
            goalBufferLength: function() {
                return t.goalBufferLength()
            },
            bandwidth: a,
            syncController: t.syncController_,
            decrypter: t.decrypter_,
            sourceType: t.sourceType_,
            inbandTextTracks: t.inbandTextTracks_,
            cacheEncryptionKeys: h
        };
        return t.masterPlaylistLoader_ = "dash" === t.sourceType_ ? new Mc(i, t.hls_, t.requestOptions_) : new yl(i, t.hls_, t.requestOptions_),
        t.setupMasterPlaylistLoaderListeners_(),
        t.mainSegmentLoader_ = new ih(cs.mergeOptions(p, {
            segmentMetadataTrack: t.segmentMetadataTrack_,
            loaderType: "main"
        }), e),
        t.audioSegmentLoader_ = new ih(cs.mergeOptions(p, {
            loaderType: "audio"
        }), e),
        t.subtitleSegmentLoader_ = new ah(cs.mergeOptions(p, {
            loaderType: "vtt",
            featuresNativeTextTracks: t.tech_.featuresNativeTextTracks
        }), e),
        t.setupSegmentLoaderListeners_(),
        Sh.forEach(function(e) {
            t[e + "_"] = function(e) {
                return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
            }.bind(t, e)
        }),
        t.logger_ = jc("MPC"),
        t.masterPlaylistLoader_.load(),
        t
    }
    function Eh(e, t, i) {
        el(this, Eh);
        var n = e.masterPlaylistController_,
        r = n[(e.options_.smoothQualityChange ? "smooth": "fast") + "QualityChange_"].bind(n);
        if (t.attributes.RESOLUTION) {
            var s = t.attributes.RESOLUTION;
            this.width = s.width,
            this.height = s.height
        }
        this.bandwidth = t.attributes.BANDWIDTH,
        this.id = i,
        this.enabled = function(r, s, a) {
            return function(e) {
                var t = r.master.playlists[s],
                i = Al(t),
                n = Il(t);
                return "undefined" == typeof e ? n: (e ? delete t.disabled: t.disabled = !0, e === n || i || (a(), e ? r.trigger("renditionenabled") : r.trigger("renditiondisabled")), e)
            }
        } (e.playlists, t.id, r)
    }
    var wh = ["seeking", "seeked", "pause", "playing", "error"],
    xh = (sl(Ah, [{
        key: "monitorCurrentTime_",
        value: function() {
            this.checkCurrentTime_(),
            this.checkCurrentTimeTimeout_ && y.clearTimeout(this.checkCurrentTimeTimeout_),
            this.checkCurrentTimeTimeout_ = y.setTimeout(this.monitorCurrentTime_.bind(this), 250)
        }
    },
    {
        key: "checkCurrentTime_",
        value: function() {
            if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0,
            void(this.lastRecordedTime = this.tech_.currentTime());
            if (!this.tech_.paused() && !this.tech_.seeking()) {
                var e = this.tech_.currentTime(),
                t = this.tech_.buffered();
                if (this.lastRecordedTime === e && (!t.length || e + .1 >= t.end(t.length - 1))) return this.techWaiting_();
                5 <= this.consecutiveUpdates && e === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++:(this.consecutiveUpdates = 0, this.lastRecordedTime = e)
            }
        }
    },
    {
        key: "cancelTimer_",
        value: function() {
            this.consecutiveUpdates = 0,
            this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)),
            this.timer_ = null
        }
    },
    {
        key: "fixesBadSeeks_",
        value: function() {
            if (!this.tech_.seeking()) return ! 1;
            var e = this.seekable(),
            t = this.tech_.currentTime(),
            i = void 0;
            return this.afterSeekableWindow_(e, t, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (i = e.end(e.length - 1)),
            this.beforeSeekableWindow_(e, t) && (i = e.start(0) + .1),
            "undefined" != typeof i && (this.logger_("Trying to seek outside of seekable at time " + t + " with seekable range " + zl(e) + ". Seeking to " + i + "."), this.tech_.setCurrentTime(i), !0)
        }
    },
    {
        key: "waiting_",
        value: function() {
            if (!this.techWaiting_()) {
                var e = this.tech_.currentTime(),
                t = this.tech_.buffered(),
                i = ql(t, e);
                return i.length && e + 3 <= i.end(0) ? (this.cancelTimer_(), this.tech_.setCurrentTime(e), this.logger_("Stopped at " + e + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."), void this.tech_.trigger({
                    type: "usage",
                    name: "hls-unknown-waiting"
                })) : void 0
            }
        }
    },
    {
        key: "techWaiting_",
        value: function() {
            var e = this.seekable(),
            t = this.tech_.currentTime();
            if (this.tech_.seeking() && this.fixesBadSeeks_()) return ! 0;
            if (this.tech_.seeking() || null !== this.timer_) return ! 0;
            if (this.beforeSeekableWindow_(e, t)) {
                var i = e.end(e.length - 1);
                return this.logger_("Fell out of live window at time " + t + ". Seeking to live point (seekable end) " + i),
                this.cancelTimer_(),
                this.tech_.setCurrentTime(i),
                this.tech_.trigger({
                    type: "usage",
                    name: "hls-live-resync"
                }),
                !0
            }
            var n = this.tech_.buffered(),
            r = Wl(n, t);
            if (this.videoUnderflow_(r, n, t)) return this.cancelTimer_(),
            this.tech_.setCurrentTime(t),
            this.tech_.trigger({
                type: "usage",
                name: "hls-video-underflow"
            }),
            !0;
            if (0 < r.length) {
                var s = r.start(0) - t;
                return this.logger_("Stopped at " + t + ", setting timer for " + s + ", seeking to " + r.start(0)),
                this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * s, t),
                !0
            }
            return ! 1
        }
    },
    {
        key: "afterSeekableWindow_",
        value: function(e, t, i, n) {
            var r = 3 < arguments.length && void 0 !== n && n;
            if (!e.length) return ! 1;
            var s = e.end(e.length - 1) + .1;
            return ! i.endList && r && (s = e.end(e.length - 1) + 3 * i.targetDuration),
            s < t
        }
    },
    {
        key: "beforeSeekableWindow_",
        value: function(e, t) {
            return !! (e.length && 0 < e.start(0) && t < e.start(0) - .1)
        }
    },
    {
        key: "videoUnderflow_",
        value: function(e, t, i) {
            if (0 === e.length) {
                var n = this.gapFromVideoUnderflow_(t, i);
                if (n) return this.logger_("Encountered a gap in video from " + n.start + " to " + n.end + ". Seeking to current time " + i),
                !0
            }
            return ! 1
        }
    },
    {
        key: "skipTheGap_",
        value: function(e) {
            var t = this.tech_.buffered(),
            i = this.tech_.currentTime(),
            n = Wl(t, i);
            this.cancelTimer_(),
            0 !== n.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", n.start(0)), this.tech_.setCurrentTime(n.start(0) + 1 / 30), this.tech_.trigger({
                type: "usage",
                name: "hls-gap-skip"
            }))
        }
    },
    {
        key: "gapFromVideoUnderflow_",
        value: function(e, t) {
            for (var i = function(e) {
                if (e.length < 2) return cs.createTimeRanges();
                for (var t = [], i = 1; i < e.length; i++) {
                    var n = e.end(i - 1),
                    r = e.start(i);
                    t.push([n, r])
                }
                return cs.createTimeRanges(t)
            } (e), n = 0; n < i.length; n++) {
                var r = i.start(n),
                s = i.end(n);
                if (t - r < 4 && 2 < t - r) return {
                    start: r,
                    end: s
                }
            }
            return null
        }
    }]), Ah);
    function Ah(e) {
        var t = this;
        el(this, Ah),
        this.tech_ = e.tech,
        this.seekable = e.seekable,
        this.allowSeeksWithinUnsafeLiveWindow = e.allowSeeksWithinUnsafeLiveWindow,
        this.media = e.media,
        this.consecutiveUpdates = 0,
        this.lastRecordedTime = null,
        this.timer_ = null,
        this.checkCurrentTimeTimeout_ = null,
        this.logger_ = jc("PlaybackWatcher"),
        this.logger_("initialize");
        function i() {
            return t.monitorCurrentTime_()
        }
        function n() {
            return t.techWaiting_()
        }
        function r() {
            return t.cancelTimer_()
        }
        function s() {
            return t.fixesBadSeeks_()
        }
        this.tech_.on("seekablechanged", s),
        this.tech_.on("waiting", n),
        this.tech_.on(wh, r),
        this.tech_.on("canplay", i),
        this.dispose = function() {
            t.logger_("dispose"),
            t.tech_.off("seekablechanged", s),
            t.tech_.off("waiting", n),
            t.tech_.off(wh, r),
            t.tech_.off("canplay", i),
            t.checkCurrentTimeTimeout_ && y.clearTimeout(t.checkCurrentTimeTimeout_),
            t.cancelTimer_()
        }
    }
    function Ih(e) { !
        function t(i, e) {
            var n = 0,
            r = 0,
            s = cs.mergeOptions(Ph, e);
            i.ready(function() {
                i.trigger({
                    type: "usage",
                    name: "hls-error-reload-initialized"
                })
            });
            function a() {
                r && i.currentTime(r)
            }
            function o(e) {
                null != e && (r = i.duration() !== 1 / 0 && i.currentTime() || 0, i.one("loadedmetadata", a), i.src(e), i.trigger({
                    type: "usage",
                    name: "hls-error-reload"
                }), i.play())
            }
            function u() {
                if (Date.now() - n < 1e3 * s.errorInterval) i.trigger({
                    type: "usage",
                    name: "hls-error-reload-canceled"
                });
                else {
                    if (s.getSource && "function" == typeof s.getSource) return n = Date.now(),
                    s.getSource.call(i, o);
                    cs.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
                }
            }
            function l() {
                i.off("loadedmetadata", a),
                i.off("error", u),
                i.off("dispose", l)
            }
            i.on("error", u),
            i.on("dispose", l),
            i.reloadSourceOnError = function(e) {
                l(),
                t(i, e)
            }
        } (this, e)
    }
    var Ph = {
        errorInterval: 30,
        getSource: function(e) {
            return e(this.tech({
                IWillNotUseThisInPlugins: !0
            }).currentSource_)
        }
    },
    Lh = {
        PlaylistLoader: yl,
        Playlist: Zl,
        Decrypter: rl,
        AsyncStream: nl,
        decrypt: Qu,
        utils: ic,
        STANDARD_PLAYLIST_SELECTOR: function() {
            var e = this.useDevicePixelRatio && y.devicePixelRatio || 1;
            return function(e, t, i, n, r) {
                var s = e.playlists.map(function(e) {
                    var t, i;
                    return t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width,
                    i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height,
                    {
                        bandwidth: e.attributes.BANDWIDTH || y.Number.MAX_VALUE,
                        width: t,
                        height: i,
                        playlist: e
                    }
                });
                Yc(s,
                function(e, t) {
                    return e.bandwidth - t.bandwidth
                });
                var a = (s = s.filter(function(e) {
                    return ! Zl.isIncompatible(e.playlist)
                })).filter(function(e) {
                    return Zl.isEnabled(e.playlist)
                });
                a.length || (a = s.filter(function(e) {
                    return ! Zl.isDisabled(e.playlist)
                }));
                var o = a.filter(function(e) {
                    return e.bandwidth * Jc.BANDWIDTH_VARIANCE < t
                }),
                u = o[o.length - 1],
                l = o.filter(function(e) {
                    return e.bandwidth === u.bandwidth
                })[0];
                if (!1 === r) {
                    var c = l || a[0] || s[0];
                    return c ? c.playlist: null
                }
                var h = o.filter(function(e) {
                    return e.width && e.height
                });
                Yc(h,
                function(e, t) {
                    return e.width - t.width
                });
                var d = h.filter(function(e) {
                    return e.width === i && e.height === n
                });
                u = d[d.length - 1];
                var p = d.filter(function(e) {
                    return e.bandwidth === u.bandwidth
                })[0],
                f = void 0,
                m = void 0,
                g = void 0;
                p || (m = (f = h.filter(function(e) {
                    return e.width > i || e.height > n
                })).filter(function(e) {
                    return e.width === f[0].width && e.height === f[0].height
                }), u = m[m.length - 1], g = m.filter(function(e) {
                    return e.bandwidth === u.bandwidth
                })[0]);
                var v = g || p || l || a[0] || s[0];
                return v ? v.playlist: null
            } (this.playlists.master, this.systemBandwidth, parseInt(Kc(this.tech_.el(), "width"), 10) * e, parseInt(Kc(this.tech_.el(), "height"), 10) * e, this.limitRenditionByPlayerDimensions)
        },
        INITIAL_PLAYLIST_SELECTOR: function() {
            var e = this.playlists.master.playlists.filter(Zl.isEnabled);
            return Yc(e,
            function(e, t) {
                return $c(e, t)
            }),
            e.filter(function(e) {
                return mc(e.attributes.CODECS).videoCodec
            })[0] || null
        },
        comparePlaylistBandwidth: $c,
        comparePlaylistResolution: function(e, t) {
            var i = void 0,
            n = void 0;
            return e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width),
            i = i || y.Number.MAX_VALUE,
            t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (n = t.attributes.RESOLUTION.width),
            i === (n = n || y.Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH: i - n
        },
        xhr: Ol()
    }; ["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function(t) {
        Object.defineProperty(Lh, t, {
            get: function() {
                return cs.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"),
                Jc[t]
            },
            set: function(e) {
                cs.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"),
                "number" != typeof e || e < 0 ? cs.log.warn("value of Hls." + t + " must be greater than or equal to 0") : Jc[t] = e
            }
        })
    });
    function Oh(e) {
        return /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(e) ? "hls": /^application\/dash\+xml/i.test(e) ? "dash": null
    }
    function Dh(e, t) {
        for (var i = t.media(), n = -1, r = 0; r < e.length; r++) if (e[r].id === i.id) {
            n = r;
            break
        }
        e.selectedIndex_ = n,
        e.trigger({
            selectedIndex: n,
            type: "change"
        })
    }
    var Nh = "videojs-vhs";
    Lh.canPlaySource = function() {
        return cs.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    };
    function Rh(e) {
        var t = e.masterPlaylistController_.mainSegmentLoader_,
        i = e.masterPlaylistController_.audioSegmentLoader_,
        n = cs.players[e.tech_.options_.playerId];
        if (n.eme) {
            var r = function(e, t, i) {
                if (!e) return e;
                var n = void 0,
                r = void 0;
                if (i.mimeType_) n = t.mimeType_,
                r = i.mimeType_;
                else {
                    var s = yc(t.mimeType_),
                    a = s.parameters.codecs.split(","),
                    o = void 0,
                    u = void 0;
                    a.forEach(function(e) {
                        e = e.trim(),
                        _c(e) ? o = e: bc(e) && (u = e)
                    }),
                    n = s.type + '; codecs="' + u + '"',
                    r = s.type.replace("video", "audio") + '; codecs="' + o + '"'
                }
                var l = {},
                c = t.playlist_;
                for (var h in e) l[h] = {
                    audioContentType: r,
                    videoContentType: n
                },
                c.contentProtection && c.contentProtection[h] && c.contentProtection[h].pssh && (l[h].pssh = c.contentProtection[h].pssh),
                "string" == typeof e[h] && (l[h].url = e[h]);
                return cs.mergeOptions(e, l)
            } (e.source_.keySystems, t, i);
            r && (n.currentSource().keySystems = r, 11 !== cs.browser.IE_VERSION && n.eme.initializeMediaKeys && n.eme.initializeMediaKeys())
        }
    }
    function Uh() {
        if (!window.localStorage) return null;
        var e = window.localStorage.getItem(Nh);
        if (!e) return null;
        try {
            return JSON.parse(e)
        } catch(e) {
            return null
        }
    }
    Lh.supportsNativeHls = function() {
        var t = h.createElement("video");
        if (!cs.getTech("Html5").isSupported()) return ! 1;
        return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function(e) {
            return /maybe|probably/i.test(t.canPlayType(e))
        })
    } (),
    Lh.supportsNativeDash = !!cs.getTech("Html5").isSupported() && /maybe|probably/i.test(h.createElement("video").canPlayType("application/dash+xml")),
    Lh.supportsTypeNatively = function(e) {
        return "hls" === e ? Lh.supportsNativeHls: "dash" === e && Lh.supportsNativeDash
    },
    Lh.isSupported = function() {
        return cs.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    };
    var Mh = cs.getComponent("Component"),
    Bh = (ol(jh, Mh), sl(jh, [{
        key: "setOptions_",
        value: function() {
            var t = this;
            if (this.options_.withCredentials = this.options_.withCredentials || !1, this.options_.handleManifestRedirects = this.options_.handleManifestRedirects || !1, this.options_.limitRenditionByPlayerDimensions = !1 !== this.options_.limitRenditionByPlayerDimensions, this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || !1, this.options_.smoothQualityChange = this.options_.smoothQualityChange || !1, this.options_.useBandwidthFromLocalStorage = "undefined" != typeof this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage: this.options_.useBandwidthFromLocalStorage || !1, this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1, "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), "number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage) {
                var e = Uh();
                e && e.bandwidth && (this.options_.bandwidth = e.bandwidth, this.tech_.trigger({
                    type: "usage",
                    name: "hls-bandwidth-from-local-storage"
                })),
                e && e.throughput && (this.options_.throughput = e.throughput, this.tech_.trigger({
                    type: "usage",
                    name: "hls-throughput-from-local-storage"
                }))
            }
            "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = Jc.INITIAL_BANDWIDTH),
            this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === Jc.INITIAL_BANDWIDTH,
            ["withCredentials", "useDevicePixelRatio", "limitRenditionByPlayerDimensions", "bandwidth", "smoothQualityChange", "customTagParsers", "customTagMappers", "handleManifestRedirects", "cacheEncryptionKeys"].forEach(function(e) {
                "undefined" != typeof t.source_[e] && (t.options_[e] = t.source_[e])
            }),
            this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions,
            this.useDevicePixelRatio = this.options_.useDevicePixelRatio
        }
    },
    {
        key: "src",
        value: function(e, t) {
            var i = this;
            e && (this.setOptions_(), this.options_.url = this.source_.src, this.options_.tech = this.tech_, this.options_.externHls = Lh, this.options_.sourceType = Oh(t), this.options_.seekTo = function(e) {
                i.tech_.setCurrentTime(e)
            },
            this.masterPlaylistController_ = new kh(this.options_), this.playbackWatcher_ = new xh(cs.mergeOptions(this.options_, {
                seekable: function() {
                    return i.seekable()
                },
                media: function() {
                    return i.masterPlaylistController_.media()
                }
            })), this.masterPlaylistController_.on("error",
            function() {
                cs.players[i.tech_.options_.playerId].error(i.masterPlaylistController_.error)
            }), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : Lh.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = Lh.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
                selectPlaylist: {
                    get: function() {
                        return this.masterPlaylistController_.selectPlaylist
                    },
                    set: function(e) {
                        this.masterPlaylistController_.selectPlaylist = e.bind(this)
                    }
                },
                throughput: {
                    get: function() {
                        return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                    },
                    set: function(e) {
                        this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e,
                        this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
                    }
                },
                bandwidth: {
                    get: function() {
                        return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
                    },
                    set: function(e) {
                        this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e,
                        this.masterPlaylistController_.mainSegmentLoader_.throughput = {
                            rate: 0,
                            count: 0
                        }
                    }
                },
                systemBandwidth: {
                    get: function() {
                        var e = 1 / (this.bandwidth || 1),
                        t = void 0;
                        return t = 0 < this.throughput ? 1 / this.throughput: 0,
                        Math.floor(1 / (e + t))
                    },
                    set: function() {
                        cs.log.error('The "systemBandwidth" property is read-only')
                    }
                }
            }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, {
                bandwidth: {
                    get: function() {
                        return i.bandwidth || 0
                    },
                    enumerable: !0
                },
                mediaRequests: {
                    get: function() {
                        return i.masterPlaylistController_.mediaRequests_() || 0
                    },
                    enumerable: !0
                },
                mediaRequestsAborted: {
                    get: function() {
                        return i.masterPlaylistController_.mediaRequestsAborted_() || 0
                    },
                    enumerable: !0
                },
                mediaRequestsTimedout: {
                    get: function() {
                        return i.masterPlaylistController_.mediaRequestsTimedout_() || 0
                    },
                    enumerable: !0
                },
                mediaRequestsErrored: {
                    get: function() {
                        return i.masterPlaylistController_.mediaRequestsErrored_() || 0
                    },
                    enumerable: !0
                },
                mediaTransferDuration: {
                    get: function() {
                        return i.masterPlaylistController_.mediaTransferDuration_() || 0
                    },
                    enumerable: !0
                },
                mediaBytesTransferred: {
                    get: function() {
                        return i.masterPlaylistController_.mediaBytesTransferred_() || 0
                    },
                    enumerable: !0
                },
                mediaSecondsLoaded: {
                    get: function() {
                        return i.masterPlaylistController_.mediaSecondsLoaded_() || 0
                    },
                    enumerable: !0
                },
                buffered: {
                    get: function() {
                        return Gl(i.tech_.buffered())
                    },
                    enumerable: !0
                },
                currentTime: {
                    get: function() {
                        return i.tech_.currentTime()
                    },
                    enumerable: !0
                },
                currentSource: {
                    get: function() {
                        return i.tech_.currentSource_
                    },
                    enumerable: !0
                },
                currentTech: {
                    get: function() {
                        return i.tech_.name_
                    },
                    enumerable: !0
                },
                duration: {
                    get: function() {
                        return i.tech_.duration()
                    },
                    enumerable: !0
                },
                master: {
                    get: function() {
                        return i.playlists.master
                    },
                    enumerable: !0
                },
                playerDimensions: {
                    get: function() {
                        return i.tech_.currentDimensions()
                    },
                    enumerable: !0
                },
                seekable: {
                    get: function() {
                        return Gl(i.tech_.seekable())
                    },
                    enumerable: !0
                },
                timestamp: {
                    get: function() {
                        return Date.now()
                    },
                    enumerable: !0
                },
                videoPlaybackQuality: {
                    get: function() {
                        return i.tech_.getVideoPlaybackQuality()
                    },
                    enumerable: !0
                }
            }), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.tech_.on("bandwidthupdate",
            function() {
                i.options_.useBandwidthFromLocalStorage &&
                function(e) {
                    if (window.localStorage) {
                        var t = Uh();
                        t = t ? cs.mergeOptions(t, e) : e;
                        try {
                            window.localStorage.setItem(Nh, JSON.stringify(t))
                        } catch(e) {
                            return
                        }
                    }
                } ({
                    bandwidth: i.bandwidth,
                    throughput: Math.round(i.throughput)
                })
            }), this.masterPlaylistController_.on("selectedinitialmedia",
            function() { !
                function(i) {
                    var e = i.playlists;
                    i.representations = function() {
                        return e && e.master && e.master.playlists ? e.master.playlists.filter(function(e) {
                            return ! Al(e)
                        }).map(function(e, t) {
                            return new Eh(i, e, e.id)
                        }) : []
                    }
                } (i),
                Rh(i)
            }), this.on(this.masterPlaylistController_, "progress",
            function() {
                this.tech_.trigger("progress")
            }), this.on(this.masterPlaylistController_, "firstplay",
            function() {
                this.ignoreNextSeekingEvent_ = !0
            }), this.setupQualityLevels_(), this.tech_.el() && this.tech_.src(cs.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
        }
    },
    {
        key: "setupQualityLevels_",
        value: function() {
            var e = this,
            t = cs.players[this.tech_.options_.playerId];
            t && t.qualityLevels && !this.qualityLevels_ && (this.qualityLevels_ = t.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia",
            function() { !
                function(t, e) {
                    e.representations().forEach(function(e) {
                        t.addQualityLevel(e)
                    }),
                    Dh(t, e.playlists)
                } (e.qualityLevels_, e)
            }), this.playlists.on("mediachange",
            function() {
                Dh(e.qualityLevels_, e.playlists)
            }))
        }
    },
    {
        key: "play",
        value: function() {
            this.masterPlaylistController_.play()
        }
    },
    {
        key: "setCurrentTime",
        value: function(e) {
            this.masterPlaylistController_.setCurrentTime(e)
        }
    },
    {
        key: "duration",
        value: function() {
            return this.masterPlaylistController_.duration()
        }
    },
    {
        key: "seekable",
        value: function() {
            return this.masterPlaylistController_.seekable()
        }
    },
    {
        key: "dispose",
        value: function() {
            this.playbackWatcher_ && this.playbackWatcher_.dispose(),
            this.masterPlaylistController_ && this.masterPlaylistController_.dispose(),
            this.qualityLevels_ && this.qualityLevels_.dispose(),
            this.player_ && (delete this.player_.vhs, delete this.player_.dash, delete this.player_.hls),
            this.tech_ && this.tech_.hls && delete this.tech_.hls,
            function e(t, i, n) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === r) {
                    var s = Object.getPrototypeOf(t);
                    return null === s ? void 0 : e(s, i, n)
                }
                if ("value" in r) return r.value;
                var a = r.get;
                return void 0 !== a ? a.call(n) : void 0
            } (jh.prototype.__proto__ || Object.getPrototypeOf(jh.prototype), "dispose", this).call(this)
        }
    },
    {
        key: "convertToProgramTime",
        value: function(e, t) {
            return Fl({
                playlist: this.masterPlaylistController_.media(),
                time: e,
                callback: t
            })
        }
    },
    {
        key: "seekToProgramTime",
        value: function(e, t, i, n) {
            var r = !(2 < arguments.length && void 0 !== i) || i,
            s = 3 < arguments.length && void 0 !== n ? n: 2;
            return Hl({
                programTime: e,
                playlist: this.masterPlaylistController_.media(),
                retryCount: s,
                pauseAfterSeek: r,
                seekTo: this.options_.seekTo,
                tech: this.options_.tech,
                callback: t
            })
        }
    }]), jh);
    function jh(e, t, i) {
        el(this, jh);
        var n = ul(this, (jh.__proto__ || Object.getPrototypeOf(jh)).call(this, t, i.hls));
        if (t.options_ && t.options_.playerId) {
            var r = cs(t.options_.playerId);
            r.hasOwnProperty("hls") || Object.defineProperty(r, "hls", {
                get: function() {
                    return cs.log.warn("player.hls is deprecated. Use player.tech().hls instead."),
                    t.trigger({
                        type: "usage",
                        name: "hls-player-access"
                    }),
                    n
                },
                configurable: !0
            }),
            r.vhs = n,
            (r.dash = n).player_ = r
        }
        if (n.tech_ = t, n.source_ = e, n.stats = {},
        n.ignoreNextSeekingEvent_ = !1, n.setOptions_(), n.options_.overrideNative && t.overrideNativeAudioTracks && t.overrideNativeVideoTracks) t.overrideNativeAudioTracks(!0),
        t.overrideNativeVideoTracks(!0);
        else if (n.options_.overrideNative && (t.featuresNativeVideoTracks || t.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
        return n.on(h, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
        function(e) {
            var t = h.fullscreenElement || h.webkitFullscreenElement || h.mozFullScreenElement || h.msFullscreenElement;
            t && t.contains(n.tech_.el()) && n.masterPlaylistController_.smoothQualityChange_()
        }),
        n.on(n.tech_, "seeking",
        function() {
            this.ignoreNextSeekingEvent_ ? this.ignoreNextSeekingEvent_ = !1 : this.setCurrentTime(this.tech_.currentTime())
        }),
        n.on(n.tech_, "error",
        function() {
            this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
        }),
        n.on(n.tech_, "play", n.play),
        n
    }
    var Fh = {
        name: "videojs-http-streaming",
        VERSION: "1.13.4",
        canHandleSource: function(e, t) {
            var i = cs.mergeOptions(cs.options, 1 < arguments.length && void 0 !== t ? t: {});
            return Fh.canPlayType(e.type, i)
        },
        handleSource: function(e, t, i) {
            var n = cs.mergeOptions(cs.options, 2 < arguments.length && void 0 !== i ? i: {});
            return t.hls = new Bh(e, t, n),
            t.hls.xhr = Ol(),
            t.hls.src(e.src, e.type),
            t.hls
        },
        canPlayType: function(e, t) {
            var i = cs.mergeOptions(cs.options, 1 < arguments.length && void 0 !== t ? t: {}).hls.overrideNative,
            n = Oh(e);
            return n && (!Lh.supportsTypeNatively(n) || i) ? "maybe": ""
        }
    };
    return "undefined" != typeof cs.MediaSource && "undefined" != typeof cs.URL || (cs.MediaSource = Pc, cs.URL = Lc),
    Pc.supportsNativeMediaSources() && cs.getTech("Html5").registerSourceHandler(Fh, 0),
    cs.HlsHandler = Bh,
    cs.HlsSourceHandler = Fh,
    cs.Hls = Lh,
    cs.use || cs.registerComponent("Hls", Lh),
    cs.options.hls = cs.options.hls || {},
    cs.registerPlugin ? cs.registerPlugin("reloadSourceOnError", Ih) : cs.plugin("reloadSourceOnError", Ih),
    cs
});