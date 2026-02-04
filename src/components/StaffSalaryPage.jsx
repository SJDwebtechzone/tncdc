import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, RotateCcw, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function StaffSalaryPage() {
    const [view, setView] = useState('list');

    if (view === 'add') {
        return (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Generate Staff Salary</h1>
                    <Button
                        onClick={() => setView('list')}
                        className="bg-white/90 hover:bg-white text-gray-800 px-6 py-2 rounded-xl flex items-center gap-2 shadow-lg border-none"
                    >
                        <ArrowLeft size={18} />
                        Back to Records
                    </Button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Select Staff <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>Choose Staff...</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Month <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>Select Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Year <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>2026</option>
                                    <option>2025</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Gross Salary (₹) <span className="text-red-500">*</span></label>
                                <Input type="number" placeholder="0.00" className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Deductions (₹)</label>
                                <Input type="number" placeholder="0.00" className="h-11 rounded-xl" />
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-8 border-t border-gray-100">
                            <Button type="button" variant="outline" onClick={() => setView('list')} className="px-10 h-11 border-gray-200">
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 h-11">
                                <DollarSign size={18} className="mr-2" />
                                Generate Salary
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
                <h1 className="text-2xl font-bold text-gray-800">Staff Salary Records</h1>
                <Button
                    onClick={() => setView('add')}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all transform hover:scale-105"
                >
                    <DollarSign size={18} />
                    Generate Salary
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-4">
                        <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                            <option>February</option>
                        </select>
                    </div>
                    <div className="md:col-span-4">
                        <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                            <option>2026</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <Button className="w-full bg-white hover:bg-gray-50 text-blue-900 border border-blue-900 h-11 rounded-xl font-bold">
                            Filter
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
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Staff Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Month/Year</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Gross Salary</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Deductions</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Net Salary</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Generated By</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={9} className="py-20 text-center text-gray-400 font-medium">
                                    No salary records found
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
