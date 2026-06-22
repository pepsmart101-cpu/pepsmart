import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const vendors = [
  { name: "PurePep Research", rating: 4.8, tier: "$$", badge: "Community Favorite", pros: ["Excellent purity 99%+", "Fast shipping"], cons: ["Limited selection"] },
  { name: "AminoVault Labs", rating: 4.6, tier: "$", badge: "Best Value", pros: ["Most affordable", "60+ peptides"], cons: ["Slower shipping"] },
  { name: "Titan Peptide Sciences", rating: 4.9, tier: "$$$", badge: "Gold Standard", pros: ["Highest purity", "Full COAs"], cons: ["Premium pricing"] },
  { name: "ElitePeptide Co", rating: 4.5, tier: "$$", badge: "Wide Selection", pros: ["100+ peptides", "International"], cons: ["Slow support"] },
  { name: "Recon Labs", rating: 4.7, tier: "$$", badge: "Newcomer Favorite", pros: ["Starter kits", "Free guides"], cons: ["Newer company"] },
];

export default function SourcesScreen() {
  return (
    <ScrollView style={s.container}>
      <View style={s.header}><Text style={s.icon}>🏆</Text><Text style={s.title}>Top Peptide Sources</Text><Text style={s.sub}>Vetted by purity, pricing, and reviews.</Text></View>
      {vendors.map((v, i) => (
        <View key={i} style={s.card}>
          <View style={s.row}><Text style={s.rank}>{i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : "🏅"}</Text><Text style={s.name}>{v.name}</Text><View style={s.badgeWrap}><Text style={s.badgeText}>{v.badge}</Text></View></View>
          <View style={s.row}><Text style={s.tier}>{v.tier}</Text><Text style={s.rating}>★ {v.rating}</Text></View>
          <Text style={s.sectionLabel}>Pros:</Text>
          {v.pros.map((p, j) => <Text key={j} style={s.pro}>+ {p}</Text>)}
          <Text style={s.sectionLabel}>Cons:</Text>
          {v.cons.map((c, j) => <Text key={j} style={s.con}>− {c}</Text>)}
          <TouchableOpacity style={s.visitBtn}><Text style={s.visitText}>Visit Site →</Text></TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 24, paddingTop: 60, backgroundColor: "#f8fafc", alignItems: "center" },
  icon: { fontSize: 40, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: "700", color: "#0f172a" },
  sub: { color: "#64748b", fontSize: 14, marginTop: 4 },
  card: { margin: 12, marginBottom: 0, backgroundColor: "#fff", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#e2e8f0" },
  row: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 6 },
  rank: { fontSize: 24 },
  name: { fontWeight: "700", color: "#0f172a", fontSize: 16, flex: 1 },
  badgeWrap: { backgroundColor: "#f3e8ff", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 999 },
  badgeText: { color: "#7c3aed", fontSize: 11, fontWeight: "600" },
  tier: { backgroundColor: "#f0fdf4", color: "#16a34a", paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, fontSize: 12, fontWeight: "600" },
  rating: { color: "#f59e0b", fontSize: 14, fontWeight: "600" },
  sectionLabel: { fontWeight: "600", color: "#0f172a", fontSize: 13, marginTop: 8, marginBottom: 2 },
  pro: { color: "#16a34a", fontSize: 13, marginLeft: 8 },
  con: { color: "#ef4444", fontSize: 13, marginLeft: 8 },
  visitBtn: { backgroundColor: "#7c3aed", padding: 12, borderRadius: 999, alignItems: "center", marginTop: 12 },
  visitText: { color: "#fff", fontWeight: "700" },
});