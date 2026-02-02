import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Star } from "lucide-react"
import { useState } from "react"

const initialReviews = []

export default function CourseReviewsPage() {
    const [data, setData] = useState(initialReviews)

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-100/50">
                    <h1 className="text-xl font-medium text-gray-800">Manage Course Reviews</h1>
                    <div className="flex gap-2">
                        <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Download size={14} /> Export
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <Table>
                    <TableHeader className="bg-[#f1f5f9] border-b border-gray-200">
                        <TableRow>
                            <TableHead className="w-[80px] font-semibold text-gray-700 pl-6 text-xs uppercase tracking-wider border-r border-gray-200">#</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Course Name</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Student Name</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Rating</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Review</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Status</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Created At</TableHead>
                            <TableHead className="text-center font-semibold text-gray-700 pr-8 text-xs uppercase tracking-wider">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} className="h-64 text-center border-b border-gray-200">
                                    <div className="flex flex-col items-center justify-center text-gray-400">
                                        <Star size={48} className="mb-4 opacity-50" />
                                        <p className="text-sm">No reviews found</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((row, index) => (
                                <TableRow key={index}>
                                    {/* ... implementation for rows when data exists ... */}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
