import { Activity, ArrowRight, Droplet, Globe, Heart, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#0A2647] pt-24 pb-32 lg:pt-40 lg:pb-48 text-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.05] pointer-events-none animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in-up">
                <span className="p-1 bg-red-600 rounded-full">
                  <Heart className="h-3 w-3 text-white" />
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-widest">Saving Lives Together 🇰🇪</span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1] mb-8 animate-fade-in-up [animation-delay:200ms]">
                BloodLink <br />
                <span className="text-red-500">User Guide</span>
              </h1>

              <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-12 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
                BloodLink is dedicated to bridging the gap between blood donors and patients in need across Kenya. Every drop counts, and technology can save lives.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
                <Link
                  href="/donor"
                  className="w-full sm:w-auto px-10 py-5 bg-red-600 text-white font-black rounded-2xl shadow-xl shadow-red-900/40 hover:bg-red-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  Donor Guide <ArrowRight size={20} />
                </Link>
                <Link
                  href="/recipient"
                  className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  Recipient Guide <Activity size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4">Our Impact in Kenya</h2>
              <p className="text-slate-600">Building a reliable lifesaving network for every Kenyan.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Partner Hospitals", value: "500+", icon: <ShieldCheck className="text-red-600" /> },
                { label: "Active Donors", value: "2,500+", icon: <Users className="text-blue-600" /> },
                { label: "Lives Saved", value: "1,200+", icon: <Heart className="text-red-500" /> },
                { label: "Counties", value: "47", icon: <Globe className="text-green-600" /> }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                  <div className="mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-black text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full font-bold text-sm mb-6">Our Story</div>
                <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Born out of a personal experience.</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    BloodLink was born out of watching a loved one struggle to find compatible blood during an emergency. Founded in 2024, our team set out to build a solution that could work for any Kenyan, in any county, at any time.
                  </p>
                  <p>
                    What started as a small app idea has grown into a community of thousands of donors and requesters united by one goal: no one should die because blood wasn&apos;t available.
                  </p>
                </div>
              </div>
              <div className="relative group max-w-md mx-auto">
                <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0A2647] to-[#1e4b8f] flex items-center justify-center shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]" />
                  <Heart className="h-40 w-40 text-red-500 drop-shadow-[0_0_35px_rgba(239,68,68,0.5)] animate-pulse" />
                </div>
                {/* Repositioned and resized card to prevent overlap with logo focal point */}
                <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-8 rounded-[2rem] shadow-2xl max-w-xs border border-slate-100 animate-float">
                  <p className="font-black text-2xl text-[#0A2647] mb-2 italic">&quot;Every drop counts.&quot;</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Saving lives in Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Donate Section - Kenyan Context */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full font-bold text-sm mb-6">Why Donate?</div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 leading-tight">Every drop is a lifeline for a Kenyan in need.</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Your contribution directly supports these critical healthcare areas across Kenya.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  img: "/images/story-1.png",
                  icon: <Heart size={20} className="text-white" />,
                  iconBg: "bg-red-500",
                  title: "Maternal Health",
                  desc: "Massive blood loss during delivery is a leading cause of maternal mortality in Kenya. Your donation keeps mothers with their newborns."
                },
                {
                  img: "/images/story-2.png",
                  icon: <Droplet size={20} className="text-white" />,
                  iconBg: "bg-blue-500",
                  title: "Children's Health",
                  desc: "Malaria-associated anaemia and severe malnutrition are primary reasons for childhood blood transfusions in pediatric wards."
                },
                {
                  img: "/images/story-3.png",
                  icon: <Activity size={20} className="text-white" />,
                  iconBg: "bg-green-500",
                  title: "Emergency Care",
                  desc: "A single road accident victim can require as many as 100 units of blood. With shortages reaching 80%, constant donations are vital."
                },
                {
                  img: "/images/story-4.png",
                  icon: <ShieldCheck size={20} className="text-white" />,
                  iconBg: "bg-orange-500",
                  title: "Chronic Illness",
                  desc: "Patients with cancer or blood disorders like Sickle Cell Anemia rely on regular transfusions for long-term survival and quality of life."
                }
              ].map((item, i) => (
                <div key={i} className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className={`absolute top-4 left-4 ${item.iconBg} p-3 rounded-2xl shadow-lg shadow-white/20`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto p-12 bg-red-600 rounded-[3rem] text-white shadow-2xl shadow-red-900/40 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <p className="text-red-100 font-bold uppercase tracking-widest text-xs mb-4">Kenya&apos;s Reality</p>
                  <h4 className="text-3xl font-black mb-4">We only collect 16-50% of the blood needed.</h4>
                  <p className="text-red-50/80 text-base leading-relaxed max-w-xl">
                    Kenya requires between 500,000 to 1,000,000 units annually. Our mission is to bridge this gap through technology and community.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/donor" className="inline-flex items-center gap-2 bg-white text-red-600 px-10 py-5 rounded-2xl font-black hover:bg-red-50 hover:scale-105 transition-all shadow-xl">
                    Become a Donor <ArrowRight size={22} />
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-red-400/20 rounded-full blur-2xl" />
            </div>
          </div>
        </section>

        {/* Why BloodLink Section */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Why BloodLink?</h2>
              <p className="text-slate-400">Advanced features designed to save lives.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Real-time Requests", desc: "Connect instantly with nearby donors when time matters most." },
                { title: "Verified Community", desc: "Safe and secure environment for all donors and requesters." },
                { title: "Location Based", desc: "Find help right where you are using advanced geolocation." }
              ].map((f, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <Reviews />
      </main>
    </>
  );
}
