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
        timing: '',
        totalStudents: 20
    });

    const filteredData = batches.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSave = (e) => {
        e.preventDefault();
        const newBatch = {
            ...formData,
            id: Date.now(),
            totalAdmissions: 0,
            remainingAdmissions: formData.totalStudents,
            totalAmount: '0.00',
            paidAmount: '0.00',
            remainingAmount: '0.00',
            createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
        };
        dispatch(addBatch(newBatch));
        setIsModalOpen(false);
        setFormData({ name: '', timing: '', totalStudents: 20 });
    };

    return (
        <div className="space-y-6 relative">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-100/50">
                    <h1 className="text-xl font-medium text-gray-800">Manage Batches</h1>
                    <div className="flex gap-2">
                        <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Download size={14} /> Export
                        </Button>
                        <Button onClick={() => setIsModalOpen(true)} className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Plus size={14} /> Add New Batch
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-6 bg-gray-50/50 border-b border-gray-100 flex flex-col md:flex-row gap-4 items-center">
                    <div className="bg-white border border-gray-200 rounded-lg flex items-center px-3 h-10 w-full md:w-80">
                        <Search className="text-gray-400 mr-2" size={18} />
                        <input
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none text-sm w-full text-gray-600 placeholder:text-gray-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 h-10 px-8">
                        Search
                    </Button>
                    <Button variant="outline" className="border-orange-300 text-orange-400 hover:bg-orange-50 h-10 px-8" onClick={() => setSearchQuery("")}>
                        Reset
                    </Button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-[#f1f5f9] border-b border-gray-200">
                            <TableRow>
                                <TableHead className="w-[50px] font-bold text-gray-700 pl-4 text-xs uppercase tracking-wider border-r border-gray-200">#</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Batch Name</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Timing</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Total Students</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Total Admissions</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Remaining Admissions</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Total Amount</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Paid Amount</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Remaining Amount</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Created At</TableHead>
                                <TableHead className="text-center font-bold text-gray-700 pr-4 text-xs uppercase tracking-wider whitespace-nowrap">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={11} className="h-32 text-center text-gray-500">
                                        No batches found. Add a new batch.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredData.map((row, index) => (
                                    <TableRow key={row.id} className="hover:bg-gray-50/50 border-b border-gray-200">
                                        <TableCell className="font-medium text-blue-600 py-3 pl-4 border-r border-gray-200">{index + 1}</TableCell>
                                        <TableCell className="font-medium text-blue-600 text-sm border-r border-gray-200">{row.name}</TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <span className="bg-[#52525b] text-white px-2 py-1 rounded text-xs whitespace-nowrap">{row.timing}</span>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <span className="bg-[#1a237e] text-white px-2 py-1 rounded text-xs font-bold">{row.totalStudents}</span>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <span className="bg-[#15803d] text-white px-2 py-1 rounded text-xs font-bold">{row.totalAdmissions}</span>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <span className="bg-[#fbbf24] text-white px-2 py-1 rounded text-xs font-bold">{row.remainingAdmissions}</span>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <span className="bg-[#52525b] text-white px-2 py-1 rounded text-xs font-bold">₹{row.totalAmount}</span>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <span className="bg-[#15803d] text-white px-2 py-1 rounded text-xs font-bold">₹{row.paidAmount}</span>
                                        </TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <span className="bg-[#dc2626] text-white px-2 py-1 rounded text-xs font-bold">₹{row.remainingAmount}</span>
                                        </TableCell>
                                        <TableCell className="text-xs text-gray-500 border-r border-gray-100 whitespace-nowrap">{row.createdAt}</TableCell>
                                        <TableCell className="text-center pr-4">
                                            <Button size="icon" variant="ghost" className="h-8 w-8 text-[#1a237e] hover:text-[#1a237e] hover:bg-blue-50 border border-blue-100 rounded-lg">
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-sm rounded-xl shadow-2xl p-6 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-800 mb-6">Add New Batch</h2>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="text-sm font-bold text-gray-700">Batch Name</label>
                                <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Morning Batch" />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700">Timing</label>
                                <Input required value={formData.timing} onChange={e => setFormData({ ...formData, timing: e.target.value })} placeholder="e.g. 09:00 AM - 11:00 AM" />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700">Capacity (Students)</label>
                                <Input required type="number" value={formData.totalStudents} onChange={e => setFormData({ ...formData, totalStudents: e.target.value })} />
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-[#1a237e] text-white">Save Batch</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
