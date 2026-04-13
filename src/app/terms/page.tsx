import { FileText, UserCheck, ShieldCheck, Zap, MessageSquare, AlertTriangle, Scale, HelpCircle } from "lucide-react";

export default function TermsPage() {
    const sections = [
        {
            title: "1. ACCEPTANCE OF TERMS",
            icon: Scale,
            text: "By accessing or using the BloodLink app and services, you agree to be bound by these Terms and Conditions. If you do not agree, you may not use the Service."
        },
        {
            title: "2. ABOUT BLOODLINK",
            icon: Zap,
            text: "BloodLink is a GPS-enabled platform that connects blood donors with individuals seeking donations. We facilitate coordination but do not directly provide medical services or blood products."
        },
        {
            title: "3. DONOR ELIGIBILITY",
            icon: UserCheck,
            text: "Donors must be at least 18 years old, weigh at least 50kg, and be in good general health. Donors are responsible for honestly disclosing their health status."
        },
        {
            title: "4. USER RESPONSIBILITIES",
            icon: ShieldCheck,
            text: "Users must provide accurate information, not engage in harassment, and coordinate only with licensed healthcare facilities. BloodLink is not a medical provider."
        },
        {
            title: "5. LIMITATION OF LIABILITY",
            icon: AlertTriangle,
            text: "BloodLink is not liable for medical complications, donor availability, or inaccurate user data. All donations must comply with local Kenyan health regulations."
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
                <div className="bg-[#0A2647] p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 relative z-10">Terms & Conditions</h1>
                    <p className="text-blue-200 font-bold relative z-10 uppercase tracking-widest text-sm">Last Updated: February 15, 2026</p>
                </div>

                <div className="p-8 md:p-16 space-y-12">
                    <p className="text-lg text-slate-600 leading-relaxed font-medium text-center">
                        Please read these Terms and Conditions carefully before using the BloodLink application and related services.
                    </p>

                    <div className="grid grid-cols-1 gap-8">
                        {sections.map((section, idx) => (
                            <div key={idx} className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 items-start hover:shadow-lg transition-all duration-300">
                                <div className="p-4 bg-white text-red-600 rounded-2xl shadow-sm">
                                    <section.icon size={28} />
                                </div>
                                <div className="space-y-3">
                                    <h2 className="text-xl font-black text-[#0A2647]">{section.title}</h2>
                                    <p className="text-slate-600 leading-relaxed font-medium">{section.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-blue-50 p-10 rounded-[2rem] border border-blue-100 text-center">
                        <HelpCircle className="mx-auto text-blue-400 mb-6" size={48} />
                        <h2 className="text-2xl font-black text-[#0A2647] mb-4">Questions about our Terms?</h2>
                        <p className="text-slate-600 font-medium mb-8 max-w-lg mx-auto">
                            Our support team is always here to help clarify any points regarding our service usage.
                        </p>
                        <a
                            href="mailto:support@bloodlink.app"
                            className="inline-block px-10 py-4 bg-[#0A2647] text-white rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl"
                        >
                            Email Support
                        </a>
                    </div>

                    <div className="pt-12 border-t border-slate-100 text-center">
                        <p className="text-sm text-slate-400 font-medium">
                            By using BloodLink, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
