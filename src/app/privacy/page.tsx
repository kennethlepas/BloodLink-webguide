import { Shield, Lock, Eye, FileText, Bell, Globe, UserCheck, Trash2 } from "lucide-react";

export default function PrivacyPage() {
    const sections = [
        {
            title: "1. INFORMATION WE COLLECT",
            icon: Eye,
            content: [
                { subtitle: "1.1 Personal Information", text: "When you register, we collect: Full name, Email address, Phone number, Blood type, Date of birth (for age verification), Weight (for donors), and Profile picture (optional)." },
                { subtitle: "1.2 Location Data", text: "We collect real-time GPS location data when you use the app to match you with nearby donors or blood banks, and send location-based emergency alerts." },
                { subtitle: "1.3 Usage Information", text: "We automatically collect device information, app usage patterns, donation history, and crash reports to improve our service." }
            ]
        },
        {
            title: "2. HOW WE USE YOUR INFORMATION",
            icon: Shield,
            content: [
                { subtitle: "", text: "Your information is used to match donors with blood requests, send emergency notifications, track donation history, ensure platform safety, and facilitate secure communication." }
            ]
        },
        {
            title: "3. INFORMATION SHARING",
            icon: Globe,
            content: [
                { subtitle: "3.1 With Other Users", text: "When coordinating a donation, we share your first name, blood type, and approximate location. Contact info is only shared after mutual consent." },
                { subtitle: "3.2 With Healthcare Facilities", text: "Relevant information is shared with licensed medical facilities to ensure proper documentation and safety protocols." }
            ]
        },
        {
            title: "4. DATA SECURITY",
            icon: Lock,
            content: [
                { subtitle: "", text: "We implement encrypted data transmission (SSL/TLS), secure Firebase authentication, and regular security audits. However, no system is completely secure." }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
                <div className="bg-[#0A2647] p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 relative z-10">Privacy Policy</h1>
                    <p className="text-blue-200 font-bold relative z-10 uppercase tracking-widest text-sm">Last Updated: February 15, 2026</p>
                </div>

                <div className="p-8 md:p-16 space-y-12">
                    <p className="text-lg text-slate-600 leading-relaxed font-medium text-center italic">
                        BloodLink is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
                    </p>

                    {sections.map((section, idx) => (
                        <div key={idx} className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
                                    <section.icon size={24} />
                                </div>
                                <h2 className="text-2xl font-black text-[#0A2647]">{section.title}</h2>
                            </div>

                            <div className="space-y-4 pl-14">
                                {section.content.map((item, i) => (
                                    <div key={i}>
                                        {item.subtitle && <h3 className="font-bold text-[#0A2647] mb-2">{item.subtitle}</h3>}
                                        <p className="text-slate-600 leading-relaxed font-medium">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <div className="flex items-center gap-4 mb-4">
                            <Trash2 className="text-red-500" />
                            <h2 className="text-xl font-bold text-[#0A2647]">Data Retention & Deletion</h2>
                        </div>
                        <p className="text-slate-600 font-medium italic">
                            You have the right to request access, correction, or deletion of your personal data. To exercise these rights, please contact our privacy team at <a href="mailto:privacy@bloodlink.app" className="text-red-600 font-bold underline">privacy@bloodlink.app</a>.
                        </p>
                    </div>

                    <div className="pt-12 border-t border-slate-100 text-center">
                        <p className="text-sm text-slate-400 font-medium">
                            By using BloodLink, you acknowledge that you have read and understood this Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
