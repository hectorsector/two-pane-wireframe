;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [377],
  {
    7335: function (u, D, F) {
      'use strict'
      F.d(D, {
        Z: function () {
          return B
        },
      })
      var t = F(4184),
        e = F.n(t),
        n = F(7294),
        r = F(2125),
        C = F(5390),
        i = F(5173),
        E = F(8908)
      function A() {
        return (
          (A = Object.assign
            ? Object.assign.bind()
            : function (u) {
                for (var D = 1; D < arguments.length; D++) {
                  var F = arguments[D]
                  for (var t in F)
                    Object.prototype.hasOwnProperty.call(F, t) && (u[t] = F[t])
                }
                return u
              }),
          A.apply(this, arguments)
        )
      }
      const s = r.ZP.nav.withConfig({
        displayName: 'UnderlineNav__UnderlineNavBase',
        componentId: 'sc-1lhwixe-0',
      })(
        [
          'display:flex;justify-content:space-between;border-bottom:1px solid ',
          ';&.PRC-UnderlineNav--right{justify-content:flex-end;.PRC-UnderlineNav-item{margin-right:0;margin-left:',
          ';}.PRC-UnderlineNav-actions{flex:1 1 auto;}}&.PRC-UnderlineNav--full{display:block;}.PRC-UnderlineNav-body{display:flex;margin-bottom:-1px;}.PRC-UnderlineNav-actions{align-self:center;}',
          ';',
        ],
        (0, C.U2)('colors.border.muted'),
        (0, C.U2)('space.3'),
        i.Z
      )
      function o({
        actions: u,
        className: D,
        align: F,
        children: t,
        full: r,
        label: C,
        theme: i,
        ...E
      }) {
        const o = e()(
          D,
          'PRC-UnderlineNav',
          F && `PRC-UnderlineNav--${F}`,
          r && 'PRC-UnderlineNav--full'
        )
        return n.createElement(
          s,
          A({ className: o, 'aria-label': C, theme: i }, E),
          n.createElement('div', { className: 'PRC-UnderlineNav-body' }, t),
          u &&
            n.createElement('div', { className: 'PRC-UnderlineNav-actions' }, u)
        )
      }
      o.displayName = 'UnderlineNav'
      const a = r.ZP.a
        .attrs((u) => ({
          activeClassName: 'string' === typeof u.to ? 'selected' : '',
          className: e()(
            'PRC-UnderlineNav-item',
            u.selected && 'PRC-selected',
            u.className
          ),
        }))
        .withConfig({
          displayName: 'UnderlineNav__UnderlineNavLink',
          componentId: 'sc-1lhwixe-1',
        })(
        [
          'padding:',
          ' ',
          ';margin-right:',
          ';font-size:',
          ';line-height:',
          ';color:',
          ';text-align:center;border-bottom:2px solid transparent;text-decoration:none;&:hover,&:focus{color:',
          ';text-decoration:none;border-bottom-color:',
          ';transition:border-bottom-color 0.2s ease;.PRC-UnderlineNav-octicon{color:',
          ';}}&.PRC-selected{color:',
          ';border-bottom-color:',
          ';.PRC-UnderlineNav-octicon{color:',
          ';}}',
          ';',
          ';',
        ],
        (0, C.U2)('space.3'),
        (0, C.U2)('space.2'),
        (0, C.U2)('space.3'),
        (0, C.U2)('fontSizes.1'),
        (0, C.U2)('lineHeights.default'),
        (0, C.U2)('colors.fg.default'),
        (0, C.U2)('colors.fg.default'),
        (0, C.U2)('colors.neutral.muted'),
        (0, C.U2)('colors.fg.muted'),
        (0, C.U2)('colors.fg.default'),
        (0, C.U2)('colors.primer.border.active'),
        (0, C.U2)('colors.fg.default'),
        (0, E.Z)('-8px'),
        i.Z
      )
      a.displayName = 'UnderlineNav.Link'
      var B = Object.assign(o, { Link: a })
    },
    7484: function (u) {
      u.exports = (function () {
        'use strict'
        var u = 1e3,
          D = 6e4,
          F = 36e5,
          t = 'millisecond',
          e = 'second',
          n = 'minute',
          r = 'hour',
          C = 'day',
          i = 'week',
          E = 'month',
          A = 'quarter',
          s = 'year',
          o = 'date',
          a = 'Invalid Date',
          B =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          c =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          l = {
            name: 'en',
            weekdays:
              'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                '_'
              ),
            months:
              'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
          },
          f = function (u, D, F) {
            var t = String(u)
            return !t || t.length >= D
              ? u
              : '' + Array(D + 1 - t.length).join(F) + u
          },
          d = {
            s: f,
            z: function (u) {
              var D = -u.utcOffset(),
                F = Math.abs(D),
                t = Math.floor(F / 60),
                e = F % 60
              return (D <= 0 ? '+' : '-') + f(t, 2, '0') + ':' + f(e, 2, '0')
            },
            m: function u(D, F) {
              if (D.date() < F.date()) return -u(F, D)
              var t = 12 * (F.year() - D.year()) + (F.month() - D.month()),
                e = D.clone().add(t, E),
                n = F - e < 0,
                r = D.clone().add(t + (n ? -1 : 1), E)
              return +(-(t + (F - e) / (n ? e - r : r - e)) || 0)
            },
            a: function (u) {
              return u < 0 ? Math.ceil(u) || 0 : Math.floor(u)
            },
            p: function (u) {
              return (
                { M: E, y: s, w: i, d: C, D: o, h: r, m: n, s: e, ms: t, Q: A }[
                  u
                ] ||
                String(u || '')
                  .toLowerCase()
                  .replace(/s$/, '')
              )
            },
            u: function (u) {
              return void 0 === u
            },
          },
          h = 'en',
          $ = {}
        $[h] = l
        var m = function (u) {
            return u instanceof y
          },
          v = function u(D, F, t) {
            var e
            if (!D) return h
            if ('string' == typeof D) {
              var n = D.toLowerCase()
              $[n] && (e = n), F && (($[n] = F), (e = n))
              var r = D.split('-')
              if (!e && r.length > 1) return u(r[0])
            } else {
              var C = D.name
              ;($[C] = D), (e = C)
            }
            return !t && e && (h = e), e || (!t && h)
          },
          g = function (u, D) {
            if (m(u)) return u.clone()
            var F = 'object' == typeof D ? D : {}
            return (F.date = u), (F.args = arguments), new y(F)
          },
          p = d
        ;(p.l = v),
          (p.i = m),
          (p.w = function (u, D) {
            return g(u, {
              locale: D.$L,
              utc: D.$u,
              x: D.$x,
              $offset: D.$offset,
            })
          })
        var y = (function () {
            function l(u) {
              ;(this.$L = v(u.locale, null, !0)), this.parse(u)
            }
            var f = l.prototype
            return (
              (f.parse = function (u) {
                ;(this.$d = (function (u) {
                  var D = u.date,
                    F = u.utc
                  if (null === D) return new Date(NaN)
                  if (p.u(D)) return new Date()
                  if (D instanceof Date) return new Date(D)
                  if ('string' == typeof D && !/Z$/i.test(D)) {
                    var t = D.match(B)
                    if (t) {
                      var e = t[2] - 1 || 0,
                        n = (t[7] || '0').substring(0, 3)
                      return F
                        ? new Date(
                            Date.UTC(
                              t[1],
                              e,
                              t[3] || 1,
                              t[4] || 0,
                              t[5] || 0,
                              t[6] || 0,
                              n
                            )
                          )
                        : new Date(
                            t[1],
                            e,
                            t[3] || 1,
                            t[4] || 0,
                            t[5] || 0,
                            t[6] || 0,
                            n
                          )
                    }
                  }
                  return new Date(D)
                })(u)),
                  (this.$x = u.x || {}),
                  this.init()
              }),
              (f.init = function () {
                var u = this.$d
                ;(this.$y = u.getFullYear()),
                  (this.$M = u.getMonth()),
                  (this.$D = u.getDate()),
                  (this.$W = u.getDay()),
                  (this.$H = u.getHours()),
                  (this.$m = u.getMinutes()),
                  (this.$s = u.getSeconds()),
                  (this.$ms = u.getMilliseconds())
              }),
              (f.$utils = function () {
                return p
              }),
              (f.isValid = function () {
                return !(this.$d.toString() === a)
              }),
              (f.isSame = function (u, D) {
                var F = g(u)
                return this.startOf(D) <= F && F <= this.endOf(D)
              }),
              (f.isAfter = function (u, D) {
                return g(u) < this.startOf(D)
              }),
              (f.isBefore = function (u, D) {
                return this.endOf(D) < g(u)
              }),
              (f.$g = function (u, D, F) {
                return p.u(u) ? this[D] : this.set(F, u)
              }),
              (f.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
              }),
              (f.valueOf = function () {
                return this.$d.getTime()
              }),
              (f.startOf = function (u, D) {
                var F = this,
                  t = !!p.u(D) || D,
                  A = p.p(u),
                  a = function (u, D) {
                    var e = p.w(
                      F.$u ? Date.UTC(F.$y, D, u) : new Date(F.$y, D, u),
                      F
                    )
                    return t ? e : e.endOf(C)
                  },
                  B = function (u, D) {
                    return p.w(
                      F.toDate()[u].apply(
                        F.toDate('s'),
                        (t ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(D)
                      ),
                      F
                    )
                  },
                  c = this.$W,
                  l = this.$M,
                  f = this.$D,
                  d = 'set' + (this.$u ? 'UTC' : '')
                switch (A) {
                  case s:
                    return t ? a(1, 0) : a(31, 11)
                  case E:
                    return t ? a(1, l) : a(0, l + 1)
                  case i:
                    var h = this.$locale().weekStart || 0,
                      $ = (c < h ? c + 7 : c) - h
                    return a(t ? f - $ : f + (6 - $), l)
                  case C:
                  case o:
                    return B(d + 'Hours', 0)
                  case r:
                    return B(d + 'Minutes', 1)
                  case n:
                    return B(d + 'Seconds', 2)
                  case e:
                    return B(d + 'Milliseconds', 3)
                  default:
                    return this.clone()
                }
              }),
              (f.endOf = function (u) {
                return this.startOf(u, !1)
              }),
              (f.$set = function (u, D) {
                var F,
                  i = p.p(u),
                  A = 'set' + (this.$u ? 'UTC' : ''),
                  a = ((F = {}),
                  (F[C] = A + 'Date'),
                  (F[o] = A + 'Date'),
                  (F[E] = A + 'Month'),
                  (F[s] = A + 'FullYear'),
                  (F[r] = A + 'Hours'),
                  (F[n] = A + 'Minutes'),
                  (F[e] = A + 'Seconds'),
                  (F[t] = A + 'Milliseconds'),
                  F)[i],
                  B = i === C ? this.$D + (D - this.$W) : D
                if (i === E || i === s) {
                  var c = this.clone().set(o, 1)
                  c.$d[a](B),
                    c.init(),
                    (this.$d = c.set(o, Math.min(this.$D, c.daysInMonth())).$d)
                } else a && this.$d[a](B)
                return this.init(), this
              }),
              (f.set = function (u, D) {
                return this.clone().$set(u, D)
              }),
              (f.get = function (u) {
                return this[p.p(u)]()
              }),
              (f.add = function (t, A) {
                var o,
                  a = this
                t = Number(t)
                var B = p.p(A),
                  c = function (u) {
                    var D = g(a)
                    return p.w(D.date(D.date() + Math.round(u * t)), a)
                  }
                if (B === E) return this.set(E, this.$M + t)
                if (B === s) return this.set(s, this.$y + t)
                if (B === C) return c(1)
                if (B === i) return c(7)
                var l =
                    ((o = {}), (o[n] = D), (o[r] = F), (o[e] = u), o)[B] || 1,
                  f = this.$d.getTime() + t * l
                return p.w(f, this)
              }),
              (f.subtract = function (u, D) {
                return this.add(-1 * u, D)
              }),
              (f.format = function (u) {
                var D = this,
                  F = this.$locale()
                if (!this.isValid()) return F.invalidDate || a
                var t = u || 'YYYY-MM-DDTHH:mm:ssZ',
                  e = p.z(this),
                  n = this.$H,
                  r = this.$m,
                  C = this.$M,
                  i = F.weekdays,
                  E = F.months,
                  A = function (u, F, e, n) {
                    return (u && (u[F] || u(D, t))) || e[F].slice(0, n)
                  },
                  s = function (u) {
                    return p.s(n % 12 || 12, u, '0')
                  },
                  o =
                    F.meridiem ||
                    function (u, D, F) {
                      var t = u < 12 ? 'AM' : 'PM'
                      return F ? t.toLowerCase() : t
                    },
                  B = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: C + 1,
                    MM: p.s(C + 1, 2, '0'),
                    MMM: A(F.monthsShort, C, E, 3),
                    MMMM: A(E, C),
                    D: this.$D,
                    DD: p.s(this.$D, 2, '0'),
                    d: String(this.$W),
                    dd: A(F.weekdaysMin, this.$W, i, 2),
                    ddd: A(F.weekdaysShort, this.$W, i, 3),
                    dddd: i[this.$W],
                    H: String(n),
                    HH: p.s(n, 2, '0'),
                    h: s(1),
                    hh: s(2),
                    a: o(n, r, !0),
                    A: o(n, r, !1),
                    m: String(r),
                    mm: p.s(r, 2, '0'),
                    s: String(this.$s),
                    ss: p.s(this.$s, 2, '0'),
                    SSS: p.s(this.$ms, 3, '0'),
                    Z: e,
                  }
                return t.replace(c, function (u, D) {
                  return D || B[u] || e.replace(':', '')
                })
              }),
              (f.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
              }),
              (f.diff = function (t, o, a) {
                var B,
                  c = p.p(o),
                  l = g(t),
                  f = (l.utcOffset() - this.utcOffset()) * D,
                  d = this - l,
                  h = p.m(this, l)
                return (
                  (h =
                    ((B = {}),
                    (B[s] = h / 12),
                    (B[E] = h),
                    (B[A] = h / 3),
                    (B[i] = (d - f) / 6048e5),
                    (B[C] = (d - f) / 864e5),
                    (B[r] = d / F),
                    (B[n] = d / D),
                    (B[e] = d / u),
                    B)[c] || d),
                  a ? h : p.a(h)
                )
              }),
              (f.daysInMonth = function () {
                return this.endOf(E).$D
              }),
              (f.$locale = function () {
                return $[this.$L]
              }),
              (f.locale = function (u, D) {
                if (!u) return this.$L
                var F = this.clone(),
                  t = v(u, D, !0)
                return t && (F.$L = t), F
              }),
              (f.clone = function () {
                return p.w(this.$d, this)
              }),
              (f.toDate = function () {
                return new Date(this.valueOf())
              }),
              (f.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
              }),
              (f.toISOString = function () {
                return this.$d.toISOString()
              }),
              (f.toString = function () {
                return this.$d.toUTCString()
              }),
              l
            )
          })(),
          M = y.prototype
        return (
          (g.prototype = M),
          [
            ['$ms', t],
            ['$s', e],
            ['$m', n],
            ['$H', r],
            ['$W', C],
            ['$M', E],
            ['$y', s],
            ['$D', o],
          ].forEach(function (u) {
            M[u[1]] = function (D) {
              return this.$g(D, u[0], u[1])
            }
          }),
          (g.extend = function (u, D) {
            return u.$i || (u(D, y, g), (u.$i = !0)), g
          }),
          (g.locale = v),
          (g.isDayjs = m),
          (g.unix = function (u) {
            return g(1e3 * u)
          }),
          (g.en = $[h]),
          (g.Ls = $),
          (g.p = {}),
          g
        )
      })()
    },
    9911: function (u, D, F) {
      'use strict'
      F.d(D, {
        Z: function () {
          return n
        },
        o: function () {
          return r
        },
      })
      const t =
          /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,
        e = Object.hasOwnProperty
      class n {
        constructor() {
          this.occurrences, this.reset()
        }
        slug(u, D) {
          const F = this
          let t = r(u, !0 === D)
          const n = t
          for (; e.call(F.occurrences, t); )
            F.occurrences[n]++, (t = n + '-' + F.occurrences[n])
          return (F.occurrences[t] = 0), t
        }
        reset() {
          this.occurrences = Object.create(null)
        }
      }
      function r(u, D) {
        return 'string' !== typeof u
          ? ''
          : (D || (u = u.toLowerCase()), u.replace(t, '').replace(/ /g, '-'))
      }
    },
  },
])
