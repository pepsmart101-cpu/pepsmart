import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const episodes = [
  { day: "Mon", theme: "Beginner Education", emoji: "📚", title: "Peptides 101", duration: "4:32", today: true },
  { day: "Tue", theme: "Deep Dives & Research", emoji: "🔬", title: "GLP-1 Deep Dive", duration: "5:15" },
  { day: "Wed", theme: "Myth-Busting", emoji: "🕵️‍♀️", title: "5 Myths That Won't Die", duration: "4:45" },
  { day: "Thu", theme: "Protocol Spotlight", emoji: "💉", title: "BPC-157 Powerhouse", duration: "4:50" },
  { day: "Fri", theme: "Lifestyle & Optimization", emoji: "⚡", title: "The Optimization Triad", duration: "4:20" },
  { day: "Sat", theme: "Weekend Wisdom", emoji: "🧠", title: "NAD+ & Longevity", duration: "5:00" },
  { day: "Sun", theme: "Community Q&A", emoji: "👥", title: "Your Questions Answered", duration: "5:30" },
];

export default function PodcastScreen() {
  return (
    <ScrollView style={s.container}>
      <View style={s.hero}>
        <View style={s.glow} />
        <Text style={s.heroIcon}>🎙️</Text>
        <Text style={s.heroTitle}>Let's Talk Peps</Text>
        <Text style={s.heroSub}>Your daily dose of peptide knowledge</Text>
      </View>

      {/* Player */}
      <View style={s.playerWrap}>
        <View style={s.player}>
          <TouchableOpacity style={s.playBtn}><Ionicons name="play" size={28} color="white" /></TouchableOpacity>
          <View style={s.playInfo}>
            <Text style={s.playDay}>Monday • 4:32</Text>
            <Text style={s.playTitle}>Peptides 101: What They Are & How They Work</Text>
            <View style={s.progress}><View style={s.progressFill} /></View>
          </View>
        </View>
      </View>

      {/* Hosts */}
      <View style={s.hostsSection}>
        <Text style={s.sectionTitle}>Meet the Hosts</Text>
        {[
          { name: "Dr. Sarah Chen", role: "Lead Researcher", emoji: "👩‍🔬" },
          { name: "Keisha Williams", role: "Health Coach", emoji: "👩‍🏫" },
          { name: "Minh Nguyen", role: "Biohacker", emoji: "👨‍🔬" },
        ].map((h, i) => (
          <View key={i} style={s.hostCard}>
            <Text style={s.hostEmoji}>{h.emoji}</Text>
            <View><Text style={s.hostName}>{h.name}</Text><Text style={s.hostRole}>{h.role}</Text></View>
          </View>
        ))}
      </View>

      {/* Episodes */}
      <View style={s.episodesSection}>
        <Text style={s.sectionTitle}>This Week's Episodes</Text>
        {episodes.map((ep, i) => (
          <TouchableOpacity key={i} style={[s.epCard, ep.today && s.epToday]}>
            <View style={s.epLeft}>
              <Text style={s.epDay}>{ep.day}</Text>
              <Text style={s.epEmoji}>{ep.emoji}</Text>
            </View>
            <View style={s.epCenter}>
              <Text style={s.epTheme}>{ep.theme}</Text>
              <Text style={s.epTitle}>{ep.title}</Text>
              <Text style={s.epDuration}>{ep.duration}</Text>
            </View>
            <TouchableOpacity style={s.epPlay}><Ionicons name="play-circle" size={28} color="#7c3aed" /></TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  hero: { backgroundColor: "#09090b", padding: 24, paddingTop: 60, alignItems: "center", overflow: "hidden", position: "relative" },
  glow: { position: "absolute", top: -30, width: 200, height: 200, borderRadius: 100, backgroundColor: "rgba(139,92,246,0.15)" },
  heroIcon: { fontSize: 48, marginBottom: 8 },
  heroTitle: { fontSize: 32, fontWeight: "900", color: "#f8fafc" },
  heroSub: { color: "#a1a1aa", fontSize: 14, marginTop: 4 },
  playerWrap: { padding: 12, marginTop: -20 },
  player: { flexDirection: "row", alignItems: "center", gap: 12, backgroundColor: "#fff", borderRadius: 16, padding: 14, borderWidth: 1, borderColor: "#e2e8f0", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12 },
  playBtn: { width: 52, height: 52, borderRadius: 26, backgroundColor: "#7c3aed", justifyContent: "center", alignItems: "center" },
  playInfo: { flex: 1 },
  playDay: { color: "#7c3aed", fontSize: 11, fontWeight: "600", textTransform: "uppercase" },
  playTitle: { color: "#0f172a", fontWeight: "600", fontSize: 14, marginVertical: 4 },
  progress: { height: 4, backgroundColor: "#e2e8f0", borderRadius: 2, marginTop: 4 },
  progressFill: { width: "40%", height: 4, backgroundColor: "#7c3aed", borderRadius: 2 },
  hostsSection: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#0f172a", marginBottom: 12 },
  hostCard: { flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 10 },
  hostEmoji: { fontSize: 32 },
  hostName: { fontWeight: "600", color: "#0f172a", fontSize: 14 },
  hostRole: { color: "#64748b", fontSize: 12 },
  episodesSection: { padding: 20 },
  epCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 16, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: "#e2e8f0" },
  epToday: { borderColor: "#c4b5fd", backgroundColor: "#f5f3ff" },
  epLeft: { alignItems: "center", width: 48 },
  epDay: { fontWeight: "700", color: "#7c3aed", fontSize: 14 },
  epEmoji: { fontSize: 20, marginTop: 2 },
  epCenter: { flex: 1, marginLeft: 12 },
  epTheme: { color: "#94a3b8", fontSize: 11, fontWeight: "600", textTransform: "uppercase" },
  epTitle: { color: "#0f172a", fontWeight: "600", fontSize: 14 },
  epDuration: { color: "#94a3b8", fontSize: 12, marginTop: 2 },
  epPlay: { padding: 4 },
});