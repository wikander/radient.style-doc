import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import style from "../style/experiment-icons.css";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Experiments Icons" }];
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: style,
  },
];

export default function IconDisplay() {
  const icons = [
    { className: "test" },
    { className: "hourglass" },
    { className: "t" },
    { className: "text-blend" },
    { className: "linear-test" },
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
