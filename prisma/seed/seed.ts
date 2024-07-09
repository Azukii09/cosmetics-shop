/**
 * ! Executing this script will delete all data in your database and seed it with 10 role.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";

const main = async () => {
  const seed = await createSeedClient();

  // Truncate all tables in the database
  await seed.$resetDatabase();

  // Seed the database with 10 role
  await seed.role([
    {
      name: "owner",
      desc:"for owner",
    },
    {
      name: "administrator",
      desc:"for administrator",
    },
    {
      name: "finance manager",
      desc:"for finance",
    },
    {
      name: "store manager",
      desc:"for store manager",
    },
    {
      name: "marketing",
      desc:"for marketing",
    },
    {
      name: "business representative",
      desc:"for business representative",
    },
    {
      name: "warehouse manager",
      desc:"for warehouse manager",
    },
    {
      name: "staff of finance",
      desc:"for staff of finance",
    },
    {
      name: "staff of store",
      desc:"for staff of store",
    },
    {
      name: "staff of marketing",
      desc:"for staff of marketing",
    },
    {
      name: "staff of warehouse",
      desc:"for staff of warehouse",
    },
  ]);

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log("Database seeded successfully!");

  process.exit();
};

main();