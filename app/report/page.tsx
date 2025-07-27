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
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"

export default function ReportPage() {
    const [formData, setFormData] = useState({
        reporterName: "",
        type: "",
        itemName: "",
        description: "",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/reports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to submit report')
            }

            setIsSubmitted(true)

            setTimeout(() => {
                setIsSubmitted(false)
                setFormData({
                    reporterName: "",
                    type: "",
                    itemName: "",
                    description: "",
                })
            }, 3000)
        } catch (error) {
            console.error('Error submitting report:', error)
            alert('Failed to submit report. Please try again.')
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
                <Card className="w-full max-w-md text-center dark:bg-gray-800 border-0 shadow-lg">
                    <CardContent className="pt-8 pb-6">
                        <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Report Submitted!</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Thank you for helping make our campus community better. Your report has been added to our database.
                        </p>
                        <Link href="/items">
                            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                                View All Reports
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 dark:from-gray-900 dark:to-gray-800">
            <Header currentPage="report" />

            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <Card className="shadow-lg border-0 dark:bg-gray-800">
                        <CardHeader className="bg-blue-600 dark:bg-blue-700 text-white rounded-t-lg">
                            <CardTitle className="text-2xl">Report an Item</CardTitle>
                            <p className="text-blue-100 dark:text-blue-200">
                                Help us reunite lost items with their owners by providing detailed information.
                            </p>
                        </CardHeader>
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="reporterName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Your Name *
                                    </Label>
                                    <Input
                                        id="reporterName"
                                        type="text"
                                        required
                                        value={formData.reporterName}
                                        onChange={(e) => handleInputChange("reporterName", e.target.value)}
                                        placeholder="Enter your full name"
                                        className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                                        Report Type *
                                    </Label>
                                    <RadioGroup
                                        value={formData.type}
                                        onValueChange={(value) => handleInputChange("type", value)}
                                        className="flex space-x-6"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Lost" id="lost" />
                                            <Label htmlFor="lost" className="text-gray-700 dark:text-gray-300">
                                                I lost something
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Found" id="found" />
                                            <Label htmlFor="found" className="text-gray-700 dark:text-gray-300">
                                                I found something
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div>
                                    <Label htmlFor="itemName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Item Name *
                                    </Label>
                                    <Input
                                        id="itemName"
                                        type="text"
                                        required
                                        value={formData.itemName}
                                        onChange={(e) => handleInputChange("itemName", e.target.value)}
                                        placeholder="e.g., iPhone 13, Blue Backpack, Textbook"
                                        className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Description *
                                    </Label>
                                    <Textarea
                                        id="description"
                                        required
                                        value={formData.description}
                                        onChange={(e) => handleInputChange("description", e.target.value)}
                                        placeholder="Provide detailed information: color, brand, size, where it was lost/found, any distinguishing features..."
                                        rows={4}
                                        className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 text-lg"
                                    disabled={!formData.reporterName || !formData.type || !formData.itemName || !formData.description}
                                >
                                    Submit Report
                                </Button>
                            </form>

                            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <p className="text-sm text-blue-800 dark:text-blue-200">
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
