import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus, Search, Download, Trash2, Code, Palette } from "lucide-react"
import { useState } from "react"

const initialCategories = [
    { id: 1, name: "Development", count: 3, status: true, icon: "dev" },
    { id: 2, name: "Designing Courses", count: 1, status: true, icon: "design" },
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

export default function CourseCategoriesPage() {
    const [data, setData] = useState(initialCategories)
    const [searchQuery, setSearchQuery] = useState("")

    const toggleStatus = (id) => {
        setData(data.map(item => item.id === id ? { ...item, status: !item.status } : item))
    }

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-100/50">
                    <h1 className="text-xl font-medium text-gray-800">Manage Course Categories</h1>
                    <div className="flex gap-2">
                        <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Download size={14} /> Export
                        </Button>
                        <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Plus size={14} /> Add New Category
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-6 bg-gray-50/50 border-b border-gray-100 flex flex-col md:flex-row gap-4 items-center">
                    <div className="bg-white border border-gray-200 rounded-lg flex items-center px-3 h-10 w-full md:w-80">
                        <Search className="text-gray-400 mr-2" size={18} />
                        <input
                            placeholder="Search categories..."
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
                <Table>
                    <TableHeader className="bg-[#f1f5f9] border-b border-gray-200">
                        <TableRow>
                            <TableHead className="w-[80px] font-bold text-gray-700 pl-6 text-xs uppercase tracking-wider border-r border-gray-200">#</TableHead>
                            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider w-[30%] border-r border-gray-200">Category Name</TableHead>
                            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Icon</TableHead>
                            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Total Courses</TableHead>
                            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Status</TableHead>
                            <TableHead className="text-center font-bold text-gray-700 pr-8 text-xs uppercase tracking-wider">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData.map((row, index) => (
                            <TableRow key={row.id} className="hover:bg-gray-50/50 border-b border-gray-200">
                                <TableCell className="font-medium text-blue-600 py-4 pl-6 border-r border-gray-200">{index + 1}</TableCell>
                                <TableCell className="font-medium text-gray-700 text-sm border-r border-gray-200">{row.name}</TableCell>
                                <TableCell className="border-r border-gray-200">
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                                        {row.icon === 'dev' ? (
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" className="w-6 h-6" alt="Icon" />
                                        ) : (
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" className="w-6 h-6" alt="Icon" />
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="border-r border-gray-200">
                                    <div className="bg-[#1a237e] text-white text-xs font-bold px-2 py-1 rounded w-fit h-6 flex items-center justify-center px-3">
                                        {row.count}
                                    </div>
                                </TableCell>
                                <TableCell className="border-r border-gray-200">
                                    <CustomBlueSwitch
                                        checked={row.status}
                                        onCheckedChange={() => toggleStatus(row.id)}
                                    />
                                </TableCell>
                                <TableCell className="text-center pr-6">
                                    <Button size="icon" className="h-8 w-8 bg-[#1a85ff] hover:bg-[#1a85ff]/90 text-white rounded-md shadow-sm">
                                        <Pencil size={14} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
