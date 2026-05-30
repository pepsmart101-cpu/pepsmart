"use client";
const vendors = [
  { name: "Peptide Sciences", rating: 5.0, price: "$$$", coa: true, pros: ["99%+ purity", "Gold standard"], cons: ["Premium pricing"] },
  { name: "Arctic Peptides", rating: 4.5, price: "$$", coa: true, pros: ["Great value", "Lot-specific COAs"], cons: ["Stock issues"] },
  { name: "Limitless Life", rating: 4.5, price: "$$-$$$", coa: true, pros: ["Massive catalog", "Multi-lab COAs"], cons: ["Premium"] },
  { name: "Amino Asylum", rating: 3.5, price: "$", coa: true, pros: ["Best pricing"], cons: ["Variable consistency"] },
  { name: "Apollo Peptide", rating: 4.0, price: "$$", coa: true, pros: ["Fast shipping", "Good rep"], cons: ["Newer vendor"] },
];
export default function SourcesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Top Peptide Sources</h1>
        <p className="text-zinc-500 mb-8">Curated based on reviews, pricing, and third-party testing.</p>
        <div className="space-y-4">
          {vendors.map((v,i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">#{i+1} {v.name}</h3>
                  <span className="text-amber-400">{'★'.repeat(Math.floor(v.rating))}{v.rating%1?'½':''}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-semibold text-violet-600">{v.price}</span>
                  {v.coa && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">COA ✓</span>}
                </div>
              </div>
              <div className="mt-3 flex gap-4 text-sm">
                <span className="text-green-600">✓ {v.pros.join(", ")}</span>
                <span className="text-amber-600">⚠ {v.cons.join(", ")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}