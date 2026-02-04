import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FileText, Edit2, X, Check } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { updatePolicy } from '@/store/websiteSlice';

export default function WebsitePoliciesPage() {
    const policies = useSelector((state) => state.website.policies || []);
    const dispatch = useDispatch();

    const [editingPolicy, setEditingPolicy] = useState(null);
    const [formData, setFormData] = useState({ title: '', content: '' });

    const handleEdit = (policy) => {
        setEditingPolicy(policy);
        setFormData({ title: policy.title, content: policy.content });
    };

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(updatePolicy({ ...editingPolicy, ...formData }));
        setEditingPolicy(null);
        alert(`${formData.title} updated successfully!`);
    };

    return (
        <div className="space-y-6 pb-10">
            <h1 className="text-xl font-bold text-gray-800 font-sans px-2">Website Policies Management</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {policies.length === 0 ? (
                    <div className="col-span-full py-20 bg-white rounded-2xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
                        <FileText size={48} className="mb-2 opacity-20" />
                        <p className="font-bold italic">No policies found</p>
                    </div>
                ) : (
                    policies.map((policy) => (
                        <div key={policy.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow group">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="bg-blue-50 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <FileText className="text-blue-600" size={24} />
                                    </div>
                                    <button
                                        onClick={() => handleEdit(policy)}
                                        className="text-gray-400 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                                    >
                                        <Edit2 size={18} />
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-gray-800">{policy.title}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-4 leading-relaxed font-sans italic">
                                        {policy.content}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last Updated: {policy.updatedAt || 'Recently'}</span>
                                <Button
                                    onClick={() => handleEdit(policy)}
                                    variant="link"
                                    className="text-blue-600 font-bold text-xs p-0 h-auto hover:no-underline"
                                >
                                    Modify Content
                                </Button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Edit Modal */}
            {editingPolicy && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-sans">
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 relative">
                        <button onClick={() => setEditingPolicy(null)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Edit2 size={24} className="text-blue-600" />
                            Edit {formData.title}
                        </h2>
                        <form onSubmit={handleSave} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Policy Title</label>
                                <Input
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    className="h-11 rounded-xl bg-gray-50/50 border-gray-100 font-bold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Policy Content</label>
                                <Textarea
                                    required
                                    value={formData.content}
                                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                                    className="min-h-[300px] rounded-2xl bg-gray-50/50 border-gray-100 leading-relaxed p-4"
                                    placeholder="Enter full policy content here..."
                                />
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <Button type="button" variant="outline" onClick={() => setEditingPolicy(null)} className="h-12 px-8 rounded-xl font-bold text-gray-500">Cancel</Button>
                                <Button type="submit" className="bg-[#0f4c3a] hover:bg-[#0d3f30] text-white font-bold h-12 px-10 rounded-xl shadow-lg transition-all flex items-center gap-2">
                                    <Check size={18} />
                                    Save Changes
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
