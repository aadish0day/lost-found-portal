import { NextResponse } from "next/server"

// This would typically fetch from a database
// For demo purposes, we'll use the same in-memory storage
const items: Array<{
  id: number
  reporter_name: string
  type: "Lost" | "Found"
  item_name: string
  description: string
  created_at: string
}> = [
  {
    id: 1,
    reporter_name: "John Smith",
    type: "Lost",
    item_name: "iPhone 13 Pro",
    description:
      "Black iPhone 13 Pro with a blue case. Lost near the library on Tuesday afternoon. Has a small crack on the screen.",
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 2,
    reporter_name: "Sarah Johnson",
    type: "Found",
    item_name: "Blue Backpack",
    description:
      "Found a blue Jansport backpack in the cafeteria. Contains textbooks and notebooks. No ID found inside.",
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 3,
    reporter_name: "Mike Davis",
    type: "Lost",
    item_name: "Car Keys",
    description:
      "Lost my car keys with a Honda keychain and a small flashlight attached. Last seen in the gym locker room.",
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 4,
    reporter_name: "Emily Chen",
    type: "Found",
    item_name: "Silver Watch",
    description: "Found a silver Casio watch near the parking lot. Has some scratches but still works perfectly.",
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 5,
    reporter_name: "Alex Rodriguez",
    type: "Lost",
    item_name: "Laptop Charger",
    description: "Lost my MacBook Pro charger (USB-C) in the computer lab. It's the 67W model with a white cable.",
    created_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
]

export async function GET() {
  try {
    // Sort items by created_at in descending order (newest first)
    const sortedItems = items.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

    return NextResponse.json(sortedItems)
  } catch (error) {
    console.error("Error fetching items:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
