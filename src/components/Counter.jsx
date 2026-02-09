import React from 'react';

const Counter = () => {
    return (
        <div className="rbt-counterup-area bg-color-extra2 rbt-section-gapBottom py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="row mb-16">
                    <div className="col-12 text-center section-title">
                        <span className="subtitle bg-primary-opacity">Why Choose Us</span>
                        <h2 className="title text-3xl md:text-5xl font-bold mt-4 leading-tight">
                            Creating A Community Of <br className="hidden md:block" /> Life Long Learners.
                        </h2>
                    </div>
                </div>
                <div className="row grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="rbt-counterup p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all">
                            <div className="inner">
                                <div className="content font-bold">
                                    <h3 className="counter text-4xl mb-2 text-primary">100+</h3>
                                    <span className="subtitle text-gray-500 uppercase tracking-widest text-xs">Stat Name {i}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Counter;






