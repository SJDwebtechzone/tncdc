import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, RotateCcw, ArrowLeft, Save } from "lucide-react";

export default function StaffListPage() {
    const [view, setView] = useState('list');

    if (view === 'add') {
        return (
            <div className="space-y-6">
                <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-8">
                    <div className="flex items-center justify-between mb-8 border-b pb-4">
                        <h2 className="text-xl font-medium text-gray-800 tracking-tight">Add New Staff Member</h2>
                        <Button
                            variant="outline"
                            onClick={() => setView('list')}
                            className="h-8 text-[11px] font-medium text-white border-none bg-[#b9875a] hover:bg-[#a6764a] rounded-sm flex items-center gap-1.5 px-4 uppercase tracking-wider"
                        >
                            <ArrowLeft size={14} className="mr-1" /> Back to List
                        </Button>
                    </div>

                    <form className="space-y-8">
                        {/* Basic Information Section */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold text-[#1e3a8a] border-b pb-2 uppercase tracking-wide">Basic Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Select User <span className="text-red-500">*</span></label>
                                    <select className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white text-gray-400 font-sans">
                                        <option>Select User</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Staff Name <span className="text-red-500">*</span></label>
                                    <Input placeholder="Enter Staff Name" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 font-sans" />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Employee ID</label>
                                    <Input placeholder="Enter Employee ID" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 font-sans" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Mobile</label>
                                    <Input placeholder="Enter Mobile Number" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 font-sans" />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Emergency Contact</label>
                                    <Input placeholder="Enter Emergency Contact" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 font-sans" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Date of Joining</label>
                                    <Input type="date" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 font-sans" />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Date of Birth</label>
                                    <Input type="date" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 font-sans" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Department</label>
                                    <Input placeholder="Enter Department" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 font-sans" />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Designation</label>
                                    <Input placeholder="Enter Designation" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 font-sans" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Qualification</label>
                                    <Input placeholder="Enter Qualification" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 font-sans" />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Paid Leave Yearly Allocation</label>
                                    <Input type="number" defaultValue="0" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-500 font-sans" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Address</label>
                                <textarea
                                    placeholder="Enter full address"
                                    className="w-full h-24 rounded-sm border border-gray-200 p-3 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white resize-none font-sans"
                                />
                            </div>
                        </div>

                        {/* Salary Configuration Section */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold text-[#1e3a8a] border-b pb-2 uppercase tracking-wide">Salary Configuration</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">Salary Mode <span className="text-red-500">*</span></label>
                                    <select className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white text-gray-400 font-sans">
                                        <option>Select Salary Mode</option>
                                        <option>Monthly</option>
                                        <option>Weekly</option>
                                        <option>Daily</option>
                                        <option>Hourly</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-6 border-t font-sans">
                            <Button
                                type="submit"
                                className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 h-10 rounded-sm text-[11px] font-bold flex items-center gap-2 shadow-sm border-none uppercase tracking-wide"
                            >
                                <Save size={16} />
                                Save Staff Member
                            </Button>
                            <Button
                                type="button"
                                onClick={() => setView('list')}
                                className="bg-[#b9875a] hover:bg-[#a6764a] text-white px-8 h-10 rounded-sm text-[11px] font-bold border-none transition-colors uppercase tracking-wide flex items-center gap-2"
                            >
                                <span className="text-sm">×</span> Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800 font-sans tracking-tight">Staff List</h1>
                <Button
                    onClick={() => setView('add')}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all transform active:scale-95 shadow-lg"
                >
                    <Plus size={18} />
                    Add Staff Member
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-5 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={18} />
                        </div>
                        <Input
                            placeholder="Search by name, employee ID, or mobile..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-200 rounded-xl placeholder:text-gray-400 text-sm"
                        />
                    </div>
                    <div className="md:col-span-3">
                        <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50 text-gray-600 font-sans">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <Button className="w-full bg-white hover:bg-gray-50 text-[#1e3a8a] border border-[#1e3a8a] h-11 rounded-xl font-bold transition-all">
                            Submit
                        </Button>
                    </div>
                    <div className="md:col-span-2">
                        <Button variant="outline" className="w-full text-[#c2410c] border-orange-200 hover:bg-orange-50 bg-[#fff7ed] h-11 rounded-xl flex items-center gap-2 font-bold transition-all">
                            <RotateCcw size={18} />
                            Reset
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50/50 hover:bg-gray-50/50 border-b border-gray-200">
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Employee ID</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Staff Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Department</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Designation</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Mobile</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Salary Mode</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Date of Joining</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center tracking-wider">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={10} className="py-24 text-center text-gray-400 font-medium font-sans">
                                    No staff members found
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}






