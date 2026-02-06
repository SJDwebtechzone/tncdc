import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent } from '@/store/studentSlice';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Upload, History, Download, Search, Settings, ArrowRight, Lock, Edit, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function StudentListPage() {
    const students = useSelector((state) => state.students.students);
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);

    React.useEffect(() => {
        setFilteredStudents(students);
    }, [students]);

    const handleSearch = () => {
        const lowerQuery = searchQuery.toLowerCase();
        const filtered = students.filter(student =>
            student.name.toLowerCase().includes(lowerQuery) ||
            (student.mobile && student.mobile.toLowerCase().includes(lowerQuery)) ||
            (student.email && student.email.toLowerCase().includes(lowerQuery))
        );
        setFilteredStudents(filtered);
    };

    const handleReset = () => {
        setSearchQuery('');
        setFilteredStudents(students);
    };

    return (
        <div className="space-y-6 relative">
            <h1 className="text-xl font-bold text-gray-800">Manage Students</h1>

            {/* Header Actions */}
            <div className="flex justify-end gap-2">
                <Button onClick={() => navigate('/dashboard/students/list/add')} className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white gap-2">
                    <Plus size={16} /> Add Student
                </Button>
                <Button className="bg-[#52525b] hover:bg-[#52525b]/90 text-white gap-2">
                    <Upload size={16} /> Import
                </Button>
                <Button className="bg-[#b45309] hover:bg-[#b45309]/90 text-white gap-2">
                    <History size={16} /> Import History
                </Button>
                <Button className="bg-[#065f46] hover:bg-[#065f46]/90 text-white gap-2">
                    <Download size={16} /> Export
                </Button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-6 relative">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                    <Input
                        className="pl-9 h-10 w-full"
                        placeholder="Search by name, mobile or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </div>
                <div className="md:col-span-3">
                    <Button
                        variant="outline"
                        className="w-full h-10 border-blue-900 text-blue-900 hover:bg-blue-50"
                        onClick={handleSearch}
                    >
                        Submit
                    </Button>
                </div>
                <div className="md:col-span-3">
                    <Button
                        variant="outline"
                        className="w-full h-10 border-orange-200 text-orange-500 hover:bg-orange-50"
                        onClick={handleReset}
                    >
                        Reset
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-gray-50/50">
                            <TableRow>
                                <TableHead className="w-[50px] font-bold text-gray-800 text-xs uppercase">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase min-w-[200px]">Student Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Relationship</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase whitespace-nowrap">Profile Image</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Signature</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Mobile</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Email</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase whitespace-nowrap">DOB</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase whitespace-nowrap">Referral Code</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase whitespace-nowrap">Wallet Balance</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase whitespace-nowrap">Total Admissions</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase whitespace-nowrap">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((student, index) => (
                                    <TableRow key={student.id} className="border-b border-gray-50 hover:bg-gray-50">
                                        <TableCell className="text-orange-500 font-medium">{index + 1}</TableCell>
                                        <TableCell>
                                            <div className="text-blue-600 font-medium">{student.name}</div>
                                        </TableCell>
                                        <TableCell className="text-gray-600 text-xs">{student.relationship || 'S/O'}</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell className="text-gray-600 text-xs">{student.mobile || '-'}</TableCell>
                                        <TableCell className="text-blue-500 text-xs">{student.email}</TableCell>
                                        <TableCell className="text-gray-600 text-xs">{student.dob}</TableCell>
                                        <TableCell className="text-gray-600 text-xs">{student.referralCode || 'REF-' + student.id}</TableCell>
                                        <TableCell>
                                            <div className="border border-gray-300 rounded px-2 py-1 text-xs text-center font-medium w-20">
                                                {student.walletBalance ? student.walletBalance.toFixed(2) : '0.00'}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="w-8 h-4 bg-[#1e3a8a] rounded-full relative cursor-pointer">
                                                <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="bg-[#1e3a8a] text-white w-6 h-6 rounded flex items-center justify-center text-xs mx-auto">
                                                {student.totalAdmissions || 0}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-gray-500 text-[10px] whitespace-nowrap">
                                            {student.createdAt || '2026 01 28 14:50:11'}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600"><ArrowRight size={16} /></Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-cyan-500"><Edit size={16} /></Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-indigo-900"><Lock size={16} /></Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={14} className="text-center py-8 text-gray-500">
                                        No students found matching your search.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}






