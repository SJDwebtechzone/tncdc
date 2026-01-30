import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus } from "lucide-react"
import { useState } from "react"

// Data matched to the screenshot (UPPERCASE names)
const initialDesignations = [
    { id: 1, name: "DIRECTOR", status: true, created: "" },
    { id: 2, name: "EMPLOYEE", status: true, created: "" },
    { id: 3, name: "FOUNDER", status: true, created: "" },
    { id: 4, name: "OTHER", status: true, created: "" },
    { id: 5, name: "PARTNER", status: true, created: "" },
    { id: 6, name: "PROPERITER", status: true, created: "" },
    { id: 7, name: "SECRETARY", status: true, created: "" },
    { id: 8, name: "TRUSTEE", status: true, created: "" },
]

const CustomBlueSwitch = ({ checked, onCheckedChange }) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`
            relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:outline-none 
            ${checked ? 'bg-white border-[#1a237e]' : 'bg-gray-200 border-transparent'}
        `}
    >
        <span
            className={`
                pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform 
                ${checked ? 'translate-x-4 bg-[#1a237e]' : 'translate-x-0.5 bg-white'}
            `}
        />
    </button>
)

export default function DesignationsPage() {
    const [data, setData] = useState(initialDesignations)

    const toggleStatus = (id) => {
        setData(data.map(item => item.id === id ? { ...item, status: !item.status } : item))
    }

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-100/50">
                    <h1 className="text-xl font-medium text-gray-800">Manage Designations</h1>
                    <Button className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white gap-2 rounded-lg px-6">
                        <Plus size={16} /> Add Designation
                    </Button>
                </div>

                <Table>
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead className="w-[80px] font-bold text-gray-700 pl-6">#</TableHead>
                            <TableHead className="font-bold text-gray-700">Designation Name</TableHead>
                            <TableHead className="font-bold text-gray-700">Status</TableHead>
                            <TableHead className="font-bold text-gray-700">Created At</TableHead>
                            <TableHead className="text-right font-bold text-gray-700 pr-8">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={row.id} className="hover:bg-gray-50/50 border-b border-gray-300">
                                <TableCell className="font-medium text-gray-500 py-4 pl-6 border-r border-gray-300">{index + 1}</TableCell>
                                <TableCell className="font-medium text-gray-700 border-r border-gray-300">{row.name}</TableCell>
                                <TableCell className="border-r border-gray-300">
                                    <CustomBlueSwitch
                                        checked={row.status}
                                        onCheckedChange={() => toggleStatus(row.id)}
                                    />
                                </TableCell>
                                <TableCell className="text-gray-500 text-sm border-r border-gray-300">{row.created}</TableCell>
                                <TableCell className="text-right pr-6">
                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-[#1a237e] hover:text-[#1a237e] hover:bg-blue-50 border border-blue-100 rounded-lg">
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
