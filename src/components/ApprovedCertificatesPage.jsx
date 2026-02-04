import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Info, Edit2, Box } from "lucide-react";

export default function ApprovedCertificatesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Approved Certificates</h1>
                <Button className="bg-[#1e463a] hover:bg-[#153229] text-white flex items-center gap-2 h-10 px-6 rounded-lg shadow-md">
                    <Download size={18} />
                    Export
                </Button>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 relative w-full">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search students, courses..."
                            className="pl-10 h-10 bg-gray-50/50 border-gray-200 rounded-lg text-sm"
                        />
                    </div>
                    <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-10 px-8 rounded-lg font-medium min-w-[120px]">
                        Search
                    </Button>
                    <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 h-10 px-8 rounded-lg font-medium min-w-[120px]">
                        Reset
                    </Button>
                </div>
            </div>

            <div className="bg-[#f0f7ff] border border-[#d0e5ff] rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                    <div className="bg-blue-500 p-1 rounded-full text-white mt-0.5">
                        <Info size={14} />
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed">
                        <span className="font-bold text-gray-700">Need to edit student information?</span> You can update student details, contact information, and other data from the Students management section.
                    </p>
                </div>
                <Button className="shrink-0 bg-[#0f172a] hover:bg-[#1e293b] text-white h-9 px-4 rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm">
                    <Edit2 size={14} />
                    Edit Students
                </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#f8fafc] hover:bg-[#f8fafc] border-b border-gray-200">
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4 px-6">#</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4">Student Name</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4">Course</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4">Franchise</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4">Admission Date</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4">Issue Date</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={7} className="py-24 text-center">
                                    <div className="flex flex-col items-center justify-center gap-2 text-gray-400">
                                        <Box size={48} className="text-gray-300 opacity-50" />
                                        <p className="font-bold text-lg text-gray-400">No certificates found</p>
                                        <p className="text-xs text-gray-400 italic">Try adjusting your search criteria</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
