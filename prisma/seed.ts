import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    allIcons().map((icon: { className: string }) => {
      return db.icons.create({ data: icon });
    })
  );
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });

function allIcons() {
  return [
    {
      className: "cloud",
    },
    {
      className: "menu",
    },
    {
      className: "apps",
    },
    {
      className: "blaj",
    },
    {
      className: "wifi",
    },
    {
      className: "contactless",
    },
    {
      className: "pie",
    },
    {
      className: "pie-periphery",
    },
    {
      className: "face",
    },
    {
      className: "done",
    },
    {
      className: "chevron-up",
    },
    {
      className: "chevron-down",
    },
    {
      className: "chevron-right",
    },
    {
      className: "chevron-left",
    },
    {
      className: "arrow-right",
    },
    {
      className: "arrow-down",
    },
    {
      className: "arrow-up",
    },
    {
      className: "arrow-left",
    },
    {
      className: "ball",
    },
    {
      className: "barcode",
    },
    {
      className: "bar-chart",
    },
    {
      className: "logo",
    },
    {
      className: "logo-outer",
    },
    {
      className: "search",
    },
    {
      className: "trash",
    },
    {
      className: "add",
    },
    {
      className: "add-circle",
    },
    {
      className: "remove",
    },
    {
      className: "remove-circle",
    },
    {
      className: "info",
    },
    {
      className: "info-circle",
    },
    {
      className: "battery-empty",
    },
    {
      className: "battery-1",
    },
    {
      className: "battery-2",
    },
    {
      className: "battery-3",
    },
    {
      className: "battery-4",
    },
    {
      className: "battery-5",
    },
    {
      className: "battery-6",
    },
    {
      className: "battery-full",
    },
  ];
}
