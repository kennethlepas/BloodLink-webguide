import { Heart, Shield, Users, MapPin, Award, Rocket, Globe, Sparkles, Activity } from "lucide-react";
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
            <section className="relative py-8 md:py-16 bg-[#0A2647] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -ml-32 -mb-32" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center animate-fade-in-up">
                        <h1 className="text-3xl md:text-6xl font-black mb-6 tracking-tight">
                            Saving Lives Together
                        </h1>
                        <p className="text-lg md:text-2xl text-blue-200 max-w-3xl mx-auto font-medium">
                            BloodLink is connecting donors and patients across Kenya, one drop at a time.
                        </p>
                    </div>

                    <div className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-3xl text-center">
                                <div className={`inline-flex p-2.5 md:p-3 rounded-2xl ${stat.bg} ${stat.color} mb-3 md:mb-4`}>
                                    <stat.icon size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="text-2xl md:text-3xl font-black mb-1">{stat.value}</div>
                                <div className="text-[10px] md:text-sm font-bold opacity-70 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-8 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center mb-10 md:mb-16">
                        <div className="relative group animate-float">
                            <div className="relative aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-tr from-[#0A2647] to-slate-800 flex items-center justify-center shadow-2xl group-hover:rotate-2 transition-all duration-500">
                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                                <Activity className="h-32 w-32 md:h-48 md:w-48 text-blue-400 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-red-600 text-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl max-w-[180px] md:max-w-xs ring-4 ring-white">
                                <p className="font-black text-lg md:text-2xl mb-1 md:mb-2 italic">"Every drop counts."</p>
                                <p className="text-[10px] md:text-sm font-medium opacity-90 leading-relaxed">Building the future of blood donation in Kenya.</p>
                            </div>
                        </div>

                        <div className="space-y-6 md:space-y-8 mt-12 md:mt-0">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-black text-[#0A2647] mb-4 md:mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-6 md:h-8 bg-red-600 rounded-full" />
                                    Our Mission
                                </h2>
                                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                                    BloodLink is dedicated to bridging the gap between blood donors and patients in need across Kenya and beyond. We believe technology can save lives by making blood donation more accessible, efficient, and community-driven.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl md:text-3xl font-black text-[#0A2647] mb-4 md:mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-6 md:h-8 bg-orange-600 rounded-full" />
                                    Our Story
                                </h2>
                                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                                    BloodLink was born out of a personal experience — watching a loved one struggle to find compatible blood during an emergency. Founded in 2024 in Nakuru, Kenya, our team set out to build a solution that could work for any Kenyan, in any county, at any time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-xl border border-slate-100">
                        <div className="text-center mb-10 md:mb-16">
                            <h2 className="text-2xl md:text-4xl font-black text-[#0A2647] mb-3 md:mb-4">Why BloodLink?</h2>
                            <p className="text-sm md:text-base text-slate-500 font-medium">Innovative features designed for impact</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                { icon: Sparkles, color: 'text-emerald-600', bg: 'bg-emerald-50', title: 'Real-time Requests', desc: 'Connect instantly with nearby donors when time matters most.' },
                                { icon: Shield, color: 'text-blue-600', bg: 'bg-blue-50', title: 'Verified Community', desc: 'Safe and secure environment for all donors and requesters.' },
                                { icon: MapPin, color: 'text-red-600', bg: 'bg-red-50', title: 'Location Based', desc: 'Find help right where you are using advanced geolocation.' },
                                { icon: Award, color: 'text-amber-600', bg: 'bg-amber-50', title: 'Donor Rewards', desc: 'Earn points and recognition for every life-saving donation.' },
                                { icon: Rocket, color: 'text-purple-600', bg: 'bg-purple-50', title: 'Smart Alerts', desc: 'Get notified instantly when your blood type is urgently needed.' },
                                { icon: Globe, color: 'text-orange-600', bg: 'bg-orange-50', title: 'Blood Banks', desc: 'Access a directory of verified blood banks across Kenya.' },
                            ].map((f, i) => (
                                <div key={i} className="group p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className={`p-3 md:p-4 rounded-2xl ${f.bg} ${f.color} w-fit mb-5 md:mb-6 group-hover:scale-110 transition-transform`}>
                                        <f.icon size={24} className="md:w-7 md:h-7" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-black text-[#0A2647] mb-2 md:mb-3">{f.title}</h3>
                                    <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mt-16 md:mt-24 text-center">
                        <h2 className="text-2xl md:text-4xl font-black text-[#0A2647] mb-8 md:mb-12">The Team Behind the Vision</h2>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            {team.map((m, i) => (
                                <div key={i} className="group text-center">
                                    <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full ${m.color} flex items-center justify-center text-white text-xl md:text-3xl font-black mb-4 md:mb-6 shadow-xl group-hover:scale-110 transition-transform mx-auto`}>
                                        {m.initial}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-black text-[#0A2647]">{m.name}</h3>
                                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px] md:text-xs mt-1">{m.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-8 md:py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-red-600 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                        <h2 className="text-2xl md:text-5xl font-black mb-8 relative z-10">Ready to save a life?</h2>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center relative z-10">
                            <Link href="/donor" className="px-8 md:px-10 py-4 md:py-5 bg-white text-red-600 rounded-2xl text-base md:text-lg font-black hover:bg-slate-50 transition-all shadow-xl active:scale-95">
                                Join as Donor
                            </Link>
                            <Link href="/contact" className="px-8 md:px-10 py-4 md:py-5 bg-red-700 text-white rounded-2xl text-base md:text-lg font-black hover:bg-red-800 transition-all shadow-xl active:scale-95 border border-red-500">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
