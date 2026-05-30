
"use client";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";

const products = {
  "90-day-guide": {
    title: "Your First 90 Days on Peptides",
    price: 29.95,
    desc: "Complete starter guide covering everything from sourcing to stacking.",
    includes: ["Dosing protocols", "Side effect management", "Stacking strategies", "Progress tracking"],
  },
  "symptom-tracker": {
    title: "Peptide Symptom Tracker",
    price: 5.99,
    desc: "Track side effects, progress, and reactions across your peptide journey.",
    includes: ["Daily log", "Side effect scale", "Progress photos", "Export data"],
  },
  "injection-calendar": {
    title: "Injection Calendar & Rotation Map",
    price: 9.99,
    desc: "Never miss a dose with this visual injection planning tool.",
    includes: ["Rotation schedule", "Site rotation map", "Reminder system", "Dose tracking"],
  },
  "protein-calculator": {
    title: "Protein Calculator & Guide",
    price: 7.99,
    desc: "Optimize your protein intake for peptide therapy results.",
    includes: ["Personalized macros", "Meal timing guide", "Food database", "Progress logging"],
  },
  "meal-guide": {
    title: "Peptide Meal Prep Guide",
    price: 14.99,
    desc: "Meal plans and recipes designed to maximize peptide results.",
    includes: ["14-day meal plan", "Recipe cards", "Grocery lists", "Prep instructions"],
  },
  "reconstitution-guide": {
    title: "Reconstitution Guide",
    price: 11.99,
    desc: "Master the art of mixing peptides safely and accurately.",
    includes: ["Syringe math", "Bacteriostatic water guide", "Dosage calculator", "Storage tips"],
  },
  "myths-vs-reality": {
    title: "Myths vs Reality: Peptide Edition",
    price: 9.99,
    desc: "Debunk the 7 most dangerous peptide myths with science.",
    includes: ["7 myth deep dives", "Science explanations", "Expert citations", "Quick reference"],
  },
};

export default function ProductPage() {
  const { slug } = useParams();
  const product = products[slug];
  if (!product) notFound();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen pt-24 pb-16 bg-zinc-50">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
        <div className="text-3xl font-bold text-violet-600 mb-6">${product.price}</div>
        <p className="text-zinc-600 mb-6">{product.desc}</p>
        <h2 className="text-xl font-semibold mb-3">What&apos;s Included</h2>
        <ul className="space-y-2 mb-8">
          {product.includes.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-zinc-700">
              <span className="text-green-500">✓</span> {item}
            </li>
          ))}
        </ul>
        <button className="bg-violet-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-violet-700 transition-all w-full sm:w-auto text-center">
          Buy Now — ${product.price}
        </button>
      </div>
    </motion.div>
  );
}
