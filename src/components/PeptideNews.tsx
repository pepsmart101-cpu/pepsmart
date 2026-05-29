"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import newsData from "../../data/news.json";

export function LatestNewsFeed({ limit = 4 }: { limit?: number }) {
  const articles = newsData.articles.slice(0, limit);

  return (
    <section>
      <StaggerContainer>
        <div className="space-y-4">
          {articles.map((article) => (
            <StaggerItem key={article.id}>
              <motion.div
                whileHover={{ x: 3 }}
                className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-[10px] font-medium text-violet-700">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-zinc-400">{article.date}</span>
                    </div>
                    <h4 className="mt-1 font-semibold text-zinc-900">{article.title}</h4>
                    <p className="mt-1 text-sm text-zinc-500">{article.summary}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[10px] text-zinc-400">Source: {article.source}</span>
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}

export function LatestNewsHome() {
  return (
    <FadeIn>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Live
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Latest Peptide News</h2>
              <p className="mt-2 text-zinc-500">Breaking research, FDA updates, and industry trends.</p>
            </div>
            <a
              href="/library"
              className="hidden rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 sm:inline-flex"
            >
              View All News →
            </a>
          </div>
          <LatestNewsFeed limit={3} />
          <div className="mt-6 text-center sm:hidden">
            <a
              href="/library"
              className="inline-flex rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50"
            >
              View All News →
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}