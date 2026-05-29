import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";

interface EncPageProps {
  params: Promise<{ slug: string }>;
}

const encMeta: Record<string, { title: string; emoji: string; desc: string }> = {
  glp1s: { title: "GLP-1s: The Metabolic Masters", emoji: "🦸‍♂️", desc: "Tirzepatide, Semaglutide, Retatrutide, Cagrilintide" },
  growth_repair: { title: "Growth & Repair Peptides", emoji: "🛠️", desc: "BPC-157, TB-500, GHK-Cu, Ipamorelin, Tesamorelin, CJC-1295, IGF-1 LR3" },
  longevity_mitochondrial: { title: "Longevity & Mitochondrial", emoji: "⏳", desc: "NAD+, MOTS-C, SS-31, Glutathione, Pinealon, Fox04-DRI" },
  cognitive: { title: "Cognitive Peptides", emoji: "🧠", desc: "Noopept, Na-Semax, Na-Selank, DSIP, KPV" },
  skin_aesthetics: { title: "Skin & Aesthetics", emoji: "✨", desc: "Glow, Klow, Melanotan, PT-141, Snap-8, GHK-Cu" },
  immune: { title: "Immune Peptides", emoji: "🛡️", desc: "Thymosin Alpha 1, LL-37, VIP" },
  metabolism_fat_loss: { title: "Metabolism & Fat Loss", emoji: "🔥", desc: "AOD 9604, SLU-PP-332, 5-Amino, MIC-B12, Acetic Acid" },
  specialty: { title: "Specialty Peptides", emoji: "⭐", desc: "Epithalon, Kisspeptin" },
};

function findEncFile(slug: string): string | null {
  const fp = `/home/team/shared/content/encyclopedia/${slug}.md`;
  return fs.existsSync(fp) ? fp : null;
}

function renderEncMarkdown(md: string): string {
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

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-zinc-200" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-violet-600 hover:underline font-medium">$1</a>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-violet-300 pl-4 py-2 my-4 bg-violet-50 rounded-r-lg text-zinc-700 italic">$1</blockquote>');

  // Paragraphs
  const lines = html.split("\n");
  const processed = lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return "";
    if (trimmed.startsWith("<h") || trimmed.startsWith("<li") || trimmed.startsWith("<hr") || trimmed.startsWith("<blockquote") || trimmed.startsWith("</") || trimmed.startsWith("<td") || trimmed.startsWith("<tr")) {
      return line;
    }
    if (trimmed.startsWith("|")) return line;
    return `<p class="text-zinc-600 leading-relaxed mb-3">${trimmed}</p>`;
  });

  return processed.join("\n");
}

export default async function EncyclopediaPage({ params }: EncPageProps) {
  const { slug } = await params;
  const meta = encMeta[slug];

  if (!meta) {
    notFound();
  }

  const contentFile = findEncFile(slug);
  let contentHtml = "";
  if (contentFile) {
    const md = fs.readFileSync(contentFile, "utf-8");
    contentHtml = renderEncMarkdown(md);
  }

  const encKeys = Object.keys(encMeta);
  const currentIndex = encKeys.indexOf(slug);
  const prev = currentIndex > 0 ? encKeys[currentIndex - 1] : null;
  const next = currentIndex < encKeys.length - 1 ? encKeys[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Encyclopedia</span>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">{meta.title}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <article>
          <div className="mb-4 text-5xl">{meta.emoji}</div>
          <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">{meta.title}</h1>
          <p className="mt-2 text-zinc-500">{meta.desc}</p>

          <div
            className="mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between border-t border-zinc-200 pt-8">
            {prev ? (
              <Link
                href={`/encyclopedia/${prev}`}
                className="flex items-center gap-2 text-sm font-medium text-violet-600 hover:underline"
              >
                ← {encMeta[prev].emoji} {encMeta[prev].title}
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/encyclopedia/${next}`}
                className="flex items-center gap-2 text-sm font-medium text-violet-600 hover:underline"
              >
                {encMeta[next].emoji} {encMeta[next].title} →
              </Link>
            ) : <div />}
          </div>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="text-sm font-semibold text-zinc-900">Encyclopedia</h3>
            <ul className="mt-3 space-y-1.5">
              {encKeys.map((k) => (
                <li key={k}>
                  <Link
                    href={`/encyclopedia/${k}`}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                      k === slug
                        ? "bg-violet-100 font-medium text-violet-700"
                        : "text-zinc-600 hover:bg-zinc-100"
                    }`}
                  >
                    <span>{encMeta[k].emoji}</span>
                    <span>{encMeta[k].title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">💡 Pro Tip</p>
            <p className="mt-1 text-xs text-zinc-500">
              Use our guides alongside the encyclopedia for best results.
            </p>
            <Link
              href="/products"
              className="mt-3 inline-block text-sm font-medium text-violet-600 hover:underline"
            >
              Browse guides →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}