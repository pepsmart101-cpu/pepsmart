import Link from "next/link";
import fs from "fs";

const topics = [
  {
    category: "Metabolic Health",
    icon: "🔥",
    studies: [
      { title: "The SURMOUNT Trials", desc: "Massive clinical trials proving Tirzepatide's effectiveness for weight loss and metabolic health." },
      { title: "SURMOUNT-5: Tirzepatide vs Semaglutide", desc: "Head-to-head comparison showing superior weight loss outcomes." },
      { title: "Retatrutide Phase 3 Data", desc: "Emerging GLP-1/GIP/GCG triple agonist showing potent fat loss." },
    ],
  },
  {
    category: "Tissue Repair",
    icon: "🛠️",
    studies: [
      { title: "BPC-157 & Tendon Healing", desc: "Understanding how this gastric peptide signals for ligament repair and recovery." },
      { title: "TB-500 (Thymosin Beta-4)", desc: "Actin-binding protein that promotes cell migration and tissue regeneration." },
      { title: "GHK-Cu & Wound Healing", desc: "Copper peptide studied for skin regeneration and anti-aging properties." },
    ],
  },
  {
    category: "Neuro-Regeneration",
    icon: "🧠",
    studies: [
      { title: "BDNF & Cognitive Peptides", desc: "How Semax and Selank change brain chemistry to improve focus and mood." },
      { title: "Noopept & Neuroprotection", desc: "Cognitive enhancer studied for memory improvement and neural protection." },
      { title: "DSIP & Sleep Architecture", desc: "Delta sleep-inducing peptide's role in deep sleep and recovery." },
    ],
  },
  {
    category: "Longevity & Mitochondria",
    icon: "⏳",
    studies: [
      { title: "NAD+ & Cellular Aging", desc: "How NAD+ precursors combat age-related decline and support mitochondrial health." },
      { title: "MOTS-C & Metabolic Regulation", desc: "Mitochondrial peptide that regulates metabolism and insulin sensitivity." },
      { title: "SS-31 (Elamipretide)", desc: "Mitochondrial-targeted peptide studied for cardiovascular and kidney health." },
    ],
  },
];

const recentUpdates = [
  { date: "Spring 2026", title: "The Rise of Retatrutide", desc: "Phase 3 data showing even more potent fat loss than current GLP-1s." },
  { date: "Winter 2026", title: "Oral Peptide Breakthroughs", desc: "New delivery systems making oral peptides more effective." },
  { date: "Fall 2025", title: "Regulatory Watch", desc: "How different countries are classifying peptide therapeutics." },
  { date: "Summer 2025", title: "BPC-157 Oral Formulations", desc: "New arginate salt formulations showing oral bioavailability promise." },
];

export default function LibraryPage() {
  // Try to load the library intro content
  let introHtml = "";
  const introPath = "/home/team/shared/content/products/research-library/library_intro.md";
  if (fs.existsSync(introPath)) {
    let md = fs.readFileSync(introPath, "utf-8");
    // Quick render
    md = md.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-zinc-900 mt-8 mb-3">$1</h2>');
    md = md.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-zinc-900 mt-6 mb-4">$1</h1>');
    md = md.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');
    md = md.replace(/---/g, '<hr class="my-6 border-zinc-200" />');
    md = md.replace(/^\*   (.+)$/gm, '<li class="flex items-start gap-2 text-zinc-600">• <span>$1</span></li>');
    introHtml = md.split("\n").map((line: string) => {
      const t = line.trim();
      if (!t) return "";
      if (t.startsWith("<h") || t.startsWith("<li") || t.startsWith("<hr")) return line;
      return `<p class="text-zinc-600 leading-relaxed mb-3">${t}</p>`;
    }).join("\n");
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Research Library</span>
      </nav>

      <div className="mb-6 text-5xl">📚</div>
      <h1 className="text-4xl font-bold text-zinc-900">Research Library</h1>
      <p className="mt-3 text-lg text-zinc-500">
        Peptide science is moving at lightning speed. We simplify the latest clinical studies, news, and breakthroughs into language you can actually use.
      </p>

      {/* Intro content */}
      {introHtml && (
        <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-6" dangerouslySetInnerHTML={{ __html: introHtml }} />
      )}

      {/* Latest Updates */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-900">Latest Updates</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {recentUpdates.map((update) => (
            <div key={update.title} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-violet-600">{update.date}</p>
              <h3 className="mt-1 font-semibold text-zinc-900">{update.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{update.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-900">Research by Topic</h2>
        <p className="mt-2 text-zinc-500">Foundational studies and must-reads organized by goal.</p>

        {topics.map((topic) => (
          <div key={topic.category} className="mt-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{topic.icon}</span>
              <h3 className="text-xl font-bold text-zinc-900">{topic.category}</h3>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topic.studies.map((study) => (
                <div key={study.title} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                  <h4 className="font-semibold text-zinc-900">{study.title}</h4>
                  <p className="mt-1 text-sm text-zinc-500">{study.desc}</p>
                  <button className="mt-3 text-xs font-medium text-violet-600 hover:underline">
                    Read full summary →
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* How we vet */}
      <section className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
        <h2 className="text-xl font-bold text-zinc-900">How We Vet Research</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { step: "1️⃣", title: "Source", desc: "We pull from peer-reviewed journals and clinical trials only." },
            { step: "2️⃣", title: "Simplify", desc: "We break down complex data into actionable, understandable insights." },
            { step: "3️⃣", title: "Verify", desc: "Every claim is cross-checked against multiple authoritative sources." },
          ].map((item) => (
            <div key={item.step} className="rounded-lg bg-white p-4 shadow-sm">
              <span className="text-2xl">{item.step}</span>
              <h4 className="mt-2 font-semibold text-zinc-900">{item.title}</h4>
              <p className="mt-1 text-xs text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 p-8 text-white">
          <h2 className="text-2xl font-bold">Stay Ahead of the Science</h2>
          <p className="mt-2 text-violet-100">Get monthly research digests delivered to your inbox.</p>
          <div className="mt-6 flex justify-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-full px-4 py-2 text-sm text-zinc-900 outline-none"
            />
            <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-violet-700 transition-all hover:bg-violet-50">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}