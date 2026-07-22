import ChatWindow from "./components/ChatWindow";
import "./chatbot.css";

const ChatBot = ({ closeChat }) => {
  return (
    <div className="chatbot-container">
      <ChatWindow closeChat={closeChat} />
    </div>
  );
};

export default ChatBot;