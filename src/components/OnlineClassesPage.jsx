import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus, Search, Download, Video, X } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { useSelector, useDispatch } from 'react-redux';
import { addOnlineClass } from '@/store/courseSlice';

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

export default function OnlineClassesPage() {
    const classes = useSelector((state) => state.courses.onlineClasses || []);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ title: '', course: '', description: '', expiryDate: '' });

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addOnlineClass({ ...formData, id: Date.now(), status: true }));
        setIsModalOpen(false);
        setFormData({ title: '', course: '', description: '', expiryDate: '' });
    };

    return (
        <div className="space-y-6 relative">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden p-6 py-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <Video className="text-gray-700" size={28} /> Online Classes
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">Manage and schedule virtual classes for your courses</p>
                    </div>
                    <Button onClick={() => setIsModalOpen(true)} className="bg-[#10b981] hover:bg-[#059669] text-white gap-2 rounded-md px-6 h-10 text-sm font-medium">
                        <Plus size={16} /> Add New Class
                    </Button>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg p-6 flex flex-col items-start gap-4 border-t-4 border-blue-500 shadow-sm shadow-blue-50">
                        <div className="p-3 bg-blue-500 rounded-lg text-white">
                            <Video size={24} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800">{classes.length}</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mt-1">TOTAL CLASSES</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 flex flex-col items-start gap-4 border-t-4 border-green-500 shadow-sm shadow-green-50">
                        <div className="p-3 bg-green-500 rounded-lg text-white">
                            <div className="w-6 h-6 flex items-center justify-center border-2 border-white rounded-full text-[10px] font-bold">▶</div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800">{classes.filter(c => c.status).length}</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mt-1">ACTIVE CLASSES</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 flex flex-col items-start gap-4 border-t-4 border-red-500 shadow-sm shadow-red-50">
                        <div className="p-3 bg-red-500 rounded-lg text-white">
                            <div className="w-6 h-6 flex items-center justify-center font-bold">ClockIcon</div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800">0</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mt-1">EXPIRED CLASSES</p>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <Table>
                        <TableHeader className="bg-[#f1f5f9] border-b border-gray-200">
                            <TableRow>
                                <TableHead className="w-[80px] font-bold text-gray-700 pl-6 text-xs uppercase tracking-wider border-r border-gray-200">#</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Title</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Course</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Description</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Expiry Date</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Status</TableHead>
                                <TableHead className="text-center font-bold text-gray-700 pr-8 text-xs uppercase tracking-wider">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {classes.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="h-64 text-center border-b border-gray-200">
                                        <div className="flex flex-col items-center justify-center text-gray-400">
                                            <Video size={48} className="mb-4 opacity-50 text-gray-300" />
                                            <h3 className="text-lg font-medium text-gray-500">No Online Classes Found</h3>
                                            <p className="text-sm text-gray-400 mt-1">Start by adding your first online class</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                classes.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell className="font-medium text-blue-600 py-4 pl-6 border-r border-gray-200">{index + 1}</TableCell>
                                        <TableCell className="font-medium text-gray-700 text-sm border-r border-gray-200">{row.title}</TableCell>
                                        <TableCell className="text-gray-600 text-sm border-r border-gray-200">{row.course}</TableCell>
                                        <TableCell className="text-gray-600 text-sm border-r border-gray-200">{row.description}</TableCell>
                                        <TableCell className="text-gray-600 text-sm border-r border-gray-200">{row.expiryDate}</TableCell>
                                        <TableCell className="border-r border-gray-200">
                                            <CustomBlueSwitch
                                                checked={row.status}
                                                onCheckedChange={() => { }}
                                            />
                                        </TableCell>
                                        <TableCell className="text-center pr-6">
                                            <div className="flex items-center justify-center gap-2">
                                                <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600"><Pencil size={14} /></Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Add Class Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add Online Class</h2>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="text-sm font-bold text-gray-700">Class Title</label>
                                <Input required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. Intro to React" />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700">Course</label>
                                <Input required value={formData.course} onChange={e => setFormData({ ...formData, course: e.target.value })} placeholder="e.g. Web Development" />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700">Description</label>
                                <Input required value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} placeholder="Brief description..." />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700">Expiry Date</label>
                                <Input required type="date" value={formData.expiryDate} onChange={e => setFormData({ ...formData, expiryDate: e.target.value })} />
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-[#10b981] hover:bg-[#059669] text-white">Save Class</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
