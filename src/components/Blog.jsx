import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: "The Future of Online Learning in 2026",
            date: "Jan 20, 2026",
            author: "Admin",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "How to Build a Successful Career in AI",
            date: "Jan 15, 2026",
            author: "Dr. Rajesh",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Top 10 Soft Skills for Developers",
            date: "Jan 10, 2026",
            author: "Priya S.",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="text-left">
                        <span className="px-4 py-1.5 bg-pink-100 text-pink-600 font-bold text-xs uppercase tracking-widest rounded-full mb-4 inline-block">
                            Latest Posts
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                            Popular Blog Posts.
                        </h2>
                    </div>
                    <a
                        href="https://tncdc.in/posts"
                        className="btn-gradient px-8 py-4 rounded-full font-bold flex items-center gap-2 group whitespace-nowrap"
                    >
                        See All Posts
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-[30px] overflow-hidden group shadow-sm hover:shadow-xl transition-shadow">
                            <div className="relative h-60 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="p-10">
                                <div className="flex items-center gap-6 text-gray-400 text-sm mb-6 pb-6 border-b border-gray-100">
                                    <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
                                    <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-8 leading-tight group-hover:text-primary transition-colors cursor-pointer min-h-[4rem]">
                                    {post.title}
                                </h4>
                                <a href="#" className="flex items-center gap-2 font-bold text-gray-900 hover:text-primary transition-colors group/link">
                                    Read More <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
