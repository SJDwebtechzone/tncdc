import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white rounded-[20px] shadow-2xl overflow-hidden w-full max-w-6xl h-auto md:h-[800px] flex flex-col md:flex-row">

                {/* Left Side - Blue Branding Panel */}
                <div className="w-full md:w-1/2 bg-blue-600 relative overflow-hidden flex items-center justify-center p-12">
                    {/* Background Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

                    {/* Logo Card */}
                    <div className="bg-white px-8 py-10 rounded shadow-lg w-full max-w-sm flex flex-col items-center justify-center text-center z-10">
                        <Link to="/" className="w-full flex flex-col items-center">
                            <img
                                src="https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/tncdc.in/website/logo/image_6979ce5039f69.png"
                                alt="TNCDC Logo"
                                className="h-16 object-contain mb-4"
                            />
                            <h3 className="text-2xl font-bold text-blue-900">TNCDC Academy</h3>
                            <p className="text-sm font-bold text-gray-800 tracking-widest mt-1">BUILDERS</p>
                        </Link>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 p-12 bg-white flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">Welcome Back</h2>
                        <p className="text-lg text-gray-500 text-center mb-8">Please login to your account to continue</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-base font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 text-lg rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-base font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 text-lg rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg shadow-blue-600/30"
                            >
                                SIGN IN
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <div className="flex items-center justify-center space-x-2 text-gray-600">
                                <span className="text-sm">Install as Progressive Web App (Mobile App) for Students</span>
                                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded font-bold">FREE</span>
                            </div>
                            <p className="text-sm text-center text-gray-400 mt-2">Access your courses anytime, anywhere with our mobile app experience</p>

                            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-3 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                Install Mobile App
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
