import React, { useState } from 'react';

const Team = () => {
    const [activeTab, setActiveTab] = useState(0);

    const team = [
        {
            name: "Dr. Rajesh Kumar",
            role: "Senior Professor",
            bio: "Expert in Computer Science with over 15 years of academic and industrial experience in AI.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Priya Sharma",
            role: "Creative Director",
            bio: "Specializes in digital arts and UI/UX design. She has led major design projects for top tech firms.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Ahmed Khan",
            role: "Business Consultant",
            bio: "Helping students master business strategies and entrepreneurship through practical workshops.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-4 inline-block">
                        Our Teachers
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                        Learn From The Experts
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Active Teacher Info */}
                    <div className="w-full lg:w-3/5 bg-gray-50 rounded-[40px] p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-0"></div>

                        <div className="flex flex-col md:flex-row gap-10 relative z-10">
                            <div className="w-full md:w-2/5 aspect-square rounded-3xl overflow-hidden shadow-xl">
                                <img
                                    src={team[activeTab].image}
                                    alt={team[activeTab].name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="w-full md:w-3/5 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{team[activeTab].name}</h3>
                                <p className="text-primary font-bold text-lg mb-6 uppercase tracking-wider">{team[activeTab].role}</p>
                                <p className="text-gray-600 text-lg leading-relaxed">{team[activeTab].bio}</p>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnails to switch */}
                    <div className="w-full lg:w-2/5 grid grid-cols-3 lg:grid-cols-1 gap-6">
                        {team.map((member, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`flex items-center gap-6 p-4 rounded-3xl transition-all ${activeTab === idx ? 'bg-primary/5 border-2 border-primary shadow-lg scale-105' : 'bg-white border-2 border-transparent grayscale hover:grayscale-0 hover:bg-gray-50'}`}
                            >
                                <div className="w-16 h-16 rounded-2xl overflow-hidden hidden sm:block">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <h5 className="font-bold text-gray-900 leading-tight">{member.name}</h5>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{member.role}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;






