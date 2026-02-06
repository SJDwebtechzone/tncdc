import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { X, Edit2, Trash2, Image as ImageIcon } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addGalleryItem, editGalleryItem, deleteGalleryItem } from '@/store/websiteSlice';

export default function WebsiteGalleryPage() {
    const gallery = useSelector((state) => state.website.gallery || []);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        isActive: true,
        preview: '' // Added for preview storage if needed
    });

    const handleOpenModal = (item = null) => {
        if (item) {
            setEditingId(item.id);
            setFormData({
                title: item.title || '',
                type: item.type || '',
                isActive: item.isActive !== undefined ? item.isActive : true,
                preview: item.preview || ''
            });
        } else {
            setEditingId(null);
            setFormData({ title: '', type: '', isActive: true, preview: '' });
        }
        setIsModalOpen(true);
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (editingId) {
            dispatch(editGalleryItem({ ...formData, id: editingId }));
        } else {
            dispatch(addGalleryItem(formData));
        }
        setIsModalOpen(false);
        setFormData({ title: '', type: '', isActive: true, preview: '' });
    };

    const handleDelete = (id) => {
        if (window.confirm("Remove this gallery item?")) {
            dispatch(deleteGalleryItem(id));
        }
    };

    return (
        <div className="space-y-6 font-sans relative pb-10 pt-4">

            <div className="px-6 space-y-4">
                <div className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden min-h-[500px]">
                    {/* Management Header */}
                    <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/10">
                        <h2 className="text-[14px] font-bold text-gray-800 uppercase tracking-widest">
                            Manage Gallery
                        </h2>
                        <Button
                            onClick={() => handleOpenModal()}
                            className="bg-[#154c4c] hover:bg-[#0f3838] text-white gap-2 rounded-sm px-6 h-10 text-[11px] font-bold transition-all border-none uppercase tracking-wider"
                        >
                            + Add New Gallery Item
                        </Button>
                    </div>

                    <div className="p-6">
                        <div className="overflow-x-auto rounded-sm border border-gray-200">
                            <Table className="border-collapse w-full">
                                <TableHeader>
                                    <TableRow className="bg-[#f1f5f9] hover:bg-[#f1f5f9] border-b border-gray-200">
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-center w-16">#</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Title</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Type</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Preview</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Status</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Created At</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 text-center">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {gallery.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={7} className="py-20 text-center border-b border-gray-100 italic text-gray-400">
                                                <div className="flex flex-col items-center gap-2">
                                                    <ImageIcon size={40} className="text-gray-200" />
                                                    <span className="text-sm font-medium">No gallery items found</span>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        gallery.map((row, index) => (
                                            <TableRow key={row.id} className="hover:bg-gray-50/50">
                                                <TableCell className="py-4 px-6 text-[12px] font-medium text-gray-500 border-r border-gray-200 text-center">{index + 1}</TableCell>
                                                <TableCell className="py-4 px-6 text-[12px] font-medium text-gray-700 border-r border-gray-200">{row.title}</TableCell>
                                                <TableCell className="py-4 px-6 text-[12px] text-gray-600 border-r border-gray-200 capitalize">{row.type || 'N/A'}</TableCell>
                                                <TableCell className="py-4 px-6 border-r border-gray-200">
                                                    <div className="w-12 h-8 rounded-sm bg-gray-100 overflow-hidden border border-gray-200">
                                                        {row.preview && <img src={row.preview} alt="" className="w-full h-full object-cover" />}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="py-4 px-6 border-r border-gray-200">
                                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${row.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                        {row.isActive ? 'Active' : 'Inactive'}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="py-4 px-6 text-[11px] text-gray-500 border-r border-gray-200 uppercase">{row.createdAt}</TableCell>
                                                <TableCell className="py-4 px-6">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button
                                                            onClick={() => handleOpenModal(row)}
                                                            className="h-8 w-8 bg-[#3b82f6] text-white rounded-sm flex items-center justify-center hover:bg-blue-600 transition-colors shadow-sm"
                                                        >
                                                            <Edit2 size={14} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(row.id)}
                                                            className="h-8 w-8 bg-[#ef4444] text-white rounded-sm flex items-center justify-center hover:bg-red-600 transition-colors shadow-sm"
                                                        >
                                                            <Trash2 size={14} />
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
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-sans">
                    <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                            <h2 className="text-[15px] font-bold text-gray-800 uppercase tracking-wider">
                                {editingId ? 'Edit Gallery Item' : 'Add New Gallery Item'}
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-8 space-y-6">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Title <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    required
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="Enter the title of the gallery item."
                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    required
                                    value={formData.type}
                                    onChange={e => setFormData({ ...formData, type: e.target.value })}
                                    className="w-full h-10 px-3 rounded-sm border border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e] bg-white outline-none"
                                >
                                    <option value="" disabled>Select Type</option>
                                    <option value="image">Image</option>
                                    <option value="video">YouTube Video</option>
                                </select>
                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">Select whether this is an image or a YouTube video.</p>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Active Status
                                </label>
                                <div className="flex items-center gap-2 px-1">
                                    <input
                                        type="checkbox"
                                        id="isActive"
                                        checked={formData.isActive}
                                        onChange={e => setFormData({ ...formData, isActive: e.target.checked })}
                                        className="w-4 h-4 rounded border-gray-300 text-[#154c4c] focus:ring-[#154c4c]"
                                    />
                                    <label htmlFor="isActive" className="text-[12px] font-medium text-gray-700 uppercase tracking-tight">
                                        Is Active
                                    </label>
                                </div>
                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">Check to make the gallery item active.</p>
                            </div>

                            <div className="flex justify-center gap-4 pt-6 mt-4">
                                <Button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-[#b9875a] hover:bg-[#a6764a] text-white h-10 text-[11px] font-bold px-12 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-[#154c4c] hover:bg-[#0f3838] text-white h-10 text-[11px] font-bold px-12 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                                >
                                    {editingId ? 'Update Gallery Item' : 'Add Gallery Item'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
