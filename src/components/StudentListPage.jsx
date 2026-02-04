import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent } from '@/store/studentSlice';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Upload, History, Download, Search, Settings, ArrowRight, Lock, Edit, X } from "lucide-react";

export default function StudentListPage() {
    const students = useSelector((state) => state.students.students);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        relationship: 'S/O'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            id: Date.now(),
            ...formData,
            initials: formData.name.charAt(0).toUpperCase(),
            admissionDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
            batch: 'Batch-A',
            walletBalance: 0,
            status: 'Active',
            totalAdmissions: 0,
            createdAt: new Date().toLocaleString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
        };
        dispatch(addStudent(newStudent));
        setIsModalOpen(false);
        setFormData({ name: '', email: '', mobile: '', dob: '', relationship: 'S/O' });
    };

    return (
        <div className="space-y-6 relative">
            <h1 className="text-xl font-bold text-gray-800">Manage Students</h1>

            {/* Header Actions */}
            <div className="flex justify-end gap-2">
                <Button onClick={() => setIsModalOpen(true)} className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white gap-2">
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
                    <Input className="pl-9 h-10 w-full" placeholder="Search...." />
                </div>
                <div className="md:col-span-3">
                    <Button variant="outline" className="w-full h-10 border-blue-900 text-blue-900 hover:bg-blue-50">
                        Submit
                    </Button>
                </div>
                <div className="md:col-span-3">
                    <Button variant="outline" className="w-full h-10 border-orange-200 text-orange-500 hover:bg-orange-50">
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
                            {students.map((student, index) => (
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
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Add Student Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-800 mb-1">Add New Student</h2>
                        <p className="text-sm text-gray-500 mb-6">Enter student details manually.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Student Name</label>
                                <Input required name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Rahul Sharma" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Date of Birth</label>
                                <Input required type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Email</label>
                                <Input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="student@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Mobile</label>
                                <Input required name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="e.g. 9876543210" />
                            </div>

                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">Save Student</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
