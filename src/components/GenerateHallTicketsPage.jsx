import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Calendar, Clock, CheckCircle2 } from "lucide-react";

const steps = [
    { id: 1, label: 'Select Course' },
    { id: 2, label: 'Choose Semester' },
    { id: 3, label: 'Set Schedule' },
    { id: 4, label: 'Select Students' },
];

export default function GenerateHallTicketsPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedCourse, setSelectedCourse] = useState("");

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Generate Hall Tickets</h1>
            </div>

            {/* Stepper */}
            <div className="flex items-center justify-center max-w-4xl mx-auto mb-12">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div className="flex flex-col items-center relative group">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 z-10 ${currentStep >= step.id
                                ? "bg-blue-600 border-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                                : "bg-white border-gray-200 text-gray-400"
                                }`}>
                                {currentStep > step.id ? <CheckCircle2 size={20} /> : step.id}
                            </div>
                            <span className={`absolute -bottom-7 w-max text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${currentStep >= step.id ? "text-blue-600" : "text-gray-400"
                                }`}>
                                {step.label}
                            </span>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`h-[2px] w-24 mx-2 transition-colors duration-300 ${currentStep > step.id ? "bg-blue-600" : "bg-gray-100"
                                }`} />
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {/* Step 1: Select Course */}
                <div className="bg-white rounded-2xl shadow-sm border-2 border-blue-500 overflow-hidden">
                    <div className="p-1 bg-blue-500/5">
                        <div className="flex items-center gap-3 p-4">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">1</div>
                            <h2 className="font-bold text-gray-800 text-base">Select Course</h2>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="relative">
                            <select
                                className="w-full h-12 rounded-xl border border-gray-100 bg-gray-50/30 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer transition-all"
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                            >
                                <option value="">Choose a course...</option>
                                <option>Certificate in Vlsi Design Verification(S-VDV-5786)</option>
                                <option>Certificate in Python Full Stack Web Development(S-PFSWD-3677)</option>
                                <option>Advance Diploma in Computer Science(M-CS-7090)</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {selectedCourse && (
                    <>
                        {/* Step 3: Set Exam Details */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="p-1 border-b border-gray-50">
                                <div className="flex items-center gap-3 p-4">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">3</div>
                                    <h2 className="font-bold text-gray-800 text-base">Set Exam Details</h2>
                                </div>
                            </div>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Exam Date</label>
                                    <div className="relative">
                                        <Input type="date" className="h-11 bg-gray-50/30 border-gray-100 rounded-xl text-sm" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Start Time</label>
                                    <Input type="time" className="h-11 bg-gray-50/30 border-gray-100 rounded-xl text-sm" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">End Time</label>
                                    <Input type="time" className="h-11 bg-gray-50/30 border-gray-100 rounded-xl text-sm" />
                                </div>
                            </div>
                        </div>

                        {/* Step 4: Select Students */}
                        <div className="bg-white rounded-2xl shadow-sm border-2 border-blue-500 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-700">
                            <div className="p-1 bg-blue-500/5">
                                <div className="flex items-center gap-3 p-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">4</div>
                                    <h2 className="font-bold text-gray-800 text-base">Select Students</h2>
                                </div>
                            </div>
                            <div className="p-2">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-[#f8fafc] border-b border-gray-100">
                                            <TableHead className="w-12 px-6 py-4">
                                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                            </TableHead>
                                            <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4">Photo</TableHead>
                                            <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4">Student Name</TableHead>
                                            <TableHead className="font-bold text-gray-600 text-[11px] uppercase py-4">Email</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell colSpan={4} className="py-12 text-center">
                                                <p className="text-gray-400 text-sm font-medium italic">No students found</p>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>

                        <div className="flex justify-center pt-4">
                            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-10 h-12 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all transform hover:scale-105">
                                <FileText size={18} />
                                Generate Hall Tickets
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}






