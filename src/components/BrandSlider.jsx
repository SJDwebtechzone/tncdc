import React from 'react';

const BrandSlider = () => {
    // Use placeholder logos as original source had empty list in snippet
    const brands = [
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Adobe_Systems_logo_and_wordmark.svg",
    ];

    return (
        <section className="brand-section">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h5 className="text-xl font-bold text-gray-500">
                    Trusted by <span className="text-primary">industry leaders</span> and{' '}
                    <span className="text-secondary">valued partners</span> worldwide
                </h5>
            </div>

            <div className="flex items-center">
                <div className="brand-list px-12">
                    {brands.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                            <img src={logo} alt="Brand" className="h-8 md:h-12 w-auto object-contain" />
                        </div>
                    ))}
                    {/* Duplicate for seamless scroll */}
                    {brands.map((logo, index) => (
                        <div key={`dup-${index}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                            <img src={logo} alt="Brand" className="h-8 md:h-12 w-auto object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandSlider;






