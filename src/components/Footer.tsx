import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white">
                P
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900">
                Pep<span className="text-violet-600">Smart</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              Fun, visual, and affordable digital guides that make peptides easy to understand.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Products</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/products/90-day-guide" className="text-sm text-zinc-500 hover:text-violet-600">90-Day Starter Guide</Link></li>
              <li><Link href="/products/symptom-tracker" className="text-sm text-zinc-500 hover:text-violet-600">Symptom Tracker</Link></li>
              <li><Link href="/products/injection-calendar" className="text-sm text-zinc-500 hover:text-violet-600">Injection Calendar</Link></li>
              <li><Link href="/products/protein-calculator" className="text-sm text-zinc-500 hover:text-violet-600">Protein Calculator</Link></li>
              <li><Link href="/products/meal-guide" className="text-sm text-zinc-500 hover:text-violet-600">Meal Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Learn</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/encyclopedia/glp1s" className="text-sm text-zinc-500 hover:text-violet-600">GLP-1 Encyclopedia</Link></li>
              <li><Link href="/library" className="text-sm text-zinc-500 hover:text-violet-600">Research Library</Link></li>
              <li><Link href="/myths-vs-reality" className="text-sm text-zinc-500 hover:text-violet-600">Myths vs Reality</Link></li>
              <li><Link href="/products/reconstitution-guide" className="text-sm text-zinc-500 hover:text-violet-600">Reconstitution Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Connect</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/community" className="text-sm text-zinc-500 hover:text-violet-600">Community</Link></li>
              <li><Link href="/service-locator" className="text-sm text-zinc-500 hover:text-violet-600">Service Locator</Link></li>
            </ul>
            <p className="mt-4 text-xs text-zinc-400">
              &copy; {new Date().getFullYear()} PepSmart. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}