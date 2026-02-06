import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Image as ImageIcon, Edit, Palette, Calendar } from "lucide-react";

const templates = [
    { id: 1, title: 'certificate image', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '30 Jan 2026, 02:53 PM', hasImage: true },
    { id: 2, title: 'Diploma Image', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '30 Jan 2026, 02:53 PM' },
    { id: 3, title: 'marksheet image', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '27 Jan 2026, 04:28 PM' },
    { id: 4, title: 'admissionform image', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '27 Jan 2026, 04:28 PM' },
    { id: 5, title: 'idcard image', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '27 Jan 2026, 04:28 PM' },
    { id: 6, title: 'Typing Certificate', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '27 Jan 2026, 04:28 PM', hasDesign: true },
    { id: 7, title: 'ATC Certificate', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '27 Jan 2026, 04:28 PM' },
    { id: 8, title: 'hallticket image', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '27 Jan 2026, 04:28 PM', hasDesign: true },
    { id: 9, title: 'feesreceipt image', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '27 Jan 2026, 04:28 PM' },
    { id: 10, title: 'Performance Card', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '27 Jan 2026, 04:28 PM' },
    { id: 11, title: 'Expense Receipt', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '27 Jan 2026, 04:28 PM' },
    { id: 12, title: 'Birthday Poster', type: 'PORTRAIT', created: '27 Jan 2026, 04:28 PM', updated: '27 Jan 2026, 04:28 PM' },
];

export default function BackgroundImagesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Background Images</h1>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-gray-700">Background Images</h2>
                    <p className="text-sm text-gray-500 italic -mt-2">Manage your A4-sized background templates</p>
                    <div className="relative max-w-4xl">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={18} />
                        </div>
                        <Input
                            placeholder="Search background images.."
                            className="pl-10 h-11 bg-white border-gray-100 rounded-lg text-sm shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {templates.map((tpl) => (
                    <div key={tpl.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden group hover:shadow-md transition-all">
                        {/* Preview Area */}
                        <div className="relative aspect-[3/4] bg-gray-50 p-4 border-b border-gray-50 flex items-center justify-center">
                            <div className="flex flex-col items-center justify-between w-full h-full">
                                <div className="flex items-center justify-between w-full">
                                    <span className="text-sm font-bold text-gray-700 capitalize break-all mr-2">{tpl.title}</span>
                                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded tracking-widest leading-none">
                                        {tpl.type}
                                    </span>
                                </div>

                                {tpl.hasImage ? (
                                    <div className="flex-1 flex items-center justify-center w-full px-2">
                                        <img
                                            src="https://images.unsplash.com/photo-1541462608141-ad4d61d44e0b?auto=format&fit=crop&q=80&w=400"
                                            alt={tpl.title}
                                            className="w-full h-40 object-cover rounded shadow-md group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex-1 flex flex-col items-center justify-center text-gray-300 gap-2">
                                        <ImageIcon size={48} className="opacity-50" />
                                        <p className="text-[10px] font-medium italic">No Image Uploaded</p>
                                    </div>
                                )}

                                <div className="w-full space-y-2 mt-auto">
                                    <div className="flex items-start gap-1.5 order-1">
                                        <Calendar size={12} className="text-gray-400 shrink-0 mt-0.5" />
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-bold text-gray-500 leading-none">Created: {tpl.created.split(',')[0]}</span>
                                            <span className="text-[9px] font-bold text-gray-400 leading-tight">{tpl.created.split(',')[1]}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-1.5 order-2">
                                        <Calendar size={12} className="text-gray-400 shrink-0 mt-0.5" />
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-bold text-gray-500 leading-none">Updated: {tpl.updated.split(',')[0]}</span>
                                            <span className="text-[9px] font-bold text-gray-400 leading-tight">{tpl.updated.split(',')[1]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-3 bg-gray-50/30 flex gap-2">
                            <Button className={cn(
                                "flex-1 h-9 bg-[#dcf0fb] hover:bg-[#c9e7f7] text-[#0284c7] border-none flex items-center justify-center gap-2 rounded text-xs font-bold",
                                tpl.hasDesign && "flex-1"
                            )}>
                                <Edit size={14} />
                                Edit
                            </Button>
                            {tpl.hasDesign && (
                                <Button className="flex-1 h-9 bg-[#ecfdf5] hover:bg-[#d1fae5] text-[#059669] border-none flex items-center justify-center gap-2 rounded text-xs font-bold">
                                    <Palette size={14} />
                                    Design
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Utility to handle conditional classes since I'm using vanilla CSS as much as possible but lucide/shadcn components might expect it
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}






