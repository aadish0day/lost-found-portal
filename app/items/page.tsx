"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search as SearchIcon, Filter as FilterIcon, Calendar as CalendarIcon, User as UserIcon, ArrowLeft as ArrowLeftIcon } from "lucide-react"

// Mock data - in a real app, this would come from your backend/database
const mockItems = [
  {
    id: 1,
    reporterName: "Sarah Johnson",
    type: "Lost",
    itemName: "iPhone 13 Pro",
    description:
      "Black iPhone 13 Pro with a clear case. Lost near the library on Tuesday afternoon. Has a small crack on the bottom left corner.",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    reporterName: "Mike Chen",
    type: "Found",
    itemName: "Blue Backpack",
    description:
      "Found a navy blue Jansport backpack in the cafeteria. Contains textbooks and notebooks. No ID found inside.",
    createdAt: "2024-01-14T14:20:00Z",
  },
  {
    id: 3,
    reporterName: "Emily Davis",
    type: "Lost",
    itemName: "Silver MacBook Air",
    description:
      "13-inch MacBook Air with several stickers on the lid. Lost in the computer lab in Building C. Very important for my thesis work!",
    createdAt: "2024-01-13T09:15:00Z",
  },
  {
    id: 4,
    reporterName: "Alex Rodriguez",
    type: "Found",
    itemName: "Car Keys",
    description:
      "Found a set of car keys with a Toyota keychain near the parking lot. Keys have a small flashlight attached.",
    createdAt: "2024-01-12T16:45:00Z",
  },
  {
    id: 5,
    reporterName: "Jessica Wong",
    type: "Lost",
    itemName: "Chemistry Textbook",
    description:
      "Organic Chemistry textbook by Wade, 9th edition. Has my name written inside the front cover. Lost somewhere between the chemistry building and dormitory.",
    createdAt: "2024-01-11T11:30:00Z",
  },
  {
    id: 6,
    reporterName: "David Kim",
    type: "Found",
    itemName: "Wireless Earbuds",
    description:
      "Found white Apple AirPods in a charging case near the gym entrance. Case has a small dent on one side.",
    createdAt: "2024-01-10T13:20:00Z",
  },
]

export default function ItemsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("All")

  const filteredItems = useMemo(() => {
    return mockItems.filter((item) => {
      const matchesSearch =
        item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter = filterType === "All" || item.type === filterType
      return matchesSearch && matchesFilter
    })
  }, [searchTerm, filterType])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <SearchIcon className="w-5 h-5 text-white" />
                </div>
              <h1 className="text-xl font-bold text-gray-900">Campus Lost & Found</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/report" className="text-gray-700 hover:text-blue-600 font-medium">
                Report Item
              </Link>
              <Link href="/items" className="text-blue-600 font-medium">
                View Reports
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Reports</h2>
            <p className="text-gray-600">Browse through all lost and found items reported by the campus community.</p>
          </div>

          {/* Search and Filter Controls */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search by item name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant={filterType === "All" ? "default" : "outline"}
                    onClick={() => setFilterType("All")}
                    className={filterType === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
                  >
                  <FilterIcon className="w-4 h-4 mr-2" />
                    All ({mockItems.length})
                  </Button>
                  <Button
                    variant={filterType === "Lost" ? "default" : "outline"}
                    onClick={() => setFilterType("Lost")}
                    className={filterType === "Lost" ? "bg-red-600 hover:bg-red-700" : ""}
                  >
                    Lost ({mockItems.filter((item) => item.type === "Lost").length})
                  </Button>
                  <Button
                    variant={filterType === "Found" ? "default" : "outline"}
                    onClick={() => setFilterType("Found")}
                    className={filterType === "Found" ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    Found ({mockItems.filter((item) => item.type === "Found").length})
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredItems.length} of {mockItems.length} reports
            </p>
          </div>

          {/* Items Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-semibold text-gray-900">{item.itemName}</CardTitle>
                    <Badge
                      variant={item.type === "Lost" ? "destructive" : "default"}
                      className={item.type === "Lost" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}
                    >
                      {item.type}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-1" />
                      {item.reporterName}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {formatDate(item.createdAt)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <Card className="text-center py-12 border-0 shadow-lg">
              <CardContent>
                <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Link href="/report">
                  <Button className="bg-blue-600 hover:bg-blue-700">Report an Item</Button>
                </Link>
              </CardContent>
            </Card>
          )}

          {/* Call to Action */}
          <Card className="mt-12 bg-blue-600 text-white border-0">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4">Don't see your item?</h3>
              <p className="text-blue-100 mb-6">
                Report your lost or found item to help connect with other members of the campus community.
              </p>
              <Link href="/report">
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Report an Item
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
