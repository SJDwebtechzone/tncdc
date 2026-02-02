import React from 'react';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import BrandSlider from './components/BrandSlider';
import Categories from './components/Categories';
import Courses from './components/Courses';
import About from './components/About';
import Counter from './components/Counter';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Login from './components/Login';
import CoursesPageContent from './components/CoursesPage';

import AboutPage from './components/AboutPage';
import GalleryPageContent from './components/GalleryPage';
import ServicesPageContent from './components/ServicesPage';

// A simple layout wrapper for our interior pages
const PageLayout = ({ children, title }) => (
    <div className="min-h-screen bg-white">
        {/* Navbar moved above Marquee */}
        <Navbar />

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
            <BrandSlider />
            <Categories />
            <Courses />
            <About />
            <Counter />
            <Team />
            <Testimonials />
            <Events />
            <Blog />
            <FAQ />
        </main>
        <Footer />

        {/* WhatsApp Floating Switcher */}

    </div>
);



// Define interior pages
export const CoursesPage = () => <CoursesPageContent />;
export const AboutUsPage = () => <AboutPage />;
export const TopPerformersPage = () => <PageLayout title="Top Performers" />;
export const GalleryPage = () => <GalleryPageContent />;
export const ServicesPage = () => <ServicesPageContent />;
export const VerificationPage = () => <PageLayout title="Student Verification" />;
export const LoginPage = () => <Login />;

export default Home;
