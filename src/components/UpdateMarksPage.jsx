import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Edit } from "lucide-react";

export default function UpdateMarksPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Exam Result</h1>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 relative w-full">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search by student or course..."
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

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#f8fafc] hover:bg-[#f8fafc] border-b border-gray-200">
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4 px-6">#</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4">Student Name</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4">Course</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4">Admission Date</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4">Performance</TableHead>
                                <TableHead className="font-bold text-[#475569] text-[11px] uppercase py-4 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="hover:bg-gray-50/50">
                                <TableCell className="py-4 px-6 text-sm">1</TableCell>
                                <TableCell className="py-4 text-sm font-medium">Sathish S/O Mani Kanna</TableCell>
                                <TableCell className="py-4 text-sm">
                                    <div className="flex flex-col">
                                        <span className="font-medium">Computer Science</span>
                                        <span className="text-gray-400 text-xs">M-CS-7090</span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-4 text-sm font-bold">29 Jan 2026</TableCell>
                                <TableCell className="py-4 text-sm">
                                    <div className="space-y-1">
                                        <div className="font-medium">First Semester</div>
                                        <div className="text-[10px] text-gray-500 flex gap-2">
                                            <span>Marks: 0.00%</span>
                                            <span className="text-red-500 font-bold">Fail</span>
                                            <span>Grade: N/A</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="py-4 text-center">
                                    <Button className="bg-[#1d8cf8] hover:bg-[#1171d1] text-white h-8 px-4 rounded-md text-xs flex items-center gap-1 mx-auto">
                                        <Edit size={14} />
                                        First Semester
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}






