"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Calendar, User, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"

interface Report {
    id: string
    reporterName: string
    type: string
    itemName: string
    description: string
    createdAt: string
    updatedAt: string
}

export default function ItemsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [filterType, setFilterType] = useState("All")
    const [items, setItems] = useState<Report[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/api/reports')
                if (!response.ok) {
                    throw new Error('Failed to fetch reports')
                }
                const data = await response.json()
                setItems(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch reports')
            } finally {
                setLoading(false)
            }
        }

        fetchItems()
    }, [])

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            const matchesSearch =
                item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesFilter = filterType === "All" || item.type === filterType
            return matchesSearch && matchesFilter
        })
    }, [items, searchTerm, filterType])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 dark:from-gray-900 dark:to-gray-800">
            <Header currentPage="items" />

            <div className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">All Reports</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Browse through all lost and found items reported by the campus community.
                        </p>
                    </div>

                    <Card className="mb-8 border-0 shadow-lg dark:bg-gray-800">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                                    <Input
                                        type="text"
                                        placeholder="Search by item name or description..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    <Button
                                        variant={filterType === "All" ? "default" : "outline"}
                                        onClick={() => setFilterType("All")}
                                        className={
                                            filterType === "All"
                                                ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                                                : "dark:border-gray-600 dark:text-gray-300"
                                        }
                                    >
                                        <Filter className="w-4 h-4 mr-2" />
                                        All ({items.length})
                                    </Button>
                                    <Button
                                        variant={filterType === "Lost" ? "default" : "outline"}
                                        onClick={() => setFilterType("Lost")}
                                        className={
                                            filterType === "Lost"
                                                ? "bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
                                                : "dark:border-gray-600 dark:text-gray-300"
                                        }
                                    >
                                        Lost ({items.filter((item) => item.type === "Lost").length})
                                    </Button>
                                    <Button
                                        variant={filterType === "Found" ? "default" : "outline"}
                                        onClick={() => setFilterType("Found")}
                                        className={
                                            filterType === "Found"
                                                ? "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                                                : "dark:border-gray-600 dark:text-gray-300"
                                        }
                                    >
                                        Found ({items.filter((item) => item.type === "Found").length})
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {loading && (
                        <Card className="text-center py-12 border-0 shadow-lg dark:bg-gray-800">
                            <CardContent>
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Loading reports...</h3>
                                <p className="text-gray-600 dark:text-gray-300">Please wait while we fetch the latest reports.</p>
                            </CardContent>
                        </Card>
                    )}

                    {error && (
                        <Card className="text-center py-12 border-0 shadow-lg dark:bg-gray-800">
                            <CardContent>
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-red-600 dark:text-red-400 text-2xl">!</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Error loading reports</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
                                <Button
                                    onClick={() => window.location.reload()}
                                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                                >
                                    Try Again
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    {!loading && !error && (
                        <>
                            <div className="mb-6">
                                <p className="text-gray-600 dark:text-gray-300">
                                    Showing {filteredItems.length} of {items.length} reports
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {filteredItems.map((item) => (
                                    <Card
                                        key={item.id}
                                        className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800 dark:shadow-gray-900/20"
                                    >
                                        <CardHeader className="pb-3">
                                            <div className="flex justify-between items-start mb-2">
                                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    {item.itemName}
                                                </CardTitle>
                                                <Badge
                                                    variant={item.type === "Lost" ? "destructive" : "default"}
                                                    className={
                                                        item.type === "Lost"
                                                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                                    }
                                                >
                                                    {item.type}
                                                </Badge>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                                                <div className="flex items-center">
                                                    <User className="w-4 h-4 mr-1" />
                                                    {item.reporterName}
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {formatDate(item.createdAt)}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {filteredItems.length === 0 && (
                                <Card className="text-center py-12 border-0 shadow-lg dark:bg-gray-800">
                                    <CardContent>
                                        <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No items found</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            Try adjusting your search terms or filters to find what you're looking for.
                                        </p>
                                        <Link href="/report">
                                            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                                                Report an Item
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            )}
                        </>
                    )}

                    <Card className="mt-12 bg-blue-600 dark:bg-blue-700 text-white border-0">
                        <CardContent className="text-center py-8">
                            <h3 className="text-2xl font-bold mb-4">Don't see your item?</h3>
                            <p className="text-blue-100 dark:text-blue-200 mb-6">
                                Report your lost or found item to help connect with other members of the campus community.
                            </p>
                            <Link href="/report">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-700 dark:hover:bg-gray-200"
                                >
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
