import { Heart, Shield, Users, MapPin, Award, Rocket, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const stats = [
        { value: '10K+', label: 'Donors', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
        { value: '5K+', label: 'Lives Saved', icon: Heart, color: 'text-red-600', bg: 'bg-red-50' },
        { value: '47', label: 'Counties', icon: MapPin, color: 'text-green-600', bg: 'bg-green-50' },
        { value: '4.8★', label: 'App Rating', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
    ];

    const team = [
        { name: 'Kenneth Lepas', role: 'Founder & CEO', initial: 'KL', color: 'bg-[#0A2647]' },
        { name: 'Dev Team', role: 'Engineering', initial: 'DT', color: 'bg-orange-600' },
        { name: 'Medical Board', role: 'Health Advisors', initial: 'MB', color: 'bg-emerald-600' },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#0A2647] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -ml-32 -mb-32" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Saving Lives Together
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto font-medium">
                            BloodLink is connecting donors and patients across Kenya, one drop at a time.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-center">
                                <div className={`inline-flex p-3 rounded-2xl ${stat.bg} ${stat.color} mb-4`}>
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-3xl font-black mb-1">{stat.value}</div>
                                <div className="text-sm font-bold opacity-70 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="relative animate-float">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image src="/logo.jpg" alt="BloodLink Mission" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-red-600 text-white p-8 rounded-3xl shadow-xl max-w-xs">
                                <p className="font-black text-2xl mb-2 italic">"Every drop counts."</p>
                                <p className="text-sm font-medium opacity-90">Building the future of blood donation in Kenya.</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-black text-[#0A2647] mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-red-600 rounded-full" />
                                    Our Mission
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    BloodLink is dedicated to bridging the gap between blood donors and patients in need across Kenya and beyond. We believe technology can save lives by making blood donation more accessible, efficient, and community-driven.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium mt-4">
                                    Our platform connects willing donors with urgent recipients in real time, eliminating the delays that cost lives during medical emergencies.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-black text-[#0A2647] mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-orange-600 rounded-full" />
                                    Our Story
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    BloodLink was born out of a personal experience — watching a loved one struggle to find compatible blood during an emergency. Founded in 2024 in Nakuru, Kenya, our team set out to build a solution that could work for any Kenyan, in any county, at any time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#0A2647] mb-4">Why BloodLink?</h2>
                            <p className="text-slate-500 font-medium">Innovative features designed for impact</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: Sparkles, color: 'text-emerald-600', bg: 'bg-emerald-50', title: 'Real-time Requests', desc: 'Connect instantly with nearby donors when time matters most.' },
                                { icon: Shield, color: 'text-blue-600', bg: 'bg-blue-50', title: 'Verified Community', desc: 'Safe and secure environment for all donors and requesters.' },
                                { icon: MapPin, color: 'text-red-600', bg: 'bg-red-50', title: 'Location Based', desc: 'Find help right where you are using advanced geolocation.' },
                                { icon: Award, color: 'text-amber-600', bg: 'bg-amber-50', title: 'Donor Rewards', desc: 'Earn points and recognition for every life-saving donation.' },
                                { icon: Rocket, color: 'text-purple-600', bg: 'bg-purple-50', title: 'Smart Alerts', desc: 'Get notified instantly when your blood type is urgently needed.' },
                                { icon: Globe, color: 'text-orange-600', bg: 'bg-orange-50', title: 'Blood Banks', desc: 'Access a directory of verified blood banks across Kenya.' },
                            ].map((f, i) => (
                                <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className={`p-4 rounded-2xl ${f.bg} ${f.color} w-fit mb-6 group-hover:scale-110 transition-transform`}>
                                        <f.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-black text-[#0A2647] mb-3">{f.title}</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mt-24 text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0A2647] mb-12">The Team Behind the Vision</h2>
                        <div className="flex flex-wrap justify-center gap-12">
                            {team.map((m, i) => (
                                <div key={i} className="group text-center">
                                    <div className={`w-28 h-28 rounded-full ${m.color} flex items-center justify-center text-white text-3xl font-black mb-6 shadow-xl group-hover:scale-110 transition-transform mx-auto`}>
                                        {m.initial}
                                    </div>
                                    <h3 className="text-xl font-black text-[#0A2647]">{m.name}</h3>
                                    <p className="text-slate-500 font-bold uppercase tracking-wider text-xs mt-1">{m.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-red-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                        <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Ready to save a life?</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <Link href="/donor" className="px-10 py-5 bg-white text-red-600 rounded-2xl text-lg font-black hover:bg-slate-50 transition-all shadow-xl active:scale-95">
                                Join as Donor
                            </Link>
                            <Link href="/contact" className="px-10 py-5 bg-red-700 text-white rounded-2xl text-lg font-black hover:bg-red-800 transition-all shadow-xl active:scale-95 border border-red-500">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
