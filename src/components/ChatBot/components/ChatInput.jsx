import { useState } from "react";
import { SendHorizontal } from "lucide-react";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  };

  return (
    <div className="border-t bg-white p-4">

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Type your answer..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSend}
          className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-700"
        >
          <SendHorizontal size={20} />
        </button>

      </div>

    </div>
  );
};

export default ChatInput;