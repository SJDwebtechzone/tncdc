import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Bold, Italic, Underline, AlignLeft, AlignCenter, Link, RotateCcw } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost, editPost } from '@/store/websiteSlice';

export default function WebsiteAddPostPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const editingPost = location.state?.post;

    const initialFormData = {
        title: '',
        subheading: '',
        thumbnail: '',
        description: '',
        additionalImages: [''],
        tags: ['']
    };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (editingPost) {
            setFormData({
                title: editingPost.title || '',
                subheading: editingPost.subheading || '',
                thumbnail: editingPost.thumbnail || '',
                description: editingPost.description || '',
                additionalImages: editingPost.additionalImages?.length ? editingPost.additionalImages : [''],
                tags: editingPost.tags?.length ? editingPost.tags : ['']
            });
        }
    }, [editingPost]);

    const thumbnailRef = useRef(null);

    const handleSave = (e) => {
        e.preventDefault();
        if (editingPost) {
            dispatch(editPost({ ...formData, id: editingPost.id }));
        } else {
            dispatch(addPost(formData));
        }
        navigate('/dashboard/website/posts');
    };

    const addImageField = () => {
        setFormData({ ...formData, additionalImages: [...formData.additionalImages, ''] });
    };

    const removeImageField = (index) => {
        const newImages = formData.additionalImages.filter((_, i) => i !== index);
        setFormData({ ...formData, additionalImages: newImages });
    };

    const addTagField = () => {
        setFormData({ ...formData, tags: [...formData.tags, ''] });
    };

    const removeTagField = (index) => {
        const newTags = formData.tags.filter((_, i) => i !== index);
        setFormData({ ...formData, tags: newTags });
    };

    const handleTagChange = (index, value) => {
        const newTags = [...formData.tags];
        newTags[index] = value;
        setFormData({ ...formData, tags: newTags });
    };

    return (
        <div className="space-y-6 font-sans pb-10 pt-4">

            <div className="px-6">
                <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-8 space-y-8">
                    <h2 className="text-[15px] font-bold text-gray-800 uppercase tracking-wider mb-8">
                        {editingPost ? 'Edit Post' : 'Add New Post'}
                    </h2>

                    <form onSubmit={handleSave} className="space-y-8 max-w-5xl">
                        {/* Title */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-7n00 uppercase tracking-widest ml-1">
                                Title <span className="text-red-500">*</span>
                            </label>
                            <Input
                                required
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Enter post title"
                                className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                            />
                        </div>

                        {/* Subheading */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Subheading <span className="text-red-500">*</span>
                            </label>
                            <Input
                                required
                                value={formData.subheading}
                                onChange={e => setFormData({ ...formData, subheading: e.target.value })}
                                placeholder="Enter post subheading"
                                className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                            />
                        </div>

                        {/* Thumbnail */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Thumbnail <span className="text-red-500">*</span>
                            </label>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                    <input type="file" ref={thumbnailRef} className="hidden" onChange={() => { }} />
                                    <button
                                        type="button"
                                        onClick={() => thumbnailRef.current.click()}
                                        className="px-3 h-full bg-gray-100 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-200 transition-colors"
                                    >
                                        Choose File
                                    </button>
                                    <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                </div>
                                <p className="text-[9px] text-gray-400 italic px-1 font-bold">Recommended size: 638x330 pixels. JPEG/PNG format, max 2MB.</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <div className="rounded-sm border border-gray-200 overflow-hidden">
                                <div className="flex items-center gap-1 p-2 bg-gray-50 border-b border-gray-200">
                                    <button type="button" className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><Bold size={14} /></button>
                                    <button type="button" className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><Italic size={14} /></button>
                                    <button type="button" className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><Underline size={14} /></button>
                                    <div className="w-[1px] h-4 bg-gray-300 mx-1" />
                                    <button type="button" className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><AlignLeft size={14} /></button>
                                    <button type="button" className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><AlignCenter size={14} /></button>
                                    <div className="w-[1px] h-4 bg-gray-300 mx-1" />
                                    <button type="button" className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><Link size={14} /></button>
                                    <button type="button" className="p-1.5 hover:bg-gray-200 rounded text-gray-600 ml-auto"><RotateCcw size={14} /></button>
                                </div>
                                <Textarea
                                    required
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    className="min-h-[300px] border-none rounded-none text-xs focus:ring-0 leading-relaxed p-4 bg-white resize-none"
                                    placeholder="Write your post content here..."
                                />
                            </div>
                        </div>

                        {/* Additional Images */}
                        <div className="space-y-4 pt-4 border-t border-gray-50">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1 block">
                                Additional Images
                            </label>
                            <div className="space-y-3">
                                {formData.additionalImages.map((img, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className="flex-1 flex flex-col gap-1.5">
                                            <div className="flex items-center h-10 border border-gray-200 rounded-sm overflow-hidden text-sm bg-gray-50/20">
                                                <input type="file" className="hidden" onChange={() => { }} />
                                                <button
                                                    type="button"
                                                    className="px-3 h-full bg-gray-100 border-r border-gray-200 text-[11px] font-bold text-gray-700 hover:bg-gray-200 transition-colors"
                                                >
                                                    Choose File
                                                </button>
                                                <span className="px-3 text-gray-400 text-[11px] italic">No file chosen</span>
                                            </div>
                                        </div>
                                        <Button
                                            type="button"
                                            onClick={() => removeImageField(index)}
                                            className="bg-[#ef4444] hover:bg-red-600 text-white h-10 rounded-sm px-4 text-[11px] font-bold border-none transition-all"
                                        >
                                            <Trash2 size={14} />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            <Button
                                type="button"
                                onClick={addImageField}
                                className="bg-[#0f172a] hover:bg-[#151c63] text-white gap-2 rounded-sm px-6 h-9 text-[11px] font-bold transition-all border-none uppercase tracking-wider"
                            >
                                <Plus size={14} /> Add Another Image
                            </Button>
                            <p className="text-[9px] text-gray-400 italic px-1 font-bold">Recommended size: 1085x645 pixels. JPEG/PNG format, max 2MB each. Optional.</p>
                        </div>

                        {/* Tags */}
                        <div className="space-y-4 pt-4 border-t border-gray-50">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1 block">
                                Tags <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-3">
                                {formData.tags.map((tag, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className="flex-1 flex flex-col gap-1.5">
                                            <Input
                                                value={tag}
                                                onChange={e => handleTagChange(index, e.target.value)}
                                                placeholder="Enter tag"
                                                className="h-10 rounded-sm border-gray-200 text-xs focus:ring-1 focus:ring-[#0f172a]"
                                            />
                                        </div>
                                        <Button
                                            type="button"
                                            onClick={() => removeTagField(index)}
                                            className="bg-[#ef4444] hover:bg-red-600 text-white h-10 rounded-sm px-4 text-[11px] font-bold border-none transition-all"
                                        >
                                            <Trash2 size={14} />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            <Button
                                type="button"
                                onClick={addTagField}
                                className="bg-[#0f172a] hover:bg-[#151c63] text-white gap-2 rounded-sm px-6 h-9 text-[11px] font-bold transition-all border-none uppercase tracking-wider"
                            >
                                <Plus size={14} /> Add Another Tag
                            </Button>
                            <p className="text-[9px] text-gray-400 italic px-1 font-bold block">Add relevant tags to help categorize your post.</p>
                        </div>

                        {/* Form Buttons */}
                        <div className="flex justify-start gap-4 pt-10 border-t border-gray-100">
                            <Button
                                type="submit"
                                className="bg-[#154c4c] hover:bg-[#0f3838] text-white h-11 text-[11px] font-bold px-12 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                            >
                                {editingPost ? 'Update Post' : 'Create Post'}
                            </Button>
                            <Button
                                type="button"
                                onClick={() => navigate('/dashboard/website/posts')}
                                className="bg-[#b9875a] hover:bg-[#a6764a] text-white h-11 text-[11px] font-bold px-12 rounded-sm border-none shadow-sm transition-all uppercase tracking-wider"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}






