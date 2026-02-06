import React, { useState } from 'react';
import { Search, Grid, List, ChevronDown, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Marquee from './Marquee';

const MOCK_COURSES = [
    {
        id: 1,
        title: "Advance diploma In Computer Science(M-CS-7090)",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80", // Python generic image
        category: "Development",
        rating: 0,
        reviews: 0,
        currentPrice: 18000,
        originalPrice: 20000,
        badge: "PYTHON",
        tag: "In Development"
    },
    {
        id: 2,
        title: "Certificate In Python Full Stack Web Development(S-PFSWD-3677)",
        image: "https://images.unsplash.com/photo-1526379095098-d400fdbfbf08?auto=format&fit=crop&w=600&q=80", // Another Python/Code image
        category: "Development",
        rating: 0,
        reviews: 0,
        currentPrice: 10000,
        originalPrice: 15000,
        badge: "PYTHON",
        tag: "In Development"
    },
    {
        id: 3,
        title: "Certificate In Vlsi Design Verification(S-VDV-5786)",
        image: "https://images.unsplash.com/photo-1555664424-778a6902201b?auto=format&fit=crop&w=600&q=80", // Chip/VLSI image
        category: "Designing Courses",
        rating: 0,
        reviews: 0,
        currentPrice: 9000,
        originalPrice: 10000,
        badge: "VLSI",
        tag: "In Designing Courses"
    }
];

const CoursesPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('default');

    // Filter logic
    const filteredCourses = MOCK_COURSES.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    }).sort((a, b) => {
        if (sortBy === 'price-low') return a.currentPrice - b.currentPrice;
        if (sortBy === 'price-high') return b.currentPrice - a.currentPrice;
        return 0;
    });

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <Marquee />

            {/* Header Section with Gradient */}
            <div className="bg-gradient-to-b from-white to-[#FF9A8B] pt-20 pb-24 px-4 relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">All Courses</h1>
                        <span className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-gray-800 flex items-center gap-2">
                            <span>📚</span> {filteredCourses.length} Courses
                        </span>
                    </div>
                    <p className="text-gray-800 text-lg max-w-2xl">
                        Courses that help beginner designers become true unicorns.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="container mx-auto px-4 py-8 mb-20 relative z-10">

                {/* Filter Bar */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
                    {/* Left: Search Bar & Results Count */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                        <div className="relative w-full sm:w-80">
                            <input
                                type="text"
                                placeholder="Search Your Course.."
                                className="w-full pl-6 pr-12 py-3 rounded-full border border-pink-200 shadow-sm focus:ring-2 focus:ring-pink-300 focus:border-pink-300 bg-white transition-all placeholder-pink-300 text-gray-700"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-[#FF9A8B] to-[#FF6A88] rounded-full flex items-center justify-center text-white shadow-md">
                                <Search size={14} />
                            </div>
                        </div>
                        <span className="text-gray-500 text-sm font-medium whitespace-nowrap">
                            Showing 1-{filteredCourses.length} of {filteredCourses.length} results
                        </span>
                    </div>

                    {/* Right: Filters & View Toggle */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">

                        {/* Category Filter */}
                        <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full border border-gray-200 shadow-sm w-full sm:w-auto">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">Category:</span>
                            <div className="relative">
                                <select
                                    className="appearance-none bg-transparent pr-6 font-bold text-gray-700 cursor-pointer focus:outline-none text-sm"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value="All">All</option>
                                    <option value="Development">Development</option>
                                    <option value="Designing Courses">Design</option>
                                </select>
                                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={14} />
                            </div>
                        </div>

                        {/* Sort By */}
                        <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full border border-gray-200 shadow-sm w-full sm:w-auto">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">Sort By:</span>
                            <div className="relative">
                                <select
                                    className="appearance-none bg-transparent pr-6 font-bold text-gray-700 cursor-pointer focus:outline-none text-sm"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="default">Default</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={14} />
                            </div>
                        </div>

                        {/* View Toggle */}
                        <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-100 ml-0 sm:ml-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-md transition-all duration-300 ${viewMode === 'grid' ? 'bg-gradient-to-r from-[#FF9A8B] to-[#FF6A88] text-white shadow-md' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                            >
                                <Grid size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-md transition-all duration-300 ${viewMode === 'list' ? 'bg-gradient-to-r from-[#FF9A8B] to-[#FF6A88] text-white shadow-md' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                            >
                                <List size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Course Grid */}
                <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
                    {filteredCourses.map(course => (
                        <div key={course.id} className={`bg-white rounded-[20px] p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100 ${viewMode === 'list' ? 'flex gap-6 items-center' : ''}`}>

                            {/* Image Container */}
                            <div className={`relative overflow-hidden rounded-[15px] ${viewMode === 'list' ? 'w-64 h-40 flex-shrink-0' : 'h-52 w-full'} mb-4`}>
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay/Badge if needed - The design has text IN the image, often done via CSS overlay if dynamic */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    {/* This is a visual approximation of the "PYTHON" text in the image */}
                                    {course.badge && (
                                        <h3 className="text-white font-extrabold text-2xl uppercase tracking-wider drop-shadow-md">{course.badge}</h3>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${viewMode === 'list' ? 'flex-grow' : ''}`}>
                                <div className="flex items-center gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <Star key={star} size={14} className="text-orange-400 fill-orange-400" />
                                    ))}
                                    <span className="text-gray-400 text-xs ml-2">({course.reviews} Reviews)</span>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary transition-colors">
                                    {course.title}
                                </h3>

                                <p className="text-sm text-gray-500 mb-4">
                                    In <span className="font-bold text-gray-700">{course.tag}</span>
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl font-bold text-gray-900">₹{course.currentPrice.toLocaleString()}</span>
                                        <span className="text-sm text-gray-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
                                    </div>
                                    <button className="flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-primary transition-colors">
                                        Learn More <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-3 mt-16">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FF4500] text-white font-bold text-lg shadow-lg hover:bg-[#FF5722] transition-colors">
                        1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>

            </main>
            <Footer />

            {/* Scroll to top placeholder */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                    ↑
                </button>
            </div>
        </div>
    );
};

export default CoursesPage;






