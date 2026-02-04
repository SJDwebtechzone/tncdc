import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit2, Trash2, X, Smartphone, Image } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addMobileBanner, deleteMobileBanner } from '@/store/websiteSlice';

const CustomBlueSwitch = ({ checked, onCheckedChange }) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full border-2 transition-colors focus-visible:outline-none ${checked ? 'bg-white border-[#1a237e]' : 'bg-gray-200 border-transparent'}`}
    >
        <span className={`pointer-events-none block h-4 w-4 rounded-full shadow-lg transition-transform ${checked ? 'translate-x-4 bg-[#1a237e]' : 'translate-x-0.5 bg-white'}`} />
    </button>
)

export default function WebsiteMobileBannersPage() {
    const banners = useSelector((state) => state.website.mobileBanners || []);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ title: '', image: '', type: 'Home', link: '', order: '1', status: true });

    const filteredBanners = banners.filter(b =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addMobileBanner(formData));
        setIsModalOpen(false);
        setFormData({ title: '', image: '', type: 'Home', link: '', order: '1', status: true });
    };

    const handleDelete = (id) => {
        if (window.confirm("Delete this mobile banner?")) {
            dispatch(deleteMobileBanner(id));
        }
    };

    return (
        <div className="space-y-6 font-sans relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Smartphone size={24} className="text-blue-600" />
                    Manage Mobile Banners
                </h1>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-xl flex items-center gap-2 border-none transition-all shadow-md font-bold"
                >
                    <Plus size={18} />
                    Add New Mobile Banner
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 relative w-full italic">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search by banner title..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm italic"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button className="bg-[#1e40af] hover:bg-blue-900 text-white h-11 px-10 rounded-xl font-bold transition-all shadow-md border-none">
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
                            <TableRow className="bg-[#f8fafc] border-b border-gray-100">
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 w-16 text-center">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Title</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Preview</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Type</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Link</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Order</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredBanners.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={9} className="py-24 text-center">
                                        <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                            <div className="bg-gray-50 p-6 rounded-3xl">
                                                <Image size={48} className="text-gray-300" />
                                            </div>
                                            <p className="font-bold text-gray-400 italic">No mobile banners found</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredBanners.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell className="py-4 px-6 text-center font-medium text-gray-500">{index + 1}</TableCell>
                                        <TableCell className="py-4 font-semibold text-gray-700">{row.title}</TableCell>
                                        <TableCell className="py-4">
                                            <div className="w-16 h-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                                                {row.image && <img src={row.image} alt={row.title} className="w-full h-full object-cover" />}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 text-xs font-bold text-blue-600 uppercase tracking-widest">{row.type}</TableCell>
                                        <TableCell className="py-4 text-sm text-gray-500 max-w-[120px] truncate">{row.link}</TableCell>
                                        <TableCell className="py-4 font-bold text-gray-700">{row.order}</TableCell>
                                        <TableCell className="py-4 text-center">
                                            <div className="flex justify-center">
                                                <CustomBlueSwitch checked={row.status} onCheckedChange={() => { }} />
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 text-xs text-gray-400">{row.createdAt}</TableCell>
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
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Plus size={24} className="text-[#0f172a]" />
                            Add Mobile Banner
                        </h2>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="space-y-2">
                                <Label className="text-gray-600">Banner Title <span className="text-red-500">*</span></Label>
                                <Input required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. New Year Offer" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-gray-600">Image URL <span className="text-red-500">*</span></Label>
                                <Input required value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} placeholder="https://..." className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-gray-600">Type</Label>
                                    <Input value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })} placeholder="e.g. Home" className="h-11 rounded-xl bg-gray-50/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-600">Order</Label>
                                    <Input type="number" value={formData.order} onChange={e => setFormData({ ...formData, order: e.target.value })} className="h-11 rounded-xl bg-gray-50/50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-gray-600">Link URL</Label>
                                <Input value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} placeholder="https://..." className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="h-11 px-8 rounded-xl font-bold text-gray-500">Cancel</Button>
                                <Button type="submit" className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold h-11 px-10 rounded-xl shadow-lg border-none">Save Banner</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const Label = ({ children, className }) => <label className={`block text-xs font-bold uppercase tracking-widest ${className}`}>{children}</label>;
