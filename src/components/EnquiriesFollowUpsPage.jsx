import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Search, RotateCcw, Filter, FolderOpen, PhoneOff } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addFollowUp } from '@/store/studentSlice';

export default function EnquiriesFollowUpsPage() {
    const followUps = useSelector((state) => state.students.followUps || []);
    const students = useSelector((state) => state.students.students || []); // For selecting student
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        studentId: '',
        status: 'Interested',
        remarks: '',
        nextDate: ''
    });

    const handleAddFollowUp = () => {
        if (!formData.studentId) {
            alert("Please select a student first.");
            return;
        }
        dispatch(addFollowUp({
            ...formData,
            createdDate: new Date().toLocaleString()
        }));
        setFormData({ studentId: '', status: 'Interested', remarks: '', nextDate: '' });
    };

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: "Overdue Follow-ups", count: 0, bg: "bg-[#dc2626]" }, // Red
                    { label: "Due Today", count: 0, bg: "bg-[#eab308]" }, // Yellow
                    { label: "Upcoming This Week", count: 0, bg: "bg-[#7c3aed]" }, // Purple
                    { label: "Completed Today", count: 0, bg: "bg-[#16a34a]" }, // Green
                ].map((stat, idx) => (
                    <div key={idx} className={`${stat.bg} text-white p-4 rounded-lg flex flex-col items-center justify-center h-24 shadow-md`}>
                        <div className="text-3xl font-bold">{stat.count}</div>
                        <div className="text-sm font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Quick Add Follow-up */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-gray-800 rounded-full p-0.5">
                        <Plus size={12} className="text-white" />
                    </div>
                    <h2 className="text-sm font-bold text-gray-700">Quick Add Follow-up</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-3">
                        <select
                            className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white"
                            value={formData.studentId}
                            onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                        >
                            <option value="">Select Student</option>
                            {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <div className="relative">
                            <input type="text" className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500" value={new Date().toLocaleString()} readOnly />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <select
                            className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white"
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        >
                            <option value="Interested">Interested</option>
                            <option value="Not Interested">Not Interested</option>
                            <option value="Callback">Callback</option>
                        </select>
                    </div>
                    <div className="md:col-span-3">
                        <Input
                            className="h-10 w-full text-xs"
                            placeholder="Remarks"
                            value={formData.remarks}
                            onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <input
                            type="date"
                            className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-400"
                            value={formData.nextDate}
                            onChange={(e) => setFormData({ ...formData, nextDate: e.target.value })}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <Button onClick={handleAddFollowUp} className="bg-[#065f46] hover:bg-[#065f46]/90 text-white gap-2 text-xs">
                        <Plus size={14} /> Add Follow-up
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-2">
                    <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                        <option>All Follow ups</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                        <option>All Status</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                        <option>All Employees</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <input type="date" className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-400" />
                </div>
                <div className="md:col-span-2">
                    <input type="date" className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-400" />
                </div>
                <div className="md:col-span-2">
                    <Button className="w-full bg-[#1e3a8a] text-white h-10 text-xs">
                        Filter
                    </Button>
                </div>
            </div>

            {/* Header & Export */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-gray-600 flex items-center gap-2">
                        <span className="text-gray-600">⋮≡</span> Follow-ups
                    </h2>
                    <span className="bg-[#1e3a8a] text-white text-xs px-2 py-0.5 rounded font-medium">{followUps.length}</span>
                </div>
                <Button className="bg-[#065f46] hover:bg-[#065f46]/90 text-white gap-2 text-xs">
                    <div className="rotate-180"><StartIcon /></div> Export
                </Button>
            </div>

            {/* Follow-ups List */}
            {followUps.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center text-gray-400">
                    <div className="relative">
                        <PhoneOff size={48} className="mb-4 text-gray-400 opacity-50" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-500 mb-1">No follow-ups found</h3>
                    <p className="text-xs text-gray-400">Try adjusting your filters or add a new follow-up.</p>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <Table>
                        <TableHeader className="bg-gray-50/50">
                            <TableRow>
                                <TableHead className="w-[50px]">#</TableHead>
                                <TableHead>Student</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Remarks</TableHead>
                                <TableHead>Next Date</TableHead>
                                <TableHead>Created</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {followUps.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{students.find(s => s.id == item.studentId)?.name || 'Unknown'}</TableCell>
                                    <TableCell><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{item.status}</span></TableCell>
                                    <TableCell>{item.remarks}</TableCell>
                                    <TableCell>{item.nextDate}</TableCell>
                                    <TableCell>{item.createdDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    )
}

function StartIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
    )
}
