import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X, Check } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updateSiteSettings } from '@/store/websiteSlice';

export default function WebsiteSiteSettingPage() {
    const settings = useSelector((state) => state.website.siteSettings);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(settings);

    const handleUpdate = () => {
        dispatch(updateSiteSettings(formData));
        alert("Site settings updated successfully!");
    };

    const addMarquee = () => setFormData({ ...formData, marqueeEntries: [...formData.marqueeEntries, ""] });
    const removeMarquee = (index) => setFormData({ ...formData, marqueeEntries: formData.marqueeEntries.filter((_, i) => i !== index) });
    const updateMarquee = (index, value) => {
        const newEntries = [...formData.marqueeEntries];
        newEntries[index] = value;
        setFormData({ ...formData, marqueeEntries: newEntries });
    };

    return (
        <div className="space-y-6 pb-12 font-sans">
            <h1 className="text-xl font-bold text-gray-800">Edit Site Settings</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-10">
                {/* Header Display Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2">Header Display</h3>
                    <div className="space-y-3">
                        <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Header Type <span className="text-red-500">*</span></Label>
                        <div className="flex items-center gap-8 pt-2">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="headerType"
                                    checked={formData.headerType === 'logo'}
                                    onChange={() => setFormData({ ...formData, headerType: 'logo' })}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="text-sm font-bold text-gray-700">Display Logo</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="headerType"
                                    checked={formData.headerType === 'banner'}
                                    onChange={() => setFormData({ ...formData, headerType: 'banner' })}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="text-sm font-bold text-gray-700">Display Banner</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Images Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Logo URL</Label>
                            <Input value={formData.logo} onChange={e => setFormData({ ...formData, logo: e.target.value })} className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm" />
                            <div className="mt-4 w-28 h-28 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden p-3 shadow-inner">
                                {formData.logo && <img src={formData.logo} alt="Logo Preview" className="max-w-full max-h-full object-contain" />}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Favicon URL</Label>
                        <Input value={formData.favicon} onChange={e => setFormData({ ...formData, favicon: e.target.value })} className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm" />
                        <p className="text-[10px] text-gray-400 italic mt-2">Recommended: 32x32 or 16x16 pixels ICO/PNG.</p>
                    </div>
                </div>

                {/* Store Links Section */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2">App Store Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Google Play Store</Label>
                            <Input value={formData.playStoreLink} onChange={e => setFormData({ ...formData, playStoreLink: e.target.value })} className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Apple App Store</Label>
                            <Input value={formData.appStoreLink} onChange={e => setFormData({ ...formData, appStoreLink: e.target.value })} className="h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm" />
                        </div>
                    </div>
                </div>

                {/* Brand Colors Section */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2">Identity & Colors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Primary Brand Color</Label>
                            <div className="flex gap-3">
                                <div className="w-14 h-11 rounded-xl shadow-md border border-white" style={{ backgroundColor: formData.primaryColor }}></div>
                                <Input value={formData.primaryColor} onChange={e => setFormData({ ...formData, primaryColor: e.target.value })} className="flex-1 h-11 bg-gray-50/50 border-gray-100 rounded-xl font-mono" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Secondary Accent Color</Label>
                            <div className="flex gap-3">
                                <div className="w-14 h-11 rounded-xl shadow-md border border-white" style={{ backgroundColor: formData.secondaryColor }}></div>
                                <Input value={formData.secondaryColor} onChange={e => setFormData({ ...formData, secondaryColor: e.target.value })} className="flex-1 h-11 bg-gray-50/50 border-gray-100 rounded-xl font-mono" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marquee Entries Section */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-50 pb-2">Headline Marquee</h3>
                    <div className="space-y-4">
                        {formData.marqueeEntries.map((entry, index) => (
                            <div key={index} className="flex gap-3 items-center group bg-gray-50/30 p-2 rounded-2xl border border-transparent hover:border-blue-100 transition-all">
                                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center font-bold text-xs">{index + 1}</div>
                                <Input
                                    value={entry}
                                    onChange={(e) => updateMarquee(index, e.target.value)}
                                    className="flex-1 h-12 bg-white border-gray-100 rounded-xl text-sm"
                                    placeholder="Enter marquee text..."
                                />
                                <Button
                                    variant="ghost"
                                    onClick={() => removeMarquee(index)}
                                    className="text-gray-400 hover:text-red-500 h-12 w-12 p-0 rounded-xl font-bold"
                                >
                                    <X size={20} />
                                </Button>
                            </div>
                        ))}
                    </div>
                    <Button
                        onClick={addMarquee}
                        className="bg-[#0061ff]/10 hover:bg-[#0061ff]/20 text-[#0061ff] h-11 px-6 rounded-xl font-bold flex items-center gap-2 transition-all border-none"
                    >
                        <Plus size={18} />
                        Add New Slide
                    </Button>
                </div>

                <div className="pt-8 border-t border-gray-50">
                    <Button
                        onClick={handleUpdate}
                        className="bg-[#f2ca52] hover:bg-[#e0bb43] text-[#0f172a] h-14 px-12 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl transition-all active:scale-95 border-none flex items-center gap-3"
                    >
                        <Check size={20} strokeWidth={3} />
                        Save All Settings
                    </Button>
                </div>
            </div>
        </div>
    );
}
