import { useState } from "react";
import questions from "../data/questions";

export default function useChatbot() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState({});

  const startChat = () => {
    setStep(0);
  };

  const submitAnswer = (answer) => {
    // Safety check
    if (step >= questions.length) return;

    const current = questions[step];

    if (!current) return;

    setAnswers((prev) => ({
      ...prev,
      [current.id]: answer,
    }));

    setStep((prev) => prev + 1);
  };

  return {
    step,
    startChat,
    submitAnswer,
    answers,
    currentQuestion: questions[step],
    finished: step >= questions.length,
  };
}