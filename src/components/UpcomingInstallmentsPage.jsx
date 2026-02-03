import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Filter, RotateCw, Wallet, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function UpcomingInstallmentsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-xl font-medium text-gray-800">Upcoming Installments</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header Actions */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
                    {/* Summary Card style */}
                    <div className="flex items-center gap-4 bg-white border border-blue-100 p-3 rounded-xl shadow-sm min-w-[300px]">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                            <Wallet size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase font-semibold">Total Upcoming Amount</div>
                            <div className="text-lg font-bold text-gray-800">₹18000</div>
                        </div>
                    </div>

                    <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 h-9 text-sm">
                        <Download size={14} /> Export
                    </Button>
                </div>

                {/* Filters */}
                <div className="p-4 grid grid-cols-1 md:grid-cols-6 gap-3 bg-gray-50/30 border-b border-gray-100">
                    <div className="md:col-span-2 relative">
                        <div className="flex items-center bg-white border border-gray-200 rounded-lg h-9 px-3 text-sm text-gray-500">
                            <span className="mr-2">📅</span> 2026-02-03 - 2026-03-03
                        </div>
                    </div>
                    <select className="h-9 rounded-lg border border-gray-200 text-sm bg-white px-3 text-gray-600 focus:outline-none">
                        <option>All Batches</option>
                    </select>
                    <div className="relative">
                        <input className="w-full pl-8 h-9 rounded-lg border border-gray-200 text-sm focus:outline-none" placeholder="Search by Student" />
                        <span className="absolute left-2.5 top-2.5 text-gray-400">👤</span>
                    </div>
                    <div className="relative">
                        <input className="w-full pl-8 h-9 rounded-lg border border-gray-200 text-sm focus:outline-none" placeholder="Search by Roll No" />
                        <span className="absolute left-2.5 top-2.5 text-gray-400">🔢</span>
                    </div>
                    <div className="flex gap-2">
                        <Button className="flex-1 bg-[#dc2626] hover:bg-red-700 text-white h-9 text-xs gap-1">
                            <Filter size={12} /> Filter
                        </Button>
                        <Button variant="outline" className="flex-1 text-orange-400 border-orange-200 h-9 text-xs gap-1">
                            <RotateCw size={12} /> Reset
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-gray-100/50">
                            <TableRow>
                                <TableHead className="w-[50px] font-bold text-gray-700 text-xs uppercase">Installment No.</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Course Name</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Student Name</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Roll Number</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Amount</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Due Date</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Late Fee</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Frequency</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase">Send Reminder</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="bg-red-50/50 hover:bg-red-50 border-b border-red-100">
                                <TableCell className="text-blue-600 font-medium align-top">1</TableCell>
                                <TableCell className="text-gray-600 text-sm align-top">Computer Science</TableCell>
                                <TableCell className="text-gray-800 text-sm font-medium align-top">Sathish S/O Mani Kanna</TableCell>
                                <TableCell className="text-gray-500 text-sm align-top">RN000001</TableCell>
                                <TableCell className="align-top">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-gray-800">₹9000.00</span>
                                        <button className="bg-white border border-gray-300 text-gray-700 text-[10px] px-2 py-0.5 rounded-full w-fit hover:bg-gray-50">
                                            ₹ Pay Now
                                        </button>
                                    </div>
                                </TableCell>
                                <TableCell className="align-top">
                                    <div className="flex flex-col">
                                        <span className="text-gray-800 text-xs font-semibold">30 Jan 2026</span>
                                        <span className="text-red-500 text-[10px] flex items-center gap-1">
                                            ⚠️ 5 days overdue
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-gray-600 text-sm align-top">₹0</TableCell>
                                <TableCell className="align-top">
                                    <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-[10px]">Monthly</span>
                                </TableCell>
                                <TableCell className="align-top">
                                    <Button size="sm" className="bg-[#dc2626] hover:bg-red-700 text-white h-7 w-8 p-0 rounded-lg">
                                        <Bell size={14} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-gray-50 border-b border-gray-100">
                                <TableCell className="text-blue-600 font-medium align-top">2</TableCell>
                                <TableCell className="text-gray-600 text-sm align-top">Computer Science</TableCell>
                                <TableCell className="text-gray-800 text-sm font-medium align-top">Sathish S/O Mani Kanna</TableCell>
                                <TableCell className="text-gray-500 text-sm align-top">RN000001</TableCell>
                                <TableCell className="align-top">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-gray-800">₹9000.00</span>
                                        <button className="bg-[#d1d5db] text-white text-[10px] px-2 py-0.5 rounded-full w-fit">
                                            Upcoming
                                        </button>
                                    </div>
                                </TableCell>
                                <TableCell className="align-top">
                                    <div className="flex flex-col">
                                        <span className="text-gray-800 text-xs font-semibold">02 Mar 2026</span>
                                        <span className="text-blue-400 text-[10px]">
                                            26 days remaining
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-gray-600 text-sm align-top">₹0</TableCell>
                                <TableCell className="align-top">
                                    <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-[10px]">Monthly</span>
                                </TableCell>
                                <TableCell className="align-top">
                                    <Button size="sm" className="bg-[#dc2626] hover:bg-red-700 text-white h-7 w-8 p-0 rounded-lg">
                                        <Bell size={14} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
