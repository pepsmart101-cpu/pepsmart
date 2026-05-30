import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopSourcesBanner from "@/components/TopSourcesBanner";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "PepSmart - Peptide Education Made Simple",
  description: "Fun, visual guides and community that make peptides easy to understand.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        <TopSourcesBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
