import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Info } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updateAboutSettings } from '@/store/websiteSlice';

export default function WebsiteAboutPage() {
    const settings = useSelector((state) => state.website.aboutSettings);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(settings);

    const handleUpdate = () => {
        dispatch(updateAboutSettings(formData));
        alert("About section updated successfully!");
    };

    return (
        <div className="space-y-6 pb-10 font-sans">
            <h1 className="text-xl font-bold text-gray-800">Edit About Section</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {/* Image Inputs */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                            Main Image URL <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Input
                            value={formData.image1}
                            onChange={e => setFormData({ ...formData, image1: e.target.value })}
                            placeholder="https://..."
                            className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                            Image 2 URL (Optional)
                        </label>
                        <Input
                            value={formData.image2}
                            onChange={e => setFormData({ ...formData, image2: e.target.value })}
                            placeholder="https://..."
                            className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                            Image 3 URL (Optional)
                        </label>
                        <Input
                            value={formData.image3}
                            onChange={e => setFormData({ ...formData, image3: e.target.value })}
                            placeholder="https://..."
                            className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </div>

                    {/* Subtitle */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                            Subtitle <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Input
                            value={formData.subtitle}
                            onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                            className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </div>

                    {/* Title */}
                    <div className="md:col-span-2 space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                            Title <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Input
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                        <div className="flex items-center gap-1 text-[10px] text-gray-400 italic bg-blue-50/50 px-2 py-1 rounded w-fit">
                            <Info size={12} className="text-blue-500" />
                            Use &lt;br /&gt; for line breaks.
                        </div>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2 space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                            Description <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Textarea
                            className="min-h-[120px] bg-gray-50/50 border-gray-100 rounded-xl text-sm leading-relaxed"
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    {/* Features */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-50">
                        {/* Feature 1 */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Feature One</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase">Icon (Name)</label>
                                    <Input value={formData.feature1Icon} onChange={e => setFormData({ ...formData, feature1Icon: e.target.value })} className="h-10 bg-gray-50/30 rounded-lg text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase">Title</label>
                                    <Input value={formData.feature1Title} onChange={e => setFormData({ ...formData, feature1Title: e.target.value })} className="h-10 bg-gray-50/30 rounded-lg text-sm" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase">Short Description</label>
                                <Textarea value={formData.feature1Desc} onChange={e => setFormData({ ...formData, feature1Desc: e.target.value })} className="h-20 bg-gray-50/30 rounded-lg text-sm" />
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Feature Two</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase">Icon (Name)</label>
                                    <Input value={formData.feature2Icon} onChange={e => setFormData({ ...formData, feature2Icon: e.target.value })} className="h-10 bg-gray-50/30 rounded-lg text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase">Title</label>
                                    <Input value={formData.feature2Title} onChange={e => setFormData({ ...formData, feature2Title: e.target.value })} className="h-10 bg-gray-50/30 rounded-lg text-sm" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase">Short Description</label>
                                <Textarea value={formData.feature2Desc} onChange={e => setFormData({ ...formData, feature2Desc: e.target.value })} className="h-20 bg-gray-50/30 rounded-lg text-sm" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-50">
                    <Button
                        onClick={handleUpdate}
                        className="bg-[#f2ca52] hover:bg-[#e0bb43] text-[#0f172a] px-10 h-12 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all border-none"
                    >
                        <Check size={18} />
                        Update About Content
                    </Button>
                </div>
            </div>
        </div>
    );
}
