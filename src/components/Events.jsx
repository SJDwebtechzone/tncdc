import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Events = () => {
    const events = [
        {
            title: "International Education Expo 2026",
            date: "25 March, 2026",
            time: "10:00 AM - 04:00 PM",
            location: "Chennai, Tamil Nadu",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Career Guidance Workshop",
            date: "12 April, 2026",
            time: "11:00 AM - 01:00 PM",
            location: "Virtual Event",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Tech Innovation Summit",
            date: "05 May, 2026",
            time: "09:00 AM - 06:00 PM",
            location: "Coimbatore, TN",
            image: "https://images.unsplash.com/photo-1505373673636-71f57ad3153f?auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-primary to-secondary overflow-hidden relative">
            {/* Decorative bg element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-white/5 skew-y-12 -z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="px-4 py-1.5 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full mb-4 inline-block border border-white/20">
                        Upcoming Events
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                        Join Our Interactive Events
                    </h2>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true, el: '.custom-pagination' }}
                    navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
                    autoplay={{ delay: 5000 }}
                    className="pb-16"
                >
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-[30px] overflow-hidden group h-full flex flex-col shadow-xl">
                                <div className="relative h-56 overflow-hidden">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 inline-block bg-primary text-white p-3 rounded-2xl text-center min-w-[60px]">
                                        <span className="block text-xl font-bold leading-none">{event.date.split(' ')[0]}</span>
                                        <span className="block text-[10px] uppercase font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow">
                                    <h4 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors line-clamp-2">
                                        {event.title}
                                    </h4>

                                    <ul className="space-y-4 text-gray-500 text-sm mb-8">
                                        <li className="flex items-center gap-3">
                                            <Calendar size={16} className="text-primary" /> {event.time}
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <MapPin size={16} className="text-primary" /> {event.location}
                                        </li>
                                    </ul>

                                    <a href="#" className="flex items-center gap-2 font-bold text-gray-900 hover:text-primary transition-colors group/link mt-auto">
                                        Get Ticket <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center items-center gap-8 mt-4">
                    <button className="swiper-prev bg-white/10 hover:bg-white/20 p-3 rounded-full text-white border border-white/20 transition-all">
                        <ArrowRight size={24} className="rotate-180" />
                    </button>
                    <div className="custom-pagination !w-auto"></div>
                    <button className="swiper-next bg-white/10 hover:bg-white/20 p-3 rounded-full text-white border border-white/20 transition-all">
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Events;
