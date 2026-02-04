import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, CreditCard } from "lucide-react";

export default function WebsitePaymentDetailsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-xl font-bold text-gray-800">Manage Payment Details</h1>
                <Button className="bg-[#0f4c3a] hover:bg-[#0d3f30] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all shadow-md">
                    <Plus size={18} />
                    Add New Payment Detail
                </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[300px]">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#f8fafc] border-b border-gray-100">
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 w-16 text-center">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Account Holder</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Bank Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Account Number</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">IFSC Code</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">UPI ID</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center">QR Code</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={10} className="py-24 text-center">
                                    <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                        <div className="bg-gray-50 p-6 rounded-2xl">
                                            <CreditCard size={48} className="text-gray-300" />
                                        </div>
                                        <p className="font-bold text-gray-400 italic">No payment details found</p>
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
