/**
 * ! Executing this script will delete all data in your database and seed it with 10 role.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";
import HashPassword from "../../services/functionality/passwordHandler";

const main = async () => {
  const seed = await createSeedClient();

  // Truncate all tables in the database
  // @ts-ignore
  await seed.$resetDatabase();

  // Seed the database with 10 role
  // @ts-ignore
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

  // @ts-ignore
  await seed.user([
    {
      name: "owner account",
      email: "owner@dresyee.com",
      password: HashPassword("password"),
      address:"address 1",
      phone:"081234567890",
      roleId:1
    },
    {
      name: "administrator account",
      email: "administrator@dresyee.com",
      password: HashPassword("password"),
      address:"address 2",
      phone:"081234567890",
      roleId:2
    },
    {
      name: "finance manager account",
      email: "finance_manager@dresyee.com",
      password: HashPassword("password"),
      address:"address 3",
      phone:"081234567890",
      roleId:3
    },
    {
      name: "store manager account",
      email: "store_manager@dresyee.com",
      password: HashPassword("password"),
      address:"address 4",
      phone:"081234567890",
      roleId:4
    },
    {
      name: "marketing account",
      email: "marketing@dresyee.com",
      password: HashPassword("password"),
      address:"address 5",
      phone:"081234567890",
      roleId:5
    },
    {
      name: "business representative account",
      email: "br@dresyee.com",
      password: HashPassword("password"),
      address:"address 6",
      phone:"081234567890",
      roleId:6
    },
    {
      name: "warehouse manager account",
      email: "warehouse@dresyee.com",
      password: HashPassword("password"),
      address:"address 7",
      phone:"081234567890",
      roleId:7
    },
    {
      name: "staff of finance account",
      email: "staff_finance@dresyee.com",
      password: HashPassword("password"),
      address:"address 8",
      phone:"081234567890",
      roleId:8
    },
    {
      name: "staff of store account",
      email: "staff_store@dresyee.com",
      password: HashPassword("password"),
      address:"address 9",
      phone:"081234567890",
      roleId:9
    },
    {
      name: "staff of marketing account",
      email: "staff_marketing@dresyee.com",
      password: HashPassword("password"),
      address:"address 10",
      phone:"081234567890",
      roleId:10
    },
    {
      name: "staff of warehouse account",
      email: "staff_warehouse@dresyee.com",
      password: HashPassword("password"),
      address:"address 11",
      phone:"081234567890",
      roleId:11
    },
  ])

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log("Database seeded successfully!");

  process.exit();
};

main();