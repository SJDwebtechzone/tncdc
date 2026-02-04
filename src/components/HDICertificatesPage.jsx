import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Upload, Trash2, History, Database } from "lucide-react";

export default function HDICertificatesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Manage HDI Certificates</h1>
                <div className="flex items-center gap-2">
                    <Button className="bg-[#5c6066] hover:bg-[#4a4e52] text-white flex items-center gap-2 h-10 px-6 rounded-lg">
                        <Upload size={18} />
                        Import
                    </Button>
                    <Button className="bg-[#c08457] hover:bg-[#a66d43] text-white flex items-center gap-2 h-10 px-6 rounded-lg">
                        <History size={18} />
                        Import History
                    </Button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 relative w-full">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search by student name, certificate number, course..."
                            className="pl-10 h-10 bg-gray-50/50 border-gray-200 rounded-lg text-sm"
                        />
                    </div>
                    <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white h-10 px-8 rounded-lg font-bold flex items-center gap-2">
                        <Search size={18} />
                        Search
                    </Button>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <Button className="flex-1 md:flex-none bg-[#dc2626] hover:bg-[#b91c1c] text-white h-10 px-4 rounded-lg text-xs font-bold uppercase">
                            Delete Selected
                        </Button>
                        <Button className="flex-1 md:flex-none bg-[#eab308] hover:bg-[#ca8a04] text-white h-10 px-4 rounded-lg text-xs font-bold uppercase">
                            Delete All Records
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto font-sans">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#f8fafc] hover:bg-[#f8fafc] border-b border-gray-200">
                                <TableHead className="w-12 py-4 px-4">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                </TableHead>
                                <TableHead className="font-bold text-[#334155] text-[11px] uppercase py-4">#</TableHead>
                                <TableHead className="font-bold text-[#334155] text-[11px] uppercase py-4">Student Image</TableHead>
                                <TableHead className="font-bold text-[#334155] text-[11px] uppercase py-4">Student Signature</TableHead>
                                <TableHead className="font-bold text-[#334155] text-[11px] uppercase py-4">Student Name</TableHead>
                                <TableHead className="font-bold text-[#334155] text-[11px] uppercase py-4">Course</TableHead>
                                <TableHead className="font-bold text-[#334155] text-[11px] uppercase py-4">Certificate No.</TableHead>
                                <TableHead className="font-bold text-[#334155] text-[11px] uppercase py-4">Date of Issue</TableHead>
                                <TableHead className="font-bold text-[#334155] text-[11px] uppercase py-4 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={9} className="py-20 text-center">
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <p className="text-red-500 font-bold italic text-base">No Data Available</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="p-4 bg-gray-50/50 border-t border-gray-100">
                    <p className="text-[10px] text-gray-500 italic">Showing 0 to 0 of 0 records</p>
                </div>
            </div>
        </div>
    );
}
