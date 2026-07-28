import { useState } from "react";
import questions from "../data/questions";

export default function useChatbot() {
  // Current question
  const [step, setStep] = useState(-1);

  // User answers
  const [answers, setAnswers] = useState({});

  // Chat messages
  const [messages, setMessages] = useState([]);

  // UI states
  const [showSummary, setShowSummary] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Start chatbot
  const startChat = () => {
    setStep(0);

    setMessages([
      {
        sender: "bot",
        message: questions[0].question,
      },
    ]);
  };

  // Submit answer
  const submitAnswer = (answer) => {
    if (step < 0 || step >= questions.length) return;

    const current = questions[step];

    // Save answer
    setAnswers((prev) => ({
      ...prev,
      [current.id]: answer,
    }));

    // Save user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: answer,
      },
    ]);

    const nextStep = step + 1;

    if (nextStep >= questions.length) {
      setStep(nextStep);
      setShowSummary(true);
      return;
    }

    setStep(nextStep);

    // Add next bot question
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        message: questions[nextStep].question,
      },
    ]);
  };

  // Restart chatbot
  const restart = () => {
    setStep(-1);
    setAnswers({});
    setMessages([]);
    setShowSummary(false);
    setShowSuccess(false);
  };

  // Back button (optional)
  const goBack = () => {
    if (step <= 0) return;

    const previousStep = step - 1;

    setStep(previousStep);

    setAnswers((prev) => {
      const updated = { ...prev };
      delete updated[questions[step].id];
      return updated;
    });

    // Remove last user + bot messages
    setMessages((prev) => prev.slice(0, -2));
  };

  // Progress %
  const progress =
    step < 0
      ? 0
      : Math.round((step / questions.length) * 100);

  // ---------- AI Recommendation ----------
  const recommendation = (() => {
    if (!answers.income)
      return {
        title: "",
        color: "",
        message: "",
      };

    const income = Number(
      String(answers.income).replace(/,/g, "")
    );

    if (income >= 25000) {
      return {
        title: "Excellent Profile",
        color: "green",
        message:
          "Based on the information provided, your profile appears strong for mortgage options. Our advisors can help you compare the most competitive rates.",
      };
    }

    if (income >= 15000) {
      return {
        title: "Good Profile",
        color: "blue",
        message:
          "You appear eligible for several mortgage solutions. Our mortgage experts will help identify the most suitable lender.",
      };
    }

    return {
      title: "Let's Review Together",
      color: "orange",
      message:
        "Your eligibility depends on additional factors. Our mortgage specialists will review your profile and recommend suitable options.",
    };
  })();

  return {
    // state
    step,
    answers,
    messages,

    currentQuestion: questions[step],

    finished: step >= questions.length,

    progress,

    showSummary,

    showSuccess,

    recommendation,

    // actions
    startChat,
    submitAnswer,

    restart,

    goBack,

    setShowSummary,

    setShowSuccess,
  };
}