import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, RotateCcw } from "lucide-react";

export default function ExpenseSubTypesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Manage Expenses Sub Types</h1>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all transform hover:scale-105"
                >
                    <Plus size={18} />
                    Add Sub Type
                </Button>
            </div>

            {/* Add Expense Sub Type Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-md rounded-sm shadow-2xl relative">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-sm font-normal text-gray-800">Add New Expense Sub Type</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Plus size={20} className="rotate-45" />
                            </button>
                        </div>

                        <form className="p-6 space-y-6">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700">Expense Type</label>
                                <select className="w-full h-9 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                                    <option>Select Expense Type</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700">Expense Sub Type</label>
                                <Input placeholder="Enter Expense Sub Type" className="h-9 rounded-sm border-gray-200 text-xs" />
                            </div>

                            <div className="flex justify-center gap-3 pt-2">
                                <Button type="button" onClick={() => setIsModalOpen(false)} className="bg-[#b45309] hover:bg-[#8e420b] text-white border-none h-9 text-xs font-bold px-8 rounded-sm">
                                    Cancel
                                </Button>
                                <Button type="submit" className="bg-[#1e463a] hover:bg-[#153229] text-white h-9 text-xs font-bold px-8 rounded-sm">
                                    Add Expense Sub Type
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-8 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={18} />
                        </div>
                        <Input
                            placeholder="Search..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-200 rounded-xl"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Button className="w-full bg-white hover:bg-gray-50 text-blue-900 border border-blue-900 h-11 rounded-xl font-bold">
                            Search
                        </Button>
                    </div>
                    <div className="md:col-span-2">
                        <Button variant="outline" className="w-full text-orange-600 border-orange-200 hover:bg-orange-50 bg-[#e4a873]/10 h-11 rounded-xl flex items-center gap-2">
                            <RotateCcw size={18} />
                            Reset
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
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Expense Sub Type</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Expense Type</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={6} className="py-20 text-center">
                                    <p className="font-bold text-lg text-red-500">No Data Available</p>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}






