import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Activity, ArrowRight, Droplet, Globe, Heart, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
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
                BloodLink is dedicated to bridging the gap between blood donors and patients in need across Kenya. Every drop counts — and technology can save lives.
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
                    What started as a small app idea has grown into a community of thousands of donors and requesters united by one goal: no one should die because blood wasn't available.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl">
                  <Image src="/logo.jpg" alt="BloodLink Story" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-red-600 text-white p-8 rounded-3xl shadow-xl max-w-xs">
                  <p className="font-bold text-xl mb-2">"Every drop counts."</p>
                  <p className="text-sm opacity-80">Connecting donors with urgent recipients in real time.</p>
                </div>
              </div>
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
      </main>
      <Footer />
    </>
  );
}
