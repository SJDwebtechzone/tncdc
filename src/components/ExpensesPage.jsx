import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, RotateCcw, Download, Filter, TrendingUp, TrendingDown, DollarSign, X, ArrowLeft, Save } from "lucide-react";

export default function ExpensesPage() {
    const [view, setView] = useState('list'); // 'list' or 'add'

    if (view === 'add') {
        return (
            <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-[20px] font-bold text-gray-800 font-sans tracking-tight">Add Expense</h1>
                    <Button
                        onClick={() => setView('list')}
                        className="bg-[#b9875a] hover:bg-[#a6764a] text-white px-6 h-9 rounded-sm flex items-center gap-2 border-none transition-all shadow-md font-sans text-xs font-bold uppercase tracking-wider"
                    >
                        <ArrowLeft size={16} />
                        Back to List
                    </Button>
                </div>

                <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-10 font-sans">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
                            {/* Expense Type */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                    Expense Type <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white text-gray-500 transition-all cursor-pointer">
                                    <option>Select Expense Type</option>
                                </select>
                            </div>

                            {/* Expense Sub Type */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                    Expense Sub Type <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white text-gray-500 transition-all cursor-pointer">
                                    <option>Select Expense Type First</option>
                                </select>
                            </div>

                            {/* Receiver Name */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                    Receiver Name
                                </label>
                                <Input
                                    placeholder="Enter Receiver Name"
                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1e3a8a] transition-all"
                                />
                            </div>

                            {/* Issue Person Name */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                    Issue Person Name
                                </label>
                                <Input
                                    placeholder="Enter Issue Person Name"
                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1e3a8a] transition-all"
                                />
                            </div>

                            {/* Amount */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                    Amount <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    type="number"
                                    placeholder="Enter Amount"
                                    required
                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1e3a8a] transition-all"
                                />
                            </div>

                            {/* Payment Mode */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                    Expense Type <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white text-gray-500 transition-all cursor-pointer">
                                    <option>Select Payment Mode</option>
                                </select>
                            </div>

                            {/* Date */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                    Date
                                </label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="dd-mm-yyyy"
                                        className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1e3a8a] transition-all pr-10"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Remark */}
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">
                                Remark
                            </label>
                            <textarea
                                placeholder="Enter your remark"
                                className="w-full h-32 rounded-sm border border-gray-200 p-4 text-xs focus:ring-1 focus:ring-[#1e3a8a] outline-none resize-none bg-white transition-all shadow-sm"
                            />
                        </div>

                        {/* Footer Buttons */}
                        <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                            <Button
                                type="submit"
                                className="bg-[#1e3a8a] hover:bg-[#152e6e] text-white px-10 h-9 rounded-sm text-[11px] font-bold uppercase tracking-widest border-none transition-all shadow-md active:scale-95 flex items-center justify-center p-0"
                            >
                                Submit
                            </Button>
                            <Button
                                type="button"
                                onClick={() => setView('list')}
                                className="bg-[#b9875a] hover:bg-[#a6764a] text-white px-10 h-9 rounded-sm text-[11px] font-bold uppercase tracking-widest border-none transition-all shadow-md active:scale-95 flex items-center justify-center p-0"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800 font-sans tracking-tight">Financial Management</h1>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
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
                    <div className="font-sans">
                        <h2 className="text-xl font-bold text-gray-800 tracking-tight">Expense Records</h2>
                        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mt-1 opacity-70">Manage and track your business expenditures</p>
                    </div>
                    <div className="flex items-center gap-3 font-sans">
                        <Button
                            onClick={() => setView('add')}
                            className="bg-[#1e3a8a] hover:bg-[#1a365d] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none shadow-md transition-all active:scale-95 uppercase text-xs font-bold tracking-wider"
                        >
                            <Plus size={18} />
                            Add New Expense
                        </Button>
                        <Button className="bg-[#1e463a] hover:bg-[#153229] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none shadow-md transition-all active:scale-95 uppercase text-xs font-bold tracking-wider">
                            <Download size={18} />
                            Export
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-[#f8fafc] p-8 rounded-sm border border-gray-100 space-y-6 font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block ml-1">Search Keywords</label>
                            <Input placeholder="Receipt, name, remark..." className="h-10 bg-white border-gray-200 rounded-sm text-xs focus:ring-1 focus:ring-[#1e3a8a]" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block ml-1">Expense Type</label>
                            <select className="w-full h-10 rounded-sm border border-gray-200 px-4 text-xs focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white text-gray-600 transition-all cursor-pointer">
                                <option>All Types</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block ml-1">Sub Type</label>
                            <select className="w-full h-10 rounded-sm border border-gray-200 px-4 text-xs focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white text-gray-400 italic">
                                <option>All Sub Types</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block ml-1">Payment Mode</label>
                            <select className="w-full h-10 rounded-sm border border-gray-200 px-4 text-xs focus:ring-1 focus:ring-[#1e3a8a] outline-none bg-white text-gray-600 transition-all cursor-pointer">
                                <option>All Modes</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block ml-1">From Date</label>
                            <Input type="date" className="h-10 bg-white border-gray-200 rounded-sm text-xs focus:ring-1 focus:ring-[#1e3a8a]" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block ml-1">To Date</label>
                            <Input type="date" className="h-10 bg-white border-gray-200 rounded-sm text-xs focus:ring-1 focus:ring-[#1e3a8a]" />
                        </div>
                        <div className="md:col-span-1">
                            <Button className="w-full bg-[#1e3a8a] hover:bg-[#1a365d] text-white h-10 rounded-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 uppercase text-xs tracking-widest p-0">
                                <Filter size={16} />
                                Filter Records
                            </Button>
                        </div>
                        <div className="md:col-span-1">
                            <Button variant="outline" className="w-full border-orange-200 text-[#b9875a] hover:bg-orange-50 h-10 rounded-sm font-bold bg-orange-50/10 uppercase text-xs tracking-widest p-0 transition-all active:scale-95">
                                Reset Filters
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden font-sans">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-[#f8fafc] hover:bg-[#f8fafc] border-b border-gray-200">
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 px-6 tracking-wider border-r border-gray-100">#</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Receipt No.</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Expense Type</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100">Person Details</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-right">Amount</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-center">Mode</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 tracking-wider border-r border-gray-100 text-center">Date</TableHead>
                                    <TableHead className="font-bold text-gray-700 text-[11px] uppercase py-5 text-center tracking-wider">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={8} className="py-32 text-center">
                                        <div className="flex flex-col items-center justify-center space-y-6">
                                            <div className="bg-gray-50 p-6 rounded-3xl">
                                                <DollarSign size={48} className="text-gray-300" />
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">No Expenses Recorded</p>
                                                <p className="text-[11px] text-gray-300 font-medium italic">Start tracking your business expenditures today</p>
                                            </div>
                                            <Button
                                                onClick={() => setView('add')}
                                                className="bg-[#1e3a8a] hover:bg-[#1a365d] text-white px-10 h-10 rounded-sm font-bold shadow-lg mt-4 uppercase text-xs tracking-widest transition-all active:scale-95 p-0"
                                            >
                                                <Plus size={18} className="mr-2" />
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
