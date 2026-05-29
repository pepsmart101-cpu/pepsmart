"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PodcastPlayer from "./PodcastPlayer";
import podcastData from "../data/podcast-episodes.json";

const dayOrder = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
const dayLabels: Record<string,string> = {monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",sunday:"Sun"};

function getTodayKey(): string {
  const d = new Date().getDay();
  return dayOrder[d === 0 ? 6 : d - 1];
}

export default function PodcastSection() {
  const todayKey = getTodayKey();
  const [todayEp] = useState(podcastData.episodes.find(e => e.day === todayKey) || podcastData.episodes[0]);
  const todayTheme = podcastData.schedule[todayKey as keyof typeof podcastData.schedule];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-violet-950 to-zinc-900 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-[60px]" />
        <div className="absolute -bottom-5 right-5 h-32 w-32 rounded-full bg-pink-500/15 blur-[50px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_400px]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.div animate={{ textShadow: ["0 0 10px rgba(139,92,246,0.3)","0 0 20px rgba(139,92,246,0.6)","0 0 10px rgba(139,92,246,0.3)"] }} transition={{ repeat: Infinity, duration: 3 }} className="mb-2 inline-block">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-violet-300 backdrop-blur-sm">
                🎙️ Podcast • {todayTheme?.theme || "Daily Episode"}
              </span>
            </motion.div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">Let&apos;s Talk Peps</span>
            </h2>
            <p className="mt-2 text-base text-zinc-400">Your daily dose of peptide knowledge. New episodes every day.</p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Link href="/podcast" className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:bg-violet-700">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                All Episodes
              </Link>
              <div className="flex -space-x-2">
                {podcastData.hosts.map(h => (
                  <div key={h.id} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-700 text-xs">{h.emoji}</div>
                ))}
              </div>
              <span className="text-xs text-zinc-500">with Sarah, Keisha & Minh</span>
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs text-zinc-500">
              {podcastData.hosts.map(h => (
                <div key={h.id} className="flex items-center gap-1.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100/20 text-xs">{h.emoji}</div>
                  <span>{h.name.split(" ")[0]}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <PodcastPlayer episode={todayEp} themeEmoji={todayTheme?.emoji} />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap justify-center gap-1.5 border-t border-white/10 pt-6">
          {dayOrder.map(day => {
            const isToday = day === todayKey;
            const s = podcastData.schedule[day as keyof typeof podcastData.schedule];
            return (
              <Link key={day} href="/podcast" className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-all ${isToday ? "bg-violet-600/30 text-violet-300 ring-1 ring-violet-500/50" : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"}`}>
                <span>{s?.emoji}</span>
                <span className="hidden font-medium uppercase sm:inline">{dayLabels[day]}</span>
                <span className="hidden sm:inline">— {s?.theme}</span>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}