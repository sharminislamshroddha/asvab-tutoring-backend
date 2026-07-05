// Prisma seed: npx prisma db seed

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      { name: "Admin" },
      { name: "Instructor" },
      { name: "Student" },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Roles seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });