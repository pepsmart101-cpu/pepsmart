import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const providers = [
  { name: "Vitality Health & Wellness", type: "Weight Loss Clinic", rating: 4.8, tags: ["GLP-1 Therapy", "Bloodwork"], badge: "Verified" },
  { name: "Peak Performance", type: "Longevity Center", rating: 4.9, tags: ["NAD+", "Growth Peptides"], badge: "Verified" },
  { name: "Austin MedSpa", type: "Medspa", rating: 4.6, tags: ["GLP-1", "IV Therapy"], badge: "Premium" },
  { name: "Integrative Wellness Co.", type: "Coach", rating: 4.7, tags: ["Diet", "Protocol Design"], badge: "Verified" },
];

export default function LocatorScreen() {
  const [zip, setZip] = useState("78701");
  return (
    <ScrollView style={s.container}>
      <View style={s.hero}><Text style={s.icon}>🏥</Text><Text style={s.title}>Service Locator</Text><Text style={s.sub}>Find trusted providers near you.</Text>
        <View style={s.search}><TextInput style={s.input} value={zip} onChangeText={setZip} placeholder="ZIP code" /><TouchableOpacity style={s.searchBtn}><Text style={s.searchText}>Search</Text></TouchableOpacity></View>
      </View>
      {providers.map((p, i) => (
        <View key={i} style={s.card}>
          <View style={s.row}><Text style={s.name}>{p.name}</Text><View style={s.badgeW}><Text style={s.badge}>{p.badge}</Text></View></View>
          <Text style={s.type}>{p.type}</Text>
          <Text style={s.rating}>★ {p.rating}</Text>
          <View style={s.tags}>{p.tags.map((t, j) => <Text key={j} style={s.tag}>{t}</Text>)}</View>
        </View>
      ))}
    </ScrollView>
  );
}
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  hero: { padding: 24, paddingTop: 60, backgroundColor: "#7c3aed", alignItems: "center" },
  icon: { fontSize: 40, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: "700", color: "#fff" },
  sub: { color: "#c4b5fd", fontSize: 14, marginTop: 4 },
  search: { flexDirection: "row", gap: 8, marginTop: 16, backgroundColor: "#fff", borderRadius: 999, padding: 4, paddingLeft: 16, width: "100%" },
  input: { flex: 1, fontSize: 14, color: "#0f172a" },
  searchBtn: { backgroundColor: "#7c3aed", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 999 },
  searchText: { color: "#fff", fontWeight: "700", fontSize: 13 },
  card: { margin: 12, marginBottom: 0, backgroundColor: "#fff", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#e2e8f0" },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  name: { fontWeight: "700", color: "#0f172a", fontSize: 15, flex: 1 },
  badgeW: { backgroundColor: "#dcfce7", paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999 },
  badge: { color: "#16a34a", fontSize: 11, fontWeight: "600" },
  type: { color: "#64748b", fontSize: 13, marginTop: 2 },
  rating: { color: "#f59e0b", fontSize: 14, fontWeight: "600", marginTop: 4 },
  tags: { flexDirection: "row", gap: 6, marginTop: 8, flexWrap: "wrap" },
  tag: { backgroundColor: "#f1f5f9", color: "#475569", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 999, fontSize: 12 },
});