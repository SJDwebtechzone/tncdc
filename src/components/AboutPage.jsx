import React from 'react';
import { Trophy, ArrowRight, Play, MessageCircle, Heart, BookOpen, Monitor } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';


const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />


            <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-sm border border-orange-100">
                    <Trophy size={16} />
                    <span>The Leader in Online Learning</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                    Read About Our
                </h1>

                {/* Description */}
                <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                    Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto justify-center">
                    <button className="bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white px-8 py-3.5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        Our Courses <ArrowRight size={20} />
                    </button>
                    <button className="bg-white text-gray-700 border border-gray-200 px-8 py-3.5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                        Contact Us <ArrowRight size={20} />
                    </button>
                </div>

                {/* Video/Image Placeholder */}
                <div className="w-full max-w-6xl aspect-[16/9] bg-gray-200 rounded-[40px] flex items-center justify-center relative shadow-inner overflow-hidden group cursor-pointer">
                    {/* Placeholder overlay content or image would go here */}
                    <div className="absolute inset-0 bg-gray-300/50"></div>

                    {/* Play Button */}
                    <div className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                            <Play size={32} className="text-[#FF512F] ml-1 fill-current" />
                        </div>
                    </div>
                </div>


                {/* Our Vision Section */}
                <div className="w-full mt-24 py-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

                        {/* Left Column: Image Collage */}
                        <div className="w-full lg:w-1/2 relative min-h-[600px] hidden md:block">
                            {/* Image 1: 396x530 - Left Large */}
                            <div className="absolute left-0 top-10 w-[45%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                                    alt="Students studying"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Image 2: 308x250 - Right Top Small */}
                            <div className="absolute right-0 top-0 w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80"
                                    alt="Classroom"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Image 3: 405x490 - Right Bottom Medium */}
                            <div className="absolute right-[5%] bottom-0 w-[48%] h-[55%] rounded-2xl overflow-hidden shadow-2xl z-20">
                                <img
                                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400&q=80"
                                    alt="Teacher"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
                            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-md text-xs font-bold tracking-wider mb-6 w-fit">
                                OUR VISION
                            </span>
                            <h2 className="text-4xl font-extrabold text-[#0f172a] mb-6 leading-tight">
                                Know About Histudy <br /> Learning Platform
                            </h2>
                            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            </p>

                            {/* Features List */}
                            <div className="space-y-8">
                                {/* Feature 1 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 text-pink-500">
                                        <Heart size={20} fill="currentColor" className="text-pink-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Flexible Classes</h4>
                                        <p className="text-gray-500">It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">
                                        <BookOpen size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Learn From Anywhere</h4>
                                        <p className="text-gray-500">Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.</p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-500">
                                        <Monitor size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Experienced Teacher's service.</h4>
                                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Our Mission Section */}
                <div className="w-full mt-24 py-10 bg-gray-50/50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

                            {/* Left Content (Text) */}
                            <div className="w-full lg:w-1/2 text-left flex flex-col justify-center order-2 lg:order-1">
                                <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-md text-xs font-bold tracking-wider mb-6 w-fit">
                                    OUR MISSION
                                </span>
                                <h2 className="text-4xl font-extrabold text-[#0f172a] mb-6 leading-tight">
                                    Know About Histudy <br /> Learning Platform
                                </h2>
                                <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                </p>

                                {/* Features List */}
                                <div className="space-y-8">
                                    {/* Feature 1 */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 text-pink-500">
                                            <Heart size={20} fill="currentColor" className="text-pink-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Flexible Classes</h4>
                                            <p className="text-gray-500">It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                                        </div>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">
                                            <BookOpen size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Learn From Anywhere</h4>
                                            <p className="text-gray-500">Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.</p>
                                        </div>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-500">
                                            <Monitor size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Experienced Teacher's service.</h4>
                                            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Image Collage */}
                            <div className="w-full lg:w-1/2 relative min-h-[600px] hidden md:block order-1 lg:order-2">
                                {/* Image 1: 396x530 - Left Large - Moved to Right relative position */}
                                <div className="absolute right-0 top-10 w-[45%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10">
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                                        alt="Students studying"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Image 2: 308x250 - Right Top Small - Moved to Left relative position */}
                                <div className="absolute left-0 top-0 w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80"
                                        alt="Classroom"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Image 3: 405x490 - Right Bottom Medium - Moved to Left relative position */}
                                <div className="absolute left-[5%] bottom-0 w-[48%] h-[55%] rounded-2xl overflow-hidden shadow-2xl z-20">
                                    <img
                                        src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400&q=80"
                                        alt="Teacher"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>

            {/* WhatsApp Floating Icon */}
            <div className="fixed bottom-8 left-8 z-50">
                <button className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                    <MessageCircle size={32} fill="white" className="text-white" />
                </button>
            </div>

            <Footer />
        </div >
    );
};

export default AboutPage;
