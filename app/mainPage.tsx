import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button } from "../components/Button";
import { Flame, BarChart3, CalendarCheck } from "lucide-react"; // Icons (optional)
import { useRouter } from "expo-router";

const router = useRouter();


export default function MainPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>C</Text>
          </View>
          <Text style={styles.appTitle}>My work</Text>
        </View>
      </View>

      <View style={styles.main}>
  <Text style={styles.sectionHeading}>Dashboard</Text>
  <View style={styles.buttonWrapper}>
    <Button
      title="Start"
      onPress={() => {
        router.push("/gameScreen");
      }}
    />
  </View>
</View>

      <View style={styles.legalRow}>
        <Text style={styles.legalText}>Terms</Text>
        <Text style={styles.legalText}>•</Text>
        <Text style={styles.legalText}>Privacy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // black background
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  appTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "#FFF",
  },
  iconButton: {
    padding: 10,
    borderRadius: 12,
  },
  iconText: {
    fontSize: 18,
    color: "#FFF",
  },
  main: {
    flex: 1,
    padding: 20,
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 16,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#222",
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  progressWrapper: {
    marginBottom: 10,
  },
  progressTrack: {
    height: 8,
    backgroundColor: "#333",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    width: "10%",
    height: "100%",
    backgroundColor: "#3B82F6",
  },
  progressLabel: {
    color: "#AAA",
    fontSize: 12,
    marginTop: 4,
  },
  buttonWrapper: {
    marginTop: 10,
  },
  legalRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
    paddingBottom: 12,
  },
  legalText: {
    color: "#666",
    fontSize: 13,
  },
});
