import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    Palmtree,
    Plus,
    Search,
    Filter,
    RotateCcw,
    Calendar,
    CalendarCheck,
    Clock,
    X,
    ArrowLeft,
    CheckCircle2,
    Trash2,
    Settings2
} from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addHoliday, deleteHoliday } from '@/store/attendanceSlice';

export default function HolidaysPage() {
    const holidays = useSelector((state) => state.attendance.holidays || []);
    const dispatch = useDispatch();
    const [view, setView] = useState('list'); // 'list' or 'add'

    const [formData, setFormData] = useState({
        title: '',
        type: '',
        description: '',
        startDate: '',
        endDate: '',
        status: 'Active',
        isRecurring: false
    });

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(addHoliday(formData));
        setView('list');
        setFormData({ title: '', type: '', description: '', startDate: '', endDate: '', status: 'Active', isRecurring: false });
    };

    const stats = [
        { label: "TOTAL HOLIDAYS", value: holidays.length, icon: Calendar, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-500" },
        { label: "ACTIVE", value: holidays.filter(h => h.status === 'Active').length, icon: CalendarCheck, color: "text-green-500", bg: "bg-green-50", border: "border-green-500" },
        { label: "CURRENT", value: "0", icon: Clock, color: "text-red-500", bg: "bg-red-50", border: "border-red-500" },
        { label: "UPCOMING", value: "0", icon: Clock, color: "text-yellow-500", bg: "bg-yellow-50", border: "border-yellow-500" },
    ];

    if (view === 'add') {
        return (
            <div className="space-y-6">
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] p-6 rounded-2xl text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                            <Plus size={32} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Add New Holiday</h1>
                            <p className="text-blue-100 text-sm opacity-90">Create a new holiday entry for your institution calendar</p>
                        </div>
                    </div>
                    <Button
                        onClick={() => setView('list')}
                        className="bg-white/90 hover:bg-white text-gray-800 px-6 py-2 rounded-xl flex items-center gap-2 shadow-lg border-none"
                    >
                        <ArrowLeft size={18} />
                        Back to Holidays
                    </Button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
                    <form onSubmit={handleCreate} className="space-y-8">
                        {/* Basic Information */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-2 font-bold text-gray-800 border-b pb-4">
                                <CheckCircle2 size={18} className="text-blue-600" />
                                <span>Basic Information</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Holiday Title <span className="text-red-500">*</span></label>
                                    <Input
                                        required
                                        placeholder="Enter holiday title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Holiday Type <span className="text-red-500">*</span></label>
                                    <select
                                        required
                                        className="w-full h-10 rounded-md border border-gray-200 px-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="National">National</option>
                                        <option value="Government">Government</option>
                                        <option value="Regional">Regional</option>
                                        <option value="Institute">Institute</option>
                                        <option value="Optional">Optional</option>
                                    </select>
                                    <p className="text-[10px] text-gray-400">National: Government declared holidays | Regional: State/Local holidays | Institute: Internal holidays | Optional: Flexible</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Description</label>
                                <textarea
                                    className="w-full h-24 rounded-md border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                    placeholder="Brief description about the holiday"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                        </section>

                        {/* Date Information */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-2 font-bold text-gray-800 border-b pb-4">
                                <Calendar size={18} className="text-blue-600" />
                                <span>Date Information</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Start Date <span className="text-red-500">*</span></label>
                                    <Input
                                        required
                                        type="date"
                                        value={formData.startDate}
                                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">End Date <span className="text-red-500">*</span></label>
                                    <Input
                                        required
                                        type="date"
                                        value={formData.endDate}
                                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Display Settings */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-2 font-bold text-gray-800 border-b pb-4">
                                <Settings2 size={18} className="text-blue-600" />
                                <span>Display Settings</span>
                            </div>
                            <div className="max-w-xs space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Status <span className="text-red-500">*</span></label>
                                <select
                                    required
                                    className="w-full h-10 rounded-md border border-gray-200 px-3 text-sm"
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </section>

                        {/* Recurring Settings */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-2 font-bold text-gray-800 border-b pb-4">
                                <RotateCcw size={18} className="text-blue-600" />
                                <span>Recurring Settings</span>
                            </div>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    checked={formData.isRecurring}
                                    onChange={(e) => setFormData({ ...formData, isRecurring: e.target.checked })}
                                />
                                <span className="text-sm font-medium text-gray-700">This is a recurring holiday</span>
                            </label>
                        </section>

                        <div className="flex justify-end gap-4 pt-8 border-t border-gray-100">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setView('list')}
                                className="bg-orange-600 hover:bg-orange-700 text-white border-none px-10 h-11"
                            >
                                <X size={18} className="mr-2" />
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-10 h-11"
                            >
                                <Plus size={18} className="mr-2" />
                                Create Holiday
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] p-6 rounded-2xl text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                        <Palmtree size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Holiday Management</h1>
                        <p className="text-blue-100 text-sm opacity-90">Manage institutional holidays, events, and special occasions</p>
                    </div>
                </div>
                <Button
                    onClick={() => setView('add')}
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-2 rounded-xl flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 border-none"
                >
                    <Plus size={18} />
                    Add New Holiday
                </Button>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className={`absolute top-0 left-0 w-1 h-full ${stat.border.replace('border-', 'bg-')}`}></div>
                        <div className="flex flex-col">
                            <div className={`${stat.bg} ${stat.color} p-2 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                                <stat.icon size={20} />
                            </div>
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                            <span className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-9 space-y-6">
                    {/* Filters & Search */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-6 text-gray-800 font-bold border-b pb-4">
                            <Filter size={18} />
                            <span>Filters & Search</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase">Type</label>
                                <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>All Types</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase">Status</label>
                                <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>All Status</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase">Year</label>
                                <select className="w-full h-10 rounded-lg border border-gray-200 px-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>All Years</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase">Search</label>
                                <Input placeholder="Title, description..." className="h-10 rounded-lg" />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white min-w-[120px] rounded-lg">
                                <Search size={16} className="mr-2" />
                                Apply Filters
                            </Button>
                            <Button variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50 min-w-[100px] rounded-lg">
                                <X size={16} className="mr-2" />
                                Clear
                            </Button>
                        </div>
                    </div>

                    {/* Holidays List */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] p-4 flex items-center gap-2 text-white font-bold">
                            <div className="bg-white/20 p-1.5 rounded-lg">
                                <Search size={16} />
                            </div>
                            <span>Holidays List</span>
                        </div>
                        <div className="overflow-x-auto min-h-[300px]">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                                        <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 px-6">Holiday Details</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Date Range</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Type</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-xs uppercase py-5">Status</TableHead>
                                        <TableHead className="font-bold text-gray-800 text-xs uppercase py-5 text-center">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {holidays.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={5} className="py-20 text-center">
                                                <div className="flex flex-col items-center justify-center text-gray-400">
                                                    <div className="bg-gray-100 p-4 rounded-2xl mb-4 text-gray-400">
                                                        <Calendar size={48} />
                                                    </div>
                                                    <h3 className="text-lg font-bold text-gray-600">No Holidays Found</h3>
                                                    <p className="text-sm">No holidays match your current filters. Try adjusting your search criteria.</p>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        holidays.map((h) => (
                                            <TableRow key={h.id}>
                                                <TableCell className="px-6">
                                                    <div>
                                                        <p className="font-bold text-gray-800">{h.title}</p>
                                                        <p className="text-xs text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-xs">{h.description}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-sm text-gray-600">
                                                    {h.startDate} to {h.endDate}
                                                </TableCell>
                                                <TableCell>
                                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
                                                        {h.type}
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${h.status === 'Active' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'
                                                        }`}>
                                                        {h.status}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                        onClick={() => dispatch(deleteHoliday(h.id))}
                                                    >
                                                        <Trash2 size={16} />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>

                {/* Sidebar Content */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                        <div className="flex items-center gap-2 mb-6 font-bold text-gray-800 border-b pb-4 text-sm">
                            <CalendarCheck size={16} className="text-blue-600" />
                            <span>Upcoming Holidays</span>
                        </div>
                        <div className="flex flex-col items-center justify-center py-10 text-center text-gray-400">
                            <div className="bg-gray-50 p-3 rounded-lg mb-3">
                                <RotateCcw size={24} />
                            </div>
                            <p className="text-sm font-medium">No upcoming holidays</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
