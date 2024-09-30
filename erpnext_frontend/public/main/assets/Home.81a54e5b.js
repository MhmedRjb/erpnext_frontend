import {
  c as p,
  l as f,
  e as g,
  o as x,
  f as v,
  m as l,
  t as d,
  u as t,
  g as s,
  w as n,
  n as a,
  D as b,
} from "./vendor.4bbb97c0.js";
import { s as m } from "./index.6386ebb5.js";
const c = { class: "max-w-3xl py-12 mx-auto" },
  k = { class: "font-bold text-lg text-gray-600 mb-4" },
  C = { class: "flex flex-row space-x-2 mt-4" },
  B = {
    __name: "Home",
    setup(D) {
      const o = p({ url: "ping", auto: !0 }),
        i = f(!1);
      return (V, e) => {
        const r = g("Button");
        return (
          x(),
          v("div", c, [
            l("h2", k, " Welcome " + d(t(m).user) + "! ", 1),
            s(
              r,
              {
                theme: "gray",
                variant: "solid",
                "icon-left": "code",
                onClick: t(o).fetch,
                loading: t(o).loading,
              },
              { default: n(() => e[3] || (e[3] = [a(" Click to send 'ping' request ")])), _: 1 },
              8,
              ["onClick", "loading"]
            ),
            l("div", null, d(t(o).data), 1),
            l("pre", null, d(t(o)), 1),
            l("div", C, [
              s(
                r,
                { onClick: e[0] || (e[0] = (u) => (i.value = !0)) },
                { default: n(() => e[4] || (e[4] = [a("Open Dialog")])), _: 1 }
              ),
              s(
                r,
                { onClick: e[1] || (e[1] = (u) => t(m).logout.submit()) },
                { default: n(() => e[5] || (e[5] = [a("Logout")])), _: 1 }
              ),
            ]),
            s(
              t(b),
              {
                title: "Title",
                modelValue: i.value,
                "onUpdate:modelValue": e[2] || (e[2] = (u) => (i.value = u)),
              },
              { default: n(() => e[6] || (e[6] = [a(" Dialog content ")])), _: 1 },
              8,
              ["modelValue"]
            ),
          ])
        );
      };
    },
  };
export { B as default };
