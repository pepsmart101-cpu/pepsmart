"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sourcesData from "../../data/sources.json";

export default function TopSourcesBanner() {
  const [dismissed, setDismissed] = useState(false);
  const top3 = sourcesData.vendors.sort((a, b) => b.rating - a.rating).slice(0, 3);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-white/90">
            <span className="hidden sm:inline">🏆</span>
            <span className="font-semibold text-white">Top 3 Peptide Sources</span>
            <span className="hidden sm:inline">— Updated daily</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            {top3.map((v, i) => (
              <a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/80 transition-colors hover:text-white"
              >
                <span className="hidden sm:inline">
                  {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
                </span>
                <span className="font-medium">{v.name}</span>
                <span className="hidden sm:inline">
                  {Array.from({ length: Math.round(v.rating) }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </span>
              </a>
            ))}
            <button
              onClick={() => setDismissed(true)}
              className="ml-2 text-xs text-white/60 hover:text-white"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}