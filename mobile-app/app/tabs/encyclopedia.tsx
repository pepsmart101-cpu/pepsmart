import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const categories = [
  { slug: "glp1s", title: "GLP-1s", emoji: "🦸‍♂️", desc: "Tirzepatide, Semaglutide" },
  { slug: "growth_repair", title: "Growth & Repair", emoji: "🛠️", desc: "BPC-157, TB-500, GHK-Cu" },
  { slug: "longevity", title: "Longevity", emoji: "⏳", desc: "NAD+, MOTS-C, Glutathione" },
  { slug: "cognitive", title: "Cognitive", emoji: "🧠", desc: "Noopept, Semax, Selank" },
  { slug: "skin", title: "Skin & Aesthetics", emoji: "✨", desc: "Glow, Melanotan, PT-141" },
  { slug: "immune", title: "Immune", emoji: "🛡️", desc: "Thymosin Alpha 1, LL-37" },
  { slug: "metabolism", title: "Metabolism", emoji: "🔥", desc: "AOD 9604, SLU-PP-332" },
  { slug: "specialty", title: "Specialty", emoji: "⭐", desc: "Epithalon, Kisspeptin" },
];

export default function EncyclopediaScreen() {
  return (
    <ScrollView style={s.container}>
      <View style={s.header}><Text style={s.headerIcon}>📚</Text><Text style={s.title}>Peptide Encyclopedia</Text><Text style={s.sub}>Every peptide, explained simply.</Text></View>
      <View style={s.grid}>
        {categories.map((c, i) => (
          <TouchableOpacity key={i} style={s.card}>
            <Text style={s.cardEmoji}>{c.emoji}</Text>
            <Text style={s.cardTitle}>{c.title}</Text>
            <Text style={s.cardDesc}>{c.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 24, paddingTop: 60, backgroundColor: "#f8fafc", alignItems: "center" },
  headerIcon: { fontSize: 40, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: "700", color: "#0f172a" },
  sub: { color: "#64748b", fontSize: 14, marginTop: 4 },
  grid: { flexDirection: "row", flexWrap: "wrap", padding: 12, gap: 12 },
  card: { width: "46%", backgroundColor: "#fff", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#e2e8f0" },
  cardEmoji: { fontSize: 32, marginBottom: 8 },
  cardTitle: { fontWeight: "700", color: "#0f172a", fontSize: 15 },
  cardDesc: { color: "#64748b", fontSize: 12, marginTop: 4 },
});