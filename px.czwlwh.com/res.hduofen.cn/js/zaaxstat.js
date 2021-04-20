/*
 * zaaxstat.js v3.8.24.b
 * http://www.hduofen.com
 * 好多粉复制统计系统：专业服务竞价推广客户，可提供微信号复制统计，微信号管理，二维码轮播，落地页url无变化跳转,访客行为转化统计，ocpc平台数据条等更多专业功能,详情访问官网查看！
 *
 */
! function(t, e) {
    "function" == typeof define && define.amd ? define(function() {
        return e(t)
    }) : e(t)
}(window, function(t) {
    var e = function() {
        function D(t) {
            return null == t ? String(t) : S[j.call(t)] || "object"
        }

        function A(t) {
            return "function" == D(t)
        }

        function $(t) {
            return null != t && t == t.window
        }

        function F(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }

        function k(t) {
            return "object" == D(t)
        }

        function R(t) {
            return k(t) && !$(t) && Object.getPrototypeOf(t) == Object.prototype
        }

        function Z(t) {
            var e = !!t && "length" in t && t.length,
                n = i.type(t);
            return "function" != n && !$(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function _(t) {
            return a.call(t, function(t) {
                return null != t
            })
        }

        function z(t) {
            return t.length > 0 ? i.fn.concat.apply([], t) : t
        }

        function X(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function q(t) {
            return t in l ? l[t] : l[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }

        function H(t, e) {
            return "number" != typeof e || h[X(t)] ? e : e + "px"
        }

        function I(t) {
            var e, n;
            return c[t] || (e = f.createElement(t), f.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), c[t] = n), c[t]
        }

        function U(t) {
            return "children" in t ? u.call(t.children) : i.map(t.childNodes, function(t) {
                return 1 == t.nodeType ? t : void 0
            })
        }

        function V(t, e) {
            var n, i = t ? t.length : 0;
            for (n = 0; i > n; n++) this[n] = t[n];
            this.length = i, this.selector = e || ""
        }

        function Y(t, i, r) {
            for (n in i) r && (R(i[n]) || L(i[n])) ? (R(i[n]) && !R(t[n]) && (t[n] = {}), L(i[n]) && !L(t[n]) && (t[n] = []), Y(t[n], i[n], r)) : i[n] !== e && (t[n] = i[n])
        }

        function B(t, e) {
            return null == e ? i(t) : i(t).filter(e)
        }

        function J(t, e, n, i) {
            return A(e) ? e.call(t, n, i) : e
        }

        function W(t, e, n) {
            null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
        }

        function G(t, n) {
            var i = t.className || "",
                r = i && i.baseVal !== e;
            return n === e ? r ? i.baseVal : i : void(r ? i.baseVal = n : t.className = n)
        }

        function K(t) {
            try {
                return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? i.parseJSON(t) : t) : t
            } catch (e) {
                return t
            }
        }

        function Q(t, e) {
            e(t);
            for (var n = 0, i = t.childNodes.length; i > n; n++) Q(t.childNodes[n], e)
        }
        var e, n, i, r, N, P, o = [],
            s = o.concat,
            a = o.filter,
            u = o.slice,
            f = t.document,
            c = {},
            l = {},
            h = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            },
            p = /^\s*<(\w+|!)[^>]*>/,
            d = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            g = /^(?:body|html)$/i,
            y = /([A-Z])/g,
            v = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            x = ["after", "prepend", "before", "append"],
            b = f.createElement("table"),
            w = f.createElement("tr"),
            E = {
                tr: f.createElement("tbody"),
                tbody: b,
                thead: b,
                tfoot: b,
                td: w,
                th: w,
                "*": f.createElement("div")
            },
            T = /^[\w-]*$/,
            S = {},
            j = S.toString,
            C = {},
            O = f.createElement("div"),
            M = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            L = Array.isArray || function(t) {
                return t instanceof Array
            };
        return C.matches = function(t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n) return n.call(t, e);
            var i, r = t.parentNode,
                o = !r;
            return o && (r = O).appendChild(t), i = ~C.qsa(r, e).indexOf(t), o && O.removeChild(t), i
        }, N = function(t) {
            return t.replace(/-+(.)?/g, function(t, e) {
                return e ? e.toUpperCase() : ""
            })
        }, P = function(t) {
            return a.call(t, function(e, n) {
                return t.indexOf(e) == n
            })
        }, C.fragment = function(t, n, r) {
            var o, s, a;
            return d.test(t) && (o = i(f.createElement(RegExp.$1))), o || (t.replace && (t = t.replace(m, "<$1></$2>")), n === e && (n = p.test(t) && RegExp.$1), n in E || (n = "*"), a = E[n], a.innerHTML = "" + t, o = i.each(u.call(a.childNodes), function() {
                a.removeChild(this)
            })), R(r) && (s = i(o), i.each(r, function(t, e) {
                v.indexOf(t) > -1 ? s[t](e) : s.attr(t, e)
            })), o
        }, C.Z = function(t, e) {
            return new V(t, e)
        }, C.isZ = function(t) {
            return t instanceof C.Z
        }, C.init = function(t, n) {
            var r;
            if (!t) return C.Z();
            if ("string" == typeof t)
                if (t = t.trim(), "<" == t[0] && p.test(t)) r = C.fragment(t, RegExp.$1, n), t = null;
                else {
                    if (n !== e) return i(n).find(t);
                    r = C.qsa(f, t)
                }
            else {
                if (A(t)) return i(f).ready(t);
                if (C.isZ(t)) return t;
                if (L(t)) r = _(t);
                else if (k(t)) r = [t], t = null;
                else if (p.test(t)) r = C.fragment(t.trim(), RegExp.$1, n), t = null;
                else {
                    if (n !== e) return i(n).find(t);
                    r = C.qsa(f, t)
                }
            }
            return C.Z(r, t)
        }, i = function(t, e) {
            return C.init(t, e)
        }, i.extend = function(t) {
            var e, n = u.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
                Y(t, n, e)
            }), t
        }, C.qsa = function(t, e) {
            var n, i = "#" == e[0],
                r = !i && "." == e[0],
                o = i || r ? e.slice(1) : e,
                s = T.test(o);
            return t.getElementById && s && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : u.call(s && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
        }, i.contains = f.documentElement.contains ? function(t, e) {
            return t !== e && t.contains(e)
        } : function(t, e) {
            for (; e && (e = e.parentNode);)
                if (e === t) return !0;
            return !1
        }, i.type = D, i.isFunction = A, i.isWindow = $, i.isArray = L, i.isPlainObject = R, i.isEmptyObject = function(t) {
            var e;
            for (e in t) return !1;
            return !0
        }, i.isNumeric = function(t) {
            var e = Number(t),
                n = typeof t;
            return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
        }, i.inArray = function(t, e, n) {
            return o.indexOf.call(e, t, n)
        }, i.camelCase = N, i.trim = function(t) {
            return null == t ? "" : String.prototype.trim.call(t)
        }, i.uuid = 0, i.support = {}, i.expr = {}, i.noop = function() {}, i.map = function(t, e) {
            var n, r, o, i = [];
            if (Z(t))
                for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n);
            else
                for (o in t) n = e(t[o], o), null != n && i.push(n);
            return z(i)
        }, i.each = function(t, e) {
            var n, i;
            if (Z(t)) {
                for (n = 0; n < t.length; n++)
                    if (e.call(t[n], n, t[n]) === !1) return t
            } else
                for (i in t)
                    if (e.call(t[i], i, t[i]) === !1) return t;
            return t
        }, i.grep = function(t, e) {
            return a.call(t, e)
        }, t.JSON && (i.parseJSON = JSON.parse), i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            S["[object " + e + "]"] = e.toLowerCase()
        }), i.fn = {
            constructor: C.Z,
            length: 0,
            forEach: o.forEach,
            reduce: o.reduce,
            push: o.push,
            sort: o.sort,
            splice: o.splice,
            indexOf: o.indexOf,
            concat: function() {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = C.isZ(e) ? e.toArray() : e;
                return s.apply(C.isZ(this) ? this.toArray() : this, n)
            },
            map: function(t) {
                return i(i.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return i(u.apply(this, arguments))
            },
            ready: function(e) {
                if ("complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll) setTimeout(function() {
                    e(i)
                }, 0);
                else {
                    var n = function() {
                        f.removeEventListener("DOMContentLoaded", n, !1), t.removeEventListener("load", n, !1), e(i)
                    };
                    f.addEventListener("DOMContentLoaded", n, !1), t.addEventListener("load", n, !1)
                }
                return this
            },
            get: function(t) {
                return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(t) {
                return o.every.call(this, function(e, n) {
                    return t.call(e, n, e) !== !1
                }), this
            },
            filter: function(t) {
                return A(t) ? this.not(this.not(t)) : i(a.call(this, function(e) {
                    return C.matches(e, t)
                }))
            },
            add: function(t, e) {
                return i(P(this.concat(i(t, e))))
            },
            is: function(t) {
                return "string" == typeof t ? this.length > 0 && C.matches(this[0], t) : t && this.selector == t.selector
            },
            not: function(t) {
                var n = [];
                if (A(t) && t.call !== e) this.each(function(e) {
                    t.call(this, e) || n.push(this)
                });
                else {
                    var r = "string" == typeof t ? this.filter(t) : Z(t) && A(t.item) ? u.call(t) : i(t);
                    this.forEach(function(t) {
                        r.indexOf(t) < 0 && n.push(t)
                    })
                }
                return i(n)
            },
            has: function(t) {
                return this.filter(function() {
                    return k(t) ? i.contains(this, t) : i(this).find(t).size()
                })
            },
            eq: function(t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
            },
            first: function() {
                var t = this[0];
                return t && !k(t) ? t : i(t)
            },
            last: function() {
                var t = this[this.length - 1];
                return t && !k(t) ? t : i(t)
            },
            find: function(t) {
                var e, n = this;
                return e = t ? "object" == typeof t ? i(t).filter(function() {
                    var t = this;
                    return o.some.call(n, function(e) {
                        return i.contains(e, t)
                    })
                }) : 1 == this.length ? i(C.qsa(this[0], t)) : this.map(function() {
                    return C.qsa(this, t)
                }) : i()
            },
            closest: function(t, e) {
                var n = [],
                    r = "object" == typeof t && i(t);
                return this.each(function(i, o) {
                    for (; o && !(r ? r.indexOf(o) >= 0 : C.matches(o, t));) o = o !== e && !F(o) && o.parentNode;
                    o && n.indexOf(o) < 0 && n.push(o)
                }), i(n)
            },
            parents: function(t) {
                for (var e = [], n = this; n.length > 0;) n = i.map(n, function(t) {
                    return (t = t.parentNode) && !F(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                });
                return B(e, t)
            },
            parent: function(t) {
                return B(P(this.pluck("parentNode")), t)
            },
            children: function(t) {
                return B(this.map(function() {
                    return U(this)
                }), t)
            },
            contents: function() {
                return this.map(function() {
                    return this.contentDocument || u.call(this.childNodes)
                })
            },
            siblings: function(t) {
                return B(this.map(function(t, e) {
                    return a.call(U(e.parentNode), function(t) {
                        return t !== e
                    })
                }), t)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(t) {
                return i.map(this, function(e) {
                    return e[t]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName))
                })
            },
            replaceWith: function(t) {
                return this.before(t).remove()
            },
            wrap: function(t) {
                var e = A(t);
                if (this[0] && !e) var n = i(t).get(0),
                    r = n.parentNode || this.length > 1;
                return this.each(function(o) {
                    i(this).wrapAll(e ? t.call(this, o) : r ? n.cloneNode(!0) : n)
                })
            },
            wrapAll: function(t) {
                if (this[0]) {
                    i(this[0]).before(t = i(t));
                    for (var e;
                        (e = t.children()).length;) t = e.first();
                    i(t).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                var e = A(t);
                return this.each(function(n) {
                    var r = i(this),
                        o = r.contents(),
                        s = e ? t.call(this, n) : t;
                    o.length ? o.wrapAll(s) : r.append(s)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    i(this).replaceWith(i(this).children())
                }), this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(t) {
                return this.each(function() {
                    var n = i(this);
                    (t === e ? "none" == n.css("display") : t) ? n.show(): n.hide()
                })
            },
            prev: function(t) {
                return i(this.pluck("previousElementSibling")).filter(t || "*")
            },
            next: function(t) {
                return i(this.pluck("nextElementSibling")).filter(t || "*")
            },
            html: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = this.innerHTML;
                    i(this).empty().append(J(this, t, e, n))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = J(this, t, e, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this.pluck("textContent").join("") : null
            },
            attr: function(t, i) {
                var r;
                return "string" != typeof t || 1 in arguments ? this.each(function(e) {
                    if (1 === this.nodeType)
                        if (k(t))
                            for (n in t) W(this, n, t[n]);
                        else W(this, t, J(this, i, e, this.getAttribute(t)))
                }) : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(t)) ? r : e
            },
            removeAttr: function(t) {
                return this.each(function() {
                    1 === this.nodeType && t.split(" ").forEach(function(t) {
                        W(this, t)
                    }, this)
                })
            },
            prop: function(t, e) {
                return t = M[t] || t, "string" != typeof t || 1 in arguments ? this.each(function(i) {
                    if (k(t))
                        for (n in t) this[M[n] || n] = t[n];
                    else this[t] = J(this, e, i, this[t])
                }) : this[0] && this[0][t]
            },
            removeProp: function(t) {
                return t = M[t] || t, this.each(function() {
                    delete this[t]
                })
            },
            data: function(t, n) {
                var i = "data-" + t.replace(y, "-$1").toLowerCase(),
                    r = 1 in arguments ? this.attr(i, n) : this.attr(i);
                return null !== r ? K(r) : e
            },
            val: function(t) {
                return 0 in arguments ? (null == t && (t = ""), this.each(function(e) {
                    this.value = J(this, t, e, this.value)
                })) : this[0] && (this[0].multiple ? i(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function(e) {
                if (e) return this.each(function(t) {
                    var n = i(this),
                        r = J(this, e, t, n.offset()),
                        o = n.offsetParent().offset(),
                        s = {
                            top: r.top - o.top,
                            left: r.left - o.left
                        };
                    "static" == n.css("position") && (s.position = "relative"), n.css(s)
                });
                if (!this.length) return null;
                if (f.documentElement !== this[0] && !i.contains(f.documentElement, this[0])) return {
                    top: 0,
                    left: 0
                };
                var n = this[0].getBoundingClientRect();
                return {
                    left: n.left + t.pageXOffset,
                    top: n.top + t.pageYOffset,
                    width: Math.round(n.width),
                    height: Math.round(n.height)
                }
            },
            css: function(t, e) {
                if (arguments.length < 2) {
                    var r = this[0];
                    if ("string" == typeof t) {
                        if (!r) return;
                        return r.style[N(t)] || getComputedStyle(r, "").getPropertyValue(t)
                    }
                    if (L(t)) {
                        if (!r) return;
                        var o = {},
                            s = getComputedStyle(r, "");
                        return i.each(t, function(t, e) {
                            o[e] = r.style[N(e)] || s.getPropertyValue(e)
                        }), o
                    }
                }
                var a = "";
                if ("string" == D(t)) e || 0 === e ? a = X(t) + ":" + H(t, e) : this.each(function() {
                    this.style.removeProperty(X(t))
                });
                else
                    for (n in t) t[n] || 0 === t[n] ? a += X(n) + ":" + H(n, t[n]) + ";" : this.each(function() {
                        this.style.removeProperty(X(n))
                    });
                return this.each(function() {
                    this.style.cssText += ";" + a
                })
            },
            index: function(t) {
                return t ? this.indexOf(i(t)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(t) {
                return t ? o.some.call(this, function(t) {
                    return this.test(G(t))
                }, q(t)) : !1
            },
            addClass: function(t) {
                return t ? this.each(function(e) {
                    if ("className" in this) {
                        r = [];
                        var n = G(this),
                            o = J(this, t, e, n);
                        o.split(/\s+/g).forEach(function(t) {
                            i(this).hasClass(t) || r.push(t)
                        }, this), r.length && G(this, n + (n ? " " : "") + r.join(" "))
                    }
                }) : this
            },
            removeClass: function(t) {
                return this.each(function(n) {
                    if ("className" in this) {
                        if (t === e) return G(this, "");
                        r = G(this), J(this, t, n, r).split(/\s+/g).forEach(function(t) {
                            r = r.replace(q(t), " ")
                        }), G(this, r.trim())
                    }
                })
            },
            toggleClass: function(t, n) {
                return t ? this.each(function(r) {
                    var o = i(this),
                        s = J(this, t, r, G(this));
                    s.split(/\s+/g).forEach(function(t) {
                        (n === e ? !o.hasClass(t) : n) ? o.addClass(t): o.removeClass(t)
                    })
                }) : this
            },
            scrollTop: function(t) {
                if (this.length) {
                    var n = "scrollTop" in this[0];
                    return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
                        this.scrollTop = t
                    } : function() {
                        this.scrollTo(this.scrollX, t)
                    })
                }
            },
            scrollLeft: function(t) {
                if (this.length) {
                    var n = "scrollLeft" in this[0];
                    return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
                        this.scrollLeft = t
                    } : function() {
                        this.scrollTo(t, this.scrollY)
                    })
                }
            },
            position: function() {
                if (this.length) {
                    var t = this[0],
                        e = this.offsetParent(),
                        n = this.offset(),
                        r = g.test(e[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : e.offset();
                    return n.top -= parseFloat(i(t).css("margin-top")) || 0, n.left -= parseFloat(i(t).css("margin-left")) || 0, r.top += parseFloat(i(e[0]).css("border-top-width")) || 0, r.left += parseFloat(i(e[0]).css("border-left-width")) || 0, {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || f.body; t && !g.test(t.nodeName) && "static" == i(t).css("position");) t = t.offsetParent;
                    return t
                })
            }
        }, i.fn.detach = i.fn.remove, ["width", "height"].forEach(function(t) {
            var n = t.replace(/./, function(t) {
                return t[0].toUpperCase()
            });
            i.fn[t] = function(r) {
                var o, s = this[0];
                return r === e ? $(s) ? s["inner" + n] : F(s) ? s.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function(e) {
                    s = i(this), s.css(t, J(this, r, e, s[t]()))
                })
            }
        }), x.forEach(function(n, r) {
            var o = r % 2;
            i.fn[n] = function() {
                var n, a, s = i.map(arguments, function(t) {
                        var r = [];
                        return n = D(t), "array" == n ? (t.forEach(function(t) {
                            return t.nodeType !== e ? r.push(t) : i.zepto.isZ(t) ? r = r.concat(t.get()) : void(r = r.concat(C.fragment(t)))
                        }), r) : "object" == n || null == t ? t : C.fragment(t)
                    }),
                    u = this.length > 1;
                return s.length < 1 ? this : this.each(function(e, n) {
                    a = o ? n : n.parentNode, n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
                    var c = i.contains(f.documentElement, a);
                    s.forEach(function(e) {
                        if (u) e = e.cloneNode(!0);
                        else if (!a) return i(e).remove();
                        a.insertBefore(e, n), c && Q(e, function(e) {
                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                n.eval.call(n, e.innerHTML)
                            }
                        })
                    })
                })
            }, i.fn[o ? n + "To" : "insert" + (r ? "Before" : "After")] = function(t) {
                return i(t)[n](this), this
            }
        }), C.Z.prototype = V.prototype = i.fn, C.uniq = P, C.deserializeValue = K, i.zepto = C, i
    }();
    return t.Zepto = e, void 0 === t.$ && (t.$ = e),
        function(e) {
            function h(t) {
                return t._zid || (t._zid = n++)
            }

            function p(t, e, n, i) {
                if (e = d(e), e.ns) var r = m(e.ns);
                return (a[h(t)] || []).filter(function(t) {
                    return t && (!e.e || t.e == e.e) && (!e.ns || r.test(t.ns)) && (!n || h(t.fn) === h(n)) && (!i || t.sel == i)
                })
            }

            function d(t) {
                var e = ("" + t).split(".");
                return {
                    e: e[0],
                    ns: e.slice(1).sort().join(" ")
                }
            }

            function m(t) {
                return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
            }

            function g(t, e) {
                return t.del && !f && t.e in c || !!e
            }

            function y(t) {
                return l[t] || f && c[t] || t
            }

            function v(t, n, r, o, s, u, f) {
                var c = h(t),
                    p = a[c] || (a[c] = []);
                n.split(/\s/).forEach(function(n) {
                    if ("ready" == n) return e(document).ready(r);
                    var a = d(n);
                    a.fn = r, a.sel = s, a.e in l && (r = function(t) {
                        var n = t.relatedTarget;
                        return !n || n !== this && !e.contains(this, n) ? a.fn.apply(this, arguments) : void 0
                    }), a.del = u;
                    var c = u || r;
                    a.proxy = function(e) {
                        if (e = S(e), !e.isImmediatePropagationStopped()) {
                            e.data = o;
                            var n = c.apply(t, e._args == i ? [e] : [e].concat(e._args));
                            return n === !1 && (e.preventDefault(), e.stopPropagation()), n
                        }
                    }, a.i = p.length, p.push(a), "addEventListener" in t && t.addEventListener(y(a.e), a.proxy, g(a, f))
                })
            }

            function x(t, e, n, i, r) {
                var o = h(t);
                (e || "").split(/\s/).forEach(function(e) {
                    p(t, e, n, i).forEach(function(e) {
                        delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(y(e.e), e.proxy, g(e, r))
                    })
                })
            }

            function S(t, n) {
                if (n || !t.isDefaultPrevented) {
                    n || (n = t), e.each(T, function(e, i) {
                        var r = n[e];
                        t[e] = function() {
                            return this[i] = b, r && r.apply(n, arguments)
                        }, t[i] = w
                    });
                    try {
                        t.timeStamp || (t.timeStamp = Date.now())
                    } catch (r) {}(n.defaultPrevented !== i ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = b)
                }
                return t
            }

            function j(t) {
                var e, n = {
                    originalEvent: t
                };
                for (e in t) E.test(e) || t[e] === i || (n[e] = t[e]);
                return S(n, t)
            }
            var i, n = 1,
                r = Array.prototype.slice,
                o = e.isFunction,
                s = function(t) {
                    return "string" == typeof t
                },
                a = {},
                u = {},
                f = "onfocusin" in t,
                c = {
                    focus: "focusin",
                    blur: "focusout"
                },
                l = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                };
            u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents", e.event = {
                add: v,
                remove: x
            }, e.proxy = function(t, n) {
                var i = 2 in arguments && r.call(arguments, 2);
                if (o(t)) {
                    var a = function() {
                        return t.apply(n, i ? i.concat(r.call(arguments)) : arguments)
                    };
                    return a._zid = h(t), a
                }
                if (s(n)) return i ? (i.unshift(t[n], t), e.proxy.apply(null, i)) : e.proxy(t[n], t);
                throw new TypeError("expected function")
            }, e.fn.bind = function(t, e, n) {
                return this.on(t, e, n)
            }, e.fn.unbind = function(t, e) {
                return this.off(t, e)
            }, e.fn.one = function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            };
            var b = function() {
                    return !0
                },
                w = function() {
                    return !1
                },
                E = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                T = {
                    preventDefault: "isDefaultPrevented",
                    stopImmediatePropagation: "isImmediatePropagationStopped",
                    stopPropagation: "isPropagationStopped"
                };
            e.fn.delegate = function(t, e, n) {
                return this.on(e, t, n)
            }, e.fn.undelegate = function(t, e, n) {
                return this.off(e, t, n)
            }, e.fn.live = function(t, n) {
                return e(document.body).delegate(this.selector, t, n), this
            }, e.fn.die = function(t, n) {
                return e(document.body).undelegate(this.selector, t, n), this
            }, e.fn.on = function(t, n, a, u, f) {
                var c, l, h = this;
                return t && !s(t) ? (e.each(t, function(t, e) {
                    h.on(t, n, a, e, f)
                }), h) : (s(n) || o(u) || u === !1 || (u = a, a = n, n = i), (u === i || a === !1) && (u = a, a = i), u === !1 && (u = w), h.each(function(i, o) {
                    f && (c = function(t) {
                        return x(o, t.type, u), u.apply(this, arguments)
                    }), n && (l = function(t) {
                        var i, s = e(t.target).closest(n, o).get(0);
                        return s && s !== o ? (i = e.extend(j(t), {
                            currentTarget: s,
                            liveFired: o
                        }), (c || u).apply(s, [i].concat(r.call(arguments, 1)))) : void 0
                    }), v(o, t, u, a, n, l || c)
                }))
            }, e.fn.off = function(t, n, r) {
                var a = this;
                return t && !s(t) ? (e.each(t, function(t, e) {
                    a.off(t, n, e)
                }), a) : (s(n) || o(r) || r === !1 || (r = n, n = i), r === !1 && (r = w), a.each(function() {
                    x(this, t, r, n)
                }))
            }, e.fn.trigger = function(t, n) {
                return t = s(t) || e.isPlainObject(t) ? e.Event(t) : S(t), t._args = n, this.each(function() {
                    t.type in c && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                })
            }, e.fn.triggerHandler = function(t, n) {
                var i, r;
                return this.each(function(o, a) {
                    i = j(s(t) ? e.Event(t) : t), i._args = n, i.target = a, e.each(p(a, t.type || t), function(t, e) {
                        return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
                    })
                }), r
            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                e.fn[t] = function(e) {
                    return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                }
            }), e.Event = function(t, e) {
                s(t) || (e = t, t = e.type);
                var n = document.createEvent(u[t] || "Events"),
                    i = !0;
                if (e)
                    for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
                return n.initEvent(t, i, !0), S(n)
            }
        }(e),
        function(e) {
            function p(t, n, i) {
                var r = e.Event(n);
                return e(t).trigger(r, i), !r.isDefaultPrevented()
            }

            function d(t, e, n, r) {
                return t.global ? p(e || i, n, r) : void 0
            }

            function m(t) {
                t.global && 0 === e.active++ && d(t, null, "ajaxStart")
            }

            function g(t) {
                t.global && !--e.active && d(t, null, "ajaxStop")
            }

            function y(t, e) {
                var n = e.context;
                return e.beforeSend.call(n, t, e) === !1 || d(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void d(e, n, "ajaxSend", [t, e])
            }

            function v(t, e, n, i) {
                var r = n.context,
                    o = "success";
                n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), d(n, r, "ajaxSuccess", [e, n, t]), b(o, e, n)
            }

            function x(t, e, n, i, r) {
                var o = i.context;
                i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), d(i, o, "ajaxError", [n, i, t || e]), b(e, n, i)
            }

            function b(t, e, n) {
                var i = n.context;
                n.complete.call(i, e, t), d(n, i, "ajaxComplete", [e, n]), g(n)
            }

            function w(t, e, n) {
                if (n.dataFilter == E) return t;
                var i = n.context;
                return n.dataFilter.call(i, t, e)
            }

            function E() {}

            function T(t) {
                return t && (t = t.split(";", 2)[0]), t && (t == c ? "html" : t == f ? "json" : a.test(t) ? "script" : u.test(t) && "xml") || "text"
            }

            function S(t, e) {
                return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
            }

            function j(t) {
                t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = S(t.url, t.data), t.data = void 0)
            }

            function C(t, n, i, r) {
                return e.isFunction(n) && (r = i, i = n, n = void 0), e.isFunction(i) || (r = i, i = void 0), {
                    url: t,
                    data: n,
                    success: i,
                    dataType: r
                }
            }

            function P(t, n, i, r) {
                var o, s = e.isArray(n),
                    a = e.isPlainObject(n);
                e.each(n, function(n, u) {
                    o = e.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? t.add(u.name, u.value) : "array" == o || !i && "object" == o ? P(t, u, i, n) : t.add(n, u)
                })
            }
            var r, o, n = +new Date,
                i = t.document,
                s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                a = /^(?:text|application)\/javascript/i,
                u = /^(?:text|application)\/xml/i,
                f = "application/json",
                c = "text/html",
                l = /^\s*$/,
                h = i.createElement("a");
            h.href = t.location.href, e.active = 0, e.ajaxJSONP = function(r, o) {
                if (!("type" in r)) return e.ajax(r);
                var c, p, s = r.jsonpCallback,
                    a = (e.isFunction(s) ? s() : s) || "Zepto" + n++,
                    u = i.createElement("script"),
                    f = t[a],
                    l = function(t) {
                        e(u).triggerHandler("error", t || "abort")
                    },
                    h = {
                        abort: l
                    };
                return o && o.promise(h), e(u).on("load error", function(n, i) {
                    clearTimeout(p), e(u).off().remove(), "error" != n.type && c ? v(c[0], h, r, o) : x(null, i || "error", h, r, o), t[a] = f, c && e.isFunction(f) && f(c[0]), f = c = void 0
                }), y(h, r) === !1 ? (l("abort"), h) : (t[a] = function() {
                    c = arguments
                }, u.src = r.url.replace(/\?(.+)=\?/, "?$1=" + a), i.head.appendChild(u), r.timeout > 0 && (p = setTimeout(function() {
                    l("timeout")
                }, r.timeout)), h)
            }, e.ajaxSettings = {
                type: "GET",
                beforeSend: E,
                success: E,
                error: E,
                complete: E,
                context: null,
                global: !0,
                xhr: function() {
                    return new t.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: f,
                    xml: "application/xml, text/xml",
                    html: c,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
                dataFilter: E
            }, e.ajax = function(n) {
                var u, f, s = e.extend({}, n || {}),
                    a = e.Deferred && e.Deferred();
                for (r in e.ajaxSettings) void 0 === s[r] && (s[r] = e.ajaxSettings[r]);
                m(s), s.crossDomain || (u = i.createElement("a"), u.href = s.url, u.href = u.href, s.crossDomain = h.protocol + "//" + h.host != u.protocol + "//" + u.host), s.url || (s.url = t.location.toString()), (f = s.url.indexOf("#")) > -1 && (s.url = s.url.slice(0, f)), j(s);
                var c = s.dataType,
                    p = /\?.+=\?/.test(s.url);
                if (p && (c = "jsonp"), s.cache !== !1 && (n && n.cache === !0 || "script" != c && "jsonp" != c) || (s.url = S(s.url, "_=" + Date.now())), "jsonp" == c) return p || (s.url = S(s.url, s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(s, a);
                var O, d = s.accepts[c],
                    g = {},
                    b = function(t, e) {
                        g[t.toLowerCase()] = [t, e]
                    },
                    C = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : t.location.protocol,
                    N = s.xhr(),
                    P = N.setRequestHeader;
                if (a && a.promise(N), s.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", d || "*/*"), (d = s.mimeType || d) && (d.indexOf(",") > -1 && (d = d.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(d)), (s.contentType || s.contentType !== !1 && s.data && "GET" != s.type.toUpperCase()) && b("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers)
                    for (o in s.headers) b(o, s.headers[o]);
                if (N.setRequestHeader = b, N.onreadystatechange = function() {
                        if (4 == N.readyState) {
                            N.onreadystatechange = E, clearTimeout(O);
                            var t, n = !1;
                            if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == C) {
                                if (c = c || T(s.mimeType || N.getResponseHeader("content-type")), "arraybuffer" == N.responseType || "blob" == N.responseType) t = N.response;
                                else {
                                    t = N.responseText;
                                    try {
                                        t = w(t, c, s), "script" == c ? (1, eval)(t) : "xml" == c ? t = N.responseXML : "json" == c && (t = l.test(t) ? null : e.parseJSON(t))
                                    } catch (i) {
                                        n = i
                                    }
                                    if (n) return x(n, "parsererror", N, s, a)
                                }
                                v(t, N, s, a)
                            } else x(N.statusText || null, N.status ? "error" : "abort", N, s, a)
                        }
                    }, y(N, s) === !1) return N.abort(), x(null, "abort", N, s, a), N;
                var M = "async" in s ? s.async : !0;
                if (N.open(s.type, s.url, M, s.username, s.password), s.xhrFields)
                    for (o in s.xhrFields) N[o] = s.xhrFields[o];
                for (o in g) P.apply(N, g[o]);
                return s.timeout > 0 && (O = setTimeout(function() {
                    N.onreadystatechange = E, N.abort(), x(null, "timeout", N, s, a)
                }, s.timeout)), N.send(s.data ? s.data : null), N
            }, e.get = function() {
                return e.ajax(C.apply(null, arguments))
            }, e.post = function() {
                var t = C.apply(null, arguments);
                return t.type = "POST", e.ajax(t)
            }, e.getJSON = function() {
                var t = C.apply(null, arguments);
                return t.dataType = "json", e.ajax(t)
            }, e.fn.load = function(t, n, i) {
                if (!this.length) return this;
                var a, r = this,
                    o = t.split(/\s/),
                    u = C(t, n, i),
                    f = u.success;
                return o.length > 1 && (u.url = o[0], a = o[1]), u.success = function(t) {
                    r.html(a ? e("<div>").html(t.replace(s, "")).find(a) : t), f && f.apply(r, arguments)
                }, e.ajax(u), this
            };
            var N = encodeURIComponent;
            e.param = function(t, n) {
                var i = [];
                return i.add = function(t, n) {
                    e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(N(t) + "=" + N(n))
                }, P(i, t, n), i.join("&").replace(/%20/g, "+")
            }
        }(e),
        function() {
            try {
                getComputedStyle(void 0)
            } catch (e) {
                var n = getComputedStyle;
                t.getComputedStyle = function(t, e) {
                    try {
                        return n(t, e)
                    } catch (i) {
                        return null
                    }
                }
            }
        }(),
        function(t, e) {
            function y(t) {
                return t.replace(/([A-Z])/g, "-$1").toLowerCase()
            }

            function v(t) {
                return i ? i + t : t.toLowerCase()
            }
            var i, a, u, f, c, l, h, p, d, m, n = "",
                r = {
                    Webkit: "webkit",
                    Moz: "",
                    O: "o"
                },
                o = document.createElement("div"),
                s = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
                g = {};
            o.style.transform === e && t.each(r, function(t, r) {
                return o.style[t + "TransitionProperty"] !== e ? (n = "-" + t.toLowerCase() + "-", i = r, !1) : void 0
            }), a = n + "transform", g[u = n + "transition-property"] = g[f = n + "transition-duration"] = g[l = n + "transition-delay"] = g[c = n + "transition-timing-function"] = g[h = n + "animation-name"] = g[p = n + "animation-duration"] = g[m = n + "animation-delay"] = g[d = n + "animation-timing-function"] = "", t.fx = {
                off: i === e && o.style.transitionProperty === e,
                speeds: {
                    _default: 400,
                    fast: 200,
                    slow: 600
                },
                cssPrefix: n,
                transitionEnd: v("TransitionEnd"),
                animationEnd: v("AnimationEnd")
            }, t.fn.animate = function(n, i, r, o, s) {
                return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, s = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), s && (s = parseFloat(s) / 1e3), this.anim(n, i, r, o, s)
            }, t.fn.anim = function(n, i, r, o, v) {
                var x, w, S, b = {},
                    E = "",
                    T = this,
                    j = t.fx.transitionEnd,
                    C = !1;
                if (i === e && (i = t.fx.speeds._default / 1e3), v === e && (v = 0), t.fx.off && (i = 0), "string" == typeof n) b[h] = n, b[p] = i + "s", b[m] = v + "s", b[d] = r || "linear", j = t.fx.animationEnd;
                else {
                    w = [];
                    for (x in n) s.test(x) ? E += x + "(" + n[x] + ") " : (b[x] = n[x], w.push(y(x)));
                    E && (b[a] = E, w.push(a)), i > 0 && "object" == typeof n && (b[u] = w.join(", "), b[f] = i + "s", b[l] = v + "s", b[c] = r || "linear")
                }
                return S = function(e) {
                    if ("undefined" != typeof e) {
                        if (e.target !== e.currentTarget) return;
                        t(e.target).unbind(j, S)
                    } else t(this).unbind(j, S);
                    C = !0, t(this).css(g), o && o.call(this)
                }, i > 0 && (this.bind(j, S), setTimeout(function() {
                    C || S.call(T)
                }, 1e3 * (i + v) + 25)), this.size() && this.get(0).clientLeft, this.css(b), 0 >= i && setTimeout(function() {
                    T.each(function() {
                        S.call(this)
                    })
                }, 0), this
            }, o = null
        }(e),
        function(e, n) {
            function a(t, i, r, o, s) {
                "function" != typeof i || s || (s = i, i = n);
                var a = {
                    opacity: r
                };
                return o && (a.scale = o, t.css(e.fx.cssPrefix + "transform-origin", "0 0")), t.animate(a, i, null, s)
            }

            function u(t, n, i, r) {
                return a(t, n, 0, i, function() {
                    o.call(e(this)), r && r.call(this)
                })
            }
            var r = (t.document, e.fn.show),
                o = e.fn.hide,
                s = e.fn.toggle;
            e.fn.show = function(t, e) {
                return r.call(this), t === n ? t = 0 : this.css("opacity", 0), a(this, t, 1, "1,1", e)
            }, e.fn.hide = function(t, e) {
                return t === n ? o.call(this) : u(this, t, "0,0", e)
            }, e.fn.toggle = function(t, i) {
                return t === n || "boolean" == typeof t ? s.call(this, t) : this.each(function() {
                    var n = e(this);
                    n["none" == n.css("display") ? "show" : "hide"](t, i)
                })
            }, e.fn.fadeTo = function(t, e, n) {
                return a(this, t, e, null, n)
            }, e.fn.fadeIn = function(t, e) {
                var n = this.css("opacity");
                return n > 0 ? this.css("opacity", 0) : n = 1, r.call(this).fadeTo(t, n, e)
            }, e.fn.fadeOut = function(t, e) {
                return u(this, t, null, e)
            }, e.fn.fadeToggle = function(t, n) {
                return this.each(function() {
                    var i = e(this);
                    i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](t, n)
                })
            }
        }(e),
        function(e) {
            function d(t, e, n, i) {
                return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
            }

            function m() {
                s = null, n.last && (n.el.trigger("longTap"), n = {})
            }

            function g() {
                s && clearTimeout(s), s = null
            }

            function y() {
                i && clearTimeout(i), r && clearTimeout(r), o && clearTimeout(o), s && clearTimeout(s), i = r = o = s = null, n = {}
            }

            function v(t) {
                return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
            }

            function x(t, e) {
                return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
            }

            function b() {
                p && (e(document).off(h.down, f).off(h.up, c).off(h.move, l).off(h.cancel, y), e(t).off("scroll", y), y(), p = !1)
            }

            function w(w) {
                var E, T, C, N, S = 0,
                    j = 0;
                b(), h = w && "down" in w ? w : "ontouchstart" in document ? {
                    down: "touchstart",
                    up: "touchend",
                    move: "touchmove",
                    cancel: "touchcancel"
                } : "onpointerdown" in document ? {
                    down: "pointerdown",
                    up: "pointerup",
                    move: "pointermove",
                    cancel: "pointercancel"
                } : "onmspointerdown" in document ? {
                    down: "MSPointerDown",
                    up: "MSPointerUp",
                    move: "MSPointerMove",
                    cancel: "MSPointerCancel"
                } : !1, h && ("MSGesture" in t && (u = new MSGesture, u.target = document.body, e(document).bind("MSGestureEnd", function(t) {
                    var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                    e && (n.el.trigger("swipe"), n.el.trigger("swipe" + e))
                })), f = function(t) {
                    (!(N = x(t, "down")) || v(t)) && (C = N ? t : t.touches[0], t.touches && 1 === t.touches.length && n.x2 && (n.x2 = void 0, n.y2 = void 0), E = Date.now(), T = E - (n.last || E), n.el = e("tagName" in C.target ? C.target : C.target.parentNode), i && clearTimeout(i), n.x1 = C.pageX, n.y1 = C.pageY, T > 0 && 250 >= T && (n.isDoubleTap = !0), n.last = E, s = setTimeout(m, a), u && N && u.addPointer(t.pointerId))
                }, l = function(t) {
                    (!(N = x(t, "move")) || v(t)) && (C = N ? t : t.touches[0], g(), n.x2 = C.pageX, n.y2 = C.pageY, S += Math.abs(n.x1 - n.x2), j += Math.abs(n.y1 - n.y2))
                }, c = function(t) {
                    (!(N = x(t, "up")) || v(t)) && (g(), n.x2 && Math.abs(n.x1 - n.x2) > 30 || n.y2 && Math.abs(n.y1 - n.y2) > 30 ? o = setTimeout(function() {
                        n.el && (n.el.trigger("swipe"), n.el.trigger("swipe" + d(n.x1, n.x2, n.y1, n.y2))), n = {}
                    }, 0) : "last" in n && (30 > S && 30 > j ? r = setTimeout(function() {
                        var t = e.Event("tap");
                        t.cancelTouch = y, n.el && n.el.trigger(t), n.isDoubleTap ? (n.el && n.el.trigger("doubleTap"), n = {}) : i = setTimeout(function() {
                            i = null, n.el && n.el.trigger("singleTap"), n = {}
                        }, 250)
                    }, 0) : n = {}), S = j = 0)
                }, e(document).on(h.up, c).on(h.down, f).on(h.move, l), e(document).on(h.cancel, y), e(t).on("scroll", y), p = !0)
            }
            var i, r, o, s, u, f, c, l, h, n = {},
                a = 750,
                p = !1;
            ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) {
                e.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), e.touch = {
                setup: w
            }, e(document).ready(w)
        }(e), e
});;
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(B 7b(){y(G.3a!=K||G.3a){J}G.$C=G.4R=4R;A x={3E:"7c.8.24.b",1m:1u()+"7d.1D.28/7e/",4S:1u()+"2q.1D.28/1v/7f.1v",3F:1u()+"2q.1D.28/1v/7g.1v",7h:1u()+"2q.1D.28/1v/7i.1v",7j:1u()+"2q.1D.28/1v/7k/4T.1v",4U:1u()+"7l.7m.1w/7n/4V/1.9.1/4V.4W.1v",3b:1u()+"7o.1D.28",3c:1u(),1k:G.1h.1k,1x:G.1h.2O,X:(E(3G(O.3d[O.3d.M-1].1E).3e))?4X():(3G(O.3d[O.3d.M-1].1E).3e),14:2r()[2],3f:2r()[1],29:3h.29,4Y:3h.4Y,Q:0,P:"",2s:0,1F:".L-N",1y:"",3H:"",R:"",Y:0,1R:"",T:O.T,V:"",1l:"",1p:"",1c:"",3I:"",2P:1,2Q:0,2R:"",2S:"",17:"",1S:K,1T:"",3J:"",3K:"",3i:"",4Z:"",1U:0,1n:0,54:0,1z:"",1M:11,U:{N:"",2T:"",2U:"",1V:""},3j:1a,7p:11,3k:1a,3L:1a,3M:1a,3N:1a,3O:1a,3P:1a,7q:1a,3Q:1a,57:11};y(E(x.X)){J}18.19("%c\\7r\\7s\\7t\\7u\\7v\\58\\3R\\59\\3R\\3l\\3S\\7w\\3l\\1W\\5a\\5b\\7x\\7y\\7z\\7A\\59\\3R\\5c\\7B\\1W\\7C\\7D\\7E\\3T\\2V\\3l\\3S\\1W\\5d\\3U\\5e\\7F\\7G\\7H\\7I\\1W\\3V\\3W\\3X\\7J\\7K\\1W\\5f\\5g\\7L\\5h\\5i\\5j\\1W\\7M\\5c\\7N\\7O\\5h\\7P\\3l\\3S\\1W\\7Q\\7R\\7S\\7T\\7U\\1W\\7V\\58\\7W\\5f\\5g\\7X\\7Y\\5a\\5b\\5i\\5j\\7Z\\81\\82\\83\\3Y\\3Z:5k://5l.1D.1w","1G:84;2t-3m:86");x.S=x.1k;x.1o=5m(x.1k.1f("?")[0].1f("#")[0]);x.1z=1b(x.1k,"1z");x.17=1N("17");y(E(x.17)){x.17=5n();1q("17",x.17)}x.1T=$C(".L-N");x.3J=$C(".L-2u");x.3K=$C(".L-2v");x.3i=$C(".L-1V");y(!E(x.1T)&&x.1T[0]!=K){x.2s=x.1T.M;x.V=x.1T[0].5o==K?"":$C(".L-N").87(0).13()}5p();42();5q();5r();5s();B 5q(){1d{G.88.89({5t:2a},\'*\');1X(\'8a\',B(e){y(!E(e.I)&&e.I.5t===8b){y(e.I.8c&&!E(e.I.5u)){x.T=e.I.5u;42()}}})}1e(e){18.19(e)}}B 5r(){$C.3n.5v="8d";$C.3n.8e="8f";$C.3n.8g=1a;$C.3n.8h={8i:1a};1d{G.1A={8j:5w,8k:5x,8l:5y};G.3a={2b:2b,1u:1u,43:43,E:E,2r:2r,1q:1q,1N:1N,2W:2W,2X:2X,44:44,45:45,46:46}}1e(e){18.19(e)}}B 46(a){y(a===\'47\'){47()}D y(a===\'3o\'){3o()}}B 5s(){y(x.3N){x.3N=11;$C.1r({S:x.1m+"1s/8m",I:{5z:x.X,S:x.1o,17:x.17,1z:x.1z},Z:B(a){1d{y(a.Z){A b=a.I.8n;y(!E(a.I.1H)){x.1S=a.I.1H}y(b!=K){x.1n=b.1n;x.3I=b.3I;y(x.1n==1){y(!E(1N("1O"+x.1x))){x.U=1P.48(1N("1O"+x.1x))}}D{2W("1O"+x.1x)}y(b.3p==0){y(!E(a.I.1H.N)){x.V=a.I.1H.N;3q(b);y(!E(a.I.1H.1l)||x.1n==1){x.1l=a.I.1H.1l;5A()}y(!E(a.I.1H.1p)||x.1n==1){x.1p=a.I.1H.1p;5B()}y(!E(a.I.1H.1c)||x.1n==1){x.1c=a.I.1H.1c;5C()}}}D{5D(b.8o){1I 1:5E(b);1J;1I 2:5F(b);1J}}49(b.5G,b.8p,b.5H,x.V);y(b.54==1){y(E(x.1z)&&!E(x.V)){2W("1O"+x.1x);5I(x.V);y(1h.5J.F("#")==-1){J}}}D y(x.1k.F("1z")!=-1){G.1h.1k=5K("1z");y(1h.5J.F("#")==-1){J}}}A c=a.I.8q;y(c!=K){y(c.8r==0){y(!E(x.V)){y((x.14==1&&b.4a==0)||(x.14!=1&&b.4b==0&&b.4c==0)){3r(x.V)}}}D{5L(c)}}y(a.I.J==1){4d()}A d=a.I.8s;y(d==1){5M()}y(a.I.8t==1){4e()}}}1e(e){18.19(e)}5N();5O();1d{y(G.1A.5P){G.1A.5P({N:G.1A.N,1l:G.1A.2u,1p:G.1A.2v})}}1e(e){18.19(e)}}})}}B 5L(k){A l=1i.2c(1i.4f()*8u);A m=k.5Q;A n=k.4b;A o=k.4a;A p=k.4c;A q=k.N.1f("|");$C.2w(q,B(a,b){y(!E(b)){y(m>0||n>0||o>0||p>0){4g(b);$C(O).2d(B(){4h(B(){y(!E(b)){4g(b)}},8v)})}y((x.14==1&&o==0)||(x.14!=1&&n==0&&p==0)){2x(B(){3r(b)},a*55)}}});y(m>0||n>0||o>0||p>0){2b(x.3F,B(){5R(x,\'8w\',{8x:m,8y:n,8z:o,8A:p})})}B 4g(b){$C("*:2Y([I-N-2c=\'"+l+"\'])").8B("L-N");A c="<15 1j=\'L-N\' I-N-2c=\'"+l+"\' 1g=\'2y:2z\'>"+b+"</15>";A d=1Q 5S(b,"g");y(!E($C("1B").13())&&$C("1B").13().F(b)!=-1){A e=$C("1B *:2Y(4i):2Y(2A):2Y(8C):2Y(1g)");2e(A i=0;i<e.M;i++){A f=$C(e[i]).8D().8E(B(a){J 3s.8F===3}).13();A g=$C(e[i]).8G("L-N");A h=$C(e[i]).I("N-2c");A j=$C(e[i]).I("8H-8I");y(!E(f)&&f.F(b)!=-1&&!g&&h!=l&&j!=0){y(x.14==1&&o!=0){c="<15 1j=\'L-N\' I-N-2c=\'"+l+"\' 1g=\'2y:2z;1Y:2Z\' 5T=\'J 11\'>"+b+4j()+"</15>"}y(x.14!=1&&p!=0){y(n!=0){c="<15 1j=\'L-N\' I-N-2c=\'"+l+"\' 1g=\'2y:2z;1Y:2Z\' 4k=\'G.4l(3s)\'>"+b+"</15>"}D{c="<15 1j=\'L-N\' I-N-2c=\'"+l+"\' 1g=\'1Y:2Z\' 4k=\'G.4l(3s)\'>"+b+"</15>"}}y($C(e[i]).4m("2A").M>0&&$C(e[i]).4m("2A").13().2B(/[ ]/g,"").F("O.8J")!=-1){$C(e[i]).4m("2A").3t()}$C(e[i]).3u($C(e[i]).3u().2B(d,c))}}}}}B 49(b,c,d,f){y(x.1n==1&&!E(x.U.1V)){1d{A g=x.U.1V;4n(g)}1e(e){18.19(e)}}D{y(c==0){J}$C.1r({S:x.1m+"1s/49",I:{X:x.X,N:f,5H:d,8K:c,5G:b},Z:B(a){y(a.Z){1q("L-8L"+x.1x,a.I);1d{y(x.1n==1&&x.1M){x.U.1V=a.I;1q("1O"+x.1x,1P.2C(x.U))}4n(a.I)}1e(e){18.19(e)}}}})}}B 4n(c){$C(O).2d(B(){y(!E(x.3i)){$C(".L-1V").3v("1E",x.3b+c)}G.1A.8M=x.3b+c;A b=x.3i.M;4h(B(){A a=$C(".L-1V");y(a.M>b){b=a.M;$C(".L-1V").3v("1E",x.3b+c)}},80)})}B 4d(){y(x.Y==6){J}$C.1r({S:x.1m+"1s/4d",I:{X:x.X,S:x.1o,14:x.14,R:E(x.R)?"":x.R,Y:x.Y},Z:B(a){y(a.Z){5U(a.I)}}})}B 5U(a){A b={5V:"5V",S:""};G.8N.8O(b,K,"");G.1X("8P",B(e){2x(B(){G.1h.1k=a},8Q)},11)}B 5M(){$C.1r({S:x.1m+"1s/8R",I:{X:x.X,S:x.1o},Z:B(a){y(a!=K&&a.Z){5W(a.I)}}})}B 5W(k){$C(O).2d(B(){A c=11;$C.2w(k,B(a,b){y(b.32==0){y(b.2f==0){y(x.14==1){33(\'[I-4o-4p="\'+b.2g+\'"]\',K,B(e){1Z(b);J})}D{$C(O).2h("2D",\'[I-4o-4p="\'+b.2g+\'"]\',B(){1Z(b);J})}}D y(b.2f==1){33(\'[I-4o-4p="\'+b.2g+\'"]\',B(e){1Z(b);J})}}D{c=1a}});y(c){y(2r()[1]==\'3w\'){$C("1B").2E("2y","2z")}y(x.14==1){33("1B",K,B(e){A a=e.2F?e.2F:e.4q;3x(0,a);J})}D{$C(O).2h("2D",B(e){A a=e.2F?e.2F:e.4q;3x(0,a)})}33("1B",B(e){A a=e.2F?e.2F:e.4q;3x(1,a)})}});B 3x(i,j){$C.2w(k,B(f,g){y(g.32==1){A h=g.5X.1f("|");$C.2w(h,B(a,b){y(!E(b)){y(g.2G==1){A c=j.5o;y(!E(c)&&c.F(b)!=-1){y(g.2f==i){1Z(g,b)}J}}D y(g.2G==2){A d=j.3e;y(!E(d)&&d.F(b)!=-1){y(g.2f==i){1Z(g,b)}J}}D y(g.2G==3){A e=j.8S;y(!E(e)&&e.F(b)!=-1){y(g.2f==i){1Z(g,b)}J}}}})}})}}B 4e(){$C.1r({S:x.1m+"1s/4e",I:{X:x.X,S:x.1o},Z:B(a){y(a!=K&&a.Z){5Y(a.I)}}})}B 5Y(c){2b(x.4S,B(){$C.2w(c,B(a,b){8T(x,b)})})}B 5x(a){A b={2g:a,4r:1,32:0,2G:0};1Z(b)}B 1Z(b,c){$C.1r({S:x.1m+"1s/8U",I:{X:x.X,17:x.17,S:x.1o,4r:b.4r,2f:b.2f,32:b.32,2G:b.2G,4s:x.V,5X:E(c)?"":c,4t:x.S.2B(/&/g,\'||\'),2g:b.2g,14:x.14,4u:x.3f,R:E(x.R)?"":x.R,Y:x.Y,Q:x.Q,P:x.P,1R:x.1R},Z:B(a){1d{y(a.Z){y(!E(5Z)){5Z(b.2g)}}}1e(e){}}})}B 5E(a){A b=a.N.1f("|");A c=[];A d=0;2e(A i=0;i<10;i++){y(d>=b.M){d=0}c.61(b[d]);d++}A e=1i.2i(1i.4f()*10);x.V=c[e];3q(a)}B 5F(a){A b=a.N.1f("|");A c=1Q 2H();A d=c.8V();A e=c.8W();A f=c.8X();5D(a.8Y){1I 1:x.V=b[f%b.M];1J;1I 2:A g=1i.2i(f/5);x.V=b[g%b.M];1J;1I 3:A h=1i.2i(e*6+f/10);x.V=b[h%b.M];1J;1I 4:A i=1i.2i(e*2+f/30);x.V=b[i%b.M];1J;1I 5:x.V=b[e%b.M];1J;1I 6:A j=1i.2i((d*24+e)/3);x.V=b[j%b.M];1J;1I 7:A k=1i.2i((d*24+e)/6);x.V=b[k%b.M];1J;1I 8:A l=1i.2i((d*24+e)/12);x.V=b[l%b.M];1J}3q(a)}B 3q(f){y(x.1n==1){1d{y(!E(x.U.N)){x.V=x.U.N;18.19("1D 8Z："+x.U.N)}D{y(!E(x.V)){x.U.N=x.V;x.1M=1a;1q("1O"+x.1x,1P.2C(x.U))}}}1e(e){18.19(e)}}G.1A.N=x.V;A g=f.5Q;A h=f.4b;A i=f.4a;A j=f.4c;A k=1P.48(f.92);A l=f.93;A m=f.94;A n=x.V;A o;y(x.14==1){y(l==1){o="<15 1j=\'L-N-1t\'>\\62\\2j\\63\\64\\65\\2V\\2k</15>"}D y(l==2){}D y(l==3){o="<15 1j=\'L-N-1t\'>\\2j\\95\\96\\3T\\2V\\2k</15>"}D y(l==4){o=" <15 1j=\'L-N-1t\' 1g=\'1G: #34;\'>\\2j\\5d\\3U\\97\\5e\\2k</15>"}D y(l==5){o=" <15 1j=\'L-N-1t\' 1g=\'1G: #34;\'>\\2j\\98\\99\\9a\\3U\\2k</15>"}D y(l==6){o=" <15 1j=\'L-N-1t\' 1g=\'1G: #34;\'>\\2j\\3Y\\3Z\\3V\\3W\\3X\\2k</15>"}D y(l==7){o=" <4i 1j=\'L-N-1t\' 1g=\'66-2I: 67!H;35: 4v!H;2l: 0;2m: 0;22:4w!H;1C:3y!H;68: 23!H;1K-2J: 0\' 1E=\'"+x.3c+"2q.1D.1w/69/6a.6b\'>"}}D{y(m==1){}D y(m==2){o=" <15 1j=\'L-N-1t\' 1g=\'1G: #34;\'>\\62\\2j\\63\\64\\65\\2V\\2k</15>"}D y(m==3){o=" <15 1j=\'L-N-1t\' 1g=\'1G: #34;\'>\\2j\\3Y\\3Z\\3V\\3W\\3X\\2k</15>"}D y(m==4){o=" <4i 1j=\'L-N-1t\' 1g=\'66-2I: 67!H;35: 4v!H;2l: 0;2m: 0;22:4w!H;1C:3y!H;68: 23!H;1K-2J: 0\' 1E=\'"+x.3c+"2q.1D.1w/69/6a.6b\'>"}}3z();$C(O).2d(B(){x.1T=$C(x.1F);3z();y(!E(x.1l)){$C(".L-2u").13(x.1l)}y(!E(x.1p)){$C(".L-2v").13(x.1p)}y(!E(x.1c)){$C(".L-1c").13(x.1c)}});A p=x.1T.M;A q=x.3K.M;A r=x.3J.M;A s=x.4Z.M;4h(B(){A a=$C(x.1F);y(a.M>p){18.19("9b 9c N:"+a.M);p=a.M;3z()}y(!E(x.1l)){A b=$C(".L-2u");y(b.M>r){r=b.M;$C(".L-2u").13(x.1l)}}y(!E(x.1p)){A c=$C(".L-2v");y(c.M>q){q=c.M;$C(".L-2v").13(x.1p)}}y(!E(x.1c)){A d=$C(".L-1c");y(d.M>s){s=d.M;$C(".L-1c").13(x.1c)}}},80);B 3z(){$C(x.1F).3u(n).2E(k);y(!E(o)){$C(".L-N-1t").3t();$C(x.1F).9d(o);$C(".L-N-1t").2E(k)}y(x.14==1&&g!=0||x.14!=1&&h!=0){$C(x.1F).2E("2y","2z");$C(".L-N-1t").2E("2y","2z");$C(O).2h("2D",".L-2D",B(){$C(".L-N").2D()})}y(x.14==1&&i!=0){$C(".6c").3t();$C(x.1F).4x(4j());$C(x.1F).3v("5T","J 11");$C(x.1F).2E("1Y","2Z")}y(x.14!=1&&j!=0){$C(x.1F).3v("4k","G.4l(3s)")}}y(g!=0||h!=0||i!=0||j!=0){2b(x.3F,B(){5R(x,\'9e\',{9f:g,9g:h,9h:i,9i:j})})}}B 5A(){y(x.1n==1){1d{y(!E(x.U.2T)||E(x.U.2T)&&!x.1M){x.1l=x.U.2T}D y(x.1M){x.U.2T=x.1l;1q("1O"+x.1x,1P.2C(x.U))}}1e(e){18.19(e)}}G.1A.2u=x.1l}B 5B(){y(x.1n==1){1d{y(!E(x.U.2U)||E(x.U.2U)&&!x.1M){x.1p=x.U.2U}D y(x.1M){x.U.2U=x.1p;1q("1O"+x.1x,1P.2C(x.U))}}1e(e){18.19(e)}}G.1A.2v=x.1p}B 5C(){y(x.1n==1){1d{y(!E(x.U.1c)||E(x.U.1c)&&!x.1M){x.1c=x.U.1c}D y(x.1M){x.U.1c=x.1c;1q("1O"+x.1x,1P.2C(x.U))}}1e(e){18.19(e)}}G.1A.1c=x.1c}B 2X(a,b){y(x.3j){A c="<1L 3e=\'2X\' 1g=\'2K-4y: 4z-2K;z-4A:9j;2l: 0 5%!H;2m: 0!H;22: 90%!H;1Y: 9k;26: 20%;4B: 0;13-2I: 3A\'>"+"<1L 1g=\'1C: 3y;2m: 0!H;2l: 9l 9m!H;1K: 23;3B:6d(0,0,0,.6)!H;4W-22: 4w;9n-22: 90%;35:4v-9o;1K-2J: 9p;4C-1C: 9q!H;2t-3m:9r!H;13-2I: 3A;1G: 4D;\'>"+a+"</1L></1L>";$C("1B").4x(c);x.3j=11;2x(B(){$C("#2X").3t();x.3j=1a;y(b!=K){b()}},9s)}}B 3r(a){A b=1a;y(G.2n){y(G.2n().2L().M>0&&G.2n().2L()==a){x.1y=a;y(b){36();b=11}}}D y(G.O.2n){y(G.2n().2L().M>0&&G.O.2n().2L()==a){x.1y=a;y(b){36();b=11}}}D y(G.O.6e){y(G.2n().2L().M>0&&G.O.6e.9t().13==a){x.1y=a;y(b){36();b=11}}}y(b){2x(B(){3r(a)},50)}}B 5y(){3o()}B 3o(){y(x.3k){x.3k=11;$C.1r({S:x.1m+"1s/9u",I:{17:x.17,1y:x.1y,X:x.X,S:x.1o},Z:B(a){y(!a.Z){x.3k=1a}}})}}B 47(){y(x.3M){$C.1r({S:x.1m+"1s/9v",I:{17:x.17,S:x.1o,X:x.X},Z:B(a){y(a.Z){x.3M=11}}})}}B 5w(a){36(a)}B 36(b){y(x.3O||x.3H.F(x.1y)==-1){x.3O=11;x.3H=x.1y;$C.1r({S:x.1m+"1s/9w",I:{17:x.17,1y:E(b)?x.1y:b,S:x.1o,4t:x.S.2B(/&/g,\'||\'),X:x.X,2s:x.2s,4s:x.V,14:x.14,4u:x.3f,R:E(x.R)?"":x.R,Y:x.Y,1R:x.1R,2Q:x.2Q,2R:x.2R,2S:x.2S,1l:x.1l,Q:x.Q,P:x.P,3p:E(x.1S)?"":E(x.1S.3p)?"":x.1S.3p,4E:E(x.1S)?"":E(x.1S.4E)?"":x.1S.4E},Z:B(a){1d{y(a.Z){y(!E(6f)){6f(x.1y)}}}1e(e){}}})}}B 5N(){y(x.3P){x.3P=11;$C.1r({S:x.1m+"1s/9x",I:{17:x.17,X:x.X,S:x.1o,4t:x.S.2B(/&/g,\'||\'),2s:x.2s,4s:x.V,14:x.14,4u:x.3f,R:E(x.R)?"":x.R,Y:x.Y,1R:x.1R,2Q:x.2Q,2R:x.2R,2S:x.2S,3E:x.3E,Q:x.Q,P:x.P,29:E(x.Q)?x.29:""},Z:B(a){y(a!=K&&!a.Z){x.3L=11}},6g:B(){6h()}})}}B 6h(){A k=1Q 2H().37();A l=1N("6i"+G.1h.2O);y(l!=K){k=l}D{}$C(O).2d(B(){A d=$C(O).1C();A f=O.1B.9y;d=d<f?f:d;A g=$C(G).1C();y((d-g)<=2a){x.1U=2a;2o()}G.1X("6j",B(e){A a=$C(G).9z();A b=(a/(d-g)).9A(2)*2a;A c=1i.6k(b)>2a?2a:1i.6k(b);x.1U=c>x.1U?c:x.1U});$C(O.1B).2h("2D",B(e){2o()});O.1X(\'6l\',B(){2o()},11);A h;A i=B(e){y(h==K){h=2x(B(){h=K;2o()},4F)}};y(O.1X){O.1X(\'9B\',i,11)}G.6m=O.6m=i;G.1X(\'6j\',i);6n(B(){x.2P=5;2o()});A j;y(2M O.9C!=="38"){j="9D"}D y(2M O.9E!=="38"){j="9F"}D y(2M O.9G!=="38"){j="9H"}D y(2M O.9I!=="38"){j="9J"}O.1X(j,B(){2o()},11)});B 2o(){A a=(1Q 2H().37()-k)/4F;y(a>=4||x.2P==5){6o()}}B 6o(){y(x.3L){k=1Q 2H().37();1q("6i"+G.1h.2O,k);$C.1r({S:x.1m+"1s/9K",I:{X:x.X,S:x.1o,17:x.17,2P:x.2P,1U:x.1U},Z:B(a){}})}}B 6n(a){A b=G.3C;y(2M G.3C!=\'B\'){G.3C=a}D{G.3C=B(){b();a()}}}}B 5O(){y(x.3Q){x.3Q=11;$C.1r({S:x.1m+"1s/9L",I:{S:x.1o,5z:x.X},Z:B(d){y(d!=K&&d.Z){y(!E(d.I)){$C(O).2d(B(){2b(x.4U,B(){A c=$.9M(1a);$C.2w(d.I,B(a,b){y(!E(b)){c(\'1B\').4x("<1L 1g=\'35: 23\'>"+b.9N+"</1L>")}})})})}}}})}}B 5I(a){y(x.1k.F("?")==-1){G.1h.1k=x.1k+"?1z="+a}D{G.1h.1k=x.1k+"&1z="+a}}B 5p(){1d{A f=x.29.6p();y(f.W(/6q/)!=K||f.W(/6r/)!=K){x.Q=1;x.P=6s()}D y(G.4G||(f.F("4H")>0)){x.Q=10;x.P=6t(f)}D y(f.F("6u")>0){x.Q=20;A g=f.W(/6u\\/([\\d.]+)/);x.P=g==K?"":g[1]}D y(f.F("6v")>0){x.Q=21;A h=f.W(/6v\\/([\\d.]+)/);x.P=h==K?"":h[1]}D y(f.F("6w")>0){x.Q=30;A i=f.W(/6w\\/([\\d.]+)/);x.P=i==K?"":i[1]}D y(f.F("6x")>0){x.Q=31;A j=f.W(/6x\\/([\\d.]+)/);x.P=j==K?"":j[1]}D y(f.F("6y")>0||f.F("9O 2.x")>0){x.Q=40;A k=f.W(/6y\\s([\\d.]+)/);x.P=k==K?"":k[1]}D y(f.F("6z")>0){x.Q=41;A l=f.W(/6z\\/([\\d.]+)/);x.P=l==K?"":l[1]}D y(f.F("6A")>0||f.F("6B")>0){A m=f.W(/6B\\/([\\d.]+)/);A n=f.W(/9P\\/([\\d.]+)/);A o=f.W(/9Q\\/([\\d.]+)/);A p=f.W(/6A\\/([\\d.]+)/);y(m!=K){x.Q=53;x.P=m[1]}D y(n!=K){x.Q=52;x.P=n[1]}D y(o!=K){x.Q=51;x.P=o}D y(p!=K){x.Q=51;x.P=p[1]}D{x.Q=50}}D y(f.F("6C")>0){x.Q=60;A q=f.W(/6C\\/([\\d.]+)/);x.P=q==K?"":q[1]}D y(f.F("6D")>0){x.Q=70;A r=f.W(/6D\\/([\\d.]+)/);x.P=r==K?"":r[1]}D y(f.F("6E")>0){x.Q=80;A s=f.W(/6E\\/([\\d.]+)/);x.P=s==K?"":s[1]}D y(f.F("6F")>0){x.Q=85;A t=f.W(/6F\\/([\\d.]+)/);x.P=t==K?"":t[1]}D y(f.F("6G")>0){x.Q=9R;A u=f.W(/6G\\/([\\d.]+)/);x.P=u==K?"":u[1]}D y(f.F("9S")>0){x.Q=6H;A u=f.W(/9T\\/([\\d.]+)/);x.P=u==K?"":u[1]}D y(f.F("4I")>0||f.F("4J")>0){x.Q=9U;A u="";y(f.F("4I")>0){u=f.W(/4I\\/([\\d.]+)/)}D y(f.F("4J")>0){u=f.W(/4J\\/([\\d.]+)/)}x.P=u==K?"":u[1]}D y(f.F("6I")>0){x.Q=90;y(f.F("9V")){x.Q=91}A v=f.W(/6I\\/([\\d.]+)/);x.P=v==K?"":v[1]}D y(f.F("9W")>-1){x.Q=2a;A w=f.W(/9X\\/([\\d.]+)/);x.P=w==K?"":w}x.P=x.P.M>25?x.P.39(0,25):x.P}1e(e){18.19(e)}B 6s(){A a=O.9Y;A b=/(6q\\s|6r.*9Z:)([\\w.]+)/;A c=G.3h.29.6p();A d=b.a0(c);1d{J d[2]}1e(e){18.19(e);J a}}B 6t(a){1d{y(G.4G){J a.W(/4G.([\\d.]+)/)[1]}D y(a.F("4H")>0){J a.W(/4H\\/([\\d.]+)/)[1]}}1e(e){18.19(e);J 0}}}B 42(){1d{y(E(x.T)||(!E(1b(x.S,"1z"))&&x.T.F(x.1o)!=-1)){x.T=E(1N("4K"))?"":1N("4K")}D{1q("4K",a1(x.T))}A a=x.T.1f("?")[0];y(a.F("m.4L.1w")!=-1){x.Y=2;x.R=1b(x.T,"4M")}D y(a.F("4L.1w")!=-1){x.Y=2;x.R=1b(x.T,"a2");y(E(x.R)){x.R=1b(x.T,"4M")}}D y(a.F("6J.1w")!=-1){x.Y=3;x.R=1b(x.T,"q")}D y(a.F("m.2N")!=-1||a.F("a3.2N")!=-1||a.F("a4.2N")!=-1||a.F("3g.2N")!=-1){x.Y=4;x.R=1b(x.T,"4N")}D y(a.F("5l.2N")!=-1){x.Y=4;x.R=1b(x.T,"a5")}D y(a.F("6K.28")!=-1){x.Y=5;x.R=1b(x.T,"q")}D y(a.F("L")!=-1){x.Y=6;y(a.F("4L.L.26")!=-1){x.R=1b(x.T,"4M")}D y(a.F("6J.L.26")!=-1){x.R=1b(x.T,"q")}D y(a.F("2N.L.26")!=-1){x.R=1b(x.T,"4N")}D y(a.F("6K.L.26")!=-1){x.R=1b(x.T,"q")}x.T=""}D y(a.F("a6.1w")!=-1){x.Y=7;x.R=1b(x.T,"q")}D y(a.F("a7.1w")!=-1){x.Y=8;x.R=1b(x.T,"q")}D y(a.F("6L.a8.1w")!=-1){x.Y=9;x.R=1b(x.T,"a9")}D y(a.F("6L.1w")!=-1){x.Y=9;x.R=1b(x.T,"4N")}y(!E(1b(x.S,"Y"))){x.Y=1b(x.S,"Y").1f("#")[0]}x.1R=x.T.M>6M?x.T.39(0,6M):x.T;y(x.R==1){x.R=\'\'}}1e(e){18.19(e)}}B 45(){J x.1U}B 2r(){A e=3h.29;2e(A i=[["27 2p 5.1","aa",2],["27 2p 6.1","ab",2],["27 2p 6.0","ac",2],["27 2p 6.2","ad",2],["27 2p 10.0","ae",2],["af","3w",1],["ag;","3w",1],["ah","3w",1],["ai","aj",2],["6N","6N",1],["ak","al",2],["am","an",1],["27 2p 5.2","ao",2],["27 2p 5.0","ap",2],["27","aq",2],["6O","6O",3]],o=0,n=i.M;o<n;++o)y(e.F(i[o][0])!==-1)J i[o];J["6P","6P",3]}B 4X(){A a=O.ar("2A");2e(A i=0;i<a.M;i++){y(a[i].1E.F("3a.1v")>=0||a[i].1E.F("as.1v")>=0){J a[i].1E.1f(\'?\')[1].1f(\'=\')[1]}}}B 1b(a,b){1d{A c=1Q 5S("(^|&)"+b+"=([^&]*)(&|$)","i");A d=a.1f("?")[1];y(!E(d)){A f=d.W(c);y(!E(f)&&f.M>1){J 6Q(f[2])}}J""}1e(e){18.19(e)}1d{A g=G.1h.6R.39(1);A h=g.1f("&");2e(A i=0;i<h.M;i++){A j=h[i].1f("=");y(j[0]==b){J 6Q(j[1])}}J""}1e(e){18.19(e)}}B 3G(a){A b=a.F("?");A c=a.4O(b+1);A d={};A e=c.1f("&");2e(A i=0;i<e.M;i++){b=e[i].F("=");y(b>0){d[e[i].39(0,b)]=e[i].4O(b+1)}}J d}B 5K(a){A b=G.1h.6R;y(b.F(a)!=-1){b=b.39(1);A c=b.1f(\'&\');A d=[];2e(A i=0;i<c.M;i++){A e=c[i].1f(\'=\');y(a!=e[0]){d.61(c[i])}}y(d.M==0){J G.1h.2O}D{J G.1h.2O+\'?\'+d.at(\'&\')}}D{J G.1h.1k}}B 5n(){J\'au\'.2B(/[av]/g,B(c){A r=1i.4f()*16|0,v=c==\'x\'?r:(r&aw|ax);J v.2L(16).ay()})}B 1q(a,b,c){A d=1Q 2H();c=E(c)?(30*60*4F):c;G.3D.az(a,1P.2C({I:b,6S:(d.37()+c)}))}B 1N(a){A b=G.3D.aA(a);A d=1Q 2H();y(!E(b)){A c=1P.48(b);y(d.37()<=c.6S){J c.I}D{G.3D.6T(a)}}J K}B 2W(a){G.3D.6T(a)}B E(a){y(2M a=="38"||a==K||a=="K"||a===""){J 1a}D{J 11}}B 43(a){A b=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;y(!b.aB(a)){J 11}D{J 1a}}B 1u(){1d{y(O.1h.3c.F("6U")!=-1){J"6U://"}}1e(e){18.19(e)}J"5k://"}B 5m(a){A b=a.1f("?")[0].1f("#")[0];y(a.F("3u")!=-1||a.F("aC")!=-1||a.F("aD")!=-1||a.F("aE")!=-1||a.F("aF")!=-1){J b}y(b.4O(b.M-1,1)=="/"){J b}D{J b+"/"}}B 44(a,b,c){A d=1Q aG(a,{13:B(){J b}});d.2h(\'Z\',B(e){y(c!=K){c(e.13)}});d.2h(\'6V\',B(e){y(!E(e.13)&&e.13==b){y(c!=K){c(e.13)}}18.19("4T 6V:"+e.13)})}B 2b(b,c){$C(O).2d(B(){A a=O.aH(\'2A\');a.5v=\'13/aI\';a.aJ=1a;a.1E=b;O.1B.aK(a);y(a.4P){a.6W=B(){y(a.4P==\'6g\'||a.4P==\'aL\'){a.6W=K;c()}}}D{a.aM=B(){c()}}})}B 33(b,c,d,f){A g;A h=0;A i=0;$(O).2h({6l:B(e){g=2x(B(){g=0;y(c!=K){c(e)}},(f==K?aN:f));A a=e.6X.6Y[0];y(a){h=a.4Q;i=a.aO}},aP:B(e){A a=e.6X.6Y[0];y(a){y(1i.6Z((h-a.4Q))>5||1i.6Z((h-a.4Q))>5){71(g);g=0}}},aQ:B(e){71(g);y(g!=0){y(d!=K){d(e)}}}},b)}B 4j(){J"<1L 1j=\'6c\' 1g=\'z-4A: 5!H;22: 6H%!H;3B: 6d(56,56,56,0)!H;1Y: 72!H;13-2I: 3A!H;2m:0!H;2l: 0!H;"+"2K-4y: 4z-2K!H;26: -50%!H;4B: -10%!H;2t-73: 74!H;4C-1C: 75%!H;1C: 75%!H;2t-3m: 0.aR!H;1K-2J: 76!H;1G: 4D!H\'>"+"<77 1j=\'57\' 1g=\'35: 23;2l: 0!H;z-4A: aS!H;aT: 23!H;1K: 23!H;22: aU!H;1Y: 2Z!H;13-2I: 3A!H;"+"2K-4y: 4z-2K!H;2m: -aV 3y 0;2t-73: 74!H;4C-1C: 78!H;1C: 78!H;2t-3m: aW!H;1K-2J: 76!H;1G: 4D!H;3B: #79!H;\'>"+"<1L 1g=\'1Y: 72!H;3B: 23!H;4B: 50%!H;26: aX!H;;22: 0!H;1C: 0!H;2m:0 0 0 -7a!H;2l: 0!H;1K: 7a aY aZ!H;1K-2J: 0!H;1K-26-1G: #79!H;\'></1L>\\3T\\2V</77></1L>"}})();', 62, 682, '||||||||||||||||||||||||||||||||||if||var|function|zq|else|isEmpty|indexOf|window|important|data|return|null|zaax|length|wxh|document|browserVersion|browserName|serach_text|url|referrer|hduofenCache|last_wx|match|user_uuid|seo|success||false||text|devices_type|span||sessions|console|log|true|getQueryString|city|try|catch|split|style|location|Math|class|href|wxh_name|baseurl|is_cache|simpleUrl|wxh_sex|setCookie|ajax|webstatic|suffix|getProtocol|js|com|path|copy_wxh|hdfshare|_hdf|body|height|hduofen|src|wxhClassName|color|userWxhManager|case|break|border|div|fast_cache|getCookie|hduofenCache_|JSON|new|source_url|muserWxhManager|zaaxwx|access_ratio|qr|uFF0C|addEventListener|position|submitCvt|||width|none|||top|Windows|cn|userAgent|100|loadScript|round|ready|for|touch_type|conversion_type|on|floor|u0028|u0029|padding|margin|getSelection|calculateTime|NT|res|getDevices|modify|font|wxname|wxsex|each|setTimeout|cursor|pointer|script|replace|stringify|click|css|srcElement|dim_select|Date|align|radius|box|toString|typeof|sogou|pathname|browse_start|return_stutas|return_url|return_msg|name|sex|u5236|clearCookie|tipsalert|not|relative|||stat_type|longTouch|333|display|submitCopyCount|getTime|undefined|substring|zaaxstat|fileurl|protocol|scripts|id|devices||navigator|zaaxqr|tipsalertShow|isOpen|u7EDF|size|ajaxSettings|submitOpenCount|wxh_methods|setWxh|copyListen|this|remove|html|attr|ios|queryElement|auto|forwx|center|background|onbeforeunload|localStorage|zaaxstat_version|alertUrl|UrlSearch|last_copy_wxh|sms_text|zaaxname|zaaxsex|isSubmitBrowserTime|isCall|is_hdf_getWxh|hdf_is_open_copy|hdf_is_browse|hdf_initJscode|u7C89|u8BA1|u590D|u4FE1|u4E8C|u7EF4|u7801|u67E5|u770B|||partReferrer|isPoneAvailable|initClipboard|getAccessRatio|callFun|submitCallPhone|parse|getQr|is_long_wx|pc_is_open_wx|pc_copy_wx|getReturnStatus|getPlug|random|forCopyWx|setInterval|img|copyHtml|oncopy|hdfPcCopy|find|setQr|hdf|cvt|target|count_type|current_wxh|complete_url|device|inline|100px|append|sizing|content|index|left|line|white|groups|1000|opera|opr|kwai|ksnebula|zaaxRef|baidu|word|keyword|substr|readyState|pageX|Zepto|plugsdUrl|clipboard|jqueryUrl|jquery|min|getUuid|platform|zaaxcity|||||share_change|||hdf_copy_btn|u591A|u52A0|u4E13|u4E1A|u5BA2|u5FAE|u53F7|u63A8|u5E7F|u8F6C|u529F|u80FD|http|www|zformUrl|guid|innerText|initBrowseName|initJump|initAjax|getWxh|zaaxcode|zaaxJumpReferrer|type|subCopyData|subCvtData|subOpenWxData|uuid|setWxName|setWxSex|setCity|switch|displayType1|displayType2|wxh_group|qr_def|setHdfshare|hash|delParame|manualCopyWxh|getCvtStat|browse|initJsCode|callback|is_open_wx|hdfAlerts|RegExp|ontouchstart|startReturn|title|initCvtStat|dim_content|initPlgu|hdfCvtCallback||push|u0020|u70b9|u51fb|u590d|vertical|middle|float|images|lookqr|png|hdf_copy_box|rgba|selection|hdfCallback|complete|browseTime|browseSecond_|scroll|ceil|touchstart|onmousewheel|addOnbeforeunload|submitTime|toLowerCase|msie|trident|getIeVersion|getOperaVersion|bidubrowser|baiduboxapp|ubrowser|ucbrowser|metasr|sogoumobilebrowser|qqbrowser|micromessenger|maxthon|firefox|edge|qihoobrowser|newsarticle|120|chrome|so|sm|toutiao|250|Android|rhino|other|decodeURIComponent|search|expires|removeItem|https|error|onreadystatechange|originalEvent|targetTouches|abs||clearTimeout|absolute|weight|400|200|4px|button|32px|777|10px|init|v3|api|sem|plugs|alerts|zaaxgobackUrl|zaaxgoback|clipboardUrl|tools|apps|bdimg|libs|file|alertIsShow|hdf_is_cvt|u6B22|u8FCE|u4F7F|u7528|u597D|u7CFB|u670D|u52A1|u7ADE|u4EF7|u6237|u53EF|u63D0|u4F9B|u6279|u91CF|u7BA1|u7406|u8F6E|u64AD|u8DF3|u8BBF|u884C|u4E3A|u5316|u843D|u5730|u9875|u63D2|u4EF6|u7B49|u79CD|u76F8|u5173|u002C||u8BE6|u60C5|u8BF7|red||18px|eq|parent|postMessage|message|101|zaaxIsJump|post|dataType|json|crossDomain|xhrFields|withCredentials|pushCopyData|pushCvtData|pushOpenWxData|findByUserIdWxh|userWxhConf|display_type|qr_setting|copyStatiConf|stati_methods|cvt_stat|plug|10000|3000|cp|copy_openWx|copy_pc_openWx|copy_long_copy|copy_pc_long_copy|removeClass|br|contents|filter|nodeType|hasClass|status|wx|write|qrsetting|qr_|qrpath|history|pushState|popstate|500|getCvt|className|hdfPlug|sumbitCvt|getDay|getHours|getMinutes|for_time|cache|||wx_style|wx_display_type|pc_wx_display_type|u957F|u6309|u540C|u53D1|u9001|u77ED|page|updata|after|wxm|openWx|pc_openWx|long_copy|pc_long_copy|2147483647|fixed|12px|25px|max|block|5px|24px|15px|2000|createRange|upOpenWxBrowseRecord|upCallPhoenRecord|upCopyBrowseRecord|addbrowseRecord|scrollHeight|scrollTop|toFixed|DOMMouseScroll|hidden|visibilitychange|mozHidden|mozvisibilitychange|msHidden|msvisibilitychange|webkitHidden|webkitvisibilitychange|statBrowseTime|getJsCode|noConflict|js_code|se|qq|tencenttraveler|110|aweme|app_version|130|mobile|safari|version|documentMode|rv|exec|encodeURI|wd|wap|zhishi|query|google|ifeng|eastday|kw|winXP|win7|winVista|win8|win10|iPad|iPhone|iPod|Macintosh|mac|Ubuntu|ubuntu|Linux|linux|win2003|win2000|winOther|getElementsByTagName|zaaxstat_test|join|xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx|xy|0x3|0x8|toUpperCase|setItem|getItem|test|htm|php|jsp|asp|ClipboardJS|createElement|javascript|async|appendChild|loaded|onload|600|pageY|touchmove|touchend|8em|2147483646|outline|60px|30px|16px|31px|solid|transparent'.split('|'), 0, {}));