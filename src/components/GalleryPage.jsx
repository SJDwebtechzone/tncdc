
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock Data
const MOCK_PHOTOS = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    src: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=800&q=80`,
    alt: `Gallery Photo ${i + 1}`
}));

const MOCK_VIDEOS = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    thumbnail: `https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&w=800&q=80`,
    title: `Gallery Video ${i + 1}`,
    duration: '3:45'
}));

const GalleryPage = () => {
    const [activeTab, setActiveTab] = useState('photos'); // 'photos' | 'videos'
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const data = activeTab === 'photos' ? MOCK_PHOTOS : MOCK_VIDEOS;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    // Reset page on tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />


            <main className="flex-grow container mx-auto px-4 py-12">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">Our Gallery</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Explore our campus life, events, and student activities through our collection of photos and videos.
                    </p>
                </div>

                {/* Toggle Switch */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1.5 rounded-full shadow-md inline-flex">
                        <button
                            onClick={() => handleTabChange('photos')}
                            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'photos'
                                ? 'bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white shadow-lg'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            Photos
                        </button>
                        <button
                            onClick={() => handleTabChange('videos')}
                            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'videos'
                                ? 'bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white shadow-lg'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            Videos
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {currentItems.map((item) => (
                        <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-md bg-white aspect-[4/3] cursor-pointer">
                            <img
                                src={activeTab === 'photos' ? item.src : item.thumbnail}
                                alt={activeTab === 'photos' ? item.alt : item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                {activeTab === 'videos' && (
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <Play fill="white" className="text-white ml-1" size={24} />
                                    </div>
                                )}
                            </div>

                            {activeTab === 'videos' && (
                                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {item.duration}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`p-2 rounded-full border ${currentPage === 1
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={`w-10 h-10 rounded-full font-bold transition-all ${currentPage === i + 1
                                    ? 'bg-[#FF512F] text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`p-2 rounded-full border ${currentPage === totalPages
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
};

export default GalleryPage;






