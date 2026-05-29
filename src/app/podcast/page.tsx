"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import PodcastPlayer from "@/components/PodcastPlayer";
import podcastData from "../../data/podcast-episodes.json";

const dayOrder = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
const dayLabels: Record<string,string> = {monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",sunday:"Sun"};

function getTodayKey(): string {
  const d = new Date().getDay();
  return dayOrder[d === 0 ? 6 : d - 1];
}

export default function PodcastPage() {
  const todayKey = getTodayKey();
  const [activeDay, setActiveDay] = useState(todayKey);
  const episodesForDay = podcastData.episodes.filter(e => e.day === activeDay);
  const [activeEpisode, setActiveEpisode] = useState(episodesForDay[0] || null);

  return (
    <div className="font-sans">
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-violet-950 to-zinc-900 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-violet-500/20 blur-[80px]" />
          <div className="absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-pink-500/15 blur-[60px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <motion.div animate={{ textShadow: ["0 0 20px rgba(139,92,246,0.5)","0 0 40px rgba(139,92,246,0.8)","0 0 20px rgba(139,92,246,0.5)"] }} transition={{ repeat: Infinity, duration: 3 }} className="mb-4 inline-block text-5xl sm:text-6xl">🎙️</motion.div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">Let&apos;s Talk Peps</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">Your daily dose of peptide knowledge — with Dr. Sarah Chen, Keisha Williams, and Minh Nguyen</p>
          </motion.div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {dayOrder.map(day => {
              const isActive = day === activeDay;
              const isToday = day === todayKey;
              const s = podcastData.schedule[day as keyof typeof podcastData.schedule];
              return (
                <motion.button key={day} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                  onClick={() => { setActiveDay(day); const ep = podcastData.episodes.find(e => e.day === day); if (ep) setActiveEpisode(ep); }}
                  className={`relative flex flex-col items-center rounded-2xl px-4 py-3 text-sm transition-all sm:px-5 ${isActive ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30" : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"}`}>
                  {isToday && (
                    <motion.span animate={{ scale: [1,1.2,1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -right-1 -top-1 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
                    </motion.span>
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wider">{dayLabels[day]}</span>
                  <span className="mt-1 text-lg">{s.emoji}</span>
                  <span className="mt-0.5 text-[10px] font-medium">{s.theme}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <FadeIn>
              <h2 className="text-xl font-bold text-zinc-900">Now Playing: <span className="text-violet-600">{podcastData.schedule[activeDay as keyof typeof podcastData.schedule]?.theme}</span></h2>
              <p className="mt-1 text-sm text-zinc-500">{dayLabels[activeDay]} episode</p>
            </FadeIn>
            <div className="mt-4"><PodcastPlayer episode={activeEpisode} themeEmoji={podcastData.schedule[activeDay as keyof typeof podcastData.schedule]?.emoji} /></div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-sm font-semibold text-zinc-900">Meet the Hosts</h3>
              <div className="mt-4 space-y-4">
                {podcastData.hosts.map(host => (
                  <div key={host.id} className="flex items-start gap-3">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-pink-100 text-xl shadow-sm">{host.emoji}</div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">{host.name}</p>
                      <p className="text-[11px] text-violet-600">{host.title}</p>
                      <p className="mt-0.5 text-xs text-zinc-500">{host.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-900">Weekly Schedule</h3>
              <div className="mt-3 space-y-2">
                {dayOrder.map(day => {
                  const s = podcastData.schedule[day as keyof typeof podcastData.schedule];
                  const isToday = day === todayKey;
                  return (
                    <div key={day} className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs ${isToday ? "bg-violet-100 font-medium text-violet-700" : "text-zinc-600"}`}>
                      <span>{s.emoji}</span>
                      <span className="w-12 font-medium uppercase">{dayLabels[day]}</span>
                      <span className="text-zinc-400">—</span>
                      <span>{s.theme}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-200 bg-gradient-to-br from-violet-50 to-pink-50 p-5 text-center">
              <span className="text-4xl">🧬</span>
              <p className="mt-2 text-sm font-medium text-zinc-700">Pep says:</p>
              <p className="mt-1 text-xs text-zinc-500 italic">&ldquo;Knowledge is the best peptide!&rdquo;</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">This Week&apos;s Episodes</h2>
            <p className="mt-2 text-center text-zinc-500">New episodes every day. Never miss a dose of peptide knowledge.</p>
          </FadeIn>
          <StaggerContainer>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {podcastData.episodes.map(ep => {
                const isToday = ep.day === todayKey;
                return (
                  <StaggerItem key={ep.id}>
                    <motion.button onClick={() => { setActiveDay(ep.day); setActiveEpisode(ep); window.scrollTo({ top: 300, behavior: "smooth" }); }}
                      whileHover={{ y: -4 }} className={`w-full rounded-2xl border p-5 text-left shadow-sm hover:shadow-md ${isToday ? "border-violet-300 bg-violet-50" : "border-zinc-200 bg-white"}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium uppercase tracking-wider text-violet-600">{dayLabels[ep.day]}</span>
                        {isToday && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">Today</span>}
                      </div>
                      <h3 className="mt-2 text-sm font-semibold text-zinc-900">{ep.title}</h3>
                      <p className="mt-1 text-xs text-zinc-500">{ep.duration}</p>
                      <p className="mt-2 flex items-center gap-2 text-xs text-zinc-400">▶ Play</p>
                    </motion.button>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
          <span className="text-4xl">🎧</span>
          <h2 className="mt-4 text-xl font-bold text-zinc-900">Want to be on the show?</h2>
          <p className="mt-2 text-sm text-zinc-500">Join the PepSmart Community to submit your questions.</p>
          <Link href="/community" className="mt-6 inline-flex rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-700">Join Community →</Link>
        </div>
      </section>
    </div>
  );
}