import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4QJKEWZT.js";

// app/style/paint-icons.css
var paint_icons_default = "/build/_assets/paint-icons-52MFNXFX.css";

// app/routes/icon-display.paint-icons.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Paint Icons" }];
};
var links = () => [
  {
    rel: "stylesheet",
    href: paint_icons_default
  }
];
function IconDisplay() {
  const icons = [
    { className: "segment" },
    { className: "stripes" },
    { className: "stripes-reference" },
    { className: "rectangle" },
    { className: "rectangle-anti-aliased" },
    { className: "circle" },
    { className: "circle-outlined" },
    { className: "oval" },
    { className: "oval-outlined" },
    { className: "triangle" },
    { className: "triangle1" },
    { className: "sector" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: icons.map((icon, index) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `radient-icon-base ${icon.className}`
      },
      index,
      false,
      {
        fileName: "app/routes/icon-display.paint-icons.tsx",
        lineNumber: 34,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, false, {
    fileName: "app/routes/icon-display.paint-icons.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export {
  IconDisplay as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/icon-display.paint-icons-6DHQ3O43.js.map
