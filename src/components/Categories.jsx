import React from 'react';

const Categories = () => {
    return (
        <div className="rbt-categories-area bg-color-white rbt-section-gapBottom">
            <div className="container mx-auto px-4">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center section-title">
                            <span className="subtitle bg-primary-opacity">CATEGORIES</span>
                            <h2 className="title text-3xl md:text-4xl font-bold mt-4">
                                Explore Top Courses Categories <br className="hidden md:block" /> That Change Yourself
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* Mocking the loop with original structure style */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="rbt-cat-box p-8 border border-gray-100 rounded-3xl flex items-center gap-6 hover:shadow-xl transition-all">
                            <div className="icon p-4 bg-primary/10 rounded-2xl text-primary text-2xl font-bold">
                                {i}
                            </div>
                            <div className="content">
                                <h6 className="title font-bold text-lg mb-1">Category Name {i}</h6>
                                <p className="description text-gray-500 text-sm">Description for category {i}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;






