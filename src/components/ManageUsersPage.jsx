import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, RotateCcw, UserCircle, Save, ArrowLeft } from "lucide-react";

export default function ManageUsersPage() {
    const [view, setView] = useState('list');
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0].name);
        }
    };

    if (view === 'add') {
        return (
            <div className="space-y-6">
                <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-8">
                    <div className="flex items-center justify-between mb-8 border-b pb-4">
                        <h2 className="text-xl font-medium text-gray-800 tracking-tight">Create New User</h2>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setView('list');
                                setSelectedFile(null);
                            }}
                            className="h-8 text-[11px] font-medium text-gray-600 border-gray-300 rounded-sm hover:bg-gray-50 flex items-center gap-1.5 px-3"
                        >
                            <ArrowLeft size={14} /> Back to Users
                        </Button>
                    </div>

                    <form className="space-y-6 max-w-5xl">
                        <div className="space-y-1.5 focus-within:text-blue-600 transition-colors">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Email</label>
                            <Input
                                placeholder="Enter email"
                                className="h-9 rounded-sm border-gray-200 bg-white focus:border-blue-500 focus:ring-0 text-sm transition-all"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Password</label>
                            <Input
                                type="password"
                                placeholder="Enter password"
                                className="h-9 rounded-sm border-gray-200 bg-white focus:border-blue-500 focus:ring-0 text-sm transition-all"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Confirm Password</label>
                            <Input
                                type="password"
                                placeholder="Confirm password"
                                className="h-9 rounded-sm border-gray-200 bg-white focus:border-blue-500 focus:ring-0 text-sm transition-all"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Profile Image</label>
                            <div className="flex items-center border border-gray-200 rounded-sm overflow-hidden h-9 bg-white">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="bg-gray-100 h-full px-4 text-[11px] font-bold border-r border-gray-200 text-gray-600 hover:bg-gray-200 transition-colors"
                                >
                                    Choose File
                                </button>
                                <span className="px-3 text-[11px] text-gray-400 truncate max-w-[200px]">
                                    {selectedFile || "No file chosen"}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Assign Roles</label>
                            <div className="p-4 border border-gray-200 rounded-sm bg-gray-50/10 min-h-[36px] text-[11px] text-gray-400 italic">
                                Select roles to assign...
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-4">
                            <Button
                                type="submit"
                                className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-5 h-9 rounded-sm text-[11px] font-bold flex items-center gap-2 shadow-sm border-none uppercase tracking-wide"
                            >
                                <Save size={14} />
                                Save User
                            </Button>
                            <Button
                                type="button"
                                onClick={() => setView('list')}
                                className="text-[#c2410c] border border-[#f97316]/30 hover:bg-[#fff7ed] px-5 h-9 rounded-sm text-[11px] font-bold bg-white transition-colors uppercase tracking-wide"
                            >
                                <span className="mr-2 text-sm">×</span> Cancel
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
                <h1 className="text-2xl font-bold text-gray-800 font-sans tracking-tight">Manage Users</h1>
                <Button
                    onClick={() => setView('add')}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all transform active:scale-95 shadow-lg"
                >
                    <Plus size={18} />
                    Add User
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-8 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={18} />
                        </div>
                        <Input
                            placeholder="Search users..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-200 rounded-xl placeholder:text-gray-400 text-sm"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Button className="w-full bg-white hover:bg-gray-50 text-[#1e3a8a] border border-[#1e3a8a] h-11 rounded-xl font-bold transition-colors">
                            Search
                        </Button>
                    </div>
                    <div className="md:col-span-2">
                        <Button variant="outline" className="w-full text-[#c2410c] border-orange-200 hover:bg-orange-50 bg-[#fff7ed] h-11 rounded-xl flex items-center gap-2 font-bold transition-colors">
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
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 tracking-wider">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider">Email</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider">Roles</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider">Profile Image</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 tracking-wider">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center tracking-wider">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={6} className="py-24 text-center">
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className="bg-gray-50 p-6 rounded-3xl">
                                            <UserCircle size={48} className="text-gray-300" />
                                        </div>
                                        <p className="font-bold text-lg text-red-500 uppercase tracking-widest text-sm">No Data Available</p>
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
