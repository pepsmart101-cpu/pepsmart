"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PodcastSection from "@/components/PodcastSection";
import PeptideNews from "@/components/PeptideNews";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-violet-50 via-white to-amber-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Understand Peptides.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">Transform Your Health.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
            Fun, visual guides with cartoon characters that make peptides easy to understand.<br />
            No jargon. No judgment. Just real science made simple.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="flex gap-4 justify-center flex-wrap">
            <Link href="/products" className="bg-violet-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-violet-700 transition-all shadow-lg shadow-violet-200">Start Learning</Link>
            <Link href="/community" className="bg-white text-violet-600 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-violet-200 hover:border-violet-400 transition-all">Join Community</Link>
          </motion.div>
        </div>
      </section>

      {/* Podcast Section */}
      <PodcastSection />

      {/* Products Showcase */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Complete Peptide Toolkit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {title:"90-Day Starter Guide",price:"$29.95",desc:"Everything you need for your first 90 days",href:"/products/90-day-guide",color:"from-violet-500 to-purple-600"},
              {title:"Meal Prep Guide",price:"$14.99",desc:"Meal plans that maximize your peptide results",href:"/products/meal-guide",color:"from-amber-500 to-orange-600"},
              {title:"Symptom Tracker",price:"$5.99",desc:"Track your progress and side effects",href:"/products/symptom-tracker",color:"from-green-500 to-emerald-600"},
            ].map((p,i) => (
              <Link key={i} href={p.href} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all">
                <div className={"h-2 w-16 rounded-full bg-gradient-to-r "+p.color+" mb-4"} />
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-2xl font-bold text-violet-600 mb-3">{p.price}</p>
                <p className="text-zinc-500 text-sm">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Feed */}
      <PeptideNews />
    </div>
  );
}
