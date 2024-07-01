import {
  require_node
} from "/build/_shared/chunk-FFHBG6Q3.js";
import {
  useLoaderData,
  useOutletContext
} from "/build/_shared/chunk-6SF52W5A.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4QJKEWZT.js";

// empty-module:~/utils/db.server
var require_db = __commonJS({
  "empty-module:~/utils/db.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/icon-display.all-icons.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "All Icons" }];
};
function IconDisplay() {
  const data = useLoaderData();
  const outletContext = useOutletContext();
  console.log("outlet ctx", outletContext);
  let filteredData = null;
  if (outletContext.filter) {
    filteredData = data.icons.filter((icon) => {
      return icon.className.includes(outletContext.filter);
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: (filteredData != null ? filteredData : data.icons).map((icon, index) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `radient-icon-base ${icon.className}`
      },
      index,
      false,
      {
        fileName: "app/routes/icon-display.all-icons.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, false, {
    fileName: "app/routes/icon-display.all-icons.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
export {
  IconDisplay as default,
  meta
};
//# sourceMappingURL=/build/routes/icon-display.all-icons-PC5C3MLJ.js.map
