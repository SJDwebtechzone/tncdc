import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, X, Search, Activity, Hash, Type } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addCounter, deleteCounter } from '@/store/websiteSlice';

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

export default function WebsiteCountersPage() {
    const counters = useSelector((state) => state.website.counters || []);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', value: '', icon: '', status: true });

    const filteredCounters = counters.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addCounter(formData));
        setIsModalOpen(false);
        setFormData({ name: '', value: '', icon: '', status: true });
    };

    const handleDelete = (id) => {
        if (window.confirm("Delete this counter?")) {
            dispatch(deleteCounter(id));
        }
    };

    return (
        <div className="space-y-6 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-sans">
                <h1 className="text-xl font-bold text-gray-800">Manage Website Counters</h1>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#0f4c3a] hover:bg-[#0d3f30] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all shadow-md"
                >
                    <Plus size={18} />
                    Add New Counter
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 font-sans italic">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 relative w-full italic">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search counters..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm italic"
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
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Count Value</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Icon Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredCounters.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="py-24 text-center">
                                        <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                            <div className="bg-gray-50 p-6 rounded-3xl">
                                                <Activity size={48} className="text-gray-300" />
                                            </div>
                                            <p className="font-bold text-gray-400 italic">No counters found</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredCounters.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell className="py-4 px-6 text-center font-medium text-gray-500">{index + 1}</TableCell>
                                        <TableCell className="py-4 font-semibold text-gray-700">{row.name}</TableCell>
                                        <TableCell className="py-4 font-bold text-blue-600">{row.value}</TableCell>
                                        <TableCell className="py-4 text-gray-500 italic">{row.icon}</TableCell>
                                        <TableCell className="py-4 px-4 text-center">
                                            <CustomBlueSwitch checked={row.status} onCheckedChange={() => { }} />
                                        </TableCell>
                                        <TableCell className="py-4 text-sm text-gray-500 font-sans">{row.createdAt}</TableCell>
                                        <TableCell className="py-4 px-6 text-center">
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
                            <Hash size={24} className="text-[#0f4c3a]" />
                            Add New Counter
                        </h2>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase flex items-center gap-1"><Type size={12} /> Counter Name <span className="text-red-500">*</span></label>
                                <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Happy Students" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase flex items-center gap-1"><Activity size={12} /> Count Value <span className="text-red-500">*</span></label>
                                <Input required type="number" value={formData.value} onChange={e => setFormData({ ...formData, value: e.target.value })} placeholder="e.g. 1000" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase flex items-center gap-1"><Hash size={12} /> Icon Name (Lucide)</label>
                                <Input value={formData.icon} onChange={e => setFormData({ ...formData, icon: e.target.value })} placeholder="e.g. Users" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="h-11 px-8 rounded-xl font-bold text-gray-500">Cancel</Button>
                                <Button type="submit" className="bg-[#0f4c3a] hover:bg-[#0d3f30] text-white font-bold h-11 px-10 rounded-xl shadow-lg transition-all">Add Counter</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
