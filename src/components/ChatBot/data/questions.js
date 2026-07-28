const questions = [
  {
    id: "name",
    question: "👋 Welcome to HomeLoanz LLC! What's your full name?",
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
    question: "🏠 Are you currently a UAE Resident?",
    type: "buttons",
    options: [
      "UAE Resident",
      "Non-Resident",
    ],
  },

  {
    id: "purpose",
    question: "🏡 What are you looking for today?",
    type: "buttons",
    options: [
      "Buy First Home",
      "Buy Investment Property",
      "Mortgage Refinance",
      "Mortgage Transfer",
    ],
  },

  {
    id: "employment",
    question: "💼 What's your employment status?",
    type: "buttons",
    options: [
      "Salaried",
      "Self-Employed",
    ],
  },

  {
    id: "income",
    question: "💰 What's your monthly income (AED)?",
    type: "text",
  },

  {
    id: "propertyValue",
    question: "🏠 Approximate property value (AED)?",
    type: "text",
  },

  {
    id: "downPayment",
    question: "💵 How much down payment can you make (AED or %)?",
    type: "text",
  },

  {
    id: "existingLoan",
    question: "🏦 Do you currently have any existing home loan?",
    type: "buttons",
    options: [
      "Yes",
      "No",
    ],
  },
];

export default questions;