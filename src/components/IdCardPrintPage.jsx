import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Printer, Search } from "lucide-react";
import { useSelector } from 'react-redux';

export default function IdCardPrintPage() {
    const students = useSelector((state) => state.students.students || []);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (student.mobile && student.mobile.includes(searchQuery))
    );

    return (
        <div className="space-y-6">
            <h1 className="text-xl font-medium text-gray-800">Id Card Information</h1>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                {/* Filter / Search */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex flex-1 gap-4 w-full">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
                            <Input
                                placeholder="Search...."
                                className="pl-10 bg-gray-50 border-gray-200"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50 px-8">Submit</Button>
                        <Button variant="outline" className="text-orange-400 border-orange-200 hover:bg-orange-50 px-8" onClick={() => setSearchQuery("")}>Reset</Button>
                    </div>
                    <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2">
                        <Printer size={16} />
                        Print Selected ID Cards
                    </Button>
                </div>

                {/* Table */}
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                    <Table>
                        <TableHeader className="bg-gray-100/50">
                            <TableRow>
                                <TableHead className="w-[50px]"><input type="checkbox" /></TableHead>
                                <TableHead className="w-[50px] font-bold text-gray-700 text-xs uppercase">#</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Student Name</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Student Mobile</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Student Profile</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Course Name</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredStudents.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-32 text-center text-gray-500">
                                        No students found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredStudents.map((student, index) => (
                                    <TableRow key={student.id}>
                                        <TableCell><input type="checkbox" /></TableCell>
                                        <TableCell className="text-blue-600 font-medium">{index + 1}</TableCell>
                                        <TableCell className="text-blue-600 font-medium">{student.name}</TableCell>
                                        <TableCell className="text-blue-600">{student.mobile}</TableCell>
                                        <TableCell>
                                            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                                                {student.photo ? <img src={student.photo} alt={student.name} /> : null}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-gray-600 text-sm">{student.course}</TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
