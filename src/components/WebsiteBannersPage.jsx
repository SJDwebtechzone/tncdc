import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useSelector, useDispatch } from 'react-redux';
import { updateBannerSettings } from '@/store/websiteSlice';

export default function WebsiteBannersPage() {
    const settings = useSelector((state) => state.website.bannerSettings);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(settings);

    const bannerFileRef = useRef(null);

    const handleUpdate = () => {
        dispatch(updateBannerSettings(formData));
        alert("Banner settings updated successfully!");
    };

    const triggerFileSelect = (ref) => {
        if (ref.current) ref.current.click();
    };

    return (
        <div className="space-y-6 font-sans relative pb-10 px-6 pt-4">

            <div className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/30">
                    <h2 className="text-[14px] font-bold text-gray-800 uppercase tracking-widest">
                        Banner / Slider Management
                    </h2>
                </div>

                <div className="p-8 space-y-8">
                    {/* Display Mode Toggle */}
                    <div className="flex items-center gap-4">
                        <span className="text-[11px] font-bold text-gray-700 uppercase tracking-widest">Display Mode:</span>
                        <div className="flex items-center gap-2">
                            <span className={`text-[11px] font-bold uppercase tracking-wider ${formData.displayMode === 'banner' ? 'text-orange-400' : 'text-gray-300'}`}>Banner</span>
                            <Switch
                                checked={formData.displayMode === 'slider'}
                                onCheckedChange={(checked) => setFormData({ ...formData, displayMode: checked ? 'slider' : 'banner' })}
                                className="data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-200"
                            />
                            <span className={`text-[11px] font-bold uppercase tracking-wider ${formData.displayMode === 'slider' ? 'text-orange-400' : 'text-gray-300'}`}>Slider</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Main Image */}
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Main Image <span className="text-red-500">*</span>
                            </label>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                    <input type="file" ref={bannerFileRef} className="hidden" onChange={() => { }} />
                                    <button
                                        type="button"
                                        onClick={() => triggerFileSelect(bannerFileRef)}
                                        className="px-3 h-full bg-gray-200 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                                    >
                                        Choose File
                                    </button>
                                    <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                </div>
                                <p className="text-[9px] text-gray-400 italic px-1 font-sans font-bold leading-tight">
                                    Leave blank to keep existing Image. Image must be 1200x1400 pixels.
                                </p>
                            </div>
                        </div>

                        {/* Badge Text */}
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Badge Text <span className="text-red-500">*</span>
                            </label>
                            <Input
                                value={formData.badgeText}
                                onChange={e => setFormData({ ...formData, badgeText: e.target.value })}
                                placeholder="The Leader in Online Learning"
                                className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e]"
                            />
                        </div>
                    </div>

                    {/* Badge Icon (Emoji) */}
                    <div className="space-y-1">
                        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                            Badge Icon (Emoji) <span className="text-red-500">*</span>
                        </label>
                        <Input
                            value={formData.badgeIcon}
                            onChange={e => setFormData({ ...formData, badgeIcon: e.target.value })}
                            placeholder="👤"
                            className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e] max-w-sm"
                        />
                        <p className="text-[9px] text-gray-400 italic px-1 font-bold">
                            Enter an emoji (e.g., 👤, ⭐, 🎓).
                        </p>
                    </div>

                    {/* Title */}
                    <div className="space-y-1">
                        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Build The Skills <br /> To Drive Your Career."
                            className="min-h-[80px] rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e] leading-relaxed p-3 bg-gray-50/20"
                        />
                        <p className="text-[9px] text-gray-400 italic px-1 font-bold">Use &lt;br /&gt; for line breaks.</p>
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <strong>Velit officia consequat.</strong>"
                            className="min-h-[100px] rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#1a237e] leading-relaxed p-3 bg-gray-50/20"
                        />
                        <p className="text-[9px] text-gray-400 italic px-1 font-bold">Use &lt;strong&gt; for bold text.</p>
                    </div>

                    {/* Update Button */}
                    <div className="flex justify-start pt-6 border-t border-gray-100">
                        <Button
                            onClick={handleUpdate}
                            className="bg-[#ebca52] hover:bg-[#d9b942] text-white h-10 text-[11px] font-bold px-10 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                        >
                            Update Banner Section
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
