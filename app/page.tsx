import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Plus, MapPin, Users } from "lucide-react"

export default function HomePage() {
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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lost Something? Found Something?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our digital portal helps connect lost items with their owners across the college campus. Report lost or
            found items quickly and search through submissions easily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/report">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-5 w-5" />
                Report an Item
              </Button>
            </Link>
            <Link href="/view">
              <Button size="lg" variant="outline">
                <Search className="mr-2 h-5 w-5" />
                Search Items
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="mr-2 h-5 w-5 text-green-600" />
                Easy Reporting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Quickly report lost or found items with detailed descriptions and contact information.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5 text-blue-600" />
                Smart Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Search through all submissions by item name, type, or description to find what you're looking for.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-purple-600" />
                Community Driven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with fellow students and staff to reunite lost items with their rightful owners.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Portal Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">24</div>
              <div className="text-gray-600">Items Reported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">18</div>
              <div className="text-gray-600">Items Reunited</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">156</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">75%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Campus Lost & Found Portal. Built for our college community.</p>
        </div>
      </footer>
    </div>
  )
}
