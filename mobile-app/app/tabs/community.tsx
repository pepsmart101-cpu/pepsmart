import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const plans = [
  { name: "Monthly", price: 10, period: "/mo", features: ["Private community", "Weekly check-ins", "Q&A forum", "Progress sharing"] },
  { name: "Premium", price: 20, period: "/mo", features: ["All Monthly features", "Direct expert Q&A", "Protocol reviews", "Monthly check-in"], popular: true },
  { name: "Annual", price: 96, period: "/yr", features: ["All Premium features", "2 months free", "Priority scheduling", "Annual review"] },
];

export default function CommunityScreen() {
  return (
    <ScrollView style={s.container}>
      <View style={s.hero}>
        <Text style={s.heroIcon}>👥</Text>
        <Text style={s.badge}>Join 500+ Members</Text>
        <Text style={s.title}>The PepSmart Community</Text>
        <Text style={s.sub}>Accountability check-ins, expert Q&A, and real friendship-building.</Text>
      </View>
      {plans.map((p, i) => (
        <View key={i} style={[s.plan, p.popular && s.popular]}>
          {p.popular && <Text style={s.popularBadge}>Most Popular</Text>}
          <Text style={s.planName}>{p.name}</Text>
          <Text style={s.planPrice}>${p.price}<Text style={s.planPeriod}>{p.period}</Text></Text>
          {p.features.map((f, j) => <Text key={j} style={s.feature}>✓ {f}</Text>)}
          <TouchableOpacity style={[s.joinBtn, p.popular && s.joinBtnPopular]}><Text style={[s.joinText, p.popular && s.joinTextPopular]}>Join {p.name}</Text></TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  hero: { padding: 24, paddingTop: 60, backgroundColor: "#7c3aed", alignItems: "center" },
  heroIcon: { fontSize: 40, marginBottom: 8 },
  badge: { backgroundColor: "rgba(255,255,255,0.2)", color: "#fff", paddingHorizontal: 14, paddingVertical: 4, borderRadius: 20, fontSize: 12, fontWeight: "600", marginBottom: 12 },
  title: { fontSize: 28, fontWeight: "800", color: "#fff" },
  sub: { color: "#c4b5fd", fontSize: 14, marginTop: 8, textAlign: "center" },
  plan: { margin: 12, marginBottom: 0, backgroundColor: "#fff", borderRadius: 20, padding: 20, borderWidth: 1, borderColor: "#e2e8f0" },
  popular: { borderColor: "#c4b5fd", borderWidth: 2 },
  popularBadge: { backgroundColor: "#7c3aed", color: "#fff", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, fontSize: 11, fontWeight: "600", alignSelf: "center", marginBottom: 8, overflow: "hidden" },
  planName: { fontSize: 18, fontWeight: "700", color: "#0f172a" },
  planPrice: { fontSize: 36, fontWeight: "800", color: "#0f172a", marginTop: 8 },
  planPeriod: { fontSize: 14, fontWeight: "400", color: "#64748b" },
  feature: { color: "#475569", fontSize: 14, marginTop: 8 },
  joinBtn: { backgroundColor: "#f8fafc", padding: 14, borderRadius: 999, alignItems: "center", marginTop: 16, borderWidth: 1, borderColor: "#e2e8f0" },
  joinBtnPopular: { backgroundColor: "#7c3aed", borderColor: "#7c3aed" },
  joinText: { fontWeight: "700", color: "#334155" },
  joinTextPopular: { color: "#fff" },
});