import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Activity, ArrowRight, Droplet, Heart, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-8">
                <span className="p-1 bg-blue-600 rounded-full">
                  <Heart className="h-3 w-3 text-white" />
                </span>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Saving Lives Digitally</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                Your Essential Guide to <br />
                <span className="text-blue-600">BloodLink Kenya</span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
                Empowering donors and requesters across Kenya. Learn how our digital network ensures blood is available whenever and wherever it's needed most.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/donor"
                  className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  I Want to Donate <ArrowRight size={20} />
                </Link>
                <Link
                  href="/recipient"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 font-black rounded-2xl hover:bg-slate-50 hover:border-blue-200 transition-all flex items-center justify-center gap-2"
                >
                  I Need Blood <Activity size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
                  title: "Verified Network",
                  description: "Connecting you with registered and verified blood banks and hospitals across the country."
                },
                {
                  icon: <Activity className="h-8 w-8 text-orange-500" />,
                  title: "Real-time Availability",
                  description: "Check blood stock levels in real-time and find the nearest facility with your blood type."
                },
                {
                  icon: <Users className="h-8 w-8 text-green-500" />,
                  title: "Community Driven",
                  description: "Join a growing community of life-savers dedicated to creating a self-sufficient blood network."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-6 p-3 bg-slate-50 inline-block rounded-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cta Section */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center text-white shadow-2xl shadow-blue-200">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Droplet size={200} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to Save a Life?</h2>
              <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                Download the BloodLink app today and become part of Kenya's largest digital blood donor network. Available now on Play Store and App Store.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-slate-900 px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold opacity-70">Download on</p>
                    <p className="text-sm font-black">App Store</p>
                  </div>
                </div>
                <div className="bg-slate-900 px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Activity size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold opacity-70">Get it on</p>
                    <p className="text-sm font-black">Play Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
