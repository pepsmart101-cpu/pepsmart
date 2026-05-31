"use client";
import { useState } from "react";
import PodcastPlayer from "@/components/PodcastPlayer";

const episodes = [
  { id: "mon", day: "monday", weekOf: "Week 1", title: "Peptides 101: Your Body's Secret Software", description: "What are peptides? How do they work? Sarah, Keisha, and Minh break it down with zero jargon.", duration: "5:00", audioUrl: "/audio/monday.mp3", showNotes: ["What are peptides?", "How they signal your cells", "GLP-1 vs growth vs repair"], tags: ["#Peptides101", "#Beginner", "#GLP1"] },
  { id: "tue", day: "tuesday", weekOf: "Week 1", title: "Side Effects & Troubleshooting", description: "Nausea? Redness? Fatigue? We cover what's normal, what's not, and when to call your doctor.", duration: "4:30", audioUrl: "/audio/tuesday.mp3", showNotes: ["Common side effects", "When to worry", "Mitigation strategies"], tags: ["#SideEffects", "#Safety", "#GLP1"] },
  { id: "wed", day: "wednesday", weekOf: "Week 1", title: "The Protein Protection Plan", description: "Why protein is non-negotiable on peptides. Minh breaks down the science of muscle preservation.", duration: "5:00", audioUrl: "/audio/wednesday.mp3", showNotes: ["Protein requirements", "Muscle preservation", "Meal timing"], tags: ["#Protein", "#Nutrition", "#Muscle"] },
  { id: "thu", day: "thursday", weekOf: "Week 1", title: "Use It or Lose It", description: "How to maintain muscle on GLP-1s. Exercise strategies that complement your peptide protocol.", duration: "4:45", audioUrl: "/audio/thursday.mp3", showNotes: ["Exercise on GLP-1s", "Resistance training", "Cardio balance"], tags: ["#Fitness", "#Exercise", "#GLP1"] },
  { id: "fri", day: "friday", weekOf: "Week 1", title: "Myth vs Fact: Peptide Edition", description: "Are peptides steroids? Are they legal? Sarah and Minh tackle the top 5 misconceptions.", duration: "5:15", audioUrl: "/audio/friday.mp3", showNotes: ["Peptides vs steroids", "Legal status", "Safety myths"], tags: ["#MythBusting", "#Facts", "#Education"] },
  { id: "sat", day: "saturday", weekOf: "Week 1", title: "Peptides in the Wild", description: "Real talk about traveling with peptides, storing them, and fitting them into your life.", duration: "4:30", audioUrl: "/audio/saturday.mp3", showNotes: ["Travel tips", "Storage guide", "Daily routine"], tags: ["#Lifestyle", "#Travel", "#Storage"] },
  { id: "sun", day: "sunday", weekOf: "Week 1", title: "Community Q&A", description: "We answer your burning questions from the PepSmart community. Nothing is off limits!", duration: "6:00", audioUrl: "/audio/sunday.mp3", showNotes: ["Listener questions", "Expert answers", "Community spotlights"], tags: ["#Q&A", "#Community", "#PepSmart"] },
];
const dayOrder = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
const dayLabels: Record<string,string> = {monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",sunday:"Sun"};

export default function PodcastPage() {
  const [activeDay, setActiveDay] = useState("monday");
  const episode = episodes.find(e => e.day === activeDay) || null;
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-zinc-900 via-violet-950 to-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400">Let&apos;s Talk Peps</span>
        </h1>
        <p className="text-center text-zinc-400 mb-8">Your daily dose of peptide knowledge — 7 days a week</p>
        <div className="flex gap-2 mb-8 overflow-x-auto justify-center">
          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((label,i) => (
            <button key={i} onClick={() => setActiveDay(dayOrder[i])}
              className={(activeDay===dayOrder[i] ? "bg-violet-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700") + " px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"}>
              {label}
            </button>
          ))}
        </div>
        <PodcastPlayer episode={episode} />
        <div className="mt-12 grid gap-4">
          {episodes.map(ep => (
            <div key={ep.id} onClick={() => setActiveDay(ep.day)}
              className={(activeDay===ep.day ? "ring-2 ring-violet-500" : "") + " bg-zinc-800/50 rounded-xl p-4 cursor-pointer hover:bg-zinc-700/50 transition-all"}>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-zinc-500">{dayLabels[ep.day]} • {ep.duration}</span>
                  <h3 className="font-semibold">{ep.title}</h3>
                  <p className="text-sm text-zinc-400">{ep.description}</p>
                </div>
                <div className="flex gap-1">
                  {ep.tags.slice(0,2).map(t => <span key={t} className="text-xs bg-violet-600/30 text-violet-300 px-2 py-1 rounded-full">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
