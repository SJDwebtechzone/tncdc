import React from 'react';

const About = () => {
    return (
        <div className="rbt-about-area bg-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1 pt-[100px] py-16">
            <div className="container mx-auto px-4">
                <div className="row flex flex-col lg:flex-row items-center gap-16">

                    <div className="col-lg-6 w-full lg:w-1/2 relative">
                        <div className="thumbnail-wrapper relative w-full h-[600px]">
                            {/* Image 1: Large left - woman with purple background */}
                            <div className="thumbnail image-1 absolute left-0 top-0 w-[55%] h-[75%] z-10">
                                <img
                                    src="https://tncdc.in/website/assets/images/about/about-01.png"
                                    alt="Education Images"
                                    className="w-full h-full object-contain rounded-3xl shadow-2xl"
                                />
                            </div>

                            {/* Image 2: Top right - man with glasses */}
                            <div className="thumbnail image-2 hidden xl:block absolute right-0 top-0 w-[42%] h-[45%] z-20">
                                <img
                                    src="https://tncdc.in/website/assets/images/about/about-02.png"
                                    alt="Education Images"
                                    className="w-full h-full object-contain rounded-3xl shadow-2xl border-4 border-white"
                                />
                            </div>

                            {/* Image 3: Bottom center - woman with glasses */}
                            <div className="thumbnail image-3 absolute left-[15%] bottom-0 w-[55%] h-[55%] z-30">
                                <img
                                    src="https://tncdc.in/website/assets/images/about/about-03.png"
                                    alt="Education Images"
                                    className="w-full h-full object-contain rounded-3xl shadow-2xl border-4 border-white"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 w-full lg:w-1/2">
                        <div className="inner pl-[50px] lg:pl-10">
                            <div className="section-title text-start">
                                <span className="subtitle bg-coral-opacity">Know About Us</span>
                                <h2 className="title text-3xl md:text-5xl font-bold mt-4 leading-tight">
                                    Know About Histudy <br className="hidden md:block" /> Learning Platform
                                </h2>
                            </div>

                            <p className="description mt-8 text-lg text-gray-600">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            </p>

                            <div className="rbt-feature-wrapper mt-10">
                                <div className="rbt-feature feature-style-2 flex items-start gap-6 mb-8 hover:bg-gray-50 p-4 rounded-2xl transition-all">
                                    <div className="icon bg-emerald-opacity p-4 rounded-xl text-primary text-2xl">
                                        <span className="feather-heart text-emerald-500">❤</span>
                                    </div>
                                    <div className="feature-content">
                                        <h6 className="feature-title font-bold text-xl mb-2">Flexible Classes</h6>
                                        <p className="feature-description text-gray-500">It is a long established fact that a reader will be distracted by this on readable content.</p>
                                    </div>
                                </div>
                                <div className="rbt-feature feature-style-2 flex items-start gap-6 hover:bg-gray-50 p-4 rounded-2xl transition-all">
                                    <div className="icon bg-primary-opacity p-4 rounded-xl text-primary text-2xl">
                                        <span className="feather-book">📖</span>
                                    </div>
                                    <div className="feature-content">
                                        <h6 className="feature-title font-bold text-xl mb-2">Learn From Anywhere</h6>
                                        <p className="feature-description text-gray-500">Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-btn mt-12">
                                <a className="rbt-btn btn-gradient hover-icon-reverse" href="https://tncdc.in/aboutus">
                                    <span className="icon-reverse-wrapper flex items-center gap-2">
                                        <span className="btn-text">More About Us</span>
                                        <span className="btn-icon">→</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;






