import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={s.container}>
      {/* Hero */}
      <View style={s.hero}>
        <Text style={s.heroBadge}>🧬 New: Peptide Encyclopedia</Text>
        <Text style={s.heroTitle}>Peptides made <Text style={s.gradient}>simple</Text>, visual, and fun</Text>
        <Text style={s.heroSub}>Cartoon characters break down timelines, side effects, costs, and myths.</Text>
        <View style={s.heroBtns}>
          <Link href="/(tabs)/products" asChild><TouchableOpacity style={s.btnPrimary}><Text style={s.btnText}>Browse Guides</Text></TouchableOpacity></Link>
          <Link href="/(tabs)/community" asChild><TouchableOpacity style={s.btnSecondary}><Text style={s.btnSecText}>Join Community →</Text></TouchableOpacity></Link>
        </View>
        <View style={s.badges}><Text style={s.badge}>⭐ Guides from $5.99</Text><Text style={s.badge}>👥 Community $10/mo</Text></View>
      </View>

      {/* Podcast Section */}
      <View style={s.podcastSection}>
        <View style={s.podcastGlow} />
        <Text style={s.podcastBadge}>🎙️ Podcast • Today's Episode</Text>
        <Text style={s.podcastTitle}>Let's Talk Peps</Text>
        <Text style={s.podcastSub}>Your daily dose of peptide knowledge</Text>
        <View style={s.podcastPlayer}>
          <TouchableOpacity style={s.playBtn}><Ionicons name="play" size={24} color="white" /></TouchableOpacity>
          <View style={s.playInfo}>
            <Text style={s.playTitle}>Peptides 101: What They Are</Text>
            <View style={s.progressBar}><View style={s.progressFill} /></View>
          </View>
        </View>
        <View style={s.hosts}>
          {["👩‍🔬", "👩‍🏫", "👨‍🔬"].map((h, i) => <Text key={i} style={s.hostAvatar}>{h}</Text>)}
          <Text style={s.hostNames}>Sarah, Keisha & Minh</Text>
        </View>
        <Link href="/(tabs)/podcast" asChild>
          <TouchableOpacity style={s.podcastLink}><Text style={s.podcastLinkText}>All Episodes →</Text></TouchableOpacity>
        </Link>
      </View>

      {/* Products */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Digital Guides & Tools</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.productScroll}>
          {[
            { title: "90-Day Starter Guide", price: "$29.95", emoji: "🚀" },
            { title: "Symptom Tracker", price: "$5.99", emoji: "📝" },
            { title: "Injection Calendar", price: "$7.99", emoji: "💉" },
            { title: "Protein Guide", price: "$7.99", emoji: "🥩" },
          ].map((p, i) => (
            <View key={i} style={s.productCard}>
              <Text style={s.productEmoji}>{p.emoji}</Text>
              <Text style={s.productTitle}>{p.title}</Text>
              <Text style={s.productPrice}>{p.price}</Text>
            </View>
          ))}
        </ScrollView>
        <Link href="/(tabs)/products" asChild><TouchableOpacity style={s.viewAll}><Text style={s.viewAllText}>View All Products →</Text></TouchableOpacity></Link>
      </View>

      {/* News */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Latest Peptide News</Text>
        {[
          { title: "Retatrutide Phase 3 Exceeds Expectations", source: "Nature Medicine" },
          { title: "FDA Approves Oral GLP-1 Formulation", source: "FDA" },
          { title: "NAD+ Longevity Trials Begin", source: "Aging Cell" },
        ].map((n, i) => (
          <View key={i} style={s.newsCard}>
            <Text style={s.newsTitle}>{n.title}</Text>
            <Text style={s.newsSource}>{n.source}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  hero: { padding: 24, paddingTop: 60, backgroundColor: "#f8fafc" },
  heroBadge: { backgroundColor: "#f3e8ff", color: "#7c3aed", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, fontSize: 12, fontWeight: "600", alignSelf: "flex-start", marginBottom: 12 },
  heroTitle: { fontSize: 32, fontWeight: "800", color: "#0f172a", lineHeight: 40 },
  gradient: { color: "#7c3aed" },
  heroSub: { color: "#64748b", fontSize: 16, marginTop: 12, lineHeight: 24 },
  heroBtns: { flexDirection: "row", gap: 12, marginTop: 20 },
  btnPrimary: { backgroundColor: "#7c3aed", paddingHorizontal: 24, paddingVertical: 14, borderRadius: 999 },
  btnText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  btnSecondary: { borderWidth: 1, borderColor: "#cbd5e1", paddingHorizontal: 24, paddingVertical: 14, borderRadius: 999 },
  btnSecText: { color: "#334155", fontWeight: "600", fontSize: 14 },
  badges: { flexDirection: "row", gap: 16, marginTop: 16 },
  badge: { color: "#64748b", fontSize: 13 },
  // Podcast
  podcastSection: { backgroundColor: "#09090b", padding: 24, marginTop: 0, position: "relative", overflow: "hidden" },
  podcastGlow: { position: "absolute", top: -40, left: -40, width: 160, height: 160, borderRadius: 80, backgroundColor: "rgba(139,92,246,0.15)" },
  podcastBadge: { color: "#a78bfa", fontSize: 12, fontWeight: "600", marginBottom: 8 },
  podcastTitle: { fontSize: 28, fontWeight: "900", color: "transparent", backgroundImage: "linear-gradient(to right, #a78bfa, #f472b6, #fbbf24)" as any },
  podcastSub: { color: "#a1a1aa", fontSize: 14, marginTop: 4 },
  podcastPlayer: { flexDirection: "row", alignItems: "center", gap: 12, marginTop: 16, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 16, padding: 12 },
  playBtn: { width: 48, height: 48, borderRadius: 24, backgroundColor: "#7c3aed", justifyContent: "center", alignItems: "center" },
  playInfo: { flex: 1 },
  playTitle: { color: "#fff", fontWeight: "600", fontSize: 14, marginBottom: 6 },
  progressBar: { height: 4, borderRadius: 2, backgroundColor: "#27272a" },
  progressFill: { width: "35%", height: 4, borderRadius: 2, backgroundColor: "#7c3aed" },
  hosts: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 12 },
  hostAvatar: { fontSize: 24 },
  hostNames: { color: "#71717a", fontSize: 12, marginLeft: 4 },
  podcastLink: { marginTop: 12, alignSelf: "flex-start" },
  podcastLinkText: { color: "#a78bfa", fontWeight: "600", fontSize: 13 },
  // Products
  section: { padding: 24 },
  sectionTitle: { fontSize: 22, fontWeight: "700", color: "#0f172a", marginBottom: 16 },
  productScroll: { marginBottom: 12 },
  productCard: { width: 160, backgroundColor: "#f8fafc", borderRadius: 16, padding: 16, marginRight: 12, borderWidth: 1, borderColor: "#e2e8f0" },
  productEmoji: { fontSize: 32, marginBottom: 8 },
  productTitle: { fontWeight: "600", color: "#0f172a", fontSize: 14, marginBottom: 4 },
  productPrice: { color: "#7c3aed", fontWeight: "700", fontSize: 16 },
  viewAll: { alignItems: "center", padding: 12 },
  viewAllText: { color: "#7c3aed", fontWeight: "600" },
  // News
  newsCard: { backgroundColor: "#f8fafc", borderRadius: 12, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: "#e2e8f0" },
  newsTitle: { fontWeight: "600", color: "#0f172a", fontSize: 14, marginBottom: 4 },
  newsSource: { color: "#94a3b8", fontSize: 12 },
});