import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const productMeta: Record<string, {
  title: string;
  tagline: string;
  price: number;
  gradient: string;
  emoji: string;
  features: string[];
}> = {
  "90-day-guide": {
    title: "Your First 90 Days on Peptides",
    tagline: "The Ultimate Starter Guide",
    price: 29.95,
    gradient: "gradient-purple",
    emoji: "🚀",
    features: ["90-Day Roadmap (4 phases)", "Sourcing Checklist", "Side Effect Management", "Habit Building Framework", "Printable Progress Tracker"],
  },
  "symptom-tracker": {
    title: "Weekly Symptom & Progress Tracker",
    tagline: "Track Your Body's Response",
    price: 5.99,
    gradient: "gradient-pink",
    emoji: "📝",
    features: ["Daily Energy & Mood Log", "Hunger & Digestion Tracking", "Sleep Quality Monitor", "Injection Site Log", "Printable & Digital Formats"],
  },
  "injection-calendar": {
    title: "Injection Calendar & Rotation Guide",
    tagline: "Stay on Schedule, Stay Safe",
    price: 7.99,
    gradient: "gradient-cyan",
    emoji: "💉",
    features: ["Rotation Maps (4 zones)", "Peptide-Specific Schedules", "GLP-1 Weekly Tracking", "Growth Peptide 5:2 Schedule", "Lipohypertrophy Prevention"],
  },
  "protein-calculator": {
    title: "Protein Power Guide",
    tagline: "Protect Your Muscle",
    price: 7.99,
    gradient: "gradient-green",
    emoji: "🥩",
    features: ["Protein Target Calculator", "Food Cheat Sheet", "Sample Meal Plans", "Supplement Recommendations", "Printable Reference Chart"],
  },
  "meal-guide": {
    title: "Peptide-Friendly Meal Guide",
    tagline: "Eat Smart on Peptides",
    price: 9.99,
    gradient: "gradient-amber",
    emoji: "🥗",
    features: ["5-Minute High-Protein Recipes", "Nausea Prevention Tips", "Loose Skin Prevention", "Hydration Targets", "Meal Prep Templates"],
  },
  "reconstitution-guide": {
    title: "Reconstitution Guide",
    tagline: "Syringe Math Made Simple",
    price: 7.99,
    gradient: "gradient-purple",
    emoji: "🧪",
    features: ["4-Step Reconstitution Process", "Dosage Calculator", "Vial Math Cheat Sheet", "Sterile Technique Guide", "Storage Best Practices"],
  },
  "research-library": {
    title: "Research Library Access",
    tagline: "Stay Informed",
    price: 14.95,
    gradient: "gradient-cyan",
    emoji: "📚",
    features: ["SURMOUNT Trial Breakdowns", "BPC-157 Healing Studies", "Cognitive Peptide Research", "Latest Breakthroughs", "Monthly Research Digests"],
  },
  "service-locator": {
    title: "Service Locator Guide",
    tagline: "Find Your Team",
    price: 0,
    gradient: "gradient-green",
    emoji: "🏥",
    features: ["Provider Rating Criteria", "Types of Providers Guide", "Red Flag Checklist", "Review System", "Location-Based Search"],
  },
  "myths-vs-reality": {
    title: "Peptide Myths vs. Reality",
    tagline: "Setting the Record Straight",
    price: 0,
    gradient: "gradient-amber",
    emoji: "🕵️‍♀️",
    features: ["7 Common Myths Debunked", "Science-Backed Reality", "Steroid vs Peptide Facts", "Sourcing Truths", "Community Myth Busters"],
  },
};

function findContentFile(slug: string): string | null {
  const contentDir = "/home/team/shared/content/products";
  const productDirs: Record<string, string> = {
    "90-day-guide": "90-day-guide/starter_guide.md",
    "symptom-tracker": "symptom-tracker/symptom_tracker.md",
    "injection-calendar": "injection-calendar/injection_calendar.md",
    "protein-calculator": "protein-calculator/protein_guide.md",
    "meal-guide": "meal-guide/meal_guide.md",
    "reconstitution-guide": "reconstitution-guide/reconstitution_guide.md",
    "research-library": "research-library/library_intro.md",
    "service-locator": "service-locator/locator_guide.md",
    "myths-vs-reality": "myths-vs-reality/myths_vs_reality.md",
  };
  const rel = productDirs[slug];
  if (!rel) return null;
  const fp = path.join(contentDir, rel);
  return fs.existsSync(fp) ? fp : null;
}

function renderMarkdownAsHtml(md: string): string {
  let html = md;

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-zinc-900 mt-6 mb-2">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-zinc-900 mt-8 mb-3">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-zinc-900 mt-10 mb-4">$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-mono text-pink-600">$1</code>');

  // Lists
  html = html.replace(/^\*   (.+)$/gm, '<li class="flex items-start gap-2 text-zinc-600">• <span>$1</span></li>');
  html = html.replace(/^\d\.\s+(.+)$/gm, '<li class="flex items-start gap-2 text-zinc-600"><span class="font-medium text-violet-600">→</span> <span>$1</span></li>');

  // Tables (basic)
  html = html.replace(/\| (.+) \|/g, (match) => {
    if (match.includes("---")) return '<div class="border-t border-zinc-200 my-4"></div>';
    const cells = match.split("|").filter(c => c.trim());
    const formatted = cells.map(c => `<td class="px-3 py-2 text-sm border border-zinc-200">${c.trim()}</td>`).join("");
    return `<tr>${formatted}</tr>`;
  });

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-zinc-200" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-violet-600 hover:underline font-medium">$1</a>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-violet-300 pl-4 py-2 my-4 bg-violet-50 rounded-r-lg text-zinc-700 italic">$1</blockquote>');

  // Paragraphs (catch remaining text lines)
  const lines = html.split("\n");
  const processed = lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return "";
    if (trimmed.startsWith("<h") || trimmed.startsWith("<li") || trimmed.startsWith("<tr") || trimmed.startsWith("<div") || trimmed.startsWith("<hr") || trimmed.startsWith("<blockquote") || trimmed.startsWith("</") || trimmed.startsWith("<td")) {
      return line;
    }
    if (trimmed.startsWith("|")) return line;
    return `<p class="text-zinc-600 leading-relaxed mb-3">${trimmed}</p>`;
  });

  return processed.join("\n");
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const meta = productMeta[slug];

  if (!meta) {
    notFound();
  }

  const contentFile = findContentFile(slug);
  let contentHtml = "";
  if (contentFile) {
    const md = fs.readFileSync(contentFile, "utf-8");
    contentHtml = renderMarkdownAsHtml(md);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-violet-600">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">{meta.title}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        {/* Main Content */}
        <article>
          <div className={`mb-6 inline-flex rounded-xl ${meta.gradient} p-4 text-3xl`}>
            {meta.emoji}
          </div>
          <p className="text-sm font-medium uppercase tracking-wider text-violet-600">
            {meta.tagline}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
            {meta.title}
          </h1>

          <div
            className="prose prose-zinc mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Features */}
          <div className="mt-10 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-900">What&apos;s Included</h3>
            <ul className="mt-4 space-y-2">
              {meta.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-zinc-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-600">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-center">
              {meta.price > 0 ? (
                <>
                  <p className="text-4xl font-bold text-zinc-900">${meta.price.toFixed(2)}</p>
                  <p className="mt-1 text-sm text-zinc-500">One-time purchase</p>
                </>
              ) : (
                <>
                  <p className="text-2xl font-bold text-green-600">Free</p>
                  <p className="mt-1 text-sm text-zinc-500">Included with any purchase</p>
                </>
              )}
            </div>

            <button className="mt-6 w-full rounded-full bg-violet-600 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:bg-violet-700">
              {meta.price > 0 ? `Buy Now — $${meta.price.toFixed(2)}` : "Download Free"}
            </button>

            <div className="mt-4 space-y-3 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Instant download (PDF)
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Printable & digital friendly
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Updated regularly
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-100 pt-6">
              <p className="text-sm font-semibold text-zinc-700">Want more?</p>
              <Link
                href="/products"
                className="mt-2 block text-sm font-medium text-violet-600 hover:underline"
              >
                View all guides &rarr;
              </Link>
              <Link
                href="/community"
                className="mt-1 block text-sm font-medium text-violet-600 hover:underline"
              >
                Join the community &rarr;
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}