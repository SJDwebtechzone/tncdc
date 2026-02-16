import React, { useState } from 'react';
import { Menu, Download, Bell, User, LayoutGrid, GraduationCap, ClipboardCheck, PlayCircle, Home, X, Search, ChevronRight, Star, Heart, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PWAHome = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const categories = [
        { name: 'Designing Courses', icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png' },
        { name: 'Development', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
        { name: 'VLSI Design', icon: 'https://cdn-icons-png.flaticon.com/512/2992/2992440.png' },
        { name: 'Digital Marketing', icon: 'https://cdn-icons-png.flaticon.com/512/1998/1998087.png' },
    ];

    const popularCourses = [
        {
            title: 'Certificate in Python Full Stack Web Development(M-PFSWD-5456)',
            price: '28000',
            oldPrice: '35000',
            rating: '0.0',
            duration: '6 months',
            image: 'https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/tncdc.in/website/course/image_65f7dd9d95f5c.png',
            enrolled: 0,
            likes: 0
        },
        {
            title: 'Advance diploma in Computer Science(M-CS-7090)',
            price: '18000',
            oldPrice: '20000',
            rating: '0.0',
            duration: '180 days',
            image: 'https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/tncdc.in/website/course/image_65f7df6f5f5fd.jpg',
            enrolled: 0,
            likes: 0
        },
    ];

    const toppers = [
        { name: 'Mohana', image: 'https://tncdc.in/assets/images/user.png' },
    ];

    const recommended = [
        {
            title: 'Certificate in Python Full Stack Web Development(M-PFSWD-5456)',
            price: '28000',
            oldPrice: '35000',
            image: 'https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/tncdc.in/website/course/image_65f7dd9d95f5c.png'
        },
        {
            title: 'Advance diploma in Computer Science(M-CS-7090)',
            price: '18000',
            oldPrice: '20000',
            image: 'https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/tncdc.in/website/course/image_65f7df6f5f5fd.jpg'
        }
    ];

    const team = [
        { name: 'Priya', image: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg' },
        { name: 'Arun', image: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg' },
        { name: 'Kavitha', image: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg' },
        { name: 'Suresh', image: 'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg' },
    ];

    return (
        <div className="min-h-screen bg-[#08091a] text-white pb-28 font-['Inter',sans-serif] overflow-x-hidden selection:bg-indigo-500/30">
            {/* Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 h-full w-[85%] max-w-[400px] bg-[#003366] z-[101] shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Abstract Shapes */}
                            <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
                            <div className="absolute top-20 right-[-30px] w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

                            <div className="h-full flex flex-col relative z-10">
                                {/* Sidebar Header / Logo Section */}
                                <div className="pt-12 pb-10 flex flex-col items-center">
                                    <div className="w-24 h-16 bg-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] border-2 border-indigo-400/50 flex items-center justify-center overflow-hidden">
                                        <img src="https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/tncdc.in/website/logo/image_6979ce5039f69.png" alt="TNCDC Logo" className="w-4/5 h-auto object-contain grayscale" />
                                    </div>
                                </div>

                                {/* Sidebar Links */}
                                <nav className="flex-grow overflow-y-auto px-6 py-2 no-scrollbar">
                                    <div className="space-y-0">
                                        <SidebarLink label="My Profile" />
                                        <SidebarLink label="Referral" />
                                        <SidebarLink label="Attendance" />
                                        <SidebarLink label="All Courses" />
                                        <SidebarLink label="Online Classes" />
                                        <SidebarLink label="Test Exam Results" />
                                        <SidebarLink label="Final Exam Results" />
                                        <SidebarLink label="My Wallet" />
                                        <SidebarLink label="My Courses" />
                                        <SidebarLink label="My Resume" />
                                        <SidebarLink label="Offers" />
                                        <SidebarLink label="Help Support" />
                                        <SidebarLink label="My Birthday Poster" />
                                        <SidebarLink label="About us" />
                                        <SidebarLink label="Privacy Policy" />
                                        <SidebarLink label="Terms & Conditions" />
                                        <SidebarLink label="Refund Policy" />
                                        <SidebarLink label="Contact Us" />
                                    </div>

                                    {/* Log In Button at the bottom of list */}
                                    <div className="py-12 flex justify-center">
                                        <button className="px-8 py-1.5 border border-white/30 rounded-full text-xs font-medium text-white/90 hover:bg-white/10 transition-colors tracking-wide">
                                            Log in
                                        </button>
                                    </div>
                                </nav>
                            </div>

                            {/* Close Button Floating (Optional helper for UX) */}
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Header */}
            <header className="px-5 py-4 flex items-center justify-between sticky top-0 bg-[#08091a]/90 backdrop-blur-xl z-[90] border-b border-white/5">
                <div className="flex items-center gap-4">
                    <button onClick={() => setIsSidebarOpen(true)} className="p-2.5 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5">
                        <Menu size={22} className="text-indigo-400" />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/20 p-0.5 bg-white shadow-xl">
                            <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                <img src="https://tncdc.in/assets/images/user.png" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider flex items-center gap-1">Good Night <span className="animate-bounce">👋</span></p>
                            <p className="text-sm font-black text-white/90">Guest</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <HeaderIcon icon={<Download size={18} />} />
                    <HeaderIcon icon={<Bell size={18} />} dot />
                    <HeaderIcon icon={<LayoutGrid size={18} />} />
                </div>
            </header>

            {/* Scrolling Marquee */}
            <div className="bg-[#120e2b] py-2.5 border-b border-white/5 overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1200] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="flex gap-16 whitespace-nowrap text-[11px] font-bold text-indigo-200/60 uppercase tracking-widest"
                >
                    <MarqueeText />
                    <MarqueeText />
                    <MarqueeText />
                </motion.div>
            </div>

            <main className="px-5 mt-8 space-y-10">
                {/* Looping Extra Wide Blue Cards */}
                <section className="overflow-hidden py-4 -mx-5 bg-[#08091a]">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-6 px-5"
                    >
                        <PlainBannerCard />
                        <PlainBannerCard />
                        <PlainBannerCard />

                        {/* Duplicate for seamless loop */}
                        <PlainBannerCard />
                        <PlainBannerCard />
                        <PlainBannerCard />
                    </motion.div>
                </section>

                {/* Categories */}
                <section>
                    <div className="flex justify-between items-end mb-5">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-black">Categories</h2>
                            <div className="w-8 h-1 bg-indigo-500 rounded-full mt-1"></div>
                        </div>
                        <button className="flex items-center gap-1 text-[11px] font-bold text-indigo-400/80 hover:text-indigo-400 transition-colors bg-indigo-500/5 px-3 py-1.5 rounded-full border border-indigo-500/10">
                            See all <ChevronRight size={14} />
                        </button>
                    </div>
                    <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar -mx-5 px-5">
                        {categories.map((cat, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 min-w-[100px] group transition-all">
                                <div className="w-16 h-16 rounded-full border-[6px] border-white/95 shadow-2xl relative overflow-hidden group-hover:scale-110 transition-all duration-300 p-0 bg-white">
                                    <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center p-0">
                                        <img
                                            src={cat.icon}
                                            alt={cat.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-center leading-tight max-w-[90px] text-white/80 group-hover:text-white transition-colors uppercase tracking-tight">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Most Popular */}
                <section>
                    <div className="flex justify-between items-end mb-6">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-black tracking-tight">Most Popular</h2>
                            <div className="w-10 h-1 bg-indigo-500 rounded-full mt-1.5 shadow-lg shadow-indigo-500/40"></div>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                            See all <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-5 px-5">
                        {popularCourses.map((course, i) => (
                            <div key={i} className="w-[310px] flex-shrink-0 bg-[#161b36] rounded-[32px] overflow-hidden border border-white/10 shadow-3xl flex flex-col group p-2 pb-4">
                                {/* Image Container (White Background) */}
                                <div className="relative aspect-[16/11] bg-white rounded-[24px] overflow-hidden mb-4">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                                    {/* Price Badge */}
                                    <div className="absolute top-3 right-3 bg-[#ffc107] text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-lg border border-white/20 flex items-center gap-1">
                                        ₹ {course.price} <span className="line-through text-white/50 text-[8px] font-bold">₹{course.oldPrice}</span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="px-3 flex flex-col items-center text-center flex-grow">
                                    <div className="min-h-[40px] flex items-center justify-center mb-4">
                                        <h3 className="text-[12px] font-black line-clamp-2 leading-snug text-white/90">
                                            {course.title}
                                        </h3>
                                    </div>

                                    {/* Stats Row */}
                                    <div className="flex items-center justify-between w-full px-2 mb-8 text-[10px] font-black text-white/30 uppercase tracking-tighter">
                                        <div className="flex items-center gap-1.5">
                                            <Star size={12} className="text-[#ffc107]" fill="currentColor" />
                                            <span>{course.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <PlayCircle size={12} className="text-[#ef4444]" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Menu size={12} className="text-[#3b82f6]" />
                                            <span>{course.enrolled}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Heart size={12} className="text-[#ef4444]" />
                                            <span>{course.likes}</span>
                                        </div>
                                    </div>

                                    {/* View Details Button */}
                                    <button className="w-full py-4 bg-[#e91e63] hover:bg-[#d81b60] text-white text-[12px] font-black rounded-2xl transition-all shadow-lg active:scale-[0.98] uppercase tracking-widest mt-auto">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Toppers */}
                <section>
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-lg font-black">Our Toppers</h2>
                        <button className="text-[11px] font-bold text-white/30">See all</button>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar -mx-5 px-5">
                        {toppers.map((topper, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-yellow-500 via-orange-500 to-indigo-500 group-hover:rotate-12 transition-transform duration-500">
                                    <div className="w-full h-full rounded-full border-2 border-[#08091a] overflow-hidden">
                                        <img src={topper.image} alt={topper.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-white/60 tracking-wider group-hover:text-white transition-colors">{topper.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Recommended */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-black tracking-tight">Recommended</h2>
                            <div className="w-10 h-1 bg-indigo-500 rounded-full mt-1.5 shadow-lg shadow-indigo-500/40"></div>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-indigo-400">See all</button>
                    </div>
                    <div className="space-y-4">
                        {recommended.map((item, i) => (
                            <div key={i} className="bg-[#161b36] p-3 rounded-[28px] border border-white/5 flex items-center gap-4 group cursor-pointer hover:bg-[#1c2242] transition-colors">
                                {/* Left: White Image Container */}
                                <div className="w-24 h-24 bg-white rounded-[20px] overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                {/* Right: Content */}
                                <div className="flex-grow py-1 flex flex-col justify-between h-24">
                                    <div>
                                        {/* Recommended Badge */}
                                        <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-lg mb-1.5">
                                            <span className="text-[8px] font-black text-indigo-400 uppercase tracking-tighter">Recommended</span>
                                        </div>
                                        <h4 className="text-[11px] font-black line-clamp-1 text-white/90 mb-1">{item.title}</h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-black text-white">₹{item.price}</span>
                                            <span className="text-[8px] font-bold text-white/30 line-through">₹{item.oldPrice}</span>
                                        </div>
                                    </div>

                                    {/* Bottom Stats */}
                                    <div className="flex items-center justify-between w-full text-[9px] font-bold text-white/30 mt-auto">
                                        <div className="flex items-center gap-1">
                                            <Star size={10} className="text-yellow-500 fill-yellow-500" />
                                            <span>0.0</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1">
                                                <PlayCircle size={10} className="text-indigo-400" />
                                                <span>0</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Heart size={10} className="text-rose-500" />
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Team */}
                <section>
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-lg font-black tracking-tight">Our Team</h2>
                        <button className="text-[11px] font-black uppercase tracking-widest text-indigo-400">See all</button>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-5 px-5">
                        {team.map((member, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer min-w-[70px]">
                                <div className="w-16 h-16 rounded-full p-1 bg-white border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-white/60 tracking-wider group-hover:text-white transition-colors">{member.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Institute Banner */}
                <section className="pb-10">
                    <h2 className="text-sm font-black mb-4 px-2 tracking-tight">Our Institute</h2>
                    <div className="h-28 w-full rounded-[32px] overflow-hidden relative group border border-white/5 shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Institute" className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>

                        {/* White Square Logo Container */}
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center p-3">
                            <img src="https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/tncdc.in/website/logo/image_6979ce5039f69.png" alt="Logo" className="w-full h-auto object-contain brightness-0 opacity-80" />
                        </div>
                    </div>
                </section>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-[#0c0d21]/95 backdrop-blur-2xl border-t border-white/5 px-6 pt-3 pb-6 flex justify-between items-end z-[100]">
                {/* Floating Home Button - Leftmost */}
                <div className="relative -top-2 px-1">
                    <div className="absolute inset-0 bg-indigo-500/30 blur-2xl rounded-full scale-125 animate-pulse"></div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative w-14 h-14 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center border border-white/20"
                    >
                        <Home className="text-white" size={26} />
                    </motion.button>
                </div>

                <BottomNavLink icon={<GraduationCap size={20} />} label="Courses" />
                <BottomNavLink icon={<ClipboardCheck size={20} />} label="Attendance" />
                <BottomNavLink icon={<PlayCircle size={20} />} label="Lectures" />
            </nav>

        </div>
    );
};

const HeaderIcon = ({ icon, dot = false }) => (
    <div className="relative p-2.5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer text-white/50 hover:text-white">
        {icon}
        {dot && <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-[#08091a]"></span>}
    </div>
);

const MarqueeText = () => (
    <div className="flex gap-16 items-center">
        <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span> Contact us for more info!</span>
        <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span> Welcome to TamilNadu Career Development Council</span>
        <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span> Join our courses today!</span>
    </div>
);

const SidebarLink = ({ label }) => (
    <div className="flex flex-col group cursor-pointer">
        <div className="flex items-center justify-between py-4 group-hover:bg-white/5 transition-all">
            <span className="text-[12px] font-medium text-white/90 tracking-wide">{label}</span>
        </div>
        <div className="h-[1px] w-full bg-white/10"></div>
    </div>
);

const BottomNavLink = ({ icon, label }) => (
    <div className="flex flex-col items-center gap-1.5 text-white/30 hover:text-indigo-400 transition-all cursor-pointer group">
        <span className="group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">{icon}</span>
        <span className="text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">{label}</span>
    </div>
);

const PlainBannerCard = () => (
    <div className="min-w-[750px] h-48 bg-white rounded-[40px] shadow-2xl relative group cursor-pointer transition-all active:scale-95 border border-white/5 overflow-hidden">
        {/* Subtle texture/gradient for plain white look */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-100"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>
);

export default PWAHome;
