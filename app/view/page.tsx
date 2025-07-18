"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Search, Calendar, User, ArrowLeft } from "lucide-react"

interface Item {
  id: number
  reporter_name: string
  type: "Lost" | "Found"
  item_name: string
  description: string
  created_at: string
}

export default function ViewPage() {
  const [items, setItems] = useState<Item[]>([])
  const [filteredItems, setFilteredItems] = useState<Item[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchItems()
  }, [])

  useEffect(() => {
    filterItems()
  }, [items, searchTerm, filterType])

  const fetchItems = async () => {
    try {
      const response = await fetch("/api/view-items")
      if (response.ok) {
        const data = await response.json()
        setItems(data)
      }
    } catch (error) {
      console.error("Error fetching items:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterItems = () => {
    let filtered = items

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.item_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.reporter_name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by type
    if (filterType !== "All") {
      filtered = filtered.filter((item) => item.type === filterType)
    }

    setFilteredItems(filtered)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Campus Lost & Found</h1>
            </div>
            <nav className="flex space-x-4">
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link href="/report">
                <Button variant="ghost">Report Item</Button>
              </Link>
              <Link href="/view">
                <Button variant="ghost">View Items</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">All Reported Items</h2>
          <p className="text-gray-600">Search through lost and found items reported by the campus community.</p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by item name, description, or reporter name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-48">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Items</SelectItem>
                    <SelectItem value="Lost">Lost Items</SelectItem>
                    <SelectItem value="Found">Found Items</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredItems.length} of {items.length} items
          </p>
        </div>

        {/* Items Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading items...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-600 mb-4">
                {items.length === 0 ? "No items have been reported yet." : "No items match your search criteria."}
              </p>
              <Link href="/report">
                <Button>Report an Item</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.item_name}</CardTitle>
                    <Badge
                      variant={item.type === "Lost" ? "destructive" : "default"}
                      className={item.type === "Lost" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}
                    >
                      {item.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-sm">{item.description}</CardDescription>

                  <div className="flex items-center text-sm text-gray-600">
                    <User className="mr-1 h-4 w-4" />
                    <span>Reported by: {item.reporter_name}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{formatDate(item.created_at)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
