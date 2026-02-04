import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Search, BookOpen, Calendar } from "lucide-react";

export default function AddAttendancePage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Student Attendance</h1>

            {/* Header Banner */}
            <div className="bg-[#1e293b] p-6 rounded-2xl text-white shadow-xl">
                <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                        <Calendar size={28} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Mark Attendance</h2>
                        <p className="text-gray-400 text-sm">Select a batch and date to record student attendance</p>
                    </div>
                </div>
            </div>

            {/* Selection Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-6 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Select Batch</label>
                        <select className="w-full h-12 rounded-xl border border-gray-200 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50/50">
                            <option>Choose a batch...</option>
                        </select>
                    </div>
                    <div className="md:col-span-4 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Select Date</label>
                        <Input type="date" className="h-12 rounded-xl border border-gray-200 bg-gray-50/50" />
                    </div>
                    <div className="md:col-span-2">
                        <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10 font-bold uppercase tracking-wide">
                            <Search size={18} />
                            Show
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom Tip */}
            <div className="p-10 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-3xl">
                <p>After clicking "Show", the student list will appear here for marking attendance.</p>
            </div>
        </div>
    );
}
