import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus, Search, Download } from "lucide-react"
import { useState } from "react"

const initialBatches = [
    {
        id: 1,
        name: "Premium",
        timing: "06:15 PM - 05:16 PM",
        totalStudents: 20,
        totalAdmissions: 1,
        remainingAdmissions: 19,
        totalAmount: "18,000.00",
        paidAmount: "0.00",
        remainingAmount: "18,000.00",
        createdAt: "28 Jan, 2026"
    },
]

export default function ManageBatchesPage() {
    const [data, setData] = useState(initialBatches)
    const [searchQuery, setSearchQuery] = useState("")

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-100/50">
                    <h1 className="text-xl font-medium text-gray-800">Manage Batches</h1>
                    <div className="flex gap-2">
                        <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Download size={14} /> Export
                        </Button>
                        <Button className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Plus size={14} /> Add New Batch
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-6 bg-gray-50/50 border-b border-gray-100 flex flex-col md:flex-row gap-4 items-center">
                    <div className="bg-white border border-gray-200 rounded-lg flex items-center px-3 h-10 w-full md:w-80">
                        <Search className="text-gray-400 mr-2" size={18} />
                        <input
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none text-sm w-full text-gray-600 placeholder:text-gray-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 h-10 px-8">
                        Search
                    </Button>
                    <Button variant="outline" className="border-orange-300 text-orange-400 hover:bg-orange-50 h-10 px-8" onClick={() => setSearchQuery("")}>
                        Reset
                    </Button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-[#f1f5f9] border-b border-gray-200">
                            <TableRow>
                                <TableHead className="w-[50px] font-bold text-gray-700 pl-4 text-xs uppercase tracking-wider border-r border-gray-200">#</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Batch Name</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Timing</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Total Students</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Total Admissions</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Remaining Admissions</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Total Amount</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Paid Amount</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Remaining Amount</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Created At</TableHead>
                                <TableHead className="text-center font-bold text-gray-700 pr-4 text-xs uppercase tracking-wider whitespace-nowrap">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.map((row, index) => (
                                <TableRow key={row.id} className="hover:bg-gray-50/50 border-b border-gray-200">
                                    <TableCell className="font-medium text-blue-600 py-3 pl-4 border-r border-gray-200">{index + 1}</TableCell>
                                    <TableCell className="font-medium text-blue-600 text-sm border-r border-gray-200">{row.name}</TableCell>
                                    <TableCell className="border-r border-gray-200">
                                        <span className="bg-[#52525b] text-white px-2 py-1 rounded text-xs whitespace-nowrap">{row.timing}</span>
                                    </TableCell>
                                    <TableCell className="border-r border-gray-200">
                                        <span className="bg-[#1a237e] text-white px-2 py-1 rounded text-xs font-bold">{row.totalStudents}</span>
                                    </TableCell>
                                    <TableCell className="border-r border-gray-200">
                                        <span className="bg-[#15803d] text-white px-2 py-1 rounded text-xs font-bold">{row.totalAdmissions}</span>
                                    </TableCell>
                                    <TableCell className="border-r border-gray-200">
                                        <span className="bg-[#fbbf24] text-white px-2 py-1 rounded text-xs font-bold">{row.remainingAdmissions}</span>
                                    </TableCell>
                                    <TableCell className="border-r border-gray-200">
                                        <span className="bg-[#52525b] text-white px-2 py-1 rounded text-xs font-bold">₹{row.totalAmount}</span>
                                    </TableCell>
                                    <TableCell className="border-r border-gray-200">
                                        <span className="bg-[#15803d] text-white px-2 py-1 rounded text-xs font-bold">₹{row.paidAmount}</span>
                                    </TableCell>
                                    <TableCell className="border-r border-gray-200">
                                        <span className="bg-[#dc2626] text-white px-2 py-1 rounded text-xs font-bold">₹{row.remainingAmount}</span>
                                    </TableCell>
                                    <TableCell className="text-xs text-gray-500 border-r border-gray-100 whitespace-nowrap">{row.createdAt}</TableCell>
                                    <TableCell className="text-center pr-4">
                                        <Button size="icon" variant="ghost" className="h-8 w-8 text-[#1a237e] hover:text-[#1a237e] hover:bg-blue-50 border border-blue-100 rounded-lg">
                                            <Pencil size={14} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
