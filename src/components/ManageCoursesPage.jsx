import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Pencil, Plus, Search, Download, X } from "lucide-react"
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { addCourse } from '@/store/courseSlice';

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

export default function ManageCoursesPage() {
    const courses = useSelector((state) => state.courses.courses);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        category: 'Certificate',
        type: 'Single',
        duration: '',
        mrp: '',
        price: ''
    });

    const filteredData = courses.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCourse = {
            ...formData,
            status: true,
            createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
            title: formData.name // Mapping name to title to match the table rendering if needed
        };
        dispatch(addCourse(newCourse));
        setIsModalOpen(false);
        setFormData({ name: '', code: '', category: 'Certificate', type: 'Single', duration: '', mrp: '', price: '' });
    };

    return (
        <div className="space-y-6 relative">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">

                {/* Top Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h1 className="text-xl font-medium text-gray-800">Manage Courses</h1>
                    <div className="flex gap-2">
                        <Button onClick={() => setIsModalOpen(true)} className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Plus size={14} /> Add Course
                        </Button>
                        <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Download size={14} /> Export
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                    <div className="bg-white border border-gray-200 rounded-md flex items-center px-3 h-10 w-full md:w-80 relative">
                        <Search className="text-gray-400 mr-2" size={16} />
                        <input
                            placeholder="Search...."
                            className="bg-transparent border-none outline-none text-sm w-full text-gray-600 placeholder:text-gray-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-50 h-10 px-12 md:w-48">
                        Submit
                    </Button>
                    <Button variant="outline" className="text-orange-400 border-orange-300 hover:bg-orange-50 h-10 px-12 md:w-48" onClick={() => setSearchQuery("")}>
                        Reset
                    </Button>
                </div>

                {/* Table */}
                <div className="border border-gray-200 rounded-md overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-[#f1f5f9] border-b border-gray-200">
                            <TableRow>
                                <TableHead className="w-[50px] font-bold text-gray-700 pl-4 text-xs uppercase tracking-wider border-r border-gray-200">#</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap min-w-[200px]">Title</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Course Type</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Course Category</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Course Code</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Duration</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">MRP</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Price</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Status</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap text-center">Course Subject</TableHead>
                                <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200 whitespace-nowrap">Created At</TableHead>
                                <TableHead className="text-center font-bold text-gray-700 pr-4 text-xs uppercase tracking-wider whitespace-nowrap">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.map((row, index) => (
                                <TableRow key={row.id} className="hover:bg-gray-50/50 border-b border-gray-200">
                                    <TableCell className="font-medium text-gray-500 py-3 pl-4 border-r border-gray-200 text-xs">{index + 1}</TableCell>
                                    <TableCell className="font-medium text-gray-600 text-xs border-r border-gray-200">{row.name || row.title}</TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200 w-[100px]">
                                        <div className="flex flex-col gap-1">
                                            <span>{row.type || 'Single'}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200">{row.category}</TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200">{row.code}</TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200">{row.duration}</TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200">{row.mrp}</TableCell>
                                    <TableCell className="text-gray-600 text-xs border-r border-gray-200">{row.fees || row.price}</TableCell>
                                    <TableCell className="border-r border-gray-200 text-center">
                                        <CustomBlueSwitch
                                            checked={row.status !== false}
                                            onCheckedChange={() => { }}
                                        />
                                    </TableCell>
                                    <TableCell className="border-r border-gray-200 text-center">
                                        {row.type === "Multiple Exam" ? (
                                            <Button size="sm" className="h-7 bg-[#1a237e] hover:bg-[#1a237e]/90 text-white text-[10px] px-3 rounded">
                                                View
                                            </Button>
                                        ) : (
                                            <Button size="sm" className="h-auto py-1 bg-[#1a237e] hover:bg-[#1a237e]/90 text-white text-[10px] px-3 rounded leading-tight">
                                                Add / <br /> Update
                                            </Button>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-gray-500 text-[10px] border-r border-gray-200 whitespace-nowrap">
                                        {row.createdAt ? row.createdAt.split(' ')[0] : '2026-02-04'} <br />
                                        {/* <span className="text-gray-400">{row.createdAt.split(' ')[1]}</span> */}
                                    </TableCell>
                                    <TableCell className="text-center pr-4">
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

            {/* Add Course Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-800 mb-1">Add New Course</h2>
                        <p className="text-sm text-gray-500 mb-6">Enter details to create a new course.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Course Name</label>
                                <Input required name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Diploma in Computer Science" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase">Code</label>
                                    <Input required name="code" value={formData.code} onChange={handleInputChange} placeholder="e.g. CS-101" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase">Duration</label>
                                    <Input required name="duration" value={formData.duration} onChange={handleInputChange} placeholder="e.g. 6 Months" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase">MRP</label>
                                    <Input required name="mrp" value={formData.mrp} onChange={handleInputChange} placeholder="25000" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase">Selling Price</label>
                                    <Input required name="price" value={formData.price} onChange={handleInputChange} placeholder="20000" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-700 uppercase">Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="Certificate">Certificate</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Advance Diploma">Advance Diploma</option>
                                </select>
                            </div>

                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-[#1a237e] hover:bg-[#1a237e]/90">Save Course</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
