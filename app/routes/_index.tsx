import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Radient.Style</h1>
      <ul>
        <li>
          <Link to="icon-display/all-icons">All</Link>
        </li>
        <li>
          <Link to="icon-display/experiment-icons">Experiments</Link>
        </li>
        <li>
          <Link to="icon-display/paint-icons">Paint</Link>
        </li>
      </ul>
    </div>
  );
}
