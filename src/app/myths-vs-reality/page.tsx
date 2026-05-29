import Link from "next/link";
import fs from "fs";

const myths = [
  {
    myth: "Peptides are just steroids.",
    reality: "Steroids are a specific class of hormones (often synthetic) that mimic testosterone. Peptides are short chains of amino acids that signal your body to perform specific functions. While some peptides can help build muscle, they work in a completely different way and don't have the same androgenic side effects as steroids.",
    emoji: "💪",
  },
  {
    myth: "If I take a GLP-1, I don't need to exercise.",
    reality: "This is the most dangerous myth! If you lose weight without exercising, you will lose significant muscle mass. This can lower your metabolism, making it harder to maintain your weight later. Exercise (especially strength training) is more important when you're on peptides, not less.",
    emoji: "🏋️",
  },
  {
    myth: "Peptides are illegal.",
    reality: 'This is a grey area. Many peptides are FDA-approved for specific uses (like Semaglutide for diabetes/weight loss). Others are sold as "Research Chemicals" and are legal to purchase for research purposes but not for "human consumption." Always consult with a medical professional to ensure you are following the laws in your specific region.',
    emoji: "⚖️",
  },
  {
    myth: "Orals are just as good as injections.",
    reality: "For most peptides, the stomach's digestive enzymes destroy the delicate amino acid chains before they can reach the bloodstream. While there are some oral formulations (BPC-157 Arginate capsules, Sublingual sprays) that show promise, injections remain the gold standard for maximum absorption and effectiveness.",
    emoji: "💊",
  },
  {
    myth: "Once I start, I have to take them forever.",
    reality: "Most peptides are designed to be cycled. For example, you might use BPC-157 for 4 weeks to heal an injury, then stop. For weight loss, the goal is to use peptides as a bridge while you build sustainable habits, then slowly taper off to maintain your new weight.",
    emoji: "🔄",
  },
  {
    myth: "All peptides are the same.",
    reality: "Purity and quality vary wildly! A vial of Tirzepatide from one vendor might be 99% pure, while another might be 70% pure and full of residual solvents or heavy metals. This is why 3rd-party lab testing (COAs) is non-negotiable.",
    emoji: "🔬",
  },
  {
    myth: "More is always better.",
    reality: "Peptides follow a U-Shaped Curve. Too little won't work, but too much can overwhelm your receptors or cause extreme side effects. The goal is the minimum effective dose — the smallest amount needed to see results.",
    emoji: "📈",
  },
];

export default function MythsVsRealityPage() {
  // Try loading the content
  let contentHtml = "";
  const contentPath = "/home/team/shared/content/products/myths-vs-reality/myths_vs_reality.md";
  if (fs.existsSync(contentPath)) {
    let md = fs.readFileSync(contentPath, "utf-8");
    // Quick render header section
    md = md.replace(/^---$/gm, '<hr class="my-6 border-zinc-200" />');
    md = md.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');
    md = md.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-zinc-900 mt-4 mb-4">$1</h1>');
    md = md.replace(/^## (.+)$/gm, '');
    md = md.replace(/\n\n/g, '</p><p class="text-zinc-600 leading-relaxed mb-3">');
    contentHtml = `<p class="text-zinc-600 leading-relaxed mb-3">${md}</p>`;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Myths vs. Reality</span>
      </nav>

      <div className="mb-6 text-5xl">🕵️‍♀️</div>
      <h1 className="text-4xl font-bold text-zinc-900">Peptide Myths vs. Reality</h1>
      <p className="mt-3 text-lg text-zinc-500">
        The world of peptides is full of &ldquo;bro-science,&rdquo; fear-mongering, and exaggerated claims. We&apos;re here to clear the air with science-backed reality.
      </p>

      {/* Intro content if available */}
      {contentHtml && (
        <div className="mt-6 rounded-xl border border-zinc-200 bg-amber-50 p-6 text-sm" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      )}

      {/* Myth cards */}
      <div className="mt-12 space-y-8">
        {myths.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl">
                {item.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <span className="rounded-full bg-red-100 px-3 py-0.5 text-xs font-semibold text-red-700">
                    MYTH
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">&ldquo;{item.myth}&rdquo;</h3>
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-0.5 text-xs font-semibold text-green-700">
                    REALITY
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-600">{item.reality}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Myth submission CTA */}
      <div className="mt-16 rounded-2xl border border-zinc-200 bg-gradient-to-br from-violet-50 to-pink-50 p-8 text-center">
        <span className="text-4xl">💬</span>
        <h2 className="mt-4 text-xl font-bold text-zinc-900">Got a Myth You Want Debunked?</h2>
        <p className="mt-2 text-zinc-600">
          Send it to the PepSmart team in the community forum and we&apos;ll add it to our list!
        </p>
        <Link
          href="/community"
          className="mt-6 inline-flex rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-700"
        >
          Join the Community &rarr;
        </Link>
      </div>

      {/* Related */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-zinc-900">Continue Learning</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/encyclopedia/glp1s" className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <span className="text-2xl">🦸‍♂️</span>
            <p className="mt-2 font-semibold text-zinc-900">GLP-1 Encyclopedia</p>
            <p className="text-sm text-zinc-500">Deep dive into Tirzepatide, Semaglutide, and more.</p>
          </Link>
          <Link href="/products/reconstitution-guide" className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <span className="text-2xl">🧪</span>
            <p className="mt-2 font-semibold text-zinc-900">Reconstitution Guide</p>
            <p className="text-sm text-zinc-500">Learn proper handling and dosing.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}