"use client";
import { useState } from "react";
import Link from "next/link";
import PodcastPlayer from "./PodcastPlayer";

const episodes = {
  monday: { title: "Peptides 101: Your Body's Secret Software", theme: "Beginner Education", desc: "What are peptides? How do they work? Sarah, Keisha, and Minh break it down with zero jargon.", host: "Sarah" },
  tuesday: { title: "Side Effects & Troubleshooting", theme: "Don't Panic!", desc: "Nausea? Redness? Fatigue? We cover what's normal, what's not, and when to call your doctor.", host: "Keisha" },
  wednesday: { title: "The Protein Protection Plan", theme: "Nutrition", desc: "Why protein is non-negotiable on peptides. Minh breaks down the science of muscle preservation.", host: "Minh" },
  thursday: { title: "Use It or Lose It", theme: "Fitness", desc: "How to maintain muscle on GLP-1s. Exercise strategies that complement your peptide protocol.", host: "Keisha" },
  friday: { title: "Myth vs Fact: Peptide Edition", theme: "Myth Busting", desc: "Are peptides steroids? Are they legal? Sarah and Minh tackle the top 5 misconceptions.", host: "Sarah" },
  saturday: { title: "Peptides in the Wild", theme: "Lifestyle", desc: "Real talk about traveling with peptides, storing them, and fitting them into your life.", host: "Minh" },
  sunday: { title: "Community Q&A", theme: "Your Questions", desc: "We answer your burning questions from the PepSmart community. Nothing is off limits!", host: "Keisha" },
};
const dayOrder = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];

export default function PodcastSection() {
  const [activeDay, setActiveDay] = useState("monday");
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 via-violet-950 to-zinc-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400">Let&apos;s Talk Peps</span>
          </h2>
          <p className="text-zinc-400">Your daily dose of peptide knowledge — 7 days a week</p>
        </div>
        <div className="flex gap-2 mb-6 overflow-x-auto justify-center">
          {dayOrder.map(d => (
            <button key={d} onClick={() => setActiveDay(d)}
              className={(activeDay===d ? "bg-violet-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700") + " px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"}>
              {d.slice(0,1).toUpperCase()+d.slice(1,3)}
            </button>
          ))}
        </div>
        <PodcastPlayer episode={episodes[activeDay]} />
        <div className="text-center mt-8">
          <Link href="/podcast" className="inline-block text-violet-400 hover:text-violet-300 transition-colors text-sm">
            View all episodes →
          </Link>
        </div>
      </div>
    </section>
  );
}
