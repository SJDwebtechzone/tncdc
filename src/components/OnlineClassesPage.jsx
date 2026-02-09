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
            ${checked ? 'bg-white border-[#0f172a]' : 'bg-gray-200 border-transparent'}
        `}
    >
        <span
            className={`
                pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform 
                ${checked ? 'translate-x-4 bg-[#0f172a]' : 'translate-x-0.5 bg-white'}
            `}
        />
    </button>
)

export default function OnlineClassesPage() {
    const classes = useSelector((state) => state.courses.onlineClasses || []);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ title: '', course: '', meetingLink: '', description: '', expiryDate: '' });

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addOnlineClass({ ...formData, id: Date.now(), status: true }));
        setIsModalOpen(false);
        setFormData({ title: '', course: '', meetingLink: '', description: '', expiryDate: '' });
    };

    return (
        <div className="space-y-6 relative animate-in fade-in duration-500">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden p-6 py-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <Video className="text-gray-700" size={28} /> Online Classes
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">Manage and schedule virtual classes for your courses</p>
                    </div>
                    <Button onClick={() => setIsModalOpen(true)} className="bg-[#1e463a] hover:bg-[#153229] text-white gap-2 rounded-sm px-6 h-10 text-[11px] uppercase tracking-widest font-bold shadow-md transition-all active:scale-95">
                        <Plus size={16} /> Add New Class
                    </Button>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg p-6 flex flex-col items-start gap-4 border-t-4 border-blue-500 shadow-sm shadow-blue-50 relative overflow-hidden group">
                        <div className="p-3 bg-blue-500 rounded-lg text-white">
                            <Video size={24} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800 tracking-tight">{classes.length}</h3>
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">TOTAL CLASSES</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 flex flex-col items-start gap-4 border-t-4 border-green-500 shadow-sm shadow-green-50 relative overflow-hidden group">
                        <div className="p-3 bg-green-500 rounded-lg text-white">
                            <div className="w-6 h-6 flex items-center justify-center border-2 border-white rounded-full text-[10px] font-bold">▶</div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800 tracking-tight">{classes.filter(c => c.status).length}</h3>
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">ACTIVE CLASSES</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 flex flex-col items-start gap-4 border-t-4 border-red-500 shadow-sm shadow-red-50 relative overflow-hidden group">
                        <div className="p-3 bg-red-500 rounded-lg text-white">
                            <div className="w-6 h-6 flex items-center justify-center font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-800 tracking-tight">0</h3>
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">EXPIRED CLASSES</p>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                    <Table>
                        <TableHeader className="bg-gray-50/80 border-b border-gray-100">
                            <TableRow>
                                <TableHead className="w-[80px] font-bold text-gray-800 text-[10px] uppercase tracking-wider text-center border-r border-gray-100">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100">Title</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100">Course</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase tracking-wider border-r border-gray-100">Status</TableHead>
                                <TableHead className="text-center font-bold text-gray-800 text-[10px] uppercase tracking-wider w-[120px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {classes.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-64 text-center">
                                        <div className="flex flex-col items-center justify-center text-gray-400 py-12">
                                            <Video size={64} className="mb-4 opacity-20 text-gray-800" />
                                            <h3 className="text-xl font-bold text-gray-800 tracking-tight">No Online Classes Found</h3>
                                            <p className="text-sm text-gray-400 mt-1 font-medium italic">Start by adding your first online class</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                classes.map((row, index) => (
                                    <TableRow key={row.id} className="hover:bg-gray-50/50 transition-colors">
                                        <TableCell className="text-center font-bold text-[#1e3a8a] py-4 border-r border-gray-50">{index + 1}</TableCell>
                                        <TableCell className="font-bold text-gray-800 text-xs border-r border-gray-50">{row.title}</TableCell>
                                        <TableCell className="text-[#10b981] text-xs font-bold border-r border-gray-50">{row.course}</TableCell>
                                        <TableCell className="border-r border-gray-50">
                                            <div className="flex items-center gap-2">
                                                <CustomBlueSwitch
                                                    checked={row.status}
                                                    onCheckedChange={() => { }}
                                                />
                                                <span className={`text-[10px] font-bold uppercase tracking-widest ${row.status ? 'text-[#1e3a8a]' : 'text-gray-400'}`}>
                                                    {row.status ? 'Active' : 'Inactive'}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Button size="icon" variant="ghost" className="h-8 w-8 text-[#1e3a8a] bg-blue-50 hover:bg-blue-100 transition-all rounded-sm">
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

            {/* Add Class Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                    <div className="bg-white w-full max-w-3xl rounded-sm shadow-2xl relative animate-in fade-in zoom-in duration-300 overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-[#6366f1] p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-2">
                                <Video size={20} className="stroke-white" />
                                <h2 className="text-lg font-bold uppercase tracking-tight text-[15px]">Add New Online Class</h2>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Course Select */}
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Course <span className="text-red-500">*</span></label>
                                    <select
                                        required
                                        className="h-10 w-full rounded-sm border border-gray-200 text-xs font-medium focus:ring-1 focus:ring-blue-900 transition-all px-3 bg-white"
                                        value={formData.course}
                                        onChange={e => setFormData({ ...formData, course: e.target.value })}
                                    >
                                        <option value="">Select Course</option>
                                        {/* Add dynamic course options here */}
                                    </select>
                                    <p className="text-[10px] text-gray-400 font-medium italic ml-1">Select the course for this online class</p>
                                </div>

                                {/* Title */}
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Title <span className="text-red-500">*</span></label>
                                    <Input
                                        required
                                        className="h-10 rounded-sm border-gray-200 text-xs font-medium focus:ring-1 focus:ring-blue-900 transition-all"
                                        placeholder="e.g., Advanced JavaScript Session"
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    />
                                    <p className="text-[10px] text-gray-400 font-medium italic ml-1">Enter a descriptive title</p>
                                </div>
                            </div>

                            {/* Meeting Link */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Meeting Link <span className="text-red-500">*</span></label>
                                <Input
                                    required
                                    type="url"
                                    className="h-10 rounded-sm border-gray-200 text-xs font-medium focus:ring-1 focus:ring-blue-900 transition-all"
                                    placeholder="https://meet.google.com/xxx-xxxx-xxx"
                                    value={formData.meetingLink}
                                    onChange={e => setFormData({ ...formData, meetingLink: e.target.value })}
                                />
                                <p className="text-[10px] text-gray-400 font-medium italic ml-1">Enter the full meeting URL (Zoom, Google Meet, Teams, etc.)</p>
                            </div>

                            {/* Description */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Description <span className="text-red-500">*</span></label>
                                <textarea
                                    required
                                    className="min-h-[120px] w-full p-3 rounded-sm border border-gray-200 text-xs font-medium focus:ring-1 focus:ring-blue-900 transition-all bg-white resize-none"
                                    placeholder="Describe the class topics, agenda, or important notes..."
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                />
                                <p className="text-[10px] text-gray-400 font-medium italic ml-1">Provide details about what will be covered</p>
                            </div>

                            {/* Expiry Date & Time */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Expiry Date & Time <span className="text-red-500">*</span></label>
                                <Input
                                    required
                                    type="datetime-local"
                                    className="h-10 rounded-sm border-gray-200 text-xs font-medium focus:ring-1 focus:ring-blue-900 transition-all"
                                    value={formData.expiryDate}
                                    onChange={e => setFormData({ ...formData, expiryDate: e.target.value })}
                                />
                                <p className="text-[10px] text-gray-400 font-medium italic ml-1">Set when this class link will expire</p>
                            </div>

                            {/* Footer Buttons */}
                            <div className="flex justify-end gap-3 pt-6 border-t font-bold">
                                <Button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-[#b9875a] hover:bg-[#a6764a] text-white px-8 rounded-sm h-10 text-[11px] uppercase tracking-widest transition-all active:scale-95 shadow-md font-bold"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-[#1e463a] hover:bg-[#153229] text-white flex items-center gap-2 px-8 rounded-sm h-10 text-[11px] uppercase tracking-widest transition-all active:scale-95 shadow-md font-bold"
                                >
                                    <Video size={14} className="stroke-white" /> Add Class
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}






