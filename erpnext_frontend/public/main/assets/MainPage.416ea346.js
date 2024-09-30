import {
  o,
  f as i,
  m as e,
  t as p,
  p as m,
  q as b,
  a as f,
  F as x,
  v,
  x as h,
} from "./vendor.4bbb97c0.js";
const y = {
    class: "absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform",
    viewBox: "0 0 375 283",
    fill: "none",
    style: { opacity: "0.1" },
  },
  w = {
    class:
      "relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform",
  },
  _ = { href: "#", class: "py-5 text-center size-36" },
  k = ["src"],
  S = {
    class:
      "pt-4 py-10 text-sm font-medium capitalize font-body text-green-900 sm:text-base md:text-lg lg:text-xl xl:text-2xl md:pt-6",
  },
  B = {
    __name: "WorkspaceCard",
    props: {
      workspace: { type: Object, required: !0 },
      color: { type: String, required: !0 },
      svgData: { type: String, required: !0 },
    },
    setup(r) {
      return (n, t) => (
        o(),
        i(
          "div",
          {
            class: m(["flex-grow relative overflow-hidden rounded-lg shadow-lg group  ", r.color]),
          },
          [
            (o(),
            i(
              "svg",
              y,
              t[0] ||
                (t[0] = [
                  e(
                    "rect",
                    {
                      x: "159.52",
                      y: "175",
                      width: "152",
                      height: "152",
                      rx: "8",
                      transform: "rotate(-45 159.52 175)",
                      fill: "white",
                    },
                    null,
                    -1
                  ),
                  e(
                    "rect",
                    {
                      y: "107.48",
                      width: "152",
                      height: "152",
                      rx: "8",
                      transform: "rotate(-45 0 107.48)",
                      fill: "white",
                    },
                    null,
                    -1
                  ),
                ])
            )),
            e("div", w, [
              t[1] ||
                (t[1] = e(
                  "div",
                  {
                    class: "block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3",
                    style: {
                      background: "radial-gradient(black, transparent 60%)",
                      transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                      opacity: "0.2",
                    },
                  },
                  null,
                  -1
                )),
              e("a", _, [
                e(
                  "img",
                  { src: r.svgData, class: "block mx-auto", alt: "Workspace Icon" },
                  null,
                  8,
                  k
                ),
                e("p", S, p(r.workspace.title), 1),
              ]),
            ]),
          ],
          2
        )
      );
    },
  },
  j = { class: "h-screen flex flex-col" },
  D = { class: "flex flex-grow mb-56" },
  M = { class: "flex-grow overflow-auto lg:overflow-hidden" },
  R = {
    class:
      "flex flex-wrap gap-4 justify-center mx-auto w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",
  },
  C = "https://redpixelthemes.com/assets/images/icon-portfolio-green.svg",
  q = {
    __name: "MainPage",
    setup(r) {
      const n = b({ doctype: "Workspace", fields: ["title"], auto: !0 }),
        t = f(() => {
          if (n.list.data) return n.list.data;
        }),
        c = {
          Accounting: "bg-teal-500",
          Assets: "bg-red-500",
          Build: "bg-blue-500",
          Buying: "bg-yellow-500",
          CRM: "bg-green-500",
          "Financial Reports": "bg-purple-500",
          Home: "bg-pink-500",
          Integrations: "bg-teal-500",
          Manufacturing: "bg-orange-500",
          Payables: "bg-cyan-500",
          Projects: "bg-green-500",
          Quality: "bg-amber-500",
          Receivables: "bg-emerald-500",
          Selling: "bg-gray-500",
          Settings: "bg-rose-500",
          Stock: "bg-violet-500",
          Support: "bg-purple-500",
          Tools: "bg-gray-500",
          Users: "bg-stone-500",
          Website: "bg-red-600",
        },
        g = (l) => c[l] || "bg-teal-500",
        d = {
          Accounting: "https://redpixelthemes.com/assets/images/icon-portfolio-green.svg",
          CRM: "https://redpixelthemes.com/assets/images/icon-business-green.svg",
          Projects: "https://redpixelthemes.com/assets/images/icon-startup-green.svg",
          Selling: "https://redpixelthemes.com/assets/images/icon-ecommerce-green.svg",
        },
        u = (l) => d[l] || C;
      return (l, s) => (
        o(),
        i("div", j, [
          s[2] ||
            (s[2] = e(
              "nav",
              { class: "bg-gray-800 text-white flex h-10 mb-10" },
              " Navigation Bar ",
              -1
            )),
          e("div", D, [
            s[0] || (s[0] = e("div", { class: "w-52" }, null, -1)),
            e("div", M, [
              e("div", R, [
                (o(!0),
                i(
                  x,
                  null,
                  v(
                    t.value,
                    (a) => (
                      o(),
                      h(
                        B,
                        { key: a.title, workspace: a, color: g(a.title), svgData: u(a.title) },
                        null,
                        8,
                        ["workspace", "color", "svgData"]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            s[1] || (s[1] = e("div", { class: "w-52" }, null, -1)),
          ]),
        ])
      );
    },
  };
export { q as default };
