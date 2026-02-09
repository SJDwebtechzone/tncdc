import React from 'react';

const Hero = () => {
    return (
        <div className="rbt-banner-area rbt-banner-1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pb-[120px] pt-[70px]">
                        <div className="container mx-auto">
                            {/* Content and Shape Wrapper are inside .content in the original source */}
                            <div className="content relative flex flex-col lg:flex-row items-center">

                                <div className="w-full lg:w-1/2 inner">
                                    <div className="rbt-new-badge rbt-new-badge-one inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                                        <span className="rbt-new-badge-icon">🏆</span>
                                        The Leader in Online Learning
                                    </div>

                                    <h1 className="title text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
                                        Build The Skills <br /> To Drive Your Career.
                                    </h1>
                                    <p className="description text-lg text-gray-600 mb-10 max-w-lg">
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                        <strong className="text-gray-900 ml-1">Velit officia consequat.</strong>
                                    </p>
                                    <div className="slider-btn">
                                        <a className="rbt-btn btn-gradient hover-icon-reverse" href="/courses">
                                            <span className="icon-reverse-wrapper flex items-center gap-2">
                                                <span className="btn-text">View Courses</span>
                                                <span className="btn-icon">→</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 shape-wrapper" id="scene">
                                    <img
                                        src="https://tncdc.in/website/assets/images/home_main_banner.png"
                                        alt="Hero Image"
                                        className="relative z-10 w-full"
                                    />
                                    <div className="hero-bg-shape-1 layer">
                                        <img
                                            src="https://tncdc.in/website/assets/images/shape/shape-01.png"
                                            alt="Hero Image Background Shape"
                                        />
                                    </div>
                                    <div className="hero-bg-shape-2 layer">
                                        <img
                                            src="https://tncdc.in/website/assets/images/shape/shape-02.png"
                                            alt="Hero Image Background Shape"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Background Shape requested by user */}
                        <div className="hero-bg-main-shape">
                            <img
                                src="https://tncdc.in/website/assets/images/bg/banner-bg-shape-1.svg"
                                alt="Banner Background Shape"
                                className="w-full"
                            />
                        </div>

                        {/* Banner cards section from original source structure */}
                        <div className="banner-card pb-[60px] mb-[50px] swiper rbt-dot-bottom-center banner-swiper-active mt-20">
                            <div className="swiper-wrapper">
                                {/* Single Cards placeholder */}
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






