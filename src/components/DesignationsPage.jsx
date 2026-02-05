import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus, X } from "lucide-react"
import { useState } from "react"

// Data matched to the screenshot (UPPERCASE names)
const initialDesignations = [
    { id: 1, name: "DIRECTOR", status: true, created: "2024-03-20" },
    { id: 2, name: "EMPLOYEE", status: true, created: "2024-03-20" },
    { id: 3, name: "FOUNDER", status: true, created: "2024-03-20" },
    { id: 4, name: "OTHER", status: true, created: "2024-03-20" },
    { id: 5, name: "PARTNER", status: true, created: "2024-03-20" },
    { id: 6, name: "PROPERITER", status: true, created: "2024-03-20" },
    { id: 7, name: "SECRETARY", status: true, created: "2024-03-20" },
    { id: 8, name: "TRUSTEE", status: true, created: "2024-03-20" },
]

const CustomBlueSwitch = ({ checked, onCheckedChange }) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`
            relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border transition-colors focus-visible:outline-none 
            ${checked ? 'bg-[#1a237e] border-[#1a237e]' : 'bg-gray-200 border-transparent'}
        `}
    >
        <span
            className={`
                pointer-events-none block h-3.5 w-3.5 rounded-full bg-white shadow-lg ring-0 transition-transform 
                ${checked ? 'translate-x-4.5' : 'translate-x-0.5'}
            `}
        />
    </button>
)

export default function DesignationsPage() {
    const [data, setData] = useState(initialDesignations);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '' });
    const [editingDesignation, setEditingDesignation] = useState(null);

    const toggleStatus = (id) => {
        setData(data.map(item => item.id === id ? { ...item, status: !item.status } : item))
    }

    const handleAdd = (e) => {
        e.preventDefault();
        if (!formData.name.trim()) return;

        const newDesignation = {
            id: data.length + 1,
            name: formData.name.toUpperCase(),
            status: true,
            created: new Date().toISOString().split('T')[0]
        };

        setData([...data, newDesignation]);
        setFormData({ name: '' });
        setIsModalOpen(false);
    }

    const handleEditClick = (designation) => {
        setEditingDesignation(designation);
        setFormData({ name: designation.name });
        setIsEditModalOpen(true);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!formData.name.trim()) return;

        setData(data.map(item =>
            item.id === editingDesignation.id
                ? { ...item, name: formData.name.toUpperCase() }
                : item
        ));

        setFormData({ name: '' });
        setEditingDesignation(null);
        setIsEditModalOpen(false);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditModalOpen(false);
        setFormData({ name: '' });
        setEditingDesignation(null);
    }

    return (
        <div className="space-y-6 font-sans">
            <div className="rounded-sm border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-200">
                    <h1 className="text-xl font-medium text-gray-800 tracking-tight">Manage Designations</h1>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#0f172a] hover:bg-[#1e293b] text-white gap-2 rounded-sm px-4 h-9 text-xs font-bold transition-all border-none uppercase tracking-wider"
                    >
                        <Plus size={16} /> Add Designation
                    </Button>
                </div>

                {/* Add Designation Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4">
                        <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl relative overflow-hidden">
                            <div className="flex items-center justify-between p-4 border-b">
                                <h2 className="text-[17px] font-medium text-gray-800">Add New Designation</h2>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleAdd} className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[13px] font-medium text-gray-700">Designation Name</label>
                                    <Input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ name: e.target.value })}
                                        placeholder="Enter Designation Name"
                                        className="h-10 rounded-sm border-gray-200 text-sm focus:ring-1 focus:ring-[#1e463a] focus:border-[#1e463a]"
                                    />
                                </div>

                                <div className="flex justify-center gap-4 pt-2">
                                    <Button
                                        type="button"
                                        onClick={closeModal}
                                        className="bg-[#b9875a] hover:bg-[#a6764a] text-white border-none h-9 text-xs font-bold px-10 rounded-sm shadow-sm transition-all uppercase tracking-wider"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="bg-[#1e463a] hover:bg-[#153229] text-white h-9 text-xs font-bold px-10 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                                    >
                                        Add Designation
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Edit Designation Modal */}
                {isEditModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4">
                        <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl relative overflow-hidden">
                            <div className="flex items-center justify-between p-4 border-b">
                                <h2 className="text-[17px] font-medium text-gray-800">Edit Designation</h2>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleUpdate} className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[13px] font-medium text-gray-700">Designation Name</label>
                                    <Input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ name: e.target.value })}
                                        placeholder="Enter Designation Name"
                                        className="h-10 rounded-sm border-gray-200 text-sm focus:ring-1 focus:ring-[#eab308] focus:border-[#eab308]"
                                    />
                                </div>

                                <div className="flex justify-center gap-4 pt-2">
                                    <Button
                                        type="button"
                                        onClick={closeModal}
                                        className="bg-[#b9875a] hover:bg-[#a6764a] text-white border-none h-9 text-xs font-bold px-10 rounded-sm shadow-sm transition-all uppercase tracking-wider"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="bg-[#eab308] hover:bg-[#ca8a04] text-white h-9 text-xs font-bold px-10 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                                    >
                                        Update Designation
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <Table className="border-collapse">
                    <TableHeader>
                        <TableRow className="bg-[#f8fafc] hover:bg-[#f8fafc]">
                            <TableHead className="w-[80px] font-bold text-gray-800 border border-gray-200 pl-6 h-12 uppercase text-[11px] tracking-wider">#</TableHead>
                            <TableHead className="font-bold text-gray-800 border border-gray-200 uppercase text-[11px] tracking-wider">Designation Name</TableHead>
                            <TableHead className="font-bold text-gray-800 border border-gray-200 uppercase text-[11px] tracking-wider">Status</TableHead>
                            <TableHead className="font-bold text-gray-800 border border-gray-200 uppercase text-[11px] tracking-wider">Created At</TableHead>
                            <TableHead className="text-center font-bold text-gray-800 border border-gray-200 w-[120px] uppercase text-[11px] tracking-wider">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={row.id} className="hover:bg-gray-50/50">
                                <TableCell className="text-gray-600 py-4 pl-6 border border-gray-200 text-xs">{index + 1}</TableCell>
                                <TableCell className="font-medium text-gray-700 border border-gray-200 tracking-wide text-xs">{row.name}</TableCell>
                                <TableCell className="border border-gray-200">
                                    <CustomBlueSwitch
                                        checked={row.status}
                                        onCheckedChange={() => toggleStatus(row.id)}
                                    />
                                </TableCell>
                                <TableCell className="text-gray-500 text-xs border border-gray-200">{row.created}</TableCell>
                                <TableCell className="text-center border border-gray-200">
                                    <Button
                                        onClick={() => handleEditClick(row)}
                                        size="icon"
                                        variant="ghost"
                                        className="h-8 w-8 text-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-blue-50 border border-blue-100/30 rounded-sm"
                                    >
                                        <Pencil size={14} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
