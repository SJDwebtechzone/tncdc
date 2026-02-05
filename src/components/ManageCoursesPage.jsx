import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Pencil, Plus, Search, Download, X } from "lucide-react"
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCourse } from '@/store/courseSlice';

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
    const courses = useSelector((state) => state.courses.courses);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("")

    const filteredData = courses.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-6 relative">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6 border border-gray-100">

                {/* Top Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <h1 className="text-xl font-bold text-gray-800">Manage Courses</h1>
                    <div className="flex gap-2">
                        <Button
                            onClick={() => navigate('/dashboard/courses/add')}
                            className="bg-[#1e463a] hover:bg-[#153229] text-white gap-2 rounded-sm px-4 h-9 text-[11px] uppercase tracking-widest font-bold shadow-md transition-all active:scale-95"
                        >
                            <Plus size={14} /> Add Course
                        </Button>
                        <Button className="bg-[#1e463a] hover:bg-[#153229] text-white gap-2 rounded-sm px-4 h-9 text-[11px] uppercase tracking-widest font-bold shadow-md transition-all active:scale-95">
                            <Download size={14} /> Export
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 items-center mb-8 bg-gray-50/50 p-4 rounded-lg border border-gray-100">
                    <div className="bg-white border border-gray-200 rounded-lg flex items-center px-3 h-10 w-full md:w-80 shadow-sm">
                        <Search className="text-gray-400 mr-2" size={16} />
                        <input
                            placeholder="Search...."
                            className="bg-transparent border-none outline-none text-sm w-full text-gray-600 placeholder:text-gray-400 font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button className="bg-[#1e3a8a] hover:bg-blue-900 text-white h-10 px-12 rounded-sm font-bold shadow-md transition-all active:scale-95">
                        Search
                    </Button>
                    <Button variant="outline" className="text-orange-400 border-orange-300 hover:bg-orange-50 h-10 px-12 rounded-sm font-bold transition-all active:scale-95" onClick={() => setSearchQuery("")}>
                        Reset
                    </Button>
                </div>

                {/* Table */}
                <div className="border border-gray-100 rounded-sm overflow-hidden bg-white shadow-sm">
                    <Table>
                        <TableHeader className="bg-gray-50/50 border-b border-gray-100">
                            <TableRow>
                                <TableHead className="w-[50px] font-bold text-gray-800 pl-4 text-[10px] uppercase tracking-wider border-r border-gray-100">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100 whitespace-nowrap min-w-[200px]">Title</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100 whitespace-nowrap">Course Type</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100 whitespace-nowrap">Course Category</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100 whitespace-nowrap">Course Code</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100 whitespace-nowrap">Duration</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100 whitespace-nowrap">MRP</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100 whitespace-nowrap">Price</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100 whitespace-nowrap">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100 whitespace-nowrap text-center">Course Subject</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100 whitespace-nowrap">Created At</TableHead>
                                <TableHead className="text-center font-bold text-gray-800 pr-4 text-[10px] uppercase tracking-wider whitespace-nowrap">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.map((row, index) => (
                                <TableRow key={row.id} className="hover:bg-gray-50/50 border-b border-gray-100">
                                    <TableCell className="text-center font-bold text-gray-500 py-3 border-r border-gray-100 text-[11px]">{index + 1}</TableCell>
                                    <TableCell className="font-bold text-gray-800 text-[11px] border-r border-gray-100">{row.name || row.title}</TableCell>
                                    <TableCell className="text-gray-600 font-medium text-[11px] border-r border-gray-100 w-[100px]">
                                        <div className="flex flex-col gap-1">
                                            <span>{row.type || 'Single'}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-gray-600 font-medium text-[11px] border-r border-gray-100">{row.category}</TableCell>
                                    <TableCell className="text-gray-600 font-medium text-[11px] border-r border-gray-100">{row.code}</TableCell>
                                    <TableCell className="text-gray-600 font-medium text-[11px] border-r border-gray-100">{row.duration}</TableCell>
                                    <TableCell className="text-gray-600 font-medium text-[11px] border-r border-gray-100">{row.mrp}</TableCell>
                                    <TableCell className="text-gray-600 font-medium text-[11px] border-r border-gray-100">{row.fees || row.price}</TableCell>
                                    <TableCell className="border-r border-gray-100 text-center">
                                        <CustomBlueSwitch
                                            checked={row.status !== false}
                                            onCheckedChange={() => { }}
                                        />
                                    </TableCell>
                                    <TableCell className="border-r border-gray-100 text-center">
                                        {row.type === "Multiple Exam" ? (
                                            <Button size="sm" className="h-7 bg-[#1e3a8a] hover:bg-blue-900 text-white text-[10px] font-bold px-3 rounded-sm shadow-sm uppercase tracking-wider">
                                                View
                                            </Button>
                                        ) : (
                                            <Button size="sm" className="h-auto py-1 bg-[#1e3a8a] hover:bg-blue-900 text-white text-[10px] font-bold px-3 rounded-sm shadow-sm leading-tight uppercase tracking-wider">
                                                Add / <br /> Update
                                            </Button>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-gray-500 font-medium text-[10px] border-r border-gray-100 whitespace-nowrap">
                                        {row.createdAt ? row.createdAt.split(' ')[0] : '2026-02-04'} <br />
                                        {/* <span className="text-gray-400">{row.createdAt.split(' ')[1]}</span> */}
                                    </TableCell>
                                    <TableCell className="text-center pr-4">
                                        <Button size="icon" className="h-8 w-8 bg-[#1a85ff] hover:bg-blue-600 text-white rounded-sm shadow-sm transition-all active:scale-95">
                                            <Pencil size={14} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="text-center py-4">
                <p className="text-[10px] text-gray-400 font-medium">Copyright 2026-27 © DITRP INDIA All rights reserved.</p>
            </div>
        </div>
    )
}
