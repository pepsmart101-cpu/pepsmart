"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/Animations";
import { LatestNewsHome } from "@/components/PeptideNews";
import PodcastSection from "@/components/PodcastSection";

const products = [
  {
    slug: "90-day-guide",
    title: "Your First 90 Days on Peptides",
    tagline: "The ultimate starter guide",
    price: 29.95,
    gradient: "gradient-purple",
    emoji: "🚀",
    desc: "Complete 90-day roadmap covering preparation, first dose, momentum, and transformation.",
  },
  {
    slug: "symptom-tracker",
    title: "Weekly Symptom & Progress Tracker",
    tagline: "Track your body's response",
    price: 5.99,
    gradient: "gradient-pink",
    emoji: "📝",
    desc: "Track energy, mood, hunger, digestion, sleep quality, and injection site reactions.",
  },
  {
    slug: "injection-calendar",
    title: "Injection Calendar & Rotation Guide",
    tagline: "Stay on schedule, stay safe",
    price: 7.99,
    gradient: "gradient-cyan",
    emoji: "💉",
    desc: "Rotation maps, ideal schedules, and rotation tracker for every peptide type.",
  },
  {
    slug: "protein-calculator",
    title: "Protein Power Guide",
    tagline: "Protect your muscle",
    price: 7.99,
    gradient: "gradient-green",
    emoji: "🥩",
    desc: "Calculate your protein target, cheat sheets, and easy meal ideas.",
  },
  {
    slug: "meal-guide",
    title: "Peptide-Friendly Meal Guide",
    tagline: "Eat smart on peptides",
    price: 9.99,
    gradient: "gradient-amber",
    emoji: "🥗",
    desc: "5-minute recipes, nausea remedies, and loose skin prevention tips.",
  },
  {
    slug: "reconstitution-guide",
    title: "Reconstitution Guide",
    tagline: "Syringe math made simple",
    price: 7.99,
    gradient: "gradient-purple",
    emoji: "🧪",
    desc: "Step-by-step reconstitution with syringe math cheat sheets and dosage calculators.",
  },
];

const encyclopediaItems = [
  { slug: "glp1s", title: "GLP-1s", emoji: "🦸‍♂️", desc: "Tirzepatide, Semaglutide, Retatrutide, Cagrilintide" },
  { slug: "growth_repair", title: "Growth & Repair", emoji: "🛠️", desc: "BPC-157, TB-500, GHK-Cu, Ipamorelin, Tesamorelin" },
  { slug: "longevity_mitochondrial", title: "Longevity", emoji: "⏳", desc: "NAD+, MOTS-C, SS-31, Glutathione, Pinealon" },
  { slug: "cognitive", title: "Cognitive", emoji: "🧠", desc: "Noopept, Semax, Selank, DSIP, KPV" },
  { slug: "skin_aesthetics", title: "Skin & Aesthetics", emoji: "✨", desc: "Glow, Klow, Melanotan, PT-141, Snap-8" },
  { slug: "immune", title: "Immune", emoji: "🛡️", desc: "Thymosin Alpha 1, LL-37, VIP" },
  { slug: "metabolism_fat_loss", title: "Metabolism", emoji: "🔥", desc: "AOD 9604, SLU-PP-332, 5-Amino, MIC-B12" },
  { slug: "specialty", title: "Specialty", emoji: "⭐", desc: "Epithalon, Kisspeptin, Fox04-DRI" },
];

export default function Home() {
  return (
    <div className="font-sans">
      {/* ─── Hero ─── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50"
      >
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="flex h-2 w-2 rounded-full bg-violet-500"
                />
                New: Peptide Encyclopedia
              </motion.div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Peptides made{" "}
                <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent animate-shimmer">
                  simple
                </span>
                , visual, and fun
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                Cartoon peptide characters break down what each peptide does — with expected timelines,
                side effects, cost comparisons, sourcing red flags, and myths vs. reality.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="/products"
                  className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:bg-violet-700 hover:shadow-xl"
                >
                  Browse Guides
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="/community"
                  className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50"
                >
                  Join Community &rarr;
                </motion.a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex items-center gap-4 text-sm text-zinc-500"
              >
                <span className="flex items-center gap-1">⭐ Guides from $5.99</span>
                <span className="h-1 w-1 rounded-full bg-zinc-300" />
                <span className="flex items-center gap-1">👥 Community $10/mo</span>
                <span className="h-1 w-1 rounded-full bg-zinc-300" />
                <span className="flex items-center gap-1">📚 Research library</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative mx-auto h-80 w-80 sm:h-96 sm:w-96">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 via-pink-300 to-amber-200 opacity-30 blur-3xl"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="relative flex h-full w-full items-center justify-center"
                >
                  <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-violet-200/50">
                    <div className="flex flex-wrap gap-4">
                      {["🦸", "🏆", "🛠️", "🧠", "✨", "🛡️", "🔥", "⏳"].map((emoji, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="text-4xl"
                        >
                          {emoji}
                        </motion.span>
                      ))}
                    </div>
                    <div className="mt-6 space-y-2">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700"
                      >
                        <span>🧬</span> Peptide Characters
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700"
                      >
                        <span>📊</span> Side Effects
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700"
                      >
                        <span>💰</span> Cost Comparison
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-6 left-1/2 h-32 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-t from-violet-100/50 to-transparent"
        />
      </motion.section>

      {/* ─── Podcast Section (ABOVE THE FOLD) ─── */}
      <PodcastSection />

      {/* ─── Featured Products ─── */}
      <SlideUp>
        <section className="py-20" id="products">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                  Digital Guides & Tools
                </h2>
                <p className="mt-4 text-lg text-zinc-500">
                  Everything you need to start, track, and optimize your peptide journey.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <StaggerItem key={product.slug}>
                    <HoverScale>
                      <Link
                        href={`/products/${product.slug}`}
                        className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                      >
                        <div className={`mb-4 inline-flex rounded-xl ${product.gradient} p-3 text-2xl`}>
                          {product.emoji}
                        </div>
                        <p className="text-xs font-medium uppercase tracking-wider text-violet-600">
                          {product.tagline}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-zinc-900 group-hover:text-violet-600">
                          {product.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-500">{product.desc}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-lg font-bold text-zinc-900">${product.price.toFixed(2)}</span>
                          <span className="text-sm font-medium text-violet-600 group-hover:underline">
                            Learn more &rarr;
                          </span>
                        </div>
                      </Link>
                    </HoverScale>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50"
              >
                View All Products &rarr;
              </Link>
            </motion.div>
          </div>
        </section>
      </SlideUp>

      {/* ─── Encyclopedia Preview ─── */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Peptide Encyclopedia
              </h2>
              <p className="mt-4 text-lg text-zinc-500">
                Every peptide, explained simply. With timelines, side effects, and cost breakdowns.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {encyclopediaItems.map((item) => (
                <StaggerItem key={item.slug}>
                  <HoverScale>
                    <Link
                      href={`/encyclopedia/${item.slug}`}
                      className="block rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:shadow-md"
                    >
                      <span className="text-3xl">{item.emoji}</span>
                      <h3 className="mt-3 font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-1 text-xs text-zinc-500">{item.desc}</p>
                    </Link>
                  </HoverScale>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Community CTA ─── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-violet-600 to-pink-600 p-10 shadow-xl sm:p-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Join the PepSmart Community
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-violet-100">
              Accountability check-ins, expert Q&A, progress sharing, and friendship-building.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/community"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-violet-700 shadow-lg transition-all hover:bg-violet-50"
              >
                Join Now — $10/mo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/products"
                className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Browse Guides First
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── Meet the Team ─── */}
      <FadeIn>
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Meet the PepSmart Team</h2>
              <p className="mt-4 text-lg text-zinc-500">Real people behind the peptide characters — here to help you on your journey.</p>
            </div>
            <StaggerContainer>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "Dr. Sarah Chen", role: "Lead Researcher", emoji: "👩‍🔬", bio: "PhD in Biochemistry. 10+ years in peptide research." },
                  { name: "Marcus Johnson", role: "Health Coach", emoji: "👨‍🏫", bio: "Certified nutrition coach. Helped 500+ clients optimize protocols." },
                  { name: "Priya Patel", role: "Community Lead", emoji: "👩‍💻", bio: "Builds the PepSmart community. Your go-to for support." },
                  { name: "Pep", role: "Mascot Guide", emoji: "🧬", bio: "Your peptide mascot! Breaking down complex science into fun." },
                ].map((member) => (
                  <StaggerItem key={member.name}>
                    <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm hover:shadow-md">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-pink-100 text-4xl">
                        {member.emoji}
                      </div>
                      <h3 className="mt-4 font-semibold text-zinc-900">{member.name}</h3>
                      <p className="text-xs font-medium text-violet-600">{member.role}</p>
                      <p className="mt-2 text-xs text-zinc-500">{member.bio}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </FadeIn>

      {/* ─── Latest News ─── */}
      <LatestNewsHome />

      {/* ─── Features Strip ─── */}
      <section className="border-t border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { emoji: "🎨", title: "Visual & Fun", desc: "Cartoon characters make complex science easy." },
                { emoji: "💰", title: "Affordable", desc: "Guides start at $5.99. Community from $10/month." },
                { emoji: "🔬", title: "Science-Backed", desc: "Every claim sourced from clinical research." },
                { emoji: "👥", title: "Supportive Community", desc: "Real people sharing real progress." },
              ].map((feature) => (
                <StaggerItem key={feature.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="text-center"
                  >
                    <motion.span
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="inline-block text-4xl"
                    >
                      {feature.emoji}
                    </motion.span>
                    <h3 className="mt-3 font-semibold text-zinc-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{feature.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
