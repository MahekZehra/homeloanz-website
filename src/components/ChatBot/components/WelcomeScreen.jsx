import { useEffect, useState } from "react";

const WelcomeScreen = ({ onStart }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 2600),
      setTimeout(() => setStep(4), 3800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex h-full flex-col px-6 py-8">

      <div className="flex-1 space-y-5">

        {step >= 1 && (
          <BotBubble>
            👋 Welcome to <strong>HomeLoanz LLC FZ!</strong>
          </BotBubble>
        )}

        {step >= 2 && (
          <BotBubble>
            Thank you for reaching out to us.
          </BotBubble>
        )}

        {step >= 3 && (
          <BotBubble>
            I'm your HomeLoanz Assistant and I'll help you find the best mortgage solution.
          </BotBubble>
        )}

        {step >= 4 && (
          <BotBubble>
            Let's begin with a few quick questions. It only takes about a minute. 😊
          </BotBubble>
        )}

      </div>

      {step >= 4 && (
        <button
          onClick={onStart}
          className="mt-6 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          ✨ Let's Get Started
        </button>
      )}
    </div>
  );
};

function BotBubble({ children }) {
  return (
    <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-[#EEF4FF] px-4 py-3 text-[15px] leading-7 text-slate-700 shadow-sm animate-fadeIn">
      {children}
    </div>
  );
}

export default WelcomeScreen;