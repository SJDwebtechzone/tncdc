import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, FolderOpen, TrendingUp, X, Save, Download } from "lucide-react";

export default function InventoryCategoriesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            {/* Stats Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0f172a] p-6 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <TrendingUp size={120} />
                    </div>
                    <div className="relative z-10 font-sans">
                        <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Total Categories</p>
                        <h2 className="text-4xl font-bold">0</h2>
                    </div>
                </div>
                <div className="bg-[#1e463a] p-6 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <TrendingUp size={120} />
                    </div>
                    <div className="relative z-10 font-sans">
                        <p className="text-green-200 text-xs font-bold uppercase tracking-wider mb-1">Total Active</p>
                        <h2 className="text-4xl font-bold">0</h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800 font-sans tracking-tight uppercase">Inventory Categories</h1>
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        className="bg-[#1e463a] hover:bg-[#153229] text-white px-6 h-10 rounded-sm flex items-center gap-2 border-none transition-all shadow-md font-sans text-xs font-bold uppercase tracking-wider"
                    >
                        <Download size={18} />
                        Export
                    </Button>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1e463a] hover:bg-[#153229] text-white px-6 h-10 rounded-sm flex items-center gap-2 border-none transition-all shadow-md font-sans text-xs font-bold uppercase tracking-wider"
                    >
                        <Plus size={18} />
                        Add New Category
                    </Button>
                </div>
            </div>

            {/* Add Category Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4">
                    <div className="bg-white w-full max-w-md rounded-sm shadow-2xl relative animate-in fade-in zoom-in duration-200">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                            <h2 className="text-base font-bold text-gray-800 font-sans uppercase tracking-tight text-[13px]">Add New Category</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 p-1 rounded-sm"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <form className="p-8 space-y-6 font-sans">
                            <div className="space-y-1.5 focus-within:text-[#1e463a] transition-colors">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                                    Category Name <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    placeholder="Enter category name"
                                    required
                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1e463a] transition-all"
                                />
                            </div>

                            <div className="space-y-1.5 focus-within:text-[#1e463a] transition-colors">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                                    Status <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-[#1e463a] outline-none bg-white text-gray-700 transition-all cursor-pointer">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>

                            {/* Modal Footer Buttons */}
                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                                <Button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-[#b9875a] hover:bg-[#a6764a] text-white px-8 h-10 rounded-sm text-[11px] font-bold border-none transition-all uppercase tracking-widest shadow-sm flex items-center justify-center p-0"
                                >
                                    Close
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-[#1e463a] hover:bg-[#153229] text-white px-8 h-10 rounded-sm text-[11px] font-bold flex items-center justify-center gap-2 shadow-sm border-none uppercase tracking-widest transition-all p-0"
                                >
                                    <Save size={16} />
                                    Save Category
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <h3 className="text-sm font-bold text-[#1e3a8a] border-b border-gray-100 pb-4 uppercase tracking-wider mb-6">Manage Inventory Categories</h3>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end font-sans">
                    <div className="md:col-span-6 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 border-r pr-2 border-gray-200">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search categories..."
                            className="pl-12 h-11 bg-gray-50/50 border-gray-200 rounded-sm placeholder:text-gray-400 text-sm focus:bg-white transition-all shadow-inner"
                        />
                    </div>
                    <div className="md:col-span-3">
                        <select className="w-full h-11 rounded-sm border border-gray-200 px-4 text-sm focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-gray-50/50 text-gray-600 transition-all cursor-pointer">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                    <div className="md:col-span-3">
                        <Button className="w-full bg-[#1e3a8a] hover:bg-[#1a365d] text-white h-11 rounded-sm font-bold flex items-center justify-center gap-2 border-none shadow-md transition-all active:scale-95 uppercase tracking-widest text-xs">
                            <Search size={18} />
                            Search
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#f8fafc] hover:bg-[#f8fafc] border-b border-gray-200 font-sans">
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100">#</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Name</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-center">Products Count</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-center">Status</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-center">Created</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 text-center tracking-wider">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={6} className="py-24 text-center">
                                    <div className="flex flex-col items-center justify-center text-gray-400 gap-4">
                                        <div className="bg-gray-50 p-6 rounded-3xl">
                                            <FolderOpen size={48} className="text-gray-300" />
                                        </div>
                                        <p className="font-bold text-[11px] uppercase tracking-widest text-[#1e3a8a]">No categories found</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
