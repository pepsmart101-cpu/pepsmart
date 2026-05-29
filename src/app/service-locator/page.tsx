"use client";

import { useState } from "react";
import Link from "next/link";

// Mock provider data
const providers = [
  {
    id: 1,
    name: "Vitality Health & Wellness",
    type: "Medical Weight Loss Clinic",
    rating: 4.8,
    reviews: 24,
    address: "123 Main St, Suite 200",
    city: "Austin",
    state: "TX",
    zip: "78701",
    distance: "2.3 mi",
    tags: ["GLP-1 Therapy", "Bloodwork Required", "Ongoing Support"],
    badge: "Verified Member",
    price: "$$",
  },
  {
    id: 2,
    name: "Peak Performance Longevity",
    type: "Performance & Longevity Center",
    rating: 4.9,
    reviews: 31,
    address: "456 Oak Ave",
    city: "Austin",
    state: "TX",
    zip: "78702",
    distance: "3.8 mi",
    tags: ["NAD+ Therapy", "Growth Peptides", "Biohacking"],
    badge: "Verified Member",
    price: "$$$",
  },
  {
    id: 3,
    name: "Austin MedSpa & IV Lounge",
    type: "Medspa / IV Lounge",
    rating: 4.6,
    reviews: 18,
    address: "789 Congress Ave",
    city: "Austin",
    state: "TX",
    zip: "78701",
    distance: "1.2 mi",
    tags: ["GLP-1", "IV Therapy", "Skin Peptides"],
    badge: "Premium",
    price: "$$",
  },
  {
    id: 4,
    name: "Integrative Wellness Co.",
    type: "Integrative Coach",
    rating: 4.7,
    reviews: 15,
    address: "321 Barton Springs Rd",
    city: "Austin",
    state: "TX",
    zip: "78704",
    distance: "4.1 mi",
    tags: ["Diet Coaching", "Protocol Design", "Accountability"],
    badge: "Verified Member",
    price: "$",
  },
  {
    id: 5,
    name: "Longevity Lab TX",
    type: "Performance & Longevity Center",
    rating: 5.0,
    reviews: 42,
    address: "1000 Research Blvd",
    city: "Austin",
    state: "TX",
    zip: "78759",
    distance: "8.5 mi",
    tags: ["Full Panel Bloodwork", "HRT", "Peptide Therapy"],
    badge: "Verified Member",
    price: "$$$",
  },
  {
    id: 6,
    name: "Glow Aesthetics & Wellness",
    type: "Medspa / IV Lounge",
    rating: 4.5,
    reviews: 29,
    address: "555 South 1st St",
    city: "Austin",
    state: "TX",
    zip: "78704",
    distance: "3.5 mi",
    tags: ["Glow Protocol", "Skin Peptides", "MIC-B12"],
    badge: "Premium",
    price: "$$",
  },
];

const criteria = [
  { emoji: "🎓", title: "Credentialing", desc: "Licensed medical professionals (MD, DO, NP, PA) or certified coaches." },
  { emoji: "🔍", title: "Sourcing Transparency", desc: "PCAB-accredited pharmacies. Lab results available on request." },
  { emoji: "🤝", title: "Support Model", desc: "Ongoing check-ins, bloodwork reviews, and lifestyle advice — not just a script mill." },
  { emoji: "💰", title: "Pricing Fairness", desc: "Reasonable rates vs 1,000% markup. Transparent pricing." },
  { emoji: "⭐", title: "Community Reviews", desc: "What actual PepSmart members say about their experience." },
];

const redFlags = [
  { emoji: "🚩", title: "No Bloodwork Required", desc: "Major safety risk. You need to know your baseline." },
  { emoji: "🚩", title: "Guaranteed Results", desc: "No professional should guarantee a specific outcome." },
  { emoji: "🚩", title: "Vague Sourcing", desc: "If they can't tell you which pharmacy, walk away." },
  { emoji: "🚩", title: "Constant Upselling", desc: "Be wary of clinics pushing 10+ extra supplements every visit." },
];

export default function ServiceLocatorPage() {
  const [zipCode, setZipCode] = useState("78701");
  const [filterType, setFilterType] = useState("all");

  const filteredProviders = providers.filter((p) => {
    if (filterType === "all") return true;
    const typeMap: Record<string, string[]> = {
      clinic: ["Medical Weight Loss Clinic"],
      longevity: ["Performance & Longevity Center"],
      medspa: ["Medspa / IV Lounge"],
      coach: ["Integrative Coach"],
    };
    return typeMap[filterType]?.includes(p.type) ?? true;
  });

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-600 to-indigo-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 text-5xl">🏥</div>
          <h1 className="text-4xl font-bold sm:text-5xl">Service Locator</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-violet-100">
            Find trusted doctors, medspas, clinics, and coaches near you. Every provider is vetted by our community.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full bg-white p-2 shadow-lg">
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter ZIP code"
              className="flex-1 rounded-full px-4 py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
            />
            <button className="rounded-full bg-violet-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-violet-700">
              Search
            </button>
          </div>

          {/* Filter chips */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {[
              { value: "all", label: "All Types" },
              { value: "clinic", label: "Weight Loss Clinics" },
              { value: "longevity", label: "Longevity Centers" },
              { value: "medspa", label: "Medspas & IV" },
              { value: "coach", label: "Coaches" },
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setFilterType(f.value)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  filterType === f.value
                    ? "bg-white text-violet-700"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-zinc-900">
              {filteredProviders.length} providers near {zipCode}
            </h2>
            <p className="text-sm text-zinc-500">Sorted by rating</p>
          </div>

          <div className="mt-6 grid gap-4">
            {filteredProviders.map((p) => (
              <div key={p.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-zinc-900">{p.name}</h3>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        p.badge === "Verified Member" ? "bg-green-100 text-green-700" : "bg-violet-100 text-violet-700"
                      }`}>
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500">{p.type}</p>
                    <p className="mt-1 text-sm text-zinc-500">{p.address}, {p.city}, {p.state} {p.zip}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-zinc-900">{p.rating}</span>
                      <span className="text-amber-400">★</span>
                    </div>
                    <p className="text-xs text-zinc-500">{p.reviews} reviews</p>
                    <p className="mt-1 text-sm font-medium text-zinc-700">{p.distance}</p>
                    <p className="text-xs text-zinc-500">{p.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Criteria */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-zinc-900">Our Gold Standard Rating Criteria</h2>
          <p className="mt-2 text-center text-zinc-500">We rate providers on these 5 pillars.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {criteria.map((c) => (
              <div key={c.title} className="rounded-xl border border-zinc-200 bg-white p-5 text-center shadow-sm">
                <span className="text-3xl">{c.emoji}</span>
                <h3 className="mt-2 font-semibold text-zinc-900">{c.title}</h3>
                <p className="mt-1 text-xs text-zinc-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-zinc-900">Red Flags to Watch Out For</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {redFlags.map((r) => (
              <div key={r.title} className="rounded-xl border border-red-200 bg-red-50 p-5">
                <span className="text-3xl">{r.emoji}</span>
                <h3 className="mt-2 font-semibold text-red-800">{r.title}</h3>
                <p className="mt-1 text-xs text-red-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Types */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-zinc-900">Types of Providers</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { emoji: "🏥", title: "Medical Weight Loss Clinics", best: "GLP-1 Therapy", look: "Requires bloodwork before starting. Checks vitals regularly." },
              { emoji: "🧬", title: "Performance & Longevity Centers", best: "Growth/Repair & NAD+", look: "Focus on optimization, not just sickness." },
              { emoji: "🤝", title: "Integrative Coaches", best: "Diet & Protocol Optimization", look: "Work with your doctor, not against them." },
            ].map((t) => (
              <div key={t.title} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <span className="text-4xl">{t.emoji}</span>
                <h3 className="mt-3 font-semibold text-zinc-900">{t.title}</h3>
                <p className="mt-1 text-xs font-medium text-violet-600">Best for: {t.best}</p>
                <p className="mt-2 text-sm text-zinc-500">{t.look}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
          <span className="text-4xl">🏆</span>
          <h2 className="mt-4 text-xl font-bold text-zinc-900">Know a Great Provider?</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Help the community by recommending trusted providers. Join PepSmart to submit reviews.
          </p>
          <Link
            href="/community"
            className="mt-6 inline-flex rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-700"
          >
            Join Community &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}