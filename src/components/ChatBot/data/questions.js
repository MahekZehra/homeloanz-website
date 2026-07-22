const questions = [
  {
    id: "name",
    question: "👋 What's your full name?",
    type: "text",
  },
  {
    id: "phone",
    question: "📱 What's your phone number?",
    type: "text",
  },
  {
    id: "email",
    question: "📧 What's your email address?",
    type: "text",
  },
  {
    id: "resident",
    question: "🏠 Are you a UAE Resident?",
    type: "buttons",
    options: [
      "UAE Resident",
      "Non-Resident",
    ],
  },
  {
    id: "purpose",
    question: "🎯 What type of mortgage do you need?",
    type: "buttons",
    options: [
      "Home Purchase",
      "Refinance",
      "Investment",
      "Mortgage Transfer",
    ],
  },
  {
    id: "income",
    question: "💰 What's your monthly income (AED)?",
    type: "text",
  },
];

export default questions;