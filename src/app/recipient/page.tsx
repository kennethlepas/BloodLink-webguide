import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Droplets, RefreshCcw, ShieldCheck } from "lucide-react";
import Image from "next/image";

const RECIPIENT_GUIDE = [
    {
        id: 'safety',
        title: 'Recipient Safety',
        icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
        content: [
            {
                subtitle: 'Before Transfusion',
                points: [
                    'Verify your Name, Blood Group, and Hospital ID.',
                    'Ensure the blood bag has a valid "Tested & Safe" label.',
                    'Confirm with your doctor why the transfusion is necessary.'
                ]
            },
            {
                subtitle: 'During Transfusion',
                points: [
                    'Report immediately if you feel chills, fever, back pain, or itching.',
                    'Transfusions typically take 1-4 hours.'
                ]
            }
        ]
    },
    {
        id: 'recovery',
        title: 'After Care',
        icon: <RefreshCcw className="h-6 w-6 text-green-500" />,
        content: [
            {
                subtitle: 'Recovery Tips',
                points: [
                    'Rest well and stay hydrated.',
                    'Monitor for delayed reactions (fever, dark urine).',
                    'Keep a record of your transfusion history.'
                ]
            },
            {
                subtitle: 'Nutrition for Recovery',
                points: [
                    'Protein (Fish, Beans, Eggs) for tissue rebuilding.',
                    'Iron & Vitamin C for hemoglobin replenishment.',
                    'Fluids to maintain blood volume.'
                ]
            }
        ]
    }
];

export default function RecipientPage() {
    return (
        <>
            <Navbar />
            <main className="bg-slate-50 flex-grow py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full font-bold text-sm mb-6 uppercase tracking-widest">Guide for Recipients</div>
                        <h1 className="text-5xl font-black text-slate-900 mb-4">Recipient Guide</h1>
                        <p className="text-lg text-slate-600">Essential information for safe blood transfusion and recovery in Kenya.</p>
                    </div>

                    <div className="space-y-12">
                        {RECIPIENT_GUIDE.map((section) => (
                            <div key={section.id} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-red-50 rounded-2xl">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {section.content.map((item, i) => (
                                        <div key={i}>
                                            <h3 className="text-sm font-black text-red-600 uppercase tracking-widest mb-6 border-b border-red-50 pb-2 inline-block">
                                                {item.subtitle}
                                            </h3>
                                            <ul className="space-y-4">
                                                {item.points.map((point, k) => (
                                                    <li key={k} className="flex items-start gap-3">
                                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                                        <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 bg-[#0A2647] rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-balance">
                            <div className="max-w-md text-center md:text-left">
                                <h2 className="text-3xl font-black mb-4 uppercase">Urgent Blood Request?</h2>
                                <p className="text-slate-300 mb-0 leading-relaxed">
                                    If you need blood urgently for a loved one, our app can connect you with the nearest donors and blood banks in minutes across all 47 counties.
                                </p>
                            </div>
                            <button className="px-8 py-4 bg-red-600 text-white font-black rounded-2xl shadow-xl hover:bg-red-700 transition-colors whitespace-nowrap">
                                Get BloodLink App
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 p-8 opacity-10 -rotate-12">
                            <Image src="/logo.jpg" alt="" width={200} height={250} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
