import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface QuestionProps {
  questionText: string;
  answers: string[];
}

const Question: React.FC<QuestionProps> = ({ questionText, answers }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questionText}</Text>
      {answers.map((answer, index) => (
        <Text key={index} style={styles.answerText}>
          {answer}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  answerText: {
    fontSize: 18,
    marginBottom: 5,
    color: "#555",
  },
});

export default Question;
