import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Gift, Search, RotateCcw, ArrowLeft } from "lucide-react";

export default function OffersPage() {
    const [view, setView] = useState('list');

    if (view === 'add') {
        return (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Add New Offer</h1>
                    <Button
                        onClick={() => setView('list')}
                        className="bg-white/90 hover:bg-white text-gray-800 px-6 py-2 rounded-xl flex items-center gap-2 shadow-lg border-none transition-all"
                    >
                        <ArrowLeft size={18} />
                        Back to List
                    </Button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-4xl mx-auto">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Offer Title <span className="text-red-500">*</span></label>
                                <Input placeholder="Enter Offer Title" required className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Expiry Date <span className="text-red-500">*</span></label>
                                <Input type="date" required className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Offer Description <span className="text-red-500">*</span></label>
                                <textarea className="w-full h-32 rounded-xl border border-gray-200 p-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50 resize-none" placeholder="Provide details about the offer..." required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Offer Image <span className="text-red-500">*</span></label>
                                <Input type="file" required className="h-11 rounded-xl bg-gray-50/50 p-2" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Status</label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-8 border-t border-gray-100">
                            <Button type="button" variant="outline" onClick={() => setView('list')} className="px-10 h-11 border-gray-200 rounded-xl">
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-[#1e463a] hover:bg-[#153229] text-white px-10 h-11 rounded-xl shadow-lg transition-all font-bold">
                                <Plus size={18} className="mr-2" />
                                Create Offer
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
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Manage Offers</h1>
                <Button
                    onClick={() => setView('add')}
                    className="bg-[#1e463a] hover:bg-[#153229] text-white px-6 py-2 rounded-xl flex items-center gap-2 border-none shadow-md transition-all transform hover:scale-105"
                >
                    <Plus size={18} />
                    Add New Offer
                </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50/50 hover:bg-gray-50/50 border-b border-gray-200">
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Title</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Description</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Image</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Expiry Date</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={8} className="py-24 text-center">
                                    <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                        <div className="bg-gray-50 p-6 rounded-3xl group">
                                            <Gift size={64} className="text-gray-300 group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <p className="font-bold text-lg text-gray-400 italic">No offers found</p>
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
