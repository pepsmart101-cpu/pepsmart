"use client";
import { useState } from "react";
import PodcastPlayer from "@/components/PodcastPlayer";

const episodes: Record<string, {title:string;theme:string;desc:string}> = {
  monday: { title: "Peptides 101", theme: "Beginner Education", desc: "What peptides are and how they work." },
  tuesday: { title: "GLP-1 Deep Dive", theme: "Research", desc: "Tirzepatide vs Semaglutide." },
  wednesday: { title: "5 Peptide Myths", theme: "Myth Busting", desc: "Myths debunked." },
  thursday: { title: "BPC-157: The Healer", theme: "Injury Repair", desc: "How BPC-157 helps healing." },
  friday: { title: "Protein, Sleep & Peptides", theme: "Optimization", desc: "Three pillars of success." },
  saturday: { title: "NAD+ & Longevity", theme: "Anti-Aging", desc: "Can we slow aging?" },
  sunday: { title: "Community Q&A", theme: "Questions", desc: "Your questions answered." },
};
const dayOrder = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];

export default function PodcastPage() {
  const [activeDay, setActiveDay] = useState("monday");
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-zinc-900 via-violet-950 to-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400">Let&apos;s Talk Peps</span>
        </h1>
        <p className="text-center text-zinc-400 mb-8">Your daily dose of peptide knowledge</p>
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {dayOrder.map(d => (
            <button key={d} onClick={() => setActiveDay(d)}
              className={(activeDay===d ? "bg-violet-600 text-white" : "bg-zinc-800 text-zinc-400") + " px-4 py-2 rounded-full text-sm font-medium"}>
              {d.slice(0,3).charAt(0).toUpperCase()+d.slice(1,3)}
            </button>
          ))}
        </div>
        <PodcastPlayer episode={episodes[activeDay]} />
        <div className="mt-12 grid gap-4">
          {dayOrder.map(d => (
            <div key={d} onClick={() => setActiveDay(d)}
              className={(activeDay===d ? "ring-2 ring-violet-500" : "") + " bg-zinc-800/50 rounded-xl p-4 cursor-pointer"}>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-zinc-500 capitalize">{d}</span>
                  <h3 className="font-semibold">{episodes[d].title}</h3>
                  <p className="text-sm text-zinc-400">{episodes[d].desc}</p>
                </div>
                <span className="text-xs bg-violet-600/30 text-violet-300 px-2 py-1 rounded-full">{episodes[d].theme}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}