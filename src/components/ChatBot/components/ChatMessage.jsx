const ChatMessage = ({ message, sender }) => {
  return (
    <div
      className={`flex mb-4 ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          sender === "user"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;