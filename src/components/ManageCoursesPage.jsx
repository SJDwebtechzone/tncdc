import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus, Search, Download } from "lucide-react"
import { useState } from "react"

const initialCourses = [
    {
        id: 1,
        title: "Certificate In Python Full Stack Web Development(M-PFSWD-5456)",
        type: "Multiple Exam",
        category: "Certificate",
        code: "M-PFSWD-5456",
        duration: "6 Months",
        mrp: "25000",
        price: "23000",
        status: true,
        subject: null,
        createdAt: "2026-02-02 16:24:56"
    },
    {
        id: 2,
        title: "Advance diploma In Computer Science(M-CS-7090)",
        type: "Multiple Exam",
        category: "Advance diploma",
        code: "M-CS-7090",
        duration: "180 Days",
        mrp: "20000",
        price: "18000",
        status: true,
        subject: null,
        createdAt: "2026-01-29 12:12:35"
    },
    {
        id: 3,
        title: "Certificate In Python Full Stack Web Development(S-PFSWD-3677)",
        type: "Single",
        category: "Certificate",
        code: "S-PFSWD-3677",
        duration: "6 Months",
        mrp: "15000",
        price: "10000",
        status: true,
        subject: null,
        createdAt: "2026-01-29 10:48:05"
    },
    {
        id: 4,
        title: "Certificate In Vlsi Design Verification(S-VDV-5786)",
        type: "Single",
        category: "Certificate",
        code: "S-VDV-5786",
        duration: "3 Months",
        mrp: "10000",
        price: "9000",
        status: true,
        subject: null,
        createdAt: "2026-01-28 14:44:49"
    },
]

const CustomBlueSwitch = ({ checked, onCheckedChange }) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`
            relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:outline-none 
            ${checked ? 'bg-white border-[#1a237e]' : 'bg-gray-200 border-transparent'}
        `}
    >
        <span
            className={`
                pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform 
                ${checked ? 'translate-x-4 bg-[#1a237e]' : 'translate-x-0.5 bg-white'}
            `}
        />
    </button>
)

export default function ManageCoursesPage() {
    const [data, setData] = useState(initialCourses)
    const [searchQuery, setSearchQuery] = useState("")

    const toggleStatus = (id) => {
        setData(data.map(item => item.id === id ? { ...item, status: !item.status } : item))
    }

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">

                {/* Top Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h1 className="text-xl font-medium text-gray-800">Manage Courses</h1>
                    <div className="flex gap-2">
                        <Button className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Plus size={14} /> Add Course
                        </Button>
                        <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Download size={14} /> Export
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                    <div className="bg-white border border-gray-200 rounded-md flex items-center px-3 h-10 w-full md:w-80 relative">
                        <Search className="text-gray-400 mr-2" size={16} />
                        <input
                            placeholder="Search...."
                            className="bg-transparent border-none outline-none text-sm w-full text-gray-600 placeholder:text-gray-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-50 h-10 px-12 md:w-48">
                        Submit
                    </Button>
                    <Button variant="outline" className="text-orange-400 border-orange-300 hover:bg-orange-50 h-10 px-12 md:w-48" onClick={() => setSearchQuery("")}>
                        Reset
                    </Button>
                </div>

                {/* Table */}
                <div className="border border-gray-200 rounded-md overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-[#f1f5f9] border-b border-gray-200">
                            <TableRow>
                                <TableHead className="w-[50px] font-bold text-gray-700 pl-4 text-xs uppercase tracking-wider border-r border-gray-200">#</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap min-w-[200px]">Title</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Course Type</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Course Category</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Course Code</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Duration</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">MRP</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Price</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Status</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap text-center">Course Subject</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Created At</TableHead>
                                <TableHead className="text-center font-bold text-gray-700 pr-4 text-xs uppercase tracking-wider whitespace-nowrap">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.map((row, index) => (
                                <TableRow key={row.id} className="hover:bg-gray-50/50 border-b border-gray-200">
                                    <TableCell className="font-medium text-gray-500 py-3 pl-4 border-r border-gray-200 text-xs">{index + 1}</TableCell>
                                    <TableCell className="font-medium text-gray-600 text-xs border-r border-gray-200">{row.title}</TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200 w-[100px]">
                                        <div className="flex flex-col gap-1">
                                            <span>{row.type}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200">{row.category}</TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200">{row.code}</TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200">{row.duration}</TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200">{row.mrp}</TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200">{row.price}</TableCell>
                                    <TableCell className="border-r border-gray-200 text-center">
                                        <CustomBlueSwitch
                                            checked={row.status}
                                            onCheckedChange={() => toggleStatus(row.id)}
                                        />
                                    </TableCell>
                                    <TableCell className="border-r border-gray-200 text-center">
                                        {row.type === "Multiple Exam" ? (
                                            <Button size="sm" className="h-7 bg-[#1a237e] hover:bg-[#1a237e]/90 text-white text-[10px] px-3 rounded">
                                                View
                                            </Button>
                                        ) : (
                                            <Button size="sm" className="h-auto py-1 bg-[#1a237e] hover:bg-[#1a237e]/90 text-white text-[10px] px-3 rounded leading-tight">
                                                Add / <br /> Update
                                            </Button>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-gray-500 text-[10px] border-r border-gray-200 whitespace-nowrap">
                                        {row.createdAt.split(' ')[0]} <br /> <span className="text-gray-400">{row.createdAt.split(' ')[1]}</span>
                                    </TableCell>
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
