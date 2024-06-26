import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import style from "../style/paint-icons.css";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Paint Icons" }];
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: style,
  },
];

export default function IconDisplay() {
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
    { className: "sector" },
  ];
  return (
    <>
      {icons.map((icon, index) => {
        return (
          <div
            key={index}
            className={`radient-icon-base ${icon.className}`}></div>
        );
      })}
    </>
  );
}
