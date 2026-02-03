import React from 'react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Gift, Calendar, CalendarDays, Users } from "lucide-react";

export default function BirthdayListPage() {
    const stats = [
        { label: "TODAY", count: 0, icon: Gift, color: "text-red-500", border: "border-t-4 border-red-500" },
        { label: "THIS WEEK", count: 0, icon: Calendar, color: "text-yellow-500", border: "border-t-4 border-yellow-500" },
        { label: "THIS MONTH", count: 1, icon: CalendarDays, color: "text-blue-500", border: "border-t-4 border-blue-500" },
        { label: "TOTAL STUDENTS", count: 1, icon: Users, color: "text-purple-500", border: "border-t-4 border-purple-500" },
    ];

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">🎂</span>
                    <h1 className="text-xl font-bold text-gray-800">Student Birthdays</h1>
                </div>
                <p className="text-sm text-gray-500 ml-10">Celebrate your students' special days and never miss a birthday</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className={`bg-white p-6 rounded-xl shadow-sm ${stat.border} flex flex-col gap-4 min-h-[140px]`}>
                        <div className={`w-12 h-12 rounded-lg ${stat.color.replace('text-', 'bg-')}/10 flex items-center justify-center ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.count}</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-8">
                <Table>
                    <TableHeader className="bg-gray-50/50">
                        <TableRow>
                            <TableHead className="w-[50px] font-bold text-gray-800 text-xs uppercase">#</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Photo</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Student Name</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Course</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">DOB</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Age</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Mobile</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border-b border-gray-50 hover:bg-gray-50">
                            <TableCell className="text-gray-500 font-medium text-xs">1</TableCell>
                            <TableCell>
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                    SS
                                </div>
                            </TableCell>
                            <TableCell className="font-bold text-[#1e3a8a] text-sm">Sathish S/O Mani Kanna</TableCell>
                            <TableCell className="text-gray-600 text-xs">ADVANCE DIPLOMA IN COMPUTER SCIENCE(M-CS-7090)</TableCell>
                            <TableCell className="text-gray-600 text-xs">28 Jan</TableCell>
                            <TableCell className="text-gray-600 text-xs">0</TableCell>
                            <TableCell className="text-gray-600 text-xs">-</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
