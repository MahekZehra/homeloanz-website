import "./chatbot.css";

const ChatBot = () => {
  return (
    <div className="chatbot-container">

      <div className="chatbot-header">
        <div>
          <h3>🏠 HomeLoanz Assistant</h3>
          <p>Online</p>
        </div>

        <button className="close-btn">
          ✕
        </button>
      </div>

      <div className="chatbot-body">

        <div className="bot-message">
          👋 Welcome to HomeLoanz LLC FZ!
        </div>

      </div>

      <div className="chatbot-footer">

        <input
          type="text"
          placeholder="Type your message..."
        />

        <button>
          Send
        </button>

      </div>

    </div>
  );
};

export default ChatBot;