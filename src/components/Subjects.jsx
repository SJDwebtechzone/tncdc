import React, { useState } from 'react';
import { Plus, Download, Search, Eye, FileEdit, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSelector, useDispatch } from 'react-redux';
import { addSubject } from '@/store/courseSlice';

const Subjects = () => {
    const subjects = useSelector((state) => state.courses.subjects);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '' });

    const filteredSubjects = subjects ? subjects.filter(subject =>
        subject.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addSubject({
            ...formData,
            totalQuestions: 0,
            status: true,
            createdAt: new Date().toLocaleDateString('en-GB'),
            dateObj: new Date().toISOString()
        }));
        setIsModalOpen(false);
        setFormData({ name: '' });
    };

    return (
        <div className="w-full missing-demos space-y-6 relative">
            <h1 className="text-2xl font-bold text-gray-800">Subjects</h1>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                {/* Top Actions */}
                <div className="flex justify-between items-center mb-6">
                    <Button onClick={() => setIsModalOpen(true)} className="bg-[#0f172a] hover:bg-[#1e293b] text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Subject
                    </Button>
                    <Button className="bg-[#1e4e3e] hover:bg-[#15382d] text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </Button>
                </div>

                {/* Search Filter */}
                <div className="flex gap-4 mb-8 overflow-x-auto">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Search subjects.."
                            className="pl-9 bg-gray-50 border-gray-200"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button className="bg-[#5d5fef] hover:bg-[#4b4dcf] text-white min-w-[100px]">
                        Submit
                    </Button>
                    <Button className="bg-[#ea5455] hover:bg-[#d63e3f] text-white min-w-[100px]" onClick={() => setSearchTerm('')}>
                        Reset
                    </Button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-100/50 border-b border-gray-200 text-left">
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject Name</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Total Questions</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Question Bank</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Status</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Created At</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredSubjects.map((subject, index) => (
                                <tr key={subject.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 text-sm text-gray-600">{index + 1}</td>
                                    <td className="p-4 text-sm font-semibold text-gray-900">{subject.name}</td>
                                    <td className="p-4 text-center">
                                        <span className="inline-flex items-center justify-center min-w-[30px] h-[30px] rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600">
                                            {subject.totalQuestions || 0}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <button className="text-gray-500 hover:text-[#5d5fef] transition-colors">
                                            <Eye className="w-5 h-5" />
                                        </button>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="inline-flex items-center cursor-pointer">
                                            <div className={`w-9 h-5 rounded-full relative transition-colors ${subject.status ? 'bg-[#0f172a]' : 'bg-gray-200'}`}>
                                                <div className={`absolute top-[2px] left-[2px] w-4 h-4 rounded-full bg-white transition-transform ${subject.status ? 'translate-x-4' : ''}`}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600">{subject.createdAt}</td>
                                    <td className="p-4 text-center">
                                        <button className="p-2 text-gray-500 hover:text-[#0f172a] hover:bg-gray-100 rounded-lg transition-colors">
                                            <FileEdit className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Subject Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-sm rounded-xl shadow-2xl p-6 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add Subject</h2>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="text-sm font-bold text-gray-700">Subject Name</label>
                                <Input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Computer Fundamentals" />
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-[#0f172a] text-white">Save</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Subjects;
