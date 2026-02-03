import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Search, RotateCcw } from "lucide-react";

export default function PopupsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-xl font-bold text-gray-800">Manage Popups/Banners</h1>

            {/* Header Actions */}
            <div className="flex justify-end">
                <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white gap-2">
                    <Plus size={16} /> Add Popup
                </Button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-4 relative">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                    <Input className="pl-9 h-10 w-full" placeholder="Search by title..." />
                </div>
                <div className="md:col-span-3">
                    <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-600 bg-white">
                        <option>All Status</option>
                    </select>
                </div>
                <div className="md:col-span-3">
                    <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm text-gray-600 bg-white">
                        <option>All Types</option>
                    </select>
                </div>
                <div className="md:col-span-1">
                    <Button variant="outline" className="w-full h-10 border-blue-900 text-blue-900 hover:bg-blue-50">
                        Search
                    </Button>
                </div>
                <div className="md:col-span-1">
                    <Button variant="outline" className="w-full h-10 border-orange-200 text-orange-500 hover:bg-orange-50">
                        Reset
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
                <Table>
                    <TableHeader className="bg-gray-50/50">
                        <TableRow>
                            <TableHead className="w-[50px] font-bold text-gray-800 text-xs uppercase">#</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Image</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Title</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Link</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Target Type</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase">Status</TableHead>
                            <TableHead className="font-bold text-gray-800 text-xs uppercase text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={7} className="text-center py-8 text-red-500 text-sm">
                                No Data Available
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
