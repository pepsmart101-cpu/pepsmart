"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "bot" | "user";
  text: string;
};

const faqResponses: Record<string, string> = {
  "glp-1": "GLP-1s (like Tirzepatide and Semaglutide) are metabolic peptides that help regulate blood sugar and appetite. They're the most popular peptides for weight loss. Check our GLP-1 Encyclopedia for full details! 🦸‍♂️",
  "tirzepatide": "Tirzepatide is a dual-action GLP-1/GIP agonist — think of it as a superhero with two shields! One stops hunger signals, the other helps fat cells behave. 💪 Check it out: /encyclopedia/glp1s",
  "semaglutide": "Semaglutide (Ozempic/Wegovy) is the 'gold standard' GLP-1. It mimics a hormone that regulates blood sugar and appetite — the traffic cop of your stomach! 🏆 More at: /encyclopedia/glp1s",
  "bpc-157": "BPC-157 is a repair peptide that helps heal tendons, ligaments, and gut lining. It's like sending a repair crew to injured areas. Common for sports recovery! 🛠️",
  "nad+": "NAD+ is a coenzyme essential for cellular energy and longevity. Levels decline with age — supplementation may help restore mitochondrial function. ⏳ Check our Longevity encyclopedia!",
  "ghk-cu": "GHK-Cu is a copper peptide known for skin rejuvenation, wound healing, and anti-aging. It's popular in both injectable and topical forms. ✨",
  "start": "New to peptides? Start with our 90-Day Starter Guide! It covers sourcing, reconstitution, dosing, and what to expect. 🚀 Available at: /products/90-day-guide",
  "dosing": "Dosing depends on the peptide and your goals. Always start low and go slow. Our Reconstitution Guide includes syringe math cheat sheets! 🧪 /products/reconstitution-guide",
  "side effects": "Common side effects include nausea (GLP-1s), fatigue, constipation, and injection site reactions. Always stay hydrated and eat enough protein! 📝 Keep a symptom tracker: /products/symptom-tracker",
  "sources": "Looking for reputable vendors? Check our curated Top Peptide Sources directory — vetted by purity, pricing, and COA availability! 🏆 /sources",
  "community": "Join the PepSmart Community for accountability check-ins, expert Q&A, and progress sharing with people on the same journey! 👥 /community",
  "protein": "Protein is CRUCIAL on peptides — aim for 1g per pound of goal body weight. Use our Protein Power Guide to hit your targets! 🥩 /products/protein-calculator",
  "meal": "Eating on peptides is different — lower appetite, slower digestion. Our Peptide-Friendly Meal Guide has 5-minute recipes and nausea prevention tips! 🥗 /products/meal-guide",
  "injection": "Rotate injection sites to prevent scar tissue! Use our Injection Calendar to track your rotation. Primary zones: stomach, thighs, glutes, arms. 💉 /products/injection-calendar",
  "cost": "Brand name GLP-1s can cost $1,000+/month. Compounded versions $300-500. Research peptides are most affordable but require careful sourcing. Check our cost comparisons! 💰",
  "myth": "There are many myths about peptides! They're NOT steroids, you DON'T have to take them forever, and more is NOT always better. 🕵️‍♀️ See all myths: /myths-vs-reality",
  "hello": "Hey there! 👋 I'm Pep, your peptide mascot guide. Ask me about any peptide, dosing, sources, or how to get started!",
  "hi": "Hey there! 👋 I'm Pep, your peptide mascot guide. Ask me about any peptide, dosing, sources, or how to get started!",
  "help": "I can help with: peptide info, dosing guides, sourcing, side effects, meal prep, injection tips, and more! Just type your question. 🤖",
};

const defaultReplies = [
  "Great question! Check out our encyclopedia for detailed info on peptides. 🦸‍♂️",
  "That's a common concern! Our Myths vs Reality page covers this in depth. 🕵️‍♀️",
  "I'd recommend looking at our products page for detailed guides on this topic! 📚",
  "Let me point you to the community — other members have great insights on this! 👥",
];

function getBotReply(input: string): string {
  const lower = input.toLowerCase();

  // Check FAQ matches
  for (const [key, reply] of Object.entries(faqResponses)) {
    if (lower.includes(key)) {
      // Handle links
      return reply.replace(/\/(\w[\w-]*)/g, (_: string, slug: string) => `/${slug}`);
    }
  }

  // Default
  return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "👋 Hi! I'm Pep, your peptide mascot guide. Ask me anything about peptides!" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    setTimeout(() => {
      const reply = getBotReply(userMsg);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-600 text-2xl shadow-lg shadow-violet-300 transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Open chat"
      >
        {open ? "✕" : "🧬"}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl border border-zinc-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 rounded-t-2xl bg-gradient-to-r from-violet-600 to-pink-600 px-4 py-3 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl backdrop-blur-sm">
                🧬
              </div>
              <div>
                <p className="text-sm font-semibold">Pep — Your Peptide Guide</p>
                <p className="text-xs text-white/70">Ask me anything!</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto px-4 py-3">
              {messages.map((msg, i) => (
                <div key={i} className={`mb-3 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-violet-600 text-white rounded-br-md"
                        : "bg-zinc-100 text-zinc-800 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="border-t border-zinc-200 p-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about peptides..."
                  className="flex-1 rounded-full border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-violet-400"
                />
                <button
                  onClick={sendMessage}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white transition-all hover:bg-violet-700"
                >
                  ➤
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["GLP-1", "BPC-157", "sources", "start"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setInput(tag);
                      setTimeout(() => {
                        setMessages((prev) => [...prev, { role: "user", text: tag }]);
                        setTimeout(() => {
                          setMessages((prev) => [...prev, { role: "bot", text: getBotReply(tag) }]);
                        }, 600);
                      }, 100);
                      setInput("");
                    }}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] text-zinc-600 hover:bg-zinc-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}