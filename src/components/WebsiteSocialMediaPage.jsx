import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X, Globe, Link, Share2, Info } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updateSocialMediaSettings } from '@/store/websiteSlice';

const SocialIconLayout = ({ children, title, icon: Icon, color }) => (
    <div className="space-y-3 font-sans group">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
            <div className={`p-1.5 rounded-lg ${color} text-white group-hover:scale-110 transition-transform`}>
                {Icon ? <Icon size={14} /> : <div className="w-3.5 h-3.5 flex items-center justify-center font-bold text-[8px]">?</div>}
            </div>
            {title} URL
        </label>
        {children}
    </div>
);

export default function WebsiteSocialMediaPage() {
    const settings = useSelector((state) => state.website.socialMediaSettings);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(settings);

    const handleUpdate = () => {
        dispatch(updateSocialMediaSettings(formData));
        alert("Social media links updated successfully!");
    };

    return (
        <div className="space-y-6 max-w-5xl font-sans">
            <h1 className="text-xl font-bold text-gray-800">Manage Social Media Links</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
                <div className="border-b border-gray-50 pb-4">
                    <h2 className="text-base font-bold text-gray-800 uppercase tracking-tighter">Connect your platforms</h2>
                    <p className="text-xs text-gray-400 mt-1 italic font-sans uppercase tracking-[0.05em]">Paste the full URLs of your social media profiles below.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SocialIconLayout title="Facebook" icon={Globe} color="bg-[#1877F2]">
                        <Input
                            value={formData.facebook}
                            onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                            placeholder="https://facebook.com/..."
                            className="h-12 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </SocialIconLayout>

                    <SocialIconLayout title="X (Twitter)" icon={Share2} color="bg-black">
                        <Input
                            value={formData.x}
                            onChange={(e) => setFormData({ ...formData, x: e.target.value })}
                            placeholder="https://x.com/..."
                            className="h-12 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </SocialIconLayout>

                    <SocialIconLayout title="Instagram" icon={Link} color="bg-[#E4405F]">
                        <Input
                            value={formData.instagram}
                            onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                            placeholder="https://instagram.com/..."
                            className="h-12 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </SocialIconLayout>

                    <SocialIconLayout title="LinkedIn" icon={Info} color="bg-[#0A66C2]">
                        <Input
                            value={formData.linkedin}
                            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                            placeholder="https://linkedin.com/in/..."
                            className="h-12 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </SocialIconLayout>

                    <SocialIconLayout title="YouTube" icon={Globe} color="bg-[#FF0000]">
                        <Input
                            value={formData.youtube}
                            onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                            placeholder="https://youtube.com/@..."
                            className="h-12 bg-gray-50/50 border-gray-100 rounded-xl text-sm"
                        />
                    </SocialIconLayout>
                </div>

                <div className="flex gap-3 pt-6 border-t border-gray-50">
                    <Button
                        onClick={() => setFormData(settings)}
                        variant="outline"
                        className="h-11 px-8 rounded-xl font-bold bg-[#c08457]/10 text-orange-700 border-[#c08457]/20 hover:bg-[#c08457]/20"
                    >
                        Reset Changes
                    </Button>
                    <Button
                        onClick={handleUpdate}
                        className="h-11 px-10 rounded-xl font-bold bg-[#1e3a8a] text-white hover:bg-blue-900 border-none flex items-center gap-2 shadow-lg transition-all transform hover:scale-105"
                    >
                        <Check size={18} />
                        Save Professional Links
                    </Button>
                </div>
            </div>
        </div>
    );
}
