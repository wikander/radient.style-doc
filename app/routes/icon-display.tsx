import {
  json,
  LinksFunction,
  LoaderArgs,
  V2_MetaFunction,
} from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import style from "../style/icon-display.css";
import { setCssCustomProperty } from "~/utils/ui-utils";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: style,
  },
];

export const loader = async ({ request }: LoaderArgs) => {
  return json(null);
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "SMS Campaign" }];
};

const SetGridSizeButton = ({
  label,
  size,
}: {
  label: string;
  size: number;
}) => {
  function handleClick() {
    setCssCustomProperty("--gridSize", `${size}px`);
  }

  return (
    <button className="btn-default" type="button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default function IconDisplay() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="icon-container">
      <nav>
        <SetGridSizeButton label="S" size={40}></SetGridSizeButton>
        <SetGridSizeButton label="M" size={100}></SetGridSizeButton>
        <SetGridSizeButton label="L" size={250}></SetGridSizeButton>
        <SetGridSizeButton label="XL" size={400}></SetGridSizeButton>
        <SetGridSizeButton label="FULL" size={40000}></SetGridSizeButton>
      </nav>
      <div className="icon-display">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
