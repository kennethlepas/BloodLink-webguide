import { Camera, Globe, Mail, MapPin, MessageCircle, MessageSquare, Phone, Play, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#0A2647] text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center group mb-6">
                            <div className="relative w-14 h-16 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl bg-white/5 backdrop-blur-sm group-hover:border-red-500 transition-all duration-300 flex-shrink-0">
                                <Image
                                    src="/logo.jpg"
                                    alt="BloodLink Logo"
                                    fill
                                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="ml-3">
                                <span className="text-xl font-black text-white tracking-tighter block leading-none">
                                    BLOODLINK
                                </span>
                                <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.3em] mt-1 block">
                                    Kenya
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-8 opacity-80">
                            Connecting Donors · Saving Lives 🇰🇪. Every Drop Counts, Every Life Matters. Founded in Nakuru, serving all 47 counties.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="https://facebook.com/bloodlinkke" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300">
                                <MessageSquare size={18} />
                            </Link>
                            <Link href="https://twitter.com/bloodlinkapp" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300">
                                <Send size={18} />
                            </Link>
                            <Link href="https://instagram.com/bloodlink.ke" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300">
                                <Camera size={18} />
                            </Link>
                            <Link href="https://wa.me/254115408612" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300">
                                <MessageCircle size={18} />
                            </Link>
                            <Link href="https://linkedin.com/company/bloodlink" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300">
                                <Globe size={18} />
                            </Link>
                            <Link href="https://youtube.com/@bloodlinkke" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300">
                                <Play size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Platform</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/" className="hover:text-red-400 transition-colors flex items-center gap-2">Home</Link></li>
                            <li><Link href="/about" className="hover:text-red-400 transition-colors flex items-center gap-2">About Us</Link></li>
                            <li><Link href="/donor" className="hover:text-red-400 transition-colors flex items-center gap-2">Donor Guide</Link></li>
                            <li><Link href="/recipient" className="hover:text-red-400 transition-colors flex items-center gap-2">Recipient Guide</Link></li>
                            <li><Link href="/faq" className="hover:text-red-400 transition-colors flex items-center gap-2">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Support</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/contact" className="hover:text-red-400 transition-colors">Help Center</Link></li>
                            <li><Link href="/faq#eligibility" className="hover:text-red-400 transition-colors">Eligibility Rules</Link></li>
                            <li><Link href="/donor#process" className="hover:text-red-400 transition-colors">The Process</Link></li>
                            <li><Link href="/recipient#safety" className="hover:text-red-400 transition-colors">Safety Protocols</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start space-x-3">
                                <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                                    <Mail size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Email Support</span>
                                    <a href="mailto:kennethlepas@gmail.com" className="text-white hover:text-red-400 transition-colors font-medium">kennethlepas@gmail.com</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                                    <Phone size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Call / WhatsApp</span>
                                    <a href="tel:+254115408612" className="text-white hover:text-red-400 transition-colors font-medium">+254 115 408 612</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                    <MapPin size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Location</span>
                                    <span className="text-white font-medium">Nakuru, Kenya</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
                    <p className="opacity-60 text-center md:text-left">
                        © {new Date().getFullYear()} BloodLink Inc. All rights reserved. <br className="md:hidden" />
                        Designed with excellence for the Kenyan context.
                    </p>
                    <div className="flex space-x-8 font-bold">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
