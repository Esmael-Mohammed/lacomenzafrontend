import React, { useState } from 'react';

const AIChatSupport = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I assist you today?", sender: "bot" },
  ]);
  const [userMessage, setUserMessage] = useState("");

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const sendMessage = () => {
    if (userMessage.trim() === "") return;

    const newMessages = [...messages, { text: userMessage, sender: "user" }];
    setMessages(newMessages);
    setUserMessage("");

    // Simulate bot response (replace this with an API call for real AI response)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Let me help you with that!", sender: "bot" },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg focus:outline-none hover:bg-primary-dark transition"
      >
        💬 Chat
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div
          className="fixed bottom-20 right-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col overflow-hidden border border-gray-300"
        >
          {/* Header */}
          <div className="bg-primary text-white p-3 font-semibold">
            Custmore Support
            <button
              onClick={toggleChat}
              className="float-right bg-transparent text-white font-bold text-xl focus:outline-none"
            >
              ×
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow p-4 overflow-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-gray-300">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMessage}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            />
            <button
              onClick={sendMessage}
              className="mt-2 w-full bg-primary text-white py-2 rounded-md focus:outline-none hover:bg-primary-dark transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatSupport;
