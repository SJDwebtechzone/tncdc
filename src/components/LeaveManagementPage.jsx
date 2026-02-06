import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    Plus,
    CalendarX,
    Search,
    X,
    Save,
    Clock,
    Trash2,
    Calendar
} from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addLeave, deleteLeave } from '@/store/attendanceSlice';

export default function LeaveManagementPage() {
    const leaves = useSelector((state) => state.attendance.leaves || []);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        studentName: '',
        startDate: '',
        endDate: '',
        reason: ''
    });

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(addLeave({ ...formData, id: Date.now(), type: 'Sick Leave' }));
        setIsModalOpen(false);
        setFormData({ studentName: '', startDate: '', endDate: '', reason: '' });
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800 font-sans tracking-tight uppercase">Leave Management</h1>

            {/* Header Banner - Dark Theme */}
            <div className="bg-[#0f172a] p-6 rounded-sm text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
                <div className="flex items-center gap-4">
                    <div className="p-2 border border-white/20 rounded-md">
                        <CalendarX size={24} />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold tracking-wide">Leave Management</h2>
                        <p className="text-gray-400 text-xs mt-0.5">View and manage leave requests</p>
                    </div>
                </div>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#1e3a8a] hover:bg-[#1a365d] text-white px-6 h-10 rounded-sm flex items-center gap-2 border-none transition-all active:scale-95 shadow-md uppercase text-xs font-bold tracking-widest"
                >
                    <Plus size={18} />
                    Add Leave
                </Button>
            </div>

            {/* Add Leave Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4">
                    <div className="bg-white w-full max-w-md rounded-sm shadow-2xl relative animate-in fade-in zoom-in duration-200">
                        {/* Modal Header - Dark */}
                        <div className="bg-[#0f172a] flex items-center justify-between p-3 px-4 text-white">
                            <h2 className="text-[13px] font-bold uppercase tracking-widest flex items-center gap-2">
                                <Plus size={16} strokeWidth={3} /> Add New Leave
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <form onSubmit={handleCreate} className="p-8 space-y-6 font-sans">
                            <div className="space-y-1.5 focus-within:text-[#1e3a8a] transition-colors">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                    Select Student <span className="text-red-500">*</span>
                                </label>
                                <select
                                    required
                                    className="w-full h-10 rounded-sm border border-gray-200 px-3 text-[11px] focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white text-gray-500 transition-all cursor-pointer"
                                    value={formData.studentName}
                                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                                >
                                    <option value="">Choose a student...</option>
                                    <option>John Doe</option>
                                    <option>Jane Smith</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1.5 focus-within:text-[#1e3a8a] transition-colors">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                        From Date <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="dd-mm-yyyy"
                                        required
                                        className="h-10 rounded-sm border-gray-200 text-[11px] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
                                        value={formData.startDate}
                                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5 focus-within:text-[#1e3a8a] transition-colors">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                        To Date <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="dd-mm-yyyy"
                                        required
                                        className="h-10 rounded-sm border-gray-200 text-[11px] focus:ring-1 focus:ring-[#1e3a8a] transition-all"
                                        value={formData.endDate}
                                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5 focus-within:text-[#1e3a8a] transition-colors">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                    Reason <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    placeholder="Enter reason for leave"
                                    required
                                    className="w-full h-24 rounded-sm border border-gray-200 p-3 text-[11px] focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white resize-none transition-all"
                                    value={formData.reason}
                                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                />
                            </div>

                            {/* Modal Footer Buttons */}
                            <div className="flex items-center justify-center gap-3 pt-4">
                                <Button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-[#b9875a] hover:bg-[#a6764a] text-white px-10 h-10 rounded-sm text-[11px] font-bold uppercase tracking-widest border-none transition-all shadow-md active:scale-95 p-0"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-[#1e463a] hover:bg-[#153229] text-white px-10 h-10 rounded-sm text-[11px] font-bold flex items-center justify-center gap-2 shadow-md border-none uppercase tracking-widest transition-all p-0"
                                >
                                    <Save size={16} />
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Table Area */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden min-h-[500px] flex flex-col font-sans">
                <div className="overflow-x-auto flex-1">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#f8fafc] hover:bg-[#f8fafc] border-b border-gray-200 font-sans">
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100">Leave Details</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Date Range</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Type</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-center">Status</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 text-center tracking-wider">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {leaves.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="py-40 text-center">
                                        <div className="flex flex-col items-center justify-center gap-6">
                                            <div className="bg-gray-50 p-6 rounded-3xl">
                                                <CalendarX size={64} className="text-gray-300" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-base font-bold text-gray-400 uppercase tracking-widest">No Leave Records Found</h3>
                                                <p className="text-[11px] text-gray-300 font-medium italic">New leave applications will appear here once submitted.</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                leaves.map((l) => (
                                    <TableRow key={l.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                        <TableCell className="px-6 py-4">
                                            <div>
                                                <p className="font-bold text-gray-800 text-sm tracking-tight">{l.studentName}</p>
                                                <p className="text-[10px] text-gray-400 font-medium italic mt-0.5">" {l.reason} "</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-bold text-gray-600 text-[11px]">
                                            <span className="bg-gray-100 px-3 py-1 rounded-sm border border-gray-200">
                                                {l.startDate} <span className="text-gray-400 px-2 font-normal">→</span> {l.endDate}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="bg-[#dcf0fb] text-[#0284c7] px-3 py-1 rounded-sm text-[10px] font-bold border border-[#bae6fd] uppercase tracking-widest">
                                                Sick Leave
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-sm text-[10px] font-bold border border-yellow-100 inline-flex items-center gap-1 uppercase tracking-widest">
                                                <Clock size={12} />
                                                Pending
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full w-8 h-8 p-0"
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






