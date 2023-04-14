;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    8386: function (e, r, t) {
      'use strict'
      t.d(r, {
        Fg: function () {
          return l
        },
        ZP: function () {
          return p
        },
      })
      var a = t(7294),
        n = t(3935),
        o = t(2125),
        i = t(7689),
        f = t(9996),
        d = t.n(f)
      const g = 'light',
        c = 'dark',
        s = a.createContext({
          setColorMode: () => null,
          setDayScheme: () => null,
          setNightScheme: () => null,
        }),
        b = ({ children: e, ...r }) => {
          var t, f, b, p, m, v, x, B
          const { theme: y, colorMode: w, dayScheme: k, nightScheme: T } = l(),
            S =
              null !== (t = null !== (f = r.theme) && void 0 !== f ? f : y) &&
              void 0 !== t
                ? t
                : i.Z,
            { resolvedServerColorMode: C } = (() => {
              try {
                var e
                const r =
                  null === (e = document.getElementById('__PRIMER_DATA__')) ||
                  void 0 === e
                    ? void 0
                    : e.textContent
                if (r) return JSON.parse(r)
              } catch (r) {}
              return {}
            })(),
            I = a.useRef(C),
            [A, E] = a.useState(
              null !==
                (b = null !== (p = r.colorMode) && void 0 !== p ? p : w) &&
                void 0 !== b
                ? b
                : 'day'
            ),
            [O, P] = a.useState(
              null !==
                (m = null !== (v = r.dayScheme) && void 0 !== v ? v : k) &&
                void 0 !== m
                ? m
                : g
            ),
            [_, j] = a.useState(
              null !==
                (x = null !== (B = r.nightScheme) && void 0 !== B ? B : T) &&
                void 0 !== x
                ? x
                : c
            ),
            M = (function () {
              const [e, r] = a.useState(u)
              return (
                a.useEffect(() => {
                  var e, t
                  const a =
                    null === (e = window) ||
                    void 0 === e ||
                    null === (t = e.matchMedia) ||
                    void 0 === t
                      ? void 0
                      : t.call(e, '(prefers-color-scheme: dark)')
                  function n(e) {
                    const t = e.matches
                    r(t ? 'night' : 'day')
                  }
                  if (a) {
                    if (void 0 !== a.addEventListener)
                      return (
                        a.addEventListener('change', n),
                        function () {
                          a.removeEventListener('change', n)
                        }
                      )
                    if (void 0 !== a.addListener)
                      return (
                        a.addListener(n),
                        function () {
                          a.removeListener(n)
                        }
                      )
                  }
                }, []),
                e
              )
            })(),
            H = I.current || h(A, M),
            D = (function (e, r, t) {
              switch (e) {
                case 'day':
                case 'light':
                  return r
                case 'dark':
                case 'night':
                  return t
              }
            })(H, O, _),
            { resolvedTheme: R, resolvedColorScheme: F } = a.useMemo(
              () =>
                (function (e, r) {
                  if (!e.colorSchemes)
                    return { resolvedTheme: e, resolvedColorScheme: void 0 }
                  if (!e.colorSchemes[r]) {
                    console.error(
                      `\`${r}\` scheme not defined in \`theme.colorSchemes\``
                    )
                    const t = Object.keys(e.colorSchemes)[0]
                    return {
                      resolvedTheme: d()(e, e.colorSchemes[t]),
                      resolvedColorScheme: t,
                    }
                  }
                  return {
                    resolvedTheme: d()(e, e.colorSchemes[r]),
                    resolvedColorScheme: r,
                  }
                })(S, D),
              [S, D]
            )
          return (
            a.useEffect(
              function () {
                const e = h(A, M)
                I.current &&
                  (I.current !== e &&
                    window.setTimeout(() => {
                      n.flushSync(() => {
                        E(e)
                      }),
                        E(A)
                    }),
                  (I.current = null))
              },
              [A, M]
            ),
            a.useEffect(() => {
              var e, t
              E(
                null !==
                  (e = null !== (t = r.colorMode) && void 0 !== t ? t : w) &&
                  void 0 !== e
                  ? e
                  : 'day'
              )
            }, [r.colorMode, w]),
            a.useEffect(() => {
              var e, t
              P(
                null !==
                  (e = null !== (t = r.dayScheme) && void 0 !== t ? t : k) &&
                  void 0 !== e
                  ? e
                  : g
              )
            }, [r.dayScheme, k]),
            a.useEffect(() => {
              var e, t
              j(
                null !==
                  (e = null !== (t = r.nightScheme) && void 0 !== t ? t : T) &&
                  void 0 !== e
                  ? e
                  : c
              )
            }, [r.nightScheme, T]),
            a.createElement(
              s.Provider,
              {
                value: {
                  theme: R,
                  colorScheme: D,
                  colorMode: A,
                  resolvedColorMode: H,
                  resolvedColorScheme: F,
                  dayScheme: O,
                  nightScheme: _,
                  setColorMode: E,
                  setDayScheme: P,
                  setNightScheme: j,
                },
              },
              a.createElement(
                o.f6,
                { theme: R },
                e,
                r.preventSSRMismatch
                  ? a.createElement('script', {
                      type: 'application/json',
                      id: '__PRIMER_DATA__',
                      dangerouslySetInnerHTML: {
                        __html: JSON.stringify({ resolvedServerColorMode: H }),
                      },
                    })
                  : null
              )
            )
          )
        }
      function l() {
        return a.useContext(s)
      }
      function u() {
        var e, r, t
        return 'undefined' !== typeof window &&
          null !== (e = (r = window).matchMedia) &&
          void 0 !== e &&
          null !== (t = e.call(r, '(prefers-color-scheme: dark)')) &&
          void 0 !== t &&
          t.matches
          ? 'night'
          : 'day'
      }
      function h(e, r) {
        return 'auto' === e ? r : e
      }
      b.displayName = 'ThemeProvider'
      var p = b
    },
    7689: function (e, r, t) {
      'use strict'
      t.d(r, {
        Z: function () {
          return a
        },
      })
      var a = {
        animation: { easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)' },
        borderWidths: [0, '1px'],
        breakpoints: ['544px', '768px', '1012px', '1280px'],
        fonts: {
          normal:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          mono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
        },
        fontSizes: [
          '12px',
          '14px',
          '16px',
          '20px',
          '24px',
          '32px',
          '40px',
          '48px',
        ],
        fontWeights: { light: 300, normal: 400, semibold: 500, bold: 600 },
        lineHeights: { condensedUltra: 1, condensed: 1.25, default: 1.5 },
        radii: ['0', '3px', '6px', '100px'],
        sizes: {
          small: '544px',
          medium: '768px',
          large: '1012px',
          xlarge: '1280px',
        },
        space: [
          '0',
          '4px',
          '8px',
          '16px',
          '24px',
          '32px',
          '40px',
          '48px',
          '64px',
          '80px',
          '96px',
          '112px',
          '128px',
        ],
        colorSchemes: {
          light: {
            colors: {
              canvasDefaultTransparent: 'rgba(255,255,255,0)',
              pageHeaderBg: '#f6f8fa',
              marketingIcon: { primary: '#218bff', secondary: '#54aeff' },
              diffBlob: {
                addition: {
                  numText: '#24292f',
                  fg: '#24292f',
                  numBg: '#ccffd8',
                  lineBg: '#e6ffec',
                  wordBg: '#abf2bc',
                },
                deletion: {
                  numText: '#24292f',
                  fg: '#24292f',
                  numBg: '#ffd7d5',
                  lineBg: '#ffebe9',
                  wordBg: 'rgba(255,129,130,0.4)',
                },
                hunk: { numBg: 'rgba(84,174,255,0.4)' },
                expander: { icon: '#57606a' },
              },
              diffstat: {
                deletionBorder: 'rgba(27,31,36,0.15)',
                additionBorder: 'rgba(27,31,36,0.15)',
                additionBg: '#2da44e',
              },
              searchKeyword: { hl: '#fff8c5' },
              prettylights: {
                syntax: {
                  comment: '#6e7781',
                  constant: '#0550ae',
                  entity: '#8250df',
                  storageModifierImport: '#24292f',
                  entityTag: '#116329',
                  keyword: '#cf222e',
                  string: '#0a3069',
                  variable: '#953800',
                  brackethighlighterUnmatched: '#82071e',
                  invalidIllegalText: '#f6f8fa',
                  invalidIllegalBg: '#82071e',
                  carriageReturnText: '#f6f8fa',
                  carriageReturnBg: '#cf222e',
                  stringRegexp: '#116329',
                  markupList: '#3b2300',
                  markupHeading: '#0550ae',
                  markupItalic: '#24292f',
                  markupBold: '#24292f',
                  markupDeletedText: '#82071e',
                  markupDeletedBg: '#ffebe9',
                  markupInsertedText: '#116329',
                  markupInsertedBg: '#dafbe1',
                  markupChangedText: '#953800',
                  markupChangedBg: '#ffd8b5',
                  markupIgnoredText: '#eaeef2',
                  markupIgnoredBg: '#0550ae',
                  metaDiffRange: '#8250df',
                  brackethighlighterAngle: '#57606a',
                  sublimelinterGutterMark: '#8c959f',
                  constantOtherReferenceLink: '#0a3069',
                },
              },
              codemirror: {
                text: '#24292f',
                bg: '#ffffff',
                guttersBg: '#ffffff',
                guttermarkerText: '#ffffff',
                guttermarkerSubtleText: '#6e7781',
                linenumberText: '#57606a',
                cursor: '#24292f',
                selectionBg: 'rgba(84,174,255,0.4)',
                activelineBg: 'rgba(234,238,242,0.5)',
                matchingbracketText: '#24292f',
                linesBg: '#ffffff',
                syntax: {
                  comment: '#24292f',
                  constant: '#0550ae',
                  entity: '#8250df',
                  keyword: '#cf222e',
                  storage: '#cf222e',
                  string: '#0a3069',
                  support: '#0550ae',
                  variable: '#953800',
                },
              },
              checks: {
                bg: '#24292f',
                textPrimary: '#f6f8fa',
                textSecondary: '#8c959f',
                textLink: '#54aeff',
                btnIcon: '#afb8c1',
                btnHoverIcon: '#f6f8fa',
                btnHoverBg: 'rgba(255,255,255,0.125)',
                inputText: '#eaeef2',
                inputPlaceholderText: '#8c959f',
                inputFocusText: '#8c959f',
                inputBg: '#32383f',
                donutError: '#fa4549',
                donutPending: '#bf8700',
                donutSuccess: '#2da44e',
                donutNeutral: '#afb8c1',
                dropdownText: '#afb8c1',
                dropdownBg: '#32383f',
                dropdownBorder: '#424a53',
                dropdownShadow: 'rgba(27,31,36,0.3)',
                dropdownHoverText: '#f6f8fa',
                dropdownHoverBg: '#424a53',
                dropdownBtnHoverText: '#f6f8fa',
                dropdownBtnHoverBg: '#32383f',
                scrollbarThumbBg: '#57606a',
                headerLabelText: '#d0d7de',
                headerLabelOpenText: '#f6f8fa',
                headerBorder: '#32383f',
                headerIcon: '#8c959f',
                lineText: '#d0d7de',
                lineNumText: 'rgba(140,149,159,0.75)',
                lineTimestampText: '#8c959f',
                lineHoverBg: '#32383f',
                lineSelectedBg: 'rgba(33,139,255,0.15)',
                lineSelectedNumText: '#54aeff',
                lineDtFmText: '#24292f',
                lineDtFmBg: '#9a6700',
                gateBg: 'rgba(125,78,0,0.15)',
                gateText: '#d0d7de',
                gateWaitingText: '#d4a72c',
                stepHeaderOpenBg: '#32383f',
                stepErrorText: '#ff8182',
                stepWarningText: '#d4a72c',
                loglineText: '#8c959f',
                loglineNumText: 'rgba(140,149,159,0.75)',
                loglineDebugText: '#c297ff',
                loglineErrorText: '#d0d7de',
                loglineErrorNumText: '#ff8182',
                loglineErrorBg: 'rgba(164,14,38,0.15)',
                loglineWarningText: '#d0d7de',
                loglineWarningNumText: '#d4a72c',
                loglineWarningBg: 'rgba(125,78,0,0.15)',
                loglineCommandText: '#54aeff',
                loglineSectionText: '#4ac26b',
                ansi: {
                  black: '#24292f',
                  blackBright: '#32383f',
                  white: '#d0d7de',
                  whiteBright: '#d0d7de',
                  gray: '#8c959f',
                  red: '#ff8182',
                  redBright: '#ffaba8',
                  green: '#4ac26b',
                  greenBright: '#6fdd8b',
                  yellow: '#d4a72c',
                  yellowBright: '#eac54f',
                  blue: '#54aeff',
                  blueBright: '#80ccff',
                  magenta: '#c297ff',
                  magentaBright: '#d8b9ff',
                  cyan: '#76e3ea',
                  cyanBright: '#b3f0ff',
                },
              },
              project: {
                headerBg: '#24292f',
                sidebarBg: '#ffffff',
                gradientIn: '#ffffff',
                gradientOut: 'rgba(255,255,255,0)',
              },
              mktg: { btn: { bg: '#1b1f23' } },
              control: { borderColor: { emphasis: '#858F99' } },
              avatar: {
                bg: '#ffffff',
                border: 'rgba(27,31,36,0.15)',
                stackFade: '#afb8c1',
                stackFadeMore: '#d0d7de',
              },
              topicTag: { border: 'rgba(0,0,0,0)' },
              counter: { border: 'rgba(0,0,0,0)' },
              selectMenu: {
                backdropBorder: 'rgba(0,0,0,0)',
                tapHighlight: 'rgba(175,184,193,0.5)',
                tapFocusBg: '#b6e3ff',
              },
              header: {
                text: 'rgba(255,255,255,0.7)',
                bg: '#24292f',
                divider: '#57606a',
                logo: '#ffffff',
              },
              headerSearch: { bg: '#24292f', border: '#57606a' },
              sidenav: { selectedBg: '#ffffff' },
              menu: { bgActive: 'rgba(0,0,0,0)' },
              input: { disabledBg: 'rgba(175,184,193,0.2)' },
              timeline: { badgeBg: '#eaeef2' },
              ansi: {
                black: '#24292f',
                blackBright: '#57606a',
                white: '#6e7781',
                whiteBright: '#8c959f',
                gray: '#6e7781',
                red: '#cf222e',
                redBright: '#a40e26',
                green: '#116329',
                greenBright: '#1a7f37',
                yellow: '#4d2d00',
                yellowBright: '#633c01',
                blue: '#0969da',
                blueBright: '#218bff',
                magenta: '#8250df',
                magentaBright: '#a475f9',
                cyan: '#1b7c83',
                cyanBright: '#3192aa',
              },
              btn: {
                text: '#24292f',
                bg: '#f6f8fa',
                border: 'rgba(27,31,36,0.15)',
                hoverBg: '#f3f4f6',
                hoverBorder: 'rgba(27,31,36,0.15)',
                activeBg: 'hsla(220,14%,93%,1)',
                activeBorder: 'rgba(27,31,36,0.15)',
                selectedBg: 'hsla(220,14%,94%,1)',
                counterBg: 'rgba(27,31,36,0.08)',
                primary: {
                  text: '#ffffff',
                  bg: '#2da44e',
                  border: 'rgba(27,31,36,0.15)',
                  hoverBg: '#2c974b',
                  hoverBorder: 'rgba(27,31,36,0.15)',
                  selectedBg: 'hsla(137,55%,36%,1)',
                  disabledText: 'rgba(255,255,255,0.8)',
                  disabledBg: '#94d3a2',
                  disabledBorder: 'rgba(27,31,36,0.15)',
                  icon: 'rgba(255,255,255,0.8)',
                  counterBg: 'rgba(255,255,255,0.2)',
                },
                outline: {
                  text: '#0969da',
                  hoverText: '#ffffff',
                  hoverBg: '#0969da',
                  hoverBorder: 'rgba(27,31,36,0.15)',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: 'hsla(212,92%,42%,1)',
                  selectedBorder: 'rgba(27,31,36,0.15)',
                  disabledText: 'rgba(9,105,218,0.5)',
                  disabledBg: '#f6f8fa',
                  disabledCounterBg: 'rgba(9,105,218,0.05)',
                  counterBg: 'rgba(9,105,218,0.1)',
                },
                danger: {
                  text: '#cf222e',
                  hoverText: '#ffffff',
                  hoverBg: '#a40e26',
                  hoverBorder: 'rgba(27,31,36,0.15)',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: 'hsla(356,72%,44%,1)',
                  selectedBorder: 'rgba(27,31,36,0.15)',
                  disabledText: 'rgba(207,34,46,0.5)',
                  disabledBg: '#f6f8fa',
                  disabledCounterBg: 'rgba(207,34,46,0.05)',
                  counterBg: 'rgba(207,34,46,0.1)',
                  icon: '#cf222e',
                  hoverIcon: '#ffffff',
                },
              },
              underlinenav: {
                icon: '#6e7781',
                borderHover: 'rgba(175,184,193,0.2)',
              },
              actionListItem: {
                inlineDivider: 'rgba(208,215,222,0.48)',
                default: {
                  hoverBg: 'rgba(208,215,222,0.32)',
                  hoverBorder: 'rgba(0,0,0,0)',
                  activeBg: 'rgba(208,215,222,0.48)',
                  activeBorder: 'rgba(0,0,0,0)',
                  selectedBg: 'rgba(208,215,222,0.24)',
                },
                danger: {
                  hoverBg: 'rgba(255,235,233,0.64)',
                  activeBg: '#ffebe9',
                  hoverText: '#cf222e',
                },
              },
              switchTrack: {
                bg: '#eaeef2',
                hoverBg: 'hsla(210,24%,90%,1)',
                activeBg: 'hsla(210,24%,88%,1)',
                disabledBg: '#8c959f',
                fg: '#57606a',
                disabledFg: '#ffffff',
                border: 'rgba(0,0,0,0)',
                checked: {
                  bg: '#0969da',
                  hoverBg: '#0860CA',
                  activeBg: '#0757BA',
                  fg: '#ffffff',
                  disabledFg: '#ffffff',
                  border: 'rgba(0,0,0,0)',
                },
              },
              switchKnob: {
                bg: '#ffffff',
                disabledBg: '#f6f8fa',
                border: '#858F99',
                checked: {
                  bg: '#ffffff',
                  disabledBg: '#f6f8fa',
                  border: '#0969da',
                },
              },
              segmentedControl: {
                bg: '#eaeef2',
                button: {
                  bg: '#ffffff',
                  hover: { bg: 'rgba(175,184,193,0.2)' },
                  active: { bg: 'rgba(175,184,193,0.4)' },
                  selected: { border: '#8c959f' },
                },
              },
              treeViewItem: {
                chevron: { hoverBg: 'rgba(208,215,222,0.32)' },
                directory: { fill: '#54aeff' },
              },
              fg: {
                default: '#24292f',
                muted: '#57606a',
                subtle: '#6e7781',
                onEmphasis: '#ffffff',
              },
              canvas: {
                default: '#ffffff',
                overlay: '#ffffff',
                inset: '#f6f8fa',
                subtle: '#f6f8fa',
              },
              border: {
                default: '#d0d7de',
                muted: 'hsla(210,18%,87%,1)',
                subtle: 'rgba(27,31,36,0.15)',
              },
              neutral: {
                emphasisPlus: '#24292f',
                emphasis: '#6e7781',
                muted: 'rgba(175,184,193,0.2)',
                subtle: 'rgba(234,238,242,0.5)',
              },
              accent: {
                fg: '#0969da',
                emphasis: '#0969da',
                muted: 'rgba(84,174,255,0.4)',
                subtle: '#ddf4ff',
              },
              success: {
                fg: '#1a7f37',
                emphasis: '#2da44e',
                muted: 'rgba(74,194,107,0.4)',
                subtle: '#dafbe1',
              },
              attention: {
                fg: '#9a6700',
                emphasis: '#bf8700',
                muted: 'rgba(212,167,44,0.4)',
                subtle: '#fff8c5',
              },
              severe: {
                fg: '#bc4c00',
                emphasis: '#bc4c00',
                muted: 'rgba(251,143,68,0.4)',
                subtle: '#fff1e5',
              },
              danger: {
                fg: '#cf222e',
                emphasis: '#cf222e',
                muted: 'rgba(255,129,130,0.4)',
                subtle: '#ffebe9',
              },
              open: {
                fg: '#1a7f37',
                emphasis: '#2da44e',
                muted: 'rgba(74,194,107,0.4)',
                subtle: '#dafbe1',
              },
              closed: {
                fg: '#cf222e',
                emphasis: '#cf222e',
                muted: 'rgba(255,129,130,0.4)',
                subtle: '#ffebe9',
              },
              done: {
                fg: '#8250df',
                emphasis: '#8250df',
                muted: 'rgba(194,151,255,0.4)',
                subtle: '#fbefff',
              },
              sponsors: {
                fg: '#bf3989',
                emphasis: '#bf3989',
                muted: 'rgba(255,128,200,0.4)',
                subtle: '#ffeff7',
              },
              primer: {
                fg: { disabled: '#8c959f' },
                canvas: {
                  backdrop: 'rgba(27,31,36,0.5)',
                  sticky: 'rgba(255,255,255,0.95)',
                },
                border: { active: '#fd8c73', contrast: 'rgba(27,31,36,0.1)' },
              },
            },
            shadows: {
              mktg: {
                btn: {
                  shadow: {
                    outline: 'rgb(0 0 0 / 15%) 0 0 0 1px inset',
                    focus: 'rgb(0 0 0 / 15%) 0 0 0 4px',
                    hover:
                      '0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)',
                    hoverMuted: 'rgb(0 0 0 / 70%) 0 0 0 2px inset',
                  },
                },
              },
              avatar: { childShadow: '-2px -2px 0 rgba(255,255,255,0.8)' },
              overlay: {
                shadow:
                  '0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12)',
              },
              btn: {
                shadow: '0 1px 0 rgba(27,31,36,0.04)',
                insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                primary: {
                  shadow: '0 1px 0 rgba(27,31,36,0.1)',
                  insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(0,45,17,0.2)',
                },
                outline: {
                  hoverShadow: '0 1px 0 rgba(27,31,36,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(0,33,85,0.2)',
                },
                danger: {
                  hoverShadow: '0 1px 0 rgba(27,31,36,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(76,0,20,0.2)',
                },
              },
              shadow: {
                small: '0 1px 0 rgba(27,31,36,0.04)',
                medium: '0 3px 6px rgba(140,149,159,0.15)',
                large: '0 8px 24px rgba(140,149,159,0.2)',
                extraLarge: '0 12px 28px rgba(140,149,159,0.3)',
              },
              primer: {
                shadow: {
                  highlight: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                  inset: 'inset 0 1px 0 rgba(208,215,222,0.2)',
                },
              },
            },
          },
          light_high_contrast: {
            colors: {
              canvasDefaultTransparent: 'rgba(255,255,255,0)',
              pageHeaderBg: '#ffffff',
              marketingIcon: { primary: '#1168e3', secondary: '#368cf9' },
              diffBlob: {
                addition: {
                  numText: '#0e1116',
                  fg: '#ffffff',
                  numBg: '#ccffd8',
                  lineBg: '#e6ffec',
                  wordBg: '#055d20',
                },
                deletion: {
                  numText: '#0e1116',
                  fg: '#ffffff',
                  numBg: '#ffd7d5',
                  lineBg: '#fff0ee',
                  wordBg: '#a0111f',
                },
                hunk: { numBg: '#9cd7ff' },
                expander: { icon: '#0e1116' },
              },
              diffstat: {
                deletionBorder: 'rgba(1,4,9,0.8)',
                additionBorder: 'rgba(1,4,9,0.8)',
                additionBg: '#117f32',
              },
              searchKeyword: { hl: '#fcf7be' },
              prettylights: {
                syntax: {
                  comment: '#66707b',
                  constant: '#023b95',
                  entity: '#622cbc',
                  storageModifierImport: '#0e1116',
                  entityTag: '#024c1a',
                  keyword: '#a0111f',
                  string: '#032563',
                  variable: '#702c00',
                  brackethighlighterUnmatched: '#6e011a',
                  invalidIllegalText: '#ffffff',
                  invalidIllegalBg: '#6e011a',
                  carriageReturnText: '#ffffff',
                  carriageReturnBg: '#a0111f',
                  stringRegexp: '#024c1a',
                  markupList: '#2e1800',
                  markupHeading: '#023b95',
                  markupItalic: '#0e1116',
                  markupBold: '#0e1116',
                  markupDeletedText: '#6e011a',
                  markupDeletedBg: '#fff0ee',
                  markupInsertedText: '#024c1a',
                  markupInsertedBg: '#d2fedb',
                  markupChangedText: '#702c00',
                  markupChangedBg: '#ffc67b',
                  markupIgnoredText: '#e7ecf0',
                  markupIgnoredBg: '#023b95',
                  metaDiffRange: '#622cbc',
                  brackethighlighterAngle: '#4b535d',
                  sublimelinterGutterMark: '#88929d',
                  constantOtherReferenceLink: '#032563',
                },
              },
              codemirror: {
                text: '#0e1116',
                bg: '#ffffff',
                guttersBg: '#ffffff',
                guttermarkerText: '#ffffff',
                guttermarkerSubtleText: '#66707b',
                linenumberText: '#0e1116',
                cursor: '#0e1116',
                selectionBg: '#368cf9',
                activelineBg: '#e7ecf0',
                matchingbracketText: '#0e1116',
                linesBg: '#ffffff',
                syntax: {
                  comment: '#0e1116',
                  constant: '#023b95',
                  entity: '#622cbc',
                  keyword: '#a0111f',
                  storage: '#a0111f',
                  string: '#032563',
                  support: '#023b95',
                  variable: '#702c00',
                },
              },
              checks: {
                bg: '#0e1116',
                textPrimary: '#ffffff',
                textSecondary: '#88929d',
                textLink: '#368cf9',
                btnIcon: '#acb6c0',
                btnHoverIcon: '#ffffff',
                btnHoverBg: 'rgba(255,255,255,0.125)',
                inputText: '#e7ecf0',
                inputPlaceholderText: '#88929d',
                inputFocusText: '#88929d',
                inputBg: '#20252c',
                donutError: '#d5232c',
                donutPending: '#956400',
                donutSuccess: '#117f32',
                donutNeutral: '#acb6c0',
                dropdownText: '#acb6c0',
                dropdownBg: '#20252c',
                dropdownBorder: '#343b43',
                dropdownShadow: 'rgba(1,4,9,0.3)',
                dropdownHoverText: '#ffffff',
                dropdownHoverBg: '#343b43',
                dropdownBtnHoverText: '#ffffff',
                dropdownBtnHoverBg: '#20252c',
                scrollbarThumbBg: '#4b535d',
                headerLabelText: '#ced5dc',
                headerLabelOpenText: '#ffffff',
                headerBorder: '#20252c',
                headerIcon: '#88929d',
                lineText: '#ced5dc',
                lineNumText: 'rgba(136,146,157,0.75)',
                lineTimestampText: '#88929d',
                lineHoverBg: '#20252c',
                lineSelectedBg: 'rgba(17,104,227,0.15)',
                lineSelectedNumText: '#368cf9',
                lineDtFmText: '#0e1116',
                lineDtFmBg: '#744500',
                gateBg: 'rgba(96,55,0,0.15)',
                gateText: '#ced5dc',
                gateWaitingText: '#b58407',
                stepHeaderOpenBg: '#20252c',
                stepErrorText: '#ee5a5d',
                stepWarningText: '#b58407',
                loglineText: '#88929d',
                loglineNumText: 'rgba(136,146,157,0.75)',
                loglineDebugText: '#a371f7',
                loglineErrorText: '#ced5dc',
                loglineErrorNumText: '#ee5a5d',
                loglineErrorBg: 'rgba(134,6,29,0.15)',
                loglineWarningText: '#ced5dc',
                loglineWarningNumText: '#b58407',
                loglineWarningBg: 'rgba(96,55,0,0.15)',
                loglineCommandText: '#368cf9',
                loglineSectionText: '#26a148',
                ansi: {
                  black: '#0e1116',
                  blackBright: '#20252c',
                  white: '#ced5dc',
                  whiteBright: '#ced5dc',
                  gray: '#88929d',
                  red: '#ee5a5d',
                  redBright: '#ff8e8a',
                  green: '#26a148',
                  greenBright: '#43c663',
                  yellow: '#b58407',
                  yellowBright: '#d5a824',
                  blue: '#368cf9',
                  blueBright: '#67b3fd',
                  magenta: '#a371f7',
                  magentaBright: '#c49bff',
                  cyan: '#76e3ea',
                  cyanBright: '#b3f0ff',
                },
              },
              project: {
                headerBg: '#0e1116',
                sidebarBg: '#ffffff',
                gradientIn: '#ffffff',
                gradientOut: 'rgba(255,255,255,0)',
              },
              mktg: { btn: { bg: '#1b1f23' } },
              control: { borderColor: { emphasis: '#20252c' } },
              avatar: {
                bg: '#ffffff',
                border: 'rgba(1,4,9,0.8)',
                stackFade: '#acb6c0',
                stackFadeMore: '#ced5dc',
              },
              topicTag: { border: '#0349b4' },
              counter: { border: '#20252c' },
              selectMenu: {
                backdropBorder: 'rgba(0,0,0,0)',
                tapHighlight: 'rgba(172,182,192,0.5)',
                tapFocusBg: '#9cd7ff',
              },
              header: {
                text: 'rgba(255,255,255,0.7)',
                bg: '#0e1116',
                divider: '#acb6c0',
                logo: '#ffffff',
              },
              headerSearch: { bg: '#0e1116', border: '#4b535d' },
              sidenav: { selectedBg: '#ffffff' },
              menu: { bgActive: 'rgba(0,0,0,0)' },
              input: { disabledBg: 'rgba(172,182,192,0.2)' },
              timeline: { badgeBg: '#e7ecf0' },
              ansi: {
                black: '#0e1116',
                blackBright: '#4b535d',
                white: '#66707b',
                whiteBright: '#88929d',
                gray: '#66707b',
                red: '#a0111f',
                redBright: '#86061d',
                green: '#024c1a',
                greenBright: '#055d20',
                yellow: '#3f2200',
                yellowBright: '#4e2c00',
                blue: '#0349b4',
                blueBright: '#1168e3',
                magenta: '#622cbc',
                magentaBright: '#844ae7',
                cyan: '#1b7c83',
                cyanBright: '#3192aa',
              },
              btn: {
                text: '#0e1116',
                bg: '#e7ecf0',
                border: 'rgba(1,4,9,0.8)',
                hoverBg: '#ced5dc',
                hoverBorder: 'rgba(1,4,9,0.8)',
                activeBg: '#acb6c0',
                activeBorder: 'rgba(1,4,9,0.8)',
                selectedBg: '#acb6c0',
                counterBg: 'rgba(1,4,9,0.08)',
                primary: {
                  text: '#ffffff',
                  bg: '#055d20',
                  border: '#013d14',
                  hoverBg: '#024c1a',
                  hoverBorder: '#013d14',
                  selectedBg: 'hsla(139,95%,13%,1)',
                  disabledText: 'rgba(255,255,255,0.8)',
                  disabledBg: '#94d3a2',
                  disabledBorder: 'rgba(1,4,9,0.8)',
                  icon: 'rgba(255,255,255,0.8)',
                  counterBg: 'rgba(255,255,255,0.2)',
                },
                outline: {
                  text: '#023b95',
                  hoverText: '#ffffff',
                  hoverBg: '#0349b4',
                  hoverBorder: '#022f7a',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: '#022f7a',
                  selectedBorder: '#022f7a',
                  disabledText: 'rgba(3,73,180,0.5)',
                  disabledBg: '#e7ecf0',
                  disabledCounterBg: 'rgba(3,73,180,0.05)',
                  counterBg: 'rgba(3,73,180,0.1)',
                },
                danger: {
                  text: '#86061d',
                  hoverText: '#ffffff',
                  hoverBg: '#a0111f',
                  hoverBorder: '#6e011a',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: '#6e011a',
                  selectedBorder: '#6e011a',
                  disabledText: 'rgba(160,17,31,0.5)',
                  disabledBg: '#e7ecf0',
                  disabledCounterBg: 'rgba(160,17,31,0.05)',
                  counterBg: 'rgba(160,17,31,0.1)',
                  icon: '#86061d',
                  hoverIcon: '#ffffff',
                },
              },
              underlinenav: {
                icon: '#66707b',
                borderHover: 'rgba(172,182,192,0.2)',
              },
              actionListItem: {
                inlineDivider: '#88929d',
                default: {
                  hoverBg: '#e7ecf0',
                  hoverBorder: '#88929d',
                  activeBg: '#ced5dc',
                  activeBorder: '#20252c',
                  selectedBg: '#ced5dc',
                },
                danger: {
                  hoverBg: '#a0111f',
                  activeBg: '#6e011a',
                  hoverText: '#ffffff',
                },
              },
              switchTrack: {
                bg: '#66707b',
                hoverBg: 'hsla(211,9%,47%,1)',
                activeBg: 'hsla(211,9%,49%,1)',
                disabledBg: '#88929d',
                fg: '#ffffff',
                disabledFg: '#ffffff',
                border: 'rgba(0,0,0,0)',
                checked: {
                  bg: '#0349b4',
                  hoverBg: '#0860CA',
                  activeBg: '#0757BA',
                  fg: '#ffffff',
                  disabledFg: '#ffffff',
                  border: 'rgba(0,0,0,0)',
                },
              },
              switchKnob: {
                bg: '#ffffff',
                disabledBg: '#e7ecf0',
                border: '#20252c',
                checked: {
                  bg: '#ffffff',
                  disabledBg: '#e7ecf0',
                  border: '#0349b4',
                },
              },
              segmentedControl: {
                bg: '#e7ecf0',
                button: {
                  bg: '#ffffff',
                  hover: { bg: 'rgba(172,182,192,0.2)' },
                  active: { bg: 'rgba(172,182,192,0.4)' },
                  selected: { border: '#88929d' },
                },
              },
              treeViewItem: {
                chevron: { hoverBg: '#ced5dc' },
                directory: { fill: '#368cf9' },
              },
              fg: {
                default: '#0e1116',
                muted: '#0e1116',
                subtle: '#66707b',
                onEmphasis: '#ffffff',
              },
              canvas: {
                default: '#ffffff',
                overlay: '#ffffff',
                inset: '#ffffff',
                subtle: '#e7ecf0',
              },
              border: {
                default: '#20252c',
                muted: '#88929d',
                subtle: 'rgba(1,4,9,0.8)',
              },
              neutral: {
                emphasisPlus: '#0e1116',
                emphasis: '#66707b',
                muted: 'rgba(172,182,192,0.2)',
                subtle: '#e7ecf0',
              },
              accent: {
                fg: '#0349b4',
                emphasis: '#0349b4',
                muted: '#368cf9',
                subtle: '#dff7ff',
              },
              success: {
                fg: '#055d20',
                emphasis: '#055d20',
                muted: '#26a148',
                subtle: '#d2fedb',
              },
              attention: {
                fg: '#744500',
                emphasis: '#744500',
                muted: '#b58407',
                subtle: '#fcf7be',
              },
              severe: {
                fg: '#873800',
                emphasis: '#873800',
                muted: '#dc6d1a',
                subtle: '#fff2d5',
              },
              danger: {
                fg: '#a0111f',
                emphasis: '#a0111f',
                muted: '#ee5a5d',
                subtle: '#fff0ee',
              },
              open: {
                fg: '#055d20',
                emphasis: '#117f32',
                muted: 'rgba(38,161,72,0.4)',
                subtle: '#d2fedb',
              },
              closed: {
                fg: '#a0111f',
                emphasis: '#a0111f',
                muted: 'rgba(238,90,93,0.4)',
                subtle: '#fff0ee',
              },
              done: {
                fg: '#622cbc',
                emphasis: '#622cbc',
                muted: '#a371f7',
                subtle: '#faf0fe',
              },
              sponsors: {
                fg: '#971368',
                emphasis: '#971368',
                muted: '#ed4baf',
                subtle: '#feeff7',
              },
              primer: {
                fg: { disabled: '#88929d' },
                canvas: {
                  backdrop: 'rgba(1,4,9,0.5)',
                  sticky: 'rgba(255,255,255,0.95)',
                },
                border: { active: '#ef5b48', contrast: 'rgba(1,4,9,0.1)' },
              },
            },
            shadows: {
              mktg: {
                btn: {
                  shadow: {
                    outline: 'rgb(0 0 0 / 15%) 0 0 0 1px inset',
                    focus: 'rgb(0 0 0 / 15%) 0 0 0 4px',
                    hover:
                      '0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)',
                    hoverMuted: 'rgb(0 0 0 / 70%) 0 0 0 2px inset',
                  },
                },
              },
              avatar: { childShadow: '-2px -2px 0 rgba(255,255,255,0.8)' },
              overlay: {
                shadow:
                  '0 1px 3px rgba(1,4,9,0.12), 0 8px 24px rgba(52,59,67,0.12)',
              },
              btn: {
                shadow: '0 1px 0 rgba(1,4,9,0.04)',
                insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                primary: {
                  shadow: '0 1px 0 rgba(1,4,9,0.1)',
                  insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(0,35,11,0.2)',
                },
                outline: {
                  hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(2,26,74,0.2)',
                },
                danger: {
                  hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(67,0,17,0.2)',
                },
              },
              shadow: {
                small: '0 1px 0 rgba(1,4,9,0.04)',
                medium: '0 3px 6px rgba(136,146,157,0.15)',
                large: '0 8px 24px rgba(136,146,157,0.2)',
                extraLarge: '0 12px 28px rgba(136,146,157,0.3)',
              },
              primer: {
                shadow: {
                  highlight: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                  inset: 'inset 0 1px 0 rgba(206,213,220,0.2)',
                },
              },
            },
          },
          light_colorblind: {
            colors: {
              canvasDefaultTransparent: 'rgba(255,255,255,0)',
              pageHeaderBg: '#f6f8fa',
              marketingIcon: { primary: '#218bff', secondary: '#54aeff' },
              diffBlob: {
                addition: {
                  numText: '#24292f',
                  fg: '#24292f',
                  numBg: 'rgba(84,174,255,0.4)',
                  lineBg: 'rgba(221,244,255,0.5)',
                  wordBg: 'rgba(84,174,255,0.4)',
                },
                deletion: {
                  numText: '#24292f',
                  fg: '#24292f',
                  numBg: 'rgba(247,153,57,0.4)',
                  lineBg: 'rgba(255,245,232,0.5)',
                  wordBg: 'rgba(255,188,109,0.5)',
                },
                hunk: { numBg: 'rgba(84,174,255,0.4)' },
                expander: { icon: '#57606a' },
              },
              diffstat: {
                deletionBorder: 'rgba(27,31,36,0.15)',
                additionBorder: 'rgba(27,31,36,0.15)',
                additionBg: '#218bff',
              },
              searchKeyword: { hl: '#fff8c5' },
              prettylights: {
                syntax: {
                  comment: '#6e7781',
                  constant: '#0550ae',
                  entity: '#8250df',
                  storageModifierImport: '#24292f',
                  entityTag: '#0550ae',
                  keyword: '#b35900',
                  string: '#0a3069',
                  variable: '#8a4600',
                  brackethighlighterUnmatched: '#6f3800',
                  invalidIllegalText: '#f6f8fa',
                  invalidIllegalBg: '#6f3800',
                  carriageReturnText: '#f6f8fa',
                  carriageReturnBg: '#b35900',
                  stringRegexp: '#0550ae',
                  markupList: '#3b2300',
                  markupHeading: '#0550ae',
                  markupItalic: '#24292f',
                  markupBold: '#24292f',
                  markupDeletedText: '#6f3800',
                  markupDeletedBg: '#fff5e8',
                  markupInsertedText: '#0550ae',
                  markupInsertedBg: '#ddf4ff',
                  markupChangedText: '#8a4600',
                  markupChangedBg: '#ffddb0',
                  markupIgnoredText: '#eaeef2',
                  markupIgnoredBg: '#0550ae',
                  metaDiffRange: '#8250df',
                  brackethighlighterAngle: '#57606a',
                  sublimelinterGutterMark: '#8c959f',
                  constantOtherReferenceLink: '#0a3069',
                },
              },
              codemirror: {
                text: '#24292f',
                bg: '#ffffff',
                guttersBg: '#ffffff',
                guttermarkerText: '#ffffff',
                guttermarkerSubtleText: '#6e7781',
                linenumberText: '#57606a',
                cursor: '#24292f',
                selectionBg: 'rgba(84,174,255,0.4)',
                activelineBg: 'rgba(234,238,242,0.5)',
                matchingbracketText: '#24292f',
                linesBg: '#ffffff',
                syntax: {
                  comment: '#24292f',
                  constant: '#0550ae',
                  entity: '#8250df',
                  keyword: '#b35900',
                  storage: '#b35900',
                  string: '#0a3069',
                  support: '#0550ae',
                  variable: '#8a4600',
                },
              },
              checks: {
                bg: '#24292f',
                textPrimary: '#f6f8fa',
                textSecondary: '#8c959f',
                textLink: '#54aeff',
                btnIcon: '#afb8c1',
                btnHoverIcon: '#f6f8fa',
                btnHoverBg: 'rgba(255,255,255,0.125)',
                inputText: '#eaeef2',
                inputPlaceholderText: '#8c959f',
                inputFocusText: '#8c959f',
                inputBg: '#32383f',
                donutError: '#dd7815',
                donutPending: '#bf8700',
                donutSuccess: '#218bff',
                donutNeutral: '#afb8c1',
                dropdownText: '#afb8c1',
                dropdownBg: '#32383f',
                dropdownBorder: '#424a53',
                dropdownShadow: 'rgba(27,31,36,0.3)',
                dropdownHoverText: '#f6f8fa',
                dropdownHoverBg: '#424a53',
                dropdownBtnHoverText: '#f6f8fa',
                dropdownBtnHoverBg: '#32383f',
                scrollbarThumbBg: '#57606a',
                headerLabelText: '#d0d7de',
                headerLabelOpenText: '#f6f8fa',
                headerBorder: '#32383f',
                headerIcon: '#8c959f',
                lineText: '#d0d7de',
                lineNumText: 'rgba(140,149,159,0.75)',
                lineTimestampText: '#8c959f',
                lineHoverBg: '#32383f',
                lineSelectedBg: 'rgba(33,139,255,0.15)',
                lineSelectedNumText: '#54aeff',
                lineDtFmText: '#24292f',
                lineDtFmBg: '#9a6700',
                gateBg: 'rgba(125,78,0,0.15)',
                gateText: '#d0d7de',
                gateWaitingText: '#d4a72c',
                stepHeaderOpenBg: '#32383f',
                stepErrorText: '#f79939',
                stepWarningText: '#d4a72c',
                loglineText: '#8c959f',
                loglineNumText: 'rgba(140,149,159,0.75)',
                loglineDebugText: '#c297ff',
                loglineErrorText: '#d0d7de',
                loglineErrorNumText: '#f79939',
                loglineErrorBg: 'rgba(138,70,0,0.15)',
                loglineWarningText: '#d0d7de',
                loglineWarningNumText: '#d4a72c',
                loglineWarningBg: 'rgba(125,78,0,0.15)',
                loglineCommandText: '#54aeff',
                loglineSectionText: '#54aeff',
                ansi: {
                  black: '#24292f',
                  blackBright: '#32383f',
                  white: '#d0d7de',
                  whiteBright: '#d0d7de',
                  gray: '#8c959f',
                  red: '#f79939',
                  redBright: '#ffbc6d',
                  green: '#54aeff',
                  greenBright: '#80ccff',
                  yellow: '#d4a72c',
                  yellowBright: '#eac54f',
                  blue: '#54aeff',
                  blueBright: '#80ccff',
                  magenta: '#c297ff',
                  magentaBright: '#d8b9ff',
                  cyan: '#76e3ea',
                  cyanBright: '#b3f0ff',
                },
              },
              project: {
                headerBg: '#24292f',
                sidebarBg: '#ffffff',
                gradientIn: '#ffffff',
                gradientOut: 'rgba(255,255,255,0)',
              },
              mktg: { btn: { bg: '#1b1f23' } },
              control: { borderColor: { emphasis: '#858F99' } },
              avatar: {
                bg: '#ffffff',
                border: 'rgba(27,31,36,0.15)',
                stackFade: '#afb8c1',
                stackFadeMore: '#d0d7de',
              },
              topicTag: { border: 'rgba(0,0,0,0)' },
              counter: { border: 'rgba(0,0,0,0)' },
              selectMenu: {
                backdropBorder: 'rgba(0,0,0,0)',
                tapHighlight: 'rgba(175,184,193,0.5)',
                tapFocusBg: '#b6e3ff',
              },
              header: {
                text: 'rgba(255,255,255,0.7)',
                bg: '#24292f',
                divider: '#57606a',
                logo: '#ffffff',
              },
              headerSearch: { bg: '#24292f', border: '#57606a' },
              sidenav: { selectedBg: '#ffffff' },
              menu: { bgActive: 'rgba(0,0,0,0)' },
              input: { disabledBg: 'rgba(175,184,193,0.2)' },
              timeline: { badgeBg: '#eaeef2' },
              ansi: {
                black: '#24292f',
                blackBright: '#57606a',
                white: '#6e7781',
                whiteBright: '#8c959f',
                gray: '#6e7781',
                red: '#b35900',
                redBright: '#8a4600',
                green: '#0550ae',
                greenBright: '#0969da',
                yellow: '#4d2d00',
                yellowBright: '#633c01',
                blue: '#0969da',
                blueBright: '#218bff',
                magenta: '#8250df',
                magentaBright: '#a475f9',
                cyan: '#1b7c83',
                cyanBright: '#3192aa',
              },
              btn: {
                text: '#24292f',
                bg: '#f6f8fa',
                border: 'rgba(27,31,36,0.15)',
                hoverBg: '#f3f4f6',
                hoverBorder: 'rgba(27,31,36,0.15)',
                activeBg: 'hsla(220,14%,93%,1)',
                activeBorder: 'rgba(27,31,36,0.15)',
                selectedBg: 'hsla(220,14%,94%,1)',
                counterBg: 'rgba(27,31,36,0.08)',
                primary: {
                  text: '#ffffff',
                  bg: '#218bff',
                  border: 'rgba(27,31,36,0.15)',
                  hoverBg: '#0969da',
                  hoverBorder: 'rgba(27,31,36,0.15)',
                  selectedBg: 'hsla(212,92%,43%,1)',
                  disabledText: 'rgba(255,255,255,0.8)',
                  disabledBg: '#80ccff',
                  disabledBorder: 'rgba(27,31,36,0.15)',
                  icon: 'rgba(255,255,255,0.8)',
                  counterBg: 'rgba(255,255,255,0.2)',
                },
                outline: {
                  text: '#0969da',
                  hoverText: '#ffffff',
                  hoverBg: '#0969da',
                  hoverBorder: 'rgba(27,31,36,0.15)',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: 'hsla(212,92%,42%,1)',
                  selectedBorder: 'rgba(27,31,36,0.15)',
                  disabledText: 'rgba(9,105,218,0.5)',
                  disabledBg: '#f6f8fa',
                  disabledCounterBg: 'rgba(9,105,218,0.05)',
                  counterBg: 'rgba(9,105,218,0.1)',
                },
                danger: {
                  text: '#b35900',
                  hoverText: '#ffffff',
                  hoverBg: '#8a4600',
                  hoverBorder: 'rgba(27,31,36,0.15)',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: 'hsla(30,100%,32%,1)',
                  selectedBorder: 'rgba(27,31,36,0.15)',
                  disabledText: 'rgba(179,89,0,0.5)',
                  disabledBg: '#f6f8fa',
                  disabledCounterBg: 'rgba(179,89,0,0.05)',
                  counterBg: 'rgba(179,89,0,0.1)',
                  icon: '#b35900',
                  hoverIcon: '#ffffff',
                },
              },
              underlinenav: {
                icon: '#6e7781',
                borderHover: 'rgba(175,184,193,0.2)',
              },
              actionListItem: {
                inlineDivider: 'rgba(208,215,222,0.48)',
                default: {
                  hoverBg: 'rgba(208,215,222,0.32)',
                  hoverBorder: 'rgba(0,0,0,0)',
                  activeBg: 'rgba(208,215,222,0.48)',
                  activeBorder: 'rgba(0,0,0,0)',
                  selectedBg: 'rgba(208,215,222,0.24)',
                },
                danger: {
                  hoverBg: 'rgba(255,245,232,0.64)',
                  activeBg: '#fff5e8',
                  hoverText: '#b35900',
                },
              },
              switchTrack: {
                bg: '#eaeef2',
                hoverBg: 'hsla(210,24%,90%,1)',
                activeBg: 'hsla(210,24%,88%,1)',
                disabledBg: '#8c959f',
                fg: '#57606a',
                disabledFg: '#ffffff',
                border: 'rgba(0,0,0,0)',
                checked: {
                  bg: '#0969da',
                  hoverBg: '#0860CA',
                  activeBg: '#0757BA',
                  fg: '#ffffff',
                  disabledFg: '#ffffff',
                  border: 'rgba(0,0,0,0)',
                },
              },
              switchKnob: {
                bg: '#ffffff',
                disabledBg: '#f6f8fa',
                border: '#858F99',
                checked: {
                  bg: '#ffffff',
                  disabledBg: '#f6f8fa',
                  border: '#0969da',
                },
              },
              segmentedControl: {
                bg: '#eaeef2',
                button: {
                  bg: '#ffffff',
                  hover: { bg: 'rgba(175,184,193,0.2)' },
                  active: { bg: 'rgba(175,184,193,0.4)' },
                  selected: { border: '#8c959f' },
                },
              },
              treeViewItem: {
                chevron: { hoverBg: 'rgba(208,215,222,0.32)' },
                directory: { fill: '#54aeff' },
              },
              fg: {
                default: '#24292f',
                muted: '#57606a',
                subtle: '#6e7781',
                onEmphasis: '#ffffff',
              },
              canvas: {
                default: '#ffffff',
                overlay: '#ffffff',
                inset: '#f6f8fa',
                subtle: '#f6f8fa',
              },
              border: {
                default: '#d0d7de',
                muted: 'hsla(210,18%,87%,1)',
                subtle: 'rgba(27,31,36,0.15)',
              },
              neutral: {
                emphasisPlus: '#24292f',
                emphasis: '#6e7781',
                muted: 'rgba(175,184,193,0.2)',
                subtle: 'rgba(234,238,242,0.5)',
              },
              accent: {
                fg: '#0969da',
                emphasis: '#0969da',
                muted: 'rgba(84,174,255,0.4)',
                subtle: '#ddf4ff',
              },
              success: {
                fg: '#0969da',
                emphasis: '#218bff',
                muted: 'rgba(84,174,255,0.4)',
                subtle: '#ddf4ff',
              },
              attention: {
                fg: '#9a6700',
                emphasis: '#bf8700',
                muted: 'rgba(212,167,44,0.4)',
                subtle: '#fff8c5',
              },
              severe: {
                fg: '#b35900',
                emphasis: '#b35900',
                muted: 'rgba(247,153,57,0.4)',
                subtle: '#fff5e8',
              },
              danger: {
                fg: '#b35900',
                emphasis: '#b35900',
                muted: 'rgba(247,153,57,0.4)',
                subtle: '#fff5e8',
              },
              open: {
                fg: '#b35900',
                emphasis: '#dd7815',
                muted: 'rgba(247,153,57,0.4)',
                subtle: '#fff5e8',
              },
              closed: {
                fg: '#6e7781',
                emphasis: '#6e7781',
                muted: 'rgba(175,184,193,0.4)',
                subtle: '#f6f8fa',
              },
              done: {
                fg: '#8250df',
                emphasis: '#8250df',
                muted: 'rgba(194,151,255,0.4)',
                subtle: '#fbefff',
              },
              sponsors: {
                fg: '#bf3989',
                emphasis: '#bf3989',
                muted: 'rgba(255,128,200,0.4)',
                subtle: '#ffeff7',
              },
              primer: {
                fg: { disabled: '#8c959f' },
                canvas: {
                  backdrop: 'rgba(27,31,36,0.5)',
                  sticky: 'rgba(255,255,255,0.95)',
                },
                border: { active: '#fd8c73', contrast: 'rgba(27,31,36,0.1)' },
              },
            },
            shadows: {
              mktg: {
                btn: {
                  shadow: {
                    outline: 'rgb(0 0 0 / 15%) 0 0 0 1px inset',
                    focus: 'rgb(0 0 0 / 15%) 0 0 0 4px',
                    hover:
                      '0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)',
                    hoverMuted: 'rgb(0 0 0 / 70%) 0 0 0 2px inset',
                  },
                },
              },
              avatar: { childShadow: '-2px -2px 0 rgba(255,255,255,0.8)' },
              overlay: {
                shadow:
                  '0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12)',
              },
              btn: {
                shadow: '0 1px 0 rgba(27,31,36,0.04)',
                insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                primary: {
                  shadow: '0 1px 0 rgba(27,31,36,0.1)',
                  insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(0,33,85,0.2)',
                },
                outline: {
                  hoverShadow: '0 1px 0 rgba(27,31,36,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(0,33,85,0.2)',
                },
                danger: {
                  hoverShadow: '0 1px 0 rgba(27,31,36,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(65,32,0,0.2)',
                },
              },
              shadow: {
                small: '0 1px 0 rgba(27,31,36,0.04)',
                medium: '0 3px 6px rgba(140,149,159,0.15)',
                large: '0 8px 24px rgba(140,149,159,0.2)',
                extraLarge: '0 12px 28px rgba(140,149,159,0.3)',
              },
              primer: {
                shadow: {
                  highlight: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                  inset: 'inset 0 1px 0 rgba(208,215,222,0.2)',
                },
              },
            },
          },
          light_tritanopia: {
            colors: {
              canvasDefaultTransparent: 'rgba(255,255,255,0)',
              pageHeaderBg: '#f6f8fa',
              marketingIcon: { primary: '#218bff', secondary: '#54aeff' },
              diffBlob: {
                addition: {
                  numText: '#24292f',
                  fg: '#24292f',
                  numBg: 'rgba(84,174,255,0.4)',
                  lineBg: 'rgba(221,244,255,0.5)',
                  wordBg: 'rgba(84,174,255,0.4)',
                },
                deletion: {
                  numText: '#24292f',
                  fg: '#24292f',
                  numBg: 'rgba(255,129,130,0.4)',
                  lineBg: 'rgba(255,235,233,0.5)',
                  wordBg: 'rgba(255,171,168,0.5)',
                },
                hunk: { numBg: 'rgba(84,174,255,0.4)' },
                expander: { icon: '#57606a' },
              },
              diffstat: {
                deletionBorder: 'rgba(27,31,36,0.15)',
                additionBorder: 'rgba(27,31,36,0.15)',
                additionBg: '#218bff',
              },
              searchKeyword: { hl: '#fff8c5' },
              prettylights: {
                syntax: {
                  comment: '#6e7781',
                  constant: '#0550ae',
                  entity: '#8250df',
                  storageModifierImport: '#24292f',
                  entityTag: '#0550ae',
                  keyword: '#cf222e',
                  string: '#0a3069',
                  variable: '#a40e26',
                  brackethighlighterUnmatched: '#82071e',
                  invalidIllegalText: '#f6f8fa',
                  invalidIllegalBg: '#82071e',
                  carriageReturnText: '#f6f8fa',
                  carriageReturnBg: '#cf222e',
                  stringRegexp: '#0550ae',
                  markupList: '#3b2300',
                  markupHeading: '#0550ae',
                  markupItalic: '#24292f',
                  markupBold: '#24292f',
                  markupDeletedText: '#82071e',
                  markupDeletedBg: '#ffebe9',
                  markupInsertedText: '#0550ae',
                  markupInsertedBg: '#ddf4ff',
                  markupChangedText: '#a40e26',
                  markupChangedBg: '#ffcecb',
                  markupIgnoredText: '#eaeef2',
                  markupIgnoredBg: '#0550ae',
                  metaDiffRange: '#8250df',
                  brackethighlighterAngle: '#57606a',
                  sublimelinterGutterMark: '#8c959f',
                  constantOtherReferenceLink: '#0a3069',
                },
              },
              codemirror: {
                text: '#24292f',
                bg: '#ffffff',
                guttersBg: '#ffffff',
                guttermarkerText: '#ffffff',
                guttermarkerSubtleText: '#6e7781',
                linenumberText: '#57606a',
                cursor: '#24292f',
                selectionBg: 'rgba(84,174,255,0.4)',
                activelineBg: 'rgba(234,238,242,0.5)',
                matchingbracketText: '#24292f',
                linesBg: '#ffffff',
                syntax: {
                  comment: '#24292f',
                  constant: '#0550ae',
                  entity: '#8250df',
                  keyword: '#cf222e',
                  storage: '#cf222e',
                  string: '#0a3069',
                  support: '#0550ae',
                  variable: '#a40e26',
                },
              },
              checks: {
                bg: '#24292f',
                textPrimary: '#f6f8fa',
                textSecondary: '#8c959f',
                textLink: '#54aeff',
                btnIcon: '#afb8c1',
                btnHoverIcon: '#f6f8fa',
                btnHoverBg: 'rgba(255,255,255,0.125)',
                inputText: '#eaeef2',
                inputPlaceholderText: '#8c959f',
                inputFocusText: '#8c959f',
                inputBg: '#32383f',
                donutError: '#fa4549',
                donutPending: '#bf8700',
                donutSuccess: '#218bff',
                donutNeutral: '#afb8c1',
                dropdownText: '#afb8c1',
                dropdownBg: '#32383f',
                dropdownBorder: '#424a53',
                dropdownShadow: 'rgba(27,31,36,0.3)',
                dropdownHoverText: '#f6f8fa',
                dropdownHoverBg: '#424a53',
                dropdownBtnHoverText: '#f6f8fa',
                dropdownBtnHoverBg: '#32383f',
                scrollbarThumbBg: '#57606a',
                headerLabelText: '#d0d7de',
                headerLabelOpenText: '#f6f8fa',
                headerBorder: '#32383f',
                headerIcon: '#8c959f',
                lineText: '#d0d7de',
                lineNumText: 'rgba(140,149,159,0.75)',
                lineTimestampText: '#8c959f',
                lineHoverBg: '#32383f',
                lineSelectedBg: 'rgba(33,139,255,0.15)',
                lineSelectedNumText: '#54aeff',
                lineDtFmText: '#24292f',
                lineDtFmBg: '#9a6700',
                gateBg: 'rgba(125,78,0,0.15)',
                gateText: '#d0d7de',
                gateWaitingText: '#d4a72c',
                stepHeaderOpenBg: '#32383f',
                stepErrorText: '#ff8182',
                stepWarningText: '#d4a72c',
                loglineText: '#8c959f',
                loglineNumText: 'rgba(140,149,159,0.75)',
                loglineDebugText: '#c297ff',
                loglineErrorText: '#d0d7de',
                loglineErrorNumText: '#ff8182',
                loglineErrorBg: 'rgba(164,14,38,0.15)',
                loglineWarningText: '#d0d7de',
                loglineWarningNumText: '#d4a72c',
                loglineWarningBg: 'rgba(125,78,0,0.15)',
                loglineCommandText: '#54aeff',
                loglineSectionText: '#54aeff',
                ansi: {
                  black: '#24292f',
                  blackBright: '#32383f',
                  white: '#d0d7de',
                  whiteBright: '#d0d7de',
                  gray: '#8c959f',
                  red: '#ff8182',
                  redBright: '#ffaba8',
                  green: '#54aeff',
                  greenBright: '#80ccff',
                  yellow: '#d4a72c',
                  yellowBright: '#eac54f',
                  blue: '#54aeff',
                  blueBright: '#80ccff',
                  magenta: '#c297ff',
                  magentaBright: '#d8b9ff',
                  cyan: '#76e3ea',
                  cyanBright: '#b3f0ff',
                },
              },
              project: {
                headerBg: '#24292f',
                sidebarBg: '#ffffff',
                gradientIn: '#ffffff',
                gradientOut: 'rgba(255,255,255,0)',
              },
              mktg: { btn: { bg: '#1b1f23' } },
              control: { borderColor: { emphasis: '#858F99' } },
              avatar: {
                bg: '#ffffff',
                border: 'rgba(27,31,36,0.15)',
                stackFade: '#afb8c1',
                stackFadeMore: '#d0d7de',
              },
              topicTag: { border: 'rgba(0,0,0,0)' },
              counter: { border: 'rgba(0,0,0,0)' },
              selectMenu: {
                backdropBorder: 'rgba(0,0,0,0)',
                tapHighlight: 'rgba(175,184,193,0.5)',
                tapFocusBg: '#b6e3ff',
              },
              header: {
                text: 'rgba(255,255,255,0.7)',
                bg: '#24292f',
                divider: '#57606a',
                logo: '#ffffff',
              },
              headerSearch: { bg: '#24292f', border: '#57606a' },
              sidenav: { selectedBg: '#ffffff' },
              menu: { bgActive: 'rgba(0,0,0,0)' },
              input: { disabledBg: 'rgba(175,184,193,0.2)' },
              timeline: { badgeBg: '#eaeef2' },
              ansi: {
                black: '#24292f',
                blackBright: '#57606a',
                white: '#6e7781',
                whiteBright: '#8c959f',
                gray: '#6e7781',
                red: '#cf222e',
                redBright: '#a40e26',
                green: '#0550ae',
                greenBright: '#0969da',
                yellow: '#4d2d00',
                yellowBright: '#633c01',
                blue: '#0969da',
                blueBright: '#218bff',
                magenta: '#8250df',
                magentaBright: '#a475f9',
                cyan: '#1b7c83',
                cyanBright: '#3192aa',
              },
              btn: {
                text: '#24292f',
                bg: '#f6f8fa',
                border: 'rgba(27,31,36,0.15)',
                hoverBg: '#f3f4f6',
                hoverBorder: 'rgba(27,31,36,0.15)',
                activeBg: 'hsla(220,14%,93%,1)',
                activeBorder: 'rgba(27,31,36,0.15)',
                selectedBg: 'hsla(220,14%,94%,1)',
                counterBg: 'rgba(27,31,36,0.08)',
                primary: {
                  text: '#ffffff',
                  bg: '#218bff',
                  border: 'rgba(27,31,36,0.15)',
                  hoverBg: '#0969da',
                  hoverBorder: 'rgba(27,31,36,0.15)',
                  selectedBg: 'hsla(212,92%,43%,1)',
                  disabledText: 'rgba(255,255,255,0.8)',
                  disabledBg: '#80ccff',
                  disabledBorder: 'rgba(27,31,36,0.15)',
                  icon: 'rgba(255,255,255,0.8)',
                  counterBg: 'rgba(255,255,255,0.2)',
                },
                outline: {
                  text: '#0969da',
                  hoverText: '#ffffff',
                  hoverBg: '#0969da',
                  hoverBorder: 'rgba(27,31,36,0.15)',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: 'hsla(212,92%,42%,1)',
                  selectedBorder: 'rgba(27,31,36,0.15)',
                  disabledText: 'rgba(9,105,218,0.5)',
                  disabledBg: '#f6f8fa',
                  disabledCounterBg: 'rgba(9,105,218,0.05)',
                  counterBg: 'rgba(9,105,218,0.1)',
                },
                danger: {
                  text: '#cf222e',
                  hoverText: '#ffffff',
                  hoverBg: '#a40e26',
                  hoverBorder: 'rgba(27,31,36,0.15)',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: 'hsla(356,72%,44%,1)',
                  selectedBorder: 'rgba(27,31,36,0.15)',
                  disabledText: 'rgba(207,34,46,0.5)',
                  disabledBg: '#f6f8fa',
                  disabledCounterBg: 'rgba(207,34,46,0.05)',
                  counterBg: 'rgba(207,34,46,0.1)',
                  icon: '#cf222e',
                  hoverIcon: '#ffffff',
                },
              },
              underlinenav: {
                icon: '#6e7781',
                borderHover: 'rgba(175,184,193,0.2)',
              },
              actionListItem: {
                inlineDivider: 'rgba(208,215,222,0.48)',
                default: {
                  hoverBg: 'rgba(208,215,222,0.32)',
                  hoverBorder: 'rgba(0,0,0,0)',
                  activeBg: 'rgba(208,215,222,0.48)',
                  activeBorder: 'rgba(0,0,0,0)',
                  selectedBg: 'rgba(208,215,222,0.24)',
                },
                danger: {
                  hoverBg: 'rgba(255,235,233,0.64)',
                  activeBg: '#ffebe9',
                  hoverText: '#cf222e',
                },
              },
              switchTrack: {
                bg: '#eaeef2',
                hoverBg: 'hsla(210,24%,90%,1)',
                activeBg: 'hsla(210,24%,88%,1)',
                disabledBg: '#8c959f',
                fg: '#57606a',
                disabledFg: '#ffffff',
                border: 'rgba(0,0,0,0)',
                checked: {
                  bg: '#0969da',
                  hoverBg: '#0860CA',
                  activeBg: '#0757BA',
                  fg: '#ffffff',
                  disabledFg: '#ffffff',
                  border: 'rgba(0,0,0,0)',
                },
              },
              switchKnob: {
                bg: '#ffffff',
                disabledBg: '#f6f8fa',
                border: '#858F99',
                checked: {
                  bg: '#ffffff',
                  disabledBg: '#f6f8fa',
                  border: '#0969da',
                },
              },
              segmentedControl: {
                bg: '#eaeef2',
                button: {
                  bg: '#ffffff',
                  hover: { bg: 'rgba(175,184,193,0.2)' },
                  active: { bg: 'rgba(175,184,193,0.4)' },
                  selected: { border: '#8c959f' },
                },
              },
              treeViewItem: {
                chevron: { hoverBg: 'rgba(208,215,222,0.32)' },
                directory: { fill: '#54aeff' },
              },
              fg: {
                default: '#24292f',
                muted: '#57606a',
                subtle: '#6e7781',
                onEmphasis: '#ffffff',
              },
              canvas: {
                default: '#ffffff',
                overlay: '#ffffff',
                inset: '#f6f8fa',
                subtle: '#f6f8fa',
              },
              border: {
                default: '#d0d7de',
                muted: 'hsla(210,18%,87%,1)',
                subtle: 'rgba(27,31,36,0.15)',
              },
              neutral: {
                emphasisPlus: '#24292f',
                emphasis: '#6e7781',
                muted: 'rgba(175,184,193,0.2)',
                subtle: 'rgba(234,238,242,0.5)',
              },
              accent: {
                fg: '#0969da',
                emphasis: '#0969da',
                muted: 'rgba(84,174,255,0.4)',
                subtle: '#ddf4ff',
              },
              success: {
                fg: '#0969da',
                emphasis: '#218bff',
                muted: 'rgba(84,174,255,0.4)',
                subtle: '#ddf4ff',
              },
              attention: {
                fg: '#9a6700',
                emphasis: '#bf8700',
                muted: 'rgba(212,167,44,0.4)',
                subtle: '#fff8c5',
              },
              severe: {
                fg: '#cf222e',
                emphasis: '#cf222e',
                muted: 'rgba(255,129,130,0.4)',
                subtle: '#ffebe9',
              },
              danger: {
                fg: '#cf222e',
                emphasis: '#cf222e',
                muted: 'rgba(255,129,130,0.4)',
                subtle: '#ffebe9',
              },
              open: {
                fg: '#cf222e',
                emphasis: '#fa4549',
                muted: 'rgba(255,129,130,0.4)',
                subtle: '#ffebe9',
              },
              closed: {
                fg: '#6e7781',
                emphasis: '#6e7781',
                muted: 'rgba(175,184,193,0.4)',
                subtle: '#f6f8fa',
              },
              done: {
                fg: '#8250df',
                emphasis: '#8250df',
                muted: 'rgba(194,151,255,0.4)',
                subtle: '#fbefff',
              },
              sponsors: {
                fg: '#bf3989',
                emphasis: '#bf3989',
                muted: 'rgba(255,128,200,0.4)',
                subtle: '#ffeff7',
              },
              primer: {
                fg: { disabled: '#8c959f' },
                canvas: {
                  backdrop: 'rgba(27,31,36,0.5)',
                  sticky: 'rgba(255,255,255,0.95)',
                },
                border: { active: '#fd8c73', contrast: 'rgba(27,31,36,0.1)' },
              },
            },
            shadows: {
              mktg: {
                btn: {
                  shadow: {
                    outline: 'rgb(0 0 0 / 15%) 0 0 0 1px inset',
                    focus: 'rgb(0 0 0 / 15%) 0 0 0 4px',
                    hover:
                      '0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)',
                    hoverMuted: 'rgb(0 0 0 / 70%) 0 0 0 2px inset',
                  },
                },
              },
              avatar: { childShadow: '-2px -2px 0 rgba(255,255,255,0.8)' },
              overlay: {
                shadow:
                  '0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12)',
              },
              btn: {
                shadow: '0 1px 0 rgba(27,31,36,0.04)',
                insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                primary: {
                  shadow: '0 1px 0 rgba(27,31,36,0.1)',
                  insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(0,33,85,0.2)',
                },
                outline: {
                  hoverShadow: '0 1px 0 rgba(27,31,36,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(0,33,85,0.2)',
                },
                danger: {
                  hoverShadow: '0 1px 0 rgba(27,31,36,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: 'inset 0 1px 0 rgba(76,0,20,0.2)',
                },
              },
              shadow: {
                small: '0 1px 0 rgba(27,31,36,0.04)',
                medium: '0 3px 6px rgba(140,149,159,0.15)',
                large: '0 8px 24px rgba(140,149,159,0.2)',
                extraLarge: '0 12px 28px rgba(140,149,159,0.3)',
              },
              primer: {
                shadow: {
                  highlight: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                  inset: 'inset 0 1px 0 rgba(208,215,222,0.2)',
                },
              },
            },
          },
          dark: {
            colors: {
              canvasDefaultTransparent: 'rgba(13,17,23,0)',
              pageHeaderBg: '#0d1117',
              marketingIcon: { primary: '#79c0ff', secondary: '#1f6feb' },
              diffBlob: {
                addition: {
                  numText: '#c9d1d9',
                  fg: '#c9d1d9',
                  numBg: 'rgba(63,185,80,0.3)',
                  lineBg: 'rgba(46,160,67,0.15)',
                  wordBg: 'rgba(46,160,67,0.4)',
                },
                deletion: {
                  numText: '#c9d1d9',
                  fg: '#c9d1d9',
                  numBg: 'rgba(248,81,73,0.3)',
                  lineBg: 'rgba(248,81,73,0.15)',
                  wordBg: 'rgba(248,81,73,0.4)',
                },
                hunk: { numBg: 'rgba(56,139,253,0.4)' },
                expander: { icon: '#8b949e' },
              },
              diffstat: {
                deletionBorder: 'rgba(240,246,252,0.1)',
                additionBorder: 'rgba(240,246,252,0.1)',
                additionBg: '#3fb950',
              },
              searchKeyword: { hl: 'rgba(210,153,34,0.4)' },
              prettylights: {
                syntax: {
                  comment: '#8b949e',
                  constant: '#79c0ff',
                  entity: '#d2a8ff',
                  storageModifierImport: '#c9d1d9',
                  entityTag: '#7ee787',
                  keyword: '#ff7b72',
                  string: '#a5d6ff',
                  variable: '#ffa657',
                  brackethighlighterUnmatched: '#f85149',
                  invalidIllegalText: '#f0f6fc',
                  invalidIllegalBg: '#8e1519',
                  carriageReturnText: '#f0f6fc',
                  carriageReturnBg: '#b62324',
                  stringRegexp: '#7ee787',
                  markupList: '#f2cc60',
                  markupHeading: '#1f6feb',
                  markupItalic: '#c9d1d9',
                  markupBold: '#c9d1d9',
                  markupDeletedText: '#ffdcd7',
                  markupDeletedBg: '#67060c',
                  markupInsertedText: '#aff5b4',
                  markupInsertedBg: '#033a16',
                  markupChangedText: '#ffdfb6',
                  markupChangedBg: '#5a1e02',
                  markupIgnoredText: '#c9d1d9',
                  markupIgnoredBg: '#1158c7',
                  metaDiffRange: '#d2a8ff',
                  brackethighlighterAngle: '#8b949e',
                  sublimelinterGutterMark: '#484f58',
                  constantOtherReferenceLink: '#a5d6ff',
                },
              },
              codemirror: {
                text: '#c9d1d9',
                bg: '#0d1117',
                guttersBg: '#0d1117',
                guttermarkerText: '#0d1117',
                guttermarkerSubtleText: '#6e7681',
                linenumberText: '#8b949e',
                cursor: '#c9d1d9',
                selectionBg: 'rgba(56,139,253,0.4)',
                activelineBg: 'rgba(110,118,129,0.1)',
                matchingbracketText: '#c9d1d9',
                linesBg: '#0d1117',
                syntax: {
                  comment: '#8b949e',
                  constant: '#79c0ff',
                  entity: '#d2a8ff',
                  keyword: '#ff7b72',
                  storage: '#ff7b72',
                  string: '#a5d6ff',
                  support: '#79c0ff',
                  variable: '#ffa657',
                },
              },
              checks: {
                bg: '#010409',
                textPrimary: '#c9d1d9',
                textSecondary: '#8b949e',
                textLink: '#58a6ff',
                btnIcon: '#8b949e',
                btnHoverIcon: '#c9d1d9',
                btnHoverBg: 'rgba(110,118,129,0.1)',
                inputText: '#8b949e',
                inputPlaceholderText: '#6e7681',
                inputFocusText: '#c9d1d9',
                inputBg: '#161b22',
                donutError: '#f85149',
                donutPending: '#d29922',
                donutSuccess: '#2ea043',
                donutNeutral: '#8b949e',
                dropdownText: '#c9d1d9',
                dropdownBg: '#161b22',
                dropdownBorder: '#30363d',
                dropdownShadow: 'rgba(1,4,9,0.3)',
                dropdownHoverText: '#c9d1d9',
                dropdownHoverBg: 'rgba(110,118,129,0.1)',
                dropdownBtnHoverText: '#c9d1d9',
                dropdownBtnHoverBg: 'rgba(110,118,129,0.1)',
                scrollbarThumbBg: 'rgba(110,118,129,0.4)',
                headerLabelText: '#8b949e',
                headerLabelOpenText: '#c9d1d9',
                headerBorder: '#21262d',
                headerIcon: '#8b949e',
                lineText: '#8b949e',
                lineNumText: '#6e7681',
                lineTimestampText: '#6e7681',
                lineHoverBg: 'rgba(110,118,129,0.1)',
                lineSelectedBg: 'rgba(56,139,253,0.15)',
                lineSelectedNumText: '#58a6ff',
                lineDtFmText: '#ffffff',
                lineDtFmBg: '#9e6a03',
                gateBg: 'rgba(187,128,9,0.15)',
                gateText: '#8b949e',
                gateWaitingText: '#d29922',
                stepHeaderOpenBg: '#161b22',
                stepErrorText: '#f85149',
                stepWarningText: '#d29922',
                loglineText: '#8b949e',
                loglineNumText: '#6e7681',
                loglineDebugText: '#a371f7',
                loglineErrorText: '#8b949e',
                loglineErrorNumText: '#6e7681',
                loglineErrorBg: 'rgba(248,81,73,0.15)',
                loglineWarningText: '#8b949e',
                loglineWarningNumText: '#d29922',
                loglineWarningBg: 'rgba(187,128,9,0.15)',
                loglineCommandText: '#58a6ff',
                loglineSectionText: '#3fb950',
                ansi: {
                  black: '#0d1117',
                  blackBright: '#161b22',
                  white: '#b1bac4',
                  whiteBright: '#b1bac4',
                  gray: '#6e7681',
                  red: '#ff7b72',
                  redBright: '#ffa198',
                  green: '#3fb950',
                  greenBright: '#56d364',
                  yellow: '#d29922',
                  yellowBright: '#e3b341',
                  blue: '#58a6ff',
                  blueBright: '#79c0ff',
                  magenta: '#bc8cff',
                  magentaBright: '#d2a8ff',
                  cyan: '#76e3ea',
                  cyanBright: '#b3f0ff',
                },
              },
              project: {
                headerBg: '#0d1117',
                sidebarBg: '#161b22',
                gradientIn: '#161b22',
                gradientOut: 'rgba(22,27,34,0)',
              },
              mktg: { btn: { bg: '#f6f8fa' } },
              control: { borderColor: { emphasis: '#606771' } },
              avatar: {
                bg: 'rgba(255,255,255,0.1)',
                border: 'rgba(240,246,252,0.1)',
                stackFade: '#30363d',
                stackFadeMore: '#21262d',
              },
              topicTag: { border: 'rgba(0,0,0,0)' },
              counter: { border: 'rgba(0,0,0,0)' },
              selectMenu: {
                backdropBorder: '#484f58',
                tapHighlight: 'rgba(48,54,61,0.5)',
                tapFocusBg: '#0c2d6b',
              },
              header: {
                text: 'rgba(255,255,255,0.7)',
                bg: '#161b22',
                divider: '#8b949e',
                logo: '#f0f6fc',
              },
              headerSearch: { bg: '#0d1117', border: '#30363d' },
              sidenav: { selectedBg: '#21262d' },
              menu: { bgActive: '#161b22' },
              input: { disabledBg: 'rgba(110,118,129,0)' },
              timeline: { badgeBg: '#21262d' },
              ansi: {
                black: '#484f58',
                blackBright: '#6e7681',
                white: '#b1bac4',
                whiteBright: '#ffffff',
                gray: '#6e7681',
                red: '#ff7b72',
                redBright: '#ffa198',
                green: '#3fb950',
                greenBright: '#56d364',
                yellow: '#d29922',
                yellowBright: '#e3b341',
                blue: '#58a6ff',
                blueBright: '#79c0ff',
                magenta: '#bc8cff',
                magentaBright: '#d2a8ff',
                cyan: '#39c5cf',
                cyanBright: '#56d4dd',
              },
              btn: {
                text: '#c9d1d9',
                bg: '#21262d',
                border: 'rgba(240,246,252,0.1)',
                hoverBg: '#30363d',
                hoverBorder: '#8b949e',
                activeBg: 'hsla(212,12%,18%,1)',
                activeBorder: '#6e7681',
                selectedBg: '#161b22',
                counterBg: '#30363d',
                primary: {
                  text: '#ffffff',
                  bg: '#238636',
                  border: 'rgba(240,246,252,0.1)',
                  hoverBg: '#2ea043',
                  hoverBorder: 'rgba(240,246,252,0.1)',
                  selectedBg: '#238636',
                  disabledText: 'rgba(255,255,255,0.5)',
                  disabledBg: 'rgba(35,134,54,0.6)',
                  disabledBorder: 'rgba(240,246,252,0.1)',
                  icon: '#ffffff',
                  counterBg: 'rgba(255,255,255,0.2)',
                },
                outline: {
                  text: '#58a6ff',
                  hoverText: '#58a6ff',
                  hoverBg: '#30363d',
                  hoverBorder: 'rgba(240,246,252,0.1)',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: '#0d419d',
                  selectedBorder: 'rgba(240,246,252,0.1)',
                  disabledText: 'rgba(88,166,255,0.5)',
                  disabledBg: '#0d1117',
                  disabledCounterBg: 'rgba(31,111,235,0.05)',
                  counterBg: 'rgba(31,111,235,0.1)',
                },
                danger: {
                  text: '#f85149',
                  hoverText: '#ffffff',
                  hoverBg: '#da3633',
                  hoverBorder: '#f85149',
                  hoverIcon: '#ffffff',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: '#b62324',
                  selectedBorder: '#ff7b72',
                  disabledText: 'rgba(248,81,73,0.5)',
                  disabledBg: '#0d1117',
                  disabledCounterBg: 'rgba(218,54,51,0.05)',
                  counterBg: 'rgba(218,54,51,0.1)',
                  icon: '#f85149',
                },
              },
              underlinenav: {
                icon: '#6e7681',
                borderHover: 'rgba(110,118,129,0.4)',
              },
              actionListItem: {
                inlineDivider: 'rgba(48,54,61,0.48)',
                default: {
                  hoverBg: 'rgba(177,186,196,0.12)',
                  hoverBorder: 'rgba(0,0,0,0)',
                  activeBg: 'rgba(177,186,196,0.2)',
                  activeBorder: 'rgba(0,0,0,0)',
                  selectedBg: 'rgba(177,186,196,0.08)',
                },
                danger: {
                  hoverBg: 'rgba(248,81,73,0.16)',
                  activeBg: 'rgba(248,81,73,0.24)',
                  hoverText: '#ff7b72',
                },
              },
              switchTrack: {
                bg: 'rgba(110,118,129,0.1)',
                hoverBg: 'hsla(215,8%,72%,0.1)',
                activeBg: 'rgba(110,118,129,0.4)',
                disabledBg: '#21262d',
                fg: '#8b949e',
                disabledFg: '#010409',
                border: 'rgba(0,0,0,0)',
                checked: {
                  bg: 'rgba(31,111,235,0.35)',
                  hoverBg: 'rgba(31,111,235,0.5)',
                  activeBg: 'rgba(31,111,235,0.65)',
                  fg: '#ffffff',
                  disabledFg: '#010409',
                  border: 'rgba(0,0,0,0)',
                },
              },
              switchKnob: {
                bg: '#0d1117',
                border: '#606771',
                disabledBg: '#161b22',
                checked: {
                  bg: '#0d1117',
                  disabledBg: '#161b22',
                  border: 'rgba(31,111,235,0.35)',
                },
              },
              segmentedControl: {
                bg: 'rgba(110,118,129,0.1)',
                button: {
                  bg: '#0d1117',
                  hover: { bg: '#30363d' },
                  active: { bg: '#21262d' },
                  selected: { border: '#6e7681' },
                },
              },
              treeViewItem: {
                chevron: { hoverBg: 'rgba(177,186,196,0.12)' },
                directory: { fill: '#8b949e' },
              },
              fg: {
                default: '#c9d1d9',
                muted: '#8b949e',
                subtle: '#6e7681',
                onEmphasis: '#ffffff',
              },
              canvas: {
                default: '#0d1117',
                overlay: '#161b22',
                inset: '#010409',
                subtle: '#161b22',
              },
              border: {
                default: '#30363d',
                muted: '#21262d',
                subtle: 'rgba(240,246,252,0.1)',
              },
              neutral: {
                emphasisPlus: '#6e7681',
                emphasis: '#6e7681',
                muted: 'rgba(110,118,129,0.4)',
                subtle: 'rgba(110,118,129,0.1)',
              },
              accent: {
                fg: '#58a6ff',
                emphasis: '#1f6feb',
                muted: 'rgba(56,139,253,0.4)',
                subtle: 'rgba(56,139,253,0.15)',
              },
              success: {
                fg: '#3fb950',
                emphasis: '#238636',
                muted: 'rgba(46,160,67,0.4)',
                subtle: 'rgba(46,160,67,0.15)',
              },
              attention: {
                fg: '#d29922',
                emphasis: '#9e6a03',
                muted: 'rgba(187,128,9,0.4)',
                subtle: 'rgba(187,128,9,0.15)',
              },
              severe: {
                fg: '#db6d28',
                emphasis: '#bd561d',
                muted: 'rgba(219,109,40,0.4)',
                subtle: 'rgba(219,109,40,0.15)',
              },
              danger: {
                fg: '#f85149',
                emphasis: '#da3633',
                muted: 'rgba(248,81,73,0.4)',
                subtle: 'rgba(248,81,73,0.15)',
              },
              open: {
                fg: '#3fb950',
                emphasis: '#238636',
                muted: 'rgba(46,160,67,0.4)',
                subtle: 'rgba(46,160,67,0.15)',
              },
              closed: {
                fg: '#f85149',
                emphasis: '#da3633',
                muted: 'rgba(248,81,73,0.4)',
                subtle: 'rgba(248,81,73,0.15)',
              },
              done: {
                fg: '#a371f7',
                emphasis: '#8957e5',
                muted: 'rgba(163,113,247,0.4)',
                subtle: 'rgba(163,113,247,0.15)',
              },
              sponsors: {
                fg: '#db61a2',
                emphasis: '#bf4b8a',
                muted: 'rgba(219,97,162,0.4)',
                subtle: 'rgba(219,97,162,0.15)',
              },
              primer: {
                fg: { disabled: '#484f58' },
                canvas: {
                  backdrop: 'rgba(1,4,9,0.8)',
                  sticky: 'rgba(13,17,23,0.95)',
                },
                border: {
                  active: '#f78166',
                  contrast: 'rgba(255,255,255,0.2)',
                },
              },
            },
            shadows: {
              checks: {
                inputShadow: '0 0 0 1px (obj) => (0, get_1.default)(obj, path)',
              },
              mktg: {
                btn: {
                  shadow: {
                    outline: 'rgb(255 255 255 / 25%) 0 0 0 1px inset',
                    focus: 'rgb(255 255 255 / 25%) 0 0 0 4px',
                    hover:
                      '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
                    hoverMuted: 'rgb(255 255 255) 0 0 0 2px inset',
                  },
                },
              },
              avatar: { childShadow: '-2px -2px 0 #0d1117' },
              overlay: {
                shadow: '0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)',
              },
              btn: {
                shadow: '0 0 transparent',
                insetShadow: '0 0 transparent',
                primary: {
                  shadow: '0 0 transparent',
                  insetShadow: '0 0 transparent',
                  selectedShadow: '0 0 transparent',
                },
                outline: {
                  hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: '0 0 transparent',
                },
                danger: {
                  hoverShadow: '0 0 transparent',
                  hoverInsetShadow: '0 0 transparent',
                  selectedShadow: '0 0 transparent',
                },
              },
              shadow: {
                small: '0 0 transparent',
                medium: '0 3px 6px #010409',
                large: '0 8px 24px #010409',
                extraLarge: '0 12px 48px #010409',
              },
              primer: {
                shadow: {
                  highlight: '0 0 transparent',
                  inset: '0 0 transparent',
                },
              },
            },
          },
          dark_dimmed: {
            colors: {
              canvasDefaultTransparent: 'rgba(34,39,46,0)',
              pageHeaderBg: '#22272e',
              marketingIcon: { primary: '#6cb6ff', secondary: '#316dca' },
              diffBlob: {
                addition: {
                  numText: '#adbac7',
                  fg: '#adbac7',
                  numBg: 'rgba(87,171,90,0.3)',
                  lineBg: 'rgba(70,149,74,0.15)',
                  wordBg: 'rgba(70,149,74,0.4)',
                },
                deletion: {
                  numText: '#adbac7',
                  fg: '#adbac7',
                  numBg: 'rgba(229,83,75,0.3)',
                  lineBg: 'rgba(229,83,75,0.15)',
                  wordBg: 'rgba(229,83,75,0.4)',
                },
                hunk: { numBg: 'rgba(65,132,228,0.4)' },
                expander: { icon: '#768390' },
              },
              diffstat: {
                deletionBorder: 'rgba(205,217,229,0.1)',
                additionBorder: 'rgba(205,217,229,0.1)',
                additionBg: '#57ab5a',
              },
              searchKeyword: { hl: 'rgba(198,144,38,0.4)' },
              prettylights: {
                syntax: {
                  comment: '#768390',
                  constant: '#6cb6ff',
                  entity: '#dcbdfb',
                  storageModifierImport: '#adbac7',
                  entityTag: '#8ddb8c',
                  keyword: '#f47067',
                  string: '#96d0ff',
                  variable: '#f69d50',
                  brackethighlighterUnmatched: '#e5534b',
                  invalidIllegalText: '#cdd9e5',
                  invalidIllegalBg: '#922323',
                  carriageReturnText: '#cdd9e5',
                  carriageReturnBg: '#ad2e2c',
                  stringRegexp: '#8ddb8c',
                  markupList: '#eac55f',
                  markupHeading: '#316dca',
                  markupItalic: '#adbac7',
                  markupBold: '#adbac7',
                  markupDeletedText: '#ffd8d3',
                  markupDeletedBg: '#78191b',
                  markupInsertedText: '#b4f1b4',
                  markupInsertedBg: '#1b4721',
                  markupChangedText: '#ffddb0',
                  markupChangedBg: '#682d0f',
                  markupIgnoredText: '#adbac7',
                  markupIgnoredBg: '#255ab2',
                  metaDiffRange: '#dcbdfb',
                  brackethighlighterAngle: '#768390',
                  sublimelinterGutterMark: '#545d68',
                  constantOtherReferenceLink: '#96d0ff',
                },
              },
              codemirror: {
                text: '#adbac7',
                bg: '#22272e',
                guttersBg: '#22272e',
                guttermarkerText: '#22272e',
                guttermarkerSubtleText: '#636e7b',
                linenumberText: '#768390',
                cursor: '#adbac7',
                selectionBg: 'rgba(65,132,228,0.4)',
                activelineBg: 'rgba(99,110,123,0.1)',
                matchingbracketText: '#adbac7',
                linesBg: '#22272e',
                syntax: {
                  comment: '#768390',
                  constant: '#6cb6ff',
                  entity: '#dcbdfb',
                  keyword: '#f47067',
                  storage: '#f47067',
                  string: '#96d0ff',
                  support: '#6cb6ff',
                  variable: '#f69d50',
                },
              },
              checks: {
                bg: '#1c2128',
                textPrimary: '#adbac7',
                textSecondary: '#768390',
                textLink: '#539bf5',
                btnIcon: '#768390',
                btnHoverIcon: '#adbac7',
                btnHoverBg: 'rgba(99,110,123,0.1)',
                inputText: '#768390',
                inputPlaceholderText: '#636e7b',
                inputFocusText: '#adbac7',
                inputBg: '#2d333b',
                donutError: '#e5534b',
                donutPending: '#c69026',
                donutSuccess: '#46954a',
                donutNeutral: '#768390',
                dropdownText: '#adbac7',
                dropdownBg: '#2d333b',
                dropdownBorder: '#444c56',
                dropdownShadow: 'rgba(28,33,40,0.3)',
                dropdownHoverText: '#adbac7',
                dropdownHoverBg: 'rgba(99,110,123,0.1)',
                dropdownBtnHoverText: '#adbac7',
                dropdownBtnHoverBg: 'rgba(99,110,123,0.1)',
                scrollbarThumbBg: 'rgba(99,110,123,0.4)',
                headerLabelText: '#768390',
                headerLabelOpenText: '#adbac7',
                headerBorder: '#373e47',
                headerIcon: '#768390',
                lineText: '#768390',
                lineNumText: '#636e7b',
                lineTimestampText: '#636e7b',
                lineHoverBg: 'rgba(99,110,123,0.1)',
                lineSelectedBg: 'rgba(65,132,228,0.15)',
                lineSelectedNumText: '#539bf5',
                lineDtFmText: '#cdd9e5',
                lineDtFmBg: '#966600',
                gateBg: 'rgba(174,124,20,0.15)',
                gateText: '#768390',
                gateWaitingText: '#c69026',
                stepHeaderOpenBg: '#2d333b',
                stepErrorText: '#e5534b',
                stepWarningText: '#c69026',
                loglineText: '#768390',
                loglineNumText: '#636e7b',
                loglineDebugText: '#986ee2',
                loglineErrorText: '#768390',
                loglineErrorNumText: '#636e7b',
                loglineErrorBg: 'rgba(229,83,75,0.15)',
                loglineWarningText: '#768390',
                loglineWarningNumText: '#c69026',
                loglineWarningBg: 'rgba(174,124,20,0.15)',
                loglineCommandText: '#539bf5',
                loglineSectionText: '#57ab5a',
                ansi: {
                  black: '#22272e',
                  blackBright: '#2d333b',
                  white: '#909dab',
                  whiteBright: '#909dab',
                  gray: '#636e7b',
                  red: '#f47067',
                  redBright: '#ff938a',
                  green: '#57ab5a',
                  greenBright: '#6bc46d',
                  yellow: '#c69026',
                  yellowBright: '#daaa3f',
                  blue: '#539bf5',
                  blueBright: '#6cb6ff',
                  magenta: '#b083f0',
                  magentaBright: '#dcbdfb',
                  cyan: '#76e3ea',
                  cyanBright: '#b3f0ff',
                },
              },
              project: {
                headerBg: '#22272e',
                sidebarBg: '#2d333b',
                gradientIn: '#2d333b',
                gradientOut: 'rgba(45,51,59,0)',
              },
              mktg: { btn: { bg: '#f6f8fa' } },
              control: { borderColor: { emphasis: '#606771' } },
              avatar: {
                bg: 'rgba(205,217,229,0.1)',
                border: 'rgba(205,217,229,0.1)',
                stackFade: '#444c56',
                stackFadeMore: '#373e47',
              },
              topicTag: { border: 'rgba(0,0,0,0)' },
              counter: { border: 'rgba(0,0,0,0)' },
              selectMenu: {
                backdropBorder: '#545d68',
                tapHighlight: 'rgba(68,76,86,0.5)',
                tapFocusBg: '#143d79',
              },
              header: {
                text: 'rgba(205,217,229,0.7)',
                bg: '#2d333b',
                divider: '#768390',
                logo: '#cdd9e5',
              },
              headerSearch: { bg: '#22272e', border: '#444c56' },
              sidenav: { selectedBg: '#373e47' },
              menu: { bgActive: '#2d333b' },
              input: { disabledBg: 'rgba(99,110,123,0)' },
              timeline: { badgeBg: '#373e47' },
              ansi: {
                black: '#545d68',
                blackBright: '#636e7b',
                white: '#909dab',
                whiteBright: '#cdd9e5',
                gray: '#636e7b',
                red: '#f47067',
                redBright: '#ff938a',
                green: '#57ab5a',
                greenBright: '#6bc46d',
                yellow: '#c69026',
                yellowBright: '#daaa3f',
                blue: '#539bf5',
                blueBright: '#6cb6ff',
                magenta: '#b083f0',
                magentaBright: '#dcbdfb',
                cyan: '#39c5cf',
                cyanBright: '#56d4dd',
              },
              btn: {
                text: '#adbac7',
                bg: '#373e47',
                border: 'rgba(205,217,229,0.1)',
                hoverBg: '#444c56',
                hoverBorder: '#768390',
                activeBg: 'hsla(213,12%,27%,1)',
                activeBorder: '#636e7b',
                selectedBg: '#2d333b',
                counterBg: '#444c56',
                primary: {
                  text: '#ffffff',
                  bg: '#347d39',
                  border: 'rgba(205,217,229,0.1)',
                  hoverBg: '#46954a',
                  hoverBorder: 'rgba(205,217,229,0.1)',
                  selectedBg: '#347d39',
                  disabledText: 'rgba(205,217,229,0.5)',
                  disabledBg: 'rgba(52,125,57,0.6)',
                  disabledBorder: 'rgba(205,217,229,0.1)',
                  icon: '#cdd9e5',
                  counterBg: 'rgba(205,217,229,0.2)',
                },
                outline: {
                  text: '#539bf5',
                  hoverText: '#539bf5',
                  hoverBg: '#444c56',
                  hoverBorder: 'rgba(205,217,229,0.1)',
                  hoverCounterBg: 'rgba(205,217,229,0.2)',
                  selectedText: '#cdd9e5',
                  selectedBg: '#1b4b91',
                  selectedBorder: 'rgba(205,217,229,0.1)',
                  disabledText: 'rgba(83,155,245,0.5)',
                  disabledBg: '#22272e',
                  disabledCounterBg: 'rgba(49,109,202,0.05)',
                  counterBg: 'rgba(49,109,202,0.1)',
                },
                danger: {
                  text: '#e5534b',
                  hoverText: '#cdd9e5',
                  hoverBg: '#c93c37',
                  hoverBorder: '#e5534b',
                  hoverIcon: '#cdd9e5',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: '#ad2e2c',
                  selectedBorder: '#f47067',
                  disabledText: 'rgba(229,83,75,0.5)',
                  disabledBg: '#22272e',
                  disabledCounterBg: 'rgba(201,60,55,0.05)',
                  counterBg: 'rgba(201,60,55,0.1)',
                  icon: '#e5534b',
                },
              },
              underlinenav: {
                icon: '#636e7b',
                borderHover: 'rgba(99,110,123,0.4)',
              },
              actionListItem: {
                inlineDivider: 'rgba(68,76,86,0.48)',
                default: {
                  hoverBg: 'rgba(144,157,171,0.12)',
                  hoverBorder: 'rgba(0,0,0,0)',
                  activeBg: 'rgba(144,157,171,0.2)',
                  activeBorder: 'rgba(0,0,0,0)',
                  selectedBg: 'rgba(144,157,171,0.08)',
                },
                danger: {
                  hoverBg: 'rgba(229,83,75,0.16)',
                  activeBg: 'rgba(229,83,75,0.24)',
                  hoverText: '#f47067',
                },
              },
              switchTrack: {
                bg: 'rgba(99,110,123,0.1)',
                hoverBg: 'hsla(213,11%,69%,0.1)',
                activeBg: 'rgba(99,110,123,0.4)',
                disabledBg: '#373e47',
                fg: '#768390',
                disabledFg: '#1c2128',
                border: 'rgba(0,0,0,0)',
                checked: {
                  bg: 'rgba(49,109,202,0.35)',
                  hoverBg: 'rgba(49,109,202,0.5)',
                  activeBg: 'rgba(49,109,202,0.65)',
                  fg: '#cdd9e5',
                  disabledFg: '#1c2128',
                  border: 'rgba(0,0,0,0)',
                },
              },
              switchKnob: {
                bg: '#22272e',
                border: '#606771',
                disabledBg: '#2d333b',
                checked: {
                  bg: '#22272e',
                  disabledBg: '#2d333b',
                  border: 'rgba(49,109,202,0.35)',
                },
              },
              segmentedControl: {
                bg: 'rgba(99,110,123,0.1)',
                button: {
                  bg: '#22272e',
                  hover: { bg: '#444c56' },
                  active: { bg: '#373e47' },
                  selected: { border: '#636e7b' },
                },
              },
              treeViewItem: {
                chevron: { hoverBg: 'rgba(144,157,171,0.12)' },
                directory: { fill: '#768390' },
              },
              fg: {
                default: '#adbac7',
                muted: '#768390',
                subtle: '#636e7b',
                onEmphasis: '#cdd9e5',
              },
              canvas: {
                default: '#22272e',
                overlay: '#2d333b',
                inset: '#1c2128',
                subtle: '#2d333b',
              },
              border: {
                default: '#444c56',
                muted: '#373e47',
                subtle: 'rgba(205,217,229,0.1)',
              },
              neutral: {
                emphasisPlus: '#636e7b',
                emphasis: '#636e7b',
                muted: 'rgba(99,110,123,0.4)',
                subtle: 'rgba(99,110,123,0.1)',
              },
              accent: {
                fg: '#539bf5',
                emphasis: '#316dca',
                muted: 'rgba(65,132,228,0.4)',
                subtle: 'rgba(65,132,228,0.15)',
              },
              success: {
                fg: '#57ab5a',
                emphasis: '#347d39',
                muted: 'rgba(70,149,74,0.4)',
                subtle: 'rgba(70,149,74,0.15)',
              },
              attention: {
                fg: '#c69026',
                emphasis: '#966600',
                muted: 'rgba(174,124,20,0.4)',
                subtle: 'rgba(174,124,20,0.15)',
              },
              severe: {
                fg: '#cc6b2c',
                emphasis: '#ae5622',
                muted: 'rgba(204,107,44,0.4)',
                subtle: 'rgba(204,107,44,0.15)',
              },
              danger: {
                fg: '#e5534b',
                emphasis: '#c93c37',
                muted: 'rgba(229,83,75,0.4)',
                subtle: 'rgba(229,83,75,0.15)',
              },
              open: {
                fg: '#57ab5a',
                emphasis: '#347d39',
                muted: 'rgba(70,149,74,0.4)',
                subtle: 'rgba(70,149,74,0.15)',
              },
              closed: {
                fg: '#e5534b',
                emphasis: '#c93c37',
                muted: 'rgba(229,83,75,0.4)',
                subtle: 'rgba(229,83,75,0.15)',
              },
              done: {
                fg: '#986ee2',
                emphasis: '#8256d0',
                muted: 'rgba(152,110,226,0.4)',
                subtle: 'rgba(152,110,226,0.15)',
              },
              sponsors: {
                fg: '#c96198',
                emphasis: '#ae4c82',
                muted: 'rgba(201,97,152,0.4)',
                subtle: 'rgba(201,97,152,0.15)',
              },
              primer: {
                fg: { disabled: '#545d68' },
                canvas: {
                  backdrop: 'rgba(28,33,40,0.8)',
                  sticky: 'rgba(34,39,46,0.95)',
                },
                border: {
                  active: '#ec775c',
                  contrast: 'rgba(205,217,229,0.2)',
                },
              },
            },
            shadows: {
              checks: {
                inputShadow: '0 0 0 1px (obj) => (0, get_1.default)(obj, path)',
              },
              mktg: {
                btn: {
                  shadow: {
                    outline: 'rgb(255 255 255 / 25%) 0 0 0 1px inset',
                    focus: 'rgb(255 255 255 / 25%) 0 0 0 4px',
                    hover:
                      '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
                    hoverMuted: 'rgb(255 255 255) 0 0 0 2px inset',
                  },
                },
              },
              avatar: { childShadow: '-2px -2px 0 #22272e' },
              overlay: {
                shadow: '0 0 0 1px #444c56, 0 16px 32px rgba(28,33,40,0.85)',
              },
              btn: {
                shadow: '0 0 transparent',
                insetShadow: '0 0 transparent',
                primary: {
                  shadow: '0 0 transparent',
                  insetShadow: '0 0 transparent',
                  selectedShadow: '0 0 transparent',
                },
                outline: {
                  hoverShadow: '0 1px 0 rgba(28,33,40,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(205,217,229,0.03)',
                  selectedShadow: '0 0 transparent',
                },
                danger: {
                  hoverShadow: '0 0 transparent',
                  hoverInsetShadow: '0 0 transparent',
                  selectedShadow: '0 0 transparent',
                },
              },
              shadow: {
                small: '0 0 transparent',
                medium: '0 3px 6px #1c2128',
                large: '0 8px 24px #1c2128',
                extraLarge: '0 12px 48px #1c2128',
              },
              primer: {
                shadow: {
                  highlight: '0 0 transparent',
                  inset: '0 0 transparent',
                },
              },
            },
          },
          dark_high_contrast: {
            colors: {
              canvasDefaultTransparent: 'rgba(10,12,16,0)',
              pageHeaderBg: '#0a0c10',
              marketingIcon: { primary: '#91cbff', secondary: '#409eff' },
              diffBlob: {
                addition: {
                  numText: '#f0f3f6',
                  fg: '#0a0c10',
                  numBg: 'rgba(38,205,77,0.3)',
                  lineBg: 'rgba(9,180,58,0.15)',
                  wordBg: '#09b43a',
                },
                deletion: {
                  numText: '#f0f3f6',
                  fg: '#0a0c10',
                  numBg: 'rgba(255,106,105,0.3)',
                  lineBg: 'rgba(255,106,105,0.15)',
                  wordBg: '#ff6a69',
                },
                hunk: { numBg: 'rgba(64,158,255,0.4)' },
                expander: { icon: '#f0f3f6' },
              },
              diffstat: {
                deletionBorder: '#ffb1af',
                additionBorder: '#4ae168',
                additionBg: '#26cd4d',
              },
              searchKeyword: { hl: 'rgba(240,183,47,0.4)' },
              prettylights: {
                syntax: {
                  comment: '#bdc4cc',
                  constant: '#91cbff',
                  entity: '#dbb7ff',
                  storageModifierImport: '#f0f3f6',
                  entityTag: '#72f088',
                  keyword: '#ff9492',
                  string: '#addcff',
                  variable: '#ffb757',
                  brackethighlighterUnmatched: '#ff6a69',
                  invalidIllegalText: '#ffffff',
                  invalidIllegalBg: '#e82a2f',
                  carriageReturnText: '#ffffff',
                  carriageReturnBg: '#ff4445',
                  stringRegexp: '#72f088',
                  markupList: '#fbd669',
                  markupHeading: '#409eff',
                  markupItalic: '#f0f3f6',
                  markupBold: '#f0f3f6',
                  markupDeletedText: '#ffdedb',
                  markupDeletedBg: '#cc1421',
                  markupInsertedText: '#acf7b6',
                  markupInsertedBg: '#007728',
                  markupChangedText: '#ffe1b4',
                  markupChangedBg: '#a74c00',
                  markupIgnoredText: '#f0f3f6',
                  markupIgnoredBg: '#318bf8',
                  metaDiffRange: '#dbb7ff',
                  brackethighlighterAngle: '#bdc4cc',
                  sublimelinterGutterMark: '#7a828e',
                  constantOtherReferenceLink: '#addcff',
                },
              },
              codemirror: {
                text: '#f0f3f6',
                bg: '#0a0c10',
                guttersBg: '#0a0c10',
                guttermarkerText: '#0a0c10',
                guttermarkerSubtleText: '#9ea7b3',
                linenumberText: '#f0f3f6',
                cursor: '#f0f3f6',
                selectionBg: 'rgba(64,158,255,0.4)',
                activelineBg: 'rgba(158,167,179,0.1)',
                matchingbracketText: '#f0f3f6',
                linesBg: '#0a0c10',
                syntax: {
                  comment: '#bdc4cc',
                  constant: '#91cbff',
                  entity: '#dbb7ff',
                  keyword: '#ff9492',
                  storage: '#ff9492',
                  string: '#addcff',
                  support: '#91cbff',
                  variable: '#ffb757',
                },
              },
              checks: {
                bg: '#010409',
                textPrimary: '#f0f3f6',
                textSecondary: '#f0f3f6',
                textLink: '#71b7ff',
                btnIcon: '#f0f3f6',
                btnHoverIcon: '#f0f3f6',
                btnHoverBg: 'rgba(158,167,179,0.1)',
                inputText: '#f0f3f6',
                inputPlaceholderText: '#9ea7b3',
                inputFocusText: '#f0f3f6',
                inputBg: '#272b33',
                donutError: '#ff6a69',
                donutPending: '#f0b72f',
                donutSuccess: '#09b43a',
                donutNeutral: '#bdc4cc',
                dropdownText: '#f0f3f6',
                dropdownBg: '#272b33',
                dropdownBorder: '#7a828e',
                dropdownShadow: 'rgba(1,4,9,0.3)',
                dropdownHoverText: '#f0f3f6',
                dropdownHoverBg: 'rgba(158,167,179,0.1)',
                dropdownBtnHoverText: '#f0f3f6',
                dropdownBtnHoverBg: 'rgba(158,167,179,0.1)',
                scrollbarThumbBg: 'rgba(158,167,179,0.4)',
                headerLabelText: '#f0f3f6',
                headerLabelOpenText: '#f0f3f6',
                headerBorder: '#7a828e',
                headerIcon: '#f0f3f6',
                lineText: '#f0f3f6',
                lineNumText: '#9ea7b3',
                lineTimestampText: '#9ea7b3',
                lineHoverBg: 'rgba(158,167,179,0.1)',
                lineSelectedBg: 'rgba(64,158,255,0.15)',
                lineSelectedNumText: '#71b7ff',
                lineDtFmText: '#0a0c10',
                lineDtFmBg: '#e09b13',
                gateBg: 'rgba(224,155,19,0.15)',
                gateText: '#f0f3f6',
                gateWaitingText: '#f0b72f',
                stepHeaderOpenBg: '#272b33',
                stepErrorText: '#ff6a69',
                stepWarningText: '#f0b72f',
                loglineText: '#f0f3f6',
                loglineNumText: '#9ea7b3',
                loglineDebugText: '#b780ff',
                loglineErrorText: '#f0f3f6',
                loglineErrorNumText: '#9ea7b3',
                loglineErrorBg: 'rgba(255,106,105,0.15)',
                loglineWarningText: '#f0f3f6',
                loglineWarningNumText: '#f0b72f',
                loglineWarningBg: 'rgba(224,155,19,0.15)',
                loglineCommandText: '#71b7ff',
                loglineSectionText: '#26cd4d',
                ansi: {
                  black: '#0a0c10',
                  blackBright: '#272b33',
                  white: '#d9dee3',
                  whiteBright: '#d9dee3',
                  gray: '#9ea7b3',
                  red: '#ff9492',
                  redBright: '#ffb1af',
                  green: '#26cd4d',
                  greenBright: '#4ae168',
                  yellow: '#f0b72f',
                  yellowBright: '#f7c843',
                  blue: '#71b7ff',
                  blueBright: '#91cbff',
                  magenta: '#cb9eff',
                  magentaBright: '#dbb7ff',
                  cyan: '#76e3ea',
                  cyanBright: '#b3f0ff',
                },
              },
              project: {
                headerBg: '#0a0c10',
                sidebarBg: '#272b33',
                gradientIn: '#272b33',
                gradientOut: 'rgba(39,43,51,0)',
              },
              mktg: { btn: { bg: '#f6f8fa' } },
              control: { borderColor: { emphasis: '#9ea7b3' } },
              avatar: {
                bg: 'rgba(255,255,255,0.1)',
                border: 'rgba(255,255,255,0.9)',
                stackFade: '#525964',
                stackFadeMore: '#272b33',
              },
              topicTag: { border: '#409eff' },
              counter: { border: 'rgba(0,0,0,0)' },
              selectMenu: {
                backdropBorder: '#7a828e',
                tapHighlight: 'rgba(82,89,100,0.5)',
                tapFocusBg: '#1e60d5',
              },
              header: {
                text: 'rgba(255,255,255,0.7)',
                bg: '#272b33',
                divider: '#bdc4cc',
                logo: '#ffffff',
              },
              headerSearch: { bg: '#0a0c10', border: '#525964' },
              sidenav: { selectedBg: '#272b33' },
              menu: { bgActive: '#272b33' },
              input: { disabledBg: 'rgba(158,167,179,0)' },
              timeline: { badgeBg: '#272b33' },
              ansi: {
                black: '#7a828e',
                blackBright: '#9ea7b3',
                white: '#d9dee3',
                whiteBright: '#ffffff',
                gray: '#9ea7b3',
                red: '#ff9492',
                redBright: '#ffb1af',
                green: '#26cd4d',
                greenBright: '#4ae168',
                yellow: '#f0b72f',
                yellowBright: '#f7c843',
                blue: '#71b7ff',
                blueBright: '#91cbff',
                magenta: '#cb9eff',
                magentaBright: '#dbb7ff',
                cyan: '#39c5cf',
                cyanBright: '#56d4dd',
              },
              btn: {
                text: '#f0f3f6',
                bg: '#272b33',
                border: '#7a828e',
                hoverBg: '#525964',
                hoverBorder: '#bdc4cc',
                activeBg: 'hsla(217,10%,33%,1)',
                activeBorder: '#9ea7b3',
                selectedBg: 'rgba(82,89,100,0.9)',
                counterBg: '#525964',
                primary: {
                  text: '#0a0c10',
                  bg: '#09b43a',
                  border: '#4ae168',
                  hoverBg: '#26cd4d',
                  hoverBorder: '#4ae168',
                  selectedBg: '#09b43a',
                  disabledText: 'rgba(10,12,16,0.5)',
                  disabledBg: 'rgba(9,180,58,0.6)',
                  disabledBorder: 'rgba(74,225,104,0.4)',
                  icon: '#0a0c10',
                  counterBg: 'rgba(1,4,9,0.15)',
                },
                outline: {
                  text: '#71b7ff',
                  hoverText: '#71b7ff',
                  hoverBg: '#525964',
                  hoverBorder: '#7a828e',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: '#2672f3',
                  selectedBorder: '#7a828e',
                  disabledText: 'rgba(113,183,255,0.5)',
                  disabledBg: '#0a0c10',
                  disabledCounterBg: 'rgba(64,158,255,0.05)',
                  counterBg: 'rgba(64,158,255,0.1)',
                },
                danger: {
                  text: '#ff6a69',
                  hoverText: '#0a0c10',
                  hoverBg: '#ff6a69',
                  hoverBorder: '#ff6a69',
                  hoverIcon: '#0a0c10',
                  hoverCounterBg: 'rgba(1,4,9,0.15)',
                  selectedText: '#ffffff',
                  selectedBg: '#ff4445',
                  selectedBorder: '#ff9492',
                  disabledText: 'rgba(255,106,105,0.5)',
                  disabledBg: '#0a0c10',
                  disabledCounterBg: 'rgba(255,106,105,0.05)',
                  counterBg: 'rgba(1,4,9,0.15)',
                  icon: '#ff6a69',
                },
              },
              underlinenav: { icon: '#f0f3f6', borderHover: '#bdc4cc' },
              actionListItem: {
                inlineDivider: '#7a828e',
                default: {
                  hoverBg: '#272b33',
                  hoverBorder: '#7a828e',
                  activeBg: '#525964',
                  activeBorder: '#9ea7b3',
                  selectedBg: '#525964',
                },
                danger: {
                  hoverBg: '#ff6a69',
                  activeBg: '#ff4445',
                  hoverText: '#0a0c10',
                },
              },
              switchTrack: {
                bg: '#9ea7b3',
                hoverBg: 'hsla(214,12%,61%,1)',
                activeBg: 'hsla(214,12%,58%,1)',
                disabledBg: '#272b33',
                fg: '#0a0c10',
                disabledFg: '#010409',
                border: 'rgba(0,0,0,0)',
                checked: {
                  bg: '#409eff',
                  hoverBg: 'rgba(64,158,255,0.5)',
                  activeBg: 'rgba(64,158,255,0.65)',
                  fg: '#0a0c10',
                  disabledFg: '#010409',
                  border: 'rgba(0,0,0,0)',
                },
              },
              switchKnob: {
                bg: '#0a0c10',
                border: '#9ea7b3',
                disabledBg: '#272b33',
                checked: {
                  bg: '#0a0c10',
                  disabledBg: '#272b33',
                  border: '#409eff',
                },
              },
              segmentedControl: {
                bg: 'rgba(158,167,179,0.1)',
                button: {
                  bg: '#0a0c10',
                  hover: { bg: '#525964' },
                  active: { bg: '#272b33' },
                  selected: { border: '#9ea7b3' },
                },
              },
              treeViewItem: {
                chevron: { hoverBg: '#525964' },
                directory: { fill: '#f0f3f6' },
              },
              fg: {
                default: '#f0f3f6',
                muted: '#f0f3f6',
                subtle: '#9ea7b3',
                onEmphasis: '#0a0c10',
              },
              canvas: {
                default: '#0a0c10',
                overlay: '#272b33',
                inset: '#010409',
                subtle: '#272b33',
              },
              border: {
                default: '#7a828e',
                muted: '#7a828e',
                subtle: '#7a828e',
              },
              neutral: {
                emphasisPlus: '#ffffff',
                emphasis: '#9ea7b3',
                muted: 'rgba(158,167,179,0.4)',
                subtle: 'rgba(158,167,179,0.1)',
              },
              accent: {
                fg: '#71b7ff',
                emphasis: '#409eff',
                muted: '#409eff',
                subtle: 'rgba(64,158,255,0.15)',
              },
              success: {
                fg: '#26cd4d',
                emphasis: '#09b43a',
                muted: '#09b43a',
                subtle: 'rgba(9,180,58,0.15)',
              },
              attention: {
                fg: '#f0b72f',
                emphasis: '#e09b13',
                muted: '#e09b13',
                subtle: 'rgba(224,155,19,0.15)',
              },
              severe: {
                fg: '#e7811d',
                emphasis: '#e7811d',
                muted: '#e7811d',
                subtle: 'rgba(231,129,29,0.15)',
              },
              danger: {
                fg: '#ff6a69',
                emphasis: '#ff6a69',
                muted: '#ff6a69',
                subtle: 'rgba(255,106,105,0.15)',
              },
              open: {
                fg: '#26cd4d',
                emphasis: '#09b43a',
                muted: 'rgba(9,180,58,0.4)',
                subtle: 'rgba(9,180,58,0.15)',
              },
              closed: {
                fg: '#ff6a69',
                emphasis: '#ff6a69',
                muted: 'rgba(255,106,105,0.4)',
                subtle: 'rgba(255,106,105,0.15)',
              },
              done: {
                fg: '#b780ff',
                emphasis: '#b87fff',
                muted: '#b780ff',
                subtle: 'rgba(183,128,255,0.15)',
              },
              sponsors: {
                fg: '#ef6eb1',
                emphasis: '#ef6eb1',
                muted: '#ef6eb1',
                subtle: 'rgba(239,110,177,0.15)',
              },
              primer: {
                fg: { disabled: '#7a828e' },
                canvas: {
                  backdrop: 'rgba(1,4,9,0.8)',
                  sticky: 'rgba(10,12,16,0.95)',
                },
                border: {
                  active: '#ff967d',
                  contrast: 'rgba(255,255,255,0.2)',
                },
              },
            },
            shadows: {
              checks: {
                inputShadow: '0 0 0 1px (obj) => (0, get_1.default)(obj, path)',
              },
              mktg: {
                btn: {
                  shadow: {
                    outline: 'rgb(255 255 255 / 25%) 0 0 0 1px inset',
                    focus: 'rgb(255 255 255 / 25%) 0 0 0 4px',
                    hover:
                      '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
                    hoverMuted: 'rgb(255 255 255) 0 0 0 2px inset',
                  },
                },
              },
              avatar: { childShadow: '-2px -2px 0 #0a0c10' },
              overlay: {
                shadow: '0 0 0 1px #525964, 0 16px 32px rgba(1,4,9,0.85)',
              },
              btn: {
                shadow: '0 0 transparent',
                insetShadow: '0 0 transparent',
                primary: {
                  shadow: '0 0 transparent',
                  insetShadow: '0 0 transparent',
                  selectedShadow: '0 0 transparent',
                },
                outline: {
                  hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: '0 0 transparent',
                },
                danger: {
                  hoverShadow: '0 0 transparent',
                  hoverInsetShadow: '0 0 transparent',
                  selectedShadow: '0 0 transparent',
                },
              },
              shadow: {
                small: '0 0 transparent',
                medium: '0 3px 6px #010409',
                large: '0 8px 24px #010409',
                extraLarge: '0 12px 48px #010409',
              },
              primer: {
                shadow: {
                  highlight: '0 0 transparent',
                  inset: '0 0 transparent',
                },
              },
            },
          },
          dark_colorblind: {
            colors: {
              canvasDefaultTransparent: 'rgba(13,17,23,0)',
              pageHeaderBg: '#0d1117',
              marketingIcon: { primary: '#79c0ff', secondary: '#1f6feb' },
              diffBlob: {
                addition: {
                  numText: '#c9d1d9',
                  fg: '#c9d1d9',
                  numBg: 'rgba(88,166,255,0.3)',
                  lineBg: 'rgba(56,139,253,0.15)',
                  wordBg: 'rgba(56,139,253,0.4)',
                },
                deletion: {
                  numText: '#c9d1d9',
                  fg: '#c9d1d9',
                  numBg: 'rgba(212,118,22,0.3)',
                  lineBg: 'rgba(212,118,22,0.15)',
                  wordBg: 'rgba(212,118,22,0.4)',
                },
                hunk: { numBg: 'rgba(56,139,253,0.4)' },
                expander: { icon: '#8b949e' },
              },
              diffstat: {
                deletionBorder: 'rgba(240,246,252,0.1)',
                additionBorder: 'rgba(240,246,252,0.1)',
                additionBg: '#58a6ff',
              },
              searchKeyword: { hl: 'rgba(210,153,34,0.4)' },
              prettylights: {
                syntax: {
                  comment: '#8b949e',
                  constant: '#79c0ff',
                  entity: '#d2a8ff',
                  storageModifierImport: '#c9d1d9',
                  entityTag: '#a5d6ff',
                  keyword: '#ec8e2c',
                  string: '#a5d6ff',
                  variable: '#fdac54',
                  brackethighlighterUnmatched: '#d47616',
                  invalidIllegalText: '#f0f6fc',
                  invalidIllegalBg: '#6c3906',
                  carriageReturnText: '#f0f6fc',
                  carriageReturnBg: '#914d04',
                  stringRegexp: '#a5d6ff',
                  markupList: '#f2cc60',
                  markupHeading: '#1f6feb',
                  markupItalic: '#c9d1d9',
                  markupBold: '#c9d1d9',
                  markupDeletedText: '#ffe2bb',
                  markupDeletedBg: '#4e2906',
                  markupInsertedText: '#cae8ff',
                  markupInsertedBg: '#0c2d6b',
                  markupChangedText: '#ffe2bb',
                  markupChangedBg: '#4e2906',
                  markupIgnoredText: '#c9d1d9',
                  markupIgnoredBg: '#1158c7',
                  metaDiffRange: '#d2a8ff',
                  brackethighlighterAngle: '#8b949e',
                  sublimelinterGutterMark: '#484f58',
                  constantOtherReferenceLink: '#a5d6ff',
                },
              },
              codemirror: {
                text: '#c9d1d9',
                bg: '#0d1117',
                guttersBg: '#0d1117',
                guttermarkerText: '#0d1117',
                guttermarkerSubtleText: '#6e7681',
                linenumberText: '#8b949e',
                cursor: '#c9d1d9',
                selectionBg: 'rgba(56,139,253,0.4)',
                activelineBg: 'rgba(110,118,129,0.1)',
                matchingbracketText: '#c9d1d9',
                linesBg: '#0d1117',
                syntax: {
                  comment: '#8b949e',
                  constant: '#79c0ff',
                  entity: '#d2a8ff',
                  keyword: '#ec8e2c',
                  storage: '#ec8e2c',
                  string: '#a5d6ff',
                  support: '#79c0ff',
                  variable: '#fdac54',
                },
              },
              checks: {
                bg: '#010409',
                textPrimary: '#c9d1d9',
                textSecondary: '#8b949e',
                textLink: '#58a6ff',
                btnIcon: '#8b949e',
                btnHoverIcon: '#c9d1d9',
                btnHoverBg: 'rgba(110,118,129,0.1)',
                inputText: '#8b949e',
                inputPlaceholderText: '#6e7681',
                inputFocusText: '#c9d1d9',
                inputBg: '#161b22',
                donutError: '#d47616',
                donutPending: '#d29922',
                donutSuccess: '#388bfd',
                donutNeutral: '#8b949e',
                dropdownText: '#c9d1d9',
                dropdownBg: '#161b22',
                dropdownBorder: '#30363d',
                dropdownShadow: 'rgba(1,4,9,0.3)',
                dropdownHoverText: '#c9d1d9',
                dropdownHoverBg: 'rgba(110,118,129,0.1)',
                dropdownBtnHoverText: '#c9d1d9',
                dropdownBtnHoverBg: 'rgba(110,118,129,0.1)',
                scrollbarThumbBg: 'rgba(110,118,129,0.4)',
                headerLabelText: '#8b949e',
                headerLabelOpenText: '#c9d1d9',
                headerBorder: '#21262d',
                headerIcon: '#8b949e',
                lineText: '#8b949e',
                lineNumText: '#6e7681',
                lineTimestampText: '#6e7681',
                lineHoverBg: 'rgba(110,118,129,0.1)',
                lineSelectedBg: 'rgba(56,139,253,0.15)',
                lineSelectedNumText: '#58a6ff',
                lineDtFmText: '#ffffff',
                lineDtFmBg: '#9e6a03',
                gateBg: 'rgba(187,128,9,0.15)',
                gateText: '#8b949e',
                gateWaitingText: '#d29922',
                stepHeaderOpenBg: '#161b22',
                stepErrorText: '#d47616',
                stepWarningText: '#d29922',
                loglineText: '#8b949e',
                loglineNumText: '#6e7681',
                loglineDebugText: '#a371f7',
                loglineErrorText: '#8b949e',
                loglineErrorNumText: '#6e7681',
                loglineErrorBg: 'rgba(212,118,22,0.15)',
                loglineWarningText: '#8b949e',
                loglineWarningNumText: '#d29922',
                loglineWarningBg: 'rgba(187,128,9,0.15)',
                loglineCommandText: '#58a6ff',
                loglineSectionText: '#58a6ff',
                ansi: {
                  black: '#0d1117',
                  blackBright: '#161b22',
                  white: '#b1bac4',
                  whiteBright: '#b1bac4',
                  gray: '#6e7681',
                  red: '#ec8e2c',
                  redBright: '#fdac54',
                  green: '#58a6ff',
                  greenBright: '#79c0ff',
                  yellow: '#d29922',
                  yellowBright: '#e3b341',
                  blue: '#58a6ff',
                  blueBright: '#79c0ff',
                  magenta: '#bc8cff',
                  magentaBright: '#d2a8ff',
                  cyan: '#76e3ea',
                  cyanBright: '#b3f0ff',
                },
              },
              project: {
                headerBg: '#0d1117',
                sidebarBg: '#161b22',
                gradientIn: '#161b22',
                gradientOut: 'rgba(22,27,34,0)',
              },
              mktg: { btn: { bg: '#f6f8fa' } },
              control: { borderColor: { emphasis: '#606771' } },
              avatar: {
                bg: 'rgba(255,255,255,0.1)',
                border: 'rgba(240,246,252,0.1)',
                stackFade: '#30363d',
                stackFadeMore: '#21262d',
              },
              topicTag: { border: 'rgba(0,0,0,0)' },
              counter: { border: 'rgba(0,0,0,0)' },
              selectMenu: {
                backdropBorder: '#484f58',
                tapHighlight: 'rgba(48,54,61,0.5)',
                tapFocusBg: '#0c2d6b',
              },
              header: {
                text: 'rgba(255,255,255,0.7)',
                bg: '#161b22',
                divider: '#8b949e',
                logo: '#f0f6fc',
              },
              headerSearch: { bg: '#0d1117', border: '#30363d' },
              sidenav: { selectedBg: '#21262d' },
              menu: { bgActive: '#161b22' },
              input: { disabledBg: 'rgba(110,118,129,0)' },
              timeline: { badgeBg: '#21262d' },
              ansi: {
                black: '#484f58',
                blackBright: '#6e7681',
                white: '#b1bac4',
                whiteBright: '#ffffff',
                gray: '#6e7681',
                red: '#ec8e2c',
                redBright: '#fdac54',
                green: '#58a6ff',
                greenBright: '#79c0ff',
                yellow: '#d29922',
                yellowBright: '#e3b341',
                blue: '#58a6ff',
                blueBright: '#79c0ff',
                magenta: '#bc8cff',
                magentaBright: '#d2a8ff',
                cyan: '#39c5cf',
                cyanBright: '#56d4dd',
              },
              btn: {
                text: '#c9d1d9',
                bg: '#21262d',
                border: 'rgba(240,246,252,0.1)',
                hoverBg: '#30363d',
                hoverBorder: '#8b949e',
                activeBg: 'hsla(212,12%,18%,1)',
                activeBorder: '#6e7681',
                selectedBg: '#161b22',
                counterBg: '#30363d',
                primary: {
                  text: '#ffffff',
                  bg: '#1f6feb',
                  border: 'rgba(240,246,252,0.1)',
                  hoverBg: '#388bfd',
                  hoverBorder: 'rgba(240,246,252,0.1)',
                  selectedBg: '#1f6feb',
                  disabledText: 'rgba(255,255,255,0.5)',
                  disabledBg: 'rgba(31,111,235,0.6)',
                  disabledBorder: 'rgba(240,246,252,0.1)',
                  icon: '#ffffff',
                  counterBg: 'rgba(255,255,255,0.2)',
                },
                outline: {
                  text: '#58a6ff',
                  hoverText: '#58a6ff',
                  hoverBg: '#30363d',
                  hoverBorder: 'rgba(240,246,252,0.1)',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: '#0d419d',
                  selectedBorder: 'rgba(240,246,252,0.1)',
                  disabledText: 'rgba(88,166,255,0.5)',
                  disabledBg: '#0d1117',
                  disabledCounterBg: 'rgba(31,111,235,0.05)',
                  counterBg: 'rgba(31,111,235,0.1)',
                },
                danger: {
                  text: '#d47616',
                  hoverText: '#ffffff',
                  hoverBg: '#b76100',
                  hoverBorder: '#d47616',
                  hoverIcon: '#ffffff',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: '#914d04',
                  selectedBorder: '#ec8e2c',
                  disabledText: 'rgba(212,118,22,0.5)',
                  disabledBg: '#0d1117',
                  disabledCounterBg: 'rgba(183,97,0,0.05)',
                  counterBg: 'rgba(183,97,0,0.1)',
                  icon: '#d47616',
                },
              },
              underlinenav: {
                icon: '#6e7681',
                borderHover: 'rgba(110,118,129,0.4)',
              },
              actionListItem: {
                inlineDivider: 'rgba(48,54,61,0.48)',
                default: {
                  hoverBg: 'rgba(177,186,196,0.12)',
                  hoverBorder: 'rgba(0,0,0,0)',
                  activeBg: 'rgba(177,186,196,0.2)',
                  activeBorder: 'rgba(0,0,0,0)',
                  selectedBg: 'rgba(177,186,196,0.08)',
                },
                danger: {
                  hoverBg: 'rgba(212,118,22,0.16)',
                  activeBg: 'rgba(212,118,22,0.24)',
                  hoverText: '#ec8e2c',
                },
              },
              switchTrack: {
                bg: 'rgba(110,118,129,0.1)',
                hoverBg: 'hsla(215,8%,72%,0.1)',
                activeBg: 'rgba(110,118,129,0.4)',
                disabledBg: '#21262d',
                fg: '#8b949e',
                disabledFg: '#010409',
                border: 'rgba(0,0,0,0)',
                checked: {
                  bg: 'rgba(31,111,235,0.35)',
                  hoverBg: 'rgba(31,111,235,0.5)',
                  activeBg: 'rgba(31,111,235,0.65)',
                  fg: '#ffffff',
                  disabledFg: '#010409',
                  border: 'rgba(0,0,0,0)',
                },
              },
              switchKnob: {
                bg: '#0d1117',
                border: '#606771',
                disabledBg: '#161b22',
                checked: {
                  bg: '#0d1117',
                  disabledBg: '#161b22',
                  border: 'rgba(31,111,235,0.35)',
                },
              },
              segmentedControl: {
                bg: 'rgba(110,118,129,0.1)',
                button: {
                  bg: '#0d1117',
                  hover: { bg: '#30363d' },
                  active: { bg: '#21262d' },
                  selected: { border: '#6e7681' },
                },
              },
              treeViewItem: {
                chevron: { hoverBg: 'rgba(177,186,196,0.12)' },
                directory: { fill: '#8b949e' },
              },
              fg: {
                default: '#c9d1d9',
                muted: '#8b949e',
                subtle: '#6e7681',
                onEmphasis: '#ffffff',
              },
              canvas: {
                default: '#0d1117',
                overlay: '#161b22',
                inset: '#010409',
                subtle: '#161b22',
              },
              border: {
                default: '#30363d',
                muted: '#21262d',
                subtle: 'rgba(240,246,252,0.1)',
              },
              neutral: {
                emphasisPlus: '#6e7681',
                emphasis: '#6e7681',
                muted: 'rgba(110,118,129,0.4)',
                subtle: 'rgba(110,118,129,0.1)',
              },
              accent: {
                fg: '#58a6ff',
                emphasis: '#1f6feb',
                muted: 'rgba(56,139,253,0.4)',
                subtle: 'rgba(56,139,253,0.15)',
              },
              success: {
                fg: '#58a6ff',
                emphasis: '#1f6feb',
                muted: 'rgba(56,139,253,0.4)',
                subtle: 'rgba(56,139,253,0.15)',
              },
              attention: {
                fg: '#d29922',
                emphasis: '#9e6a03',
                muted: 'rgba(187,128,9,0.4)',
                subtle: 'rgba(187,128,9,0.15)',
              },
              severe: {
                fg: '#d47616',
                emphasis: '#b76100',
                muted: 'rgba(212,118,22,0.4)',
                subtle: 'rgba(212,118,22,0.15)',
              },
              danger: {
                fg: '#d47616',
                emphasis: '#b76100',
                muted: 'rgba(212,118,22,0.4)',
                subtle: 'rgba(212,118,22,0.15)',
              },
              open: {
                fg: '#ec8e2c',
                emphasis: '#b76100',
                muted: 'rgba(212,118,22,0.4)',
                subtle: 'rgba(212,118,22,0.15)',
              },
              closed: {
                fg: '#8b949e',
                emphasis: '#6e7681',
                muted: 'rgba(110,118,129,0.4)',
                subtle: 'rgba(110,118,129,0.1)',
              },
              done: {
                fg: '#a371f7',
                emphasis: '#8957e5',
                muted: 'rgba(163,113,247,0.4)',
                subtle: 'rgba(163,113,247,0.15)',
              },
              sponsors: {
                fg: '#db61a2',
                emphasis: '#bf4b8a',
                muted: 'rgba(219,97,162,0.4)',
                subtle: 'rgba(219,97,162,0.15)',
              },
              primer: {
                fg: { disabled: '#484f58' },
                canvas: {
                  backdrop: 'rgba(1,4,9,0.8)',
                  sticky: 'rgba(13,17,23,0.95)',
                },
                border: {
                  active: '#f78166',
                  contrast: 'rgba(255,255,255,0.2)',
                },
              },
            },
            shadows: {
              checks: {
                inputShadow: '0 0 0 1px (obj) => (0, get_1.default)(obj, path)',
              },
              mktg: {
                btn: {
                  shadow: {
                    outline: 'rgb(255 255 255 / 25%) 0 0 0 1px inset',
                    focus: 'rgb(255 255 255 / 25%) 0 0 0 4px',
                    hover:
                      '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
                    hoverMuted: 'rgb(255 255 255) 0 0 0 2px inset',
                  },
                },
              },
              avatar: { childShadow: '-2px -2px 0 #0d1117' },
              overlay: {
                shadow: '0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)',
              },
              btn: {
                shadow: '0 0 transparent',
                insetShadow: '0 0 transparent',
                primary: {
                  shadow: '0 0 transparent',
                  insetShadow: '0 0 transparent',
                  selectedShadow: '0 0 transparent',
                },
                outline: {
                  hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: '0 0 transparent',
                },
                danger: {
                  hoverShadow: '0 0 transparent',
                  hoverInsetShadow: '0 0 transparent',
                  selectedShadow: '0 0 transparent',
                },
              },
              shadow: {
                small: '0 0 transparent',
                medium: '0 3px 6px #010409',
                large: '0 8px 24px #010409',
                extraLarge: '0 12px 48px #010409',
              },
              primer: {
                shadow: {
                  highlight: '0 0 transparent',
                  inset: '0 0 transparent',
                },
              },
            },
          },
          dark_tritanopia: {
            colors: {
              canvasDefaultTransparent: 'rgba(13,17,23,0)',
              pageHeaderBg: '#0d1117',
              marketingIcon: { primary: '#79c0ff', secondary: '#1f6feb' },
              diffBlob: {
                addition: {
                  numText: '#c9d1d9',
                  fg: '#c9d1d9',
                  numBg: 'rgba(88,166,255,0.3)',
                  lineBg: 'rgba(56,139,253,0.15)',
                  wordBg: 'rgba(56,139,253,0.4)',
                },
                deletion: {
                  numText: '#c9d1d9',
                  fg: '#c9d1d9',
                  numBg: 'rgba(248,81,73,0.3)',
                  lineBg: 'rgba(248,81,73,0.15)',
                  wordBg: 'rgba(248,81,73,0.4)',
                },
                hunk: { numBg: 'rgba(56,139,253,0.4)' },
                expander: { icon: '#8b949e' },
              },
              diffstat: {
                deletionBorder: 'rgba(240,246,252,0.1)',
                additionBorder: 'rgba(240,246,252,0.1)',
                additionBg: '#58a6ff',
              },
              searchKeyword: { hl: 'rgba(210,153,34,0.4)' },
              prettylights: {
                syntax: {
                  comment: '#8b949e',
                  constant: '#79c0ff',
                  entity: '#d2a8ff',
                  storageModifierImport: '#c9d1d9',
                  entityTag: '#a5d6ff',
                  keyword: '#ff7b72',
                  string: '#a5d6ff',
                  variable: '#ffa198',
                  brackethighlighterUnmatched: '#f85149',
                  invalidIllegalText: '#f0f6fc',
                  invalidIllegalBg: '#8e1519',
                  carriageReturnText: '#f0f6fc',
                  carriageReturnBg: '#b62324',
                  stringRegexp: '#a5d6ff',
                  markupList: '#f2cc60',
                  markupHeading: '#1f6feb',
                  markupItalic: '#c9d1d9',
                  markupBold: '#c9d1d9',
                  markupDeletedText: '#ffdcd7',
                  markupDeletedBg: '#67060c',
                  markupInsertedText: '#cae8ff',
                  markupInsertedBg: '#0c2d6b',
                  markupChangedText: '#ffdcd7',
                  markupChangedBg: '#67060c',
                  markupIgnoredText: '#c9d1d9',
                  markupIgnoredBg: '#1158c7',
                  metaDiffRange: '#d2a8ff',
                  brackethighlighterAngle: '#8b949e',
                  sublimelinterGutterMark: '#484f58',
                  constantOtherReferenceLink: '#a5d6ff',
                },
              },
              codemirror: {
                text: '#c9d1d9',
                bg: '#0d1117',
                guttersBg: '#0d1117',
                guttermarkerText: '#0d1117',
                guttermarkerSubtleText: '#6e7681',
                linenumberText: '#8b949e',
                cursor: '#c9d1d9',
                selectionBg: 'rgba(56,139,253,0.4)',
                activelineBg: 'rgba(110,118,129,0.1)',
                matchingbracketText: '#c9d1d9',
                linesBg: '#0d1117',
                syntax: {
                  comment: '#8b949e',
                  constant: '#79c0ff',
                  entity: '#d2a8ff',
                  keyword: '#ff7b72',
                  storage: '#ff7b72',
                  string: '#a5d6ff',
                  support: '#79c0ff',
                  variable: '#ffa198',
                },
              },
              checks: {
                bg: '#010409',
                textPrimary: '#c9d1d9',
                textSecondary: '#8b949e',
                textLink: '#58a6ff',
                btnIcon: '#8b949e',
                btnHoverIcon: '#c9d1d9',
                btnHoverBg: 'rgba(110,118,129,0.1)',
                inputText: '#8b949e',
                inputPlaceholderText: '#6e7681',
                inputFocusText: '#c9d1d9',
                inputBg: '#161b22',
                donutError: '#f85149',
                donutPending: '#d29922',
                donutSuccess: '#388bfd',
                donutNeutral: '#8b949e',
                dropdownText: '#c9d1d9',
                dropdownBg: '#161b22',
                dropdownBorder: '#30363d',
                dropdownShadow: 'rgba(1,4,9,0.3)',
                dropdownHoverText: '#c9d1d9',
                dropdownHoverBg: 'rgba(110,118,129,0.1)',
                dropdownBtnHoverText: '#c9d1d9',
                dropdownBtnHoverBg: 'rgba(110,118,129,0.1)',
                scrollbarThumbBg: 'rgba(110,118,129,0.4)',
                headerLabelText: '#8b949e',
                headerLabelOpenText: '#c9d1d9',
                headerBorder: '#21262d',
                headerIcon: '#8b949e',
                lineText: '#8b949e',
                lineNumText: '#6e7681',
                lineTimestampText: '#6e7681',
                lineHoverBg: 'rgba(110,118,129,0.1)',
                lineSelectedBg: 'rgba(56,139,253,0.15)',
                lineSelectedNumText: '#58a6ff',
                lineDtFmText: '#ffffff',
                lineDtFmBg: '#9e6a03',
                gateBg: 'rgba(187,128,9,0.15)',
                gateText: '#8b949e',
                gateWaitingText: '#d29922',
                stepHeaderOpenBg: '#161b22',
                stepErrorText: '#f85149',
                stepWarningText: '#d29922',
                loglineText: '#8b949e',
                loglineNumText: '#6e7681',
                loglineDebugText: '#a371f7',
                loglineErrorText: '#8b949e',
                loglineErrorNumText: '#6e7681',
                loglineErrorBg: 'rgba(248,81,73,0.15)',
                loglineWarningText: '#8b949e',
                loglineWarningNumText: '#d29922',
                loglineWarningBg: 'rgba(187,128,9,0.15)',
                loglineCommandText: '#58a6ff',
                loglineSectionText: '#58a6ff',
                ansi: {
                  black: '#0d1117',
                  blackBright: '#161b22',
                  white: '#b1bac4',
                  whiteBright: '#b1bac4',
                  gray: '#6e7681',
                  red: '#ff7b72',
                  redBright: '#ffa198',
                  green: '#58a6ff',
                  greenBright: '#79c0ff',
                  yellow: '#d29922',
                  yellowBright: '#e3b341',
                  blue: '#58a6ff',
                  blueBright: '#79c0ff',
                  magenta: '#bc8cff',
                  magentaBright: '#d2a8ff',
                  cyan: '#76e3ea',
                  cyanBright: '#b3f0ff',
                },
              },
              project: {
                headerBg: '#0d1117',
                sidebarBg: '#161b22',
                gradientIn: '#161b22',
                gradientOut: 'rgba(22,27,34,0)',
              },
              mktg: { btn: { bg: '#f6f8fa' } },
              control: { borderColor: { emphasis: '#606771' } },
              avatar: {
                bg: 'rgba(255,255,255,0.1)',
                border: 'rgba(240,246,252,0.1)',
                stackFade: '#30363d',
                stackFadeMore: '#21262d',
              },
              topicTag: { border: 'rgba(0,0,0,0)' },
              counter: { border: 'rgba(0,0,0,0)' },
              selectMenu: {
                backdropBorder: '#484f58',
                tapHighlight: 'rgba(48,54,61,0.5)',
                tapFocusBg: '#0c2d6b',
              },
              header: {
                text: 'rgba(255,255,255,0.7)',
                bg: '#161b22',
                divider: '#8b949e',
                logo: '#f0f6fc',
              },
              headerSearch: { bg: '#0d1117', border: '#30363d' },
              sidenav: { selectedBg: '#21262d' },
              menu: { bgActive: '#161b22' },
              input: { disabledBg: 'rgba(110,118,129,0)' },
              timeline: { badgeBg: '#21262d' },
              ansi: {
                black: '#484f58',
                blackBright: '#6e7681',
                white: '#b1bac4',
                whiteBright: '#ffffff',
                gray: '#6e7681',
                red: '#ff7b72',
                redBright: '#ffa198',
                green: '#58a6ff',
                greenBright: '#79c0ff',
                yellow: '#d29922',
                yellowBright: '#e3b341',
                blue: '#58a6ff',
                blueBright: '#79c0ff',
                magenta: '#bc8cff',
                magentaBright: '#d2a8ff',
                cyan: '#39c5cf',
                cyanBright: '#56d4dd',
              },
              btn: {
                text: '#c9d1d9',
                bg: '#21262d',
                border: 'rgba(240,246,252,0.1)',
                hoverBg: '#30363d',
                hoverBorder: '#8b949e',
                activeBg: 'hsla(212,12%,18%,1)',
                activeBorder: '#6e7681',
                selectedBg: '#161b22',
                counterBg: '#30363d',
                primary: {
                  text: '#ffffff',
                  bg: '#1f6feb',
                  border: 'rgba(240,246,252,0.1)',
                  hoverBg: '#388bfd',
                  hoverBorder: 'rgba(240,246,252,0.1)',
                  selectedBg: '#1f6feb',
                  disabledText: 'rgba(255,255,255,0.5)',
                  disabledBg: 'rgba(31,111,235,0.6)',
                  disabledBorder: 'rgba(240,246,252,0.1)',
                  icon: '#ffffff',
                  counterBg: 'rgba(255,255,255,0.2)',
                },
                outline: {
                  text: '#58a6ff',
                  hoverText: '#58a6ff',
                  hoverBg: '#30363d',
                  hoverBorder: 'rgba(240,246,252,0.1)',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: '#0d419d',
                  selectedBorder: 'rgba(240,246,252,0.1)',
                  disabledText: 'rgba(88,166,255,0.5)',
                  disabledBg: '#0d1117',
                  disabledCounterBg: 'rgba(31,111,235,0.05)',
                  counterBg: 'rgba(31,111,235,0.1)',
                },
                danger: {
                  text: '#f85149',
                  hoverText: '#ffffff',
                  hoverBg: '#da3633',
                  hoverBorder: '#f85149',
                  hoverIcon: '#ffffff',
                  hoverCounterBg: 'rgba(255,255,255,0.2)',
                  selectedText: '#ffffff',
                  selectedBg: '#b62324',
                  selectedBorder: '#ff7b72',
                  disabledText: 'rgba(248,81,73,0.5)',
                  disabledBg: '#0d1117',
                  disabledCounterBg: 'rgba(218,54,51,0.05)',
                  counterBg: 'rgba(218,54,51,0.1)',
                  icon: '#f85149',
                },
              },
              underlinenav: {
                icon: '#6e7681',
                borderHover: 'rgba(110,118,129,0.4)',
              },
              actionListItem: {
                inlineDivider: 'rgba(48,54,61,0.48)',
                default: {
                  hoverBg: 'rgba(177,186,196,0.12)',
                  hoverBorder: 'rgba(0,0,0,0)',
                  activeBg: 'rgba(177,186,196,0.2)',
                  activeBorder: 'rgba(0,0,0,0)',
                  selectedBg: 'rgba(177,186,196,0.08)',
                },
                danger: {
                  hoverBg: 'rgba(248,81,73,0.16)',
                  activeBg: 'rgba(248,81,73,0.24)',
                  hoverText: '#ff7b72',
                },
              },
              switchTrack: {
                bg: 'rgba(110,118,129,0.1)',
                hoverBg: 'hsla(215,8%,72%,0.1)',
                activeBg: 'rgba(110,118,129,0.4)',
                disabledBg: '#21262d',
                fg: '#8b949e',
                disabledFg: '#010409',
                border: 'rgba(0,0,0,0)',
                checked: {
                  bg: 'rgba(31,111,235,0.35)',
                  hoverBg: 'rgba(31,111,235,0.5)',
                  activeBg: 'rgba(31,111,235,0.65)',
                  fg: '#ffffff',
                  disabledFg: '#010409',
                  border: 'rgba(0,0,0,0)',
                },
              },
              switchKnob: {
                bg: '#0d1117',
                border: '#606771',
                disabledBg: '#161b22',
                checked: {
                  bg: '#0d1117',
                  disabledBg: '#161b22',
                  border: 'rgba(31,111,235,0.35)',
                },
              },
              segmentedControl: {
                bg: 'rgba(110,118,129,0.1)',
                button: {
                  bg: '#0d1117',
                  hover: { bg: '#30363d' },
                  active: { bg: '#21262d' },
                  selected: { border: '#6e7681' },
                },
              },
              treeViewItem: {
                chevron: { hoverBg: 'rgba(177,186,196,0.12)' },
                directory: { fill: '#8b949e' },
              },
              fg: {
                default: '#c9d1d9',
                muted: '#8b949e',
                subtle: '#6e7681',
                onEmphasis: '#ffffff',
              },
              canvas: {
                default: '#0d1117',
                overlay: '#161b22',
                inset: '#010409',
                subtle: '#161b22',
              },
              border: {
                default: '#30363d',
                muted: '#21262d',
                subtle: 'rgba(240,246,252,0.1)',
              },
              neutral: {
                emphasisPlus: '#6e7681',
                emphasis: '#6e7681',
                muted: 'rgba(110,118,129,0.4)',
                subtle: 'rgba(110,118,129,0.1)',
              },
              accent: {
                fg: '#58a6ff',
                emphasis: '#1f6feb',
                muted: 'rgba(56,139,253,0.4)',
                subtle: 'rgba(56,139,253,0.15)',
              },
              success: {
                fg: '#58a6ff',
                emphasis: '#1f6feb',
                muted: 'rgba(56,139,253,0.4)',
                subtle: 'rgba(56,139,253,0.15)',
              },
              attention: {
                fg: '#d29922',
                emphasis: '#9e6a03',
                muted: 'rgba(187,128,9,0.4)',
                subtle: 'rgba(187,128,9,0.15)',
              },
              severe: {
                fg: '#f85149',
                emphasis: '#da3633',
                muted: 'rgba(248,81,73,0.4)',
                subtle: 'rgba(248,81,73,0.15)',
              },
              danger: {
                fg: '#f85149',
                emphasis: '#da3633',
                muted: 'rgba(248,81,73,0.4)',
                subtle: 'rgba(248,81,73,0.15)',
              },
              open: {
                fg: '#ff7b72',
                emphasis: '#da3633',
                muted: 'rgba(248,81,73,0.4)',
                subtle: 'rgba(248,81,73,0.15)',
              },
              closed: {
                fg: '#8b949e',
                emphasis: '#6e7681',
                muted: 'rgba(110,118,129,0.4)',
                subtle: 'rgba(110,118,129,0.1)',
              },
              done: {
                fg: '#a371f7',
                emphasis: '#8957e5',
                muted: 'rgba(163,113,247,0.4)',
                subtle: 'rgba(163,113,247,0.15)',
              },
              sponsors: {
                fg: '#db61a2',
                emphasis: '#bf4b8a',
                muted: 'rgba(219,97,162,0.4)',
                subtle: 'rgba(219,97,162,0.15)',
              },
              primer: {
                fg: { disabled: '#484f58' },
                canvas: {
                  backdrop: 'rgba(1,4,9,0.8)',
                  sticky: 'rgba(13,17,23,0.95)',
                },
                border: {
                  active: '#f78166',
                  contrast: 'rgba(255,255,255,0.2)',
                },
              },
            },
            shadows: {
              checks: {
                inputShadow: '0 0 0 1px (obj) => (0, get_1.default)(obj, path)',
              },
              mktg: {
                btn: {
                  shadow: {
                    outline: 'rgb(255 255 255 / 25%) 0 0 0 1px inset',
                    focus: 'rgb(255 255 255 / 25%) 0 0 0 4px',
                    hover:
                      '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
                    hoverMuted: 'rgb(255 255 255) 0 0 0 2px inset',
                  },
                },
              },
              avatar: { childShadow: '-2px -2px 0 #0d1117' },
              overlay: {
                shadow: '0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)',
              },
              btn: {
                shadow: '0 0 transparent',
                insetShadow: '0 0 transparent',
                primary: {
                  shadow: '0 0 transparent',
                  insetShadow: '0 0 transparent',
                  selectedShadow: '0 0 transparent',
                },
                outline: {
                  hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
                  hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  selectedShadow: '0 0 transparent',
                },
                danger: {
                  hoverShadow: '0 0 transparent',
                  hoverInsetShadow: '0 0 transparent',
                  selectedShadow: '0 0 transparent',
                },
              },
              shadow: {
                small: '0 0 transparent',
                medium: '0 3px 6px #010409',
                large: '0 8px 24px #010409',
                extraLarge: '0 12px 48px #010409',
              },
              primer: {
                shadow: {
                  highlight: '0 0 transparent',
                  inset: '0 0 transparent',
                },
              },
            },
          },
        },
      }
    },
    8831: function (e, r, t) {
      'use strict'
      t.d(r, {
        HK: function () {
          return i
        },
        gP: function () {
          return d
        },
      })
      var a = t(7294)
      const n = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0,
        },
        o = a.createContext(n)
      function i(e) {
        let r = (0, a.useContext)(o),
          t = (0, a.useMemo)(
            () => ({
              prefix: r === n ? '' : r.prefix + '-' + ++r.current,
              current: 0,
            }),
            [r]
          )
        return a.createElement(o.Provider, { value: t }, e.children)
      }
      let f = Boolean(
        'undefined' !== typeof window &&
          window.document &&
          window.document.createElement
      )
      function d(e) {
        let r = (0, a.useContext)(o)
        return (
          r !== n ||
            f ||
            console.warn(
              'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
            ),
          (0, a.useMemo)(
            () => e || 'react-aria' + r.prefix + '-' + ++r.current,
            [e]
          )
        )
      }
    },
    9996: function (e) {
      'use strict'
      var r = function (e) {
        return (
          (function (e) {
            return !!e && 'object' === typeof e
          })(e) &&
          !(function (e) {
            var r = Object.prototype.toString.call(e)
            return (
              '[object RegExp]' === r ||
              '[object Date]' === r ||
              (function (e) {
                return e.$$typeof === t
              })(e)
            )
          })(e)
        )
      }
      var t =
        'function' === typeof Symbol && Symbol.for
          ? Symbol.for('react.element')
          : 60103
      function a(e, r) {
        return !1 !== r.clone && r.isMergeableObject(e)
          ? d(((t = e), Array.isArray(t) ? [] : {}), e, r)
          : e
        var t
      }
      function n(e, r, t) {
        return e.concat(r).map(function (e) {
          return a(e, t)
        })
      }
      function o(e) {
        return Object.keys(e).concat(
          (function (e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (r) {
                  return e.propertyIsEnumerable(r)
                })
              : []
          })(e)
        )
      }
      function i(e, r) {
        try {
          return r in e
        } catch (t) {
          return !1
        }
      }
      function f(e, r, t) {
        var n = {}
        return (
          t.isMergeableObject(e) &&
            o(e).forEach(function (r) {
              n[r] = a(e[r], t)
            }),
          o(r).forEach(function (o) {
            ;(function (e, r) {
              return (
                i(e, r) &&
                !(
                  Object.hasOwnProperty.call(e, r) &&
                  Object.propertyIsEnumerable.call(e, r)
                )
              )
            })(e, o) ||
              (i(e, o) && t.isMergeableObject(r[o])
                ? (n[o] = (function (e, r) {
                    if (!r.customMerge) return d
                    var t = r.customMerge(e)
                    return 'function' === typeof t ? t : d
                  })(o, t)(e[o], r[o], t))
                : (n[o] = a(r[o], t)))
          }),
          n
        )
      }
      function d(e, t, o) {
        ;((o = o || {}).arrayMerge = o.arrayMerge || n),
          (o.isMergeableObject = o.isMergeableObject || r),
          (o.cloneUnlessOtherwiseSpecified = a)
        var i = Array.isArray(t)
        return i === Array.isArray(e)
          ? i
            ? o.arrayMerge(e, t, o)
            : f(e, t, o)
          : a(t, o)
      }
      d.all = function (e, r) {
        if (!Array.isArray(e))
          throw new Error('first argument should be an array')
        return e.reduce(function (e, t) {
          return d(e, t, r)
        }, {})
      }
      var g = d
      e.exports = g
    },
    8679: function (e, r, t) {
      'use strict'
      var a = t(1296),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        f = {}
      function d(e) {
        return a.isMemo(e) ? i : f[e.$$typeof] || n
      }
      ;(f[a.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (f[a.Memo] = i)
      var g = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        s = Object.getOwnPropertySymbols,
        b = Object.getOwnPropertyDescriptor,
        l = Object.getPrototypeOf,
        u = Object.prototype
      e.exports = function e(r, t, a) {
        if ('string' !== typeof t) {
          if (u) {
            var n = l(t)
            n && n !== u && e(r, n, a)
          }
          var i = c(t)
          s && (i = i.concat(s(t)))
          for (var f = d(r), h = d(t), p = 0; p < i.length; ++p) {
            var m = i[p]
            if (!o[m] && (!a || !a[m]) && (!h || !h[m]) && (!f || !f[m])) {
              var v = b(t, m)
              try {
                g(r, m, v)
              } catch (x) {}
            }
          }
        }
        return r
      }
    },
    6103: function (e, r) {
      'use strict'
      var t = 'function' === typeof Symbol && Symbol.for,
        a = t ? Symbol.for('react.element') : 60103,
        n = t ? Symbol.for('react.portal') : 60106,
        o = t ? Symbol.for('react.fragment') : 60107,
        i = t ? Symbol.for('react.strict_mode') : 60108,
        f = t ? Symbol.for('react.profiler') : 60114,
        d = t ? Symbol.for('react.provider') : 60109,
        g = t ? Symbol.for('react.context') : 60110,
        c = t ? Symbol.for('react.async_mode') : 60111,
        s = t ? Symbol.for('react.concurrent_mode') : 60111,
        b = t ? Symbol.for('react.forward_ref') : 60112,
        l = t ? Symbol.for('react.suspense') : 60113,
        u = t ? Symbol.for('react.suspense_list') : 60120,
        h = t ? Symbol.for('react.memo') : 60115,
        p = t ? Symbol.for('react.lazy') : 60116,
        m = t ? Symbol.for('react.block') : 60121,
        v = t ? Symbol.for('react.fundamental') : 60117,
        x = t ? Symbol.for('react.responder') : 60118,
        B = t ? Symbol.for('react.scope') : 60119
      function y(e) {
        if ('object' === typeof e && null !== e) {
          var r = e.$$typeof
          switch (r) {
            case a:
              switch ((e = e.type)) {
                case c:
                case s:
                case o:
                case f:
                case i:
                case l:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case g:
                    case b:
                    case p:
                    case h:
                    case d:
                      return e
                    default:
                      return r
                  }
              }
            case n:
              return r
          }
        }
      }
      function w(e) {
        return y(e) === s
      }
      ;(r.AsyncMode = c),
        (r.ConcurrentMode = s),
        (r.ContextConsumer = g),
        (r.ContextProvider = d),
        (r.Element = a),
        (r.ForwardRef = b),
        (r.Fragment = o),
        (r.Lazy = p),
        (r.Memo = h),
        (r.Portal = n),
        (r.Profiler = f),
        (r.StrictMode = i),
        (r.Suspense = l),
        (r.isAsyncMode = function (e) {
          return w(e) || y(e) === c
        }),
        (r.isConcurrentMode = w),
        (r.isContextConsumer = function (e) {
          return y(e) === g
        }),
        (r.isContextProvider = function (e) {
          return y(e) === d
        }),
        (r.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === a
        }),
        (r.isForwardRef = function (e) {
          return y(e) === b
        }),
        (r.isFragment = function (e) {
          return y(e) === o
        }),
        (r.isLazy = function (e) {
          return y(e) === p
        }),
        (r.isMemo = function (e) {
          return y(e) === h
        }),
        (r.isPortal = function (e) {
          return y(e) === n
        }),
        (r.isProfiler = function (e) {
          return y(e) === f
        }),
        (r.isStrictMode = function (e) {
          return y(e) === i
        }),
        (r.isSuspense = function (e) {
          return y(e) === l
        }),
        (r.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === o ||
            e === s ||
            e === f ||
            e === i ||
            e === l ||
            e === u ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === p ||
                e.$$typeof === h ||
                e.$$typeof === d ||
                e.$$typeof === g ||
                e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === x ||
                e.$$typeof === B ||
                e.$$typeof === m))
          )
        }),
        (r.typeOf = y)
    },
    1296: function (e, r, t) {
      'use strict'
      e.exports = t(6103)
    },
    4269: function (e) {
      !(function () {
        var r
        function t(e, a) {
          var n = this instanceof t ? this : r
          if (
            (n.reset(a),
            'string' === typeof e && e.length > 0 && n.hash(e),
            n !== this)
          )
            return n
        }
        ;(t.prototype.hash = function (e) {
          var r, t, a, n, o
          switch (
            ((o = e.length), (this.len += o), (t = this.k1), (a = 0), this.rem)
          ) {
            case 0:
              t ^= o > a ? 65535 & e.charCodeAt(a++) : 0
            case 1:
              t ^= o > a ? (65535 & e.charCodeAt(a++)) << 8 : 0
            case 2:
              t ^= o > a ? (65535 & e.charCodeAt(a++)) << 16 : 0
            case 3:
              ;(t ^= o > a ? (255 & e.charCodeAt(a)) << 24 : 0),
                (t ^= o > a ? (65280 & e.charCodeAt(a++)) >> 8 : 0)
          }
          if (((this.rem = (o + this.rem) & 3), (o -= this.rem) > 0)) {
            for (
              r = this.h1;
              (r =
                (5 *
                  (r =
                    ((r ^= t =
                      (13715 *
                        (t =
                          ((t =
                            (11601 * t + 3432906752 * (65535 & t)) &
                            4294967295) <<
                            15) |
                          (t >>> 17)) +
                        461832192 * (65535 & t)) &
                      4294967295) <<
                      13) |
                    (r >>> 19)) +
                  3864292196) &
                4294967295),
                !(a >= o);

            )
              (t =
                (65535 & e.charCodeAt(a++)) ^
                ((65535 & e.charCodeAt(a++)) << 8) ^
                ((65535 & e.charCodeAt(a++)) << 16)),
                (t ^=
                  ((255 & (n = e.charCodeAt(a++))) << 24) ^ ((65280 & n) >> 8))
            switch (((t = 0), this.rem)) {
              case 3:
                t ^= (65535 & e.charCodeAt(a + 2)) << 16
              case 2:
                t ^= (65535 & e.charCodeAt(a + 1)) << 8
              case 1:
                t ^= 65535 & e.charCodeAt(a)
            }
            this.h1 = r
          }
          return (this.k1 = t), this
        }),
          (t.prototype.result = function () {
            var e, r
            return (
              (e = this.k1),
              (r = this.h1),
              e > 0 &&
                (r ^= e =
                  (13715 *
                    (e =
                      ((e =
                        (11601 * e + 3432906752 * (65535 & e)) & 4294967295) <<
                        15) |
                      (e >>> 17)) +
                    461832192 * (65535 & e)) &
                  4294967295),
              (r ^= this.len),
              (r =
                (51819 * (r ^= r >>> 16) + 2246770688 * (65535 & r)) &
                4294967295),
              (r =
                (44597 * (r ^= r >>> 13) + 3266445312 * (65535 & r)) &
                4294967295),
              (r ^= r >>> 16) >>> 0
            )
          }),
          (t.prototype.reset = function (e) {
            return (
              (this.h1 = 'number' === typeof e ? e : 0),
              (this.rem = this.k1 = this.len = 0),
              this
            )
          }),
          (r = new t()),
          (e.exports = t)
      })()
    },
    7544: function (e, r, t) {
      e.exports = t(6029)
    },
    3454: function (e, r, t) {
      'use strict'
      var a, n
      e.exports =
        (null == (a = t.g.process) ? void 0 : a.env) &&
        'object' === typeof (null == (n = t.g.process) ? void 0 : n.env)
          ? t.g.process
          : t(7663)
    },
    6840: function (e, r, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return t(1651)
        },
      ])
    },
    5770: function (e, r, t) {
      'use strict'
      t.d(r, {
        m: function () {
          return n
        },
        u: function () {
          return o
        },
      })
      var a = t(7294),
        n = (0, a.createContext)(null),
        o = function () {
          var e = (0, a.useContext)(n)
          if (!e)
            throw new Error(
              '"useLanguagesContext" may only be used inside "LanguagesContext.Provider"'
            )
          return e
        }
    },
    4060: function (e, r, t) {
      'use strict'
      t.d(r, {
        r: function () {
          return i
        },
      })
      var a = t(828),
        n = [
          /(iphone os|ipad os) ([^);]+)/i,
          /(mac) os x ([^);]+)/i,
          /(windows) ([^);]+)/i,
          /(android) ([^);]+)/i,
          /(cros) ([^);]+)/i,
          /(linux) ([^);]+)/i,
        ],
        o = [
          /(firefox)\/([^\s)]+)/i,
          /(edge)\/([^\s)]+)/i,
          /(chrome)\/([^\s)]+)/i,
          /(safari)\/([^\s)]+)/i,
          /ms(ie)\/([^\s)]+)/i,
        ]
      function i() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : navigator.userAgent
        e = e.toLowerCase()
        var r = n.find(function (r) {
            return r.test(e)
          }),
          t = (0, a.Z)((r && e.match(r)) || [], 3),
          i = t[1],
          f = void 0 === i ? 'other' : i,
          d = t[2],
          g = void 0 === d ? '0' : d
        ;('iphone os' !== f && 'ipad os' !== f) || (f = 'ios')
        var c = o.find(function (r) {
            return r.test(e)
          }),
          s = (0, a.Z)((c && e.match(c)) || [], 3),
          b = s[1],
          l = void 0 === b ? 'other' : b,
          u = s[2],
          h = void 0 === u ? '0' : u
        return { os: f, os_version: g, browser: l, browser_version: h }
      }
    },
    6029: function (e, r, t) {
      'use strict'
      var a = t(9658).Z,
        n = t(7222).Z,
        o = t(7788).Z,
        i = t(2648).Z,
        f = t(7735).Z,
        d = i(t(4051))
      r.default = void 0
      var g = t(932).Z,
        c = (0, t(2648).Z)(t(7294)),
        s = t(3794)
      function b(e) {
        return l.apply(this, arguments)
      }
      function l() {
        return (l = g(
          d.default.mark(function e(r) {
            var t, a, n
            return d.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = r.Component),
                      (a = r.ctx),
                      (e.next = 3),
                      s.loadGetInitialProps(t, a)
                    )
                  case 3:
                    return (n = e.sent), e.abrupt('return', { pageProps: n })
                  case 5:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      var u = (function (e) {
        o(t, e)
        var r = f(t)
        function t() {
          return a(this, t), r.apply(this, arguments)
        }
        return (
          n(t, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  r = e.Component,
                  t = e.pageProps
                return c.default.createElement(r, Object.assign({}, t))
              },
            },
          ]),
          t
        )
      })(c.default.Component)
      ;(u.origGetInitialProps = b), (u.getInitialProps = b), (r.default = u)
    },
    1651: function (e, r, t) {
      'use strict'
      t.r(r),
        t.d(r, {
          default: function () {
            return j
          },
        })
      var a = t(7568),
        n = t(6042),
        o = t(9396),
        i = t(828),
        f = t(4051),
        d = t.n(f),
        g = t(5893),
        c = t(7294),
        s = t(7544),
        b = t(9008),
        l = t.n(b),
        u = t(8831),
        h = t(8386),
        p = (t(3052), t(2208)),
        m = (t(4269), !1)
      var v,
        x,
        B,
        y = t(5770),
        w = t(4924),
        k = t(1955)
      !(function (e) {
        ;(e.auto = 'auto'), (e.light = 'light'), (e.dark = 'dark')
      })(v || (v = {})),
        (function (e) {
          ;(e.auto = 'auto'), (e.day = 'day'), (e.night = 'night')
        })(x || (x = {})),
        (function (e) {
          ;(e.light = 'light'),
            (e.dark = 'dark'),
            (e.dark_dimmed = 'dark_dimmed'),
            (e.dark_high_contrast = 'dark_high_contrast')
        })(B || (B = {}))
      var T,
        S = { colorMode: v.auto, lightTheme: B.light, darkTheme: B.dark },
        C = { colorMode: x.auto, dayScheme: B.light, nightScheme: B.dark },
        I =
          ((T = {}),
          (0, w.Z)(T, v.auto, x.auto),
          (0, w.Z)(T, v.light, x.day),
          (0, w.Z)(T, v.dark, x.night),
          T)
      function A() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
        if (Object.values(v).includes(e)) return e
      }
      function E() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = e.name,
          t = void 0 === r ? '' : r,
          a = e.color_mode,
          n = void 0 === a ? '' : a
        return Object.values(B).includes(t)
          ? t
          : Object.values(B).includes(n)
          ? n
          : void 0
      }
      function O() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
        if (!e) return S
        try {
          var r = JSON.parse(e),
            t = r.color_mode,
            a = r.light_theme,
            n = r.dark_theme
          return {
            colorMode: A(t) || S.colorMode,
            lightTheme: E(a) || S.lightTheme,
            darkTheme: E(n) || S.darkTheme,
          }
        } catch (o) {
          return S
        }
      }
      function P() {
        var e = (0, c.useState)({ css: S, component: C }),
          r = e[0],
          t = e[1]
        return (
          (0, c.useEffect)(function () {
            var e = k.Z.get('color_mode'),
              r = O(e),
              a = (function () {
                var e = O(
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ''
                  ),
                  r = e.colorMode,
                  t = e.lightTheme,
                  a = e.darkTheme
                return { colorMode: I[r], dayScheme: t, nightScheme: a }
              })(e)
            t({ css: r, component: a })
          }, []),
          { theme: r }
        )
      }
      var _ = function (e) {
        var r = e.Component,
          t = e.pageProps,
          a = e.languagesContext,
          o = P().theme
        return (
          (0, c.useEffect)(function () {
            ;(0, p.WA)(), m || (m = !0)
          }, []),
          (0, c.useEffect)(
            function () {
              var e = document.querySelector('body')
              e &&
                ((e.dataset.colorMode = o.css.colorMode),
                (e.dataset.darkTheme = o.css.darkTheme),
                (e.dataset.lightTheme = o.css.lightTheme))
            },
            [o]
          ),
          (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsxs)(l(), {
                children: [
                  (0, g.jsx)('meta', { charSet: 'utf-8' }),
                  (0, g.jsx)('title', { children: 'GitHub Docs' }),
                  (0, g.jsx)('meta', {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                  }),
                  (0, g.jsx)('link', {
                    rel: 'alternate icon',
                    type: 'image/png',
                    href: '/assets/cb-600/images/site/favicon.png',
                  }),
                  (0, g.jsx)('link', {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/assets/cb-803/images/site/favicon.svg',
                  }),
                  (0, g.jsx)('meta', {
                    name: 'google-site-verification',
                    content: 'OgdQc0GZfjDI52wDv1bkMT-SLpBUo_h5nn9mI9L22xQ',
                  }),
                  (0, g.jsx)('meta', {
                    name: 'google-site-verification',
                    content: 'c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY',
                  }),
                ],
              }),
              (0, g.jsx)(u.HK, {
                children: (0, g.jsx)(h.ZP, {
                  colorMode: o.component.colorMode,
                  dayScheme: o.component.dayScheme,
                  nightScheme: o.component.nightScheme,
                  preventSSRMismatch: !0,
                  children: (0, g.jsx)(y.m.Provider, {
                    value: a,
                    children: (0, g.jsx)(r, (0, n.Z)({}, t)),
                  }),
                }),
              }),
            ],
          })
        )
      }
      _.getInitialProps = (function () {
        var e = (0, a.Z)(
          d().mark(function e(r) {
            var t, a, f, g, c, b, l, u, h, p, m, v
            return d().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = r.ctx), (e.next = 3), s.default.getInitialProps(r)
                      )
                    case 3:
                      if (
                        ((a = e.sent),
                        (f = t.req),
                        (g = { languages: {} }),
                        !f.context.languages)
                      ) {
                        e.next = 33
                        break
                      }
                      ;(c = !0),
                        (b = !1),
                        (l = void 0),
                        (e.prev = 8),
                        (u = Object.entries(f.context.languages)[
                          Symbol.iterator
                        ]())
                    case 10:
                      if ((c = (h = u.next()).done)) {
                        e.next = 19
                        break
                      }
                      if (
                        ((p = (0, i.Z)(h.value, 2)),
                        (m = p[0]),
                        !(v = p[1]).wip)
                      ) {
                        e.next = 14
                        break
                      }
                      return e.abrupt('continue', 16)
                    case 14:
                      ;(g.languages[m] = { name: v.name, code: v.code }),
                        v.nativeName &&
                          (g.languages[m].nativeName = v.nativeName)
                    case 16:
                      ;(c = !0), (e.next = 10)
                      break
                    case 19:
                      e.next = 25
                      break
                    case 21:
                      ;(e.prev = 21), (e.t0 = e.catch(8)), (b = !0), (l = e.t0)
                    case 25:
                      ;(e.prev = 25),
                        (e.prev = 26),
                        c || null == u.return || u.return()
                    case 28:
                      if (((e.prev = 28), !b)) {
                        e.next = 31
                        break
                      }
                      throw l
                    case 31:
                      return e.finish(28)
                    case 32:
                      return e.finish(25)
                    case 33:
                      return e.abrupt(
                        'return',
                        (0, o.Z)((0, n.Z)({}, a), { languagesContext: g })
                      )
                    case 34:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [
                [8, 21, 25, 33],
                [26, , 28, 32],
              ]
            )
          })
        )
        return function (r) {
          return e.apply(this, arguments)
        }
      })()
      var j = _
    },
    2208: function (e, r, t) {
      'use strict'
      t.d(r, {
        WA: function () {
          return E
        },
        qP: function () {
          return k
        },
        tw: function () {
          return o
        },
      })
      var a,
        n,
        o,
        i = t(6042),
        f = t(9396),
        d = t(9534),
        g = t(1955),
        c = t(4060),
        s = '_docs-events',
        b = Date.now(),
        l = !1,
        u = !1,
        h = !1,
        p = 0,
        m = 1,
        v = 0,
        x = 0,
        B = new Set()
      function y() {
        try {
          return crypto.randomUUID()
        } catch (e) {
          return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
            /[018]/g,
            function (e) {
              return (
                e ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))
              ).toString(16)
            }
          )
        }
      }
      function w(e) {
        var r = document.querySelector('meta[name="'.concat(e, '"]'))
        return null === r || void 0 === r ? void 0 : r.content
      }
      function k(e) {
        var r = e.type,
          t = e.version,
          o = void 0 === t ? '1.0.0' : t,
          b = (0, d.Z)(e, ['type', 'version']),
          l = (0, i.Z)(
            {
              type: r,
              context: (0, f.Z)(
                (0, i.Z)(
                  {
                    event_id: y(),
                    user:
                      a ||
                      ((a = g.Z.get(s)) ||
                        ((a = y()),
                        g.Z.set(s, a, {
                          secure: 'http:' !== document.location.protocol,
                          sameSite: 'strict',
                          expires: 365,
                        })),
                      a),
                    version: o,
                    created: new Date().toISOString(),
                    page_event_id: n,
                    path: location.pathname,
                    hostname: location.hostname,
                    referrer: document.referrer,
                    search: location.search,
                    href: location.href,
                    path_language: w('path-language'),
                    path_version: w('path-version'),
                    path_product: w('path-product'),
                    path_article: w('path-article'),
                    page_document_type: w('page-document-type'),
                    page_type: w('page-type'),
                    status: Number(w('status') || 0),
                  },
                  (0, c.r)()
                ),
                {
                  viewport_width: document.documentElement.clientWidth,
                  viewport_height: document.documentElement.clientHeight,
                  timezone: new Date().getTimezoneOffset() / -60,
                  user_language: navigator.language,
                  application_preference: g.Z.get('toolPreferred'),
                  color_mode_preference: T(),
                  os_preference: g.Z.get('osPreferred'),
                }
              ),
            },
            b
          ),
          u = new Blob([JSON.stringify(l)], { type: 'application/json' }),
          h = '/api/events'
        try {
          null === navigator ||
            void 0 === navigator ||
            navigator.sendBeacon(h, u)
        } catch (p) {
          console.warn("sendBeacon to '".concat(h, "' failed."))
        }
        return l
      }
      function T() {
        var e,
          r =
            null === (e = document.querySelector('body')) || void 0 === e
              ? void 0
              : e.dataset.colorMode
        return (
          'auto' === r &&
            (window.matchMedia('(prefers-color-scheme: light)').matches
              ? (r += ':light')
              : window.matchMedia('(prefers-color-scheme: dark)').matches &&
                (r += ':dark')),
          r
        )
      }
      function S() {
        if (!h) {
          ;(h = !0),
            setTimeout(function () {
              h = !1
            }, 200)
          var e =
              (window.scrollY + window.innerHeight) /
              document.documentElement.scrollHeight,
            r = Math.sign(e - p)
          r !== m && v++, e > x && (x = e), (m = r), (p = e)
        }
      }
      function C() {
        var e,
          r = k({ type: o.page })
        n =
          null === r || void 0 === r || null === (e = r.context) || void 0 === e
            ? void 0
            : e.event_id
      }
      function I() {
        if (!u) {
          u = !0
          var e = (function () {
              var e,
                r,
                t =
                  null ===
                    (e =
                      null === performance || void 0 === performance
                        ? void 0
                        : performance.getEntriesByType('paint')) || void 0 === e
                    ? void 0
                    : e.find(function (e) {
                        return 'first-contentful-paint' === e.name
                      }),
                a =
                  null ===
                    (r =
                      null === performance || void 0 === performance
                        ? void 0
                        : performance.getEntriesByType('navigation')) ||
                  void 0 === r
                    ? void 0
                    : r[0]
              return {
                firstContentfulPaint: t ? t.startTime / 1e3 : void 0,
                domInteractive: a ? a.domInteractive / 1e3 : void 0,
                domComplete: a ? a.domComplete / 1e3 : void 0,
                render: a ? (a.responseEnd - a.requestStart) / 1e3 : void 0,
              }
            })(),
            r = e.render,
            t = e.firstContentfulPaint,
            a = e.domInteractive,
            n = e.domComplete
          return k({
            type: o.exit,
            exit_render_duration: r,
            exit_first_paint: t,
            exit_dom_interactive: a,
            exit_dom_complete: n,
            exit_visit_duration: (Date.now() - b) / 1e3,
            exit_scroll_length: x,
            exit_scroll_flip: v,
          })
        }
      }
      function A() {
        C(),
          window.addEventListener('scroll', S),
          document.addEventListener('visibilitychange', function () {
            'hidden' === document.visibilityState && I()
          })
        var e = history.pushState
        history.pushState = function (r, t, a) {
          var n =
            (null === a || void 0 === a
              ? void 0
              : a.toString().replace(location.origin, '').split('?')[0]) !==
            location.pathname
          n && I()
          var o = e.call(history, r, t, a)
          return (
            n &&
              (C(),
              (u = !1),
              (h = !1),
              (p = 0),
              (m = 1),
              (v = 0),
              (x = 0),
              (B = new Set())),
            o
          )
        }
      }
      function E() {
        l ||
          ((l = !0),
          A(),
          document.documentElement.addEventListener('click', function (e) {
            var r = e.target.closest('a[href]')
            if (r) {
              var t = r.origin === location.origin
              k({ type: o.link, link_url: r.href, link_samesite: t })
            }
          }),
          document.documentElement.addEventListener('mouseover', function (e) {
            var r = e.target.closest('a[href]')
            if (r && !B.has(r.href)) {
              var t = r.origin === location.origin
              B.add(r.href),
                k({ type: o.hover, hover_url: r.href, hover_samesite: t })
            }
          }),
          ['copy', 'cut', 'paste'].forEach(function (e) {
            document.documentElement.addEventListener(e, function () {
              k({ type: o.clipboard, clipboard_operation: e })
            })
          }),
          document.documentElement.addEventListener('click', function (e) {
            e.target.closest('.js-btn-copy') &&
              k({ type: o.navigate, navigate_label: 'copy icon button' })
          }),
          window.addEventListener('beforeprint', function () {
            k({ type: o.print })
          }))
      }
      !(function (e) {
        ;(e.page = 'page'),
          (e.exit = 'exit'),
          (e.link = 'link'),
          (e.hover = 'hover'),
          (e.search = 'search'),
          (e.searchResult = 'searchResult'),
          (e.navigate = 'navigate'),
          (e.survey = 'survey'),
          (e.experiment = 'experiment'),
          (e.preference = 'preference'),
          (e.clipboard = 'clipboard'),
          (e.print = 'print')
      })(o || (o = {}))
    },
    3052: function () {},
    7663: function (e) {
      !(function () {
        var r = {
            308: function (e) {
              var r,
                t,
                a = (e.exports = {})
              function n() {
                throw new Error('setTimeout has not been defined')
              }
              function o() {
                throw new Error('clearTimeout has not been defined')
              }
              function i(e) {
                if (r === setTimeout) return setTimeout(e, 0)
                if ((r === n || !r) && setTimeout)
                  return (r = setTimeout), setTimeout(e, 0)
                try {
                  return r(e, 0)
                } catch (a) {
                  try {
                    return r.call(null, e, 0)
                  } catch (a) {
                    return r.call(this, e, 0)
                  }
                }
              }
              !(function () {
                try {
                  r = 'function' === typeof setTimeout ? setTimeout : n
                } catch (e) {
                  r = n
                }
                try {
                  t = 'function' === typeof clearTimeout ? clearTimeout : o
                } catch (e) {
                  t = o
                }
              })()
              var f,
                d = [],
                g = !1,
                c = -1
              function s() {
                g &&
                  f &&
                  ((g = !1),
                  f.length ? (d = f.concat(d)) : (c = -1),
                  d.length && b())
              }
              function b() {
                if (!g) {
                  var e = i(s)
                  g = !0
                  for (var r = d.length; r; ) {
                    for (f = d, d = []; ++c < r; ) f && f[c].run()
                    ;(c = -1), (r = d.length)
                  }
                  ;(f = null),
                    (g = !1),
                    (function (e) {
                      if (t === clearTimeout) return clearTimeout(e)
                      if ((t === o || !t) && clearTimeout)
                        return (t = clearTimeout), clearTimeout(e)
                      try {
                        t(e)
                      } catch (r) {
                        try {
                          return t.call(null, e)
                        } catch (r) {
                          return t.call(this, e)
                        }
                      }
                    })(e)
                }
              }
              function l(e, r) {
                ;(this.fun = e), (this.array = r)
              }
              function u() {}
              ;(a.nextTick = function (e) {
                var r = new Array(arguments.length - 1)
                if (arguments.length > 1)
                  for (var t = 1; t < arguments.length; t++)
                    r[t - 1] = arguments[t]
                d.push(new l(e, r)), 1 !== d.length || g || i(b)
              }),
                (l.prototype.run = function () {
                  this.fun.apply(null, this.array)
                }),
                (a.title = 'browser'),
                (a.browser = !0),
                (a.env = {}),
                (a.argv = []),
                (a.version = ''),
                (a.versions = {}),
                (a.on = u),
                (a.addListener = u),
                (a.once = u),
                (a.off = u),
                (a.removeListener = u),
                (a.removeAllListeners = u),
                (a.emit = u),
                (a.prependListener = u),
                (a.prependOnceListener = u),
                (a.listeners = function (e) {
                  return []
                }),
                (a.binding = function (e) {
                  throw new Error('process.binding is not supported')
                }),
                (a.cwd = function () {
                  return '/'
                }),
                (a.chdir = function (e) {
                  throw new Error('process.chdir is not supported')
                }),
                (a.umask = function () {
                  return 0
                })
            },
          },
          t = {}
        function a(e) {
          var n = t[e]
          if (void 0 !== n) return n.exports
          var o = (t[e] = { exports: {} }),
            i = !0
          try {
            r[e](o, o.exports, a), (i = !1)
          } finally {
            i && delete t[e]
          }
          return o.exports
        }
        a.ab = '//'
        var n = a(308)
        e.exports = n
      })()
    },
    9008: function (e, r, t) {
      e.exports = t(5443)
    },
    9921: function (e, r) {
      'use strict'
      var t = 60103,
        a = 60106,
        n = 60107,
        o = 60108,
        i = 60114,
        f = 60109,
        d = 60110,
        g = 60112,
        c = 60113,
        s = 60120,
        b = 60115,
        l = 60116,
        u = 60121,
        h = 60122,
        p = 60117,
        m = 60129,
        v = 60131
      if ('function' === typeof Symbol && Symbol.for) {
        var x = Symbol.for
        ;(t = x('react.element')),
          (a = x('react.portal')),
          (n = x('react.fragment')),
          (o = x('react.strict_mode')),
          (i = x('react.profiler')),
          (f = x('react.provider')),
          (d = x('react.context')),
          (g = x('react.forward_ref')),
          (c = x('react.suspense')),
          (s = x('react.suspense_list')),
          (b = x('react.memo')),
          (l = x('react.lazy')),
          (u = x('react.block')),
          (h = x('react.server.block')),
          (p = x('react.fundamental')),
          (m = x('react.debug_trace_mode')),
          (v = x('react.legacy_hidden'))
      }
      function B(e) {
        if ('object' === typeof e && null !== e) {
          var r = e.$$typeof
          switch (r) {
            case t:
              switch ((e = e.type)) {
                case n:
                case i:
                case o:
                case c:
                case s:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case d:
                    case g:
                    case l:
                    case b:
                    case f:
                      return e
                    default:
                      return r
                  }
              }
            case a:
              return r
          }
        }
      }
      ;(r.isValidElementType = function (e) {
        return (
          'string' === typeof e ||
          'function' === typeof e ||
          e === n ||
          e === i ||
          e === m ||
          e === o ||
          e === c ||
          e === s ||
          e === v ||
          ('object' === typeof e &&
            null !== e &&
            (e.$$typeof === l ||
              e.$$typeof === b ||
              e.$$typeof === f ||
              e.$$typeof === d ||
              e.$$typeof === g ||
              e.$$typeof === p ||
              e.$$typeof === u ||
              e[0] === h))
        )
      }),
        (r.typeOf = B)
    },
    9864: function (e, r, t) {
      'use strict'
      e.exports = t(9921)
    },
    6774: function (e) {
      e.exports = function (e, r, t, a) {
        var n = t ? t.call(a, e, r) : void 0
        if (void 0 !== n) return !!n
        if (e === r) return !0
        if ('object' !== typeof e || !e || 'object' !== typeof r || !r)
          return !1
        var o = Object.keys(e),
          i = Object.keys(r)
        if (o.length !== i.length) return !1
        for (
          var f = Object.prototype.hasOwnProperty.bind(r), d = 0;
          d < o.length;
          d++
        ) {
          var g = o[d]
          if (!f(g)) return !1
          var c = e[g],
            s = r[g]
          if (
            !1 === (n = t ? t.call(a, c, s, g) : void 0) ||
            (void 0 === n && c !== s)
          )
            return !1
        }
        return !0
      }
    },
    2125: function (e, r, t) {
      'use strict'
      t.d(r, {
        f6: function () {
          return Oe
        },
        iv: function () {
          return ve
        },
        ZP: function () {
          return He
        },
        F4: function () {
          return Me
        },
      })
      var a = t(9864),
        n = t(7294),
        o = t(6774),
        i = t.n(o)
      var f = function (e) {
          function r(e, a, d, g, b) {
            for (
              var l,
                u,
                h,
                p,
                B,
                w = 0,
                k = 0,
                T = 0,
                S = 0,
                C = 0,
                _ = 0,
                M = (h = l = 0),
                D = 0,
                R = 0,
                F = 0,
                L = 0,
                N = d.length,
                $ = N - 1,
                W = '',
                Z = '',
                z = '',
                U = '';
              D < N;

            ) {
              if (
                ((u = d.charCodeAt(D)),
                D === $ &&
                  0 !== k + S + T + w &&
                  (0 !== k && (u = 47 === k ? 10 : 47),
                  (S = T = w = 0),
                  N++,
                  $++),
                0 === k + S + T + w)
              ) {
                if (
                  D === $ &&
                  (0 < R && (W = W.replace(s, '')), 0 < W.trim().length)
                ) {
                  switch (u) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break
                    default:
                      W += d.charAt(D)
                  }
                  u = 59
                }
                switch (u) {
                  case 123:
                    for (
                      l = (W = W.trim()).charCodeAt(0), h = 1, L = ++D;
                      D < N;

                    ) {
                      switch ((u = d.charCodeAt(D))) {
                        case 123:
                          h++
                          break
                        case 125:
                          h--
                          break
                        case 47:
                          switch ((u = d.charCodeAt(D + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (M = D + 1; M < $; ++M)
                                  switch (d.charCodeAt(M)) {
                                    case 47:
                                      if (
                                        42 === u &&
                                        42 === d.charCodeAt(M - 1) &&
                                        D + 2 !== M
                                      ) {
                                        D = M + 1
                                        break e
                                      }
                                      break
                                    case 10:
                                      if (47 === u) {
                                        D = M + 1
                                        break e
                                      }
                                  }
                                D = M
                              }
                          }
                          break
                        case 91:
                          u++
                        case 40:
                          u++
                        case 34:
                        case 39:
                          for (; D++ < $ && d.charCodeAt(D) !== u; );
                      }
                      if (0 === h) break
                      D++
                    }
                    if (
                      ((h = d.substring(L, D)),
                      0 === l &&
                        (l = (W = W.replace(c, '').trim()).charCodeAt(0)),
                      64 === l)
                    ) {
                      switch (
                        (0 < R && (W = W.replace(s, '')), (u = W.charCodeAt(1)))
                      ) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          R = a
                          break
                        default:
                          R = P
                      }
                      if (
                        ((L = (h = r(a, R, h, u, b + 1)).length),
                        0 < j &&
                          ((B = f(3, h, (R = t(P, W, F)), a, A, I, L, u, b, g)),
                          (W = R.join('')),
                          void 0 !== B &&
                            0 === (L = (h = B.trim()).length) &&
                            ((u = 0), (h = ''))),
                        0 < L)
                      )
                        switch (u) {
                          case 115:
                            W = W.replace(y, i)
                          case 100:
                          case 109:
                          case 45:
                            h = W + '{' + h + '}'
                            break
                          case 107:
                            ;(h = (W = W.replace(m, '$1 $2')) + '{' + h + '}'),
                              (h =
                                1 === O || (2 === O && o('@' + h, 3))
                                  ? '@-webkit-' + h + '@' + h
                                  : '@' + h)
                            break
                          default:
                            ;(h = W + h), 112 === g && ((Z += h), (h = ''))
                        }
                      else h = ''
                    } else h = r(a, t(a, W, F), h, g, b + 1)
                    ;(z += h),
                      (h = F = R = M = l = 0),
                      (W = ''),
                      (u = d.charCodeAt(++D))
                    break
                  case 125:
                  case 59:
                    if (
                      1 <
                      (L = (W = (0 < R ? W.replace(s, '') : W).trim()).length)
                    )
                      switch (
                        (0 === M &&
                          ((l = W.charCodeAt(0)),
                          45 === l || (96 < l && 123 > l)) &&
                          (L = (W = W.replace(' ', ':')).length),
                        0 < j &&
                          void 0 !==
                            (B = f(1, W, a, e, A, I, Z.length, g, b, g)) &&
                          0 === (L = (W = B.trim()).length) &&
                          (W = '\0\0'),
                        (l = W.charCodeAt(0)),
                        (u = W.charCodeAt(1)),
                        l)
                      ) {
                        case 0:
                          break
                        case 64:
                          if (105 === u || 99 === u) {
                            U += W + d.charAt(D)
                            break
                          }
                        default:
                          58 !== W.charCodeAt(L - 1) &&
                            (Z += n(W, l, u, W.charCodeAt(2)))
                      }
                    ;(F = R = M = l = 0), (W = ''), (u = d.charCodeAt(++D))
                }
              }
              switch (u) {
                case 13:
                case 10:
                  47 === k
                    ? (k = 0)
                    : 0 === 1 + l &&
                      107 !== g &&
                      0 < W.length &&
                      ((R = 1), (W += '\0')),
                    0 < j * H && f(0, W, a, e, A, I, Z.length, g, b, g),
                    (I = 1),
                    A++
                  break
                case 59:
                case 125:
                  if (0 === k + S + T + w) {
                    I++
                    break
                  }
                default:
                  switch ((I++, (p = d.charAt(D)), u)) {
                    case 9:
                    case 32:
                      if (0 === S + w + k)
                        switch (C) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            p = ''
                            break
                          default:
                            32 !== u && (p = ' ')
                        }
                      break
                    case 0:
                      p = '\\0'
                      break
                    case 12:
                      p = '\\f'
                      break
                    case 11:
                      p = '\\v'
                      break
                    case 38:
                      0 === S + k + w && ((R = F = 1), (p = '\f' + p))
                      break
                    case 108:
                      if (0 === S + k + w + E && 0 < M)
                        switch (D - M) {
                          case 2:
                            112 === C && 58 === d.charCodeAt(D - 3) && (E = C)
                          case 8:
                            111 === _ && (E = _)
                        }
                      break
                    case 58:
                      0 === S + k + w && (M = D)
                      break
                    case 44:
                      0 === k + T + S + w && ((R = 1), (p += '\r'))
                      break
                    case 34:
                    case 39:
                      0 === k && (S = S === u ? 0 : 0 === S ? u : S)
                      break
                    case 91:
                      0 === S + k + T && w++
                      break
                    case 93:
                      0 === S + k + T && w--
                      break
                    case 41:
                      0 === S + k + w && T--
                      break
                    case 40:
                      if (0 === S + k + w) {
                        if (0 === l)
                          if (2 * C + 3 * _ === 533);
                          else l = 1
                        T++
                      }
                      break
                    case 64:
                      0 === k + T + S + w + M + h && (h = 1)
                      break
                    case 42:
                    case 47:
                      if (!(0 < S + w + T))
                        switch (k) {
                          case 0:
                            switch (2 * u + 3 * d.charCodeAt(D + 1)) {
                              case 235:
                                k = 47
                                break
                              case 220:
                                ;(L = D), (k = 42)
                            }
                            break
                          case 42:
                            47 === u &&
                              42 === C &&
                              L + 2 !== D &&
                              (33 === d.charCodeAt(L + 2) &&
                                (Z += d.substring(L, D + 1)),
                              (p = ''),
                              (k = 0))
                        }
                  }
                  0 === k && (W += p)
              }
              ;(_ = C), (C = u), D++
            }
            if (0 < (L = Z.length)) {
              if (
                ((R = a),
                0 < j &&
                  void 0 !== (B = f(2, Z, R, e, A, I, L, g, b, g)) &&
                  0 === (Z = B).length)
              )
                return U + Z + z
              if (((Z = R.join(',') + '{' + Z + '}'), 0 !== O * E)) {
                switch ((2 !== O || o(Z, 2) || (E = 0), E)) {
                  case 111:
                    Z = Z.replace(x, ':-moz-$1') + Z
                    break
                  case 112:
                    Z =
                      Z.replace(v, '::-webkit-input-$1') +
                      Z.replace(v, '::-moz-$1') +
                      Z.replace(v, ':-ms-input-$1') +
                      Z
                }
                E = 0
              }
            }
            return U + Z + z
          }
          function t(e, r, t) {
            var n = r.trim().split(h)
            r = n
            var o = n.length,
              i = e.length
            switch (i) {
              case 0:
              case 1:
                var f = 0
                for (e = 0 === i ? '' : e[0] + ' '; f < o; ++f)
                  r[f] = a(e, r[f], t).trim()
                break
              default:
                var d = (f = 0)
                for (r = []; f < o; ++f)
                  for (var g = 0; g < i; ++g)
                    r[d++] = a(e[g] + ' ', n[f], t).trim()
            }
            return r
          }
          function a(e, r, t) {
            var a = r.charCodeAt(0)
            switch ((33 > a && (a = (r = r.trim()).charCodeAt(0)), a)) {
              case 38:
                return r.replace(p, '$1' + e.trim())
              case 58:
                return e.trim() + r.replace(p, '$1' + e.trim())
              default:
                if (0 < 1 * t && 0 < r.indexOf('\f'))
                  return r.replace(
                    p,
                    (58 === e.charCodeAt(0) ? '' : '$1') + e.trim()
                  )
            }
            return e + r
          }
          function n(e, r, t, a) {
            var i = e + ';',
              f = 2 * r + 3 * t + 4 * a
            if (944 === f) {
              e = i.indexOf(':', 9) + 1
              var d = i.substring(e, i.length - 1).trim()
              return (
                (d = i.substring(0, e).trim() + d + ';'),
                1 === O || (2 === O && o(d, 1)) ? '-webkit-' + d + d : d
              )
            }
            if (0 === O || (2 === O && !o(i, 1))) return i
            switch (f) {
              case 1015:
                return 97 === i.charCodeAt(10) ? '-webkit-' + i + i : i
              case 951:
                return 116 === i.charCodeAt(3) ? '-webkit-' + i + i : i
              case 963:
                return 110 === i.charCodeAt(5) ? '-webkit-' + i + i : i
              case 1009:
                if (100 !== i.charCodeAt(4)) break
              case 969:
              case 942:
                return '-webkit-' + i + i
              case 978:
                return '-webkit-' + i + '-moz-' + i + i
              case 1019:
              case 983:
                return '-webkit-' + i + '-moz-' + i + '-ms-' + i + i
              case 883:
                if (45 === i.charCodeAt(8)) return '-webkit-' + i + i
                if (0 < i.indexOf('image-set(', 11))
                  return i.replace(C, '$1-webkit-$2') + i
                break
              case 932:
                if (45 === i.charCodeAt(4))
                  switch (i.charCodeAt(5)) {
                    case 103:
                      return (
                        '-webkit-box-' +
                        i.replace('-grow', '') +
                        '-webkit-' +
                        i +
                        '-ms-' +
                        i.replace('grow', 'positive') +
                        i
                      )
                    case 115:
                      return (
                        '-webkit-' +
                        i +
                        '-ms-' +
                        i.replace('shrink', 'negative') +
                        i
                      )
                    case 98:
                      return (
                        '-webkit-' +
                        i +
                        '-ms-' +
                        i.replace('basis', 'preferred-size') +
                        i
                      )
                  }
                return '-webkit-' + i + '-ms-' + i + i
              case 964:
                return '-webkit-' + i + '-ms-flex-' + i + i
              case 1023:
                if (99 !== i.charCodeAt(8)) break
                return (
                  '-webkit-box-pack' +
                  (d = i
                    .substring(i.indexOf(':', 15))
                    .replace('flex-', '')
                    .replace('space-between', 'justify')) +
                  '-webkit-' +
                  i +
                  '-ms-flex-pack' +
                  d +
                  i
                )
              case 1005:
                return l.test(i)
                  ? i.replace(b, ':-webkit-') + i.replace(b, ':-moz-') + i
                  : i
              case 1e3:
                switch (
                  ((r = (d = i.substring(13).trim()).indexOf('-') + 1),
                  d.charCodeAt(0) + d.charCodeAt(r))
                ) {
                  case 226:
                    d = i.replace(B, 'tb')
                    break
                  case 232:
                    d = i.replace(B, 'tb-rl')
                    break
                  case 220:
                    d = i.replace(B, 'lr')
                    break
                  default:
                    return i
                }
                return '-webkit-' + i + '-ms-' + d + i
              case 1017:
                if (-1 === i.indexOf('sticky', 9)) break
              case 975:
                switch (
                  ((r = (i = e).length - 10),
                  (f =
                    (d = (33 === i.charCodeAt(r) ? i.substring(0, r) : i)
                      .substring(e.indexOf(':', 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | d.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > d.charCodeAt(8)) break
                  case 115:
                    i = i.replace(d, '-webkit-' + d) + ';' + i
                    break
                  case 207:
                  case 102:
                    i =
                      i.replace(
                        d,
                        '-webkit-' + (102 < f ? 'inline-' : '') + 'box'
                      ) +
                      ';' +
                      i.replace(d, '-webkit-' + d) +
                      ';' +
                      i.replace(d, '-ms-' + d + 'box') +
                      ';' +
                      i
                }
                return i + ';'
              case 938:
                if (45 === i.charCodeAt(5))
                  switch (i.charCodeAt(6)) {
                    case 105:
                      return (
                        (d = i.replace('-items', '')),
                        '-webkit-' +
                          i +
                          '-webkit-box-' +
                          d +
                          '-ms-flex-' +
                          d +
                          i
                      )
                    case 115:
                      return (
                        '-webkit-' + i + '-ms-flex-item-' + i.replace(k, '') + i
                      )
                    default:
                      return (
                        '-webkit-' +
                        i +
                        '-ms-flex-line-pack' +
                        i.replace('align-content', '').replace(k, '') +
                        i
                      )
                  }
                break
              case 973:
              case 989:
                if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break
              case 931:
              case 953:
                if (!0 === S.test(e))
                  return 115 ===
                    (d = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
                    ? n(
                        e.replace('stretch', 'fill-available'),
                        r,
                        t,
                        a
                      ).replace(':fill-available', ':stretch')
                    : i.replace(d, '-webkit-' + d) +
                        i.replace(d, '-moz-' + d.replace('fill-', '')) +
                        i
                break
              case 962:
                if (
                  ((i =
                    '-webkit-' +
                    i +
                    (102 === i.charCodeAt(5) ? '-ms-' + i : '') +
                    i),
                  211 === t + a &&
                    105 === i.charCodeAt(13) &&
                    0 < i.indexOf('transform', 10))
                )
                  return (
                    i
                      .substring(0, i.indexOf(';', 27) + 1)
                      .replace(u, '$1-webkit-$2') + i
                  )
            }
            return i
          }
          function o(e, r) {
            var t = e.indexOf(1 === r ? ':' : '{'),
              a = e.substring(0, 3 !== r ? t : 10)
            return (
              (t = e.substring(t + 1, e.length - 1)),
              M(2 !== r ? a : a.replace(T, '$1'), t, r)
            )
          }
          function i(e, r) {
            var t = n(r, r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2))
            return t !== r + ';'
              ? t.replace(w, ' or ($1)').substring(4)
              : '(' + r + ')'
          }
          function f(e, r, t, a, n, o, i, f, d, c) {
            for (var s, b = 0, l = r; b < j; ++b)
              switch ((s = _[b].call(g, e, l, t, a, n, o, i, f, d, c))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break
                default:
                  l = s
              }
            if (l !== r) return l
          }
          function d(e) {
            return (
              void 0 !== (e = e.prefix) &&
                ((M = null),
                e
                  ? 'function' !== typeof e
                    ? (O = 1)
                    : ((O = 2), (M = e))
                  : (O = 0)),
              d
            )
          }
          function g(e, t) {
            var a = e
            if ((33 > a.charCodeAt(0) && (a = a.trim()), (a = [a]), 0 < j)) {
              var n = f(-1, t, a, a, A, I, 0, 0, 0, 0)
              void 0 !== n && 'string' === typeof n && (t = n)
            }
            var o = r(P, a, t, 0, 0)
            return (
              0 < j &&
                void 0 !== (n = f(-2, o, a, a, A, I, o.length, 0, 0, 0)) &&
                (o = n),
              '',
              (E = 0),
              (I = A = 1),
              o
            )
          }
          var c = /^\0+/g,
            s = /[\0\r\f]/g,
            b = /: */g,
            l = /zoo|gra/,
            u = /([,: ])(transform)/g,
            h = /,\r+?/g,
            p = /([\t\r\n ])*\f?&/g,
            m = /@(k\w+)\s*(\S*)\s*/,
            v = /::(place)/g,
            x = /:(read-only)/g,
            B = /[svh]\w+-[tblr]{2}/,
            y = /\(\s*(.*)\s*\)/g,
            w = /([\s\S]*?);/g,
            k = /-self|flex-/g,
            T = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            S = /stretch|:\s*\w+\-(?:conte|avail)/,
            C = /([^-])(image-set\()/,
            I = 1,
            A = 1,
            E = 0,
            O = 1,
            P = [],
            _ = [],
            j = 0,
            M = null,
            H = 0
          return (
            (g.use = function e(r) {
              switch (r) {
                case void 0:
                case null:
                  j = _.length = 0
                  break
                default:
                  if ('function' === typeof r) _[j++] = r
                  else if ('object' === typeof r)
                    for (var t = 0, a = r.length; t < a; ++t) e(r[t])
                  else H = 0 | !!r
              }
              return e
            }),
            (g.set = d),
            void 0 !== e && d(e),
            g
          )
        },
        d = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        }
      var g =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        c = (function (e) {
          var r = Object.create(null)
          return function (t) {
            return void 0 === r[t] && (r[t] = e(t)), r[t]
          }
        })(function (e) {
          return (
            g.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          )
        }),
        s = t(8679),
        b = t.n(s),
        l = t(3454)
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r]
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
            }
            return e
          }).apply(this, arguments)
      }
      var h = function (e, r) {
          for (var t = [e[0]], a = 0, n = r.length; a < n; a += 1)
            t.push(r[a], e[a + 1])
          return t
        },
        p = function (e) {
          return (
            null !== e &&
            'object' == typeof e &&
            '[object Object]' ===
              (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
            !(0, a.typeOf)(e)
          )
        },
        m = Object.freeze([]),
        v = Object.freeze({})
      function x(e) {
        return 'function' == typeof e
      }
      function B(e) {
        return e.displayName || e.name || 'Component'
      }
      function y(e) {
        return e && 'string' == typeof e.styledComponentId
      }
      var w =
          ('undefined' != typeof l &&
            (l.env.REACT_APP_SC_ATTR || l.env.SC_ATTR)) ||
          'data-styled',
        k = 'undefined' != typeof window && 'HTMLElement' in window,
        T = Boolean(
          'boolean' == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : 'undefined' != typeof l &&
              void 0 !== l.env.REACT_APP_SC_DISABLE_SPEEDY &&
              '' !== l.env.REACT_APP_SC_DISABLE_SPEEDY
            ? 'false' !== l.env.REACT_APP_SC_DISABLE_SPEEDY &&
              l.env.REACT_APP_SC_DISABLE_SPEEDY
            : 'undefined' != typeof l &&
              void 0 !== l.env.SC_DISABLE_SPEEDY &&
              '' !== l.env.SC_DISABLE_SPEEDY &&
              'false' !== l.env.SC_DISABLE_SPEEDY &&
              l.env.SC_DISABLE_SPEEDY
        )
      function S(e) {
        for (
          var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          t[a - 1] = arguments[a]
        throw new Error(
          'An error occurred. See https://git.io/JUIaE#' +
            e +
            ' for more information.' +
            (t.length > 0 ? ' Args: ' + t.join(', ') : '')
        )
      }
      var C = (function () {
          function e(e) {
            ;(this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e)
          }
          var r = e.prototype
          return (
            (r.indexOfGroup = function (e) {
              for (var r = 0, t = 0; t < e; t++) r += this.groupSizes[t]
              return r
            }),
            (r.insertRules = function (e, r) {
              if (e >= this.groupSizes.length) {
                for (var t = this.groupSizes, a = t.length, n = a; e >= n; )
                  (n <<= 1) < 0 && S(16, '' + e)
                ;(this.groupSizes = new Uint32Array(n)),
                  this.groupSizes.set(t),
                  (this.length = n)
                for (var o = a; o < n; o++) this.groupSizes[o] = 0
              }
              for (
                var i = this.indexOfGroup(e + 1), f = 0, d = r.length;
                f < d;
                f++
              )
                this.tag.insertRule(i, r[f]) && (this.groupSizes[e]++, i++)
            }),
            (r.clearGroup = function (e) {
              if (e < this.length) {
                var r = this.groupSizes[e],
                  t = this.indexOfGroup(e),
                  a = t + r
                this.groupSizes[e] = 0
                for (var n = t; n < a; n++) this.tag.deleteRule(t)
              }
            }),
            (r.getGroup = function (e) {
              var r = ''
              if (e >= this.length || 0 === this.groupSizes[e]) return r
              for (
                var t = this.groupSizes[e],
                  a = this.indexOfGroup(e),
                  n = a + t,
                  o = a;
                o < n;
                o++
              )
                r += this.tag.getRule(o) + '/*!sc*/\n'
              return r
            }),
            e
          )
        })(),
        I = new Map(),
        A = new Map(),
        E = 1,
        O = function (e) {
          if (I.has(e)) return I.get(e)
          for (; A.has(E); ) E++
          var r = E++
          return I.set(e, r), A.set(r, e), r
        },
        P = function (e) {
          return A.get(e)
        },
        _ = function (e, r) {
          r >= E && (E = r + 1), I.set(e, r), A.set(r, e)
        },
        j = 'style[' + w + '][data-styled-version="5.3.5"]',
        M = new RegExp(
          '^' + w + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
        ),
        H = function (e, r, t) {
          for (var a, n = t.split(','), o = 0, i = n.length; o < i; o++)
            (a = n[o]) && e.registerName(r, a)
        },
        D = function (e, r) {
          for (
            var t = (r.textContent || '').split('/*!sc*/\n'),
              a = [],
              n = 0,
              o = t.length;
            n < o;
            n++
          ) {
            var i = t[n].trim()
            if (i) {
              var f = i.match(M)
              if (f) {
                var d = 0 | parseInt(f[1], 10),
                  g = f[2]
                0 !== d &&
                  (_(g, d), H(e, g, f[3]), e.getTag().insertRules(d, a)),
                  (a.length = 0)
              } else a.push(i)
            }
          }
        },
        R = function () {
          return 'undefined' != typeof window &&
            void 0 !== window.__webpack_nonce__
            ? window.__webpack_nonce__
            : null
        },
        F = function (e) {
          var r = document.head,
            t = e || r,
            a = document.createElement('style'),
            n = (function (e) {
              for (var r = e.childNodes, t = r.length; t >= 0; t--) {
                var a = r[t]
                if (a && 1 === a.nodeType && a.hasAttribute(w)) return a
              }
            })(t),
            o = void 0 !== n ? n.nextSibling : null
          a.setAttribute(w, 'active'),
            a.setAttribute('data-styled-version', '5.3.5')
          var i = R()
          return i && a.setAttribute('nonce', i), t.insertBefore(a, o), a
        },
        L = (function () {
          function e(e) {
            var r = (this.element = F(e))
            r.appendChild(document.createTextNode('')),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet
                for (
                  var r = document.styleSheets, t = 0, a = r.length;
                  t < a;
                  t++
                ) {
                  var n = r[t]
                  if (n.ownerNode === e) return n
                }
                S(17)
              })(r)),
              (this.length = 0)
          }
          var r = e.prototype
          return (
            (r.insertRule = function (e, r) {
              try {
                return this.sheet.insertRule(r, e), this.length++, !0
              } catch (e) {
                return !1
              }
            }),
            (r.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--
            }),
            (r.getRule = function (e) {
              var r = this.sheet.cssRules[e]
              return void 0 !== r && 'string' == typeof r.cssText
                ? r.cssText
                : ''
            }),
            e
          )
        })(),
        N = (function () {
          function e(e) {
            var r = (this.element = F(e))
            ;(this.nodes = r.childNodes), (this.length = 0)
          }
          var r = e.prototype
          return (
            (r.insertRule = function (e, r) {
              if (e <= this.length && e >= 0) {
                var t = document.createTextNode(r),
                  a = this.nodes[e]
                return (
                  this.element.insertBefore(t, a || null), this.length++, !0
                )
              }
              return !1
            }),
            (r.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--
            }),
            (r.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : ''
            }),
            e
          )
        })(),
        $ = (function () {
          function e(e) {
            ;(this.rules = []), (this.length = 0)
          }
          var r = e.prototype
          return (
            (r.insertRule = function (e, r) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, r), this.length++, !0)
              )
            }),
            (r.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--
            }),
            (r.getRule = function (e) {
              return e < this.length ? this.rules[e] : ''
            }),
            e
          )
        })(),
        W = k,
        Z = { isServer: !k, useCSSOMInjection: !T },
        z = (function () {
          function e(e, r, t) {
            void 0 === e && (e = v),
              void 0 === r && (r = {}),
              (this.options = u({}, Z, {}, e)),
              (this.gs = r),
              (this.names = new Map(t)),
              (this.server = !!e.isServer),
              !this.server &&
                k &&
                W &&
                ((W = !1),
                (function (e) {
                  for (
                    var r = document.querySelectorAll(j), t = 0, a = r.length;
                    t < a;
                    t++
                  ) {
                    var n = r[t]
                    n &&
                      'active' !== n.getAttribute(w) &&
                      (D(e, n), n.parentNode && n.parentNode.removeChild(n))
                  }
                })(this))
          }
          e.registerId = function (e) {
            return O(e)
          }
          var r = e.prototype
          return (
            (r.reconstructWithOptions = function (r, t) {
              return (
                void 0 === t && (t = !0),
                new e(
                  u({}, this.options, {}, r),
                  this.gs,
                  (t && this.names) || void 0
                )
              )
            }),
            (r.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1)
            }),
            (r.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((t = (r = this.options).isServer),
                  (a = r.useCSSOMInjection),
                  (n = r.target),
                  (e = t ? new $(n) : a ? new L(n) : new N(n)),
                  new C(e)))
              )
              var e, r, t, a, n
            }),
            (r.hasNameForId = function (e, r) {
              return this.names.has(e) && this.names.get(e).has(r)
            }),
            (r.registerName = function (e, r) {
              if ((O(e), this.names.has(e))) this.names.get(e).add(r)
              else {
                var t = new Set()
                t.add(r), this.names.set(e, t)
              }
            }),
            (r.insertRules = function (e, r, t) {
              this.registerName(e, r), this.getTag().insertRules(O(e), t)
            }),
            (r.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear()
            }),
            (r.clearRules = function (e) {
              this.getTag().clearGroup(O(e)), this.clearNames(e)
            }),
            (r.clearTag = function () {
              this.tag = void 0
            }),
            (r.toString = function () {
              return (function (e) {
                for (
                  var r = e.getTag(), t = r.length, a = '', n = 0;
                  n < t;
                  n++
                ) {
                  var o = P(n)
                  if (void 0 !== o) {
                    var i = e.names.get(o),
                      f = r.getGroup(n)
                    if (i && f && i.size) {
                      var d = w + '.g' + n + '[id="' + o + '"]',
                        g = ''
                      void 0 !== i &&
                        i.forEach(function (e) {
                          e.length > 0 && (g += e + ',')
                        }),
                        (a += '' + f + d + '{content:"' + g + '"}/*!sc*/\n')
                    }
                  }
                }
                return a
              })(this)
            }),
            e
          )
        })(),
        U = /(a)(d)/gi,
        G = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97))
        }
      function K(e) {
        var r,
          t = ''
        for (r = Math.abs(e); r > 52; r = (r / 52) | 0) t = G(r % 52) + t
        return (G(r % 52) + t).replace(U, '$1-$2')
      }
      var V = function (e, r) {
          for (var t = r.length; t; ) e = (33 * e) ^ r.charCodeAt(--t)
          return e
        },
        q = function (e) {
          return V(5381, e)
        }
      function Y(e) {
        for (var r = 0; r < e.length; r += 1) {
          var t = e[r]
          if (x(t) && !y(t)) return !1
        }
        return !0
      }
      var X = q('5.3.5'),
        J = (function () {
          function e(e, r, t) {
            ;(this.rules = e),
              (this.staticRulesId = ''),
              (this.isStatic = (void 0 === t || t.isStatic) && Y(e)),
              (this.componentId = r),
              (this.baseHash = V(X, r)),
              (this.baseStyle = t),
              z.registerId(r)
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, r, t) {
              var a = this.componentId,
                n = []
              if (
                (this.baseStyle &&
                  n.push(this.baseStyle.generateAndInjectStyles(e, r, t)),
                this.isStatic && !t.hash)
              )
                if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId))
                  n.push(this.staticRulesId)
                else {
                  var o = pe(this.rules, e, r, t).join(''),
                    i = K(V(this.baseHash, o) >>> 0)
                  if (!r.hasNameForId(a, i)) {
                    var f = t(o, '.' + i, void 0, a)
                    r.insertRules(a, i, f)
                  }
                  n.push(i), (this.staticRulesId = i)
                }
              else {
                for (
                  var d = this.rules.length,
                    g = V(this.baseHash, t.hash),
                    c = '',
                    s = 0;
                  s < d;
                  s++
                ) {
                  var b = this.rules[s]
                  if ('string' == typeof b) c += b
                  else if (b) {
                    var l = pe(b, e, r, t),
                      u = Array.isArray(l) ? l.join('') : l
                    ;(g = V(g, u + s)), (c += u)
                  }
                }
                if (c) {
                  var h = K(g >>> 0)
                  if (!r.hasNameForId(a, h)) {
                    var p = t(c, '.' + h, void 0, a)
                    r.insertRules(a, h, p)
                  }
                  n.push(h)
                }
              }
              return n.join(' ')
            }),
            e
          )
        })(),
        Q = /^\s*\/\/.*$/gm,
        ee = [':', '[', '.', '#']
      function re(e) {
        var r,
          t,
          a,
          n,
          o = void 0 === e ? v : e,
          i = o.options,
          d = void 0 === i ? v : i,
          g = o.plugins,
          c = void 0 === g ? m : g,
          s = new f(d),
          b = [],
          l = (function (e) {
            function r(r) {
              if (r)
                try {
                  e(r + '}')
                } catch (e) {}
            }
            return function (t, a, n, o, i, f, d, g, c, s) {
              switch (t) {
                case 1:
                  if (0 === c && 64 === a.charCodeAt(0)) return e(a + ';'), ''
                  break
                case 2:
                  if (0 === g) return a + '/*|*/'
                  break
                case 3:
                  switch (g) {
                    case 102:
                    case 112:
                      return e(n[0] + a), ''
                    default:
                      return a + (0 === s ? '/*|*/' : '')
                  }
                case -2:
                  a.split('/*|*/}').forEach(r)
              }
            }
          })(function (e) {
            b.push(e)
          }),
          u = function (e, a, o) {
            return (0 === a && -1 !== ee.indexOf(o[t.length])) || o.match(n)
              ? e
              : '.' + r
          }
        function h(e, o, i, f) {
          void 0 === f && (f = '&')
          var d = e.replace(Q, ''),
            g = o && i ? i + ' ' + o + ' { ' + d + ' }' : d
          return (
            (r = f),
            (t = o),
            (a = new RegExp('\\' + t + '\\b', 'g')),
            (n = new RegExp('(\\' + t + '\\b){2,}')),
            s(i || !o ? '' : o, g)
          )
        }
        return (
          s.use(
            [].concat(c, [
              function (e, r, n) {
                2 === e &&
                  n.length &&
                  n[0].lastIndexOf(t) > 0 &&
                  (n[0] = n[0].replace(a, u))
              },
              l,
              function (e) {
                if (-2 === e) {
                  var r = b
                  return (b = []), r
                }
              },
            ])
          ),
          (h.hash = c.length
            ? c
                .reduce(function (e, r) {
                  return r.name || S(15), V(e, r.name)
                }, 5381)
                .toString()
            : ''),
          h
        )
      }
      var te = n.createContext(),
        ae = (te.Consumer, n.createContext()),
        ne = (ae.Consumer, new z()),
        oe = re()
      function ie() {
        return (0, n.useContext)(te) || ne
      }
      function fe() {
        return (0, n.useContext)(ae) || oe
      }
      function de(e) {
        var r = (0, n.useState)(e.stylisPlugins),
          t = r[0],
          a = r[1],
          o = ie(),
          f = (0, n.useMemo)(
            function () {
              var r = o
              return (
                e.sheet
                  ? (r = e.sheet)
                  : e.target &&
                    (r = r.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (r = r.reconstructWithOptions({ useCSSOMInjection: !1 })),
                r
              )
            },
            [e.disableCSSOMInjection, e.sheet, e.target]
          ),
          d = (0, n.useMemo)(
            function () {
              return re({
                options: { prefix: !e.disableVendorPrefixes },
                plugins: t,
              })
            },
            [e.disableVendorPrefixes, t]
          )
        return (
          (0, n.useEffect)(
            function () {
              i()(t, e.stylisPlugins) || a(e.stylisPlugins)
            },
            [e.stylisPlugins]
          ),
          n.createElement(
            te.Provider,
            { value: f },
            n.createElement(ae.Provider, { value: d }, e.children)
          )
        )
      }
      var ge = (function () {
          function e(e, r) {
            var t = this
            ;(this.inject = function (e, r) {
              void 0 === r && (r = oe)
              var a = t.name + r.hash
              e.hasNameForId(t.id, a) ||
                e.insertRules(t.id, a, r(t.rules, a, '@keyframes'))
            }),
              (this.toString = function () {
                return S(12, String(t.name))
              }),
              (this.name = e),
              (this.id = 'sc-keyframes-' + e),
              (this.rules = r)
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = oe), this.name + e.hash
            }),
            e
          )
        })(),
        ce = /([A-Z])/,
        se = /([A-Z])/g,
        be = /^ms-/,
        le = function (e) {
          return '-' + e.toLowerCase()
        }
      function ue(e) {
        return ce.test(e) ? e.replace(se, le).replace(be, '-ms-') : e
      }
      var he = function (e) {
        return null == e || !1 === e || '' === e
      }
      function pe(e, r, t, a) {
        if (Array.isArray(e)) {
          for (var n, o = [], i = 0, f = e.length; i < f; i += 1)
            '' !== (n = pe(e[i], r, t, a)) &&
              (Array.isArray(n) ? o.push.apply(o, n) : o.push(n))
          return o
        }
        return he(e)
          ? ''
          : y(e)
          ? '.' + e.styledComponentId
          : x(e)
          ? 'function' != typeof (g = e) ||
            (g.prototype && g.prototype.isReactComponent) ||
            !r
            ? e
            : pe(e(r), r, t, a)
          : e instanceof ge
          ? t
            ? (e.inject(t, a), e.getName(a))
            : e
          : p(e)
          ? (function e(r, t) {
              var a,
                n,
                o = []
              for (var i in r)
                r.hasOwnProperty(i) &&
                  !he(r[i]) &&
                  ((Array.isArray(r[i]) && r[i].isCss) || x(r[i])
                    ? o.push(ue(i) + ':', r[i], ';')
                    : p(r[i])
                    ? o.push.apply(o, e(r[i], i))
                    : o.push(
                        ue(i) +
                          ': ' +
                          ((a = i),
                          (null == (n = r[i]) ||
                          'boolean' == typeof n ||
                          '' === n
                            ? ''
                            : 'number' != typeof n || 0 === n || a in d
                            ? String(n).trim()
                            : n + 'px') + ';')
                      ))
              return t ? [t + ' {'].concat(o, ['}']) : o
            })(e)
          : e.toString()
        var g
      }
      var me = function (e) {
        return Array.isArray(e) && (e.isCss = !0), e
      }
      function ve(e) {
        for (
          var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          t[a - 1] = arguments[a]
        return x(e) || p(e)
          ? me(pe(h(m, [e].concat(t))))
          : 0 === t.length && 1 === e.length && 'string' == typeof e[0]
          ? e
          : me(pe(h(e, t)))
      }
      new Set()
      var xe = function (e, r, t) {
          return (
            void 0 === t && (t = v),
            (e.theme !== t.theme && e.theme) || r || t.theme
          )
        },
        Be = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        ye = /(^-|-$)/g
      function we(e) {
        return e.replace(Be, '-').replace(ye, '')
      }
      var ke = function (e) {
        return K(q(e) >>> 0)
      }
      function Te(e) {
        return 'string' == typeof e && !0
      }
      var Se = function (e) {
          return (
            'function' == typeof e ||
            ('object' == typeof e && null !== e && !Array.isArray(e))
          )
        },
        Ce = function (e) {
          return '__proto__' !== e && 'constructor' !== e && 'prototype' !== e
        }
      function Ie(e, r, t) {
        var a = e[t]
        Se(r) && Se(a) ? Ae(a, r) : (e[t] = r)
      }
      function Ae(e) {
        for (
          var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          t[a - 1] = arguments[a]
        for (var n = 0, o = t; n < o.length; n++) {
          var i = o[n]
          if (Se(i)) for (var f in i) Ce(f) && Ie(e, i[f], f)
        }
        return e
      }
      var Ee = n.createContext()
      Ee.Consumer
      function Oe(e) {
        var r = (0, n.useContext)(Ee),
          t = (0, n.useMemo)(
            function () {
              return (function (e, r) {
                return e
                  ? x(e)
                    ? e(r)
                    : Array.isArray(e) || 'object' != typeof e
                    ? S(8)
                    : r
                    ? u({}, r, {}, e)
                    : e
                  : S(14)
              })(e.theme, r)
            },
            [e.theme, r]
          )
        return e.children
          ? n.createElement(Ee.Provider, { value: t }, e.children)
          : null
      }
      var Pe = {}
      function _e(e, r, t) {
        var a = y(e),
          o = !Te(e),
          i = r.attrs,
          f = void 0 === i ? m : i,
          d = r.componentId,
          g =
            void 0 === d
              ? (function (e, r) {
                  var t = 'string' != typeof e ? 'sc' : we(e)
                  Pe[t] = (Pe[t] || 0) + 1
                  var a = t + '-' + ke('5.3.5' + t + Pe[t])
                  return r ? r + '-' + a : a
                })(r.displayName, r.parentComponentId)
              : d,
          s = r.displayName,
          l =
            void 0 === s
              ? (function (e) {
                  return Te(e) ? 'styled.' + e : 'Styled(' + B(e) + ')'
                })(e)
              : s,
          h =
            r.displayName && r.componentId
              ? we(r.displayName) + '-' + r.componentId
              : r.componentId || g,
          p =
            a && e.attrs
              ? Array.prototype.concat(e.attrs, f).filter(Boolean)
              : f,
          w = r.shouldForwardProp
        a &&
          e.shouldForwardProp &&
          (w = r.shouldForwardProp
            ? function (t, a, n) {
                return (
                  e.shouldForwardProp(t, a, n) && r.shouldForwardProp(t, a, n)
                )
              }
            : e.shouldForwardProp)
        var k,
          T = new J(t, h, a ? e.componentStyle : void 0),
          S = T.isStatic && 0 === f.length,
          C = function (e, r) {
            return (function (e, r, t, a) {
              var o = e.attrs,
                i = e.componentStyle,
                f = e.defaultProps,
                d = e.foldedComponentIds,
                g = e.shouldForwardProp,
                s = e.styledComponentId,
                b = e.target,
                l = (function (e, r, t) {
                  void 0 === e && (e = v)
                  var a = u({}, r, { theme: e }),
                    n = {}
                  return (
                    t.forEach(function (e) {
                      var r,
                        t,
                        o,
                        i = e
                      for (r in (x(i) && (i = i(a)), i))
                        a[r] = n[r] =
                          'className' === r
                            ? ((t = n[r]),
                              (o = i[r]),
                              t && o ? t + ' ' + o : t || o)
                            : i[r]
                    }),
                    [a, n]
                  )
                })(xe(r, (0, n.useContext)(Ee), f) || v, r, o),
                h = l[0],
                p = l[1],
                m = (function (e, r, t, a) {
                  var n = ie(),
                    o = fe()
                  return r
                    ? e.generateAndInjectStyles(v, n, o)
                    : e.generateAndInjectStyles(t, n, o)
                })(i, a, h),
                B = t,
                y = p.$as || r.$as || p.as || r.as || b,
                w = Te(y),
                k = p !== r ? u({}, r, {}, p) : r,
                T = {}
              for (var S in k)
                '$' !== S[0] &&
                  'as' !== S &&
                  ('forwardedAs' === S
                    ? (T.as = k[S])
                    : (g ? g(S, c, y) : !w || c(S)) && (T[S] = k[S]))
              return (
                r.style &&
                  p.style !== r.style &&
                  (T.style = u({}, r.style, {}, p.style)),
                (T.className = Array.prototype
                  .concat(d, s, m !== s ? m : null, r.className, p.className)
                  .filter(Boolean)
                  .join(' ')),
                (T.ref = B),
                (0, n.createElement)(y, T)
              )
            })(k, e, r, S)
          }
        return (
          (C.displayName = l),
          ((k = n.forwardRef(C)).attrs = p),
          (k.componentStyle = T),
          (k.displayName = l),
          (k.shouldForwardProp = w),
          (k.foldedComponentIds = a
            ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
            : m),
          (k.styledComponentId = h),
          (k.target = a ? e.target : e),
          (k.withComponent = function (e) {
            var a = r.componentId,
              n = (function (e, r) {
                if (null == e) return {}
                var t,
                  a,
                  n = {},
                  o = Object.keys(e)
                for (a = 0; a < o.length; a++)
                  (t = o[a]), r.indexOf(t) >= 0 || (n[t] = e[t])
                return n
              })(r, ['componentId']),
              o = a && a + '-' + (Te(e) ? e : we(B(e)))
            return _e(e, u({}, n, { attrs: p, componentId: o }), t)
          }),
          Object.defineProperty(k, 'defaultProps', {
            get: function () {
              return this._foldedDefaultProps
            },
            set: function (r) {
              this._foldedDefaultProps = a ? Ae({}, e.defaultProps, r) : r
            },
          }),
          (k.toString = function () {
            return '.' + k.styledComponentId
          }),
          o &&
            b()(k, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0,
            }),
          k
        )
      }
      var je = function (e) {
        return (function e(r, t, n) {
          if ((void 0 === n && (n = v), !(0, a.isValidElementType)(t)))
            return S(1, String(t))
          var o = function () {
            return r(t, n, ve.apply(void 0, arguments))
          }
          return (
            (o.withConfig = function (a) {
              return e(r, t, u({}, n, {}, a))
            }),
            (o.attrs = function (a) {
              return e(
                r,
                t,
                u({}, n, {
                  attrs: Array.prototype.concat(n.attrs, a).filter(Boolean),
                })
              )
            }),
            o
          )
        })(_e, e)
      }
      ;[
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'textPath',
        'tspan',
      ].forEach(function (e) {
        je[e] = je(e)
      })
      !(function () {
        function e(e, r) {
          ;(this.rules = e),
            (this.componentId = r),
            (this.isStatic = Y(e)),
            z.registerId(this.componentId + 1)
        }
        var r = e.prototype
        ;(r.createStyles = function (e, r, t, a) {
          var n = a(pe(this.rules, r, t, a).join(''), ''),
            o = this.componentId + e
          t.insertRules(o, o, n)
        }),
          (r.removeStyles = function (e, r) {
            r.clearRules(this.componentId + e)
          }),
          (r.renderStyles = function (e, r, t, a) {
            e > 2 && z.registerId(this.componentId + e),
              this.removeStyles(e, t),
              this.createStyles(e, r, t, a)
          })
      })()
      function Me(e) {
        for (
          var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          t[a - 1] = arguments[a]
        var n = ve.apply(void 0, [e].concat(t)).join(''),
          o = ke(n)
        return new ge(o, n)
      }
      !(function () {
        function e() {
          var e = this
          ;(this._emitSheetCSS = function () {
            var r = e.instance.toString()
            if (!r) return ''
            var t = R()
            return (
              '<style ' +
              [
                t && 'nonce="' + t + '"',
                w + '="true"',
                'data-styled-version="5.3.5"',
              ]
                .filter(Boolean)
                .join(' ') +
              '>' +
              r +
              '</style>'
            )
          }),
            (this.getStyleTags = function () {
              return e.sealed ? S(2) : e._emitSheetCSS()
            }),
            (this.getStyleElement = function () {
              var r
              if (e.sealed) return S(2)
              var t =
                  (((r = {})[w] = ''),
                  (r['data-styled-version'] = '5.3.5'),
                  (r.dangerouslySetInnerHTML = {
                    __html: e.instance.toString(),
                  }),
                  r),
                a = R()
              return (
                a && (t.nonce = a),
                [n.createElement('style', u({}, t, { key: 'sc-0-0' }))]
              )
            }),
            (this.seal = function () {
              e.sealed = !0
            }),
            (this.instance = new z({ isServer: !0 })),
            (this.sealed = !1)
        }
        var r = e.prototype
        ;(r.collectStyles = function (e) {
          return this.sealed
            ? S(2)
            : n.createElement(de, { sheet: this.instance }, e)
        }),
          (r.interleaveWithNodeStream = function (e) {
            return S(3)
          })
      })()
      var He = je
    },
    943: function (e, r, t) {
      'use strict'
      function a(e, r) {
        ;(null == r || r > e.length) && (r = e.length)
        for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t]
        return a
      }
      t.d(r, {
        Z: function () {
          return a
        },
      })
    },
    7568: function (e, r, t) {
      'use strict'
      function a(e, r, t, a, n, o, i) {
        try {
          var f = e[o](i),
            d = f.value
        } catch (g) {
          return void t(g)
        }
        f.done ? r(d) : Promise.resolve(d).then(a, n)
      }
      function n(e) {
        return function () {
          var r = this,
            t = arguments
          return new Promise(function (n, o) {
            var i = e.apply(r, t)
            function f(e) {
              a(i, n, o, f, d, 'next', e)
            }
            function d(e) {
              a(i, n, o, f, d, 'throw', e)
            }
            f(void 0)
          })
        }
      }
      t.d(r, {
        Z: function () {
          return n
        },
      })
    },
    4924: function (e, r, t) {
      'use strict'
      function a(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        )
      }
      t.d(r, {
        Z: function () {
          return a
        },
      })
    },
    3375: function (e, r, t) {
      'use strict'
      function a(e) {
        if (
          ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e)
      }
      t.d(r, {
        Z: function () {
          return a
        },
      })
    },
    6042: function (e, r, t) {
      'use strict'
      t.d(r, {
        Z: function () {
          return n
        },
      })
      var a = t(4924)
      function n(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t)
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              })
            )),
            n.forEach(function (r) {
              ;(0, a.Z)(e, r, t[r])
            })
        }
        return e
      }
    },
    9396: function (e, r, t) {
      'use strict'
      function a(e, r) {
        return (
          (r = null != r ? r : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (e, r) {
                var t = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e)
                  r &&
                    (a = a.filter(function (r) {
                      return Object.getOwnPropertyDescriptor(e, r).enumerable
                    })),
                    t.push.apply(t, a)
                }
                return t
              })(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              }),
          e
        )
      }
      t.d(r, {
        Z: function () {
          return a
        },
      })
    },
    9534: function (e, r, t) {
      'use strict'
      function a(e, r) {
        if (null == e) return {}
        var t,
          a,
          n = (function (e, r) {
            if (null == e) return {}
            var t,
              a,
              n = {},
              o = Object.keys(e)
            for (a = 0; a < o.length; a++)
              (t = o[a]), r.indexOf(t) >= 0 || (n[t] = e[t])
            return n
          })(e, r)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (a = 0; a < o.length; a++)
            (t = o[a]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (n[t] = e[t]))
        }
        return n
      }
      t.d(r, {
        Z: function () {
          return a
        },
      })
    },
    828: function (e, r, t) {
      'use strict'
      t.d(r, {
        Z: function () {
          return o
        },
      })
      var a = t(3375)
      var n = t(1566)
      function o(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (0, a.Z)(e, r) ||
          (0, n.Z)(e, r) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
    },
    1566: function (e, r, t) {
      'use strict'
      t.d(r, {
        Z: function () {
          return n
        },
      })
      var a = t(943)
      function n(e, r) {
        if (e) {
          if ('string' === typeof e) return (0, a.Z)(e, r)
          var t = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === t && e.constructor && (t = e.constructor.name),
            'Map' === t || 'Set' === t
              ? Array.from(t)
              : 'Arguments' === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? (0, a.Z)(e, r)
              : void 0
          )
        }
      }
    },
    1955: function (e, r) {
      'use strict'
      function t(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r]
          for (var a in t) e[a] = t[a]
        }
        return e
      }
      var a = (function e(r, a) {
        function n(e, n, o) {
          if ('undefined' !== typeof document) {
            'number' === typeof (o = t({}, a, o)).expires &&
              (o.expires = new Date(Date.now() + 864e5 * o.expires)),
              o.expires && (o.expires = o.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape))
            var i = ''
            for (var f in o)
              o[f] &&
                ((i += '; ' + f),
                !0 !== o[f] && (i += '=' + o[f].split(';')[0]))
            return (document.cookie = e + '=' + r.write(n, e) + i)
          }
        }
        return Object.create(
          {
            set: n,
            get: function (e) {
              if ('undefined' !== typeof document && (!arguments.length || e)) {
                for (
                  var t = document.cookie ? document.cookie.split('; ') : [],
                    a = {},
                    n = 0;
                  n < t.length;
                  n++
                ) {
                  var o = t[n].split('='),
                    i = o.slice(1).join('=')
                  try {
                    var f = decodeURIComponent(o[0])
                    if (((a[f] = r.read(i, f)), e === f)) break
                  } catch (d) {}
                }
                return e ? a[e] : a
              }
            },
            remove: function (e, r) {
              n(e, '', t({}, r, { expires: -1 }))
            },
            withAttributes: function (r) {
              return e(this.converter, t({}, this.attributes, r))
            },
            withConverter: function (r) {
              return e(t({}, this.converter, r), this.attributes)
            },
          },
          {
            attributes: { value: Object.freeze(a) },
            converter: { value: Object.freeze(r) },
          }
        )
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            )
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            )
          },
        },
        { path: '/' }
      )
      r.Z = a
    },
  },
  function (e) {
    var r = function (r) {
      return e((e.s = r))
    }
    e.O(0, [774, 179], function () {
      return r(6840), r(387)
    })
    var t = e.O()
    _N_E = t
  },
])
