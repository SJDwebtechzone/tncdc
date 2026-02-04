import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Check, Info } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updateBannerSettings } from '@/store/websiteSlice';

export default function WebsiteBannersPage() {
    const settings = useSelector((state) => state.website.bannerSettings);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(settings);

    const handleUpdate = () => {
        dispatch(updateBannerSettings(formData));
        alert("Banner settings updated successfully!");
    };

    return (
        <div className="space-y-6 pb-10">
            <h1 className="text-xl font-bold text-gray-800 font-sans">Banner / Slider Management</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
                {/* Display Mode Toggle */}
                <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100 w-fit">
                    <span className="text-sm font-bold text-gray-700">Display Mode: <span className="text-amber-500 ml-2 uppercase tracking-wider">{formData.displayMode}</span></span>
                    <Switch
                        checked={formData.displayMode === 'slider'}
                        onCheckedChange={(checked) => setFormData({ ...formData, displayMode: checked ? 'slider' : 'banner' })}
                        className="data-[state=checked]:bg-blue-600"
                    />
                    <span className="text-sm font-medium text-gray-400">Slider Mode</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-sans">
                    {/* Main Image */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                            Main Image URL <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Input
                            value={formData.image}
                            onChange={e => setFormData({ ...formData, image: e.target.value })}
                            placeholder="https://..."
                            className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                        <p className="text-[10px] text-gray-400 italic">Recommended: 1200x1400 pixels.</p>
                    </div>

                    {/* Badge Text */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                            Badge Text <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Input
                            value={formData.badgeText}
                            onChange={e => setFormData({ ...formData, badgeText: e.target.value })}
                            className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </div>

                    {/* Badge Icon */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                            Badge Icon (Emoji) <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                            <Input
                                value={formData.badgeIcon}
                                onChange={e => setFormData({ ...formData, badgeIcon: e.target.value })}
                                className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                        <p className="text-[10px] text-gray-400 italic">Enter an emoji (e.g. 🏆, ⭐, 🎓).</p>
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
                            Use &lt;br /&gt; for line breaks
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
                        <div className="flex items-center gap-1 text-[10px] text-gray-400 italic bg-blue-50/50 px-2 py-1 rounded w-fit">
                            <Info size={12} className="text-blue-500" />
                            Use &lt;strong&gt; for bold text.
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <Button
                        onClick={handleUpdate}
                        className="bg-[#f2ca52] hover:bg-[#e0bb43] text-[#0f172a] px-10 h-12 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95 border-none"
                    >
                        <Check size={18} />
                        Update Banner & Slider Settings
                    </Button>
                </div>
            </div>
        </div>
    );
}
