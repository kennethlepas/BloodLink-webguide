"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Donor", href: "/donor" },
        { name: "Recipient", href: "/recipient" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center group">
                            <div className="relative w-12 h-14 md:w-14 md:h-16 rounded-xl overflow-hidden border-2 border-slate-100 group-hover:border-red-500 transition-all duration-300 shadow-md">
                                <Image
                                    src="/logo.jpg"
                                    alt="BloodLink Logo"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="ml-3">
                                <span className="text-xl md:text-2xl font-black text-[#0A2647] tracking-tight block leading-none">
                                    BLOODLINK
                                </span>
                                <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em]">
                                    Kenya
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 rounded-xl text-sm font-bold text-[#0A2647] hover:bg-slate-50 hover:text-red-600 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="ml-4 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-all shadow-lg shadow-red-100 active:scale-95"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl text-[#0A2647] hover:bg-slate-50 transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-base font-bold text-[#0A2647] hover:text-red-600 hover:bg-slate-50 rounded-xl transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 text-base font-bold text-white bg-red-600 rounded-xl text-center shadow-md mt-4"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
