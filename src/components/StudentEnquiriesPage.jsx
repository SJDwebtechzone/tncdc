import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Upload, History, Download, Search, Settings, ArrowRight, Lock, Edit, RotateCcw, Eye, Phone, User, Trash2, Users, Calendar, X } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addEnquiry } from '@/store/studentSlice';

export default function StudentEnquiriesPage() {
    const enquiries = useSelector((state) => state.students.enquiries || []);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', dob: '', mobile: '', email: '', course: '', source: 'Unknown', assignedTo: 'Unassigned' });

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addEnquiry(formData));
        setIsModalOpen(false);
        setFormData({ name: '', dob: '', mobile: '', email: '', course: '', source: 'Unknown', assignedTo: 'Unassigned' });
    };

    const totalEnquiries = enquiries.length;
    const newEnquiries = enquiries.filter(e => e.status === 'New').length;

    return (
        <div className="space-y-6 relative">
            {/* Stats */}
            <div className="bg-[#6b5b95] bg-gradient-to-r from-[#5d5fef] to-[#8b5cf6] rounded-xl p-8 text-white shadow-lg flex justify-between items-center mb-8">
                {[
                    { label: "Total Enquiries", count: totalEnquiries },
                    { label: "New Enquiries", count: newEnquiries },
                    { label: "Pending Follow-ups", count: 0 },
                    { label: "Converted", count: 0 },
                ].map((stat, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center justify-center border-r border-[#ffffff30] last:border-0">
                        <div className="text-4xl font-bold mb-1">{stat.count}</div>
                        <div className="text-sm font-medium opacity-90">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">

                {/* Header & Actions */}
                <div className="flex flex-col md:flex-row justify-between items-center p-6 pb-2">
                    <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                        <Users size={20} className="text-gray-700" /> All Enquiries
                    </h2>
                    <div className="flex gap-2">
                        <Button onClick={() => setIsModalOpen(true)} className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white gap-2 text-xs font-medium px-4 h-9">
                            <Plus size={14} /> Add New Enquiry
                        </Button>
                        <Button className="bg-[#52525b] hover:bg-[#52525b]/90 text-white gap-2 text-xs font-medium px-4 h-9">
                            <Upload size={14} /> Import
                        </Button>
                        <Button className="bg-[#b45309] hover:bg-[#b45309]/90 text-white gap-2 text-xs font-medium px-4 h-9">
                            <History size={14} /> Import History
                        </Button>
                        <Button className="bg-[#065f46] hover:bg-[#065f46]/90 text-white gap-2 text-xs font-medium px-4 h-9">
                            <Download size={14} /> Export
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-6 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {/* Row 1 */}
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Search</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                                <Input className="pl-9 h-10 w-full text-xs bg-gray-50/50" placeholder="Name, mobile, email..." />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Status</label>
                            <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                                <option>All Status</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Source</label>
                            <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                                <option>All Sources</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Assigned To</label>
                            <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                                <option>All Employees</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Course</label>
                            <Input className="h-10 w-full text-xs bg-white" placeholder="Course interested" />
                        </div>

                        {/* Row 2 */}
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">From Date</label>
                            <div className="relative">
                                <Input placeholder="dd-mm-yyyy" className="h-10 w-full text-xs text-gray-500" />
                                <Calendar className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={14} />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">To Date</label>
                            <div className="relative">
                                <Input placeholder="dd-mm-yyyy" className="h-10 w-full text-xs text-gray-500" />
                                <Calendar className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={14} />
                            </div>
                        </div>
                        <div className="flex items-end">
                            <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white h-10 text-xs font-medium">
                                <Search size={14} className="mr-2" /> Search
                            </Button>
                        </div>
                        <div className="flex items-end">
                            <Button className="w-full bg-[#b45309] hover:bg-[#b45309]/90 text-white h-10 text-xs font-medium">
                                <RotateCcw size={14} className="mr-2" /> Reset
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-gray-50/50">
                            <TableRow>
                                <TableHead className="w-[40px] font-bold text-gray-800 text-xs uppercase">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase w-[50px]">Photo</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase min-w-[200px]">Student Details</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Contact</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase max-w-[200px]">Course</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Source</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Assigned To</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase whitespace-nowrap">Follow-ups</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Created</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase text-center w-[120px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {enquiries.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={11} className="h-32 text-center text-gray-500">
                                        No enquiries found. Add one to get started.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                enquiries.map((row, index) => (
                                    <TableRow key={row.id} className="border-b border-gray-50 hover:bg-gray-50">
                                        <TableCell className="text-orange-500 font-medium text-xs align-top">{index + 1}</TableCell>
                                        <TableCell className="align-top">
                                            <div className="bg-[#b45309] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">
                                                <User size={14} />
                                            </div>
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <div className="flex flex-col gap-1">
                                                <span className="font-bold text-[#1e3a8a] text-sm">{row.name}</span>
                                                <span className="text-gray-400 text-[10px]">DOB: {row.dob}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-green-600 text-xs flex items-center gap-1">
                                                    📞 {row.mobile}
                                                </span>
                                                <span className="text-blue-500 text-[10px]">
                                                    📧 {row.email}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <div className="text-gray-600 text-xs truncate max-w-[200px]">
                                                {row.course}
                                            </div>
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <span className="bg-gray-500 text-white text-[10px] px-2 py-0.5 rounded">{row.source}</span>
                                        </TableCell>
                                        <TableCell className="text-gray-600 text-xs align-top">{row.assignedTo}</TableCell>
                                        <TableCell className="align-top">
                                            <span className="bg-[#1e3a8a] text-white text-[10px] px-2 py-0.5 rounded">{row.status}</span>
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-gray-400 text-[10px]">No scheduled</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-gray-600 text-xs align-top">
                                            {row.created}
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <div className="grid grid-cols-2 gap-2 justify-items-center">
                                                <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a]">
                                                    <Eye size={14} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a]">
                                                    <Edit size={14} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a]">
                                                    <Phone size={14} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a]">
                                                    <User size={14} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a] col-span-2">
                                                    <Trash2 size={14} />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Add Enquiry Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl p-6 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-800 mb-6">Add New Enquiry</h2>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-bold text-gray-700">Student Name</label>
                                    <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Full Name" />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                                    <Input required type="date" value={formData.dob} onChange={e => setFormData({ ...formData, dob: e.target.value })} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-bold text-gray-700">Mobile Number</label>
                                    <Input required value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })} placeholder="10-digit mobile" />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                                    <Input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="email@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700">Course Interested</label>
                                <Input required value={formData.course} onChange={e => setFormData({ ...formData, course: e.target.value })} placeholder="e.g. Java Full Stack" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-bold text-gray-700">Source</label>
                                    <select
                                        className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm bg-white"
                                        value={formData.source}
                                        onChange={e => setFormData({ ...formData, source: e.target.value })}
                                    >
                                        <option value="Unknown">Unknown</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Referral">Referral</option>
                                        <option value="Walk-in">Walk-in</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-gray-700">Assign To</label>
                                    <Input value={formData.assignedTo} onChange={e => setFormData({ ...formData, assignedTo: e.target.value })} placeholder="Employee Name" />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-[#1e3a8a] text-white">Save Enquiry</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
