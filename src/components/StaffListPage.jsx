import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, RotateCcw, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function StaffListPage() {
    const [view, setView] = useState('list');

    if (view === 'add') {
        return (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Add New Staff</h1>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Employee ID <span className="text-red-500">*</span></label>
                                <Input placeholder="Enter Employee ID" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Staff Name <span className="text-red-500">*</span></label>
                                <Input placeholder="Enter Staff Name" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Date of Joining <span className="text-red-500">*</span></label>
                                <Input type="date" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Mobile <span className="text-red-500">*</span></label>
                                <Input placeholder="Enter Mobile Number" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Department</label>
                                <select className="w-full h-10 rounded-md border border-gray-200 px-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>Select Department</option>
                                    <option>Teaching</option>
                                    <option>Administration</option>
                                    <option>Support</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Designation</label>
                                <select className="w-full h-10 rounded-md border border-gray-200 px-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>Select Designation</option>
                                    <option>Teacher</option>
                                    <option>Manager</option>
                                    <option>Accountant</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Salary Mode</label>
                                <select className="w-full h-10 rounded-md border border-gray-200 px-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>Select Mode</option>
                                    <option>Monthly</option>
                                    <option>Daily</option>
                                    <option>Hourly</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Status</label>
                                <select className="w-full h-10 rounded-md border border-gray-200 px-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-8 border-t border-gray-100">
                            <Button type="button" variant="outline" onClick={() => setView('list')} className="px-10 h-11 border-gray-200">
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 h-11">
                                <Plus size={18} className="mr-2" />
                                Save Staff
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
                <h1 className="text-2xl font-bold text-gray-800">Manage Staff</h1>
                <Button
                    onClick={() => setView('add')}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all transform hover:scale-105"
                >
                    <Plus size={18} />
                    Add Staff
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-5 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={18} />
                        </div>
                        <Input
                            placeholder="Search by name, employee ID, or mobile..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-200 rounded-xl"
                        />
                    </div>
                    <div className="md:col-span-3">
                        <select className="w-full h-11 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                            <option>All Status</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <Button className="w-full bg-white hover:bg-gray-50 text-blue-900 border border-blue-900 h-11 rounded-xl font-bold">
                            Submit
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
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Employee ID</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Staff Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Department</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Designation</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Mobile</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Salary Mode</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Date of Joining</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={10} className="py-20 text-center text-gray-400 font-medium">
                                    No staff members found
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
