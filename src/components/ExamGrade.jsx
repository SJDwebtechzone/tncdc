import React, { useState } from 'react';
import { Lock, Trash2, Plus, Save, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ExamGrade = () => {
    const [grades, setGrades] = useState([
        { id: 1, performance: 'Average', grade: 'D', start: 35, end: 49 },
        { id: 2, performance: 'Good', grade: 'B', start: 50, end: 74 },
        { id: 3, performance: 'Very Good', grade: 'A', start: 75, end: 89 },
        { id: 4, performance: 'Execellent', grade: 'A+', start: 90, end: 100 },
    ]);

    const handleRemove = (id) => {
        setGrades(grades.filter(g => g.id !== id));
    };

    const handleAdd = () => {
        const newId = Math.max(...grades.map(g => g.id), 0) + 1;
        setGrades([...grades, { id: newId, performance: '', grade: '', start: '', end: '' }]);
    };

    const handleChange = (id, field, value) => {
        setGrades(grades.map(g => g.id === id ? { ...g, [field]: value } : g));
    };

    return (
        <div className="p-4 max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Exam Grade System</h1>
                <Button className="bg-[#1e4e3e] hover:bg-[#15382d] text-white">
                    <Lock className="w-4 h-4 mr-2" />
                    Lock Grade System
                </Button>
            </div>

            {/* Alert/Info Box */}
            <div className="bg-gray-600 text-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                    <div className="p-1">
                        <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-1">Important: Lock Your Grade System</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            Once you've finalized your grade configuration and it's being used in student marksheets, please <span className="font-bold text-white">lock the system</span> to prevent accidental changes that could affect student
                            records. You can always unlock it later if needed.
                        </p>
                    </div>
                </div>
            </div>

            {/* Grades List */}
            <div className="space-y-6">
                {grades.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-4 items-end bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="col-span-3 space-y-2">
                            <label className="text-sm font-semibold text-gray-600 block">Performance</label>
                            <Input
                                value={item.performance}
                                onChange={(e) => handleChange(item.id, 'performance', e.target.value)}
                                className="bg-gray-50 border-gray-200"
                                placeholder="Performance"
                            />
                        </div>
                        <div className="col-span-3 space-y-2">
                            <label className="text-sm font-semibold text-gray-600 block">Grade Name</label>
                            <Input
                                value={item.grade}
                                onChange={(e) => handleChange(item.id, 'grade', e.target.value)}
                                className="bg-gray-50 border-gray-200"
                                placeholder="Grade Name"
                            />
                        </div>
                        <div className="col-span-2 space-y-2">
                            <label className="text-sm font-semibold text-gray-600 block">Start %</label>
                            <Input
                                value={item.start}
                                onChange={(e) => handleChange(item.id, 'start', e.target.value)}
                                className="bg-gray-50 border-gray-200"
                                placeholder="Start"
                            />
                        </div>
                        <div className="col-span-2 space-y-2">
                            <label className="text-sm font-semibold text-gray-600 block">End %</label>
                            <Input
                                value={item.end}
                                onChange={(e) => handleChange(item.id, 'end', e.target.value)}
                                className="bg-gray-50 border-gray-200"
                                placeholder="End"
                            />
                        </div>
                        <div className="col-span-2">
                            <Button
                                variant="destructive"
                                className="bg-[#ea5455] hover:bg-[#d63e3f] text-white w-full"
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
                <Button
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6"
                    onClick={handleAdd}
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Grade
                </Button>
                <Button className="bg-[#1e4e3e] hover:bg-[#15382d] text-white px-6">
                    <Save className="w-4 h-4 mr-2" />
                    Save Grade System
                </Button>
            </div>
        </div>
    );
};

export default ExamGrade;
