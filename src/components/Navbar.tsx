"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Donor", href: "/donor" },
        { name: "Recipient", href: "/recipient" },
        { name: "FAQ", href: "/faq" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 md:h-24">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center group py-1.5">
                            <div className="relative w-11 h-13 md:w-16 md:h-20 rounded-xl md:rounded-2xl overflow-hidden border-2 border-slate-100 group-hover:border-red-500 transition-all duration-300 shadow-xl bg-white flex-shrink-0">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="BloodLink Logo"
                                    fill
                                    priority
                                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="ml-3 md:ml-4">
                                <span className="text-lg md:text-2xl font-black text-[#0A2647] tracking-tighter block leading-none">
                                    BLOODLINK
                                </span>
                                <span className="text-[9px] md:text-xs font-bold text-red-600 uppercase tracking-[0.3em] mt-0.5 block">
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
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${isActive(link.href)
                                    ? "text-red-600 bg-red-50/50"
                                    : "text-[#0A2647] hover:bg-slate-50 hover:text-red-600"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className={`ml-4 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg active:scale-95 ${isActive('/contact')
                                ? "bg-red-700 text-white shadow-red-200"
                                : "bg-red-600 text-white hover:bg-red-700 shadow-red-100"
                                }`}
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
                                className={`block px-3 py-3 text-base font-bold rounded-xl transition-all ${isActive(link.href)
                                    ? "text-red-600 bg-red-50"
                                    : "text-[#0A2647] hover:text-red-600 hover:bg-slate-50"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-3 text-base font-bold rounded-xl text-center shadow-md mt-4 ${isActive('/contact')
                                ? "bg-red-700 text-white"
                                : "bg-red-600 text-white"
                                }`}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>

    );
}
