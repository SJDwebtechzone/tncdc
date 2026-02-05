import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus, Search, Download, X } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { useSelector, useDispatch } from 'react-redux';
import { addBatch } from '@/store/batchSlice';

export default function ManageBatchesPage() {
    const batches = useSelector((state) => state.batches.batches || []);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        fromTime: '',
        toTime: '',
        totalStudents: ''
    });

    const filteredData = batches.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const formatTime = (time) => {
        if (!time) return '';
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minutes} ${ampm}`;
    };

    const handleSave = (e) => {
        e.preventDefault();
        const timing = `${formatTime(formData.fromTime)} - ${formatTime(formData.toTime)}`;
        const newBatch = {
            ...formData,
            id: Date.now(),
            timing,
            totalAmount: '18,000.00',
            paidAmount: '0.00',
            remainingAmount: '18,000.00',
            createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
        };
        dispatch(addBatch(newBatch));
        setIsModalOpen(false);
        setFormData({ name: '', fromTime: '', toTime: '', totalStudents: '' });
    };

    return (
        <div className="space-y-6 relative animate-in fade-in duration-500">
            <h1 className="text-xl font-bold text-gray-800 tracking-tight ml-1">Manage Batches</h1>

            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden min-h-[500px]">
                {/* Filters/Header Row */}
                <div className="p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-1 items-center gap-4">
                        <div className="relative max-w-xs flex-1">
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                            <input
                                placeholder="Search..."
                                className="pl-9 h-10 w-full rounded-sm border border-gray-200 text-sm bg-gray-50/50 outline-none focus:ring-1 focus:ring-blue-900 transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" className="h-10 px-8 border-[#1e3a8a] text-[#1e3a8a] rounded-sm font-medium hover:bg-blue-50 transition-all">
                            Search
                        </Button>
                        <Button variant="outline" className="h-10 px-8 border-[#b9875a] text-[#b9875a] rounded-sm font-medium hover:bg-orange-50 transition-all" onClick={() => setSearchQuery("")}>
                            Reset
                        </Button>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button className="bg-[#1e463a] hover:bg-[#153229] text-white gap-2 h-10 px-4 rounded-sm transition-all shadow-md font-bold text-[11px] uppercase tracking-widest">
                            <Download size={14} /> Export
                        </Button>
                        <Button onClick={() => setIsModalOpen(true)} className="bg-[#1e3a8a] hover:bg-blue-900 text-white gap-2 h-10 px-4 rounded-sm transition-all shadow-md font-bold text-[11px] uppercase tracking-widest">
                            <Plus size={14} /> Add New Batch
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-gray-50/50 border-b border-gray-100">
                            <TableRow>
                                <TableHead className="w-[60px] font-bold text-gray-800 text-[10px] uppercase tracking-wider text-center border-r border-gray-50">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-50">Batch Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-50">Timing</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-50 text-center">Total Students</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-50">Total Amount</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-50">Paid Amount</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-50">Remaining Amount</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-50">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider text-center w-[80px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={9} className="h-40 text-center text-gray-400 italic text-sm">
                                        No batches registered yet.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredData.map((row, index) => (
                                    <TableRow key={row.id} className="hover:bg-gray-50/50 border-b border-gray-50">
                                        <TableCell className="text-center font-bold text-gray-500 py-4 border-r border-gray-50">{index + 1}</TableCell>
                                        <TableCell className="font-bold text-[#1e3a8a] border-r border-gray-50">{row.name}</TableCell>
                                        <TableCell className="border-r border-gray-50">
                                            <span className="bg-[#52525b] text-white px-3 py-1 rounded-sm text-[10px] font-bold tracking-tight">
                                                {row.timing}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-center border-r border-gray-50">
                                            <span className="bg-[#1e3a8a] text-white px-3 py-1 rounded-sm text-[10px] font-bold">
                                                {row.totalStudents}
                                            </span>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-50">
                                            <span className="bg-gray-700 text-white px-3 py-1 rounded-sm text-[10px] font-bold whitespace-nowrap">
                                                ₹{row.totalAmount}
                                            </span>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-50">
                                            <span className="bg-emerald-800 text-white px-3 py-1 rounded-sm text-[10px] font-bold whitespace-nowrap">
                                                ₹{row.paidAmount}
                                            </span>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-50">
                                            <span className="bg-rose-700 text-white px-3 py-1 rounded-sm text-[10px] font-bold whitespace-nowrap">
                                                ₹{row.remainingAmount}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-xs font-medium text-gray-600 border-r border-gray-50">{row.createdAt}</TableCell>
                                        <TableCell className="text-center">
                                            <Button size="icon" variant="ghost" className="h-8 w-8 text-[#1e3a8a] bg-blue-50 hover:bg-blue-100 rounded-sm">
                                                <Pencil size={14} />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Add Batch Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                    <div className="bg-white w-full max-w-xl rounded-sm shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-tight text-[15px]">Add New Batch</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 rounded-full p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-8 space-y-6">
                            {/* Batch Name */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Batch Name</label>
                                <Input
                                    required
                                    className="h-10 rounded-sm border-gray-200 text-xs font-medium focus:ring-1 focus:ring-blue-900 transition-all"
                                    placeholder="Batch Name"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            {/* Timing Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">From Time</label>
                                    <Input
                                        required
                                        type="time"
                                        className="h-10 rounded-sm border-gray-200 text-xs font-medium focus:ring-1 focus:ring-blue-900 transition-all"
                                        value={formData.fromTime}
                                        onChange={e => setFormData({ ...formData, fromTime: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">To Time</label>
                                    <Input
                                        required
                                        type="time"
                                        className="h-10 rounded-sm border-gray-200 text-xs font-medium focus:ring-1 focus:ring-blue-900 transition-all"
                                        value={formData.toTime}
                                        onChange={e => setFormData({ ...formData, toTime: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Total Students */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Total Students</label>
                                <Input
                                    required
                                    placeholder="Total Students"
                                    className="h-10 rounded-sm border-gray-200 text-xs font-medium focus:ring-1 focus:ring-blue-900 transition-all"
                                    value={formData.totalStudents}
                                    onChange={e => setFormData({ ...formData, totalStudents: e.target.value })}
                                />
                            </div>

                            {/* Footer Buttons */}
                            <div className="flex justify-end gap-3 pt-6 border-t font-bold">
                                <Button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-[#b9875a] hover:bg-[#a6764a] text-white px-8 rounded-sm h-10 uppercase tracking-widest text-[11px] transition-all active:scale-95 shadow-md font-bold"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-[#1e463a] hover:bg-[#153229] text-white px-8 rounded-sm h-10 uppercase tracking-widest text-[11px] transition-all active:scale-95 shadow-md font-bold"
                                >
                                    Add Batch
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
