import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4QJKEWZT.js";

// app/style/experiment-icons.css
var experiment_icons_default = "/build/_assets/experiment-icons-CMO7QON6.css";

// app/routes/icon-display.experiment-icons.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Experiments Icons" }];
};
var links = () => [
  {
    rel: "stylesheet",
    href: experiment_icons_default
  }
];
function IconDisplay() {
  const icons = [
    { className: "test" },
    { className: "hourglass" },
    { className: "t" },
    { className: "text-blend" },
    { className: "linear-test" },
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
        fileName: "app/routes/icon-display.experiment-icons.tsx",
        lineNumber: 28,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, false, {
    fileName: "app/routes/icon-display.experiment-icons.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
export {
  IconDisplay as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/icon-display.experiment-icons-DTGBD5WM.js.map
