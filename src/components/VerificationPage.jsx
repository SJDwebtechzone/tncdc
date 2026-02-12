
import React, { useState } from 'react';
import Navbar from './Navbar';
import Marquee from './Marquee';
import Footer from './Footer';
import { Search, ShieldCheck, Zap, CheckCircle, Headphones, Edit3, Database, Star, Loader2, AlertCircle } from 'lucide-react';

// Mock Student Database
const studentData = {
    "601JK6": {
        name: "Sathish S/O Mani Kanna",
        mobile: "9500396045",
        email: "priyajass33@gmail.com",
        course: "ADVANCE DIPLOMA IN COMPUTER SCIENCE(M-CS-7090)",
        status: "Verified",
        registeredAt: "2026-01-28",
        dob: "18-02-2008"
    },
    "702AB5": {
        name: "Vijay S/O Rathnam",
        mobile: "9876543210",
        email: "vijay.r@example.com",
        course: "DIPLOMA IN WEB DEVELOPMENT",
        status: "Verified",
        registeredAt: "2025-11-15",
        dob: "12-05-2000"
    }
};

const VerificationPage = () => {
    const [certNumber, setCertNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleVerify = () => {
        if (!certNumber.trim()) {
            setError('Please enter a certificate number');
            setResult(null);
            return;
        }

        setLoading(true);
        setError('');
        setResult(null);

        // Simulate API call
        setTimeout(() => {
            const data = studentData[certNumber.trim().toUpperCase()];
            if (data) {
                setResult(data);
            } else {
                setError('Invalid Certificate Number. Please check and try again.');
            }
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col overflow-x-hidden">
            <Navbar />
            <Marquee />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80"
                        alt="Classroom Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-600/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                            Certificate Verification
                        </h1>
                        <p className="text-white/90 text-sm md:text-base max-w-xl mb-8 font-medium">
                            Instantly verify the authenticity of your credentials with our advanced verification system
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 flex items-center gap-2 text-white font-bold text-sm">
                                <ShieldCheck size={18} />
                                <span>Secure</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 flex items-center gap-2 text-white font-bold text-sm">
                                <Zap size={18} />
                                <span>Instant</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 flex items-center gap-2 text-white font-bold text-sm">
                                <CheckCircle size={18} />
                                <span>Verified</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Verification Card Section */}
                <div className="container mx-auto px-4 -mt-16 relative z-20 mb-12">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                        <div className="flex items-start gap-6 mb-10">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg shadow-purple-200 flex-shrink-0">
                                <Search className="text-white" size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-extrabold text-[#0f172a] mb-2 tracking-tight">
                                    Student Certificate Verification
                                </h2>
                                <p className="text-gray-400 font-medium">
                                    Enter your student certificate number to verify its authenticity
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={certNumber}
                                    onChange={(e) => setCertNumber(e.target.value)}
                                    placeholder="Student Certificate Number"
                                    className={`w-full h-16 bg-gray-50/50 border-2 ${error ? 'border-red-200' : 'border-gray-100'} rounded-2xl px-6 font-semibold text-[#0f172a] placeholder:text-gray-300 focus:outline-none focus:border-purple-200 focus:bg-white transition-all duration-300`}
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 font-bold group-focus-within:text-purple-400 transition-colors">
                                    #
                                </div>
                            </div>

                            <button
                                onClick={handleVerify}
                                disabled={loading}
                                className="w-full h-16 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-xl shadow-purple-100 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={24} />
                                ) : (
                                    <Search size={20} />
                                )}
                                {loading ? 'Verifying...' : 'Verify Certificate'}
                            </button>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 border border-red-100 animate-in fade-in slide-in-from-top-2">
                                    <AlertCircle size={20} />
                                    <p className="font-semibold text-sm">{error}</p>
                                </div>
                            )}

                            {/* Result Area */}
                            {result && (
                                <div className="mt-8 bg-green-50/30 rounded-2xl border-2 border-green-100 p-8 animate-in fade-in zoom-in-95">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-green-500 p-1.5 rounded-full text-white">
                                            <CheckCircle size={16} />
                                        </div>
                                        <h3 className="text-xl font-bold text-green-700 uppercase tracking-wide">Verification Successful</h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Student Name</p>
                                                <p className="text-[#0f172a] font-bold text-lg">{result.name}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Course Enrolled</p>
                                                <p className="text-[#0f172a] font-semibold">{result.course}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Status</p>
                                                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{result.status}</span>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Registered On</p>
                                                    <p className="text-[#0f172a] font-semibold text-sm">{result.registeredAt}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Contact Information</p>
                                                <p className="text-[#0f172a] font-semibold text-sm">{result.mobile} / {result.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Need Help Section */}
                    <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-50 p-3 rounded-full text-blue-500">
                                <Headphones size={28} />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-[#0f172a]">Need Help?</h3>
                                <p className="text-gray-400 text-sm font-medium">Our support team is here to assist you</p>
                            </div>
                        </div>
                        <button className="bg-[#ff80ab] hover:bg-[#ff4081] text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 hover:shadow-lg active:scale-95">
                            Contact Support
                        </button>
                    </div>
                </div>

                {/* How Our Verification Works Section */}
                <div className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-4">
                                How Our Verification Works
                            </h2>
                            <p className="text-gray-400 font-medium max-w-2xl mx-auto">
                                Experience our streamlined verification process designed for speed and accuracy
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto relative">
                            {/* Desktop Separator Lines */}
                            <div className="hidden lg:block absolute top-[40%] left-[30%] w-[1px] h-20 bg-gray-100"></div>
                            <div className="hidden lg:block absolute top-[40%] left-[67%] w-[1px] h-20 bg-gray-100"></div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-stretch">
                                {/* Step 1 */}
                                <div className="group bg-white p-8 md:p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center border-t-4 border-indigo-400">
                                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 rounded-3xl shadow-lg shadow-indigo-100 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                                        <Edit3 className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f172a] mb-4 tracking-tight">Enter Details</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base">
                                        Select verification type and enter your certificate number
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="group bg-white p-8 md:p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center border-t-4 border-purple-400">
                                    <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-3xl shadow-lg shadow-purple-100 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                                        <Database className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f172a] mb-4 tracking-tight">AI Verification</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base">
                                        Our advanced system cross-references with official databases
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="group bg-white p-8 md:p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center border-t-4 border-blue-400">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-3xl shadow-lg shadow-blue-100 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                                        <Star className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f172a] mb-4 tracking-tight">Get Results</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base">
                                        Receive detailed verification report
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default VerificationPage;
