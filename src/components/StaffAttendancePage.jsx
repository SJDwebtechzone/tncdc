import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Users, RotateCcw, ArrowLeft, Info, Calendar, Search, Filter, CheckCircle2, X } from "lucide-react";

export default function StaffAttendancePage() {
    const [view, setView] = useState('list'); // 'list', 'mark', 'bulk'

    if (view === 'bulk') {
        return (
            <div className="space-y-6 animate-in fade-in duration-500 font-sans pb-10">
                {/* Header Banner */}
                <div className="bg-[#1e463a] p-8 rounded-sm text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-full flex items-center justify-center">
                            <Users size={24} strokeWidth={3} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Mark Bulk Staff Attendance</h1>
                            <p className="text-green-100 text-[11px] font-medium opacity-90 uppercase tracking-widest mt-1">Manage attendance for all staff members efficiently</p>
                        </div>
                    </div>
                    <Button
                        onClick={() => setView('list')}
                        className="bg-white hover:bg-gray-100 text-gray-800 px-6 h-9 rounded-sm flex items-center gap-2 border-none font-bold text-[11px] uppercase tracking-wider shadow-sm transition-all"
                    >
                        <ArrowLeft size={16} />
                        Back to List
                    </Button>
                </div>

                <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-10 space-y-8">
                    <div className="flex flex-col md:flex-row items-end gap-6 pb-8 border-b border-gray-50">
                        <div className="w-full max-w-sm space-y-2">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block ml-1">Attendance Date <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <Input
                                    type="date"
                                    defaultValue="2026-02-05"
                                    className="h-11 rounded-sm border-gray-200 bg-white text-sm focus:ring-1 focus:ring-[#1e463a] transition-all"
                                />
                            </div>
                        </div>
                        <div className="flex-1 bg-gray-600/90 text-white px-6 py-4 rounded-sm flex items-center gap-3 text-xs md:mb-0.5 shadow-md">
                            <Info size={18} className="text-green-300" />
                            <p className="leading-relaxed"><span className="font-extrabold uppercase tracking-widest mr-2">Note:</span> Select date above to mark attendance for all active staff members for that specific date.</p>
                        </div>
                    </div>

                    <div className="border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                        <Table>
                            <TableHeader className="bg-[#f8fafc]">
                                <TableRow className="hover:bg-[#f8fafc] border-b border-gray-200">
                                    <TableHead className="w-[60px] font-bold text-gray-700 text-[11px] uppercase py-5 px-6 border-r border-gray-100 text-center">#</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 border-r border-gray-100">Staff Name</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 border-r border-gray-100">Department</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 border-r border-gray-100">Designation</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 border-r border-gray-100 text-center">Status <span className="text-red-500">*</span></TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 text-center">Remarks</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={6} className="py-32 text-center bg-white">
                                        <div className="flex flex-col items-center justify-center gap-6">
                                            <div className="bg-gray-50 p-6 rounded-3xl">
                                                <Users size={48} className="text-gray-200" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest italic">No active staff members found</p>
                                                <p className="text-[11px] text-gray-300 font-medium">Please add staff members to start marking attendance.</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-6">
                        <Button
                            className="bg-[#1e463a] hover:bg-[#153229] text-white px-10 h-10 rounded-sm text-[11px] font-bold uppercase tracking-widest border-none transition-all shadow-md active:scale-95"
                        >
                            Save Bulk Attendance
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    if (view === 'mark') {
        return (
            <div className="space-y-6 animate-in fade-in duration-500 font-sans pb-10">
                {/* Header Banner */}
                <div className="bg-[#0f172a] p-8 rounded-sm text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-full flex items-center justify-center">
                            <Plus size={24} strokeWidth={3} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Mark Individual Staff Attendance</h1>
                            <p className="text-gray-400 text-[11px] font-medium opacity-90 uppercase tracking-widest mt-1">Record daily attendance for a specific staff member</p>
                        </div>
                    </div>
                    <Button
                        onClick={() => setView('list')}
                        className="bg-white hover:bg-gray-100 text-gray-800 px-6 h-9 rounded-sm flex items-center gap-2 border-none font-bold text-[11px] uppercase tracking-wider shadow-sm transition-all"
                    >
                        <ArrowLeft size={16} />
                        Back to List
                    </Button>
                </div>

                <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-10 font-sans">
                    <form className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-2 focus-within:text-[#1e3a8a] transition-colors">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block ml-1">Attendance Date <span className="text-red-500">*</span></label>
                                <Input
                                    type="date"
                                    defaultValue="2026-02-05"
                                    className="h-11 rounded-sm border-gray-200 bg-white text-sm focus:ring-1 focus:ring-[#1e3a8a] transition-all"
                                />
                            </div>

                            <div className="space-y-2 focus-within:text-[#1e3a8a] transition-colors">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block ml-1">Select Staff Member <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-sm border border-gray-200 px-4 text-sm focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white text-gray-400 font-sans transition-all cursor-pointer">
                                    <option>Search and select staff member</option>
                                </select>
                            </div>

                            <div className="space-y-2 focus-within:text-[#1e3a8a] transition-colors">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block ml-1">Attendance Status <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-sm border border-gray-200 px-4 text-sm focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white text-gray-700 font-sans transition-all cursor-pointer">
                                    <option>Select Status</option>
                                    <option>Present</option>
                                    <option>Absent</option>
                                    <option>Late</option>
                                    <option>Half Day</option>
                                </select>
                            </div>

                            <div className="space-y-2 focus-within:text-[#1e3a8a] transition-colors">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block ml-1">Remarks</label>
                                <Input
                                    placeholder="Any additional notes or reason"
                                    className="h-11 rounded-sm border-gray-200 bg-white text-sm focus:ring-1 focus:ring-[#1e3a8a] transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-8 border-t border-gray-50 font-sans">
                            <Button
                                type="submit"
                                className="bg-[#1e3a8a] hover:bg-[#152e6e] text-white px-10 h-10 rounded-sm text-[11px] font-bold flex items-center gap-2 shadow-md border-none uppercase tracking-widest transition-all active:scale-95"
                            >
                                <Plus size={16} strokeWidth={3} />
                                Mark Attendance
                            </Button>
                            <Button
                                type="button"
                                onClick={() => setView('list')}
                                className="bg-[#b9875a] hover:bg-[#a6764a] text-white px-10 h-10 rounded-sm text-[11px] font-bold uppercase tracking-widest border-none transition-all shadow-md active:scale-95 flex items-center justify-center p-0"
                            >
                                <X size={16} className="mr-2" />
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500 font-sans pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight uppercase">Staff Attendance Records</h1>
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => setView('mark')}
                        className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 h-11 rounded-sm flex items-center gap-2 border-none transition-all active:scale-95 shadow-md uppercase text-xs font-bold tracking-widest"
                    >
                        <Plus size={18} />
                        Mark Attendance
                    </Button>
                    <Button
                        onClick={() => setView('bulk')}
                        className="bg-[#1e463a] hover:bg-[#153229] text-white px-6 h-11 rounded-sm flex items-center gap-2 border-none transition-all active:scale-95 shadow-md uppercase text-xs font-bold tracking-widest"
                    >
                        <Users size={18} />
                        Mark Bulk Attendance
                    </Button>
                </div>
            </div>

            {/* Quick Filters */}
            <div className="bg-[#f8fafc] p-8 rounded-sm shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-8 text-[#1e3a8a] font-bold border-b border-gray-100 pb-4 uppercase tracking-[0.1em] text-sm">
                    <Filter size={18} />
                    <span>Attendance Filters</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-3 space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Staff Member</label>
                        <select className="w-full h-11 rounded-sm border border-gray-200 px-4 text-xs focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white transition-all cursor-pointer">
                            <option>All Active Staff</option>
                        </select>
                    </div>
                    <div className="md:col-span-3 space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Month</label>
                        <select className="w-full h-11 rounded-sm border border-gray-200 px-4 text-xs focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white transition-all cursor-pointer uppercase">
                            <option>February</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Year</label>
                        <select className="w-full h-11 rounded-sm border border-gray-200 px-4 text-xs focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white transition-all cursor-pointer">
                            <option>2026</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <Button className="w-full bg-[#1e3a8a] hover:bg-[#1a365d] text-white h-11 rounded-sm font-bold transition-all active:scale-95 shadow-md uppercase text-xs tracking-widest border-none p-0 flex items-center justify-center gap-2">
                            <Search size={16} />
                            Filter
                        </Button>
                    </div>
                    <div className="md:col-span-2">
                        <Button variant="outline" className="w-full border-orange-100 text-[#b9875a] hover:bg-orange-50 bg-orange-50/10 h-11 rounded-sm flex items-center gap-2 transition-all active:scale-95 font-bold uppercase text-xs tracking-widest p-0 justify-center">
                            <RotateCcw size={16} />
                            Reset
                        </Button>
                    </div>
                </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-[#0f172a] p-5 flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs">
                    <div className="bg-white/10 p-2 rounded-lg">
                        <Calendar size={18} />
                    </div>
                    <span>Attendance Log Records</span>
                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#f8fafc] hover:bg-[#f8fafc] border-b border-gray-200">
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100 text-center w-16">#</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100">Staff Name</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100 text-center">Attendance Date</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100 text-center">Status</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100">Remarks</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100">Marked By</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100 text-center">Locked</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 text-center tracking-wider">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={8} className="py-40 text-center">
                                    <div className="flex flex-col items-center justify-center gap-6">
                                        <div className="bg-gray-50 p-6 rounded-3xl">
                                            <Calendar size={64} className="text-gray-200" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">No attendance records found</p>
                                            <p className="text-[11px] text-gray-300 font-medium italic">Attendance logs for the selected period will appear here.</p>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="p-5 bg-gray-50/30 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">Total records in view: 0</p>
                </div>
            </div>
        </div>
    );
}






