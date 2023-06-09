;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [627],
  {
    8674: function (e) {
      e.exports = function (e) {
        return function (t) {
          return null == e ? void 0 : e[t]
        }
      }
    },
    9464: function (e, t, r) {
      var n = r(8674)({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })
      e.exports = n
    },
    7187: function (e, t, r) {
      var n = r(9464),
        l = r(9833),
        s = /[&<>"']/g,
        a = RegExp(s.source)
      e.exports = function (e) {
        return (e = l(e)) && a.test(e) ? e.replace(s, n) : e
      }
    },
    4818: function (e, t, r) {
      'use strict'
      r.d(t, {
        M: function () {
          return m
        },
      })
      var n = r(5893),
        l = r(4783),
        s = r(5308),
        a = r(7294),
        o = r(4184),
        i = r.n(o),
        c = r(9099),
        d = r(3883),
        u = r.n(d)
      function f(e) {
        var t = (0, a.useState)(''),
          r = t[0],
          s = t[1]
        return (
          (0, a.useEffect)(function () {
            var e = function () {
              s(window.location.hash)
            }
            return (
              window.addEventListener('hashchange', e),
              function () {
                window.removeEventListener('hashchange', e)
              }
            )
          }, []),
          (0, n.jsxs)('div', {
            className: i()(u().nested, e.platform),
            children: [
              (0, n.jsx)(l.$.Item, {
                'aria-current': e.contents.href === r && 'location',
                href: e.contents.href,
                children: e.contents.title,
              }),
              e.items &&
                e.items.length > 0 &&
                (0, n.jsx)('ul', {
                  className: i()(u().indentNested),
                  children: e.items.map(function (e) {
                    return (0,
                    n.jsx)(f, { contents: e.contents, items: e.items, platform: e.platform }, e.contents.href)
                  }),
                }),
            ],
          })
        )
      }
      function m(e) {
        var t = e.miniTocItems,
          r = (0, c.$)('pages').t
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(s.Z, {
              as: 'h2',
              id: 'in-this-article',
              className: 'mb-1 ml-3',
              sx: { fontSize: 1 },
              'aria-label': r('miniToc'),
              children: r('miniToc'),
            }),
            (0, n.jsx)(l.$, {
              className: i()(u().miniToc, 'my-2'),
              'aria-labelledby': 'in-this-article',
              children: t.map(function (e, t) {
                return (0,
                n.jsx)(f, { contents: e.contents, items: e.items, platform: e.platform }, e.contents.href + t)
              }),
            }),
          ],
        })
      }
    },
    1627: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return rt
          },
          default: function () {
            return nt
          },
        })
      var n = r(5893),
        l = r(1163),
        s = r(7568),
        a = r(4051),
        o = r.n(a)
      var i = r(7187),
        c = r.n(i),
        d = /[\S]{18,}/g,
        u = /([a-z])([A-Z])/g,
        f = /([\w:]{12}[^_]*?)_/g,
        m = /([/\\])/g
      var h = r(4702),
        x = r(8721),
        p = r(7294),
        v = (r(8718), (0, p.createContext)(null)),
        g = function () {
          var e = (0, p.useContext)(v)
          if (!e)
            throw new Error(
              '"useProductGuidesContext" may only be used inside "ProductGuidesContext.Provider"'
            )
          return e
        },
        j = (0, p.createContext)(null),
        b = function () {
          var e = (0, p.useContext)(j)
          if (!e)
            throw new Error(
              '"useArticleContext" may only be used inside "ArticleContext.Provider"'
            )
          return e
        },
        y = r(5152),
        N = r.n(y),
        w = r(4184),
        _ = r.n(w),
        k = r(5529),
        P = r(6969),
        L = r(4871),
        S = r(2889),
        C = r(7990),
        T = r(1102),
        E = r(7349),
        R = r(3317),
        I = r(7901),
        A = r(4060),
        q = r(4924),
        Z = r(6042),
        H = r(9396),
        B = r(828),
        V = r(1955),
        $ = r(7335),
        U = r(2208),
        z = function (e) {
          var t = e.defaultValue,
            r = e.fallbackValue,
            s = e.cookieKey,
            a = e.queryStringKey,
            o = e.onValue,
            i = e.preferenceName,
            c = e.options,
            d = e.ariaLabel,
            u = (0, l.useRouter)(),
            f = u.query,
            m = u.locale,
            h = (0, p.useState)(''),
            x = h[0],
            v = h[1]
          ;(0, p.useEffect)(
            function () {
              var e = f[a],
                n = ''
              e && (n = Array.isArray(e) ? e[0] : e)
              var l = c.map(function (e) {
                return e.value
              })
              if (!n || !l.includes(n)) {
                var o = V.Z.get(s)
                n = t || (o && l.includes(o) ? o : r)
              }
              v(n)
            },
            [f, r, t, c]
          )
          var g,
            j = (0, B.Z)(u.asPath.split('#')[0].split('?'), 2),
            b = j[0],
            y = j[1],
            N = void 0 === y ? '' : y
          ;(0, p.useEffect)(
            function () {
              x && o(x)
            },
            [x, b]
          ),
            (0, p.useEffect)(
              function () {
                return function () {
                  !1
                }
              },
              [x]
            )
          var w =
              ((g = {
                'data-testid': ''.concat(a, '-picker'),
                'aria-label': d,
              }),
              (0, q.Z)(g, 'data-default-'.concat(a), t || ''),
              (0, q.Z)(g, 'className', 'mb-4'),
              g),
            _ = new URLSearchParams(N)
          return (0, n.jsx)(
            $.Z,
            (0, H.Z)((0, Z.Z)({}, w), {
              children: c.map(function (e) {
                _.set(a, e.value)
                var t = (0, q.Z)({}, 'data-'.concat(a), e.value)
                return (0, n.jsx)(
                  $.Z.Link,
                  (0, H.Z)(
                    (0, Z.Z)(
                      {
                        href: '?'.concat(_),
                        selected: e.value === x,
                        onClick: function (t) {
                          t.preventDefault(),
                            (function (e) {
                              var t = new URLSearchParams(N)
                              t.set(a, e)
                              var r = '/'.concat(m).concat(b, '?').concat(t)
                              u.push(r, void 0, { shallow: !0, locale: m }),
                                (0, U.qP)({
                                  type: U.tw.preference,
                                  preference_name: i,
                                  preference_value: e,
                                }),
                                V.Z.set(s, e, {
                                  sameSite: 'strict',
                                  secure:
                                    'http:' !== document.location.protocol,
                                  expires: 365,
                                })
                            })(e.value)
                        },
                      },
                      t
                    ),
                    { children: e.label }
                  ),
                  e.value
                )
              }),
            })
          )
        },
        M = [
          { value: 'mac', label: 'Mac' },
          { value: 'windows', label: 'Windows' },
          { value: 'linux', label: 'Linux' },
        ]
      function O(e) {
        Array.from(document.querySelectorAll('.extended-markdown'))
          .filter(function (e) {
            return M.some(function (t) {
              return e.classList.contains(t.value)
            })
          })
          .forEach(function (t) {
            t.style.display = t.classList.contains(e) ? '' : 'none'
          })
        var t = Array.from(
          document.querySelectorAll(
            M.map(function (e) {
              return '.platform-'.concat(e.value)
            }).join(', ')
          )
        )
        t.forEach(function (t) {
          t.style.display = t.classList.contains('platform-'.concat(e))
            ? ''
            : 'none'
        })
      }
      var G = function () {
        var e = b(),
          t = e.defaultPlatform,
          r = e.detectedPlatforms,
          l = (0, p.useState)(''),
          s = l[0],
          a = l[1]
        if (
          ((0, p.useEffect)(function () {
            var e = (0, A.r)().os
            'ios' === e && (e = 'mac'), a(e)
          }, []),
          !r.length)
        )
          return null
        var o = M.filter(function (e) {
          return r.includes(e.value)
        })
        return (0, n.jsx)(z, {
          defaultValue: t,
          fallbackValue: r.includes(s) ? s : r[r.length - 1],
          cookieKey: 'osPreferred',
          queryStringKey: 'platform',
          onValue: O,
          preferenceName: 'os',
          ariaLabel: 'Platform',
          options: o,
        })
      }
      function F(e, t) {
        return (function (e, t) {
          var r = e
          if (!r) return Promise.resolve(t())
          var n = r.ownerDocument.documentElement
          function l(e) {
            for (var t = []; e; ) {
              var r = e.getBoundingClientRect(),
                n = r.top,
                l = r.left
              t.push({ element: e, top: n, left: l }), (e = e.parentElement)
            }
            return t
          }
          function s(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t]
              if (n.contains(r.element)) return r
            }
          }
          var a = l(r)
          return Promise.resolve(t()).then(function (e) {
            var t = s(a)
            if (t) {
              r = t.element
              var n = t.top,
                l = t.left,
                o = r.getBoundingClientRect(),
                i = o.top,
                c = o.left
              !(function (e, t, r) {
                var n = e.ownerDocument,
                  l = n.defaultView
                function s(e) {
                  return e.offsetParent
                    ? { top: e.scrollTop, left: e.scrollLeft }
                    : { top: l.pageYOffset, left: l.pageXOffset }
                }
                function a(e, t, r) {
                  if (0 === t && 0 === r) return [0, 0]
                  var a = s(e),
                    o = a.top + r,
                    i = a.left + t
                  e === n || e === l || e === n.documentElement || e === n.body
                    ? n.defaultView.scrollTo(i, o)
                    : ((e.scrollTop = o), (e.scrollLeft = i))
                  var c = s(e)
                  return [c.left - a.left, c.top - a.top]
                }
                function o(e) {
                  var t = e
                  if (t.offsetParent && t !== n.body) {
                    for (; t !== n.body; ) {
                      if (!t.parentElement) return
                      t = t.parentElement
                      var r = l.getComputedStyle(t),
                        s = r.position,
                        a = r.overflowY,
                        o = r.overflowX
                      if (
                        'fixed' === s ||
                        'auto' === a ||
                        'auto' === o ||
                        'scroll' === a ||
                        'scroll' === o
                      )
                        break
                    }
                    return t
                  }
                }
                var i = o(e),
                  c = 0,
                  d = 0
                for (; i; ) {
                  var u = a(i, t - c, r - d)
                  if (((c += u[0]), (d += u[1]), c === t && d === r)) break
                  i = o(i)
                }
              })(r, c - l, i - n)
            }
            return e
          })
        })(
          (function (e) {
            if (e.activeElement !== e.body) return e.activeElement
            var t = e.querySelectorAll(':hover'),
              r = t.length
            if (r) return t[r - 1]
          })(e),
          t
        )
      }
      function D(e, t) {
        return e && t.includes(e)
          ? e
          : t.includes('webui')
          ? 'webui'
          : t.includes('cli')
          ? 'cli'
          : t[0]
      }
      var K = function () {
          var e = b(),
            t = e.defaultTool,
            r = e.detectedTools,
            l = e.allTools
          if (!r.length) return null
          var s = r.map(function (e) {
            return { value: e, label: l[e] }
          })
          return (0, n.jsx)(z, {
            fallbackValue: D(t, r),
            cookieKey: 'toolPreferred',
            queryStringKey: 'tool',
            onValue: function (e) {
              F(document, function () {
                !(function (e, t) {
                  Array.from(document.querySelectorAll('.extended-markdown'))
                    .filter(function (e) {
                      return t.some(function (t) {
                        return e.classList.contains(t)
                      })
                    })
                    .forEach(function (t) {
                      t.style.display = t.classList.contains(e) ? '' : 'none'
                    })
                  var r = Array.from(
                    document.querySelectorAll(
                      t
                        .map(function (e) {
                          return '.tool-'.concat(e)
                        })
                        .join(', ')
                    )
                  )
                  r.forEach(function (t) {
                    t.style.display = t.classList.contains('tool-'.concat(e))
                      ? ''
                      : 'none'
                  })
                })(e, Object.keys(l))
              })
            },
            preferenceName: 'application',
            ariaLabel: 'Tool',
            options: s,
          })
        },
        W = r(4818),
        X = r(8153),
        J = r(5741),
        Y = r(9099)
      function Q(e) {
        var t = e.track,
          r = (0, l.useRouter)().locale,
          s = (0, Y.$)('learning_track_nav').t,
          a = t.trackTitle,
          o = t.trackName,
          i = t.nextGuide,
          c = t.trackProduct,
          d = t.numberOfGuides,
          u = t.currentGuideIndex
        return (0, n.jsx)('div', {
          'data-testid': 'learning-track-card',
          className:
            'py-3 px-4 rounded color-bg-default border d-flex flex-justify-between mb-4 mx-2',
          children: (0, n.jsxs)('div', {
            className: 'd-flex flex-column width-full',
            children: [
              (0, n.jsx)(J.r, {
                href: '/'.concat(r, '/').concat(c, '/guides'),
                className: 'h4 color-fg-default mb-1',
                children: a,
              }),
              (0, n.jsx)('span', {
                className: 'f5 color-fg-muted',
                children: s('current_progress')
                  .replace('{n}', d)
                  .replace('{i}', u + 1),
              }),
              (0, n.jsx)('hr', {}),
              (0, n.jsx)('span', {
                className: 'h5 color-fg-default',
                children: i
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        s('next_guide'),
                        ':',
                        (0, n.jsx)(J.r, {
                          href: ''
                            .concat(i.href, '?')
                            .concat(
                              new URLSearchParams({ learn: o, learnProduct: c })
                            ),
                          className: 'text-bold color-fg f5 ml-1',
                          children: i.title,
                        }),
                      ],
                    })
                  : (0, n.jsx)(J.r, {
                      href: '/'.concat(r, '/').concat(c, '/guides'),
                      className: 'h5 text-bold color-fg f5 ml-1',
                      children: s('more_guides'),
                    }),
              }),
            ],
          }),
        })
      }
      var ee = r(2752),
        te = r(802),
        re = r(9815),
        ne = null,
        le = null,
        se = null
      function ae() {
        var e = document.querySelector('div.Popover')
        if (!e) {
          var t,
            r = document.createElement('div')
          r.setAttribute('data-testid', 'popover'),
            r.classList.add('Popover', 'position-absolute'),
            (r.style.display = 'none'),
            (r.style.outline = 'none'),
            (r.style.zIndex = '100')
          var n = document.createElement('div')
          ;(t = n.classList).add.apply(
            t,
            (0, re.Z)(
              'Popover-message Popover-message--large p-3 Box color-shadow-large'.split(
                /\s+/g
              )
            )
          ),
            (n.style.width = '360px')
          var l = document.createElement('p')
          l.classList.add('product'),
            l.classList.add('f6'),
            l.classList.add('color-fg-muted'),
            n.appendChild(l),
            n.appendChild(l)
          var s = document.createElement('h4')
          s.classList.add('h5'), s.classList.add('my-1'), n.appendChild(s)
          var a = document.createElement('p')
          a.classList.add('intro'),
            a.classList.add('f6'),
            a.classList.add('color-fg-muted'),
            n.appendChild(a)
          var o = document.createElement('p')
          o.classList.add('anchor'),
            o.classList.add('hover-card-anchor'),
            o.classList.add('f6'),
            o.classList.add('color-fg-muted'),
            n.appendChild(o),
            r.appendChild(n),
            document.body.appendChild(r),
            r.addEventListener('mouseover', function () {
              ne && window.clearTimeout(ne)
            }),
            r.addEventListener('mouseout', function () {
              ne = window.setTimeout(function () {
                ;(r.style.display = 'none'), (se = null)
              }, 200)
            }),
            (e = r)
        }
        return e
      }
      function oe(e) {
        if (
          !e.parentElement ||
          !e.parentElement.classList.contains('Popover')
        ) {
          var t = e.dataset.title,
            r = e.dataset.productTitle || '',
            n = e.dataset.intro || '',
            l = ''
          if (
            !t &&
            e.href.includes('#') &&
            e.href.split('#')[1] &&
            e.href.startsWith(
              ''.concat(window.location.href.split('#')[0], '#')
            )
          ) {
            var s = e.href.split('#')[1],
              a = document.querySelector('#'.concat(s))
            if (a && a.textContent) {
              l = a.textContent
              var o = document.querySelector('h1')
              if (o && o.textContent) {
                ;(t = o.textContent), (n = ''), (r = '')
                var i = document.querySelector('._product-title')
                i && i.textContent && (r = i.textContent)
                var c = document.querySelector('._page-intro')
                c && c.textContent && (n = c.textContent)
              }
            }
          }
          if (t) {
            var d = ae(),
              u = d.querySelector('p.product')
            u &&
              (r
                ? ((u.textContent = r), (u.style.display = 'block'))
                : (u.style.display = 'none'))
            var f = d.querySelector('p.anchor')
            f &&
              (l
                ? ((f.textContent = l), (f.style.display = 'block'))
                : (f.style.display = 'none')),
              ne && window.clearTimeout(ne)
            var m = d.querySelector('h4')
            m && (m.textContent = t)
            var h = d.querySelector('p.intro')
            h &&
              (n
                ? ((h.textContent = n), (h.style.display = 'block'))
                : (h.style.display = 'none'))
            var x = (0, B.Z)(
                (function (e) {
                  var t = e.offsetTop,
                    r = e.offsetLeft,
                    n = e.offsetParent
                  for (; n; )
                    (r += n.offsetLeft),
                      (t += n.offsetTop),
                      (n = n.offsetParent)
                  return [t, r]
                })(e),
                2
              ),
              p = x[0],
              v = x[1],
              g = (0, B.Z)(
                (function (e) {
                  var t = e.getBoundingClientRect(),
                    r = t.top,
                    n = t.left
                  return [r, n]
                })(e),
                1
              ),
              j = g[0],
              b = d.querySelector('.Popover-message'),
              y = j < 300
            if (
              (y
                ? (b.classList.remove('Popover-message--bottom-left'),
                  b.classList.add('Popover-message--top-left'))
                : (b.classList.remove('Popover-message--top-left'),
                  b.classList.add('Popover-message--bottom-left')),
              (d.style.top = ''.concat(p, 'px')),
              (d.style.left = ''.concat(v, 'px')),
              (d.style.display = 'block'),
              y)
            ) {
              d.style.top = ''.concat(p + 33, 'px')
            } else d.style.top = ''.concat(p - d.offsetHeight - 10, 'px')
          }
        }
      }
      function ie(e) {
        return (
          'A' === e.tagName &&
          e.href.startsWith(window.location.origin) &&
          e.closest('#article-contents, #article-intro') &&
          window.innerWidth > 767 &&
          !e.classList.contains('doctocat-link')
        )
      }
      function ce() {
        return (
          (0, p.useEffect)(function () {
            var e = function (e) {
                var t = e.target
                ie(t) &&
                  (function (e) {
                    le && window.clearTimeout(le),
                      e === se
                        ? oe(e)
                        : (le = window.setTimeout(function () {
                            oe(e), (se = e)
                          }, 300))
                  })(t)
              },
              t = function (e) {
                ie(e.target) &&
                  (le && window.clearTimeout(le),
                  (ne = window.setTimeout(function () {
                    ;(ae().style.display = 'none'), (se = null)
                  }, 200)))
              },
              r = document.querySelector('#main-content')
            return (
              r &&
                (r.addEventListener('mouseover', e),
                r.addEventListener('mouseout', t)),
              function () {
                r &&
                  (r.removeEventListener('mouseover', e),
                  r.removeEventListener('mouseout', t))
              }
            )
          }),
          null
        )
      }
      var de = r(2390),
        ue = r.n(de)
      function fe(e) {
        var t,
          r = e.supportPortalVaIframeProps,
          s = 'true' === (0, l.useRouter)().query.autoStartVa
        !(function (e) {
          ;(e.OPEN = 'open'), (e.START = 'start'), (e.STOP = 'stop')
        })(t || (t = {}))
        var a = (0, p.useState)(!1),
          o = a[0],
          i = a[1],
          c = (0, p.useRef)(null)
        if (
          ((0, p.useEffect)(function () {
            var e = function (e) {
              if (e.origin === r.supportPortalUrl)
                switch (e.data.type) {
                  case t.OPEN:
                    c.current &&
                      ((c.current.style.display = 'inline'),
                      (c.current.style.height = ''.concat(s ? 750 : 95, 'px')))
                    break
                  case t.START:
                    c.current && (c.current.style.height = ''.concat(750, 'px'))
                    break
                  case t.STOP:
                    i(!1)
                }
            }
            return (
              window.addEventListener('message', e),
              i(!0),
              function () {
                window.removeEventListener('message', e)
              }
            )
          }, []),
          !o)
        )
          return null
        var d = new URLSearchParams({ flow: r.vaFlowUrlParameter })
        d.set('flow', r.vaFlowUrlParameter), s && d.set('autoStartVa', 'true')
        var u = ''.concat(r.supportPortalUrl, '/iframe/docs_va?').concat(d)
        return (0, n.jsx)('iframe', {
          className: ue().supportPortalIframe,
          ref: c,
          title: 'support-portal-va',
          id: 'support-portal-iframe',
          src: u,
        })
      }
      N()(
        function () {
          return Promise.all([r.e(734), r.e(516)]).then(r.bind(r, 6516))
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [6516]
            },
          },
          ssr: !1,
        }
      )
      var me = function () {
          var e = (0, l.useRouter)(),
            t = b(),
            r = t.title,
            s = t.intro,
            a = t.effectiveDate,
            o = t.renderedPage,
            i = t.permissions,
            c = t.includesPlatformSpecificContent,
            d = t.includesToolSpecificContent,
            u = t.product,
            f = t.productVideoUrl,
            m = t.miniTocItems,
            h = t.currentLearningTrack,
            x = t.supportPortalVaIframeProps,
            p = !!(null === h || void 0 === h ? void 0 : h.trackName),
            v = (0, Y.$)(['pages']).t
          return (0, n.jsxs)(L.H, {
            children: [
              x.supportPortalUrl &&
                x.vaFlowUrlParameter &&
                (0, n.jsx)(fe, { supportPortalVaIframeProps: x }),
              (0, n.jsx)(ce, {}),
              false,
              (0, n.jsx)(X.$, {}),
              e.pathname.includes('/rest/') && (0, n.jsx)(ee.b, {}),
              (0, n.jsxs)('div', {
                className: 'container-xl px-3 px-md-6 my-4',
                children: [
                  (0, n.jsx)('div', {
                    className: _()('d-none d-xl-block mt-3 mr-auto width-full'),
                    children: (0, n.jsx)(te.O, {}),
                  }),
                  (0, n.jsx)(I.A, {
                    topper: (0, n.jsx)(S.j, { children: r }),
                    intro: (0, n.jsxs)(n.Fragment, {
                      children: [
                        s &&
                          (0, n.jsx)(E.r, {
                            'data-testid': 'lead',
                            'data-search': 'lead',
                            className: '_page-intro',
                            children: s,
                          }),
                        i && (0, n.jsx)(R.n, { permissions: i }),
                        c && (0, n.jsx)(G, {}),
                        d && (0, n.jsx)(K, {}),
                        u &&
                          (0, n.jsx)(P.U, {
                            variant: 'success',
                            className: 'mb-4',
                            dangerouslySetInnerHTML: { __html: u },
                          }),
                      ],
                    }),
                    toc: (0, n.jsxs)(n.Fragment, {
                      children: [
                        p && (0, n.jsx)(Q, { track: h }),
                        m.length > 1 && (0, n.jsx)(W.M, { miniTocItems: m }),
                      ],
                    }),
                    children: (0, n.jsxs)('div', {
                      id: 'article-contents',
                      children: [
                        f &&
                          (0, n.jsx)('div', {
                            className: 'my-2',
                            children: (0, n.jsxs)(J.r, {
                              id: 'product-video',
                              href: f,
                              target: '_blank',
                              children: [
                                (0, n.jsx)(k.LinkExternalIcon, {
                                  'aria-label': '(external site)',
                                  className: 'octicon-link mr-2',
                                }),
                                v('video_from_transcript'),
                              ],
                            }),
                          }),
                        (0, n.jsx)(T.S, { children: o }),
                        a &&
                          (0, n.jsxs)('div', {
                            className: 'mt-4',
                            id: 'effectiveDate',
                            children: [
                              'Effective as of:',
                              ' ',
                              (0, n.jsx)('time', {
                                dateTime: new Date(a).toISOString(),
                                children: new Date(a).toDateString(),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  p
                    ? (0, n.jsx)('div', {
                        className: 'mt-4',
                        children: (0, n.jsx)(C.V, { track: h }),
                      })
                    : null,
                ],
              }),
            ],
          })
        },
        he = r(169),
        xe = function () {
          var e = (0, x.on)(),
            t = e.productVideo,
            r = e.productVideoTranscript,
            l = e.shortTitle,
            s = e.title,
            a = e.beta_product,
            o = e.intro,
            i = e.introLinks,
            c = (0, Y.$)(['product_landing']).t,
            d = (0, p.useState)(!1),
            u = d[0],
            f = d[1]
          return (
            (0, p.useEffect)(function () {
              f(!0)
            }, []),
            (0, n.jsxs)('header', {
              className: 'd-lg-flex gutter-lg mb-6',
              children: [
                (0, n.jsxs)('div', {
                  className: _()('col-12 mb-3 mb-lg-0', t && 'col-lg-6'),
                  children: [
                    (0, n.jsxs)('h1', {
                      id: 'title-h1',
                      children: [
                        s,
                        ' ',
                        a &&
                          (0, n.jsx)('span', {
                            className: 'Label Label--success v-align-middle',
                            children: 'Beta',
                          }),
                      ],
                    }),
                    o &&
                      (0, n.jsx)(E.r, { 'data-search': 'lead', children: o }),
                    i &&
                      Object.entries(i)
                        .filter(function (e) {
                          var t = (0, B.Z)(e, 2),
                            r = t[0]
                          return t[1] && !r.includes('raw')
                        })
                        .map(function (e, t) {
                          var r = (0, B.Z)(e, 2),
                            l = r[0],
                            s = r[1]
                          return s
                            ? (0, n.jsx)(
                                pe,
                                {
                                  id: s,
                                  href: s,
                                  className: _()(
                                    'btn btn-large f4 mt-3 mr-3 ',
                                    0 === t && 'btn-primary'
                                  ),
                                  children: c(l) || l,
                                },
                                s
                              )
                            : null
                        }),
                  ],
                }),
                t &&
                  (0, n.jsxs)('div', {
                    className: 'col-12 col-lg-6',
                    children: [
                      (0, n.jsx)('div', {
                        className: 'position-relative',
                        style: { paddingBottom: '56.25%' },
                        children: (0, n.jsx)('iframe', {
                          title: ''.concat(l || s, ' Video'),
                          className:
                            'top-0 left-0 position-absolute color-shadow-large rounded-1 width-full height-full',
                          src: u ? t : '',
                          frameBorder: '0',
                          allow:
                            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                          allowFullScreen: !0,
                        }),
                      }),
                      r &&
                        (0, n.jsx)('div', {
                          className: 'position-relative my-2',
                          children: (0, n.jsxs)(pe, {
                            id: 'product-video',
                            href: r,
                            children: [
                              (0, n.jsx)(k.NoteIcon, {
                                className: 'octicon-link mr-2',
                                size: 'small',
                                verticalAlign: 'middle',
                              }),
                              c('view_transcript'),
                            ],
                          }),
                        }),
                    ],
                  }),
              ],
            })
          )
        },
        pe = function (e) {
          var t = e.href,
            r = e.id,
            s = e.children,
            a = e.className,
            o = (0, l.useRouter)(),
            i = (0, he.a)().currentVersion,
            c = t.startsWith('https'),
            d = t
          if (!c) {
            var u = o.locale || 'en'
            d = '/'
              .concat(u)
              .concat('free-pro-team@latest' !== i ? '/'.concat(i) : '')
              .concat(t)
          }
          return (0, n.jsxs)(J.r, {
            id: r,
            href: d,
            className: a,
            children: [
              s,
              ' ',
              c &&
                (0, n.jsx)('span', {
                  className: 'ml-1',
                  children: (0, n.jsx)(k.LinkExternalIcon, {
                    'aria-label': '(external site)',
                    size: 'small',
                  }),
                }),
            ],
          })
        },
        ve = r(5568),
        ge = function () {
          var e = (0, x.on)(),
            t = e.featuredArticles,
            r = void 0 === t ? [] : t,
            l = e.whatsNewChangelog,
            s = e.changelogUrl,
            a = l && l.length > 0,
            o = (0, Y.$)('toc').t
          return (0, n.jsxs)('div', {
            className: 'd-lg-flex gutter my-6 py-6',
            children: [
              r.map(function (e, t) {
                var r =
                  'startHere' === e.key
                    ? "All '".concat(e.label, "' content")
                    : 'All '.concat(e.label)
                return (0,
                n.jsx)('div', { className: _()('col-12 mb-4 mb-lg-0', a ? 'col-lg-4' : 'col-lg-6'), children: (0, n.jsx)(ve.w, (0, H.Z)((0, Z.Z)({ title: e.label, viewAllHref: e.viewAllHref }, e.viewAllHref ? { viewAllTitleText: r } : {}), { articles: e.articles })) }, e.label + t)
              }),
              a &&
                (0, n.jsx)('div', {
                  className: _()('col-12 mb-4 mb-lg-0 col-lg-4'),
                  children: (0, n.jsx)(ve.w, {
                    title: o('whats_new'),
                    viewAllHref: s,
                    viewAllTitleText: o('all_changelogs'),
                    articles: (l || []).map(function (e) {
                      return { title: e.title, date: e.date, href: e.href }
                    }),
                  }),
                }),
            ],
          })
        },
        je = function (e) {
          var t = e.guide,
            r = t.authors && t.authors.length > 0 ? t.authors : ['GitHub'],
            l = '@'.concat(r.join(', @'))
          return (0, n.jsx)('li', {
            className: 'col-lg-4 col-12 mb-4 list-style-none',
            children: (0, n.jsxs)('a', {
              className:
                'Box color-shadow-medium height-full d-block hover-shadow-large no-underline color-fg-default p-5',
              href: t.href,
              children: [
                (0, n.jsx)('h3', { className: 'f2', children: t.title }),
                (0, n.jsx)('p', {
                  className: 'mt-2 mb-4 color-fg-muted',
                  children: t.intro || '',
                }),
                (0, n.jsx)('footer', {
                  className: 'd-flex',
                  children: (0, n.jsx)('div', { children: l }),
                }),
              ],
            }),
          })
        },
        be = function () {
          var e = (0, l.useRouter)(),
            t = (0, h.Hv)().currentCategory,
            r = (0, x.on)(),
            s = r.featuredLinks,
            a = r.hasGuidesPage,
            o = (0, Y.$)('product_landing').t,
            i = '/'.concat(e.locale).concat(e.asPath.split('?')[0])
          return s.guideCards
            ? (0, n.jsxs)('div', {
                children: [
                  (0, n.jsx)('div', {
                    className: 'd-lg-flex flex-items-stretch',
                    children: (0, n.jsx)('ul', {
                      className: 'd-flex flex-wrap gutter width-full',
                      children: (s.guideCards || []).map(function (e) {
                        return (0, n.jsx)(je, { guide: e }, e.href)
                      }),
                    }),
                  }),
                  !t &&
                    a &&
                    (0, n.jsxs)(J.r, {
                      href: ''.concat(i, '/guides'),
                      className: 'btn btn-outline float-right',
                      children: [
                        o('explore_guides'),
                        ' ',
                        (0, n.jsx)(k.ArrowRightIcon, {}),
                      ],
                    }),
                ],
              })
            : null
        },
        ye = function (e) {
          var t = e.user,
            r = e.href
          return (0, n.jsxs)('a', {
            className:
              'Box d-flex height-full color-shadow-medium hover-shadow-large no-underline color-fg-default p-4',
            href: r || 'https://github.com/'.concat(t.username),
            children: [
              (0, n.jsx)('div', {
                className: 'flex-shrink-0 mr-3',
                children: (0, n.jsx)('img', {
                  src: 'https://github.com/'.concat(t.username, '.png'),
                  alt: t.username,
                  className: 'avatar avatar-8 circle',
                }),
              }),
              (0, n.jsxs)('div', {
                className: 'flex-auto',
                children: [
                  (0, n.jsx)('h4', { children: t.username }),
                  (0, n.jsx)('p', {
                    className: 'mt-1 color-fg-muted',
                    children: t.description,
                  }),
                ],
              }),
            ],
          })
        },
        Ne = function () {
          var e = (0, x.on)().productUserExamples,
            t = (0, Y.$)('product_landing').t
          return e
            ? (0, n.jsxs)('div', {
                children: [
                  (0, n.jsx)('div', {
                    className: 'd-flex flex-wrap gutter',
                    children: e.slice(0, 6).map(function (e) {
                      return (0,
                      n.jsx)('div', { className: 'col-12 col-xl-4 col-lg-6 mb-4', children: (0, n.jsx)(ye, { href: 'https://github.com/sponsors/'.concat(e.username), user: e }) }, e.username)
                    }),
                  }),
                  (0, n.jsxs)(J.r, {
                    href: 'https://github.com/sponsors/community',
                    className: 'btn btn-outline float-right',
                    children: [
                      t('explore_people_and_projects'),
                      ' ',
                      (0, n.jsx)(k.ArrowRightIcon, {}),
                    ],
                  }),
                ],
              })
            : null
        },
        we = function (e) {
          var t = e.repo,
            r = e.href
          return (0, n.jsxs)('a', {
            className:
              'Box d-flex height-full color-shadow-medium hover-shadow-large no-underline color-fg-default p-4',
            href: r || 'https://github.com/'.concat(t.repo),
            children: [
              (0, n.jsx)('div', {
                className: 'flex-shrink-0 mr-3',
                children: (0, n.jsx)('img', {
                  src: 'https://github.com/'.concat(
                    t.repo.split('/')[0],
                    '.png'
                  ),
                  alt: t.repo,
                  className: 'avatar avatar-8',
                }),
              }),
              (0, n.jsxs)('div', {
                className: 'flex-auto',
                children: [
                  (0, n.jsx)('h4', { children: t.repo }),
                  (0, n.jsx)('p', {
                    className: 'mt-1 color-fg-muted',
                    children: t.description,
                  }),
                ],
              }),
            ],
          })
        },
        _e = function () {
          var e = (0, x.on)().productCommunityExamples,
            t = (0, Y.$)('product_landing').t,
            r = (0, p.useState)(6),
            l = r[0],
            s = r[1]
          return e
            ? (0, n.jsxs)('div', {
                children: [
                  (0, n.jsx)('div', {
                    className: 'd-flex flex-wrap gutter',
                    children: e.slice(0, l).map(function (e) {
                      return (0,
                      n.jsx)('div', { className: 'col-12 col-xl-4 col-lg-6 mb-4', children: (0, n.jsx)(we, { repo: e }) }, e.repo)
                    }),
                  }),
                  l < e.length &&
                    (0, n.jsxs)('button', {
                      className: 'btn btn-outline float-right',
                      onClick: function () {
                        return s(e.length)
                      },
                      children: [
                        t('show_more'),
                        ' ',
                        (0, n.jsx)(k.ArrowRightIcon, {}),
                      ],
                    }),
                ],
              })
            : null
        },
        ke = r(3625),
        Pe = r(7378),
        Le = r(2125),
        Se = r(4200),
        Ce = r(5390),
        Te = r(5173)
      const Ee = Le.ZP.span.withConfig({
        displayName: 'Label',
        componentId: 'sc-1dgcne-0',
      })(
        [
          'align-items:center;background-color:transparent;border-width:1px;border-radius:999px;border-style:solid;display:inline-flex;font-weight:',
          ';font-size:',
          ';line-height:1;white-space:nowrap;',
          ';',
          ';',
          ';',
        ],
        (0, Ce.U2)('fontWeights.bold'),
        (0, Ce.U2)('fontSizes.0'),
        (0, Se.variant)({
          variants: {
            default: { borderColor: 'border.default' },
            primary: { borderColor: 'fg.default' },
            secondary: { borderColor: 'border.muted', color: 'fg.muted' },
            accent: { borderColor: 'accent.emphasis', color: 'accent.fg' },
            success: { borderColor: 'success.emphasis', color: 'success.fg' },
            attention: {
              borderColor: 'attention.emphasis',
              color: 'attention.fg',
            },
            severe: { borderColor: 'severe.emphasis', color: 'severe.fg' },
            danger: { borderColor: 'danger.emphasis', color: 'danger.fg' },
            done: { borderColor: 'done.emphasis', color: 'done.fg' },
            sponsors: {
              borderColor: 'sponsors.emphasis',
              color: 'sponsors.fg',
            },
          },
        }),
        (0, Se.variant)({
          prop: 'size',
          variants: {
            small: { height: '20px', padding: '0 7px' },
            large: { height: '24px', padding: '0 10px' },
          },
        }),
        Te.Z
      )
      Ee.defaultProps = { size: 'small', variant: 'default' }
      var Re = Ee,
        Ie = function (e) {
          var t = e.example
          return (0, n.jsxs)('a', {
            className:
              'Box d-flex flex-column flex-justify-between height-full color-shadow-medium hover-shadow-large no-underline color-fg-default',
            'data-testid': 'code-example-card',
            href: 'https://github.com/'.concat(t.href),
            children: [
              (0, n.jsxs)('div', {
                className: 'p-4',
                children: [
                  (0, n.jsx)('h3', { className: 'f4', children: t.title }),
                  (0, n.jsx)('p', {
                    className: 'mt-2 mb-4 color-fg-muted',
                    children: t.description,
                  }),
                  (0, n.jsx)('div', {
                    className: 'd-flex flex-wrap',
                    children: t.tags.map(function (e) {
                      return (0,
                      n.jsx)(Re, { variant: 'accent', sx: { mb: 1, mr: 2 }, children: e }, e)
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)('footer', {
                className:
                  'border-top p-4 color-fg-muted d-flex flex-items-center',
                children: [
                  (0, n.jsx)(k.RepoIcon, {
                    'aria-label': 'repository URL',
                    className: 'flex-shrink-0',
                  }),
                  (0, n.jsx)(Pe.u, {
                    as: 'span',
                    maxLines: 1,
                    className:
                      'ml-2 text-mono text-small color-fg-accent line-break-anywhere',
                    children: t.href,
                  }),
                ],
              }),
            ],
          })
        },
        Ae = function () {
          var e = (0, x.on)().productCodeExamples,
            t = (0, Y.$)('product_landing').t,
            r = (0, p.useState)(6),
            l = r[0],
            s = r[1],
            a = (0, p.useState)(''),
            o = a[0],
            i = a[1],
            c = (0, p.useState)(''),
            d = c[0],
            u = c[1]
          ;(0, p.useEffect)(
            function () {
              s(6)
            },
            [o]
          )
          var f = !!o,
            m = []
          if (f) {
            var h = new RegExp(
              o.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
              'i'
            )
            m = e.filter(function (e) {
              var t = ''
                .concat(e.tags.join(' '), ' ')
                .concat(e.title, ' ')
                .concat(e.description)
              return h.test(t)
            })
          }
          return (0, n.jsxs)('div', {
            children: [
              (0, n.jsxs)('form', {
                'data-search': 'hide',
                className: 'pr-lg-3 mb-5 mt-3',
                onSubmit: function (e) {
                  e.preventDefault(), i(d.trim())
                },
                children: [
                  (0, n.jsx)(ke.Z, {
                    className: 'ml-1 mr-2',
                    fontWeight: 'bold',
                    fontSize: 2,
                    as: 'label',
                    htmlFor: 'searchCodeExamples',
                    id: 'searchCodeExamples',
                    children: t('code_example.search_examples'),
                  }),
                  (0, n.jsx)('input', {
                    'data-testid': 'code-examples-input',
                    className:
                      'input-lg py-2 px-3 col-12 col-lg-8 form-control',
                    placeholder: t('search_code_examples'),
                    type: 'search',
                    autoComplete: 'off',
                    'aria-label': t('search_code_examples'),
                    onChange: function (e) {
                      return u(e.target.value)
                    },
                    value: d,
                  }),
                  (0, n.jsx)('button', {
                    'data-testid': 'code-examples-search-btn',
                    className: 'btn ml-2 py-2',
                    type: 'submit',
                    children: t('code_example.search_button'),
                  }),
                ],
              }),
              f &&
                (0, n.jsxs)('div', {
                  role: 'status',
                  children: [
                    (0, n.jsxs)('h3', {
                      children: [t('search_results_for'), ': ', o],
                    }),
                    (0, n.jsxs)('p', {
                      className: 'mb-4',
                      children: [t('matches_displayed'), ': ', m.length],
                    }),
                  ],
                }),
              (0, n.jsx)('ul', {
                'data-testid': 'code-example-results',
                className: 'd-flex flex-wrap gutter',
                children: (f ? m : e.slice(0, l)).map(function (e) {
                  return (0,
                  n.jsx)('li', { className: 'col-12 col-xl-4 col-lg-6 mb-4 list-style-none', children: (0, n.jsx)(Ie, { example: e }) }, e.href)
                }),
              }),
              l < e.length &&
                !f &&
                (0, n.jsxs)('button', {
                  'data-testid': 'code-examples-show-more',
                  className: 'btn btn-outline float-right',
                  onClick: function () {
                    return s(l + 6)
                  },
                  children: [
                    t('show_more'),
                    ' ',
                    (0, n.jsx)(k.ArrowRightIcon, {}),
                  ],
                }),
              f &&
                0 === m.length &&
                (0, n.jsxs)('div', {
                  role: 'status',
                  'data-testid': 'code-examples-no-results',
                  className: 'py-4 text-center color-fg-muted',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'mb-3',
                      children: [(0, n.jsx)(k.SearchIcon, { size: 24 }), ' '],
                    }),
                    (0, n.jsxs)('h3', {
                      className: 'text-normal',
                      children: [
                        t('sorry'),
                        ' ',
                        (0, n.jsx)('strong', { children: o }),
                      ],
                    }),
                    (0, n.jsxs)('p', {
                      className: 'my-3 f4',
                      children: [
                        t('no_example'),
                        ' ',
                        (0, n.jsx)('br', {}),
                        ' ',
                        t('try_another'),
                      ],
                    }),
                    (0, n.jsxs)(J.r, {
                      href: 'https://github.com/github/docs/tree/main/data/product-examples',
                      children: [
                        t('learn'),
                        ' ',
                        (0, n.jsx)(k.ArrowRightIcon, {}),
                      ],
                    }),
                  ],
                }),
            ],
          })
        },
        qe = function (e) {
          var t = e.title,
            r = e.children,
            l = e.className,
            s = e.sectionLink,
            a = e.description,
            o = (0, h.Hv)().page
          return (0, n.jsxs)('div', {
            className: _()('container-xl px-3 px-md-6 mt-6', l),
            id: s,
            children: [
              t &&
                (0, n.jsx)('h2', {
                  className: _()('h1 color-fg-default', a ? 'mb-4' : 'mb-3'),
                  children: s
                    ? (0, n.jsxs)('a', {
                        className: 'color-unset',
                        href: '#'.concat(s),
                        'aria-label': ''
                          .concat(o.title, ' - ')
                          .concat(t, ' section'),
                        children: [
                          (0, n.jsx)(k.LinkIcon, {
                            size: 24,
                            className: 'm-1',
                          }),
                          t,
                        ],
                      })
                    : t,
                }),
              a &&
                (0, n.jsx)('div', {
                  className: 'color-fg-muted f4',
                  dangerouslySetInnerHTML: { __html: a },
                }),
              r,
            ],
          })
        },
        Ze = r(7210),
        He = function () {
          var e = (0, h.Hv)().currentProductTree
          return e
            ? (0, n.jsx)('div', {
                className: 'd-flex gutter flex-wrap',
                'data-testid': 'product-articles-list',
                children: e.childPages.map(function (e, t) {
                  return 'article' === e.documentType
                    ? null
                    : (0, n.jsx)(Be, { treeNode: e }, e.href + t)
                }),
              })
            : null
        },
        Be = function (e) {
          var t = e.treeNode
          return (0, n.jsxs)('div', {
            className: 'col-12 col-lg-4 mb-6 height-full',
            children: [
              (0, n.jsx)('h3', {
                className: 'mb-3 f4',
                children: (0, n.jsx)(J.r, {
                  className: 'color-unset text-underline',
                  href: t.href,
                  children: t.title,
                }),
              }),
              (0, n.jsx)(Ze.S, {
                variant: 'full',
                children: t.childPages.map(function (e, t) {
                  return (0,
                  n.jsx)(Ze.S.Item, { as: 'li', className: _()('width-full pl-0'), sx: { borderRadius: 0, ':hover': { borderRadius: 0 } }, children: (0, n.jsxs)(J.r, { className: 'd-block width-full', href: e.href, children: [e.title, 'mapTopic' === e.documentType ? (0, n.jsxs)('small', { className: 'color-fg-muted d-inline-block', children: ['\xa0\u2022 ', e.childPages.length, ' articles'] }) : null] }) }, e.href + t)
                }),
              }),
            ],
          })
        }
      function Ve() {
        var e = (0, Y.$)('product_landing').t,
          t = (0, l.useRouter)(),
          r = (0, h.Hv)(),
          s = r.enterpriseServerReleases,
          a = r.allVersions,
          o = (0, x.on)(),
          i = o.ghesReleases,
          c = o.title,
          d = o.shortTitle,
          u = t.asPath.split('?')[0]
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)('div', {
              className: 'd-lg-flex gutter-lg flex-items-stretch',
              children: i.map(function (r) {
                var l = r.version
                if (!s.supported.includes(l)) return null
                var o = 'enterprise-server@'.concat(l),
                  i = r.patches[0],
                  u = 'enterprise-server@'.concat(r.firstPreviousRelease),
                  f = 'enterprise-server@'.concat(r.secondPreviousRelease)
                return (0, n.jsx)(
                  'div',
                  {
                    className: 'col-lg-4 col-12 mb-4',
                    children: (0, n.jsxs)('div', {
                      className:
                        'Box color-shadow-medium height-full d-block hover-shadow-large no-underline color-fg-default p-5',
                      children: [
                        (0, n.jsx)('h3', {
                          className: 'f2',
                          children: a[o].versionTitle,
                        }),
                        (0, n.jsxs)('p', {
                          className: 'mt-2 mb-4 color-fg-muted',
                          children: [
                            (0, n.jsx)(k.ListUnorderedIcon, {}),
                            ' ',
                            (0, n.jsxs)(J.r, {
                              className: 'text-bold',
                              href: '/'
                                .concat(t.locale, '/')
                                .concat(o, '/admin/release-notes#')
                                .concat(i.version),
                              children: [
                                e('release_notes_for'),
                                ' ',
                                i.version,
                              ],
                            }),
                            ' ',
                            '(',
                            i.date,
                            ')',
                          ],
                        }),
                        (0, n.jsxs)('p', {
                          className: 'mt-2 mb-4 color-fg-muted',
                          children: [
                            (0, n.jsx)(k.ArrowUpIcon, {}),
                            ' ',
                            e('upgrade_from'),
                            ' ',
                            (0, n.jsx)(J.r, {
                              className: 'text-bold',
                              href: '/'
                                .concat(t.locale, '/')
                                .concat(
                                  u,
                                  '/admin/enterprise-management/upgrading-github-enterprise-server'
                                ),
                              children: r.firstPreviousRelease,
                            }),
                            ' ',
                            'or',
                            ' ',
                            (0, n.jsx)(J.r, {
                              className: 'text-bold',
                              href: '/'
                                .concat(t.locale, '/')
                                .concat(
                                  f,
                                  '/admin/enterprise-management/upgrading-github-enterprise-server'
                                ),
                              children: r.secondPreviousRelease,
                            }),
                          ],
                        }),
                        (0, n.jsxs)('p', {
                          className: 'mt-2 mb-4 color-fg-muted',
                          children: [
                            (0, n.jsx)(k.FileIcon, {}),
                            ' ',
                            (0, n.jsx)(J.r, {
                              className: 'text-bold',
                              'aria-label': ''
                                .concat(d || c, ' - ')
                                .concat(e('browse_all'), ' ')
                                .concat(l, ' ')
                                .concat(e('docs')),
                              href: '/'.concat(t.locale, '/').concat(o),
                              children: e('browse_all_docs'),
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  l
                )
              }),
            }),
            (0, n.jsxs)(J.r, {
              href: ''.concat(u, '/release-notes'),
              className: 'btn btn-outline float-right',
              children: [
                e('explore_release_notes'),
                ' ',
                (0, n.jsx)(k.ArrowRightIcon, {}),
              ],
            }),
          ],
        })
      }
      var $e = function () {
          var e,
            t = (0, l.useRouter)(),
            r = (0, he.a)().isEnterpriseServer,
            s = (0, x.on)(),
            a = s.title,
            o = s.shortTitle,
            i = s.featuredLinks,
            c = s.productUserExamples,
            d = s.productCommunityExamples,
            u = s.productCodeExamples,
            f = (0, Y.$)('product_landing').t
          return (0, n.jsx)(L.H, {
            children: (0, n.jsxs)('div', {
              'data-search': 'article-body',
              children: [
                'rest' === t.query.productId && (0, n.jsx)(ee.b, {}),
                (0, n.jsx)(qe, {
                  className: 'pt-3',
                  children: (0, n.jsx)(xe, {}),
                }),
                (0, n.jsx)(qe, { children: (0, n.jsx)(ge, {}) }),
                u.length > 0 &&
                  (0, n.jsx)(qe, {
                    title: f('code_examples'),
                    sectionLink: 'code-examples',
                    className: 'my-6 pb-6',
                    children: (0, n.jsx)(Ae, {}),
                  }),
                d.length > 0 &&
                  (0, n.jsx)(qe, {
                    title: f('communities_using_discussions'),
                    className: 'my-6 pb-6',
                    children: (0, n.jsx)(_e, {}),
                  }),
                c.length > 0 &&
                  (0, n.jsx)(qe, {
                    title: f('sponsor_community'),
                    className: 'my-6 pb-6',
                    children: (0, n.jsx)(Ne, {}),
                  }),
                'admin' === t.query.productId &&
                  r &&
                  (0, n.jsx)(qe, {
                    title: f('supported_releases'),
                    className: 'my-6 pb-6',
                    children: (0, n.jsx)(Ve, {}),
                  }),
                (null === (e = i.guideCards) || void 0 === e
                  ? void 0
                  : e.length) > 0 &&
                  (0, n.jsx)('div', {
                    className: 'color-bg-subtle py-6',
                    children: (0, n.jsx)(qe, {
                      title: f('guides'),
                      sectionLink: 'guides-2',
                      className: 'my-6',
                      children: (0, n.jsx)(be, {}),
                    }),
                  }),
                (0, n.jsx)(qe, {
                  title: f('all_docs').replace('{{ title }}', o || a),
                  sectionLink: 'all-docs',
                  className: 'pt-9',
                  children: (0, n.jsx)(He, {}),
                }),
              ],
            }),
          })
        },
        Ue = r(4726),
        ze = r.n(Ue),
        Me = function () {
          var e,
            t = g(),
            r = t.title,
            l = t.intro,
            s = t.featuredTrack,
            a = (0, Y.$)('product_guides').t,
            o =
              null === s ||
              void 0 === s ||
              null === (e = s.guides) ||
              void 0 === e
                ? void 0
                : e.map(function (e) {
                    var t, r
                    return (0,
                    n.jsx)('li', { className: 'px-2 d-flex flex-shrink-0', style: { width: 280 }, children: (0, n.jsxs)(J.r, { href: ''.concat(e.href, '?learn=').concat(s.trackName, '&learnProduct=').concat(s.trackProduct), className: 'd-inline-block Box p-5 color-bg-default color-border-default no-underline', children: [(0, n.jsxs)('div', { className: 'd-flex flex-justify-between flex-items-center', children: [(0, n.jsx)('div', { className: 'color-bg-default color-fg-accent border d-inline-flex flex-items-center flex-justify-center circle', style: { width: 40, height: 40 }, children: s.guides && (0, n.jsx)('span', { className: 'f2 lh-condensed-ultra text-center text-bold', children: (null === (t = s.guides) || void 0 === t ? void 0 : t.indexOf(e)) + 1 }) }), (0, n.jsx)('div', { className: 'color-fg-muted h6 text-uppercase', children: a('guide_types')[(null === (r = e.page) || void 0 === r ? void 0 : r.type) || ''] })] }), (0, n.jsx)('h3', { className: 'text-semibold my-4 color-fg-default', children: e.title }), (0, n.jsx)(Pe.u, { maxLines: 8, className: 'color-fg-muted f5 my-4', children: (0, n.jsx)('span', { dangerouslySetInnerHTML: { __html: e.intro } }) })] }) }, e.href)
                  })
          return (0, n.jsxs)('div', {
            children: [
              (0, n.jsx)('header', {
                className: 'd-flex gutter mb-6 my-4',
                children: (0, n.jsxs)('div', {
                  className: 'col-12',
                  children: [
                    (0, n.jsx)('h1', { id: 'title-h1', children: r }),
                    l &&
                      (0, n.jsx)(E.r, { 'data-search': 'lead', children: l }),
                  ],
                }),
              }),
              s &&
                s.guides &&
                s.guides.length > 0 &&
                (0, n.jsxs)('div', {
                  className:
                    'mb-6 position-relative overflow-hidden mr-n3 ml-n3 px-3',
                  children: [
                    (0, n.jsxs)('ul', {
                      'data-testid': 'feature-track',
                      className:
                        'list-style-none d-flex flex-nowrap overflow-x-scroll px-2',
                      children: [
                        (0, n.jsx)('li', {
                          className: 'px-2 d-flex flex-shrink-0',
                          style: { width: 290 },
                          children: (0, n.jsxs)('div', {
                            className: 'd-inline-block Box p-5 color-bg-subtle',
                            children: [
                              (0, n.jsx)('div', {
                                className:
                                  'd-inline-flex flex-items-center flex-justify-center circle border',
                                style: {
                                  width: 40,
                                  height: 40,
                                  border: '2px white solid',
                                },
                                children: (0, n.jsx)(k.StarFillIcon, {
                                  size: 24,
                                }),
                              }),
                              (0, n.jsx)('h2', {
                                className: 'text-semibold my-4 f3',
                                children: s.title,
                              }),
                              (0, n.jsx)('div', {
                                className: 'f5 my-4',
                                children: s.description,
                              }),
                              (0, n.jsxs)(J.r, {
                                'aria-label': ''
                                  .concat(s.title, ' - ')
                                  .concat(a('start_path')),
                                className:
                                  'd-inline-flex flex-items-center flex-justify-center btn ws-normal px-4 py-2 f5 no-underline text-bold',
                                role: 'button',
                                href: ''
                                  .concat(s.guides[0].href, '?learn=')
                                  .concat(s.trackName, '&learnProduct=')
                                  .concat(s.trackProduct),
                                children: [
                                  a('start_path'),
                                  (0, n.jsx)(k.ArrowRightIcon, {
                                    size: 20,
                                    className: 'ml-2',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        o,
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: _()(
                        'position-absolute top-0 bottom-0 left-0 ml-3 pl-3',
                        ze().fadeLeft
                      ),
                    }),
                    (0, n.jsx)('div', {
                      className: _()(
                        'position-absolute top-0 bottom-0 right-0 mr-3 pr-3',
                        ze().fadeRight
                      ),
                    }),
                  ],
                }),
            ],
          })
        },
        Oe = r(9911),
        Ge = r(7010),
        Fe = r.n(Ge),
        De = function (e) {
          var t,
            r,
            l,
            s,
            a = e.track,
            o = (0, p.useState)(4),
            i = o[0],
            c = o[1],
            d = (0, Y.$)('product_guides').t,
            u = (null === a || void 0 === a ? void 0 : a.title)
              ? (0, Oe.o)(null === a || void 0 === a ? void 0 : a.title)
              : ''
          return (0, n.jsx)('div', {
            'data-testid': 'learning-track',
            className: 'my-3 px-4 col-12 col-md-6',
            children: (0, n.jsxs)('div', {
              className: 'Box d-flex flex-column',
              children: [
                (0, n.jsxs)('div', {
                  className:
                    'Box-header color-bg-subtle p-4 d-flex flex-1 flex-items-start flex-wrap',
                  children: [
                    (0, n.jsx)('div', {
                      className:
                        'd-flex flex-auto flex-items-start col-7 col-md-7 col-xl-7',
                      children: (0, n.jsxs)('div', {
                        className: 'my-xl-0 mr-xl-3',
                        children: [
                          (0, n.jsx)('h3', {
                            id: u,
                            className: _()(
                              'mb-3 color-text f3 text-semibold',
                              Fe().hashAnchor
                            ),
                            children: (0, n.jsx)('a', {
                              className: 'color-unset',
                              href: '#'.concat(u),
                              children:
                                null === a || void 0 === a ? void 0 : a.title,
                            }),
                          }),
                          (0, n.jsx)(Pe.u, {
                            as: 'p',
                            maxLines: 3,
                            className: 'color-text',
                            children:
                              null === a || void 0 === a
                                ? void 0
                                : a.description,
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsxs)(J.r, {
                      'aria-label': ''
                        .concat(
                          null === a || void 0 === a ? void 0 : a.title,
                          ' - '
                        )
                        .concat(d('start_path')),
                      className:
                        'd-inline-flex btn no-wrap mt-3 mt-md-0 flex-items-center flex-justify-center',
                      href: ''
                        .concat(
                          (null === a || void 0 === a ? void 0 : a.guides) &&
                            (null === a || void 0 === a
                              ? void 0
                              : a.guides[0].href),
                          '?learn='
                        )
                        .concat(
                          null === a || void 0 === a ? void 0 : a.trackName,
                          '&learnProduct='
                        )
                        .concat(
                          null === a || void 0 === a ? void 0 : a.trackProduct
                        ),
                      children: [
                        (0, n.jsx)('span', { children: d('start_path') }),
                        (0, n.jsx)(k.ArrowRightIcon, {
                          size: 20,
                          className: 'ml-2',
                        }),
                      ],
                    }),
                  ],
                }),
                a &&
                  a.guides &&
                  (0, n.jsx)('div', {
                    style: { counterReset: 'li' },
                    children: (0, n.jsx)(Ze.S, {
                      as: 'ol',
                      variant: 'full',
                      children:
                        null === a ||
                        void 0 === a ||
                        null === (t = a.guides) ||
                        void 0 === t
                          ? void 0
                          : t.slice(0, i).map(function (e) {
                              var t
                              return (0, n.jsx)(
                                Ze.S.Item,
                                {
                                  as: 'li',
                                  className: 'width-full p-0',
                                  sx: {
                                    position: 'relative',
                                    borderRadius: 0,
                                    ':hover': { borderRadius: 0 },
                                    ':before': {
                                      width: 'calc(1.5rem - 0px)',
                                      height: 'calc(1.5rem - 0px)',
                                      fontSize: 'calc(1rem - 1px)',
                                      margin: '22px 0 0 1rem',
                                      content: 'counter(li)',
                                      counterIncrement: 'li',
                                      position: 'absolute',
                                      left: 0,
                                      color: 'var(--color-canvas-default)',
                                      fontWeight: 500,
                                      textAlign: 'center',
                                      borderRadius: '50%',
                                      backgroundColor:
                                        'var(--color-fg-default)',
                                    },
                                  },
                                  children: (0, n.jsxs)(J.r, {
                                    className:
                                      'rounded-0 pl-7 py-4 width-full d-block Box-row d-flex flex-items-center color-fg-default no-underline',
                                    href: ''
                                      .concat(e.href, '?learn=')
                                      .concat(
                                        null === a || void 0 === a
                                          ? void 0
                                          : a.trackName,
                                        '&learnProduct='
                                      )
                                      .concat(
                                        null === a || void 0 === a
                                          ? void 0
                                          : a.trackProduct
                                      ),
                                    children: [
                                      (0, n.jsx)('h4', {
                                        className: 'flex-auto pr-2 f5',
                                        dangerouslySetInnerHTML: {
                                          __html: e.title,
                                        },
                                      }),
                                      (0, n.jsx)('div', {
                                        className:
                                          'color-fg-muted h6 text-uppercase flex-shrink-0',
                                        children:
                                          d('guide_types')[
                                            (null === (t = e.page) ||
                                            void 0 === t
                                              ? void 0
                                              : t.type) || ''
                                          ],
                                      }),
                                    ],
                                  }),
                                },
                                e.href +
                                  (null === a || void 0 === a
                                    ? void 0
                                    : a.trackName)
                              )
                            }),
                    }),
                  }),
                (0, n.jsx)('button', {
                  'data-search': 'hide',
                  className:
                    'Box-footer btn-link border-top-0 position-relative text-center text-bold color-fg-accent pt-1 pb-3 col-12 ' +
                    (((null === a ||
                    void 0 === a ||
                    null === (r = a.guides) ||
                    void 0 === r
                      ? void 0
                      : r.length) || 0) <= i && _()(Fe().removeHoverEvents)),
                  onClick: function () {
                    var e
                    c(
                      (null === a ||
                      void 0 === a ||
                      null === (e = a.guides) ||
                      void 0 === e
                        ? void 0
                        : e.length) || 0
                    )
                  },
                  children:
                    ((null === a ||
                    void 0 === a ||
                    null === (l = a.guides) ||
                    void 0 === l
                      ? void 0
                      : l.length) || 0) > i
                      ? (0, n.jsxs)('div', {
                          children: [
                            (0, n.jsx)('div', {
                              className: _()(
                                'position-absolute left-0 right-0 py-5',
                                Fe().fadeBottom
                              ),
                              style: { bottom: '50px' },
                            }),
                            (0, n.jsxs)('span', {
                              children: [
                                'Show ',
                                ((null === a ||
                                void 0 === a ||
                                null === (s = a.guides) ||
                                void 0 === s
                                  ? void 0
                                  : s.length) || 0) - i,
                                ' ',
                                d('more_guides'),
                              ],
                            }),
                          ],
                        })
                      : (0, n.jsx)('span', {
                          className: 'color-fg-default',
                          children: 'All guides shown',
                        }),
                }),
              ],
            }),
          })
        },
        Ke = function () {
          var e = g().learningTracks
          return (0, n.jsx)('div', {
            className: 'd-flex flex-wrap flex-items-start my-5 gutter',
            children: (e || []).map(function (e) {
              return (0,
              n.jsx)(De, { track: e }, null === e || void 0 === e ? void 0 : e.title)
            }),
          })
        },
        We = function (e) {
          var t = e.tabIndex,
            r = e.card,
            l = e.typeLabel
          return (0, n.jsx)('li', {
            tabIndex: t,
            'data-testid': 'article-card',
            className: 'd-flex col-12 col-md-4 pr-0 pr-md-6 pr-lg-8',
            children: (0, n.jsxs)(J.r, {
              className: 'no-underline d-flex flex-column py-3 border-bottom',
              href: r.href,
              children: [
                (0, n.jsx)('h3', {
                  className: 'h4 color-fg-default mb-1',
                  children: r.title,
                }),
                (0, n.jsx)('div', {
                  className: 'h6 text-uppercase',
                  'data-testid': 'article-card-type',
                  children: l,
                }),
                (0, n.jsx)('p', {
                  className: 'color-fg-muted my-3',
                  children: r.intro,
                }),
                r.topics.length > 0 &&
                  (0, n.jsx)('ul', {
                    style: { listStyleType: 'none' },
                    children: r.topics.map(function (e) {
                      return (0,
                      n.jsx)('li', { className: 'd-inline-block', children: (0, n.jsx)(Re, { 'data-testid': 'article-card-topic', size: 'small', variant: 'accent', sx: { mr: 1 }, children: e }) }, e)
                    }),
                  }),
              ],
            }),
          })
        },
        Xe = r(6140),
        Je = function () {
          var e = (0, Y.$)('product_guides').t,
            t = e('guide_types'),
            r = g(),
            l = r.allTopics,
            s = r.includeGuides,
            a = (0, p.useState)(9),
            o = a[0],
            i = a[1],
            c = (0, p.useState)(),
            d = c[0],
            u = c[1],
            f = (0, p.useState)(),
            m = f[0],
            h = f[1],
            x = (0, p.useState)([]),
            v = x[0],
            j = x[1],
            b = (0, p.useRef)(null),
            y = (0, p.useRef)(null),
            N = (0, p.useRef)(null)
          ;(0, p.useEffect)(
            function () {
              i(9),
                j(
                  (s || []).filter(function (e) {
                    var t =
                        e.type ===
                        (null === d || void 0 === d ? void 0 : d.key),
                      r = e.topics.some(function (e) {
                        return (
                          e === (null === m || void 0 === m ? void 0 : m.key)
                        )
                      })
                    return (
                      (!(null === d || void 0 === d ? void 0 : d.key) || t) &&
                      (!(null === m || void 0 === m ? void 0 : m.key) || r)
                    )
                  })
                )
            },
            [d, m]
          )
          var w = function (e) {
              e === b && b.current && b.current.focus(),
                e === y && y.current && y.current.focus()
            },
            _ = void 0 !== d || void 0 !== m ? v : s || [],
            k = Object.entries(t).map(function (e) {
              var t = (0, B.Z)(e, 2),
                r = t[0]
              return { text: t[1], key: r }
            })
          k.unshift({ text: e('filters.all'), key: void 0 })
          var P =
            null === l || void 0 === l
              ? void 0
              : l.map(function (e) {
                  return { text: e, key: e }
                })
          return (
            P.unshift({ text: e('filters.all'), key: void 0 }),
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsxs)('div', {
                  'data-search': 'hide',
                  children: [
                    (0, n.jsx)('label', {
                      htmlFor: 'guide-filter-form',
                      children: e('filter_instructions'),
                    }),
                    (0, n.jsxs)('form', {
                      name: 'guide-filter-form',
                      className: 'mt-2 mb-5 d-flex d-flex',
                      children: [
                        (0, n.jsxs)('div', {
                          'data-testid': 'card-filter-types',
                          children: [
                            (0, n.jsx)('div', {
                              onClick: function () {
                                return w(b)
                              },
                              onKeyDown: function () {
                                return w(b)
                              },
                              role: 'button',
                              tabIndex: -1,
                              className:
                                'text-uppercase f6 color-fg-muted d-block',
                              children: e('filters.type'),
                            }),
                            (0, n.jsxs)(Xe.P, {
                              anchorRef: b,
                              children: [
                                (0, n.jsx)(Xe.P.Button, {
                                  children: d ? d.text : e('filters.all'),
                                }),
                                (0, n.jsx)(Xe.P.Overlay, {
                                  'aria-label': 'types',
                                  'data-testid': 'types-dropdown',
                                  children: (0, n.jsx)(Ze.S, {
                                    selectionVariant: 'single',
                                    children: k.map(function (e) {
                                      return (0, n.jsx)(
                                        Ze.S.Item,
                                        {
                                          onSelect: function () {
                                            return u(e)
                                          },
                                          children: e.text,
                                        },
                                        e.text
                                      )
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)('div', {
                          'data-testid': 'card-filter-topics',
                          className: 'mx-4',
                          children: [
                            (0, n.jsx)('div', {
                              onClick: function () {
                                return w(y)
                              },
                              onKeyDown: function () {
                                return w(y)
                              },
                              role: 'button',
                              tabIndex: -1,
                              className:
                                'text-uppercase f6 color-fg-muted d-block',
                              children: e('filters.topic'),
                            }),
                            (0, n.jsxs)(Xe.P, {
                              anchorRef: y,
                              children: [
                                (0, n.jsx)(Xe.P.Button, {
                                  children: m ? m.text : e('filters.all'),
                                }),
                                (0, n.jsx)(Xe.P.Overlay, {
                                  'aria-label': 'topics',
                                  'data-testid': 'topics-dropdown',
                                  children: (0, n.jsx)(Ze.S, {
                                    selectionVariant: 'single',
                                    children: P.map(function (e) {
                                      return (0, n.jsx)(
                                        Ze.S.Item,
                                        {
                                          onSelect: function () {
                                            return h(e)
                                          },
                                          children: e.text,
                                        },
                                        e.text
                                      )
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)('div', {
                      role: 'status',
                      className: 'color-fg-muted',
                      children:
                        0 === _.length
                          ? e('guides_found.none')
                          : 1 === _.length
                          ? e('guides_found.one')
                          : e('guides_found.multiple').replace('{n}', _.length),
                    }),
                  ],
                }),
                (0, n.jsx)('ul', {
                  'data-testid': 'article-cards',
                  ref: N,
                  className: 'd-flex flex-wrap mr-0 mr-md-n6 mr-lg-n8',
                  children: _.slice(0, o).map(function (e) {
                    return (0,
                    n.jsx)(We, { tabIndex: -1, card: e, typeLabel: t[e.type] }, e.href)
                  }),
                }),
                _.length > o &&
                  (0, n.jsx)('button', {
                    className:
                      'col-12 mt-5 text-center text-bold color-fg-accent btn-link',
                    'data-search': 'hide',
                    onClick: function () {
                      if (N.current) {
                        var e = N.current.childElementCount
                        N.current.childNodes.item(e - 1).focus()
                      }
                      i(o + 9)
                    },
                    children: e('load_more'),
                  }),
              ],
            })
          )
        },
        Ye = function () {
          var e = g(),
            t = e.title,
            r = e.learningTracks,
            l = e.includeGuides,
            s = (0, Y.$)('product_guides').t,
            a = (0, h.Hv)().currentProduct,
            o = (null === a || void 0 === a ? void 0 : a.name) || t,
            i = /{{\s*name\s*}}/
          return (0, n.jsxs)(L.H, {
            children: [
              (0, n.jsx)(qe, {
                className: 'pt-3',
                children: (0, n.jsx)(Me, {}),
              }),
              (0, n.jsxs)('div', {
                'data-search': 'article-body',
                children: [
                  r &&
                    r.length > 0 &&
                    (0, n.jsx)(qe, {
                      title: s('learning_paths_title').replace(i, o),
                      className: 'border-top py-6',
                      sectionLink: 'learning-paths',
                      description: s('learning_paths_desc'),
                      children: (0, n.jsx)(Ke, {}),
                    }),
                  l &&
                    (0, n.jsx)(qe, {
                      title: s('all_guides_title').replace(i, o),
                      className: 'border-top py-6 color-border-default',
                      sectionLink: 'all-guides',
                      children: (0, n.jsx)(Je, {}),
                    }),
                ],
              }),
            ],
          })
        },
        Qe = r(4197),
        et = r(8370)
      function tt() {
        !(function () {
          var e = Array.from(document.querySelectorAll('button.js-btn-copy'))
          e &&
            e.forEach(function (e) {
              return e.addEventListener(
                'click',
                (0, s.Z)(
                  o().mark(function t() {
                    var r, n
                    return o().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ((r = e.dataset.clipboardText)) {
                              t.next = 3
                              break
                            }
                            return t.abrupt('return')
                          case 3:
                            return (
                              (t.next = 5), navigator.clipboard.writeText(r)
                            )
                          case 5:
                            ;(n = e.getAttribute('aria-label') || ''),
                              e.setAttribute('aria-label', 'Copied!'),
                              setTimeout(function () {
                                e.setAttribute('aria-label', n)
                              }, 2e3)
                          case 8:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
              )
            })
        })(),
          (function () {
            var e = document.querySelector('#to-english-doc')
            if (e) {
              var t = window.location.pathname.split('/')
              ;(t[1] = 'en'), (e.href = t.join('/'))
            }
          })(),
          (function () {
            var e = document.querySelectorAll('#article-contents table code')
            e &&
              e.forEach(function (e) {
                var t = c()(e.textContent || ''),
                  r = e.querySelector('a'),
                  n = t.replace(d, function (e) {
                    return e
                      .replace(u, '$1<wbr>$2')
                      .replace(f, '$1_<wbr>')
                      .replace(m, '$1<wbr>')
                  })
                r && 1 === e.childNodes.length
                  ? (r.innerHTML = r.innerHTML.replace(t, n))
                  : (e.innerHTML = e.innerHTML.replace(t, n))
              })
          })()
      }
      var rt = !0,
        nt = function (e) {
          var t,
            r = e.mainContext,
            s = e.productLandingContext,
            a = e.productGuidesContext,
            o = e.tocLandingContext,
            i = e.articleContext,
            c = (0, l.useRouter)()
          if (
            ((0, p.useEffect)(
              function () {
                return (
                  tt(),
                  c.events.on('routeChangeComplete', tt),
                  function () {
                    c.events.off('routeChangeComplete', tt)
                  }
                )
              },
              [c.events]
            ),
            s)
          )
            t = (0, n.jsx)(x.u6.Provider, {
              value: s,
              children: (0, n.jsx)($e, {}),
            })
          else if (a)
            t = (0, n.jsx)(v.Provider, {
              value: a,
              children: (0, n.jsx)(Ye, {}),
            })
          else if (o)
            t = (0, n.jsx)(et.qj.Provider, {
              value: o,
              children: (0, n.jsx)(Qe.Y, {}),
            })
          else {
            if (!i) throw new Error('No context provided to page')
            t = (0, n.jsx)(j.Provider, {
              value: i,
              children: (0, n.jsx)(me, {}),
            })
          }
          return (0, n.jsx)(h.Tr.Provider, { value: r, children: t })
        }
    },
    2390: function (e) {
      e.exports = {
        supportPortalIframe: 'SupportPortalVaIframe_supportPortalIframe__RbSZJ',
      }
    },
    4726: function (e) {
      e.exports = {
        fadeLeft: 'GuidesHero_fadeLeft__BZJc_',
        fadeRight: 'GuidesHero_fadeRight__GbPpK',
      }
    },
    7010: function (e) {
      e.exports = {
        fadeBottom: 'LearningTrack_fadeBottom__B26I6',
        removeHoverEvents: 'LearningTrack_removeHoverEvents__XrhTS',
        hashAnchor: 'LearningTrack_hashAnchor__8cMnX',
      }
    },
    3883: function (e) {
      e.exports = {
        indentNested: 'Minitocs_indentNested__1d725',
        nested: 'Minitocs_nested__ViBDJ',
        miniToc: 'Minitocs_miniToc__2ZFtg',
      }
    },
  },
])
