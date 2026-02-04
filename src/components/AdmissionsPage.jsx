import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent } from '@/store/studentSlice';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
    Plus,
    Download,
    Search,
    Banknote,
    CheckCircle2,
    Tag,
    Hourglass,
    AlertTriangle,
    Users,
    FileText,
    CreditCard,
    Edit,
    X
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function AdmissionsPage() {
    const students = useSelector((state) => state.students.students);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        course: '',
        dob: '',
        batch: 'Batch-A'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            id: Date.now(),
            ...formData,
            initials: formData.name.charAt(0).toUpperCase(),
            admissionDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
            photo: null
        };
        dispatch(addStudent(newStudent));
        setIsModalOpen(false);
        setFormData({ name: '', email: '', mobile: '', course: '', dob: '', batch: 'Batch-A' });
    };

    return (
        <div className="space-y-6 relative">
            {/* Stats Components - Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard icon={Banknote} label="TOTAL AMOUNT" value="₹0.00" color="text-blue-600" iconColor="text-blue-600" iconBg="bg-blue-50" borderColor="border-l-blue-500" />
                <StatsCard icon={CheckCircle2} label="PAID AMOUNT" value="₹0.00" color="text-green-600" iconColor="text-green-600" iconBg="bg-green-50" borderColor="border-l-green-500" />
                <StatsCard icon={Tag} label="DISCOUNT AMOUNT" value="₹0.00" color="text-orange-500" iconColor="text-orange-500" iconBg="bg-orange-50" borderColor="border-l-orange-500" />
                <StatsCard icon={Hourglass} label="REMAINING BALANCE" value="₹0.00" color="text-red-500" iconColor="text-red-500" iconBg="bg-red-50" borderColor="border-l-red-500" />
            </div>

            {/* Stats Components - Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-400 flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                        <AlertTriangle size={20} className="text-gray-600" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">TOTAL LATE FEES</div>
                        <div className="text-lg font-bold text-gray-700">₹0.00</div>
                        <Button variant="outline" className="h-6 text-[10px] mt-1 border-blue-900 text-blue-900 px-2">View Details</Button>
                    </div>
                </div>
                <StatsCard icon={Users} label="TOTAL ADMISSIONS" value={students.length} color="text-gray-800" iconColor="text-blue-500" iconBg="bg-blue-50" borderColor="border-l-blue-400" />
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800">Manage Admissions</h2>
                    <div className="flex gap-2">
                        <Button onClick={() => setIsModalOpen(true)} className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white gap-2 text-xs">
                            <Plus size={14} /> Add Admission
                        </Button>
                        <Button className="bg-[#065f46] hover:bg-[#065f46]/90 text-white gap-2 text-xs">
                            <Download size={14} /> Export
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-3 relative">
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                        <Input className="pl-9 h-10 w-full text-xs" placeholder="Search...." />
                    </div>
                    <div className="md:col-span-2">
                        <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-xs text-gray-600 bg-white">
                            <option>All Batches</option>
                        </select>
                    </div>
                    {/* Date inputs placeholder */}
                    <div className="md:col-span-2"><Input className="w-full h-10 text-xs" placeholder="Start Date" /></div>
                    <div className="md:col-span-2"><Input className="w-full h-10 text-xs" placeholder="End Date" /></div>
                    <div className="md:col-span-1"><Button variant="outline" className="w-full h-10 border-blue-900 text-blue-900 hover:bg-blue-50 text-xs">Submit</Button></div>
                    <div className="md:col-span-1"><Button variant="outline" className="w-full h-10 border-orange-200 text-orange-500 hover:bg-orange-50 text-xs">Reset</Button></div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto border border-gray-100 rounded-lg">
                    <Table>
                        <TableHeader className="bg-gray-50/50">
                            <TableRow>
                                <TableHead className="w-[30px] font-bold text-gray-800 text-[10px] uppercase">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase min-w-[150px]">Student Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase">Student Image</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase min-w-[150px]">Course Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase">Batch Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase">Admission Date</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase">Fees Details</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase">Status</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[10px] uppercase min-w-[100px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {students.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={9} className="h-32 text-center text-gray-500">
                                        No admissions found. Add a new admission to get started.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                students.map((student, index) => (
                                    <TableRow key={student.id} className="border-b border-gray-50 hover:bg-gray-50">
                                        <TableCell className="text-blue-600 font-medium text-xs align-top">{index + 1}</TableCell>
                                        <TableCell className="align-top">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-gray-700">{student.name}</span>
                                                <span className="text-[10px] text-gray-500 bg-gray-100 px-1 rounded w-fit mt-1">{student.admissionDate || '28 Jan 2026'}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <div className="w-8 h-8 bg-gray-200 rounded overflow-hidden flex items-center justify-center text-[10px] font-bold text-gray-500">
                                                {student.initials}
                                            </div>
                                        </TableCell>
                                        <TableCell className="align-top text-[10px] text-gray-600 uppercase">{student.course || 'N/A'}</TableCell>
                                        <TableCell className="align-top text-[10px] text-gray-600">{student.batch || 'Batch A'}</TableCell>
                                        <TableCell className="align-top text-[10px] text-gray-600">{student.admissionDate || '28 Jan 2026'}</TableCell>
                                        <TableCell className="align-top">
                                            <div className="flex flex-col text-[10px] text-gray-600">
                                                <span>Fees: <span className="font-bold">₹0</span></span>
                                                <span className="text-red-500">Due: ₹0</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <Switch checked={true} className="data-[state=checked]:bg-[#1e3a8a]" />
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="icon" className="h-6 w-6 text-[#1e3a8a]"><Edit size={14} /></Button>
                                                <div className="bg-gray-800 p-1 rounded text-white cursor-pointer"><FileText size={12} /></div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Add Admission Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-800 mb-1">Add New Student</h2>
                        <p className="text-sm text-gray-500 mb-6">Enter student details to create a new admission.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Student Name</label>
                                <Input required name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Rahul Sharma" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Date of Birth</label>
                                <Input required type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Email</label>
                                <Input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="student@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Course</label>
                                <Input required name="course" value={formData.course} onChange={handleInputChange} placeholder="e.g. Python Programming" />
                            </div>

                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">Add Student</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

function StatsCard({ icon: Icon, label, value, color, iconColor, iconBg, borderColor }) {
    return (
        <div className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${borderColor} flex items-start gap-4`}>
            <div className={`${iconBg} p-3 rounded-lg flex items-center justify-center`}>
                <Icon size={20} className={iconColor} />
            </div>
            <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{label}</div>
                <div className={`text-lg font-bold ${color}`}>{value}</div>
            </div>
        </div>
    )
}
