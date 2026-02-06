import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Search, RotateCcw, Filter, ClipboardList } from "lucide-react";

export default function WebsiteJobApplicationsPage() {
    const stats = [
        { label: "Total Applications", count: 0, color: "bg-[#6366f1]" },
        { label: "Pending", count: 0, color: "bg-[#8b5cf6]" },
        { label: "Shortlisted", count: 0, color: "bg-[#5b4fcbe6]" },
        { label: "Interviewed", count: 0, color: "bg-[#4f46e5]" },
        { label: "Selected", count: 0, color: "bg-[#4338ca]" },
        { label: "Rejected", count: 0, color: "bg-[#3730a3]" },
    ];

    return (
        <div className="space-y-6 font-sans relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6 px-6">
                <h2 className="text-xl font-medium text-gray-800 tracking-tight">Job Applications Management</h2>
            </div>

            <div className="p-6 space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {stats.map((stat, i) => (
                        <div key={i} className={`${stat.color} rounded-sm shadow-sm overflow-hidden relative h-24 transform hover:translate-y-[-2px] transition-all cursor-default group`}>
                            <div className="p-4 flex flex-col justify-center items-center h-full text-white text-center relative z-10">
                                <span className="text-2xl font-black mb-1 leading-none">{stat.count}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">{stat.label}</span>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10 text-white group-hover:scale-110 transition-transform duration-500">
                                <ClipboardList size={70} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-sm border border-gray-100 overflow-hidden shadow-sm">
                    <div className="p-5 border-b border-gray-100 bg-gray-50/10">
                        <h2 className="text-[14px] font-bold text-gray-800 flex items-center gap-2 uppercase tracking-wider">
                            <Filter size={18} className="text-blue-600" />
                            Search & Filters
                        </h2>
                    </div>

                    <div className="p-8 space-y-8">
                        {/* Filters */}
                        <div className="flex flex-col lg:flex-row gap-4 items-end">
                            <div className="w-full lg:w-48 space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Status</label>
                                <select className="w-full h-10 bg-white border border-gray-200 rounded-sm px-4 text-sm font-medium text-gray-700 appearance-none cursor-pointer focus:ring-1 focus:ring-[#1e463a] outline-none">
                                    <option>All Status</option>
                                </select>
                            </div>
                            <div className="w-full lg:w-64 space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Job Title</label>
                                <select className="w-full h-10 bg-white border border-gray-200 rounded-sm px-4 text-sm font-medium text-gray-700 appearance-none cursor-pointer focus:ring-1 focus:ring-[#1e463a] outline-none">
                                    <option>All Jobs</option>
                                </select>
                            </div>
                            <div className="flex-1 space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Search Keywords</label>
                                <div className="relative italic">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Search size={16} />
                                    </div>
                                    <Input
                                        placeholder="Name, email or mobile..."
                                        className="h-10 border-gray-200 rounded-sm text-sm pl-10 focus:ring-1 focus:ring-[#1e463a]"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Button className="bg-[#1e3a8a] text-white h-10 px-8 rounded-sm font-bold flex items-center gap-2 border-none uppercase tracking-wider text-xs shadow-md transition-all active:scale-95">
                                    <Filter size={14} />
                                    Filter
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-[#c08457]/30 text-[#c08457] hover:bg-orange-50/30 h-10 px-8 rounded-sm font-bold bg-[#c08457]/10 flex items-center gap-2 uppercase tracking-wider text-xs"
                                >
                                    <RotateCcw size={14} />
                                    Reset
                                </Button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="bg-white rounded-sm border border-gray-100 overflow-hidden min-h-[400px]">
                            <div className="overflow-x-auto">
                                <Table className="border-collapse">
                                    <TableHeader>
                                        <TableRow className="bg-[#f8fafc] hover:bg-[#f8fafc] border-b border-gray-100">
                                            <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-4 px-6 w-16 text-center border-r border-gray-100">#</TableHead>
                                            <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-4 border-r border-gray-100 px-6">Applicant</TableHead>
                                            <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-4 border-r border-gray-100 px-6">Contact Info</TableHead>
                                            <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-4 border-r border-gray-100 px-6">Job Details</TableHead>
                                            <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-4 border-r border-gray-100 px-6">Experience/Skills</TableHead>
                                            <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-4 border-r border-gray-100 px-6">Status</TableHead>
                                            <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-4 text-center px-6">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell colSpan={7} className="py-32 text-center border-b border-gray-100">
                                                <div className="flex flex-col items-center justify-center gap-4 text-gray-300">
                                                    <div className="bg-gray-50 p-8 rounded-full border border-gray-100/50">
                                                        <ClipboardList size={48} className="text-gray-200" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-red-500 italic text-base">No job applications found</p>
                                                        <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Adjust your filters and try again</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
