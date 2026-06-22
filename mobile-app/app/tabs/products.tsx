import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const products = [
  { slug: "90-day-guide", title: "90-Day Starter Guide", price: 29.95, emoji: "🚀", tagline: "The ultimate starter guide" },
  { slug: "symptom-tracker", title: "Symptom Tracker", price: 5.99, emoji: "📝", tagline: "Track your body's response" },
  { slug: "injection-calendar", title: "Injection Calendar", price: 7.99, emoji: "💉", tagline: "Stay on schedule" },
  { slug: "protein-calculator", title: "Protein Guide", price: 7.99, emoji: "🥩", tagline: "Protect your muscle" },
  { slug: "meal-guide", title: "Meal Guide", price: 9.99, emoji: "🥗", tagline: "Eat smart on peptides" },
  { slug: "reconstitution-guide", title: "Reconstitution Guide", price: 7.99, emoji: "🧪", tagline: "Syringe math made simple" },
  { slug: "research-library", title: "Research Library", price: 14.95, emoji: "📚", tagline: "Stay informed" },
];

export default function ProductsScreen() {
  return (
    <ScrollView style={s.container}>
      <View style={s.header}>
        <Text style={s.headerIcon}>🛒</Text>
        <Text style={s.title}>Digital Guides & Tools</Text>
        <Text style={s.sub}>Fun, visual, and affordable — from $5.99</Text>
      </View>
      {products.map((p, i) => (
        <View key={i} style={s.card}>
          <View style={s.cardRow}>
            <Text style={s.emoji}>{p.emoji}</Text>
            <View style={s.info}>
              <Text style={s.tagline}>{p.tagline}</Text>
              <Text style={s.pname}>{p.title}</Text>
            </View>
            <View style={s.priceCol}>
              <Text style={s.price}>${p.price.toFixed(2)}</Text>
              <TouchableOpacity style={s.buyBtn}><Text style={s.buyText}>Buy</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
      {/* Bundle */}
      <View style={s.bundle}>
        <Text style={s.bundleEmoji}>🎯</Text>
        <Text style={s.bundleTitle}>Complete Starter Bundle</Text>
        <Text style={s.bundlePrice}>$47.95</Text>
        <Text style={s.bundleOld}>$84.81</Text>
        <TouchableOpacity style={s.bundleBtn}><Text style={s.bundleBtnText}>Get the Bundle</Text></TouchableOpacity>
      </View>
      <Link href="/(tabs)/community" asChild><TouchableOpacity style={s.communityCard}><Text style={s.communityText}>💬 Join the PepSmart Community for $10-20/month →</Text></TouchableOpacity></Link>
    </ScrollView>
  );
}
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 24, paddingTop: 60, backgroundColor: "#f8fafc", alignItems: "center" },
  headerIcon: { fontSize: 40, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: "700", color: "#0f172a" },
  sub: { color: "#64748b", fontSize: 14, marginTop: 4 },
  card: { margin: 12, marginBottom: 0, backgroundColor: "#fff", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#e2e8f0" },
  cardRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  emoji: { fontSize: 28 },
  info: { flex: 1 },
  tagline: { color: "#7c3aed", fontSize: 11, fontWeight: "600", textTransform: "uppercase", letterSpacing: 0.5 },
  pname: { color: "#0f172a", fontWeight: "600", fontSize: 15, marginTop: 2 },
  priceCol: { alignItems: "flex-end" },
  price: { fontSize: 20, fontWeight: "700", color: "#0f172a" },
  buyBtn: { backgroundColor: "#7c3aed", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 999, marginTop: 4 },
  buyText: { color: "#fff", fontWeight: "700", fontSize: 13 },
  bundle: { margin: 12, backgroundColor: "#7c3aed", borderRadius: 24, padding: 24, alignItems: "center" },
  bundleEmoji: { fontSize: 40, marginBottom: 8 },
  bundleTitle: { color: "#fff", fontSize: 20, fontWeight: "700" },
  bundlePrice: { color: "#fff", fontSize: 36, fontWeight: "800", marginTop: 8 },
  bundleOld: { color: "#c4b5fd", fontSize: 16, textDecorationLine: "line-through" },
  bundleBtn: { backgroundColor: "#fff", paddingHorizontal: 32, paddingVertical: 12, borderRadius: 999, marginTop: 12 },
  bundleBtnText: { color: "#7c3aed", fontWeight: "700" },
  communityCard: { margin: 12, backgroundColor: "#f8fafc", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#e2e8f0", alignItems: "center" },
  communityText: { color: "#7c3aed", fontWeight: "600", fontSize: 14 },
});