import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Edit2, Trash2, X, FileText } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import { addPost, deletePost } from '@/store/websiteSlice';

export default function WebsitePostsPage() {
    const posts = useSelector((state) => state.website.posts || []);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ title: '', image: '', description: '' });

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addPost(formData));
        setIsModalOpen(false);
        setFormData({ title: '', image: '', description: '' });
    };

    const handleDelete = (id) => {
        if (window.confirm("Remove this post?")) {
            dispatch(deletePost(id));
        }
    };

    return (
        <div className="space-y-6 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-xl font-bold text-gray-800 font-sans">Manage Posts</h1>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 text-white px-6 py-2 rounded-lg flex items-center gap-2 border-none transition-all shadow-md"
                >
                    <Plus size={18} />
                    Add New Post
                </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 relative w-full italic">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </div>
                        <Input
                            placeholder="Search posts..."
                            className="pl-10 h-11 bg-gray-50/50 border-gray-100 rounded-xl text-sm italic"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button className="bg-[#1e40af] hover:bg-blue-900 text-white h-11 px-10 rounded-xl font-bold transition-all shadow-md">
                        Search
                    </Button>
                    <Button
                        variant="outline"
                        className="border-orange-100 text-orange-600 hover:bg-orange-50 h-11 px-10 rounded-xl font-bold"
                        onClick={() => setSearchQuery("")}
                    >
                        Reset
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#f8fafc] border-b border-gray-100 text-center">
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 px-6 w-16 text-center">#</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Image</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Name</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Description</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5">Created At</TableHead>
                                <TableHead className="font-bold text-gray-800 text-[11px] uppercase py-5 text-center px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredPosts.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="py-24 text-center">
                                        <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                            <div className="bg-gray-50 p-6 rounded-3xl">
                                                <FileText size={48} className="text-gray-300" />
                                            </div>
                                            <p className="font-bold text-gray-400 italic">No posts found</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredPosts.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell className="py-4 px-6 text-center font-medium text-gray-500">{index + 1}</TableCell>
                                        <TableCell className="py-4">
                                            <div className="w-12 h-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                                                {row.image && <img src={row.image} alt={row.title} className="w-full h-full object-cover" />}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 font-semibold text-gray-700">{row.title}</TableCell>
                                        <TableCell className="py-4 text-sm text-gray-500 max-w-xs truncate">{row.description}</TableCell>
                                        <TableCell className="py-4 text-sm text-gray-500">{row.createdAt}</TableCell>
                                        <TableCell className="py-4 px-6">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                                    <Edit2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(row.id)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Add Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Plus size={24} className="text-indigo-600" />
                            Add New Post
                        </h2>
                        <form onSubmit={handleSave} className="space-y-4 font-sans">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Post Title <span className="text-red-500">*</span></label>
                                <Input required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. Benefits of Learning React" className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Image URL</label>
                                <Input value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} placeholder="https://..." className="h-11 rounded-xl bg-gray-50/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 uppercase">Description <span className="text-red-500">*</span></label>
                                <Textarea required value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="min-h-[120px] rounded-xl bg-gray-50/50" placeholder="Post content summary..." />
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="h-11 px-8 rounded-xl font-bold text-gray-500">Cancel</Button>
                                <Button type="submit" className="bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 text-white font-bold h-11 px-10 rounded-xl shadow-lg transition-all">Publish Post</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
