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
        <div className="space-y-8 pb-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {stats.map((stat, i) => (
                    <Card key={i} className={`${stat.color} border-none shadow-md overflow-hidden relative h-28 transform hover:scale-105 transition-all cursor-default`}>
                        <CardContent className="p-4 flex flex-col justify-center items-center h-full text-white text-center">
                            <span className="text-2xl font-black mb-1">{stat.count}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">{stat.label}</span>
                        </CardContent>
                        <div className="absolute -right-4 -bottom-4 opacity-10">
                            <ClipboardList size={80} />
                        </div>
                    </Card>
                ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 bg-gray-50/20">
                    <h2 className="text-lg font-bold text-gray-800">Job Applications Management</h2>
                </div>

                <div className="p-6 space-y-6">
                    {/* Filters */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-48">
                            <select className="w-full h-11 bg-gray-50/50 border border-gray-100 rounded-xl px-4 text-xs font-medium text-gray-500 italic appearance-none cursor-pointer">
                                <option>All Status</option>
                            </select>
                        </div>
                        <div className="w-full lg:w-64 text-sans">
                            <select className="w-full h-11 bg-gray-50/50 border border-gray-100 rounded-xl px-4 text-xs font-medium text-gray-500 italic appearance-none cursor-pointer">
                                <option>All Jobs</option>
                            </select>
                        </div>
                        <div className="flex-1 relative">
                            <Input
                                placeholder="Search by name, email or mobile..."
                                className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm italic pl-4"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button className="bg-[#1e3a8a] hover:bg-blue-900 text-white h-11 px-8 rounded-xl font-bold flex items-center gap-2">
                                <Filter size={16} />
                                Filter
                            </Button>
                            <Button variant="outline" className="border-[#c08457]/30 text-[#c08457] hover:bg-orange-50/30 h-11 px-8 rounded-xl font-bold bg-[#c08457]/10 flex items-center gap-2">
                                <RotateCcw size={16} />
                                Reset
                            </Button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="border border-gray-50 rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-[#f8fafc] border-b border-gray-100">
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 w-16 text-center">#</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Applicant Name</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Email</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Mobile</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Job Title</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Experience</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Skills</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Message</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Status</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Applied On</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={11} className="py-24 text-center">
                                            <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                                <div className="bg-gray-50 p-6 rounded-2xl">
                                                    <ClipboardList size={48} className="text-gray-300" />
                                                </div>
                                                <p className="font-bold text-gray-400 italic">No job applications found</p>
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
    );
}
