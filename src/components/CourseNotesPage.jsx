import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus, Search, Download, FileText } from "lucide-react"
import { useState } from "react"

const initialNotes = []

export default function CourseNotesPage() {
    const [data, setData] = useState(initialNotes)
    const [searchCourse, setSearchCourse] = useState("")
    const [searchTitle, setSearchTitle] = useState("")

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-100/50">
                    <h1 className="text-xl font-medium text-gray-800">Manage Course Notes</h1>
                    <div className="flex gap-2">
                        <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Download size={14} /> Export
                        </Button>
                        <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Plus size={14} /> Add New Note
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-6 bg-gray-50/50 border-b border-gray-100 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div className="space-y-1 md:col-span-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Course</label>
                        <input
                            placeholder="All Courses"
                            className="w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchCourse}
                            onChange={(e) => setSearchCourse(e.target.value)}
                        />
                    </div>
                    <div className="space-y-1 md:col-span-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Search Notes</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                            <input
                                placeholder="Search by title..."
                                className="w-full h-10 pl-9 pr-3 py-2 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTitle}
                                onChange={(e) => setSearchTitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <Button className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white h-10 w-full">
                        Search
                    </Button>
                    <Button variant="outline" className="text-orange-500 border-orange-200 bg-[#d97706]/10 hover:bg-[#d97706]/20 hover:text-orange-600 border-none h-10 w-full" onClick={() => { setSearchCourse(""); setSearchTitle(""); }}>
                        Reset
                    </Button>
                </div>

                {/* Table */}
                <Table>
                    <TableHeader className="bg-[#f1f5f9] border-b border-gray-200">
                        <TableRow>
                            <TableHead className="w-[80px] font-semibold text-gray-700 pl-6 text-xs uppercase tracking-wider border-r border-gray-200">#</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Course</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Subject/Semester</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Title</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Note</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Created At</TableHead>
                            <TableHead className="text-center font-semibold text-gray-700 pr-8 text-xs uppercase tracking-wider">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="h-64 text-center border-b border-gray-200">
                                    <div className="flex flex-col items-center justify-center text-gray-400">
                                        <FileText size={48} className="mb-4 opacity-50" />
                                        <p className="text-sm">No course Notes found</p>
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
