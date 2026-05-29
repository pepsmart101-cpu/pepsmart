import Link from "next/link";

const plans = [
  {
    name: "Monthly",
    price: 10,
    period: "/month",
    desc: "Full community access with accountability check-ins and Q&A.",
    popular: false,
    features: [
      "Private community access",
      "Weekly accountability check-ins",
      "Community Q&A forum",
      "Progress sharing & feedback",
      "Peer support & friendship",
      "Monthly expert AMA sessions",
    ],
  },
  {
    name: "Premium",
    price: 20,
    period: "/month",
    desc: "Everything in Monthly plus direct expert access and exclusive content.",
    popular: true,
    features: [
      "All Monthly features",
      "Direct expert Q&A access",
      "Exclusive protocol reviews",
      "Monthly 1-on-1 check-in",
      "Early access to new guides",
      "Member-only research digests",
    ],
  },
  {
    name: "Annual",
    price: 96,
    period: "/year",
    desc: "Best value — two months free. Full Premium access for a full year.",
    popular: false,
    features: [
      "All Premium features",
      "2 months free ($240 value)",
      "Priority expert scheduling",
      "Annual progress review",
      "Exclusive annual meetup invite",
      "Lifetime resource library access",
    ],
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "GLP-1 Beginner",
    text: "PepSmart completely changed how I approach my health. The community kept me accountable when I wanted to quit.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Biohacker",
    text: "I've been using peptides for years, but the encyclopedia here is the most comprehensive resource I've found. And the community is brilliant.",
    rating: 5,
  },
  {
    name: "Lisa R.",
    role: "Health Coach",
    text: "I recommend PepSmart to all my clients. The guides are clear, fun, and actually useful. The community support is unmatched.",
    rating: 5,
  },
];

export default function CommunityPage() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span>👥</span> Join 500+ Members
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            The PepSmart Community
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-violet-100">
            Accountability check-ins, expert Q&A, progress sharing, and real friendship-building.
            You don&apos;t have to do this alone.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#plans"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-violet-700 shadow-lg transition-all hover:bg-violet-50"
            >
              See Plans & Pricing
            </Link>
            <Link
              href="#testimonials"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Hear from Members
            </Link>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">What You Get</h2>
            <p className="mt-4 text-lg text-zinc-500">More than just a forum — a real support system.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "✅", title: "Accountability", desc: "Weekly check-ins keep you on track with your goals and protocol." },
              { emoji: "❓", title: "Expert Q&A", desc: "Get your questions answered by experienced peptide users and coaches." },
              { emoji: "📊", title: "Progress Sharing", desc: "Share your wins and challenges. Celebrate milestones together." },
              { emoji: "🤝", title: "Friendship", desc: "Connect with people on the same journey. Build real relationships." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
                <span className="text-4xl">{item.emoji}</span>
                <h3 className="mt-3 font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-zinc-500">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 shadow-sm transition-all hover:shadow-lg ${
                  plan.popular
                    ? "border-violet-200 bg-white shadow-violet-100"
                    : "border-zinc-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg font-semibold text-zinc-900">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-zinc-900">${plan.price}</span>
                  <span className="text-sm text-zinc-500">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-500">{plan.desc}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-600">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-full py-3 text-sm font-semibold shadow-lg transition-all ${
                    plan.popular
                      ? "bg-violet-600 text-white shadow-violet-200 hover:bg-violet-700"
                      : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  Join {plan.name} — ${plan.price}{plan.period === "/month" ? "/mo" : "/yr"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">What Members Say</h2>
            <p className="mt-4 text-lg text-zinc-500">Real stories from real people.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 border-t border-zinc-100 pt-4">
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-zinc-900 sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-12 space-y-6">
            {[
              { q: "Can I cancel anytime?", a: "Yes! You can cancel your subscription at any time. No long-term commitments." },
              { q: "What kind of experts are in the community?", a: "We have experienced peptide users, health coaches, and medical professionals who participate in Q&A sessions." },
              { q: "Is this a replacement for medical advice?", a: "No. PepSmart is an educational and community platform. Always consult with your healthcare provider before starting any protocol." },
              { q: "How do the accountability check-ins work?", a: "Weekly check-ins via community threads where you share your progress, challenges, and goals. Members and experts provide feedback and encouragement." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="font-semibold text-zinc-900">{faq.q}</h3>
                <p className="mt-2 text-sm text-zinc-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}