import Link from "next/link";

const products = [
  {
    slug: "90-day-guide",
    title: "Your First 90 Days on Peptides",
    tagline: "The ultimate starter guide",
    price: 29.95,
    gradient: "gradient-purple",
    emoji: "🚀",
    desc: "Complete 90-day roadmap covering preparation, first dose, momentum phase, and transformation.",
    highlights: ["Preparation checklist (Days 1-14)", "First dose & adaptation (Days 15-30)", "Momentum phase (Days 31-60)", "Transformation & maintenance (Days 61-90)", "Sourcing guide with red flags", "Side effect management strategies"],
  },
  {
    slug: "symptom-tracker",
    title: "Weekly Symptom & Progress Tracker",
    tagline: "Track your body's response",
    price: 5.99,
    gradient: "gradient-pink",
    emoji: "📝",
    desc: "Monitor how your body responds to your peptide protocol. Track subjective markers just as important as the scale.",
    highlights: ["Daily energy & mood scoring (1-10)", "Hunger & digestion tracking", "Sleep quality monitoring", "Injection site reaction log", "Weekly progress snapshots", "Printable & digital formats"],
  },
  {
    slug: "injection-calendar",
    title: "Injection Calendar & Rotation Guide",
    tagline: "Stay on schedule, stay safe",
    price: 7.99,
    gradient: "gradient-cyan",
    emoji: "💉",
    desc: "Consistency and safety are the two pillars of a successful peptide protocol. Plan your schedule and keep your skin healthy.",
    highlights: ["Rotation map for injection zones", "Ideal schedules by peptide type", "GLP-1 weekly tracking", "Repair peptide daily tracking", "Growth peptide 5-on/2-off schedule", "Lipohypertrophy prevention tips"],
  },
  {
    slug: "protein-calculator",
    title: "Protein Power Guide",
    tagline: "Protect your muscle",
    price: 7.99,
    gradient: "gradient-green",
    emoji: "🥩",
    desc: "When you're on peptides—especially GLP-1s—protein is your protection. Calculate your target and hit it every day.",
    highlights: ["1g per pound of goal weight formula", "Protein cheat sheet with common foods", "Sample meal plans for every target", "Protein supplement recommendations", "Muscle preservation strategies", "Quick-reference printable chart"],
  },
  {
    slug: "meal-guide",
    title: "Peptide-Friendly Meal Guide",
    tagline: "Eat smart on peptides",
    price: 9.99,
    gradient: "gradient-amber",
    emoji: "🥗",
    desc: "Eating while on peptides is different. Lower appetite, slower digestion, changing taste buds—this guide helps you navigate the new you.",
    highlights: ["5-minute high-protein recipes", "Nausea prevention & remedies", "Peptide face & loose skin prevention", "Hydration targets (3-4L/day)", "Collagen & electrolyte guidance", "Meal prep templates"],
  },
  {
    slug: "reconstitution-guide",
    title: "Reconstitution Guide",
    tagline: "Syringe math made simple",
    price: 7.99,
    gradient: "gradient-purple",
    emoji: "🧪",
    desc: "Turn lyophilized peptide powder into injectable liquid. Step-by-step with syringe math cheat sheets.",
    highlights: ["4-step reconstitution process", "Syringe math cheat sheet", "Dosage calculation formulas", "5mg, 10mg, 15mg vial examples", "Sterile technique guide", "Storage & handling best practices"],
  },
  {
    slug: "research-library",
    title: "Research Library Access",
    tagline: "Stay informed",
    price: 14.95,
    gradient: "gradient-cyan",
    emoji: "📚",
    desc: "Full access to our curated research library with simplified breakdowns of clinical studies and latest breakthroughs.",
    highlights: ["SURMOUNT trial breakdowns", "BPC-157 tendon healing studies", "BDNF & cognitive peptide research", "Latest retatrutide phase 3 data", "Regulatory watch & legality updates", "Monthly research digests"],
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Digital Guides & Tools
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500">
          Everything you need to start, track, and optimize your peptide journey. Fun, visual, and affordable.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`mb-4 inline-flex rounded-xl ${product.gradient} p-3 text-2xl`}>
              {product.emoji}
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-violet-600">
              {product.tagline}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-zinc-900 group-hover:text-violet-600">
              {product.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-500">{product.desc}</p>

            <ul className="mt-4 space-y-1.5">
              {product.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-zinc-400">
                  <span className="mt-0.5 text-violet-400">✓</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
              <span className="text-2xl font-bold text-zinc-900">${product.price.toFixed(2)}</span>
              <span className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition-all group-hover:bg-violet-100">
                Get it now &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Lifestyle Bundle */}
      <div className="mt-16 rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 p-10 text-white shadow-xl sm:p-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-5xl">🎯</span>
          <h2 className="mt-4 text-3xl font-bold">The Complete Starter Bundle</h2>
          <p className="mt-4 text-lg text-violet-100">
            Get all 7 guides + tools for one low price. Everything you need from Day 1.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="text-4xl font-bold">$47.95</span>
            <span className="text-lg text-violet-200 line-through">$84.81</span>
          </div>
          <Link
            href="/products/90-day-guide"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-violet-700 shadow-lg transition-all hover:bg-violet-50"
          >
            Get the Bundle &rarr;
          </Link>
        </div>
      </div>

      {/* Community upsell */}
      <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
        <p className="text-lg text-zinc-600">
          💬 Want personalized support? Join the{" "}
          <Link href="/community" className="font-semibold text-violet-600 hover:underline">
            PepSmart Community
          </Link>{" "}
          for accountability, expert Q&A, and progress sharing. Just $10-20/month.
        </p>
      </div>
    </div>
  );
}