import { useState } from "react";
import { X } from "lucide-react";

import WelcomeScreen from "./WelcomeScreen";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickReplies from "./QuickReplies";
import SummaryCard from "./SummaryCard";
import SuccessScreen from "./SuccessScreen";

import useChatbot from "../hooks/useChatbot";

import { sendChatEmail } from "../utils/sendChatEmail";

const COMPANY_PHONE = "971523030180";

export default function ChatWindow({ closeChat }) {
  const {
    startChat,

    currentQuestion,

    submitAnswer,

    answers,

    messages,

    finished,

    showSummary,

    showSuccess,

    setShowSummary,

    setShowSuccess,

    recommendation,
  } = useChatbot();

  const [started, setStarted] = useState(false);

  //-------------------------------------
  // WhatsApp
  //-------------------------------------

  const openWhatsApp = () => {

  const message = `🏠 *NEW MORTGAGE INQUIRY*

━━━━━━━━━━━━━━━━━━

👤 *Customer Details*

• Name:
${answers.name}

• Phone:
${answers.phone}

• Email:
${answers.email}

━━━━━━━━━━━━━━━━━━

🏡 *Mortgage Information*

Resident:
${answers.resident}

Mortgage Purpose:
${answers.purpose}

Employment Type:
${answers.employment}

Monthly Income:
AED ${answers.income}

Property Value:
AED ${answers.propertyValue}

Down Payment:
${answers.downPayment}

Existing Home Loan:
${answers.existingLoan}

━━━━━━━━━━━━━━━━━━

🤖 *AI Mortgage Assessment*

${recommendation?.title || "Mortgage Inquiry"}

${recommendation?.message || ""}

━━━━━━━━━━━━━━━━━━

Thank you for choosing *HomeLoanz LLC FZ*.`;

  window.open(
    `https://wa.me/${COMPANY_PHONE}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

  //-------------------------------------
  // Email
  //-------------------------------------

  const openEmail = async () => {
    const success = await sendChatEmail(
  answers,
  recommendation
);

if (success) {
  alert("✅ Your inquiry has been sent successfully!");
} else {
  alert("❌ Something went wrong. Please try again.");
}
  };

  //-------------------------------------

  return (
    <div className="flex h-full flex-col">

      {/* Header */}

      <div className="flex items-center justify-between bg-[#0B3C5D] px-5 py-4 text-white">

        <div>
          <h2 className="text-xl font-bold">
            🏠 HomeLoanz Assistant
          </h2>

          <p className="text-sm text-white/70">
            Online
          </p>
        </div>

        <button
          onClick={closeChat}
          className="rounded-lg p-2 hover:bg-white/10"
        >
          <X size={22} />
        </button>

      </div>

      {/* Body */}

      {!started ? (
        <WelcomeScreen
          onStart={() => {
            setStarted(true);
            startChat();
          }}
        />
      ) : (
        <>
          <div className="flex-1 overflow-y-auto bg-white p-5">

            {showSuccess ? (
              <SuccessScreen
                onWhatsapp={openWhatsApp}
                onEmail={openEmail}
              />
            ) : showSummary ? (
              <SummaryCard
                answers={answers}
                recommendation={recommendation}
                onEdit={() => setShowSummary(false)}
                onWhatsapp={() => setShowSuccess(true)}
                onEmail={() => setShowSuccess(true)}
              />
            ) : (
              messages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  sender={msg.sender}
                  message={msg.message}
                />
              ))
            )}

          </div>

          {!finished &&
            (currentQuestion?.type === "text" ? (
              <ChatInput
                onSend={submitAnswer}
              />
            ) : (
              <QuickReplies
                options={currentQuestion.options}
                onSelect={submitAnswer}
              />
            ))}
        </>
      )}
    </div>
  );
}