;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [871],
  {
    4871: function (e, t, r) {
      'use strict'
      r.d(t, {
        H: function () {
          return ct
        },
      })
      var n,
        a = r(5893),
        i = r(9008),
        s = r.n(i),
        o = r(1163),
        l = r(4184),
        c = r.n(l),
        u = r(4702),
        d = r(7294),
        h = r(2815),
        m = r(9099),
        f = r(5741),
        p = r(2208),
        x = r(3034),
        v = r(3137),
        g = r.n(v),
        b = function (e) {
          var t = (0, o.useRouter)(),
            r = e.routePath,
            i = e.title,
            s = e.page,
            l = e.isStandaloneCategory,
            u = (0, d.useState)(''),
            m = u[0],
            v = u[1],
            b = (0, d.useState)(''),
            j = b[0],
            y = b[1],
            N = r.includes(s.href + '/') || r === s.href,
            _ = (0, d.useState)(N),
            w = _[0],
            S = _[1],
            k = (0, d.useState)(N),
            T = k[0],
            E = k[1],
            L =
              'rest' === t.query.productId ||
              t.asPath.includes('/rest/guides') ||
              t.asPath.includes('/rest/overview') ||
              t.asPath.includes('/rest/quickstart')
                ? []
                : (0, x.HZ)().miniTocItems
          ;(0, d.useEffect)(function () {
            m || v(window.location.hash)
            var e = function () {
              v(window.location.hash)
            }
            return (
              window.addEventListener('hashchange', e),
              function () {
                window.removeEventListener('hashchange', e)
              }
            )
          }, []),
            (0, d.useEffect)(
              function () {
                if (
                  !t.asPath.includes('guides') &&
                  !t.asPath.includes('overview') &&
                  !t.asPath.includes('quickstart')
                ) {
                  var e = new IntersectionObserver(
                    function (e) {
                      e.forEach(function (e) {
                        if (e.target.id) {
                          var r = '#' + e.target.id.split('--')[0]
                          !0 === e.isIntersecting && y(r)
                        } else t.asPath.includes('#') ? y('#' + t.asPath.split('#')[1]) : y('')
                      })
                    },
                    { rootMargin: '0px 0px -85% 0px' }
                  )
                  return (
                    Array.from(document.querySelectorAll('h2, h3')).forEach(
                      function (t) {
                        e.observe(t)
                      }
                    ),
                    function () {
                      e.disconnect()
                    }
                  )
                }
              },
              [L]
            ),
            (0, d.useEffect)(
              function () {
                E(!0)
              },
              [t.query.subcategory]
            )
          var P = function (e) {
            var t = e.contents.href,
              r = e.contents.title,
              n = j === t
            return (0, a.jsx)(
              'a',
              {
                onClick: function () {
                  return y(t)
                },
                href: t,
                className: c()(
                  g().operationWidth,
                  'color-fg-default no-underline'
                ),
                children: (0, a.jsx)(h.L.Item, {
                  id: t,
                  current: n,
                  defaultExpanded: n,
                  children: r,
                }),
              },
              t
            )
          }
          return (0, a.jsx)('div', {
            className: 'ml-3',
            'data-testid': 'rest-category',
            children: l
              ? (0, a.jsxs)(h.L.Item, {
                  id: s.href,
                  expanded: N && w,
                  onExpandedChange: S,
                  defaultExpanded: N,
                  children: [
                    (0, a.jsx)(f.r, {
                      href: s.href,
                      className:
                        'color-fg-default no-underline d-block width-full',
                      children: i,
                    }),
                    (0, a.jsx)(h.L.SubTree, {
                      children:
                        L.length > 0 &&
                        (0, a.jsx)(a.Fragment, {
                          children: L.map(function (e) {
                            return P(e)
                          }),
                        }),
                    }),
                  ],
                })
              : (0, a.jsxs)(h.L.Item, {
                  id: i,
                  defaultExpanded: N,
                  children: [
                    i,
                    (0, a.jsx)(h.L.SubTree, {
                      children: s.childPages.map(function (e, i) {
                        var s = e.shortTitle || e.title,
                          o = r.includes(e.href + '/') || r === e.href,
                          l = r === e.href
                        return (0, a.jsx)(
                          'div',
                          {
                            className: c()(g().toggleHover),
                            'data-testid': 'rest-subcategory',
                            children: (0, a.jsxs)(h.L.Item, {
                              id: e.href,
                              expanded: l && T,
                              onExpandedChange: function () {
                                return E(l && T)
                              },
                              defaultExpanded: o,
                              onSelect: function (r) {
                                r.preventDefault()
                                var a = r.target
                                e.href.split('/').pop() ===
                                  t.query.subcategory &&
                                  T &&
                                  (n = a),
                                  n && n === a
                                    ? E(!T)
                                    : (t.push(e.href),
                                      (0, p.qP)({
                                        type: p.tw.navigate,
                                        navigate_label:
                                          'rest page navigate to: '.concat(
                                            e.href
                                          ),
                                      })),
                                  (n = a)
                              },
                              children: [
                                s,
                                (0, a.jsx)(h.L.SubTree, {
                                  children:
                                    r === e.href
                                      ? (0, a.jsx)(a.Fragment, {
                                          children:
                                            L.length > 0 &&
                                            (0, a.jsx)(a.Fragment, {
                                              children: L.map(function (e) {
                                                return P(e)
                                              }),
                                            }),
                                        })
                                      : (0, a.jsx)('div', {}),
                                }),
                              ],
                            }),
                          },
                          e.href + i
                        )
                      }),
                    }),
                  ],
                }),
          })
        },
        j = function (e) {
          var t,
            r,
            n = e.routePath,
            i = e.page,
            s = function (e) {
              var t = e.shortTitle || e.title,
                r = n === e.href
              return (0, a.jsx)(
                f.r,
                {
                  href: e.href,
                  className: c()(
                    'color-fg-default no-underline',
                    r ? 'text-bold' : ''
                  ),
                  children: (0, a.jsx)(h.L.Item, {
                    id: e.href,
                    'data-testid': 'sidebar-article',
                    current: r,
                    defaultExpanded: r,
                    onSelect: function () {
                      ;(0, p.qP)({
                        type: p.tw.navigate,
                        navigate_label: 'product page navigate to: '.concat(
                          e.href
                        ),
                      })
                    },
                    children: t,
                  }),
                },
                e.href
              )
            }
          return (0, a.jsx)(a.Fragment, {
            children:
              'mapTopic' ===
              (null === (t = i.childPages[0]) || void 0 === t
                ? void 0
                : t.documentType)
                ? (0, a.jsx)(a.Fragment, {
                    children: i.childPages.map(function (e, t) {
                      var r = e.shortTitle || e.title,
                        i = n.includes(e.href),
                        o = n === e.href
                      return (0, a.jsx)(
                        'div',
                        {
                          children: (0, a.jsxs)(h.L.Item, {
                            defaultExpanded: i,
                            id: r,
                            current: o,
                            children: [
                              r,
                              (0, a.jsx)(h.L.SubTree, {
                                'data-testid': 'sidebar-article-group',
                                children: e.childPages.map(function (e) {
                                  return s(e)
                                }),
                              }),
                            ],
                          }),
                        },
                        e.href + t
                      )
                    }),
                  })
                : 'article' ===
                  (null === (r = i.childPages[0]) || void 0 === r
                    ? void 0
                    : r.documentType)
                ? (0, a.jsx)('div', {
                    'data-testid': 'sidebar-article-group',
                    children: i.childPages.map(function (e) {
                      return s(e)
                    }),
                  })
                : null,
          })
        },
        y = function () {
          var e = (0, o.useRouter)(),
            t = (0, d.useRef)(null),
            r = (0, u.Hv)(),
            n = r.currentProduct,
            i = r.currentProductTree,
            s = (0, m.$)(['products']).t,
            l = n && 'rest' === n.id
          if (
            ((0, d.useEffect)(function () {
              var t = document.querySelector('[aria-expanded=true]')
              null === t ||
                void 0 === t ||
                t.scrollIntoView({ block: 'center' }),
                e.asPath.includes('#') ||
                  null === window ||
                  void 0 === window ||
                  window.scrollTo(0, 0)
            }, []),
            !i)
          )
            return null
          var p = '/'
            .concat(e.locale)
            .concat(e.asPath.split('?')[0].split('#')[0])
          return (0, a.jsx)('div', {
            'data-testid': 'sidebar',
            ref: t,
            style: { overflowY: 'auto' },
            className: 'pt-3',
            children: l
              ? (function () {
                  var e = i.childPages.filter(function (e) {
                      return (
                        e.href.includes('guides') ||
                        e.href.includes('overview') ||
                        e.href.includes('quickstart')
                      )
                    }),
                    t = i.childPages.filter(function (e) {
                      return (
                        !e.href.includes('guides') &&
                        !e.href.includes('overview') &&
                        !e.href.includes('quickstart')
                      )
                    })
                  return (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)('div', {
                        className: 'ml-3',
                        children: (0, a.jsx)(h.L, {
                          'aria-label': 'rest sidebar',
                          children: e.map(function (e, t) {
                            var r = e.shortTitle || e.title,
                              n = p.includes(e.href + '/') || p === e.href
                            return (0,
                            a.jsx)('div', { children: e.href.includes('quickstart') ? (0, a.jsx)(h.L.Item, { id: e.href, current: n, children: (0, a.jsx)(f.r, { href: e.href, className: c()('d-block no-underline width-full color-fg-default'), children: r }) }, e.href + t) : (0, a.jsxs)(h.L.Item, { id: e.href, defaultExpanded: n, children: [r, (0, a.jsx)(h.L.SubTree, { children: (0, a.jsx)(j, { routePath: p, title: r, page: e }) })] }, e.href + t) }, r)
                          }),
                        }),
                      }),
                      (0, a.jsxs)('div', {
                        className: 'my-3',
                        children: [
                          (0, a.jsx)('div', {
                            role: 'separator',
                            'aria-hidden': 'true',
                            'data-view-component': 'true',
                            className: 'mb-3',
                          }),
                          (0, a.jsx)('span', {
                            'data-testid': 'rest-sidebar-reference',
                            className: c()('f6 pl-3 color-fg-muted'),
                            children: s('rest.reference.api_reference'),
                          }),
                        ],
                      }),
                      (0, a.jsx)(h.L, {
                        children: t.map(function (e, t) {
                          var r = 'article' === e.documentType,
                            n = e.shortTitle || e.title
                          return (0,
                          a.jsx)(b, { routePath: p, title: n, page: e, isStandaloneCategory: r }, e.href + t)
                        }),
                      }),
                    ],
                  })
                })()
              : (0, a.jsx)('div', {
                  className: 'ml-3',
                  'data-testid': 'product-sidebar',
                  children: (0, a.jsx)(h.L, {
                    'aria-label': 'product sidebar',
                    children:
                      i &&
                      i.childPages.map(function (e, t) {
                        var r = 'article' === e.documentType,
                          n = e.shortTitle || e.title,
                          i = p.includes(e.href + '/') || p === e.href
                        return (0,
                        a.jsx)('div', { children: r ? (0, a.jsx)(h.L.Item, { id: e.href, current: p === e.href, children: (0, a.jsx)(f.r, { href: e.href, className: 'color-fg-default no-underline', children: n }) }, e.href + t) : (0, a.jsxs)(h.L.Item, { defaultExpanded: i, id: e.href, current: p === e.href, children: [n, (0, a.jsx)(h.L.SubTree, { children: (0, a.jsx)(j, { routePath: p, title: n, page: e }) })] }, e.href + t) }, e.title)
                      }),
                  }),
                }),
          })
        },
        N = r(5529),
        _ = r(169),
        w = function () {
          var e = (0, o.useRouter)(),
            t = (0, _.a)().currentVersion,
            r = (0, u.Hv)(),
            n = r.activeProducts,
            i = r.isFPT
          return (0, a.jsx)('div', {
            'data-testid': 'sidebar',
            className: 'mt-3',
            children: (0, a.jsx)(h.L, {
              children: n
                .filter(function (e) {
                  var r
                  return (
                    i ||
                    (null === (r = e.versions) || void 0 === r
                      ? void 0
                      : r.includes(t)) ||
                    e.external
                  )
                })
                .map(function (r) {
                  var n,
                    s = ''
                      .concat(r.external ? '' : '/'.concat(e.locale))
                      .concat(
                        (null === (n = r.versions) || void 0 === n
                          ? void 0
                          : n.includes(t)) && !i
                          ? '/'.concat(t, '/').concat(r.id)
                          : r.href
                      )
                  return (0,
                  a.jsx)(h.L.Item, { id: r.id, children: (0, a.jsxs)(f.r, { href: s, target: r.external ? '_blank' : void 0, className: 'd-block f4 my-1 pr-5 py-2 color-fg-default no-underline width-full', children: [r.name, r.external && (0, a.jsx)('span', { className: 'ml-1', children: (0, a.jsx)(N.LinkExternalIcon, { 'aria-label': '(external site)', size: 'small' }) })] }) }, r.id)
                }),
            }),
          })
        },
        S = function () {
          var e = (0, o.useRouter)(),
            t = (0, _.a)().currentVersion,
            r = t === _.e ? '' : '/'.concat(t)
          return (0, a.jsx)('div', {
            className: 'mt-3',
            children: (0, a.jsxs)(f.r, {
              href: '/'.concat(e.locale).concat(r),
              className:
                'f6 pl-2 pr-5 ml-n1 pb-1 Link--primary color-fg-default',
              children: [
                (0, a.jsx)(N.ArrowLeftIcon, {
                  size: 'small',
                  className: 'mr-1',
                }),
                'All products',
              ],
            }),
          })
        },
        k = r(1955),
        T = r(6140),
        E = r(919),
        L = r(7210),
        P = r(6563),
        R = r.n(P),
        I = function (e) {
          var t = e.open,
            r = e.setOpen,
            n = e.items,
            i = e.onSelect,
            s = e.renderItem
          return (0, a.jsx)(L.S, {
            selectionVariant: 'single',
            children: n.map(function (e, n) {
              var o, l
              return e.divider
                ? (0, a.jsx)(L.S.Divider, {}, 'divider'.concat(n))
                : (0, a.jsx)(
                    L.S.Item,
                    {
                      as: f.r,
                      href: e.href,
                      selected: !0 === e.selected,
                      onClick: function () {
                        i && i(e), r(!t)
                      },
                      className:
                        ((null === (o = e.extra) || void 0 === o
                          ? void 0
                          : o.arrow) ||
                          (null === (l = e.extra) || void 0 === l
                            ? void 0
                            : l.info)) &&
                        R().extrasDisplay,
                      sx: {
                        ':hover': { textDecoration: 'none', textAlign: 'left' },
                      },
                      children: s ? s(e) : e.text,
                    },
                    e.text
                  )
            }),
          })
        },
        C = function (e) {
          var t = e.items,
            r = e.iconButton,
            n = e.ariaLabel,
            i = e.pickerLabel,
            s = e.dataTestId,
            o = e.defaultText,
            l = e.onSelect,
            c = e.buttonBorder,
            u = e.alignment,
            h = e.renderItem,
            m = (0, d.useState)(!1),
            f = m[0],
            p = m[1],
            x = t.find(function (e) {
              return !0 === e.selected
            })
          return (0, a.jsxs)(T.P, {
            open: f,
            onOpenChange: p,
            children: [
              r
                ? (0, a.jsx)(T.P.Anchor, {
                    children: (0, a.jsx)(E.h, { icon: r, 'aria-label': n }),
                  })
                : (0, a.jsxs)(T.P.Button, {
                    'aria-label': n,
                    variant: c ? 'default' : 'invisible',
                    sx: {
                      color: 'var(--color-fg-default)',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                    },
                    children: [
                      i &&
                        (0, a.jsx)('span', {
                          className: 'color-fg-muted text-normal',
                          children: ''.concat(i, ': '),
                        }),
                      (0, a.jsx)('span', {
                        'data-testid': s,
                        children:
                          (null === x || void 0 === x ? void 0 : x.text) || o,
                      }),
                    ],
                  }),
              (0, a.jsx)(T.P.Overlay, {
                width: 'auto',
                align: u,
                children: (0, a.jsx)(I, {
                  open: f,
                  setOpen: p,
                  items: t,
                  onSelect: l,
                  renderItem: h,
                }),
              }),
            ],
          })
        },
        V = r(2752),
        A = ' (latest)'
      var H = function () {
          var e = (0, o.useRouter)(),
            t = (0, _.a)().currentVersion,
            r = (0, u.Hv)().allVersions,
            n = (0, m.$)(['products']).t,
            i = e.asPath.split('#')[0].split('?')[0],
            s =
              (e.query.apiVersion &&
                'string' === typeof e.query.apiVersion &&
                r[t].apiVersions.includes(e.query.apiVersion)) ||
              !1
                ? e.query.apiVersion
                : r[t].latestApiVersion,
            l = s === r[t].latestApiVersion ? s + A : s,
            c = r[t].apiVersions.map(function (n) {
              var a = '/'.concat(e.locale).concat(i, '?apiVersion=').concat(n)
              return {
                text: n === r[t].latestApiVersion ? n + A : n,
                selected: e.query.apiVersion === n,
                href: a,
                extra: { info: !1, currentDate: s },
              }
            })
          return (
            c.push({
              text: n('rest.versioning.about_versions'),
              selected: !1,
              href: '/'
                .concat(e.locale)
                .concat(
                  t === _.e ? '' : '/'.concat(t),
                  '/rest/overview/api-versions'
                ),
              extra: { info: !0, currentDate: s },
            }),
            r[t].apiVersions.length > 0
              ? (0, a.jsx)('div', {
                  className: 'mb-3',
                  children: (0, a.jsx)('div', {
                    'data-testid': 'api-version-picker',
                    className: 'width-full',
                    children: (0, a.jsx)(C, {
                      defaultText: l,
                      items: c,
                      pickerLabel: 'API Version',
                      alignment: 'start',
                      buttonBorder: !0,
                      dataTestId: 'version',
                      ariaLabel: 'Select API Version',
                      onSelect: function (e) {
                        var t
                        ;(null === (t = e.extra) || void 0 === t
                          ? void 0
                          : t.currentDate) &&
                          (function (e) {
                            try {
                              var t = e.replace(A, '')
                              k.Z.set(V.x, t, {
                                expires: 365,
                                secure: 'http:' !== document.location.protocol,
                              })
                            } catch (r) {
                              console.warn(
                                'Unable to set preferred api version cookie',
                                r
                              )
                            }
                          })(e.extra.currentDate)
                      },
                      renderItem: function (e) {
                        var t
                        return (
                          null === (t = e.extra) || void 0 === t
                            ? void 0
                            : t.info
                        )
                          ? (0, a.jsxs)('div', {
                              className: 'f6',
                              children: [
                                e.text,
                                (0, a.jsx)(N.InfoIcon, {
                                  verticalAlign: 'middle',
                                  size: 15,
                                  className: 'ml-1',
                                }),
                              ],
                            })
                          : e.text
                      },
                    }),
                  }),
                })
              : null
          )
        },
        O = function (e) {
          var t = e.variant,
            r = void 0 === t ? 'full' : t,
            n = (0, u.Hv)(),
            i = n.currentProduct,
            s = n.currentProductTree,
            o = i && 'rest' === i.id,
            l =
              (null === s || void 0 === s ? void 0 : s.shortTitle) ||
              (null === s || void 0 === s ? void 0 : s.title),
            d = o ? '250px' : '185px'
          return (0, a.jsxs)('div', {
            className: c()(
              'full' === r
                ? 'position-sticky d-none border-right d-xl-block'
                : ''
            ),
            style: { width: 326, height: 'calc(100vh - 65px)', top: '65px' },
            children: [
              'full' === r &&
                s &&
                (0, a.jsxs)('div', {
                  className: c()('d-none px-4 pb-3 border-bottom d-xl-block'),
                  children: [
                    (0, a.jsx)(S, {}),
                    i &&
                      (0, a.jsx)('div', {
                        className: 'mt-3',
                        children: (0, a.jsx)(f.r, {
                          'data-testid': 'sidebar-product-xl',
                          href: s.href,
                          className:
                            'd-block pl-1 mb-2 h3 color-fg-default no-underline _product-title',
                          children: l,
                        }),
                      }),
                    'full' === r && o && (0, a.jsx)(H, {}),
                  ],
                }),
              (0, a.jsx)('div', {
                className: c()(
                  'overlay' === r
                    ? 'd-xl-none'
                    : 'border-right d-none d-xl-block',
                  'bg-primary overflow-y-auto flex-shrink-0'
                ),
                style: { width: 326, height: '100vh', paddingBottom: d },
                role: 'banner',
                children: (0, a.jsx)('nav', {
                  'aria-labelledby': 'title-h1',
                  children:
                    i && 'search' !== i.id
                      ? (0, a.jsx)(y, {})
                      : (0, a.jsx)(w, {}),
                }),
              }),
            ],
          })
        },
        Z = r(6042),
        D = r(9396),
        q = r(7297),
        B = r(2708),
        W = r(7205),
        F = r(3404)
      var z = r(5770),
        M = r(3454),
        Y = (M.env.ROOT, 'user_language')
      M.env.TRANSLATIONS_ROOT, parseInt(M.env.REQUEST_TIMEOUT || 1e4, 10)
      var $ = function (e) {
          var t = e.mediumOrLower,
            r = (0, o.useRouter)(),
            n = (0, z.u)().languages,
            i = r.locale || 'en',
            s = (0, m.$)('picker').t,
            l = Object.values(n)
          if (l.length < 2) return null
          var c = n[i],
            u = r.asPath.split('#')[0]
          return (0, a.jsx)('div', {
            'data-testid': 'language-picker',
            children: (0, a.jsx)(C, {
              defaultText: s('language_picker_default_text'),
              items: l.map(function (e) {
                return {
                  text: e.nativeName || e.name,
                  selected: e === c,
                  href: '/'.concat(e.code).concat(u),
                  extra: { locale: e.code },
                }
              }),
              pickerLabel: t ? 'Language' : '',
              iconButton: t ? void 0 : N.GlobeIcon,
              onSelect: function (e) {
                var t
                ;(null === (t = e.extra) || void 0 === t ? void 0 : t.locale) &&
                  (function (e) {
                    try {
                      k.Z.set(Y, e, {
                        expires: 365,
                        secure: 'http:' !== document.location.protocol,
                      })
                    } catch (t) {
                      console.warn('Unable to set preferred language cookie', t)
                    }
                  })(e.extra.locale)
              },
              buttonBorder: t,
              dataTestId: 'default-language',
              ariaLabel: 'Select language: current language is '.concat(c.name),
              alignment: t ? 'start' : 'end',
            }),
          })
        },
        G = r(9815)
      function U(e) {
        return null !== e
      }
      var J,
        Q = r(1109),
        K = r.n(Q)
      !(function (e) {
        ;(e.RELEASE = 'RELEASE'),
          (e.TRANSLATION = 'TRANSLATION'),
          (e.EARLY_ACCESS = 'EARLY_ACCESS')
      })(J || (J = {}))
      var X = function () {
          var e = (0, o.useRouter)(),
            t = (0, _.a)().currentVersion,
            r = (0, u.Hv)(),
            n = r.relativePath,
            i = r.allVersions,
            s = r.data,
            l = r.currentPathWithoutLanguage,
            h = r.page,
            f = (function () {
              var e = (0, o.useRouter)().locale,
                t = (0, d.useState)('en'),
                r = t[0],
                n = t[1],
                a = (0, z.u)().languages
              return (
                (0, d.useEffect)(
                  function () {
                    var e = [k.Z.get(Y), navigator.language]
                      .concat((0, G.Z)(navigator.languages))
                      .filter(Boolean)
                      .map(function (e) {
                        return e && e.slice(0, 2).toLowerCase()
                      })
                      .find(function (e) {
                        return e && e in a
                      })
                    e && n(e)
                  },
                  [e]
                ),
                { userLanguage: r }
              )
            })().userLanguage,
            p = (0, z.u)().languages,
            x = (0, m.$)('header').t,
            v = []
          if ('en' === e.locale) {
            if (f && 'en' !== f && p[f]) {
              var g,
                b = '/'.concat(f)
              '/' !== l && (b += l),
                v.push({
                  type: J.TRANSLATION,
                  content: 'This article is also available in <a href="'
                    .concat(b, '">')
                    .concat(
                      null === (g = p[f]) || void 0 === g ? void 0 : g.name,
                      '</a>.'
                    ),
                })
            }
          } else
            (null === n || void 0 === n ? void 0 : n.includes('/site-policy'))
              ? v.push({
                  type: J.TRANSLATION,
                  content: s.reusables.policies.translation,
                })
              : e.locale &&
                v.push({
                  type: J.TRANSLATION,
                  content: x('notices.localization_complete'),
                })
          var j = []
          'github-ae@latest' === t
            ? j.push({
                type: J.RELEASE,
                content: x('notices.ghae_silent_launch'),
              })
            : t === s.variables.release_candidate.version &&
              j.push({
                type: J.RELEASE,
                content: ''
                  .concat(i[t].versionTitle)
                  .concat(x('notices.release_candidate')),
              })
          var y = (0, G.Z)(v)
            .concat((0, G.Z)(j), [
              (n || '').includes('early-access/') && !h.noEarlyAccessBanner
                ? { type: J.EARLY_ACCESS, content: x('notices.early_access') }
                : null,
              (n || '').match(/(\w{2}\/)?desktop\/.*/i)
                ? {
                    content:
                      'Update to the latest version of GitHub Desktop before February 2 to avoid disruptions. For more information, see the <a href="https://github.blog/2023-01-30-action-needed-for-github-desktop-and-atom-users/">GitHub blog post</a>.',
                  }
                : null,
            ])
            .filter(U)
          return (0, a.jsx)('div', {
            children: y.map(function (e, t) {
              var r = e.type,
                n = e.content,
                i = t === y.length - 1
              return (0,
              a.jsx)('div', { 'data-testid': 'header-notification', 'data-type': r, className: c()('flash flash-banner', K().container, 'text-center f5 color-fg-default py-4 px-6 z-1', r === J.TRANSLATION && 'color-bg-accent', r === J.RELEASE && 'color-bg-accent', r === J.EARLY_ACCESS && 'color-bg-danger', !i && 'border-bottom color-border-default'), dangerouslySetInnerHTML: { __html: n } }, n)
            }),
          })
        },
        ee = r(5898),
        te = r(8273),
        re = r(8386)
      function ne(e) {
        var t = (0, re.Fg)().theme
        return (function (e) {
          var t = (0, d.useState)(window.matchMedia(e).matches),
            r = t[0],
            n = t[1]
          return (
            (0, d.useEffect)(
              function () {
                var t = !0,
                  r = window.matchMedia(e),
                  a = function () {
                    t && n(!!r.matches)
                  }
                return (
                  r.addEventListener('change', a),
                  n(r.matches),
                  function () {
                    ;(t = !1), r.removeEventListener('change', a)
                  }
                )
              },
              [e]
            ),
            r
          )
        })(
          '(max-width: '.concat(
            null === t || void 0 === t ? void 0 : t.sizes[e],
            ')'
          )
        )
      }
      function ae() {
        var e = (0, q.Z)(['label'])
        return (
          (ae = function () {
            return e
          }),
          e
        )
      }
      function ie() {
        var e = (0, q.Z)(['description'])
        return (
          (ie = function () {
            return e
          }),
          e
        )
      }
      function se() {
        var e = (0, q.Z)(['placeholder'])
        return (
          (se = function () {
            return e
          }),
          e
        )
      }
      function oe() {
        var e = (0, q.Z)(['placeholder'])
        return (
          (oe = function () {
            return e
          }),
          e
        )
      }
      function le() {
        var e = (0, q.Z)(['label'])
        return (
          (le = function () {
            return e
          }),
          e
        )
      }
      function ce() {
        var e = (0, q.Z)(['description'])
        return (
          (ce = function () {
            return e
          }),
          e
        )
      }
      function ue() {
        var e = (0, o.useRouter)(),
          t = (0, te.a)(),
          r = t.query,
          n = t.debug,
          i = (0, d.useState)(r),
          s = i[0],
          l = i[1],
          c = (0, m.$)('search').t,
          u = (0, _.a)().currentVersion,
          h = ne('medium')
        return (0, a.jsx)('div', {
          'data-testid': 'search',
          children: (0, a.jsx)('div', {
            className: 'position-relative z-2',
            children: (0, a.jsxs)('form', {
              role: 'search',
              className: 'width-full d-flex',
              onSubmit: function (t) {
                t.preventDefault(),
                  s.trim() &&
                    (function () {
                      var t = '/'.concat(e.locale)
                      u !== _.e && (t += '/'.concat(u)), (t += '/search')
                      var r = new URLSearchParams({ query: s })
                      n && r.set('debug', '1'), (t += '?'.concat(r)), e.push(t)
                    })()
              },
              children: [
                (0, a.jsx)('meta', {
                  name: 'viewport',
                  content: 'width=device-width initial-scale=1',
                }),
                (0, a.jsxs)('label', {
                  className: 'text-normal width-full',
                  children: [
                    (0, a.jsx)('span', {
                      className: 'visually-hidden',
                      'aria-label': c(ae()),
                      'aria-describedby': c(ie()),
                      children: c(se()),
                    }),
                    (0, a.jsx)(ee.Z, {
                      required: !0,
                      onInvalid: function (e) {
                        return e.target.setCustomValidity(
                          'Please enter a search query.'
                        )
                      },
                      onInput: function (e) {
                        return e.target.setCustomValidity('')
                      },
                      'data-testid': 'site-search-input',
                      ref: function (e) {
                        return h && e && e.focus()
                      },
                      type: 'search',
                      placeholder: c(oe()),
                      autoComplete: s ? 'on' : 'off',
                      autoCorrect: 'off',
                      autoCapitalize: 'off',
                      spellCheck: 'false',
                      maxLength: 512,
                      onChange: function (e) {
                        return l(e.target.value)
                      },
                      value: s,
                      'aria-label': c(le()),
                      'aria-describedby': c(ce()),
                      sx: {
                        width: '100%',
                        height: '2rem',
                        transition: 'width 0.3s ease-in-out',
                        borderBottomRightRadius: 'unset',
                        borderTopRightRadius: 'unset',
                        borderRight: 'none',
                      },
                    }),
                  ],
                }),
                (0, a.jsx)(E.h, {
                  'aria-label': 'Search',
                  icon: N.SearchIcon,
                  sx: {
                    borderTopLeftRadius: 'unset',
                    borderBottomLeftRadius: 'unset',
                  },
                }),
              ],
            }),
          }),
        })
      }
      var de = r(802),
        he = r(7290),
        me = r.n(he),
        fe = function (e) {
          var t = e.mediumOrLower,
            r = (0, o.useRouter)(),
            n = (0, _.a)().currentVersion,
            i = (0, u.Hv)(),
            s = i.allVersions,
            l = i.page,
            c = i.enterpriseServerVersions,
            d = (0, m.$)(['pages', 'picker']).t,
            h = '/search' === r.route || '/[versionId]/search' === r.route
          if (l.permalinks && l.permalinks.length < 1) return null
          var f = (l.permalinks || []).map(function (e) {
              return {
                text: s[e.pageVersion].versionTitle,
                selected: n === e.pageVersion,
                href:
                  h && 'string' === typeof r.query.query
                    ? e.href +
                      '?'.concat(new URLSearchParams({ query: r.query.query }))
                    : e.href,
                extra: { arrow: !1, info: !1 },
                divider: !1,
              }
            }),
            p = (l.permalinks || []).some(function (e) {
              return e.pageVersion.startsWith('enterprise-server')
            })
          if (
            (f.push({
              text: '',
              selected: !1,
              href: '',
              extra: { arrow: !1, info: !1 },
              divider: !0,
            }),
            p &&
              f.push({
                text: d('all_enterprise_releases'),
                selected: !1,
                href: '/'
                  .concat(r.locale, '/')
                  .concat(c[0], '/admin/all-releases'),
                extra: { arrow: !0, info: !1 },
                divider: !1,
              }),
            f)
          ) {
            var x = n === _.e ? '' : '/'.concat(n)
            f.push({
              text: d('about_versions'),
              selected: !1,
              href: '/'
                .concat(r.locale)
                .concat(
                  x,
                  '/get-started/learning-about-github/about-versions-of-github-docs'
                ),
              extra: { arrow: !1, info: !0 },
              divider: !1,
            })
          }
          return (0, a.jsx)('div', {
            'data-testid': 'version-picker',
            children: (0, a.jsx)(C, {
              defaultText: d('version_picker_default_text'),
              items: f,
              alignment: 'start',
              pickerLabel: 'Version',
              dataTestId: 'field',
              buttonBorder: t,
              ariaLabel:
                'Select GitHub product version: current version is '.concat(n),
              renderItem: function (e) {
                var t, r
                return (0, a.jsxs)('div', {
                  'data-testid': 'version-picker-item',
                  className: me().itemsWidth,
                  children: [
                    e.text,
                    (null === (t = e.extra) || void 0 === t
                      ? void 0
                      : t.arrow) &&
                      (0, a.jsx)(N.ArrowRightIcon, {
                        verticalAlign: 'middle',
                        size: 15,
                        className: 'ml-1',
                      }),
                    (null === (r = e.extra) || void 0 === r
                      ? void 0
                      : r.info) &&
                      (0, a.jsx)(N.InfoIcon, {
                        verticalAlign: 'middle',
                        size: 15,
                        className: 'ml-1',
                      }),
                  ],
                })
              },
            }),
          })
        },
        pe = r(6569),
        xe = r.n(pe)
      function ve() {
        var e = (0, q.Z)(['sign_up_cta'])
        return (
          (ve = function () {
            return e
          }),
          e
        )
      }
      function ge() {
        var e = (0, q.Z)(['sign_up_cta'])
        return (
          (ge = function () {
            return e
          }),
          e
        )
      }
      var be,
        je = function () {
          var e = (0, o.useRouter)(),
            t = (0, u.Hv)().error,
            r = (0, u.Hv)(),
            n = r.isHomepageVersion,
            i = r.currentProduct,
            s = r.currentProductTree,
            l = r.allVersions,
            h = (0, _.a)().currentVersion,
            p = (0, m.$)(['header']).t,
            x = i && 'rest' === i.id,
            v = (0, d.useState)(!1),
            g = v[0],
            b = v[1],
            j = (0, d.useState)(!1),
            y = j[0],
            w = j[1],
            T = (function () {
              var e = (0, d.useState)(null),
                t = e[0],
                r = e[1]
              return (
                (0, d.useEffect)(function () {
                  var e = k.Z.get('color_mode'),
                    t = k.Z.get('preferred_color_mode')
                  r(Boolean(e || t))
                }, []),
                { hasAccount: t }
              )
            })().hasAccount,
            L = (0, d.useState)(!1),
            P = L[0],
            R = L[1],
            I = (0, d.useCallback)(
              function () {
                return R(!0)
              },
              [R]
            ),
            C = (0, d.useCallback)(
              function () {
                return R(!1)
              },
              [R]
            ),
            V = (0, d.useState)(!1),
            A = V[0],
            q = V[1],
            z = (0, d.useCallback)(
              function () {
                return q(!0)
              },
              [A]
            ),
            M = (0, d.useCallback)(
              function () {
                return q(!1)
              },
              [A]
            ),
            Y = (0, d.useRef)(!1),
            G = (0, d.useRef)(null),
            U = (0, o.useRouter)().asPath,
            J = '/search' === e.route,
            Q = !1 === T && (h === _.e || 'enterprise-cloud@latest' === h),
            K =
              (null === s || void 0 === s ? void 0 : s.shortTitle) ||
              (null === s || void 0 === s ? void 0 : s.title),
            ee = (0, d.useState)(0),
            te = ee[0],
            re = ee[1],
            ne = (0, d.useCallback)(function () {
              re(window.innerWidth)
            }, [])
          return (
            (0, d.useEffect)(function () {
              var e = function () {
                w(window.scrollY > 10)
              }
              return (
                window.addEventListener('scroll', e),
                function () {
                  window.removeEventListener('scroll', e)
                }
              )
            }, []),
            (0, d.useEffect)(function () {
              var e = function (e) {
                'Escape' === e.key && b(!1)
              }
              return (
                window.addEventListener('keydown', e),
                function () {
                  return window.removeEventListener('keydown', e)
                }
              )
            }, []),
            (0, d.useEffect)(
              function () {
                !g && Y.current && G.current && G.current.focus(),
                  Y.current || (Y.current = !0)
              },
              [g]
            ),
            (0, d.useEffect)(
              function () {
                var e = document.querySelector('body div'),
                  t = document.querySelector('body')
                return (
                  e &&
                    t &&
                    (t.style.overflow = A && te < 1280 ? 'hidden' : 'auto'),
                  window.addEventListener('resize', ne),
                  function () {
                    return window.removeEventListener('resize', ne)
                  }
                )
              },
              [A, te]
            ),
            (0, d.useEffect)(
              function () {
                q(!1)
              },
              [U]
            ),
            (0, d.useEffect)(function () {
              var e = function () {
                q(!1)
              }
              return (
                window.addEventListener('hashchange', e),
                function () {
                  window.removeEventListener('hashchange', e)
                }
              )
            }, []),
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)('div', {
                className: c()(
                  'border-bottom d-unset color-border-muted no-print z-3 color-bg-default',
                  xe().header
                ),
                children: [
                  '404' !== t && (0, a.jsx)(X, {}),
                  (0, a.jsxs)('header', {
                    className: c()(
                      'color-bg-default p-2 position-sticky top-0 z-1 border-bottom',
                      y && 'color-shadow-small'
                    ),
                    children: [
                      (0, a.jsxs)('div', {
                        className:
                          'd-flex flex-justify-between p-2 flex-items-center flex-wrap',
                        'data-testid': 'desktop-header',
                        children: [
                          (0, a.jsxs)('div', {
                            tabIndex: -1,
                            className: c()(
                              g
                                ? xe().logoWithOpenSearch
                                : xe().logoWithClosedSearch
                            ),
                            id: 'github-logo',
                            children: [
                              (0, a.jsxs)(f.r, {
                                href: '/'.concat(e.locale),
                                className:
                                  'd-flex flex-items-center color-fg-default no-underline mr-3',
                                children: [
                                  (0, a.jsx)(N.MarkGithubIcon, { size: 32 }),
                                  (0, a.jsx)('span', {
                                    className: 'h4 text-semibold ml-2',
                                    children: p('github_docs'),
                                  }),
                                ],
                              }),
                              (0, a.jsx)('div', {
                                className: 'hide-sm border-left',
                                children: (0, a.jsx)(fe, {}),
                              }),
                            ],
                          }),
                          (0, a.jsxs)('div', {
                            className: c()(
                              'd-flex flex-items-center',
                              g && xe().widgetsContainer
                            ),
                            children: [
                              '404' !== t &&
                                (0, a.jsx)('div', {
                                  className: c()(
                                    g
                                      ? xe().searchContainerWithOpenSearch
                                      : xe().searchContainerWithClosedSearch,
                                    'mr-3'
                                  ),
                                  children: (0, a.jsx)(ue, {}),
                                }),
                              (0, a.jsx)('div', {
                                className: c()(
                                  'd-none d-lg-flex flex-items-center',
                                  Q && 'mr-3'
                                ),
                                children: (0, a.jsx)($, {}),
                              }),
                              Q &&
                                (0, a.jsx)('div', {
                                  'data-testid': 'header-signup',
                                  className: 'border-left',
                                  children: (0, a.jsx)('a', {
                                    href: 'https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs',
                                    target: '_blank',
                                    rel: 'noopener',
                                    className:
                                      'd-none d-lg-flex ml-3 btn color-fg-muted',
                                    children: p(ve()),
                                  }),
                                }),
                              (0, a.jsx)(E.h, {
                                className: c()(
                                  'hide-lg hide-xl',
                                  g ? 'd-none' : 'd-flex flex-items-center'
                                ),
                                'data-testid': 'mobile-search-button',
                                onClick: function () {
                                  return b(!g)
                                },
                                'aria-label': 'Open Search Bar',
                                'aria-expanded': g ? 'true' : 'false',
                                icon: N.SearchIcon,
                              }),
                              (0, a.jsx)(E.h, {
                                className: 'px-3',
                                'data-testid': 'mobile-search-button',
                                onClick: function () {
                                  return b(!g)
                                },
                                'aria-label': 'Close Search Bar',
                                'aria-expanded': g ? 'true' : 'false',
                                icon: N.XIcon,
                                sx: g
                                  ? {
                                      '@media (min-width: 768px)': {
                                        display: 'none',
                                      },
                                    }
                                  : { display: 'none' },
                              }),
                              (0, a.jsx)('div', {
                                children: (0, a.jsx)(B.w, {
                                  anchorRef: G,
                                  renderAnchor: function (e) {
                                    return (0, a.jsx)(
                                      W.z,
                                      (0, D.Z)(
                                        (0, Z.Z)(
                                          {
                                            'data-testid': 'mobile-menu',
                                            className: 'px-2',
                                          },
                                          e
                                        ),
                                        {
                                          icon: N.KebabHorizontalIcon,
                                          'aria-label': 'Open Menu Bar',
                                          sx: g
                                            ? {
                                                marginLeft: '8px',
                                                display: 'none',
                                                '@media (min-width: 768px)': {
                                                  display: 'inline-block',
                                                  marginLeft: '4px',
                                                },
                                                '@media (min-width: 1012px)': {
                                                  display: 'none',
                                                },
                                              }
                                            : {
                                                marginLeft: '16px',
                                                '@media (min-width: 768px)': {
                                                  marginLeft: '0',
                                                },
                                                '@media (min-width: 1012px)': {
                                                  display: 'none',
                                                },
                                              },
                                        }
                                      )
                                    )
                                  },
                                  open: P,
                                  onOpen: I,
                                  onClose: C,
                                  'aria-labelledby': 'menu-title',
                                  children: (0, a.jsxs)('div', {
                                    'data-testid': 'open-mobile-menu',
                                    className: c()(
                                      'pt-2',
                                      !Q && 'pb-2',
                                      xe().menuOverlay
                                    ),
                                    children: [
                                      (0, a.jsx)('span', {
                                        id: 'menu-title',
                                        className:
                                          'f6 px-3 py-2 mb-1 d-block h6 color-fg-muted',
                                        children: p('menu'),
                                      }),
                                      (0, a.jsx)('span', {
                                        className:
                                          'px-2 pb-2 m-2 d-block d-sm-none',
                                        children: (0, a.jsx)(fe, {
                                          mediumOrLower: !0,
                                        }),
                                      }),
                                      (0, a.jsx)('span', {
                                        className: 'px-2 pb-2 m-2 d-block',
                                        children: (0, a.jsx)($, {
                                          mediumOrLower: !0,
                                        }),
                                      }),
                                      x &&
                                        l[h].apiVersions.length > 0 &&
                                        (0, a.jsx)('span', {
                                          className: 'px-2 pb-2 m-2 d-block',
                                          children: (0, a.jsx)(H, {}),
                                        }),
                                      Q &&
                                        (0, a.jsxs)(f.r, {
                                          href: 'https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs',
                                          target: '_blank',
                                          rel: 'noopener',
                                          'data-testid': 'mobile-signup',
                                          className:
                                            'd-flex flex-justify-between flex-items-center color-fg-muted border-top px-3 py-3',
                                          children: [
                                            p(ge()),
                                            (0, a.jsx)(N.LinkExternalIcon, {
                                              'aria-label': '(external site)',
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      !n &&
                        !J &&
                        (0, a.jsxs)('div', {
                          className: 'd-flex flex-items-center d-xl-none mt-2',
                          children: [
                            (0, a.jsxs)('div', {
                              className: c()(
                                xe().sidebarOverlayCloseButtonContainer,
                                'mr-2'
                              ),
                              children: [
                                (0, a.jsx)(E.h, {
                                  'data-testid': 'sidebar-hamburger',
                                  className: 'color-fg-muted',
                                  variant: 'invisible',
                                  icon: N.ThreeBarsIcon,
                                  'aria-label': 'Open Sidebar',
                                  onClick: z,
                                }),
                                (0, a.jsxs)(F.Z, {
                                  isOpen: A,
                                  onDismiss: M,
                                  'aria-labelledby': 'menu-title',
                                  sx: {
                                    position: 'fixed',
                                    top: '0',
                                    left: '0',
                                    marginTop: '0',
                                    maxHeight: '100vh',
                                    width: 'auto !important',
                                    transform: 'none',
                                    borderRadius: '0',
                                    borderRight:
                                      '1px solid var(--color-border-default)',
                                  },
                                  children: [
                                    (0, a.jsxs)(F.Z.Header, {
                                      style: {
                                        paddingTop: '0px',
                                        background: 'none',
                                      },
                                      id: 'sidebar-overlay-header',
                                      sx: { display: 'block' },
                                      children: [
                                        (0, a.jsx)(S, {}),
                                        '404' !== t && i && !J && s
                                          ? (0, a.jsx)('div', {
                                              className: 'mt-3',
                                              children: (0, a.jsx)(f.r, {
                                                'data-testid':
                                                  'sidebar-product-dialog',
                                                href: s.href,
                                                className:
                                                  'd-block pl-1 mb-2 h3 color-fg-default no-underline',
                                                children: K,
                                              }),
                                            })
                                          : null,
                                        x && (0, a.jsx)(H, {}),
                                      ],
                                    }),
                                    (0, a.jsx)(O, { variant: 'overlay' }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)('div', {
                              className: 'mr-auto width-full',
                              'data-search': 'breadcrumbs',
                              children: (0, a.jsx)(de.O, { inHeader: !0 }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            })
          )
        },
        ye = r(1664),
        Ne = r.n(ye),
        _e = function () {
          var e = (0, o.useRouter)(),
            t = (0, m.$)('footer').t
          return (0, a.jsx)('div', {
            className:
              'container-xl px-3 mt-6 pb-8 px-md-6 position-relative d-flex flex-row-reverse flex-xl-row flex-wrap flex-xl-nowrap flex-justify-center flex-xl-justify-between f6 color-fg-muted',
            children: (0, a.jsxs)('ul', {
              className:
                'list-style-none d-flex flex-wrap col-12 flex-justify-center flex-xl-justify-between mb-2 mb-xl-0',
              children: [
                (0, a.jsxs)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: [
                    '\xa9 ',
                    new Date().getFullYear(),
                    ' GitHub, Inc.',
                  ],
                }),
                'de' === e.locale &&
                  (0, a.jsxs)('li', {
                    className: 'mr-3 mr-xl-0',
                    children: [
                      (0, a.jsx)('a', {
                        href: 'https://aka.ms/impressum_de',
                        target: '_blank',
                        rel: 'noopener',
                        children: 'Impressum',
                      }),
                      (0, a.jsx)(N.LinkExternalIcon, {
                        'aria-label': '(external site)',
                        size: 12,
                      }),
                    ],
                  }),
                (0, a.jsx)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: (0, a.jsx)(Ne(), {
                    href: '/'.concat(
                      e.locale,
                      '/site-policy/github-terms/github-terms-of-service'
                    ),
                    children: t('terms'),
                  }),
                }),
                (0, a.jsx)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: (0, a.jsx)(Ne(), {
                    href: '/'.concat(
                      e.locale,
                      '/site-policy/privacy-policies/github-privacy-statement'
                    ),
                    legacyBehavior: !1,
                    className:
                      'ko' === e.locale
                        ? 'color-fg-attention text-bold'
                        : void 0,
                    children: t('privacy'),
                  }),
                }),
                (0, a.jsx)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: (0, a.jsx)('a', {
                    href: 'https://github.com/security',
                    children: t('product.links.security'),
                  }),
                }),
                (0, a.jsx)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: (0, a.jsx)('a', {
                    href: 'https://www.githubstatus.com/',
                    children: t('support.links.status'),
                  }),
                }),
                (0, a.jsx)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: (0, a.jsx)(Ne(), {
                    href: '/'.concat(e.locale),
                    children: t('support.links.help'),
                  }),
                }),
                (0, a.jsx)('li', {
                  children: (0, a.jsx)('a', {
                    'aria-label': 'Homepage',
                    title: 'GitHub',
                    className: 'd-none d-xl-block color-fg-muted',
                    href: 'https://github.com',
                    children: (0, a.jsx)(N.MarkGithubIcon, { size: 24 }),
                  }),
                }),
                (0, a.jsx)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: (0, a.jsx)('a', {
                    href: 'https://support.github.com',
                    children: t('support.links.contact_github'),
                  }),
                }),
                (0, a.jsx)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: (0, a.jsx)('a', {
                    href: 'https://github.com/pricing',
                    children: t('product.links.pricing'),
                  }),
                }),
                (0, a.jsx)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: (0, a.jsx)(Ne(), {
                    href: '/'.concat(e.locale, '/developers'),
                    children: t('platform.links.developer_api'),
                  }),
                }),
                (0, a.jsx)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: (0, a.jsx)('a', {
                    href: 'https://services.github.com',
                    children: t('support.links.training'),
                  }),
                }),
                (0, a.jsx)('li', {
                  className: 'mr-3 mr-xl-0',
                  children: (0, a.jsx)('a', {
                    href: 'https://github.blog',
                    children: t('company.links.blog'),
                  }),
                }),
                (0, a.jsx)('li', {
                  children: (0, a.jsx)('a', {
                    href: 'https://github.com/about',
                    children: t('company.links.about'),
                  }),
                }),
              ],
            }),
          })
        },
        we = function (e) {
          var t = e.className,
            r = e.ariaLabel,
            n = (0, d.useState)(!1),
            i = n[0],
            s = n[1]
          ;(0, d.useEffect)(function () {
            var e = new IntersectionObserver(
              function (e) {
                !1 === e[0].isIntersecting ? s(!0) : s(!1)
              },
              { threshold: [0] }
            )
            return (
              e.observe(document.getElementsByTagName('h1')[0]),
              function () {
                e.disconnect()
              }
            )
          }, [])
          return (0, a.jsx)('div', {
            role: 'tooltip',
            className: c()(
              t,
              'transition-200',
              i ? 'opacity-100' : 'opacity-0'
            ),
            children: (0, a.jsx)('button', {
              onClick: function () {
                var e, t
                null ===
                  (e =
                    null === document || void 0 === document
                      ? void 0
                      : document.getElementById('github-logo')) ||
                  void 0 === e ||
                  e.focus(),
                  null ===
                    (t =
                      null === document || void 0 === document
                        ? void 0
                        : document.getElementById('main-content')) ||
                    void 0 === t ||
                    t.scrollIntoView()
              },
              className: c()(
                'tooltipped tooltipped-n tooltipped-no-delay color-bg-accent-emphasis color-fg-on-emphasis circle border-0',
                'd-flex flex-items-center flex-justify-center'
              ),
              style: { width: 40, height: 40 },
              'aria-label': r,
              children: (0, a.jsx)(N.ChevronUpIcon, {}),
            }),
          })
        },
        Se = r(687),
        ke = r.n(Se)
      function Te() {
        var e = (0, q.Z)(['able_to_find'])
        return (
          (Te = function () {
            return e
          }),
          e
        )
      }
      function Ee() {
        var e = (0, q.Z)(['yes'])
        return (
          (Ee = function () {
            return e
          }),
          e
        )
      }
      function Le() {
        var e = (0, q.Z)(['no'])
        return (
          (Le = function () {
            return e
          }),
          e
        )
      }
      function Pe() {
        var e = (0, q.Z)(['comment_yes_label'])
        return (
          (Pe = function () {
            return e
          }),
          e
        )
      }
      function Re() {
        var e = (0, q.Z)(['comment_no_label'])
        return (
          (Re = function () {
            return e
          }),
          e
        )
      }
      function Ie() {
        var e = (0, q.Z)(['optional'])
        return (
          (Ie = function () {
            return e
          }),
          e
        )
      }
      function Ce() {
        var e = (0, q.Z)(['email_label'])
        return (
          (Ce = function () {
            return e
          }),
          e
        )
      }
      function Ve() {
        var e = (0, q.Z)(['optional'])
        return (
          (Ve = function () {
            return e
          }),
          e
        )
      }
      function Ae() {
        var e = (0, q.Z)(['email_placeholder'])
        return (
          (Ae = function () {
            return e
          }),
          e
        )
      }
      function He() {
        var e = (0, q.Z)(['email_validation'])
        return (
          (He = function () {
            return e
          }),
          e
        )
      }
      function Oe() {
        var e = (0, q.Z)(['not_support'])
        return (
          (Oe = function () {
            return e
          }),
          e
        )
      }
      function Ze() {
        var e = (0, q.Z)(['send'])
        return (
          (Ze = function () {
            return e
          }),
          e
        )
      }
      function De() {
        var e = (0, q.Z)(['feedback'])
        return (
          (De = function () {
            return e
          }),
          e
        )
      }
      function qe() {
        var e = (0, q.Z)(['privacy_policy'])
        return (
          (qe = function () {
            return e
          }),
          e
        )
      }
      !(function (e) {
        ;(e.START = 'START'), (e.YES = 'YES'), (e.NO = 'NO'), (e.END = 'END')
      })(be || (be = {}))
      var Be = function () {
        var e = function (e) {
            return function () {
              We(t()), h(e)
            }
          },
          t = function () {
            if (g.current) return new FormData(g.current)
          },
          r = (0, o.useRouter)(),
          n = r.asPath,
          i = r.locale,
          s = (0, m.$)('survey').t,
          l = (0, d.useState)(be.START),
          u = l[0],
          h = l[1],
          p = (0, d.useState)(!1),
          x = p[0],
          v = p[1],
          g = (0, d.useRef)(null)
        return (
          (0, d.useEffect)(
            function () {
              h(be.START)
            },
            [n]
          ),
          (0, d.useEffect)(
            function () {
              var e
              u === be.END &&
                (null ===
                  (e = document.querySelector(
                    'footer a[href="/'.concat(
                      i,
                      '/site-policy/privacy-policies/github-privacy-statement"]'
                    )
                  )) ||
                  void 0 === e ||
                  e.focus())
            },
            [u]
          ),
          (0, a.jsxs)('form', {
            className: 'f5',
            onSubmit: function (e) {
              e.preventDefault(), We(t()), x || (h(be.END), v(!1))
            },
            ref: g,
            'data-testid': 'survey-form',
            children: [
              (0, a.jsx)('h2', { className: 'f4 mb-3', children: s(Te()) }),
              (0, a.jsx)('input', {
                type: 'text',
                className: 'd-none',
                name: 'survey-token',
                'aria-hidden': 'true',
              }),
              u !== be.END &&
                (0, a.jsxs)('div', {
                  className: 'radio-group mb-2',
                  children: [
                    (0, a.jsx)('input', {
                      className: c()(ke().visuallyHidden, ke().customRadio),
                      id: 'survey-yes',
                      type: 'radio',
                      name: 'survey-vote',
                      value: 'Y',
                      'aria-label': s(Ee()),
                      onChange: e(be.YES),
                      checked: u === be.YES,
                    }),
                    (0, a.jsx)('label', {
                      className: c()(
                        'btn mr-1 color-border-accent-emphasis',
                        u === be.YES && 'color-bg-accent-emphasis'
                      ),
                      htmlFor: 'survey-yes',
                      children: (0, a.jsx)(N.ThumbsupIcon, {
                        size: 16,
                        className: u === be.YES ? '' : 'color-fg-muted',
                      }),
                    }),
                    (0, a.jsx)('input', {
                      className: c()(ke().visuallyHidden, ke().customRadio),
                      id: 'survey-no',
                      type: 'radio',
                      name: 'survey-vote',
                      value: 'N',
                      'aria-label': s(Le()),
                      onChange: e(be.NO),
                      checked: u === be.NO,
                    }),
                    (0, a.jsx)('label', {
                      className: c()(
                        'btn color-border-accent-emphasis',
                        u === be.NO && 'color-bg-danger-emphasis'
                      ),
                      htmlFor: 'survey-no',
                      children: (0, a.jsx)(N.ThumbsdownIcon, {
                        size: 16,
                        className: u === be.NO ? '' : 'color-fg-muted',
                      }),
                    }),
                  ],
                }),
              [be.YES, be.NO].includes(u) &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)('p', {
                      className: 'mb-3',
                      children: [
                        (0, a.jsxs)('label', {
                          className: 'd-block mb-1 f6',
                          htmlFor: 'survey-comment',
                          children: [
                            (0, a.jsxs)('span', {
                              children: [
                                u === be.YES && s(Pe()),
                                u === be.NO && s(Re()),
                              ],
                            }),
                            (0, a.jsx)('span', {
                              className:
                                'text-normal color-fg-muted float-right ml-1',
                              children: s(Ie()),
                            }),
                          ],
                        }),
                        (0, a.jsx)('textarea', {
                          className: 'form-control input-sm width-full',
                          name: 'survey-comment',
                          id: 'survey-comment',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className: c()('form-group', x ? 'warn' : ''),
                      children: [
                        (0, a.jsxs)('label', {
                          className: 'd-block mb-1 f6',
                          htmlFor: 'survey-email',
                          children: [
                            s(Ce()),
                            (0, a.jsx)('span', {
                              className:
                                'text-normal color-fg-muted float-right ml-1',
                              children: s(Ve()),
                            }),
                          ],
                        }),
                        (0, a.jsx)(
                          'input',
                          (0, Z.Z)(
                            {
                              type: 'email',
                              className: 'form-control input-sm width-full',
                              name: 'survey-email',
                              id: 'survey-email',
                              placeholder: s(Ae()),
                              onChange: function () {
                                var e,
                                  r,
                                  n =
                                    null ===
                                      (r =
                                        null === (e = t()) || void 0 === e
                                          ? void 0
                                          : e.get('survey-email')) ||
                                    void 0 === r
                                      ? void 0
                                      : r.toString()
                                0 ===
                                  (null === n || void 0 === n
                                    ? void 0
                                    : n.length) ||
                                (null === n || void 0 === n
                                  ? void 0
                                  : n.match(
                                      /[^@\s.][^@\s]*@\[?[a-z0-9.-]+\]?/i
                                    ))
                                  ? v(!1)
                                  : v(!0)
                              },
                              'aria-invalid': x,
                            },
                            x
                              ? { 'aria-describedby': 'email-input-validation' }
                              : {}
                          )
                        ),
                        x &&
                          (0, a.jsx)('p', {
                            className: 'note warning',
                            id: 'email-input-validation',
                            children: s(He()),
                          }),
                      ],
                    }),
                    (0, a.jsx)('span', {
                      className: 'f6 color-fg-muted',
                      children: s(Oe()),
                    }),
                    (0, a.jsxs)('div', {
                      className:
                        'd-flex flex-justify-end flex-items-center mt-3',
                      children: [
                        (0, a.jsx)('button', {
                          type: 'button',
                          className: 'btn btn-sm btn-invisible mr-3',
                          onClick: function () {
                            h(be.START), v(!1)
                          },
                          children: 'Cancel',
                        }),
                        (0, a.jsx)('button', {
                          disabled: x,
                          type: 'submit',
                          className: 'btn btn-sm color-border-accent-emphasis',
                          children: s(Ze()),
                        }),
                      ],
                    }),
                  ],
                }),
              u === be.END &&
                (0, a.jsx)('p', {
                  role: 'status',
                  className: 'color-fg-muted f6',
                  'data-testid': 'survey-end',
                  children: s(De()),
                }),
              (0, a.jsx)(f.r, {
                className: 'f6 text-normal color-fg-accent',
                href: '/'.concat(
                  i,
                  '/site-policy/privacy-policies/github-privacy-statement'
                ),
                target: '_blank',
                children: s(qe()),
              }),
            ],
          })
        )
      }
      function We(e) {
        if (e)
          return (0, p.qP)({
            type: p.tw.survey,
            survey_token: e.get('survey-token') || void 0,
            survey_vote: 'Y' === e.get('survey-vote'),
            survey_comment: e.get('survey-comment') || void 0,
            survey_email: e.get('survey-email') || void 0,
          })
      }
      function Fe() {
        var e = (0, q.Z)(['title'])
        return (
          (Fe = function () {
            return e
          }),
          e
        )
      }
      function ze() {
        var e = (0, q.Z)(['body'])
        return (
          (ze = function () {
            return e
          }),
          e
        )
      }
      function Me() {
        var e = (0, q.Z)(['button'])
        return (
          (Me = function () {
            return e
          }),
          e
        )
      }
      function Ye() {
        var e = (0, q.Z)(['to_guidelines'])
        return (
          (Ye = function () {
            return e
          }),
          e
        )
      }
      var $e = function () {
        var e = (0, u.Hv)().relativePath,
          t = (0, m.$)('contribution_cta').t,
          r = e
            ? 'https://github.com/github/docs/blob/main/content/'.concat(e)
            : 'https://github.com/github/docs'
        return (0, a.jsxs)('div', {
          className: 'f5 contribution',
          children: [
            (0, a.jsx)('h2', { className: 'f4 mb-3', children: t(Fe()) }),
            (0, a.jsx)('p', {
              className: 'max-w-xs color-fg-muted mb-3',
              children: t(ze()),
            }),
            (0, a.jsxs)('a', {
              className: 'btn color-border-accent-emphasis',
              href: r,
              children: [
                (0, a.jsx)(N.GitPullRequestIcon, {
                  size: 'small',
                  className: 'octicon mr-1',
                }),
                t(Me()),
              ],
            }),
            (0, a.jsx)('p', {
              className: 'color-fg-muted f6 mt-2',
              children: (0, a.jsx)('a', {
                href: 'https://github.com/github/docs/blob/main/CONTRIBUTING.md',
                target: '_blank',
                rel: 'noopener',
                children: t(Ye()),
              }),
            }),
          ],
        })
      }
      function Ge() {
        var e = (0, q.Z)(['still_need_help'])
        return (
          (Ge = function () {
            return e
          }),
          e
        )
      }
      function Ue() {
        var e = (0, q.Z)(['ask_community'])
        return (
          (Ue = function () {
            return e
          }),
          e
        )
      }
      function Je() {
        var e = (0, q.Z)(['contact_support'])
        return (
          (Je = function () {
            return e
          }),
          e
        )
      }
      var Qe = function () {
          var e = (0, m.$)('support').t,
            t = (0, u.Hv)().communityRedirect
          return (0, a.jsxs)('div', {
            children: [
              (0, a.jsx)('h2', { className: 'mb-3 f4', children: e(Ge()) }),
              (0, a.jsx)('div', {
                className: 'mb-2',
                children: (0, a.jsxs)('a', {
                  id: 'ask-community',
                  href:
                    t.href || 'https://github.com/orgs/community/discussions',
                  className: 'Link\u2014secondary text-bold',
                  children: [
                    (0, a.jsx)(N.PeopleIcon, {
                      size: 'small',
                      className: 'octicon mr-1',
                    }),
                    0 === Object.keys(t).length ? e(Ue()) : t.name,
                  ],
                }),
              }),
              (0, a.jsx)('div', {
                children: (0, a.jsxs)('a', {
                  id: 'contact-us',
                  href: 'https://support.github.com/contact',
                  className: 'Link\u2014secondary text-bold',
                  children: [
                    (0, a.jsx)(N.CommentDiscussionIcon, {
                      size: 'small',
                      className: 'octicon mr-1',
                    }),
                    e(Je()),
                  ],
                }),
              }),
            ],
          })
        },
        Ke = function () {
          var e = (0, _.a)().currentVersion,
            t = (0, u.Hv)(),
            r = t.relativePath,
            n = t.enterpriseServerReleases,
            i = (0, o.useRouter)(),
            s = n.isOldestReleaseDeprecated && e.includes(n.oldestSupported),
            l =
              null === r || void 0 === r ? void 0 : r.includes('early-access/'),
            d = 'en' === i.locale,
            h = i.asPath.startsWith('/site-policy'),
            m = !s && !h,
            f = !s && !l && d,
            p = Number(m) + Number(f) + Number(true)
          return (0, a.jsx)('section', {
            className:
              'container-xl mt-lg-8 mt-6 px-3 px-md-6 no-print mx-auto',
            children: (0, a.jsxs)('div', {
              className:
                'container-xl mx-auto py-6 py-lg-6 clearfix border-top border-color-secondary',
              children: [
                m &&
                  (0, a.jsx)('div', {
                    className: c()(
                      'float-left pr-4 mb-6 mb-xl-0 col-12',
                      p > 1 && 'col-lg-6',
                      p > 2 && 'col-xl-3'
                    ),
                    children: (0, a.jsx)(Be, {}),
                  }),
                f &&
                  (0, a.jsx)('div', {
                    className: c()(
                      'float-left pr-4 mb-6 mb-xl-0 col-12',
                      p > 1 && 'col-lg-6',
                      p > 2 && 'col-xl-4',
                      p > 2 && m && 'offset-xl-1'
                    ),
                    children: (0, a.jsx)($e, {}),
                  }),
                (0, a.jsx)('div', {
                  className: c()(
                    'float-left pr-4 mb-6 mb-xl-0 col-12',
                    p > 1 && 'col-lg-6',
                    p > 2 && 'col-xl-3',
                    p > 2 && (m || f) && 'offset-xl-1'
                  ),
                  children: (0, a.jsx)(Qe, {}),
                }),
              ],
            }),
          })
        },
        Xe = r(1461),
        et = r(180),
        tt = r.n(et),
        rt = function () {
          var e = (0, u.Hv)(),
            t = e.data,
            r = e.enterpriseServerReleases
          if (!(0, _.a)().currentVersion.includes(r.oldestSupported))
            return null
          var n = r.isOldestReleaseDeprecated
            ? t.reusables.enterprise_deprecation.version_was_deprecated
            : t.reusables.enterprise_deprecation.version_will_be_deprecated
          return (0, a.jsx)('div', {
            'data-testid': 'deprecation-banner',
            className: c()(
              'container-xl mt-3 mx-auto p-responsive',
              tt().DeprecationBanner
            ),
            children: (0, a.jsx)(Xe.Z, {
              variant: 'warning',
              children: (0, a.jsxs)('p', {
                children: [
                  (0, a.jsxs)('b', {
                    className: 'text-bold',
                    children: [
                      (0, a.jsx)('span', {
                        dangerouslySetInnerHTML: { __html: n },
                      }),
                      ' ',
                      (0, a.jsx)('span', {
                        'data-date': r.nextDeprecationDate,
                        'data-format': '%B %d, %Y',
                        title: r.nextDeprecationDate,
                        children: r.nextDeprecationDate,
                      }),
                      '.',
                    ],
                  }),
                  ' ',
                  (0, a.jsx)('span', {
                    dangerouslySetInnerHTML: {
                      __html:
                        t.reusables.enterprise_deprecation.deprecation_details,
                    },
                  }),
                ],
              }),
            }),
          })
        },
        nt = [
          'branches',
          'collaborators',
          'commits',
          'deploy_keys',
          'deployments',
          'pages',
          'releases',
          'repos',
          'metrics',
          'webhooks',
        ],
        at = ['enterprise-admin'],
        it = {
          branches: 'Branches',
          collaborators: 'Collaborators',
          commits: 'Commits',
          'deploy-keys': 'Deploy Keys',
          deployments: 'Deployments',
          pages: 'GitHub Pages',
          releases: 'Releases',
          metrics: 'Metrics',
          webhooks: 'Webhooks',
        },
        st = function () {
          var e,
            t = (0, o.useRouter)(),
            r = (0, m.$)('products').t,
            n = 'rest' === t.query.productId || t.query.category,
            i = t.query.category,
            s = (0, _.a)().currentVersion,
            l = (0, u.Hv)().allVersions,
            c = l[s],
            h = c.apiVersions,
            p = '',
            x = ''
          if (n && h.length) (p = r('rest.banner.api_versioned')), (x = s)
          else if ('ghes' === c.shortName) {
            var v = Object.values(l)
              .reverse()
              .find(function (e) {
                return 'ghes' === e.shortName && e.apiVersions.length
              })
            v &&
              ((x = v.version),
              (p = r('rest.banner.ghes_api_versioned')
                .replace(
                  '{{ firstGhesReleaseWithApiVersions.versionTitle }}',
                  v.versionTitle
                )
                .replace(/{{\s*currentVersion\s*}}/, s)))
          }
          if (n && '' !== p)
            return (0, a.jsx)('div', {
              'data-testid': 'rest-api-versioning-temporary-banner',
              className: 'container-xl mt-3 mx-auto p-responsive',
              children: (0, a.jsxs)(Xe.Z, {
                children: [
                  (0, a.jsx)('span', {
                    dangerouslySetInnerHTML: { __html: p },
                  }),
                  ' ',
                  (0, a.jsx)('span', {
                    dangerouslySetInnerHTML: {
                      __html: r('rest.banner.api_version_info').replace(
                        /{{\s*versionWithApiVersion\s*}}/,
                        x === _.e ? '' : '/'.concat(x)
                      ),
                    },
                  }),
                ],
              }),
            })
          if (!nt.includes(i) && !at.includes(i)) return null
          if (nt.includes(i)) {
            var g = Object.keys(it),
              b = g.map(function (e, r) {
                return [
                  (0, a.jsxs)(
                    d.Fragment,
                    {
                      children: [
                        (0, a.jsx)(f.r, {
                          href: '/'.concat(t.locale, '/rest/').concat(e),
                          children: it[e],
                        }),
                        r < g.length - 1 && ', ',
                      ],
                    },
                    e
                  ),
                ]
              }),
              j = r('rest.banner.redirect_repo').split(
                '{{ newRestPagesLinks }}'
              )
            e = (0, a.jsxs)(d.Fragment, { children: [j[0], b, j[1] || null] })
          } else if (at.includes(i)) {
            var y = r('rest.banner.redirect_enterprise').split(
              '{{ actionsPageLink }}'
            )
            e = (0, a.jsxs)(d.Fragment, {
              children: [
                y[0],
                (0, a.jsx)(f.r, {
                  href: '/'.concat(t.locale, '/rest/actions'),
                  children: r('rest.banner.actions_api_title'),
                }),
                y[1] || null,
              ],
            })
          }
          return (0, a.jsx)('div', {
            'data-testid': 'rest-api-repos-banner',
            className: 'container-xl mt-3 mx-auto p-responsive',
            children: (0, a.jsx)(Xe.Z, {
              variant: 'warning',
              children: (0, a.jsxs)('p', {
                children: [
                  (0, a.jsx)('b', {
                    className: 'text-bold',
                    children: (0, a.jsxs)('span', {
                      children: [r('rest.banner.redirect_notice'), ' ', e],
                    }),
                  }),
                  ' ',
                ],
              }),
            }),
          })
        },
        ot = r(3454),
        lt = Boolean(JSON.parse(ot.env.MINIMAL_RENDER || 'false')),
        ct = function (e) {
          var t = (0, u.Hv)(),
            r = t.page,
            n = t.error,
            i = t.isHomepageVersion,
            l = t.currentPathWithoutLanguage,
            c = t.currentVersion,
            d = t.currentProduct,
            h = t.relativePath,
            f = t.fullUrl,
            p = t.status,
            x = (0, m.$)(['errors', 'meta', 'scroll_button']).t,
            v = (0, o.useRouter)(),
            g = r.introPlainText ? r.introPlainText : x('default_description')
          return lt
            ? (0, a.jsxs)('div', {
                children: [
                  (0, a.jsx)(s(), {
                    children: (0, a.jsx)('title', { children: r.fullTitle }),
                  }),
                  (0, a.jsx)('div', {
                    className: 'd-none d-xl-block',
                    'data-search': 'breadcrumbs',
                    children: (0, a.jsx)(de.O, {}),
                  }),
                  (0, a.jsx)('main', {
                    id: 'main-content',
                    style: { scrollMarginTop: '5rem' },
                    children: e.children,
                  }),
                ],
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(s(), {
                    children: [
                      '404' === n
                        ? (0, a.jsx)('title', { children: x('oops') })
                        : (!i && r.fullTitle) ||
                          (l.includes('enterprise-server') && r.fullTitle)
                        ? (0, a.jsx)('title', { children: r.fullTitle })
                        : null,
                      (0, a.jsx)('meta', { name: 'description', content: g }),
                      r.hidden &&
                        (0, a.jsx)('meta', {
                          name: 'robots',
                          content: 'noindex',
                        }),
                      r.languageVariants.map(function (e) {
                        return (0,
                        a.jsx)('link', { rel: 'alternate', hrefLang: e.hreflang, href: 'https://docs.github.com'.concat(e.href) }, e.href)
                      }),
                      r.topics.length > 0 &&
                        (0, a.jsx)('meta', {
                          name: 'keywords',
                          content: r.topics.join(','),
                        }),
                      v.locale &&
                        (0, a.jsx)('meta', {
                          name: 'path-language',
                          content: v.locale,
                        }),
                      c &&
                        (0, a.jsx)('meta', {
                          name: 'path-version',
                          content: c,
                        }),
                      d &&
                        (0, a.jsx)('meta', {
                          name: 'path-product',
                          content: d.id,
                        }),
                      h &&
                        (0, a.jsx)('meta', {
                          name: 'path-article',
                          content: h
                            .replace('/index.md', '')
                            .replace('.md', ''),
                        }),
                      r.type &&
                        (0, a.jsx)('meta', {
                          name: 'page-type',
                          content: r.type,
                        }),
                      r.documentType &&
                        (0, a.jsx)('meta', {
                          name: 'page-document-type',
                          content: r.documentType,
                        }),
                      p &&
                        (0, a.jsx)('meta', {
                          name: 'status',
                          content: p.toString(),
                        }),
                      r.fullTitle &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)('meta', {
                              property: 'og:site_name',
                              content: 'GitHub Docs',
                            }),
                            (0, a.jsx)('meta', {
                              property: 'og:title',
                              content: r.fullTitle,
                            }),
                            (0, a.jsx)('meta', {
                              property: 'og:type',
                              content: 'article',
                            }),
                            (0, a.jsx)('meta', {
                              property: 'og:url',
                              content: f,
                            }),
                            (0, a.jsx)('meta', {
                              property: 'og:image',
                              content:
                                'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, a.jsx)('a', {
                    href: '#main-content',
                    className:
                      'sr-only color-bg-accent-emphasis color-fg-on-emphasis',
                    children: 'Skip to main content',
                  }),
                  (0, a.jsx)(je, {}),
                  (0, a.jsxs)('div', {
                    className: 'd-lg-flex',
                    children: [
                      (0, a.jsx)(O, {}),
                      (0, a.jsxs)('div', {
                        className: 'flex-column flex-1 min-width-0',
                        children: [
                          (0, a.jsxs)('main', {
                            id: 'main-content',
                            style: { scrollMarginTop: '5rem' },
                            children: [
                              (0, a.jsx)(rt, {}),
                              (0, a.jsx)(st, {}),
                              e.children,
                            ],
                          }),
                          (0, a.jsxs)('footer', {
                            children: [
                              (0, a.jsx)(Ke, {}),
                              (0, a.jsx)(_e, {}),
                              (0, a.jsx)(we, {
                                className:
                                  'position-fixed bottom-0 mb-4 right-0 mr-4 z-1',
                                ariaLabel: x('scroll_to_top'),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
        }
    },
    5741: function (e, t, r) {
      'use strict'
      r.d(t, {
        r: function () {
          return l
        },
      })
      var n = r(6042),
        a = r(9534),
        i = r(5893),
        s = r(1664),
        o = r.n(s)
      function l(e) {
        var t = e.href,
          r = e.locale,
          s = e.disableClientTransition,
          l = void 0 !== s && s,
          c = (0, a.Z)(e, ['href', 'locale', 'disableClientTransition'])
        var u =
          (null === t || void 0 === t ? void 0 : t.startsWith('http')) ||
          (null === t || void 0 === t ? void 0 : t.startsWith('//'))
        return l
          ? (0, i.jsx)(
              'a',
              (0, n.Z)(
                {
                  href: r ? '/'.concat(r).concat(t) : t,
                  rel: u ? 'noopener' : '',
                },
                c
              )
            )
          : (0, i.jsx)(o(), {
              href: r ? '/'.concat(r).concat(t) : t || '',
              locale: r || !1,
              children: (0, i.jsx)(
                'a',
                (0, n.Z)({ rel: u ? 'noopener' : '' }, c)
              ),
            })
      }
    },
    2752: function (e, t, r) {
      'use strict'
      r.d(t, {
        b: function () {
          return u
        },
        x: function () {
          return c
        },
      })
      var n = r(828),
        a = r(7294),
        i = r(1163),
        s = r(1955),
        o = r(169),
        l = r(4702),
        c = 'apiVersionPreferred'
      function u() {
        var e = (0, i.useRouter)(),
          t = (0, o.a)().currentVersion,
          r = (0, l.Hv)().allVersions,
          u = r[t].apiVersions,
          d = r[t].apiVersions.length > 0,
          h = r[t].latestApiVersion,
          m = e.query.apiVersion
        return (
          (0, a.useEffect)(
            function () {
              if (d && (!m || !u.includes(m))) {
                var t = s.Z.get(c),
                  r = t && u.includes(t) ? t : h,
                  a = e.asPath.split('#')[1],
                  i = (0, n.Z)(e.asPath.split('#')[0].split('?'), 2),
                  o = i[0],
                  l = i[1],
                  f = new URLSearchParams(void 0 === l ? '' : l)
                f.set('apiVersion', r)
                var p = '/'
                  .concat(e.locale)
                  .concat(o, '?')
                  .concat(f)
                  .concat(a ? '#' + a : '')
                e.replace(p)
              }
            },
            [e.asPath, t]
          ),
          null
        )
      }
    },
    3034: function (e, t, r) {
      'use strict'
      r.d(t, {
        HZ: function () {
          return i
        },
        xO: function () {
          return a
        },
      })
      var n = r(7294),
        a = (0, n.createContext)(null),
        i = function () {
          var e = (0, n.useContext)(a)
          if (!e)
            throw new Error(
              '"useAutomatedPageContext" may only be used inside "AutomatedPageContext.Provider"'
            )
          return e
        }
    },
    4702: function (e, t, r) {
      'use strict'
      r.d(t, {
        Hv: function () {
          return d
        },
        QS: function () {
          return c
        },
        Tr: function () {
          return u
        },
      })
      var n = r(7568),
        a = r(4051),
        i = r.n(a),
        s = r(7294),
        o = r(8718),
        l = r.n(o),
        c = (function () {
          var e = (0, n.Z)(
            i().mark(function e(t, r) {
              var n, a, s, o, c
              return i().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        t.context.site.data.ui.ms &&
                          delete t.context.site.data.ui.ms,
                        e.abrupt('return', {
                          breadcrumbs: t.context.breadcrumbs || {},
                          activeProducts: t.context.activeProducts,
                          communityRedirect:
                            (null === (n = t.context.page) || void 0 === n
                              ? void 0
                              : n.communityRedirect) || {},
                          currentProduct:
                            t.context.productMap[t.context.currentProduct] ||
                            null,
                          currentLayoutName: t.context.currentLayoutName,
                          isHomepageVersion:
                            'homepage' ===
                            (null === (a = t.context.page) || void 0 === a
                              ? void 0
                              : a.documentType),
                          isFPT:
                            'free-pro-team@latest' === t.context.currentVersion,
                          error: t.context.error
                            ? t.context.error.toString()
                            : '',
                          data: {
                            ui: t.context.site.data.ui,
                            reusables: {
                              enterprise_deprecation: {
                                version_was_deprecated: t.context.getDottedData(
                                  'reusables.enterprise_deprecation.version_was_deprecated'
                                ),
                                version_will_be_deprecated:
                                  t.context.getDottedData(
                                    'reusables.enterprise_deprecation.version_will_be_deprecated'
                                  ),
                                deprecation_details: t.context.getDottedData(
                                  'reusables.enterprise_deprecation.deprecation_details'
                                ),
                              },
                              policies: {
                                translation: t.context.getDottedData(
                                  'reusables.policies.translation'
                                ),
                              },
                            },
                            variables: {
                              release_candidate: {
                                version:
                                  t.context.getDottedData(
                                    'variables.release_candidate.version'
                                  ) || null,
                              },
                            },
                          },
                          currentCategory: t.context.currentCategory || '',
                          currentPathWithoutLanguage:
                            t.context.currentPathWithoutLanguage,
                          relativePath:
                            null === (s = t.context.page) || void 0 === s
                              ? void 0
                              : s.relativePath,
                          page: {
                            languageVariants: t.context.page.languageVariants,
                            documentType: t.context.page.documentType,
                            type: t.context.page.type || null,
                            title: t.context.page.title,
                            fullTitle: t.context.page.fullTitle,
                            topics: t.context.page.topics || [],
                            introPlainText:
                              null === (o = t.context.page) || void 0 === o
                                ? void 0
                                : o.introPlainText,
                            permalinks:
                              null === (c = t.context.page) || void 0 === c
                                ? void 0
                                : c.permalinks.map(function (e) {
                                    return l()(e, [
                                      'title',
                                      'pageVersion',
                                      'href',
                                      'relativePath',
                                      'languageCode',
                                    ])
                                  }),
                            hidden: t.context.page.hidden || !1,
                            noEarlyAccessBanner:
                              t.context.page.noEarlyAccessBanner || !1,
                          },
                          enterpriseServerReleases: l()(
                            t.context.enterpriseServerReleases,
                            [
                              'isOldestReleaseDeprecated',
                              'oldestSupported',
                              'nextDeprecationDate',
                              'supported',
                            ]
                          ),
                          enterpriseServerVersions:
                            t.context.enterpriseServerVersions,
                          allVersions: t.context.allVersions,
                          currentVersion: t.context.currentVersion,
                          currentProductTree:
                            t.context.currentProductTreeTitlesExcludeHidden ||
                            null,
                          featureFlags: {},
                          searchVersions: t.context.searchVersions,
                          nonEnterpriseDefaultVersion:
                            t.context.nonEnterpriseDefaultVersion,
                          status: r.statusCode,
                          fullUrl:
                            t.protocol + '://' + t.get('host') + t.originalUrl,
                        })
                      )
                    case 3:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        u = (0, s.createContext)(null),
        d = function () {
          var e = (0, s.useContext)(u)
          if (!e)
            throw new Error(
              '"useMainContext" may only be used inside "MainContext.Provider"'
            )
          return e
        }
    },
    8273: function (e, t, r) {
      'use strict'
      r.d(t, {
        a: function () {
          return a
        },
      })
      var n = r(1163),
        a = function () {
          var e = (0, n.useRouter)()
          return {
            query:
              e.query.query && Array.isArray(e.query.query)
                ? e.query.query[0]
                : e.query.query || '',
            debug: (function (e) {
              if ('' === e) return !0
              if (!e) return !1
              Array.isArray(e) && (e = e[0])
              try {
                return (e = JSON.parse(e)), Boolean(e)
              } catch (t) {}
              return !1
            })(e.query.debug),
          }
        }
    },
    9099: function (e, t, r) {
      'use strict'
      r.d(t, {
        $: function () {
          return l
        },
      })
      var n = r(828),
        a = r(9815),
        i = r(4702),
        s = r(7361),
        o = r.n(s),
        l = function (e) {
          var t = (0, i.Hv)().data.ui
          return {
            t: function (r) {
              for (
                var i = arguments.length,
                  s = new Array(i > 1 ? i - 1 : 0),
                  l = 1;
                l < i;
                l++
              )
                s[l - 1] = arguments[l]
              var c,
                u =
                  'string' === typeof r
                    ? r
                    : (c = String).raw.apply(c, [r].concat((0, a.Z)(s))),
                d = u.split(':')
              if (d.length > 2)
                throw new Error(
                  'Multiple ":" not allowed in translation lookup path'
                )
              if (2 === d.length) {
                var h = (0, n.Z)(d, 2),
                  m = h[0],
                  f = h[1]
                return o()(t[m], f)
              }
              var p = (0, n.Z)(d, 1),
                x = p[0]
              if (!Array.isArray(e)) return o()(t[e], x)
              var v = !0,
                g = !1,
                b = void 0
              try {
                for (
                  var j, y = e[Symbol.iterator]();
                  !(v = (j = y.next()).done);
                  v = !0
                ) {
                  var N = j.value,
                    _ = o()(t[N], x)
                  if (void 0 !== _) return _
                }
              } catch (w) {
                ;(g = !0), (b = w)
              } finally {
                try {
                  v || null == y.return || y.return()
                } finally {
                  if (g) throw b
                }
              }
            },
          }
        }
    },
    169: function (e, t, r) {
      'use strict'
      r.d(t, {
        a: function () {
          return i
        },
        e: function () {
          return a
        },
      })
      var n = r(1163),
        a = 'free-pro-team@latest',
        i = function () {
          var e = (0, n.useRouter)().query.versionId || a
          return {
            currentVersion: e,
            isEnterprise: e.includes('enterprise'),
            isEnterpriseServer: e.includes('enterprise-server'),
          }
        }
    },
    802: function (e, t, r) {
      'use strict'
      r.d(t, {
        O: function () {
          return u
        },
      })
      var n = r(5893),
        a = r(4184),
        i = r.n(a),
        s = r(4702),
        o = r(5741),
        l = r(5958),
        c = r.n(l),
        u = function (e) {
          var t = e.inHeader,
            r = (0, s.Hv)().breadcrumbs
          return (0, n.jsx)('nav', {
            'data-testid': t ? 'breadcrumbs-header' : 'breadcrumbs-in-article',
            className: i()('f5 breadcrumbs', c().breadcrumbs),
            'aria-label': 'Breadcrumb',
            children: (0, n.jsx)('ul', {
              children: Object.values(r)
                .filter(Boolean)
                .map(function (e, r, a) {
                  var s = ''.concat(e.title)
                  return [
                    e.href
                      ? (0, n.jsxs)(
                          'li',
                          {
                            className: 'd-inline-block',
                            children: [
                              (0, n.jsx)(o.r, {
                                'data-testid': 'breadcrumb-link',
                                href: e.href,
                                title: s,
                                className: i()(
                                  'Link--primary mr-2 color-fg-muted',
                                  !t &&
                                    r === a.length - 1 &&
                                    1 !== a.length &&
                                    'd-none'
                                ),
                                children: e.title,
                              }),
                              r !== a.length - 1
                                ? (0, n.jsx)(
                                    'span',
                                    {
                                      className: 'color-fg-muted pr-2',
                                      children: '/',
                                    },
                                    ''.concat(r, '-slash')
                                  )
                                : null,
                            ],
                          },
                          s
                        )
                      : (0, n.jsx)(
                          'span',
                          {
                            'data-testid': 'breadcrumb-title',
                            title: s,
                            className: 'px-2',
                            children: e.title,
                          },
                          s
                        ),
                  ]
                }),
            }),
          })
        }
    },
    687: function (e) {
      e.exports = {
        visuallyHidden: 'Survey_visuallyHidden__jCarg',
        customRadio: 'Survey_customRadio__Hb804',
      }
    },
    5958: function (e) {
      e.exports = { breadcrumbs: 'Breadcrumbs_breadcrumbs__jTYMM' }
    },
    180: function (e) {
      e.exports = {
        DeprecationBanner: 'DeprecationBanner_DeprecationBanner__2Tylv',
      }
    },
    6569: function (e) {
      e.exports = {
        header: 'Header_header__LpzL7',
        portalRoot: 'Header_portalRoot__MF3ab',
        widgetsContainer: 'Header_widgetsContainer__1u5pq',
        searchContainerWithClosedSearch:
          'Header_searchContainerWithClosedSearch__T_Hd0',
        searchContainerWithOpenSearch:
          'Header_searchContainerWithOpenSearch__7mgvY',
        logoWithClosedSearch: 'Header_logoWithClosedSearch__ZrqpO',
        logoWithOpenSearch: 'Header_logoWithOpenSearch__T6F4W',
        menuOverlay: 'Header_menuOverlay__HgonJ',
      }
    },
    1109: function (e) {
      e.exports = { container: 'HeaderNotifications_container__TQcII' }
    },
    7290: function (e) {
      e.exports = { itemsWidth: 'VersionPicker_itemsWidth__NxHEL' }
    },
    3137: function (e) {
      e.exports = {
        operationWidth: 'RestCollapsibleSection_operationWidth__NP28E',
        toggleHover: 'RestCollapsibleSection_toggleHover__onHWa',
      }
    },
    6563: function (e) {
      e.exports = { extrasDisplay: 'Fields_extrasDisplay__brwDH' }
    },
  },
])
