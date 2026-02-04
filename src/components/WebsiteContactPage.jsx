import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, Phone, MapPin, Globe, Info } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updateContactSettings } from '@/store/websiteSlice';

const Label = ({ children, className }) => <label className={`block text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1 ${className}`}>{children}</label>;

export default function WebsiteContactPage() {
    const settings = useSelector((state) => state.website.contactSettings);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(settings);

    const handleUpdate = () => {
        dispatch(updateContactSettings(formData));
        alert("Contact details updated successfully!");
    };

    return (
        <div className="space-y-6 pb-12 font-sans">
            <h1 className="text-xl font-bold text-gray-800">Edit Contact Information</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-10">
                {/* General Header */}
                <div className="space-y-4">
                    <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2 flex items-center gap-2">
                        <Globe size={18} className="text-blue-600" />
                        Main Heading
                    </h2>
                    <div className="space-y-2">
                        <Label>Contact Title <span className="text-red-500">*</span></Label>
                        <Input
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            className="h-12 bg-gray-50/50 border-gray-100 rounded-xl text-sm font-bold"
                        />
                        <div className="flex items-center gap-1 text-[10px] text-gray-400 italic bg-blue-50 px-2 py-1 rounded w-fit">
                            <Info size={12} className="text-blue-500" />
                            Use &lt;br /&gt; for line breaks.
                        </div>
                    </div>
                </div>

                {/* Phone & Email */}
                <div className="space-y-6">
                    <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2 flex items-center gap-2">
                        <Phone size={18} className="text-blue-600" />
                        Communication Channels
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Primary Phone <span className="text-red-500">*</span></Label>
                            <Input
                                value={formData.phone1}
                                onChange={e => setFormData({ ...formData, phone1: e.target.value })}
                                className="h-12 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Secondary Phone</Label>
                            <Input
                                value={formData.phone2}
                                onChange={e => setFormData({ ...formData, phone2: e.target.value })}
                                className="h-12 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>WhatsApp Hotline</Label>
                            <Input
                                value={formData.whatsapp}
                                onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                                className="h-12 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Official Email <span className="text-red-500">*</span></Label>
                            <Input
                                value={formData.email1}
                                onChange={e => setFormData({ ...formData, email1: e.target.value })}
                                className="h-12 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Physical Address & Map */}
                <div className="space-y-6">
                    <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2 flex items-center gap-2">
                        <MapPin size={18} className="text-blue-600" />
                        Our Headquarters
                    </h2>
                    <div className="space-y-2">
                        <Label>Full Address <span className="text-red-500">*</span></Label>
                        <Textarea
                            value={formData.location}
                            onChange={e => setFormData({ ...formData, location: e.target.value })}
                            className="min-h-[100px] bg-gray-50/50 border-gray-100 rounded-xl text-sm p-4 leading-relaxed"
                        />
                    </div>
                    <div className="space-y-2 pt-4">
                        <Label>Google Maps Iframe <span className="text-red-500">*</span></Label>
                        <Textarea
                            value={formData.mapIframe}
                            onChange={e => setFormData({ ...formData, mapIframe: e.target.value })}
                            placeholder="Paste <iframe>...</iframe> here"
                            className="min-h-[120px] bg-sky-50/20 border-sky-100 rounded-xl text-xs font-mono p-4"
                        />
                        <p className="text-[10px] text-gray-400 italic">This will display an interactive map on the contact page.</p>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-50 flex justify-end">
                    <Button
                        onClick={handleUpdate}
                        className="bg-[#f2ca52] hover:bg-[#e0bb43] text-[#0f172a] h-12 px-12 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl transition-all active:scale-95 border-none flex items-center gap-3"
                    >
                        <Check size={20} strokeWidth={3} />
                        Update Contact Section
                    </Button>
                </div>
            </div>
        </div>
    );
}
