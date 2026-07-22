import { sendChatEmail } from "../utils/sendChatEmail";
import SuccessScreen from "./SuccessScreen";
import SummaryCard from "./SummaryCard";
import QuickReplies from "./QuickReplies";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

import WelcomeScreen from "./WelcomeScreen";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import useChatbot from "../hooks/useChatbot";

const ChatWindow = ({ closeChat }) => {

  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    currentQuestion,
    submitAnswer,
    finished,
    startChat,
     answers,
  } = useChatbot();

  const handleSend = (answer) => {
  // user message
  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      message: answer,
    },
  ]);

  submitAnswer(answer);
};
  useEffect(() => {

    if (finished) {

        setShowSummary(true);

    }

}, [finished]);


useEffect(() => {
  if (currentQuestion) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        message: currentQuestion.question,
      },
    ]);
  }
}, [currentQuestion]);

const COMPANY_PHONE = "971501234567";
const COMPANY_EMAIL = "info@homeloanzllc.com";

const openWhatsApp = () => {

  const message = `Hello HomeLoanz LLC FZ,

I'd like to inquire about a mortgage.

Name: ${answers.name}

Phone: ${answers.phone}

Email: ${answers.email}

Resident: ${answers.resident}

Mortgage Purpose: ${answers.purpose}

Monthly Income: ${answers.income}

Thank you.`;

  window.open(
    `https://wa.me/${COMPANY_PHONE}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

const openEmail = async () => {

  const success = await sendChatEmail(answers);

  if (success) {
    alert("✅ Thank you! Your inquiry has been sent successfully.");
  } else {
    alert("❌ Failed to send inquiry.");
  }

};

  return (
    <div className="flex h-full flex-col">

      {/* Header */}
      <div className="flex items-center justify-between bg-[#0B3C5D] px-5 py-4 text-white">

        <div>
          <h2 className="text-xl font-bold">
            🏠 HomeLoanz Assistant
          </h2>

          <div className="mt-1 flex items-center gap-2 text-sm text-white/80">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            Online
          </div>
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
      onEdit={() => {
        setShowSummary(false);
      }}
      onWhatsapp={() => {
        setShowSuccess(true);
      }}
      onEmail={() => {
        setShowSuccess(true);
      }}
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
    <ChatInput onSend={handleSend} />
  ) : (
    <QuickReplies
      options={currentQuestion.options}
      onSelect={handleSend}
    />
  ))
}

        </>

      )}

    </div>
  );
};

export default ChatWindow;