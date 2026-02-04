import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Edit2, Trash2, Check, Layout, X } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updateFAQSettings, addFAQ, deleteFAQ } from '@/store/websiteSlice';

const CustomBlueSwitch = ({ checked, onCheckedChange }) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`
            relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:outline-none 
            ${checked ? 'bg-white border-[#1a237e]' : 'bg-gray-200 border-transparent'}
        `}
    >
        <span
            className={`
                pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform 
                ${checked ? 'translate-x-4 bg-[#1a237e]' : 'translate-x-0.5 bg-white'}
            `}
        />
    </button>
)

export default function WebsiteFAQsPage() {
    const settings = useSelector((state) => state.website.faqSettings);
    const faqs = useSelector((state) => state.website.faqs || []);
    const dispatch = useDispatch();

    const [settingsForm, setSettingsForm] = useState({
        title: settings.title || '',
        description: settings.description || ''
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        status: true
    });

    const filteredFaqs = faqs.filter(f =>
        f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleUpdateSettings = () => {
        dispatch(updateFAQSettings(settingsForm));
        alert("FAQ section settings updated!");
    };

    const handleSaveFAQ = (e) => {
        e.preventDefault();
        dispatch(addFAQ(formData));
        setIsModalOpen(false);
        setFormData({ question: '', answer: '', status: true });
    };

    const handleDeleteFAQ = (id) => {
        if (window.confirm("Delete this FAQ?")) {
            dispatch(deleteFAQ(id));
        }
    };

    return (
        <div className="space-y-8 pb-10 relative">
            {/* FAQ Section Settings */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 bg-gray-50/30">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <Layout size={20} className="text-blue-600" />
                        FAQ Section Settings
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">Update the title and subtitle for the FAQ section on the home page.</p>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                                Subtitle <span className="text-red-500">*</span>
                            </label>
                            <Input
                                value={settingsForm.description}
                                onChange={e => setSettingsForm({ ...settingsForm, description: e.target.value })}
                                className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                                Title <span className="text-red-500">*</span>
                            </label>
                            <Input
                                value={settingsForm.title}
                                onChange={e => setSettingsForm({ ...settingsForm, title: e.target.value })}
                                className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <Button
                            onClick={handleUpdateSettings}
                            className="bg-[#0f4c3a] hover:bg-[#0d3f30] text-white px-8 h-12 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all"
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
                    <h2 className="text-xl font-bold text-gray-800">Manage FAQs</h2>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1e3a8a] text-white px-6 h-11 rounded-xl flex items-center gap-2 shadow-md hover:bg-blue-900 transition-all font-sans"
                    >
                        <Plus size={18} />
                        Add New FAQ
                    </Button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 font-sans italic">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 relative w-full italic">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <Search size={16} />
                            </div>
                            <Input
                                placeholder="Search by question or answer..."
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
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Question</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Answer</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Status</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredFaqs.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="py-20 text-center font-bold text-red-500 italic">
                                            No Data Available
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredFaqs.map((row, index) => (
                                        <TableRow key={row.id}>
                                            <TableCell className="py-4 px-6 text-center font-medium text-gray-500">{index + 1}</TableCell>
                                            <TableCell className="py-4 font-semibold text-gray-700 max-w-xs">{row.question}</TableCell>
                                            <TableCell className="py-4 text-sm text-gray-500 max-w-md truncate">{row.answer}</TableCell>
                                            <TableCell className="py-4 px-4">
                                                <CustomBlueSwitch checked={row.status} onCheckedChange={() => { }} />
                                            </TableCell>
                                            <TableCell className="py-4 text-sm text-gray-500 whitespace-nowrap">{row.createdAt}</TableCell>
                                            <TableCell className="py-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                                        <Edit2 size={18} />
                                                    </button>
                                                    <button onClick={() => handleDeleteFAQ(row.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
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
                            Add New FAQ
                        </h2>
                        <form onSubmit={handleSaveFAQ} className="space-y-4 font-sans">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Question <span className="text-red-500">*</span></label>
                                <Input required value={formData.question} onChange={e => setFormData({ ...formData, question: e.target.value })} placeholder="Ask something..." className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Answer <span className="text-red-500">*</span></label>
                                <Textarea required value={formData.answer} onChange={e => setFormData({ ...formData, answer: e.target.value })} className="min-h-[120px] rounded-xl bg-gray-50/50" placeholder="Provide the answer..." />
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="h-11 px-8 rounded-xl font-bold text-gray-500">Cancel</Button>
                                <Button type="submit" className="bg-[#1e40af] hover:bg-blue-900 text-white font-bold h-11 px-10 rounded-xl shadow-lg transition-all">Save FAQ</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
