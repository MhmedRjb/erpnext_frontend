var h = (n, r, s) =>
  new Promise((t, e) => {
    var o = (a) => {
        try {
          u(s.next(a));
        } catch (d) {
          e(d);
        }
      },
      i = (a) => {
        try {
          u(s.throw(a));
        } catch (d) {
          e(d);
        }
      },
      u = (a) => (a.done ? t(a.value) : Promise.resolve(a.value).then(o, i));
    u((s = s.apply(n, r)).next());
  });
import {
  c as p,
  r as L,
  a as v,
  b as P,
  d as E,
  _ as b,
  e as k,
  o as I,
  f as w,
  g as R,
  h as A,
  s as O,
  i as C,
  j,
  C as x,
  I as S,
  k as $,
} from "./vendor.4bbb97c0.js";
const q = function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && t(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = s(e);
    fetch(e.href, o);
  }
};
q();
const N = "modulepreload",
  y = {},
  U = "/assets/erpnext_frontend/main/",
  f = function (r, s) {
    return !s || s.length === 0
      ? r()
      : Promise.all(
          s.map((t) => {
            if (((t = `${U}${t}`), t in y)) return;
            y[t] = !0;
            const e = t.endsWith(".css"),
              o = e ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${t}"]${o}`)) return;
            const i = document.createElement("link");
            if (
              ((i.rel = e ? "stylesheet" : N),
              e || ((i.as = "script"), (i.crossOrigin = "")),
              (i.href = t),
              document.head.appendChild(i),
              e)
            )
              return new Promise((u, a) => {
                i.addEventListener("load", u), i.addEventListener("error", a);
              });
          })
        ).then(() => r());
  },
  g = p({
    url: "frappe.auth.get_logged_user",
    cache: "User",
    onError(n) {
      n && n.exc_type === "AuthenticationError" && m.push({ name: "LoginPage" });
    },
  });
function _() {
  let r = new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");
  return r === "Guest" && (r = null), r;
}
const l = L({
    login: p({
      url: "login",
      makeParams({ email: n, password: r }) {
        return { usr: n, pwd: r };
      },
      onSuccess(n) {
        g.reload(), (l.user = _()), l.login.reset(), m.replace(n.default_route || "/");
      },
    }),
    logout: p({
      url: "logout",
      onSuccess() {
        g.reset(), (l.user = _()), m.replace({ name: "Login" });
      },
    }),
    user: _(),
    isLoggedIn: v(() => !!l.user),
  }),
  V = [
    {
      path: "/",
      name: "Home",
      component: () =>
        f(
          () => import("./Home.81a54e5b.js"),
          ["assets/Home.81a54e5b.js", "assets/vendor.4bbb97c0.js", "assets/vendor.46449452.css"]
        ),
      redirect: { name: "MainPage" },
    },
    {
      name: "MainPage",
      path: "/mainpage",
      component: () =>
        f(
          () => import("./MainPage.416ea346.js"),
          [
            "assets/MainPage.416ea346.js",
            "assets/vendor.4bbb97c0.js",
            "assets/vendor.46449452.css",
          ]
        ),
    },
    {
      name: "Login",
      path: "/account/login",
      component: () =>
        f(
          () => import("./Login.b0ed2a39.js"),
          ["assets/Login.b0ed2a39.js", "assets/vendor.4bbb97c0.js", "assets/vendor.46449452.css"]
        ),
    },
  ];
let m = P({ history: E("/main"), routes: V });
m.beforeEach((n, r, s) =>
  h(void 0, null, function* () {
    let t = l.isLoggedIn;
    try {
      yield g.promise;
    } catch (e) {
      t = !1;
    }
    n.meta.requiresAuth && !t && (window.location.href = "/mainpage"), s();
  })
);
const B = {};
function D(n, r) {
  const s = k("router-view");
  return I(), w("div", null, [R(s)]);
}
var H = b(B, [["render", D]]);
let c = A(H);
O("resourceFetcher", $);
c.use(m);
c.use(C);
c.component("Button", j);
c.component("Card", x);
c.component("Input", S);
c.mount("#app");
export { l as s };
