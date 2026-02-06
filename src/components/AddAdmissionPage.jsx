import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent } from '@/store/studentSlice';

export default function AddAdmissionPage() {
    const navigate = useNavigate();
    const students = useSelector((state) => state.students.students || []);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        studentId: '',
        courseType: '',
        course: '',
        courseFee: '',
        discountType: 'Amount',
        discountValue: '',
        isGstTaken: 'No',
        gstAmount: '0.00',
        finalAmount: '0.00',
        admissionFee: '',
        admissionDate: '',
        showFatherName: true,
        showSurname: true,
        batch: '',
        availableSeats: '',
        referralBy: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we would normally dispatch a specialized addAdmission action
        // For now, we'll just add to the general students list to keep it functional
        const selectedStudent = students.find(s => s.id === parseInt(formData.studentId));
        const newAdmission = {
            id: Date.now(),
            name: selectedStudent ? selectedStudent.name : 'Unknown Student',
            course: formData.course,
            batch: formData.batch,
            admissionDate: formData.admissionDate,
            fees: formData.finalAmount,
            status: 'Active',
            initials: selectedStudent ? selectedStudent.initials : '?'
        };
        dispatch(addStudent(newAdmission));
        navigate('/dashboard/students/admissions');
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500 font-sans pb-10">
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">Add Admission</h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 space-y-8">
                {/* Student Selection */}
                <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">Student</label>
                    <select
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleInputChange}
                        className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-blue-900 outline-none bg-white text-gray-700"
                    >
                        <option value="">Select Student</option>
                        {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.id})</option>)}
                    </select>
                </div>

                {/* Course Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">Course Types</label>
                        <select
                            name="courseType"
                            value={formData.courseType}
                            onChange={handleInputChange}
                            className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-blue-900 outline-none bg-white text-gray-700"
                        >
                            <option value="">Select Course Type</option>
                            <option value="Regular">Regular</option>
                            <option value="Online">Online</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">Course</label>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-blue-900 outline-none bg-white text-gray-700"
                        >
                            <option value="">Select Course Type First</option>
                            <option value="Java Full Stack">Java Full Stack</option>
                            <option value="Python Data Science">Python Data Science</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">Course Fee</label>
                        <Input
                            disabled
                            placeholder="0.00"
                            className="h-10 rounded-sm border-gray-100 bg-gray-50 text-xs"
                        />
                    </div>
                </div>

                {/* Discount & GST */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">Discount Type</label>
                        <div className="flex gap-6 items-center h-10">
                            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 font-medium">
                                <input
                                    type="radio"
                                    name="discountType"
                                    value="Amount"
                                    checked={formData.discountType === 'Amount'}
                                    onChange={handleInputChange}
                                    className="accent-blue-900 w-4 h-4"
                                />
                                Amount
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 font-medium">
                                <input
                                    type="radio"
                                    name="discountType"
                                    value="Percentage"
                                    checked={formData.discountType === 'Percentage'}
                                    onChange={handleInputChange}
                                    className="accent-blue-900 w-4 h-4"
                                />
                                Percentage
                            </label>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">Discount Value</label>
                        <Input
                            name="discountValue"
                            value={formData.discountValue}
                            onChange={handleInputChange}
                            placeholder="Enter value"
                            className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-900 transition-all font-medium"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">Is GST Taken?</label>
                        <div className="flex gap-6 items-center h-10">
                            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 font-medium">
                                <input
                                    type="radio"
                                    name="isGstTaken"
                                    value="Yes"
                                    checked={formData.isGstTaken === 'Yes'}
                                    onChange={handleInputChange}
                                    className="accent-blue-900 w-4 h-4"
                                />
                                Yes
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 font-medium">
                                <input
                                    type="radio"
                                    name="isGstTaken"
                                    value="No"
                                    checked={formData.isGstTaken === 'No'}
                                    onChange={handleInputChange}
                                    className="accent-blue-900 w-4 h-4"
                                />
                                No
                            </label>
                        </div>
                    </div>
                </div>

                {/* Final Calculations */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[11px]">
                    <div className="space-y-2">
                        <label className="font-bold text-gray-500 uppercase tracking-widest block">GST Amount</label>
                        <Input
                            disabled
                            value={formData.gstAmount}
                            className="h-10 rounded-sm border-gray-100 bg-gray-50 text-xs font-bold text-gray-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-bold text-gray-500 uppercase tracking-widest block">Final Amount</label>
                        <Input
                            disabled
                            value={formData.finalAmount}
                            className="h-10 rounded-sm border-gray-100 bg-gray-50 text-xs font-bold text-gray-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-bold text-gray-500 uppercase tracking-widest block">Admission Fee</label>
                        <Input
                            name="admissionFee"
                            value={formData.admissionFee}
                            onChange={handleInputChange}
                            className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-blue-900 transition-all font-medium"
                        />
                    </div>
                </div>

                {/* Extra Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2 font-sans">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">Admission Date</label>
                        <Input
                            type="date"
                            name="admissionDate"
                            value={formData.admissionDate}
                            onChange={handleInputChange}
                            className="h-10 rounded-sm border-gray-200 text-xs"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">Show On Certificate</label>
                        <div className="flex gap-6 h-10 items-center">
                            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 font-bold">
                                <input
                                    type="checkbox"
                                    name="showFatherName"
                                    checked={formData.showFatherName}
                                    onChange={handleInputChange}
                                    className="accent-blue-900 w-4 h-4 rounded-sm"
                                />
                                Father/Husband Name
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 font-bold">
                                <input
                                    type="checkbox"
                                    name="showSurname"
                                    checked={formData.showSurname}
                                    onChange={handleInputChange}
                                    className="accent-blue-900 w-4 h-4 rounded-sm"
                                />
                                Surname
                            </label>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block">Batches</label>
                        <select
                            name="batch"
                            value={formData.batch}
                            onChange={handleInputChange}
                            className="w-full h-10 rounded-sm border border-gray-200 px-3 text-xs focus:ring-1 focus:ring-blue-900 outline-none bg-white text-gray-700"
                        >
                            <option value="">Select Batch</option>
                            <option value="Morning 9-11">Morning 9-11</option>
                            <option value="Evening 6-8">Evening 6-8</option>
                        </select>
                    </div>
                </div>

                {/* Secondary Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px]">
                    <div className="space-y-2">
                        <label className="font-bold text-gray-500 uppercase tracking-widest block">Available Seats for This Batch</label>
                        <Input
                            disabled
                            className="h-10 rounded-sm border-gray-100 bg-gray-50 text-xs"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-bold text-gray-500 uppercase tracking-widest block">Referral By</label>
                        <select
                            name="referralBy"
                            value={formData.referralBy}
                            onChange={handleInputChange}
                            className="w-full h-10 rounded-sm border border-gray-100 px-3 text-xs focus:ring-1 focus:ring-blue-900 outline-none bg-white text-gray-700"
                        >
                            <option value="">Select Student First</option>
                        </select>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                    <Button
                        type="submit"
                        className="bg-[#1e3a8a] hover:bg-blue-900 text-white min-w-[120px] h-10 rounded-sm font-bold uppercase tracking-widest text-[11px] border-none shadow-md transition-all active:scale-95"
                    >
                        Submit
                    </Button>
                    <Button
                        type="button"
                        onClick={() => navigate('/dashboard/students/admissions')}
                        className="bg-[#b9875a] hover:bg-[#a6764a] text-white min-w-[120px] h-10 rounded-sm font-bold uppercase tracking-widest text-[11px] border-none shadow-md transition-all active:scale-95"
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}






