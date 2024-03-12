import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  // allIcons().map((icon: { className: string }) => {
  //   return db.icon.create({ data: icon });
  // })

  //   db.iconGroup.create({
  //     data: {
  //       name: "test",
  //       icons: {
  //         create: [
  //           {
  //             className: "cloud",
  //           },
  //         ],
  //       },
  //     },
  //   })
  // );

  await db.iconGroup.create({
    data: {
      name: "logo",
      icons: {
        create: [
          {
            className: "logo",
          },
          {
            className: "logo-outer",
          },
        ],
      },
    },
  });

  await db.iconGroup.create({
    data: {
      name: "battery",
      icons: {
        create: [
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
        ],
      },
    },
  });
  await db.iconGroup.create({
    data: {
      name: "arrows",
      icons: {
        create: [
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
            className: "arrow-up",
          },
          {
            className: "arrow-down",
          },
          {
            className: "arrow-right",
          },
          {
            className: "arrow-left",
          },
        ],
      },
    },
  });

  await db.iconGroup.create({
    data: {
      name: "symbols",
      icons: {
        create: [
          {
            className: "wifi",
          },
          {
            className: "contactless",
          },
        ],
      },
    },
  });
  await db.iconGroup.create({
    data: {
      name: "arrows",
      icons: {
        create: [
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
            className: "arrow-up",
          },
          {
            className: "arrow-down",
          },
          {
            className: "arrow-right",
          },
          {
            className: "arrow-left",
          },
        ],
      },
    },
  });
  await db.iconGroup.create({
    data: {
      name: "player",
      icons: {
        create: [
          {
            className: "player-stop",
          },
          {
            className: "player-play",
          },
          {
            className: "player-skip-next",
          },
        ],
      },
    },
  });

  await db.iconGroup.create({
    data: {
      name: "diagram",
      icons: {
        create: [
          {
            className: "pie",
          },
          {
            className: "pie-periphery",
          },
          {
            className: "bar-chart",
          },
        ],
      },
    },
  });

  await db.iconGroup.create({
    data: {
      name: "ui",
      icons: {
        create: [
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
        ],
      },
    },
  });

  await db.iconGroup.create({
    data: {
      name: "misc",
      icons: {
        create: [
          {
            className: "cloud",
          },
          {
            className: "face",
          },
          {
            className: "done",
          },
          {
            className: "ball",
          },
          {
            className: "barcode",
          },
        ],
      },
    },
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
