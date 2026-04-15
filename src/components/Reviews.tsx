"use client";

import { useEffect, useState } from "react";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Star, Quote, User } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
    id: string;
    userName: string;
    userType: 'donor' | 'requester';
    bloodType: string;
    rating: number;
    review: string;
    category?: string;
    createdAt: string;
}

export default function Reviews() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const q = query(
                    collection(db, "reviews"),
                    where("status", "==", "approved"),
                    orderBy("createdAt", "desc"),
                    limit(6)
                );

                const querySnapshot = await getDocs(q);
                const fetchedReviews: Review[] = [];
                querySnapshot.forEach((doc) => {
                    fetchedReviews.push({ id: doc.id, ...doc.data() } as Review);
                });
                setReviews(fetchedReviews);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
        );
    }

    if (reviews.length === 0) return null;

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900 mb-4">What Our Community Says</h2>
                    <p className="text-slate-600">Real stories from real donors and recipients across Kenya.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col relative"
                        >
                            <Quote className="absolute top-6 right-8 h-10 w-10 text-slate-100" />

                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}
                                    />
                                ))}
                            </div>

                            <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">
                                &quot;{review.review}&quot;
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{review.userName || "Anonymous"}</h4>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-full ${review.userType === 'donor' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {review.userType}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium">Type {review.bloodType}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
