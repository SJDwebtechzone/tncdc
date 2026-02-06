import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Briefcase, Trash2, Edit2, Search, ImageIcon } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteJob, editJob } from '@/store/websiteSlice';
import { useNavigate } from 'react-router-dom';

const CustomBlueSwitch = ({ checked, onCheckedChange }) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`relative inline-flex h-4 w-8 items-center rounded-full border border-gray-200 transition-colors focus-visible:outline-none ${checked ? 'bg-[#1a237e]' : 'bg-gray-200'}`}
    >
        <span className={`pointer-events-none block h-3 w-3 rounded-full shadow-sm transition-transform ${checked ? 'translate-x-4 bg-white' : 'translate-x-0.5 bg-white'}`} />
    </button>
)

export default function WebsiteJobsPage() {
    const jobs = useSelector((state) => state.website.jobs || []);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (job.companyName && job.companyName.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleDelete = (id) => {
        if (window.confirm("Delete this job posting?")) {
            dispatch(deleteJob(id));
        }
    };

    const handleToggleStatus = (job) => {
        dispatch(editJob({ ...job, status: !job.status }));
    };

    return (
        <div className="space-y-6 font-sans relative pb-10 pt-4">

            <div className="px-6 space-y-4">
                <div className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden min-h-[500px]">
                    {/* Management Header */}
                    <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/10">
                        <h2 className="text-[14px] font-bold text-gray-800 uppercase tracking-widest">
                            Manage Job Postings
                        </h2>
                        <Button
                            onClick={() => navigate('/dashboard/website/jobs/add')}
                            className="bg-[#154c4c] hover:bg-[#0f3838] text-white gap-2 rounded-sm px-6 h-10 text-[11px] font-bold transition-all border-none uppercase tracking-wider"
                        >
                            + Add New Job
                        </Button>
                    </div>

                    <div className="p-6">
                        <div className="overflow-x-auto rounded-sm border border-gray-200">
                            <Table className="border-collapse w-full">
                                <TableHeader>
                                    <TableRow className="bg-[#f1f5f9] hover:bg-[#f1f5f9] border-b border-gray-200">
                                        <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-center w-16">#</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Title</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Company</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-center">Logo</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-center">Poster</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Salary Range</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-left">Apply By</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 border-r border-gray-200 text-center">Status</TableHead>
                                        <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4 px-6 text-center">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredJobs.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={9} className="py-24 text-center border-b border-gray-100 italic text-gray-400">
                                                <div className="flex flex-col items-center gap-2">
                                                    <Briefcase size={48} className="text-gray-200" />
                                                    <span className="text-sm font-medium">No jobs found</span>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        filteredJobs.map((row, index) => (
                                            <TableRow key={row.id} className="hover:bg-gray-50/50">
                                                <TableCell className="py-4 px-6 text-[12px] font-medium text-gray-500 border-r border-gray-200 text-center">{index + 1}</TableCell>
                                                <TableCell className="py-4 px-6 text-[12px] font-bold text-gray-700 border-r border-gray-200">{row.title}</TableCell>
                                                <TableCell className="py-4 px-6 text-[12px] text-gray-600 border-r border-gray-200">{row.companyName || '-'}</TableCell>
                                                <TableCell className="py-4 px-6 border-r border-gray-200 text-center">
                                                    <div className="w-12 h-8 bg-gray-50 rounded-sm border border-gray-100 flex items-center justify-center mx-auto overflow-hidden">
                                                        {row.companyLogo ? (
                                                            <img src={row.companyLogo} alt="Logo" className="w-full h-full object-contain" />
                                                        ) : (
                                                            <ImageIcon size={14} className="text-gray-200" />
                                                        )}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="py-4 px-6 border-r border-gray-200 text-center">
                                                    <div className="w-12 h-14 bg-gray-50 rounded-sm border border-gray-100 flex items-center justify-center mx-auto overflow-hidden">
                                                        {row.poster ? (
                                                            <img src={row.poster} alt="Poster" className="w-full h-full object-cover" />
                                                        ) : (
                                                            <ImageIcon size={16} className="text-gray-200" />
                                                        )}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="py-4 px-6 text-[12px] text-gray-600 border-r border-gray-200">{row.salary || '-'}</TableCell>
                                                <TableCell className="py-4 px-6 text-[11px] text-gray-500 border-r border-gray-200 uppercase">{row.deadline || '-'}</TableCell>
                                                <TableCell className="py-4 px-6 border-r border-gray-200 text-center">
                                                    <CustomBlueSwitch checked={row.status} onCheckedChange={() => handleToggleStatus(row)} />
                                                </TableCell>
                                                <TableCell className="py-4 px-6">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button
                                                            onClick={() => navigate('/dashboard/website/jobs/add', { state: { job: row } })}
                                                            className="h-8 w-8 bg-[#3b82f6] text-white rounded-sm flex items-center justify-center hover:bg-blue-600 transition-colors shadow-sm"
                                                        >
                                                            <Edit2 size={14} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(row.id)}
                                                            className="h-8 w-8 bg-[#ef4444] text-white rounded-sm flex items-center justify-center hover:bg-red-600 transition-colors shadow-sm"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
