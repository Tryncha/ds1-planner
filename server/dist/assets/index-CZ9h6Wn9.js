(function () {
  const c = document.createElement('link').relList;
  if (c && c.supports && c.supports('modulepreload')) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) r(f);
  new MutationObserver((f) => {
    for (const d of f)
      if (d.type === 'childList')
        for (const h of d.addedNodes) h.tagName === 'LINK' && h.rel === 'modulepreload' && r(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(f) {
    const d = {};
    return (
      f.integrity && (d.integrity = f.integrity),
      f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === 'use-credentials'
        ? (d.credentials = 'include')
        : f.crossOrigin === 'anonymous'
        ? (d.credentials = 'omit')
        : (d.credentials = 'same-origin'),
      d
    );
  }
  function r(f) {
    if (f.ep) return;
    f.ep = !0;
    const d = s(f);
    fetch(f.href, d);
  }
})();
var ls = { exports: {} },
  tu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vh;
function mp() {
  if (vh) return tu;
  vh = 1;
  var a = Symbol.for('react.transitional.element'),
    c = Symbol.for('react.fragment');
  function s(r, f, d) {
    var h = null;
    if ((d !== void 0 && (h = '' + d), f.key !== void 0 && (h = '' + f.key), 'key' in f)) {
      d = {};
      for (var v in f) v !== 'key' && (d[v] = f[v]);
    } else d = f;
    return (f = d.ref), { $$typeof: a, type: r, key: h, ref: f !== void 0 ? f : null, props: d };
  }
  return (tu.Fragment = c), (tu.jsx = s), (tu.jsxs = s), tu;
}
var gh;
function yp() {
  return gh || ((gh = 1), (ls.exports = mp())), ls.exports;
}
var E = yp(),
  ns = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bh;
function pp() {
  if (bh) return ne;
  bh = 1;
  var a = Symbol.for('react.transitional.element'),
    c = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    r = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    d = Symbol.for('react.consumer'),
    h = Symbol.for('react.context'),
    v = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    y = Symbol.for('react.memo'),
    b = Symbol.for('react.lazy'),
    D = Symbol.iterator;
  function z(S) {
    return S === null || typeof S != 'object'
      ? null
      : ((S = (D && S[D]) || S['@@iterator']), typeof S == 'function' ? S : null);
  }
  var L = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    O = Object.assign,
    w = {};
  function N(S, G, P) {
    (this.props = S), (this.context = G), (this.refs = w), (this.updater = P || L);
  }
  (N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (S, G) {
      if (typeof S != 'object' && typeof S != 'function' && S != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, S, G, 'setState');
    }),
    (N.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, 'forceUpdate');
    });
  function U() {}
  U.prototype = N.prototype;
  function Y(S, G, P) {
    (this.props = S), (this.context = G), (this.refs = w), (this.updater = P || L);
  }
  var V = (Y.prototype = new U());
  (V.constructor = Y), O(V, N.prototype), (V.isPureReactComponent = !0);
  var ae = Array.isArray,
    k = { H: null, A: null, T: null, S: null },
    ye = Object.prototype.hasOwnProperty;
  function Re(S, G, P, F, Z, oe) {
    return (P = oe.ref), { $$typeof: a, type: S, key: G, ref: P !== void 0 ? P : null, props: oe };
  }
  function ze(S, G) {
    return Re(S.type, G, void 0, void 0, void 0, S.props);
  }
  function Q(S) {
    return typeof S == 'object' && S !== null && S.$$typeof === a;
  }
  function ue(S) {
    var G = { '=': '=0', ':': '=2' };
    return (
      '$' +
      S.replace(/[=:]/g, function (P) {
        return G[P];
      })
    );
  }
  var Pe = /\/+/g;
  function Jt(S, G) {
    return typeof S == 'object' && S !== null && S.key != null ? ue('' + S.key) : G.toString(36);
  }
  function Ht() {}
  function $t(S) {
    switch (S.status) {
      case 'fulfilled':
        return S.value;
      case 'rejected':
        throw S.reason;
      default:
        switch (
          (typeof S.status == 'string'
            ? S.then(Ht, Ht)
            : ((S.status = 'pending'),
              S.then(
                function (G) {
                  S.status === 'pending' && ((S.status = 'fulfilled'), (S.value = G));
                },
                function (G) {
                  S.status === 'pending' && ((S.status = 'rejected'), (S.reason = G));
                }
              )),
          S.status)
        ) {
          case 'fulfilled':
            return S.value;
          case 'rejected':
            throw S.reason;
        }
    }
    throw S;
  }
  function lt(S, G, P, F, Z) {
    var oe = typeof S;
    (oe === 'undefined' || oe === 'boolean') && (S = null);
    var ie = !1;
    if (S === null) ie = !0;
    else
      switch (oe) {
        case 'bigint':
        case 'string':
        case 'number':
          ie = !0;
          break;
        case 'object':
          switch (S.$$typeof) {
            case a:
            case c:
              ie = !0;
              break;
            case b:
              return (ie = S._init), lt(ie(S._payload), G, P, F, Z);
          }
      }
    if (ie)
      return (
        (Z = Z(S)),
        (ie = F === '' ? '.' + Jt(S, 0) : F),
        ae(Z)
          ? ((P = ''),
            ie != null && (P = ie.replace(Pe, '$&/') + '/'),
            lt(Z, G, P, '', function (Me) {
              return Me;
            }))
          : Z != null &&
            (Q(Z) &&
              (Z = ze(
                Z,
                P + (Z.key == null || (S && S.key === Z.key) ? '' : ('' + Z.key).replace(Pe, '$&/') + '/') + ie
              )),
            G.push(Z)),
        1
      );
    ie = 0;
    var Ie = F === '' ? '.' : F + ':';
    if (ae(S)) for (var pe = 0; pe < S.length; pe++) (F = S[pe]), (oe = Ie + Jt(F, pe)), (ie += lt(F, G, P, oe, Z));
    else if (((pe = z(S)), typeof pe == 'function'))
      for (S = pe.call(S), pe = 0; !(F = S.next()).done; )
        (F = F.value), (oe = Ie + Jt(F, pe++)), (ie += lt(F, G, P, oe, Z));
    else if (oe === 'object') {
      if (typeof S.then == 'function') return lt($t(S), G, P, F, Z);
      throw (
        ((G = String(S)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (G === '[object Object]' ? 'object with keys {' + Object.keys(S).join(', ') + '}' : G) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return ie;
  }
  function X(S, G, P) {
    if (S == null) return S;
    var F = [],
      Z = 0;
    return (
      lt(S, F, '', '', function (oe) {
        return G.call(P, oe, Z++);
      }),
      F
    );
  }
  function te(S) {
    if (S._status === -1) {
      var G = S._result;
      (G = G()),
        G.then(
          function (P) {
            (S._status === 0 || S._status === -1) && ((S._status = 1), (S._result = P));
          },
          function (P) {
            (S._status === 0 || S._status === -1) && ((S._status = 2), (S._result = P));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = G));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var I =
    typeof reportError == 'function'
      ? reportError
      : function (S) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var G = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == 'object' && S !== null && typeof S.message == 'string' ? String(S.message) : String(S),
              error: S
            });
            if (!window.dispatchEvent(G)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', S);
            return;
          }
          console.error(S);
        };
  function Ee() {}
  return (
    (ne.Children = {
      map: X,
      forEach: function (S, G, P) {
        X(
          S,
          function () {
            G.apply(this, arguments);
          },
          P
        );
      },
      count: function (S) {
        var G = 0;
        return (
          X(S, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (S) {
        return (
          X(S, function (G) {
            return G;
          }) || []
        );
      },
      only: function (S) {
        if (!Q(S)) throw Error('React.Children.only expected to receive a single React element child.');
        return S;
      }
    }),
    (ne.Component = N),
    (ne.Fragment = s),
    (ne.Profiler = f),
    (ne.PureComponent = Y),
    (ne.StrictMode = r),
    (ne.Suspense = p),
    (ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (ne.act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (ne.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (ne.cloneElement = function (S, G, P) {
      if (S == null) throw Error('The argument must be a React element, but you passed ' + S + '.');
      var F = O({}, S.props),
        Z = S.key,
        oe = void 0;
      if (G != null)
        for (ie in (G.ref !== void 0 && (oe = void 0), G.key !== void 0 && (Z = '' + G.key), G))
          !ye.call(G, ie) ||
            ie === 'key' ||
            ie === '__self' ||
            ie === '__source' ||
            (ie === 'ref' && G.ref === void 0) ||
            (F[ie] = G[ie]);
      var ie = arguments.length - 2;
      if (ie === 1) F.children = P;
      else if (1 < ie) {
        for (var Ie = Array(ie), pe = 0; pe < ie; pe++) Ie[pe] = arguments[pe + 2];
        F.children = Ie;
      }
      return Re(S.type, Z, void 0, void 0, oe, F);
    }),
    (ne.createContext = function (S) {
      return (
        (S = { $$typeof: h, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: d, _context: S }),
        S
      );
    }),
    (ne.createElement = function (S, G, P) {
      var F,
        Z = {},
        oe = null;
      if (G != null)
        for (F in (G.key !== void 0 && (oe = '' + G.key), G))
          ye.call(G, F) && F !== 'key' && F !== '__self' && F !== '__source' && (Z[F] = G[F]);
      var ie = arguments.length - 2;
      if (ie === 1) Z.children = P;
      else if (1 < ie) {
        for (var Ie = Array(ie), pe = 0; pe < ie; pe++) Ie[pe] = arguments[pe + 2];
        Z.children = Ie;
      }
      if (S && S.defaultProps) for (F in ((ie = S.defaultProps), ie)) Z[F] === void 0 && (Z[F] = ie[F]);
      return Re(S, oe, void 0, void 0, null, Z);
    }),
    (ne.createRef = function () {
      return { current: null };
    }),
    (ne.forwardRef = function (S) {
      return { $$typeof: v, render: S };
    }),
    (ne.isValidElement = Q),
    (ne.lazy = function (S) {
      return { $$typeof: b, _payload: { _status: -1, _result: S }, _init: te };
    }),
    (ne.memo = function (S, G) {
      return { $$typeof: y, type: S, compare: G === void 0 ? null : G };
    }),
    (ne.startTransition = function (S) {
      var G = k.T,
        P = {};
      k.T = P;
      try {
        var F = S(),
          Z = k.S;
        Z !== null && Z(P, F), typeof F == 'object' && F !== null && typeof F.then == 'function' && F.then(Ee, I);
      } catch (oe) {
        I(oe);
      } finally {
        k.T = G;
      }
    }),
    (ne.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (ne.use = function (S) {
      return k.H.use(S);
    }),
    (ne.useActionState = function (S, G, P) {
      return k.H.useActionState(S, G, P);
    }),
    (ne.useCallback = function (S, G) {
      return k.H.useCallback(S, G);
    }),
    (ne.useContext = function (S) {
      return k.H.useContext(S);
    }),
    (ne.useDebugValue = function () {}),
    (ne.useDeferredValue = function (S, G) {
      return k.H.useDeferredValue(S, G);
    }),
    (ne.useEffect = function (S, G) {
      return k.H.useEffect(S, G);
    }),
    (ne.useId = function () {
      return k.H.useId();
    }),
    (ne.useImperativeHandle = function (S, G, P) {
      return k.H.useImperativeHandle(S, G, P);
    }),
    (ne.useInsertionEffect = function (S, G) {
      return k.H.useInsertionEffect(S, G);
    }),
    (ne.useLayoutEffect = function (S, G) {
      return k.H.useLayoutEffect(S, G);
    }),
    (ne.useMemo = function (S, G) {
      return k.H.useMemo(S, G);
    }),
    (ne.useOptimistic = function (S, G) {
      return k.H.useOptimistic(S, G);
    }),
    (ne.useReducer = function (S, G, P) {
      return k.H.useReducer(S, G, P);
    }),
    (ne.useRef = function (S) {
      return k.H.useRef(S);
    }),
    (ne.useState = function (S) {
      return k.H.useState(S);
    }),
    (ne.useSyncExternalStore = function (S, G, P) {
      return k.H.useSyncExternalStore(S, G, P);
    }),
    (ne.useTransition = function () {
      return k.H.useTransition();
    }),
    (ne.version = '19.0.0'),
    ne
  );
}
var Sh;
function Ts() {
  return Sh || ((Sh = 1), (ns.exports = pp())), ns.exports;
}
var x = Ts(),
  as = { exports: {} },
  lu = {},
  us = { exports: {} },
  is = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eh;
function vp() {
  return (
    Eh ||
      ((Eh = 1),
      (function (a) {
        function c(X, te) {
          var I = X.length;
          X.push(te);
          e: for (; 0 < I; ) {
            var Ee = (I - 1) >>> 1,
              S = X[Ee];
            if (0 < f(S, te)) (X[Ee] = te), (X[I] = S), (I = Ee);
            else break e;
          }
        }
        function s(X) {
          return X.length === 0 ? null : X[0];
        }
        function r(X) {
          if (X.length === 0) return null;
          var te = X[0],
            I = X.pop();
          if (I !== te) {
            X[0] = I;
            e: for (var Ee = 0, S = X.length, G = S >>> 1; Ee < G; ) {
              var P = 2 * (Ee + 1) - 1,
                F = X[P],
                Z = P + 1,
                oe = X[Z];
              if (0 > f(F, I))
                Z < S && 0 > f(oe, F) ? ((X[Ee] = oe), (X[Z] = I), (Ee = Z)) : ((X[Ee] = F), (X[P] = I), (Ee = P));
              else if (Z < S && 0 > f(oe, I)) (X[Ee] = oe), (X[Z] = I), (Ee = Z);
              else break e;
            }
          }
          return te;
        }
        function f(X, te) {
          var I = X.sortIndex - te.sortIndex;
          return I !== 0 ? I : X.id - te.id;
        }
        if (((a.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            v = h.now();
          a.unstable_now = function () {
            return h.now() - v;
          };
        }
        var p = [],
          y = [],
          b = 1,
          D = null,
          z = 3,
          L = !1,
          O = !1,
          w = !1,
          N = typeof setTimeout == 'function' ? setTimeout : null,
          U = typeof clearTimeout == 'function' ? clearTimeout : null,
          Y = typeof setImmediate < 'u' ? setImmediate : null;
        function V(X) {
          for (var te = s(y); te !== null; ) {
            if (te.callback === null) r(y);
            else if (te.startTime <= X) r(y), (te.sortIndex = te.expirationTime), c(p, te);
            else break;
            te = s(y);
          }
        }
        function ae(X) {
          if (((w = !1), V(X), !O))
            if (s(p) !== null) (O = !0), $t();
            else {
              var te = s(y);
              te !== null && lt(ae, te.startTime - X);
            }
        }
        var k = !1,
          ye = -1,
          Re = 5,
          ze = -1;
        function Q() {
          return !(a.unstable_now() - ze < Re);
        }
        function ue() {
          if (k) {
            var X = a.unstable_now();
            ze = X;
            var te = !0;
            try {
              e: {
                (O = !1), w && ((w = !1), U(ye), (ye = -1)), (L = !0);
                var I = z;
                try {
                  t: {
                    for (V(X), D = s(p); D !== null && !(D.expirationTime > X && Q()); ) {
                      var Ee = D.callback;
                      if (typeof Ee == 'function') {
                        (D.callback = null), (z = D.priorityLevel);
                        var S = Ee(D.expirationTime <= X);
                        if (((X = a.unstable_now()), typeof S == 'function')) {
                          (D.callback = S), V(X), (te = !0);
                          break t;
                        }
                        D === s(p) && r(p), V(X);
                      } else r(p);
                      D = s(p);
                    }
                    if (D !== null) te = !0;
                    else {
                      var G = s(y);
                      G !== null && lt(ae, G.startTime - X), (te = !1);
                    }
                  }
                  break e;
                } finally {
                  (D = null), (z = I), (L = !1);
                }
                te = void 0;
              }
            } finally {
              te ? Pe() : (k = !1);
            }
          }
        }
        var Pe;
        if (typeof Y == 'function')
          Pe = function () {
            Y(ue);
          };
        else if (typeof MessageChannel < 'u') {
          var Jt = new MessageChannel(),
            Ht = Jt.port2;
          (Jt.port1.onmessage = ue),
            (Pe = function () {
              Ht.postMessage(null);
            });
        } else
          Pe = function () {
            N(ue, 0);
          };
        function $t() {
          k || ((k = !0), Pe());
        }
        function lt(X, te) {
          ye = N(function () {
            X(a.unstable_now());
          }, te);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (X) {
            X.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            O || L || ((O = !0), $t());
          }),
          (a.unstable_forceFrameRate = function (X) {
            0 > X || 125 < X
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Re = 0 < X ? Math.floor(1e3 / X) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return z;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return s(p);
          }),
          (a.unstable_next = function (X) {
            switch (z) {
              case 1:
              case 2:
              case 3:
                var te = 3;
                break;
              default:
                te = z;
            }
            var I = z;
            z = te;
            try {
              return X();
            } finally {
              z = I;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (X, te) {
            switch (X) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                X = 3;
            }
            var I = z;
            z = X;
            try {
              return te();
            } finally {
              z = I;
            }
          }),
          (a.unstable_scheduleCallback = function (X, te, I) {
            var Ee = a.unstable_now();
            switch (
              (typeof I == 'object' && I !== null
                ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? Ee + I : Ee))
                : (I = Ee),
              X)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = I + S),
              (X = { id: b++, callback: te, priorityLevel: X, startTime: I, expirationTime: S, sortIndex: -1 }),
              I > Ee
                ? ((X.sortIndex = I),
                  c(y, X),
                  s(p) === null && X === s(y) && (w ? (U(ye), (ye = -1)) : (w = !0), lt(ae, I - Ee)))
                : ((X.sortIndex = S), c(p, X), O || L || ((O = !0), $t())),
              X
            );
          }),
          (a.unstable_shouldYield = Q),
          (a.unstable_wrapCallback = function (X) {
            var te = z;
            return function () {
              var I = z;
              z = te;
              try {
                return X.apply(this, arguments);
              } finally {
                z = I;
              }
            };
          });
      })(is)),
    is
  );
}
var Th;
function gp() {
  return Th || ((Th = 1), (us.exports = vp())), us.exports;
}
var cs = { exports: {} },
  Fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ah;
function bp() {
  if (Ah) return Fe;
  Ah = 1;
  var a = Ts();
  function c(p) {
    var y = 'https://react.dev/errors/' + p;
    if (1 < arguments.length) {
      y += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++) y += '&args[]=' + encodeURIComponent(arguments[b]);
    }
    return (
      'Minified React error #' +
      p +
      '; visit ' +
      y +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(c(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s
      },
      p: 0,
      findDOMNode: null
    },
    f = Symbol.for('react.portal');
  function d(p, y, b) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: f, key: D == null ? null : '' + D, children: p, containerInfo: y, implementation: b };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(p, y) {
    if (p === 'font') return '';
    if (typeof y == 'string') return y === 'use-credentials' ? y : '';
  }
  return (
    (Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Fe.createPortal = function (p, y) {
      var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)) throw Error(c(299));
      return d(p, y, null, b);
    }),
    (Fe.flushSync = function (p) {
      var y = h.T,
        b = r.p;
      try {
        if (((h.T = null), (r.p = 2), p)) return p();
      } finally {
        (h.T = y), (r.p = b), r.d.f();
      }
    }),
    (Fe.preconnect = function (p, y) {
      typeof p == 'string' &&
        (y
          ? ((y = y.crossOrigin), (y = typeof y == 'string' ? (y === 'use-credentials' ? y : '') : void 0))
          : (y = null),
        r.d.C(p, y));
    }),
    (Fe.prefetchDNS = function (p) {
      typeof p == 'string' && r.d.D(p);
    }),
    (Fe.preinit = function (p, y) {
      if (typeof p == 'string' && y && typeof y.as == 'string') {
        var b = y.as,
          D = v(b, y.crossOrigin),
          z = typeof y.integrity == 'string' ? y.integrity : void 0,
          L = typeof y.fetchPriority == 'string' ? y.fetchPriority : void 0;
        b === 'style'
          ? r.d.S(p, typeof y.precedence == 'string' ? y.precedence : void 0, {
              crossOrigin: D,
              integrity: z,
              fetchPriority: L
            })
          : b === 'script' &&
            r.d.X(p, {
              crossOrigin: D,
              integrity: z,
              fetchPriority: L,
              nonce: typeof y.nonce == 'string' ? y.nonce : void 0
            });
      }
    }),
    (Fe.preinitModule = function (p, y) {
      if (typeof p == 'string')
        if (typeof y == 'object' && y !== null) {
          if (y.as == null || y.as === 'script') {
            var b = v(y.as, y.crossOrigin);
            r.d.M(p, {
              crossOrigin: b,
              integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
              nonce: typeof y.nonce == 'string' ? y.nonce : void 0
            });
          }
        } else y == null && r.d.M(p);
    }),
    (Fe.preload = function (p, y) {
      if (typeof p == 'string' && typeof y == 'object' && y !== null && typeof y.as == 'string') {
        var b = y.as,
          D = v(b, y.crossOrigin);
        r.d.L(p, b, {
          crossOrigin: D,
          integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
          nonce: typeof y.nonce == 'string' ? y.nonce : void 0,
          type: typeof y.type == 'string' ? y.type : void 0,
          fetchPriority: typeof y.fetchPriority == 'string' ? y.fetchPriority : void 0,
          referrerPolicy: typeof y.referrerPolicy == 'string' ? y.referrerPolicy : void 0,
          imageSrcSet: typeof y.imageSrcSet == 'string' ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == 'string' ? y.imageSizes : void 0,
          media: typeof y.media == 'string' ? y.media : void 0
        });
      }
    }),
    (Fe.preloadModule = function (p, y) {
      if (typeof p == 'string')
        if (y) {
          var b = v(y.as, y.crossOrigin);
          r.d.m(p, {
            as: typeof y.as == 'string' && y.as !== 'script' ? y.as : void 0,
            crossOrigin: b,
            integrity: typeof y.integrity == 'string' ? y.integrity : void 0
          });
        } else r.d.m(p);
    }),
    (Fe.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (Fe.unstable_batchedUpdates = function (p, y) {
      return p(y);
    }),
    (Fe.useFormState = function (p, y, b) {
      return h.H.useFormState(p, y, b);
    }),
    (Fe.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (Fe.version = '19.0.0'),
    Fe
  );
}
var Rh;
function Sp() {
  if (Rh) return cs.exports;
  Rh = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (c) {
        console.error(c);
      }
  }
  return a(), (cs.exports = bp()), cs.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xh;
function Ep() {
  if (xh) return lu;
  xh = 1;
  var a = gp(),
    c = Ts(),
    s = Sp();
  function r(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) t += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var d = Symbol.for('react.element'),
    h = Symbol.for('react.transitional.element'),
    v = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    y = Symbol.for('react.strict_mode'),
    b = Symbol.for('react.profiler'),
    D = Symbol.for('react.provider'),
    z = Symbol.for('react.consumer'),
    L = Symbol.for('react.context'),
    O = Symbol.for('react.forward_ref'),
    w = Symbol.for('react.suspense'),
    N = Symbol.for('react.suspense_list'),
    U = Symbol.for('react.memo'),
    Y = Symbol.for('react.lazy'),
    V = Symbol.for('react.offscreen'),
    ae = Symbol.for('react.memo_cache_sentinel'),
    k = Symbol.iterator;
  function ye(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (k && e[k]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var Re = Symbol.for('react.client.reference');
  function ze(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === Re ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case p:
        return 'Fragment';
      case v:
        return 'Portal';
      case b:
        return 'Profiler';
      case y:
        return 'StrictMode';
      case w:
        return 'Suspense';
      case N:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case L:
          return (e.displayName || 'Context') + '.Provider';
        case z:
          return (e._context.displayName || 'Context') + '.Consumer';
        case O:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case U:
          return (t = e.displayName || null), t !== null ? t : ze(e.type) || 'Memo';
        case Y:
          (t = e._payload), (e = e._init);
          try {
            return ze(e(t));
          } catch {}
      }
    return null;
  }
  var Q = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ue = Object.assign,
    Pe,
    Jt;
  function Ht(e) {
    if (Pe === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (Pe = (t && t[1]) || ''),
          (Jt =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
              ? '@unknown:0:0'
              : '');
      }
    return (
      `
` +
      Pe +
      e +
      Jt
    );
  }
  var $t = !1;
  function lt(e, t) {
    if (!e || $t) return '';
    $t = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(q.prototype, 'props', {
                  set: function () {
                    throw Error();
                  }
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(q, []);
                } catch (j) {
                  var _ = j;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (j) {
                  _ = j;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                _ = j;
              }
              (q = e()) && typeof q.catch == 'function' && q.catch(function () {});
            }
          } catch (j) {
            if (j && _ && typeof j.stack == 'string') return [j.stack, _.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var u = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, 'name');
      u &&
        u.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
      var i = n.DetermineComponentFrameRoot(),
        o = i[0],
        m = i[1];
      if (o && m) {
        var g = o.split(`
`),
          A = m.split(`
`);
        for (u = n = 0; n < g.length && !g[n].includes('DetermineComponentFrameRoot'); ) n++;
        for (; u < A.length && !A[u].includes('DetermineComponentFrameRoot'); ) u++;
        if (n === g.length || u === A.length)
          for (n = g.length - 1, u = A.length - 1; 1 <= n && 0 <= u && g[n] !== A[u]; ) u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (g[n] !== A[u]) {
            if (n !== 1 || u !== 1)
              do
                if ((n--, u--, 0 > u || g[n] !== A[u])) {
                  var B =
                    `
` + g[n].replace(' at new ', ' at ');
                  return e.displayName && B.includes('<anonymous>') && (B = B.replace('<anonymous>', e.displayName)), B;
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      ($t = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : '') ? Ht(l) : '';
  }
  function X(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ht(e.type);
      case 16:
        return Ht('Lazy');
      case 13:
        return Ht('Suspense');
      case 19:
        return Ht('SuspenseList');
      case 0:
      case 15:
        return (e = lt(e.type, !1)), e;
      case 11:
        return (e = lt(e.type.render, !1)), e;
      case 1:
        return (e = lt(e.type, !0)), e;
      default:
        return '';
    }
  }
  function te(e) {
    try {
      var t = '';
      do (t += X(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function I(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function Ee(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (I(e) !== e) throw Error(r(188));
  }
  function G(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = I(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var u = l.return;
      if (u === null) break;
      var i = u.alternate;
      if (i === null) {
        if (((n = u.return), n !== null)) {
          l = n;
          continue;
        }
        break;
      }
      if (u.child === i.child) {
        for (i = u.child; i; ) {
          if (i === l) return S(u), e;
          if (i === n) return S(u), t;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== n.return) (l = u), (n = i);
      else {
        for (var o = !1, m = u.child; m; ) {
          if (m === l) {
            (o = !0), (l = u), (n = i);
            break;
          }
          if (m === n) {
            (o = !0), (n = u), (l = i);
            break;
          }
          m = m.sibling;
        }
        if (!o) {
          for (m = i.child; m; ) {
            if (m === l) {
              (o = !0), (l = i), (n = u);
              break;
            }
            if (m === n) {
              (o = !0), (n = i), (l = u);
              break;
            }
            m = m.sibling;
          }
          if (!o) throw Error(r(189));
        }
      }
      if (l.alternate !== n) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function P(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = P(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var F = Array.isArray,
    Z = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    oe = { pending: !1, data: null, method: null, action: null },
    ie = [],
    Ie = -1;
  function pe(e) {
    return { current: e };
  }
  function Me(e) {
    0 > Ie || ((e.current = ie[Ie]), (ie[Ie] = null), Ie--);
  }
  function xe(e, t) {
    Ie++, (ie[Ie] = e.current), (e.current = t);
  }
  var Lt = pe(null),
    aa = pe(null),
    pl = pe(null),
    yu = pe(null);
  function pu(e, t) {
    switch ((xe(pl, t), xe(aa, e), xe(Lt, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? Kd(t) : 0;
        break;
      default:
        if (((e = e === 8 ? t.parentNode : t), (t = e.tagName), (e = e.namespaceURI))) (e = Kd(e)), (t = kd(e, t));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Me(Lt), xe(Lt, t);
  }
  function pn() {
    Me(Lt), Me(aa), Me(pl);
  }
  function ki(e) {
    e.memoizedState !== null && xe(yu, e);
    var t = Lt.current,
      l = kd(t, e.type);
    t !== l && (xe(aa, e), xe(Lt, l));
  }
  function vu(e) {
    aa.current === e && (Me(Lt), Me(aa)), yu.current === e && (Me(yu), (Fa._currentValue = oe));
  }
  var Ji = Object.prototype.hasOwnProperty,
    $i = a.unstable_scheduleCallback,
    Fi = a.unstable_cancelCallback,
    Km = a.unstable_shouldYield,
    km = a.unstable_requestPaint,
    qt = a.unstable_now,
    Jm = a.unstable_getCurrentPriorityLevel,
    ws = a.unstable_ImmediatePriority,
    Ms = a.unstable_UserBlockingPriority,
    gu = a.unstable_NormalPriority,
    $m = a.unstable_LowPriority,
    js = a.unstable_IdlePriority,
    Fm = a.log,
    Wm = a.unstable_setDisableYieldValue,
    ua = null,
    ct = null;
  function Pm(e) {
    if (ct && typeof ct.onCommitFiberRoot == 'function')
      try {
        ct.onCommitFiberRoot(ua, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function vl(e) {
    if ((typeof Fm == 'function' && Wm(e), ct && typeof ct.setStrictMode == 'function'))
      try {
        ct.setStrictMode(ua, e);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : ty,
    Im = Math.log,
    ey = Math.LN2;
  function ty(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Im(e) / ey) | 0)) | 0;
  }
  var bu = 128,
    Su = 4194304;
  function Gl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Eu(e, t) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      i = e.pingedLanes,
      o = e.warmLanes;
    e = e.finishedLanes !== 0;
    var m = l & 134217727;
    return (
      m !== 0
        ? ((l = m & ~u),
          l !== 0 ? (n = Gl(l)) : ((i &= m), i !== 0 ? (n = Gl(i)) : e || ((o = m & ~o), o !== 0 && (n = Gl(o)))))
        : ((m = l & ~u), m !== 0 ? (n = Gl(m)) : i !== 0 ? (n = Gl(i)) : e || ((o = l & ~o), o !== 0 && (n = Gl(o)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & u) === 0 &&
          ((u = n & -n), (o = t & -t), u >= o || (u === 32 && (o & 4194176) !== 0))
        ? t
        : n
    );
  }
  function ia(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ly(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Bs() {
    var e = bu;
    return (bu <<= 1), (bu & 4194176) === 0 && (bu = 128), e;
  }
  function Hs() {
    var e = Su;
    return (Su <<= 1), (Su & 62914560) === 0 && (Su = 4194304), e;
  }
  function Wi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ca(e, t) {
    (e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function ny(e, t, l, n, u, i) {
    var o = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var m = e.entanglements,
      g = e.expirationTimes,
      A = e.hiddenUpdates;
    for (l = o & ~l; 0 < l; ) {
      var B = 31 - rt(l),
        q = 1 << B;
      (m[B] = 0), (g[B] = -1);
      var _ = A[B];
      if (_ !== null)
        for (A[B] = null, B = 0; B < _.length; B++) {
          var j = _[B];
          j !== null && (j.lane &= -536870913);
        }
      l &= ~q;
    }
    n !== 0 && Ls(e, n, 0), i !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(o & ~t));
  }
  function Ls(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var n = 31 - rt(t);
    (e.entangledLanes |= t), (e.entanglements[n] = e.entanglements[n] | 1073741824 | (l & 4194218));
  }
  function qs(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var n = 31 - rt(l),
        u = 1 << n;
      (u & t) | (e[n] & t) && (e[n] |= t), (l &= ~u);
    }
  }
  function Ys(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function Gs() {
    var e = Z.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : oh(e.type));
  }
  function ay(e, t) {
    var l = Z.p;
    try {
      return (Z.p = e), t();
    } finally {
      Z.p = l;
    }
  }
  var gl = Math.random().toString(36).slice(2),
    Je = '__reactFiber$' + gl,
    nt = '__reactProps$' + gl,
    vn = '__reactContainer$' + gl,
    Pi = '__reactEvents$' + gl,
    uy = '__reactListeners$' + gl,
    iy = '__reactHandles$' + gl,
    Vs = '__reactResources$' + gl,
    ra = '__reactMarker$' + gl;
  function Ii(e) {
    delete e[Je], delete e[nt], delete e[Pi], delete e[uy], delete e[iy];
  }
  function Vl(e) {
    var t = e[Je];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[vn] || l[Je])) {
        if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
          for (e = Fd(e); e !== null; ) {
            if ((l = e[Je])) return l;
            e = Fd(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function gn(e) {
    if ((e = e[Je] || e[vn])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function sa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function bn(e) {
    var t = e[Vs];
    return t || (t = e[Vs] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
  }
  function Ye(e) {
    e[ra] = !0;
  }
  var Xs = new Set(),
    Qs = {};
  function Xl(e, t) {
    Sn(e, t), Sn(e + 'Capture', t);
  }
  function Sn(e, t) {
    for (Qs[e] = t, e = 0; e < t.length; e++) Xs.add(t[e]);
  }
  var Ft = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    cy = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Zs = {},
    Ks = {};
  function ry(e) {
    return Ji.call(Ks, e) ? !0 : Ji.call(Zs, e) ? !1 : cy.test(e) ? (Ks[e] = !0) : ((Zs[e] = !0), !1);
  }
  function Tu(e, t, l) {
    if (ry(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var n = t.toLowerCase().slice(0, 5);
            if (n !== 'data-' && n !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + l);
      }
  }
  function Au(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + l);
    }
  }
  function Wt(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, '' + n);
    }
  }
  function yt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function ks(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function sy(e) {
    var t = ks(e) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      n = '' + e[t];
    if (!e.hasOwnProperty(t) && typeof l < 'u' && typeof l.get == 'function' && typeof l.set == 'function') {
      var u = l.get,
        i = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (o) {
            (n = '' + o), i.call(this, o);
          }
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (o) {
            n = '' + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          }
        }
      );
    }
  }
  function Ru(e) {
    e._valueTracker || (e._valueTracker = sy(e));
  }
  function Js(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      n = '';
    return e && (n = ks(e) ? (e.checked ? 'true' : 'false') : e.value), (e = n), e !== l ? (t.setValue(e), !0) : !1;
  }
  function xu(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var fy = /[\n"\\]/g;
  function pt(e) {
    return e.replace(fy, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function ec(e, t, l, n, u, i, o, m) {
    (e.name = ''),
      o != null && typeof o != 'function' && typeof o != 'symbol' && typeof o != 'boolean'
        ? (e.type = o)
        : e.removeAttribute('type'),
      t != null
        ? o === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + yt(t))
          : e.value !== '' + yt(t) && (e.value = '' + yt(t))
        : (o !== 'submit' && o !== 'reset') || e.removeAttribute('value'),
      t != null ? tc(e, o, yt(t)) : l != null ? tc(e, o, yt(l)) : n != null && e.removeAttribute('value'),
      u == null && i != null && (e.defaultChecked = !!i),
      u != null && (e.checked = u && typeof u != 'function' && typeof u != 'symbol'),
      m != null && typeof m != 'function' && typeof m != 'symbol' && typeof m != 'boolean'
        ? (e.name = '' + yt(m))
        : e.removeAttribute('name');
  }
  function $s(e, t, l, n, u, i, o, m) {
    if (
      (i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean' && (e.type = i),
      t != null || l != null)
    ) {
      if (!((i !== 'submit' && i !== 'reset') || t != null)) return;
      (l = l != null ? '' + yt(l) : ''),
        (t = t != null ? '' + yt(t) : l),
        m || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = n ?? u),
      (n = typeof n != 'function' && typeof n != 'symbol' && !!n),
      (e.checked = m ? e.checked : !!n),
      (e.defaultChecked = !!n),
      o != null && typeof o != 'function' && typeof o != 'symbol' && typeof o != 'boolean' && (e.name = o);
  }
  function tc(e, t, l) {
    (t === 'number' && xu(e.ownerDocument) === e) || e.defaultValue === '' + l || (e.defaultValue = '' + l);
  }
  function En(e, t, l, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < l.length; u++) t['$' + l[u]] = !0;
      for (l = 0; l < e.length; l++)
        (u = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== u && (e[l].selected = u),
          u && n && (e[l].defaultSelected = !0);
    } else {
      for (l = '' + yt(l), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === l) {
          (e[u].selected = !0), n && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fs(e, t, l) {
    if (t != null && ((t = '' + yt(t)), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + yt(l) : '';
  }
  function Ws(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (F(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ''), (t = l);
    }
    (l = yt(t)), (e.defaultValue = l), (n = e.textContent), n === l && n !== '' && n !== null && (e.value = n);
  }
  function Tn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var oy = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Ps(e, t, l) {
    var n = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? n
        ? e.setProperty(t, '')
        : t === 'float'
        ? (e.cssFloat = '')
        : (e[t] = '')
      : n
      ? e.setProperty(t, l)
      : typeof l != 'number' || l === 0 || oy.has(t)
      ? t === 'float'
        ? (e.cssFloat = l)
        : (e[t] = ('' + l).trim())
      : (e[t] = l + 'px');
  }
  function Is(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(r(62));
    if (((e = e.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf('--') === 0 ? e.setProperty(n, '') : n === 'float' ? (e.cssFloat = '') : (e[n] = ''));
      for (var u in t) (n = t[u]), t.hasOwnProperty(u) && l[u] !== n && Ps(e, u, n);
    } else for (var i in t) t.hasOwnProperty(i) && Ps(e, i, t[i]);
  }
  function lc(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var dy = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height']
    ]),
    hy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ou(e) {
    return hy.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var nc = null;
  function ac(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var An = null,
    Rn = null;
  function ef(e) {
    var t = gn(e);
    if (t && (e = t.stateNode)) {
      var l = e[nt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (ec(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + pt('' + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var u = n[nt] || null;
                if (!u) throw Error(r(90));
                ec(n, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
              }
            }
            for (t = 0; t < l.length; t++) (n = l[t]), n.form === e.form && Js(n);
          }
          break e;
        case 'textarea':
          Fs(e, l.value, l.defaultValue);
          break e;
        case 'select':
          (t = l.value), t != null && En(e, !!l.multiple, t, !1);
      }
    }
  }
  var uc = !1;
  function tf(e, t, l) {
    if (uc) return e(t, l);
    uc = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (((uc = !1), (An !== null || Rn !== null) && (si(), An && ((t = An), (e = Rn), (Rn = An = null), ef(t), e))))
        for (t = 0; t < e.length; t++) ef(e[t]);
    }
  }
  function fa(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[nt] || null;
    if (n === null) return null;
    l = n[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (n = !n.disabled) ||
          ((e = e.type), (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !n);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != 'function') throw Error(r(231, t, typeof l));
    return l;
  }
  var ic = !1;
  if (Ft)
    try {
      var oa = {};
      Object.defineProperty(oa, 'passive', {
        get: function () {
          ic = !0;
        }
      }),
        window.addEventListener('test', oa, oa),
        window.removeEventListener('test', oa, oa);
    } catch {
      ic = !1;
    }
  var bl = null,
    cc = null,
    Cu = null;
  function lf() {
    if (Cu) return Cu;
    var e,
      t = cc,
      l = t.length,
      n,
      u = 'value' in bl ? bl.value : bl.textContent,
      i = u.length;
    for (e = 0; e < l && t[e] === u[e]; e++);
    var o = l - e;
    for (n = 1; n <= o && t[l - n] === u[i - n]; n++);
    return (Cu = u.slice(e, 1 < n ? 1 - n : void 0));
  }
  function Du(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function _u() {
    return !0;
  }
  function nf() {
    return !1;
  }
  function at(e) {
    function t(l, n, u, i, o) {
      (this._reactName = l),
        (this._targetInst = u),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null);
      for (var m in e) e.hasOwnProperty(m) && ((l = e[m]), (this[m] = l ? l(i) : i[m]));
      return (
        (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _u : nf),
        (this.isPropagationStopped = nf),
        this
      );
    }
    return (
      ue(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault ? l.preventDefault() : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = _u));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = _u));
        },
        persist: function () {},
        isPersistent: _u
      }),
      t
    );
  }
  var Ql = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Nu = at(Ql),
    da = ue({}, Ql, { view: 0, detail: 0 }),
    my = at(da),
    rc,
    sc,
    ha,
    Uu = ue({}, da, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: oc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== ha &&
              (ha && e.type === 'mousemove'
                ? ((rc = e.screenX - ha.screenX), (sc = e.screenY - ha.screenY))
                : (sc = rc = 0),
              (ha = e)),
            rc);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : sc;
      }
    }),
    af = at(Uu),
    yy = ue({}, Uu, { dataTransfer: 0 }),
    py = at(yy),
    vy = ue({}, da, { relatedTarget: 0 }),
    fc = at(vy),
    gy = ue({}, Ql, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    by = at(gy),
    Sy = ue({}, Ql, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      }
    }),
    Ey = at(Sy),
    Ty = ue({}, Ql, { data: 0 }),
    uf = at(Ty),
    Ay = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified'
    },
    Ry = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta'
    },
    xy = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Oy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xy[e]) ? !!t[e] : !1;
  }
  function oc() {
    return Oy;
  }
  var Cy = ue({}, da, {
      key: function (e) {
        if (e.key) {
          var t = Ay[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Du(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? Ry[e.keyCode] || 'Unidentified'
          : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: oc,
      charCode: function (e) {
        return e.type === 'keypress' ? Du(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? Du(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      }
    }),
    Dy = at(Cy),
    _y = ue({}, Uu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    cf = at(_y),
    Ny = ue({}, da, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: oc
    }),
    Uy = at(Ny),
    zy = ue({}, Ql, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wy = at(zy),
    My = ue({}, Uu, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    jy = at(My),
    By = ue({}, Ql, { newState: 0, oldState: 0 }),
    Hy = at(By),
    Ly = [9, 13, 27, 32],
    dc = Ft && 'CompositionEvent' in window,
    ma = null;
  Ft && 'documentMode' in document && (ma = document.documentMode);
  var qy = Ft && 'TextEvent' in window && !ma,
    rf = Ft && (!dc || (ma && 8 < ma && 11 >= ma)),
    sf = ' ',
    ff = !1;
  function of(e, t) {
    switch (e) {
      case 'keyup':
        return Ly.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function df(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var xn = !1;
  function Yy(e, t) {
    switch (e) {
      case 'compositionend':
        return df(t);
      case 'keypress':
        return t.which !== 32 ? null : ((ff = !0), sf);
      case 'textInput':
        return (e = t.data), e === sf && ff ? null : e;
      default:
        return null;
    }
  }
  function Gy(e, t) {
    if (xn)
      return e === 'compositionend' || (!dc && of(e, t)) ? ((e = lf()), (Cu = cc = bl = null), (xn = !1), e) : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return rf && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Vy = {
    'color': !0,
    'date': !0,
    'datetime': !0,
    'datetime-local': !0,
    'email': !0,
    'month': !0,
    'number': !0,
    'password': !0,
    'range': !0,
    'search': !0,
    'tel': !0,
    'text': !0,
    'time': !0,
    'url': !0,
    'week': !0
  };
  function hf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Vy[e.type] : t === 'textarea';
  }
  function mf(e, t, l, n) {
    An ? (Rn ? Rn.push(n) : (Rn = [n])) : (An = n),
      (t = mi(t, 'onChange')),
      0 < t.length && ((l = new Nu('onChange', 'change', null, l, n)), e.push({ event: l, listeners: t }));
  }
  var ya = null,
    pa = null;
  function Xy(e) {
    Gd(e, 0);
  }
  function zu(e) {
    var t = sa(e);
    if (Js(t)) return e;
  }
  function yf(e, t) {
    if (e === 'change') return t;
  }
  var pf = !1;
  if (Ft) {
    var hc;
    if (Ft) {
      var mc = 'oninput' in document;
      if (!mc) {
        var vf = document.createElement('div');
        vf.setAttribute('oninput', 'return;'), (mc = typeof vf.oninput == 'function');
      }
      hc = mc;
    } else hc = !1;
    pf = hc && (!document.documentMode || 9 < document.documentMode);
  }
  function gf() {
    ya && (ya.detachEvent('onpropertychange', bf), (pa = ya = null));
  }
  function bf(e) {
    if (e.propertyName === 'value' && zu(pa)) {
      var t = [];
      mf(t, pa, e, ac(e)), tf(Xy, t);
    }
  }
  function Qy(e, t, l) {
    e === 'focusin' ? (gf(), (ya = t), (pa = l), ya.attachEvent('onpropertychange', bf)) : e === 'focusout' && gf();
  }
  function Zy(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return zu(pa);
  }
  function Ky(e, t) {
    if (e === 'click') return zu(t);
  }
  function ky(e, t) {
    if (e === 'input' || e === 'change') return zu(t);
  }
  function Jy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var st = typeof Object.is == 'function' ? Object.is : Jy;
  function va(e, t) {
    if (st(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var l = Object.keys(e),
      n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var u = l[n];
      if (!Ji.call(t, u) || !st(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Sf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ef(e, t) {
    var l = Sf(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = e + l.textContent.length), e <= t && n >= t)) return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Sf(l);
    }
  }
  function Tf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Tf(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Af(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = xu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = xu(e.document);
    }
    return t;
  }
  function yc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function $y(e, t) {
    var l = Af(t);
    t = e.focusedElem;
    var n = e.selectionRange;
    if (l !== t && t && t.ownerDocument && Tf(t.ownerDocument.documentElement, t)) {
      if (n !== null && yc(t)) {
        if (((e = n.start), (l = n.end), l === void 0 && (l = e), 'selectionStart' in t))
          (t.selectionStart = e), (t.selectionEnd = Math.min(l, t.value.length));
        else if (((l = ((e = t.ownerDocument || document) && e.defaultView) || window), l.getSelection)) {
          l = l.getSelection();
          var u = t.textContent.length,
            i = Math.min(n.start, u);
          (n = n.end === void 0 ? i : Math.min(n.end, u)),
            !l.extend && i > n && ((u = n), (n = i), (i = u)),
            (u = Ef(t, i));
          var o = Ef(t, n);
          u &&
            o &&
            (l.rangeCount !== 1 ||
              l.anchorNode !== u.node ||
              l.anchorOffset !== u.offset ||
              l.focusNode !== o.node ||
              l.focusOffset !== o.offset) &&
            ((e = e.createRange()),
            e.setStart(u.node, u.offset),
            l.removeAllRanges(),
            i > n ? (l.addRange(e), l.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), l.addRange(e)));
        }
      }
      for (e = [], l = t; (l = l.parentNode); )
        l.nodeType === 1 && e.push({ element: l, left: l.scrollLeft, top: l.scrollTop });
      for (typeof t.focus == 'function' && t.focus(), t = 0; t < e.length; t++)
        (l = e[t]), (l.element.scrollLeft = l.left), (l.element.scrollTop = l.top);
    }
  }
  var Fy = Ft && 'documentMode' in document && 11 >= document.documentMode,
    On = null,
    pc = null,
    ga = null,
    vc = !1;
  function Rf(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    vc ||
      On == null ||
      On !== xu(n) ||
      ((n = On),
      'selectionStart' in n && yc(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
          })),
      (ga && va(ga, n)) ||
        ((ga = n),
        (n = mi(pc, 'onSelect')),
        0 < n.length &&
          ((t = new Nu('onSelect', 'select', null, t, l)), e.push({ event: t, listeners: n }), (t.target = On))));
  }
  function Zl(e, t) {
    var l = {};
    return (l[e.toLowerCase()] = t.toLowerCase()), (l['Webkit' + e] = 'webkit' + t), (l['Moz' + e] = 'moz' + t), l;
  }
  var Cn = {
      animationend: Zl('Animation', 'AnimationEnd'),
      animationiteration: Zl('Animation', 'AnimationIteration'),
      animationstart: Zl('Animation', 'AnimationStart'),
      transitionrun: Zl('Transition', 'TransitionRun'),
      transitionstart: Zl('Transition', 'TransitionStart'),
      transitioncancel: Zl('Transition', 'TransitionCancel'),
      transitionend: Zl('Transition', 'TransitionEnd')
    },
    gc = {},
    xf = {};
  Ft &&
    ((xf = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Cn.animationend.animation, delete Cn.animationiteration.animation, delete Cn.animationstart.animation),
    'TransitionEvent' in window || delete Cn.transitionend.transition);
  function Kl(e) {
    if (gc[e]) return gc[e];
    if (!Cn[e]) return e;
    var t = Cn[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in xf) return (gc[e] = t[l]);
    return e;
  }
  var Of = Kl('animationend'),
    Cf = Kl('animationiteration'),
    Df = Kl('animationstart'),
    Wy = Kl('transitionrun'),
    Py = Kl('transitionstart'),
    Iy = Kl('transitioncancel'),
    _f = Kl('transitionend'),
    Nf = new Map(),
    Uf =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
        ' '
      );
  function Dt(e, t) {
    Nf.set(e, t), Xl(t, [e]);
  }
  var vt = [],
    Dn = 0,
    bc = 0;
  function wu() {
    for (var e = Dn, t = (bc = Dn = 0); t < e; ) {
      var l = vt[t];
      vt[t++] = null;
      var n = vt[t];
      vt[t++] = null;
      var u = vt[t];
      vt[t++] = null;
      var i = vt[t];
      if (((vt[t++] = null), n !== null && u !== null)) {
        var o = n.pending;
        o === null ? (u.next = u) : ((u.next = o.next), (o.next = u)), (n.pending = u);
      }
      i !== 0 && zf(l, u, i);
    }
  }
  function Mu(e, t, l, n) {
    (vt[Dn++] = e),
      (vt[Dn++] = t),
      (vt[Dn++] = l),
      (vt[Dn++] = n),
      (bc |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n);
  }
  function Sc(e, t, l, n) {
    return Mu(e, t, l, n), ju(e);
  }
  function Sl(e, t) {
    return Mu(e, null, null, t), ju(e);
  }
  function zf(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var u = !1, i = e.return; i !== null; )
      (i.childLanes |= l),
        (n = i.alternate),
        n !== null && (n.childLanes |= l),
        i.tag === 22 && ((e = i.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = i),
        (i = i.return);
    u &&
      t !== null &&
      e.tag === 3 &&
      ((i = e.stateNode),
      (u = 31 - rt(l)),
      (i = i.hiddenUpdates),
      (e = i[u]),
      e === null ? (i[u] = [t]) : e.push(t),
      (t.lane = l | 536870912));
  }
  function ju(e) {
    if (50 < Xa) throw ((Xa = 0), (Or = null), Error(r(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var _n = {},
    wf = new WeakMap();
  function gt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = wf.get(e);
      return l !== void 0 ? l : ((t = { value: e, source: t, stack: te(t) }), wf.set(e, t), t);
    }
    return { value: e, source: t, stack: te(t) };
  }
  var Nn = [],
    Un = 0,
    Bu = null,
    Hu = 0,
    bt = [],
    St = 0,
    kl = null,
    Pt = 1,
    It = '';
  function Jl(e, t) {
    (Nn[Un++] = Hu), (Nn[Un++] = Bu), (Bu = e), (Hu = t);
  }
  function Mf(e, t, l) {
    (bt[St++] = Pt), (bt[St++] = It), (bt[St++] = kl), (kl = e);
    var n = Pt;
    e = It;
    var u = 32 - rt(n) - 1;
    (n &= ~(1 << u)), (l += 1);
    var i = 32 - rt(t) + u;
    if (30 < i) {
      var o = u - (u % 5);
      (i = (n & ((1 << o) - 1)).toString(32)),
        (n >>= o),
        (u -= o),
        (Pt = (1 << (32 - rt(t) + u)) | (l << u) | n),
        (It = i + e);
    } else (Pt = (1 << i) | (l << u) | n), (It = e);
  }
  function Ec(e) {
    e.return !== null && (Jl(e, 1), Mf(e, 1, 0));
  }
  function Tc(e) {
    for (; e === Bu; ) (Bu = Nn[--Un]), (Nn[Un] = null), (Hu = Nn[--Un]), (Nn[Un] = null);
    for (; e === kl; )
      (kl = bt[--St]), (bt[St] = null), (It = bt[--St]), (bt[St] = null), (Pt = bt[--St]), (bt[St] = null);
  }
  var et = null,
    Qe = null,
    he = !1,
    _t = null,
    Yt = !1,
    Ac = Error(r(519));
  function $l(e) {
    var t = Error(r(418, ''));
    throw (Ea(gt(t, e)), Ac);
  }
  function jf(e) {
    var t = e.stateNode,
      l = e.type,
      n = e.memoizedProps;
    switch (((t[Je] = e), (t[nt] = n), l)) {
      case 'dialog':
        fe('cancel', t), fe('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        fe('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Za.length; l++) fe(Za[l], t);
        break;
      case 'source':
        fe('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        fe('error', t), fe('load', t);
        break;
      case 'details':
        fe('toggle', t);
        break;
      case 'input':
        fe('invalid', t), $s(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), Ru(t);
        break;
      case 'select':
        fe('invalid', t);
        break;
      case 'textarea':
        fe('invalid', t), Ws(t, n.value, n.defaultValue, n.children), Ru(t);
    }
    (l = n.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      n.suppressHydrationWarning === !0 ||
      Zd(t.textContent, l)
        ? (n.popover != null && (fe('beforetoggle', t), fe('toggle', t)),
          n.onScroll != null && fe('scroll', t),
          n.onScrollEnd != null && fe('scrollend', t),
          n.onClick != null && (t.onclick = yi),
          (t = !0))
        : (t = !1),
      t || $l(e);
  }
  function Bf(e) {
    for (et = e.return; et; )
      switch (et.tag) {
        case 3:
        case 27:
          Yt = !0;
          return;
        case 5:
        case 13:
          Yt = !1;
          return;
        default:
          et = et.return;
      }
  }
  function ba(e) {
    if (e !== et) return !1;
    if (!he) return Bf(e), (he = !0), !1;
    var t = !1,
      l;
    if (
      ((l = e.tag !== 3 && e.tag !== 27) &&
        ((l = e.tag === 5) && ((l = e.type), (l = !(l !== 'form' && l !== 'button') || Xr(e.type, e.memoizedProps))),
        (l = !l)),
      l && (t = !0),
      t && Qe && $l(e),
      Bf(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === '/$')) {
              if (t === 0) {
                Qe = Ut(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== '$' && l !== '$!' && l !== '$?') || t++;
          e = e.nextSibling;
        }
        Qe = null;
      }
    } else Qe = et ? Ut(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Sa() {
    (Qe = et = null), (he = !1);
  }
  function Ea(e) {
    _t === null ? (_t = [e]) : _t.push(e);
  }
  var Ta = Error(r(460)),
    Hf = Error(r(474)),
    Rc = { then: function () {} };
  function Lf(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function Lu() {}
  function qf(e, t, l) {
    switch (((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(Lu, Lu), (t = l)), t.status)) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), e === Ta ? Error(r(483)) : e);
      default:
        if (typeof t.status == 'string') t.then(Lu, Lu);
        else {
          if (((e = Te), e !== null && 100 < e.shellSuspendCounter)) throw Error(r(482));
          (e = t),
            (e.status = 'pending'),
            e.then(
              function (n) {
                if (t.status === 'pending') {
                  var u = t;
                  (u.status = 'fulfilled'), (u.value = n);
                }
              },
              function (n) {
                if (t.status === 'pending') {
                  var u = t;
                  (u.status = 'rejected'), (u.reason = n);
                }
              }
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), e === Ta ? Error(r(483)) : e);
        }
        throw ((Aa = t), Ta);
    }
  }
  var Aa = null;
  function Yf() {
    if (Aa === null) throw Error(r(459));
    var e = Aa;
    return (Aa = null), e;
  }
  var zn = null,
    Ra = 0;
  function qu(e) {
    var t = Ra;
    return (Ra += 1), zn === null && (zn = []), qf(zn, e, t);
  }
  function xa(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Yu(e, t) {
    throw t.$$typeof === d
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(r(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
  }
  function Gf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Vf(e) {
    function t(R, T) {
      if (e) {
        var C = R.deletions;
        C === null ? ((R.deletions = [T]), (R.flags |= 16)) : C.push(T);
      }
    }
    function l(R, T) {
      if (!e) return null;
      for (; T !== null; ) t(R, T), (T = T.sibling);
      return null;
    }
    function n(R) {
      for (var T = new Map(); R !== null; ) R.key !== null ? T.set(R.key, R) : T.set(R.index, R), (R = R.sibling);
      return T;
    }
    function u(R, T) {
      return (R = zl(R, T)), (R.index = 0), (R.sibling = null), R;
    }
    function i(R, T, C) {
      return (
        (R.index = C),
        e
          ? ((C = R.alternate),
            C !== null ? ((C = C.index), C < T ? ((R.flags |= 33554434), T) : C) : ((R.flags |= 33554434), T))
          : ((R.flags |= 1048576), T)
      );
    }
    function o(R) {
      return e && R.alternate === null && (R.flags |= 33554434), R;
    }
    function m(R, T, C, H) {
      return T === null || T.tag !== 6
        ? ((T = gr(C, R.mode, H)), (T.return = R), T)
        : ((T = u(T, C)), (T.return = R), T);
    }
    function g(R, T, C, H) {
      var K = C.type;
      return K === p
        ? B(R, T, C.props.children, H, C.key)
        : T !== null &&
          (T.elementType === K || (typeof K == 'object' && K !== null && K.$$typeof === Y && Gf(K) === T.type))
        ? ((T = u(T, C.props)), xa(T, C), (T.return = R), T)
        : ((T = ai(C.type, C.key, C.props, null, R.mode, H)), xa(T, C), (T.return = R), T);
    }
    function A(R, T, C, H) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== C.containerInfo ||
        T.stateNode.implementation !== C.implementation
        ? ((T = br(C, R.mode, H)), (T.return = R), T)
        : ((T = u(T, C.children || [])), (T.return = R), T);
    }
    function B(R, T, C, H, K) {
      return T === null || T.tag !== 7
        ? ((T = un(C, R.mode, H, K)), (T.return = R), T)
        : ((T = u(T, C)), (T.return = R), T);
    }
    function q(R, T, C) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number' || typeof T == 'bigint')
        return (T = gr('' + T, R.mode, C)), (T.return = R), T;
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case h:
            return (C = ai(T.type, T.key, T.props, null, R.mode, C)), xa(C, T), (C.return = R), C;
          case v:
            return (T = br(T, R.mode, C)), (T.return = R), T;
          case Y:
            var H = T._init;
            return (T = H(T._payload)), q(R, T, C);
        }
        if (F(T) || ye(T)) return (T = un(T, R.mode, C, null)), (T.return = R), T;
        if (typeof T.then == 'function') return q(R, qu(T), C);
        if (T.$$typeof === L) return q(R, ti(R, T), C);
        Yu(R, T);
      }
      return null;
    }
    function _(R, T, C, H) {
      var K = T !== null ? T.key : null;
      if ((typeof C == 'string' && C !== '') || typeof C == 'number' || typeof C == 'bigint')
        return K !== null ? null : m(R, T, '' + C, H);
      if (typeof C == 'object' && C !== null) {
        switch (C.$$typeof) {
          case h:
            return C.key === K ? g(R, T, C, H) : null;
          case v:
            return C.key === K ? A(R, T, C, H) : null;
          case Y:
            return (K = C._init), (C = K(C._payload)), _(R, T, C, H);
        }
        if (F(C) || ye(C)) return K !== null ? null : B(R, T, C, H, null);
        if (typeof C.then == 'function') return _(R, T, qu(C), H);
        if (C.$$typeof === L) return _(R, T, ti(R, C), H);
        Yu(R, C);
      }
      return null;
    }
    function j(R, T, C, H, K) {
      if ((typeof H == 'string' && H !== '') || typeof H == 'number' || typeof H == 'bigint')
        return (R = R.get(C) || null), m(T, R, '' + H, K);
      if (typeof H == 'object' && H !== null) {
        switch (H.$$typeof) {
          case h:
            return (R = R.get(H.key === null ? C : H.key) || null), g(T, R, H, K);
          case v:
            return (R = R.get(H.key === null ? C : H.key) || null), A(T, R, H, K);
          case Y:
            var re = H._init;
            return (H = re(H._payload)), j(R, T, C, H, K);
        }
        if (F(H) || ye(H)) return (R = R.get(C) || null), B(T, R, H, K, null);
        if (typeof H.then == 'function') return j(R, T, C, qu(H), K);
        if (H.$$typeof === L) return j(R, T, C, ti(T, H), K);
        Yu(T, H);
      }
      return null;
    }
    function J(R, T, C, H) {
      for (var K = null, re = null, $ = T, W = (T = 0), Xe = null; $ !== null && W < C.length; W++) {
        $.index > W ? ((Xe = $), ($ = null)) : (Xe = $.sibling);
        var me = _(R, $, C[W], H);
        if (me === null) {
          $ === null && ($ = Xe);
          break;
        }
        e && $ && me.alternate === null && t(R, $),
          (T = i(me, T, W)),
          re === null ? (K = me) : (re.sibling = me),
          (re = me),
          ($ = Xe);
      }
      if (W === C.length) return l(R, $), he && Jl(R, W), K;
      if ($ === null) {
        for (; W < C.length; W++)
          ($ = q(R, C[W], H)), $ !== null && ((T = i($, T, W)), re === null ? (K = $) : (re.sibling = $), (re = $));
        return he && Jl(R, W), K;
      }
      for ($ = n($); W < C.length; W++)
        (Xe = j($, R, W, C[W], H)),
          Xe !== null &&
            (e && Xe.alternate !== null && $.delete(Xe.key === null ? W : Xe.key),
            (T = i(Xe, T, W)),
            re === null ? (K = Xe) : (re.sibling = Xe),
            (re = Xe));
      return (
        e &&
          $.forEach(function (ql) {
            return t(R, ql);
          }),
        he && Jl(R, W),
        K
      );
    }
    function ee(R, T, C, H) {
      if (C == null) throw Error(r(151));
      for (
        var K = null, re = null, $ = T, W = (T = 0), Xe = null, me = C.next();
        $ !== null && !me.done;
        W++, me = C.next()
      ) {
        $.index > W ? ((Xe = $), ($ = null)) : (Xe = $.sibling);
        var ql = _(R, $, me.value, H);
        if (ql === null) {
          $ === null && ($ = Xe);
          break;
        }
        e && $ && ql.alternate === null && t(R, $),
          (T = i(ql, T, W)),
          re === null ? (K = ql) : (re.sibling = ql),
          (re = ql),
          ($ = Xe);
      }
      if (me.done) return l(R, $), he && Jl(R, W), K;
      if ($ === null) {
        for (; !me.done; W++, me = C.next())
          (me = q(R, me.value, H)),
            me !== null && ((T = i(me, T, W)), re === null ? (K = me) : (re.sibling = me), (re = me));
        return he && Jl(R, W), K;
      }
      for ($ = n($); !me.done; W++, me = C.next())
        (me = j($, R, W, me.value, H)),
          me !== null &&
            (e && me.alternate !== null && $.delete(me.key === null ? W : me.key),
            (T = i(me, T, W)),
            re === null ? (K = me) : (re.sibling = me),
            (re = me));
      return (
        e &&
          $.forEach(function (hp) {
            return t(R, hp);
          }),
        he && Jl(R, W),
        K
      );
    }
    function Ue(R, T, C, H) {
      if (
        (typeof C == 'object' && C !== null && C.type === p && C.key === null && (C = C.props.children),
        typeof C == 'object' && C !== null)
      ) {
        switch (C.$$typeof) {
          case h:
            e: {
              for (var K = C.key; T !== null; ) {
                if (T.key === K) {
                  if (((K = C.type), K === p)) {
                    if (T.tag === 7) {
                      l(R, T.sibling), (H = u(T, C.props.children)), (H.return = R), (R = H);
                      break e;
                    }
                  } else if (
                    T.elementType === K ||
                    (typeof K == 'object' && K !== null && K.$$typeof === Y && Gf(K) === T.type)
                  ) {
                    l(R, T.sibling), (H = u(T, C.props)), xa(H, C), (H.return = R), (R = H);
                    break e;
                  }
                  l(R, T);
                  break;
                } else t(R, T);
                T = T.sibling;
              }
              C.type === p
                ? ((H = un(C.props.children, R.mode, H, C.key)), (H.return = R), (R = H))
                : ((H = ai(C.type, C.key, C.props, null, R.mode, H)), xa(H, C), (H.return = R), (R = H));
            }
            return o(R);
          case v:
            e: {
              for (K = C.key; T !== null; ) {
                if (T.key === K)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === C.containerInfo &&
                    T.stateNode.implementation === C.implementation
                  ) {
                    l(R, T.sibling), (H = u(T, C.children || [])), (H.return = R), (R = H);
                    break e;
                  } else {
                    l(R, T);
                    break;
                  }
                else t(R, T);
                T = T.sibling;
              }
              (H = br(C, R.mode, H)), (H.return = R), (R = H);
            }
            return o(R);
          case Y:
            return (K = C._init), (C = K(C._payload)), Ue(R, T, C, H);
        }
        if (F(C)) return J(R, T, C, H);
        if (ye(C)) {
          if (((K = ye(C)), typeof K != 'function')) throw Error(r(150));
          return (C = K.call(C)), ee(R, T, C, H);
        }
        if (typeof C.then == 'function') return Ue(R, T, qu(C), H);
        if (C.$$typeof === L) return Ue(R, T, ti(R, C), H);
        Yu(R, C);
      }
      return (typeof C == 'string' && C !== '') || typeof C == 'number' || typeof C == 'bigint'
        ? ((C = '' + C),
          T !== null && T.tag === 6
            ? (l(R, T.sibling), (H = u(T, C)), (H.return = R), (R = H))
            : (l(R, T), (H = gr(C, R.mode, H)), (H.return = R), (R = H)),
          o(R))
        : l(R, T);
    }
    return function (R, T, C, H) {
      try {
        Ra = 0;
        var K = Ue(R, T, C, H);
        return (zn = null), K;
      } catch ($) {
        if ($ === Ta) throw $;
        var re = Rt(29, $, null, R.mode);
        return (re.lanes = H), (re.return = R), re;
      } finally {
      }
    };
  }
  var Fl = Vf(!0),
    Xf = Vf(!1),
    wn = pe(null),
    Gu = pe(0);
  function Qf(e, t) {
    (e = fl), xe(Gu, e), xe(wn, t), (fl = e | t.baseLanes);
  }
  function xc() {
    xe(Gu, fl), xe(wn, wn.current);
  }
  function Oc() {
    (fl = Gu.current), Me(wn), Me(Gu);
  }
  var Et = pe(null),
    Gt = null;
  function El(e) {
    var t = e.alternate;
    xe(Le, Le.current & 1),
      xe(Et, e),
      Gt === null && (t === null || wn.current !== null || t.memoizedState !== null) && (Gt = e);
  }
  function Zf(e) {
    if (e.tag === 22) {
      if ((xe(Le, Le.current), xe(Et, e), Gt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Gt = e);
      }
    } else Tl();
  }
  function Tl() {
    xe(Le, Le.current), xe(Et, Et.current);
  }
  function el(e) {
    Me(Et), Gt === e && (Gt = null), Me(Le);
  }
  var Le = pe(0);
  function Vu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || l.data === '$?' || l.data === '$!')) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var e0 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, n) {
                  e.push(n);
                }
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    t0 = a.unstable_scheduleCallback,
    l0 = a.unstable_NormalPriority,
    qe = { $$typeof: L, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Cc() {
    return { controller: new e0(), data: new Map(), refCount: 0 };
  }
  function Oa(e) {
    e.refCount--,
      e.refCount === 0 &&
        t0(l0, function () {
          e.controller.abort();
        });
  }
  var Ca = null,
    Dc = 0,
    Mn = 0,
    jn = null;
  function n0(e, t) {
    if (Ca === null) {
      var l = (Ca = []);
      (Dc = 0),
        (Mn = Mr()),
        (jn = {
          status: 'pending',
          value: void 0,
          then: function (n) {
            l.push(n);
          }
        });
    }
    return Dc++, t.then(Kf, Kf), t;
  }
  function Kf() {
    if (--Dc === 0 && Ca !== null) {
      jn !== null && (jn.status = 'fulfilled');
      var e = Ca;
      (Ca = null), (Mn = 0), (jn = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function a0(e, t) {
    var l = [],
      n = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        }
      };
    return (
      e.then(
        function () {
          (n.status = 'fulfilled'), (n.value = t);
          for (var u = 0; u < l.length; u++) (0, l[u])(t);
        },
        function (u) {
          for (n.status = 'rejected', n.reason = u, u = 0; u < l.length; u++) (0, l[u])(void 0);
        }
      ),
      n
    );
  }
  var kf = Q.S;
  Q.S = function (e, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && n0(e, t), kf !== null && kf(e, t);
  };
  var Wl = pe(null);
  function _c() {
    var e = Wl.current;
    return e !== null ? e : Te.pooledCache;
  }
  function Xu(e, t) {
    t === null ? xe(Wl, Wl.current) : xe(Wl, t.pool);
  }
  function Jf() {
    var e = _c();
    return e === null ? null : { parent: qe._currentValue, pool: e };
  }
  var Al = 0,
    ce = null,
    ve = null,
    je = null,
    Qu = !1,
    Bn = !1,
    Pl = !1,
    Zu = 0,
    Da = 0,
    Hn = null,
    u0 = 0;
  function we() {
    throw Error(r(321));
  }
  function Nc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++) if (!st(e[l], t[l])) return !1;
    return !0;
  }
  function Uc(e, t, l, n, u, i) {
    return (
      (Al = i),
      (ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Q.H = e === null || e.memoizedState === null ? Il : Rl),
      (Pl = !1),
      (i = l(n, u)),
      (Pl = !1),
      Bn && (i = Ff(t, l, n, u)),
      $f(e),
      i
    );
  }
  function $f(e) {
    Q.H = Vt;
    var t = ve !== null && ve.next !== null;
    if (((Al = 0), (je = ve = ce = null), (Qu = !1), (Da = 0), (Hn = null), t)) throw Error(r(300));
    e === null || Ge || ((e = e.dependencies), e !== null && ei(e) && (Ge = !0));
  }
  function Ff(e, t, l, n) {
    ce = e;
    var u = 0;
    do {
      if ((Bn && (Hn = null), (Da = 0), (Bn = !1), 25 <= u)) throw Error(r(301));
      if (((u += 1), (je = ve = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        (i.lastEffect = null), (i.events = null), (i.stores = null), i.memoCache != null && (i.memoCache.index = 0);
      }
      (Q.H = en), (i = t(l, n));
    } while (Bn);
    return i;
  }
  function i0() {
    var e = Q.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? _a(t) : t),
      (e = e.useState()[0]),
      (ve !== null ? ve.memoizedState : null) !== e && (ce.flags |= 1024),
      t
    );
  }
  function zc() {
    var e = Zu !== 0;
    return (Zu = 0), e;
  }
  function wc(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function Mc(e) {
    if (Qu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Qu = !1;
    }
    (Al = 0), (je = ve = ce = null), (Bn = !1), (Da = Zu = 0), (Hn = null);
  }
  function ut() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return je === null ? (ce.memoizedState = je = e) : (je = je.next = e), je;
  }
  function Be() {
    if (ve === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ve.next;
    var t = je === null ? ce.memoizedState : je.next;
    if (t !== null) (je = t), (ve = e);
    else {
      if (e === null) throw ce.alternate === null ? Error(r(467)) : Error(r(310));
      (ve = e),
        (e = {
          memoizedState: ve.memoizedState,
          baseState: ve.baseState,
          baseQueue: ve.baseQueue,
          queue: ve.queue,
          next: null
        }),
        je === null ? (ce.memoizedState = je = e) : (je = je.next = e);
    }
    return je;
  }
  var Ku;
  Ku = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function _a(e) {
    var t = Da;
    return (
      (Da += 1),
      Hn === null && (Hn = []),
      (e = qf(Hn, e, t)),
      (t = ce),
      (je === null ? t.memoizedState : je.next) === null &&
        ((t = t.alternate), (Q.H = t === null || t.memoizedState === null ? Il : Rl)),
      e
    );
  }
  function ku(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return _a(e);
      if (e.$$typeof === L) return $e(e);
    }
    throw Error(r(438, String(e)));
  }
  function jc(e) {
    var t = null,
      l = ce.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var n = ce.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (u) {
                return u.slice();
              }),
              index: 0
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Ku()), (ce.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = ae;
    return t.index++, l;
  }
  function tl(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ju(e) {
    var t = Be();
    return Bc(t, ve, e);
  }
  function Bc(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = l;
    var u = e.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (u !== null) {
        var o = u.next;
        (u.next = i.next), (i.next = o);
      }
      (t.baseQueue = u = i), (n.pending = null);
    }
    if (((i = e.baseState), u === null)) e.memoizedState = i;
    else {
      t = u.next;
      var m = (o = null),
        g = null,
        A = t,
        B = !1;
      do {
        var q = A.lane & -536870913;
        if (q !== A.lane ? (de & q) === q : (Al & q) === q) {
          var _ = A.revertLane;
          if (_ === 0)
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: A.action,
                  hasEagerState: A.hasEagerState,
                  eagerState: A.eagerState,
                  next: null
                }),
              q === Mn && (B = !0);
          else if ((Al & _) === _) {
            (A = A.next), _ === Mn && (B = !0);
            continue;
          } else
            (q = {
              lane: 0,
              revertLane: A.revertLane,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }),
              g === null ? ((m = g = q), (o = i)) : (g = g.next = q),
              (ce.lanes |= _),
              (wl |= _);
          (q = A.action), Pl && l(i, q), (i = A.hasEagerState ? A.eagerState : l(i, q));
        } else
          (_ = {
            lane: q,
            revertLane: A.revertLane,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          }),
            g === null ? ((m = g = _), (o = i)) : (g = g.next = _),
            (ce.lanes |= q),
            (wl |= q);
        A = A.next;
      } while (A !== null && A !== t);
      if ((g === null ? (o = i) : (g.next = m), !st(i, e.memoizedState) && ((Ge = !0), B && ((l = jn), l !== null))))
        throw l;
      (e.memoizedState = i), (e.baseState = o), (e.baseQueue = g), (n.lastRenderedState = i);
    }
    return u === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Hc(e) {
    var t = Be(),
      l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch,
      u = l.pending,
      i = t.memoizedState;
    if (u !== null) {
      l.pending = null;
      var o = (u = u.next);
      do (i = e(i, o.action)), (o = o.next);
      while (o !== u);
      st(i, t.memoizedState) || (Ge = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (l.lastRenderedState = i);
    }
    return [i, n];
  }
  function Wf(e, t, l) {
    var n = ce,
      u = Be(),
      i = he;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var o = !st((ve || u).memoizedState, l);
    if (
      (o && ((u.memoizedState = l), (Ge = !0)),
      (u = u.queue),
      Yc(eo.bind(null, n, u, e), [e]),
      u.getSnapshot !== t || o || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Ln(9, If.bind(null, n, u, l, t), { destroy: void 0 }, null), Te === null))
        throw Error(r(349));
      i || (Al & 60) !== 0 || Pf(n, t, l);
    }
    return l;
  }
  function Pf(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = ce.updateQueue),
      t === null
        ? ((t = Ku()), (ce.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function If(e, t, l, n) {
    (t.value = l), (t.getSnapshot = n), to(t) && lo(e);
  }
  function eo(e, t, l) {
    return l(function () {
      to(t) && lo(e);
    });
  }
  function to(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !st(e, l);
    } catch {
      return !0;
    }
  }
  function lo(e) {
    var t = Sl(e, 2);
    t !== null && tt(t, e, 2);
  }
  function Lc(e) {
    var t = ut();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), Pl)) {
        vl(!0);
        try {
          l();
        } finally {
          vl(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: tl, lastRenderedState: e }),
      t
    );
  }
  function no(e, t, l, n) {
    return (e.baseState = l), Bc(e, ve, typeof n == 'function' ? n : tl);
  }
  function c0(e, t, l, n, u) {
    if (Wu(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (o) {
          i.listeners.push(o);
        }
      };
      Q.T !== null ? l(!0) : (i.isTransition = !1),
        n(i),
        (l = t.pending),
        l === null ? ((i.next = t.pending = i), ao(t, i)) : ((i.next = l.next), (t.pending = l.next = i));
    }
  }
  function ao(e, t) {
    var l = t.action,
      n = t.payload,
      u = e.state;
    if (t.isTransition) {
      var i = Q.T,
        o = {};
      Q.T = o;
      try {
        var m = l(u, n),
          g = Q.S;
        g !== null && g(o, m), uo(e, t, m);
      } catch (A) {
        qc(e, t, A);
      } finally {
        Q.T = i;
      }
    } else
      try {
        (i = l(u, n)), uo(e, t, i);
      } catch (A) {
        qc(e, t, A);
      }
  }
  function uo(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (n) {
            io(e, t, n);
          },
          function (n) {
            return qc(e, t, n);
          }
        )
      : io(e, t, l);
  }
  function io(e, t, l) {
    (t.status = 'fulfilled'),
      (t.value = l),
      co(t),
      (e.state = l),
      (t = e.pending),
      t !== null && ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), ao(e, l)));
  }
  function qc(e, t, l) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do (t.status = 'rejected'), (t.reason = l), co(t), (t = t.next);
      while (t !== n);
    }
    e.action = null;
  }
  function co(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ro(e, t) {
    return t;
  }
  function so(e, t) {
    if (he) {
      var l = Te.formState;
      if (l !== null) {
        e: {
          var n = ce;
          if (he) {
            if (Qe) {
              t: {
                for (var u = Qe, i = Yt; u.nodeType !== 8; ) {
                  if (!i) {
                    u = null;
                    break t;
                  }
                  if (((u = Ut(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (i = u.data), (u = i === 'F!' || i === 'F' ? u : null);
              }
              if (u) {
                (Qe = Ut(u.nextSibling)), (n = u.data === 'F!');
                break e;
              }
            }
            $l(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return (
      (l = ut()),
      (l.memoizedState = l.baseState = t),
      (n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ro, lastRenderedState: t }),
      (l.queue = n),
      (l = Do.bind(null, ce, n)),
      (n.dispatch = l),
      (n = Lc(!1)),
      (i = Zc.bind(null, ce, !1, n.queue)),
      (n = ut()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = u),
      (l = c0.bind(null, ce, u, i, l)),
      (u.dispatch = l),
      (n.memoizedState = e),
      [t, l, !1]
    );
  }
  function fo(e) {
    var t = Be();
    return oo(t, ve, e);
  }
  function oo(e, t, l) {
    (t = Bc(e, t, ro)[0]),
      (e = Ju(tl)[0]),
      (t = typeof t == 'object' && t !== null && typeof t.then == 'function' ? _a(t) : t);
    var n = Be(),
      u = n.queue,
      i = u.dispatch;
    return (
      l !== n.memoizedState && ((ce.flags |= 2048), Ln(9, r0.bind(null, u, l), { destroy: void 0 }, null)), [t, i, e]
    );
  }
  function r0(e, t) {
    e.action = t;
  }
  function ho(e) {
    var t = Be(),
      l = ve;
    if (l !== null) return oo(t, l, e);
    Be(), (t = t.memoizedState), (l = Be());
    var n = l.queue.dispatch;
    return (l.memoizedState = e), [t, n, !1];
  }
  function Ln(e, t, l, n) {
    return (
      (e = { tag: e, create: t, inst: l, deps: n, next: null }),
      (t = ce.updateQueue),
      t === null && ((t = Ku()), (ce.updateQueue = t)),
      (l = t.lastEffect),
      l === null ? (t.lastEffect = e.next = e) : ((n = l.next), (l.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function mo() {
    return Be().memoizedState;
  }
  function $u(e, t, l, n) {
    var u = ut();
    (ce.flags |= e), (u.memoizedState = Ln(1 | t, l, { destroy: void 0 }, n === void 0 ? null : n));
  }
  function Fu(e, t, l, n) {
    var u = Be();
    n = n === void 0 ? null : n;
    var i = u.memoizedState.inst;
    ve !== null && n !== null && Nc(n, ve.memoizedState.deps)
      ? (u.memoizedState = Ln(t, l, i, n))
      : ((ce.flags |= e), (u.memoizedState = Ln(1 | t, l, i, n)));
  }
  function yo(e, t) {
    $u(8390656, 8, e, t);
  }
  function Yc(e, t) {
    Fu(2048, 8, e, t);
  }
  function po(e, t) {
    return Fu(4, 2, e, t);
  }
  function vo(e, t) {
    return Fu(4, 4, e, t);
  }
  function go(e, t) {
    if (typeof t == 'function') {
      e = e();
      var l = t(e);
      return function () {
        typeof l == 'function' ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function bo(e, t, l) {
    (l = l != null ? l.concat([e]) : null), Fu(4, 4, go.bind(null, t, e), l);
  }
  function Gc() {}
  function So(e, t) {
    var l = Be();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Nc(t, n[1]) ? n[0] : ((l.memoizedState = [e, t]), e);
  }
  function Eo(e, t) {
    var l = Be();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Nc(t, n[1])) return n[0];
    if (((n = e()), Pl)) {
      vl(!0);
      try {
        e();
      } finally {
        vl(!1);
      }
    }
    return (l.memoizedState = [n, t]), n;
  }
  function Vc(e, t, l) {
    return l === void 0 || (Al & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Ad()), (ce.lanes |= e), (wl |= e), l);
  }
  function To(e, t, l, n) {
    return st(l, t)
      ? l
      : wn.current !== null
      ? ((e = Vc(e, l, n)), st(e, t) || (Ge = !0), e)
      : (Al & 42) === 0
      ? ((Ge = !0), (e.memoizedState = l))
      : ((e = Ad()), (ce.lanes |= e), (wl |= e), t);
  }
  function Ao(e, t, l, n, u) {
    var i = Z.p;
    Z.p = i !== 0 && 8 > i ? i : 8;
    var o = Q.T,
      m = {};
    (Q.T = m), Zc(e, !1, t, l);
    try {
      var g = u(),
        A = Q.S;
      if ((A !== null && A(m, g), g !== null && typeof g == 'object' && typeof g.then == 'function')) {
        var B = a0(g, n);
        Na(e, t, B, ht(e));
      } else Na(e, t, n, ht(e));
    } catch (q) {
      Na(e, t, { then: function () {}, status: 'rejected', reason: q }, ht());
    } finally {
      (Z.p = i), (Q.T = o);
    }
  }
  function s0() {}
  function Xc(e, t, l, n) {
    if (e.tag !== 5) throw Error(r(476));
    var u = Ro(e).queue;
    Ao(
      e,
      u,
      t,
      oe,
      l === null
        ? s0
        : function () {
            return xo(e), l(n);
          }
    );
  }
  function Ro(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: oe,
      baseState: oe,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: tl, lastRenderedState: oe },
      next: null
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: tl, lastRenderedState: l },
        next: null
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function xo(e) {
    var t = Ro(e).next.queue;
    Na(e, t, {}, ht());
  }
  function Qc() {
    return $e(Fa);
  }
  function Oo() {
    return Be().memoizedState;
  }
  function Co() {
    return Be().memoizedState;
  }
  function f0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = ht();
          e = Cl(l);
          var n = Dl(t, e, l);
          n !== null && (tt(n, t, l), wa(n, t, l)), (t = { cache: Cc() }), (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function o0(e, t, l) {
    var n = ht();
    (l = { lane: n, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }),
      Wu(e) ? _o(t, l) : ((l = Sc(e, t, l, n)), l !== null && (tt(l, e, n), No(l, t, n)));
  }
  function Do(e, t, l) {
    var n = ht();
    Na(e, t, l, n);
  }
  function Na(e, t, l, n) {
    var u = { lane: n, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Wu(e)) _o(t, u);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
        try {
          var o = t.lastRenderedState,
            m = i(o, l);
          if (((u.hasEagerState = !0), (u.eagerState = m), st(m, o))) return Mu(e, t, u, 0), Te === null && wu(), !1;
        } catch {
        } finally {
        }
      if (((l = Sc(e, t, u, n)), l !== null)) return tt(l, e, n), No(l, t, n), !0;
    }
    return !1;
  }
  function Zc(e, t, l, n) {
    if (((n = { lane: 2, revertLane: Mr(), action: n, hasEagerState: !1, eagerState: null, next: null }), Wu(e))) {
      if (t) throw Error(r(479));
    } else (t = Sc(e, l, n, 2)), t !== null && tt(t, e, 2);
  }
  function Wu(e) {
    var t = e.alternate;
    return e === ce || (t !== null && t === ce);
  }
  function _o(e, t) {
    Bn = Qu = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t);
  }
  function No(e, t, l) {
    if ((l & 4194176) !== 0) {
      var n = t.lanes;
      (n &= e.pendingLanes), (l |= n), (t.lanes = l), qs(e, l);
    }
  }
  var Vt = {
    readContext: $e,
    use: ku,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useLayoutEffect: we,
    useInsertionEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useSyncExternalStore: we,
    useId: we
  };
  (Vt.useCacheRefresh = we),
    (Vt.useMemoCache = we),
    (Vt.useHostTransitionStatus = we),
    (Vt.useFormState = we),
    (Vt.useActionState = we),
    (Vt.useOptimistic = we);
  var Il = {
    readContext: $e,
    use: ku,
    useCallback: function (e, t) {
      return (ut().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $e,
    useEffect: yo,
    useImperativeHandle: function (e, t, l) {
      (l = l != null ? l.concat([e]) : null), $u(4194308, 4, go.bind(null, t, e), l);
    },
    useLayoutEffect: function (e, t) {
      return $u(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      $u(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var l = ut();
      t = t === void 0 ? null : t;
      var n = e();
      if (Pl) {
        vl(!0);
        try {
          e();
        } finally {
          vl(!1);
        }
      }
      return (l.memoizedState = [n, t]), n;
    },
    useReducer: function (e, t, l) {
      var n = ut();
      if (l !== void 0) {
        var u = l(t);
        if (Pl) {
          vl(!0);
          try {
            l(t);
          } finally {
            vl(!1);
          }
        }
      } else u = t;
      return (
        (n.memoizedState = n.baseState = u),
        (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: u }),
        (n.queue = e),
        (e = e.dispatch = o0.bind(null, ce, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ut();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = Lc(e);
      var t = e.queue,
        l = Do.bind(null, ce, t);
      return (t.dispatch = l), [e.memoizedState, l];
    },
    useDebugValue: Gc,
    useDeferredValue: function (e, t) {
      var l = ut();
      return Vc(l, e, t);
    },
    useTransition: function () {
      var e = Lc(!1);
      return (e = Ao.bind(null, ce, e.queue, !0, !1)), (ut().memoizedState = e), [!1, e];
    },
    useSyncExternalStore: function (e, t, l) {
      var n = ce,
        u = ut();
      if (he) {
        if (l === void 0) throw Error(r(407));
        l = l();
      } else {
        if (((l = t()), Te === null)) throw Error(r(349));
        (de & 60) !== 0 || Pf(n, t, l);
      }
      u.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return (
        (u.queue = i),
        yo(eo.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        Ln(9, If.bind(null, n, i, l, t), { destroy: void 0 }, null),
        l
      );
    },
    useId: function () {
      var e = ut(),
        t = Te.identifierPrefix;
      if (he) {
        var l = It,
          n = Pt;
        (l = (n & ~(1 << (32 - rt(n) - 1))).toString(32) + l),
          (t = ':' + t + 'R' + l),
          (l = Zu++),
          0 < l && (t += 'H' + l.toString(32)),
          (t += ':');
      } else (l = u0++), (t = ':' + t + 'r' + l.toString(32) + ':');
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (ut().memoizedState = f0.bind(null, ce));
    }
  };
  (Il.useMemoCache = jc),
    (Il.useHostTransitionStatus = Qc),
    (Il.useFormState = so),
    (Il.useActionState = so),
    (Il.useOptimistic = function (e) {
      var t = ut();
      t.memoizedState = t.baseState = e;
      var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return (t.queue = l), (t = Zc.bind(null, ce, !0, l)), (l.dispatch = t), [e, t];
    });
  var Rl = {
    readContext: $e,
    use: ku,
    useCallback: So,
    useContext: $e,
    useEffect: Yc,
    useImperativeHandle: bo,
    useInsertionEffect: po,
    useLayoutEffect: vo,
    useMemo: Eo,
    useReducer: Ju,
    useRef: mo,
    useState: function () {
      return Ju(tl);
    },
    useDebugValue: Gc,
    useDeferredValue: function (e, t) {
      var l = Be();
      return To(l, ve.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Ju(tl)[0],
        t = Be().memoizedState;
      return [typeof e == 'boolean' ? e : _a(e), t];
    },
    useSyncExternalStore: Wf,
    useId: Oo
  };
  (Rl.useCacheRefresh = Co),
    (Rl.useMemoCache = jc),
    (Rl.useHostTransitionStatus = Qc),
    (Rl.useFormState = fo),
    (Rl.useActionState = fo),
    (Rl.useOptimistic = function (e, t) {
      var l = Be();
      return no(l, ve, e, t);
    });
  var en = {
    readContext: $e,
    use: ku,
    useCallback: So,
    useContext: $e,
    useEffect: Yc,
    useImperativeHandle: bo,
    useInsertionEffect: po,
    useLayoutEffect: vo,
    useMemo: Eo,
    useReducer: Hc,
    useRef: mo,
    useState: function () {
      return Hc(tl);
    },
    useDebugValue: Gc,
    useDeferredValue: function (e, t) {
      var l = Be();
      return ve === null ? Vc(l, e, t) : To(l, ve.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Hc(tl)[0],
        t = Be().memoizedState;
      return [typeof e == 'boolean' ? e : _a(e), t];
    },
    useSyncExternalStore: Wf,
    useId: Oo
  };
  (en.useCacheRefresh = Co),
    (en.useMemoCache = jc),
    (en.useHostTransitionStatus = Qc),
    (en.useFormState = ho),
    (en.useActionState = ho),
    (en.useOptimistic = function (e, t) {
      var l = Be();
      return ve !== null ? no(l, ve, e, t) : ((l.baseState = e), [e, l.queue.dispatch]);
    });
  function Kc(e, t, l, n) {
    (t = e.memoizedState),
      (l = l(n, t)),
      (l = l == null ? t : ue({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var kc = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? I(e) === e : !1;
    },
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var n = ht(),
        u = Cl(n);
      (u.payload = t), l != null && (u.callback = l), (t = Dl(e, u, n)), t !== null && (tt(t, e, n), wa(t, e, n));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var n = ht(),
        u = Cl(n);
      (u.tag = 1),
        (u.payload = t),
        l != null && (u.callback = l),
        (t = Dl(e, u, n)),
        t !== null && (tt(t, e, n), wa(t, e, n));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = ht(),
        n = Cl(l);
      (n.tag = 2), t != null && (n.callback = t), (t = Dl(e, n, l)), t !== null && (tt(t, e, l), wa(t, e, l));
    }
  };
  function Uo(e, t, l, n, u, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(n, i, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !va(l, n) || !va(u, i)
        : !0
    );
  }
  function zo(e, t, l, n) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, n),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(l, n),
      t.state !== e && kc.enqueueReplaceState(t, t.state, null);
  }
  function tn(e, t) {
    var l = t;
    if ('ref' in t) {
      l = {};
      for (var n in t) n !== 'ref' && (l[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = ue({}, l));
      for (var u in e) l[u] === void 0 && (l[u] = e[u]);
    }
    return l;
  }
  var Pu =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string' ? String(e.message) : String(e),
              error: e
            });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function wo(e) {
    Pu(e);
  }
  function Mo(e) {
    console.error(e);
  }
  function jo(e) {
    Pu(e);
  }
  function Iu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Bo(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Jc(e, t, l) {
    return (
      (l = Cl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Iu(e, t);
      }),
      l
    );
  }
  function Ho(e) {
    return (e = Cl(e)), (e.tag = 3), e;
  }
  function Lo(e, t, l, n) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var i = n.value;
      (e.payload = function () {
        return u(i);
      }),
        (e.callback = function () {
          Bo(t, l, n);
        });
    }
    var o = l.stateNode;
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (e.callback = function () {
        Bo(t, l, n), typeof u != 'function' && (Ml === null ? (Ml = new Set([this])) : Ml.add(this));
        var m = n.stack;
        this.componentDidCatch(n.value, { componentStack: m !== null ? m : '' });
      });
  }
  function d0(e, t, l, n, u) {
    if (((l.flags |= 32768), n !== null && typeof n == 'object' && typeof n.then == 'function')) {
      if (((t = l.alternate), t !== null && za(t, l, u, !0), (l = Et.current), l !== null)) {
        switch (l.tag) {
          case 13:
            return (
              Gt === null ? _r() : l.alternate === null && Ne === 0 && (Ne = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              n === Rc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue), t === null ? (l.updateQueue = new Set([n])) : t.add(n), Ur(e, n, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              n === Rc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([n]) }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([n])) : l.add(n)),
                  Ur(e, n, u)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return Ur(e, n, u), _r(), !1;
    }
    if (he)
      return (
        (t = Et.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            n !== Ac && ((e = Error(r(422), { cause: n })), Ea(gt(e, l))))
          : (n !== Ac && ((t = Error(r(423), { cause: n })), Ea(gt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (n = gt(n, l)),
            (u = Jc(e.stateNode, n, u)),
            sr(e, u),
            Ne !== 4 && (Ne = 2)),
        !1
      );
    var i = Error(r(520), { cause: n });
    if (((i = gt(i, l)), Ga === null ? (Ga = [i]) : Ga.push(i), Ne !== 4 && (Ne = 2), t === null)) return !0;
    (n = gt(n, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (l.flags |= 65536), (e = u & -u), (l.lanes |= e), (e = Jc(l.stateNode, n, e)), sr(l, e), !1;
        case 1:
          if (
            ((t = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (i !== null && typeof i.componentDidCatch == 'function' && (Ml === null || !Ml.has(i)))))
          )
            return (l.flags |= 65536), (u &= -u), (l.lanes |= u), (u = Ho(u)), Lo(u, e, l, n), sr(l, u), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var qo = Error(r(461)),
    Ge = !1;
  function Ze(e, t, l, n) {
    t.child = e === null ? Xf(t, null, l, n) : Fl(t, e.child, l, n);
  }
  function Yo(e, t, l, n, u) {
    l = l.render;
    var i = t.ref;
    if ('ref' in n) {
      var o = {};
      for (var m in n) m !== 'ref' && (o[m] = n[m]);
    } else o = n;
    return (
      nn(t),
      (n = Uc(e, t, l, o, i, u)),
      (m = zc()),
      e !== null && !Ge ? (wc(e, t, u), ll(e, t, u)) : (he && m && Ec(t), (t.flags |= 1), Ze(e, t, n, u), t.child)
    );
  }
  function Go(e, t, l, n, u) {
    if (e === null) {
      var i = l.type;
      return typeof i == 'function' && !vr(i) && i.defaultProps === void 0 && l.compare === null
        ? ((t.tag = 15), (t.type = i), Vo(e, t, i, n, u))
        : ((e = ai(l.type, null, n, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), !nr(e, u))) {
      var o = i.memoizedProps;
      if (((l = l.compare), (l = l !== null ? l : va), l(o, n) && e.ref === t.ref)) return ll(e, t, u);
    }
    return (t.flags |= 1), (e = zl(i, n)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Vo(e, t, l, n, u) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (va(i, n) && e.ref === t.ref)
        if (((Ge = !1), (t.pendingProps = n = i), nr(e, u))) (e.flags & 131072) !== 0 && (Ge = !0);
        else return (t.lanes = e.lanes), ll(e, t, u);
    }
    return $c(e, t, l, n, u);
  }
  function Xo(e, t, l) {
    var n = t.pendingProps,
      u = n.children,
      i = (t.stateNode._pendingVisibility & 2) !== 0,
      o = e !== null ? e.memoizedState : null;
    if ((Ua(e, t), n.mode === 'hidden' || i)) {
      if ((t.flags & 128) !== 0) {
        if (((n = o !== null ? o.baseLanes | l : l), e !== null)) {
          for (u = t.child = e.child, i = 0; u !== null; ) (i = i | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = i & ~n;
        } else (t.childLanes = 0), (t.child = null);
        return Qo(e, t, n, l);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Xu(t, o !== null ? o.cachePool : null),
          o !== null ? Qf(t, o) : xc(),
          Zf(t);
      else return (t.lanes = t.childLanes = 536870912), Qo(e, t, o !== null ? o.baseLanes | l : l, l);
    } else
      o !== null
        ? (Xu(t, o.cachePool), Qf(t, o), Tl(), (t.memoizedState = null))
        : (e !== null && Xu(t, null), xc(), Tl());
    return Ze(e, t, u, l), t.child;
  }
  function Qo(e, t, l, n) {
    var u = _c();
    return (
      (u = u === null ? null : { parent: qe._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && Xu(t, null),
      xc(),
      Zf(t),
      e !== null && za(e, t, n, !0),
      null
    );
  }
  function Ua(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 2097664);
    }
  }
  function $c(e, t, l, n, u) {
    return (
      nn(t),
      (l = Uc(e, t, l, n, void 0, u)),
      (n = zc()),
      e !== null && !Ge ? (wc(e, t, u), ll(e, t, u)) : (he && n && Ec(t), (t.flags |= 1), Ze(e, t, l, u), t.child)
    );
  }
  function Zo(e, t, l, n, u, i) {
    return (
      nn(t),
      (t.updateQueue = null),
      (l = Ff(t, n, l, u)),
      $f(e),
      (n = zc()),
      e !== null && !Ge ? (wc(e, t, i), ll(e, t, i)) : (he && n && Ec(t), (t.flags |= 1), Ze(e, t, l, i), t.child)
    );
  }
  function Ko(e, t, l, n, u) {
    if ((nn(t), t.stateNode === null)) {
      var i = _n,
        o = l.contextType;
      typeof o == 'object' && o !== null && (i = $e(o)),
        (i = new l(n, i)),
        (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = kc),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = n),
        (i.state = t.memoizedState),
        (i.refs = {}),
        cr(t),
        (o = l.contextType),
        (i.context = typeof o == 'object' && o !== null ? $e(o) : _n),
        (i.state = t.memoizedState),
        (o = l.getDerivedStateFromProps),
        typeof o == 'function' && (Kc(t, l, o, n), (i.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function' ||
          (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
          ((o = i.state),
          typeof i.componentWillMount == 'function' && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
          o !== i.state && kc.enqueueReplaceState(i, i.state, null),
          ja(t, n, i, u),
          Ma(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
        (n = !0);
    } else if (e === null) {
      i = t.stateNode;
      var m = t.memoizedProps,
        g = tn(l, m);
      i.props = g;
      var A = i.context,
        B = l.contextType;
      (o = _n), typeof B == 'object' && B !== null && (o = $e(B));
      var q = l.getDerivedStateFromProps;
      (B = typeof q == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'),
        (m = t.pendingProps !== m),
        B ||
          (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof i.componentWillReceiveProps != 'function') ||
          ((m || A !== o) && zo(t, i, n, o)),
        (Ol = !1);
      var _ = t.memoizedState;
      (i.state = _),
        ja(t, n, i, u),
        Ma(),
        (A = t.memoizedState),
        m || _ !== A || Ol
          ? (typeof q == 'function' && (Kc(t, l, q, n), (A = t.memoizedState)),
            (g = Ol || Uo(t, l, g, n, _, A, o))
              ? (B ||
                  (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = A)),
            (i.props = n),
            (i.state = A),
            (i.context = o),
            (n = g))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (n = !1));
    } else {
      (i = t.stateNode),
        rr(e, t),
        (o = t.memoizedProps),
        (B = tn(l, o)),
        (i.props = B),
        (q = t.pendingProps),
        (_ = i.context),
        (A = l.contextType),
        (g = _n),
        typeof A == 'object' && A !== null && (g = $e(A)),
        (m = l.getDerivedStateFromProps),
        (A = typeof m == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
          (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof i.componentWillReceiveProps != 'function') ||
          ((o !== q || _ !== g) && zo(t, i, n, g)),
        (Ol = !1),
        (_ = t.memoizedState),
        (i.state = _),
        ja(t, n, i, u),
        Ma();
      var j = t.memoizedState;
      o !== q || _ !== j || Ol || (e !== null && e.dependencies !== null && ei(e.dependencies))
        ? (typeof m == 'function' && (Kc(t, l, m, n), (j = t.memoizedState)),
          (B = Ol || Uo(t, l, B, n, _, j, g) || (e !== null && e.dependencies !== null && ei(e.dependencies)))
            ? (A ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' && typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(n, j, g),
                typeof i.UNSAFE_componentWillUpdate == 'function' && i.UNSAFE_componentWillUpdate(n, j, g)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (o === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (o === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = j)),
          (i.props = n),
          (i.state = j),
          (i.context = g),
          (n = B))
        : (typeof i.componentDidUpdate != 'function' ||
            (o === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (o === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return (
      (i = n),
      Ua(e, t),
      (n = (t.flags & 128) !== 0),
      i || n
        ? ((i = t.stateNode),
          (l = n && typeof l.getDerivedStateFromError != 'function' ? null : i.render()),
          (t.flags |= 1),
          e !== null && n ? ((t.child = Fl(t, e.child, null, u)), (t.child = Fl(t, null, l, u))) : Ze(e, t, l, u),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = ll(e, t, u)),
      e
    );
  }
  function ko(e, t, l, n) {
    return Sa(), (t.flags |= 256), Ze(e, t, l, n), t.child;
  }
  var Fc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Wc(e) {
    return { baseLanes: e, cachePool: Jf() };
  }
  function Pc(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= xt), e;
  }
  function Jo(e, t, l) {
    var n = t.pendingProps,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (Le.current & 2) !== 0),
      o && ((u = !0), (t.flags &= -129)),
      (o = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (he) {
        if ((u ? El(t) : Tl(), he)) {
          var m = Qe,
            g;
          if ((g = m)) {
            e: {
              for (g = m, m = Yt; g.nodeType !== 8; ) {
                if (!m) {
                  m = null;
                  break e;
                }
                if (((g = Ut(g.nextSibling)), g === null)) {
                  m = null;
                  break e;
                }
              }
              m = g;
            }
            m !== null
              ? ((t.memoizedState = {
                  dehydrated: m,
                  treeContext: kl !== null ? { id: Pt, overflow: It } : null,
                  retryLane: 536870912
                }),
                (g = Rt(18, null, null, 0)),
                (g.stateNode = m),
                (g.return = t),
                (t.child = g),
                (et = t),
                (Qe = null),
                (g = !0))
              : (g = !1);
          }
          g || $l(t);
        }
        if (((m = t.memoizedState), m !== null && ((m = m.dehydrated), m !== null)))
          return m.data === '$!' ? (t.lanes = 16) : (t.lanes = 536870912), null;
        el(t);
      }
      return (
        (m = n.children),
        (n = n.fallback),
        u
          ? (Tl(),
            (u = t.mode),
            (m = er({ mode: 'hidden', children: m }, u)),
            (n = un(n, u, l, null)),
            (m.return = t),
            (n.return = t),
            (m.sibling = n),
            (t.child = m),
            (u = t.child),
            (u.memoizedState = Wc(l)),
            (u.childLanes = Pc(e, o, l)),
            (t.memoizedState = Fc),
            n)
          : (El(t), Ic(t, m))
      );
    }
    if (((g = e.memoizedState), g !== null && ((m = g.dehydrated), m !== null))) {
      if (i)
        t.flags & 256
          ? (El(t), (t.flags &= -257), (t = tr(e, t, l)))
          : t.memoizedState !== null
          ? (Tl(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Tl(),
            (u = n.fallback),
            (m = t.mode),
            (n = er({ mode: 'visible', children: n.children }, m)),
            (u = un(u, m, l, null)),
            (u.flags |= 2),
            (n.return = t),
            (u.return = t),
            (n.sibling = u),
            (t.child = n),
            Fl(t, e.child, null, l),
            (n = t.child),
            (n.memoizedState = Wc(l)),
            (n.childLanes = Pc(e, o, l)),
            (t.memoizedState = Fc),
            (t = u));
      else if ((El(t), m.data === '$!')) {
        if (((o = m.nextSibling && m.nextSibling.dataset), o)) var A = o.dgst;
        (o = A),
          (n = Error(r(419))),
          (n.stack = ''),
          (n.digest = o),
          Ea({ value: n, source: null, stack: null }),
          (t = tr(e, t, l));
      } else if ((Ge || za(e, t, l, !1), (o = (l & e.childLanes) !== 0), Ge || o)) {
        if (((o = Te), o !== null)) {
          if (((n = l & -l), (n & 42) !== 0)) n = 1;
          else
            switch (n) {
              case 2:
                n = 1;
                break;
              case 8:
                n = 4;
                break;
              case 32:
                n = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                n = 64;
                break;
              case 268435456:
                n = 134217728;
                break;
              default:
                n = 0;
            }
          if (((n = (n & (o.suspendedLanes | l)) !== 0 ? 0 : n), n !== 0 && n !== g.retryLane))
            throw ((g.retryLane = n), Sl(e, n), tt(o, e, n), qo);
        }
        m.data === '$?' || _r(), (t = tr(e, t, l));
      } else
        m.data === '$?'
          ? ((t.flags |= 128), (t.child = e.child), (t = C0.bind(null, e)), (m._reactRetry = t), (t = null))
          : ((e = g.treeContext),
            (Qe = Ut(m.nextSibling)),
            (et = t),
            (he = !0),
            (_t = null),
            (Yt = !1),
            e !== null && ((bt[St++] = Pt), (bt[St++] = It), (bt[St++] = kl), (Pt = e.id), (It = e.overflow), (kl = t)),
            (t = Ic(t, n.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Tl(),
        (u = n.fallback),
        (m = t.mode),
        (g = e.child),
        (A = g.sibling),
        (n = zl(g, { mode: 'hidden', children: n.children })),
        (n.subtreeFlags = g.subtreeFlags & 31457280),
        A !== null ? (u = zl(A, u)) : ((u = un(u, m, l, null)), (u.flags |= 2)),
        (u.return = t),
        (n.return = t),
        (n.sibling = u),
        (t.child = n),
        (n = u),
        (u = t.child),
        (m = e.child.memoizedState),
        m === null
          ? (m = Wc(l))
          : ((g = m.cachePool),
            g !== null ? ((A = qe._currentValue), (g = g.parent !== A ? { parent: A, pool: A } : g)) : (g = Jf()),
            (m = { baseLanes: m.baseLanes | l, cachePool: g })),
        (u.memoizedState = m),
        (u.childLanes = Pc(e, o, l)),
        (t.memoizedState = Fc),
        n)
      : (El(t),
        (l = e.child),
        (e = l.sibling),
        (l = zl(l, { mode: 'visible', children: n.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null && ((o = t.deletions), o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Ic(e, t) {
    return (t = er({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t);
  }
  function er(e, t) {
    return Sd(e, t, 0, null);
  }
  function tr(e, t, l) {
    return Fl(t, e.child, null, l), (e = Ic(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
  }
  function $o(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), ur(e.return, t, l);
  }
  function lr(e, t, l, n, u) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: l, tailMode: u })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = n),
        (i.tail = l),
        (i.tailMode = u));
  }
  function Fo(e, t, l) {
    var n = t.pendingProps,
      u = n.revealOrder,
      i = n.tail;
    if ((Ze(e, t, n.children, l), (n = Le.current), (n & 2) !== 0)) (n = (n & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && $o(e, l, t);
          else if (e.tag === 19) $o(e, l, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      n &= 1;
    }
    switch ((xe(Le, n), u)) {
      case 'forwards':
        for (l = t.child, u = null; l !== null; )
          (e = l.alternate), e !== null && Vu(e) === null && (u = l), (l = l.sibling);
        (l = u),
          l === null ? ((u = t.child), (t.child = null)) : ((u = l.sibling), (l.sibling = null)),
          lr(t, !1, u, l, i);
        break;
      case 'backwards':
        for (l = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Vu(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = l), (l = u), (u = e);
        }
        lr(t, !0, l, null, i);
        break;
      case 'together':
        lr(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ll(e, t, l) {
    if ((e !== null && (t.dependencies = e.dependencies), (wl |= t.lanes), (l & t.childLanes) === 0))
      if (e !== null) {
        if ((za(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, l = zl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        (e = e.sibling), (l = l.sibling = zl(e, e.pendingProps)), (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function nr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && ei(e)));
  }
  function h0(e, t, l) {
    switch (t.tag) {
      case 3:
        pu(t, t.stateNode.containerInfo), xl(t, qe, e.memoizedState.cache), Sa();
        break;
      case 27:
      case 5:
        ki(t);
        break;
      case 4:
        pu(t, t.stateNode.containerInfo);
        break;
      case 10:
        xl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (El(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
            ? Jo(e, t, l)
            : (El(t), (e = ll(e, t, l)), e !== null ? e.sibling : null);
        El(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (((n = (l & t.childLanes) !== 0), n || (za(e, t, l, !1), (n = (l & t.childLanes) !== 0)), u)) {
          if (n) return Fo(e, t, l);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          xe(Le, Le.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Xo(e, t, l);
      case 24:
        xl(t, qe, e.memoizedState.cache);
    }
    return ll(e, t, l);
  }
  function Wo(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ge = !0;
      else {
        if (!nr(e, l) && (t.flags & 128) === 0) return (Ge = !1), h0(e, t, l);
        Ge = (e.flags & 131072) !== 0;
      }
    else (Ge = !1), he && (t.flags & 1048576) !== 0 && Mf(t, Hu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var n = t.elementType,
            u = n._init;
          if (((n = u(n._payload)), (t.type = n), typeof n == 'function'))
            vr(n)
              ? ((e = tn(n, e)), (t.tag = 1), (t = Ko(null, t, n, e, l)))
              : ((t.tag = 0), (t = $c(null, t, n, e, l)));
          else {
            if (n != null) {
              if (((u = n.$$typeof), u === O)) {
                (t.tag = 11), (t = Yo(null, t, n, e, l));
                break e;
              } else if (u === U) {
                (t.tag = 14), (t = Go(null, t, n, e, l));
                break e;
              }
            }
            throw ((t = ze(n) || n), Error(r(306, t, '')));
          }
        }
        return t;
      case 0:
        return $c(e, t, t.type, t.pendingProps, l);
      case 1:
        return (n = t.type), (u = tn(n, t.pendingProps)), Ko(e, t, n, u, l);
      case 3:
        e: {
          if ((pu(t, t.stateNode.containerInfo), e === null)) throw Error(r(387));
          var i = t.pendingProps;
          (u = t.memoizedState), (n = u.element), rr(e, t), ja(t, i, null, l);
          var o = t.memoizedState;
          if (((i = o.cache), xl(t, qe, i), i !== u.cache && ir(t, [qe], l, !0), Ma(), (i = o.element), u.isDehydrated))
            if (
              ((u = { element: i, isDehydrated: !1, cache: o.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = ko(e, t, i, l);
              break e;
            } else if (i !== n) {
              (n = gt(Error(r(424)), t)), Ea(n), (t = ko(e, t, i, l));
              break e;
            } else
              for (
                Qe = Ut(t.stateNode.containerInfo.firstChild),
                  et = t,
                  he = !0,
                  _t = null,
                  Yt = !0,
                  l = Xf(t, null, i, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Sa(), i === n)) {
              t = ll(e, t, l);
              break e;
            }
            Ze(e, t, i, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Ua(e, t),
          e === null
            ? (l = eh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : he ||
                ((l = t.type),
                (e = t.pendingProps),
                (n = pi(pl.current).createElement(l)),
                (n[Je] = t),
                (n[nt] = e),
                Ke(n, l, e),
                Ye(n),
                (t.stateNode = n))
            : (t.memoizedState = eh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          ki(t),
          e === null &&
            he &&
            ((n = t.stateNode = Wd(t.type, t.pendingProps, pl.current)), (et = t), (Yt = !0), (Qe = Ut(n.firstChild))),
          (n = t.pendingProps.children),
          e !== null || he ? Ze(e, t, n, l) : (t.child = Fl(t, null, n, l)),
          Ua(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            he &&
            ((u = n = Qe) &&
              ((n = X0(n, t.type, t.pendingProps, Yt)),
              n !== null ? ((t.stateNode = n), (et = t), (Qe = Ut(n.firstChild)), (Yt = !1), (u = !0)) : (u = !1)),
            u || $l(t)),
          ki(t),
          (u = t.type),
          (i = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (n = i.children),
          Xr(u, i) ? (n = null) : o !== null && Xr(u, o) && (t.flags |= 32),
          t.memoizedState !== null && ((u = Uc(e, t, i0, null, null, l)), (Fa._currentValue = u)),
          Ua(e, t),
          Ze(e, t, n, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            he &&
            ((e = l = Qe) &&
              ((l = Q0(l, t.pendingProps, Yt)),
              l !== null ? ((t.stateNode = l), (et = t), (Qe = null), (e = !0)) : (e = !1)),
            e || $l(t)),
          null
        );
      case 13:
        return Jo(e, t, l);
      case 4:
        return (
          pu(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = Fl(t, null, n, l)) : Ze(e, t, n, l),
          t.child
        );
      case 11:
        return Yo(e, t, t.type, t.pendingProps, l);
      case 7:
        return Ze(e, t, t.pendingProps, l), t.child;
      case 8:
        return Ze(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return Ze(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (n = t.pendingProps), xl(t, t.type, n.value), Ze(e, t, n.children, l), t.child;
      case 9:
        return (
          (u = t.type._context),
          (n = t.pendingProps.children),
          nn(t),
          (u = $e(u)),
          (n = n(u)),
          (t.flags |= 1),
          Ze(e, t, n, l),
          t.child
        );
      case 14:
        return Go(e, t, t.type, t.pendingProps, l);
      case 15:
        return Vo(e, t, t.type, t.pendingProps, l);
      case 19:
        return Fo(e, t, l);
      case 22:
        return Xo(e, t, l);
      case 24:
        return (
          nn(t),
          (n = $e(qe)),
          e === null
            ? ((u = _c()),
              u === null &&
                ((u = Te),
                (i = Cc()),
                (u.pooledCache = i),
                i.refCount++,
                i !== null && (u.pooledCacheLanes |= l),
                (u = i)),
              (t.memoizedState = { parent: n, cache: u }),
              cr(t),
              xl(t, qe, u))
            : ((e.lanes & l) !== 0 && (rr(e, t), ja(t, null, null, l), Ma()),
              (u = e.memoizedState),
              (i = t.memoizedState),
              u.parent !== n
                ? ((u = { parent: n, cache: n }),
                  (t.memoizedState = u),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
                  xl(t, qe, n))
                : ((n = i.cache), xl(t, qe, n), n !== u.cache && ir(t, [qe], l, !0))),
          Ze(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  var ar = pe(null),
    ln = null,
    nl = null;
  function xl(e, t, l) {
    xe(ar, t._currentValue), (t._currentValue = l);
  }
  function al(e) {
    (e._currentValue = ar.current), Me(ar);
  }
  function ur(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function ir(e, t, l, n) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var i = u.dependencies;
      if (i !== null) {
        var o = u.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var m = i;
          i = u;
          for (var g = 0; g < t.length; g++)
            if (m.context === t[g]) {
              (i.lanes |= l), (m = i.alternate), m !== null && (m.lanes |= l), ur(i.return, l, e), n || (o = null);
              break e;
            }
          i = m.next;
        }
      } else if (u.tag === 18) {
        if (((o = u.return), o === null)) throw Error(r(341));
        (o.lanes |= l), (i = o.alternate), i !== null && (i.lanes |= l), ur(o, l, e), (o = null);
      } else o = u.child;
      if (o !== null) o.return = u;
      else
        for (o = u; o !== null; ) {
          if (o === e) {
            o = null;
            break;
          }
          if (((u = o.sibling), u !== null)) {
            (u.return = o.return), (o = u);
            break;
          }
          o = o.return;
        }
      u = o;
    }
  }
  function za(e, t, l, n) {
    e = null;
    for (var u = t, i = !1; u !== null; ) {
      if (!i) {
        if ((u.flags & 524288) !== 0) i = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var o = u.alternate;
        if (o === null) throw Error(r(387));
        if (((o = o.memoizedProps), o !== null)) {
          var m = u.type;
          st(u.pendingProps.value, o.value) || (e !== null ? e.push(m) : (e = [m]));
        }
      } else if (u === yu.current) {
        if (((o = u.alternate), o === null)) throw Error(r(387));
        o.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Fa) : (e = [Fa]));
      }
      u = u.return;
    }
    e !== null && ir(t, e, l, n), (t.flags |= 262144);
  }
  function ei(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!st(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function nn(e) {
    (ln = e), (nl = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function $e(e) {
    return Po(ln, e);
  }
  function ti(e, t) {
    return ln === null && nn(e), Po(e, t);
  }
  function Po(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), nl === null)) {
      if (e === null) throw Error(r(308));
      (nl = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else nl = nl.next = t;
    return l;
  }
  var Ol = !1;
  function cr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function rr(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null
        });
  }
  function Cl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Dl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (Ce & 2) !== 0)) {
      var u = n.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)), (n.pending = t), (t = ju(e)), zf(e, null, l), t
      );
    }
    return Mu(e, n, t, l), ju(e);
  }
  function wa(e, t, l) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194176) !== 0))) {
      var n = t.lanes;
      (n &= e.pendingLanes), (l |= n), (t.lanes = l), qs(e, l);
    }
  }
  function sr(e, t) {
    var l = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var u = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var o = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          i === null ? (u = i = o) : (i = i.next = o), (l = l.next);
        } while (l !== null);
        i === null ? (u = i = t) : (i = i.next = t);
      } else u = i = t;
      (l = { baseState: n.baseState, firstBaseUpdate: u, lastBaseUpdate: i, shared: n.shared, callbacks: n.callbacks }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate), e === null ? (l.firstBaseUpdate = t) : (e.next = t), (l.lastBaseUpdate = t);
  }
  var fr = !1;
  function Ma() {
    if (fr) {
      var e = jn;
      if (e !== null) throw e;
    }
  }
  function ja(e, t, l, n) {
    fr = !1;
    var u = e.updateQueue;
    Ol = !1;
    var i = u.firstBaseUpdate,
      o = u.lastBaseUpdate,
      m = u.shared.pending;
    if (m !== null) {
      u.shared.pending = null;
      var g = m,
        A = g.next;
      (g.next = null), o === null ? (i = A) : (o.next = A), (o = g);
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (m = B.lastBaseUpdate),
        m !== o && (m === null ? (B.firstBaseUpdate = A) : (m.next = A), (B.lastBaseUpdate = g)));
    }
    if (i !== null) {
      var q = u.baseState;
      (o = 0), (B = A = g = null), (m = i);
      do {
        var _ = m.lane & -536870913,
          j = _ !== m.lane;
        if (j ? (de & _) === _ : (n & _) === _) {
          _ !== 0 && _ === Mn && (fr = !0),
            B !== null && (B = B.next = { lane: 0, tag: m.tag, payload: m.payload, callback: null, next: null });
          e: {
            var J = e,
              ee = m;
            _ = t;
            var Ue = l;
            switch (ee.tag) {
              case 1:
                if (((J = ee.payload), typeof J == 'function')) {
                  q = J.call(Ue, q, _);
                  break e;
                }
                q = J;
                break e;
              case 3:
                J.flags = (J.flags & -65537) | 128;
              case 0:
                if (((J = ee.payload), (_ = typeof J == 'function' ? J.call(Ue, q, _) : J), _ == null)) break e;
                q = ue({}, q, _);
                break e;
              case 2:
                Ol = !0;
            }
          }
          (_ = m.callback),
            _ !== null &&
              ((e.flags |= 64),
              j && (e.flags |= 8192),
              (j = u.callbacks),
              j === null ? (u.callbacks = [_]) : j.push(_));
        } else
          (j = { lane: _, tag: m.tag, payload: m.payload, callback: m.callback, next: null }),
            B === null ? ((A = B = j), (g = q)) : (B = B.next = j),
            (o |= _);
        if (((m = m.next), m === null)) {
          if (((m = u.shared.pending), m === null)) break;
          (j = m), (m = j.next), (j.next = null), (u.lastBaseUpdate = j), (u.shared.pending = null);
        }
      } while (!0);
      B === null && (g = q),
        (u.baseState = g),
        (u.firstBaseUpdate = A),
        (u.lastBaseUpdate = B),
        i === null && (u.shared.lanes = 0),
        (wl |= o),
        (e.lanes = o),
        (e.memoizedState = q);
    }
  }
  function Io(e, t) {
    if (typeof e != 'function') throw Error(r(191, e));
    e.call(t);
  }
  function ed(e, t) {
    var l = e.callbacks;
    if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) Io(l[e], t);
  }
  function Ba(e, t) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var i = l.create,
              o = l.inst;
            (n = i()), (o.destroy = n);
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (m) {
      Se(t, t.return, m);
    }
  }
  function _l(e, t, l) {
    try {
      var n = t.updateQueue,
        u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var i = u.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            var o = n.inst,
              m = o.destroy;
            if (m !== void 0) {
              (o.destroy = void 0), (u = t);
              var g = l;
              try {
                m();
              } catch (A) {
                Se(u, g, A);
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (A) {
      Se(t, t.return, A);
    }
  }
  function td(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        ed(t, l);
      } catch (n) {
        Se(e, e.return, n);
      }
    }
  }
  function ld(e, t, l) {
    (l.props = tn(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (n) {
      Se(e, t, n);
    }
  }
  function an(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        var n = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = n;
            break;
          default:
            u = n;
        }
        typeof l == 'function' ? (e.refCleanup = l(u)) : (l.current = u);
      }
    } catch (i) {
      Se(e, t, i);
    }
  }
  function ft(e, t) {
    var l = e.ref,
      n = e.refCleanup;
    if (l !== null)
      if (typeof n == 'function')
        try {
          n();
        } catch (u) {
          Se(e, t, u);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (u) {
          Se(e, t, u);
        }
      else l.current = null;
  }
  function nd(e) {
    var t = e.type,
      l = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && n.focus();
          break e;
        case 'img':
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (u) {
      Se(e, e.return, u);
    }
  }
  function ad(e, t, l) {
    try {
      var n = e.stateNode;
      L0(n, e.type, l, t), (n[nt] = t);
    } catch (u) {
      Se(e, e.return, u);
    }
  }
  function ud(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
  }
  function or(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ud(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function dr(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode),
        t
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(e, t)
            : l.insertBefore(e, t)
          : (l.nodeType === 8 ? ((t = l.parentNode), t.insertBefore(e, l)) : ((t = l), t.appendChild(e)),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = yi));
    else if (n !== 4 && n !== 27 && ((e = e.child), e !== null))
      for (dr(e, t, l), e = e.sibling; e !== null; ) dr(e, t, l), (e = e.sibling);
  }
  function li(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6) (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && n !== 27 && ((e = e.child), e !== null))
      for (li(e, t, l), e = e.sibling; e !== null; ) li(e, t, l), (e = e.sibling);
  }
  var ul = !1,
    _e = !1,
    hr = !1,
    id = typeof WeakSet == 'function' ? WeakSet : Set,
    Ve = null,
    cd = !1;
  function m0(e, t) {
    if (((e = e.containerInfo), (Gr = Ti), (e = Af(e)), yc(e))) {
      if ('selectionStart' in e) var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var u = n.anchorOffset,
              i = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var o = 0,
              m = -1,
              g = -1,
              A = 0,
              B = 0,
              q = e,
              _ = null;
            t: for (;;) {
              for (
                var j;
                q !== l || (u !== 0 && q.nodeType !== 3) || (m = o + u),
                  q !== i || (n !== 0 && q.nodeType !== 3) || (g = o + n),
                  q.nodeType === 3 && (o += q.nodeValue.length),
                  (j = q.firstChild) !== null;

              )
                (_ = q), (q = j);
              for (;;) {
                if (q === e) break t;
                if ((_ === l && ++A === u && (m = o), _ === i && ++B === n && (g = o), (j = q.nextSibling) !== null))
                  break;
                (q = _), (_ = q.parentNode);
              }
              q = j;
            }
            l = m === -1 || g === -1 ? null : { start: m, end: g };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Vr = { focusedElem: e, selectionRange: l }, Ti = !1, Ve = t; Ve !== null; )
      if (((t = Ve), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (Ve = e);
      else
        for (; Ve !== null; ) {
          switch (((t = Ve), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                (e = void 0), (l = t), (u = i.memoizedProps), (i = i.memoizedState), (n = l.stateNode);
                try {
                  var J = tn(l.type, u, l.elementType === l.type);
                  (e = n.getSnapshotBeforeUpdate(J, i)), (n.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ee) {
                  Se(l, l.return, ee);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) Kr(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Kr(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Ve = e);
            break;
          }
          Ve = t.return;
        }
    return (J = cd), (cd = !1), J;
  }
  function rd(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        cl(e, l), n & 4 && Ba(5, l);
        break;
      case 1:
        if ((cl(e, l), n & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (m) {
              Se(l, l.return, m);
            }
          else {
            var u = tn(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Se(l, l.return, m);
            }
          }
        n & 64 && td(l), n & 512 && an(l, l.return);
        break;
      case 3:
        if ((cl(e, l), n & 64 && ((n = l.updateQueue), n !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            ed(n, e);
          } catch (m) {
            Se(l, l.return, m);
          }
        }
        break;
      case 26:
        cl(e, l), n & 512 && an(l, l.return);
        break;
      case 27:
      case 5:
        cl(e, l), t === null && n & 4 && nd(l), n & 512 && an(l, l.return);
        break;
      case 12:
        cl(e, l);
        break;
      case 13:
        cl(e, l), n & 4 && od(e, l);
        break;
      case 22:
        if (((u = l.memoizedState !== null || ul), !u)) {
          t = (t !== null && t.memoizedState !== null) || _e;
          var i = ul,
            o = _e;
          (ul = u), (_e = t) && !o ? Nl(e, l, (l.subtreeFlags & 8772) !== 0) : cl(e, l), (ul = i), (_e = o);
        }
        n & 512 && (l.memoizedProps.mode === 'manual' ? an(l, l.return) : ft(l, l.return));
        break;
      default:
        cl(e, l);
    }
  }
  function sd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), sd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Ii(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var He = null,
    ot = !1;
  function il(e, t, l) {
    for (l = l.child; l !== null; ) fd(e, t, l), (l = l.sibling);
  }
  function fd(e, t, l) {
    if (ct && typeof ct.onCommitFiberUnmount == 'function')
      try {
        ct.onCommitFiberUnmount(ua, l);
      } catch {}
    switch (l.tag) {
      case 26:
        _e || ft(l, t),
          il(e, t, l),
          l.memoizedState ? l.memoizedState.count-- : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        _e || ft(l, t);
        var n = He,
          u = ot;
        for (He = l.stateNode, il(e, t, l), l = l.stateNode, t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
        Ii(l), (He = n), (ot = u);
        break;
      case 5:
        _e || ft(l, t);
      case 6:
        u = He;
        var i = ot;
        if (((He = null), il(e, t, l), (He = u), (ot = i), He !== null))
          if (ot)
            try {
              (e = He), (n = l.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n);
            } catch (o) {
              Se(l, t, o);
            }
          else
            try {
              He.removeChild(l.stateNode);
            } catch (o) {
              Se(l, t, o);
            }
        break;
      case 18:
        He !== null &&
          (ot
            ? ((t = He),
              (l = l.stateNode),
              t.nodeType === 8 ? Zr(t.parentNode, l) : t.nodeType === 1 && Zr(t, l),
              eu(t))
            : Zr(He, l.stateNode));
        break;
      case 4:
        (n = He), (u = ot), (He = l.stateNode.containerInfo), (ot = !0), il(e, t, l), (He = n), (ot = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _e || _l(2, l, t), _e || _l(4, l, t), il(e, t, l);
        break;
      case 1:
        _e || (ft(l, t), (n = l.stateNode), typeof n.componentWillUnmount == 'function' && ld(l, t, n)), il(e, t, l);
        break;
      case 21:
        il(e, t, l);
        break;
      case 22:
        _e || ft(l, t), (_e = (n = _e) || l.memoizedState !== null), il(e, t, l), (_e = n);
        break;
      default:
        il(e, t, l);
    }
  }
  function od(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        eu(e);
      } catch (l) {
        Se(t, t.return, l);
      }
  }
  function y0(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new id()), t;
      case 22:
        return (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new id()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function mr(e, t) {
    var l = y0(e);
    t.forEach(function (n) {
      var u = D0.bind(null, e, n);
      l.has(n) || (l.add(n), n.then(u, u));
    });
  }
  function Tt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var u = l[n],
          i = e,
          o = t,
          m = o;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
            case 5:
              (He = m.stateNode), (ot = !1);
              break e;
            case 3:
              (He = m.stateNode.containerInfo), (ot = !0);
              break e;
            case 4:
              (He = m.stateNode.containerInfo), (ot = !0);
              break e;
          }
          m = m.return;
        }
        if (He === null) throw Error(r(160));
        fd(i, o, u), (He = null), (ot = !1), (i = u.alternate), i !== null && (i.return = null), (u.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) dd(t, e), (t = t.sibling);
  }
  var Nt = null;
  function dd(e, t) {
    var l = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Tt(t, e), At(e), n & 4 && (_l(3, e, e.return), Ba(3, e), _l(5, e, e.return));
        break;
      case 1:
        Tt(t, e),
          At(e),
          n & 512 && (_e || l === null || ft(l, l.return)),
          n & 64 &&
            ul &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((l = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = l === null ? n : l.concat(n)))));
        break;
      case 26:
        var u = Nt;
        if ((Tt(t, e), At(e), n & 512 && (_e || l === null || ft(l, l.return)), n & 4)) {
          var i = l !== null ? l.memoizedState : null;
          if (((n = e.memoizedState), l === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  (n = e.type), (l = e.memoizedProps), (u = u.ownerDocument || u);
                  t: switch (n) {
                    case 'title':
                      (i = u.getElementsByTagName('title')[0]),
                        (!i ||
                          i[ra] ||
                          i[Je] ||
                          i.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          i.hasAttribute('itemprop')) &&
                          ((i = u.createElement(n)), u.head.insertBefore(i, u.querySelector('head > title'))),
                        Ke(i, n, l),
                        (i[Je] = e),
                        Ye(i),
                        (n = i);
                      break e;
                    case 'link':
                      var o = nh('link', 'href', u).get(n + (l.href || ''));
                      if (o) {
                        for (var m = 0; m < o.length; m++)
                          if (
                            ((i = o[m]),
                            i.getAttribute('href') === (l.href == null ? null : l.href) &&
                              i.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              i.getAttribute('title') === (l.title == null ? null : l.title) &&
                              i.getAttribute('crossorigin') === (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            o.splice(m, 1);
                            break t;
                          }
                      }
                      (i = u.createElement(n)), Ke(i, n, l), u.head.appendChild(i);
                      break;
                    case 'meta':
                      if ((o = nh('meta', 'content', u).get(n + (l.content || '')))) {
                        for (m = 0; m < o.length; m++)
                          if (
                            ((i = o[m]),
                            i.getAttribute('content') === (l.content == null ? null : '' + l.content) &&
                              i.getAttribute('name') === (l.name == null ? null : l.name) &&
                              i.getAttribute('property') === (l.property == null ? null : l.property) &&
                              i.getAttribute('http-equiv') === (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            o.splice(m, 1);
                            break t;
                          }
                      }
                      (i = u.createElement(n)), Ke(i, n, l), u.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  (i[Je] = e), Ye(i), (n = i);
                }
                e.stateNode = n;
              } else ah(u, e.type, e.stateNode);
            else e.stateNode = lh(u, n, e.memoizedProps);
          else
            i !== n
              ? (i === null ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l)) : i.count--,
                n === null ? ah(u, e.type, e.stateNode) : lh(u, n, e.memoizedProps))
              : n === null && e.stateNode !== null && ad(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        if (n & 4 && e.alternate === null) {
          (u = e.stateNode), (i = e.memoizedProps);
          try {
            for (var g = u.firstChild; g; ) {
              var A = g.nextSibling,
                B = g.nodeName;
              g[ra] ||
                B === 'HEAD' ||
                B === 'BODY' ||
                B === 'SCRIPT' ||
                B === 'STYLE' ||
                (B === 'LINK' && g.rel.toLowerCase() === 'stylesheet') ||
                u.removeChild(g),
                (g = A);
            }
            for (var q = e.type, _ = u.attributes; _.length; ) u.removeAttributeNode(_[0]);
            Ke(u, q, i), (u[Je] = e), (u[nt] = i);
          } catch (J) {
            Se(e, e.return, J);
          }
        }
      case 5:
        if ((Tt(t, e), At(e), n & 512 && (_e || l === null || ft(l, l.return)), e.flags & 32)) {
          u = e.stateNode;
          try {
            Tn(u, '');
          } catch (J) {
            Se(e, e.return, J);
          }
        }
        n & 4 && e.stateNode != null && ((u = e.memoizedProps), ad(e, u, l !== null ? l.memoizedProps : u)),
          n & 1024 && (hr = !0);
        break;
      case 6:
        if ((Tt(t, e), At(e), n & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          (n = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = n;
          } catch (J) {
            Se(e, e.return, J);
          }
        }
        break;
      case 3:
        if (
          ((bi = null),
          (u = Nt),
          (Nt = vi(t.containerInfo)),
          Tt(t, e),
          (Nt = u),
          At(e),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            eu(t.containerInfo);
          } catch (J) {
            Se(e, e.return, J);
          }
        hr && ((hr = !1), hd(e));
        break;
      case 4:
        (n = Nt), (Nt = vi(e.stateNode.containerInfo)), Tt(t, e), At(e), (Nt = n);
        break;
      case 12:
        Tt(t, e), At(e);
        break;
      case 13:
        Tt(t, e),
          At(e),
          e.child.flags & 8192 && (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) && (Ar = qt()),
          n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), mr(e, n)));
        break;
      case 22:
        if (
          (n & 512 && (_e || l === null || ft(l, l.return)),
          (g = e.memoizedState !== null),
          (A = l !== null && l.memoizedState !== null),
          (B = ul),
          (q = _e),
          (ul = B || g),
          (_e = q || A),
          Tt(t, e),
          (_e = q),
          (ul = B),
          At(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          n & 8192 &&
            ((t._visibility = g ? t._visibility & -2 : t._visibility | 1),
            g && ((t = ul || _e), l === null || A || t || qn(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== 'manual'))
        )
          e: for (l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (l === null) {
                A = l = t;
                try {
                  if (((u = A.stateNode), g))
                    (i = u.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none');
                  else {
                    (o = A.stateNode), (m = A.memoizedProps.style);
                    var j = m != null && m.hasOwnProperty('display') ? m.display : null;
                    o.style.display = j == null || typeof j == 'boolean' ? '' : ('' + j).trim();
                  }
                } catch (J) {
                  Se(A, A.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                A = t;
                try {
                  A.stateNode.nodeValue = g ? '' : A.memoizedProps;
                } catch (J) {
                  Se(A, A.return, J);
                }
              }
            } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) && t.child !== null) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null), (t.sibling.return = t.return), (t = t.sibling);
          }
        n & 4 &&
          ((n = e.updateQueue), n !== null && ((l = n.retryQueue), l !== null && ((n.retryQueue = null), mr(e, l))));
        break;
      case 19:
        Tt(t, e), At(e), n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), mr(e, n)));
        break;
      case 21:
        break;
      default:
        Tt(t, e), At(e);
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var l = e.return; l !== null; ) {
              if (ud(l)) {
                var n = l;
                break e;
              }
              l = l.return;
            }
            throw Error(r(160));
          }
          switch (n.tag) {
            case 27:
              var u = n.stateNode,
                i = or(e);
              li(e, i, u);
              break;
            case 5:
              var o = n.stateNode;
              n.flags & 32 && (Tn(o, ''), (n.flags &= -33));
              var m = or(e);
              li(e, m, o);
              break;
            case 3:
            case 4:
              var g = n.stateNode.containerInfo,
                A = or(e);
              dr(e, A, g);
              break;
            default:
              throw Error(r(161));
          }
        }
      } catch (B) {
        Se(e, e.return, B);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function hd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        hd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
      }
  }
  function cl(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) rd(e, t.alternate, t), (t = t.sibling);
  }
  function qn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _l(4, t, t.return), qn(t);
          break;
        case 1:
          ft(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == 'function' && ld(t, t.return, l), qn(t);
          break;
        case 26:
        case 27:
        case 5:
          ft(t, t.return), qn(t);
          break;
        case 22:
          ft(t, t.return), t.memoizedState === null && qn(t);
          break;
        default:
          qn(t);
      }
      e = e.sibling;
    }
  }
  function Nl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        u = e,
        i = t,
        o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Nl(u, i, l), Ba(4, i);
          break;
        case 1:
          if ((Nl(u, i, l), (n = i), (u = n.stateNode), typeof u.componentDidMount == 'function'))
            try {
              u.componentDidMount();
            } catch (A) {
              Se(n, n.return, A);
            }
          if (((n = i), (u = n.updateQueue), u !== null)) {
            var m = n.stateNode;
            try {
              var g = u.shared.hiddenCallbacks;
              if (g !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < g.length; u++) Io(g[u], m);
            } catch (A) {
              Se(n, n.return, A);
            }
          }
          l && o & 64 && td(i), an(i, i.return);
          break;
        case 26:
        case 27:
        case 5:
          Nl(u, i, l), l && n === null && o & 4 && nd(i), an(i, i.return);
          break;
        case 12:
          Nl(u, i, l);
          break;
        case 13:
          Nl(u, i, l), l && o & 4 && od(u, i);
          break;
        case 22:
          i.memoizedState === null && Nl(u, i, l), an(i, i.return);
          break;
        default:
          Nl(u, i, l);
      }
      t = t.sibling;
    }
  }
  function yr(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Oa(l));
  }
  function pr(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Oa(e));
  }
  function Ul(e, t, l, n) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) md(e, t, l, n), (t = t.sibling);
  }
  function md(e, t, l, n) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ul(e, t, l, n), u & 2048 && Ba(9, t);
        break;
      case 3:
        Ul(e, t, l, n),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Oa(e)));
        break;
      case 12:
        if (u & 2048) {
          Ul(e, t, l, n), (e = t.stateNode);
          try {
            var i = t.memoizedProps,
              o = i.id,
              m = i.onPostCommit;
            typeof m == 'function' && m(o, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (g) {
            Se(t, t.return, g);
          }
        } else Ul(e, t, l, n);
        break;
      case 23:
        break;
      case 22:
        (i = t.stateNode),
          t.memoizedState !== null
            ? i._visibility & 4
              ? Ul(e, t, l, n)
              : Ha(e, t)
            : i._visibility & 4
            ? Ul(e, t, l, n)
            : ((i._visibility |= 4), Yn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && yr(t.alternate, t);
        break;
      case 24:
        Ul(e, t, l, n), u & 2048 && pr(t.alternate, t);
        break;
      default:
        Ul(e, t, l, n);
    }
  }
  function Yn(e, t, l, n, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e,
        o = t,
        m = l,
        g = n,
        A = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Yn(i, o, m, g, u), Ba(8, o);
          break;
        case 23:
          break;
        case 22:
          var B = o.stateNode;
          o.memoizedState !== null
            ? B._visibility & 4
              ? Yn(i, o, m, g, u)
              : Ha(i, o)
            : ((B._visibility |= 4), Yn(i, o, m, g, u)),
            u && A & 2048 && yr(o.alternate, o);
          break;
        case 24:
          Yn(i, o, m, g, u), u && A & 2048 && pr(o.alternate, o);
          break;
        default:
          Yn(i, o, m, g, u);
      }
      t = t.sibling;
    }
  }
  function Ha(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          n = t,
          u = n.flags;
        switch (n.tag) {
          case 22:
            Ha(l, n), u & 2048 && yr(n.alternate, n);
            break;
          case 24:
            Ha(l, n), u & 2048 && pr(n.alternate, n);
            break;
          default:
            Ha(l, n);
        }
        t = t.sibling;
      }
  }
  var La = 8192;
  function Gn(e) {
    if (e.subtreeFlags & La) for (e = e.child; e !== null; ) yd(e), (e = e.sibling);
  }
  function yd(e) {
    switch (e.tag) {
      case 26:
        Gn(e), e.flags & La && e.memoizedState !== null && np(Nt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Gn(e);
        break;
      case 3:
      case 4:
        var t = Nt;
        (Nt = vi(e.stateNode.containerInfo)), Gn(e), (Nt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null ? ((t = La), (La = 16777216), Gn(e), (La = t)) : Gn(e));
        break;
      default:
        Gn(e);
    }
  }
  function pd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function qa(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          (Ve = n), gd(n, e);
        }
      pd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) vd(e), (e = e.sibling);
  }
  function vd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        qa(e), e.flags & 2048 && _l(9, e, e.return);
        break;
      case 3:
        qa(e);
        break;
      case 12:
        qa(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), ni(e))
          : qa(e);
        break;
      default:
        qa(e);
    }
  }
  function ni(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          (Ve = n), gd(n, e);
        }
      pd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          _l(8, t, t.return), ni(t);
          break;
        case 22:
          (l = t.stateNode), l._visibility & 4 && ((l._visibility &= -5), ni(t));
          break;
        default:
          ni(t);
      }
      e = e.sibling;
    }
  }
  function gd(e, t) {
    for (; Ve !== null; ) {
      var l = Ve;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Oa(l.memoizedState.cache);
      }
      if (((n = l.child), n !== null)) (n.return = l), (Ve = n);
      else
        e: for (l = e; Ve !== null; ) {
          n = Ve;
          var u = n.sibling,
            i = n.return;
          if ((sd(n), n === l)) {
            Ve = null;
            break e;
          }
          if (u !== null) {
            (u.return = i), (Ve = u);
            break e;
          }
          Ve = i;
        }
    }
  }
  function p0(e, t, l, n) {
    (this.tag = e),
      (this.key = l),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Rt(e, t, l, n) {
    return new p0(e, t, l, n);
  }
  function vr(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function zl(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Rt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t), (l.type = e.type), (l.flags = 0), (l.subtreeFlags = 0), (l.deletions = null)),
      (l.flags = e.flags & 31457280),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function bd(e, t) {
    e.flags &= 31457282;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function ai(e, t, l, n, u, i) {
    var o = 0;
    if (((n = e), typeof e == 'function')) vr(e) && (o = 1);
    else if (typeof e == 'string')
      o = tp(e, l, Lt.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case p:
          return un(l.children, u, i, t);
        case y:
          (o = 8), (u |= 24);
          break;
        case b:
          return (e = Rt(12, l, t, u | 2)), (e.elementType = b), (e.lanes = i), e;
        case w:
          return (e = Rt(13, l, t, u)), (e.elementType = w), (e.lanes = i), e;
        case N:
          return (e = Rt(19, l, t, u)), (e.elementType = N), (e.lanes = i), e;
        case V:
          return Sd(l, u, i, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case D:
              case L:
                o = 10;
                break e;
              case z:
                o = 9;
                break e;
              case O:
                o = 11;
                break e;
              case U:
                o = 14;
                break e;
              case Y:
                (o = 16), (n = null);
                break e;
            }
          (o = 29), (l = Error(r(130, e === null ? 'null' : typeof e, ''))), (n = null);
      }
    return (t = Rt(o, l, t, u)), (t.elementType = e), (t.type = n), (t.lanes = i), t;
  }
  function un(e, t, l, n) {
    return (e = Rt(7, e, n, t)), (e.lanes = l), e;
  }
  function Sd(e, t, l, n) {
    (e = Rt(22, e, n, t)), (e.elementType = V), (e.lanes = l);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var i = u._current;
        if (i === null) throw Error(r(456));
        if ((u._pendingVisibility & 2) === 0) {
          var o = Sl(i, 2);
          o !== null && ((u._pendingVisibility |= 2), tt(o, i, 2));
        }
      },
      attach: function () {
        var i = u._current;
        if (i === null) throw Error(r(456));
        if ((u._pendingVisibility & 2) !== 0) {
          var o = Sl(i, 2);
          o !== null && ((u._pendingVisibility &= -3), tt(o, i, 2));
        }
      }
    };
    return (e.stateNode = u), e;
  }
  function gr(e, t, l) {
    return (e = Rt(6, e, null, t)), (e.lanes = l), e;
  }
  function br(e, t, l) {
    return (
      (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  function rl(e) {
    e.flags |= 4;
  }
  function Ed(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !uh(t))) {
      if (
        ((t = Et.current),
        t !== null &&
          ((de & 4194176) === de ? Gt !== null : ((de & 62914560) !== de && (de & 536870912) === 0) || t !== Gt))
      )
        throw ((Aa = Rc), Hf);
      e.flags |= 8192;
    }
  }
  function ui(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? Hs() : 536870912), (e.lanes |= t), (Xn |= t));
  }
  function Ya(e, t) {
    if (!he)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var l = null; t !== null; ) t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = e.tail;
          for (var n = null; l !== null; ) l.alternate !== null && (n = l), (l = l.sibling);
          n === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (n.sibling = null);
      }
  }
  function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      n = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags & 31457280),
          (n |= u.flags & 31457280),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (l |= u.lanes | u.childLanes), (n |= u.subtreeFlags), (n |= u.flags), (u.return = e), (u = u.sibling);
    return (e.subtreeFlags |= n), (e.childLanes = l), t;
  }
  function v0(e, t, l) {
    var n = t.pendingProps;
    switch ((Tc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Oe(t), null;
      case 1:
        return Oe(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          al(qe),
          pn(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (ba(t)
              ? rl(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), _t !== null && (Cr(_t), (_t = null)))),
          Oe(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (rl(t), l !== null ? (Oe(t), Ed(t, l)) : (Oe(t), (t.flags &= -16777217)))
            : l
            ? l !== e.memoizedState
              ? (rl(t), Oe(t), Ed(t, l))
              : (Oe(t), (t.flags &= -16777217))
            : (e.memoizedProps !== n && rl(t), Oe(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        vu(t), (l = pl.current);
        var u = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== n && rl(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(r(166));
            return Oe(t), null;
          }
          (e = Lt.current), ba(t) ? jf(t) : ((e = Wd(u, n, l)), (t.stateNode = e), rl(t));
        }
        return Oe(t), null;
      case 5:
        if ((vu(t), (l = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== n && rl(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(r(166));
            return Oe(t), null;
          }
          if (((e = Lt.current), ba(t))) jf(t);
          else {
            switch (((u = pi(pl.current)), e)) {
              case 1:
                e = u.createElementNS('http://www.w3.org/2000/svg', l);
                break;
              case 2:
                e = u.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                break;
              default:
                switch (l) {
                  case 'svg':
                    e = u.createElementNS('http://www.w3.org/2000/svg', l);
                    break;
                  case 'math':
                    e = u.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                    break;
                  case 'script':
                    (e = u.createElement('div')),
                      (e.innerHTML = '<script></script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e = typeof n.is == 'string' ? u.createElement('select', { is: n.is }) : u.createElement('select')),
                      n.multiple ? (e.multiple = !0) : n.size && (e.size = n.size);
                    break;
                  default:
                    e = typeof n.is == 'string' ? u.createElement(l, { is: n.is }) : u.createElement(l);
                }
            }
            (e[Je] = t), (e[nt] = n);
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = e;
            e: switch ((Ke(e, l, n), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!n.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && rl(t);
          }
        }
        return Oe(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && rl(t);
        else {
          if (typeof n != 'string' && t.stateNode === null) throw Error(r(166));
          if (((e = pl.current), ba(t))) {
            if (((e = t.stateNode), (l = t.memoizedProps), (n = null), (u = et), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            (e[Je] = t),
              (e = !!(e.nodeValue === l || (n !== null && n.suppressHydrationWarning === !0) || Zd(e.nodeValue, l))),
              e || $l(t);
          } else (e = pi(e).createTextNode(n)), (e[Je] = t), (t.stateNode = e);
        }
        return Oe(t), null;
      case 13:
        if (((n = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (((u = ba(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(r(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u)) throw Error(r(317));
              u[Je] = t;
            } else Sa(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Oe(t), (u = !1);
          } else _t !== null && (Cr(_t), (_t = null)), (u = !0);
          if (!u) return t.flags & 256 ? (el(t), t) : (el(t), null);
        }
        if ((el(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
        if (((l = n !== null), (e = e !== null && e.memoizedState !== null), l)) {
          (n = t.child),
            (u = null),
            n.alternate !== null &&
              n.alternate.memoizedState !== null &&
              n.alternate.memoizedState.cachePool !== null &&
              (u = n.alternate.memoizedState.cachePool.pool);
          var i = null;
          n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool),
            i !== u && (n.flags |= 2048);
        }
        return l !== e && l && (t.child.flags |= 8192), ui(t, t.updateQueue), Oe(t), null;
      case 4:
        return pn(), e === null && Lr(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return al(t.type), Oe(t), null;
      case 19:
        if ((Me(Le), (u = t.memoizedState), u === null)) return Oe(t), null;
        if (((n = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (n) Ya(u, !1);
          else {
            if (Ne !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = Vu(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Ya(u, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      ui(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    bd(l, e), (l = l.sibling);
                  return xe(Le, (Le.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null && qt() > ii && ((t.flags |= 128), (n = !0), Ya(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Vu(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ui(t, e),
                Ya(u, !0),
                u.tail === null && u.tailMode === 'hidden' && !i.alternate && !he)
              )
                return Oe(t), null;
            } else
              2 * qt() - u.renderingStartTime > ii &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), Ya(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = u.last), e !== null ? (e.sibling = i) : (t.child = i), (u.last = i));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = qt()),
            (t.sibling = null),
            (e = Le.current),
            xe(Le, n ? (e & 1) | 2 : e & 1),
            t)
          : (Oe(t), null);
      case 22:
      case 23:
        return (
          el(t),
          Oc(),
          (n = t.memoizedState !== null),
          e !== null ? (e.memoizedState !== null) !== n && (t.flags |= 8192) : n && (t.flags |= 8192),
          n
            ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Oe(t),
          (l = t.updateQueue),
          l !== null && ui(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
          n !== l && (t.flags |= 2048),
          e !== null && Me(Wl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          al(qe),
          Oe(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function g0(e, t) {
    switch ((Tc(t), t.tag)) {
      case 1:
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          al(qe), pn(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return vu(t), null;
      case 13:
        if ((el(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(r(340));
          Sa();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return Me(Le), null;
      case 4:
        return pn(), null;
      case 10:
        return al(t.type), null;
      case 22:
      case 23:
        return el(t), Oc(), e !== null && Me(Wl), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 24:
        return al(qe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Td(e, t) {
    switch ((Tc(t), t.tag)) {
      case 3:
        al(qe), pn();
        break;
      case 26:
      case 27:
      case 5:
        vu(t);
        break;
      case 4:
        pn();
        break;
      case 13:
        el(t);
        break;
      case 19:
        Me(Le);
        break;
      case 10:
        al(t.type);
        break;
      case 22:
      case 23:
        el(t), Oc(), e !== null && Me(Wl);
        break;
      case 24:
        al(qe);
    }
  }
  var b0 = {
      getCacheForType: function (e) {
        var t = $e(qe),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      }
    },
    S0 = typeof WeakMap == 'function' ? WeakMap : Map,
    Ce = 0,
    Te = null,
    se = null,
    de = 0,
    Ae = 0,
    dt = null,
    sl = !1,
    Vn = !1,
    Sr = !1,
    fl = 0,
    Ne = 0,
    wl = 0,
    cn = 0,
    Er = 0,
    xt = 0,
    Xn = 0,
    Ga = null,
    Xt = null,
    Tr = !1,
    Ar = 0,
    ii = 1 / 0,
    ci = null,
    Ml = null,
    ri = !1,
    rn = null,
    Va = 0,
    Rr = 0,
    xr = null,
    Xa = 0,
    Or = null;
  function ht() {
    if ((Ce & 2) !== 0 && de !== 0) return de & -de;
    if (Q.T !== null) {
      var e = Mn;
      return e !== 0 ? e : Mr();
    }
    return Gs();
  }
  function Ad() {
    xt === 0 && (xt = (de & 536870912) === 0 || he ? Bs() : 536870912);
    var e = Et.current;
    return e !== null && (e.flags |= 32), xt;
  }
  function tt(e, t, l) {
    ((e === Te && Ae === 2) || e.cancelPendingCommit !== null) && (Qn(e, 0), ol(e, de, xt, !1)),
      ca(e, l),
      ((Ce & 2) === 0 || e !== Te) && (e === Te && ((Ce & 2) === 0 && (cn |= l), Ne === 4 && ol(e, de, xt, !1)), Qt(e));
  }
  function Rd(e, t, l) {
    if ((Ce & 6) !== 0) throw Error(r(327));
    var n = (!l && (t & 60) === 0 && (t & e.expiredLanes) === 0) || ia(e, t),
      u = n ? A0(e, t) : Nr(e, t, !0),
      i = n;
    do {
      if (u === 0) {
        Vn && !n && ol(e, t, 0, !1);
        break;
      } else if (u === 6) ol(e, t, 0, !sl);
      else {
        if (((l = e.current.alternate), i && !E0(l))) {
          (u = Nr(e, t, !1)), (i = !1);
          continue;
        }
        if (u === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var o = 0;
          else (o = e.pendingLanes & -536870913), (o = o !== 0 ? o : o & 536870912 ? 536870912 : 0);
          if (o !== 0) {
            t = o;
            e: {
              var m = e;
              u = Ga;
              var g = m.current.memoizedState.isDehydrated;
              if ((g && (Qn(m, o).flags |= 256), (o = Nr(m, o, !1)), o !== 2)) {
                if (Sr && !g) {
                  (m.errorRecoveryDisabledLanes |= i), (cn |= i), (u = 4);
                  break e;
                }
                (i = Xt), (Xt = u), i !== null && Cr(i);
              }
              u = o;
            }
            if (((i = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Qn(e, 0), ol(e, t, 0, !0);
          break;
        }
        e: {
          switch (((n = e), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194176) === t) {
                ol(n, t, xt, !sl);
                break e;
              }
              break;
            case 2:
              Xt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if (((n.finishedWork = l), (n.finishedLanes = t), (t & 62914560) === t && ((i = Ar + 300 - qt()), 10 < i))) {
            if ((ol(n, t, xt, !sl), Eu(n, 0) !== 0)) break e;
            n.timeoutHandle = Jd(xd.bind(null, n, l, Xt, ci, Tr, t, xt, cn, Xn, sl, 2, -0, 0), i);
            break e;
          }
          xd(n, l, Xt, ci, Tr, t, xt, cn, Xn, sl, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Qt(e);
  }
  function Cr(e) {
    Xt === null ? (Xt = e) : Xt.push.apply(Xt, e);
  }
  function xd(e, t, l, n, u, i, o, m, g, A, B, q, _) {
    var j = t.subtreeFlags;
    if (
      (j & 8192 || (j & 16785408) === 16785408) &&
      (($a = { stylesheets: null, count: 0, unsuspend: lp }), yd(t), (t = ap()), t !== null)
    ) {
      (e.cancelPendingCommit = t(zd.bind(null, e, l, n, u, o, m, g, 1, q, _))), ol(e, i, o, !A);
      return;
    }
    zd(e, l, n, u, o, m, g, B, q, _);
  }
  function E0(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var u = l[n],
            i = u.getSnapshot;
          u = u.value;
          try {
            if (!st(i(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null)) (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ol(e, t, l, n) {
    (t &= ~Er),
      (t &= ~cn),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var i = 31 - rt(u),
        o = 1 << i;
      (n[i] = -1), (u &= ~o);
    }
    l !== 0 && Ls(e, l, t);
  }
  function si() {
    return (Ce & 6) === 0 ? (Qa(0), !1) : !0;
  }
  function Dr() {
    if (se !== null) {
      if (Ae === 0) var e = se.return;
      else (e = se), (nl = ln = null), Mc(e), (zn = null), (Ra = 0), (e = se);
      for (; e !== null; ) Td(e.alternate, e), (e = e.return);
      se = null;
    }
  }
  function Qn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), Y0(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      Dr(),
      (Te = e),
      (se = l = zl(e.current, null)),
      (de = t),
      (Ae = 0),
      (dt = null),
      (sl = !1),
      (Vn = ia(e, t)),
      (Sr = !1),
      (Xn = xt = Er = cn = wl = Ne = 0),
      (Xt = Ga = null),
      (Tr = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var u = 31 - rt(n),
          i = 1 << u;
        (t |= e[u]), (n &= ~i);
      }
    return (fl = t), wu(), l;
  }
  function Od(e, t) {
    (ce = null),
      (Q.H = Vt),
      t === Ta
        ? ((t = Yf()), (Ae = 3))
        : t === Hf
        ? ((t = Yf()), (Ae = 4))
        : (Ae = t === qo ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
      (dt = t),
      se === null && ((Ne = 1), Iu(e, gt(t, e.current)));
  }
  function Cd() {
    var e = Q.H;
    return (Q.H = Vt), e === null ? Vt : e;
  }
  function Dd() {
    var e = Q.A;
    return (Q.A = b0), e;
  }
  function _r() {
    (Ne = 4),
      sl || ((de & 4194176) !== de && Et.current !== null) || (Vn = !0),
      ((wl & 134217727) === 0 && (cn & 134217727) === 0) || Te === null || ol(Te, de, xt, !1);
  }
  function Nr(e, t, l) {
    var n = Ce;
    Ce |= 2;
    var u = Cd(),
      i = Dd();
    (Te !== e || de !== t) && ((ci = null), Qn(e, t)), (t = !1);
    var o = Ne;
    e: do
      try {
        if (Ae !== 0 && se !== null) {
          var m = se,
            g = dt;
          switch (Ae) {
            case 8:
              Dr(), (o = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Et.current === null && (t = !0);
              var A = Ae;
              if (((Ae = 0), (dt = null), Zn(e, m, g, A), l && Vn)) {
                o = 0;
                break e;
              }
              break;
            default:
              (A = Ae), (Ae = 0), (dt = null), Zn(e, m, g, A);
          }
        }
        T0(), (o = Ne);
        break;
      } catch (B) {
        Od(e, B);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (nl = ln = null),
      (Ce = n),
      (Q.H = u),
      (Q.A = i),
      se === null && ((Te = null), (de = 0), wu()),
      o
    );
  }
  function T0() {
    for (; se !== null; ) _d(se);
  }
  function A0(e, t) {
    var l = Ce;
    Ce |= 2;
    var n = Cd(),
      u = Dd();
    Te !== e || de !== t ? ((ci = null), (ii = qt() + 500), Qn(e, t)) : (Vn = ia(e, t));
    e: do
      try {
        if (Ae !== 0 && se !== null) {
          t = se;
          var i = dt;
          t: switch (Ae) {
            case 1:
              (Ae = 0), (dt = null), Zn(e, t, i, 1);
              break;
            case 2:
              if (Lf(i)) {
                (Ae = 0), (dt = null), Nd(t);
                break;
              }
              (t = function () {
                Ae === 2 && Te === e && (Ae = 7), Qt(e);
              }),
                i.then(t, t);
              break e;
            case 3:
              Ae = 7;
              break e;
            case 4:
              Ae = 5;
              break e;
            case 7:
              Lf(i) ? ((Ae = 0), (dt = null), Nd(t)) : ((Ae = 0), (dt = null), Zn(e, t, i, 7));
              break;
            case 5:
              var o = null;
              switch (se.tag) {
                case 26:
                  o = se.memoizedState;
                case 5:
                case 27:
                  var m = se;
                  if (!o || uh(o)) {
                    (Ae = 0), (dt = null);
                    var g = m.sibling;
                    if (g !== null) se = g;
                    else {
                      var A = m.return;
                      A !== null ? ((se = A), fi(A)) : (se = null);
                    }
                    break t;
                  }
              }
              (Ae = 0), (dt = null), Zn(e, t, i, 5);
              break;
            case 6:
              (Ae = 0), (dt = null), Zn(e, t, i, 6);
              break;
            case 8:
              Dr(), (Ne = 6);
              break e;
            default:
              throw Error(r(462));
          }
        }
        R0();
        break;
      } catch (B) {
        Od(e, B);
      }
    while (!0);
    return (nl = ln = null), (Q.H = n), (Q.A = u), (Ce = l), se !== null ? 0 : ((Te = null), (de = 0), wu(), Ne);
  }
  function R0() {
    for (; se !== null && !Km(); ) _d(se);
  }
  function _d(e) {
    var t = Wo(e.alternate, e, fl);
    (e.memoizedProps = e.pendingProps), t === null ? fi(e) : (se = t);
  }
  function Nd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Zo(l, t, t.pendingProps, t.type, void 0, de);
        break;
      case 11:
        t = Zo(l, t, t.pendingProps, t.type.render, t.ref, de);
        break;
      case 5:
        Mc(t);
      default:
        Td(l, t), (t = se = bd(t, fl)), (t = Wo(l, t, fl));
    }
    (e.memoizedProps = e.pendingProps), t === null ? fi(e) : (se = t);
  }
  function Zn(e, t, l, n) {
    (nl = ln = null), Mc(t), (zn = null), (Ra = 0);
    var u = t.return;
    try {
      if (d0(e, u, t, l, de)) {
        (Ne = 1), Iu(e, gt(l, e.current)), (se = null);
        return;
      }
    } catch (i) {
      if (u !== null) throw ((se = u), i);
      (Ne = 1), Iu(e, gt(l, e.current)), (se = null);
      return;
    }
    t.flags & 32768
      ? (he || n === 1
          ? (e = !0)
          : Vn || (de & 536870912) !== 0
          ? (e = !1)
          : ((sl = e = !0),
            (n === 2 || n === 3 || n === 6) && ((n = Et.current), n !== null && n.tag === 13 && (n.flags |= 16384))),
        Ud(t, e))
      : fi(t);
  }
  function fi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Ud(t, sl);
        return;
      }
      e = t.return;
      var l = v0(t.alternate, t, fl);
      if (l !== null) {
        se = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        se = t;
        return;
      }
      se = t = e;
    } while (t !== null);
    Ne === 0 && (Ne = 5);
  }
  function Ud(e, t) {
    do {
      var l = g0(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (se = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        se = e;
        return;
      }
      se = e = l;
    } while (e !== null);
    (Ne = 6), (se = null);
  }
  function zd(e, t, l, n, u, i, o, m, g, A) {
    var B = Q.T,
      q = Z.p;
    try {
      (Z.p = 2), (Q.T = null), x0(e, t, l, n, q, u, i, o, m, g, A);
    } finally {
      (Q.T = B), (Z.p = q);
    }
  }
  function x0(e, t, l, n, u, i, o, m) {
    do Kn();
    while (rn !== null);
    if ((Ce & 6) !== 0) throw Error(r(327));
    var g = e.finishedWork;
    if (((n = e.finishedLanes), g === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), g === e.current)) throw Error(r(177));
    (e.callbackNode = null), (e.callbackPriority = 0), (e.cancelPendingCommit = null);
    var A = g.lanes | g.childLanes;
    if (
      ((A |= bc),
      ny(e, n, A, i, o, m),
      e === Te && ((se = Te = null), (de = 0)),
      ((g.subtreeFlags & 10256) === 0 && (g.flags & 10256) === 0) ||
        ri ||
        ((ri = !0),
        (Rr = A),
        (xr = l),
        _0(gu, function () {
          return Kn(), null;
        })),
      (l = (g.flags & 15990) !== 0),
      (g.subtreeFlags & 15990) !== 0 || l
        ? ((l = Q.T),
          (Q.T = null),
          (i = Z.p),
          (Z.p = 2),
          (o = Ce),
          (Ce |= 4),
          m0(e, g),
          dd(g, e),
          $y(Vr, e.containerInfo),
          (Ti = !!Gr),
          (Vr = Gr = null),
          (e.current = g),
          rd(e, g.alternate, g),
          km(),
          (Ce = o),
          (Z.p = i),
          (Q.T = l))
        : (e.current = g),
      ri ? ((ri = !1), (rn = e), (Va = n)) : wd(e, A),
      (A = e.pendingLanes),
      A === 0 && (Ml = null),
      Pm(g.stateNode),
      Qt(e),
      t !== null)
    )
      for (u = e.onRecoverableError, g = 0; g < t.length; g++) (A = t[g]), u(A.value, { componentStack: A.stack });
    return (
      (Va & 3) !== 0 && Kn(),
      (A = e.pendingLanes),
      (n & 4194218) !== 0 && (A & 42) !== 0 ? (e === Or ? Xa++ : ((Xa = 0), (Or = e))) : (Xa = 0),
      Qa(0),
      null
    );
  }
  function wd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), Oa(t)));
  }
  function Kn() {
    if (rn !== null) {
      var e = rn,
        t = Rr;
      Rr = 0;
      var l = Ys(Va),
        n = Q.T,
        u = Z.p;
      try {
        if (((Z.p = 32 > l ? 32 : l), (Q.T = null), rn === null)) var i = !1;
        else {
          (l = xr), (xr = null);
          var o = rn,
            m = Va;
          if (((rn = null), (Va = 0), (Ce & 6) !== 0)) throw Error(r(331));
          var g = Ce;
          if (
            ((Ce |= 4),
            vd(o.current),
            md(o, o.current, m, l),
            (Ce = g),
            Qa(0, !1),
            ct && typeof ct.onPostCommitFiberRoot == 'function')
          )
            try {
              ct.onPostCommitFiberRoot(ua, o);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        (Z.p = u), (Q.T = n), wd(e, t);
      }
    }
    return !1;
  }
  function Md(e, t, l) {
    (t = gt(l, t)), (t = Jc(e.stateNode, t, 2)), (e = Dl(e, t, 2)), e !== null && (ca(e, 2), Qt(e));
  }
  function Se(e, t, l) {
    if (e.tag === 3) Md(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Md(t, e, l);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof n.componentDidCatch == 'function' && (Ml === null || !Ml.has(n)))
          ) {
            (e = gt(l, e)), (l = Ho(2)), (n = Dl(t, l, 2)), n !== null && (Lo(l, n, t, e), ca(n, 2), Qt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ur(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new S0();
      var u = new Set();
      n.set(t, u);
    } else (u = n.get(t)), u === void 0 && ((u = new Set()), n.set(t, u));
    u.has(l) || ((Sr = !0), u.add(l), (e = O0.bind(null, e, t, l)), t.then(e, e));
  }
  function O0(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Te === e &&
        (de & l) === l &&
        (Ne === 4 || (Ne === 3 && (de & 62914560) === de && 300 > qt() - Ar) ? (Ce & 2) === 0 && Qn(e, 0) : (Er |= l),
        Xn === de && (Xn = 0)),
      Qt(e);
  }
  function jd(e, t) {
    t === 0 && (t = Hs()), (e = Sl(e, t)), e !== null && (ca(e, t), Qt(e));
  }
  function C0(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), jd(e, l);
  }
  function D0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode,
          u = e.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(t), jd(e, l);
  }
  function _0(e, t) {
    return $i(e, t);
  }
  var oi = null,
    kn = null,
    zr = !1,
    di = !1,
    wr = !1,
    sn = 0;
  function Qt(e) {
    e !== kn && e.next === null && (kn === null ? (oi = kn = e) : (kn = kn.next = e)),
      (di = !0),
      zr || ((zr = !0), U0(N0));
  }
  function Qa(e, t) {
    if (!wr && di) {
      wr = !0;
      do
        for (var l = !1, n = oi; n !== null; ) {
          if (e !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var i = 0;
            else {
              var o = n.suspendedLanes,
                m = n.pingedLanes;
              (i = (1 << (31 - rt(42 | e) + 1)) - 1),
                (i &= u & ~(o & ~m)),
                (i = i & 201326677 ? (i & 201326677) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((l = !0), Ld(n, i));
          } else (i = de), (i = Eu(n, n === Te ? i : 0)), (i & 3) === 0 || ia(n, i) || ((l = !0), Ld(n, i));
          n = n.next;
        }
      while (l);
      wr = !1;
    }
  }
  function N0() {
    di = zr = !1;
    var e = 0;
    sn !== 0 && (q0() && (e = sn), (sn = 0));
    for (var t = qt(), l = null, n = oi; n !== null; ) {
      var u = n.next,
        i = Bd(n, t);
      i === 0
        ? ((n.next = null), l === null ? (oi = u) : (l.next = u), u === null && (kn = l))
        : ((l = n), (e !== 0 || (i & 3) !== 0) && (di = !0)),
        (n = u);
    }
    Qa(e);
  }
  function Bd(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, u = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var o = 31 - rt(i),
        m = 1 << o,
        g = u[o];
      g === -1 ? ((m & l) === 0 || (m & n) !== 0) && (u[o] = ly(m, t)) : g <= t && (e.expiredLanes |= m), (i &= ~m);
    }
    if (
      ((t = Te),
      (l = de),
      (l = Eu(e, e === t ? l : 0)),
      (n = e.callbackNode),
      l === 0 || (e === t && Ae === 2) || e.cancelPendingCommit !== null)
    )
      return n !== null && n !== null && Fi(n), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((l & 3) === 0 || ia(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((n !== null && Fi(n), Ys(l))) {
        case 2:
        case 8:
          l = Ms;
          break;
        case 32:
          l = gu;
          break;
        case 268435456:
          l = js;
          break;
        default:
          l = gu;
      }
      return (n = Hd.bind(null, e)), (l = $i(l, n)), (e.callbackPriority = t), (e.callbackNode = l), t;
    }
    return n !== null && n !== null && Fi(n), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function Hd(e, t) {
    var l = e.callbackNode;
    if (Kn() && e.callbackNode !== l) return null;
    var n = de;
    return (
      (n = Eu(e, e === Te ? n : 0)),
      n === 0
        ? null
        : (Rd(e, n, t), Bd(e, qt()), e.callbackNode != null && e.callbackNode === l ? Hd.bind(null, e) : null)
    );
  }
  function Ld(e, t) {
    if (Kn()) return null;
    Rd(e, t, !0);
  }
  function U0(e) {
    G0(function () {
      (Ce & 6) !== 0 ? $i(ws, e) : e();
    });
  }
  function Mr() {
    return sn === 0 && (sn = Bs()), sn;
  }
  function qd(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : Ou('' + e);
  }
  function Yd(e, t) {
    var l = t.ownerDocument.createElement('input');
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute('form', e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function z0(e, t, l, n, u) {
    if (t === 'submit' && l && l.stateNode === u) {
      var i = qd((u[nt] || null).action),
        o = n.submitter;
      o &&
        ((t = (t = o[nt] || null) ? qd(t.formAction) : o.getAttribute('formAction')),
        t !== null && ((i = t), (o = null)));
      var m = new Nu('action', 'action', null, n, u);
      e.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (sn !== 0) {
                  var g = o ? Yd(u, o) : new FormData(u);
                  Xc(l, { pending: !0, data: g, method: u.method, action: i }, null, g);
                }
              } else
                typeof i == 'function' &&
                  (m.preventDefault(),
                  (g = o ? Yd(u, o) : new FormData(u)),
                  Xc(l, { pending: !0, data: g, method: u.method, action: i }, i, g));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var jr = 0; jr < Uf.length; jr++) {
    var Br = Uf[jr],
      w0 = Br.toLowerCase(),
      M0 = Br[0].toUpperCase() + Br.slice(1);
    Dt(w0, 'on' + M0);
  }
  Dt(Of, 'onAnimationEnd'),
    Dt(Cf, 'onAnimationIteration'),
    Dt(Df, 'onAnimationStart'),
    Dt('dblclick', 'onDoubleClick'),
    Dt('focusin', 'onFocus'),
    Dt('focusout', 'onBlur'),
    Dt(Wy, 'onTransitionRun'),
    Dt(Py, 'onTransitionStart'),
    Dt(Iy, 'onTransitionCancel'),
    Dt(_f, 'onTransitionEnd'),
    Sn('onMouseEnter', ['mouseout', 'mouseover']),
    Sn('onMouseLeave', ['mouseout', 'mouseover']),
    Sn('onPointerEnter', ['pointerout', 'pointerover']),
    Sn('onPointerLeave', ['pointerout', 'pointerover']),
    Xl('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Xl('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    Xl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Xl('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Xl('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    Xl('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
  var Za =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    j0 = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Za));
  function Gd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l],
        u = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = n.length - 1; 0 <= o; o--) {
            var m = n[o],
              g = m.instance,
              A = m.currentTarget;
            if (((m = m.listener), g !== i && u.isPropagationStopped())) break e;
            (i = m), (u.currentTarget = A);
            try {
              i(u);
            } catch (B) {
              Pu(B);
            }
            (u.currentTarget = null), (i = g);
          }
        else
          for (o = 0; o < n.length; o++) {
            if (
              ((m = n[o]),
              (g = m.instance),
              (A = m.currentTarget),
              (m = m.listener),
              g !== i && u.isPropagationStopped())
            )
              break e;
            (i = m), (u.currentTarget = A);
            try {
              i(u);
            } catch (B) {
              Pu(B);
            }
            (u.currentTarget = null), (i = g);
          }
      }
    }
  }
  function fe(e, t) {
    var l = t[Pi];
    l === void 0 && (l = t[Pi] = new Set());
    var n = e + '__bubble';
    l.has(n) || (Vd(t, e, 2, !1), l.add(n));
  }
  function Hr(e, t, l) {
    var n = 0;
    t && (n |= 4), Vd(l, e, n, t);
  }
  var hi = '_reactListening' + Math.random().toString(36).slice(2);
  function Lr(e) {
    if (!e[hi]) {
      (e[hi] = !0),
        Xs.forEach(function (l) {
          l !== 'selectionchange' && (j0.has(l) || Hr(l, !1, e), Hr(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[hi] || ((t[hi] = !0), Hr('selectionchange', !1, t));
    }
  }
  function Vd(e, t, l, n) {
    switch (oh(t)) {
      case 2:
        var u = cp;
        break;
      case 8:
        u = rp;
        break;
      default:
        u = Wr;
    }
    (l = u.bind(null, t, l, e)),
      (u = void 0),
      !ic || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (u = !0),
      n
        ? u !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: u })
          : e.addEventListener(t, l, !0)
        : u !== void 0
        ? e.addEventListener(t, l, { passive: u })
        : e.addEventListener(t, l, !1);
  }
  function qr(e, t, l, n, u) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
          var m = n.stateNode.containerInfo;
          if (m === u || (m.nodeType === 8 && m.parentNode === u)) break;
          if (o === 4)
            for (o = n.return; o !== null; ) {
              var g = o.tag;
              if (
                (g === 3 || g === 4) &&
                ((g = o.stateNode.containerInfo), g === u || (g.nodeType === 8 && g.parentNode === u))
              )
                return;
              o = o.return;
            }
          for (; m !== null; ) {
            if (((o = Vl(m)), o === null)) return;
            if (((g = o.tag), g === 5 || g === 6 || g === 26 || g === 27)) {
              n = i = o;
              continue e;
            }
            m = m.parentNode;
          }
        }
        n = n.return;
      }
    tf(function () {
      var A = i,
        B = ac(l),
        q = [];
      e: {
        var _ = Nf.get(e);
        if (_ !== void 0) {
          var j = Nu,
            J = e;
          switch (e) {
            case 'keypress':
              if (Du(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              j = Dy;
              break;
            case 'focusin':
              (J = 'focus'), (j = fc);
              break;
            case 'focusout':
              (J = 'blur'), (j = fc);
              break;
            case 'beforeblur':
            case 'afterblur':
              j = fc;
              break;
            case 'click':
              if (l.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              j = af;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              j = py;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              j = Uy;
              break;
            case Of:
            case Cf:
            case Df:
              j = by;
              break;
            case _f:
              j = wy;
              break;
            case 'scroll':
            case 'scrollend':
              j = my;
              break;
            case 'wheel':
              j = jy;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              j = Ey;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              j = cf;
              break;
            case 'toggle':
            case 'beforetoggle':
              j = Hy;
          }
          var ee = (t & 4) !== 0,
            Ue = !ee && (e === 'scroll' || e === 'scrollend'),
            R = ee ? (_ !== null ? _ + 'Capture' : null) : _;
          ee = [];
          for (var T = A, C; T !== null; ) {
            var H = T;
            if (
              ((C = H.stateNode),
              (H = H.tag),
              (H !== 5 && H !== 26 && H !== 27) ||
                C === null ||
                R === null ||
                ((H = fa(T, R)), H != null && ee.push(Ka(T, H, C))),
              Ue)
            )
              break;
            T = T.return;
          }
          0 < ee.length && ((_ = new j(_, J, null, l, B)), q.push({ event: _, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((_ = e === 'mouseover' || e === 'pointerover'),
            (j = e === 'mouseout' || e === 'pointerout'),
            _ && l !== nc && (J = l.relatedTarget || l.fromElement) && (Vl(J) || J[vn]))
          )
            break e;
          if (
            (j || _) &&
            ((_ = B.window === B ? B : (_ = B.ownerDocument) ? _.defaultView || _.parentWindow : window),
            j
              ? ((J = l.relatedTarget || l.toElement),
                (j = A),
                (J = J ? Vl(J) : null),
                J !== null &&
                  ((Ue = I(J)), (ee = J.tag), J !== Ue || (ee !== 5 && ee !== 27 && ee !== 6)) &&
                  (J = null))
              : ((j = null), (J = A)),
            j !== J)
          ) {
            if (
              ((ee = af),
              (H = 'onMouseLeave'),
              (R = 'onMouseEnter'),
              (T = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ee = cf), (H = 'onPointerLeave'), (R = 'onPointerEnter'), (T = 'pointer')),
              (Ue = j == null ? _ : sa(j)),
              (C = J == null ? _ : sa(J)),
              (_ = new ee(H, T + 'leave', j, l, B)),
              (_.target = Ue),
              (_.relatedTarget = C),
              (H = null),
              Vl(B) === A &&
                ((ee = new ee(R, T + 'enter', J, l, B)), (ee.target = C), (ee.relatedTarget = Ue), (H = ee)),
              (Ue = H),
              j && J)
            )
              t: {
                for (ee = j, R = J, T = 0, C = ee; C; C = Jn(C)) T++;
                for (C = 0, H = R; H; H = Jn(H)) C++;
                for (; 0 < T - C; ) (ee = Jn(ee)), T--;
                for (; 0 < C - T; ) (R = Jn(R)), C--;
                for (; T--; ) {
                  if (ee === R || (R !== null && ee === R.alternate)) break t;
                  (ee = Jn(ee)), (R = Jn(R));
                }
                ee = null;
              }
            else ee = null;
            j !== null && Xd(q, _, j, ee, !1), J !== null && Ue !== null && Xd(q, Ue, J, ee, !0);
          }
        }
        e: {
          if (
            ((_ = A ? sa(A) : window),
            (j = _.nodeName && _.nodeName.toLowerCase()),
            j === 'select' || (j === 'input' && _.type === 'file'))
          )
            var K = yf;
          else if (hf(_))
            if (pf) K = ky;
            else {
              K = Zy;
              var re = Qy;
            }
          else
            (j = _.nodeName),
              !j || j.toLowerCase() !== 'input' || (_.type !== 'checkbox' && _.type !== 'radio')
                ? A && lc(A.elementType) && (K = yf)
                : (K = Ky);
          if (K && (K = K(e, A))) {
            mf(q, K, l, B);
            break e;
          }
          re && re(e, _, A),
            e === 'focusout' && A && _.type === 'number' && A.memoizedProps.value != null && tc(_, 'number', _.value);
        }
        switch (((re = A ? sa(A) : window), e)) {
          case 'focusin':
            (hf(re) || re.contentEditable === 'true') && ((On = re), (pc = A), (ga = null));
            break;
          case 'focusout':
            ga = pc = On = null;
            break;
          case 'mousedown':
            vc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (vc = !1), Rf(q, l, B);
            break;
          case 'selectionchange':
            if (Fy) break;
          case 'keydown':
          case 'keyup':
            Rf(q, l, B);
        }
        var $;
        if (dc)
          e: {
            switch (e) {
              case 'compositionstart':
                var W = 'onCompositionStart';
                break e;
              case 'compositionend':
                W = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                W = 'onCompositionUpdate';
                break e;
            }
            W = void 0;
          }
        else
          xn
            ? of(e, l) && (W = 'onCompositionEnd')
            : e === 'keydown' && l.keyCode === 229 && (W = 'onCompositionStart');
        W &&
          (rf &&
            l.locale !== 'ko' &&
            (xn || W !== 'onCompositionStart'
              ? W === 'onCompositionEnd' && xn && ($ = lf())
              : ((bl = B), (cc = 'value' in bl ? bl.value : bl.textContent), (xn = !0))),
          (re = mi(A, W)),
          0 < re.length &&
            ((W = new uf(W, e, null, l, B)),
            q.push({ event: W, listeners: re }),
            $ ? (W.data = $) : (($ = df(l)), $ !== null && (W.data = $)))),
          ($ = qy ? Yy(e, l) : Gy(e, l)) &&
            ((W = mi(A, 'onBeforeInput')),
            0 < W.length &&
              ((re = new uf('onBeforeInput', 'beforeinput', null, l, B)),
              q.push({ event: re, listeners: W }),
              (re.data = $))),
          z0(q, e, A, l, B);
      }
      Gd(q, t);
    });
  }
  function Ka(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function mi(e, t) {
    for (var l = t + 'Capture', n = []; e !== null; ) {
      var u = e,
        i = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          i === null ||
          ((u = fa(e, l)), u != null && n.unshift(Ka(e, u, i)), (u = fa(e, t)), u != null && n.push(Ka(e, u, i))),
        (e = e.return);
    }
    return n;
  }
  function Jn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Xd(e, t, l, n, u) {
    for (var i = t._reactName, o = []; l !== null && l !== n; ) {
      var m = l,
        g = m.alternate,
        A = m.stateNode;
      if (((m = m.tag), g !== null && g === n)) break;
      (m !== 5 && m !== 26 && m !== 27) ||
        A === null ||
        ((g = A),
        u
          ? ((A = fa(l, i)), A != null && o.unshift(Ka(l, A, g)))
          : u || ((A = fa(l, i)), A != null && o.push(Ka(l, A, g)))),
        (l = l.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var B0 = /\r\n?/g,
    H0 = /\u0000|\uFFFD/g;
  function Qd(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        B0,
        `
`
      )
      .replace(H0, '');
  }
  function Zd(e, t) {
    return (t = Qd(t)), Qd(e) === t;
  }
  function yi() {}
  function ge(e, t, l, n, u, i) {
    switch (l) {
      case 'children':
        typeof n == 'string'
          ? t === 'body' || (t === 'textarea' && n === '') || Tn(e, n)
          : (typeof n == 'number' || typeof n == 'bigint') && t !== 'body' && Tn(e, '' + n);
        break;
      case 'className':
        Au(e, 'class', n);
        break;
      case 'tabIndex':
        Au(e, 'tabindex', n);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Au(e, l, n);
        break;
      case 'style':
        Is(e, n, i);
        break;
      case 'data':
        if (t !== 'object') {
          Au(e, 'data', n);
          break;
        }
      case 'src':
      case 'href':
        if (n === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == 'function' || typeof n == 'symbol' || typeof n == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        (n = Ou('' + n)), e.setAttribute(l, n);
        break;
      case 'action':
      case 'formAction':
        if (typeof n == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == 'function' &&
            (l === 'formAction'
              ? (t !== 'input' && ge(e, t, 'name', u.name, u, null),
                ge(e, t, 'formEncType', u.formEncType, u, null),
                ge(e, t, 'formMethod', u.formMethod, u, null),
                ge(e, t, 'formTarget', u.formTarget, u, null))
              : (ge(e, t, 'encType', u.encType, u, null),
                ge(e, t, 'method', u.method, u, null),
                ge(e, t, 'target', u.target, u, null)));
        if (n == null || typeof n == 'symbol' || typeof n == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        (n = Ou('' + n)), e.setAttribute(l, n);
        break;
      case 'onClick':
        n != null && (e.onclick = yi);
        break;
      case 'onScroll':
        n != null && fe('scroll', e);
        break;
      case 'onScrollEnd':
        n != null && fe('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(r(61));
          if (((l = n.__html), l != null)) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        e.multiple = n && typeof n != 'function' && typeof n != 'symbol';
        break;
      case 'muted':
        e.muted = n && typeof n != 'function' && typeof n != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (n == null || typeof n == 'function' || typeof n == 'boolean' || typeof n == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        (l = Ou('' + n)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        n != null && typeof n != 'function' && typeof n != 'symbol' ? e.setAttribute(l, '' + n) : e.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        n && typeof n != 'function' && typeof n != 'symbol' ? e.setAttribute(l, '') : e.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        n === !0
          ? e.setAttribute(l, '')
          : n !== !1 && n != null && typeof n != 'function' && typeof n != 'symbol'
          ? e.setAttribute(l, n)
          : e.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        n != null && typeof n != 'function' && typeof n != 'symbol' && !isNaN(n) && 1 <= n
          ? e.setAttribute(l, n)
          : e.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        n == null || typeof n == 'function' || typeof n == 'symbol' || isNaN(n)
          ? e.removeAttribute(l)
          : e.setAttribute(l, n);
        break;
      case 'popover':
        fe('beforetoggle', e), fe('toggle', e), Tu(e, 'popover', n);
        break;
      case 'xlinkActuate':
        Wt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', n);
        break;
      case 'xlinkArcrole':
        Wt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', n);
        break;
      case 'xlinkRole':
        Wt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', n);
        break;
      case 'xlinkShow':
        Wt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', n);
        break;
      case 'xlinkTitle':
        Wt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', n);
        break;
      case 'xlinkType':
        Wt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', n);
        break;
      case 'xmlBase':
        Wt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', n);
        break;
      case 'xmlLang':
        Wt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', n);
        break;
      case 'xmlSpace':
        Wt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', n);
        break;
      case 'is':
        Tu(e, 'is', n);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = dy.get(l) || l), Tu(e, l, n));
    }
  }
  function Yr(e, t, l, n, u, i) {
    switch (l) {
      case 'style':
        Is(e, n, i);
        break;
      case 'dangerouslySetInnerHTML':
        if (n != null) {
          if (typeof n != 'object' || !('__html' in n)) throw Error(r(61));
          if (((l = n.__html), l != null)) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof n == 'string' ? Tn(e, n) : (typeof n == 'number' || typeof n == 'bigint') && Tn(e, '' + n);
        break;
      case 'onScroll':
        n != null && fe('scroll', e);
        break;
      case 'onScrollEnd':
        n != null && fe('scrollend', e);
        break;
      case 'onClick':
        n != null && (e.onclick = yi);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Qs.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((u = l.endsWith('Capture')),
              (t = l.slice(2, u ? l.length - 7 : void 0)),
              (i = e[nt] || null),
              (i = i != null ? i[l] : null),
              typeof i == 'function' && e.removeEventListener(t, i, u),
              typeof n == 'function')
            ) {
              typeof i != 'function' &&
                i !== null &&
                (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, n, u);
              break e;
            }
            l in e ? (e[l] = n) : n === !0 ? e.setAttribute(l, '') : Tu(e, l, n);
          }
    }
  }
  function Ke(e, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        fe('error', e), fe('load', e);
        var n = !1,
          u = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var o = l[i];
            if (o != null)
              switch (i) {
                case 'src':
                  n = !0;
                  break;
                case 'srcSet':
                  u = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(r(137, t));
                default:
                  ge(e, t, i, o, l, null);
              }
          }
        u && ge(e, t, 'srcSet', l.srcSet, l, null), n && ge(e, t, 'src', l.src, l, null);
        return;
      case 'input':
        fe('invalid', e);
        var m = (i = o = u = null),
          g = null,
          A = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var B = l[n];
            if (B != null)
              switch (n) {
                case 'name':
                  u = B;
                  break;
                case 'type':
                  o = B;
                  break;
                case 'checked':
                  g = B;
                  break;
                case 'defaultChecked':
                  A = B;
                  break;
                case 'value':
                  i = B;
                  break;
                case 'defaultValue':
                  m = B;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (B != null) throw Error(r(137, t));
                  break;
                default:
                  ge(e, t, n, B, l, null);
              }
          }
        $s(e, i, m, g, A, o, u, !1), Ru(e);
        return;
      case 'select':
        fe('invalid', e), (n = o = i = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((m = l[u]), m != null))
            switch (u) {
              case 'value':
                i = m;
                break;
              case 'defaultValue':
                o = m;
                break;
              case 'multiple':
                n = m;
              default:
                ge(e, t, u, m, l, null);
            }
        (t = i), (l = o), (e.multiple = !!n), t != null ? En(e, !!n, t, !1) : l != null && En(e, !!n, l, !0);
        return;
      case 'textarea':
        fe('invalid', e), (i = u = n = null);
        for (o in l)
          if (l.hasOwnProperty(o) && ((m = l[o]), m != null))
            switch (o) {
              case 'value':
                n = m;
                break;
              case 'defaultValue':
                u = m;
                break;
              case 'children':
                i = m;
                break;
              case 'dangerouslySetInnerHTML':
                if (m != null) throw Error(r(91));
                break;
              default:
                ge(e, t, o, m, l, null);
            }
        Ws(e, n, u, i), Ru(e);
        return;
      case 'option':
        for (g in l)
          if (l.hasOwnProperty(g) && ((n = l[g]), n != null))
            switch (g) {
              case 'selected':
                e.selected = n && typeof n != 'function' && typeof n != 'symbol';
                break;
              default:
                ge(e, t, g, n, l, null);
            }
        return;
      case 'dialog':
        fe('cancel', e), fe('close', e);
        break;
      case 'iframe':
      case 'object':
        fe('load', e);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Za.length; n++) fe(Za[n], e);
        break;
      case 'image':
        fe('error', e), fe('load', e);
        break;
      case 'details':
        fe('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        fe('error', e), fe('load', e);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (A in l)
          if (l.hasOwnProperty(A) && ((n = l[A]), n != null))
            switch (A) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(r(137, t));
              default:
                ge(e, t, A, n, l, null);
            }
        return;
      default:
        if (lc(t)) {
          for (B in l) l.hasOwnProperty(B) && ((n = l[B]), n !== void 0 && Yr(e, t, B, n, l, void 0));
          return;
        }
    }
    for (m in l) l.hasOwnProperty(m) && ((n = l[m]), n != null && ge(e, t, m, n, l, null));
  }
  function L0(e, t, l, n) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var u = null,
          i = null,
          o = null,
          m = null,
          g = null,
          A = null,
          B = null;
        for (j in l) {
          var q = l[j];
          if (l.hasOwnProperty(j) && q != null)
            switch (j) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                g = q;
              default:
                n.hasOwnProperty(j) || ge(e, t, j, null, n, q);
            }
        }
        for (var _ in n) {
          var j = n[_];
          if (((q = l[_]), n.hasOwnProperty(_) && (j != null || q != null)))
            switch (_) {
              case 'type':
                i = j;
                break;
              case 'name':
                u = j;
                break;
              case 'checked':
                A = j;
                break;
              case 'defaultChecked':
                B = j;
                break;
              case 'value':
                o = j;
                break;
              case 'defaultValue':
                m = j;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (j != null) throw Error(r(137, t));
                break;
              default:
                j !== q && ge(e, t, _, j, n, q);
            }
        }
        ec(e, o, m, g, A, B, i, u);
        return;
      case 'select':
        j = o = m = _ = null;
        for (i in l)
          if (((g = l[i]), l.hasOwnProperty(i) && g != null))
            switch (i) {
              case 'value':
                break;
              case 'multiple':
                j = g;
              default:
                n.hasOwnProperty(i) || ge(e, t, i, null, n, g);
            }
        for (u in n)
          if (((i = n[u]), (g = l[u]), n.hasOwnProperty(u) && (i != null || g != null)))
            switch (u) {
              case 'value':
                _ = i;
                break;
              case 'defaultValue':
                m = i;
                break;
              case 'multiple':
                o = i;
              default:
                i !== g && ge(e, t, u, i, n, g);
            }
        (t = m),
          (l = o),
          (n = j),
          _ != null ? En(e, !!l, _, !1) : !!n != !!l && (t != null ? En(e, !!l, t, !0) : En(e, !!l, l ? [] : '', !1));
        return;
      case 'textarea':
        j = _ = null;
        for (m in l)
          if (((u = l[m]), l.hasOwnProperty(m) && u != null && !n.hasOwnProperty(m)))
            switch (m) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                ge(e, t, m, null, n, u);
            }
        for (o in n)
          if (((u = n[o]), (i = l[o]), n.hasOwnProperty(o) && (u != null || i != null)))
            switch (o) {
              case 'value':
                _ = u;
                break;
              case 'defaultValue':
                j = u;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== i && ge(e, t, o, u, n, i);
            }
        Fs(e, _, j);
        return;
      case 'option':
        for (var J in l)
          if (((_ = l[J]), l.hasOwnProperty(J) && _ != null && !n.hasOwnProperty(J)))
            switch (J) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                ge(e, t, J, null, n, _);
            }
        for (g in n)
          if (((_ = n[g]), (j = l[g]), n.hasOwnProperty(g) && _ !== j && (_ != null || j != null)))
            switch (g) {
              case 'selected':
                e.selected = _ && typeof _ != 'function' && typeof _ != 'symbol';
                break;
              default:
                ge(e, t, g, _, n, j);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var ee in l)
          (_ = l[ee]), l.hasOwnProperty(ee) && _ != null && !n.hasOwnProperty(ee) && ge(e, t, ee, null, n, _);
        for (A in n)
          if (((_ = n[A]), (j = l[A]), n.hasOwnProperty(A) && _ !== j && (_ != null || j != null)))
            switch (A) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (_ != null) throw Error(r(137, t));
                break;
              default:
                ge(e, t, A, _, n, j);
            }
        return;
      default:
        if (lc(t)) {
          for (var Ue in l)
            (_ = l[Ue]), l.hasOwnProperty(Ue) && _ !== void 0 && !n.hasOwnProperty(Ue) && Yr(e, t, Ue, void 0, n, _);
          for (B in n)
            (_ = n[B]),
              (j = l[B]),
              !n.hasOwnProperty(B) || _ === j || (_ === void 0 && j === void 0) || Yr(e, t, B, _, n, j);
          return;
        }
    }
    for (var R in l) (_ = l[R]), l.hasOwnProperty(R) && _ != null && !n.hasOwnProperty(R) && ge(e, t, R, null, n, _);
    for (q in n)
      (_ = n[q]), (j = l[q]), !n.hasOwnProperty(q) || _ === j || (_ == null && j == null) || ge(e, t, q, _, n, j);
  }
  var Gr = null,
    Vr = null;
  function pi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Kd(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function kd(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function Xr(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Qr = null;
  function q0() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === Qr ? !1 : ((Qr = e), !0)) : ((Qr = null), !1);
  }
  var Jd = typeof setTimeout == 'function' ? setTimeout : void 0,
    Y0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    $d = typeof Promise == 'function' ? Promise : void 0,
    G0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof $d < 'u'
        ? function (e) {
            return $d.resolve(null).then(e).catch(V0);
          }
        : Jd;
  function V0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Zr(e, t) {
    var l = t,
      n = 0;
    do {
      var u = l.nextSibling;
      if ((e.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === '/$')) {
          if (n === 0) {
            e.removeChild(u), eu(t);
            return;
          }
          n--;
        } else (l !== '$' && l !== '$?' && l !== '$!') || n++;
      l = u;
    } while (l);
    eu(t);
  }
  function Kr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Kr(l), Ii(l);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(l);
    }
  }
  function X0(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var u = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (n) {
        if (!e[ra])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (((i = e.getAttribute('rel')), i === 'stylesheet' && e.hasAttribute('data-precedence'))) break;
              if (
                i !== u.rel ||
                e.getAttribute('href') !== (u.href == null ? null : u.href) ||
                e.getAttribute('crossorigin') !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute('title') !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((i = e.getAttribute('src')),
                (i !== (u.src == null ? null : u.src) ||
                  e.getAttribute('type') !== (u.type == null ? null : u.type) ||
                  e.getAttribute('crossorigin') !== (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  i &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var i = u.name == null ? null : '' + u.name;
        if (u.type === 'hidden' && e.getAttribute('name') === i) return e;
      } else return e;
      if (((e = Ut(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Q0(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) ||
        ((e = Ut(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ut(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Fd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '$' || l === '$!' || l === '$?') {
          if (t === 0) return e;
          t--;
        } else l === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Wd(e, t, l) {
    switch (((t = pi(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  var Ot = new Map(),
    Pd = new Set();
  function vi(e) {
    return typeof e.getRootNode == 'function' ? e.getRootNode() : e.ownerDocument;
  }
  var dl = Z.d;
  Z.d = { f: Z0, r: K0, D: k0, C: J0, L: $0, m: F0, X: P0, S: W0, M: I0 };
  function Z0() {
    var e = dl.f(),
      t = si();
    return e || t;
  }
  function K0(e) {
    var t = gn(e);
    t !== null && t.tag === 5 && t.type === 'form' ? xo(t) : dl.r(e);
  }
  var $n = typeof document > 'u' ? null : document;
  function Id(e, t, l) {
    var n = $n;
    if (n && typeof t == 'string' && t) {
      var u = pt(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof l == 'string' && (u += '[crossorigin="' + l + '"]'),
        Pd.has(u) ||
          (Pd.add(u),
          (e = { rel: e, crossOrigin: l, href: t }),
          n.querySelector(u) === null &&
            ((t = n.createElement('link')), Ke(t, 'link', e), Ye(t), n.head.appendChild(t)));
    }
  }
  function k0(e) {
    dl.D(e), Id('dns-prefetch', e, null);
  }
  function J0(e, t) {
    dl.C(e, t), Id('preconnect', e, t);
  }
  function $0(e, t, l) {
    dl.L(e, t, l);
    var n = $n;
    if (n && e && t) {
      var u = 'link[rel="preload"][as="' + pt(t) + '"]';
      t === 'image' && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + pt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' && (u += '[imagesizes="' + pt(l.imageSizes) + '"]'))
        : (u += '[href="' + pt(e) + '"]');
      var i = u;
      switch (t) {
        case 'style':
          i = Fn(e);
          break;
        case 'script':
          i = Wn(e);
      }
      Ot.has(i) ||
        ((e = ue({ rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t }, l)),
        Ot.set(i, e),
        n.querySelector(u) !== null ||
          (t === 'style' && n.querySelector(ka(i))) ||
          (t === 'script' && n.querySelector(Ja(i))) ||
          ((t = n.createElement('link')), Ke(t, 'link', e), Ye(t), n.head.appendChild(t)));
    }
  }
  function F0(e, t) {
    dl.m(e, t);
    var l = $n;
    if (l && e) {
      var n = t && typeof t.as == 'string' ? t.as : 'script',
        u = 'link[rel="modulepreload"][as="' + pt(n) + '"][href="' + pt(e) + '"]',
        i = u;
      switch (n) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          i = Wn(e);
      }
      if (!Ot.has(i) && ((e = ue({ rel: 'modulepreload', href: e }, t)), Ot.set(i, e), l.querySelector(u) === null)) {
        switch (n) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Ja(i))) return;
        }
        (n = l.createElement('link')), Ke(n, 'link', e), Ye(n), l.head.appendChild(n);
      }
    }
  }
  function W0(e, t, l) {
    dl.S(e, t, l);
    var n = $n;
    if (n && e) {
      var u = bn(n).hoistableStyles,
        i = Fn(e);
      t = t || 'default';
      var o = u.get(i);
      if (!o) {
        var m = { loading: 0, preload: null };
        if ((o = n.querySelector(ka(i)))) m.loading = 5;
        else {
          (e = ue({ 'rel': 'stylesheet', 'href': e, 'data-precedence': t }, l)), (l = Ot.get(i)) && kr(e, l);
          var g = (o = n.createElement('link'));
          Ye(g),
            Ke(g, 'link', e),
            (g._p = new Promise(function (A, B) {
              (g.onload = A), (g.onerror = B);
            })),
            g.addEventListener('load', function () {
              m.loading |= 1;
            }),
            g.addEventListener('error', function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            gi(o, t, n);
        }
        (o = { type: 'stylesheet', instance: o, count: 1, state: m }), u.set(i, o);
      }
    }
  }
  function P0(e, t) {
    dl.X(e, t);
    var l = $n;
    if (l && e) {
      var n = bn(l).hoistableScripts,
        u = Wn(e),
        i = n.get(u);
      i ||
        ((i = l.querySelector(Ja(u))),
        i ||
          ((e = ue({ src: e, async: !0 }, t)),
          (t = Ot.get(u)) && Jr(e, t),
          (i = l.createElement('script')),
          Ye(i),
          Ke(i, 'link', e),
          l.head.appendChild(i)),
        (i = { type: 'script', instance: i, count: 1, state: null }),
        n.set(u, i));
    }
  }
  function I0(e, t) {
    dl.M(e, t);
    var l = $n;
    if (l && e) {
      var n = bn(l).hoistableScripts,
        u = Wn(e),
        i = n.get(u);
      i ||
        ((i = l.querySelector(Ja(u))),
        i ||
          ((e = ue({ src: e, async: !0, type: 'module' }, t)),
          (t = Ot.get(u)) && Jr(e, t),
          (i = l.createElement('script')),
          Ye(i),
          Ke(i, 'link', e),
          l.head.appendChild(i)),
        (i = { type: 'script', instance: i, count: 1, state: null }),
        n.set(u, i));
    }
  }
  function eh(e, t, l, n) {
    var u = (u = pl.current) ? vi(u) : null;
    if (!u) throw Error(r(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((t = Fn(l.href)),
            (l = bn(u).hoistableStyles),
            (n = l.get(t)),
            n || ((n = { type: 'style', instance: null, count: 0, state: null }), l.set(t, n)),
            n)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (l.rel === 'stylesheet' && typeof l.href == 'string' && typeof l.precedence == 'string') {
          e = Fn(l.href);
          var i = bn(u).hoistableStyles,
            o = i.get(e);
          if (
            (o ||
              ((u = u.ownerDocument || u),
              (o = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
              i.set(e, o),
              (i = u.querySelector(ka(e))) && !i._p && ((o.instance = i), (o.state.loading = 5)),
              Ot.has(e) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy
                }),
                Ot.set(e, l),
                i || ep(u, e, l, o.state))),
            t && n === null)
          )
            throw Error(r(528, ''));
          return o;
        }
        if (t && n !== null) throw Error(r(529, ''));
        return null;
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Wn(l)),
              (l = bn(u).hoistableScripts),
              (n = l.get(t)),
              n || ((n = { type: 'script', instance: null, count: 0, state: null }), l.set(t, n)),
              n)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function Fn(e) {
    return 'href="' + pt(e) + '"';
  }
  function ka(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function th(e) {
    return ue({}, e, { 'data-precedence': e.precedence, 'precedence': null });
  }
  function ep(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (n.loading = 1)
      : ((t = e.createElement('link')),
        (n.preload = t),
        t.addEventListener('load', function () {
          return (n.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (n.loading |= 2);
        }),
        Ke(t, 'link', l),
        Ye(t),
        e.head.appendChild(t));
  }
  function Wn(e) {
    return '[src="' + pt(e) + '"]';
  }
  function Ja(e) {
    return 'script[async]' + e;
  }
  function lh(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var n = e.querySelector('style[data-href~="' + pt(l.href) + '"]');
          if (n) return (t.instance = n), Ye(n), n;
          var u = ue({}, l, { 'data-href': l.href, 'data-precedence': l.precedence, 'href': null, 'precedence': null });
          return (
            (n = (e.ownerDocument || e).createElement('style')),
            Ye(n),
            Ke(n, 'style', u),
            gi(n, l.precedence, e),
            (t.instance = n)
          );
        case 'stylesheet':
          u = Fn(l.href);
          var i = e.querySelector(ka(u));
          if (i) return (t.state.loading |= 4), (t.instance = i), Ye(i), i;
          (n = th(l)), (u = Ot.get(u)) && kr(n, u), (i = (e.ownerDocument || e).createElement('link')), Ye(i);
          var o = i;
          return (
            (o._p = new Promise(function (m, g) {
              (o.onload = m), (o.onerror = g);
            })),
            Ke(i, 'link', n),
            (t.state.loading |= 4),
            gi(i, l.precedence, e),
            (t.instance = i)
          );
        case 'script':
          return (
            (i = Wn(l.src)),
            (u = e.querySelector(Ja(i)))
              ? ((t.instance = u), Ye(u), u)
              : ((n = l),
                (u = Ot.get(i)) && ((n = ue({}, l)), Jr(n, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement('script')),
                Ye(u),
                Ke(u, 'link', n),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case 'void':
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((n = t.instance), (t.state.loading |= 4), gi(n, l.precedence, e));
    return t.instance;
  }
  function gi(e, t, l) {
    for (
      var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        u = n.length ? n[n.length - 1] : null,
        i = u,
        o = 0;
      o < n.length;
      o++
    ) {
      var m = n[o];
      if (m.dataset.precedence === t) i = m;
      else if (i !== u) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function kr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Jr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var bi = null;
  function nh(e, t, l) {
    if (bi === null) {
      var n = new Map(),
        u = (bi = new Map());
      u.set(l, n);
    } else (u = bi), (n = u.get(l)), n || ((n = new Map()), u.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), u = 0; u < l.length; u++) {
      var i = l[u];
      if (
        !(i[ra] || i[Je] || (e === 'link' && i.getAttribute('rel') === 'stylesheet')) &&
        i.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var o = i.getAttribute(t) || '';
        o = e + o;
        var m = n.get(o);
        m ? m.push(i) : n.set(o, [i]);
      }
    }
    return n;
  }
  function ah(e, t, l) {
    (e = e.ownerDocument || e), e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null);
  }
  function tp(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
        return !0;
      case 'link':
        if (typeof t.rel != 'string' || typeof t.href != 'string' || t.href === '' || t.onLoad || t.onError) break;
        switch (t.rel) {
          case 'stylesheet':
            return (e = t.disabled), typeof t.precedence == 'string' && e == null;
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function uh(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var $a = null;
  function lp() {}
  function np(e, t, l) {
    if ($a === null) throw Error(r(475));
    var n = $a;
    if (
      t.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = Fn(l.href),
          i = e.querySelector(ka(u));
        if (i) {
          (e = i._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (n.count++, (n = Si.bind(n)), e.then(n, n)),
            (t.state.loading |= 4),
            (t.instance = i),
            Ye(i);
          return;
        }
        (i = e.ownerDocument || e), (l = th(l)), (u = Ot.get(u)) && kr(l, u), (i = i.createElement('link')), Ye(i);
        var o = i;
        (o._p = new Promise(function (m, g) {
          (o.onload = m), (o.onerror = g);
        })),
          Ke(i, 'link', l),
          (t.instance = i);
      }
      n.stylesheets === null && (n.stylesheets = new Map()),
        n.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (n.count++, (t = Si.bind(n)), e.addEventListener('load', t), e.addEventListener('error', t));
    }
  }
  function ap() {
    if ($a === null) throw Error(r(475));
    var e = $a;
    return (
      e.stylesheets && e.count === 0 && $r(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && $r(e, e.stylesheets), e.unsuspend)) {
                var n = e.unsuspend;
                (e.unsuspend = null), n();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Si() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) $r(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Ei = null;
  function $r(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null && (e.count++, (Ei = new Map()), t.forEach(up, e), (Ei = null), Si.call(e));
  }
  function up(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ei.get(e);
      if (l) var n = l.get(null);
      else {
        (l = new Map()), Ei.set(e, l);
        for (var u = e.querySelectorAll('link[data-precedence],style[data-precedence]'), i = 0; i < u.length; i++) {
          var o = u[i];
          (o.nodeName === 'LINK' || o.getAttribute('media') !== 'not all') && (l.set(o.dataset.precedence, o), (n = o));
        }
        n && l.set(null, n);
      }
      (u = t.instance),
        (o = u.getAttribute('data-precedence')),
        (i = l.get(o) || n),
        i === n && l.set(null, u),
        l.set(o, u),
        this.count++,
        (n = Si.bind(this)),
        u.addEventListener('load', n),
        u.addEventListener('error', n),
        i
          ? i.parentNode.insertBefore(u, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Fa = { $$typeof: L, Provider: null, Consumer: null, _currentValue: oe, _currentValue2: oe, _threadCount: 0 };
  function ip(e, t, l, n, u, i, o, m) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wi(0)),
      (this.hiddenUpdates = Wi(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = u),
      (this.onCaughtError = i),
      (this.onRecoverableError = o),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = m),
      (this.incompleteTransitions = new Map());
  }
  function ih(e, t, l, n, u, i, o, m, g, A, B, q) {
    return (
      (e = new ip(e, t, l, o, m, g, A, q)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = Rt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = Cc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: n, isDehydrated: l, cache: t }),
      cr(i),
      e
    );
  }
  function ch(e) {
    return e ? ((e = _n), e) : _n;
  }
  function rh(e, t, l, n, u, i) {
    (u = ch(u)),
      n.context === null ? (n.context = u) : (n.pendingContext = u),
      (n = Cl(t)),
      (n.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (n.callback = i),
      (l = Dl(e, n, t)),
      l !== null && (tt(l, e, t), wa(l, e, t));
  }
  function sh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Fr(e, t) {
    sh(e, t), (e = e.alternate) && sh(e, t);
  }
  function fh(e) {
    if (e.tag === 13) {
      var t = Sl(e, 67108864);
      t !== null && tt(t, e, 67108864), Fr(e, 67108864);
    }
  }
  var Ti = !0;
  function cp(e, t, l, n) {
    var u = Q.T;
    Q.T = null;
    var i = Z.p;
    try {
      (Z.p = 2), Wr(e, t, l, n);
    } finally {
      (Z.p = i), (Q.T = u);
    }
  }
  function rp(e, t, l, n) {
    var u = Q.T;
    Q.T = null;
    var i = Z.p;
    try {
      (Z.p = 8), Wr(e, t, l, n);
    } finally {
      (Z.p = i), (Q.T = u);
    }
  }
  function Wr(e, t, l, n) {
    if (Ti) {
      var u = Pr(n);
      if (u === null) qr(e, t, n, Ai, l), dh(e, n);
      else if (fp(u, e, t, l, n)) n.stopPropagation();
      else if ((dh(e, n), t & 4 && -1 < sp.indexOf(e))) {
        for (; u !== null; ) {
          var i = gn(u);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var o = Gl(i.pendingLanes);
                  if (o !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; o; ) {
                      var g = 1 << (31 - rt(o));
                      (m.entanglements[1] |= g), (o &= ~g);
                    }
                    Qt(i), (Ce & 6) === 0 && ((ii = qt() + 500), Qa(0));
                  }
                }
                break;
              case 13:
                (m = Sl(i, 2)), m !== null && tt(m, i, 2), si(), Fr(i, 2);
            }
          if (((i = Pr(n)), i === null && qr(e, t, n, Ai, l), i === u)) break;
          u = i;
        }
        u !== null && n.stopPropagation();
      } else qr(e, t, n, null, l);
    }
  }
  function Pr(e) {
    return (e = ac(e)), Ir(e);
  }
  var Ai = null;
  function Ir(e) {
    if (((Ai = null), (e = Vl(e)), e !== null)) {
      var t = I(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = Ee(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Ai = e), null;
  }
  function oh(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (Jm()) {
          case ws:
            return 2;
          case Ms:
            return 8;
          case gu:
          case $m:
            return 32;
          case js:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var es = !1,
    jl = null,
    Bl = null,
    Hl = null,
    Wa = new Map(),
    Pa = new Map(),
    Ll = [],
    sp =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function dh(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        jl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Bl = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Hl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Wa.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Pa.delete(t.pointerId);
    }
  }
  function Ia(e, t, l, n, u, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = { blockedOn: t, domEventName: l, eventSystemFlags: n, nativeEvent: i, targetContainers: [u] }),
        t !== null && ((t = gn(t)), t !== null && fh(t)),
        e)
      : ((e.eventSystemFlags |= n), (t = e.targetContainers), u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function fp(e, t, l, n, u) {
    switch (t) {
      case 'focusin':
        return (jl = Ia(jl, e, t, l, n, u)), !0;
      case 'dragenter':
        return (Bl = Ia(Bl, e, t, l, n, u)), !0;
      case 'mouseover':
        return (Hl = Ia(Hl, e, t, l, n, u)), !0;
      case 'pointerover':
        var i = u.pointerId;
        return Wa.set(i, Ia(Wa.get(i) || null, e, t, l, n, u)), !0;
      case 'gotpointercapture':
        return (i = u.pointerId), Pa.set(i, Ia(Pa.get(i) || null, e, t, l, n, u)), !0;
    }
    return !1;
  }
  function hh(e) {
    var t = Vl(e.target);
    if (t !== null) {
      var l = I(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = Ee(l)), t !== null)) {
            (e.blockedOn = t),
              ay(e.priority, function () {
                if (l.tag === 13) {
                  var n = ht(),
                    u = Sl(l, n);
                  u !== null && tt(u, l, n), Fr(l, n);
                }
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ri(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Pr(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(l.type, l);
        (nc = n), l.target.dispatchEvent(n), (nc = null);
      } else return (t = gn(l)), t !== null && fh(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function mh(e, t, l) {
    Ri(e) && l.delete(t);
  }
  function op() {
    (es = !1),
      jl !== null && Ri(jl) && (jl = null),
      Bl !== null && Ri(Bl) && (Bl = null),
      Hl !== null && Ri(Hl) && (Hl = null),
      Wa.forEach(mh),
      Pa.forEach(mh);
  }
  function xi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), es || ((es = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, op)));
  }
  var Oi = null;
  function yh(e) {
    Oi !== e &&
      ((Oi = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Oi === e && (Oi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            n = e[t + 1],
            u = e[t + 2];
          if (typeof n != 'function') {
            if (Ir(n || l) === null) continue;
            break;
          }
          var i = gn(l);
          i !== null && (e.splice(t, 3), (t -= 3), Xc(i, { pending: !0, data: u, method: l.method, action: n }, n, u));
        }
      }));
  }
  function eu(e) {
    function t(g) {
      return xi(g, e);
    }
    jl !== null && xi(jl, e), Bl !== null && xi(Bl, e), Hl !== null && xi(Hl, e), Wa.forEach(t), Pa.forEach(t);
    for (var l = 0; l < Ll.length; l++) {
      var n = Ll[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Ll.length && ((l = Ll[0]), l.blockedOn === null); ) hh(l), l.blockedOn === null && Ll.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var u = l[n],
          i = l[n + 1],
          o = u[nt] || null;
        if (typeof i == 'function') o || yh(l);
        else if (o) {
          var m = null;
          if (i && i.hasAttribute('formAction')) {
            if (((u = i), (o = i[nt] || null))) m = o.formAction;
            else if (Ir(u) !== null) continue;
          } else m = o.action;
          typeof m == 'function' ? (l[n + 1] = m) : (l.splice(n, 3), (n -= 3)), yh(l);
        }
      }
  }
  function ts(e) {
    this._internalRoot = e;
  }
  (Ci.prototype.render = ts.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var l = t.current,
        n = ht();
      rh(l, n, e, t, null, null);
    }),
    (Ci.prototype.unmount = ts.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && Kn(), rh(e.current, 2, null, e, null, null), si(), (t[vn] = null);
        }
      });
  function Ci(e) {
    this._internalRoot = e;
  }
  Ci.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Gs();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ll.length && t !== 0 && t < Ll[l].priority; l++);
      Ll.splice(l, 0, e), l === 0 && hh(e);
    }
  };
  var ph = c.version;
  if (ph !== '19.0.0') throw Error(r(527, ph, '19.0.0'));
  Z.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ? Error(r(188)) : ((e = Object.keys(e).join(',')), Error(r(268, e)));
    return (e = G(t)), (e = e !== null ? P(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var dp = {
    bundleType: 0,
    version: '19.0.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: Q,
    findFiberByHostInstance: Vl,
    reconcilerVersion: '19.0.0'
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Di.isDisabled && Di.supportsFiber)
      try {
        (ua = Di.inject(dp)), (ct = Di);
      } catch {}
  }
  return (
    (lu.createRoot = function (e, t) {
      if (!f(e)) throw Error(r(299));
      var l = !1,
        n = '',
        u = wo,
        i = Mo,
        o = jo,
        m = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)),
        (t = ih(e, 1, !1, null, null, l, n, u, i, o, m, null)),
        (e[vn] = t.current),
        Lr(e.nodeType === 8 ? e.parentNode : e),
        new ts(t)
      );
    }),
    (lu.hydrateRoot = function (e, t, l) {
      if (!f(e)) throw Error(r(299));
      var n = !1,
        u = '',
        i = wo,
        o = Mo,
        m = jo,
        g = null,
        A = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (o = l.onCaughtError),
          l.onRecoverableError !== void 0 && (m = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (A = l.formState)),
        (t = ih(e, 1, !0, t, l ?? null, n, u, i, o, m, g, A)),
        (t.context = ch(null)),
        (l = t.current),
        (n = ht()),
        (u = Cl(n)),
        (u.callback = null),
        Dl(l, u, n),
        (t.current.lanes = n),
        ca(t, n),
        Qt(t),
        (e[vn] = t.current),
        Lr(e),
        new Ci(t)
      );
    }),
    (lu.version = '19.0.0'),
    lu
  );
}
var Oh;
function Tp() {
  if (Oh) return as.exports;
  Oh = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (c) {
        console.error(c);
      }
  }
  return a(), (as.exports = Ep()), as.exports;
}
var Ap = Tp(),
  nu = {},
  Ch;
function Rp() {
  if (Ch) return nu;
  (Ch = 1), Object.defineProperty(nu, '__esModule', { value: !0 }), (nu.parse = h), (nu.serialize = y);
  const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    c = /^[\u0021-\u003A\u003C-\u007E]*$/,
    s = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    r = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    d = (() => {
      const z = function () {};
      return (z.prototype = Object.create(null)), z;
    })();
  function h(z, L) {
    const O = new d(),
      w = z.length;
    if (w < 2) return O;
    const N = (L == null ? void 0 : L.decode) || b;
    let U = 0;
    do {
      const Y = z.indexOf('=', U);
      if (Y === -1) break;
      const V = z.indexOf(';', U),
        ae = V === -1 ? w : V;
      if (Y > ae) {
        U = z.lastIndexOf(';', Y - 1) + 1;
        continue;
      }
      const k = v(z, U, Y),
        ye = p(z, Y, k),
        Re = z.slice(k, ye);
      if (O[Re] === void 0) {
        let ze = v(z, Y + 1, ae),
          Q = p(z, ae, ze);
        const ue = N(z.slice(ze, Q));
        O[Re] = ue;
      }
      U = ae + 1;
    } while (U < w);
    return O;
  }
  function v(z, L, O) {
    do {
      const w = z.charCodeAt(L);
      if (w !== 32 && w !== 9) return L;
    } while (++L < O);
    return O;
  }
  function p(z, L, O) {
    for (; L > O; ) {
      const w = z.charCodeAt(--L);
      if (w !== 32 && w !== 9) return L + 1;
    }
    return O;
  }
  function y(z, L, O) {
    const w = (O == null ? void 0 : O.encode) || encodeURIComponent;
    if (!a.test(z)) throw new TypeError(`argument name is invalid: ${z}`);
    const N = w(L);
    if (!c.test(N)) throw new TypeError(`argument val is invalid: ${L}`);
    let U = z + '=' + N;
    if (!O) return U;
    if (O.maxAge !== void 0) {
      if (!Number.isInteger(O.maxAge)) throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);
      U += '; Max-Age=' + O.maxAge;
    }
    if (O.domain) {
      if (!s.test(O.domain)) throw new TypeError(`option domain is invalid: ${O.domain}`);
      U += '; Domain=' + O.domain;
    }
    if (O.path) {
      if (!r.test(O.path)) throw new TypeError(`option path is invalid: ${O.path}`);
      U += '; Path=' + O.path;
    }
    if (O.expires) {
      if (!D(O.expires) || !Number.isFinite(O.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${O.expires}`);
      U += '; Expires=' + O.expires.toUTCString();
    }
    if (
      (O.httpOnly && (U += '; HttpOnly'),
      O.secure && (U += '; Secure'),
      O.partitioned && (U += '; Partitioned'),
      O.priority)
    )
      switch (typeof O.priority == 'string' ? O.priority.toLowerCase() : void 0) {
        case 'low':
          U += '; Priority=Low';
          break;
        case 'medium':
          U += '; Priority=Medium';
          break;
        case 'high':
          U += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${O.priority}`);
      }
    if (O.sameSite)
      switch (typeof O.sameSite == 'string' ? O.sameSite.toLowerCase() : O.sameSite) {
        case !0:
        case 'strict':
          U += '; SameSite=Strict';
          break;
        case 'lax':
          U += '; SameSite=Lax';
          break;
        case 'none':
          U += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${O.sameSite}`);
      }
    return U;
  }
  function b(z) {
    if (z.indexOf('%') === -1) return z;
    try {
      return decodeURIComponent(z);
    } catch {
      return z;
    }
  }
  function D(z) {
    return f.call(z) === '[object Date]';
  }
  return nu;
}
Rp();
/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Dh = 'popstate';
function xp(a = {}) {
  function c(r, f) {
    let { pathname: d, search: h, hash: v } = r.location;
    return ms(
      '',
      { pathname: d, search: h, hash: v },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || 'default'
    );
  }
  function s(r, f) {
    return typeof f == 'string' ? f : iu(f);
  }
  return Cp(c, s, null, a);
}
function De(a, c) {
  if (a === !1 || a === null || typeof a > 'u') throw new Error(c);
}
function Kt(a, c) {
  if (!a) {
    typeof console < 'u' && console.warn(c);
    try {
      throw new Error(c);
    } catch {}
  }
}
function Op() {
  return Math.random().toString(36).substring(2, 10);
}
function _h(a, c) {
  return { usr: a.state, key: a.key, idx: c };
}
function ms(a, c, s = null, r) {
  return {
    pathname: typeof a == 'string' ? a : a.pathname,
    search: '',
    hash: '',
    ...(typeof c == 'string' ? In(c) : c),
    state: s,
    key: (c && c.key) || r || Op()
  };
}
function iu({ pathname: a = '/', search: c = '', hash: s = '' }) {
  return (
    c && c !== '?' && (a += c.charAt(0) === '?' ? c : '?' + c),
    s && s !== '#' && (a += s.charAt(0) === '#' ? s : '#' + s),
    a
  );
}
function In(a) {
  let c = {};
  if (a) {
    let s = a.indexOf('#');
    s >= 0 && ((c.hash = a.substring(s)), (a = a.substring(0, s)));
    let r = a.indexOf('?');
    r >= 0 && ((c.search = a.substring(r)), (a = a.substring(0, r))), a && (c.pathname = a);
  }
  return c;
}
function Cp(a, c, s, r = {}) {
  let { window: f = document.defaultView, v5Compat: d = !1 } = r,
    h = f.history,
    v = 'POP',
    p = null,
    y = b();
  y == null && ((y = 0), h.replaceState({ ...h.state, idx: y }, ''));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function D() {
    v = 'POP';
    let N = b(),
      U = N == null ? null : N - y;
    (y = N), p && p({ action: v, location: w.location, delta: U });
  }
  function z(N, U) {
    v = 'PUSH';
    let Y = ms(w.location, N, U);
    y = b() + 1;
    let V = _h(Y, y),
      ae = w.createHref(Y);
    try {
      h.pushState(V, '', ae);
    } catch (k) {
      if (k instanceof DOMException && k.name === 'DataCloneError') throw k;
      f.location.assign(ae);
    }
    d && p && p({ action: v, location: w.location, delta: 1 });
  }
  function L(N, U) {
    v = 'REPLACE';
    let Y = ms(w.location, N, U);
    y = b();
    let V = _h(Y, y),
      ae = w.createHref(Y);
    h.replaceState(V, '', ae), d && p && p({ action: v, location: w.location, delta: 0 });
  }
  function O(N) {
    let U = f.location.origin !== 'null' ? f.location.origin : f.location.href,
      Y = typeof N == 'string' ? N : iu(N);
    return (
      (Y = Y.replace(/ $/, '%20')),
      De(U, `No window.location.(origin|href) available to create URL for href: ${Y}`),
      new URL(Y, U)
    );
  }
  let w = {
    get action() {
      return v;
    },
    get location() {
      return a(f, h);
    },
    listen(N) {
      if (p) throw new Error('A history only accepts one active listener');
      return (
        f.addEventListener(Dh, D),
        (p = N),
        () => {
          f.removeEventListener(Dh, D), (p = null);
        }
      );
    },
    createHref(N) {
      return c(f, N);
    },
    createURL: O,
    encodeLocation(N) {
      let U = O(N);
      return { pathname: U.pathname, search: U.search, hash: U.hash };
    },
    push: z,
    replace: L,
    go(N) {
      return h.go(N);
    }
  };
  return w;
}
function Wh(a, c, s = '/') {
  return Dp(a, c, s, !1);
}
function Dp(a, c, s, r) {
  let f = typeof c == 'string' ? In(c) : c,
    d = ml(f.pathname || '/', s);
  if (d == null) return null;
  let h = Ph(a);
  _p(h);
  let v = null;
  for (let p = 0; v == null && p < h.length; ++p) {
    let y = Yp(d);
    v = Lp(h[p], y, r);
  }
  return v;
}
function Ph(a, c = [], s = [], r = '') {
  let f = (d, h, v) => {
    let p = {
      relativePath: v === void 0 ? d.path || '' : v,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d
    };
    p.relativePath.startsWith('/') &&
      (De(
        p.relativePath.startsWith(r),
        `Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(r.length)));
    let y = hl([r, p.relativePath]),
      b = s.concat(p);
    d.children &&
      d.children.length > 0 &&
      (De(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      Ph(d.children, c, b, y)),
      !(d.path == null && !d.index) && c.push({ path: y, score: Bp(y, d.index), routesMeta: b });
  };
  return (
    a.forEach((d, h) => {
      var v;
      if (d.path === '' || !((v = d.path) != null && v.includes('?'))) f(d, h);
      else for (let p of Ih(d.path)) f(d, h, p);
    }),
    c
  );
}
function Ih(a) {
  let c = a.split('/');
  if (c.length === 0) return [];
  let [s, ...r] = c,
    f = s.endsWith('?'),
    d = s.replace(/\?$/, '');
  if (r.length === 0) return f ? [d, ''] : [d];
  let h = Ih(r.join('/')),
    v = [];
  return (
    v.push(...h.map((p) => (p === '' ? d : [d, p].join('/')))),
    f && v.push(...h),
    v.map((p) => (a.startsWith('/') && p === '' ? '/' : p))
  );
}
function _p(a) {
  a.sort((c, s) =>
    c.score !== s.score
      ? s.score - c.score
      : Hp(
          c.routesMeta.map((r) => r.childrenIndex),
          s.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var Np = /^:[\w-]+$/,
  Up = 3,
  zp = 2,
  wp = 1,
  Mp = 10,
  jp = -2,
  Nh = (a) => a === '*';
function Bp(a, c) {
  let s = a.split('/'),
    r = s.length;
  return (
    s.some(Nh) && (r += jp),
    c && (r += zp),
    s.filter((f) => !Nh(f)).reduce((f, d) => f + (Np.test(d) ? Up : d === '' ? wp : Mp), r)
  );
}
function Hp(a, c) {
  return a.length === c.length && a.slice(0, -1).every((r, f) => r === c[f]) ? a[a.length - 1] - c[c.length - 1] : 0;
}
function Lp(a, c, s = !1) {
  let { routesMeta: r } = a,
    f = {},
    d = '/',
    h = [];
  for (let v = 0; v < r.length; ++v) {
    let p = r[v],
      y = v === r.length - 1,
      b = d === '/' ? c : c.slice(d.length) || '/',
      D = ji({ path: p.relativePath, caseSensitive: p.caseSensitive, end: y }, b),
      z = p.route;
    if (
      (!D &&
        y &&
        s &&
        !r[r.length - 1].route.index &&
        (D = ji({ path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 }, b)),
      !D)
    )
      return null;
    Object.assign(f, D.params),
      h.push({ params: f, pathname: hl([d, D.pathname]), pathnameBase: Qp(hl([d, D.pathnameBase])), route: z }),
      D.pathnameBase !== '/' && (d = hl([d, D.pathnameBase]));
  }
  return h;
}
function ji(a, c) {
  typeof a == 'string' && (a = { path: a, caseSensitive: !1, end: !0 });
  let [s, r] = qp(a.path, a.caseSensitive, a.end),
    f = c.match(s);
  if (!f) return null;
  let d = f[0],
    h = d.replace(/(.)\/+$/, '$1'),
    v = f.slice(1);
  return {
    params: r.reduce((y, { paramName: b, isOptional: D }, z) => {
      if (b === '*') {
        let O = v[z] || '';
        h = d.slice(0, d.length - O.length).replace(/(.)\/+$/, '$1');
      }
      const L = v[z];
      return D && !L ? (y[b] = void 0) : (y[b] = (L || '').replace(/%2F/g, '/')), y;
    }, {}),
    pathname: d,
    pathnameBase: h,
    pattern: a
  };
}
function qp(a, c = !1, s = !0) {
  Kt(
    a === '*' || !a.endsWith('*') || a.endsWith('/*'),
    `Route path "${a}" will be treated as if it were "${a.replace(
      /\*$/,
      '/*'
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(
      /\*$/,
      '/*'
    )}".`
  );
  let r = [],
    f =
      '^' +
      a
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, v, p) => (r.push({ paramName: v, isOptional: p != null }), p ? '/?([^\\/]+)?' : '/([^\\/]+)')
        );
  return (
    a.endsWith('*')
      ? (r.push({ paramName: '*' }), (f += a === '*' || a === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : s
      ? (f += '\\/*$')
      : a !== '' && a !== '/' && (f += '(?:(?=\\/|$))'),
    [new RegExp(f, c ? void 0 : 'i'), r]
  );
}
function Yp(a) {
  try {
    return a
      .split('/')
      .map((c) => decodeURIComponent(c).replace(/\//g, '%2F'))
      .join('/');
  } catch (c) {
    return (
      Kt(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`
      ),
      a
    );
  }
}
function ml(a, c) {
  if (c === '/') return a;
  if (!a.toLowerCase().startsWith(c.toLowerCase())) return null;
  let s = c.endsWith('/') ? c.length - 1 : c.length,
    r = a.charAt(s);
  return r && r !== '/' ? null : a.slice(s) || '/';
}
function Gp(a, c = '/') {
  let { pathname: s, search: r = '', hash: f = '' } = typeof a == 'string' ? In(a) : a;
  return { pathname: s ? (s.startsWith('/') ? s : Vp(s, c)) : c, search: Zp(r), hash: Kp(f) };
}
function Vp(a, c) {
  let s = c.replace(/\/+$/, '').split('/');
  return (
    a.split('/').forEach((f) => {
      f === '..' ? s.length > 1 && s.pop() : f !== '.' && s.push(f);
    }),
    s.length > 1 ? s.join('/') : '/'
  );
}
function rs(a, c, s, r) {
  return `Cannot include a '${a}' character in a manually specified \`to.${c}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Xp(a) {
  return a.filter((c, s) => s === 0 || (c.route.path && c.route.path.length > 0));
}
function em(a) {
  let c = Xp(a);
  return c.map((s, r) => (r === c.length - 1 ? s.pathname : s.pathnameBase));
}
function tm(a, c, s, r = !1) {
  let f;
  typeof a == 'string'
    ? (f = In(a))
    : ((f = { ...a }),
      De(!f.pathname || !f.pathname.includes('?'), rs('?', 'pathname', 'search', f)),
      De(!f.pathname || !f.pathname.includes('#'), rs('#', 'pathname', 'hash', f)),
      De(!f.search || !f.search.includes('#'), rs('#', 'search', 'hash', f)));
  let d = a === '' || f.pathname === '',
    h = d ? '/' : f.pathname,
    v;
  if (h == null) v = s;
  else {
    let D = c.length - 1;
    if (!r && h.startsWith('..')) {
      let z = h.split('/');
      for (; z[0] === '..'; ) z.shift(), (D -= 1);
      f.pathname = z.join('/');
    }
    v = D >= 0 ? c[D] : '/';
  }
  let p = Gp(f, v),
    y = h && h !== '/' && h.endsWith('/'),
    b = (d || h === '.') && s.endsWith('/');
  return !p.pathname.endsWith('/') && (y || b) && (p.pathname += '/'), p;
}
var hl = (a) => a.join('/').replace(/\/\/+/g, '/'),
  Qp = (a) => a.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Zp = (a) => (!a || a === '?' ? '' : a.startsWith('?') ? a : '?' + a),
  Kp = (a) => (!a || a === '#' ? '' : a.startsWith('#') ? a : '#' + a);
function kp(a) {
  return (
    a != null &&
    typeof a.status == 'number' &&
    typeof a.statusText == 'string' &&
    typeof a.internal == 'boolean' &&
    'data' in a
  );
}
var lm = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(lm);
var Jp = ['GET', ...lm];
new Set(Jp);
var ea = x.createContext(null);
ea.displayName = 'DataRouter';
var Li = x.createContext(null);
Li.displayName = 'DataRouterState';
var nm = x.createContext({ isTransitioning: !1 });
nm.displayName = 'ViewTransition';
var $p = x.createContext(new Map());
$p.displayName = 'Fetchers';
var Fp = x.createContext(null);
Fp.displayName = 'Await';
var kt = x.createContext(null);
kt.displayName = 'Navigation';
var ru = x.createContext(null);
ru.displayName = 'Location';
var jt = x.createContext({ outlet: null, matches: [], isDataRoute: !1 });
jt.displayName = 'Route';
var As = x.createContext(null);
As.displayName = 'RouteError';
function Wp(a, { relative: c } = {}) {
  De(su(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: s, navigator: r } = x.useContext(kt),
    { hash: f, pathname: d, search: h } = ou(a, { relative: c }),
    v = d;
  return s !== '/' && (v = d === '/' ? s : hl([s, d])), r.createHref({ pathname: v, search: h, hash: f });
}
function su() {
  return x.useContext(ru) != null;
}
function mn() {
  return De(su(), 'useLocation() may be used only in the context of a <Router> component.'), x.useContext(ru).location;
}
var am = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function um(a) {
  x.useContext(kt).static || x.useLayoutEffect(a);
}
function fu() {
  let { isDataRoute: a } = x.useContext(jt);
  return a ? dv() : Pp();
}
function Pp() {
  De(su(), 'useNavigate() may be used only in the context of a <Router> component.');
  let a = x.useContext(ea),
    { basename: c, navigator: s } = x.useContext(kt),
    { matches: r } = x.useContext(jt),
    { pathname: f } = mn(),
    d = JSON.stringify(em(r)),
    h = x.useRef(!1);
  return (
    um(() => {
      h.current = !0;
    }),
    x.useCallback(
      (p, y = {}) => {
        if ((Kt(h.current, am), !h.current)) return;
        if (typeof p == 'number') {
          s.go(p);
          return;
        }
        let b = tm(p, JSON.parse(d), f, y.relative === 'path');
        a == null && c !== '/' && (b.pathname = b.pathname === '/' ? c : hl([c, b.pathname])),
          (y.replace ? s.replace : s.push)(b, y.state, y);
      },
      [c, s, d, f, a]
    )
  );
}
var Ip = x.createContext(null);
function ev(a) {
  let c = x.useContext(jt).outlet;
  return c && x.createElement(Ip.Provider, { value: a }, c);
}
function im() {
  let { matches: a } = x.useContext(jt),
    c = a[a.length - 1];
  return c ? c.params : {};
}
function ou(a, { relative: c } = {}) {
  let { matches: s } = x.useContext(jt),
    { pathname: r } = mn(),
    f = JSON.stringify(em(s));
  return x.useMemo(() => tm(a, JSON.parse(f), r, c === 'path'), [a, f, r, c]);
}
function tv(a, c) {
  return cm(a, c);
}
function cm(a, c, s, r) {
  var Y;
  De(su(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: f, static: d } = x.useContext(kt),
    { matches: h } = x.useContext(jt),
    v = h[h.length - 1],
    p = v ? v.params : {},
    y = v ? v.pathname : '/',
    b = v ? v.pathnameBase : '/',
    D = v && v.route;
  {
    let V = (D && D.path) || '';
    rm(
      y,
      !D || V.endsWith('*') || V.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === '/' ? '*' : `${V}/*`}">.`
    );
  }
  let z = mn(),
    L;
  if (c) {
    let V = typeof c == 'string' ? In(c) : c;
    De(
      b === '/' || ((Y = V.pathname) == null ? void 0 : Y.startsWith(b)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ),
      (L = V);
  } else L = z;
  let O = L.pathname || '/',
    w = O;
  if (b !== '/') {
    let V = b.replace(/^\//, '').split('/');
    w = '/' + O.replace(/^\//, '').split('/').slice(V.length).join('/');
  }
  let N = !d && s && s.matches && s.matches.length > 0 ? s.matches : Wh(a, { pathname: w });
  Kt(D || N != null, `No routes matched location "${L.pathname}${L.search}${L.hash}" `),
    Kt(
      N == null ||
        N[N.length - 1].route.element !== void 0 ||
        N[N.length - 1].route.Component !== void 0 ||
        N[N.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let U = iv(
    N &&
      N.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, p, V.params),
          pathname: hl([b, f.encodeLocation ? f.encodeLocation(V.pathname).pathname : V.pathname]),
          pathnameBase:
            V.pathnameBase === '/'
              ? b
              : hl([b, f.encodeLocation ? f.encodeLocation(V.pathnameBase).pathname : V.pathnameBase])
        })
      ),
    h,
    s,
    r
  );
  return c && U
    ? x.createElement(
        ru.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...L },
            navigationType: 'POP'
          }
        },
        U
      )
    : U;
}
function lv() {
  let a = ov(),
    c = kp(a) ? `${a.status} ${a.statusText}` : a instanceof Error ? a.message : JSON.stringify(a),
    s = a instanceof Error ? a.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    f = { padding: '0.5rem', backgroundColor: r },
    d = { padding: '2px 4px', backgroundColor: r },
    h = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', a),
    (h = x.createElement(
      x.Fragment,
      null,
      x.createElement('p', null, '💿 Hey developer 👋'),
      x.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        x.createElement('code', { style: d }, 'ErrorBoundary'),
        ' or',
        ' ',
        x.createElement('code', { style: d }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    x.createElement(
      x.Fragment,
      null,
      x.createElement('h2', null, 'Unexpected Application Error!'),
      x.createElement('h3', { style: { fontStyle: 'italic' } }, c),
      s ? x.createElement('pre', { style: f }, s) : null,
      h
    )
  );
}
var nv = x.createElement(lv, null),
  av = class extends x.Component {
    constructor(a) {
      super(a), (this.state = { location: a.location, revalidation: a.revalidation, error: a.error });
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, c) {
      return c.location !== a.location || (c.revalidation !== 'idle' && a.revalidation === 'idle')
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : c.error,
            location: c.location,
            revalidation: a.revalidation || c.revalidation
          };
    }
    componentDidCatch(a, c) {
      console.error('React Router caught the following error during render', a, c);
    }
    render() {
      return this.state.error !== void 0
        ? x.createElement(
            jt.Provider,
            { value: this.props.routeContext },
            x.createElement(As.Provider, { value: this.state.error, children: this.props.component })
          )
        : this.props.children;
    }
  };
function uv({ routeContext: a, match: c, children: s }) {
  let r = x.useContext(ea);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (c.route.errorElement || c.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = c.route.id),
    x.createElement(jt.Provider, { value: a }, s)
  );
}
function iv(a, c = [], s = null, r = null) {
  if (a == null) {
    if (!s) return null;
    if (s.errors) a = s.matches;
    else if (c.length === 0 && !s.initialized && s.matches.length > 0) a = s.matches;
    else return null;
  }
  let f = a,
    d = s == null ? void 0 : s.errors;
  if (d != null) {
    let p = f.findIndex((y) => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0);
    De(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(',')}`),
      (f = f.slice(0, Math.min(f.length, p + 1)));
  }
  let h = !1,
    v = -1;
  if (s)
    for (let p = 0; p < f.length; p++) {
      let y = f[p];
      if (((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (v = p), y.route.id)) {
        let { loaderData: b, errors: D } = s,
          z = y.route.loader && !b.hasOwnProperty(y.route.id) && (!D || D[y.route.id] === void 0);
        if (y.route.lazy || z) {
          (h = !0), v >= 0 ? (f = f.slice(0, v + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((p, y, b) => {
    let D,
      z = !1,
      L = null,
      O = null;
    s &&
      ((D = d && y.route.id ? d[y.route.id] : void 0),
      (L = y.route.errorElement || nv),
      h &&
        (v < 0 && b === 0
          ? (rm('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'),
            (z = !0),
            (O = null))
          : v === b && ((z = !0), (O = y.route.hydrateFallbackElement || null))));
    let w = c.concat(f.slice(0, b + 1)),
      N = () => {
        let U;
        return (
          D
            ? (U = L)
            : z
            ? (U = O)
            : y.route.Component
            ? (U = x.createElement(y.route.Component, null))
            : y.route.element
            ? (U = y.route.element)
            : (U = p),
          x.createElement(uv, {
            match: y,
            routeContext: { outlet: p, matches: w, isDataRoute: s != null },
            children: U
          })
        );
      };
    return s && (y.route.ErrorBoundary || y.route.errorElement || b === 0)
      ? x.createElement(av, {
          location: s.location,
          revalidation: s.revalidation,
          component: L,
          error: D,
          children: N(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 }
        })
      : N();
  }, null);
}
function Rs(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function cv(a) {
  let c = x.useContext(ea);
  return De(c, Rs(a)), c;
}
function rv(a) {
  let c = x.useContext(Li);
  return De(c, Rs(a)), c;
}
function sv(a) {
  let c = x.useContext(jt);
  return De(c, Rs(a)), c;
}
function xs(a) {
  let c = sv(a),
    s = c.matches[c.matches.length - 1];
  return De(s.route.id, `${a} can only be used on routes that contain a unique "id"`), s.route.id;
}
function fv() {
  return xs('useRouteId');
}
function ov() {
  var r;
  let a = x.useContext(As),
    c = rv('useRouteError'),
    s = xs('useRouteError');
  return a !== void 0 ? a : (r = c.errors) == null ? void 0 : r[s];
}
function dv() {
  let { router: a } = cv('useNavigate'),
    c = xs('useNavigate'),
    s = x.useRef(!1);
  return (
    um(() => {
      s.current = !0;
    }),
    x.useCallback(
      async (f, d = {}) => {
        Kt(s.current, am),
          s.current && (typeof f == 'number' ? a.navigate(f) : await a.navigate(f, { fromRouteId: c, ...d }));
      },
      [a, c]
    )
  );
}
var Uh = {};
function rm(a, c, s) {
  !c && !Uh[a] && ((Uh[a] = !0), Kt(!1, s));
}
x.memo(hv);
function hv({ routes: a, future: c, state: s }) {
  return cm(a, void 0, s, c);
}
function sm(a) {
  return ev(a.context);
}
function zt(a) {
  De(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function mv({
  basename: a = '/',
  children: c = null,
  location: s,
  navigationType: r = 'POP',
  navigator: f,
  static: d = !1
}) {
  De(!su(), 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.');
  let h = a.replace(/^\/*/, '/'),
    v = x.useMemo(() => ({ basename: h, navigator: f, static: d, future: {} }), [h, f, d]);
  typeof s == 'string' && (s = In(s));
  let { pathname: p = '/', search: y = '', hash: b = '', state: D = null, key: z = 'default' } = s,
    L = x.useMemo(() => {
      let O = ml(p, h);
      return O == null ? null : { location: { pathname: O, search: y, hash: b, state: D, key: z }, navigationType: r };
    }, [h, p, y, b, D, z, r]);
  return (
    Kt(
      L != null,
      `<Router basename="${h}"> is not able to match the URL "${p}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    L == null
      ? null
      : x.createElement(kt.Provider, { value: v }, x.createElement(ru.Provider, { children: c, value: L }))
  );
}
function yv({ children: a, location: c }) {
  return tv(ys(a), c);
}
function ys(a, c = []) {
  let s = [];
  return (
    x.Children.forEach(a, (r, f) => {
      if (!x.isValidElement(r)) return;
      let d = [...c, f];
      if (r.type === x.Fragment) {
        s.push.apply(s, ys(r.props.children, d));
        return;
      }
      De(
        r.type === zt,
        `[${
          typeof r.type == 'string' ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        De(!r.props.index || !r.props.children, 'An index route cannot have child routes.');
      let h = {
        id: r.props.id || d.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy
      };
      r.props.children && (h.children = ys(r.props.children, d)), s.push(h);
    }),
    s
  );
}
var Ni = 'get',
  Ui = 'application/x-www-form-urlencoded';
function qi(a) {
  return a != null && typeof a.tagName == 'string';
}
function pv(a) {
  return qi(a) && a.tagName.toLowerCase() === 'button';
}
function vv(a) {
  return qi(a) && a.tagName.toLowerCase() === 'form';
}
function gv(a) {
  return qi(a) && a.tagName.toLowerCase() === 'input';
}
function bv(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function Sv(a, c) {
  return a.button === 0 && (!c || c === '_self') && !bv(a);
}
var _i = null;
function Ev() {
  if (_i === null)
    try {
      new FormData(document.createElement('form'), 0), (_i = !1);
    } catch {
      _i = !0;
    }
  return _i;
}
var Tv = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function ss(a) {
  return a != null && !Tv.has(a)
    ? (Kt(!1, `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ui}"`), null)
    : a;
}
function Av(a, c) {
  let s, r, f, d, h;
  if (vv(a)) {
    let v = a.getAttribute('action');
    (r = v ? ml(v, c) : null),
      (s = a.getAttribute('method') || Ni),
      (f = ss(a.getAttribute('enctype')) || Ui),
      (d = new FormData(a));
  } else if (pv(a) || (gv(a) && (a.type === 'submit' || a.type === 'image'))) {
    let v = a.form;
    if (v == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let p = a.getAttribute('formaction') || v.getAttribute('action');
    if (
      ((r = p ? ml(p, c) : null),
      (s = a.getAttribute('formmethod') || v.getAttribute('method') || Ni),
      (f = ss(a.getAttribute('formenctype')) || ss(v.getAttribute('enctype')) || Ui),
      (d = new FormData(v, a)),
      !Ev())
    ) {
      let { name: y, type: b, value: D } = a;
      if (b === 'image') {
        let z = y ? `${y}.` : '';
        d.append(`${z}x`, '0'), d.append(`${z}y`, '0');
      } else y && d.append(y, D);
    }
  } else {
    if (qi(a)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    (s = Ni), (r = null), (f = Ui), (h = a);
  }
  return (
    d && f === 'text/plain' && ((h = d), (d = void 0)),
    { action: r, method: s.toLowerCase(), encType: f, formData: d, body: h }
  );
}
function Os(a, c) {
  if (a === !1 || a === null || typeof a > 'u') throw new Error(c);
}
async function Rv(a, c) {
  if (a.id in c) return c[a.id];
  try {
    let s = await import(a.module);
    return (c[a.id] = s), s;
  } catch (s) {
    return (
      console.error(`Error loading route module \`${a.module}\`, reloading page...`),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function xv(a) {
  return a == null
    ? !1
    : a.href == null
    ? a.rel === 'preload' && typeof a.imageSrcSet == 'string' && typeof a.imageSizes == 'string'
    : typeof a.rel == 'string' && typeof a.href == 'string';
}
async function Ov(a, c, s) {
  let r = await Promise.all(
    a.map(async (f) => {
      let d = c.routes[f.route.id];
      if (d) {
        let h = await Rv(d, s);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Nv(
    r
      .flat(1)
      .filter(xv)
      .filter((f) => f.rel === 'stylesheet' || f.rel === 'preload')
      .map((f) => (f.rel === 'stylesheet' ? { ...f, rel: 'prefetch', as: 'style' } : { ...f, rel: 'prefetch' }))
  );
}
function zh(a, c, s, r, f, d) {
  let h = (p, y) => (s[y] ? p.route.id !== s[y].route.id : !0),
    v = (p, y) => {
      var b;
      return (
        s[y].pathname !== p.pathname ||
        (((b = s[y].route.path) == null ? void 0 : b.endsWith('*')) && s[y].params['*'] !== p.params['*'])
      );
    };
  return d === 'assets'
    ? c.filter((p, y) => h(p, y) || v(p, y))
    : d === 'data'
    ? c.filter((p, y) => {
        var D;
        let b = r.routes[p.route.id];
        if (!b || !b.hasLoader) return !1;
        if (h(p, y) || v(p, y)) return !0;
        if (p.route.shouldRevalidate) {
          let z = p.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((D = s[0]) == null ? void 0 : D.params) || {},
            nextUrl: new URL(a, window.origin),
            nextParams: p.params,
            defaultShouldRevalidate: !0
          });
          if (typeof z == 'boolean') return z;
        }
        return !0;
      })
    : [];
}
function Cv(a, c, { includeHydrateFallback: s } = {}) {
  return Dv(
    a
      .map((r) => {
        let f = c.routes[r.route.id];
        if (!f) return [];
        let d = [f.module];
        return (
          f.clientActionModule && (d = d.concat(f.clientActionModule)),
          f.clientLoaderModule && (d = d.concat(f.clientLoaderModule)),
          s && f.hydrateFallbackModule && (d = d.concat(f.hydrateFallbackModule)),
          f.imports && (d = d.concat(f.imports)),
          d
        );
      })
      .flat(1)
  );
}
function Dv(a) {
  return [...new Set(a)];
}
function _v(a) {
  let c = {},
    s = Object.keys(a).sort();
  for (let r of s) c[r] = a[r];
  return c;
}
function Nv(a, c) {
  let s = new Set();
  return (
    new Set(c),
    a.reduce((r, f) => {
      let d = JSON.stringify(_v(f));
      return s.has(d) || (s.add(d), r.push({ key: d, link: f })), r;
    }, [])
  );
}
function Uv(a, c) {
  let s = typeof a == 'string' ? new URL(a, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin) : a;
  return (
    s.pathname === '/'
      ? (s.pathname = '_root.data')
      : c && ml(s.pathname, c) === '/'
      ? (s.pathname = `${c.replace(/\/$/, '')}/_root.data`)
      : (s.pathname = `${s.pathname.replace(/\/$/, '')}.data`),
    s
  );
}
function fm() {
  let a = x.useContext(ea);
  return Os(a, 'You must render this element inside a <DataRouterContext.Provider> element'), a;
}
function zv() {
  let a = x.useContext(Li);
  return Os(a, 'You must render this element inside a <DataRouterStateContext.Provider> element'), a;
}
var Cs = x.createContext(void 0);
Cs.displayName = 'FrameworkContext';
function om() {
  let a = x.useContext(Cs);
  return Os(a, 'You must render this element inside a <HydratedRouter> element'), a;
}
function wv(a, c) {
  let s = x.useContext(Cs),
    [r, f] = x.useState(!1),
    [d, h] = x.useState(!1),
    { onFocus: v, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: D } = c,
    z = x.useRef(null);
  x.useEffect(() => {
    if ((a === 'render' && h(!0), a === 'viewport')) {
      let w = (U) => {
          U.forEach((Y) => {
            h(Y.isIntersecting);
          });
        },
        N = new IntersectionObserver(w, { threshold: 0.5 });
      return (
        z.current && N.observe(z.current),
        () => {
          N.disconnect();
        }
      );
    }
  }, [a]),
    x.useEffect(() => {
      if (r) {
        let w = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [r]);
  let L = () => {
      f(!0);
    },
    O = () => {
      f(!1), h(!1);
    };
  return s
    ? a !== 'intent'
      ? [d, z, {}]
      : [
          d,
          z,
          {
            onFocus: au(v, L),
            onBlur: au(p, O),
            onMouseEnter: au(y, L),
            onMouseLeave: au(b, O),
            onTouchStart: au(D, L)
          }
        ]
    : [!1, z, {}];
}
function au(a, c) {
  return (s) => {
    a && a(s), s.defaultPrevented || c(s);
  };
}
function Mv({ page: a, ...c }) {
  let { router: s } = fm(),
    r = x.useMemo(() => Wh(s.routes, a, s.basename), [s.routes, a, s.basename]);
  return r ? x.createElement(Bv, { page: a, matches: r, ...c }) : null;
}
function jv(a) {
  let { manifest: c, routeModules: s } = om(),
    [r, f] = x.useState([]);
  return (
    x.useEffect(() => {
      let d = !1;
      return (
        Ov(a, c, s).then((h) => {
          d || f(h);
        }),
        () => {
          d = !0;
        }
      );
    }, [a, c, s]),
    r
  );
}
function Bv({ page: a, matches: c, ...s }) {
  let r = mn(),
    { manifest: f, routeModules: d } = om(),
    { basename: h } = fm(),
    { loaderData: v, matches: p } = zv(),
    y = x.useMemo(() => zh(a, c, p, f, r, 'data'), [a, c, p, f, r]),
    b = x.useMemo(() => zh(a, c, p, f, r, 'assets'), [a, c, p, f, r]),
    D = x.useMemo(() => {
      if (a === r.pathname + r.search + r.hash) return [];
      let O = new Set(),
        w = !1;
      if (
        (c.forEach((U) => {
          var V;
          let Y = f.routes[U.route.id];
          !Y ||
            !Y.hasLoader ||
            ((!y.some((ae) => ae.route.id === U.route.id) &&
              U.route.id in v &&
              (V = d[U.route.id]) != null &&
              V.shouldRevalidate) ||
            Y.hasClientLoader
              ? (w = !0)
              : O.add(U.route.id));
        }),
        O.size === 0)
      )
        return [];
      let N = Uv(a, h);
      return (
        w &&
          O.size > 0 &&
          N.searchParams.set(
            '_routes',
            c
              .filter((U) => O.has(U.route.id))
              .map((U) => U.route.id)
              .join(',')
          ),
        [N.pathname + N.search]
      );
    }, [h, v, r, f, y, c, a, d]),
    z = x.useMemo(() => Cv(b, f), [b, f]),
    L = jv(b);
  return x.createElement(
    x.Fragment,
    null,
    D.map((O) => x.createElement('link', { key: O, rel: 'prefetch', as: 'fetch', href: O, ...s })),
    z.map((O) => x.createElement('link', { key: O, rel: 'modulepreload', href: O, ...s })),
    L.map(({ key: O, link: w }) => x.createElement('link', { key: O, ...w }))
  );
}
function Hv(...a) {
  return (c) => {
    a.forEach((s) => {
      typeof s == 'function' ? s(c) : s != null && (s.current = c);
    });
  };
}
var dm = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  dm && (window.__reactRouterVersion = '7.3.0');
} catch {}
function Lv({ basename: a, children: c, window: s }) {
  let r = x.useRef();
  r.current == null && (r.current = xp({ window: s, v5Compat: !0 }));
  let f = r.current,
    [d, h] = x.useState({ action: f.action, location: f.location }),
    v = x.useCallback(
      (p) => {
        x.startTransition(() => h(p));
      },
      [h]
    );
  return (
    x.useLayoutEffect(() => f.listen(v), [f, v]),
    x.createElement(mv, { basename: a, children: c, location: d.location, navigationType: d.action, navigator: f })
  );
}
var hm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ct = x.forwardRef(function (
    {
      onClick: c,
      discover: s = 'render',
      prefetch: r = 'none',
      relative: f,
      reloadDocument: d,
      replace: h,
      state: v,
      target: p,
      to: y,
      preventScrollReset: b,
      viewTransition: D,
      ...z
    },
    L
  ) {
    let { basename: O } = x.useContext(kt),
      w = typeof y == 'string' && hm.test(y),
      N,
      U = !1;
    if (typeof y == 'string' && w && ((N = y), dm))
      try {
        let Q = new URL(window.location.href),
          ue = y.startsWith('//') ? new URL(Q.protocol + y) : new URL(y),
          Pe = ml(ue.pathname, O);
        ue.origin === Q.origin && Pe != null ? (y = Pe + ue.search + ue.hash) : (U = !0);
      } catch {
        Kt(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let Y = Wp(y, { relative: f }),
      [V, ae, k] = wv(r, z),
      ye = Vv(y, { replace: h, state: v, target: p, preventScrollReset: b, relative: f, viewTransition: D });
    function Re(Q) {
      c && c(Q), Q.defaultPrevented || ye(Q);
    }
    let ze = x.createElement('a', {
      ...z,
      ...k,
      'href': N || Y,
      'onClick': U || d ? c : Re,
      'ref': Hv(L, ae),
      'target': p,
      'data-discover': !w && s === 'render' ? 'true' : void 0
    });
    return V && !w ? x.createElement(x.Fragment, null, ze, x.createElement(Mv, { page: Y })) : ze;
  });
Ct.displayName = 'Link';
var qv = x.forwardRef(function (
  {
    'aria-current': c = 'page',
    'caseSensitive': s = !1,
    'className': r = '',
    'end': f = !1,
    'style': d,
    'to': h,
    'viewTransition': v,
    'children': p,
    ...y
  },
  b
) {
  let D = ou(h, { relative: y.relative }),
    z = mn(),
    L = x.useContext(Li),
    { navigator: O, basename: w } = x.useContext(kt),
    N = L != null && kv(D) && v === !0,
    U = O.encodeLocation ? O.encodeLocation(D).pathname : D.pathname,
    Y = z.pathname,
    V = L && L.navigation && L.navigation.location ? L.navigation.location.pathname : null;
  s || ((Y = Y.toLowerCase()), (V = V ? V.toLowerCase() : null), (U = U.toLowerCase())), V && w && (V = ml(V, w) || V);
  const ae = U !== '/' && U.endsWith('/') ? U.length - 1 : U.length;
  let k = Y === U || (!f && Y.startsWith(U) && Y.charAt(ae) === '/'),
    ye = V != null && (V === U || (!f && V.startsWith(U) && V.charAt(U.length) === '/')),
    Re = { isActive: k, isPending: ye, isTransitioning: N },
    ze = k ? c : void 0,
    Q;
  typeof r == 'function'
    ? (Q = r(Re))
    : (Q = [r, k ? 'active' : null, ye ? 'pending' : null, N ? 'transitioning' : null].filter(Boolean).join(' '));
  let ue = typeof d == 'function' ? d(Re) : d;
  return x.createElement(
    Ct,
    { ...y, 'aria-current': ze, 'className': Q, 'ref': b, 'style': ue, 'to': h, 'viewTransition': v },
    typeof p == 'function' ? p(Re) : p
  );
});
qv.displayName = 'NavLink';
var Yv = x.forwardRef(
  (
    {
      discover: a = 'render',
      fetcherKey: c,
      navigate: s,
      reloadDocument: r,
      replace: f,
      state: d,
      method: h = Ni,
      action: v,
      onSubmit: p,
      relative: y,
      preventScrollReset: b,
      viewTransition: D,
      ...z
    },
    L
  ) => {
    let O = Zv(),
      w = Kv(v, { relative: y }),
      N = h.toLowerCase() === 'get' ? 'get' : 'post',
      U = typeof v == 'string' && hm.test(v),
      Y = (V) => {
        if ((p && p(V), V.defaultPrevented)) return;
        V.preventDefault();
        let ae = V.nativeEvent.submitter,
          k = (ae == null ? void 0 : ae.getAttribute('formmethod')) || h;
        O(ae || V.currentTarget, {
          fetcherKey: c,
          method: k,
          navigate: s,
          replace: f,
          state: d,
          relative: y,
          preventScrollReset: b,
          viewTransition: D
        });
      };
    return x.createElement('form', {
      'ref': L,
      'method': N,
      'action': w,
      'onSubmit': r ? p : Y,
      ...z,
      'data-discover': !U && a === 'render' ? 'true' : void 0
    });
  }
);
Yv.displayName = 'Form';
function Gv(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function mm(a) {
  let c = x.useContext(ea);
  return De(c, Gv(a)), c;
}
function Vv(a, { target: c, replace: s, state: r, preventScrollReset: f, relative: d, viewTransition: h } = {}) {
  let v = fu(),
    p = mn(),
    y = ou(a, { relative: d });
  return x.useCallback(
    (b) => {
      if (Sv(b, c)) {
        b.preventDefault();
        let D = s !== void 0 ? s : iu(p) === iu(y);
        v(a, { replace: D, state: r, preventScrollReset: f, relative: d, viewTransition: h });
      }
    },
    [p, v, y, s, r, c, a, f, d, h]
  );
}
var Xv = 0,
  Qv = () => `__${String(++Xv)}__`;
function Zv() {
  let { router: a } = mm('useSubmit'),
    { basename: c } = x.useContext(kt),
    s = fv();
  return x.useCallback(
    async (r, f = {}) => {
      let { action: d, method: h, encType: v, formData: p, body: y } = Av(r, c);
      if (f.navigate === !1) {
        let b = f.fetcherKey || Qv();
        await a.fetch(b, s, f.action || d, {
          preventScrollReset: f.preventScrollReset,
          formData: p,
          body: y,
          formMethod: f.method || h,
          formEncType: f.encType || v,
          flushSync: f.flushSync
        });
      } else
        await a.navigate(f.action || d, {
          preventScrollReset: f.preventScrollReset,
          formData: p,
          body: y,
          formMethod: f.method || h,
          formEncType: f.encType || v,
          replace: f.replace,
          state: f.state,
          fromRouteId: s,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition
        });
    },
    [a, c, s]
  );
}
function Kv(a, { relative: c } = {}) {
  let { basename: s } = x.useContext(kt),
    r = x.useContext(jt);
  De(r, 'useFormAction must be used inside a RouteContext');
  let [f] = r.matches.slice(-1),
    d = { ...ou(a || '.', { relative: c }) },
    h = mn();
  if (a == null) {
    d.search = h.search;
    let v = new URLSearchParams(d.search),
      p = v.getAll('index');
    if (p.some((b) => b === '')) {
      v.delete('index'), p.filter((D) => D).forEach((D) => v.append('index', D));
      let b = v.toString();
      d.search = b ? `?${b}` : '';
    }
  }
  return (
    (!a || a === '.') && f.route.index && (d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index'),
    s !== '/' && (d.pathname = d.pathname === '/' ? s : hl([s, d.pathname])),
    iu(d)
  );
}
function kv(a, c = {}) {
  let s = x.useContext(nm);
  De(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = mm('useViewTransitionState'),
    f = ou(a, { relative: c.relative });
  if (!s.isTransitioning) return !1;
  let d = ml(s.currentLocation.pathname, r) || s.currentLocation.pathname,
    h = ml(s.nextLocation.pathname, r) || s.nextLocation.pathname;
  return ji(f.pathname, h) != null || ji(f.pathname, d) != null;
}
new TextEncoder();
function ym(a, c) {
  return function () {
    return a.apply(c, arguments);
  };
}
const { toString: Jv } = Object.prototype,
  { getPrototypeOf: Ds } = Object,
  Yi = ((a) => (c) => {
    const s = Jv.call(c);
    return a[s] || (a[s] = s.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Bt = (a) => ((a = a.toLowerCase()), (c) => Yi(c) === a),
  Gi = (a) => (c) => typeof c === a,
  { isArray: ta } = Array,
  cu = Gi('undefined');
function $v(a) {
  return (
    a !== null &&
    !cu(a) &&
    a.constructor !== null &&
    !cu(a.constructor) &&
    mt(a.constructor.isBuffer) &&
    a.constructor.isBuffer(a)
  );
}
const pm = Bt('ArrayBuffer');
function Fv(a) {
  let c;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (c = ArrayBuffer.isView(a)) : (c = a && a.buffer && pm(a.buffer)),
    c
  );
}
const Wv = Gi('string'),
  mt = Gi('function'),
  vm = Gi('number'),
  Vi = (a) => a !== null && typeof a == 'object',
  Pv = (a) => a === !0 || a === !1,
  zi = (a) => {
    if (Yi(a) !== 'object') return !1;
    const c = Ds(a);
    return (
      (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) &&
      !(Symbol.toStringTag in a) &&
      !(Symbol.iterator in a)
    );
  },
  Iv = Bt('Date'),
  eg = Bt('File'),
  tg = Bt('Blob'),
  lg = Bt('FileList'),
  ng = (a) => Vi(a) && mt(a.pipe),
  ag = (a) => {
    let c;
    return (
      a &&
      ((typeof FormData == 'function' && a instanceof FormData) ||
        (mt(a.append) &&
          ((c = Yi(a)) === 'formdata' || (c === 'object' && mt(a.toString) && a.toString() === '[object FormData]'))))
    );
  },
  ug = Bt('URLSearchParams'),
  [ig, cg, rg, sg] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(Bt),
  fg = (a) => (a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function du(a, c, { allOwnKeys: s = !1 } = {}) {
  if (a === null || typeof a > 'u') return;
  let r, f;
  if ((typeof a != 'object' && (a = [a]), ta(a))) for (r = 0, f = a.length; r < f; r++) c.call(null, a[r], r, a);
  else {
    const d = s ? Object.getOwnPropertyNames(a) : Object.keys(a),
      h = d.length;
    let v;
    for (r = 0; r < h; r++) (v = d[r]), c.call(null, a[v], v, a);
  }
}
function gm(a, c) {
  c = c.toLowerCase();
  const s = Object.keys(a);
  let r = s.length,
    f;
  for (; r-- > 0; ) if (((f = s[r]), c === f.toLowerCase())) return f;
  return null;
}
const fn = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global,
  bm = (a) => !cu(a) && a !== fn;
function ps() {
  const { caseless: a } = (bm(this) && this) || {},
    c = {},
    s = (r, f) => {
      const d = (a && gm(c, f)) || f;
      zi(c[d]) && zi(r) ? (c[d] = ps(c[d], r)) : zi(r) ? (c[d] = ps({}, r)) : ta(r) ? (c[d] = r.slice()) : (c[d] = r);
    };
  for (let r = 0, f = arguments.length; r < f; r++) arguments[r] && du(arguments[r], s);
  return c;
}
const og = (a, c, s, { allOwnKeys: r } = {}) => (
    du(
      c,
      (f, d) => {
        s && mt(f) ? (a[d] = ym(f, s)) : (a[d] = f);
      },
      { allOwnKeys: r }
    ),
    a
  ),
  dg = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a),
  hg = (a, c, s, r) => {
    (a.prototype = Object.create(c.prototype, r)),
      (a.prototype.constructor = a),
      Object.defineProperty(a, 'super', { value: c.prototype }),
      s && Object.assign(a.prototype, s);
  },
  mg = (a, c, s, r) => {
    let f, d, h;
    const v = {};
    if (((c = c || {}), a == null)) return c;
    do {
      for (f = Object.getOwnPropertyNames(a), d = f.length; d-- > 0; )
        (h = f[d]), (!r || r(h, a, c)) && !v[h] && ((c[h] = a[h]), (v[h] = !0));
      a = s !== !1 && Ds(a);
    } while (a && (!s || s(a, c)) && a !== Object.prototype);
    return c;
  },
  yg = (a, c, s) => {
    (a = String(a)), (s === void 0 || s > a.length) && (s = a.length), (s -= c.length);
    const r = a.indexOf(c, s);
    return r !== -1 && r === s;
  },
  pg = (a) => {
    if (!a) return null;
    if (ta(a)) return a;
    let c = a.length;
    if (!vm(c)) return null;
    const s = new Array(c);
    for (; c-- > 0; ) s[c] = a[c];
    return s;
  },
  vg = (
    (a) => (c) =>
      a && c instanceof a
  )(typeof Uint8Array < 'u' && Ds(Uint8Array)),
  gg = (a, c) => {
    const r = (a && a[Symbol.iterator]).call(a);
    let f;
    for (; (f = r.next()) && !f.done; ) {
      const d = f.value;
      c.call(a, d[0], d[1]);
    }
  },
  bg = (a, c) => {
    let s;
    const r = [];
    for (; (s = a.exec(c)) !== null; ) r.push(s);
    return r;
  },
  Sg = Bt('HTMLFormElement'),
  Eg = (a) =>
    a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, r, f) {
      return r.toUpperCase() + f;
    }),
  wh = (
    ({ hasOwnProperty: a }) =>
    (c, s) =>
      a.call(c, s)
  )(Object.prototype),
  Tg = Bt('RegExp'),
  Sm = (a, c) => {
    const s = Object.getOwnPropertyDescriptors(a),
      r = {};
    du(s, (f, d) => {
      let h;
      (h = c(f, d, a)) !== !1 && (r[d] = h || f);
    }),
      Object.defineProperties(a, r);
  },
  Ag = (a) => {
    Sm(a, (c, s) => {
      if (mt(a) && ['arguments', 'caller', 'callee'].indexOf(s) !== -1) return !1;
      const r = a[s];
      if (mt(r)) {
        if (((c.enumerable = !1), 'writable' in c)) {
          c.writable = !1;
          return;
        }
        c.set ||
          (c.set = () => {
            throw Error("Can not rewrite read-only method '" + s + "'");
          });
      }
    });
  },
  Rg = (a, c) => {
    const s = {},
      r = (f) => {
        f.forEach((d) => {
          s[d] = !0;
        });
      };
    return ta(a) ? r(a) : r(String(a).split(c)), s;
  },
  xg = () => {},
  Og = (a, c) => (a != null && Number.isFinite((a = +a)) ? a : c);
function Cg(a) {
  return !!(a && mt(a.append) && a[Symbol.toStringTag] === 'FormData' && a[Symbol.iterator]);
}
const Dg = (a) => {
    const c = new Array(10),
      s = (r, f) => {
        if (Vi(r)) {
          if (c.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            c[f] = r;
            const d = ta(r) ? [] : {};
            return (
              du(r, (h, v) => {
                const p = s(h, f + 1);
                !cu(p) && (d[v] = p);
              }),
              (c[f] = void 0),
              d
            );
          }
        }
        return r;
      };
    return s(a, 0);
  },
  _g = Bt('AsyncFunction'),
  Ng = (a) => a && (Vi(a) || mt(a)) && mt(a.then) && mt(a.catch),
  Em = ((a, c) =>
    a
      ? setImmediate
      : c
      ? ((s, r) => (
          fn.addEventListener(
            'message',
            ({ source: f, data: d }) => {
              f === fn && d === s && r.length && r.shift()();
            },
            !1
          ),
          (f) => {
            r.push(f), fn.postMessage(s, '*');
          }
        ))(`axios@${Math.random()}`, [])
      : (s) => setTimeout(s))(typeof setImmediate == 'function', mt(fn.postMessage)),
  Ug = typeof queueMicrotask < 'u' ? queueMicrotask.bind(fn) : (typeof process < 'u' && process.nextTick) || Em,
  M = {
    isArray: ta,
    isArrayBuffer: pm,
    isBuffer: $v,
    isFormData: ag,
    isArrayBufferView: Fv,
    isString: Wv,
    isNumber: vm,
    isBoolean: Pv,
    isObject: Vi,
    isPlainObject: zi,
    isReadableStream: ig,
    isRequest: cg,
    isResponse: rg,
    isHeaders: sg,
    isUndefined: cu,
    isDate: Iv,
    isFile: eg,
    isBlob: tg,
    isRegExp: Tg,
    isFunction: mt,
    isStream: ng,
    isURLSearchParams: ug,
    isTypedArray: vg,
    isFileList: lg,
    forEach: du,
    merge: ps,
    extend: og,
    trim: fg,
    stripBOM: dg,
    inherits: hg,
    toFlatObject: mg,
    kindOf: Yi,
    kindOfTest: Bt,
    endsWith: yg,
    toArray: pg,
    forEachEntry: gg,
    matchAll: bg,
    isHTMLForm: Sg,
    hasOwnProperty: wh,
    hasOwnProp: wh,
    reduceDescriptors: Sm,
    freezeMethods: Ag,
    toObjectSet: Rg,
    toCamelCase: Eg,
    noop: xg,
    toFiniteNumber: Og,
    findKey: gm,
    global: fn,
    isContextDefined: bm,
    isSpecCompliantForm: Cg,
    toJSONObject: Dg,
    isAsyncFn: _g,
    isThenable: Ng,
    setImmediate: Em,
    asap: Ug
  };
function le(a, c, s, r, f) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = a),
    (this.name = 'AxiosError'),
    c && (this.code = c),
    s && (this.config = s),
    r && (this.request = r),
    f && ((this.response = f), (this.status = f.status ? f.status : null));
}
M.inherits(le, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: M.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Tm = le.prototype,
  Am = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach((a) => {
  Am[a] = { value: a };
});
Object.defineProperties(le, Am);
Object.defineProperty(Tm, 'isAxiosError', { value: !0 });
le.from = (a, c, s, r, f, d) => {
  const h = Object.create(Tm);
  return (
    M.toFlatObject(
      a,
      h,
      function (p) {
        return p !== Error.prototype;
      },
      (v) => v !== 'isAxiosError'
    ),
    le.call(h, a.message, c, s, r, f),
    (h.cause = a),
    (h.name = a.name),
    d && Object.assign(h, d),
    h
  );
};
const zg = null;
function vs(a) {
  return M.isPlainObject(a) || M.isArray(a);
}
function Rm(a) {
  return M.endsWith(a, '[]') ? a.slice(0, -2) : a;
}
function Mh(a, c, s) {
  return a
    ? a
        .concat(c)
        .map(function (f, d) {
          return (f = Rm(f)), !s && d ? '[' + f + ']' : f;
        })
        .join(s ? '.' : '')
    : c;
}
function wg(a) {
  return M.isArray(a) && !a.some(vs);
}
const Mg = M.toFlatObject(M, {}, null, function (c) {
  return /^is[A-Z]/.test(c);
});
function Xi(a, c, s) {
  if (!M.isObject(a)) throw new TypeError('target must be an object');
  (c = c || new FormData()),
    (s = M.toFlatObject(s, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (w, N) {
      return !M.isUndefined(N[w]);
    }));
  const r = s.metaTokens,
    f = s.visitor || b,
    d = s.dots,
    h = s.indexes,
    p = (s.Blob || (typeof Blob < 'u' && Blob)) && M.isSpecCompliantForm(c);
  if (!M.isFunction(f)) throw new TypeError('visitor must be a function');
  function y(O) {
    if (O === null) return '';
    if (M.isDate(O)) return O.toISOString();
    if (!p && M.isBlob(O)) throw new le('Blob is not supported. Use a Buffer instead.');
    return M.isArrayBuffer(O) || M.isTypedArray(O)
      ? p && typeof Blob == 'function'
        ? new Blob([O])
        : Buffer.from(O)
      : O;
  }
  function b(O, w, N) {
    let U = O;
    if (O && !N && typeof O == 'object') {
      if (M.endsWith(w, '{}')) (w = r ? w : w.slice(0, -2)), (O = JSON.stringify(O));
      else if ((M.isArray(O) && wg(O)) || ((M.isFileList(O) || M.endsWith(w, '[]')) && (U = M.toArray(O))))
        return (
          (w = Rm(w)),
          U.forEach(function (V, ae) {
            !(M.isUndefined(V) || V === null) && c.append(h === !0 ? Mh([w], ae, d) : h === null ? w : w + '[]', y(V));
          }),
          !1
        );
    }
    return vs(O) ? !0 : (c.append(Mh(N, w, d), y(O)), !1);
  }
  const D = [],
    z = Object.assign(Mg, { defaultVisitor: b, convertValue: y, isVisitable: vs });
  function L(O, w) {
    if (!M.isUndefined(O)) {
      if (D.indexOf(O) !== -1) throw Error('Circular reference detected in ' + w.join('.'));
      D.push(O),
        M.forEach(O, function (U, Y) {
          (!(M.isUndefined(U) || U === null) && f.call(c, U, M.isString(Y) ? Y.trim() : Y, w, z)) === !0 &&
            L(U, w ? w.concat(Y) : [Y]);
        }),
        D.pop();
    }
  }
  if (!M.isObject(a)) throw new TypeError('data must be an object');
  return L(a), c;
}
function jh(a) {
  const c = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function (r) {
    return c[r];
  });
}
function _s(a, c) {
  (this._pairs = []), a && Xi(a, this, c);
}
const xm = _s.prototype;
xm.append = function (c, s) {
  this._pairs.push([c, s]);
};
xm.toString = function (c) {
  const s = c
    ? function (r) {
        return c.call(this, r, jh);
      }
    : jh;
  return this._pairs
    .map(function (f) {
      return s(f[0]) + '=' + s(f[1]);
    }, '')
    .join('&');
};
function jg(a) {
  return encodeURIComponent(a)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Om(a, c, s) {
  if (!c) return a;
  const r = (s && s.encode) || jg;
  M.isFunction(s) && (s = { serialize: s });
  const f = s && s.serialize;
  let d;
  if ((f ? (d = f(c, s)) : (d = M.isURLSearchParams(c) ? c.toString() : new _s(c, s).toString(r)), d)) {
    const h = a.indexOf('#');
    h !== -1 && (a = a.slice(0, h)), (a += (a.indexOf('?') === -1 ? '?' : '&') + d);
  }
  return a;
}
class Bh {
  constructor() {
    this.handlers = [];
  }
  use(c, s, r) {
    return (
      this.handlers.push({
        fulfilled: c,
        rejected: s,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null
      }),
      this.handlers.length - 1
    );
  }
  eject(c) {
    this.handlers[c] && (this.handlers[c] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(c) {
    M.forEach(this.handlers, function (r) {
      r !== null && c(r);
    });
  }
}
const Cm = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  Bg = typeof URLSearchParams < 'u' ? URLSearchParams : _s,
  Hg = typeof FormData < 'u' ? FormData : null,
  Lg = typeof Blob < 'u' ? Blob : null,
  qg = {
    isBrowser: !0,
    classes: { URLSearchParams: Bg, FormData: Hg, Blob: Lg },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  },
  Ns = typeof window < 'u' && typeof document < 'u',
  gs = (typeof navigator == 'object' && navigator) || void 0,
  Yg = Ns && (!gs || ['ReactNative', 'NativeScript', 'NS'].indexOf(gs.product) < 0),
  Gg = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function',
  Vg = (Ns && window.location.href) || 'http://localhost',
  Xg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ns,
        hasStandardBrowserEnv: Yg,
        hasStandardBrowserWebWorkerEnv: Gg,
        navigator: gs,
        origin: Vg
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  We = { ...Xg, ...qg };
function Qg(a, c) {
  return Xi(
    a,
    new We.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (s, r, f, d) {
          return We.isNode && M.isBuffer(s)
            ? (this.append(r, s.toString('base64')), !1)
            : d.defaultVisitor.apply(this, arguments);
        }
      },
      c
    )
  );
}
function Zg(a) {
  return M.matchAll(/\w+|\[(\w*)]/g, a).map((c) => (c[0] === '[]' ? '' : c[1] || c[0]));
}
function Kg(a) {
  const c = {},
    s = Object.keys(a);
  let r;
  const f = s.length;
  let d;
  for (r = 0; r < f; r++) (d = s[r]), (c[d] = a[d]);
  return c;
}
function Dm(a) {
  function c(s, r, f, d) {
    let h = s[d++];
    if (h === '__proto__') return !0;
    const v = Number.isFinite(+h),
      p = d >= s.length;
    return (
      (h = !h && M.isArray(f) ? f.length : h),
      p
        ? (M.hasOwnProp(f, h) ? (f[h] = [f[h], r]) : (f[h] = r), !v)
        : ((!f[h] || !M.isObject(f[h])) && (f[h] = []), c(s, r, f[h], d) && M.isArray(f[h]) && (f[h] = Kg(f[h])), !v)
    );
  }
  if (M.isFormData(a) && M.isFunction(a.entries)) {
    const s = {};
    return (
      M.forEachEntry(a, (r, f) => {
        c(Zg(r), f, s, 0);
      }),
      s
    );
  }
  return null;
}
function kg(a, c, s) {
  if (M.isString(a))
    try {
      return (c || JSON.parse)(a), M.trim(a);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (s || JSON.stringify)(a);
}
const hu = {
  transitional: Cm,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (c, s) {
      const r = s.getContentType() || '',
        f = r.indexOf('application/json') > -1,
        d = M.isObject(c);
      if ((d && M.isHTMLForm(c) && (c = new FormData(c)), M.isFormData(c))) return f ? JSON.stringify(Dm(c)) : c;
      if (M.isArrayBuffer(c) || M.isBuffer(c) || M.isStream(c) || M.isFile(c) || M.isBlob(c) || M.isReadableStream(c))
        return c;
      if (M.isArrayBufferView(c)) return c.buffer;
      if (M.isURLSearchParams(c))
        return s.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), c.toString();
      let v;
      if (d) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1) return Qg(c, this.formSerializer).toString();
        if ((v = M.isFileList(c)) || r.indexOf('multipart/form-data') > -1) {
          const p = this.env && this.env.FormData;
          return Xi(v ? { 'files[]': c } : c, p && new p(), this.formSerializer);
        }
      }
      return d || f ? (s.setContentType('application/json', !1), kg(c)) : c;
    }
  ],
  transformResponse: [
    function (c) {
      const s = this.transitional || hu.transitional,
        r = s && s.forcedJSONParsing,
        f = this.responseType === 'json';
      if (M.isResponse(c) || M.isReadableStream(c)) return c;
      if (c && M.isString(c) && ((r && !this.responseType) || f)) {
        const h = !(s && s.silentJSONParsing) && f;
        try {
          return JSON.parse(c);
        } catch (v) {
          if (h) throw v.name === 'SyntaxError' ? le.from(v, le.ERR_BAD_RESPONSE, this, null, this.response) : v;
        }
      }
      return c;
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: We.classes.FormData, Blob: We.classes.Blob },
  validateStatus: function (c) {
    return c >= 200 && c < 300;
  },
  headers: { common: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': void 0 } }
};
M.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (a) => {
  hu.headers[a] = {};
});
const Jg = M.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ]),
  $g = (a) => {
    const c = {};
    let s, r, f;
    return (
      a &&
        a
          .split(
            `
`
          )
          .forEach(function (h) {
            (f = h.indexOf(':')),
              (s = h.substring(0, f).trim().toLowerCase()),
              (r = h.substring(f + 1).trim()),
              !(!s || (c[s] && Jg[s])) &&
                (s === 'set-cookie' ? (c[s] ? c[s].push(r) : (c[s] = [r])) : (c[s] = c[s] ? c[s] + ', ' + r : r));
          }),
      c
    );
  },
  Hh = Symbol('internals');
function uu(a) {
  return a && String(a).trim().toLowerCase();
}
function wi(a) {
  return a === !1 || a == null ? a : M.isArray(a) ? a.map(wi) : String(a);
}
function Fg(a) {
  const c = Object.create(null),
    s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = s.exec(a)); ) c[r[1]] = r[2];
  return c;
}
const Wg = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function fs(a, c, s, r, f) {
  if (M.isFunction(r)) return r.call(this, c, s);
  if ((f && (c = s), !!M.isString(c))) {
    if (M.isString(r)) return c.indexOf(r) !== -1;
    if (M.isRegExp(r)) return r.test(c);
  }
}
function Pg(a) {
  return a
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (c, s, r) => s.toUpperCase() + r);
}
function Ig(a, c) {
  const s = M.toCamelCase(' ' + c);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(a, r + s, {
      value: function (f, d, h) {
        return this[r].call(this, c, f, d, h);
      },
      configurable: !0
    });
  });
}
let it = class {
  constructor(c) {
    c && this.set(c);
  }
  set(c, s, r) {
    const f = this;
    function d(v, p, y) {
      const b = uu(p);
      if (!b) throw new Error('header name must be a non-empty string');
      const D = M.findKey(f, b);
      (!D || f[D] === void 0 || y === !0 || (y === void 0 && f[D] !== !1)) && (f[D || p] = wi(v));
    }
    const h = (v, p) => M.forEach(v, (y, b) => d(y, b, p));
    if (M.isPlainObject(c) || c instanceof this.constructor) h(c, s);
    else if (M.isString(c) && (c = c.trim()) && !Wg(c)) h($g(c), s);
    else if (M.isHeaders(c)) for (const [v, p] of c.entries()) d(p, v, r);
    else c != null && d(s, c, r);
    return this;
  }
  get(c, s) {
    if (((c = uu(c)), c)) {
      const r = M.findKey(this, c);
      if (r) {
        const f = this[r];
        if (!s) return f;
        if (s === !0) return Fg(f);
        if (M.isFunction(s)) return s.call(this, f, r);
        if (M.isRegExp(s)) return s.exec(f);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(c, s) {
    if (((c = uu(c)), c)) {
      const r = M.findKey(this, c);
      return !!(r && this[r] !== void 0 && (!s || fs(this, this[r], r, s)));
    }
    return !1;
  }
  delete(c, s) {
    const r = this;
    let f = !1;
    function d(h) {
      if (((h = uu(h)), h)) {
        const v = M.findKey(r, h);
        v && (!s || fs(r, r[v], v, s)) && (delete r[v], (f = !0));
      }
    }
    return M.isArray(c) ? c.forEach(d) : d(c), f;
  }
  clear(c) {
    const s = Object.keys(this);
    let r = s.length,
      f = !1;
    for (; r--; ) {
      const d = s[r];
      (!c || fs(this, this[d], d, c, !0)) && (delete this[d], (f = !0));
    }
    return f;
  }
  normalize(c) {
    const s = this,
      r = {};
    return (
      M.forEach(this, (f, d) => {
        const h = M.findKey(r, d);
        if (h) {
          (s[h] = wi(f)), delete s[d];
          return;
        }
        const v = c ? Pg(d) : String(d).trim();
        v !== d && delete s[d], (s[v] = wi(f)), (r[v] = !0);
      }),
      this
    );
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const s = Object.create(null);
    return (
      M.forEach(this, (r, f) => {
        r != null && r !== !1 && (s[f] = c && M.isArray(r) ? r.join(', ') : r);
      }),
      s
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([c, s]) => c + ': ' + s).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(c) {
    return c instanceof this ? c : new this(c);
  }
  static concat(c, ...s) {
    const r = new this(c);
    return s.forEach((f) => r.set(f)), r;
  }
  static accessor(c) {
    const r = (this[Hh] = this[Hh] = { accessors: {} }).accessors,
      f = this.prototype;
    function d(h) {
      const v = uu(h);
      r[v] || (Ig(f, h), (r[v] = !0));
    }
    return M.isArray(c) ? c.forEach(d) : d(c), this;
  }
};
it.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
M.reduceDescriptors(it.prototype, ({ value: a }, c) => {
  let s = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => a,
    set(r) {
      this[s] = r;
    }
  };
});
M.freezeMethods(it);
function os(a, c) {
  const s = this || hu,
    r = c || s,
    f = it.from(r.headers);
  let d = r.data;
  return (
    M.forEach(a, function (v) {
      d = v.call(s, d, f.normalize(), c ? c.status : void 0);
    }),
    f.normalize(),
    d
  );
}
function _m(a) {
  return !!(a && a.__CANCEL__);
}
function la(a, c, s) {
  le.call(this, a ?? 'canceled', le.ERR_CANCELED, c, s), (this.name = 'CanceledError');
}
M.inherits(la, le, { __CANCEL__: !0 });
function Nm(a, c, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status)
    ? a(s)
    : c(
        new le(
          'Request failed with status code ' + s.status,
          [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
          s.config,
          s.request,
          s
        )
      );
}
function e1(a) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
  return (c && c[1]) || '';
}
function t1(a, c) {
  a = a || 10;
  const s = new Array(a),
    r = new Array(a);
  let f = 0,
    d = 0,
    h;
  return (
    (c = c !== void 0 ? c : 1e3),
    function (p) {
      const y = Date.now(),
        b = r[d];
      h || (h = y), (s[f] = p), (r[f] = y);
      let D = d,
        z = 0;
      for (; D !== f; ) (z += s[D++]), (D = D % a);
      if (((f = (f + 1) % a), f === d && (d = (d + 1) % a), y - h < c)) return;
      const L = b && y - b;
      return L ? Math.round((z * 1e3) / L) : void 0;
    }
  );
}
function l1(a, c) {
  let s = 0,
    r = 1e3 / c,
    f,
    d;
  const h = (y, b = Date.now()) => {
    (s = b), (f = null), d && (clearTimeout(d), (d = null)), a.apply(null, y);
  };
  return [
    (...y) => {
      const b = Date.now(),
        D = b - s;
      D >= r
        ? h(y, b)
        : ((f = y),
          d ||
            (d = setTimeout(() => {
              (d = null), h(f);
            }, r - D)));
    },
    () => f && h(f)
  ];
}
const Bi = (a, c, s = 3) => {
    let r = 0;
    const f = t1(50, 250);
    return l1((d) => {
      const h = d.loaded,
        v = d.lengthComputable ? d.total : void 0,
        p = h - r,
        y = f(p),
        b = h <= v;
      r = h;
      const D = {
        loaded: h,
        total: v,
        progress: v ? h / v : void 0,
        bytes: p,
        rate: y || void 0,
        estimated: y && v && b ? (v - h) / y : void 0,
        event: d,
        lengthComputable: v != null,
        [c ? 'download' : 'upload']: !0
      };
      a(D);
    }, s);
  },
  Lh = (a, c) => {
    const s = a != null;
    return [(r) => c[0]({ lengthComputable: s, total: a, loaded: r }), c[1]];
  },
  qh =
    (a) =>
    (...c) =>
      M.asap(() => a(...c)),
  n1 = We.hasStandardBrowserEnv
    ? ((a, c) => (s) => (
        (s = new URL(s, We.origin)), a.protocol === s.protocol && a.host === s.host && (c || a.port === s.port)
      ))(new URL(We.origin), We.navigator && /(msie|trident)/i.test(We.navigator.userAgent))
    : () => !0,
  a1 = We.hasStandardBrowserEnv
    ? {
        write(a, c, s, r, f, d) {
          const h = [a + '=' + encodeURIComponent(c)];
          M.isNumber(s) && h.push('expires=' + new Date(s).toGMTString()),
            M.isString(r) && h.push('path=' + r),
            M.isString(f) && h.push('domain=' + f),
            d === !0 && h.push('secure'),
            (document.cookie = h.join('; '));
        },
        read(a) {
          const c = document.cookie.match(new RegExp('(^|;\\s*)(' + a + ')=([^;]*)'));
          return c ? decodeURIComponent(c[3]) : null;
        },
        remove(a) {
          this.write(a, '', Date.now() - 864e5);
        }
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {}
      };
function u1(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}
function i1(a, c) {
  return c ? a.replace(/\/?\/$/, '') + '/' + c.replace(/^\/+/, '') : a;
}
function Um(a, c, s) {
  let r = !u1(c);
  return (a && r) || s == !1 ? i1(a, c) : c;
}
const Yh = (a) => (a instanceof it ? { ...a } : a);
function dn(a, c) {
  c = c || {};
  const s = {};
  function r(y, b, D, z) {
    return M.isPlainObject(y) && M.isPlainObject(b)
      ? M.merge.call({ caseless: z }, y, b)
      : M.isPlainObject(b)
      ? M.merge({}, b)
      : M.isArray(b)
      ? b.slice()
      : b;
  }
  function f(y, b, D, z) {
    if (M.isUndefined(b)) {
      if (!M.isUndefined(y)) return r(void 0, y, D, z);
    } else return r(y, b, D, z);
  }
  function d(y, b) {
    if (!M.isUndefined(b)) return r(void 0, b);
  }
  function h(y, b) {
    if (M.isUndefined(b)) {
      if (!M.isUndefined(y)) return r(void 0, y);
    } else return r(void 0, b);
  }
  function v(y, b, D) {
    if (D in c) return r(y, b);
    if (D in a) return r(void 0, y);
  }
  const p = {
    url: d,
    method: d,
    data: d,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: v,
    headers: (y, b, D) => f(Yh(y), Yh(b), D, !0)
  };
  return (
    M.forEach(Object.keys(Object.assign({}, a, c)), function (b) {
      const D = p[b] || f,
        z = D(a[b], c[b], b);
      (M.isUndefined(z) && D !== v) || (s[b] = z);
    }),
    s
  );
}
const zm = (a) => {
    const c = dn({}, a);
    let { data: s, withXSRFToken: r, xsrfHeaderName: f, xsrfCookieName: d, headers: h, auth: v } = c;
    (c.headers = h = it.from(h)),
      (c.url = Om(Um(c.baseURL, c.url, c.allowAbsoluteUrls), a.params, a.paramsSerializer)),
      v &&
        h.set(
          'Authorization',
          'Basic ' + btoa((v.username || '') + ':' + (v.password ? unescape(encodeURIComponent(v.password)) : ''))
        );
    let p;
    if (M.isFormData(s)) {
      if (We.hasStandardBrowserEnv || We.hasStandardBrowserWebWorkerEnv) h.setContentType(void 0);
      else if ((p = h.getContentType()) !== !1) {
        const [y, ...b] = p
          ? p
              .split(';')
              .map((D) => D.trim())
              .filter(Boolean)
          : [];
        h.setContentType([y || 'multipart/form-data', ...b].join('; '));
      }
    }
    if (We.hasStandardBrowserEnv && (r && M.isFunction(r) && (r = r(c)), r || (r !== !1 && n1(c.url)))) {
      const y = f && d && a1.read(d);
      y && h.set(f, y);
    }
    return c;
  },
  c1 = typeof XMLHttpRequest < 'u',
  r1 =
    c1 &&
    function (a) {
      return new Promise(function (s, r) {
        const f = zm(a);
        let d = f.data;
        const h = it.from(f.headers).normalize();
        let { responseType: v, onUploadProgress: p, onDownloadProgress: y } = f,
          b,
          D,
          z,
          L,
          O;
        function w() {
          L && L(),
            O && O(),
            f.cancelToken && f.cancelToken.unsubscribe(b),
            f.signal && f.signal.removeEventListener('abort', b);
        }
        let N = new XMLHttpRequest();
        N.open(f.method.toUpperCase(), f.url, !0), (N.timeout = f.timeout);
        function U() {
          if (!N) return;
          const V = it.from('getAllResponseHeaders' in N && N.getAllResponseHeaders()),
            k = {
              data: !v || v === 'text' || v === 'json' ? N.responseText : N.response,
              status: N.status,
              statusText: N.statusText,
              headers: V,
              config: a,
              request: N
            };
          Nm(
            function (Re) {
              s(Re), w();
            },
            function (Re) {
              r(Re), w();
            },
            k
          ),
            (N = null);
        }
        'onloadend' in N
          ? (N.onloadend = U)
          : (N.onreadystatechange = function () {
              !N ||
                N.readyState !== 4 ||
                (N.status === 0 && !(N.responseURL && N.responseURL.indexOf('file:') === 0)) ||
                setTimeout(U);
            }),
          (N.onabort = function () {
            N && (r(new le('Request aborted', le.ECONNABORTED, a, N)), (N = null));
          }),
          (N.onerror = function () {
            r(new le('Network Error', le.ERR_NETWORK, a, N)), (N = null);
          }),
          (N.ontimeout = function () {
            let ae = f.timeout ? 'timeout of ' + f.timeout + 'ms exceeded' : 'timeout exceeded';
            const k = f.transitional || Cm;
            f.timeoutErrorMessage && (ae = f.timeoutErrorMessage),
              r(new le(ae, k.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED, a, N)),
              (N = null);
          }),
          d === void 0 && h.setContentType(null),
          'setRequestHeader' in N &&
            M.forEach(h.toJSON(), function (ae, k) {
              N.setRequestHeader(k, ae);
            }),
          M.isUndefined(f.withCredentials) || (N.withCredentials = !!f.withCredentials),
          v && v !== 'json' && (N.responseType = f.responseType),
          y && (([z, O] = Bi(y, !0)), N.addEventListener('progress', z)),
          p &&
            N.upload &&
            (([D, L] = Bi(p)), N.upload.addEventListener('progress', D), N.upload.addEventListener('loadend', L)),
          (f.cancelToken || f.signal) &&
            ((b = (V) => {
              N && (r(!V || V.type ? new la(null, a, N) : V), N.abort(), (N = null));
            }),
            f.cancelToken && f.cancelToken.subscribe(b),
            f.signal && (f.signal.aborted ? b() : f.signal.addEventListener('abort', b)));
        const Y = e1(f.url);
        if (Y && We.protocols.indexOf(Y) === -1) {
          r(new le('Unsupported protocol ' + Y + ':', le.ERR_BAD_REQUEST, a));
          return;
        }
        N.send(d || null);
      });
    },
  s1 = (a, c) => {
    const { length: s } = (a = a ? a.filter(Boolean) : []);
    if (c || s) {
      let r = new AbortController(),
        f;
      const d = function (y) {
        if (!f) {
          (f = !0), v();
          const b = y instanceof Error ? y : this.reason;
          r.abort(b instanceof le ? b : new la(b instanceof Error ? b.message : b));
        }
      };
      let h =
        c &&
        setTimeout(() => {
          (h = null), d(new le(`timeout ${c} of ms exceeded`, le.ETIMEDOUT));
        }, c);
      const v = () => {
        a &&
          (h && clearTimeout(h),
          (h = null),
          a.forEach((y) => {
            y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener('abort', d);
          }),
          (a = null));
      };
      a.forEach((y) => y.addEventListener('abort', d));
      const { signal: p } = r;
      return (p.unsubscribe = () => M.asap(v)), p;
    }
  },
  f1 = function* (a, c) {
    let s = a.byteLength;
    if (s < c) {
      yield a;
      return;
    }
    let r = 0,
      f;
    for (; r < s; ) (f = r + c), yield a.slice(r, f), (r = f);
  },
  o1 = async function* (a, c) {
    for await (const s of d1(a)) yield* f1(s, c);
  },
  d1 = async function* (a) {
    if (a[Symbol.asyncIterator]) {
      yield* a;
      return;
    }
    const c = a.getReader();
    try {
      for (;;) {
        const { done: s, value: r } = await c.read();
        if (s) break;
        yield r;
      }
    } finally {
      await c.cancel();
    }
  },
  Gh = (a, c, s, r) => {
    const f = o1(a, c);
    let d = 0,
      h,
      v = (p) => {
        h || ((h = !0), r && r(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: y, value: b } = await f.next();
            if (y) {
              v(), p.close();
              return;
            }
            let D = b.byteLength;
            if (s) {
              let z = (d += D);
              s(z);
            }
            p.enqueue(new Uint8Array(b));
          } catch (y) {
            throw (v(y), y);
          }
        },
        cancel(p) {
          return v(p), f.return();
        }
      },
      { highWaterMark: 2 }
    );
  },
  Qi = typeof fetch == 'function' && typeof Request == 'function' && typeof Response == 'function',
  wm = Qi && typeof ReadableStream == 'function',
  h1 =
    Qi &&
    (typeof TextEncoder == 'function'
      ? (
          (a) => (c) =>
            a.encode(c)
        )(new TextEncoder())
      : async (a) => new Uint8Array(await new Response(a).arrayBuffer())),
  Mm = (a, ...c) => {
    try {
      return !!a(...c);
    } catch {
      return !1;
    }
  },
  m1 =
    wm &&
    Mm(() => {
      let a = !1;
      const c = new Request(We.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (a = !0), 'half';
        }
      }).headers.has('Content-Type');
      return a && !c;
    }),
  Vh = 64 * 1024,
  bs = wm && Mm(() => M.isReadableStream(new Response('').body)),
  Hi = { stream: bs && ((a) => a.body) };
Qi &&
  ((a) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((c) => {
      !Hi[c] &&
        (Hi[c] = M.isFunction(a[c])
          ? (s) => s[c]()
          : (s, r) => {
              throw new le(`Response type '${c}' is not supported`, le.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const y1 = async (a) => {
    if (a == null) return 0;
    if (M.isBlob(a)) return a.size;
    if (M.isSpecCompliantForm(a))
      return (await new Request(We.origin, { method: 'POST', body: a }).arrayBuffer()).byteLength;
    if (M.isArrayBufferView(a) || M.isArrayBuffer(a)) return a.byteLength;
    if ((M.isURLSearchParams(a) && (a = a + ''), M.isString(a))) return (await h1(a)).byteLength;
  },
  p1 = async (a, c) => {
    const s = M.toFiniteNumber(a.getContentLength());
    return s ?? y1(c);
  },
  v1 =
    Qi &&
    (async (a) => {
      let {
        url: c,
        method: s,
        data: r,
        signal: f,
        cancelToken: d,
        timeout: h,
        onDownloadProgress: v,
        onUploadProgress: p,
        responseType: y,
        headers: b,
        withCredentials: D = 'same-origin',
        fetchOptions: z
      } = zm(a);
      y = y ? (y + '').toLowerCase() : 'text';
      let L = s1([f, d && d.toAbortSignal()], h),
        O;
      const w =
        L &&
        L.unsubscribe &&
        (() => {
          L.unsubscribe();
        });
      let N;
      try {
        if (p && m1 && s !== 'get' && s !== 'head' && (N = await p1(b, r)) !== 0) {
          let k = new Request(c, { method: 'POST', body: r, duplex: 'half' }),
            ye;
          if ((M.isFormData(r) && (ye = k.headers.get('content-type')) && b.setContentType(ye), k.body)) {
            const [Re, ze] = Lh(N, Bi(qh(p)));
            r = Gh(k.body, Vh, Re, ze);
          }
        }
        M.isString(D) || (D = D ? 'include' : 'omit');
        const U = 'credentials' in Request.prototype;
        O = new Request(c, {
          ...z,
          signal: L,
          method: s.toUpperCase(),
          headers: b.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: U ? D : void 0
        });
        let Y = await fetch(O);
        const V = bs && (y === 'stream' || y === 'response');
        if (bs && (v || (V && w))) {
          const k = {};
          ['status', 'statusText', 'headers'].forEach((Q) => {
            k[Q] = Y[Q];
          });
          const ye = M.toFiniteNumber(Y.headers.get('content-length')),
            [Re, ze] = (v && Lh(ye, Bi(qh(v), !0))) || [];
          Y = new Response(
            Gh(Y.body, Vh, Re, () => {
              ze && ze(), w && w();
            }),
            k
          );
        }
        y = y || 'text';
        let ae = await Hi[M.findKey(Hi, y) || 'text'](Y, a);
        return (
          !V && w && w(),
          await new Promise((k, ye) => {
            Nm(k, ye, {
              data: ae,
              headers: it.from(Y.headers),
              status: Y.status,
              statusText: Y.statusText,
              config: a,
              request: O
            });
          })
        );
      } catch (U) {
        throw (
          (w && w(),
          U && U.name === 'TypeError' && /fetch/i.test(U.message)
            ? Object.assign(new le('Network Error', le.ERR_NETWORK, a, O), { cause: U.cause || U })
            : le.from(U, U && U.code, a, O))
        );
      }
    }),
  Ss = { http: zg, xhr: r1, fetch: v1 };
M.forEach(Ss, (a, c) => {
  if (a) {
    try {
      Object.defineProperty(a, 'name', { value: c });
    } catch {}
    Object.defineProperty(a, 'adapterName', { value: c });
  }
});
const Xh = (a) => `- ${a}`,
  g1 = (a) => M.isFunction(a) || a === null || a === !1,
  jm = {
    getAdapter: (a) => {
      a = M.isArray(a) ? a : [a];
      const { length: c } = a;
      let s, r;
      const f = {};
      for (let d = 0; d < c; d++) {
        s = a[d];
        let h;
        if (((r = s), !g1(s) && ((r = Ss[(h = String(s)).toLowerCase()]), r === void 0)))
          throw new le(`Unknown adapter '${h}'`);
        if (r) break;
        f[h || '#' + d] = r;
      }
      if (!r) {
        const d = Object.entries(f).map(
          ([v, p]) =>
            `adapter ${v} ` + (p === !1 ? 'is not supported by the environment' : 'is not available in the build')
        );
        let h = c
          ? d.length > 1
            ? `since :
` +
              d.map(Xh).join(`
`)
            : ' ' + Xh(d[0])
          : 'as no adapter specified';
        throw new le('There is no suitable adapter to dispatch the request ' + h, 'ERR_NOT_SUPPORT');
      }
      return r;
    },
    adapters: Ss
  };
function ds(a) {
  if ((a.cancelToken && a.cancelToken.throwIfRequested(), a.signal && a.signal.aborted)) throw new la(null, a);
}
function Qh(a) {
  return (
    ds(a),
    (a.headers = it.from(a.headers)),
    (a.data = os.call(a, a.transformRequest)),
    ['post', 'put', 'patch'].indexOf(a.method) !== -1 &&
      a.headers.setContentType('application/x-www-form-urlencoded', !1),
    jm
      .getAdapter(a.adapter || hu.adapter)(a)
      .then(
        function (r) {
          return ds(a), (r.data = os.call(a, a.transformResponse, r)), (r.headers = it.from(r.headers)), r;
        },
        function (r) {
          return (
            _m(r) ||
              (ds(a),
              r &&
                r.response &&
                ((r.response.data = os.call(a, a.transformResponse, r.response)),
                (r.response.headers = it.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Bm = '1.8.3',
  Zi = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((a, c) => {
  Zi[a] = function (r) {
    return typeof r === a || 'a' + (c < 1 ? 'n ' : ' ') + a;
  };
});
const Zh = {};
Zi.transitional = function (c, s, r) {
  function f(d, h) {
    return '[Axios v' + Bm + "] Transitional option '" + d + "'" + h + (r ? '. ' + r : '');
  }
  return (d, h, v) => {
    if (c === !1) throw new le(f(h, ' has been removed' + (s ? ' in ' + s : '')), le.ERR_DEPRECATED);
    return (
      s &&
        !Zh[h] &&
        ((Zh[h] = !0),
        console.warn(f(h, ' has been deprecated since v' + s + ' and will be removed in the near future'))),
      c ? c(d, h, v) : !0
    );
  };
};
Zi.spelling = function (c) {
  return (s, r) => (console.warn(`${r} is likely a misspelling of ${c}`), !0);
};
function b1(a, c, s) {
  if (typeof a != 'object') throw new le('options must be an object', le.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(a);
  let f = r.length;
  for (; f-- > 0; ) {
    const d = r[f],
      h = c[d];
    if (h) {
      const v = a[d],
        p = v === void 0 || h(v, d, a);
      if (p !== !0) throw new le('option ' + d + ' must be ' + p, le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0) throw new le('Unknown option ' + d, le.ERR_BAD_OPTION);
  }
}
const Mi = { assertOptions: b1, validators: Zi },
  Zt = Mi.validators;
let on = class {
  constructor(c) {
    (this.defaults = c), (this.interceptors = { request: new Bh(), response: new Bh() });
  }
  async request(c, s) {
    try {
      return await this._request(c, s);
    } catch (r) {
      if (r instanceof Error) {
        let f = {};
        Error.captureStackTrace ? Error.captureStackTrace(f) : (f = new Error());
        const d = f.stack ? f.stack.replace(/^.+\n/, '') : '';
        try {
          r.stack
            ? d &&
              !String(r.stack).endsWith(d.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + d)
            : (r.stack = d);
        } catch {}
      }
      throw r;
    }
  }
  _request(c, s) {
    typeof c == 'string' ? ((s = s || {}), (s.url = c)) : (s = c || {}), (s = dn(this.defaults, s));
    const { transitional: r, paramsSerializer: f, headers: d } = s;
    r !== void 0 &&
      Mi.assertOptions(
        r,
        {
          silentJSONParsing: Zt.transitional(Zt.boolean),
          forcedJSONParsing: Zt.transitional(Zt.boolean),
          clarifyTimeoutError: Zt.transitional(Zt.boolean)
        },
        !1
      ),
      f != null &&
        (M.isFunction(f)
          ? (s.paramsSerializer = { serialize: f })
          : Mi.assertOptions(f, { encode: Zt.function, serialize: Zt.function }, !0)),
      s.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (s.allowAbsoluteUrls = !0)),
      Mi.assertOptions(s, { baseUrl: Zt.spelling('baseURL'), withXsrfToken: Zt.spelling('withXSRFToken') }, !0),
      (s.method = (s.method || this.defaults.method || 'get').toLowerCase());
    let h = d && M.merge(d.common, d[s.method]);
    d &&
      M.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (O) => {
        delete d[O];
      }),
      (s.headers = it.concat(h, d));
    const v = [];
    let p = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == 'function' && w.runWhen(s) === !1) ||
        ((p = p && w.synchronous), v.unshift(w.fulfilled, w.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function (w) {
      y.push(w.fulfilled, w.rejected);
    });
    let b,
      D = 0,
      z;
    if (!p) {
      const O = [Qh.bind(this), void 0];
      for (O.unshift.apply(O, v), O.push.apply(O, y), z = O.length, b = Promise.resolve(s); D < z; )
        b = b.then(O[D++], O[D++]);
      return b;
    }
    z = v.length;
    let L = s;
    for (D = 0; D < z; ) {
      const O = v[D++],
        w = v[D++];
      try {
        L = O(L);
      } catch (N) {
        w.call(this, N);
        break;
      }
    }
    try {
      b = Qh.call(this, L);
    } catch (O) {
      return Promise.reject(O);
    }
    for (D = 0, z = y.length; D < z; ) b = b.then(y[D++], y[D++]);
    return b;
  }
  getUri(c) {
    c = dn(this.defaults, c);
    const s = Um(c.baseURL, c.url, c.allowAbsoluteUrls);
    return Om(s, c.params, c.paramsSerializer);
  }
};
M.forEach(['delete', 'get', 'head', 'options'], function (c) {
  on.prototype[c] = function (s, r) {
    return this.request(dn(r || {}, { method: c, url: s, data: (r || {}).data }));
  };
});
M.forEach(['post', 'put', 'patch'], function (c) {
  function s(r) {
    return function (d, h, v) {
      return this.request(
        dn(v || {}, { method: c, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: d, data: h })
      );
    };
  }
  (on.prototype[c] = s()), (on.prototype[c + 'Form'] = s(!0));
});
let S1 = class Hm {
  constructor(c) {
    if (typeof c != 'function') throw new TypeError('executor must be a function.');
    let s;
    this.promise = new Promise(function (d) {
      s = d;
    });
    const r = this;
    this.promise.then((f) => {
      if (!r._listeners) return;
      let d = r._listeners.length;
      for (; d-- > 0; ) r._listeners[d](f);
      r._listeners = null;
    }),
      (this.promise.then = (f) => {
        let d;
        const h = new Promise((v) => {
          r.subscribe(v), (d = v);
        }).then(f);
        return (
          (h.cancel = function () {
            r.unsubscribe(d);
          }),
          h
        );
      }),
      c(function (d, h, v) {
        r.reason || ((r.reason = new la(d, h, v)), s(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(c) {
    if (this.reason) {
      c(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(c) : (this._listeners = [c]);
  }
  unsubscribe(c) {
    if (!this._listeners) return;
    const s = this._listeners.indexOf(c);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const c = new AbortController(),
      s = (r) => {
        c.abort(r);
      };
    return this.subscribe(s), (c.signal.unsubscribe = () => this.unsubscribe(s)), c.signal;
  }
  static source() {
    let c;
    return {
      token: new Hm(function (f) {
        c = f;
      }),
      cancel: c
    };
  }
};
function E1(a) {
  return function (s) {
    return a.apply(null, s);
  };
}
function T1(a) {
  return M.isObject(a) && a.isAxiosError === !0;
}
const Es = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Es).forEach(([a, c]) => {
  Es[c] = a;
});
function Lm(a) {
  const c = new on(a),
    s = ym(on.prototype.request, c);
  return (
    M.extend(s, on.prototype, c, { allOwnKeys: !0 }),
    M.extend(s, c, null, { allOwnKeys: !0 }),
    (s.create = function (f) {
      return Lm(dn(a, f));
    }),
    s
  );
}
const be = Lm(hu);
be.Axios = on;
be.CanceledError = la;
be.CancelToken = S1;
be.isCancel = _m;
be.VERSION = Bm;
be.toFormData = Xi;
be.AxiosError = le;
be.Cancel = be.CanceledError;
be.all = function (c) {
  return Promise.all(c);
};
be.spread = E1;
be.isAxiosError = T1;
be.mergeConfig = dn;
be.AxiosHeaders = it;
be.formToJSON = (a) => Dm(M.isHTMLForm(a) ? new FormData(a) : a);
be.getAdapter = jm.getAdapter;
be.HttpStatusCode = Es;
be.default = be;
const {
    Axios: Sb,
    AxiosError: Eb,
    CanceledError: Tb,
    isCancel: Ab,
    CancelToken: Rb,
    VERSION: xb,
    all: Ob,
    Cancel: Cb,
    isAxiosError: Db,
    spread: _b,
    toFormData: Nb,
    AxiosHeaders: Ub,
    HttpStatusCode: zb,
    formToJSON: wb,
    getAdapter: Mb,
    mergeConfig: jb
  } = be,
  ke = [];
for (let a = 0; a < 256; ++a) ke.push((a + 256).toString(16).slice(1));
function A1(a, c = 0) {
  return (
    ke[a[c + 0]] +
    ke[a[c + 1]] +
    ke[a[c + 2]] +
    ke[a[c + 3]] +
    '-' +
    ke[a[c + 4]] +
    ke[a[c + 5]] +
    '-' +
    ke[a[c + 6]] +
    ke[a[c + 7]] +
    '-' +
    ke[a[c + 8]] +
    ke[a[c + 9]] +
    '-' +
    ke[a[c + 10]] +
    ke[a[c + 11]] +
    ke[a[c + 12]] +
    ke[a[c + 13]] +
    ke[a[c + 14]] +
    ke[a[c + 15]]
  ).toLowerCase();
}
let hs;
const R1 = new Uint8Array(16);
function x1() {
  if (!hs) {
    if (typeof crypto > 'u' || !crypto.getRandomValues)
      throw new Error(
        'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
      );
    hs = crypto.getRandomValues.bind(crypto);
  }
  return hs(R1);
}
const O1 = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  Kh = { randomUUID: O1 };
function C1(a, c, s) {
  var f;
  if (Kh.randomUUID && !a) return Kh.randomUUID();
  a = a || {};
  const r = a.random ?? ((f = a.rng) == null ? void 0 : f.call(a)) ?? x1();
  if (r.length < 16) throw new Error('Random bytes length must be >= 16');
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), A1(r);
}
function qm() {
  const a = C1();
  return localStorage.setItem('anonymousSession', a), a;
}
function na() {
  let a = localStorage.getItem('anonymousSession');
  return a || (a = qm()), a;
}
function Ym() {
  localStorage.removeItem('anonymousSession');
}
const yn = '/api/builds';
let wt = null;
function D1(a) {
  wt = `Bearer ${a}`;
}
async function _1(a, c) {
  return (await be.get(`${yn}/${a}/${c}`)).data;
}
async function N1() {
  const a = na(),
    c = wt ? { headers: { Authorization: wt } } : { headers: { 'X-Anonymous-Session': a } };
  return (await be.get(`${yn}/user-builds`, c)).data;
}
async function U1() {
  return (await be.get(yn)).data;
}
async function z1(a, c) {
  const s = na(),
    r = wt ? { headers: { Authorization: wt } } : { headers: { 'X-Anonymous-Session': s } };
  return (await be.post(`${yn}/${a}`, c, r)).data;
}
async function w1(a, c, s) {
  const r = na(),
    f = wt ? { headers: { Authorization: wt } } : { headers: { 'X-Anonymous-Session': r } };
  return (await be.put(`${yn}/${a}/${c}`, s, f)).data;
}
async function M1(a, c) {
  const s = na(),
    r = wt ? { headers: { Authorization: wt } } : { headers: { 'X-Anonymous-Session': s } };
  return (await be.delete(`${yn}/${a}/${c}`, r)).data;
}
async function j1() {
  if (!wt) return null;
  const a = na(),
    c = { headers: { 'Authorization': wt, 'X-Anonymous-Session': a } },
    s = await be.post(`${yn}/migrate-anonymous`, {}, c);
  return Ym(), s.data;
}
const Mt = {
    getBuildById: _1,
    getAll: U1,
    getUserBuilds: N1,
    saveGameBuild: z1,
    updateGameBuild: w1,
    deleteGameBuild: M1,
    setToken: D1,
    migrateAnonymousBuilds: j1
  },
  Us = [
    {
      name: 'warrior',
      baseAttributes: {
        vitality: 11,
        attunement: 8,
        endurance: 12,
        strength: 13,
        dexterity: 13,
        resistance: 11,
        intelligence: 9,
        faith: 9
      },
      soulLevelBase: 4,
      basePoints: 86,
      equipment: {
        handEquipment: [
          { name: 'longsword', upgrade: 'regular', upgradeLevel: 0, weight: 3 },
          { name: 'none', upgrade: 'regular', upgradeLevel: 0, weight: 0 },
          { name: 'heater_shield', upgrade: 'regular', upgradeLevel: 0, weight: 1.5 },
          { name: 'none', upgrade: 'regular', upgradeLevel: 0, weight: 0 }
        ],
        armor: [
          {
            name: 'none',
            level: 0,
            isUnique: !1,
            weight: 0,
            defense: { physical: 0, strike: 0, slash: 0, thrust: 0, magic: 0, fire: 0, lightning: 0 },
            resistance: { bleed: 0, poison: 0, curse: 0 }
          },
          {
            name: 'none',
            level: 0,
            isUnique: !1,
            weight: 0,
            defense: { physical: 0, strike: 0, slash: 0, thrust: 0, magic: 0, fire: 0, lightning: 0 },
            resistance: { bleed: 0, poison: 0, curse: 0 }
          },
          {
            name: 'none',
            level: 0,
            isUnique: !1,
            weight: 0,
            defense: { physical: 0, strike: 0, slash: 0, thrust: 0, magic: 0, fire: 0, lightning: 0 },
            resistance: { bleed: 0, poison: 0, curse: 0 }
          },
          {
            name: 'none',
            level: 0,
            isUnique: !1,
            weight: 0,
            defense: { physical: 0, strike: 0, slash: 0, thrust: 0, magic: 0, fire: 0, lightning: 0 },
            resistance: { bleed: 0, poison: 0, curse: 0 }
          }
        ],
        rings: ['none', 'none']
      },
      spells: []
    },
    {
      name: 'pyromancer',
      baseAttributes: {
        vitality: 10,
        attunement: 12,
        endurance: 11,
        strength: 12,
        dexterity: 9,
        resistance: 12,
        intelligence: 10,
        faith: 8
      },
      soulLevelBase: 1,
      basePoints: 84,
      equipment: {
        handEquipment: [
          { name: 'hand_axe', type: 'weapon', upgrade: 'regular', upgradeLevel: 0, weight: 2 },
          { name: 'none', type: 'none', upgrade: 'regular', upgradeLevel: 0, weight: 0 },
          { name: 'pyromancy_flame', type: 'spell_tool', upgrade: 'regular', upgradeLevel: 0, weight: 0 },
          { name: 'none', type: 'none', upgrade: 'regular', upgradeLevel: 0, weight: 0 }
        ],
        armor: [
          {
            name: 'tattered_cloth_hood',
            level: 0,
            isUnique: !1,
            weight: 1.1,
            poise: 0,
            durability: 400,
            defense: {
              physical: 19.4,
              strike: 21.5,
              slash: 19.4,
              thrust: 19.4,
              magic: 21.8,
              fire: 29,
              lightning: 14.5
            },
            resistance: { bleed: 12.6, poison: 32.2, curse: 1.4 }
          },
          {
            name: 'tattered_cloth_robe',
            level: 0,
            isUnique: !1,
            weight: 2.7,
            poise: 0,
            durability: 400,
            defense: {
              physical: 50.8,
              strike: 56.4,
              slash: 50.8,
              thrust: 50.8,
              magic: 55.7,
              fire: 72.6,
              lightning: 41.1
            },
            resistance: { bleed: 32.2, poison: 82.6, curse: 2.8 }
          },
          {
            name: 'tattered_cloth_manchette',
            level: 0,
            isUnique: !1,
            weight: 1.6,
            poise: 0,
            durability: 400,
            defense: { physical: 29, strike: 32.2, slash: 29, thrust: 29, magic: 33.9, fire: 43.6, lightning: 24.2 },
            resistance: { bleed: 19.6, poison: 49, curse: 1.4 }
          },
          {
            name: 'heavy_boots',
            level: 0,
            isUnique: !1,
            weight: 1.6,
            poise: 0,
            durability: 400,
            defense: { physical: 29, strike: 32.2, slash: 29, thrust: 29, magic: 33.9, fire: 43.6, lightning: 24.2 },
            resistance: { bleed: 19.6, poison: 49, curse: 1.4 }
          }
        ],
        rings: ['none', 'none']
      },
      spells: ['fireball']
    },
    {
      name: 'deprived',
      baseAttributes: {
        vitality: 11,
        attunement: 11,
        endurance: 11,
        strength: 11,
        dexterity: 11,
        resistance: 11,
        intelligence: 11,
        faith: 11
      },
      soulLevelBase: 6,
      basePoints: 88,
      equipment: {
        handEquipment: [
          { name: 'club', upgrade: 'regular', upgradeLevel: 0, weight: 3 },
          { name: 'none', upgrade: 'regular', upgradeLevel: 0, weight: 0 },
          { name: 'plank_shield', upgrade: 'regular', upgradeLevel: 0, weight: 1.5 },
          { name: 'none', upgrade: 'regular', upgradeLevel: 0, weight: 0 }
        ],
        armor: [
          {
            name: 'none',
            level: 0,
            isUnique: !1,
            weight: 0,
            defense: { physical: 0, strike: 0, slash: 0, thrust: 0, magic: 0, fire: 0, lightning: 0 },
            resistance: { bleed: 0, poison: 0, curse: 0 }
          },
          {
            name: 'none',
            level: 0,
            isUnique: !1,
            weight: 0,
            defense: { physical: 0, strike: 0, slash: 0, thrust: 0, magic: 0, fire: 0, lightning: 0 },
            resistance: { bleed: 0, poison: 0, curse: 0 }
          },
          {
            name: 'none',
            level: 0,
            isUnique: !1,
            weight: 0,
            defense: { physical: 0, strike: 0, slash: 0, thrust: 0, magic: 0, fire: 0, lightning: 0 },
            resistance: { bleed: 0, poison: 0, curse: 0 }
          },
          {
            name: 'none',
            level: 0,
            isUnique: !1,
            weight: 0,
            defense: { physical: 0, strike: 0, slash: 0, thrust: 0, magic: 0, fire: 0, lightning: 0 },
            resistance: { bleed: 0, poison: 0, curse: 0 }
          }
        ],
        rings: ['none', 'none']
      },
      spells: []
    }
  ];
function Pn(a) {
  return a[0].toUpperCase() + a.slice(1);
}
function hn(a) {
  return Us.find((c) => c.name === a);
}
function zs(a) {
  const c = hn(a.startingClass),
    s = c.basePoints,
    r = c.soulLevelBase;
  return Object.values(a.attributes).reduce((h, v) => v + h, 0) - s + r;
}
const mu = ['vitality', 'attunement', 'endurance', 'strength', 'dexterity', 'resistance', 'intelligence', 'faith'],
  Gm = 'warrior',
  Vm = ['warrior', 'pyromancer', 'deprived'],
  B1 = { ds1: 'dark-souls-1', ds2: 'dark-souls-2', ds3: 'dark-souls-3' },
  H1 = ({ expirationDate: a }) => {
    const [c, s] = x.useState(new Date(new Date(a) - new Date())),
      r = Math.floor(c / (1e3 * 60 * 60 * 24)),
      f = Math.floor((c / (1e3 * 60 * 60)) % 24),
      d = Math.floor((c / (1e3 * 60)) % 60),
      h = Math.floor((c / 1e3) % 60);
    return r >= 1
      ? E.jsx('div', { className: 'ExpirationTime', children: `Expires in ${r}d ${f}h` })
      : f >= 1
      ? E.jsx('div', { className: 'ExpirationTime ExpirationTime--toLow', children: `Expires in ${f}h ${d}m` })
      : d >= 1
      ? (setInterval(() => s(new Date(new Date(a) - new Date())), 1e3),
        E.jsx('div', { className: 'ExpirationTime ExpirationTime--toLow', children: `Expires in ${d}m ${h}s` }))
      : h >= 1
      ? (setInterval(() => s(new Date(new Date(a) - new Date())), 1e3),
        E.jsx('div', { className: 'ExpirationTime ExpirationTime--toLow', children: `Expires in ${h}s` }))
      : E.jsx('div', { className: 'ExpirationTime ExpirationTime--toLow', children: 'Expired!' });
  },
  Xm = ({ build: a }) => (
    console.log(a),
    E.jsxs('div', {
      className: 'BuildCard',
      children: [
        E.jsx('strong', { children: a.title }),
        E.jsx(H1, { expirationDate: a.expiresAt }),
        E.jsx('strong', { children: a.character.name }),
        E.jsxs('span', { children: ['Class: ', Pn(a.character.startingClass)] }),
        mu.map((c) => E.jsx('span', { children: `${Pn(c)}: ${a.character.attributes[c]}` }, `${c}-${a.id}`)),
        E.jsxs('span', { children: ['Soul Level: ', zs(a.character)] }),
        E.jsx(Ct, {
          to: `/planner/${B1[a.game]}/${a.id}`,
          children: E.jsx('button', { children: 'Edit this character' })
        })
      ]
    })
  ),
  L1 = () => {
    const [a, c] = x.useState([]),
      [s, r] = x.useState(!1);
    return (
      x.useEffect(() => {
        r(!0);
        async function f() {
          const d = await Mt.getAll();
          c(d), r(!1);
        }
        f();
      }, []),
      s
        ? E.jsx('div', { children: 'Loading...' })
        : E.jsx('div', { className: 'u-mainPage', children: a.map((f) => E.jsx(Xm, { build: f }, f.id)) })
    );
  },
  q1 = () => {
    const [a, c] = x.useState([]);
    return (
      x.useEffect(() => {
        async function s() {
          const r = await Mt.getUserBuilds();
          c(r);
        }
        s();
      }, []),
      E.jsxs('main', {
        className: 'u-mainPage',
        children: [
          E.jsx('h2', { children: 'Saved Builds' }),
          E.jsx('hr', { className: 'u-hr' }),
          a.length > 0
            ? E.jsx('div', { children: a.map((s) => E.jsx(Xm, { build: s }, s.id)) })
            : E.jsx('div', { children: 'No builds saved...' })
        ]
      })
    );
  },
  Y1 = '/api/login';
async function G1(a) {
  return (await be.post(Y1, a)).data;
}
const V1 = { login: G1 },
  X1 = { username: null, name: null },
  Ki = x.createContext();
function Q1({ children: a }) {
  const [c, s] = x.useState(X1);
  return console.log(c), E.jsx(Ki.Provider, { value: { auth: c, setAuth: s }, children: a });
}
const Z1 = () => {
    const a = fu(),
      c = x.useId(),
      s = x.useId(),
      { setAuth: r } = x.useContext(Ki),
      [f, d] = x.useState(''),
      [h, v] = x.useState('');
    function p(z) {
      d(z.target.value);
    }
    function y(z) {
      v(z.target.value);
    }
    function b(z) {
      z.preventDefault(), a('/');
    }
    async function D(z) {
      z.preventDefault();
      try {
        const L = await V1.login({ username: f, password: h });
        window.localStorage.setItem('loggedUser', JSON.stringify(L)), Ym(), Mt.setToken(L.token), r(L), a('/');
      } catch (L) {
        console.log('Wrong credentials:', L);
      }
    }
    return E.jsxs('form', {
      onSubmit: D,
      children: [
        E.jsxs('div', {
          children: [
            E.jsx('label', { htmlFor: c, children: 'Username' }),
            E.jsx('input', { id: c, type: 'text', value: f, onChange: p, required: !0 })
          ]
        }),
        E.jsxs('div', {
          children: [
            E.jsx('label', { htmlFor: s, children: 'Password' }),
            E.jsx('input', { id: s, type: 'password', value: h, onChange: y, required: !0 })
          ]
        }),
        E.jsx('button', { type: 'submit', children: 'Login' }),
        E.jsx('button', { onClick: b, children: 'Cancel' })
      ]
    });
  },
  kh = hn(Gm),
  Qm = {
    title: '',
    character: { name: '', gender: 'male', startingClass: kh.name, attributes: { ...kh.baseAttributes }, humanity: 0 }
  };
function K1(a, c) {
  switch (c.type) {
    case 'SET_TITLE':
      return { ...a, title: c.payload };
    case 'SET_NAME':
      return { ...a, character: { ...a.character, name: c.payload } };
    case 'SET_GENDER':
      return { ...a, character: { ...a.character, gender: c.payload } };
    case 'SET_STARTING_CLASS': {
      const s = c.payload,
        r = hn(a.character.startingClass),
        f = hn(s),
        d = { ...a.character.attributes },
        h = { ...r.baseAttributes },
        v = { ...f.baseAttributes };
      return (
        mu.forEach((p) => {
          (d[p] <= h[p] || v[p] > d[p]) && (d[p] = v[p]);
        }),
        { ...a, character: { ...a.character, startingClass: s, attributes: d, basePoints: f.basePoints } }
      );
    }
    case 'SET_ATTRIBUTE':
      return {
        ...a,
        character: { ...a.character, attributes: { ...a.character.attributes, [c.payload.attribute]: c.payload.value } }
      };
    case 'SET_HUMANITY':
      return { ...a, character: { ...a.character, humanity: c.payload } };
    case 'LOAD_BUILD':
      return c.payload;
    case 'RESET_BUILD':
      return Qm;
    default:
      return a;
  }
}
const yl = x.createContext();
function k1({ children: a }) {
  const [c, s] = x.useReducer(K1, Qm);
  async function r(d) {
    try {
      await Mt.saveGameBuild('dark-souls-1', d), console.log('Character saved successfully!');
    } catch (h) {
      console.error('Error saving character', h);
    }
  }
  async function f(d, h) {
    try {
      await Mt.updateGameBuild('dark-souls-1', d, h), console.log('Character updated successfully!');
    } catch (v) {
      console.error('Error updating character', v);
    }
  }
  return (
    console.log(c),
    E.jsx(yl.Provider, { value: { build: c, buildDispatch: s, saveBuild: r, updateBuild: f }, children: a })
  );
}
const J1 = () => {
    const a = x.useId(),
      { build: c, buildDispatch: s } = x.useContext(yl);
    function r(f) {
      s({ type: 'SET_NAME', payload: f.target.value });
    }
    return E.jsxs('div', {
      className: 'CharacterName',
      children: [
        E.jsx('label', { htmlFor: a, className: 'CharacterName-label', children: 'Character Name' }),
        E.jsx('input', {
          id: a,
          className: 'CharacterName-input',
          type: 'text',
          maxLength: 16,
          value: c.character.name,
          onChange: r,
          placeholder: 'Chosen Undead'
        })
      ]
    });
  },
  $1 = () => {
    const a = x.useId(),
      { build: c, buildDispatch: s } = x.useContext(yl);
    function r(f) {
      const d = f.target.value;
      s({ type: 'SET_GENDER', payload: d });
    }
    return E.jsxs('div', {
      className: 'Gender',
      children: [
        E.jsx('label', { className: 'Gender-label', htmlFor: a, children: 'Gender' }),
        E.jsxs('select', {
          className: 'Gender-select',
          id: a,
          value: c.character.gender,
          onChange: r,
          children: [
            E.jsx('option', { value: 'male', children: 'Male' }),
            E.jsx('option', { value: 'female', children: 'Female' })
          ]
        })
      ]
    });
  },
  F1 = () => {
    const a = x.useId(),
      { build: c, buildDispatch: s } = x.useContext(yl);
    function r(f) {
      const d = f.target.value;
      s({ type: 'SET_STARTING_CLASS', payload: d });
    }
    return E.jsxs('div', {
      className: 'StartingClass',
      children: [
        E.jsx('label', { className: 'StartingClass-label', htmlFor: a, children: 'Starting Class' }),
        E.jsx('select', {
          className: 'StartingClass-select',
          id: a,
          value: c.character.startingClass,
          onChange: r,
          children: Vm.map((f) => E.jsx('option', { value: f, children: Pn(f) }, f))
        })
      ]
    });
  },
  W1 = () => {
    const a = x.useId(),
      { build: c } = x.useContext(yl);
    return E.jsxs('div', {
      className: 'SoulLevel',
      children: [
        E.jsx('label', { className: 'SoulLevel-label', htmlFor: a, children: 'Soul Level' }),
        E.jsx('output', { className: 'SoulLevel-level', id: a, children: zs(c.character) })
      ]
    });
  },
  P1 = () =>
    E.jsxs('div', {
      className: 'MiniCaption',
      children: [
        E.jsx('span', { className: 'MiniCaption-label', children: 'ATTRIBUTE' }),
        E.jsx('span', { className: 'MiniCaption-base', children: 'BASE' }),
        E.jsx('span', { className: 'MiniCaption-current', children: 'CURRENT' }),
        E.jsxs('div', {
          className: 'u-innerContainer',
          children: [
            E.jsx('span', { className: 'MiniCaption-decrease', children: ' - ' }),
            E.jsx('span', { className: 'MiniCaption-increase', children: ' + ' })
          ]
        })
      ]
    }),
  I1 = ({ attribute: a }) => {
    const c = x.useId(),
      { build: s, buildDispatch: r } = x.useContext(yl),
      f = Us.find((U) => U.name === s.character.startingClass),
      d = s.character.attributes[a],
      h = f.baseAttributes[a],
      v = 99,
      [p, y] = x.useState(String(d));
    x.useEffect(() => y(String(d)), [d]);
    function b(U) {
      r({ type: 'SET_ATTRIBUTE', payload: { attribute: a, value: U } });
    }
    function D(U) {
      let Y = parseInt(U, 10);
      isNaN(Y) && (Y = h), Y < h && (Y = h), Y > v && (Y = v), b(Y), y(String(Y));
    }
    function z(U) {
      U.preventDefault(), !(d <= h) && b(d - 1);
    }
    function L(U) {
      U.preventDefault(), !(d >= v) && b(d + 1);
    }
    function O(U) {
      const Y = U.target.value.replace(/[eE]/g, '');
      y(String(Y));
    }
    function w() {
      D(p);
    }
    function N(U) {
      (U.key === 'e' || U.key === 'E') && U.preventDefault(), U.key === 'Enter' && (D(p), U.target.blur());
    }
    return E.jsxs('div', {
      className: 'AttributeIO',
      children: [
        E.jsx('label', { htmlFor: c, className: 'AttributeIO-label', children: Pn(a) }),
        E.jsx('output', { className: 'AttributeIO-output', children: h }),
        E.jsx('input', {
          id: c,
          className: 'AttributeIO-input',
          type: 'number',
          min: h,
          max: v,
          value: p,
          onChange: O,
          onBlur: w,
          onKeyDown: N,
          onClick: (U) => U.target.select()
        }),
        E.jsxs('div', {
          className: 'u-innerContainer',
          children: [
            E.jsx('button', { className: 'AttributeIO-button', onClick: z, disabled: d <= h, children: '-' }),
            E.jsx('button', { className: 'AttributeIO-button', onClick: L, disabled: d >= v, children: '+' })
          ]
        })
      ]
    });
  },
  eb = () => {
    const a = x.useId(),
      { build: c, buildDispatch: s } = x.useContext(yl),
      r = c.character.humanity,
      f = 0,
      d = 99,
      [h, v] = x.useState(0);
    x.useEffect(() => v(String(r)), [r]);
    function p(w) {
      s({ type: 'SET_HUMANITY', payload: w });
    }
    function y(w) {
      let N = parseInt(w, 10);
      isNaN(N) && (N = f), N < f && (N = f), N > d && (N = d), p(N), v(String(N));
    }
    function b(w) {
      w.preventDefault(), !(r <= f) && p(r - 1);
    }
    function D(w) {
      w.preventDefault(), !(r >= d) && p(r + 1);
    }
    function z(w) {
      const N = w.target.value.replace(/[eE]/g, '');
      v(String(N));
    }
    function L() {
      y(h);
    }
    function O(w) {
      (w.key === 'e' || w.key === 'E') && w.preventDefault(), w.key === 'Enter' && (y(h), w.target.blur());
    }
    return E.jsxs('div', {
      className: 'Humanity',
      children: [
        E.jsx('label', { htmlFor: a, className: 'Humanity-label', children: 'Humanity' }),
        E.jsx('input', {
          id: a,
          className: 'Humanity-input',
          type: 'number',
          min: f,
          max: d,
          value: h,
          onChange: z,
          onBlur: L,
          onKeyDown: O,
          onClick: (w) => w.target.select()
        }),
        E.jsxs('div', {
          className: 'u-innerContainer',
          children: [
            E.jsx('button', { className: 'Humanity-button', onClick: b, disabled: r <= f, children: '-' }),
            E.jsx('button', { className: 'Humanity-button', onClick: D, disabled: r >= d, children: '+' })
          ]
        })
      ]
    });
  },
  tb = () => {
    const a = x.useId(),
      { build: c, buildDispatch: s } = x.useContext(yl);
    function r(f) {
      s({ type: 'SET_TITLE', payload: f.target.value });
    }
    return E.jsxs('div', {
      children: [
        E.jsx('label', { htmlFor: a, children: 'Title' }),
        E.jsx('input', { id: a, type: 'text', value: c.title, onChange: r, placeholder: 'Title', required: !0 })
      ]
    });
  },
  Jh = () => {
    const { id: a } = im(),
      c = fu(),
      { build: s, buildDispatch: r, saveBuild: f, updateBuild: d } = x.useContext(yl);
    x.useEffect(() => {
      async function y(D) {
        const z = await Mt.getBuildById('dark-souls-1', D);
        r({ type: 'LOAD_BUILD', payload: z });
      }
      function b() {
        r({ type: 'RESET_BUILD' });
      }
      a ? y(a) : b();
    }, [a, r]);
    function h(y) {
      y.preventDefault(), a ? d(a, s) : f(s), c('/');
    }
    function v(y) {
      y.preventDefault(), Mt.deleteGameBuild('dark-souls-1', a), c('/');
    }
    function p(y) {
      y.preventDefault(), c(a ? '/explorer' : '/');
    }
    return E.jsxs('main', {
      className: 'u-mainPage',
      children: [
        E.jsxs('h2', { children: [a ? 'Edit' : 'Create', ' DS1 Character'] }),
        E.jsxs('form', {
          onSubmit: h,
          children: [
            E.jsx('div', { className: 'u-container', children: E.jsx(tb, {}) }),
            E.jsxs('div', { className: 'u-container', children: [E.jsx(J1, {}), E.jsx($1, {}), E.jsx(F1, {})] }),
            E.jsxs('div', {
              className: 'u-container',
              children: [
                E.jsx(W1, {}),
                E.jsx(P1, {}),
                mu.map((y) => E.jsx(I1, { attribute: y }, y)),
                E.jsx('hr', { className: 'u-hr' }),
                E.jsx(eb, {})
              ]
            }),
            E.jsx('button', { type: 'submit', children: a ? 'Update' : 'Create' }),
            E.jsx('button', { onClick: v, children: 'Delete' }),
            E.jsx('button', { onClick: p, children: 'Cancel' })
          ]
        })
      ]
    });
  };
function Zm() {
  return { name: '', gender: 'male', startingClass: $h.name, attributes: { ...$h.baseAttributes }, humanity: 0 };
}
const $h = hn(Gm),
  lb = {
    title: '',
    game: 'ds2',
    description: '',
    externalUrl: '',
    videoUrl: '',
    screenshots: [],
    isPublic: !1,
    tags: [],
    url: '',
    character: Zm()
  };
function nb(a, c) {
  switch (c.type) {
    case 'SET_NAME':
      return { ...a, character: { ...a.character, name: c.payload } };
    case 'SET_GENDER':
      return { ...a, character: { ...a.character, gender: c.payload } };
    case 'SET_STARTING_CLASS': {
      const s = c.payload,
        r = hn(a.character.startingClass),
        f = hn(s),
        d = { ...a.character.attributes },
        h = { ...r.baseAttributes },
        v = { ...f.baseAttributes };
      return (
        mu.forEach((p) => {
          (d[p] <= h[p] || v[p] > d[p]) && (d[p] = v[p]);
        }),
        { ...a, character: { ...a.character, startingClass: s, attributes: d, basePoints: f.basePoints } }
      );
    }
    case 'SET_ATTRIBUTE':
      return {
        ...a,
        character: { ...a.character, attributes: { ...a.character.attributes, [c.payload.attribute]: c.payload.value } }
      };
    case 'SET_HUMANITY':
      return { ...a, character: { ...a.character, humanity: c.payload } };
    case 'LOAD_BUILD':
      return c.payload;
    case 'LOAD_CHARACTER':
      return { ...a, character: c.payload };
    case 'SAVING_CHARACTER':
      return { ...a, isSaving: !0 };
    case 'SAVE_SUCCESS':
      return { ...a, isSaving: !0 };
    case 'SAVE_ERROR':
      return { ...a, isSaving: !0 };
    case 'RESET_CHARACTER':
      return { ...a, character: Zm(), isEditing: !1, error: null };
    default:
      return a;
  }
}
const Yl = x.createContext();
function ab({ children: a }) {
  const [c, s] = x.useReducer(nb, lb);
  async function r(d) {
    try {
      await Mt.save(d), console.log('Character saved successfully!');
    } catch (h) {
      console.error('Error saving character', h);
    }
  }
  async function f(d, h) {
    try {
      await Mt.update(d, h), console.log('Character updated successfully!');
    } catch (v) {
      console.error('Error updating character', v);
    }
  }
  return E.jsx(Yl.Provider, { value: { build: c, buildDispatch: s, saveBuild: r, updateBuild: f }, children: a });
}
const ub = () => {
    const a = x.useId(),
      { build: c, buildDispatch: s } = x.useContext(Yl);
    function r(f) {
      s({ type: 'SET_NAME', payload: f.target.value });
    }
    return E.jsxs('div', {
      className: 'CharacterName',
      children: [
        E.jsx('label', { htmlFor: a, className: 'CharacterName-label', children: 'Character Name' }),
        E.jsx('input', {
          id: a,
          className: 'CharacterName-input',
          type: 'text',
          maxLength: 16,
          value: c.character.name,
          onChange: r,
          placeholder: 'Chosen Undead'
        })
      ]
    });
  },
  ib = () => {
    const a = x.useId(),
      { build: c, buildDispatch: s } = x.useContext(Yl);
    function r(f) {
      const d = f.target.value;
      s({ type: 'SET_GENDER', payload: d });
    }
    return E.jsxs('div', {
      className: 'Gender',
      children: [
        E.jsx('label', { className: 'Gender-label', htmlFor: a, children: 'Gender' }),
        E.jsxs('select', {
          className: 'Gender-select',
          id: a,
          value: c.character.gender,
          onChange: r,
          children: [
            E.jsx('option', { value: 'male', children: 'Male' }),
            E.jsx('option', { value: 'female', children: 'Female' })
          ]
        })
      ]
    });
  },
  cb = () => {
    const a = x.useId(),
      { build: c, buildDispatch: s } = x.useContext(Yl);
    function r(f) {
      const d = f.target.value;
      s({ type: 'SET_STARTING_CLASS', payload: d });
    }
    return E.jsxs('div', {
      className: 'StartingClass',
      children: [
        E.jsx('label', { className: 'StartingClass-label', htmlFor: a, children: 'Starting Class' }),
        E.jsx('select', {
          className: 'StartingClass-select',
          id: a,
          value: c.character.startingClass,
          onChange: r,
          children: Vm.map((f) => E.jsx('option', { value: f, children: Pn(f) }, f))
        })
      ]
    });
  },
  rb = () => {
    const a = x.useId(),
      { build: c } = x.useContext(Yl);
    return E.jsxs('div', {
      className: 'SoulLevel',
      children: [
        E.jsx('label', { className: 'SoulLevel-label', htmlFor: a, children: 'Soul Level' }),
        E.jsx('output', { className: 'SoulLevel-level', id: a, children: zs(c.character) })
      ]
    });
  },
  sb = () =>
    E.jsxs('div', {
      className: 'MiniCaption',
      children: [
        E.jsx('span', { className: 'MiniCaption-label', children: 'ATTRIBUTE' }),
        E.jsx('span', { className: 'MiniCaption-base', children: 'BASE' }),
        E.jsx('span', { className: 'MiniCaption-current', children: 'CURRENT' }),
        E.jsxs('div', {
          className: 'u-innerContainer',
          children: [
            E.jsx('span', { className: 'MiniCaption-decrease', children: ' - ' }),
            E.jsx('span', { className: 'MiniCaption-increase', children: ' + ' })
          ]
        })
      ]
    }),
  fb = ({ attribute: a }) => {
    const c = x.useId(),
      { build: s, buildDispatch: r } = x.useContext(Yl),
      f = Us.find((U) => U.name === s.character.startingClass),
      d = s.character.attributes[a],
      h = f.baseAttributes[a],
      v = 99,
      [p, y] = x.useState(String(d));
    x.useEffect(() => y(String(d)), [d]);
    function b(U) {
      r({ type: 'SET_ATTRIBUTE', payload: { attribute: a, value: U } });
    }
    function D(U) {
      let Y = parseInt(U, 10);
      isNaN(Y) && (Y = h), Y < h && (Y = h), Y > v && (Y = v), b(Y), y(String(Y));
    }
    function z(U) {
      U.preventDefault(), !(d <= h) && b(d - 1);
    }
    function L(U) {
      U.preventDefault(), !(d >= v) && b(d + 1);
    }
    function O(U) {
      const Y = U.target.value.replace(/[eE]/g, '');
      y(String(Y));
    }
    function w() {
      D(p);
    }
    function N(U) {
      (U.key === 'e' || U.key === 'E') && U.preventDefault(), U.key === 'Enter' && (D(p), U.target.blur());
    }
    return E.jsxs('div', {
      className: 'AttributeIO',
      children: [
        E.jsx('label', { htmlFor: c, className: 'AttributeIO-label', children: Pn(a) }),
        E.jsx('output', { className: 'AttributeIO-output', children: h }),
        E.jsx('input', {
          id: c,
          className: 'AttributeIO-input',
          type: 'number',
          min: h,
          max: v,
          value: p,
          onChange: O,
          onBlur: w,
          onKeyDown: N,
          onClick: (U) => U.target.select()
        }),
        E.jsxs('div', {
          className: 'u-innerContainer',
          children: [
            E.jsx('button', { className: 'AttributeIO-button', onClick: z, disabled: d <= h, children: '-' }),
            E.jsx('button', { className: 'AttributeIO-button', onClick: L, disabled: d >= v, children: '+' })
          ]
        })
      ]
    });
  },
  ob = () => {
    const a = x.useId(),
      { build: c, buildDispatch: s } = x.useContext(Yl),
      r = c.character.humanity,
      f = 0,
      d = 99,
      [h, v] = x.useState(0);
    x.useEffect(() => v(String(r)), [r]);
    function p(w) {
      s({ type: 'SET_HUMANITY', payload: w });
    }
    function y(w) {
      let N = parseInt(w, 10);
      isNaN(N) && (N = f), N < f && (N = f), N > d && (N = d), p(N), v(String(N));
    }
    function b(w) {
      w.preventDefault(), !(r <= f) && p(r - 1);
    }
    function D(w) {
      w.preventDefault(), !(r >= d) && p(r + 1);
    }
    function z(w) {
      const N = w.target.value.replace(/[eE]/g, '');
      v(String(N));
    }
    function L() {
      y(h);
    }
    function O(w) {
      (w.key === 'e' || w.key === 'E') && w.preventDefault(), w.key === 'Enter' && (y(h), w.target.blur());
    }
    return E.jsxs('div', {
      className: 'Humanity',
      children: [
        E.jsx('label', { htmlFor: a, className: 'Humanity-label', children: 'Humanity' }),
        E.jsx('input', {
          id: a,
          className: 'Humanity-input',
          type: 'number',
          min: f,
          max: d,
          value: h,
          onChange: z,
          onBlur: L,
          onKeyDown: O,
          onClick: (w) => w.target.select()
        }),
        E.jsxs('div', {
          className: 'u-innerContainer',
          children: [
            E.jsx('button', { className: 'Humanity-button', onClick: b, disabled: r <= f, children: '-' }),
            E.jsx('button', { className: 'Humanity-button', onClick: D, disabled: r >= d, children: '+' })
          ]
        })
      ]
    });
  },
  Fh = () => {
    const { id: a } = im(),
      c = fu(),
      { build: s, buildDispatch: r, saveBuild: f, updateBuild: d } = x.useContext(Yl);
    x.useEffect(() => {
      async function p(b) {
        const D = await Mt.getOne(b);
        r({ type: 'LOAD_CHARACTER', payload: D.character });
      }
      function y() {
        r({ type: 'RESET_CHARACTER' });
      }
      a ? p(a) : y();
    }, [a, r]);
    function h(p) {
      p.preventDefault();
      const y = { ...s };
      a ? d(a, y) : f(y), c('/');
    }
    async function v(p) {
      p.preventDefault(), c(a ? '/explorer' : '/');
    }
    return E.jsxs('main', {
      className: 'u-mainPage',
      children: [
        E.jsxs('h2', { children: [a ? 'Edit' : 'Create', ' DS2 Character'] }),
        E.jsxs('form', {
          onSubmit: h,
          children: [
            E.jsxs('div', { className: 'u-container', children: [E.jsx(ub, {}), E.jsx(ib, {}), E.jsx(cb, {})] }),
            E.jsxs('div', {
              className: 'u-container',
              children: [
                E.jsx(rb, {}),
                E.jsx(sb, {}),
                mu.map((p) => E.jsx(fb, { attribute: p }, p)),
                E.jsx('hr', { className: 'u-hr' }),
                E.jsx(ob, {})
              ]
            }),
            E.jsx('button', { type: 'submit', children: a ? 'Update' : 'Create' }),
            E.jsx('button', { onClick: v, children: 'Cancel' })
          ]
        })
      ]
    });
  },
  db = () => E.jsx(k1, { children: E.jsx(sm, {}) }),
  hb = () => E.jsx(ab, { children: E.jsx(sm, {}) }),
  mb = () => E.jsx('main', { className: 'u-mainPage', children: 'Home' }),
  yb = () => {
    const a = fu(),
      { auth: c } = x.useContext(Ki);
    function s() {
      window.localStorage.clear(), qm(), a('/'), window.location.reload();
    }
    return E.jsxs('nav', {
      className: 'Sidebar',
      children: [
        E.jsxs('div', {
          children: [E.jsx('h2', { children: 'Soulsborne Planner' }), E.jsx('hr', { className: 'u-hr' })]
        }),
        E.jsxs('div', {
          className: 'Sidebar-mainContainer',
          children: [
            E.jsx(Ct, { to: '/', className: 'Sidebar-Link', children: 'Home' }),
            E.jsx(Ct, { to: '/profile', className: 'Sidebar-Link', children: 'Profile' }),
            E.jsx(Ct, { to: '/planner/dark-souls-1', className: 'Sidebar-Link', children: 'Planner DS1' }),
            E.jsx(Ct, { to: '/planner/dark-souls-2', className: 'Sidebar-Link', children: 'Planner DS2' }),
            E.jsx(Ct, { to: '/explorer', className: 'Sidebar-Link', children: 'Explorer' })
          ]
        }),
        E.jsxs('div', {
          className: 'Sidebar-container',
          children: [
            E.jsx(Ct, { to: '/', className: 'Sidebar-Link', children: 'Settings' }),
            E.jsx(Ct, { to: '/profile', className: 'Sidebar-Link', children: 'Help' })
          ]
        }),
        E.jsx('hr', { className: 'u-hr' }),
        c.username
          ? E.jsxs('div', {
              children: [E.jsx('strong', { children: c.username }), E.jsx('button', { onClick: s, children: 'Logout' })]
            })
          : E.jsxs('div', {
              className: 'Sidebar-container',
              children: [
                E.jsx(Ct, { to: '/login', className: 'Sidebar-Link', children: 'Login' }),
                E.jsx(Ct, { to: '/register', className: 'Sidebar-Link', children: 'Register' })
              ]
            })
      ]
    });
  },
  pb = () => {
    const { auth: a, setAuth: c } = x.useContext(Ki);
    return (
      x.useEffect(() => {
        const s = window.localStorage.getItem('loggedUser');
        if (s) {
          const r = JSON.parse(s);
          c(r), Mt.setToken(r.token);
        } else na();
      }, [a.token, c]),
      E.jsxs(E.Fragment, {
        children: [
          E.jsx(yb, {}),
          E.jsxs(yv, {
            children: [
              E.jsx(zt, { path: '/', element: E.jsx(mb, {}) }),
              E.jsx(zt, { path: '/login', element: E.jsx(Z1, {}) }),
              E.jsx(zt, { path: '/profile', element: E.jsx(q1, {}) }),
              E.jsxs(zt, {
                path: '/planner/dark-souls-1',
                element: E.jsx(db, {}),
                children: [
                  E.jsx(zt, { index: !0, element: E.jsx(Jh, {}) }),
                  E.jsx(zt, { path: ':id', element: E.jsx(Jh, {}) })
                ]
              }),
              E.jsxs(zt, {
                path: '/planner/dark-souls-2',
                element: E.jsx(hb, {}),
                children: [
                  E.jsx(zt, { index: !0, element: E.jsx(Fh, {}) }),
                  E.jsx(zt, { path: ':id', element: E.jsx(Fh, {}) })
                ]
              }),
              E.jsx(zt, { path: '/explorer', element: E.jsx(L1, {}) })
            ]
          })
        ]
      })
    );
  },
  vb = Ap.createRoot(document.getElementById('root'));
vb.render(E.jsx(x.StrictMode, { children: E.jsx(Q1, { children: E.jsx(Lv, { children: E.jsx(pb, {}) }) }) }));
