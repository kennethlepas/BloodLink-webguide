"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChevronDown, Clock, Droplet, Heart, Home, PlusCircle, Search, ShieldCheck, Trash, Trophy } from "lucide-react";
import { useState } from "react";

const FAQ_DATA = [
    {
        q: 'How do I become a blood donor?',
        a: 'Register on BloodLink as a "Donor", complete your profile with your blood type and medical history, then toggle your availability to "Available". You\'ll start receiving matching blood requests in your area.',
        icon: <Heart className="h-5 w-5 text-red-500" />,
        category: 'Getting Started',
    },
    {
        q: 'How does blood type matching work?',
        a: 'BloodLink uses standard blood compatibility rules. When a request is made, our smart engine matches it with compatible donors based on blood type, location, and urgency level to find the best match quickly.',
        icon: <Droplet className="h-5 w-5 text-blue-500" />,
        category: 'Blood Donation',
    },
    {
        q: 'Is my personal information safe?',
        a: 'Yes! We take your privacy seriously. All data is encrypted and stored securely on Firebase. Your personal details are only shared with matched requesters/donors when you agree to help.',
        icon: <ShieldCheck className="h-5 w-5 text-green-500" />,
        category: 'Privacy',
    },
    {
        q: 'How often can I donate blood?',
        a: 'You should wait at least 56 days (8 weeks) between whole blood donations. BloodLink automatically tracks your last donation date and will notify you when you\'re eligible to donate again.',
        icon: <Clock className="h-5 w-5 text-orange-500" />,
        category: 'Blood Donation',
    },
    {
        q: 'How do I create a blood request?',
        a: 'If you\'re a Requester, tap "New Request" from the home screen. Fill in the required blood type, urgency level, hospital name, and contact details. Compatible donors nearby will be notified immediately.',
        icon: <PlusCircle className="h-5 w-5 text-purple-500" />,
        category: 'Requests',
    },
    {
        q: 'What do points and rewards mean?',
        a: 'Donors earn points for every verified donation. Points reflect your contribution to the community and can unlock badges and recognition. It\'s our way of saying thank you!',
        icon: <Trophy className="h-5 w-5 text-yellow-500" />,
        category: 'Rewards',
    },
    {
        q: 'How do I find nearby blood banks?',
        a: 'Use the "Blood Banks" option from Quick Actions on the home screen. Our GPS-powered search shows nearby blood banks with their locations, contact information, and available services.',
        icon: <Home className="h-5 w-5 text-blue-600" />,
        category: 'Blood Banks',
    },
    {
        q: 'Can I delete my account?',
        a: 'Yes, you can request account deletion from Settings > Danger Zone > Delete Account. This will permanently remove all your data. Please note this action is irreversible.',
        icon: <Trash className="h-5 w-5 text-slate-500" />,
        category: 'Account',
    },
];

export default function FAQPage() {
    const [search, setSearch] = useState("");
    const [activeId, setActiveId] = useState<number | null>(null);

    const filteredFaqs = FAQ_DATA.filter(faq =>
        faq.q.toLowerCase().includes(search.toLowerCase()) ||
        faq.a.toLowerCase().includes(search.toLowerCase()) ||
        faq.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <main className="bg-slate-50 flex-grow py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h1>
                        <p className="text-lg text-slate-600">Find answers to common questions about using BloodLink.</p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-12">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search questions, categories, or keywords..."
                            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="space-y-4">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeId === index ? 'border-blue-500 shadow-md shadow-blue-50' : 'border-slate-100 shadow-sm'
                                        }`}
                                >
                                    <button
                                        onClick={() => setActiveId(activeId === index ? null : index)}
                                        className="w-full flex items-center gap-4 p-5 text-left"
                                    >
                                        <div className="p-2 bg-slate-50 rounded-xl flex-shrink-0">
                                            {faq.icon}
                                        </div>
                                        <div className="flex-grow">
                                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 block">
                                                {faq.category}
                                            </span>
                                            <h3 className="text-base font-bold text-slate-900 leading-tight">
                                                {faq.q}
                                            </h3>
                                        </div>
                                        <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${activeId === index ? 'rotate-180 text-blue-500' : ''}`} />
                                    </button>

                                    <div className={`transition-all duration-300 overflow-hidden ${activeId === index ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="p-5 pt-0 ml-14 border-l-2 border-blue-50">
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-200">
                                <div className="p-4 bg-slate-50 rounded-full inline-block mb-4">
                                    <Search className="h-8 w-8 text-slate-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
                                <p className="text-slate-500">We couldn't find anything matching "{search}"</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-16 bg-blue-50 rounded-3xl p-8 border border-blue-100 flex flex-col md:flex-row items-center gap-6">
                        <div className="p-4 bg-blue-600 rounded-2xl text-white">
                            <PlusCircle size={32} />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
                            <p className="text-slate-600 text-sm">Our support team is always ready to help you with any issues.</p>
                        </div>
                        <button className="px-6 py-3 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
