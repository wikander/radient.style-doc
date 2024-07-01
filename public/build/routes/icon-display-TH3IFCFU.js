import {
  icon_display_default
} from "/build/_shared/chunk-ZKN3MBBY.js";
import {
  require_node
} from "/build/_shared/chunk-FFHBG6Q3.js";
import {
  Outlet,
  useSearchParams
} from "/build/_shared/chunk-6SF52W5A.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4QJKEWZT.js";

// app/routes/icon-display.tsx
var import_node = __toESM(require_node());

// app/utils/ui-utils.ts
function setCssCustomProperty(property, value) {
  const cssRoot = document.querySelector(":root");
  if (cssRoot) {
    cssRoot.style.setProperty(property, value);
  }
}

// app/routes/icon-display.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  {
    rel: "stylesheet",
    href: icon_display_default
  }
];
var meta = () => {
  return [{ title: "SMS Campaign" }];
};
var SetGridSizeButton = ({
  label,
  size
}) => {
  function handleClick() {
    setCssCustomProperty("--gridSize", `${size}px`);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn-default", type: "button", onClick: handleClick, children: label }, void 0, false, {
    fileName: "app/routes/icon-display.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
};
function IconDisplay() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SetGridSizeButton, { label: "S", size: 24 }, void 0, false, {
        fileName: "app/routes/icon-display.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SetGridSizeButton, { label: "M", size: 24 * 2 }, void 0, false, {
        fileName: "app/routes/icon-display.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SetGridSizeButton, { label: "L", size: 24 * 4 }, void 0, false, {
        fileName: "app/routes/icon-display.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SetGridSizeButton, { label: "XL", size: 24 * 16 }, void 0, false, {
        fileName: "app/routes/icon-display.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SetGridSizeButton, { label: "FULL", size: 4e4 }, void 0, false, {
        fileName: "app/routes/icon-display.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/icon-display.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-display", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: { filter } }, void 0, false, {
      fileName: "app/routes/icon-display.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/icon-display.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/icon-display.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
export {
  IconDisplay as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/icon-display-TH3IFCFU.js.map
