import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    ChartBar,
    Download,
    Filter,
    RotateCcw,
    Search,
    Calendar,
    X
} from "lucide-react";

export default function AttendanceReportPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Attendance Report</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Card Header */}
                <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600">
                            <ChartBar size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">Attendance Report</h2>
                            <p className="text-gray-500 text-sm">Filter and view attendance records</p>
                        </div>
                    </div>
                    <Button className="bg-[#0f4c3a] hover:bg-[#0a3a2c] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none">
                        <Download size={18} />
                        Export CSV
                    </Button>
                </div>

                {/* Filters Content */}
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Batch</label>
                            <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                <option>Select Batch</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Student</label>
                            <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                <option>Select Student</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Course</label>
                            <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                <option>Select Course</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Status</label>
                            <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                <option>Select Status</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">From Date</label>
                            <div className="relative">
                                <Input type="date" className="h-11 rounded-xl border-gray-200 bg-gray-50/50" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">To Date</label>
                            <div className="relative">
                                <Input type="date" className="h-11 rounded-xl border-gray-200 bg-gray-50/50" />
                            </div>
                        </div>
                        <div className="md:col-span-2 flex items-end gap-3">
                            <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 h-11 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-900/10">
                                <Filter size={18} />
                                Apply Filters
                            </Button>
                            <Button variant="outline" className="text-orange-600 border-[#c48c58] hover:bg-orange-50 bg-[#e4a873]/10 px-8 h-11 rounded-xl flex items-center gap-2">
                                <RotateCcw size={18} />
                                Reset
                            </Button>
                        </div>
                    </div>

                    {/* Table Placeholder */}
                    <div className="mt-12 py-20 flex flex-col items-center justify-center text-center">
                        <div className="bg-gray-50 p-6 rounded-3xl mb-6 text-gray-300">
                            <Calendar size={64} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700 mb-2">No Attendance Records Found</h3>
                        <p className="text-gray-400 max-w-sm">Try adjusting the filters to view attendance records for a specific batch or student.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
