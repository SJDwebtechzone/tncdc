import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Edit2, Trash2, Check, Layout, Image as ImageIcon, X } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updatePerformerSettings, addPerformer, deletePerformer } from '@/store/websiteSlice';

export default function WebsiteTopPerformersPage() {
    const settings = useSelector((state) => state.website.performerSettings);
    const performers = useSelector((state) => state.website.performers || []);
    const dispatch = useDispatch();

    const [bannerForm, setBannerForm] = useState(settings);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        course: '',
        description: ''
    });

    const filteredPerformers = performers.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.course.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleUpdateSettings = () => {
        dispatch(updatePerformerSettings(bannerForm));
        alert("Banner settings updated successfully!");
    };

    const handleSavePerformer = (e) => {
        e.preventDefault();
        dispatch(addPerformer(formData));
        setIsModalOpen(false);
        setFormData({ name: '', image: '', course: '', description: '' });
    };

    const handleDeletePerformer = (id) => {
        if (window.confirm("Are you sure you want to delete this performer?")) {
            dispatch(deletePerformer(id));
        }
    };

    return (
        <div className="space-y-8 pb-10 relative">
            <h1 className="hidden">Manage Top Performers</h1>

            {/* Banner Settings Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 bg-gray-50/30">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <Layout size={20} className="text-blue-600" />
                        Banner Settings
                    </h2>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                                    Title <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    value={bannerForm.title}
                                    onChange={e => setBannerForm({ ...bannerForm, title: e.target.value })}
                                    className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Banner Image</label>
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Image URL"
                                            value={bannerForm.image}
                                            onChange={e => setBannerForm({ ...bannerForm, image: e.target.value })}
                                            className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-400 italic">
                                        Accepted: JPEG, PNG, JPG, GIF, WEBP. Max: 5MB. Recommended: 1415x600px
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Short Description</label>
                            <Textarea
                                className="min-h-[148px] bg-gray-50/50 border-gray-100 rounded-2xl text-sm leading-relaxed"
                                value={bannerForm.description}
                                onChange={e => setBannerForm({ ...bannerForm, description: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <Button
                            onClick={handleUpdateSettings}
                            className="bg-[#0f4c3a] hover:bg-[#0d3f30] text-white px-8 h-12 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95"
                        >
                            <Check size={18} />
                            Update Banner Settings
                        </Button>
                    </div>
                </div>
            </div>

            {/* List Section */}
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                    <h2 className="text-xl font-bold text-gray-800">Manage Top Performers</h2>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 h-11 rounded-xl flex items-center gap-2 shadow-md transition-all"
                    >
                        <Plus size={18} />
                        Add New Performer
                    </Button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 relative w-full italic">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <Search size={16} />
                            </div>
                            <Input
                                placeholder="Search by name or course..."
                                className="pl-10 h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm italic"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button className="bg-[#1e3a8a] hover:bg-blue-900 text-white h-11 px-10 rounded-xl font-bold">
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
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-[#f8fafc] hover:bg-[#f8fafc] border-b border-gray-100">
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 w-16 text-center">#</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Name</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Image</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Course Name</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Short Description</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredPerformers.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={7} className="py-20 text-center">
                                            <p className="text-red-500 font-bold italic text-base">No Data Available</p>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredPerformers.map((row, index) => (
                                        <TableRow key={row.id}>
                                            <TableCell className="py-4 px-6 text-center font-medium text-gray-500">{index + 1}</TableCell>
                                            <TableCell className="py-4">
                                                <div className="w-12 h-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                                                    {row.image ? <img src={row.image} alt={row.name} className="w-full h-full object-cover" /> : <ImageIcon size={20} className="text-gray-300 m-auto mt-2" />}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 font-semibold text-gray-700">{row.name}</TableCell>
                                            <TableCell className="py-4 text-sm text-gray-600">{row.course}</TableCell>
                                            <TableCell className="py-4 text-sm text-gray-500 max-w-xs truncate">{row.description}</TableCell>
                                            <TableCell className="py-4 text-sm text-gray-500">{row.createdAt}</TableCell>
                                            <TableCell className="py-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                                        <Edit2 size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeletePerformer(row.id)}
                                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                    >
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
            </div>

            {/* Add Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Plus size={24} className="text-blue-600" />
                            Add New Performer
                        </h2>
                        <form onSubmit={handleSavePerformer} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Name <span className="text-red-500">*</span></label>
                                <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Image URL</label>
                                <Input value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} placeholder="https://..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Course Name</label>
                                <Input value={formData.course} onChange={e => setFormData({ ...formData, course: e.target.value })} placeholder="e.g. Web Development" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Short Description</label>
                                <Textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} placeholder="Brief achievements..." />
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-blue-600 text-white font-bold px-8">Save Performer</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

