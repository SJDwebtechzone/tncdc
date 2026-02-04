import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Download, ArrowLeft, PackageSearch, TrendingUp } from "lucide-react";

export default function StudentInventoryPage() {
    const [view, setView] = useState('list');

    if (view === 'add') {
        return (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Assign Inventory to Student</h1>
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
                                <label className="text-xs font-bold text-gray-600 uppercase">Select Student <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>Choose Student...</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Product <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>Select Product</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Quantity <span className="text-red-500">*</span></label>
                                <Input type="number" placeholder="1" required className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Discount (₹)</label>
                                <Input type="number" placeholder="0" className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Date <span className="text-red-500">*</span></label>
                                <Input type="date" required className="h-11 rounded-xl" />
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-8 border-t border-gray-100">
                            <Button type="button" variant="outline" onClick={() => setView('list')} className="px-10 h-11 border-gray-200">
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-[#1e463a] hover:bg-[#153229] text-white px-10 h-11">
                                <Plus size={18} className="mr-2" />
                                Assign Inventory
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0f172a] p-6 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <TrendingUp size={120} />
                    </div>
                    <div className="relative z-10">
                        <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Total Amount (All Time)</p>
                        <h2 className="text-4xl font-bold">₹0.00</h2>
                    </div>
                </div>
                <div className="bg-[#1e463a] p-6 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <TrendingUp size={120} />
                    </div>
                    <div className="relative z-10">
                        <p className="text-green-200 text-sm font-bold uppercase tracking-wider mb-1">This Month Total</p>
                        <h2 className="text-4xl font-bold">₹0.00</h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Student Inventory Management</h1>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="bg-[#1e463a] hover:bg-[#153229] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none">
                        <Download size={18} />
                        Export
                    </Button>
                    <Button
                        onClick={() => setView('add')}
                        className="bg-[#1e463a] hover:bg-[#153229] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none"
                    >
                        <Plus size={18} />
                        Assign Inventory to Student
                    </Button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-4 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={18} />
                        </div>
                        <Input
                            placeholder="Search student..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-200 rounded-xl"
                        />
                    </div>
                    <div className="md:col-span-3">
                        <Input type="date" className="h-11 rounded-xl bg-gray-50/50 border-gray-200" />
                    </div>
                    <div className="md:col-span-3">
                        <Input type="date" className="h-11 rounded-xl bg-gray-50/50 border-gray-200" />
                    </div>
                    <div className="md:col-span-2">
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
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Student</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Total Items</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Total Amount</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Discount</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Net Amount</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Date</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={8} className="py-20 text-center">
                                    <div className="flex flex-col items-center justify-center text-gray-400 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-2xl">
                                            <PackageSearch size={48} className="text-gray-300" />
                                        </div>
                                        <p className="font-medium text-lg">No inventory records found</p>
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
