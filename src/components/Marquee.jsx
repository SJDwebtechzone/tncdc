import React from 'react';

const Marquee = () => {
    const messages = [
        "Welcome to TamilNadu Career Development Council",
        "Join our courses today!",
        "Contact us for more info!"
    ];

    return (
        <div className="marquee-gradient-container">
            <div className="marquee-gradient-content flex gap-12">
                {messages.map((msg, index) => (
                    <span key={index} className="whitespace-nowrap flex items-center">
                        {msg}
                    </span>
                ))}
                {/* Duplicate for seamless loop if needed, but the animation handles it via translate */}
                {messages.map((msg, index) => (
                    <span key={`dup-${index}`} className="whitespace-nowrap flex items-center">
                        {msg}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
