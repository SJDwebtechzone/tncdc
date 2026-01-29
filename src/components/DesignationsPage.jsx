import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus } from "lucide-react"
import { useState } from "react"

// Data matched to the screenshot (UPPERCASE names)
const initialDesignations = [
    { id: 1, name: "DIRECTOR", status: true, created: "2024-01-15 10:30 AM" },
    { id: 2, name: "EMPLOYEE", status: true, created: "2024-01-16 09:15 AM" },
    { id: 3, name: "FOUNDER", status: true, created: "2024-01-10 02:45 PM" },
    { id: 4, name: "OTHER", status: true, created: "2024-01-20 11:00 AM" },
    { id: 5, name: "PARTNER", status: true, created: "2024-01-18 04:20 PM" },
    { id: 6, name: "PROPERITER", status: true, created: "2024-01-12 01:30 PM" },
    { id: 7, name: "SECRETARY", status: true, created: "2024-01-15 10:30 AM" },
    { id: 8, name: "TRUSTEE", status: true, created: "2024-01-16 09:15 AM" },
]

export default function DesignationsPage() {
    const [data, setData] = useState(initialDesignations)

    const toggleStatus = (id) => {
        setData(data.map(item => item.id === id ? { ...item, status: !item.status } : item))
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h1 className="text-xl font-medium text-gray-800">Manage Designations</h1>
                <Button className="bg-[#1e293b] hover:bg-[#0f172a] text-white gap-2 rounded-lg px-6">
                    <Plus size={16} /> Add Designation
                </Button>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-gray-100/50">
                        <TableRow>
                            <TableHead className="w-[80px] font-bold text-gray-700">#</TableHead>
                            <TableHead className="font-bold text-gray-700">Designation Name</TableHead>
                            <TableHead className="font-bold text-gray-700">Status</TableHead>
                            <TableHead className="font-bold text-gray-700">Created At</TableHead>
                            <TableHead className="text-right font-bold text-gray-700 pr-8">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={row.id} className="hover:bg-gray-50/50 border-b border-gray-100">
                                <TableCell className="font-medium text-gray-500 py-4">{index + 1}</TableCell>
                                <TableCell className="font-medium text-gray-700">{row.name}</TableCell>
                                <TableCell>
                                    <Switch
                                        checked={row.status}
                                        onCheckedChange={() => toggleStatus(row.id)}
                                        className="data-[state=checked]:bg-[#1e293b] h-5 w-9"
                                    />
                                </TableCell>
                                <TableCell className="text-gray-500 text-sm">{row.created}</TableCell>
                                <TableCell className="text-right pr-6">
                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 border border-blue-200 rounded-lg">
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
