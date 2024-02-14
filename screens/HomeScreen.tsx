import React from "react";
import { View, Button, StyleSheet } from "react-native";

const HomeScreen: React.FC<any> = ({ navigation }) => {
  const startQuiz = () => {
    navigation.navigate("Questions");
  };

  return (
    <View style={styles.container}>
      <Button title="Start Quiz" onPress={startQuiz} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
