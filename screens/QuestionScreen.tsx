import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { shuffleArray } from "../utils";

import { Question } from "../models/Question";
import { initialQuestions } from "../data/questionsData";

const QuestionScreen: React.FC<any> = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<any[]>(initialQuestions);

  useEffect(() => {
    const shuffledQuestions = initialQuestions.map((question: any) => ({
      ...question,
      choices: shuffleArray([...question.choices]),
    }));
    setQuestions(shuffleArray(shuffledQuestions));
  }, []);

  const checkAnswer = (selectedAnswer: string) => {
    console.log("🚀 ~ checkAnswer ~ selectedAnswer:", selectedAnswer);
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate("Leaderboard", { score });
    }
  };

  return (
    <View style={styles.container}>
      <Text>{questions[currentQuestionIndex]?.text}</Text>
      {questions[currentQuestionIndex]?.choices.map(
        (choice: string, index: any) => (
          <Button
            key={index}
            title={choice}
            onPress={() => checkAnswer(choice)}
          />
        )
      )}
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

export default QuestionScreen;
