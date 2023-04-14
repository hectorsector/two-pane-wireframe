;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [744],
  {
    4184: function (e, t) {
      var o
      !(function () {
        'use strict'
        var n = {}.hasOwnProperty
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var o = arguments[t]
            if (o) {
              var a = typeof o
              if ('string' === a || 'number' === a) e.push(o)
              else if (Array.isArray(o)) {
                if (o.length) {
                  var u = r.apply(null, o)
                  u && e.push(u)
                }
              } else if ('object' === a)
                if (o.toString === Object.prototype.toString)
                  for (var l in o) n.call(o, l) && o[l] && e.push(l)
                else e.push(o.toString())
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (o = function () {
                return r
              }.apply(t, [])) || (e.exports = o)
      })()
    },
    1210: function (e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getDomainLocale = function (e, t, n, r) {
          var a = o(8875).normalizeLocalePath,
            u = o(8748).detectDomainLocale,
            l = t || a(e, n).detectedLocale,
            f = u(r, void 0, l)
          if (f) {
            var c = 'http'.concat(f.http ? '' : 's', '://'),
              i = l === f.defaultLocale ? '' : '/'.concat(l)
            return ''.concat(c).concat(f.domain).concat('').concat(i).concat(e)
          }
          return !1
        })
      ;('function' === typeof t.default ||
        ('object' === typeof t.default && null !== t.default)) &&
        'undefined' === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default))
    },
    8418: function (e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = o(4941).Z
      o(5753).default
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = o(2648).Z,
        a = o(7273).Z,
        u = r(o(7294)),
        l = o(6273),
        f = o(2725),
        c = o(3462),
        i = o(1018),
        s = o(7190),
        d = o(1210),
        p = o(8684),
        v = 'undefined' !== typeof u.default.useTransition,
        y = {}
      function h(e, t, o, n) {
        if (e && l.isLocalURL(t)) {
          e.prefetch(t, o, n).catch(function (e) {
            0
          })
          var r =
            n && 'undefined' !== typeof n.locale ? n.locale : e && e.locale
          y[t + '%' + o + (r ? '%' + r : '')] = !0
        }
      }
      var b = u.default.forwardRef(function (e, t) {
        var o,
          r = e.href,
          b = e.as,
          _ = e.children,
          g = e.prefetch,
          L = e.passHref,
          M = e.replace,
          m = e.soft,
          C = e.shallow,
          j = e.scroll,
          x = e.locale,
          R = e.onClick,
          O = e.onMouseEnter,
          P = e.onTouchStart,
          E = e.legacyBehavior,
          k = void 0 === E ? !0 !== Boolean(!1) : E,
          w = a(e, [
            'href',
            'as',
            'children',
            'prefetch',
            'passHref',
            'replace',
            'soft',
            'shallow',
            'scroll',
            'locale',
            'onClick',
            'onMouseEnter',
            'onTouchStart',
            'legacyBehavior',
          ])
        ;(o = _),
          !k ||
            ('string' !== typeof o && 'number' !== typeof o) ||
            (o = u.default.createElement('a', null, o))
        var S = !1 !== g,
          T = n(v ? u.default.useTransition() : [], 2)[1],
          I = u.default.useContext(c.RouterContext),
          A = u.default.useContext(i.AppRouterContext)
        A && (I = A)
        var U,
          z = u.default.useMemo(
            function () {
              var e = n(l.resolveHref(I, r, !0), 2),
                t = e[0],
                o = e[1]
              return { href: t, as: b ? l.resolveHref(I, b) : o || t }
            },
            [I, r, b]
          ),
          D = z.href,
          Z = z.as,
          B = u.default.useRef(D),
          H = u.default.useRef(Z)
        k && (U = u.default.Children.only(o))
        var K = k ? U && 'object' === typeof U && U.ref : t,
          N = n(s.useIntersection({ rootMargin: '200px' }), 3),
          G = N[0],
          q = N[1],
          F = N[2],
          J = u.default.useCallback(
            function (e) {
              ;(H.current === Z && B.current === D) ||
                (F(), (H.current = Z), (B.current = D)),
                G(e),
                K &&
                  ('function' === typeof K
                    ? K(e)
                    : 'object' === typeof K && (K.current = e))
            },
            [Z, K, D, F, G]
          )
        u.default.useEffect(
          function () {
            var e = q && S && l.isLocalURL(D),
              t = 'undefined' !== typeof x ? x : I && I.locale,
              o = y[D + '%' + Z + (t ? '%' + t : '')]
            e && !o && h(I, D, Z, { locale: t })
          },
          [Z, D, q, x, S, I]
        )
        var Q = {
          ref: J,
          onClick: function (e) {
            k || 'function' !== typeof R || R(e),
              k &&
                U.props &&
                'function' === typeof U.props.onClick &&
                U.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, o, n, r, a, u, f, c, i) {
                  if (
                    'A' !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      l.isLocalURL(o))
                  ) {
                    e.preventDefault()
                    var s = function () {
                      'softPush' in t && 'softReplace' in t
                        ? t[
                            a
                              ? r
                                ? 'softReplace'
                                : 'softPush'
                              : r
                              ? 'replace'
                              : 'push'
                          ](o)
                        : t[r ? 'replace' : 'push'](o, n, {
                            shallow: u,
                            locale: c,
                            scroll: f,
                          })
                    }
                    i ? i(s) : s()
                  }
                })(e, I, D, Z, M, m, C, j, x, A ? T : void 0)
          },
          onMouseEnter: function (e) {
            k || 'function' !== typeof O || O(e),
              k &&
                U.props &&
                'function' === typeof U.props.onMouseEnter &&
                U.props.onMouseEnter(e),
              l.isLocalURL(D) && h(I, D, Z, { priority: !0 })
          },
          onTouchStart: function (e) {
            k || 'function' !== typeof P || P(e),
              k &&
                U.props &&
                'function' === typeof U.props.onTouchStart &&
                U.props.onTouchStart(e),
              l.isLocalURL(D) && h(I, D, Z, { priority: !0 })
          },
        }
        if (!k || L || ('a' === U.type && !('href' in U.props))) {
          var V = 'undefined' !== typeof x ? x : I && I.locale,
            W =
              I &&
              I.isLocaleDomain &&
              d.getDomainLocale(Z, V, I.locales, I.domainLocales)
          Q.href = W || p.addBasePath(f.addLocale(Z, V, I && I.defaultLocale))
        }
        return k
          ? u.default.cloneElement(U, Q)
          : u.default.createElement('a', Object.assign({}, w, Q), o)
      })
      ;(t.default = b),
        ('function' === typeof t.default ||
          ('object' === typeof t.default && null !== t.default)) &&
          'undefined' === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default))
    },
    8875: function (e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.normalizeLocalePath = void 0)
      ;(t.normalizeLocalePath = function (e, t) {
        return o(4317).normalizeLocalePath(e, t)
      }),
        ('function' === typeof t.default ||
          ('object' === typeof t.default && null !== t.default)) &&
          'undefined' === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default))
    },
    7190: function (e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = o(4941).Z
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            o = e.rootMargin,
            c = e.disabled || !u,
            i = r.useRef(),
            s = n(r.useState(!1), 2),
            d = s[0],
            p = s[1],
            v = n(r.useState(null), 2),
            y = v[0],
            h = v[1]
          r.useEffect(
            function () {
              if (u) {
                if ((i.current && (i.current(), (i.current = void 0)), c || d))
                  return
                return (
                  y &&
                    y.tagName &&
                    (i.current = (function (e, t, o) {
                      var n = (function (e) {
                          var t,
                            o = {
                              root: e.root || null,
                              margin: e.rootMargin || '',
                            },
                            n = f.find(function (e) {
                              return e.root === o.root && e.margin === o.margin
                            })
                          if (n && (t = l.get(n))) return t
                          var r = new Map(),
                            a = new IntersectionObserver(function (e) {
                              e.forEach(function (e) {
                                var t = r.get(e.target),
                                  o =
                                    e.isIntersecting || e.intersectionRatio > 0
                                t && o && t(o)
                              })
                            }, e)
                          return (
                            (t = { id: o, observer: a, elements: r }),
                            f.push(o),
                            l.set(o, t),
                            t
                          )
                        })(o),
                        r = n.id,
                        a = n.observer,
                        u = n.elements
                      return (
                        u.set(e, t),
                        a.observe(e),
                        function () {
                          if ((u.delete(e), a.unobserve(e), 0 === u.size)) {
                            a.disconnect(), l.delete(r)
                            var t = f.findIndex(function (e) {
                              return e.root === r.root && e.margin === r.margin
                            })
                            t > -1 && f.splice(t, 1)
                          }
                        }
                      )
                    })(
                      y,
                      function (e) {
                        return e && p(e)
                      },
                      { root: null == t ? void 0 : t.current, rootMargin: o }
                    )),
                  function () {
                    null == i.current || i.current(), (i.current = void 0)
                  }
                )
              }
              if (!d) {
                var e = a.requestIdleCallback(function () {
                  return p(!0)
                })
                return function () {
                  return a.cancelIdleCallback(e)
                }
              }
            },
            [y, c, o, t, d]
          )
          var b = r.useCallback(function () {
            p(!1)
          }, [])
          return [h, d, b]
        })
      var r = o(7294),
        a = o(9311),
        u = 'function' === typeof IntersectionObserver
      var l = new Map(),
        f = []
      ;('function' === typeof t.default ||
        ('object' === typeof t.default && null !== t.default)) &&
        'undefined' === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default))
    },
    1018: function (e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0)
      var n = (0, o(2648).Z)(o(7294)),
        r = n.default.createContext(null)
      t.AppRouterContext = r
      var a = n.default.createContext(null)
      t.LayoutRouterContext = a
      var u = n.default.createContext(null)
      t.GlobalLayoutRouterContext = u
    },
    1664: function (e, t, o) {
      e.exports = o(8418)
    },
    1163: function (e, t, o) {
      e.exports = o(387)
    },
  },
])
