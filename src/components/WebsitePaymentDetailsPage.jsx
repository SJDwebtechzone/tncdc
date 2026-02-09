import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, CreditCard, X, Landmark, Smartphone, QrCode, Search, Edit2, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useSelector, useDispatch } from 'react-redux';
import { addPaymentDetail, editPaymentDetail, deletePaymentDetail } from '@/store/websiteSlice';

export default function WebsitePaymentDetailsPage() {
    const paymentDetails = useSelector((state) => state.website.paymentDetails || []);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTypes, setSelectedTypes] = useState([]);

    const [formData, setFormData] = useState({
        accountHolder: '',
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        branchName: '',
        upiId: '',
        qrCode: '',
        isActive: true
    });

    const fileInputRef = useRef(null);

    const paymentTypes = [
        {
            id: 'bank',
            title: 'Bank Account',
            description: 'Add bank account details for traditional transfers',
            icon: <Landmark className="w-5 h-5" />
        },
        {
            id: 'upi',
            title: 'UPI ID',
            description: 'Add UPI ID for instant digital payments',
            icon: <Smartphone className="w-5 h-5" />
        },
        {
            id: 'qr',
            title: 'QR Code',
            description: 'Upload QR code image for easy scanning',
            icon: <QrCode className="w-5 h-5" />
        }
    ];

    const toggleType = (id) => {
        setSelectedTypes(prev =>
            prev.includes(id)
                ? prev.filter(t => t !== id)
                : [...prev, id]
        );
    };

    const handleOpenModal = (detail = null) => {
        if (detail) {
            setEditingId(detail.id);
            setFormData({
                accountHolder: detail.accountHolder || '',
                bankName: detail.bankName || '',
                accountNumber: detail.accountNumber || '',
                ifscCode: detail.ifscCode || '',
                branchName: detail.branchName || '',
                upiId: detail.upiId || '',
                qrCode: detail.qrCode || '',
                isActive: detail.isActive !== false
            });
            setSelectedTypes(detail.paymentTypes || []);
        } else {
            setEditingId(null);
            setFormData({
                accountHolder: '',
                bankName: '',
                accountNumber: '',
                ifscCode: '',
                branchName: '',
                upiId: '',
                qrCode: '',
                isActive: true
            });
            setSelectedTypes([]);
        }
        setIsModalOpen(true);
    };

    const handleSave = (e) => {
        e.preventDefault();
        const dataToSave = { ...formData, paymentTypes: selectedTypes };

        if (editingId) {
            dispatch(editPaymentDetail({ ...dataToSave, id: editingId }));
        } else {
            dispatch(addPaymentDetail(dataToSave));
        }

        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm("Remove these payment details?")) {
            dispatch(deletePaymentDetail(id));
        }
    };

    const triggerFileSelect = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const filteredDetails = paymentDetails.filter(detail =>
        detail.accountHolder?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        detail.bankName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        detail.upiId?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6 font-sans relative pb-10 pt-4">

            <div className="px-6 space-y-4">
                <div className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden min-h-[500px]">
                    {/* Management Header */}
                    <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/10">
                        <h2 className="text-[14px] font-bold text-gray-800 uppercase tracking-widest">
                            Manage Payment Details
                        </h2>
                        <Button
                            onClick={() => handleOpenModal()}
                            className="bg-[#154c4c] hover:bg-[#0f3838] text-white gap-2 rounded-sm px-6 h-10 text-[11px] font-bold transition-all border-none uppercase tracking-wider"
                        >
                            + Add New Payment Detail
                        </Button>
                    </div>

                    <div className="p-6">
                        <div className="overflow-x-auto rounded-sm border border-gray-200">
                            <Table className="border-collapse w-full">
                                <TableHeader>
                                    <TableRow className="bg-[#f1f5f9] hover:bg-[#f1f5f9] border-b border-gray-200">
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-center w-12">#</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Account Holder</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Bank Name</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Account Number</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">IFSC Code</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">UPI ID</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-center">QR Code</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-center">Status</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Created At</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 text-center">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredDetails.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={10} className="py-20 text-center border-b border-gray-100 italic text-gray-400">
                                                <div className="flex flex-col items-center gap-2">
                                                    <CreditCard size={40} className="text-gray-200" />
                                                    <span className="text-sm font-medium">No payment details found</span>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        filteredDetails.map((row, index) => (
                                            <TableRow key={row.id} className="hover:bg-gray-50/50 text-[12px]">
                                                <TableCell className="py-4 px-6 font-medium text-gray-500 border-r border-gray-200 text-center">{index + 1}</TableCell>
                                                <TableCell className="py-4 px-6 font-bold text-gray-700 border-r border-gray-200">{row.accountHolder || '-'}</TableCell>
                                                <TableCell className="py-4 px-6 text-gray-600 border-r border-gray-200">{row.bankName || '-'}</TableCell>
                                                <TableCell className="py-4 px-6 font-mono text-gray-600 border-r border-gray-200">{row.accountNumber || '-'}</TableCell>
                                                <TableCell className="py-4 px-6 font-mono text-gray-600 border-r border-gray-200">{row.ifscCode || '-'}</TableCell>
                                                <TableCell className="py-4 px-6 text-blue-600 font-medium border-r border-gray-200">{row.upiId || '-'}</TableCell>
                                                <TableCell className="py-4 px-6 border-r border-gray-200 text-center">
                                                    <div className="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex items-center justify-center mx-auto">
                                                        <QrCode size={16} className="text-gray-400" />
                                                    </div>
                                                </TableCell>
                                                <TableCell className="py-4 px-6 border-r border-gray-200 text-center">
                                                    <span className={cn(
                                                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                                                        row.isActive !== false ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                                    )}>
                                                        {row.isActive !== false ? 'Active' : 'Inactive'}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="py-4 px-6 text-gray-500 border-r border-gray-200 uppercase">{row.createdAt}</TableCell>
                                                <TableCell className="py-4 px-6">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button
                                                            onClick={() => handleOpenModal(row)}
                                                            className="h-8 w-8 bg-[#3b82f6] text-white rounded-sm flex items-center justify-center hover:bg-blue-600 transition-colors shadow-sm"
                                                        >
                                                            <Edit2 size={14} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(row.id)}
                                                            className="h-8 w-8 bg-[#ef4444] text-white rounded-sm flex items-center justify-center hover:bg-red-600 transition-colors shadow-sm"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-sans">
                    <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
                        <div className="flex items-center justify-between p-4 border-b border-gray-100 flex-shrink-0">
                            <h2 className="text-[15px] font-bold text-gray-800 uppercase tracking-wider">
                                {editingId ? 'Edit Payment Detail' : 'Add New Payment Detail'}
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="overflow-y-auto p-8 pt-6 space-y-8">
                            <div className="space-y-4">
                                <label className="text-[13px] font-bold text-gray-800 tracking-tight block">
                                    Select Payment Types <span className="text-red-500">*</span>
                                </label>

                                <div className="space-y-3">
                                    {paymentTypes.map((type) => (
                                        <div
                                            key={type.id}
                                            onClick={() => toggleType(type.id)}
                                            className={cn(
                                                "flex items-center gap-4 p-4 border rounded-sm cursor-pointer transition-all hover:bg-gray-50/50 relative",
                                                selectedTypes.includes(type.id)
                                                    ? "border-blue-500 bg-blue-50/30"
                                                    : "border-gray-200"
                                            )}
                                        >
                                            <div className="flex-shrink-0 relative">
                                                <Checkbox
                                                    checked={selectedTypes.includes(type.id)}
                                                    onCheckedChange={() => toggleType(type.id)}
                                                    className="rounded-sm w-4 h-4 border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                                />
                                            </div>
                                            <div className="text-blue-600">
                                                {type.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-[12px] font-bold text-gray-800 leading-tight block">{type.title}</h3>
                                                <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">{type.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-gray-400 italic px-1 font-bold">
                                    Select one or more payment types. Click on the cards to select/deselect.
                                </p>
                            </div>

                            {/* Dynamic Sections */}
                            <div className="space-y-10">
                                {selectedTypes.includes('bank') && (
                                    <div className="bg-white border rounded-sm p-6 space-y-6">
                                        <h3 className="text-[12px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                                            <Landmark size={14} /> Bank Account Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-1">
                                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Account Holder Name <span className="text-red-500">*</span></label>
                                                <Input
                                                    required
                                                    value={formData.accountHolder}
                                                    onChange={e => setFormData({ ...formData, accountHolder: e.target.value })}
                                                    placeholder="Enter the account holder's full name"
                                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                                />
                                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">Enter the account holder's full name</p>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Bank Name <span className="text-red-500">*</span></label>
                                                <Input
                                                    required
                                                    value={formData.bankName}
                                                    onChange={e => setFormData({ ...formData, bankName: e.target.value })}
                                                    placeholder="Enter the bank name"
                                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                                />
                                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">Enter the bank name</p>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Account Number <span className="text-red-500">*</span></label>
                                                <Input
                                                    required
                                                    value={formData.accountNumber}
                                                    onChange={e => setFormData({ ...formData, accountNumber: e.target.value })}
                                                    placeholder="Enter the bank account number"
                                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                                />
                                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">Enter the bank account number</p>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">IFSC Code <span className="text-red-500">*</span></label>
                                                <Input
                                                    required
                                                    value={formData.ifscCode}
                                                    onChange={e => setFormData({ ...formData, ifscCode: e.target.value })}
                                                    placeholder="Enter the IFSC code"
                                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                                />
                                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">Enter the IFSC code</p>
                                            </div>
                                            <div className="space-y-1 md:col-span-2">
                                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Branch Name <span className="text-red-500">*</span></label>
                                                <Input
                                                    required
                                                    value={formData.branchName || ''}
                                                    onChange={e => setFormData({ ...formData, branchName: e.target.value })}
                                                    placeholder="Enter the branch name"
                                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                                />
                                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">Enter the branch name</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {selectedTypes.includes('upi') && (
                                    <div className="bg-white border rounded-sm p-6 space-y-6">
                                        <h3 className="text-[12px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                                            <Smartphone size={14} /> UPI Details
                                        </h3>
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">UPI ID <span className="text-red-500">*</span></label>
                                            <Input
                                                required
                                                value={formData.upiId}
                                                onChange={e => setFormData({ ...formData, upiId: e.target.value })}
                                                placeholder="example@upi"
                                                className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                            />
                                            <p className="text-[9px] text-gray-400 italic px-1 font-bold">Enter your UPI ID (e.g., yourname@paytm, yourname@googlepay)</p>
                                        </div>
                                    </div>
                                )}

                                {selectedTypes.includes('qr') && (
                                    <div className="bg-white border rounded-sm p-6 space-y-6">
                                        <h3 className="text-[12px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                                            <QrCode size={14} /> QR Code Upload
                                        </h3>
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">QR Code Image <span className="text-red-500">*</span></label>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                                    <input type="file" ref={fileInputRef} className="hidden" onChange={() => { }} />
                                                    <button
                                                        type="button"
                                                        onClick={triggerFileSelect}
                                                        className="px-3 h-full bg-gray-100 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-200 transition-colors"
                                                    >
                                                        Choose File
                                                    </button>
                                                    <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                                </div>
                                                <p className="text-[9px] text-gray-400 italic px-1 font-bold leading-tight">
                                                    Upload PNG or JPEG image. Max 2MB. Recommended size: 300x300 pixels.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-3 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-3 px-1">
                                    <Checkbox
                                        id="active-status"
                                        checked={formData.isActive}
                                        onCheckedChange={(val) => setFormData({ ...formData, isActive: val })}
                                        className="rounded-sm w-4 h-4 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                    />
                                    <label
                                        htmlFor="active-status"
                                        className="text-[13px] font-bold text-gray-800 cursor-pointer"
                                    >
                                        Make this payment detail active
                                    </label>
                                </div>
                                <p className="text-[11px] text-gray-400 ml-8 font-bold leading-tight">
                                    Active payment details will be shown to customers.
                                </p>
                            </div>

                            <div className="flex justify-center gap-4 pt-6 mt-4 flex-shrink-0">
                                <Button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-[#b9875a] hover:bg-[#a6764a] text-white h-10 text-[11px] font-bold px-12 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-[#154c4c] hover:bg-[#0f3838] text-white h-10 text-[11px] font-bold px-12 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider flex items-center gap-2"
                                >
                                    {editingId ? 'Update Payment Detail' : 'Add Payment Detail'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}






