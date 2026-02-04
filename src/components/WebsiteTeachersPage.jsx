import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit2, Trash2, User, X, Mail, Phone, Briefcase } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addTeacher, deleteTeacher } from '@/store/websiteSlice';

export default function WebsiteTeachersPage() {
    const teachers = useSelector((state) => state.website.teachers || []);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', image: '', designation: '', phone: '', email: '' });

    const filteredTeachers = teachers.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.designation.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addTeacher(formData));
        setIsModalOpen(false);
        setFormData({ name: '', image: '', designation: '', phone: '', email: '' });
    };

    const handleDelete = (id) => {
        if (window.confirm("Delete this teacher entry?")) {
            dispatch(deleteTeacher(id));
        }
    };

    return (
        <div className="space-y-6 font-sans relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <User size={24} className="text-blue-600" />
                    Manage Website Faculty
                </h1>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-xl flex items-center gap-2 border-none transition-all shadow-md font-bold"
                >
                    <Plus size={18} />
                    Add Teacher
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic">
                <div className="flex flex-col md:flex-row gap-4 items-center font-sans">
                    <div className="flex-1 relative w-full italic font-sans">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search by faculty name or role..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm italic font-sans"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button className="bg-[#1e40af] hover:bg-blue-900 text-white h-11 px-10 rounded-xl font-bold transition-all shadow-md border-none italic font-sans">
                        Search
                    </Button>
                    <Button
                        variant="outline"
                        className="border-orange-100 text-orange-600 hover:bg-orange-50 h-11 px-10 rounded-xl font-bold"
                        onClick={() => setSearchQuery("")}
                    >
                        Reset
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[300px]">
                <div className="overflow-x-auto font-sans">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#f8fafc] border-b border-gray-100">
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 w-16 text-center">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Faculty Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center">Avatar</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Role/Designation</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredTeachers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="py-24 text-center">
                                        <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                            <div className="bg-gray-50 p-6 rounded-3xl">
                                                <User size={48} className="text-gray-300" />
                                            </div>
                                            <p className="font-bold text-gray-400 italic">No faculty found</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredTeachers.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell className="py-4 px-6 text-center font-medium text-gray-500">{index + 1}</TableCell>
                                        <TableCell className="py-4">
                                            <div className="space-y-0.5">
                                                <div className="font-semibold text-gray-700">{row.name}</div>
                                                <div className="text-[10px] text-gray-400 uppercase tracking-widest">{row.email}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 overflow-hidden mx-auto flex items-center justify-center">
                                                {row.image ? <img src={row.image} alt={row.name} className="w-full h-full object-cover" /> : <User size={20} className="text-blue-300" />}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="flex items-center gap-2">
                                                <Briefcase size={14} className="text-[#c08457]" />
                                                <span className="text-sm font-bold text-gray-600 uppercase tracking-tighter">{row.designation}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 px-6">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                                    <Edit2 size={18} />
                                                </button>
                                                <button onClick={() => handleDelete(row.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Add Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-sans">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                <Plus size={24} />
                            </div>
                            Add New Faculty
                        </h2>
                        <form onSubmit={handleSave} className="space-y-4 font-sans">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">Full Name <span className="text-red-500">*</span></label>
                                    <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Priya" className="h-11 rounded-xl bg-gray-50/50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">Designation <span className="text-red-500">*</span></label>
                                    <Input required value={formData.designation} onChange={e => setFormData({ ...formData, designation: e.target.value })} placeholder="e.g. Python Trainer" className="h-11 rounded-xl bg-gray-50/50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">Email Address</label>
                                <Input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="faculty@example.com" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">Phone Number</label>
                                <Input value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="123456" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">Profile Image URL</label>
                                <Input value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} placeholder="https://api.dicebear.com/..." className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-50">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="h-11 px-8 rounded-xl font-bold text-gray-500 hover:bg-gray-50">Cancel</Button>
                                <Button type="submit" className="bg-[#1e40af] hover:bg-blue-900 text-white font-bold h-11 px-10 rounded-xl shadow-lg border-none transition-all active:scale-95">Save Faculty</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
