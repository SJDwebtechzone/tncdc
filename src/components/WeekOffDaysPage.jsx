import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Calendar,
    Briefcase,
    Palmtree,
    Clock,
    Check,
    RotateCcw,
    Save,
    Settings2,
    Info
} from "lucide-react";

import { useSelector, useDispatch } from 'react-redux';
import { updateWeekOff } from '@/store/attendanceSlice';

export default function WeekOffDaysPage() {
    const holidays = useSelector((state) => state.attendance.weekOffDays || []);
    const dispatch = useDispatch();

    const setHolidays = (newHolidays) => {
        dispatch(updateWeekOff(newHolidays));
    };

    const days = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];

    const toggleDay = (day) => {
        if (holidays.includes(day)) {
            setHolidays(holidays.filter(d => d !== day));
        } else {
            setHolidays([...holidays, day]);
        }
    };

    const workingDaysCount = days.length - holidays.length;
    const workingPercentage = Math.round((workingDaysCount / 7) * 100);
    const holidayPercentage = Math.round((holidays.length / 7) * 100);

    return (
        <div className="space-y-6">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] p-6 rounded-2xl text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                        <Calendar size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Week Off Management</h1>
                        <p className="text-blue-100 text-sm opacity-90">Configure weekly holidays and working days for your institution</p>
                    </div>
                </div>
                <Button variant="secondary" className="bg-white/90 hover:bg-white text-purple-700 font-bold px-6 py-2 rounded-xl flex items-center gap-2">
                    <Settings2 size={18} />
                    Toggle All
                </Button>
            </div>

            {/* Stats and Current Config Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Stats Cards */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 h-fit">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-green-500">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <Briefcase size={20} />
                            </div>
                        </div>
                        <div className="text-4xl font-bold text-gray-800">{workingDaysCount}</div>
                        <div className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-wider">Working Days</div>
                        <div className="text-xs text-gray-400 mt-1">{workingPercentage}% of week</div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-red-500">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                <Palmtree size={20} />
                            </div>
                        </div>
                        <div className="text-4xl font-bold text-gray-800">{holidays.length}</div>
                        <div className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-wider">Holiday Days</div>
                        <div className="text-xs text-gray-400 mt-1">{holidayPercentage}% of week</div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-blue-500">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <Clock size={20} />
                            </div>
                        </div>
                        <div className="text-4xl font-bold text-gray-800">7</div>
                        <div className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-wider">Total Days</div>
                        <div className="text-xs text-gray-400 mt-1">Full week</div>
                    </div>
                </div>

                {/* Current Configuration Sidebar Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                    <div className="flex items-center gap-2 mb-6 font-bold text-gray-800 border-b pb-4 text-sm">
                        <Settings2 size={16} className="text-purple-600" />
                        <span>Current Configuration</span>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase mb-2">
                                <Briefcase size={14} />
                                <span>Working Days</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {days.filter(d => !holidays.includes(d)).map(day => (
                                    <span key={day} className="px-2 py-0.5 bg-green-50 text-green-700 border border-green-100 rounded text-[10px] font-medium">
                                        {day}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase mb-2">
                                <Palmtree size={14} />
                                <span>Holiday Days</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {holidays.map(day => (
                                    <span key={day} className="px-2 py-0.5 bg-red-50 text-red-700 border border-red-100 rounded text-[10px] font-medium">
                                        {day}
                                    </span>
                                ))}
                                {holidays.length === 0 && <span className="text-[10px] text-gray-400">No holidays set</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Select Holiday Days Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                    <Calendar size={18} className="text-gray-700" />
                    <h2 className="text-lg font-bold text-gray-800">Select Holiday Days</h2>
                </div>
                <p className="text-xs text-gray-400 mb-8">Click on days to toggle between working day and holiday. Selected days will be marked as holidays.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {days.map((day) => {
                        const isHoliday = holidays.includes(day);
                        return (
                            <div
                                key={day}
                                onClick={() => toggleDay(day)}
                                className={`relative cursor-pointer group transition-all transform hover:scale-[1.02] active:scale-95 p-6 rounded-xl border flex flex-col items-center justify-center text-center gap-3 h-40 ${isHoliday
                                    ? 'bg-[#dc2626] border-red-600 text-white shadow-lg shadow-red-500/20'
                                    : 'bg-[#22c55e] border-green-600 text-white shadow-lg shadow-green-500/20'
                                    }`}
                            >
                                <div className={`absolute top-3 right-3 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${isHoliday ? 'bg-white border-white text-red-600' : 'bg-transparent border-white/50 text-transparent'
                                    }`}>
                                    <Check size={14} strokeWidth={4} />
                                </div>
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                    {isHoliday ? <Palmtree size={24} /> : <Briefcase size={24} />}
                                </div>
                                <div className="space-y-1">
                                    <div className="font-bold text-lg">{day}</div>
                                    <div className="text-[10px] uppercase font-bold opacity-80">{isHoliday ? 'Holiday' : 'Working Day'}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-6 text-gray-800 font-bold border-b pb-4">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                    <span>Quick Actions</span>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 h-11 rounded-xl flex items-center gap-2 shadow-lg shadow-indigo-500/20">
                        <Save size={18} />
                        Save Configuration
                    </Button>
                    <Button variant="outline" onClick={() => setHolidays(['Saturday', 'Sunday'])} className="border-[#c48c58] text-[#92400e] hover:bg-[#92400e]/5 px-6 h-11 rounded-xl bg-[#c48c58]/5 flex items-center gap-2">
                        <RotateCcw size={18} />
                        Reset to Default
                    </Button>
                    <Button variant="outline" onClick={() => setHolidays([])} className="border-green-600 text-green-700 hover:bg-green-50 px-6 h-11 rounded-xl bg-green-50/50 flex items-center gap-2 font-bold">
                        <Briefcase size={18} />
                        All Working
                    </Button>
                    <Button variant="outline" onClick={() => setHolidays([...days])} className="border-red-600 text-red-700 hover:bg-red-50 px-6 h-11 rounded-xl bg-red-50/50 flex items-center gap-2 font-bold">
                        <Palmtree size={18} />
                        All Holidays
                    </Button>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                    <Info size={12} />
                    <span>Changes will be applied immediately after saving. Default: Saturday-Sunday as holidays.</span>
                </div>
            </div>
        </div>
    );
}
