import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, BookOpen, Trash2, X, Search, Link } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addStudyMaterial, deleteStudyMaterial } from '@/store/websiteSlice';

export default function WebsiteStudyMaterialsPage() {
    const materials = useSelector((state) => state.website.studyMaterials || []);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ title: '', category: '', link: '' });

    const filteredMaterials = materials.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addStudyMaterial(formData));
        setIsModalOpen(false);
        setFormData({ title: '', category: '', link: '' });
    };

    const handleDelete = (id) => {
        if (window.confirm("Remove this study material?")) {
            dispatch(deleteStudyMaterial(id));
        }
    };

    return (
        <div className="space-y-6 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-sans">
                <h1 className="text-xl font-bold text-gray-800">Manage Study Materials</h1>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all shadow-md"
                >
                    <Plus size={18} />
                    Add New Material
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 font-sans italic">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 relative w-full italic">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search materials..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button className="bg-[#1e40af] hover:bg-blue-900 text-white h-11 px-10 rounded-xl font-bold transition-all shadow-md">
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
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Title</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Category</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Link/File</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredMaterials.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="py-24 text-center">
                                        <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                            <div className="bg-gray-50 p-6 rounded-3xl">
                                                <BookOpen size={48} className="text-gray-300" />
                                            </div>
                                            <p className="font-bold text-gray-400 italic">No study materials found</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredMaterials.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell className="py-4 px-6 text-center font-medium text-gray-500">{index + 1}</TableCell>
                                        <TableCell className="py-4 font-semibold text-gray-700">{row.title}</TableCell>
                                        <TableCell className="py-4 font-sans">
                                            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{row.category}</span>
                                        </TableCell>
                                        <TableCell className="py-4 text-blue-500 hover:underline max-w-xs truncate cursor-pointer font-sans h-10 block pt-4">
                                            <a href={row.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1"><Link size={14} /> View Material</a>
                                        </TableCell>
                                        <TableCell className="py-4 text-sm text-gray-500 font-sans">{row.createdAt}</TableCell>
                                        <TableCell className="py-4 px-6">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => handleDelete(row.id)}
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

            {/* Add Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-sans">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Plus size={24} className="text-indigo-600" />
                            Add Study Material
                        </h2>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Material Title <span className="text-red-500">*</span></label>
                                <Input required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. React Course PDF" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Category/Topic <span className="text-red-500">*</span></label>
                                <Input required value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} placeholder="e.g. Web Development" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">File/Link URL <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <Link className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <Input required value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} placeholder="https://drive.google.com/..." className="h-11 pl-10 rounded-xl bg-gray-50/50" />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="h-11 px-8 rounded-xl font-bold text-gray-500">Cancel</Button>
                                <Button type="submit" className="bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 text-white font-bold h-11 px-10 rounded-xl shadow-lg transition-all">Add Material</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
