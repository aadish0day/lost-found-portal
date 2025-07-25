import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Users } from "lucide-react"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 dark:from-gray-900 dark:to-gray-800">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Lost Something? Found Something? <span className="text-blue-600 dark:text-blue-400">Let's Fix That.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Our digital platform connects students and staff to reunite lost items with their owners. Report what you've
            lost or found, and help build a more connected campus community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/report">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 text-lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Report an Item
              </Button>
            </Link>
            <Link href="/items">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 text-lg bg-transparent"
              >
                <Search className="w-5 h-5 mr-2" />
                View Reports
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Report</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Submit details about items you've lost or found on campus with our simple form.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Search</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Browse through reported items using our search and filter tools to find matches.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Connect</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Get reunited with your belongings and help others find theirs too.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Making a Difference on Campus</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-blue-100 dark:text-blue-200">Items Reported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">89%</div>
              <div className="text-blue-100 dark:text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100 dark:text-blue-200">Happy Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">About This Project</h4>
              <p className="text-gray-300 dark:text-gray-400 mb-4">
                The Online Lost and Found Portal is a full-stack web application designed to help college students and
                staff efficiently report and recover lost items on campus.
              </p>
              <p className="text-gray-300 dark:text-gray-400">
                Built with React.js, this platform provides a modern, user-friendly solution to a common campus problem.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact & Feedback</h4>
              <p className="text-gray-300 dark:text-gray-400 mb-2">Have questions or suggestions?</p>
              <p className="text-blue-400 dark:text-blue-300">📧 support@campuslostandfound.edu</p>
              <p className="text-gray-400 dark:text-gray-500 mt-6 text-sm">
                © 2024 Campus Lost & Found Portal. Built for academic purposes.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
