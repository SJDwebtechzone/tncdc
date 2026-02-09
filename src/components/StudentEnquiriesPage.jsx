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
    const [profileImage, setProfileImage] = useState(null);
    const [signature, setSignature] = useState(null);
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white w-full max-w-4xl rounded-sm shadow-2xl relative my-8">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-lg font-normal text-gray-800">Add New Enquiry</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-6 space-y-8 max-h-[80vh] overflow-y-auto">
                            {/* Personal Information */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                    <User size={16} /> Personal Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-red-500 uppercase">First Name *</label>
                                        <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="h-9 rounded-sm border-gray-200" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-red-500 uppercase">Relationship *</label>
                                        <select className="w-full h-9 rounded-sm border border-gray-200 px-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                                            <option>Select</option>
                                            <option>Father</option>
                                            <option>Mother</option>
                                            <option>Self</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-gray-600 uppercase">Father/Husband Name</label>
                                        <Input className="h-9 rounded-sm border-gray-200" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-gray-600 uppercase">Surname Name</label>
                                        <Input className="h-9 rounded-sm border-gray-200" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-red-500 uppercase">Date of Birth *</label>
                                        <Input required type="date" value={formData.dob} onChange={e => setFormData({ ...formData, dob: e.target.value })} className="h-9 rounded-sm border-gray-200" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-red-500 uppercase">Gender *</label>
                                        <select className="w-full h-9 rounded-sm border border-gray-200 px-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-red-500 uppercase">PIN Code *</label>
                                        <Input required className="h-9 rounded-sm border-gray-200" />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                    <Phone size={16} /> Contact Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-red-500 uppercase">Mobile Number *</label>
                                        <Input required value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })} className="h-9 rounded-sm border-gray-200" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-gray-600 uppercase">Alternate Mobile</label>
                                        <Input className="h-9 rounded-sm border-gray-200" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-gray-600 uppercase">Email Address</label>
                                        <Input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="h-9 rounded-sm border-gray-200" />
                                    </div>
                                    <div className="space-y-1 md:col-span-3">
                                        <label className="text-[11px] font-bold text-gray-600 uppercase">Address</label>
                                        <textarea className="w-full h-20 rounded-sm border border-gray-200 p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none resize-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Course & Assignment */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                    <Calendar size={16} /> Course & Assignment
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-red-500 uppercase">Course *</label>
                                        <select
                                            className="w-full h-9 rounded-sm border border-gray-200 px-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white"
                                            value={formData.course}
                                            onChange={e => setFormData({ ...formData, course: e.target.value })}
                                        >
                                            <option>Select Course</option>
                                            <option value="Java Full Stack">Java Full Stack</option>
                                            <option value="Python Full Stack">Python Full Stack</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-gray-600 uppercase">Source</label>
                                        <select
                                            className="w-full h-9 rounded-sm border border-gray-200 px-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white"
                                            value={formData.source}
                                            onChange={e => setFormData({ ...formData, source: e.target.value })}
                                        >
                                            <option value="Select Source">Select Source</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Referral">Referral</option>
                                            <option value="Walk-in">Walk-in</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-gray-600 uppercase">Assign To</label>
                                        <select
                                            className="w-full h-9 rounded-sm border border-gray-200 px-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white"
                                            value={formData.assignedTo}
                                            onChange={e => setFormData({ ...formData, assignedTo: e.target.value })}
                                        >
                                            <option value="Select Employee">Select Employee</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Documents */}
                            <div className="space-y-4 pb-4">
                                <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                    <Upload size={16} /> Documents
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-gray-600 uppercase">Profile Image</label>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    id="profile-image-input"
                                                    onChange={(e) => setProfileImage(e.target.files[0])}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    className="h-8 text-xs px-3 rounded-sm bg-gray-50 border-gray-200"
                                                    onClick={() => document.getElementById('profile-image-input').click()}
                                                >
                                                    Choose File
                                                </Button>
                                                <span className="text-[10px] text-gray-400 truncate max-w-[150px]">
                                                    {profileImage ? profileImage.name : "No file chosen"}
                                                </span>
                                                {profileImage && (
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 text-red-500"
                                                        onClick={() => setProfileImage(null)}
                                                    >
                                                        <X size={14} />
                                                    </Button>
                                                )}
                                            </div>
                                            {profileImage && (
                                                <div className="w-16 h-16 rounded border overflow-hidden bg-gray-50">
                                                    <img src={URL.createObjectURL(profileImage)} alt="Preview" className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-[9px] text-gray-400">Max size: 2MB, Format: JPG, PNG</p>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-gray-600 uppercase">Signature</label>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    id="signature-input"
                                                    onChange={(e) => setSignature(e.target.files[0])}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    className="h-8 text-xs px-3 rounded-sm bg-gray-50 border-gray-200"
                                                    onClick={() => document.getElementById('signature-input').click()}
                                                >
                                                    Choose File
                                                </Button>
                                                <span className="text-[10px] text-gray-400 truncate max-w-[150px]">
                                                    {signature ? signature.name : "No file chosen"}
                                                </span>
                                                {signature && (
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 text-red-500"
                                                        onClick={() => setSignature(null)}
                                                    >
                                                        <X size={14} />
                                                    </Button>
                                                )}
                                            </div>
                                            {signature && (
                                                <div className="w-16 h-16 rounded border overflow-hidden bg-gray-50">
                                                    <img src={URL.createObjectURL(signature)} alt="Preview" className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-[9px] text-gray-400">Max size: 1MB, Format: JPG, PNG</p>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="flex justify-end gap-3 p-4 border-t bg-gray-50/50">
                            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="bg-[#b45309] hover:bg-[#8e420b] text-white border-none h-9 text-xs font-bold px-6 rounded-sm">
                                Cancel
                            </Button>
                            <Button type="submit" onClick={handleSave} className="bg-[#1e463a] hover:bg-[#153229] text-white h-9 text-xs font-bold px-6 rounded-sm">
                                Add Enquiry
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}






