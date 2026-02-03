import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Upload, History, Download, Search, Settings, ArrowRight, Lock, Edit, RotateCcw, Eye, Phone, User, Trash2, Users, Calendar } from "lucide-react";

export default function StudentEnquiriesPage() {
    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="bg-[#6b5b95] bg-gradient-to-r from-[#5d5fef] to-[#8b5cf6] rounded-xl p-8 text-white shadow-lg flex justify-between items-center mb-8">
                {[
                    { label: "Total Enquiries", count: 2 },
                    { label: "New Enquiries", count: 2 },
                    { label: "Pending Follow-ups", count: 0 },
                    { label: "Converted", count: 0 },
                ].map((stat, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center justify-center border-r border-[#ffffff30] last:border-0">
                        <div className="text-4xl font-bold mb-1">{stat.count}</div>
                        <div className="text-sm font-medium opacity-90">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">

                {/* Header & Actions */}
                <div className="flex flex-col md:flex-row justify-between items-center p-6 pb-2">
                    <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                        <Users size={20} className="text-gray-700" /> All Enquiries
                    </h2>
                    <div className="flex gap-2">
                        <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white gap-2 text-xs font-medium px-4 h-9">
                            <Plus size={14} /> Add New Enquiry
                        </Button>
                        <Button className="bg-[#52525b] hover:bg-[#52525b]/90 text-white gap-2 text-xs font-medium px-4 h-9">
                            <Upload size={14} /> Import
                        </Button>
                        <Button className="bg-[#b45309] hover:bg-[#b45309]/90 text-white gap-2 text-xs font-medium px-4 h-9">
                            <History size={14} /> Import History
                        </Button>
                        <Button className="bg-[#065f46] hover:bg-[#065f46]/90 text-white gap-2 text-xs font-medium px-4 h-9">
                            <Download size={14} /> Export
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-6 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {/* Row 1 */}
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Search</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                                <Input className="pl-9 h-10 w-full text-xs bg-gray-50/50" placeholder="Name, mobile, email..." />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Status</label>
                            <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                                <option>All Status</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Source</label>
                            <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                                <option>All Sources</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Assigned To</label>
                            <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                                <option>All Employees</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Course</label>
                            <Input className="h-10 w-full text-xs bg-white" placeholder="Course interested" />
                        </div>

                        {/* Row 2 */}
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">From Date</label>
                            <div className="relative">
                                <Input placeholder="dd-mm-yyyy" className="h-10 w-full text-xs text-gray-500" />
                                <Calendar className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={14} />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">To Date</label>
                            <div className="relative">
                                <Input placeholder="dd-mm-yyyy" className="h-10 w-full text-xs text-gray-500" />
                                <Calendar className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={14} />
                            </div>
                        </div>
                        <div className="flex items-end">
                            <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white h-10 text-xs font-medium">
                                <Search size={14} className="mr-2" /> Search
                            </Button>
                        </div>
                        <div className="flex items-end">
                            <Button className="w-full bg-[#b45309] hover:bg-[#b45309]/90 text-white h-10 text-xs font-medium">
                                <RotateCcw size={14} className="mr-2" /> Reset
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-gray-50/50">
                            <TableRow>
                                <TableHead className="w-[40px] font-bold text-gray-800 text-xs uppercase">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase w-[50px]">Photo</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase min-w-[200px]">Student Details</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Contact</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase max-w-[200px]">Course</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Source</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Assigned To</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase whitespace-nowrap">Follow-ups</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Created</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase text-center w-[120px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[1, 2].map((id) => (
                                <TableRow key={id} className="border-b border-gray-50 hover:bg-gray-50">
                                    <TableCell className="text-orange-500 font-medium text-xs align-top">{id}</TableCell>
                                    <TableCell className="align-top">
                                        <div className="bg-[#b45309] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">
                                            <User size={14} />
                                        </div>
                                    </TableCell>
                                    <TableCell className="align-top">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[#1e3a8a] text-sm">
                                                {id === 1 ? 'Mo fjfjf jfjfj' : 'narendra fjfjf jfjfj'}
                                            </span>
                                            <span className="text-gray-400 text-[10px]">S/O</span>
                                            <span className="text-gray-400 text-[10px]">DOB: {id === 1 ? '13 Jan, 2026' : '30 Jan, 2026'} (0 years)</span>
                                            <span className="text-gray-400 text-[10px]">Male</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="align-top">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-green-600 text-xs flex items-center gap-1">
                                                📞 {id === 1 ? '9500396045' : '8806608670'}
                                            </span>
                                            <span className="text-blue-500 text-[10px]">
                                                📧 {id === 1 ? 'superadmin@gmail.com' : 'listentocoolbreeze@gmail.com'}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="align-top">
                                        <div className="text-gray-600 text-xs truncate max-w-[200px]" title="Advance diploma In Computer Science(M-CS-7090)">
                                            Advance diploma In Computer Science(M-CS-7090)
                                        </div>
                                    </TableCell>
                                    <TableCell className="align-top">
                                        <span className="bg-gray-500 text-white text-[10px] px-2 py-0.5 rounded">Unknown</span>
                                    </TableCell>
                                    <TableCell className="text-gray-600 text-xs align-top">SivaSankar</TableCell>
                                    <TableCell className="align-top">
                                        <span className="bg-[#1e3a8a] text-white text-[10px] px-2 py-0.5 rounded">New</span>
                                    </TableCell>
                                    <TableCell className="align-top">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                            </div>
                                            <span className="text-blue-500 text-[10px]">Total: 0</span>
                                            <span className="text-gray-400 text-[10px]">No scheduled</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-gray-600 text-xs align-top">
                                        30 Jan,<br />2026
                                    </TableCell>
                                    <TableCell className="align-top">
                                        <div className="grid grid-cols-2 gap-2 justify-items-center">
                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a]">
                                                <Eye size={14} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a]">
                                                <Edit size={14} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a]">
                                                <Phone size={14} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a]">
                                                <User size={14} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a] col-span-2">
                                                <Trash2 size={14} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="p-4 bg-white border-t border-gray-100 flex justify-center text-xs text-gray-500">
                {/* Pagination could go here */}
            </div>
        </div>
    )
}
