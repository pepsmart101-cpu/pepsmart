import { View, Text, ScrollView, StyleSheet } from "react-native";

const myths = [
  { myth: "Peptides are just steroids.", reality: "Peptides are short amino acid chains that signal your body — completely different mechanism than steroids." },
  { myth: "If I take a GLP-1, I don't need to exercise.", reality: "Dangerous myth! Without exercise you lose muscle mass. Exercise is MORE important on peptides." },
  { myth: "Peptides are illegal.", reality: "Many are FDA-approved. Others are legal as research chemicals. Always consult a professional." },
  { myth: "Orals are just as good as injections.", reality: "Stomach enzymes destroy most peptides. Injections remain the gold standard for absorption." },
  { myth: "Once I start, I have to take them forever.", reality: "Most peptides are cycled. Use them as a bridge to build sustainable habits." },
  { myth: "All peptides are the same.", reality: "Purity varies from 70-99%. Always verify 3rd-party COAs." },
  { myth: "More is always better.", reality: "Peptides follow a U-shaped curve. Minimum effective dose is the goal." },
];

export default function MythsScreen() {
  return (
    <ScrollView style={s.container}>
      <View style={s.header}><Text style={s.icon}>🕵️‍♀️</Text><Text style={s.title}>Myths vs. Reality</Text><Text style={s.sub}>Setting the record straight with science.</Text></View>
      {myths.map((m, i) => (
        <View key={i} style={s.card}>
          <View style={s.mythBadge}><Text style={s.badgeText}>MYTH</Text></View>
          <Text style={s.mythText}>"{m.myth}"</Text>
          <View style={s.sep} />
          <View style={s.realBadge}><Text style={s.realText}>REALITY</Text></View>
          <Text style={s.realityText}>{m.reality}</Text>
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
  mythBadge: { backgroundColor: "#fecaca", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 999, alignSelf: "flex-start", marginBottom: 8 },
  badgeText: { color: "#dc2626", fontSize: 11, fontWeight: "700" },
  mythText: { color: "#0f172a", fontWeight: "600", fontSize: 15, fontStyle: "italic" },
  sep: { height: 1, backgroundColor: "#e2e8f0", marginVertical: 12 },
  realBadge: { backgroundColor: "#bbf7d0", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 999, alignSelf: "flex-start", marginBottom: 8 },
  realText: { color: "#16a34a", fontSize: 11, fontWeight: "700" },
  realityText: { color: "#475569", fontSize: 14, lineHeight: 20 },
});