"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/Animations";
import sourcesData from "../../data/sources.json";

export default function SourcesPage() {
  const { vendors, disclaimer } = sourcesData;

  const tierColors: Record<string, string> = {
    "$": "text-green-600 bg-green-50",
    "$$": "text-amber-600 bg-amber-50",
    "$$$": "text-red-600 bg-red-50",
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Top Peptide Sources</span>
      </nav>

      <FadeIn>
        <div className="mb-6 text-5xl">🏆</div>
        <h1 className="text-4xl font-bold text-zinc-900">Top Peptide Sources</h1>
        <p className="mt-3 text-lg text-zinc-500">
          Curated directory of reputable peptide vendors. Vetted by purity, pricing, reviews, and third-party testing.
        </p>
        <div className="mt-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-700">
          ⚠️ {disclaimer}
        </div>
      </FadeIn>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-4 text-xs text-zinc-500">
        <span className="flex items-center gap-1"><span className="text-green-600">$</span> Budget</span>
        <span className="flex items-center gap-1"><span className="text-amber-600">$$</span> Mid-range</span>
        <span className="flex items-center gap-1"><span className="text-red-600">$$$</span> Premium</span>
        <span className="flex items-center gap-1">✓ COA Available</span>
        <span className="flex items-center gap-1">🏆 Badge</span>
      </div>

      {/* Vendors */}
      <StaggerContainer>
        <div className="mt-6 space-y-4">
          {vendors.sort((a, b) => b.rating - a.rating).map((vendor, index) => (
            <StaggerItem key={vendor.id}>
              <motion.div
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "🏅"}
                      </span>
                      <h3 className="text-xl font-bold text-zinc-900">{vendor.name}</h3>
                      {vendor.reputationBadge && (
                        <span className="rounded-full bg-violet-100 px-3 py-0.5 text-xs font-medium text-violet-700">
                          {vendor.reputationBadge}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`text-sm ${i < Math.round(vendor.rating) ? "text-amber-400" : "text-zinc-200"}`}>
                            ★
                          </span>
                        ))}
                        <span className="ml-1 text-sm font-semibold text-zinc-700">{vendor.rating}</span>
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tierColors[vendor.priceTier] || "bg-zinc-100 text-zinc-600"}`}>
                        {vendor.priceRange}
                      </span>
                      {vendor.hasCOA && (
                        <span className="flex items-center gap-1 text-xs text-green-600">
                          ✓ COA Available
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-sm text-zinc-600">
                      <strong>User Reviews:</strong> {vendor.userReviewSummary}
                    </p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-green-600">Pros</p>
                        <ul className="mt-1 space-y-1">
                          {vendor.pros.map((p) => (
                            <li key={p} className="flex items-start gap-1.5 text-xs text-zinc-600">
                              <span className="mt-0.5 text-green-500">+</span> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-red-600">Cons</p>
                        <ul className="mt-1 space-y-1">
                          {vendor.cons.map((c) => (
                            <li key={c} className="flex items-start gap-1.5 text-xs text-zinc-600">
                              <span className="mt-0.5 text-red-400">−</span> {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <p className="text-xs text-zinc-400">Best for: </p>
                      {vendor.bestFor.map((b) => (
                        <span key={b} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600">
                          {b}
                        </span>
                      ))}
                      <span className="text-xs text-zinc-300">|</span>
                      <p className="text-xs text-zinc-400">Payment: {vendor.paymentMethods.join(", ")}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <a
                      href={vendor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-violet-700"
                    >
                      Visit Site →
                    </a>
                    <p className="text-[10px] text-zinc-400">{vendor.coaDetail}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>

      {/* CTA */}
      <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
        <span className="text-3xl">💡</span>
        <h2 className="mt-3 text-lg font-semibold text-zinc-900">Know a Great Vendor?</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Help the community by recommending trusted sources. Join PepSmart to submit reviews.
        </p>
        <Link
          href="/community"
          className="mt-4 inline-flex rounded-full bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-violet-700"
        >
          Join Community →
        </Link>
      </div>
    </div>
  );
}