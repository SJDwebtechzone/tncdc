import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSelector, useDispatch } from 'react-redux';
import { updateMissionVisionSettings } from '@/store/websiteSlice';

export default function WebsiteMissionVisionPage() {
    const settings = useSelector((state) => state.website.missionVisionSettings);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(settings);

    const videoImageRef = useRef(null);
    const visionImage1Ref = useRef(null);
    const visionImage2Ref = useRef(null);
    const visionImage3Ref = useRef(null);
    const missionImage1Ref = useRef(null);
    const missionImage2Ref = useRef(null);
    const missionImage3Ref = useRef(null);

    const handleUpdate = () => {
        dispatch(updateMissionVisionSettings(formData));
        alert("Mission & Vision sections updated successfully!");
    };

    const triggerFileSelect = (ref) => {
        if (ref.current) ref.current.click();
    };

    return (
        <div className="space-y-6 font-sans relative pb-10 px-6 pt-4">

            <div className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/30">
                    <h2 className="text-[14px] font-bold text-gray-800 uppercase tracking-widest">
                        Edit Mission & Vision Sections
                    </h2>
                </div>

                <div className="p-8 space-y-10 font-sans">
                    {/* Banner Section */}
                    <div className="space-y-6">
                        <h3 className="text-[13px] font-bold text-gray-800">
                            Banner Section
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Badge Text <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    value={formData.bannerBadgeText}
                                    onChange={e => setFormData({ ...formData, bannerBadgeText: e.target.value })}
                                    placeholder="The Leader in Online Learning"
                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Badge Icon (Emoji) <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    value={formData.bannerBadgeIcon}
                                    onChange={e => setFormData({ ...formData, bannerBadgeIcon: e.target.value })}
                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                />
                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">Enter an emoji (e.g., 👤, ⭐, 🎓).</p>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <Textarea
                                value={formData.bannerDesc}
                                onChange={e => setFormData({ ...formData, bannerDesc: e.target.value })}
                                className="min-h-[80px] rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a] leading-relaxed p-3 bg-gray-50/20"
                            />
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="space-y-6">
                        <h3 className="text-[13px] font-bold text-gray-800">
                            Video Section
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Video Image <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                        <input type="file" ref={videoImageRef} className="hidden" onChange={() => { }} />
                                        <button
                                            type="button"
                                            onClick={() => triggerFileSelect(videoImageRef)}
                                            className="px-3 h-full bg-gray-200 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                                        >
                                            Choose File
                                        </button>
                                        <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                    </div>
                                    <p className="text-[9px] text-gray-400 italic px-1 font-sans font-bold leading-tight">
                                        Leave blank to keep existing image. Image must be 512x512 pixels.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Video URL <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    value={formData.videoUrl}
                                    onChange={e => setFormData({ ...formData, videoUrl: e.target.value })}
                                    placeholder="https://www.youtube.com/watch?v=nAIaqp0sPQo"
                                    className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Vision Section */}
                    <div className="space-y-6">
                        <h3 className="text-[13px] font-bold text-gray-800">
                            Vision Section
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Image 1 (Main) <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                        <input type="file" ref={visionImage1Ref} className="hidden" onChange={() => { }} />
                                        <button
                                            type="button"
                                            onClick={() => triggerFileSelect(visionImage1Ref)}
                                            className="px-3 h-full bg-gray-200 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                                        >
                                            Choose File
                                        </button>
                                        <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                    </div>
                                    <p className="text-[9px] text-gray-400 italic px-1 font-sans font-bold leading-tight">
                                        Leave blank to keep existing image. Image must be 390x530 pixels.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Image 2 (Optional) <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                        <input type="file" ref={visionImage2Ref} className="hidden" onChange={() => { }} />
                                        <button
                                            type="button"
                                            onClick={() => triggerFileSelect(visionImage2Ref)}
                                            className="px-3 h-full bg-gray-200 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                                        >
                                            Choose File
                                        </button>
                                        <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                    </div>
                                    <p className="text-[9px] text-gray-400 italic px-1 font-sans font-bold leading-tight">
                                        Leave blank to keep existing image. Image must be 512x512 pixels.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Image 3 (Optional) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex flex-col gap-2 max-w-[calc(50%-16px)]">
                                <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                    <input type="file" ref={visionImage3Ref} className="hidden" onChange={() => { }} />
                                    <button
                                        type="button"
                                        onClick={() => triggerFileSelect(visionImage3Ref)}
                                        className="px-3 h-full bg-gray-200 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                                    >
                                        Choose File
                                    </button>
                                    <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                </div>
                                <p className="text-[9px] text-gray-400 italic px-1 font-sans font-bold leading-tight">
                                    Leave blank to keep existing image. Image must be 512x512 pixels.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Title <span className="text-red-500">*</span>
                            </label>
                            <Textarea
                                value={formData.visionTitle}
                                onChange={e => setFormData({ ...formData, visionTitle: e.target.value })}
                                placeholder="Know About Histudy <br /> Learning Platform"
                                className="min-h-[80px] rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a] leading-relaxed p-3 bg-gray-50/20"
                            />
                            <p className="text-[9px] text-gray-400 italic px-1 font-bold">Use &lt;br /&gt; for line breaks.</p>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <Textarea
                                value={formData.visionDesc}
                                onChange={e => setFormData({ ...formData, visionDesc: e.target.value })}
                                className="min-h-[100px] rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a] leading-relaxed p-3 bg-gray-50/20"
                            />
                        </div>

                        {/* Vision Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4">
                            {[1, 2, 3].map(num => (
                                <React.Fragment key={num}>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                            Feature {num} Icon <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            value={formData[`visionFeature${num}Icon`]}
                                            onChange={e => setFormData({ ...formData, [`visionFeature${num}Icon`]: e.target.value })}
                                            placeholder="Heart"
                                            className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                            Feature {num} Title <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            value={formData[`visionFeature${num}Title`]}
                                            onChange={e => setFormData({ ...formData, [`visionFeature${num}Title`]: e.target.value })}
                                            placeholder="Flexible Classes"
                                            className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-1">
                                        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                            Feature {num} Description <span className="text-red-500">*</span>
                                        </label>
                                        <Textarea
                                            value={formData[`visionFeature${num}Desc`]}
                                            onChange={e => setFormData({ ...formData, [`visionFeature${num}Desc`]: e.target.value })}
                                            className="min-h-[80px] rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a] leading-relaxed p-3 bg-gray-50/20"
                                        />
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="space-y-6">
                        <h3 className="text-[13px] font-bold text-gray-800">
                            Mission Section
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Image 1 (Main) <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                        <input type="file" ref={missionImage1Ref} className="hidden" onChange={() => { }} />
                                        <button
                                            type="button"
                                            onClick={() => triggerFileSelect(missionImage1Ref)}
                                            className="px-3 h-full bg-gray-200 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                                        >
                                            Choose File
                                        </button>
                                        <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                    </div>
                                    <p className="text-[9px] text-gray-400 italic px-1 font-sans font-bold leading-tight">
                                        Leave blank to keep existing image. Image must be 512x512 pixels.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                    Image 2 (Optional) <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                        <input type="file" ref={missionImage2Ref} className="hidden" onChange={() => { }} />
                                        <button
                                            type="button"
                                            onClick={() => triggerFileSelect(missionImage2Ref)}
                                            className="px-3 h-full bg-gray-200 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                                        >
                                            Choose File
                                        </button>
                                        <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                    </div>
                                    <p className="text-[9px] text-gray-400 italic px-1 font-sans font-bold leading-tight">
                                        Leave blank to keep existing image. Image must be 512x512 pixels.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Image 3 (Optional) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex flex-col gap-2 max-w-[calc(50%-16px)]">
                                <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                    <input type="file" ref={missionImage3Ref} className="hidden" onChange={() => { }} />
                                    <button
                                        type="button"
                                        onClick={() => triggerFileSelect(missionImage3Ref)}
                                        className="px-3 h-full bg-gray-200 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                                    >
                                        Choose File
                                    </button>
                                    <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                </div>
                                <p className="text-[9px] text-gray-400 italic px-1 font-sans font-bold leading-tight">
                                    Leave blank to keep existing image. Image must be 512x512 pixels.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Title <span className="text-red-500">*</span>
                            </label>
                            <Textarea
                                value={formData.missionTitle}
                                onChange={e => setFormData({ ...formData, missionTitle: e.target.value })}
                                placeholder="Know About Histudy <br /> Learning Platform"
                                className="min-h-[80px] rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a] leading-relaxed p-3 bg-gray-50/20"
                            />
                            <p className="text-[9px] text-gray-400 italic px-1 font-bold">Use &lt;br /&gt; for line breaks.</p>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <Textarea
                                value={formData.missionDesc}
                                onChange={e => setFormData({ ...formData, missionDesc: e.target.value })}
                                className="min-h-[100px] rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a] leading-relaxed p-3 bg-gray-50/20"
                            />
                        </div>

                        {/* Mission Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4">
                            {[1, 2, 3].map(num => (
                                <React.Fragment key={num}>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                            Feature {num} Icon <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            value={formData[`missionFeature${num}Icon`]}
                                            onChange={e => setFormData({ ...formData, [`missionFeature${num}Icon`]: e.target.value })}
                                            placeholder="Heart"
                                            className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                            Feature {num} Title <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            value={formData[`missionFeature${num}Title`]}
                                            onChange={e => setFormData({ ...formData, [`missionFeature${num}Title`]: e.target.value })}
                                            placeholder="Flexible Classes"
                                            className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-1">
                                        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                            Feature {num} Description <span className="text-red-500">*</span>
                                        </label>
                                        <Textarea
                                            value={formData[`missionFeature${num}Desc`]}
                                            onChange={e => setFormData({ ...formData, [`missionFeature${num}Desc`]: e.target.value })}
                                            className="min-h-[80px] rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a] leading-relaxed p-3 bg-gray-50/20"
                                        />
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Update Button */}
                    <div className="flex justify-start pt-6 border-t border-gray-100">
                        <Button
                            onClick={handleUpdate}
                            className="bg-[#ebca52] hover:bg-[#d9b942] text-white h-10 text-[11px] font-bold px-10 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                        >
                            Update All Sections
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}






