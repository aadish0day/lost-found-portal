import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.report.deleteMany()

  // Create sample reports
  const reports = [
    {
      reporterName: "Sarah Johnson",
      type: "Lost",
      itemName: "iPhone 13 Pro",
      description: "Black iPhone 13 Pro with a clear case. Lost near the library on Tuesday afternoon. Has a small crack on the bottom left corner.",
    },
    {
      reporterName: "Mike Chen",
      type: "Found",
      itemName: "Blue Backpack",
      description: "Found a navy blue Jansport backpack in the cafeteria. Contains textbooks and notebooks. No ID found inside.",
    },
    {
      reporterName: "Emily Davis",
      type: "Lost",
      itemName: "Silver MacBook Air",
      description: "13-inch MacBook Air with several stickers on the lid. Lost in the computer lab in Building C. Very important for my thesis work!",
    },
    {
      reporterName: "Alex Rodriguez",
      type: "Found",
      itemName: "Car Keys",
      description: "Found a set of car keys with a Toyota keychain near the parking lot. Keys have a small flashlight attached.",
    },
    {
      reporterName: "Jessica Wong",
      type: "Lost",
      itemName: "Chemistry Textbook",
      description: "Organic Chemistry textbook by Wade, 9th edition. Has my name written inside the front cover. Lost somewhere between the chemistry building and dormitory.",
    },
    {
      reporterName: "David Kim",
      type: "Found",
      itemName: "Wireless Earbuds",
      description: "Found white Apple AirPods in a charging case near the gym entrance. Case has a small dent on one side.",
    },
  ]

  for (const report of reports) {
    await prisma.report.create({
      data: report,
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 