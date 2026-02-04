import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function StudentWalletPage() {
    const navigate = useNavigate();
    const students = useSelector((state) => state.students.students || []);

    const totalBalance = students.reduce((sum, student) => sum + (Number(student.walletBalance) || 0), 0);

    return (
        <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="relative w-full">
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <Input
                                placeholder="Search by name, email, or mobile"
                                className="pl-4 h-11 bg-white border-gray-200 w-full"
                            />
                        </div>
                        <Button className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white px-8 h-11">
                            <Search size={18} className="mr-2" /> Search
                        </Button>
                    </div>
                </div>
            </div>

            {/* Total Balance Card */}
            <div className="bg-[#6b5b95] bg-gradient-to-r from-[#5d5fef] to-[#8b5cf6] rounded-xl p-8 text-center text-white shadow-lg relative overflow-hidden">
                <h2 className="text-xl font-medium opacity-90 mb-2">Total Wallet Balance</h2>
                <div className="text-5xl font-bold mb-2">₹{totalBalance.toFixed(2)}</div>
                <p className="text-sm opacity-80">Across all students</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-gray-800">Student Wallets</h2>
                    <div className="flex gap-2">
                        <Button
                            className="bg-[#52525b] hover:bg-gray-600 text-white text-xs"
                            onClick={() => navigate('/dashboard/fees/wallet/transactions')}
                        >
                            All Transactions
                        </Button>
                        <Button
                            className="bg-[#d97706] hover:bg-amber-600 text-white text-xs"
                            onClick={() => navigate('/dashboard/students/list')}
                        >
                            Back to Students
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50 hover:bg-gray-50 border-b border-gray-100">
                                <TableHead className="w-[50px] font-bold text-gray-800 text-xs uppercase">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Student Details</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Contact</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Location</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Wallet Balance</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-xs uppercase">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {students.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="h-32 text-center text-gray-500">
                                        No students found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                students.map((student, index) => (
                                    <TableRow key={student.id} className="border-b border-gray-50">
                                        <TableCell className="text-orange-400 font-medium">{index + 1}</TableCell>
                                        <TableCell>
                                            <div>
                                                <div className="font-medium text-gray-800">{student.name}</div>
                                                <div className="text-xs text-gray-500">ID: {student.id}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div>
                                                <div className="text-gray-800">{student.mobile}</div>
                                                <div className="text-xs text-gray-400">{student.email}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="text-gray-600 text-sm">{student.location || '-'}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div>
                                                <div className="font-bold text-green-600">{Number(student.walletBalance || 0).toFixed(2)}</div>
                                                <div className="text-xs text-gray-400">Current Balance</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs font-medium">Active</span>
                                        </TableCell>
                                        <TableCell>
                                            <Button className="bg-[#1a237e] hover:bg-blue-900 text-white h-8 text-xs">
                                                Manage Wallet
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="mt-4 text-xs text-gray-400">
                    Showing {students.length} student(s) <span className="float-right">Total Active Students: {students.length}</span>
                </div>
            </div>
        </div>
    )
}
