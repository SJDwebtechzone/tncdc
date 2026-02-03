import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="rbt-footer footer-style-1 bg-white border-t border-gray-100">
            <div className="footer-top py-20">
                <div className="container mx-auto px-4">
                    <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        <div className="col-lg-4 mt-8">
                            <div className="footer-widget">
                                <div className="logo logo-dark mb-8">
                                    <Link to="/">
                                        <img src="https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/tncdc.in/website/logo/image_6979ce5039f69.png" alt="Logo" className="h-16" />
                                    </Link>
                                </div>
                                <div className="flex flex-col gap-6 mt-8">
                                    <div className="contact-btn">
                                        <Link className="rbt-btn btn-gradient radius-round" to="/contactus">
                                            <span className="icon-reverse-wrapper flex items-center gap-2">
                                                <span className="btn-text">Contact With Us</span>
                                                <span className="btn-icon">→</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <a href="#" className="app-store-link">
                                            <img src="https://tncdc.in/website/assets/images/app/google-play.png" alt="Google Play" className="h-10" />
                                        </a>
                                        <a href="#" className="play-store-link">
                                            <img src="https://tncdc.in/website/assets/images/app/app-store.png" alt="App Store" className="h-10" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-2 mt-8">
                            <div className="footer-widget">
                                <h5 className="ft-title font-bold text-xl mb-8">Useful Links</h5>
                                <ul className="ft-link space-y-4 text-gray-500">
                                    <li><Link to="/study_materials" className="hover:text-primary transition-colors">Study Materials</Link></li>
                                    <li><Link to="/certificates" className="hover:text-primary transition-colors">Certificates</Link></li>
                                    <li><Link to="/affiliations" className="hover:text-primary transition-colors">Our Affiliations</Link></li>
                                    <li><Link to="/payment_details" className="hover:text-primary transition-colors">Payment Details</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 mt-8">
                            <div className="footer-widget">
                                <h5 className="ft-title font-bold text-xl mb-8">Our Company</h5>
                                <ul className="ft-link space-y-4 text-gray-500">
                                    <li><Link to="/contactus" className="hover:text-primary transition-colors">Contact Us</Link></li>
                                    <li><Link to="/posts" className="hover:text-primary transition-colors">Blog</Link></li>
                                    <li><Link to="/jobs" className="hover:text-primary transition-colors">Jobs</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-8">
                            <div className="footer-widget">
                                <h5 className="ft-title font-bold text-xl mb-8">Get Contact</h5>
                                <ul className="ft-link space-y-4 text-gray-500">
                                    <li><span className="font-bold text-gray-900">Phone:</span> +444 555 666 777</li>
                                    <li><span className="font-bold text-gray-900">E-mail:</span> admin@gmail.com</li>
                                    <li><span className="font-bold text-gray-900">Location:</span> 5678 Bangla Main Road</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="copyright-area py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="row flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">Copyright 2026-27 © <a href="https://ditrpindia.org/" className="text-primary font-bold">DITRP INDIA</a> All rights reserved.</p>
                        <ul className="flex flex-wrap gap-8 text-sm text-gray-500">
                            <li><Link to="/privacy_policy" className="hover:text-primary">Privacy policy</Link></li>
                            <li><Link to="/terms_conditions" className="hover:text-primary">Term and conditions</Link></li>
                            <li><Link to="/refund_policy" className="hover:text-primary">Refund policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
