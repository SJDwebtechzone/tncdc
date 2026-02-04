import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Box, ArrowLeft, Image as ImageIcon } from "lucide-react";

export default function InventoryProductsPage() {
    const [view, setView] = useState('list');

    if (view === 'add') {
        return (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
                    <Button
                        onClick={() => setView('list')}
                        className="bg-white/90 hover:bg-white text-gray-800 px-6 py-2 rounded-xl flex items-center gap-2 shadow-lg border-none"
                    >
                        <ArrowLeft size={18} />
                        Back to List
                    </Button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Product Name <span className="text-red-500">*</span></label>
                                <Input placeholder="Enter Product Name" required className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Category <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>Select Category</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">MRP (₹) <span className="text-red-500">*</span></label>
                                <Input type="number" placeholder="0.00" required className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Price (₹) <span className="text-red-500">*</span></label>
                                <Input type="number" placeholder="0.00" required className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Opening Stock <span className="text-red-500">*</span></label>
                                <Input type="number" placeholder="0" required className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Product Image</label>
                                <Input type="file" className="h-11 rounded-xl p-2" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Status</label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-8 border-t border-gray-100">
                            <Button type="button" variant="outline" onClick={() => setView('list')} className="px-10 h-11 border-gray-200">
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-[#1e463a] hover:bg-[#153229] text-white px-10 h-11">
                                <Plus size={18} className="mr-2" />
                                Add Product
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Inventory Products</h1>
                <Button
                    onClick={() => setView('add')}
                    className="bg-[#1e463a] hover:bg-[#153229] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none"
                >
                    <Plus size={18} />
                    Add New Product
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-3 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={18} />
                        </div>
                        <Input
                            placeholder="Search products..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-200 rounded-xl"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                            <option>All Categories</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                            <option>All Status</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                            <option>All Stock</option>
                        </select>
                    </div>
                    <div className="md:col-span-3">
                        <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white h-11 rounded-xl font-bold flex items-center justify-center gap-2">
                            <Search size={18} />
                            Search
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50/50 hover:bg-gray-50/50 border-b border-gray-200">
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 px-6">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Image</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Product Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Category</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">MRP</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Price</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Stock</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={9} className="py-20 text-center">
                                    <div className="flex flex-col items-center justify-center text-gray-400 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-2xl">
                                            <Box size={48} className="text-gray-300" />
                                        </div>
                                        <p className="font-medium text-lg">No products found</p>
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
