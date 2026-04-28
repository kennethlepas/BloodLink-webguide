"use client";

import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Donor", href: "/donor" },
        { name: "Recipient", href: "/recipient" },
        { name: "FAQ", href: "/faq" },
    ];

    const isActive = (path: string) => pathname === path;

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Close on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" ref={menuRef}>
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
                                    Bloodlink
                                </span>
                                <span className="text-[9px] md:text-xs font-bold text-red-600 uppercase tracking-[0.2em] mt-0.5 block">
                                    Online blood bank platform
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
                    <div className="md:hidden flex items-center relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl text-[#0A2647] hover:bg-slate-50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>

                        {/* Compact dropdown menu */}
                        <div
                            className={`absolute right-0 top-full mt-2 md:hidden w-52 bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-300/40 transition-all duration-200 ease-out origin-top-right ${isOpen
                                ? "opacity-100 scale-100 translate-y-0"
                                : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                                }`}
                        >
                            <div className="p-2">
                                {/* Heading */}
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] px-3 pt-1.5 pb-1">
                                    Navigate
                                </p>

                                {/* Nav Links */}
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-semibold transition-all tap-active ${isActive(link.href)
                                            ? "text-red-600 bg-red-50"
                                            : "text-[#0A2647] hover:text-red-600 hover:bg-slate-50 active:bg-slate-100"
                                            }`}
                                    >
                                        {link.name}
                                        <ChevronRight className={`h-3.5 w-3.5 ${isActive(link.href) ? "text-red-400" : "text-slate-300"}`} />
                                    </Link>
                                ))}

                                {/* Contact CTA */}
                                <div className="mt-1 pt-1.5 border-t border-slate-100 px-1">
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className={`block w-full py-2 rounded-xl text-center text-[13px] font-bold transition-all shadow-sm active:scale-[0.98] tap-active ${isActive("/contact")
                                            ? "bg-red-700 text-white shadow-red-200"
                                            : "bg-red-600 text-white hover:bg-red-700 shadow-red-100"
                                            }`}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
