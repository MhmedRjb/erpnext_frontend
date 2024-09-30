import {
  _ as v,
  j as _,
  D as C,
  N as k,
  e as r,
  o as u,
  f as g,
  B as x,
  E as B,
  G as w,
  g as t,
  w as l,
  m as y,
  n,
  t as U,
  x as h,
  M as p,
  F,
} from "./vendor.4bbb97c0.js";
const N = {
    name: "InsertImage",
    props: ["editor"],
    expose: ["openDialog"],
    data() {
      return { addVideoDialog: { url: "", file: null, show: !1 } };
    },
    components: { Button: _, Dialog: C, FileUploader: k },
    methods: {
      openDialog() {
        this.addVideoDialog.show = !0;
      },
      onVideoSelect(i) {
        let e = i.target.files[0];
        !e || (this.addVideoDialog.file = e);
      },
      addVideo(i) {
        this.editor.chain().focus().insertContent(`<video src="${i}"></video>`).run(),
          this.reset();
      },
      reset() {
        this.addVideoDialog = this.$options.data().addVideoDialog;
      },
    },
  },
  b = { class: "flex items-center space-x-2" },
  I = ["src"];
function S(i, e, A, j, o, s) {
  const a = r("Button"),
    V = r("FileUploader"),
    f = r("Dialog");
  return (
    u(),
    g(
      F,
      null,
      [
        x(i.$slots, "default", B(w({ onClick: s.openDialog }))),
        t(
          f,
          {
            options: { title: "Add Video" },
            modelValue: o.addVideoDialog.show,
            "onUpdate:modelValue": e[2] || (e[2] = (d) => (o.addVideoDialog.show = d)),
            onAfterLeave: s.reset,
          },
          {
            "body-content": l(() => [
              t(
                V,
                {
                  "file-types": "video/*",
                  onSuccess: e[0] || (e[0] = (d) => (o.addVideoDialog.url = d.file_url)),
                },
                {
                  default: l(({ file: d, progress: c, uploading: m, openFileSelector: D }) => [
                    y("div", b, [
                      t(
                        a,
                        { onClick: D },
                        {
                          default: l(() => [
                            n(
                              U(
                                m
                                  ? `Uploading ${c}%`
                                  : o.addVideoDialog.url
                                  ? "Change Video"
                                  : "Upload Video"
                              ),
                              1
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["onClick"]
                      ),
                      o.addVideoDialog.url
                        ? (u(),
                          h(
                            a,
                            {
                              key: 0,
                              onClick: () => {
                                (o.addVideoDialog.url = null), (o.addVideoDialog.file = null);
                              },
                            },
                            { default: l(() => e[3] || (e[3] = [n(" Remove ")])), _: 2 },
                            1032,
                            ["onClick"]
                          ))
                        : p("", !0),
                    ]),
                  ]),
                  _: 1,
                }
              ),
              o.addVideoDialog.url
                ? (u(),
                  g(
                    "video",
                    {
                      key: 0,
                      src: o.addVideoDialog.url,
                      class: "mt-2 w-full rounded-lg",
                      type: "video/mp4",
                      controls: "",
                    },
                    null,
                    8,
                    I
                  ))
                : p("", !0),
            ]),
            actions: l(() => [
              t(
                a,
                {
                  variant: "solid",
                  onClick: e[1] || (e[1] = (d) => s.addVideo(o.addVideoDialog.url)),
                },
                { default: l(() => e[4] || (e[4] = [n(" Insert Video ")])), _: 1 }
              ),
              t(
                a,
                { onClick: s.reset },
                { default: l(() => e[5] || (e[5] = [n("Cancel")])), _: 1 },
                8,
                ["onClick"]
              ),
            ]),
            _: 1,
          },
          8,
          ["modelValue", "onAfterLeave"]
        ),
      ],
      64
    )
  );
}
var L = v(N, [["render", S]]);
export { L as default };
