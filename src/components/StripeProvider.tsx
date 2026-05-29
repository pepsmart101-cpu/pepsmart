"use client";

import { createContext, useContext, ReactNode } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Public Stripe key (test mode)
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder"
);

const StripeContext = createContext<{ stripe: typeof stripePromise }>({
  stripe: stripePromise,
});

export function useStripe() {
  return useContext(StripeContext);
}

export function StripeProvider({ children }: { children: ReactNode }) {
  return (
    <StripeContext.Provider value={{ stripe: stripePromise }}>
      {children}
    </StripeContext.Provider>
  );
}

// Stripe Checkout helper
const PRODUCTS: Record<string, { price: number; name: string }> = {
  "90-day-guide": { price: 29.95, name: "90-Day Starter Guide" },
  "symptom-tracker": { price: 5.99, name: "Symptom Tracker" },
  "injection-calendar": { price: 7.99, name: "Injection Calendar" },
  "protein-calculator": { price: 7.99, name: "Protein Calculator" },
  "meal-guide": { price: 9.99, name: "Meal Guide" },
  "reconstitution-guide": { price: 7.99, name: "Reconstitution Guide" },
  "research-library": { price: 14.95, name: "Research Library" },
  bundle: { price: 47.95, name: "Complete Starter Bundle" },
};

export function getProductPrice(slug: string): number | null {
  return PRODUCTS[slug]?.price ?? null;
}

export function getCheckoutUrl(slug: string): string {
  const product = PRODUCTS[slug];
  if (!product) return "/products";
  // In production this would create a Stripe Checkout Session
  return `/checkout?product=${slug}&price=${product.price}`;
}