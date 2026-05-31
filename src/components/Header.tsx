import Link from "next/link";
import TopSourcesBanner from "./TopSourcesBanner";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Sources Banner */}
      <TopSourcesBanner />

      {/* Main Nav */}
      <div className="border-b border-zinc-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white">
              P
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">
              Pep<span className="text-violet-600">Smart</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-600 md:flex">
            <Link href="/podcast" className="transition-colors hover:text-violet-600">
              Podcast
            </Link>
            <Link href="/products" className="transition-colors hover:text-violet-600">
              Guides
            </Link>
            <Link href="/encyclopedia/glp1s" className="transition-colors hover:text-violet-600">
              Encyclopedia
            </Link>
            <Link href="/library" className="transition-colors hover:text-violet-600">
              Research
            </Link>
            <Link href="/sources" className="transition-colors hover:text-violet-600">
              Sources
            </Link>
            <Link href="/myths-vs-reality" className="transition-colors hover:text-violet-600">
              Myths
            </Link>
            <Link href="/service-locator" className="transition-colors hover:text-violet-600">
              Locator
            </Link>
            <Link href="/community" className="transition-colors hover:text-violet-600">
              Community
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/community"
              className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-violet-700"
            >
              Join Community
            </Link>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 md:hidden">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}