import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Search, RotateCcw, Filter, FolderOpen, PhoneOff } from "lucide-react";

export default function EnquiriesFollowUpsPage() {
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: "Overdue Follow-ups", count: 0, bg: "bg-[#dc2626]" }, // Red
                    { label: "Due Today", count: 0, bg: "bg-[#eab308]" }, // Yellow
                    { label: "Upcoming This Week", count: 0, bg: "bg-[#7c3aed]" }, // Purple
                    { label: "Completed Today", count: 0, bg: "bg-[#16a34a]" }, // Green
                ].map((stat, idx) => (
                    <div key={idx} className={`${stat.bg} text-white p-4 rounded-lg flex flex-col items-center justify-center h-24 shadow-md`}>
                        <div className="text-3xl font-bold">{stat.count}</div>
                        <div className="text-sm font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Quick Add Follow-up */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-gray-800 rounded-full p-0.5">
                        <Plus size={12} className="text-white" />
                    </div>
                    <h2 className="text-sm font-bold text-gray-700">Quick Add Follow-up</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-3">
                        <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                            <option>Select Student</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <div className="relative">
                            <input type="text" className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500" value="03 02 2026 13:21" readOnly />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                            <option>Interested</option>
                        </select>
                    </div>
                    <div className="md:col-span-3">
                        <Input className="h-10 w-full text-xs" placeholder="Remarks" />
                    </div>
                    <div className="md:col-span-2">
                        <input type="date" className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-400" placeholder="dd-mm-yyyy" />
                    </div>
                </div>
                <div className="mt-4">
                    <Button className="bg-[#065f46] hover:bg-[#065f46]/90 text-white gap-2 text-xs">
                        <Plus size={14} /> Add Follow-up
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-2">
                    <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                        <option>All Follow ups</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                        <option>All Status</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-500 bg-white">
                        <option>All Employees</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <input type="date" className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-400" />
                </div>
                <div className="md:col-span-2">
                    <input type="date" className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-400" />
                </div>
                <div className="md:col-span-2">
                    <Button className="w-full bg-[#1e3a8a] text-white h-10 text-xs">
                        Filter
                    </Button>
                </div>
            </div>

            {/* Header & Export */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-gray-600 flex items-center gap-2">
                        <span className="text-gray-600">⋮≡</span> Follow-ups
                    </h2>
                    <span className="bg-[#1e3a8a] text-white text-xs px-2 py-0.5 rounded font-medium">0</span>
                </div>
                <Button className="bg-[#065f46] hover:bg-[#065f46]/90 text-white gap-2 text-xs">
                    <div className="rotate-180"><StartIcon /></div> Export
                </Button>
            </div>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-20 text-center text-gray-400">
                <div className="relative">
                    <PhoneOff size={48} className="mb-4 text-gray-400 opacity-50" />
                </div>
                <h3 className="text-lg font-medium text-gray-500 mb-1">No follow-ups found</h3>
                <p className="text-xs text-gray-400">Try adjusting your filters or add a new follow-up.</p>
            </div>
        </div>
    )
}

function StartIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
    )
}
