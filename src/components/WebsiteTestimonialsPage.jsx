import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Edit2, Trash2, Layout, Check, X, User } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updateTestimonialSettings, addTestimonial, deleteTestimonial } from '@/store/websiteSlice';

export default function WebsiteTestimonialsPage() {
    const settings = useSelector((state) => state.website.testimonialSettings);
    const testimonials = useSelector((state) => state.website.testimonials || []);
    const dispatch = useDispatch();

    const [settingsForm, setSettingsForm] = useState(settings);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', image: '', role: '', institute: '', content: '' });

    const filteredTestimonials = testimonials.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.institute.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleUpdateSettings = () => {
        dispatch(updateTestimonialSettings(settingsForm));
        alert("Testimonial section settings updated!");
    };

    const handleSaveTestimonial = (e) => {
        e.preventDefault();
        dispatch(addTestimonial(formData));
        setIsModalOpen(false);
        setFormData({ name: '', image: '', role: '', institute: '', content: '' });
    };

    const handleDeleteTestimonial = (id) => {
        if (window.confirm("Delete this testimonial?")) {
            dispatch(deleteTestimonial(id));
        }
    };

    return (
        <div className="space-y-8 pb-10 relative font-sans">
            {/* Testimonial Section Settings */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 bg-gray-50/30">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <Layout size={20} className="text-blue-600" />
                        Section Settings
                    </h2>
                    <p className="text-xs text-gray-400 mt-1 italic">Update the titles for the testimonials block on your public site.</p>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                                Section Subtitle <span className="text-red-500">*</span>
                            </label>
                            <Input
                                value={settingsForm.subtitle}
                                onChange={e => setSettingsForm({ ...settingsForm, subtitle: e.target.value })}
                                className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                                Section Title <span className="text-red-500">*</span>
                            </label>
                            <Input
                                value={settingsForm.title}
                                onChange={e => setSettingsForm({ ...settingsForm, title: e.target.value })}
                                className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                            <p className="text-[10px] text-gray-400 italic">You can use &lt;br /&gt; for line breaks.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Button
                            onClick={handleUpdateSettings}
                            className="bg-[#0f4c3a] hover:bg-[#0d3f30] text-white px-8 h-12 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all border-none"
                        >
                            <Check size={18} />
                            Update Section Settings
                        </Button>
                    </div>
                </div>
            </div>

            {/* List Section */}
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                    <h2 className="text-xl font-bold text-gray-800">Manage Testimonials</h2>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1e3a8a] text-white px-6 h-11 rounded-xl flex items-center gap-2 shadow-md hover:bg-blue-900 transition-all border-none font-bold"
                    >
                        <Plus size={18} />
                        Add New Testimonial
                    </Button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 font-sans italic">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 relative w-full italic">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <Search size={16} />
                            </div>
                            <Input
                                placeholder="Search by name or institute..."
                                className="pl-10 h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm italic font-sans"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button className="bg-[#1e40af] hover:bg-blue-900 text-white h-11 px-10 rounded-xl font-bold border-none transition-all shadow-md">
                            Search
                        </Button>
                        <Button
                            variant="outline"
                            className="border-orange-100 text-orange-600 hover:bg-orange-50 h-11 px-10 rounded-xl font-bold font-sans"
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
                                <TableRow className="bg-[#f8fafc] border-b border-gray-100">
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 w-16 text-center">#</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Name</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center">Image</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Role/Institute</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Testimonial</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredTestimonials.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={7} className="py-24 text-center">
                                            <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                                <div className="bg-gray-50 p-6 rounded-3xl group">
                                                    <User size={48} className="text-gray-300 group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                                <p className="font-bold text-gray-400 italic">No testimonials found</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredTestimonials.map((row, index) => (
                                        <TableRow key={row.id}>
                                            <TableCell className="py-4 px-6 text-center font-medium text-gray-500 font-sans">{index + 1}</TableCell>
                                            <TableCell className="py-4 font-semibold text-gray-700">{row.name}</TableCell>
                                            <TableCell className="py-4">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-200 mx-auto">
                                                    {row.image && <img src={row.image} alt={row.name} className="w-full h-full object-cover" />}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 font-sans">
                                                <div className="text-xs font-bold text-gray-800 uppercase tracking-tighter">{row.role}</div>
                                                <div className="text-[10px] text-blue-500 font-bold">{row.institute}</div>
                                            </TableCell>
                                            <TableCell className="py-4 text-sm text-gray-500 max-w-xs truncate italic">"{row.content}"</TableCell>
                                            <TableCell className="py-4 text-xs text-gray-400 font-sans">{row.createdAt}</TableCell>
                                            <TableCell className="py-4 px-6 text-center font-sans">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                                        <Edit2 size={18} />
                                                    </button>
                                                    <button onClick={() => handleDeleteTestimonial(row.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
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
                            <Plus size={24} className="text-[#1e3a8a]" />
                            Add Testimonial
                        </h2>
                        <form onSubmit={handleSaveTestimonial} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 font-sans">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Name <span className="text-red-500">*</span></label>
                                    <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. John Doe" className="h-11 rounded-xl bg-gray-50/50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Role <span className="text-red-500">*</span></label>
                                    <Input required value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })} placeholder="e.g. Senior Student" className="h-11 rounded-xl bg-gray-50/50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Image URL</label>
                                <Input value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} placeholder="https://..." className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2 font-sans">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Institute/Organization <span className="text-red-500">*</span></label>
                                <Input required value={formData.institute} onChange={e => setFormData({ ...formData, institute: e.target.value })} placeholder="e.g. TNCDC Academy" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Testimonial Content <span className="text-red-500">*</span></label>
                                <Textarea required value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} className="min-h-[120px] rounded-xl bg-gray-50/50 leading-relaxed font-sans" placeholder="Student's feedback..." />
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="h-11 px-8 rounded-xl font-bold text-gray-500 border-gray-200">Cancel</Button>
                                <Button type="submit" className="bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold h-11 px-10 rounded-xl shadow-lg transition-all border-none font-sans">Save testimonial</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
