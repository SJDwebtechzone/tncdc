import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Edit2, Trash2, Layout, Check, Monitor, X } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updateServiceSettings, addService, deleteService } from '@/store/websiteSlice';

export default function WebsiteServicesPage() {
    const settings = useSelector((state) => state.website.serviceSettings);
    const services = useSelector((state) => state.website.services || []);
    const dispatch = useDispatch();

    const [bannerForm, setBannerForm] = useState(settings);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', image: '', description: '', link: '' });

    const filteredServices = services.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleUpdateSettings = () => {
        dispatch(updateServiceSettings(bannerForm));
        alert("Service page banner settings updated!");
    };

    const handleSaveService = (e) => {
        e.preventDefault();
        dispatch(addService(formData));
        setIsModalOpen(false);
        setFormData({ name: '', image: '', description: '', link: '' });
    };

    const handleDeleteService = (id) => {
        if (window.confirm("Delete this service?")) {
            dispatch(deleteService(id));
        }
    };

    return (
        <div className="space-y-8 pb-10 font-sans relative">
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
                                <p className="text-[10px] text-gray-400 italic">Leave blank to use default title</p>
                            </div>
                            <div className="space-y-1.5 pt-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Banner Image URL</label>
                                <Input
                                    value={bannerForm.image}
                                    onChange={e => setBannerForm({ ...bannerForm, image: e.target.value })}
                                    className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                                    placeholder="https://..."
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Short Description</label>
                            <Textarea
                                className="min-h-[148px] bg-gray-50/50 border-gray-100 rounded-2xl text-sm leading-relaxed"
                                value={bannerForm.description}
                                onChange={e => setBannerForm({ ...bannerForm, description: e.target.value })}
                            />
                            <p className="text-[10px] text-gray-400 italic">Leave blank to use default description</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Button
                            onClick={handleUpdateSettings}
                            className="bg-[#1e40af] hover:bg-blue-900 text-white px-8 h-12 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95 border-none"
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
                    <h2 className="text-xl font-bold text-gray-800">Manage Our Services</h2>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#0f4c3a] hover:bg-[#0d3f30] text-white px-6 h-11 rounded-xl flex items-center gap-2 shadow-md transition-all border-none font-bold"
                    >
                        <Plus size={18} />
                        Add New Service
                    </Button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic">
                    <div className="flex flex-col gap-4">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Search Services</label>
                        <div className="flex flex-col md:flex-row gap-4 items-center font-sans">
                            <div className="flex-1 relative w-full italic">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Search size={16} />
                                </div>
                                <Input
                                    placeholder="Search by name or description..."
                                    className="pl-10 h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm italic"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <Button className="bg-[#1e3a8a] hover:bg-blue-900 text-white h-11 px-10 rounded-xl font-bold border-none transition-all shadow-md">
                                Search
                            </Button>
                            <Button
                                variant="outline"
                                className="border-[#c08457]/30 text-[#c08457] hover:bg-orange-50/30 h-11 px-10 rounded-xl font-bold bg-[#c08457]/10"
                                onClick={() => setSearchQuery("")}
                            >
                                Reset
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[300px]">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-[#f8fafc] border-b border-gray-100">
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 w-16 text-center">#</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Name</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center">Image</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Description</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Link</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredServices.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={7} className="py-24 text-center">
                                            <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                                <div className="bg-gray-50 p-6 rounded-3xl">
                                                    <Monitor size={48} className="text-gray-300" />
                                                </div>
                                                <p className="font-bold text-gray-400 italic">No services found</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredServices.map((row, index) => (
                                        <TableRow key={row.id}>
                                            <TableCell className="py-4 px-6 text-center font-medium text-gray-500">{index + 1}</TableCell>
                                            <TableCell className="py-4 font-semibold text-gray-700">{row.name}</TableCell>
                                            <TableCell className="py-4">
                                                <div className="w-12 h-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200 mx-auto">
                                                    {row.image && <img src={row.image} alt={row.name} className="w-full h-full object-cover" />}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 text-sm text-gray-500 max-w-xs truncate">{row.description}</TableCell>
                                            <TableCell className="py-4 text-blue-500 text-sm truncate max-w-[120px]">{row.link}</TableCell>
                                            <TableCell className="py-4 text-sm text-gray-500">{row.createdAt}</TableCell>
                                            <TableCell className="py-4 px-6">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                                        <Edit2 size={18} />
                                                    </button>
                                                    <button onClick={() => handleDeleteService(row.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-sans">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Plus size={24} className="text-[#0f4c3a]" />
                            Add New Service
                        </h2>
                        <form onSubmit={handleSaveService} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Service Name <span className="text-red-500">*</span></label>
                                <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Web Development" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Image URL</label>
                                <Input value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} placeholder="https://..." className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Link/Route</label>
                                <Input value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} placeholder="/courses/web-dev" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Description <span className="text-red-500">*</span></label>
                                <Textarea required value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="min-h-[120px] rounded-xl bg-gray-50/50 leading-relaxed" placeholder="Brief about the service..." />
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="h-11 px-8 rounded-xl font-bold text-gray-500 border-gray-200">Cancel</Button>
                                <Button type="submit" className="bg-[#0f4c3a] hover:bg-[#0d3f30] text-white font-bold h-11 px-10 rounded-xl shadow-lg transition-all border-none">Save Service</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
