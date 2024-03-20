import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const loader = async ({ request }: LoaderArgs) => {
  return json({
    icons: await db.icon.findMany(),
  });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "All Icons" }];
};

export default function IconDisplay() {
  const data = useLoaderData<typeof loader>();

  const outletContext = useOutletContext() as any;
  console.log("outlet ctx", outletContext);
  let filteredData: null | { className: string }[] = null;
  if (outletContext.filter) {
    filteredData = data.icons.filter((icon: { className: string }) => {
      return icon.className.includes(outletContext.filter);
    });
  }
  return (
    <>
      {(filteredData ?? data.icons).map((icon, index) => {
        return (
          <div
            key={index}
            className={`radient-icon-base ${icon.className}`}></div>
        );
      })}
    </>
  );
}
