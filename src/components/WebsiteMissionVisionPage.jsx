import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Info, Layout, Video, Eye, Target } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updateMissionVisionSettings } from '@/store/websiteSlice';

const Label = ({ children, className }) => <label className={`block text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1 ${className}`}>{children}</label>;

export default function WebsiteMissionVisionPage() {
    const settings = useSelector((state) => state.website.missionVisionSettings);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(settings);

    const handleUpdate = () => {
        dispatch(updateMissionVisionSettings(formData));
        alert("Mission & Vision sections updated successfully!");
    };

    return (
        <div className="space-y-6 pb-12 font-sans">
            <h1 className="text-xl font-bold text-gray-800 px-1">Edit Mission & Vision Sections</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-12">

                {/* 1. Banner Section */}
                <div className="space-y-6">
                    <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2 flex items-center gap-2">
                        <Layout size={18} className="text-blue-600" />
                        Banner Content
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Badge Text <span className="text-red-500">*</span></Label>
                            <Input
                                value={formData.bannerBadgeText}
                                onChange={e => setFormData({ ...formData, bannerBadgeText: e.target.value })}
                                className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Badge Icon (Emoji) <span className="text-red-500">*</span></Label>
                            <Input
                                value={formData.bannerBadgeIcon}
                                onChange={e => setFormData({ ...formData, bannerBadgeIcon: e.target.value })}
                                className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Banner Description <span className="text-red-500">*</span></Label>
                        <Textarea
                            value={formData.bannerDesc}
                            onChange={e => setFormData({ ...formData, bannerDesc: e.target.value })}
                            className="min-h-[100px] bg-gray-50/50 border-gray-100 rounded-xl text-sm p-4 leading-relaxed"
                        />
                    </div>
                </div>

                {/* 2. Video Section */}
                <div className="space-y-6 pt-4">
                    <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2 flex items-center gap-2">
                        <Video size={18} className="text-blue-600" />
                        Video Section
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Video Thumbnail URL</Label>
                            <Input
                                value={formData.videoImage}
                                onChange={e => setFormData({ ...formData, videoImage: e.target.value })}
                                placeholder="https://..."
                                className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Video Embed URL <span className="text-red-500">*</span></Label>
                            <Input
                                value={formData.videoUrl}
                                onChange={e => setFormData({ ...formData, videoUrl: e.target.value })}
                                className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* 3. Vision Section */}
                <div className="space-y-8 pt-4">
                    <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2 flex items-center gap-2">
                        <Eye size={18} className="text-blue-600" />
                        Vision Section
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label>Image 1 URL</Label>
                            <Input value={formData.visionImage1} onChange={e => setFormData({ ...formData, visionImage1: e.target.value })} className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm" />
                        </div>
                        <div className="space-y-2">
                            <Label>Image 2 URL</Label>
                            <Input value={formData.visionImage2} onChange={e => setFormData({ ...formData, visionImage2: e.target.value })} className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm" />
                        </div>
                        <div className="space-y-2">
                            <Label>Image 3 URL</Label>
                            <Input value={formData.visionImage3} onChange={e => setFormData({ ...formData, visionImage3: e.target.value })} className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Vision Title <span className="text-red-500">*</span></Label>
                        <Input
                            value={formData.visionTitle}
                            onChange={e => setFormData({ ...formData, visionTitle: e.target.value })}
                            className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Vision Description <span className="text-red-500">*</span></Label>
                        <Textarea
                            value={formData.visionDesc}
                            onChange={e => setFormData({ ...formData, visionDesc: e.target.value })}
                            className="min-h-[100px] bg-gray-50/50 border-gray-100 rounded-xl text-sm p-4 leading-relaxed"
                        />
                    </div>

                    {/* Features Hub */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map(num => (
                            <div key={num} className="bg-gray-50/30 p-4 rounded-2xl border border-gray-50 space-y-4">
                                <Label className="text-blue-600 font-black tracking-widest text-[9px]">Feature {num}</Label>
                                <Input
                                    value={formData[`visionFeature${num}Title`]}
                                    onChange={e => setFormData({ ...formData, [`visionFeature${num}Title`]: e.target.value })}
                                    placeholder="Title"
                                    className="h-10 bg-white border-gray-100 rounded-lg text-sm font-bold"
                                />
                                <Input
                                    value={formData[`visionFeature${num}Icon`]}
                                    onChange={e => setFormData({ ...formData, [`visionFeature${num}Icon`]: e.target.value })}
                                    placeholder="Icon (Lucide name)"
                                    className="h-10 bg-white border-gray-100 rounded-lg text-xs"
                                />
                                <Textarea
                                    value={formData[`visionFeature${num}Desc`]}
                                    onChange={e => setFormData({ ...formData, [`visionFeature${num}Desc`]: e.target.value })}
                                    placeholder="Brief description..."
                                    className="h-20 bg-white border-gray-100 rounded-lg text-xs leading-relaxed"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Mission Section */}
                <div className="space-y-8 pt-4">
                    <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2 flex items-center gap-2">
                        <Target size={18} className="text-blue-600" />
                        Mission Section
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label>Image 1 URL</Label>
                            <Input value={formData.missionImage1} onChange={e => setFormData({ ...formData, missionImage1: e.target.value })} className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm" />
                        </div>
                        <div className="space-y-2">
                            <Label>Image 2 URL</Label>
                            <Input value={formData.missionImage2} onChange={e => setFormData({ ...formData, missionImage2: e.target.value })} className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm" />
                        </div>
                        <div className="space-y-2">
                            <Label>Image 3 URL</Label>
                            <Input value={formData.missionImage3} onChange={e => setFormData({ ...formData, missionImage3: e.target.value })} className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Mission Title <span className="text-red-500">*</span></Label>
                        <Input
                            value={formData.missionTitle}
                            onChange={e => setFormData({ ...formData, missionTitle: e.target.value })}
                            className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm font-bold"
                        />
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-50 flex justify-end">
                    <Button
                        onClick={handleUpdate}
                        className="bg-[#f2ca52] hover:bg-[#e0bb43] text-[#0f172a] h-12 px-12 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg transition-all active:scale-95 border-none flex items-center gap-2"
                    >
                        <Check size={18} strokeWidth={3} />
                        Save All Sections
                    </Button>
                </div>
            </div>
        </div>
    );
}
