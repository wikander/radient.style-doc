import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import style from "../style/icon-display.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: style,
  },
];

export const loader = async ({ request }: LoaderArgs) => {
  return json(null);
};

export default function IconDisplay() {
  return <div className={`radient-icon-base pie`}></div>;
}
