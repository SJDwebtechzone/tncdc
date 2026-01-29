import React from 'react';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Courses from './components/Courses';
import About from './components/About';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Login from './components/Login';

// A simple layout wrapper for our interior pages
const PageLayout = ({ children, title }) => (
    <div className="min-h-screen bg-white">
        {/* Navbar moved above Marquee */}
        <Navbar />
        <Marquee />
        <main className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="bg-gray-50 p-12 rounded-[40px] border border-gray-100 min-h-[400px] flex items-center justify-center">
                    <p className="text-2xl text-gray-400 italic">This is the {title} page content from the source code conversion.</p>
                </div>
            </div>
        </main>
        <Footer />


    </div>
);

const Home = () => (
    <div className="min-h-screen bg-white">
        {/* Navbar moved above Marquee */}
        <Navbar />
        <Marquee />
        <main>
            <Hero />
            <Categories />
            <Courses />
            <About />
            <Counter />
        </main>
        <Footer />

        {/* WhatsApp Floating Switcher */}

    </div>
);

// Define interior pages
export const CoursesPage = () => <PageLayout title="Courses" />;
export const AboutUsPage = () => <PageLayout title="About Us" />;
export const TopPerformersPage = () => <PageLayout title="Top Performers" />;
export const GalleryPage = () => <PageLayout title="Gallery" />;
export const ServicesPage = () => <PageLayout title="Our Services" />;
export const VerificationPage = () => <PageLayout title="Student Verification" />;
export const LoginPage = () => <Login />;

export default Home;
