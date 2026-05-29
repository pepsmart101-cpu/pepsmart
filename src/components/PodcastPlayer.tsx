"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Episode = {
  id: string;
  day: string;
  weekOf: string;
  title: string;
  description: string;
  duration: string;
  audioUrl: string;
  showNotes: string[];
  tags: string[];
};

interface PodcastPlayerProps {
  episode: Episode | null;
  themeEmoji?: string;
}

const dayNames: Record<string, string> = {
  monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday",
  thursday: "Thursday", friday: "Friday", saturday: "Saturday", sunday: "Sunday",
};

export default function PodcastPlayer({ episode, themeEmoji = "🎙️" }: PodcastPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); }
    else { audioRef.current.play().catch(() => {}); }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct = (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100;
    setProgress(pct);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * audioRef.current.duration;
    setProgress(pct * 100);
  };

  useEffect(() => { setPlaying(false); setProgress(0); }, [episode?.id]);

  if (!episode) {
    return (
      <div className="flex h-48 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50">
        <p className="text-sm text-zinc-400">Select an episode to play</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <audio ref={audioRef} src={episode.audioUrl} onTimeUpdate={handleTimeUpdate} onEnded={() => setPlaying(false)} />

      <div className="flex items-center gap-4 p-4">
        <motion.button
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-200 hover:bg-violet-700"
        >
          {playing ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-lg">{themeEmoji}</span>
            <p className="text-xs font-medium uppercase tracking-wider text-violet-600">
              {dayNames[episode.day]} • {episode.duration}
            </p>
          </div>
          <p className="mt-0.5 truncate text-sm font-semibold text-zinc-900">{episode.title}</p>
          <div className="mt-2 h-1.5 cursor-pointer overflow-hidden rounded-full bg-zinc-200" onClick={handleSeek}>
            <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <button onClick={() => setExpanded(!expanded)} className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600">
          <svg className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-zinc-100">
            <div className="p-4">
              <p className="text-sm leading-relaxed text-zinc-600">{episode.description}</p>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Show Notes</p>
                <ul className="mt-2 space-y-1.5">
                  {episode.showNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {episode.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] text-zinc-500">#{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}