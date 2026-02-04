import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Plus, Search, RotateCcw, Download, X, Video } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { useSelector, useDispatch } from 'react-redux';
import { addVideo } from '@/store/courseSlice';

export default function CourseVideosPage() {
    const videos = useSelector((state) => state.courses.videos || []);
    const dispatch = useDispatch();
    const [searchCourse, setSearchCourse] = useState("")
    const [searchTitle, setSearchTitle] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ course: '', subject: '', title: '', link: '' });

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addVideo({ ...formData, id: Date.now(), createdAt: new Date().toLocaleDateString() }));
        setIsModalOpen(false);
        setFormData({ course: '', subject: '', title: '', link: '' });
    };

    const filteredVideos = videos.filter(video =>
        video.course.toLowerCase().includes(searchCourse.toLowerCase()) &&
        video.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    return (
        <div className="space-y-6 relative">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-gray-100/50">
                    <h1 className="text-xl font-medium text-gray-800">Manage Course Videos</h1>
                    <div className="flex gap-2">
                        <Button onClick={() => setIsModalOpen(true)} className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Plus size={14} /> Add New Video
                        </Button>
                        <Button className="bg-[#14532d] hover:bg-[#14532d]/90 text-white gap-2 rounded-lg px-4 h-9 text-sm font-normal">
                            <Download size={14} /> Export
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-6 bg-gray-50/50 border-b border-gray-100 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div className="space-y-1 md:col-span-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Course</label>
                        <input
                            placeholder="All Courses"
                            className="w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchCourse}
                            onChange={(e) => setSearchCourse(e.target.value)}
                        />
                    </div>
                    <div className="space-y-1 md:col-span-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Search Videos</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                            <input
                                placeholder="Search by title..."
                                className="w-full h-10 pl-9 pr-3 py-2 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTitle}
                                onChange={(e) => setSearchTitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <Button className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white h-10 w-full">
                        Search
                    </Button>
                    <Button variant="outline" className="text-orange-500 border-orange-200 bg-[#d97706]/10 hover:bg-[#d97706]/20 hover:text-orange-600 border-none h-10 w-full" onClick={() => { setSearchCourse(""); setSearchTitle(""); }}>
                        Reset
                    </Button>
                </div>

                {/* Table */}
                <Table>
                    <TableHeader className="bg-[#f1f5f9] border-b border-gray-200">
                        <TableRow>
                            <TableHead className="w-[80px] font-semibold text-gray-700 pl-6 text-xs uppercase tracking-wider border-r border-gray-200">#</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Course</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Subject/Semester</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Title</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Video Link</TableHead>
                            <TableHead className="font-semibold text-gray-700 text-xs uppercase tracking-wider border-r border-gray-200">Created At</TableHead>
                            <TableHead className="text-center font-semibold text-gray-700 pr-8 text-xs uppercase tracking-wider">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredVideos.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="h-64 text-center border-b border-gray-200">
                                    <div className="flex flex-col items-center justify-center text-gray-400">
                                        <Video size={48} className="mb-4 opacity-50" />
                                        <p className="text-sm">No course videos found</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredVideos.map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCell className="font-medium text-blue-600 py-4 pl-6 border-r border-gray-200">{index + 1}</TableCell>
                                    <TableCell className="font-medium text-gray-700 text-sm border-r border-gray-200">{row.course}</TableCell>
                                    <TableCell className="text-gray-600 text-sm border-r border-gray-200">{row.subject}</TableCell>
                                    <TableCell className="text-gray-600 text-sm border-r border-gray-200 font-medium">{row.title}</TableCell>
                                    <TableCell className="text-blue-500 text-xs border-r border-gray-200 max-w-[200px] truncate underline cursor-pointer">{row.link}</TableCell>
                                    <TableCell className="text-gray-600 text-sm border-r border-gray-200">{row.createdAt}</TableCell>
                                    <TableCell className="text-center pr-6">
                                        <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600"><Pencil size={14} /></Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Add Video Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add Course Video</h2>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="text-sm font-bold text-gray-700">Course</label>
                                <Input required value={formData.course} onChange={e => setFormData({ ...formData, course: e.target.value })} placeholder="e.g. Diploma in CS" />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700">Subject/Semester</label>
                                <Input required value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} placeholder="e.g. Sem 1 / C++" />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700">Video Title</label>
                                <Input required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. Introduction to Programming" />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700">Video Link (YouTube/Vimeo)</label>
                                <Input required type="url" value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} placeholder="https://youtube.com/..." />
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-[#1a237e] text-white">Save Video</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
