var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/scs167/Projects/priv/radient.style-doc/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/scs167/Projects/priv/radient.style-doc/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist());

// app/style/base.css
var base_default = "/build/_assets/base-KEYUUXZT.css";

// app/root.tsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  {
    rel: "stylesheet",
    href: base_default
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/icon-display.experiment-icons.tsx
var icon_display_experiment_icons_exports = {};
__export(icon_display_experiment_icons_exports, {
  default: () => IconDisplay,
  links: () => links2,
  meta: () => meta
});

// app/style/experiment-icons.css
var experiment_icons_default = "/build/_assets/experiment-icons-5DNS2Q3V.css";

// app/routes/icon-display.experiment-icons.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), meta = () => [{ title: "Experiments Icons" }], links2 = () => [
  {
    rel: "stylesheet",
    href: experiment_icons_default
  }
];
function IconDisplay() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: [
    { className: "test" },
    { className: "hourglass" },
    { className: "t" },
    { className: "text-blend" },
    { className: "linear-test" },
    { className: "sector" }
  ].map((icon, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      className: `radient-icon-base ${icon.className}`
    },
    index
  )) });
}

// app/routes/icon-display.paint-icons.tsx
var icon_display_paint_icons_exports = {};
__export(icon_display_paint_icons_exports, {
  default: () => IconDisplay2,
  links: () => links3,
  meta: () => meta2
});

// app/style/paint-icons.css
var paint_icons_default = "/build/_assets/paint-icons-EY6SV7H4.css";

// app/routes/icon-display.paint-icons.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), meta2 = () => [{ title: "Paint Icons" }], links3 = () => [
  {
    rel: "stylesheet",
    href: paint_icons_default
  }
];
function IconDisplay2() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: [
    { className: "segment" },
    { className: "rectangle" },
    { className: "rectangle-anti-aliased" },
    { className: "circle" },
    { className: "circle-outline" },
    { className: "circle-outline-1" },
    { className: "oval" },
    { className: "oval-outline" },
    { className: "triangle" },
    { className: "triangle1" },
    { className: "sector" }
  ].map((icon, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      className: `radient-icon-base ${icon.className}`
    },
    index
  )) });
}

// app/routes/icon-display.all-icons.tsx
var icon_display_all_icons_exports = {};
__export(icon_display_all_icons_exports, {
  default: () => IconDisplay3,
  loader: () => loader,
  meta: () => meta3
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
db = new import_client.PrismaClient();

// app/routes/icon-display.all-icons.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), loader = async ({ request }) => (0, import_node2.json)({
  icons: await db.icon.findMany()
}), meta3 = () => [{ title: "All Icons" }];
function IconDisplay3() {
  let data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: data.icons.map((icon, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      className: `radient-icon-base ${icon.className}`
    },
    index
  )) });
}

// app/routes/icon-display.tsx
var icon_display_exports = {};
__export(icon_display_exports, {
  default: () => IconDisplay4,
  links: () => links4,
  loader: () => loader2,
  meta: () => meta4
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/style/icon-display.css
var icon_display_default = "/build/_assets/icon-display-IKPZMNAS.css";

// app/utils/ui-utils.ts
function setCssCustomProperty(property, value) {
  let cssRoot = document.querySelector(":root");
  cssRoot && cssRoot.style.setProperty(property, value);
}

// app/routes/icon-display.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), links4 = () => [
  {
    rel: "stylesheet",
    href: icon_display_default
  }
], loader2 = async ({ request }) => (0, import_node3.json)(null), meta4 = () => [{ title: "SMS Campaign" }], SetGridSizeButton = ({
  label,
  size
}) => {
  function handleClick() {
    setCssCustomProperty("--gridSize", `${size}px`);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { className: "btn-default", type: "button", onClick: handleClick, children: label });
};
function IconDisplay4() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "icon-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("nav", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SetGridSizeButton, { label: "S", size: 40 }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SetGridSizeButton, { label: "M", size: 100 }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SetGridSizeButton, { label: "L", size: 250 }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SetGridSizeButton, { label: "XL", size: 400 }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SetGridSizeButton, { label: "FULL", size: 4e4 })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "icon-display", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react4.Outlet, {}) })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta5
});
var import_react5 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime"), meta5 = () => [{ title: "New Remix App" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { children: "Radient.Style" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react5.Link, { to: "icon-display/all-icons", children: "All" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react5.Link, { to: "icon-display/experiment-icons", children: "Experiments" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react5.Link, { to: "icon-display/paint-icons", children: "Paint" }) })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-4TNMWZTN.js", imports: ["/build/_shared/chunk-5GQT37SS.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WHEWDE7B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-7EK2NZZG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/icon-display": { id: "routes/icon-display", parentId: "root", path: "icon-display", index: void 0, caseSensitive: void 0, module: "/build/routes/icon-display-44WEQY3O.js", imports: ["/build/_shared/chunk-YD3KDPF7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/icon-display.all-icons": { id: "routes/icon-display.all-icons", parentId: "routes/icon-display", path: "all-icons", index: void 0, caseSensitive: void 0, module: "/build/routes/icon-display.all-icons-TKG7DO27.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/icon-display.experiment-icons": { id: "routes/icon-display.experiment-icons", parentId: "routes/icon-display", path: "experiment-icons", index: void 0, caseSensitive: void 0, module: "/build/routes/icon-display.experiment-icons-ROZ7QZN6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/icon-display.paint-icons": { id: "routes/icon-display.paint-icons", parentId: "routes/icon-display", path: "paint-icons", index: void 0, caseSensitive: void 0, module: "/build/routes/icon-display.paint-icons-YHQZZK3D.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "cf037a12", hmr: void 0, url: "/build/manifest-CF037A12.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !1, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/icon-display.experiment-icons": {
    id: "routes/icon-display.experiment-icons",
    parentId: "routes/icon-display",
    path: "experiment-icons",
    index: void 0,
    caseSensitive: void 0,
    module: icon_display_experiment_icons_exports
  },
  "routes/icon-display.paint-icons": {
    id: "routes/icon-display.paint-icons",
    parentId: "routes/icon-display",
    path: "paint-icons",
    index: void 0,
    caseSensitive: void 0,
    module: icon_display_paint_icons_exports
  },
  "routes/icon-display.all-icons": {
    id: "routes/icon-display.all-icons",
    parentId: "routes/icon-display",
    path: "all-icons",
    index: void 0,
    caseSensitive: void 0,
    module: icon_display_all_icons_exports
  },
  "routes/icon-display": {
    id: "routes/icon-display",
    parentId: "root",
    path: "icon-display",
    index: void 0,
    caseSensitive: void 0,
    module: icon_display_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
