import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonialsOne = [
        { name: "John Doe", role: "Software Engineer", comment: "The courses are extremely detailed and easy to follow. Highly recommended!" },
        { name: "Jane Smith", role: "UI Designer", comment: "The mentors are very helpful and provide real-world insights." },
        { name: "Mike Johnson", role: "Data Scientist", comment: "Great platform for learning new technologies at your own pace." },
        { name: "Sarah Williams", role: "Manager", comment: "Excellent resources and community support for all learners." },
    ];

    const testimonialsTwo = [
        { name: "Robert Brown", role: "Web Developer", comment: "I switched careers thanks to the intensive web development module." },
        { name: "Emma Davis", role: "Marketing Specialist", comment: "Practical skills that actually matter in the industry today." },
        { name: "Chris Wilson", role: "Student", comment: "Top-notch quality content and very affordable pricing." },
        { name: "Olivia Taylor", role: "Freelancer", comment: "Best learning experience I've had so far. The UI is great too." },
    ];

    const TestimonialCard = ({ item }) => (
        <div className="flex-shrink-0 w-[400px] p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Quote size={24} />
                </div>
                <div>
                    <h5 className="font-bold text-gray-900">{item.name}</h5>
                    <p className="text-xs text-primary uppercase font-bold tracking-wider">{item.role}</p>
                </div>
            </div>
            <p className="text-gray-600 leading-relaxed italic">"{item.comment}"</p>
        </div>
    );

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <span className="px-4 py-1.5 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-4 inline-block">
                    Education For Everyone
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                    People like histudy education. <br /> No joking - here's the proof!
                </h2>
            </div>

            <div className="relative">
                {/* Row 1 - Scroll Right to Left */}
                <div className="flex gap-6 animate-scroll-infinite mb-8 pb-4">
                    {[...testimonialsOne, ...testimonialsOne].map((item, idx) => (
                        <TestimonialCard key={idx} item={item} />
                    ))}
                </div>

                {/* Row 2 - Scroll Left to Right (CSS handles negative direction if needed, but I'll use simple translate) */}
                <div className="flex gap-6 animate-scroll-infinite flex-row-reverse">
                    {[...testimonialsTwo, ...testimonialsTwo].map((item, idx) => (
                        <TestimonialCard key={idx} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
