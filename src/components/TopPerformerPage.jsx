
import React from 'react';
import Navbar from './Navbar';
import Marquee from './Marquee';
import Footer from './Footer';
import bannerImg from '../assets/new_performance_bg.png';

const TopPerformerPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />
            <Marquee />

            <main className="flex-grow">
                {/* Hero Banner Section with Text Overlay */}
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
                    <img
                        src={bannerImg}
                        alt="Top Performer Excellence Banner"
                        className="w-full h-full object-cover"
                        style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                    />
                    {/* Dark Overlay for text readability */}
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                            Unmatched Performance Excellence
                        </h1>
                        <p className="text-white/90 text-sm md:text-lg max-w-2xl font-medium leading-relaxed">
                            Delivering exceptional results through cutting-edge solutions and proven methodologies
                        </p>
                    </div>
                </div>

                {/* Spacing to match screenshot look */}
                <div className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        {/* Empty space as seen in the screenshot */}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TopPerformerPage;
