import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, RotateCcw, ArrowLeft, ShieldCheck } from "lucide-react";

export default function ManageRolesPage() {
    const [view, setView] = useState('list');

    if (view === 'add') {
        return (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Add New Role</h1>
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
                        <div className="grid grid-cols-1 gap-6 max-w-xl">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Role Name <span className="text-red-500">*</span></label>
                                <Input placeholder="Enter Role Name (e.g. Sales Manager)" required className="h-11 rounded-xl" />
                            </div>
                            <div className="space-y-4 pt-4">
                                <label className="text-xs font-bold text-gray-600 uppercase">Role Permissions</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {['Dashboard', 'Students', 'Courses', 'Staff', 'Inventory', 'Finance', 'Settings'].map(permission => (
                                        <div key={permission} className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{permission}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-8 border-t border-gray-100">
                            <Button type="button" variant="outline" onClick={() => setView('list')} className="px-10 h-11 border-gray-200">
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 h-11">
                                <Plus size={18} className="mr-2" />
                                Create Role
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
                <h1 className="text-2xl font-bold text-gray-800">Manage Roles</h1>
                <Button
                    onClick={() => setView('add')}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all transform hover:scale-105"
                >
                    <Plus size={18} />
                    Add New Role
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-8 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={18} />
                        </div>
                        <Input
                            placeholder="Search roles..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-200 rounded-xl"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Button className="w-full bg-white hover:bg-gray-50 text-blue-900 border border-blue-900 h-11 rounded-xl font-bold">
                            Search
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
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Role Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={4} className="py-20 text-center">
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className="bg-gray-50 p-4 rounded-2xl">
                                            <ShieldCheck size={48} className="text-gray-300" />
                                        </div>
                                        <p className="font-bold text-lg text-red-500">No Data Available</p>
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
