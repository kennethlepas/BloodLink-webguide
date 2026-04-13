import { Camera, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <Image
                                src="/logo.jpg"
                                alt="BloodLink Logo"
                                width={40}
                                height={50}
                                className="rounded brightness-110"
                            />
                            <span className="text-2xl font-black text-white tracking-tight">
                                Blood<span className="text-red-500">Link</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Connecting Donors · Saving Lives 🇰🇪. Every Drop Counts, Every Life Matters.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com/bloodlinkke" className="hover:text-red-500 transition-colors"><MessageCircle size={20} /></Link>
                            <Link href="https://twitter.com/bloodlinkapp" className="hover:text-red-500 transition-colors"><Globe size={20} /></Link>
                            <Link href="https://instagram.com/bloodlink.ke" className="hover:text-red-500 transition-colors"><Camera size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/donor" className="hover:text-white transition-colors">Donor Guide</Link></li>
                            <li><Link href="/recipient" className="hover:text-white transition-colors">Recipient Guide</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Guidelines */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Support</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/faq#eligibility" className="hover:text-white transition-colors">Eligibility</Link></li>
                            <li><Link href="/donor#process" className="hover:text-white transition-colors">Process</Link></li>
                            <li><Link href="/recipient#recovery" className="hover:text-white transition-colors">Recovery</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center space-x-3">
                                <Mail size={16} className="text-red-500" />
                                <span>support@bloodlink.co.ke</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={16} className="text-red-500" />
                                <span>+254 700 000 000</span>
                            </li>
                            <li className="flex items-center space-x-3 text-balance">
                                <MapPin size={16} className="text-red-500 flex-shrink-0" />
                                <span>Nakuru, Kenya</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
                    <p>© {new Date().getFullYear()} BloodLink Inc. All rights reserved. Made with ❤️ in Kenya 🇰🇪</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-white">Terms</Link>
                        <Link href="#" className="hover:text-white">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
