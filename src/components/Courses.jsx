import React from 'react';

const Courses = () => {
    return (
        <div className="rbt-course-area bg-color-extra2 rbt-section-gap py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="row mb-16">
                    <div className="col-12">
                        <div className="text-center section-title">
                            <span className="subtitle bg-secondary-opacity">Top Popular Course</span>
                        </div>
                    </div>
                </div>

                {/* Course cards container */}
                <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rbt-card variation-01 rounded-[30px] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                            <div className="rbt-card-img h-60 overflow-hidden relative">
                                <img
                                    src={`https://images.unsplash.com/photo-${1516321318423 + i}-f06f85e504b3?auto=format&fit=crop&w=600&q=80`}
                                    alt="Course"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                />
                                <div className="rbt-badge-3 absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">HOT</div>
                            </div>
                            <div className="rbt-card-body p-8">
                                <h4 className="rbt-card-title font-bold text-xl mb-4 group-hover:text-primary transition-colors">Course Title {i}</h4>
                                <p className="rbt-card-text text-gray-500 mb-6 text-sm">Brief description of this amazing course.</p>
                                <div className="rbt-card-bottom flex justify-between items-center pt-6 border-t font-bold">
                                    <span className="price text-primary">$99.00</span>
                                    <a className="rbt-btn-link flex items-center gap-2 hover:text-primary" href="#">Enroll Now <span>→</span></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="text-center load-more-btn mt-16">
                            <a className="rbt-btn btn-gradient btn-lg" href="/courses">
                                <span className="icon-reverse-wrapper flex items-center gap-2">
                                    <span className="btn-text">Load More Courses</span>
                                    <span className="btn-icon">→</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;






