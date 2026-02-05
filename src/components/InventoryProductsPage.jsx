import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Box, Image as ImageIcon, X, Save } from "lucide-react";

export default function InventoryProductsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0].name);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800 font-sans tracking-tight uppercase">Inventory Products</h1>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#1e463a] hover:bg-[#153229] text-white px-6 py-2 rounded-sm flex items-center gap-2 border-none transition-all transform active:scale-95 shadow-md font-sans text-xs font-bold uppercase tracking-wider h-10"
                >
                    <Plus size={18} />
                    Add New Product
                </Button>
            </div>

            {/* Add Product Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4">
                    <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl relative animate-in fade-in zoom-in duration-200">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                            <h2 className="text-base font-bold text-gray-800 font-sans uppercase tracking-tight">Add New Product</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 p-1 rounded-sm"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <form className="p-8 space-y-8 max-h-[85vh] overflow-y-auto font-sans">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {/* Category */}
                                <div className="space-y-1.5 focus-within:text-[#1e463a] transition-colors">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                                        Category <span className="text-red-500">*</span>
                                    </label>
                                    <select className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-[#1e463a] outline-none bg-white text-gray-400 transition-all cursor-pointer">
                                        <option>Select Category</option>
                                    </select>
                                </div>

                                {/* Product Name */}
                                <div className="space-y-1.5 focus-within:text-[#1e463a] transition-colors">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                                        Product Name <span className="text-red-500">*</span>
                                    </label>
                                    <Input placeholder="Enter product name" required className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1e463a] transition-all" />
                                </div>

                                {/* MRP */}
                                <div className="space-y-1.5 focus-within:text-[#1e463a] transition-colors">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                                        MRP <span className="text-red-500">*</span>
                                    </label>
                                    <Input type="number" placeholder="Enter MRP" required className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1e463a] transition-all" />
                                </div>

                                {/* Price */}
                                <div className="space-y-1.5 focus-within:text-[#1e463a] transition-colors">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                                        Price <span className="text-red-500">*</span>
                                    </label>
                                    <Input type="number" placeholder="Enter Price" required className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1e463a] transition-all" />
                                </div>

                                {/* Stock */}
                                <div className="space-y-1.5 focus-within:text-[#1e463a] transition-colors">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                                        Stock <span className="text-red-500">*</span>
                                    </label>
                                    <Input type="number" placeholder="Enter Initial Stock" required className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1e463a] transition-all" />
                                </div>

                                {/* Stock Date */}
                                <div className="space-y-1.5 focus-within:text-[#1e463a] transition-colors">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                                        Stock Date <span className="text-red-500">*</span>
                                    </label>
                                    <Input type="date" defaultValue="2026-02-05" className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1e463a] transition-all" />
                                </div>

                                {/* Status */}
                                <div className="space-y-1.5 focus-within:text-[#1e463a] transition-colors">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                                        Status <span className="text-red-500">*</span>
                                    </label>
                                    <select className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-[#1e463a] outline-none bg-white text-gray-700 transition-all cursor-pointer">
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                            </div>

                            {/* Product Image */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                                    Product Image <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center border border-gray-200 rounded-sm overflow-hidden h-10 bg-white shadow-sm focus-within:ring-1 focus-within:ring-[#1e463a] transition-all">
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            className="hidden"
                                            accept="image/*"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="bg-gray-100 h-full px-5 text-[11px] font-bold border-r border-gray-200 text-gray-600 hover:bg-gray-200 transition-colors uppercase tracking-widest whitespace-nowrap"
                                        >
                                            Choose File
                                        </button>
                                        <span className="px-4 text-[11px] text-gray-400 truncate max-w-[300px] italic">
                                            {selectedFile || "No file chosen"}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-medium italic opacity-80">
                                        Accepted formats: JPEG, JPG, PNG, WEBP (Max 2MB)
                                    </p>
                                </div>
                            </div>

                            {/* Modal Footer Buttons */}
                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                                <Button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-[#b9875a] hover:bg-[#a6764a] text-white px-8 h-10 rounded-sm text-[11px] font-bold border-none transition-all uppercase tracking-widest shadow-sm flex items-center justify-center"
                                >
                                    Close
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-[#1e463a] hover:bg-[#153229] text-white px-8 h-10 rounded-sm text-[11px] font-bold flex items-center justify-center gap-2 shadow-sm border-none uppercase tracking-widest transition-all"
                                >
                                    <Save size={16} />
                                    Save Product
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <h3 className="text-sm font-bold text-[#1e3a8a] border-b border-gray-100 pb-4 uppercase tracking-wider mb-6">Manage Inventory Products</h3>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end font-sans">
                    <div className="md:col-span-3 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 border-r pr-2 border-gray-200">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search products..."
                            className="pl-12 h-11 bg-gray-50/50 border-gray-200 rounded-sm placeholder:text-gray-400 text-sm focus:bg-white transition-all shadow-inner"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <select className="w-full h-11 rounded-sm border border-gray-200 px-4 text-sm focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-gray-50/50 text-gray-600 transition-all cursor-pointer">
                            <option>All Categories</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <select className="w-full h-11 rounded-sm border border-gray-200 px-4 text-sm focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-gray-50/50 text-gray-600 transition-all cursor-pointer">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <select className="w-full h-11 rounded-sm border border-gray-200 px-4 text-sm focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-gray-50/50 text-gray-600 transition-all cursor-pointer">
                            <option>All Stock</option>
                            <option>In Stock</option>
                            <option>Out of Stock</option>
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
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Image</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Product Name</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Category</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-right">MRP</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-right">Price</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-center">Stock</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-center">Status</TableHead>
                                <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 text-center tracking-wider">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={9} className="py-24 text-center">
                                    <div className="flex flex-col items-center justify-center text-gray-400 gap-4">
                                        <div className="bg-gray-50 p-6 rounded-3xl">
                                            <Box size={48} className="text-gray-300" />
                                        </div>
                                        <p className="font-bold text-[11px] uppercase tracking-widest text-[#1e3a8a]">No products found</p>
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
