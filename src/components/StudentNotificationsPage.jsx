import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Search, RotateCcw, Trash2, X } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addNotification, deleteNotification } from '@/store/studentSlice';

export default function StudentNotificationsPage() {
    const notifications = useSelector((state) => state.students.notifications || []);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        link: '',
        status: 'Active'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNotification(formData));
        setIsModalOpen(false);
        setFormData({ title: '', description: '', link: '', status: 'Active' });
    };

    return (
        <div className="space-y-6 relative">
            <h1 className="text-xl font-bold text-gray-800">Manage Student Notifications</h1>

            {/* Header Actions */}
            <div className="flex justify-end">
                <Button onClick={() => setIsModalOpen(true)} className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white gap-2">
                    <Plus size={16} /> Add Notification
                </Button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-6 relative">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                    <Input className="pl-9 h-10 w-full" placeholder="Search by title or description..." />
                </div>
                <div className="md:col-span-3">
                    <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-600 bg-white">
                        <option>All Status</option>
                    </select>
                </div>
                <div className="md:col-span-3 lg:col-span-2">
                    <Button variant="outline" className="w-full h-10 border-blue-900 text-blue-900 hover:bg-blue-50">
                        Search
                    </Button>
                </div>
                <div className="md:col-span-3 lg:col-span-1">
                    <Button variant="outline" className="w-full h-10 border-orange-200 text-orange-500 hover:bg-orange-50">
                        Reset
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
                <Table>
                    <TableHeader className="bg-gray-50/50">
                        <TableRow>
                            <TableHead className="w-[50px] font-bold text-gray-800 text-xs uppercase">#</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Image</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Title</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Description</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Link</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Status</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Created At</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {notifications.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} className="text-center py-8 text-gray-500 text-sm">
                                    No notifications found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            notifications.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>
                                        <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                                    </TableCell>
                                    <TableCell className="font-medium">{item.title}</TableCell>
                                    <TableCell className="max-w-[200px] truncate">{item.description}</TableCell>
                                    <TableCell className="text-blue-500">{item.link}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded-full text-xs ${item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                            {item.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>{item.created}</TableCell>
                                    <TableCell className="text-center">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                            onClick={() => dispatch(deleteNotification(item.id))}
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

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-800 mb-1">Add Notification</h2>
                        <p className="text-sm text-gray-500 mb-6">Send a new notification to students.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Title</label>
                                <Input required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Notification Title" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Description</label>
                                <Input required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Brief description..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Link (Optional)</label>
                                <Input value={formData.link} onChange={(e) => setFormData({ ...formData, link: e.target.value })} placeholder="https://..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Status</label>
                                <select
                                    className="w-full h-10 rounded-md border border-gray-200 px-3 text-sm bg-white"
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>

                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">Send Notification</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
