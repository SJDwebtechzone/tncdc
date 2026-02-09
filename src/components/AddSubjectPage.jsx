import React, { useState } from 'react';
import { Plus, Download, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSubject } from '@/store/courseSlice';

const AddSubjectPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ name: '' });
    const [questionBanks, setQuestionBanks] = useState([
        { id: 1, language: '', examType: 'final', file: null }
    ]);

    const handleAddQuestionBank = () => {
        setQuestionBanks([...questionBanks, {
            id: Date.now(),
            language: '',
            examType: 'final',
            file: null
        }]);
    };

    const handleRemoveQuestionBank = (id) => {
        if (questionBanks.length > 1) {
            setQuestionBanks(questionBanks.filter(qb => qb.id !== id));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSubject({
            ...formData,
            totalQuestions: 0,
            status: true,
            createdAt: new Date().toLocaleDateString('en-GB'),
            dateObj: new Date().toISOString()
        }));
        navigate('/dashboard/subjects');
    };

    return (
        <div className="w-full space-y-6 pb-10">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    onClick={() => navigate('/dashboard/subjects')}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Button>
                <h1 className="text-2xl font-bold text-gray-800">Add Subject</h1>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Subject Name */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Subject Name</label>
                        <Input
                            required
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Enter Subject Name"
                            className="h-11"
                        />
                    </div>

                    {/* Download Sample Excel Format */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm font-semibold text-gray-700 mb-3">Download Sample Excel Format</p>
                        <div className="flex flex-wrap gap-3">
                            <Button type="button" variant="outline" className="bg-white border-blue-300 text-blue-700 hover:bg-blue-50">
                                <Download className="w-4 h-4 mr-2" />
                                Download English Sample (हिंदी नहीं)
                            </Button>
                            <Button type="button" variant="outline" className="bg-white border-blue-300 text-blue-700 hover:bg-blue-50">
                                <Download className="w-4 h-4 mr-2" />
                                Download Hindi Sample (हिंदी सहित)
                            </Button>
                        </div>
                    </div>

                    {/* Question Banks */}
                    <div className="border-t pt-6">
                        <h3 className="text-sm font-semibold text-gray-700 mb-4">Question Bank</h3>

                        {questionBanks.map((qb, index) => (
                            <div key={qb.id} className="mb-6 pb-6 border-b last:border-b-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    {/* Language */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-600 mb-2 block">Language *</label>
                                        <select
                                            className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={qb.language}
                                            onChange={(e) => {
                                                const updated = [...questionBanks];
                                                updated[index].language = e.target.value;
                                                setQuestionBanks(updated);
                                            }}
                                        >
                                            <option value="">Select Language</option>
                                            <option value="english">English</option>
                                            <option value="hindi">Hindi</option>
                                            <option value="both">Both</option>
                                        </select>
                                    </div>

                                    {/* Exam Type */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-600 mb-2 block">Exam Type *</label>
                                        <div className="flex gap-4 items-center h-11">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name={`examType-${qb.id}`}
                                                    value="final"
                                                    className="w-4 h-4 text-blue-600"
                                                    checked={qb.examType === 'final'}
                                                    onChange={(e) => {
                                                        const updated = [...questionBanks];
                                                        updated[index].examType = e.target.value;
                                                        setQuestionBanks(updated);
                                                    }}
                                                />
                                                <span className="text-sm text-gray-700">Final Exam</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name={`examType-${qb.id}`}
                                                    value="mock"
                                                    className="w-4 h-4 text-blue-600"
                                                    checked={qb.examType === 'mock'}
                                                    onChange={(e) => {
                                                        const updated = [...questionBanks];
                                                        updated[index].examType = e.target.value;
                                                        setQuestionBanks(updated);
                                                    }}
                                                />
                                                <span className="text-sm text-gray-700">Mock Test</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name={`examType-${qb.id}`}
                                                    value="both"
                                                    className="w-4 h-4 text-blue-600"
                                                    checked={qb.examType === 'both'}
                                                    onChange={(e) => {
                                                        const updated = [...questionBanks];
                                                        updated[index].examType = e.target.value;
                                                        setQuestionBanks(updated);
                                                    }}
                                                />
                                                <span className="text-sm text-gray-700">Both</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Upload Excel File */}
                                <div>
                                    <label className="text-sm font-medium text-gray-600 mb-2 block">Upload Excel File *</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                                        <input
                                            type="file"
                                            accept=".xlsx,.xls"
                                            className="hidden"
                                            id={`excelFile-${qb.id}`}
                                            onChange={(e) => {
                                                const updated = [...questionBanks];
                                                updated[index].file = e.target.files[0];
                                                setQuestionBanks(updated);
                                            }}
                                        />
                                        <label htmlFor={`excelFile-${qb.id}`} className="cursor-pointer">
                                            <div className="text-gray-500 text-sm">
                                                <span className="text-blue-600 font-semibold">Choose File</span> {qb.file ? qb.file.name : 'No file chosen'}
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1">Accepted formats: .xlsx, .xls (Max: 5MB)</p>
                                        </label>
                                    </div>
                                </div>

                                {/* Remove Button */}
                                {questionBanks.length > 1 && (
                                    <div className="mt-4 flex justify-end">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="bg-red-50 border-red-300 text-red-600 hover:bg-red-100"
                                            onClick={() => handleRemoveQuestionBank(qb.id)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Add Question Bank Button */}
                        <div className="mt-4">
                            <Button
                                type="button"
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={handleAddQuestionBank}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add Question Bank
                            </Button>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end gap-3 pt-6 border-t">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => navigate('/dashboard/subjects')}
                            className="px-6"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSubjectPage;






