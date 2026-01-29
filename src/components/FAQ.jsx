import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const faqs = [
        {
            question: "How do I enroll in a course?",
            answer: "Exactly how you would expect! Simply click the 'Enroll Now' button on any course card or page, follow the registration steps, and you'll be ready to start your learning journey immediately."
        },
        {
            question: "Are the courses certified?",
            answer: "Yes, all our major programs come with an industry-recognized certificate upon successful completion of the course requirements and final assessment."
        },
        {
            question: "Can I access the course material offline?",
            answer: "While the primary learning happens online, many of our resources including PDF guides and code snippets are available for download. You can also use our PWA for seamless mobile access."
        },
        {
            question: "What is the refund policy?",
            answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course quality, provided you haven't completed more than 20% of the content."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* FAQ List */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="mb-12">
                            <span className="px-4 py-1.5 bg-pink-100 text-pink-600 font-bold text-xs uppercase tracking-widest rounded-full mb-4 inline-block">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                                Got a question?<br /> We’re here to help
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className={`rounded-3xl border border-gray-100 overflow-hidden transition-all ${activeIdx === idx ? 'shadow-xl shadow-gray-200/50 ring-1 ring-primary/20' : ''}`}>
                                    <button
                                        onClick={() => setActiveIdx(activeIdx === idx ? -1 : idx)}
                                        className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 group"
                                    >
                                        <span className={`text-lg font-bold transition-colors ${activeIdx === idx ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
                                            {faq.question}
                                        </span>
                                        <ChevronDown size={20} className={`text-gray-400 transition-transform ${activeIdx === idx ? 'rotate-180 text-primary' : ''}`} />
                                    </button>

                                    <div className={`px-8 transition-all duration-300 ease-in-out ${activeIdx === idx ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-50 uppercase-first">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Banner Images */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative">
                            <img
                                src="https://tncdc.in/website/assets/images/about/about-01.jpg"
                                alt="Banner 1"
                                className="rounded-[40px] shadow-2xl w-4/5 ml-auto"
                            />
                            <div className="absolute -bottom-10 -left-10 w-1/2 hidden md:block">
                                <img
                                    src="https://tncdc.in/website/assets/images/about/about-10.jpg"
                                    alt="Banner 2"
                                    className="rounded-[30px] shadow-2xl border-8 border-white"
                                />
                            </div>

                            {/* Decorative dots */}
                            <div className="absolute top-10 left-10 w-20 h-20 border-t-8 border-l-8 border-primary/20 -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
