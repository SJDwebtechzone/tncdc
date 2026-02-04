import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit2, Trash2, X, Calendar, MapPin, Clock } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addEvent, deleteEvent } from '@/store/websiteSlice';

export default function WebsiteEventsPage() {
    const events = useSelector((state) => state.website.events || []);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        time: '',
        date: '',
        year: '',
        image: ''
    });

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addEvent(formData));
        setIsModalOpen(false);
        setFormData({ title: '', location: '', time: '', date: '', year: '', image: '' });
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            dispatch(deleteEvent(id));
        }
    };

    return (
        <div className="space-y-6 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-xl font-bold text-gray-800">Manage Events</h1>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all shadow-md"
                >
                    <Plus size={18} />
                    Add New Event
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 relative w-full italic">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search by title..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm italic"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button className="bg-[#1e40af] hover:bg-blue-900 text-white h-11 px-10 rounded-xl font-bold transition-all shadow-md">
                        Search
                    </Button>
                    <Button
                        variant="outline"
                        className="border-orange-100 text-orange-600 hover:bg-orange-50 h-11 px-10 rounded-xl font-bold"
                        onClick={() => setSearchQuery("")}
                    >
                        Reset
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#f8fafc] border-b border-gray-100">
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 w-16 text-center">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Image</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Title</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Location</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Time</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Date</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Year</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredEvents.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={9} className="py-24 text-center">
                                        <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                            <div className="bg-gray-50 p-6 rounded-3xl">
                                                <Plus size={48} className="text-gray-300" />
                                            </div>
                                            <p className="font-bold text-gray-400 italic">No events found. Click "Add New Event" to start.</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredEvents.map((row, index) => (
                                    <TableRow key={row.id} className="hover:bg-gray-50/30 transition-colors">
                                        <TableCell className="py-4 px-6 text-center font-medium text-gray-500">{index + 1}</TableCell>
                                        <TableCell className="py-4">
                                            <div className="w-12 h-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                                                {row.image ? (
                                                    <img src={row.image} alt={row.title} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <Plus size={16} className="text-gray-300" />
                                                    </div>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 font-semibold text-gray-700">{row.title}</TableCell>
                                        <TableCell className="py-4 text-sm text-gray-500">{row.location}</TableCell>
                                        <TableCell className="py-4 text-sm text-gray-500">{row.time}</TableCell>
                                        <TableCell className="py-4 text-sm text-gray-500">{row.date}</TableCell>
                                        <TableCell className="py-4 text-sm text-gray-500">{row.year}</TableCell>
                                        <TableCell className="py-4 text-sm text-gray-500">{row.createdAt}</TableCell>
                                        <TableCell className="py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                                    <Edit2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(row.id)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={18} />
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

            {/* Add Event Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Plus size={24} className="text-blue-600" />
                            Add New Event
                        </h2>

                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Event Title <span className="text-red-500">*</span></label>
                                    <Input
                                        required
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="e.g. Annual Hackathon"
                                        className="h-11 rounded-xl bg-gray-50/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        <Input
                                            value={formData.location}
                                            onChange={e => setFormData({ ...formData, location: e.target.value })}
                                            placeholder="e.g. Chennai"
                                            className="h-11 pl-10 rounded-xl bg-gray-50/50"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Time</label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        <Input
                                            value={formData.time}
                                            onChange={e => setFormData({ ...formData, time: e.target.value })}
                                            placeholder="e.g. 8:00 AM - 5:00 PM"
                                            className="h-11 pl-10 rounded-xl bg-gray-50/50"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        <Input
                                            type="date"
                                            value={formData.date}
                                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                                            className="h-11 pl-10 rounded-xl bg-gray-50/50"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Year</label>
                                    <Input
                                        value={formData.year}
                                        onChange={e => setFormData({ ...formData, year: e.target.value })}
                                        placeholder="e.g. 2026"
                                        className="h-11 rounded-xl bg-gray-50/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 uppercase">Image URL</label>
                                    <Input
                                        value={formData.image}
                                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                                        placeholder="https://..."
                                        className="h-11 rounded-xl bg-gray-50/50"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-8">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 h-11 rounded-xl"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-11 rounded-xl font-bold shadow-lg"
                                >
                                    Save Event
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

