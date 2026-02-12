import React from 'react';

const Hero = () => {
    return (
        <div className="rbt-banner-area rbt-banner-1 relative overflow-hidden 
        bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">

            {/* Aesthetic Blur Background Circles */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

            <div className="container-fluid relative z-10">
                <div className="row">
                    <div className="col-12 pb-[120px] pt-[20px]">
                        <div className="container mx-auto">

                            {/* Glass Card Wrapper */}
                            <div className="content relative flex flex-col lg:flex-row items-center
                            bg-white/60 backdrop-blur-xl
                            shadow-2xl rounded-3xl
                            p-8 md:p-12 border border-white/40">

                                {/* LEFT CONTENT */}
                                <div className="w-full lg:w-1/2 inner">

                                    <div className="rbt-new-badge rbt-new-badge-one inline-flex items-center gap-2 
                                    px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 
                                    rounded-full text-white font-semibold text-sm mb-6 shadow-md">
                                        <span className="rbt-new-badge-icon">🏆</span>
                                        The Leader in Online Learning
                                    </div>

                                    <h1 className="title text-4xl md:text-6xl font-bold 
                                    bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600
                                    bg-clip-text text-transparent
                                    leading-tight mb-8">
                                        Build The Skills <br /> To Drive Your Career.
                                    </h1>

                                    <p className="description text-lg text-gray-700 mb-10 max-w-lg">
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                        <strong className="text-gray-900 ml-1">Velit officia consequat.</strong>
                                    </p>

                                    <div className="slider-btn">
                                        <a className="rbt-btn btn-gradient hover-icon-reverse
                                        rounded-full px-8 py-3
                                        shadow-lg hover:shadow-xl
                                        hover:scale-105 transition duration-300"
                                            href="/courses">
                                            <span className="icon-reverse-wrapper flex items-center gap-2">
                                                <span className="btn-text">View Courses</span>
                                                <span className="btn-icon">→</span>
                                            </span>
                                        </a>
                                    </div>

                                </div>

                                {/* RIGHT IMAGE */}
                                <div className="w-full lg:w-1/2 shape-wrapper mt-12 lg:mt-0 overflow-hidden rounded-3xl" id="scene">

                                    <img
                                        src="https://tncdc.in/website/assets/images/home_main_banner.png"
                                        alt="Hero"
                                        className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
                                    />

                                    <div className="hero-bg-shape-1 layer opacity-60">
                                        <img
                                            src="https://tncdc.in/website/assets/images/shape/shape-01.png"
                                            alt="shape"
                                        />
                                    </div>

                                    <div className="hero-bg-shape-2 layer opacity-60">
                                        <img
                                            src="https://tncdc.in/website/assets/images/shape/shape-02.png"
                                            alt="shape"
                                        />
                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* Background Shape */}
                        <div className="hero-bg-main-shape opacity-40">
                            <img
                                src="https://tncdc.in/website/assets/images/bg/banner-bg-shape-1.svg"
                                alt="Banner Background"
                                className="w-full"
                            />
                        </div>

                        {/* Banner cards */}
                        <div className="banner-card pb-[60px] mb-[50px] swiper 
                        rbt-dot-bottom-center banner-swiper-active mt-20">
                            <div className="swiper-wrapper">
                                {/* Cards */}
                            </div>
                            <div className="rbt-swiper-pagination"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
