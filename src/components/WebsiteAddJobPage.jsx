import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, editJob } from '@/store/websiteSlice';

export default function WebsiteAddJobPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const editingJob = location.state?.job;

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        poster: '',
        salary: '',
        companyName: '',
        companyLogo: '',
        deadline: '',
        status: true
    });

    useEffect(() => {
        if (editingJob) {
            setFormData({
                title: editingJob.title || '',
                description: editingJob.description || '',
                poster: editingJob.poster || '',
                salary: editingJob.salary || '',
                companyName: editingJob.companyName || '',
                companyLogo: editingJob.companyLogo || '',
                deadline: editingJob.deadline || '',
                status: editingJob.status !== undefined ? editingJob.status : true
            });
        }
    }, [editingJob]);

    const posterInputRef = useRef(null);
    const logoInputRef = useRef(null);

    const handleSave = (e) => {
        e.preventDefault();
        if (editingJob) {
            dispatch(editJob({ ...formData, id: editingJob.id }));
        } else {
            dispatch(addJob(formData));
        }
        navigate('/dashboard/website/jobs');
    };

    return (
        <div className="space-y-6 font-sans pb-10 pt-4">

            <div className="px-6">
                <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-8 space-y-8">
                    <h2 className="text-[15px] font-bold text-gray-800 uppercase tracking-wider mb-8">
                        {editingJob ? 'Edit Job Posting' : 'Add New Job Posting'}
                    </h2>

                    <form onSubmit={handleSave} className="space-y-6 max-w-5xl">
                        {/* Job Title */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-7n00 uppercase tracking-widest ml-1">
                                Job Title <span className="text-red-500">*</span>
                            </label>
                            <Input
                                required
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                placeholder="e.g. Software Engineer"
                                className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e]"
                            />
                            <p className="text-[9px] text-gray-400 italic px-1 font-bold">Enter the job title (e.g., Software Engineer).</p>
                        </div>

                        {/* Description */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <Textarea
                                required
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Provide a detailed description of the job."
                                className="min-h-[150px] rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e] resize-none"
                            />
                            <p className="text-[9px] text-gray-400 italic px-1 font-bold lowercase">Provide a detailed description of the job.</p>
                        </div>

                        {/* Job Poster Image */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Job Poster Image
                            </label>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                    <input type="file" ref={posterInputRef} className="hidden" onChange={() => { }} />
                                    <button
                                        type="button"
                                        onClick={() => posterInputRef.current.click()}
                                        className="px-3 h-full bg-gray-100 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-200 transition-colors"
                                    >
                                        Choose File
                                    </button>
                                    <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                </div>
                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">
                                    PNG or JPEG recommended. Max 2MB. Recommended size: 800x600 pixels.
                                </p>
                            </div>
                        </div>

                        {/* Salary Range */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Salary Range
                            </label>
                            <Input
                                value={formData.salary}
                                onChange={e => setFormData({ ...formData, salary: e.target.value })}
                                placeholder="e.g., 20,000 - 30,000"
                                className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e]"
                            />
                            <p className="text-[9px] text-gray-400 italic px-1 font-bold lowercase">Enter the salary range (optional).</p>
                        </div>

                        {/* Company Name */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Company Name <span className="text-red-500">*</span>
                            </label>
                            <Input
                                required
                                value={formData.companyName}
                                onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                                placeholder="Enter Company Name"
                                className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e]"
                            />
                            <p className="text-[9px] text-gray-400 italic px-1 font-bold lowercase">Enter the name of the company offering the job.</p>
                        </div>

                        {/* Company Logo */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Company Logo
                            </label>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                    <input type="file" ref={logoInputRef} className="hidden" onChange={() => { }} />
                                    <button
                                        type="button"
                                        onClick={() => logoInputRef.current.click()}
                                        className="px-3 h-full bg-gray-100 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-200 transition-colors"
                                    >
                                        Choose File
                                    </button>
                                    <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                </div>
                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">
                                    PNG recommended for transparency. Max 2MB. Recommended size: 400x140 pixels.
                                </p>
                            </div>
                        </div>

                        {/* Last Date to Apply */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Last Date to Apply
                            </label>
                            <Input
                                type="date"
                                value={formData.deadline}
                                onChange={e => setFormData({ ...formData, deadline: e.target.value })}
                                className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e]"
                            />
                            <p className="text-[9px] text-gray-400 italic px-1 font-bold lowercase">Select the last date for applications (optional).</p>
                        </div>

                        {/* Active Status */}
                        <div className="space-y-3">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Active Status
                            </label>
                            <div className="flex items-center space-x-2 px-1">
                                <Checkbox
                                    id="isActive"
                                    checked={formData.status}
                                    onCheckedChange={(checked) => setFormData({ ...formData, status: checked })}
                                    className="border-gray-300 data-[state=checked]:bg-[#1a237e] data-[state=checked]:border-[#1a237e]"
                                />
                                <Label htmlFor="isActive" className="text-[12px] font-bold text-gray-700 cursor-pointer">Is Active</Label>
                            </div>
                            <p className="text-[9px] text-gray-400 italic px-1 font-bold lowercase">Check to make the job visible to applicants.</p>
                        </div>

                        {/* Form Buttons */}
                        <div className="flex justify-end gap-3 pt-10">
                            <Button
                                type="button"
                                onClick={() => navigate('/dashboard/website/jobs')}
                                className="bg-[#b9875a] hover:bg-[#a6764a] text-white h-10 text-[11px] font-bold px-10 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="bg-[#154c4c] hover:bg-[#0f3838] text-white h-10 text-[11px] font-bold px-10 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                            >
                                {editingJob ? 'Update Job' : 'Add Job'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
