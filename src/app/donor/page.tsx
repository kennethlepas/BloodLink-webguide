import { Calendar, CheckCircle2, Utensils } from "lucide-react";

const DONOR_GUIDE = [
    {
        id: 'eligibility',
        title: 'Who Can Donate?',
        icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
        content: [
            {
                subtitle: 'Basic Requirements',
                points: [
                    'Age: 18 - 65 years old.',
                    'Weight: Minimum 50 kg.',
                    'Hemoglobin: Women ≥12.5 g/dl, Men ≥13.0 g/dl.',
                    'Blood Pressure: 100-140 / 60-90 mmHg.'
                ]
            },
            {
                subtitle: 'You Cannot Donate If:',
                points: [
                    'You are pregnant or breastfeeding.',
                    'You have a fever or current illness.',
                    'You have had a tattoo or piercing in the last 6 months.',
                    'You are on certain medications (e.g., blood thinners, antibiotics).'
                ]
            }
        ]
    },
    {
        id: 'process',
        title: 'The Donation Process',
        icon: <Calendar className="h-6 w-6 text-blue-500" />,
        content: [
            {
                subtitle: 'Before Donation',
                points: [
                    'Hydrate: Drink at least 500ml of water.',
                    'Eat: Have a healthy, low-fat meal 2-3 hours prior.',
                    'Sleep: Get a full night\'s rest.',
                    'Avoid Alcohol: No alcohol for 24 hours before.'
                ]
            },
            {
                subtitle: 'After Donation',
                points: [
                    'Rest: Sit for 15 minutes before leaving.',
                    'Snack: Eat the provided juice and cookies.',
                    'Hydrate: Drink extra fluids for 48 hours.',
                    'Avoid: Heavy lifting or strenuous exercise.'
                ]
            }
        ]
    },
    {
        id: 'nutrition',
        title: 'Nutrition Guide',
        icon: <Utensils className="h-6 w-6 text-orange-500" />,
        content: [
            {
                subtitle: 'Iron-Rich Foods',
                points: [
                    'Red meat, liver, organ meats.',
                    'Spinach, leafy greens, pumpkin seeds.',
                    'Beans, lentils, fortified cereals.'
                ]
            },
            {
                subtitle: 'Vitamin C',
                points: [
                    'Oranges, citrus fruits, mangoes.',
                    'Tomatoes, bell peppers.'
                ]
            }
        ]
    }
];

export default function DonorPage() {
    return (
        <>
            <main className="bg-slate-50 flex-grow py-10 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full font-bold text-xs md:text-sm mb-6 uppercase tracking-widest">Guide for Heroes</div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Donor Guide</h1>
                        <p className="text-base md:text-lg text-slate-600">Everything you need to know about becoming a life-saver in Kenya.</p>
                    </div>

                    <div className="space-y-8 md:space-y-12">
                        {DONOR_GUIDE.map((section) => (
                            <div key={section.id} className="bg-white rounded-[2rem] p-6 md:p-12 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="p-3 bg-red-50 rounded-2xl">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-slate-900">{section.title}</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-balance">
                                    {section.content.map((item, i) => (
                                        <div key={i}>
                                            <h3 className="text-[10px] md:text-xs font-black text-red-600 uppercase tracking-widest mb-4 md:mb-6 border-b border-red-50 pb-2 inline-block">
                                                {item.subtitle}
                                            </h3>
                                            <ul className="space-y-3 md:space-y-4">
                                                {item.points.map((point, k) => (
                                                    <li key={k} className="flex items-start gap-3">
                                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                                        <span className="text-slate-600 text-xs md:text-sm leading-relaxed">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 md:mt-20 bg-[#0A2647] rounded-[2.5rem] p-6 md:p-12 text-white overflow-hidden relative shadow-2xl shadow-blue-900/20">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-md text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase">Ready to Donate?</h2>
                                <p className="text-slate-300 mb-0 text-sm md:text-base leading-relaxed">
                                    Join thousands of other Kenyan heroes who are making a difference every day. Find your nearest donation center in the BloodLink app.
                                </p>
                            </div>
                            <button className="w-full md:w-auto px-8 py-4 bg-red-600 text-white font-black rounded-2xl shadow-xl hover:bg-red-700 transition-colors whitespace-nowrap">
                                Get the App
                            </button>
                        </div>

                        <div className="absolute top-0 right-0 p-8 opacity-10 -rotate-12">
                            <Heart size={200} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

function Heart({ size }: { size: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}
