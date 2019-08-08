!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = '/'),
    n((n.s = 0));
})({
  0: function(e, t, n) {
    n('3V95'), n('l//d'), (e.exports = n('dbeE'));
  },
  '3V95': function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      function(e) {
        var t = n('7t+N'),
          r = (n.n(t), n('bZ5D'));
        n.n(r);
        window.$ = e;
      }.call(t, n('7t+N'));
  },
  '7t+N': function(e, t, n) {
    var r;
    !(function(t, n) {
      'use strict';
      'object' == typeof e && 'object' == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function(e) {
                if (!e.document) throw new Error('jQuery requires a window with a document');
                return n(e);
              })
        : n(t);
    })('undefined' != typeof window ? window : this, function(n, i) {
      'use strict';
      var o = [],
        a = n.document,
        s = Object.getPrototypeOf,
        l = o.slice,
        u = o.concat,
        c = o.push,
        f = o.indexOf,
        d = {},
        p = d.toString,
        h = d.hasOwnProperty,
        g = h.toString,
        v = g.call(Object),
        m = {},
        y = function(e) {
          return 'function' == typeof e && 'number' != typeof e.nodeType;
        },
        b = function(e) {
          return null != e && e === e.window;
        },
        x = { type: !0, src: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          i = (t = t || a).createElement('script');
        if (((i.text = e), n)) for (r in x) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i);
      }
      function C(e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
          ? d[p.call(e)] || 'object'
          : typeof e;
      }
      var T = function(e, t) {
          return new T.fn.init(e, t);
        },
        k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function E(e) {
        var t = !!e && 'length' in e && e.length,
          n = C(e);
        return !y(e) && !b(e) && ('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e));
      }
      (T.fn = T.prototype = {
        jquery: '3.3.1',
        constructor: T,
        length: 0,
        toArray: function() {
          return l.call(this);
        },
        get: function(e) {
          return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
          var t = T.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function(e) {
          return T.each(this, e);
        },
        map: function(e) {
          return this.pushStack(
            T.map(this, function(t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function() {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: o.sort,
        splice: o.splice
      }),
        (T.extend = T.fn.extend = function() {
          var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
          for (
            'boolean' == typeof a && ((u = a), (a = arguments[s] || {}), s++),
              'object' == typeof a || y(a) || (a = {}),
              s === l && ((a = this), s--);
            s < l;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (n = a[t]),
                  a !== (r = e[t]) &&
                    (u && r && (T.isPlainObject(r) || (i = Array.isArray(r)))
                      ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && T.isPlainObject(n) ? n : {}),
                        (a[t] = T.extend(u, o, r)))
                      : void 0 !== r && (a[t] = r));
          return a;
        }),
        T.extend({
          expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function(e) {
            throw new Error(e);
          },
          noop: function() {},
          isPlainObject: function(e) {
            var t, n;
            return (
              !(!e || '[object Object]' !== p.call(e)) &&
              (!(t = s(e)) || ('function' == typeof (n = h.call(t, 'constructor') && t.constructor) && g.call(n) === v))
            );
          },
          isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function(e) {
            w(e);
          },
          each: function(e, t) {
            var n,
              r = 0;
            if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim: function(e) {
            return null == e ? '' : (e + '').replace(k, '');
          },
          makeArray: function(e, t) {
            var n = t || [];
            return null != e && (E(Object(e)) ? T.merge(n, 'string' == typeof e ? [e] : e) : c.call(n, e)), n;
          },
          inArray: function(e, t, n) {
            return null == t ? -1 : f.call(t, e, n);
          },
          merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r;
          },
          map: function(e, t, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (E(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return u.apply([], a);
          },
          guid: 1,
          support: m
        }),
        'function' == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]),
        T.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function(e, t) {
          d['[object ' + t + ']'] = t.toLowerCase();
        });
      var S = (function(e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          p,
          h,
          g,
          v,
          m,
          y,
          b,
          x = 'sizzle' + 1 * new Date(),
          w = e.document,
          C = 0,
          T = 0,
          k = ae(),
          E = ae(),
          S = ae(),
          N = function(e, t) {
            return e === t && (f = !0), 0;
          },
          D = {}.hasOwnProperty,
          A = [],
          j = A.pop,
          q = A.push,
          L = A.push,
          H = A.slice,
          O = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          },
          P =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          _ = '[\\x20\\t\\r\\n\\f]',
          M = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
          I =
            '\\[' +
            _ +
            '*(' +
            M +
            ')(?:' +
            _ +
            '*([*^$|!~]?=)' +
            _ +
            '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
            M +
            '))|)' +
            _ +
            '*\\]',
          R =
            ':(' +
            M +
            ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
            I +
            ')*)|.*)\\)|)',
          $ = new RegExp(_ + '+', 'g'),
          F = new RegExp('^' + _ + '+|((?:^|[^\\\\])(?:\\\\.)*)' + _ + '+$', 'g'),
          W = new RegExp('^' + _ + '*,' + _ + '*'),
          B = new RegExp('^' + _ + '*([>+~]|' + _ + ')' + _ + '*'),
          z = new RegExp('=' + _ + '*([^\\]\'"]*?)' + _ + '*\\]', 'g'),
          U = new RegExp(R),
          X = new RegExp('^' + M + '$'),
          V = {
            ID: new RegExp('^#(' + M + ')'),
            CLASS: new RegExp('^\\.(' + M + ')'),
            TAG: new RegExp('^(' + M + '|[*])'),
            ATTR: new RegExp('^' + I),
            PSEUDO: new RegExp('^' + R),
            CHILD: new RegExp(
              '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                _ +
                '*(even|odd|(([+-]|)(\\d*)n|)' +
                _ +
                '*(?:([+-]|)' +
                _ +
                '*(\\d+)|))' +
                _ +
                '*\\)|)',
              'i'
            ),
            bool: new RegExp('^(?:' + P + ')$', 'i'),
            needsContext: new RegExp(
              '^' +
                _ +
                '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                _ +
                '*((?:-\\d)?\\d*)' +
                _ +
                '*\\)|)(?=[^-]|$)',
              'i'
            )
          },
          K = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          Y = /^[^{]+\{\s*\[native \w/,
          Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          J = /[+~]/,
          Z = new RegExp('\\\\([\\da-f]{1,6}' + _ + '?|(' + _ + ')|.)', 'ig'),
          ee = function(e, t, n) {
            var r = '0x' + t - 65536;
            return r != r || n
              ? t
              : r < 0
              ? String.fromCharCode(r + 65536)
              : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
          },
          te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ne = function(e, t) {
            return t
              ? '\0' === e
                ? '�'
                : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
              : '\\' + e;
          },
          re = function() {
            d();
          },
          ie = ye(
            function(e) {
              return !0 === e.disabled && ('form' in e || 'label' in e);
            },
            { dir: 'parentNode', next: 'legend' }
          );
        try {
          L.apply((A = H.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
          L = {
            apply: A.length
              ? function(e, t) {
                  q.apply(e, H.call(t));
                }
              : function(e, t) {
                  for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                  e.length = n - 1;
                }
          };
        }
        function oe(e, t, r, i) {
          var o,
            s,
            u,
            c,
            f,
            h,
            m,
            y = t && t.ownerDocument,
            C = t ? t.nodeType : 9;
          if (((r = r || []), 'string' != typeof e || !e || (1 !== C && 9 !== C && 11 !== C))) return r;
          if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t), (t = t || p), g)) {
            if (11 !== C && (f = Q.exec(e)))
              if ((o = f[1])) {
                if (9 === C) {
                  if (!(u = t.getElementById(o))) return r;
                  if (u.id === o) return r.push(u), r;
                } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return r.push(u), r;
              } else {
                if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                  return L.apply(r, t.getElementsByClassName(o)), r;
              }
            if (n.qsa && !S[e + ' '] && (!v || !v.test(e))) {
              if (1 !== C) (y = t), (m = e);
              else if ('object' !== t.nodeName.toLowerCase()) {
                for (
                  (c = t.getAttribute('id')) ? (c = c.replace(te, ne)) : t.setAttribute('id', (c = x)),
                    s = (h = a(e)).length;
                  s--;

                )
                  h[s] = '#' + c + ' ' + me(h[s]);
                (m = h.join(',')), (y = (J.test(e) && ge(t.parentNode)) || t);
              }
              if (m)
                try {
                  return L.apply(r, y.querySelectorAll(m)), r;
                } catch (e) {
                } finally {
                  c === x && t.removeAttribute('id');
                }
            }
          }
          return l(e.replace(F, '$1'), t, r, i);
        }
        function ae() {
          var e = [];
          return function t(n, i) {
            return e.push(n + ' ') > r.cacheLength && delete t[e.shift()], (t[n + ' '] = i);
          };
        }
        function se(e) {
          return (e[x] = !0), e;
        }
        function le(e) {
          var t = p.createElement('fieldset');
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function ue(e, t) {
          for (var n = e.split('|'), i = n.length; i--; ) r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
          var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function fe(e) {
          return function(t) {
            return 'input' === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function de(e) {
          return function(t) {
            var n = t.nodeName.toLowerCase();
            return ('input' === n || 'button' === n) && t.type === e;
          };
        }
        function pe(e) {
          return function(t) {
            return 'form' in t
              ? t.parentNode && !1 === t.disabled
                ? 'label' in t
                  ? 'label' in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                : t.disabled === e
              : 'label' in t && t.disabled === e;
          };
        }
        function he(e) {
          return se(function(t) {
            return (
              (t = +t),
              se(function(n, r) {
                for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
              })
            );
          });
        }
        function ge(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = oe.support = {}),
        (o = oe.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && 'HTML' !== t.nodeName;
        }),
        (d = oe.setDocument = function(e) {
          var t,
            i,
            a = e ? e.ownerDocument || e : w;
          return a !== p && 9 === a.nodeType && a.documentElement
            ? ((h = (p = a).documentElement),
              (g = !o(p)),
              w !== p &&
                (i = p.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener('unload', re, !1)
                  : i.attachEvent && i.attachEvent('onunload', re)),
              (n.attributes = le(function(e) {
                return (e.className = 'i'), !e.getAttribute('className');
              })),
              (n.getElementsByTagName = le(function(e) {
                return e.appendChild(p.createComment('')), !e.getElementsByTagName('*').length;
              })),
              (n.getElementsByClassName = Y.test(p.getElementsByClassName)),
              (n.getById = le(function(e) {
                return (h.appendChild(e).id = x), !p.getElementsByName || !p.getElementsByName(x).length;
              })),
              n.getById
                ? ((r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                      return e.getAttribute('id') === t;
                    };
                  }),
                  (r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                      var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                      return n && n.value === t;
                    };
                  }),
                  (r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                          if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function(e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function(e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ('*' === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function(e, t) {
                  if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                }),
              (m = []),
              (v = []),
              (n.qsa = Y.test(p.querySelectorAll)) &&
                (le(function(e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    x +
                    "'></a><select id='" +
                    x +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length && v.push('[*^$]=' + _ + '*(?:\'\'|"")'),
                    e.querySelectorAll('[selected]').length || v.push('\\[' + _ + '*(?:value|' + P + ')'),
                    e.querySelectorAll('[id~=' + x + '-]').length || v.push('~='),
                    e.querySelectorAll(':checked').length || v.push(':checked'),
                    e.querySelectorAll('a#' + x + '+*').length || v.push('.#.+[+~]');
                }),
                le(function(e) {
                  e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = p.createElement('input');
                  t.setAttribute('type', 'hidden'),
                    e.appendChild(t).setAttribute('name', 'D'),
                    e.querySelectorAll('[name=d]').length && v.push('name' + _ + '*[*^$|!~]?='),
                    2 !== e.querySelectorAll(':enabled').length && v.push(':enabled', ':disabled'),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(':disabled').length && v.push(':enabled', ':disabled'),
                    e.querySelectorAll('*,:x'),
                    v.push(',.*:');
                })),
              (n.matchesSelector = Y.test(
                (y =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                le(function(e) {
                  (n.disconnectedMatch = y.call(e, '*')), y.call(e, "[s!='']:x"), m.push('!=', R);
                }),
              (v = v.length && new RegExp(v.join('|'))),
              (m = m.length && new RegExp(m.join('|'))),
              (t = Y.test(h.compareDocumentPosition)),
              (b =
                t || Y.test(h.contains)
                  ? function(e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function(e, t) {
                      if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (N = t
                ? function(e, t) {
                    if (e === t) return (f = !0), 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === p || (e.ownerDocument === w && b(w, e))
                          ? -1
                          : t === p || (t.ownerDocument === w && b(w, t))
                          ? 1
                          : c
                          ? O(c, e) - O(c, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function(e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                    if (i === o) return ce(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) s.unshift(n);
                    for (; a[r] === s[r]; ) r++;
                    return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                  }),
              p)
            : p;
        }),
        (oe.matches = function(e, t) {
          return oe(e, null, null, t);
        }),
        (oe.matchesSelector = function(e, t) {
          if (
            ((e.ownerDocument || e) !== p && d(e),
            (t = t.replace(z, "='$1']")),
            n.matchesSelector && g && !S[t + ' '] && (!m || !m.test(t)) && (!v || !v.test(t)))
          )
            try {
              var r = y.call(e, t);
              if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
            } catch (e) {}
          return oe(t, p, null, [e]).length > 0;
        }),
        (oe.contains = function(e, t) {
          return (e.ownerDocument || e) !== p && d(e), b(e, t);
        }),
        (oe.attr = function(e, t) {
          (e.ownerDocument || e) !== p && d(e);
          var i = r.attrHandle[t.toLowerCase()],
            o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o
            ? o
            : n.attributes || !g
            ? e.getAttribute(t)
            : (o = e.getAttributeNode(t)) && o.specified
            ? o.value
            : null;
        }),
        (oe.escape = function(e) {
          return (e + '').replace(te, ne);
        }),
        (oe.error = function(e) {
          throw new Error('Syntax error, unrecognized expression: ' + e);
        }),
        (oe.uniqueSort = function(e) {
          var t,
            r = [],
            i = 0,
            o = 0;
          if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(N), f)) {
            for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
            for (; i--; ) e.splice(r[i], 1);
          }
          return (c = null), e;
        }),
        (i = oe.getText = function(e) {
          var t,
            n = '',
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ('string' == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += i(t);
          return n;
        }),
        ((r = oe.selectors = {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' }
          },
          preFilter: {
            ATTR: function(e) {
              return (
                (e[1] = e[1].replace(Z, ee)),
                (e[3] = (e[3] || e[4] || e[5] || '').replace(Z, ee)),
                '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                e.slice(0, 4)
              );
            },
            CHILD: function(e) {
              return (
                (e[1] = e[1].toLowerCase()),
                'nth' === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                    (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function(e) {
              var t,
                n = !e[6] && e[2];
              return V.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || '')
                    : n &&
                      U.test(n) &&
                      (t = a(n, !0)) &&
                      (t = n.indexOf(')', n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(Z, ee).toLowerCase();
              return '*' === e
                ? function() {
                    return !0;
                  }
                : function(e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function(e) {
              var t = k[e + ' '];
              return (
                t ||
                ((t = new RegExp('(^|' + _ + ')' + e + '(' + _ + '|$)')) &&
                  k(e, function(e) {
                    return t.test(
                      ('string' == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                        ''
                    );
                  }))
              );
            },
            ATTR: function(e, t, n) {
              return function(r) {
                var i = oe.attr(r, e);
                return null == i
                  ? '!=' === t
                  : !t ||
                      ((i += ''),
                      '=' === t
                        ? i === n
                        : '!=' === t
                        ? i !== n
                        : '^=' === t
                        ? n && 0 === i.indexOf(n)
                        : '*=' === t
                        ? n && i.indexOf(n) > -1
                        : '$=' === t
                        ? n && i.slice(-n.length) === n
                        : '~=' === t
                        ? (' ' + i.replace($, ' ') + ' ').indexOf(n) > -1
                        : '|=' === t && (i === n || i.slice(0, n.length + 1) === n + '-'));
              };
            },
            CHILD: function(e, t, n, r, i) {
              var o = 'nth' !== e.slice(0, 3),
                a = 'last' !== e.slice(-4),
                s = 'of-type' === t;
              return 1 === r && 0 === i
                ? function(e) {
                    return !!e.parentNode;
                  }
                : function(t, n, l) {
                    var u,
                      c,
                      f,
                      d,
                      p,
                      h,
                      g = o !== a ? 'nextSibling' : 'previousSibling',
                      v = t.parentNode,
                      m = s && t.nodeName.toLowerCase(),
                      y = !l && !s,
                      b = !1;
                    if (v) {
                      if (o) {
                        for (; g; ) {
                          for (d = t; (d = d[g]); )
                            if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                          h = g = 'only' === e && !h && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                        for (
                          b =
                            (p =
                              (u =
                                (c = (f = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] ||
                                [])[0] === C && u[1]) && u[2],
                            d = p && v.childNodes[p];
                          (d = (++p && d && d[g]) || (b = p = 0) || h.pop());

                        )
                          if (1 === d.nodeType && ++b && d === t) {
                            c[e] = [C, p, b];
                            break;
                          }
                      } else if (
                        (y &&
                          (b = p =
                            (u =
                              (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                              C && u[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (d = (++p && d && d[g]) || (b = p = 0) || h.pop()) &&
                          ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) ||
                            !++b ||
                            (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [C, b]),
                            d !== t));

                        );
                      return (b -= i) === r || (b % r == 0 && b / r >= 0);
                    }
                  };
            },
            PSEUDO: function(e, t) {
              var n,
                i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error('unsupported pseudo: ' + e);
              return i[x]
                ? i(t)
                : i.length > 1
                ? ((n = [e, e, '', t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? se(function(e, n) {
                        for (var r, o = i(e, t), a = o.length; a--; ) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                      })
                    : function(e) {
                        return i(e, 0, n);
                      })
                : i;
            }
          },
          pseudos: {
            not: se(function(e) {
              var t = [],
                n = [],
                r = s(e.replace(F, '$1'));
              return r[x]
                ? se(function(e, t, n, i) {
                    for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function(e, i, o) {
                    return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                  };
            }),
            has: se(function(e) {
              return function(t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: se(function(e) {
              return (
                (e = e.replace(Z, ee)),
                function(t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: se(function(e) {
              return (
                X.test(e || '') || oe.error('unsupported lang: ' + e),
                (e = e.replace(Z, ee).toLowerCase()),
                function(t) {
                  var n;
                  do {
                    if ((n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                      return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function(e) {
              return e === h;
            },
            focus: function(e) {
              return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            },
            enabled: pe(!1),
            disabled: pe(!0),
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
            },
            selected: function(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function(e) {
              return !r.pseudos.empty(e);
            },
            header: function(e) {
              return G.test(e.nodeName);
            },
            input: function(e) {
              return K.test(e.nodeName);
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return ('input' === t && 'button' === e.type) || 'button' === t;
            },
            text: function(e) {
              var t;
              return (
                'input' === e.nodeName.toLowerCase() &&
                'text' === e.type &&
                (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
              );
            },
            first: he(function() {
              return [0];
            }),
            last: he(function(e, t) {
              return [t - 1];
            }),
            eq: he(function(e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: he(function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: he(function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: he(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: he(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            })
          }
        }).pseudos.nth = r.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = de(t);
        function ve() {}
        function me(e) {
          for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
          return r;
        }
        function ye(e, t, n) {
          var r = t.dir,
            i = t.next,
            o = i || r,
            a = n && 'parentNode' === o,
            s = T++;
          return t.first
            ? function(t, n, i) {
                for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
                return !1;
              }
            : function(t, n, l) {
                var u,
                  c,
                  f,
                  d = [C, s];
                if (l) {
                  for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a)
                      if (
                        ((c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {})),
                        i && i === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((u = c[o]) && u[0] === C && u[1] === s) return (d[2] = u[2]);
                        if (((c[o] = d), (d[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function be(e) {
          return e.length > 1
            ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function xe(e, t, n, r, i) {
          for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
            (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
          return a;
        }
        function we(e, t, n, r, i, o) {
          return (
            r && !r[x] && (r = we(r)),
            i && !i[x] && (i = we(i, o)),
            se(function(o, a, s, l) {
              var u,
                c,
                f,
                d = [],
                p = [],
                h = a.length,
                g =
                  o ||
                  (function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                    return n;
                  })(t || '*', s.nodeType ? [s] : s, []),
                v = !e || (!o && t) ? g : xe(g, d, e, s, l),
                m = n ? (i || (o ? e : h || r) ? [] : a) : v;
              if ((n && n(v, m, s, l), r))
                for (u = xe(m, p), r(u, [], s, l), c = u.length; c--; ) (f = u[c]) && (m[p[c]] = !(v[p[c]] = f));
              if (o) {
                if (i || e) {
                  if (i) {
                    for (u = [], c = m.length; c--; ) (f = m[c]) && u.push((v[c] = f));
                    i(null, (m = []), u, l);
                  }
                  for (c = m.length; c--; ) (f = m[c]) && (u = i ? O(o, f) : d[c]) > -1 && (o[u] = !(a[u] = f));
                }
              } else (m = xe(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, l) : L.apply(a, m);
            })
          );
        }
        function Ce(e) {
          for (
            var t,
              n,
              i,
              o = e.length,
              a = r.relative[e[0].type],
              s = a || r.relative[' '],
              l = a ? 1 : 0,
              c = ye(
                function(e) {
                  return e === t;
                },
                s,
                !0
              ),
              f = ye(
                function(e) {
                  return O(t, e) > -1;
                },
                s,
                !0
              ),
              d = [
                function(e, n, r) {
                  var i = (!a && (r || n !== u)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                  return (t = null), i;
                }
              ];
            l < o;
            l++
          )
            if ((n = r.relative[e[l].type])) d = [ye(be(d), n)];
            else {
              if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                return we(
                  l > 1 && be(d),
                  l > 1 && me(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(F, '$1'),
                  n,
                  l < i && Ce(e.slice(l, i)),
                  i < o && Ce((e = e.slice(i))),
                  i < o && me(e)
                );
              }
              d.push(n);
            }
          return be(d);
        }
        return (
          (ve.prototype = r.filters = r.pseudos),
          (r.setFilters = new ve()),
          (a = oe.tokenize = function(e, t) {
            var n,
              i,
              o,
              a,
              s,
              l,
              u,
              c = E[e + ' '];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = r.preFilter; s; ) {
              for (a in ((n && !(i = W.exec(s))) || (i && (s = s.slice(i[0].length) || s), l.push((o = []))),
              (n = !1),
              (i = B.exec(s)) &&
                ((n = i.shift()), o.push({ value: n, type: i[0].replace(F, ' ') }), (s = s.slice(n.length))),
              r.filter))
                !(i = V[a].exec(s)) ||
                  (u[a] && !(i = u[a](i))) ||
                  ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
              if (!n) break;
            }
            return t ? s.length : s ? oe.error(e) : E(e, l).slice(0);
          }),
          (s = oe.compile = function(e, t) {
            var n,
              i = [],
              o = [],
              s = S[e + ' '];
            if (!s) {
              for (t || (t = a(e)), n = t.length; n--; ) (s = Ce(t[n]))[x] ? i.push(s) : o.push(s);
              (s = S(
                e,
                (function(e, t) {
                  var n = t.length > 0,
                    i = e.length > 0,
                    o = function(o, a, s, l, c) {
                      var f,
                        h,
                        v,
                        m = 0,
                        y = '0',
                        b = o && [],
                        x = [],
                        w = u,
                        T = o || (i && r.find.TAG('*', c)),
                        k = (C += null == w ? 1 : Math.random() || 0.1),
                        E = T.length;
                      for (c && (u = a === p || a || c); y !== E && null != (f = T[y]); y++) {
                        if (i && f) {
                          for (h = 0, a || f.ownerDocument === p || (d(f), (s = !g)); (v = e[h++]); )
                            if (v(f, a || p, s)) {
                              l.push(f);
                              break;
                            }
                          c && (C = k);
                        }
                        n && ((f = !v && f) && m--, o && b.push(f));
                      }
                      if (((m += y), n && y !== m)) {
                        for (h = 0; (v = t[h++]); ) v(b, x, a, s);
                        if (o) {
                          if (m > 0) for (; y--; ) b[y] || x[y] || (x[y] = j.call(l));
                          x = xe(x);
                        }
                        L.apply(l, x), c && !o && x.length > 0 && m + t.length > 1 && oe.uniqueSort(l);
                      }
                      return c && ((C = k), (u = w)), b;
                    };
                  return n ? se(o) : o;
                })(o, i)
              )).selector = e;
            }
            return s;
          }),
          (l = oe.select = function(e, t, n, i) {
            var o,
              l,
              u,
              c,
              f,
              d = 'function' == typeof e && e,
              p = !i && a((e = d.selector || e));
            if (((n = n || []), 1 === p.length)) {
              if (
                (l = p[0] = p[0].slice(0)).length > 2 &&
                'ID' === (u = l[0]).type &&
                9 === t.nodeType &&
                g &&
                r.relative[l[1].type]
              ) {
                if (!(t = (r.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])) return n;
                d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
              }
              for (o = V.needsContext.test(e) ? 0 : l.length; o-- && ((u = l[o]), !r.relative[(c = u.type)]); )
                if (
                  (f = r.find[c]) &&
                  (i = f(u.matches[0].replace(Z, ee), (J.test(l[0].type) && ge(t.parentNode)) || t))
                ) {
                  if ((l.splice(o, 1), !(e = i.length && me(l)))) return L.apply(n, i), n;
                  break;
                }
            }
            return (d || s(e, p))(i, t, !g, n, !t || (J.test(e) && ge(t.parentNode)) || t), n;
          }),
          (n.sortStable =
            x
              .split('')
              .sort(N)
              .join('') === x),
          (n.detectDuplicates = !!f),
          d(),
          (n.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement('fieldset'));
          })),
          le(function(e) {
            return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
          }) ||
            ue('type|href|height|width', function(e, t, n) {
              if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            le(function(e) {
              return (
                (e.innerHTML = '<input/>'),
                e.firstChild.setAttribute('value', ''),
                '' === e.firstChild.getAttribute('value')
              );
            })) ||
            ue('value', function(e, t, n) {
              if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
          le(function(e) {
            return null == e.getAttribute('disabled');
          }) ||
            ue(P, function(e, t, n) {
              var r;
              if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }),
          oe
        );
      })(n);
      (T.find = S),
        (T.expr = S.selectors),
        (T.expr[':'] = T.expr.pseudos),
        (T.uniqueSort = T.unique = S.uniqueSort),
        (T.text = S.getText),
        (T.isXMLDoc = S.isXML),
        (T.contains = S.contains),
        (T.escapeSelector = S.escape);
      var N = function(e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && T(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        D = function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        A = T.expr.match.needsContext;
      function j(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function L(e, t, n) {
        return y(t)
          ? T.grep(e, function(e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function(e) {
              return (e === t) !== n;
            })
          : 'string' != typeof t
          ? T.grep(e, function(e) {
              return f.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function(e, t, n) {
        var r = t[0];
        return (
          n && (e = ':not(' + e + ')'),
          1 === t.length && 1 === r.nodeType
            ? T.find.matchesSelector(r, e)
              ? [r]
              : []
            : T.find.matches(
                e,
                T.grep(t, function(e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function(e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ('string' != typeof e)
              return this.pushStack(
                T(e).filter(function() {
                  for (t = 0; t < r; t++) if (T.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
            return r > 1 ? T.uniqueSort(n) : n;
          },
          filter: function(e) {
            return this.pushStack(L(this, e || [], !1));
          },
          not: function(e) {
            return this.pushStack(L(this, e || [], !0));
          },
          is: function(e) {
            return !!L(this, 'string' == typeof e && A.test(e) ? T(e) : e || [], !1).length;
          }
        });
      var H,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || H), 'string' == typeof e)) {
          if (
            !(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)),
              q.test(r[1]) && T.isPlainObject(t))
            )
              for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (i = a.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : y(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (H = T(a));
      var P = /^(?:parents|prev(?:Until|All))/,
        _ = { children: !0, contents: !0, next: !0, prev: !0 };
      function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function(e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function() {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function(e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = 'string' != typeof e && T(e);
          if (!A.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
        },
        index: function(e) {
          return e
            ? 'string' == typeof e
              ? f.call(T(e), this[0])
              : f.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function(e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
      }),
        T.each(
          {
            parent: function(e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function(e) {
              return N(e, 'parentNode');
            },
            parentsUntil: function(e, t, n) {
              return N(e, 'parentNode', n);
            },
            next: function(e) {
              return M(e, 'nextSibling');
            },
            prev: function(e) {
              return M(e, 'previousSibling');
            },
            nextAll: function(e) {
              return N(e, 'nextSibling');
            },
            prevAll: function(e) {
              return N(e, 'previousSibling');
            },
            nextUntil: function(e, t, n) {
              return N(e, 'nextSibling', n);
            },
            prevUntil: function(e, t, n) {
              return N(e, 'previousSibling', n);
            },
            siblings: function(e) {
              return D((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
              return D(e.firstChild);
            },
            contents: function(e) {
              return j(e, 'iframe')
                ? e.contentDocument
                : (j(e, 'template') && (e = e.content || e), T.merge([], e.childNodes));
            }
          },
          function(e, t) {
            T.fn[e] = function(n, r) {
              var i = T.map(this, t, n);
              return (
                'Until' !== e.slice(-5) && (r = n),
                r && 'string' == typeof r && (i = T.filter(r, i)),
                this.length > 1 && (_[e] || T.uniqueSort(i), P.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var I = /[^\x20\t\r\n\f]+/g;
      function R(e) {
        return e;
      }
      function $(e) {
        throw e;
      }
      function F(e, t, n, r) {
        var i;
        try {
          e && y((i = e.promise))
            ? i
                .call(e)
                .done(t)
                .fail(n)
            : e && y((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function(e) {
        e =
          'string' == typeof e
            ? (function(e) {
                var t = {};
                return (
                  T.each(e.match(I) || [], function(e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          l = function() {
            for (i = i || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length; )
                !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
          },
          u = {
            add: function() {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    T.each(n, function(n, r) {
                      y(r) ? (e.unique && u.has(r)) || o.push(r) : r && r.length && 'string' !== C(r) && t(r);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function() {
              return (
                T.each(arguments, function(e, t) {
                  for (var n; (n = T.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function(e) {
              return e ? T.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
              return o && (o = []), this;
            },
            disable: function() {
              return (i = a = []), (o = n = ''), this;
            },
            disabled: function() {
              return !o;
            },
            lock: function() {
              return (i = a = []), n || t || (o = n = ''), this;
            },
            locked: function() {
              return !!i;
            },
            fireWith: function(e, n) {
              return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || l()), this;
            },
            fire: function() {
              return u.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!r;
            }
          };
        return u;
      }),
        T.extend({
          Deferred: function(e) {
            var t = [
                ['notify', 'progress', T.Callbacks('memory'), T.Callbacks('memory'), 2],
                ['resolve', 'done', T.Callbacks('once memory'), T.Callbacks('once memory'), 0, 'resolved'],
                ['reject', 'fail', T.Callbacks('once memory'), T.Callbacks('once memory'), 1, 'rejected']
              ],
              r = 'pending',
              i = {
                state: function() {
                  return r;
                },
                always: function() {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                  return i.then(null, e);
                },
                pipe: function() {
                  var e = arguments;
                  return T.Deferred(function(n) {
                    T.each(t, function(t, r) {
                      var i = y(e[r[4]]) && e[r[4]];
                      o[r[1]](function() {
                        var e = i && i.apply(this, arguments);
                        e && y(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + 'With'](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function(e, r, i) {
                  var o = 0;
                  function a(e, t, r, i) {
                    return function() {
                      var s = this,
                        l = arguments,
                        u = function() {
                          var n, u;
                          if (!(e < o)) {
                            if ((n = r.apply(s, l)) === t.promise()) throw new TypeError('Thenable self-resolution');
                            (u = n && ('object' == typeof n || 'function' == typeof n) && n.then),
                              y(u)
                                ? i
                                  ? u.call(n, a(o, t, R, i), a(o, t, $, i))
                                  : (o++, u.call(n, a(o, t, R, i), a(o, t, $, i), a(o, t, R, t.notifyWith)))
                                : (r !== R && ((s = void 0), (l = [n])), (i || t.resolveWith)(s, l));
                          }
                        },
                        c = i
                          ? u
                          : function() {
                              try {
                                u();
                              } catch (n) {
                                T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o && (r !== $ && ((s = void 0), (l = [n])), t.rejectWith(s, l));
                              }
                            };
                      e
                        ? c()
                        : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), n.setTimeout(c));
                    };
                  }
                  return T.Deferred(function(n) {
                    t[0][3].add(a(0, n, y(i) ? i : R, n.notifyWith)),
                      t[1][3].add(a(0, n, y(e) ? e : R)),
                      t[2][3].add(a(0, n, y(r) ? r : $));
                  }).promise();
                },
                promise: function(e) {
                  return null != e ? T.extend(e, i) : i;
                }
              },
              o = {};
            return (
              T.each(t, function(e, n) {
                var a = n[2],
                  s = n[5];
                (i[n[1]] = a.add),
                  s &&
                    a.add(
                      function() {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function() {
                    return o[n[0] + 'With'](this === o ? void 0 : this, arguments), this;
                  }),
                  (o[n[0] + 'With'] = a.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function(e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = l.call(arguments),
              o = T.Deferred(),
              a = function(e) {
                return function(n) {
                  (r[e] = this), (i[e] = arguments.length > 1 ? l.call(arguments) : n), --t || o.resolveWith(r, i);
                };
              };
            if (t <= 1 && (F(e, o.done(a(n)).resolve, o.reject, !t), 'pending' === o.state() || y(i[n] && i[n].then)))
              return o.then();
            for (; n--; ) F(i[n], a(n), o.reject);
            return o.promise();
          }
        });
      var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function(e, t) {
        n.console &&
          n.console.warn &&
          e &&
          W.test(e.name) &&
          n.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
      }),
        (T.readyException = function(e) {
          n.setTimeout(function() {
            throw e;
          });
        });
      var B = T.Deferred();
      function z() {
        a.removeEventListener('DOMContentLoaded', z), n.removeEventListener('load', z), T.ready();
      }
      (T.fn.ready = function(e) {
        return (
          B.then(e).catch(function(e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0), (!0 !== e && --T.readyWait > 0) || B.resolveWith(a, [T]));
          }
        }),
        (T.ready.then = B.then),
        'complete' === a.readyState || ('loading' !== a.readyState && !a.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (a.addEventListener('DOMContentLoaded', z), n.addEventListener('load', z));
      var U = function(e, t, n, r, i, o, a) {
          var s = 0,
            l = e.length,
            u = null == n;
          if ('object' === C(n)) for (s in ((i = !0), n)) U(e, t, s, n[s], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            y(r) || (a = !0),
            u &&
              (a
                ? (t.call(e, r), (t = null))
                : ((u = t),
                  (t = function(e, t, n) {
                    return u.call(T(e), n);
                  }))),
            t)
          )
            for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
        },
        X = /^-ms-/,
        V = /-([a-z])/g;
      function K(e, t) {
        return t.toUpperCase();
      }
      function G(e) {
        return e.replace(X, 'ms-').replace(V, K);
      }
      var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Q() {
        this.expando = T.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function(e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Y(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
              t
            );
          },
          set: function(e, t, n) {
            var r,
              i = this.cache(e);
            if ('string' == typeof t) i[G(t)] = n;
            else for (r in t) i[G(r)] = t[r];
            return i;
          },
          get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
          },
          access: function(e, t, n) {
            return void 0 === t || (t && 'string' == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function(e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(I) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || T.isEmptyObject(r)) &&
                (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
          },
          hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          }
        });
      var J = new Q(),
        Z = new Q(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (((r = 'data-' + t.replace(te, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(r)))) {
            try {
              n = (function(e) {
                return (
                  'true' === e ||
                  ('false' !== e && ('null' === e ? null : e === +e + '' ? +e : ee.test(e) ? JSON.parse(e) : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function(e) {
          return Z.hasData(e) || J.hasData(e);
        },
        data: function(e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function(e, t) {
          Z.remove(e, t);
        },
        _data: function(e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function(e, t) {
          J.remove(e, t);
        }
      }),
        T.fn.extend({
          data: function(e, t) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (this.length && ((i = Z.get(o)), 1 === o.nodeType && !J.get(o, 'hasDataAttrs'))) {
                for (n = a.length; n--; )
                  a[n] && 0 === (r = a[n].name).indexOf('data-') && ((r = G(r.slice(5))), ne(o, r, i[r]));
                J.set(o, 'hasDataAttrs', !0);
              }
              return i;
            }
            return 'object' == typeof e
              ? this.each(function() {
                  Z.set(this, e);
                })
              : U(
                  this,
                  function(t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
                    this.each(function() {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function(e) {
            return this.each(function() {
              Z.remove(this, e);
            });
          }
        }),
        T.extend({
          queue: function(e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (r = J.get(e, t)),
                n && (!r || Array.isArray(n) ? (r = J.access(e, t, T.makeArray(n))) : r.push(n)),
                r || []
              );
          },
          dequeue: function(e, t) {
            t = t || 'fx';
            var n = T.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = T._queueHooks(e, t);
            'inprogress' === i && ((i = n.shift()), r--),
              i &&
                ('fx' === t && n.unshift('inprogress'),
                delete o.stop,
                i.call(
                  e,
                  function() {
                    T.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function(e, t) {
            var n = t + 'queueHooks';
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: T.Callbacks('once memory').add(function() {
                  J.remove(e, [t + 'queue', n]);
                })
              })
            );
          }
        }),
        T.fn.extend({
          queue: function(e, t) {
            var n = 2;
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function() {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function(e) {
            return this.each(function() {
              T.dequeue(this, e);
            });
          },
          clearQueue: function(e) {
            return this.queue(e || 'fx', []);
          },
          promise: function(e, t) {
            var n,
              r = 1,
              i = T.Deferred(),
              o = this,
              a = this.length,
              s = function() {
                --r || i.resolveWith(o, [o]);
              };
            for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; a--; )
              (n = J.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
          }
        });
      var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp('^(?:([+-])=|)(' + re + ')([a-z%]*)$', 'i'),
        oe = ['Top', 'Right', 'Bottom', 'Left'],
        ae = function(e, t) {
          return (
            'none' === (e = t || e).style.display ||
            ('' === e.style.display && T.contains(e.ownerDocument, e) && 'none' === T.css(e, 'display'))
          );
        },
        se = function(e, t, n, r) {
          var i,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
          return i;
        };
      function le(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r
            ? function() {
                return r.cur();
              }
            : function() {
                return T.css(e, t, '');
              },
          l = s(),
          u = (n && n[3]) || (T.cssNumber[t] ? '' : 'px'),
          c = (T.cssNumber[t] || ('px' !== u && +l)) && ie.exec(T.css(e, t));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; a--; )
            T.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0), (c /= o);
          (c *= 2), T.style(e, t, c + u), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = u), (r.start = c), (r.end = i))),
          i
        );
      }
      var ue = {};
      function ce(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = ue[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = T.css(t, 'display')),
          t.parentNode.removeChild(t),
          'none' === i && (i = 'block'),
          (ue[r] = i),
          i)
        );
      }
      function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ('none' === n && ((i[o] = J.get(r, 'display') || null), i[o] || (r.style.display = '')),
                '' === r.style.display && ae(r) && (i[o] = ce(r)))
              : 'none' !== n && ((i[o] = 'none'), J.set(r, 'display', n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      T.fn.extend({
        show: function() {
          return fe(this, !0);
        },
        hide: function() {
          return fe(this);
        },
        toggle: function(e) {
          return 'boolean' == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function() {
                ae(this) ? T(this).show() : T(this).hide();
              });
        }
      });
      var de = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
          option: [1, "<select multiple='multiple'>", '</select>'],
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', '']
        };
      function ve(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || '*')
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || '*')
              : []),
          void 0 === t || (t && j(e, t)) ? T.merge([e], n) : n
        );
      }
      function me(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], 'globalEval', !t || J.get(t[n], 'globalEval'));
      }
      (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
      var ye,
        be,
        xe = /<|&#?\w+;/;
      function we(e, t, n, r, i) {
        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
          if ((o = e[p]) || 0 === o)
            if ('object' === C(o)) T.merge(d, o.nodeType ? [o] : o);
            else if (xe.test(o)) {
              for (
                a = a || f.appendChild(t.createElement('div')),
                  s = (pe.exec(o) || ['', ''])[1].toLowerCase(),
                  l = ge[s] || ge._default,
                  a.innerHTML = l[1] + T.htmlPrefilter(o) + l[2],
                  c = l[0];
                c--;

              )
                a = a.lastChild;
              T.merge(d, a.childNodes), ((a = f.firstChild).textContent = '');
            } else d.push(t.createTextNode(o));
        for (f.textContent = '', p = 0; (o = d[p++]); )
          if (r && T.inArray(o, r) > -1) i && i.push(o);
          else if (((u = T.contains(o.ownerDocument, o)), (a = ve(f.appendChild(o), 'script')), u && me(a), n))
            for (c = 0; (o = a[c++]); ) he.test(o.type || '') && n.push(o);
        return f;
      }
      (ye = a.createDocumentFragment().appendChild(a.createElement('div'))),
        (be = a.createElement('input')).setAttribute('type', 'radio'),
        be.setAttribute('checked', 'checked'),
        be.setAttribute('name', 't'),
        ye.appendChild(be),
        (m.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ye.innerHTML = '<textarea>x</textarea>'),
        (m.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
      var Ce = a.documentElement,
        Te = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;
      function Se() {
        return !0;
      }
      function Ne() {
        return !1;
      }
      function De() {
        try {
          return a.activeElement;
        } catch (e) {}
      }
      function Ae(e, t, n, r, i, o) {
        var a, s;
        if ('object' == typeof t) {
          for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t)) Ae(e, s, n, r, t[s], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i && ('string' == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Ne;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            ((i = function(e) {
              return T().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = T.guid++))),
          e.each(function() {
            T.event.add(this, t, i, r, n);
          })
        );
      }
      (T.event = {
        global: {},
        add: function(e, t, n, r, i) {
          var o,
            a,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            g,
            v = J.get(e);
          if (v)
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && T.find.matchesSelector(Ce, i),
                n.guid || (n.guid = T.guid++),
                (l = v.events) || (l = v.events = {}),
                (a = v.handle) ||
                  (a = v.handle = function(t) {
                    return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
                  }),
                u = (t = (t || '').match(I) || ['']).length;
              u--;

            )
              (p = g = (s = Ee.exec(t[u]) || [])[1]),
                (h = (s[2] || '').split('.').sort()),
                p &&
                  ((f = T.event.special[p] || {}),
                  (p = (i ? f.delegateType : f.bindType) || p),
                  (f = T.event.special[p] || {}),
                  (c = T.extend(
                    {
                      type: p,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && T.expr.match.needsContext.test(i),
                      namespace: h.join('.')
                    },
                    o
                  )),
                  (d = l[p]) ||
                    (((d = l[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(p, a))),
                  f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (T.event.global[p] = !0));
        },
        remove: function(e, t, n, r, i) {
          var o,
            a,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            g,
            v = J.hasData(e) && J.get(e);
          if (v && (l = v.events)) {
            for (u = (t = (t || '').match(I) || ['']).length; u--; )
              if (((p = g = (s = Ee.exec(t[u]) || [])[1]), (h = (s[2] || '').split('.').sort()), p)) {
                for (
                  f = T.event.special[p] || {},
                    d = l[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                    a = o = d.length;
                  o--;

                )
                  (c = d[o]),
                    (!i && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (s && !s.test(c.namespace)) ||
                      (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                      (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                a &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || T.removeEvent(e, p, v.handle),
                  delete l[p]);
              } else for (p in l) T.event.remove(e, p + t[u], n, r, !0);
            T.isEmptyObject(l) && J.remove(e, 'handle events');
          }
        },
        dispatch: function(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = T.event.fix(e),
            l = new Array(arguments.length),
            u = (J.get(this, 'events') || {})[s.type] || [],
            c = T.event.special[s.type] || {};
          for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
            for (a = T.event.handlers.call(this, s, u), t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
              for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
                  ((s.handleObj = o),
                  (s.data = o.data),
                  void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) &&
                    !1 === (s.result = r) &&
                    (s.preventDefault(), s.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function(e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !('click' === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (1 === u.nodeType && ('click' !== e.type || !0 !== u.disabled)) {
                for (o = [], a = {}, n = 0; n < l; n++)
                  void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                    (a[i] = r.needsContext ? T(i, this).index(u) > -1 : T.find(i, this, null, [u]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: u, handlers: o });
              }
          return (u = this), l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s;
        },
        addProp: function(e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: y(t)
              ? function() {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function() {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function(t) {
              Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
            }
          });
        },
        fix: function(e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function() {
              if (this !== De() && this.focus) return this.focus(), !1;
            },
            delegateType: 'focusin'
          },
          blur: {
            trigger: function() {
              if (this === De() && this.blur) return this.blur(), !1;
            },
            delegateType: 'focusout'
          },
          click: {
            trigger: function() {
              if ('checkbox' === this.type && this.click && j(this, 'input')) return this.click(), !1;
            },
            _default: function(e) {
              return j(e.target, 'a');
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }),
        (T.removeEvent = function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function(e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Se : Ne),
              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Ne,
          isPropagationStopped: Ne,
          isImmediatePropagationStopped: Ne,
          isSimulated: !1,
          preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Se), e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = Se), e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Se),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
              var t = e.button;
              return null == e.which && Te.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && ke.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            }
          },
          T.event.addProp
        ),
        T.each(
          { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
          function(e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function(e) {
                var n,
                  r = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (r && (r === this || T.contains(this, r))) ||
                    ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)),
                  n
                );
              }
            };
          }
        ),
        T.fn.extend({
          on: function(e, t, n, r) {
            return Ae(this, e, t, n, r);
          },
          one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1);
          },
          off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                T(e.delegateTarget).off(
                  r.namespace ? r.origType + '.' + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ('object' == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Ne),
              this.each(function() {
                T.event.remove(this, e, n, t);
              })
            );
          }
        });
      var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Oe(e, t) {
        return (j(e, 'table') && j(11 !== t.nodeType ? t : t.firstChild, 'tr') && T(e).children('tbody')[0]) || e;
      }
      function Pe(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
      }
      function _e(e) {
        return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
      }
      function Me(e, t) {
        var n, r, i, o, a, s, l, u;
        if (1 === t.nodeType) {
          if (J.hasData(e) && ((o = J.access(e)), (a = J.set(t, o)), (u = o.events)))
            for (i in (delete a.handle, (a.events = {}), u))
              for (n = 0, r = u[i].length; n < r; n++) T.event.add(t, i, u[i][n]);
          Z.hasData(e) && ((s = Z.access(e)), (l = T.extend({}, s)), Z.set(t, l));
        }
      }
      function Ie(e, t, n, r) {
        t = u.apply([], t);
        var i,
          o,
          a,
          s,
          l,
          c,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          g = y(h);
        if (g || (d > 1 && 'string' == typeof h && !m.checkClone && Le.test(h)))
          return e.each(function(i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())), Ie(o, t, n, r);
          });
        if (
          d &&
          ((o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = o), o || r)
        ) {
          for (s = (a = T.map(ve(i, 'script'), Pe)).length; f < d; f++)
            (l = i), f !== p && ((l = T.clone(l, !0, !0)), s && T.merge(a, ve(l, 'script'))), n.call(e[f], l, f);
          if (s)
            for (c = a[a.length - 1].ownerDocument, T.map(a, _e), f = 0; f < s; f++)
              (l = a[f]),
                he.test(l.type || '') &&
                  !J.access(l, 'globalEval') &&
                  T.contains(c, l) &&
                  (l.src && 'module' !== (l.type || '').toLowerCase()
                    ? T._evalUrl && T._evalUrl(l.src)
                    : w(l.textContent.replace(He, ''), c, l));
        }
        return e;
      }
      function Re(e, t, n) {
        for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || T.cleanData(ve(r)),
            r.parentNode && (n && T.contains(r.ownerDocument, r) && me(ve(r, 'script')), r.parentNode.removeChild(r));
        return e;
      }
      T.extend({
        htmlPrefilter: function(e) {
          return e.replace(je, '<$1></$2>');
        },
        clone: function(e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            l,
            u,
            c = e.cloneNode(!0),
            f = T.contains(e.ownerDocument, e);
          if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || T.isXMLDoc(e)))
            for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
              (s = o[r]),
                (l = a[r]),
                void 0,
                'input' === (u = l.nodeName.toLowerCase()) && de.test(s.type)
                  ? (l.checked = s.checked)
                  : ('input' !== u && 'textarea' !== u) || (l.defaultValue = s.defaultValue);
          if (t)
            if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
            else Me(e, c);
          return (a = ve(c, 'script')).length > 0 && me(a, !f && ve(e, 'script')), c;
        },
        cleanData: function(e) {
          for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
            if (Y(n)) {
              if ((t = n[J.expando])) {
                if (t.events) for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                n[J.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        }
      }),
        T.fn.extend({
          detach: function(e) {
            return Re(this, e, !0);
          },
          remove: function(e) {
            return Re(this, e);
          },
          text: function(e) {
            return U(
              this,
              function(e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function() {
                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function() {
            return Ie(this, arguments, function(e) {
              (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Oe(this, e).appendChild(e);
            });
          },
          prepend: function() {
            return Ie(this, arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Oe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function() {
            return Ie(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function() {
            return Ie(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (T.cleanData(ve(e, !1)), (e.textContent = ''));
            return this;
          },
          clone: function(e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function() {
                return T.clone(this, e, t);
              })
            );
          },
          html: function(e) {
            return U(
              this,
              function(e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ('string' == typeof e && !qe.test(e) && !ge[(pe.exec(e) || ['', ''])[1].toLowerCase()]) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType && (T.cleanData(ve(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function() {
            var e = [];
            return Ie(
              this,
              arguments,
              function(t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 && (T.cleanData(ve(this)), n && n.replaceChild(t, this));
              },
              e
            );
          }
        }),
        T.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith'
          },
          function(e, t) {
            T.fn[e] = function(e) {
              for (var n, r = [], i = T(e), o = i.length - 1, a = 0; a <= o; a++)
                (n = a === o ? this : this.clone(!0)), T(i[a])[t](n), c.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var $e = new RegExp('^(' + re + ')(?!px)[a-z%]+$', 'i'),
        Fe = function(e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        We = new RegExp(oe.join('|'), 'i');
      function Be(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || Fe(e)) &&
            ('' !== (a = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (a = T.style(e, t)),
            !m.pixelBoxStyles() &&
              $e.test(a) &&
              We.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? a + '' : a
        );
      }
      function ze(e, t) {
        return {
          get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }
      !(function() {
        function e() {
          if (c) {
            (u.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (c.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              Ce.appendChild(u).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = '1%' !== e.top),
              (l = 12 === t(e.marginLeft)),
              (c.style.right = '60%'),
              (s = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (c.style.position = 'absolute'),
              (o = 36 === c.offsetWidth || 'absolute'),
              Ce.removeChild(u),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          s,
          l,
          u = a.createElement('div'),
          c = a.createElement('div');
        c.style &&
          ((c.style.backgroundClip = 'content-box'),
          (c.cloneNode(!0).style.backgroundClip = ''),
          (m.clearCloneStyle = 'content-box' === c.style.backgroundClip),
          T.extend(m, {
            boxSizingReliable: function() {
              return e(), i;
            },
            pixelBoxStyles: function() {
              return e(), s;
            },
            pixelPosition: function() {
              return e(), r;
            },
            reliableMarginLeft: function() {
              return e(), l;
            },
            scrollboxSize: function() {
              return e(), o;
            }
          }));
      })();
      var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Ke = { letterSpacing: '0', fontWeight: '400' },
        Ge = ['Webkit', 'Moz', 'ms'],
        Ye = a.createElement('div').style;
      function Qe(e) {
        var t = T.cssProps[e];
        return (
          t ||
            (t = T.cssProps[e] =
              (function(e) {
                if (e in Ye) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--; ) if ((e = Ge[n] + t) in Ye) return e;
              })(e) || e),
          t
        );
      }
      function Je(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
      }
      function Ze(e, t, n, r, i, o) {
        var a = 'width' === t ? 1 : 0,
          s = 0,
          l = 0;
        if (n === (r ? 'border' : 'content')) return 0;
        for (; a < 4; a += 2)
          'margin' === n && (l += T.css(e, n + oe[a], !0, i)),
            r
              ? ('content' === n && (l -= T.css(e, 'padding' + oe[a], !0, i)),
                'margin' !== n && (l -= T.css(e, 'border' + oe[a] + 'Width', !0, i)))
              : ((l += T.css(e, 'padding' + oe[a], !0, i)),
                'padding' !== n
                  ? (l += T.css(e, 'border' + oe[a] + 'Width', !0, i))
                  : (s += T.css(e, 'border' + oe[a] + 'Width', !0, i)));
        return (
          !r &&
            o >= 0 &&
            (l += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5))),
          l
        );
      }
      function et(e, t, n) {
        var r = Fe(e),
          i = Be(e, t, r),
          o = 'border-box' === T.css(e, 'boxSizing', !1, r),
          a = o;
        if ($e.test(i)) {
          if (!n) return i;
          i = 'auto';
        }
        return (
          (a = a && (m.boxSizingReliable() || i === e.style[t])),
          ('auto' === i || (!parseFloat(i) && 'inline' === T.css(e, 'display', !1, r))) &&
            ((i = e['offset' + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
          (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? 'border' : 'content'), a, r, i) + 'px'
        );
      }
      function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = Be(e, 'opacity');
                return '' === n ? '1' : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              s = G(t),
              l = Xe.test(t),
              u = e.style;
            if ((l || (t = Qe(s)), (a = T.cssHooks[t] || T.cssHooks[s]), void 0 === n))
              return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
            'string' === (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = le(e, t, i)), (o = 'number')),
              null != n &&
                n == n &&
                ('number' === o && (n += (i && i[3]) || (T.cssNumber[s] ? '' : 'px')),
                m.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (u[t] = 'inherit'),
                (a && 'set' in a && void 0 === (n = a.set(e, n, r))) || (l ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css: function(e, t, n, r) {
          var i,
            o,
            a,
            s = G(t);
          return (
            Xe.test(t) || (t = Qe(s)),
            (a = T.cssHooks[t] || T.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            'normal' === i && t in Ke && (i = Ke[t]),
            '' === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
          );
        }
      }),
        T.each(['height', 'width'], function(e, t) {
          T.cssHooks[t] = {
            get: function(e, n, r) {
              if (n)
                return !Ue.test(T.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? et(e, t, r)
                  : se(e, Ve, function() {
                      return et(e, t, r);
                    });
            },
            set: function(e, n, r) {
              var i,
                o = Fe(e),
                a = 'border-box' === T.css(e, 'boxSizing', !1, o),
                s = r && Ze(e, t, r, a, o);
              return (
                a &&
                  m.scrollboxSize() === o.position &&
                  (s -= Math.ceil(
                    e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, 'border', !1, o) - 0.5
                  )),
                s && (i = ie.exec(n)) && 'px' !== (i[3] || 'px') && ((e.style[t] = n), (n = T.css(e, t))),
                Je(0, n, s)
              );
            }
          };
        }),
        (T.cssHooks.marginLeft = ze(m.reliableMarginLeft, function(e, t) {
          if (t)
            return (
              (parseFloat(Be(e, 'marginLeft')) ||
                e.getBoundingClientRect().left -
                  se(e, { marginLeft: 0 }, function() {
                    return e.getBoundingClientRect().left;
                  })) + 'px'
            );
        })),
        T.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
          (T.cssHooks[e + t] = {
            expand: function(n) {
              for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++)
                i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            }
          }),
            'margin' !== e && (T.cssHooks[e + t].set = Je);
        }),
        T.fn.extend({
          css: function(e, t) {
            return U(
              this,
              function(e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = T.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          }
        }),
        (T.Tween = tt),
        (tt.prototype = {
          constructor: tt,
          init: function(e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (T.cssNumber[n] ? '' : 'px'));
          },
          cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
          },
          run: function(e) {
            var t,
              n = tt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step && this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : tt.propHooks._default.set(this),
              this
            );
          }
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
          _default: {
            get: function(e) {
              var t;
              return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, '')) && 'auto' !== t
                ? t
                : 0;
            },
            set: function(e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType || (null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop])
                ? (e.elem[e.prop] = e.now)
                : T.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
          set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }),
        (T.easing = {
          linear: function(e) {
            return e;
          },
          swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: 'swing'
        }),
        (T.fx = tt.prototype.init),
        (T.fx.step = {});
      var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
      function at() {
        rt &&
          (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, T.fx.interval),
          T.fx.tick());
      }
      function st() {
        return (
          n.setTimeout(function() {
            nt = void 0;
          }),
          (nt = Date.now())
        );
      }
      function lt(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = oe[r])] = i['padding' + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function ut(e, t, n) {
        for (var r, i = (ct.tweeners[t] || []).concat(ct.tweeners['*']), o = 0, a = i.length; o < a; o++)
          if ((r = i[o].call(n, t, e))) return r;
      }
      function ct(e, t, n) {
        var r,
          i,
          o = 0,
          a = ct.prefilters.length,
          s = T.Deferred().always(function() {
            delete l.elem;
          }),
          l = function() {
            if (i) return !1;
            for (
              var t = nt || st(),
                n = Math.max(0, u.startTime + u.duration - t),
                r = 1 - (n / u.duration || 0),
                o = 0,
                a = u.tweens.length;
              o < a;
              o++
            )
              u.tweens[o].run(r);
            return (
              s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            );
          },
          u = s.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
              var r = T.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
              return u.tweens.push(r), r;
            },
            stop: function(t) {
              var n = 0,
                r = t ? u.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) u.tweens[n].run(1);
              return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
            }
          }),
          c = u.props;
        for (
          !(function(e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (
                ((i = t[(r = G(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = T.cssHooks[r]) && ('expand' in a))
              )
                for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(c, u.opts.specialEasing);
          o < a;
          o++
        )
          if ((r = ct.prefilters[o].call(u, e, c, u.opts)))
            return y(r.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
        return (
          T.map(c, ut, u),
          y(u.opts.start) && u.opts.start.call(e, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          T.fx.timer(T.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (T.Animation = T.extend(ct, {
        tweeners: {
          '*': [
            function(e, t) {
              var n = this.createTween(e, t);
              return le(n.elem, e, ie.exec(t), n), n;
            }
          ]
        },
        tweener: function(e, t) {
          y(e) ? ((t = e), (e = ['*'])) : (e = e.match(I));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]), (ct.tweeners[n] = ct.tweeners[n] || []), ct.tweeners[n].unshift(t);
        },
        prefilters: [
          function(e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              l,
              u,
              c,
              f = 'width' in t || 'height' in t,
              d = this,
              p = {},
              h = e.style,
              g = e.nodeType && ae(e),
              v = J.get(e, 'fxshow');
            for (r in (n.queue ||
              (null == (a = T._queueHooks(e, 'fx')).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function() {
                  a.unqueued || s();
                })),
              a.unqueued++,
              d.always(function() {
                d.always(function() {
                  a.unqueued--, T.queue(e, 'fx').length || a.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), it.test(i))) {
                if ((delete t[r], (o = o || 'toggle' === i), i === (g ? 'hide' : 'show'))) {
                  if ('show' !== i || !v || void 0 === v[r]) continue;
                  g = !0;
                }
                p[r] = (v && v[r]) || T.style(e, r);
              }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (u = v && v.display) && (u = J.get(e, 'display')),
                'none' === (c = T.css(e, 'display')) &&
                  (u ? (c = u) : (fe([e], !0), (u = e.style.display || u), (c = T.css(e, 'display')), fe([e]))),
                ('inline' === c || ('inline-block' === c && null != u)) &&
                  'none' === T.css(e, 'float') &&
                  (l ||
                    (d.done(function() {
                      h.display = u;
                    }),
                    null == u && ((c = h.display), (u = 'none' === c ? '' : c))),
                  (h.display = 'inline-block'))),
              n.overflow &&
                ((h.overflow = 'hidden'),
                d.always(function() {
                  (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              p))
                l ||
                  (v ? 'hidden' in v && (g = v.hidden) : (v = J.access(e, 'fxshow', { display: u })),
                  o && (v.hidden = !g),
                  g && fe([e], !0),
                  d.done(function() {
                    for (r in (g || fe([e]), J.remove(e, 'fxshow'), p)) T.style(e, r, p[r]);
                  })),
                  (l = ut(g ? v[r] : 0, r, d)),
                  r in v || ((v[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
          }
        ],
        prefilter: function(e, t) {
          t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
        }
      })),
        (T.speed = function(e, t, n) {
          var r =
            e && 'object' == typeof e
              ? T.extend({}, e)
              : { complete: n || (!n && t) || (y(e) && e), duration: e, easing: (n && t) || (t && !y(t) && t) };
          return (
            T.fx.off
              ? (r.duration = 0)
              : 'number' != typeof r.duration &&
                (r.duration in T.fx.speeds
                  ? (r.duration = T.fx.speeds[r.duration])
                  : (r.duration = T.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
            (r.old = r.complete),
            (r.complete = function() {
              y(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
            }),
            r
          );
        }),
        T.fn.extend({
          fadeTo: function(e, t, n, r) {
            return this.filter(ae)
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function(e, t, n, r) {
            var i = T.isEmptyObject(e),
              o = T.speed(t, n, r),
              a = function() {
                var t = ct(this, T.extend({}, e), o);
                (i || J.get(this, 'finish')) && t.stop(!0);
              };
            return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
          },
          stop: function(e, t, n) {
            var r = function(e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              'string' != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || 'fx', []),
              this.each(function() {
                var t = !0,
                  i = null != e && e + 'queueHooks',
                  o = T.timers,
                  a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function(e) {
            return (
              !1 !== e && (e = e || 'fx'),
              this.each(function() {
                var t,
                  n = J.get(this),
                  r = n[e + 'queue'],
                  i = n[e + 'queueHooks'],
                  o = T.timers,
                  a = r ? r.length : 0;
                for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
                  o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        T.each(['toggle', 'show', 'hide'], function(e, t) {
          var n = T.fn[t];
          T.fn[t] = function(e, r, i) {
            return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i);
          };
        }),
        T.each(
          {
            slideDown: lt('show'),
            slideUp: lt('hide'),
            slideToggle: lt('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' }
          },
          function(e, t) {
            T.fn[e] = function(e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function() {
          var e,
            t = 0,
            n = T.timers;
          for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (nt = void 0);
        }),
        (T.fx.timer = function(e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function() {
          rt || ((rt = !0), at());
        }),
        (T.fx.stop = function() {
          rt = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function(e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || 'fx'),
            this.queue(t, function(t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function() {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function() {
          var e = a.createElement('input'),
            t = a.createElement('select').appendChild(a.createElement('option'));
          (e.type = 'checkbox'),
            (m.checkOn = '' !== e.value),
            (m.optSelected = t.selected),
            ((e = a.createElement('input')).value = 't'),
            (e.type = 'radio'),
            (m.radioValue = 't' === e.value);
        })();
      var ft,
        dt = T.expr.attrHandle;
      T.fn.extend({
        attr: function(e, t) {
          return U(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
          return this.each(function() {
            T.removeAttr(this, e);
          });
        }
      }),
        T.extend({
          attr: function(e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === o && T.isXMLDoc(e)) ||
                    (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ft : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ''), n)
                    : i && 'get' in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = T.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function(e, t) {
                if (!m.radioValue && 'radio' === t && j(e, 'input')) {
                  var n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function(e, t) {
            var n,
              r = 0,
              i = t && t.match(I);
            if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
          }
        }),
        (ft = {
          set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
          var n = dt[t] || T.find.attr;
          dt[t] = function(e, t, r) {
            var i,
              o,
              a = t.toLowerCase();
            return r || ((o = dt[a]), (dt[a] = i), (i = null != n(e, t, r) ? a : null), (dt[a] = o)), i;
          };
        });
      var pt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;
      function gt(e) {
        return (e.match(I) || []).join(' ');
      }
      function vt(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
      }
      function mt(e) {
        return Array.isArray(e) ? e : ('string' == typeof e && e.match(I)) || [];
      }
      T.fn.extend({
        prop: function(e, t) {
          return U(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[T.propFix[e] || e];
          });
        }
      }),
        T.extend({
          prop: function(e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && T.isXMLDoc(e)) || ((t = T.propFix[t] || t), (i = T.propHooks[t])),
                void 0 !== n
                  ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && 'get' in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function(e) {
                var t = T.find.attr(e, 'tabindex');
                return t ? parseInt(t, 10) : pt.test(e.nodeName) || (ht.test(e.nodeName) && e.href) ? 0 : -1;
              }
            }
          },
          propFix: { for: 'htmlFor', class: 'className' }
        }),
        m.optSelected ||
          (T.propHooks.selected = {
            get: function(e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function(e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }),
        T.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable'
          ],
          function() {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function(e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              l = 0;
            if (y(e))
              return this.each(function(t) {
                T(this).addClass(e.call(this, t, vt(this)));
              });
            if ((t = mt(e)).length)
              for (; (n = this[l++]); )
                if (((i = vt(n)), (r = 1 === n.nodeType && ' ' + gt(i) + ' '))) {
                  for (a = 0; (o = t[a++]); ) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                  i !== (s = gt(r)) && n.setAttribute('class', s);
                }
            return this;
          },
          removeClass: function(e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              l = 0;
            if (y(e))
              return this.each(function(t) {
                T(this).removeClass(e.call(this, t, vt(this)));
              });
            if (!arguments.length) return this.attr('class', '');
            if ((t = mt(e)).length)
              for (; (n = this[l++]); )
                if (((i = vt(n)), (r = 1 === n.nodeType && ' ' + gt(i) + ' '))) {
                  for (a = 0; (o = t[a++]); ) for (; r.indexOf(' ' + o + ' ') > -1; ) r = r.replace(' ' + o + ' ', ' ');
                  i !== (s = gt(r)) && n.setAttribute('class', s);
                }
            return this;
          },
          toggleClass: function(e, t) {
            var n = typeof e,
              r = 'string' === n || Array.isArray(e);
            return 'boolean' == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : y(e)
              ? this.each(function(n) {
                  T(this).toggleClass(e.call(this, n, vt(this), t), t);
                })
              : this.each(function() {
                  var t, i, o, a;
                  if (r)
                    for (i = 0, o = T(this), a = mt(e); (t = a[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && 'boolean' !== n) ||
                      ((t = vt(this)) && J.set(this, '__className__', t),
                      this.setAttribute &&
                        this.setAttribute('class', t || !1 === e ? '' : J.get(this, '__className__') || ''));
                });
          },
          hasClass: function(e) {
            var t,
              n,
              r = 0;
            for (t = ' ' + e + ' '; (n = this[r++]); )
              if (1 === n.nodeType && (' ' + gt(vt(n)) + ' ').indexOf(t) > -1) return !0;
            return !1;
          }
        });
      var yt = /\r/g;
      T.fn.extend({
        val: function(e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = y(e)),
              this.each(function(n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, T(this).val()) : e)
                    ? (i = '')
                    : 'number' == typeof i
                    ? (i += '')
                    : Array.isArray(i) &&
                      (i = T.map(i, function(e) {
                        return null == e ? '' : e + '';
                      })),
                  ((t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, i, 'value')) ||
                    (this.value = i));
              }))
            : i
            ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) &&
              'get' in t &&
              void 0 !== (n = t.get(i, 'value'))
              ? n
              : 'string' == typeof (n = i.value)
              ? n.replace(yt, '')
              : null == n
              ? ''
              : n
            : void 0;
        }
      }),
        T.extend({
          valHooks: {
            option: {
              get: function(e) {
                var t = T.find.attr(e, 'value');
                return null != t ? t : gt(T.text(e));
              }
            },
            select: {
              get: function(e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = 'select-one' === e.type,
                  s = a ? null : [],
                  l = a ? o + 1 : i.length;
                for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !j(n.parentNode, 'optgroup'))
                  ) {
                    if (((t = T(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function(e, t) {
                for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--; )
                  ((r = i[a]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              }
            }
          }
        }),
        T.each(['radio', 'checkbox'], function() {
          (T.valHooks[this] = {
            set: function(e, t) {
              if (Array.isArray(t)) return (e.checked = T.inArray(T(e).val(), t) > -1);
            }
          }),
            m.checkOn ||
              (T.valHooks[this].get = function(e) {
                return null === e.getAttribute('value') ? 'on' : e.value;
              });
        }),
        (m.focusin = 'onfocusin' in n);
      var bt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function(e, t, r, i) {
          var o,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            g = [r || a],
            v = h.call(e, 'type') ? e.type : e,
            m = h.call(e, 'namespace') ? e.namespace.split('.') : [];
          if (
            ((s = p = l = r = r || a),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !bt.test(v + T.event.triggered) &&
              (v.indexOf('.') > -1 && ((v = (m = v.split('.')).shift()), m.sort()),
              (c = v.indexOf(':') < 0 && 'on' + v),
              ((e = e[T.expando] ? e : new T.Event(v, 'object' == typeof e && e)).isTrigger = i ? 2 : 3),
              (e.namespace = m.join('.')),
              (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (d = T.event.special[v] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, t)))
          ) {
            if (!i && !d.noBubble && !b(r)) {
              for (u = d.delegateType || v, bt.test(u + v) || (s = s.parentNode); s; s = s.parentNode)
                g.push(s), (l = s);
              l === (r.ownerDocument || a) && g.push(l.defaultView || l.parentWindow || n);
            }
            for (o = 0; (s = g[o++]) && !e.isPropagationStopped(); )
              (p = s),
                (e.type = o > 1 ? u : d.bindType || v),
                (f = (J.get(s, 'events') || {})[e.type] && J.get(s, 'handle')) && f.apply(s, t),
                (f = c && s[c]) &&
                  f.apply &&
                  Y(s) &&
                  ((e.result = f.apply(s, t)), !1 === e.result && e.preventDefault());
            return (
              (e.type = v),
              i ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(g.pop(), t)) ||
                !Y(r) ||
                (c &&
                  y(r[v]) &&
                  !b(r) &&
                  ((l = r[c]) && (r[c] = null),
                  (T.event.triggered = v),
                  e.isPropagationStopped() && p.addEventListener(v, xt),
                  r[v](),
                  e.isPropagationStopped() && p.removeEventListener(v, xt),
                  (T.event.triggered = void 0),
                  l && (r[c] = l))),
              e.result
            );
          }
        },
        simulate: function(e, t, n) {
          var r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(r, null, t);
        }
      }),
        T.fn.extend({
          trigger: function(e, t) {
            return this.each(function() {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          }
        }),
        m.focusin ||
          T.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
            var n = function(e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function() {
                var r = this.ownerDocument || this,
                  i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
              },
              teardown: function() {
                var r = this.ownerDocument || this,
                  i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
              }
            };
          });
      var wt = n.location,
        Ct = Date.now(),
        Tt = /\?/;
      T.parseXML = function(e) {
        var t;
        if (!e || 'string' != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, 'text/xml');
        } catch (e) {
          t = void 0;
        }
        return (t && !t.getElementsByTagName('parsererror').length) || T.error('Invalid XML: ' + e), t;
      };
      var kt = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
      function Dt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          T.each(t, function(t, i) {
            n || kt.test(e) ? r(e, i) : Dt(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, r);
          });
        else if (n || 'object' !== C(t)) r(e, t);
        else for (i in t) Dt(e + '[' + i + ']', t[i], n, r);
      }
      (T.param = function(e, t) {
        var n,
          r = [],
          i = function(e, t) {
            var n = y(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
          };
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function() {
            i(this.name, this.value);
          });
        else for (n in e) Dt(n, e[n], t, i);
        return r.join('&');
      }),
        T.fn.extend({
          serialize: function() {
            return T.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var e = T.prop(this, 'elements');
              return e ? T.makeArray(e) : this;
            })
              .filter(function() {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(':disabled') &&
                  Nt.test(this.nodeName) &&
                  !St.test(e) &&
                  (this.checked || !de.test(e))
                );
              })
              .map(function(e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function(e) {
                      return { name: t.name, value: e.replace(Et, '\r\n') };
                    })
                  : { name: t.name, value: n.replace(Et, '\r\n') };
              })
              .get();
          }
        });
      var At = /%20/g,
        jt = /#.*$/,
        qt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        Ot = /^\/\//,
        Pt = {},
        _t = {},
        Mt = '*/'.concat('*'),
        It = a.createElement('a');
      function Rt(e) {
        return function(t, n) {
          'string' != typeof t && ((n = t), (t = '*'));
          var r,
            i = 0,
            o = t.toLowerCase().match(I) || [];
          if (y(n))
            for (; (r = o[i++]); )
              '+' === r[0] ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
      }
      function $t(e, t, n, r) {
        var i = {},
          o = e === _t;
        function a(s) {
          var l;
          return (
            (i[s] = !0),
            T.each(e[s] || [], function(e, s) {
              var u = s(t, n, r);
              return 'string' != typeof u || o || i[u] ? (o ? !(l = u) : void 0) : (t.dataTypes.unshift(u), a(u), !1);
            }),
            l
          );
        }
        return a(t.dataTypes[0]) || (!i['*'] && a('*'));
      }
      function Ft(e, t) {
        var n,
          r,
          i = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && T.extend(!0, e, r), e;
      }
      (It.href = wt.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: wt.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': Mt,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript'
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
            converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': T.parseXML },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, T.ajaxSettings), t) : Ft(T.ajaxSettings, e);
          },
          ajaxPrefilter: Rt(Pt),
          ajaxTransport: Rt(_t),
          ajax: function(e, t) {
            'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              s,
              l,
              u,
              c,
              f,
              d,
              p,
              h = T.ajaxSetup({}, t),
              g = h.context || h,
              v = h.context && (g.nodeType || g.jquery) ? T(g) : T.event,
              m = T.Deferred(),
              y = T.Callbacks('once memory'),
              b = h.statusCode || {},
              x = {},
              w = {},
              C = 'canceled',
              k = {
                readyState: 0,
                getResponseHeader: function(e) {
                  var t;
                  if (c) {
                    if (!s) for (s = {}; (t = Lt.exec(o)); ) s[t[1].toLowerCase()] = t[2];
                    t = s[e.toLowerCase()];
                  }
                  return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                  return c ? o : null;
                },
                setRequestHeader: function(e, t) {
                  return null == c && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (x[e] = t)), this;
                },
                overrideMimeType: function(e) {
                  return null == c && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                  var t;
                  if (e)
                    if (c) k.always(e[k.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function(e) {
                  var t = e || C;
                  return r && r.abort(t), E(0, t), this;
                }
              };
            if (
              (m.promise(k),
              (h.url = ((e || h.url || wt.href) + '').replace(Ot, wt.protocol + '//')),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || '*').toLowerCase().match(I) || ['']),
              null == h.crossDomain)
            ) {
              u = a.createElement('a');
              try {
                (u.href = h.url),
                  (u.href = u.href),
                  (h.crossDomain = It.protocol + '//' + It.host != u.protocol + '//' + u.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data && h.processData && 'string' != typeof h.data && (h.data = T.param(h.data, h.traditional)),
              $t(Pt, h, t, k),
              c)
            )
              return k;
            for (d in ((f = T.event && h.global) && 0 == T.active++ && T.event.trigger('ajaxStart'),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Ht.test(h.type)),
            (i = h.url.replace(jt, '')),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                (h.data = h.data.replace(At, '+'))
              : ((p = h.url.slice(i.length)),
                h.data &&
                  (h.processData || 'string' == typeof h.data) &&
                  ((i += (Tt.test(i) ? '&' : '?') + h.data), delete h.data),
                !1 === h.cache && ((i = i.replace(qt, '$1')), (p = (Tt.test(i) ? '&' : '?') + '_=' + Ct++ + p)),
                (h.url = i + p)),
            h.ifModified &&
              (T.lastModified[i] && k.setRequestHeader('If-Modified-Since', T.lastModified[i]),
              T.etag[i] && k.setRequestHeader('If-None-Match', T.etag[i])),
            ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
              k.setRequestHeader('Content-Type', h.contentType),
            k.setRequestHeader(
              'Accept',
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + Mt + '; q=0.01' : '')
                : h.accepts['*']
            ),
            h.headers))
              k.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || c)) return k.abort();
            if (((C = 'abort'), y.add(h.complete), k.done(h.success), k.fail(h.error), (r = $t(_t, h, t, k)))) {
              if (((k.readyState = 1), f && v.trigger('ajaxSend', [k, h]), c)) return k;
              h.async &&
                h.timeout > 0 &&
                (l = n.setTimeout(function() {
                  k.abort('timeout');
                }, h.timeout));
              try {
                (c = !1), r.send(x, E);
              } catch (e) {
                if (c) throw e;
                E(-1, e);
              }
            } else E(-1, 'No Transport');
            function E(e, t, a, s) {
              var u,
                d,
                p,
                x,
                w,
                C = t;
              c ||
                ((c = !0),
                l && n.clearTimeout(l),
                (r = void 0),
                (o = s || ''),
                (k.readyState = e > 0 ? 4 : 0),
                (u = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (x = (function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes; '*' === l[0]; )
                      l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
                    if (r)
                      for (i in s)
                        if (s[i] && s[i].test(r)) {
                          l.unshift(i);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (i in n) {
                        if (!l[0] || e.converters[i + ' ' + l[0]]) {
                          o = i;
                          break;
                        }
                        a || (a = i);
                      }
                      o = o || a;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(h, k, a)),
                (x = (function(e, t, n, r) {
                  var i,
                    o,
                    a,
                    s,
                    l,
                    u = {},
                    c = e.dataTypes.slice();
                  if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = c.shift()))
                    )
                      if ('*' === o) o = l;
                      else if ('*' !== l && l !== o) {
                        if (!(a = u[l + ' ' + o] || u['* ' + o]))
                          for (i in u)
                            if ((s = i.split(' '))[1] === o && (a = u[l + ' ' + s[0]] || u['* ' + s[0]])) {
                              !0 === a ? (a = u[i]) : !0 !== u[i] && ((o = s[0]), c.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return { state: 'parsererror', error: a ? e : 'No conversion from ' + l + ' to ' + o };
                            }
                      }
                  return { state: 'success', data: t };
                })(h, x, k, u)),
                u
                  ? (h.ifModified &&
                      ((w = k.getResponseHeader('Last-Modified')) && (T.lastModified[i] = w),
                      (w = k.getResponseHeader('etag')) && (T.etag[i] = w)),
                    204 === e || 'HEAD' === h.type
                      ? (C = 'nocontent')
                      : 304 === e
                      ? (C = 'notmodified')
                      : ((C = x.state), (d = x.data), (u = !(p = x.error))))
                  : ((p = C), (!e && C) || ((C = 'error'), e < 0 && (e = 0))),
                (k.status = e),
                (k.statusText = (t || C) + ''),
                u ? m.resolveWith(g, [d, C, k]) : m.rejectWith(g, [k, C, p]),
                k.statusCode(b),
                (b = void 0),
                f && v.trigger(u ? 'ajaxSuccess' : 'ajaxError', [k, h, u ? d : p]),
                y.fireWith(g, [k, C]),
                f && (v.trigger('ajaxComplete', [k, h]), --T.active || T.event.trigger('ajaxStop')));
            }
            return k;
          },
          getJSON: function(e, t, n) {
            return T.get(e, t, n, 'json');
          },
          getScript: function(e, t) {
            return T.get(e, void 0, t, 'script');
          }
        }),
        T.each(['get', 'post'], function(e, t) {
          T[t] = function(e, n, r, i) {
            return (
              y(n) && ((i = i || r), (r = n), (n = void 0)),
              T.ajax(T.extend({ url: e, type: t, dataType: i, data: n, success: r }, T.isPlainObject(e) && e))
            );
          };
        }),
        (T._evalUrl = function(e) {
          return T.ajax({ url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 });
        }),
        T.fn.extend({
          wrapAll: function(e) {
            var t;
            return (
              this[0] &&
                (y(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function() {
                    for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function(e) {
            return y(e)
              ? this.each(function(t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function() {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function(e) {
            var t = y(e);
            return this.each(function(n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function(e) {
            return (
              this.parent(e)
                .not('body')
                .each(function() {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          }
        }),
        (T.expr.pseudos.hidden = function(e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function(e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (T.ajaxSettings.xhr = function() {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Wt = { 0: 200, 1223: 204 },
        Bt = T.ajaxSettings.xhr();
      (m.cors = !!Bt && 'withCredentials' in Bt),
        (m.ajax = Bt = !!Bt),
        T.ajaxTransport(function(e) {
          var t, r;
          if (m.cors || (Bt && !e.crossDomain))
            return {
              send: function(i, o) {
                var a,
                  s = e.xhr();
                if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                e.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest'),
                i))
                  s.setRequestHeader(a, i[a]);
                (t = function(e) {
                  return function() {
                    t &&
                      ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      'abort' === e
                        ? s.abort()
                        : 'error' === e
                        ? 'number' != typeof s.status
                          ? o(0, 'error')
                          : o(s.status, s.statusText)
                        : o(
                            Wt[s.status] || s.status,
                            s.statusText,
                            'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t('error')),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function() {
                        4 === s.readyState &&
                          n.setTimeout(function() {
                            t && r();
                          });
                      }),
                  (t = t('abort'));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function() {
                t && t();
              }
            };
        }),
        T.ajaxPrefilter(function(e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function(e) {
              return T.globalEval(e), e;
            }
          }
        }),
        T.ajaxPrefilter('script', function(e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
        }),
        T.ajaxTransport('script', function(e) {
          var t, n;
          if (e.crossDomain)
            return {
              send: function(r, i) {
                (t = T('<script>')
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    'load error',
                    (n = function(e) {
                      t.remove(), (n = null), e && i('error' === e.type ? 404 : 200, e.type);
                    })
                  )),
                  a.head.appendChild(t[0]);
              },
              abort: function() {
                n && n();
              }
            };
        });
      var zt,
        Ut = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function() {
          var e = Ut.pop() || T.expando + '_' + Ct++;
          return (this[e] = !0), e;
        }
      }),
        T.ajaxPrefilter('json jsonp', function(e, t, r) {
          var i,
            o,
            a,
            s =
              !1 !== e.jsonp &&
              (Xt.test(e.url)
                ? 'url'
                : 'string' == typeof e.data &&
                  0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                  Xt.test(e.data) &&
                  'data');
          if (s || 'jsonp' === e.dataTypes[0])
            return (
              (i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(Xt, '$1' + i))
                : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
              (e.converters['script json'] = function() {
                return a || T.error(i + ' was not called'), a[0];
              }),
              (e.dataTypes[0] = 'json'),
              (o = n[i]),
              (n[i] = function() {
                a = arguments;
              }),
              r.always(function() {
                void 0 === o ? T(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(i)),
                  a && y(o) && o(a[0]),
                  (a = o = void 0);
              }),
              'script'
            );
        }),
        (m.createHTMLDocument =
          (((zt = a.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>'),
          2 === zt.childNodes.length)),
        (T.parseHTML = function(e, t, n) {
          return 'string' != typeof e
            ? []
            : ('boolean' == typeof t && ((n = t), (t = !1)),
              t ||
                (m.createHTMLDocument
                  ? (((r = (t = a.implementation.createHTMLDocument('')).createElement('base')).href = a.location.href),
                    t.head.appendChild(r))
                  : (t = a)),
              (i = q.exec(e)),
              (o = !n && []),
              i
                ? [t.createElement(i[1])]
                : ((i = we([e], t, o)), o && o.length && T(o).remove(), T.merge([], i.childNodes)));
          var r, i, o;
        }),
        (T.fn.load = function(e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(' ');
          return (
            s > -1 && ((r = gt(e.slice(s))), (e = e.slice(0, s))),
            y(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (i = 'POST'),
            a.length > 0 &&
              T.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
                .done(function(e) {
                  (o = arguments),
                    a.html(
                      r
                        ? T('<div>')
                            .append(T.parseHTML(e))
                            .find(r)
                        : e
                    );
                })
                .always(
                  n &&
                    function(e, t) {
                      a.each(function() {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        T.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(e, t) {
          T.fn[t] = function(e) {
            return this.on(t, e);
          };
        }),
        (T.expr.pseudos.animated = function(e) {
          return T.grep(T.timers, function(t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function(e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              l,
              u = T.css(e, 'position'),
              c = T(e),
              f = {};
            'static' === u && (e.style.position = 'relative'),
              (s = c.offset()),
              (o = T.css(e, 'top')),
              (l = T.css(e, 'left')),
              ('absolute' === u || 'fixed' === u) && (o + l).indexOf('auto') > -1
                ? ((a = (r = c.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
              y(t) && (t = t.call(e, n, T.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + i),
              'using' in t ? t.using.call(e, f) : c.css(f);
          }
        }),
        T.fn.extend({
          offset: function(e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function(t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function() {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ('fixed' === T.css(r, 'position')) t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                  e && (e === n.body || e === n.documentElement) && 'static' === T.css(e, 'position');

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = T(e).offset()).top += T.css(e, 'borderTopWidth', !0)),
                  (i.left += T.css(e, 'borderLeftWidth', !0)));
              }
              return {
                top: t.top - i.top - T.css(r, 'marginTop', !0),
                left: t.left - i.left - T.css(r, 'marginLeft', !0)
              };
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (var e = this.offsetParent; e && 'static' === T.css(e, 'position'); ) e = e.offsetParent;
              return e || Ce;
            });
          }
        }),
        T.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(e, t) {
          var n = 'pageYOffset' === t;
          T.fn[e] = function(r) {
            return U(
              this,
              function(e, r, i) {
                var o;
                if ((b(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
              },
              e,
              r,
              arguments.length
            );
          };
        }),
        T.each(['top', 'left'], function(e, t) {
          T.cssHooks[t] = ze(m.pixelPosition, function(e, n) {
            if (n) return (n = Be(e, t)), $e.test(n) ? T(e).position()[t] + 'px' : n;
          });
        }),
        T.each({ Height: 'height', Width: 'width' }, function(e, t) {
          T.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function(n, r) {
            T.fn[r] = function(i, o) {
              var a = arguments.length && (n || 'boolean' != typeof i),
                s = n || (!0 === i || !0 === o ? 'margin' : 'border');
              return U(
                this,
                function(t, n, i) {
                  var o;
                  return b(t)
                    ? 0 === r.indexOf('outer')
                      ? t['inner' + e]
                      : t.document.documentElement['client' + e]
                    : 9 === t.nodeType
                    ? ((o = t.documentElement),
                      Math.max(
                        t.body['scroll' + e],
                        o['scroll' + e],
                        t.body['offset' + e],
                        o['offset' + e],
                        o['client' + e]
                      ))
                    : void 0 === i
                    ? T.css(t, n, s)
                    : T.style(t, n, i, s);
                },
                t,
                a ? i : void 0,
                a
              );
            };
          });
        }),
        T.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' '
          ),
          function(e, t) {
            T.fn[t] = function(e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          }
        ),
        T.fn.extend({
          hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        }),
        T.fn.extend({
          bind: function(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function(e, t) {
            return this.off(e, null, t);
          },
          delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
          }
        }),
        (T.proxy = function(e, t) {
          var n, r, i;
          if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
            return (
              (r = l.call(arguments, 2)),
              ((i = function() {
                return e.apply(t || this, r.concat(l.call(arguments)));
              }).guid = e.guid = e.guid || T.guid++),
              i
            );
        }),
        (T.holdReady = function(e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = j),
        (T.isFunction = y),
        (T.isWindow = b),
        (T.camelCase = G),
        (T.type = C),
        (T.now = Date.now),
        (T.isNumeric = function(e) {
          var t = T.type(e);
          return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
        }),
        void 0 ===
          (r = function() {
            return T;
          }.apply(t, [])) || (e.exports = r);
      var Vt = n.jQuery,
        Kt = n.$;
      return (
        (T.noConflict = function(e) {
          return n.$ === T && (n.$ = Kt), e && n.jQuery === T && (n.jQuery = Vt), T;
        }),
        i || (n.jQuery = n.$ = T),
        T
      );
    });
  },
  bZ5D: function(e, t, n) {
    (function(e) {
      var t,
        n = !0;
      function r(e, t, n) {
        var r;
        return function() {
          var i = this,
            o = arguments;
          clearTimeout(r),
            (r = setTimeout(function() {
              (r = null), n || e.apply(i, o);
            }, t)),
            n && !r && e.apply(i, o);
        };
      }
      e(document).ready(function() {
        nowuiKit.initNavbarImage(),
          ($navbar = e('.navbar[color-on-scroll]')),
          (scroll_distance = $navbar.attr('color-on-scroll') || 500),
          0 != e('.navbar[color-on-scroll]').length &&
            (nowuiKit.checkScrollForTransparentNavbar(),
            e(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar)),
          e('.bootstrap-switch').each(function() {
            ($this = e(this)),
              (data_on_label = $this.data('on-label') || ''),
              (data_off_label = $this.data('off-label') || ''),
              $this.bootstrapSwitch({ onText: data_on_label, offText: data_off_label });
          }),
          e(window).width() >= 992 &&
            ((t = e('.page-header-image[data-parallax="true"]')),
            e(window).on('scroll', nowuiKitDemo.checkScrollForParallax)),
          e('.date-picker').each(function() {
            e(this)
              .datepicker({
                templates: {
                  leftArrow: '<i class="now-ui-icons arrows-1_minimal-left"></i>',
                  rightArrow: '<i class="now-ui-icons arrows-1_minimal-right"></i>'
                }
              })
              .on('show', function() {
                e('.datepicker').addClass('open'),
                  (datepicker_color = e(this).data('datepicker-color')),
                  0 != datepicker_color.length && e('.datepicker').addClass('datepicker-' + datepicker_color);
              })
              .on('hide', function() {
                e('.datepicker').removeClass('open');
              });
          }),
          e('.switch.switch-background input').on('switchChange.bootstrapSwitch', function() {
            ($input = e(this)),
              $input.is(':checked')
                ? (e(
                    '.section:not(.section-notifications):not(.section-tabs):not(.section-download):not(.section-examples)'
                  ).each(function() {
                    e(this).fadeOut('fast', function() {
                      e(this).removeAttr('data-background-color', 'orange'), e(this).fadeIn('fast');
                    });
                  }),
                  switch_white.removeClass('hidden').addClass('visible'),
                  switch_orange.removeClass('visible').addClass('hidden'),
                  e('.btn-primary,.btn-default,.btn-link').each(function() {
                    e(this).removeClass('btn-neutral');
                  }),
                  e(
                    '.section.section-navbars > .container .navbar.bg-primary, .section.section-navbars > .container .navbar.bg-info'
                  ).each(function() {
                    e(this).removeClass('bg-white');
                  }),
                  e('button[data-toggle="popover"], button[data-toggle="tooltip"]').each(function() {
                    e(this).removeClass('btn-neutral'), e(this).addClass('btn-default');
                  }),
                  e('.nav.nav-pills').each(function() {
                    e(this).removeClass('nav-pills-neutral'),
                      0 == e('.nav.nav-pills.nav-pills-neutral').length && e(this).addClass('nav-pills-primary');
                  }),
                  e('.pagination').each(function() {
                    e(this).removeClass('pagination-neutral');
                  }),
                  e('.progress-container').each(function() {
                    e(this).removeClass('progress-neutral'),
                      0 == e('.progress-container.progress-neutral').length && e(this).addClass('progress-primary');
                  }),
                  e('.badge').each(function() {
                    e(this).removeClass('badge-neutral');
                  }),
                  e('.slider').each(function() {
                    e(this).removeClass('slider-neutral'),
                      0 == e('.slider.slider-neutral').length && e(this).addClass('slider-primary');
                  }),
                  e('.blockquote').each(function() {
                    e(this).removeClass('blockquote-white'),
                      0 == e('.blockuote.blockquote-white').length && e(this).addClass('blockquote-primary');
                  }),
                  !1)
                : (e(
                    '.section:not(.section-notifications):not(.section-tabs):not(.section-download):not(.section-examples)'
                  ).each(function() {
                    e(this).fadeOut('fast', function() {
                      e(this).attr('data-background-color', 'orange'), e(this).fadeIn('fast');
                    });
                  }),
                  (switch_orange = e('.navbar .collapse .navbar-nav.navbar-switch .nav-item .nav-link p.hidden')),
                  (switch_white = e('.navbar .collapse .navbar-nav.navbar-switch .nav-item .nav-link p.visible')),
                  switch_white.removeClass('visible').addClass('hidden'),
                  switch_orange.removeClass('hidden').addClass('visible'),
                  e(
                    '.section.section-navbars > .container .navbar.bg-primary, .section.section-navbars > .container .navbar.bg-info'
                  ).each(function() {
                    e(this).addClass('bg-white');
                  }),
                  e('.btn-primary,.btn-default,.btn-link').each(function() {
                    e(this).addClass('btn-neutral');
                  }),
                  e('button[data-toggle="popover"], button[data-toggle="tooltip"]').each(function() {
                    e(this).removeClass('btn-default'), e(this).addClass('btn-neutral');
                  }),
                  e('.nav.nav-pills').each(function() {
                    e(this).addClass('nav-pills-neutral'),
                      0 != e('.nav.nav-pills.nav-pills-primary').length && e(this).removeClass('nav-pills-primary');
                  }),
                  e('.pagination').each(function() {
                    e(this).addClass('pagination-neutral');
                  }),
                  e('.progress-container').each(function() {
                    e(this).addClass('progress-neutral'),
                      0 != e('.progress-container.progress-neutral').length && e(this).removeClass('progress-primary');
                  }),
                  e('.badge').each(function() {
                    e(this).addClass('badge-neutral');
                  }),
                  e('.slider').each(function() {
                    e(this).addClass('slider-neutral'),
                      0 != e('.slider.slider-neutral').length &&
                        e(this)
                          .removeClass('slider-primary')
                          .removeClass('slider-default');
                  }),
                  e('.blockquote').each(function() {
                    e(this).addClass('blockquote-white'),
                      0 != e('.blockuote.blockquote-white').length && e(this).removeClass('blockquote-primary');
                  }),
                  !0);
          }),
          0 != e('.twitter-sharrre').length &&
            e('.twitter-sharrre').sharrre({
              share: { twitter: !0 },
              enableHover: !1,
              enableTracking: !0,
              enableCounter: !1,
              buttons: { twitter: { via: 'CreativeTim' } },
              click: function(e, t) {
                e.simulateClick(), e.openPopup('twitter');
              },
              template: '<i class="fa fa-twitter"></i>',
              url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
            }),
          0 != e('.twitter-sharrre-nav').length &&
            e('.twitter-sharrre-nav').sharrre({
              share: { twitter: !0 },
              enableHover: !1,
              enableTracking: !0,
              enableCounter: !1,
              buttons: { twitter: { via: 'CreativeTim' } },
              click: function(e, t) {
                e.simulateClick(), e.openPopup('twitter');
              },
              template: '<i class="fa fa-twitter"></i><p class="hidden-lg-up">Twitter</p>',
              url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
            }),
          0 != e('.facebook-sharrre').length &&
            e('.facebook-sharrre').sharrre({
              share: { facebook: !0 },
              enableHover: !1,
              enableTracking: !0,
              enableCounter: !1,
              click: function(e, t) {
                e.simulateClick(), e.openPopup('facebook');
              },
              template: '<i class="fa fa-facebook-square"></i>',
              url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
            }),
          0 != e('.facebook-sharrre-nav').length &&
            e('.facebook-sharrre-nav').sharrre({
              share: { facebook: !0 },
              enableHover: !1,
              enableTracking: !0,
              enableCounter: !1,
              click: function(e, t) {
                e.simulateClick(), e.openPopup('facebook');
              },
              template: '<i class="fa fa-facebook-square"></i><p class="hidden-lg-up">Facebook</p>',
              url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
            }),
          0 != e('.linkedin-sharrre').length &&
            e('.linkedin-sharrre').sharrre({
              share: { linkedin: !0 },
              enableCounter: !1,
              enableHover: !1,
              enableTracking: !0,
              click: function(e, t) {
                e.simulateClick(), e.openPopup('linkedin');
              },
              template: '<i class="fa fa-linkedin"></i>',
              url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
            }),
          0 != e('.linkedin-sharrre-nav').length &&
            e('.linkedin-sharrre-nav').sharrre({
              share: { linkedin: !0 },
              enableCounter: !1,
              enableHover: !1,
              enableTracking: !0,
              click: function(e, t) {
                e.simulateClick(), e.openPopup('linkedin');
              },
              template: '<i class="fa fa-linkedin"></i><p class="hidden-lg-up">LinkedIn</p>',
              url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
            });
      }),
        e(window).on('resize', function() {
          nowuiKit.initNavbarImage();
        }),
        e(document).on('click', '.navbar-toggler', function() {
          ($toggle = e(this)),
            1 == nowuiKit.misc.navbar_menu_visible
              ? (e('html').removeClass('nav-open'),
                (nowuiKit.misc.navbar_menu_visible = 0),
                e('#bodyClick').remove(),
                setTimeout(function() {
                  $toggle.removeClass('toggled');
                }, 550))
              : (setTimeout(function() {
                  $toggle.addClass('toggled');
                }, 580),
                (div = '<div id="bodyClick"></div>'),
                e(div)
                  .appendTo('body')
                  .click(function() {
                    e('html').removeClass('nav-open'),
                      (nowuiKit.misc.navbar_menu_visible = 0),
                      setTimeout(function() {
                        $toggle.removeClass('toggled'), e('#bodyClick').remove();
                      }, 550);
                  }),
                e('html').addClass('nav-open'),
                (nowuiKit.misc.navbar_menu_visible = 1));
        }),
        (nowuiKit = {
          misc: { navbar_menu_visible: 0 },
          checkScrollForTransparentNavbar: r(function() {
            e(document).scrollTop() > scroll_distance
              ? n && ((n = !1), e('.navbar[color-on-scroll]').removeClass('navbar-transparent'))
              : n || ((n = !0), e('.navbar[color-on-scroll]').addClass('navbar-transparent'));
          }, 17),
          initNavbarImage: function() {
            var t = e('.navbar')
                .find('.navbar-translate')
                .siblings('.navbar-collapse'),
              n = t.data('nav-image');
            e(window).width() < 991 || e('body').hasClass('burger-menu')
              ? void 0 != n &&
                t
                  .css('background', "url('" + n + "')")
                  .removeAttr('data-nav-image')
                  .css('background-size', 'cover')
                  .addClass('has-image')
              : void 0 != n &&
                t
                  .css('background', '')
                  .attr('data-nav-image', '' + n)
                  .css('background-size', '')
                  .removeClass('has-image');
          },
          initSliders: function() {
            var e = document.getElementById('sliderRegular');
            noUiSlider.create(e, { start: 40, connect: [!0, !1], range: { min: 0, max: 100 } });
            var t = document.getElementById('sliderDouble');
            noUiSlider.create(t, { start: [20, 60], connect: !0, range: { min: 0, max: 100 } });
          }
        }),
        (nowuiKitDemo = {
          checkScrollForParallax: r(function() {
            e(this).scrollTop();
            (oVal = e(window).scrollTop() / 3),
              t.css({
                transform: 'translate3d(0,' + oVal + 'px,0)',
                '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
                '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
                '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
              });
          }, 6)
        });
    }.call(t, n('7t+N')));
  },
  dbeE: function(e, t) {},
  'l//d': function(e, t) {}
});
