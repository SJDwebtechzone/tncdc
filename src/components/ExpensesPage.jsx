import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, RotateCcw, ArrowLeft, Download, Filter, TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export default function ExpensesPage() {
    const [view, setView] = useState('list');

    if (view === 'add') {
        return (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Add Expense</h1>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Expense Type <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>Select Expense Type</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Expense Sub Type <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>Select Expense Type First</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Receiver Name</label>
                                <Input placeholder="Enter Receiver Name" className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Issue Person Name</label>
                                <Input placeholder="Enter Issue Person Name" className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Amount <span className="text-red-500">*</span></label>
                                <Input type="number" placeholder="Enter Amount" required className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Payment Mode <span className="text-red-500">*</span></label>
                                <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                                    <option>Select Payment Mode</option>
                                    <option>Cash</option>
                                    <option>Online</option>
                                    <option>Cheque</option>
                                </select>
                            </div>
                            <div className="space-y-2 md:col-span-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Date <span className="text-red-500">*</span></label>
                                <Input type="date" required className="h-11 rounded-xl" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-600 uppercase">Remark</label>
                            <textarea
                                className="w-full h-32 rounded-xl border border-gray-200 p-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50 resize-none"
                                placeholder="Enter your remark"
                            />
                        </div>

                        <div className="flex justify-start gap-4 pt-8 border-t border-gray-100">
                            <Button type="submit" className="bg-[#1e293b] hover:bg-[#0f172a] text-white px-10 h-11">
                                Submit
                            </Button>
                            <Button type="button" variant="outline" onClick={() => setView('list')} className="px-10 h-11 border-gray-200 bg-[#c08457] hover:bg-[#a66d43] text-white border-none">
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Financial Management</h1>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-green-500 border-x border-b border-gray-100 flex items-center justify-between group hover:shadow-md transition-all">
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Total Income</p>
                        <h2 className="text-3xl font-bold text-green-600 tracking-tight">₹0.00</h2>
                        <p className="text-[10px] text-gray-400 mt-1 font-medium italic">1 admission(s)</p>
                    </div>
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                        <TrendingUp size={24} />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-red-500 border-x border-b border-gray-100 flex items-center justify-between group hover:shadow-md transition-all">
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Total Expenses</p>
                        <h2 className="text-3xl font-bold text-red-600 tracking-tight">₹0.00</h2>
                        <p className="text-[10px] text-gray-400 mt-1 font-medium italic">0 transaction(s)</p>
                    </div>
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                        <TrendingDown size={24} />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500 border-x border-b border-gray-100 flex items-center justify-between group hover:shadow-md transition-all">
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Net Profit/Loss</p>
                        <h2 className="text-3xl font-bold text-blue-600 tracking-tight">₹0.00</h2>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 mt-1 uppercase">
                            <Plus size={8} className="mr-0.5" /> Profit (0%)
                        </span>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        <DollarSign size={24} />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Expense Records</h2>
                        <p className="text-sm text-gray-500 font-medium italic">Manage and track all your business expenses</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            onClick={() => setView('add')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none shadow-md"
                        >
                            <Plus size={18} />
                            Add New Expense
                        </Button>
                        <Button className="bg-[#1e463a] hover:bg-[#153229] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none shadow-md">
                            <Download size={18} />
                            Export
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider ml-1">Search</label>
                            <Input placeholder="Receipt, name, remark..." className="h-11 bg-white border-gray-200 rounded-xl text-sm" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider ml-1">Expense Type</label>
                            <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                <option>All Types</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider ml-1">Sub Type</label>
                            <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white font-medium italic text-gray-400">
                                <option>All Sub Types</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider ml-1">Payment Mode</label>
                            <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                <option>All Modes</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider ml-1">From Date</label>
                            <Input type="date" className="h-11 bg-white border-gray-200 rounded-xl text-sm" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider ml-1">To Date</label>
                            <Input type="date" className="h-11 bg-white border-gray-200 rounded-xl text-sm" />
                        </div>
                        <div className="md:col-span-1">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm">
                                <Filter size={16} />
                                Apply Filters
                            </Button>
                        </div>
                        <div className="md:col-span-1">
                            <Button variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 h-11 rounded-xl font-bold bg-orange-50/30">
                                Reset All
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50/50 hover:bg-gray-50/50 border-b border-gray-200">
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5 px-4">#</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5">Receipt No.</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5">Type</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5">Sub Type</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5">Receiver Name</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5">Issued By</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5">Amount</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5">Payment Mode</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5">Date</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5">Remark</TableHead>
                                    <TableHead className="font-bold text-gray-800 text-[10px] uppercase py-5 text-center px-4">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={11} className="py-24 text-center">
                                        <div className="flex flex-col items-center justify-center space-y-4">
                                            <p className="text-xl font-bold text-gray-400 italic">No Expenses Found</p>
                                            <p className="text-sm text-gray-400 font-medium italic">Start tracking your business expenses by adding your first expense record.</p>
                                            <Button
                                                onClick={() => setView('add')}
                                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-xl font-bold shadow-lg mt-4"
                                            >
                                                <Plus size={20} className="mr-2" />
                                                Add Your First Expense
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}
