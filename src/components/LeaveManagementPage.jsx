import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    Plus,
    CalendarX,
    FileText,
    Search,
    ArrowLeft,
    Info,
    Trash2,
    CheckCircle2,
    Calendar,
    Settings2
} from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addLeave, deleteLeave } from '@/store/attendanceSlice';

export default function LeaveManagementPage() {
    const leaves = useSelector((state) => state.attendance.leaves || []);
    const dispatch = useDispatch();
    const [view, setView] = useState('list'); // 'list' or 'add'

    const [formData, setFormData] = useState({
        studentName: '',
        type: 'Sick Leave',
        startDate: '',
        endDate: '',
        reason: ''
    });

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(addLeave(formData));
        setView('list');
        setFormData({ studentName: '', type: 'Sick Leave', startDate: '', endDate: '', reason: '' });
    };

    if (view === 'add') {
        return (
            <div className="space-y-6">
                <div className="bg-[#1e293b] p-6 rounded-2xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                            <Plus size={28} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Add New Leave</h2>
                            <p className="text-gray-400 text-sm">Submit a new leave request for a student</p>
                        </div>
                    </div>
                    <Button
                        onClick={() => setView('list')}
                        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg flex items-center gap-2 border border-white/20"
                    >
                        <ArrowLeft size={18} />
                        Back to List
                    </Button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <form onSubmit={handleCreate} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 font-bold text-gray-800 border-b pb-2">
                                    <CheckCircle2 size={18} className="text-blue-600" />
                                    <span>Student Information</span>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Student Name <span className="text-red-500">*</span></label>
                                    <Input
                                        required
                                        placeholder="Enter full name"
                                        value={formData.studentName}
                                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Leave Type <span className="text-red-500">*</span></label>
                                    <select
                                        className="w-full h-10 rounded-md border border-gray-200 px-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option>Sick Leave</option>
                                        <option>Personal Leave</option>
                                        <option>Emergency Leave</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-2 font-bold text-gray-800 border-b pb-2">
                                    <Calendar size={18} className="text-blue-600" />
                                    <span>Duration</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-600 uppercase">Start Date</label>
                                        <Input
                                            required
                                            type="date"
                                            value={formData.startDate}
                                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-600 uppercase">End Date</label>
                                        <Input
                                            required
                                            type="date"
                                            value={formData.endDate}
                                            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-600 uppercase">Reason for Leave</label>
                            <textarea
                                className="w-full h-32 rounded-md border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                placeholder="State the reason for leave"
                                value={formData.reason}
                                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            />
                        </div>

                        <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                            <Button type="button" variant="outline" onClick={() => setView('list')} className="px-8 border-gray-200">Cancel</Button>
                            <Button type="submit" className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white px-10">Create Leave Request</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Leave Management</h1>

            {/* Header Banner */}
            <div className="bg-[#1e293b] p-6 rounded-2xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                        <CalendarX size={28} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Leave Management</h2>
                        <p className="text-gray-400 text-sm">View and manage leave requests</p>
                    </div>
                </div>
                <Button
                    onClick={() => setView('add')}
                    className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 border-none font-semibold"
                >
                    <Plus size={18} />
                    Add Leave
                </Button>
            </div>

            {/* Table Area */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[500px] flex flex-col">
                <div className="overflow-x-auto flex-1">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 px-6">Leave Details</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Date Range</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Type</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {leaves.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="py-32 text-center">
                                        <div className="flex flex-col items-center justify-center text-gray-400">
                                            <div className="bg-gray-100 p-6 rounded-3xl mb-4 text-gray-300">
                                                <CalendarX size={64} />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-600 mb-2">No Leaves Found</h3>
                                            <p className="max-w-xs mx-auto text-gray-400">There are no leave requests at the moment. When students apply for leave, they will appear here.</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                leaves.map((l) => (
                                    <TableRow key={l.id}>
                                        <TableCell className="px-6">
                                            <div>
                                                <p className="font-bold text-gray-800">{l.studentName}</p>
                                                <p className="text-xs text-gray-500 italic">" {l.reason} "</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-sm text-gray-600">
                                            {l.startDate} to {l.endDate}
                                        </TableCell>
                                        <TableCell>
                                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
                                                {l.type}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold border border-yellow-100 flex items-center gap-1 w-fit">
                                                <Clock size={12} />
                                                Pending
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                onClick={() => dispatch(deleteLeave(l.id))}
                                            >
                                                <Trash2 size={16} />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
