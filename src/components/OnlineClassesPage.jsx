import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus, Search, Download } from "lucide-react"
import { useState } from "react"
import { Video } from "lucide-react"

const initialClasses = []

export default function OnlineClassesPage() {
    const [data, setData] = useState(initialClasses)

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden p-6 py-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <Video className="text-gray-700" size={28} /> Online Classes
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">Manage and schedule virtual classes for your courses</p>
                    </div>
                    <Button className="bg-[#10b981] hover:bg-[#059669] text-white gap-2 rounded-md px-6 h-10 text-sm font-medium">
                        <Plus size={16} /> Add New Class
                    </Button>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg p-6 flex flex-col items-start gap-4 border-t-4 border-blue-500 shadow-sm shadow-blue-50">
                        <div className="p-3 bg-blue-500 rounded-lg text-white">
                            <Video size={24} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800">0</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mt-1">TOTAL CLASSES</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 flex flex-col items-start gap-4 border-t-4 border-green-500 shadow-sm shadow-green-50">
                        <div className="p-3 bg-green-500 rounded-lg text-white">
                            <div className="w-6 h-6 flex items-center justify-center border-2 border-white rounded-full text-[10px] font-bold">▶</div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800">0</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mt-1">ACTIVE CLASSES</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 flex flex-col items-start gap-4 border-t-4 border-red-500 shadow-sm shadow-red-50">
                        <div className="p-3 bg-red-500 rounded-lg text-white">
                            <div className="w-6 h-6 flex items-center justify-center font-bold">ClockIcon</div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800">0</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mt-1">EXPIRED CLASSES</p>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <Table>
                        <TableHeader className="bg-[#f1f5f9] border-b border-gray-200">
                            <TableRow>
                                <TableHead className="w-[80px] font-bold text-gray-700 pl-6 text-xs uppercase tracking-wider border-r border-gray-200">#</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Title</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Course</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Description</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Expiry Date</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Status</TableHead>
                                <TableHead className="text-center font-bold text-gray-700 pr-8 text-xs uppercase tracking-wider">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="h-64 text-center border-b border-gray-200">
                                        <div className="flex flex-col items-center justify-center text-gray-400">
                                            <Video size={48} className="mb-4 opacity-50 text-gray-300" />
                                            <h3 className="text-lg font-medium text-gray-500">No Online Classes Found</h3>
                                            <p className="text-sm text-gray-400 mt-1">Start by adding your first online class</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                data.map((row, index) => (
                                    <TableRow key={index}>
                                        {/* Row implementation */}
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
