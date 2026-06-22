import { View, Text, ScrollView, StyleSheet } from "react-native";

const news = [
  { title: "Retatrutide Phase 3 Data Exceeds Expectations", source: "Nature Medicine", date: "2026-05-27", category: "Research Breakthrough" },
  { title: "FDA Approves New Oral GLP-1 Formulation", source: "FDA", date: "2026-05-25", category: "Regulatory" },
  { title: "BPC-157 Shows Promise in TBI Study", source: "J Neurotrauma", date: "2026-05-22", category: "Research" },
  { title: "NAD+ Precursors Enter Phase 2 Longevity Trials", source: "Aging Cell", date: "2026-05-20", category: "Clinical Trial" },
  { title: "MOTS-C Linked to Improved Insulin Sensitivity", source: "Cell Metabolism", date: "2026-05-18", category: "New Study" },
  { title: "GHK-Cu Hair Growth Patent Approved", source: "Dermatol Science", date: "2026-05-15", category: "Industry News" },
  { title: "Semax & Selank Gain Global Interest", source: "Neuropharmacology", date: "2026-05-12", category: "Trending" },
  { title: "Regulatory Crackdown on Unlicensed Vendors", source: "Regulatory Watch", date: "2026-05-10", category: "Regulatory" },
];

const topics = [
  { title: "Metabolic Health", icon: "🔥", studies: ["SURMOUNT Trials", "Tirzepatide vs Semaglutide", "Retatrutide Phase 3"] },
  { title: "Tissue Repair", icon: "🛠️", studies: ["BPC-157 & Tendon Healing", "TB-500 Regeneration", "GHK-Cu Wound Healing"] },
  { title: "Neuro-Regeneration", icon: "🧠", studies: ["BDNF & Cognitive Peptides", "Noopept Protection", "DSIP & Sleep"] },
  { title: "Longevity", icon: "⏳", studies: ["NAD+ & Aging", "MOTS-C Metabolism", "SS-31 Mitochondrial"] },
];

export default function LibraryScreen() {
  return (
    <ScrollView style={s.container}>
      <View style={s.header}><Text style={s.icon}>📚</Text><Text style={s.title}>Research Library</Text><Text style={s.sub}>Latest studies simplified.</Text></View>

      <View style={s.section}><Text style={s.sectionTitle}>Latest Updates</Text>
        {news.slice(0, 4).map((n, i) => (
          <View key={i} style={s.card}>
            <View style={s.cardRow}><Text style={s.category}>{n.category}</Text><Text style={s.date}>{n.date}</Text></View>
            <Text style={s.newsTitle}>{n.title}</Text>
            <Text style={s.newsSource}>{n.source}</Text>
          </View>
        ))}
      </View>

      <View style={s.section}><Text style={s.sectionTitle}>Research by Topic</Text>
        {topics.map((t, i) => (
          <View key={i} style={s.topicCard}>
            <Text style={s.topicIcon}>{t.icon} {t.title}</Text>
            {t.studies.map((s, j) => <Text key={j} style={s.study}>→ {s}</Text>)}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 24, paddingTop: 60, backgroundColor: "#f8fafc", alignItems: "center" },
  icon: { fontSize: 40, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: "700", color: "#0f172a" },
  sub: { color: "#64748b", fontSize: 14, marginTop: 4 },
  section: { padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#0f172a", marginBottom: 12 },
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: "#e2e8f0" },
  cardRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 4 },
  category: { color: "#7c3aed", fontSize: 11, fontWeight: "600" },
  date: { color: "#94a3b8", fontSize: 11 },
  newsTitle: { fontWeight: "600", color: "#0f172a", fontSize: 14 },
  newsSource: { color: "#94a3b8", fontSize: 12, marginTop: 2 },
  topicCard: { backgroundColor: "#f8fafc", borderRadius: 12, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: "#e2e8f0" },
  topicIcon: { fontWeight: "700", fontSize: 15, color: "#0f172a", marginBottom: 6 },
  study: { color: "#475569", fontSize: 13, marginLeft: 8, marginTop: 2 },
});