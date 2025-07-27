import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
    try {
        const reports = await prisma.report.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return NextResponse.json(reports)
    } catch (error) {
        console.error('Error fetching reports:', error)
        return NextResponse.json(
            { error: 'Failed to fetch reports' },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { reporterName, type, itemName, description } = body

        // Validate required fields
        if (!reporterName || !type || !itemName || !description) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Validate type
        if (!['Lost', 'Found'].includes(type)) {
            return NextResponse.json(
                { error: 'Type must be either "Lost" or "Found"' },
                { status: 400 }
            )
        }

        const report = await prisma.report.create({
            data: {
                reporterName,
                type,
                itemName,
                description
            }
        })

        return NextResponse.json(report, { status: 201 })
    } catch (error) {
        console.error('Error creating report:', error)
        return NextResponse.json(
            { error: 'Failed to create report' },
            { status: 500 }
        )
    }
} 
