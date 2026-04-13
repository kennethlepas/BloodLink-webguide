"use client";

import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoUrl = `mailto:kennethlepas@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.location.href = mailtoUrl;
    };

    const contactInfo = [
        { icon: Mail, label: "Email Us", value: "kennethlepas@gmail.com", href: "mailto:kennethlepas@gmail.com", color: "text-blue-600", bg: "bg-blue-50" },
        { icon: Phone, label: "Call / WhatsApp", value: "+254 115 408 612", href: "tel:+254115408612", color: "text-green-600", bg: "bg-green-50" },
        { icon: MessageCircle, label: "Official WhatsApp", value: "+254 115 408 612", href: "https://wa.me/254115408612", color: "text-emerald-600", bg: "bg-emerald-50" },
        { icon: MapPin, label: "Location", value: "Nakuru, Kenya", href: "#", color: "text-red-600", bg: "bg-red-50" },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Header */}
            <section className="bg-[#0A2647] py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight animate-fade-in-up">Get in Touch</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto font-medium">
                        Have questions about blood donation or need help with the app? Our team is here for you 24/7.
                    </p>
                </div>
            </section>

            <section className="py-20 -mt-12 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            {contactInfo.map((info, i) => (
                                <a
                                    key={i}
                                    href={info.href}
                                    className="block p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:border-red-500 hover:shadow-xl transition-all group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${info.bg} ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <info.icon size={28} />
                                    </div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{info.label}</h3>
                                    <p className="text-lg font-black text-[#0A2647]">{info.value}</p>
                                </a>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100 h-full">
                                <h2 className="text-3xl font-black text-[#0A2647] mb-8">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-600 ml-1">Your Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium"
                                                placeholder="Kenneth Lepas"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-600 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium"
                                                placeholder="ken@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-600 ml-1">Subject</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium"
                                            placeholder="How can we help?"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-600 ml-1">Message</label>
                                        <textarea
                                            required
                                            rows={6}
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium resize-none"
                                            placeholder="Write your message here..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-3 active:scale-[0.98]"
                                    >
                                        <Send size={24} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
