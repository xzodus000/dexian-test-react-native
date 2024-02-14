import React from "react";
import { View, Text, StyleSheet } from "react-native";

const leaderboardData = [
  { name: "Player 1", score: 10 },
  { name: "Player 2", score: 8 },
  { name: "Player 3", score: 12 },
];

const LeaderboardScreen: React.FC<any> = ({ route }) => {
  const { score } = route.params;

  leaderboardData.push({ name: "You", score });

  leaderboardData.sort((a, b) => b.score - a.score);

  return (
    <View style={styles.container}>
      <Text>Your Score: {score}</Text>
      <Text style={styles.leaderboardTitle}>Leaderboard</Text>
      {leaderboardData.map((player, index) => (
        <View key={index} style={styles.playerRow}>
          <Text>{`${index + 1}. ${player.name}`}</Text>
          <Text>{`Score: ${player.score}`}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  leaderboardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  playerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 5,
  },
});

export default LeaderboardScreen;
