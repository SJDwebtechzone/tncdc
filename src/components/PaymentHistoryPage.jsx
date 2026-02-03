import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Calendar, TrendingUp, CreditCard, RotateCw, Search, X, FileText, Filter, PieChart } from "lucide-react";

export default function PaymentHistoryPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                {/* Page Header is implicitly in the purple banner? No, separate header "Payment History" */}
                {/* Wait, the image shows a big purple banner that says "Payment History" and "Comprehensive overview..." */}
            </div>

            {/* Hero Section */}
            <div className="bg-[#7c3aed] bg-gradient-to-r from-[#5d5fef] to-[#8b5cf6] rounded-xl p-8 text-white shadow-lg flex justify-between items-center relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <span className="text-2xl">💸</span>
                            {/* Or use icon */}
                        </div>
                        <h1 className="text-3xl font-bold">Payment History</h1>
                    </div>
                    <p className="text-blue-100 opacity-90 max-w-xl">
                        Comprehensive overview of all payment transactions and revenue analytics
                    </p>
                </div>
                <div className="relative z-10">
                    <Button className="bg-[#10b981] hover:bg-[#059669] text-white gap-2 shadow-lg border-0">
                        <Download size={18} /> Export Data
                    </Button>
                </div>
                {/* Decorative circles/shapes could go here */}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "TODAY'S REVENUE", amount: "₹0", sub: "0 PAYMENTS", icon: Calendar, color: "text-[#10b981]", bg: "bg-[#10b981]" },
                    { label: "THIS WEEK", amount: "₹0", sub: "0 PAYMENTS", icon: Calendar, color: "text-[#3b82f6]", bg: "bg-[#3b82f6]" },
                    { label: "THIS MONTH", amount: "₹0", sub: "0 PAYMENTS", icon: Calendar, color: "text-[#f59e0b]", bg: "bg-[#f59e0b]" },
                    { label: "TOTAL REVENUE", amount: "₹0", sub: "0 PAYMENTS", icon: TrendingUp, color: "text-[#8b5cf6]", bg: "bg-[#8b5cf6]" },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-32 relative overflow-hidden group">
                        {/* Top color bar */}
                        <div className={`absolute top-0 left-0 w-full h-1 ${stat.bg}`}></div>

                        <div className="flex justify-between items-start">
                            <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center text-white shadow-md`}>
                                <stat.icon size={24} />
                            </div>
                            <div className="text-2xl font-bold text-gray-800">{stat.amount}</div>
                        </div>

                        <div className="flex justify-between items-center mt-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <span>{stat.label}</span>
                            <span>{stat.sub}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Payment Methods Summary */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[300px]">
                    <div className="flex items-center gap-2 mb-6 text-[#1e293b] font-bold text-lg">
                        <PieChart size={24} className="text-[#1e293b]" fill="#1e293b" />
                        Payment Methods Summary
                    </div>
                    <div className="flex flex-col items-center justify-center h-[200px] text-gray-400">
                        <div className="mb-4">
                            <PieChart size={64} className="text-gray-500" fill="#64748b" />
                        </div>
                        <p className="text-gray-500 font-medium">No payment data available</p>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-6 text-gray-800 font-bold border-b border-gray-100 pb-4">
                        <Filter size={18} />
                        Filters & Search
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 mb-1 block">From Date</label>
                                    <input type="date" className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-500" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 mb-1 block">To Date</label>
                                    <input type="date" className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-500" />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button className="flex-1 bg-[#1a237e] hover:bg-blue-900 text-white gap-2">
                                    <Search size={14} /> Apply Filters
                                </Button>
                                <Button variant="outline" className="flex-1 border-orange-200 text-orange-500 hover:bg-orange-50 gap-2">
                                    <X size={14} /> Clear
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Payment Method</label>
                                    <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-500 bg-white">
                                        <option>All Methods</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Search</label>
                                    <input type="text" placeholder="Student, Course, Transaction ID" className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm" />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <select className="h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-500 bg-white">
                                    <option>15 per page</option>
                                    <option>25 per page</option>
                                    <option>50 per page</option>
                                    <option>100 per page</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Monthly Trends & Transactions Split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Monthly Trends */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[400px]">
                    <div className="flex items-center gap-2 mb-6 text-gray-800 font-bold border-b border-gray-100 pb-4">
                        <TrendingUp size={18} />
                        Monthly Trends
                    </div>
                    <div className="flex flex-col items-center justify-center h-[300px] text-gray-400">
                        {/* Chart Placeholder */}
                        <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
                            <p className="text-xs text-gray-400">Chart Area</p>
                        </div>
                    </div>
                </div>

                {/* Payment Transactions Table */}
                <div className="lg:col-span-2 space-y-0">
                    <div className="bg-[#6b5b95] bg-gradient-to-r from-[#5d5fef] to-[#8b5cf6] text-white p-4 rounded-t-xl font-bold flex items-center gap-2">
                        <FileText size={18} />
                        Payment Transactions
                    </div>
                    <div className="bg-white border border-gray-100 rounded-b-xl overflow-hidden min-h-[350px]">
                        <Table>
                            <TableHeader className="bg-gray-50/50">
                                <TableRow>
                                    <TableHead className="text-gray-600 font-bold text-xs uppercase">Student & Course</TableHead>
                                    <TableHead className="text-gray-600 font-bold text-xs uppercase">Amount</TableHead>
                                    <TableHead className="text-gray-600 font-bold text-xs uppercase">Method</TableHead>
                                    <TableHead className="text-gray-600 font-bold text-xs uppercase">Transaction ID</TableHead>
                                    <TableHead className="text-gray-600 font-bold text-xs uppercase">Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {/* Empty State in Body */}
                            </TableBody>
                        </Table>
                        <div className="flex flex-col items-center justify-center py-16 text-center text-gray-400">
                            <FileText size={48} className="mb-4 text-gray-300" />
                            <h3 className="text-lg font-medium text-gray-500">No Payment Records Found</h3>
                            <p className="text-xs text-gray-400 mt-1 max-w-xs">No payments match your current filters. Try adjusting your search criteria.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
