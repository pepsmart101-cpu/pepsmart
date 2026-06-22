import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function PepSmartTabBar({ children }: { children: React.ReactNode }) {
  return (
    <View style={tabStyles.container}>
      <View style={tabStyles.inner}>{children}</View>
    </View>
  );
}

const tabStyles = StyleSheet.create({
  container: { backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#e2e8f0" },
  inner: { flexDirection: "row", paddingBottom: 4 },
});

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7c3aed",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: { backgroundColor: "#fff", borderTopColor: "#e2e8f0", height: 60, paddingBottom: 6 },
        tabBarLabelStyle: { fontSize: 10, fontWeight: "600" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }} />
      <Tabs.Screen name="encyclopedia" options={{ title: "Encyclopedia", tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} /> }} />
      <Tabs.Screen name="products" options={{ title: "Guides", tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} /> }} />
      <Tabs.Screen name="podcast" options={{ title: "Podcast", tabBarIcon: ({ color, size }) => <Ionicons name="mic" size={size} color={color} /> }} />
      <Tabs.Screen name="community" options={{ title: "Community", tabBarIcon: ({ color, size }) => <Ionicons name="people" size={size} color={color} /> }} />
      <Tabs.Screen name="sources" options={{ title: "Sources", tabBarIcon: ({ color, size }) => <Ionicons name="shield-checkmark" size={size} color={color} /> }} />
      <Tabs.Screen name="locator" options={{ title: "Locator", tabBarIcon: ({ color, size }) => <Ionicons name="location" size={size} color={color} /> }} />
      <Tabs.Screen name="myths" options={{ title: "Myths", tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} /> }} />
      <Tabs.Screen name="library" options={{ title: "Library", tabBarIcon: ({ color, size }) => <Ionicons name="library" size={size} color={color} /> }} />
    </Tabs>
  );
}