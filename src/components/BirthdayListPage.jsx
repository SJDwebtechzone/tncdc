import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Gift, Calendar, CalendarDays, Users, Clock, List, Download, Mail, Cake } from "lucide-react";

export default function BirthdayListPage() {
    // Get students from Redux store
    const students = useSelector((state) => state.students?.students || []);
    const [filter, setFilter] = useState("Upcoming (30 Days)");

    // Date Helper Functions
    const getBirthdayDetails = (dobString) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const dob = new Date(dobString);
        const currentYear = today.getFullYear();

        let nextBirthday = new Date(dob);
        nextBirthday.setFullYear(currentYear);
        nextBirthday.setHours(0, 0, 0, 0);

        // If birthday has passed this year, it's next year
        if (nextBirthday < today) {
            nextBirthday.setFullYear(currentYear + 1);
        }

        const timeDiff = nextBirthday.getTime() - today.getTime();
        const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
        const turningAge = nextBirthday.getFullYear() - dob.getFullYear();

        return {
            date: nextBirthday,
            day: nextBirthday.getDate(),
            month: nextBirthday.toLocaleString('default', { month: 'short' }).toUpperCase(),
            fullDateString: nextBirthday.toLocaleDateString(),
            daysLeft,
            turningAge
        };
    };

    // Process students with calculated data
    const processedStudents = useMemo(() => {
        if (!students) return [];
        return students.map(student => {
            const details = getBirthdayDetails(student.dob);
            return { ...student, ...details };
        }).sort((a, b) => a.daysLeft - b.daysLeft);
    }, [students]);

    // Calculate Stats
    const stats = useMemo(() => {
        const todayCount = processedStudents.filter(s => s.daysLeft === 0).length;
        const weekCount = processedStudents.filter(s => s.daysLeft >= 0 && s.daysLeft <= 7).length; // Next 7 days
        const monthCount = processedStudents.filter(s => {
            const today = new Date();
            return s.date.getMonth() === today.getMonth() && s.date.getFullYear() === today.getFullYear();
        }).length;

        return [
            { label: "TODAY", count: todayCount, icon: Gift, color: "bg-red-500", border: "border-t-4 border-red-500" },
            { label: "THIS WEEK", count: weekCount, icon: Calendar, color: "bg-amber-500", border: "border-t-4 border-amber-500" },
            { label: "THIS MONTH", count: monthCount, icon: CalendarDays, color: "bg-blue-500", border: "border-t-4 border-blue-500" },
            { label: "TOTAL STUDENTS", count: students.length, icon: Users, color: "bg-purple-600", border: "border-t-4 border-purple-600" },
        ];
    }, [processedStudents, students.length]);

    const filters = [
        { label: "Today", icon: Gift },
        { label: "This Week", icon: Calendar },
        { label: "This Month", icon: CalendarDays },
        { label: "Upcoming (30 Days)", icon: Clock },
        { label: "All Birthdays", icon: List },
    ];

    // Filter Logic
    const filteredList = processedStudents.filter(student => {
        if (filter === "All Birthdays") return true;
        if (filter === "Today") return student.daysLeft === 0;
        if (filter === "This Week") return student.daysLeft >= 0 && student.daysLeft <= 7;
        if (filter === "This Month") {
            const today = new Date();
            // Check if next birthday falls in current month and year (already handled by getBirthdayDetails returning next valid birthday)
            // But strict "This Month" usually means current calendar month.
            // If birthday is Jan 1 and today is Jan 2, next birthday is next year. So correct logic is based on if nextBirthday occurs in current Month of THIS YEAR.
            // However, getBirthdayDetails puts past birthdays to NEXT year. 
            // So we need to cover:
            // 1. Birthday is in this month AND in future
            // 2. Birthday was in this month AND in past (but this month filter should maybe show them? Usually birthday lists show upcoming).
            // Let's stick to: "Is the next birthday in the current calendar month?"
            return student.date.getMonth() === today.getMonth() && student.date.getFullYear() === today.getFullYear();
        }
        if (filter === "Upcoming (30 Days)") return student.daysLeft >= 0 && student.daysLeft <= 30;
        return false;
    });

    return (
        <div className="space-y-8 font-sans">
            {/* Header Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">🎂</span>
                    <h1 className="text-xl font-bold text-gray-800">Student Birthdays</h1>
                </div>
                <p className="text-sm text-gray-500 ml-10">Celebrate your students' special days and never miss a birthday</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className={`bg-white p-6 rounded-xl shadow-sm ${stat.border} flex flex-col gap-4 min-h-[140px]`}>
                        <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-white shadow-sm`}>
                            <stat.icon size={24} strokeWidth={2.5} />
                        </div>
                        <div>
                            <div className="text-3xl font-extrabold text-gray-800 mb-1">{stat.count}</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-3">
                {filters.map((f) => (
                    <button
                        key={f.label}
                        onClick={() => setFilter(f.label)}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-all shadow-sm
                            ${filter === f.label
                                ? "bg-[#5b50e6] text-white shadow-md hover:bg-[#4a41bd]"
                                : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        <f.icon size={16} /> {f.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            {filteredList.length > 0 ? (
                /* Student List Cards */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredList.map((student) => (
                        <div key={student.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#5b50e6] flex items-center justify-center text-white font-bold text-lg shrink-0">
                                        {student.initials || student.name.charAt(0)}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-gray-800 text-base">{student.name}</h3>
                                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                                            <Mail size={12} />
                                            {student.email}
                                        </div>
                                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-sky-50 text-sky-600 text-xs font-bold rounded-md mt-2">
                                            <Gift size={12} /> Turning {student.turningAge} years
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-3">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#5b50e6] leading-none">{student.day}</div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mt-1">{student.month}</div>
                                    </div>
                                    <div className={`flex items-center gap-1 px-3 py-1 text-white text-[10px] font-bold rounded-full ${student.daysLeft === 0 ? 'bg-red-500' : 'bg-[#5b50e6]'}`}>
                                        <Clock size={10} /> {student.daysLeft === 0 ? "Today" : `${student.daysLeft} days`}
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-[#258ec7] hover:bg-[#1f7ab0] text-white flex items-center justify-center gap-2 font-medium text-sm transition-colors">
                                <Download size={16} /> Poster
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-20 bg-transparent">
                    <div className="mb-4 text-gray-200">
                        <Cake size={80} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-500 mb-1">No Birthdays Found</h3>
                    <p className="text-xs text-gray-400">There are no birthdays matching your selected filter</p>
                </div>
            )}
        </div>
    );
}
