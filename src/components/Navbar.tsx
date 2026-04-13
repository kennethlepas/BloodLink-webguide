"use client";

import { Droplet, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Donor Guide", href: "/donor" },
        { name: "Recipient Guide", href: "/recipient" },
        { name: "FAQs", href: "/faq" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-200">
                                <Droplet className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-black text-slate-900 tracking-tight">
                                Blood<span className="text-blue-600">Link</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="https://bloodlink.vercel.app" // Placeholder for main app
                            className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-blue-600 transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-base font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <Link
                                href="https://bloodlink.vercel.app"
                                className="block w-full text-center px-4 py-3 bg-blue-600 text-white font-bold rounded-xl"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
