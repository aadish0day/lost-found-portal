"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Search, CheckCircle } from "lucide-react"

export default function ReportPage() {
  const [formData, setFormData] = useState({
    reporterName: "",
    type: "",
    itemName: "",
    description: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        reporterName: "",
        type: "",
        itemName: "",
        description: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-8 pb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Report Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for helping make our campus community better. Your report has been added to our database.
            </p>
            <Link href="/items">
              <Button className="bg-blue-600 hover:bg-blue-700">View All Reports</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Campus Lost & Found</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/report" className="text-blue-600 font-medium">
                Report Item
              </Link>
              <Link href="/items" className="text-gray-700 hover:text-blue-600 font-medium">
                View Reports
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Report an Item</CardTitle>
              <p className="text-blue-100">
                Help us reunite lost items with their owners by providing detailed information.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Reporter Name */}
                <div>
                  <Label htmlFor="reporterName" className="text-sm font-medium text-gray-700">
                    Your Name *
                  </Label>
                  <Input
                    id="reporterName"
                    type="text"
                    required
                    value={formData.reporterName}
                    onChange={(e) => handleInputChange("reporterName", e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                </div>

                {/* Type Selection */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Report Type *</Label>
                  <RadioGroup
                    value={formData.type}
                    onValueChange={(value) => handleInputChange("type", value)}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Lost" id="lost" />
                      <Label htmlFor="lost" className="text-gray-700">
                        I lost something
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Found" id="found" />
                      <Label htmlFor="found" className="text-gray-700">
                        I found something
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Item Name */}
                <div>
                  <Label htmlFor="itemName" className="text-sm font-medium text-gray-700">
                    Item Name *
                  </Label>
                  <Input
                    id="itemName"
                    type="text"
                    required
                    value={formData.itemName}
                    onChange={(e) => handleInputChange("itemName", e.target.value)}
                    placeholder="e.g., iPhone 13, Blue Backpack, Textbook"
                    className="mt-1"
                  />
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    required
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Provide detailed information: color, brand, size, where it was lost/found, any distinguishing features..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  disabled={!formData.reporterName || !formData.type || !formData.itemName || !formData.description}
                >
                  Submit Report
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> The more details you provide, the easier it will be to match lost and found
                  items. Include information like color, brand, size, and where the item was lost or found.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
